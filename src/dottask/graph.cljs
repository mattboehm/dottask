(ns dottask.graph
  (:require
    [dottask.help :as help]
    [dottask.core :as core]
    [reagent.core :as reagent]
    [clojure.string :as string]
    [clojure.set :as cset]
    [cljs.reader :as reader]
    [devtools.core :as devtools]
    [goog.dom :as dom]
    [goog.dom.classlist :as classlist]
    [goog.events :as events]
    [goog.html.SafeHtml :as shtml]
    [goog.string :as gstring]
    [historian.core :as hist]
    [dottask.macros :as macros]
    [tubax.core :as tbx])
  (:require-macros
    [historian.core :as hist]
    [dottask.macros :as macros]
   )
  (:import [goog.events EventType])
)
;; Constants
  (def ppi 72); pixels per inch
;; State
  ;All of the main application state is saved here
  ;undo/redo toggles between versions of this state
  (defonce app-state (reagent/atom {
    :id-counter 6 ;used to genereate unique id's for nodes/clusters
    :nodes [
      { :id "node1" :text "Drag things" }
      { :id "node2" :text "Make nodes" }
      { :id "node3" :text "Make links" }
      { :id "node4" :text "???" }
      { :id "node5" :text "Profit!" }
    ]
    :direction :down ;link direction. is a key of 'directions' constant.
    :clusters {} ;map of cluster id's to the clusters
    :selected-node-id nil
    :toggle-link-node-id nil 
    ;list of edges. Edges are a vec of [source_id target_id (label)]
    :deps [["node1" "node2"] ["node1" "node3"] ["node2" "node4"] ["node3" "node4"] ["node4" "node5"]]
    :dot nil ; graphviz representation
    :svg "" ;svg output of graphviz
    :gnodes nil;nodes extracted from graphviz
  }))
  ; Holds the state of the current ui (whether popups are visible, etc)
  ; This is separate from the app-state because we don't want undo/redo to toggle popups, only the graph state
  (defonce ui-state (reagent/atom {
    :bulk-add-modal-visible? false ;setting this to true makes the bulk add modal pop up
    :help-visible? false
    :resize-points nil ;while dragging the node resize handle, this stores size for the node (upper left corner is node's upper left, bottom right is position of the mouse). When this is set, a preview of the new node is rendered.
    ;:resize-points {:x {:min 162, :max 326}, :y {:min -452, :max -316}}
    :preview-points nil ;while dragging from a node, the start/end point of the drag. Used to show a preview of the action being taken (link/unlink, new node above/below, add/remove from cluster)
    :edit-node-id nil ;node whose text is currently being edited
    :connected-nodes #{}
  }))
;; Save/Load state
  ;keys of app-state to save in the hash. the rest can be computed from this.
  (def state-to-save [:id-counter :direction :clusters :nodes :deps])
  ;save the state to the url hash
  (defn save-hash [state]
    (aset js/window "location" "hash" (js/encodeURIComponent(pr-str(select-keys state state-to-save))))
    )
  (defn load-hash [state]
    ;load the state from the url hash (done on page load)
    (merge state (reader/read-string (js/decodeURIComponent (apply str (rest (aget js/window "location" "hash"))))))
    )
;; Make graph
  ; get a map of all collapsed cluster id's to their contents
  ; we want to figure out all the nodes/clusters that are inside a collapsed cluster
  ; to do this, we start with all the nodes/clusters not inside a cluster, then recursively descend inside those clusters' contents and keep going until we've walked everything
  (defn get-hidden-ids
    ([nodes clusters]
      ;we start by looking at all the nodes/clusters that are not inside another cluster, then will be recursively descending into clusters' contents
      (get-hidden-ids nodes clusters (group-by :cluster-id nodes) (group-by :cluster-id (vals clusters)) nil nil)
     )
    ;called once per each cluster
    ;cluster-id: current cluster being walked
    ;collapsed-parent-id if an ancestor to this cluster is collopsed, set to its id
    ([nodes clusters nodes-by-cluster-id clusters-by-cluster-id cluster-id collapsed-parent-id]
      (let [
        ;collapsed-id is the id of the collapsed parent (nil if no parent cluster is collapsed)
        collapsed-id (or collapsed-parent-id (when (and cluster-id (get-in clusters [cluster-id :collapsed])) cluster-id))
        ;map of all direct child nodes that are hidden (empty if not collapsed)
        hidden-children (if collapsed-id
                          {collapsed-id (map :id (get nodes-by-cluster-id cluster-id))}
                          {})
        ;map of all deeper descendands (chilren of child clusters) that are hidden
        nested-maps (map (fn[child-cluster] (get-hidden-ids nodes clusters nodes-by-cluster-id clusters-by-cluster-id (:id child-cluster) collapsed-id))  (get clusters-by-cluster-id cluster-id))
        ;combine direct/deeper children into one map
        result (apply merge-with concat hidden-children nested-maps)
       ]
        result
      )
     )
   )
  ;If a cluster is collapsed, all its contents are hidden and any edges to/from those contents should instead be linked to the node that represents the collapsed cluster
  (defn fix-deps [deps hidden-ids]
    ;rename-lookup maps node id's to the collapsed cluster id's
    (let [rename-lookup (core/invert-list-map hidden-ids)]
      (->>
        deps
        (map #(replace rename-lookup %))
        ;remove things that link the clusters to themselves
        (remove
          #(and
            (= (first %) (second %))
            (get hidden-ids (first %))
           )
         )
        (distinct)
        (into [])
       )
     )
   )
  ;Get dot representation of the node. label passed separately because sometimes we want to hide labels for nodes (don't want them on the svg layer of the graph)
  (defn node->dot
    ([node] (node->dot node ""))
    ([node label]
      (str (:id node) "[label=\"" (core/esc label) "\" color=\"" (or (:color node) "#666666")  "\" height=\"" (core/get-node-dim node :height) "\" width=\"" (core/get-node-dim node :width) "\"];")
     )
   )
  ;Get dot representation for a cluster and all of its contents
  ;if cluster-id is nil, returns representation of all nodes/clusters in the graph
  (defn cluster->dot [cluster-id clusters nodes-by-cluster-id clusters-by-cluster-id hidden-ids]
    (let [cluster (get clusters cluster-id)
          label (str (:text cluster) " ")]
    (if (:collapsed cluster)
      (node->dot {:id cluster-id} label)
      (str
        "\nsubgraph " (or cluster-id "root") "{\n" ;we put all the nodes/clusters inside a 'root' subgraph (mostly because it makes code cleaner)
        "label=\"" (core/esc label) "\";\n "
        "color=\"#666666\";\n "
        "fontsize=\"20\";\n "
        ;All the child clusters
        (clojure.string/join "\n" (map #(cluster->dot % clusters nodes-by-cluster-id clusters-by-cluster-id hidden-ids) (map :id (get clusters-by-cluster-id cluster-id))))
        "\n"
        ;All the nodes in this cluster
        (clojure.string/join ";\n" (map :id (get nodes-by-cluster-id cluster-id)))
        "}\n"
       )
     )
    )
   )
  ;Convert an entire graph to its dot representation
  ;direction: val from 'directions' global
  (defn graph->dot [nodes deps clusters direction labels?]
    (let [
          nodes-by-cluster-id (group-by :cluster-id nodes)
          clusters-by-cluster-id (group-by :cluster-id (vals clusters))
          hidden-ids (get-hidden-ids nodes clusters)
          hidden-id-set (set (flatten (vals hidden-ids)))
        ]
      (str
       "digraph \"\" {\n"
       "dpi=" ppi ";\n"
       "rankdir=" (:dot direction) ";\n" ;direction
       "node [label=\"\" shape=\"rect\" penwidth=\"4\"]\n" ;default node attributes
       "edge [color=\"#555555\"]\n" ;default edge attributes
       (cluster->dot nil clusters nodes-by-cluster-id clusters-by-cluster-id hidden-ids)
        (->>
          (concat
            (map #(node->dot % (if labels? (:text %) "")) (remove #(contains? hidden-id-set (:id %)) nodes))
            (map #(str (first %) "->" (second %) "[label=\"" (nth % 2 nil) "\"];") (fix-deps deps hidden-ids))
          )
          (interpose "\n")
          (apply str)
        )
        "}"
      )
    )
  )

  ;get the bounding box for points
  (defn get-points [cljdotnode]
    (let [points 
          (->> 
            cljdotnode
            :content
            second
            :attributes
            :points
           )
          ]
      (->>
        (string/split points #" ")
        (map #(string/split % #","))
        (map #(map js/parseInt %))
        (apply map vector);zip
        (map core/extent)
        (zipmap [:x :y])
       )
     )
   )
  (defn get-cljdot-id [item]
    (->>
      item
      :content
      first
      :content
      first
     )
   )
  ;extract nodes/clusters from the graphviz svg
  (defn svg->gdata [svg]
    (let [cljdot (tbx/xml->clj svg)
          items (->>
                   cljdot
                   :content
                   first
                   :content
                  )
          clusters (->>
            items
            (filter #(= (:class(:attributes %)) "cluster"))
            (map (fn [cluster]
                   {
                    :id (get-cljdot-id cluster)
                    :points (get-points cluster)
                    :type :cluster
                    }
                 ))
           )
          ]
        (into 
          (->>
            items
            (filter #(= (:class(:attributes %)) "node"))
            (map (fn [node]
                   {
                    :id (get-cljdot-id node)
                    :points (get-points node)
                    :type :node
                    }
                   ))
           )
          clusters)
    )
  )

  (defn dot->svg [dot]
    (string/replace;TODO replacing pt with px globally might be too general
      (js/Viz dot (js-obj "format" "svg"))
      #"pt\""
      "px\""
     )
  )
;; Rerender/ update state
  ;Whenever you change the nodes, deps, etc, you need to re-generate the graph
  (defn update-state [state]
    (let [
          dot (graph->dot (:nodes state) (:deps state) (:clusters state) ((:direction state) core/directions) false)
          same-graph (= dot (:dot state));if the dot is the same, don't need to re-calc svg/gdata
          svg (if same-graph (:svg state) (dot->svg dot))
          gnodes
            (if same-graph
              (:gnodes state)
              (svg->gdata svg)
            )
          ]
      (assoc state :dot dot :svg svg
             ;add the nodes from :nodes state to the gdata version.
             ;even if the dot representation hasn't changed, we want to always update this.
             :gnodes (mapv
                         #(assoc %
                           :node (core/get-node (:nodes state) (:id %))
                           :cluster (get-in state [:clusters (:id %)]) )
                         gnodes)
       )
    )
  )

  ;Decorate a function to make it update the actual app-state and re-render the whole page
  (defn rerender! [updater]
    (fn [& args]
      (apply (partial swap! app-state (comp update-state updater)) args)
     )
   )
;;State changers
  (defn set-direction [state dirkey]
    (assoc state :direction dirkey)
    )
  ; util: pass the node with id=node-id through func
  (defn update-node [state node-id func]
    (assoc state :nodes
      (mapv
        (fn [node] (if (= (:id node) node-id) (func node) node))
        (:nodes state)
       )
     )
  )
  (defn rename-node [state node-id text]
    (update-node state node-id #(assoc % :text text))
   )
  (defn resize-node [state node-id width height]
    (let [ height-pt (/ height ppi)
           width-pt (/ width ppi)
          ]
      (update-node state node-id #(assoc % :width width-pt :height height-pt))
     )
   )
  (defn recolor-node [state node-id color]
      (update-node state node-id #(assoc % :color color))
    )
  (defn recluster-node [state node-id cluster-id]
    (update-node state node-id #(assoc % :cluster-id cluster-id))
   )
  (defn select-node [state node-id]
    (assoc state :selected-node-id node-id)
   )
  (defn get-next-node-id [state direction current]
     (let [gdata (:gnodes state)
           positioned-nodes (sort (map (fn [node]  ; [[y x id]...]
                                   (vector
                                     (if (= (:type node) :node)
                                       (apply + (vals (get-in node [:points :y]))); nodes sorted by the midpoint for the height
                                       (* 2 (get-in node [:points :y :min])); clusters sorted by top point 
                                      )
                                     (get-in node [:points :x :min])
                                     (:id node)
                                    ))
                                 gdata))
           node-index (apply hash-map (apply concat (map-indexed (fn [idx node] [(nth node 2) idx]) positioned-nodes)))
           old-index (get node-index current)
           new-index (if (nil? current) 0 (mod (+ old-index direction) (count positioned-nodes)))
           new-node (nth positioned-nodes new-index)
           new-node-id (nth new-node 2)
           ]
        new-node-id
       )
    )
  (defn select-next-node
    ([state] (select-next-node state 1))
    ;direction = 1/-1 for forwards/backwards
    ([state direction]
      (assoc state :selected-node-id (get-next-node-id state direction (:selected-node-id state)))
     )
   )
  (defn edit-next [ui-state state direction]
    (assoc ui-state :edit-node-id (get-next-node-id state direction (:edit-node-id ui-state)))
    )
  (defn delete-node [state id]
    (let [
          new-nodes (filterv #(not= id (:id %)) (:nodes state))
          new-deps (filterv (fn [dep] (every? (partial not= id) dep)) (:deps state))
          new-state (assoc state :nodes new-nodes :deps new-deps)
          ]
      (if (= id (:selected-node-id state)) (select-next-node new-state) new-state)
    )
  )
  (defn delete-nodes [state ids]
    (reduce delete-node state ids)
   )
  (defn delete-all [state]
    (assoc state :nodes [] :deps [] :clusters {} :selected-node-id nil)
   )
  ;befores/afters are id's of nodes that should have edges coming into/out of this node
  (defn add-node
    ( [state befores afters]
      (add-node state befores afters "")
     )
    ( [state befores afters text]
      (add-node state befores afters text false)
     )
    ( [state befores afters text return-id?]
      (let [
            new_node_id (str "node" (:id-counter state))
            new_node {:id new_node_id :text text}
            new_nodes (conj (:nodes state) new_node)
            all_deps (reduce into (:deps state) [
                       (map #(vector % (:id new_node)) befores)
                       (map #(vector (:id new_node) %) afters)
                                      ]
                             )
            new_state (assoc state :nodes new_nodes :deps all_deps :selected-node-id new_node_id :id-counter (inc (:id-counter state)))
            ]
        (if return-id?
          [new_state  new_node_id]
          new_state
         )
       )
     )
   )
  (defn clone-node [state node-id]
    (let [node (core/get-node (:nodes state) node-id)
          new-node-id (str "node" (:id-counter state))
          new-node (assoc node :id new-node-id)
          sub (fn [id] (if (= id node-id) new-node-id id))
          new-deps (->> (:deps state)
                        (filter (partial core/node-in-link? node-id))
                        (map #(into (core/vmap sub (take 2 %)) (drop 2 %)))
                     )
          ]
      (assoc state :nodes (conj (:nodes state) new-node) :deps (into (:deps state) new-deps) :id-counter (inc (:id-counter state)))))
  (defn inside-cluster? [clusters child parent-id]
    (cond
      (nil? (:cluster-id child)) false
      (= parent-id (:cluster-id child)) true
      :else (inside-cluster? clusters (get clusters (:cluster-id child)) parent-id)
     )
   )
  ; return true if any of the nodes/clusters in children are inside of parent-id cluster (even if deeply nested)
  (defn any-inside-cluster? [clusters children parent-id]
    (some #(inside-cluster? clusters % parent-id) children)
    )
  ; return true if any of the nodes/clusters in children are inside of parent-id cluster (even if deeply nested)
  (defn inside-any-cluster? [clusters child parent-ids]
    (some #(inside-cluster? clusters child %) parent-ids)
    )
  ; return a set of clusters containing any of the nodes/clusters in children
  (defn clusters-containing [clusters children]
    (->>
      (keys clusters)
      (map #(when (any-inside-cluster? clusters children %) %))
      (filter identity)
      (into #{})
    )
    )
  ; get all ids for clusters who have all their contained node-ids in `node-ids` (including if it's nested in a deeper cluster)
  (defn get-contained-cluster-ids [clusters nodes node-ids]
    (let [
          collapsed-cluster-ids (->>
                                  node-ids
                                  (map #(get clusters %))
                                  (filter identity)
                                  (map :id)
                                  (into #{}))
          collapsed-cluster-nodes (->>
                        (map :id nodes)
                        (filter #(inside-any-cluster?
                                   clusters
                                   (core/get-node nodes %)
                                   collapsed-cluster-ids))
                        (into #{})
                        )
          node-id-set (->>
                        (clojure.set/difference (set node-ids) collapsed-cluster-ids)
                        (clojure.set/union collapsed-cluster-nodes)
                        )
          included-nodes (map #(core/get-node nodes %) node-id-set)
          other-nodes (->> nodes
                      (remove #(contains? node-id-set (:id %)))
                      )
          included (clusters-containing clusters included-nodes)
          excluded (clusters-containing clusters other-nodes)
          ]
      (clojure.set/union
        (clojure.set/difference included excluded)
        collapsed-cluster-ids
      )
      )
    )
  (defn clone-cluster [state cluster-id]
    (let [{id-counter :id-counter nodes :nodes clusters :clusters deps :deps} state
          clusters-to-clone (->>
                              (vals clusters)
                              (filter #(inside-cluster? clusters % cluster-id))
                              (into [(get clusters cluster-id)])
                             )
          cluster-clone-ids (set (map :id clusters-to-clone))
          update-id #(str % "_" id-counter)
          update-cluster-id #(if (contains? cluster-clone-ids %) (update-id %) %)
          new-clusters (->>
                         clusters-to-clone
                         (map #(update-in % [:id] update-id))
                         (map #(update-in % [:cluster-id] update-cluster-id))
                        )
          new-cluster-map (zipmap (map :id new-clusters) new-clusters)
          nodes-to-clone (->>
                           nodes
                           (filter #(inside-cluster? clusters % cluster-id))
                          )
          new-nodes (->>
                      nodes-to-clone
                      (map #(update-in % [:id] update-id))
                      (map #(update-in % [:cluster-id] update-cluster-id))
                     )
          node-clone-ids (set (map :id nodes-to-clone))
          update-node-id #(if (contains? node-clone-ids %) (update-id %) %)
          new-deps (->>
                     deps
                     (filter #(not-empty (clojure.set/intersection (set (subvec % 0 2)) node-clone-ids)))
                     (map #(assoc % 0 (update-node-id (first %)) 1 (update-node-id (second %))))
                    )

          ]
        (assoc state
          :nodes (into nodes new-nodes)
          :deps (into deps new-deps)
          :clusters (merge clusters new-cluster-map)
          :id-counter (inc id-counter))
      ) 
    )
  ;make the node/cluster a direct child of cluter with id=parent-id.
  ;does nothing if the intended parent is already nested inside the child, as this is impossible
  ;if the child is already a direct child of parent, remove it from the cluster instead
  (defn toggle-cluster-nesting [state child-id parent-id]
    (if (inside-cluster? (:clusters state) (get-in state [:clusters parent-id]) child-id)
      state ;parent is inside the child; do nothing and return
      (assoc-in state [:clusters child-id :cluster-id]
        (if (= parent-id (get-in state [:clusters child-id :cluster-id]))
          nil
          parent-id
         )
       )
     )
   )
  (defn add-cluster 
    ([state node-ids]
      (add-cluster state (core/prompt "Enter a name for the box" "") node-ids)
     )
    ([state text node-ids]
      (add-cluster state text node-ids false)
     )
    ([state text node-ids return-id?]
      (let [
            {id-counter :id-counter clusters :clusters nodes :nodes} state
            cluster-id (str "cluster_" id-counter)
            contained-cluster-ids (get-contained-cluster-ids clusters nodes node-ids)
            cluster-ids-to-recluster (->> contained-cluster-ids
                                          (map #(get clusters %))
                                          (remove #(contains? contained-cluster-ids (:cluster-id %)))
                                          (map :id))
            nodes-to-recluster (->> node-ids
                                    (map #(core/get-node nodes %))
                                    (remove #(contains? contained-cluster-ids (:cluster-id %)))
                                    (map :id)
                                    )
            new-state (reduce
                        #(recluster-node %1 %2 cluster-id)
                        (assoc state :clusters (assoc (:clusters state) cluster-id {:id cluster-id :text text :collapsed false}) :selected-node-id cluster-id :id-counter (inc (:id-counter state)))
                        nodes-to-recluster
                       )
            new-state-with-clusters (reduce
                                      #(toggle-cluster-nesting %1 %2 cluster-id)
                                      new-state
                                      cluster-ids-to-recluster
                                      )
            ]
        (if return-id?
          [new-state-with-clusters cluster-id]
          new-state-with-clusters
         )
       )
     )
   )
  (defn edit-node! [node-id]
    (swap! ui-state assoc :edit-node-id node-id)
    (js/setTimeout (fn [] (
      (let [textbox (.querySelector js/document ".edit-overlay textarea")]
        (.focus textbox)
        (.select textbox)
       )
     )))
   )
  ;delete a cluster (and its contents if 'delete-contents?')
  (defn delete-cluster 
    ([state id] (delete-cluster state id false))
    ([state id delete-contents?]
      (let [
            parent-id (get-in state [:clusters id :cluster-id]); id of the parent cluster of the one to be deleted
            wipe-id #(if (= (:cluster-id %) id) (assoc % :cluster-id parent-id) %)
            new-state (assoc state
              :nodes (map wipe-id (:nodes state))
              :clusters (core/map-vals wipe-id (dissoc (:clusters state) id))
             )
            nodes-to-delete (when delete-contents? (filter #(inside-cluster? (:clusters state) % id) (:nodes state)))
            ]
          (delete-nodes new-state (map :id nodes-to-delete))
       )
     )
   )
  (defn rename-cluster [state cluster-id name]
    (assoc-in state [:clusters cluster-id :text] name)
   )
  (defn rename-cluster-prompt [state cluster-id]
    (if (get-in state [:clusters cluster-id])
      (let [new-name (core/prompt "Enter new name" (get-in state [:clusters cluster-id :text]))]
        (if new-name
          (rename-cluster state cluster-id new-name)
          state
         )
       )
      state
     )
   )
  ;make a cluster 'around' the given one (happens when users drag up from a cluster)
  (defn outer-cluster-prompt [state inner-cluster-id]
    (let [[new-state new-id] (add-cluster state "" [] true)
          ]
      (edit-node! new-id)
      (toggle-cluster-nesting new-state inner-cluster-id (str "cluster_" (:id-counter state)))
      )
    )
  (defn toggle-node-cluster [state node-id cluster-id]
    (let [new-cluster-id (if (= cluster-id (:cluster-id (core/get-node (:nodes state) node-id))) "" cluster-id)]
      (recluster-node state node-id new-cluster-id)
     )
   )
  ;move the deps from one node to another. called when users shift-drag to split a node into two
  ;dep-type can be :before :after or :both
  (defn move-deps
    ( [deps old-node-id new-node-id dep-type]
      (move-deps deps old-node-id new-node-id
                 (or (= dep-type :before) (= dep-type :both))
                 (or (= dep-type :after) (= dep-type :both))
                 )
     )
    ( [deps old-node-id new-node-id move-befores move-afters]
      (map (fn [dep]
                  (cond
                    (and move-befores (= (second dep) old-node-id))
                      [(first dep) new-node-id]
                    (and move-afters (= (first dep) old-node-id))
                      [new-node-id (second dep)]
                    :else
                      dep
                    )
                  )
           deps)
      ))
  ;split a node into two.
  ;if you have a->c and realize you want a->b->c, you can either split the a and add b after it or split c and add b before.
  ;new-node-pos is :before or :after
  (defn split-node [state node-id new-node-pos]
    (let [
          nodes (:nodes state)
          node (core/get-node nodes node-id)
          new-node-id (str "node" (:id-counter state))
          new_node {:id new-node-id :cluster-id (:cluster-id node) :text ""}
          new_nodes (conj nodes new_node)
          new_deps (move-deps (:deps state) node-id new-node-id new-node-pos)
          final_deps (conj new_deps (if (= new-node-pos :before) [new-node-id node-id] [node-id new-node-id]))
          ]
          (assoc state :nodes new_nodes :deps final_deps :id-counter (inc (:id-counter state)))
      ))
  ;add a new node (possibly splitting).
  ;called when a user drags from a node and lifts up in a blank area
  ;if the user held shift, 'split?' will be true
  (defn add-or-split-node [state node-id position split?]
    (if split?
      (split-node state node-id position)
      (if (= position :before)
        (add-node state [] [node-id])
        (add-node state [node-id] [])
       )
     )
   )
  (defn find-dep [state dep]
    (first (filter #(= (take 2 %) (take 2 dep)) (:deps state)))
   )
  ;add/remove a dep
  (defn toggle-dep [state dep]
    (let [found (find-dep state dep)]
      (update-in state [:deps]
        (fn [deps]
          (if (nth dep 2 nil)
            ;The dep has a label, so replace any existing src-tgt dep with this labeled one
            (->
              (remove #(= % found) deps)
              (conj dep)
              )
            ;No label. Remove the dep if it exists, else add it
            (if found
              (remove #(= % found) deps)
              (conj deps dep)
             )
           )
         )
       )
     )
   )
  ;toggle a dep and clear :toggle-link-node-id
  (defn toggle-dep-clear [state dep]
    (assoc (toggle-dep state dep) :toggle-link-node-id nil)
    )
  (defn on-toggle-dep-click [state node-id label]
    (let [last-clicked-id (:toggle-link-node-id state)]
      (if (nil? last-clicked-id)
        (assoc state :toggle-link-node-id node-id)
        (if (= last-clicked-id node-id)
          (assoc state :toggle-link-node-id nil)
          (toggle-dep-clear state [last-clicked-id node-id label])
         )
        )
     )
   )
;; Event Handlers
  ;when a user lifts their mouse after dragging from a node
  ;creates new node, splits node, toggles link, or toggles clustering depending on the target
  (defn node-mouseup [src-node-id src-coords direction move-keys]
    (fn [e]
      (swap! ui-state assoc :preview-points nil)
      (when move-keys (doseq [move-key move-keys] (events/unlistenByKey move-key)))
      (let [
            tgt-coords (core/coords e)
            node-id (core/el->nodeid (.elementFromPoint js/document (:x tgt-coords) (:y tgt-coords)))
            cluster-id (core/el->clusterid (.elementFromPoint js/document (:x tgt-coords) (:y tgt-coords)))
            shift-key (.-shiftKey e)
            alt-key (.-altKey e)
            ]
        (cond 
          ;On a node that's not a collapsed cluster. link to it.
          (and node-id (> (core/coords-dist src-coords tgt-coords) 5) (not= node-id cluster-id))
            ((rerender! toggle-dep-clear) [src-node-id node-id (if shift-key (core/prompt "Enter link text:" "") nil)])
          ;On a cluster. add/remove node from cluster
          cluster-id
            ((rerender! toggle-node-cluster) src-node-id cluster-id) 
          ;On blank space. Add a new node before/after if the drag target is before/after the source
          alt-key
            ((rerender! clone-node) src-node-id)
          (nil? node-id)
            ((rerender! add-or-split-node) src-node-id (core/compare-coords tgt-coords src-coords (direction core/directions)) shift-key)
         )
       )
     )
   )
  (defn add-and-name-node! [state befores afters cluster-id]
    (let [[new-state new-id] (add-node state befores afters "" true)]
      (edit-node! new-id)
      (if cluster-id
        (recluster-node new-state new-id cluster-id)
        new-state
       )
      )
    )
  ;when a user lifts their mouse after dragging from a cluster
  (defn cluster-mouseup [src-cluster-id down-event, move-keys]
    (let [src-y (.-clientY down-event)]
      (fn [e]
        (swap! ui-state assoc :preview-points nil)
        (when move-keys (doseq [move-key move-keys] (events/unlistenByKey move-key)))
        (let [
              tgt-coords (core/coords e)
              node-id (core/el->nodeid (.elementFromPoint js/document (:x tgt-coords) (:y tgt-coords)))
              cluster-id (core/el->clusterid (.elementFromPoint js/document (:x tgt-coords) (:y tgt-coords)))
              ;shift-key (.-shiftKey down-event)
              ]
          (if node-id
            ;target is a nede; put that node inside this cluster
            ((rerender! toggle-node-cluster) node-id src-cluster-id) 
            (when (not= cluster-id src-cluster-id);do nothing if on the same cluster the drag started on
              (if cluster-id
                ;on a different cluster, nest this one inside it
                ((rerender! toggle-cluster-nesting) src-cluster-id cluster-id)
                 ;If not on a node/cluster, make a new node/cluster outside of this one
                (if (.-altKey e)
                  ((rerender! clone-cluster) src-cluster-id)
                  (if (< (.-clientY e) src-y)
                    ((rerender! outer-cluster-prompt) src-cluster-id)
                    ((rerender! add-and-name-node!) [] [] src-cluster-id)
                   )
                 )
               )
             )
           )
         )
     ))
   )
  (defn resize-mouse [target move-keys]
    ;This function is called when the user is dragging/releasing the mouse after clicking the resize handle
    ;If this was called on a drag event, move-key will be nil (otherwise it's a seq of IDs of event handlers that should be unregistered)
    ;While the mouse is dragging, this updates a placeholder's location by swapping ui-state
    ;When the mouse is lifted, this updates the actual node and relays the graph
    (fn [e]
      (let [ node( dom/getAncestorByClass target "node-overlay")
             container (dom/getAncestorByClass target "dotgraph")
             bounds (.getBoundingClientRect node)
             ctop (.-top (.getBoundingClientRect container))
             width (max (- (.-clientX e) (.-left bounds)) 35)
            height (max (- (.-clientY e) (.-top bounds)) 35)
            node-id (core/el->nodeid target)
            ]
        (if move-keys
          ;Mouse lifted: update actual node and clear the resize placeholder
          (do 
            (doseq [key move-keys] (events/unlistenByKey key))
            ((rerender! resize-node) node-id width height)
            (swap! ui-state assoc :resize-points nil :resize-label "")
            )
          ;Mouse dragged: udpate the size of the resize placeholder
          (swap! ui-state (fn [state] (-> state (assoc-in [:resize-points :x :max] (+ width (get-in state [:resize-points :x :min]))) (assoc-in [:resize-points :y :max] (+ height (get-in state [:resize-points :y :min]))))))
          )
        )
      )
    )
(defn get-textbox-style [gnode x-offset y-offset]

  (let [ width (core/width (:points gnode))
         height (core/height (:points gnode))
        ]

    (if (= (:type gnode) :node)
      {:top (str (+ 8 y-offset (get-in gnode [:points :y :min])) "px")
      :left (str (+ 8 x-offset (get-in gnode [:points :x :min])) "px")
      :width (str (- width 20) "px")
      :height (str (- height 22) "px")
      }
      {:top (str (+ y-offset 1 (get-in gnode [:points :y :min])) "px")
      :left (str (+ x-offset 1 (get-in gnode [:points :x :min])) "px")
      :width (str (- width 8) "px")
      :height "15px"
      :padding-top "0px"
      }
      )
   )
 )
(defn graph-coords [target e]
  (let [ container (dom/getAncestorByClass target "dotgraph")
        bounds (.getBoundingClientRect container)
        base (if (number? (.-clientX e)) 
               e
               (core/changed-touch e))
        ]
    {:x (- (.-clientX base) (.-left bounds))
     :y (- (.-clientY base) (.-top bounds))}
    )
  )
(defn link-preview [target start-touch-event]
  (fn [e] 
    (when (or (nil? start-touch-event) (some? (core/changed-touch-by-id (.-event_ e) (.-identifier start-touch-event))))
      (let [
            tgt-coords (core/coords e)
            node-id (core/el->nodeid (.elementFromPoint js/document (:x tgt-coords) (:y tgt-coords)))
            cluster-id (core/el->clusterid (.elementFromPoint js/document (:x tgt-coords) (:y tgt-coords)))
            ]
        (swap! ui-state (fn [state] (->
                                      state
                                      (assoc-in [:preview-points :shift-key] (.-shiftKey e))
                                      (assoc-in [:preview-points :alt-key] (.-altKey e))
                                      (assoc-in [:preview-points :end] (graph-coords target e))
                                      (assoc-in [:preview-points :end-node-id] node-id)
                                      (assoc-in [:preview-points :end-cluster-id] cluster-id))))
        )
      )
    )
  )
  (defn help-mouseup [e]
    (swap! ui-state assoc :help-drag false)
    (let [help-node (dom/getAncestor (.-target e) #(and (.-hasAttribute %) (.hasAttribute % "data-help-link")) true)]
      (when help-node
        (swap! ui-state assoc :help-visible? true)
        (core/jump-to-anchor (.getAttribute help-node "data-help-link"))
        )
      )
   )
  (defn help-mousedown [e]
    (events/listenOnce js/window (array EventType.MOUSEUP EventType.TOUCHEND) help-mouseup)
    (swap! ui-state assoc :help-drag true)
   )
  ;ui-state is the atom
  (defn node-mousedown [e state ui-state]
    (when (or (= (.-type e) "touchstart") (= (.-button e) 0 ))
      (.preventDefault e)
      (let [target (.-target e)
            node-id (core/el->nodeid target)
            gnode (core/get-node (:gnodes state) node-id)
            direction (:direction state)
            ]
        (if (classlist/contains (.-target e) "node-resize")
          (let [move-keys (core/vmap #(events/listen js/window % (resize-mouse (.-target e) nil)) [EventType.MOUSEMOVE EventType.TOUCHMOVE])] ;draw a preview of the resized node and register the handler for when the mouse is lifted

              (swap! ui-state assoc :resize-points (:points gnode) :resize-label (get-in gnode [:node :text]))
              (events/listenOnce js/window (array EventType.MOUSEUP EventType.TOUCHEND) (resize-mouse target move-keys))
             )
          (let [move-keys (core/vmap #(events/listen js/window % (link-preview (.-target e) (core/changed-touch e))) [EventType.MOUSEMOVE EventType.TOUCHMOVE])
                start-point (graph-coords target e)]
            (swap! ui-state assoc :preview-points {:start start-point :end start-point :start-node-id node-id :end-node-id node-id})
            (events/listenOnce js/window (array EventType.MOUSEUP EventType.TOUCHEND) (node-mouseup (.getAttribute (dom/getAncestorByClass (.-target e) "node-overlay") "data-nodeid") (core/coords e) direction move-keys))
           )
         )
       )
      false
     )
   )
  (defn cluster-mousedown [e]
    (when (or (= (.-type e) "touchstart") (= (.-button e) 0 ))
      (.preventDefault e)
      (let [target (.-target e)
            cluster-id (core/el->clusterid target)
            move-keys (core/vmap #(events/listen js/window % (link-preview (.-target e) (core/changed-touch e))) [EventType.MOUSEMOVE EventType.TOUCHMOVE])
            start-point (graph-coords target e)
            ]
        (swap! ui-state assoc :preview-points {:start start-point :end start-point :start-cluster-id cluster-id :end-cluster-id cluster-id})
        (events/listenOnce
          js/window
          (array EventType.MOUSEUP EventType.TOUCHEND)
          (cluster-mouseup
            (.getAttribute (dom/getAncestorByClass (.-target e) "cluster-overlay") "data-clusterid")
            e
            move-keys
            ))
       )
      false
     )
   )
  (defn graph-mousemove [ui-state]
    (fn [e]
      (swap! ui-state assoc-in [:cluster-points :end] (graph-coords (.-target e) e))
      )
    )
  (defn graph-mouseup [ui-state move-key]
    (fn [e]
      (events/unlistenByKey move-key)
      (let [
            els (core/arraylike-to-seq (.querySelectorAll js/document ".node-overlay.boxed"))
            node-ids (map core/el->nodeid els)
            pts (:cluster-points @ui-state)
            ]
        (when (and (not-empty node-ids)
                   (> (core/coords-dist (:start pts) (:end pts)) 1));Need to do this to prevent expanding clusters from triggering a cluster (graph mouseup handler)
          ((rerender! add-cluster) node-ids))
        )
      (swap! ui-state assoc :cluster-points nil)
      )
    )
  (defn graph-mousedown [e state ui-state]
    (when (and
            (not (:edit-node-id @ui-state))
            (or (= (.-type e) "touchstart") (= (.-button e) 0 )))
      (let [coords (graph-coords (.-target e) e)]
        (swap! ui-state assoc :cluster-points {:start coords :end coords})
        (let [move-key (events/listen js/window EventType.MOUSEMOVE (graph-mousemove ui-state))]
          (events/listenOnce js/window EventType.MOUSEUP (graph-mouseup ui-state move-key))
         )
       )
     )
   )
  (defn edit-done! 
    ([gnode text]
      (edit-done! gnode text nil)
     )
    ([gnode text select-id]
      (edit-node! select-id)
      (if (or (= (:type gnode) :cluster) (:cluster gnode))
        ((rerender! rename-cluster) (get-in gnode [:cluster :id]) text)
        ((rerender! rename-node) (:id gnode) text)
     )
    )
   )
  ;; Bulk add
    (defn parse-line [index line]
      (let [clean (clojure.string/triml line)
            indentation (- (count line) (count clean))
            ]
        {
         :idx index
         :orig line
         :clean clean
         :indent indentation
         }
      ))
    (defn add-parents ; go through a seq of parsed lines and for each indented line, add a :parent key with the idx of their parent
      ;the parent is the closest line above the current line that is indented at a lower level.
      ([parsed-lines]
        (let [line (first parsed-lines)]
          (add-parents (rest parsed-lines) {(:indent line) (:idx line)} [line])))
      ([parsed-lines indent-parents result]
        (if (empty? parsed-lines)
          result
          (let [line (first parsed-lines)
                indent (:indent line)
              ; get the highest index with a lower indentation
                parent (->>
                           indent-parents
                           (filter (fn [[k v]] (<  k indent)))
                           (map second)
                           (apply max)
                          )
                ]
            (add-parents
              (rest parsed-lines)
              (assoc indent-parents indent (:idx line))
              (conj result (assoc line :parent parent)
             ))))))
    (defn mark-parents [parsed]
      (let [pars (set (map :parent parsed)) ]
        (map (fn [line] (assoc line :is-parent? (contains? pars (:idx line)))) parsed)
       )
     )
    (defn dot->state [state dot]
      (let [json (js/Viz dot (js-obj "format" "json"))
            data (js->clj (.parse js/JSON json) :keywordize-keys true)
            objects (->>
                      (:objects data)
                      (filter #(contains? % :_draw_))
                     )
            nodes (->>
                    objects
                    (remove #(contains? % :nodes))
                    (into [])
                   )
            [st node-lookup] (reduce (fn [[st lookup] node]
                                       (let [label (if (= (:label node) "\\N") (:name node) (:label node))
                                             [newst node-id] (add-node st [] [] label true)
                                             newlookup (assoc lookup (:_gvid node) node-id)]
                                         [newst newlookup]))
                                     [state {}]
                                     nodes)
            clusters (->>
                       objects
                       (filter #(or (contains? % :nodes) (contains? % :subgraphs)))
                       (sort-by (comp - count :nodes))
                      )
            [st2 cluster-lookup] (reduce (fn[[st lookup] cluster]
                                           (let [[newst cluster-id] (add-cluster st (:label cluster) (map node-lookup (:nodes cluster)) true)
                                                 newlookup (assoc lookup (:_gvid cluster) cluster-id)]
                                             [newst newlookup] ))
                                         [st {}]
                                         clusters)
            cluster-nestings (mapcat #(map (fn [cl] [(:_gvid %) cl]) (:subgraphs %)) clusters)
            st3 (reduce (fn [st [parent-id child-id]]
                          (toggle-cluster-nesting st (cluster-lookup child-id) (cluster-lookup parent-id)))
                        st2
                        cluster-nestings)
            edges (->>
                    (:edges data)
                    (map (fn [x] [(node-lookup (:tail x)) (node-lookup (:head x))]))
                    )
            st4 (assoc st3 :deps (into (:deps st3) edges))
            ]
         st4
       )
     )
    (defn parse-bulk-add [text]
      (let [
            lines (remove empty? (clojure.string/split-lines text))
            parsed (map-indexed parse-line lines)
            ]
        (mark-parents (add-parents parsed))
      )
      )
    ;XXX this algorithm relies on parents appearing before all their children
    ; go through all the parsed lines and add all new nodes/links/clusters to the graph depending on the mode:
    ; "ignore": add all lines as nodes and ignore indentation
    ; "cluster": lines at higher indentation become clusters that contain their children
    ; "link": lines at higher indentation are linked to all their direct children
    (defn add-lines
      ([state lines mode] (add-lines state lines mode {}))
      ([state lines mode id-lookup]
       ; id-lookup maps lines' :idx to the ID's of the nodes/clusters created so we can use that ID for linking/clustering of the children
        (let [
              line (first lines)
              ]
          (if (nil? line) ;if we've gone through all the lines, return
            state
            (let [
              text (:clean line)
              parent-id (get id-lookup (:parent line))
              [new-state new-id] (if (and (= mode "cluster") (:is-parent? line))
                                   (add-cluster state text [] true) ;in cluster mode, parent lines are clusters
                                   (add-node state [] [] text true)) ;in all other cases, the current line becomes a node
              final-state (cond ;if this node has a parent, add them to that parent cluster or link to the parent node
                            (and (= mode "cluster") parent-id)
                              (if (:is-parent? line)
                                (toggle-cluster-nesting new-state new-id parent-id)
                                (recluster-node new-state new-id parent-id)
                               )
                            (and (= mode "link") parent-id)
                              (toggle-dep new-state [parent-id new-id])
                            :else
                              new-state
                            )
                ]
              (add-lines final-state (rest lines) mode (assoc id-lookup (:idx line) new-id))
             )
           )
         )
       )
     )
    (defn bulk-add-modal [ui-state]
      (let [bulk-text (reagent/atom ""); the text in the textbox
            mode (reagent/atom "")]; how to handle indentation. See parse-bulk-add for a description of the modes
        (fn []
          (core/keyed-modal ui-state :bulk-add-modal-visible? {:class "bulk-modal"}
            [:div
              [:div {:class "modal-title"} "Bulk Add"]
              [:div "Add a line of text for each node you want created " [core/a-link "bulk-add" "help" #(swap! ui-state assoc :help-visible? true)]]
              
              [:select {:value @mode :on-change #(reset! mode (-> % .-target .-value))}
                [:option {:value "ignore"} "ignore"]
                [:option {:value "link"} "link"]
                [:option {:value "cluster"} "cluster"]
                [:option {:value "graphviz"} "graphviz"]
               ]
              [core/text-area bulk-text {}]
              [:div {:class "modal-buttons"}
                [:button
                 {
                   :style {:display "inline-block" :float "right"}
                   :on-click #(
                     ((core/toggler ui-state :bulk-add-modal-visible?))
                     (if (= @mode "graphviz")
                       ((rerender! dot->state) @bulk-text)
                       ((rerender! (fn [state] (->
                                                 state
                                                 (add-lines (parse-bulk-add @bulk-text) @mode)
                                                 ))))))}
                 "Add nodes"]
               ]
             ]
           )
          )
       )
     )
  (defn toolbar [state ui-state]
    [:div {:class "button-bar"}
      [core/btn {:title "Add node" :data-help-link "add-card" :on-click #((rerender! add-node) [] [])} [core/icon "plus" "30px"]]
      [core/btn {:title "Bulk add" :data-help-link "bulk-add" :on-click (core/toggler ui-state :bulk-add-modal-visible?)} [core/icon "list-alt" "30px"]]
      [core/btn {:title "Delete all" :data-help-link "delete-all" :on-click #((rerender! delete-all))} [core/icon "trash" "30px"]]
      [core/btn {:title "Save" :data-help-link "saving" :on-click #(save-hash state)} [core/icon "save" "30px"]]
      [core/btn {:title "Undo" :data-help-link "undo-button" :on-click hist/undo! :style (when-not (hist/can-undo?) {:cursor "default" :opacity "0.3"})} [core/icon "undo" "30px"]]
      [core/btn {:title "Redo" :data-help-link "undo-button" :on-click hist/redo! :style (when-not (hist/can-redo?) {:cursor "default" :opacity "0.3"})} [core/icon "undo" "30px" {:transform "scale(-1, 1)"}]]
      [:div {:title "Change arrow direction" :class "direction-button" :data-help-link "arrow-dir"}
        [:select {:class "hidden-select" :value (:label ((:direction state) core/directions)) :on-change #((rerender! set-direction) (keyword (-> % .-target .-value)))} (map (fn [[dirkey dir]] [:option {:key dirkey :value dirkey :on-click #((rerender! set-direction) dirkey)} [core/icon "plus" "16px"](:label dir)]) core/directions)]
        [core/icon "arrow-circle-up" "30px" {:transform (str "rotate(" (:rotation ((:direction state) core/directions)) ")")}]
       ]
      [core/btn {:title "Export to dot format" :data-help-link "export-dot" :on-click #(let [w (js/window.open)] (.write (.-document w) (str "<pre>" (core/hesc (graph->dot (:nodes state) (:deps state) (:clusters state) ((:direction state) core/directions) true)) "</pre>")))} [core/icon "file-code" "30px"]]
      [core/btn {:title "Help. Try dragging from me to highlighted elements!" :on-touch-start help-mousedown :on-mouse-down help-mousedown :on-click (core/toggler ui-state :help-visible?)} [core/icon "question" "30px"]]
     ]
    )
  (defn graph [state]
    (let [[_ x-offset y-offset]
          (map js/parseInt (re-find #"translate\(([\d.]+) ([\d.]+)\)" (:svg state)))
          cluster-node-ids
            (if (:cluster-points @ui-state)
              (->> (:gnodes state)
                   (filter #(= (:type %) :node))
                   (filter (fn [node] (core/rects-overlap?
                                        (core/translate-rect (:points node) x-offset y-offset)
                                        (core/bounding-rect (-> @ui-state (:cluster-points) (vals) ))))
                           )
                   (map :id)
                   (into #{})
                   )
              #{}
              )
          boxed-clusters (get-contained-cluster-ids (:clusters state) (:nodes state) cluster-node-ids)
          ]
      [:div
        {:class (when (:help-drag @ui-state) " help-drag") :on-key-press #(.log js/console %)}
        [toolbar state ui-state]
        [:div {:class (str "help-window" (when-not (:help-visible? @ui-state) " hidden")) :style {:position "fixed" :right "0px" :width "35%" :height "100%" :z-index "99999" :background-color "#f6f6f6" :padding "10px" :box-shadow "0 0 8px 2px #666" :border "1px solid #666"}} 
         [:div {:style {:position "relative" :width "100%" :text-align "right" :padding-right "20px"}}
           [:a {:href "./help.html" :target "_blank" :on-click (core/toggler ui-state :help-visible?)} "Pop out"]
           " "
           [:a {:href "javascript:" :on-click (core/toggler ui-state :help-visible?)} "Close"]
          ]
           [:div {:style {:overflow-y "auto" :height "100%"}}
             [help/page help/dottask-help]
            ]
         ]
        [bulk-add-modal ui-state]
        [:div {:class (str "dotgraph" (when (:edit-node-id @ui-state) " editing") )
               ;:on-click #(when (= (.-nodeName (.-target %)) "polygon") ((rerender! add-node) [] []))
               :on-mouse-down #(graph-mousedown % state ui-state)
               }
          [:div {:class "graph-overlay"} 
            ;Resize overlay
            (when (:resize-points @ui-state)
              (let [points (:resize-points @ui-state)
                    x (+ x-offset (get-in points [:x :min]))
                    y (+ y-offset (get-in points [:y :min]))
                    width (core/width points)
                    height (core/height points)
                    ]
                [:div {:class "resize-overlay"
                       :style {
                         :left (str x "px")
                         :top (str y "px")
                         :width (str width "px")
                         :height (str height "px")}}
                  [:div {:class "task-text"} (:resize-label @ui-state)]
                 ]
                )
              )
            ;Node overlays
            (map
              (fn [node]
                ;We draw divs on top of where the nodes are in the graphviz svg so that we can do more advanced styling/functionality
                ;Collapsed clusters are also turned into nodes. They have different styling and can be differentiated by a truthy :cluster value
                (when (= (:type node) :node)
                [:div {:class (str
                                "node-overlay"
                                (when (= (:id node) (:selected-node-id state)) " selected")
                                (when (:cluster node) " cluster-node")
                                (when (contains? (:connected-nodes state) (:id node)) " connected")
                                (when (contains? cluster-node-ids (:id node)) " boxed")
                                ) 
                       :key (:id node)
                       ;When cluster nodes are clicked on, expand the cluster
                       :on-click (when (:cluster node) #((rerender! (fn [state] (assoc-in state [:clusters (:id node) :collapsed] false )))))
                       ;When nodes are double-clicked, add a surrounding cluster
                       :on-double-click #((rerender! add-cluster) [(:id node)])
                       ;Store the node ID as a dom attribute so event handlers can extract it later
                       :data-nodeid (:id node)
                       ;On mouse down/ touch start, set things up so that when the user stops dragging, we can add the link/node
                       :on-mouse-down (when (:node node) #(node-mousedown % state ui-state))
                       :on-touch-start (when (:node node) #(node-mousedown % state ui-state))
                       :on-mouse-enter (fn [e] (when (.-shiftKey e) (swap! app-state assoc :connected-nodes (->> (:deps state) (filter (partial core/node-in-link? (:id node))) (apply concat) (apply hash-set)))))
                       :on-mouse-leave #(when-not (empty? (:connected-nodes state)) (swap! app-state assoc :connected-nodes #{}))
                       :style {
                         :left (str (+ x-offset (get-in node [:points :x :min])) "px")
                         :top (str (+ y-offset (get-in node [:points :y :min])) "px")
                         :width (str (* (core/get-node-dim (:node node) :width) ppi) "px")
                         :height (str (* (core/get-node-dim (:node node) :height) ppi) "px")
                         :background-color (:color (:node node) "")
                       }}
                  [:div {:class "node-bar node-topbar"}
                    [:span
                      { :class "delete"
                        :title "Delete"
                        :data-help-link "delete-card"
                        :on-click #(if (:cluster node)
                                     ((rerender!  delete-cluster) (:id node) true)
                                     ((rerender!  delete-node) (:id node)))
                       }
                      "×"
                     ]
                    [:span
                      { :class "copy"
                        :title "Copy"
                        :data-help-link "copy-card"
                        :on-click #(
                                    (if (:cluster node)
                                     ((rerender! clone-cluster) (:id node))
                                     ((rerender! clone-node) (:id node)))
                                    (.preventDefault %)
                                    false)
                       } "+"]
                    (when (:node node)
                      [:span {:class "color-picker"
                              :data-help-link "card-color"}
                        (map
                          (fn [color] 
                            [:span
                             {:title (str (:name color) " (shortcut " (:shortcut color) ")")
                              :class "color-swatch"
                              :style {:background-color (:hex color)}
                              :key (:name color)
                              :on-click #((rerender! recolor-node) (:id node) (:hex color))
                              }
                             ]
                           )
                          core/colors)
                       ]
                     )
                   ]
                  [:div ;Text box containing node label
                    { :class "task-text"
                      :data-help-link "card-text"
                      :title "Click to Change"
                      :on-click (fn [e] (edit-node! (:id node)) false)}
                    ;Contents are the node/cluster text
                    (or (get-in node [:node :text]) (get-in node [:cluster :text]))
                   ]
                  (when (:node node)
                    [:span ;Nodes have a resize hander in the bottom right
                      {:class "draggable node-resize"
                       :data-help-link "card-resize"
                       }
                      ""
                     ]
                   )
                 ]
               )
              )
              (:gnodes state))
            ;Cluster overlays
            (map
              (fn [cluster]
                (when (= (:type cluster) :cluster)
                  (let [
                    ;top (+ 1 y-offset (get-in cluster [:points :y :min]))
                    top (if (= (:direction state) :up)
                          (- (+ y-offset (get-in cluster [:points :y :max])) 21)
                          (+ 1 y-offset (get-in cluster [:points :y :min])))
                    left (+ 1 x-offset (get-in cluster [:points :x :min]))
                    right (+ -1 x-offset (get-in cluster [:points :x :max]))
                    width (- right left)
                    ]
                  [:div {:class (str "cluster-overlay"
                                     (when (= (:id cluster) (:selected-node-id state)) " selected")
                                     (when (contains? boxed-clusters (:id cluster)) " boxed")
                                     )
                         :key (:id cluster)
                         ;Store the cluster ID as a dom attribute so event handlers can extract it later
                         :data-clusterid (:id cluster)
                         :on-mouse-down cluster-mousedown
                         :on-touch-start cluster-mousedown
                         ;On click, rename the cluster
                         :on-click (fn [e] (edit-node! (:id cluster)) false)
                         ;:on-click #((rerender! rename-cluster-prompt) (:id cluster))
                         :style {
                           :left (str left "px")
                           :top (str top "px")
                           :width (str width "px")
                         }}
                    ;Button in top right to collapse cluster into a single node
                    [:span
                      { :class "collapse"
                        :title "Collapse"
                        :on-click (fn [e] ((rerender! (fn [state] (assoc-in state [:clusters (:id cluster) :collapsed] true )))) false)
                       }
                      "-"
                     ]
                    [:span
                      { :class "copy"
                        :title "Copy"
                        :on-click #(
                                    ((rerender! clone-cluster) (:id cluster))
                                    (.preventDefault %)
                                    false)
                       } "+"]
                    ;Button in top right to delete cluster
                    [:span
                      { :class "delete"
                        :title "Delete"
                        :on-click (fn [e] ((rerender! delete-cluster) (:id cluster)) false)
                       }
                      "×"
                     ]
                     (:text (get (:clusters state) (:id cluster)))
                   ]))
               )
              (:gnodes state))
          ]
          ; + / - icon by cursor when previewing add/remove link or add to/remove from cluster
          (when (:preview-points @ui-state)
            (let [
              {shift-key :shift-key alt-key :alt-key end :end start-node-id :start-node-id start-cluster-id :start-cluster-id end-node-id :end-node-id end-cluster-id :end-cluster-id} (:preview-points @ui-state)
                  
              icon 
                (cond
                  (and start-node-id end-node-id (not= end-node-id start-node-id))
                    (cond
                      shift-key "#tag"
                      (find-dep state [start-node-id end-node-id]) "#minus"
                      :else "#plus"
                     )
                  (and start-node-id end-cluster-id)
                    (if (= (:cluster-id (core/get-node (:nodes state) start-node-id)) end-cluster-id)
                      "#minus"
                      "#plus"
                     )
                  (and start-cluster-id end-node-id)
                    (if (= (:cluster-id (core/get-node (:nodes state) end-node-id)) start-cluster-id)
                      "#minus"
                      "#plus"
                     )
                  (and start-cluster-id end-cluster-id)
                    (if (= (:cluster-id (get (:clusters state) start-cluster-id)) end-cluster-id)
                      "#minus"
                      "#plus"
                     )
                  )
                  ]
              (when icon
                [:svg {:class "link-preview-icon"
                       :style {:position "absolute"
                               :top (str (- (:y end) 5) "px")
                               :left (str (+ 13 (:x end)) "px")
                               :width "18px"
                               :height "18px"
                               :fill ({"#plus" "green" "#minus" "red" "#tag" "green"} icon)
                               }}
                    ;This is kinda lame, but if we just have 1 use tag and switch the href, React tries to update just the href attribute which is read-only
                    [:use {:href "#plus" :style (if (not= icon "#plus") {:display "none"} {})}]
                    [:use {:href "#minus" :style (if (not= icon "#minus") {:display "none"} {})}]
                    [:use {:href "#tag" :style (if (not= icon "#tag") {:display "none"} {})}]
                 ]))
           )
          (when (:cluster-points @ui-state)
            [:svg {:class "link-preview"}
             (let [points (:cluster-points @ui-state)
                   rect (core/bounding-rect [(:start points) (:end points)])
                   width (core/width rect)
                   height (core/height rect)
                   ]
               [:rect {:x (get-in rect [:x :min]) :y (get-in rect [:y :min]) :width width :height height :stroke "#666" :stroke-width 2 :stroke-dasharray "8,4" :fill "none"}]
               )
             ]
            )
          ; Arrow when dragging from node (plus node outline if cursor is on blank area)
          (when (:preview-points @ui-state)
            [:svg {:class "link-preview"}
               (let [points (:preview-points @ui-state)
                     {start :start end :end start-id :start-node-id start-cluster-id :start-cluster-id end-id :end-node-id end-cluster-id :end-cluster-id alt-key :alt-key} (:preview-points @ui-state)
                     color "#666"
                     ;point to source node if we're on blank space and above our start point
                     point-backwards? (and (not (or end-id end-cluster-id)) (= :before (core/compare-coords end start ((:direction state) core/directions))))
                     arrow-point (if point-backwards? start end)
                     angle (->
                             (core/get-angle start end)
                             ;if we're pointing back at the source node, need to flip 180 deg
                             (+ (if point-backwards? 180 0))
                             )
                     ]
                [:g {:class "edge pv-line"}
                 ;if on empty space, draw rectangle for placeholder node
                 (when-not (or (and start-cluster-id (not alt-key) (< (:y end) (:y start))) end-id end-cluster-id)
                   [:g {:transform (str "translate(" (:x end) " " (:y end) ")")}
                    [:rect {:x -72 :y -43 :width 144 :height 86 :stroke color :stroke-width 2 :stroke-dasharray "8,4" :fill "none"}]
                    (when alt-key [:g {:transform "translate(24 -37) scale(0.02)" :fill "#666"} [:use {:href "#clone"}]])
                    ])
                 ;preview link line
                 [:line {:stroke color :x1 (:x start) :y1 (:y start) :x2 (:x end) :y2 (:y end)}]
                 ;arrow head (when not on same node we started on)
                 (when (not= start-id end-id)
                   [:polygon {:fill color
                              :stroke color
                              :points (core/polygon-points [(:x arrow-point) (:y arrow-point)] [[-10 -3.5] [0 7]])
                              :transform (str "rotate(" angle " " (:x arrow-point) " " (:y arrow-point) ")")}])
                 ]
               )
             ]
           )
          ;SVG containing the graphviz graph. Used for edges and clusters
          [:div {:dangerouslySetInnerHTML {:__html
                (:svg state)
              }}]
          ;Overlay when editing the text of a node
          (when (:edit-node-id @ui-state)
            (let [ edit-id (:edit-node-id @ui-state)
                   gnode (core/get-node (:gnodes state) edit-id)
                   node? (= (:type gnode) :node)
                   node-text (reagent/atom (or (get-in gnode [:cluster :text]) (get-in gnode [:node :text])   ))
                  ]
              [:div {:class "edit-overlay"
                     :on-click (fn [e] (edit-done! gnode @node-text))
                     }
                  [core/text-area node-text {:on-click (fn [e] false)
                              :on-key-down (fn [e]
                                             (if (contains? #{13 27} (.-which e))
                                               (edit-done! gnode @node-text) ;enter/escape saves changes
                                               (when (= 9 (.-which e)) ; tab switches edit focus
                                                 (edit-done! gnode @node-text (get-next-node-id state (if (.-shiftKey e) -1 1) edit-id))
                                                 false
                                                )))
                              :rows (if node? 200 1)
                              :style (get-textbox-style gnode x-offset y-offset)} ]
               ]
             )
           )
         ]
       ]
     )
   )
;; Init
  (.initializeTouchEvents js/React true)
  ;handle key events
  (set! (.-onkeydown js/document) (fn on-key-press [evt] 
    (let [shift (.-shiftKey evt);whether shift key is being held down
          selected (:selected-node-id @app-state)
          selected-gnode (core/get-node (:gnodes @app-state) selected)
          node-selected? (and selected (:node selected-gnode))
          cluster-selected? (and selected (:cluster selected-gnode))
          collapsed-cluster-selected? (and cluster-selected? (= (:type selected-gnode) :node))
          keycode (.-which evt)
          keychar (clojure.string/lower-case (char keycode))
          color (get core/color-keycode-lookup keychar)]
      (when (= (.-body js/document) (.-target evt))
        (case keycode
          ;Esc
          27 (swap! app-state assoc :selected-node-id nil)
          ;<
          37 (when shift (hist/undo!))
          ;>
          39 (when shift (hist/redo!))
          ;d
          68 (when selected
               (cond
                 node-selected? ((rerender! delete-node) selected)
                 collapsed-cluster-selected? ((rerender! delete-cluster) selected true)
                 cluster-selected? ((rerender! delete-cluster) selected false)
                )
               )
          ;enter/e
          (13 69) (edit-node! selected)
          ;i
          73 (when node-selected? ((rerender! add-cluster) [selected]))
          ;j
          74 (hist/off-the-record ((rerender! select-next-node) 1))
          ;k
          75 (hist/off-the-record ((rerender! select-next-node) -1))
          ;n
          78 ((rerender! add-node) [] [] (core/prompt "Enter title for node:" ""))
          ;,/<
          188 (when (and shift node-selected?) ((rerender! add-and-name-node!) [] [selected] nil))
          ;./>
          190 (when (and shift node-selected?) ((rerender! add-and-name-node!) [selected] [] nil))
          ;-
          189 (when node-selected? ((rerender! on-toggle-dep-click) selected (if shift (core/prompt "Enter link text:" "") nil)))
          ""
         )
        (when color ((rerender! recolor-node) selected (:hex color)))
       )
   )))

  (defn render! []
    (reagent/render
      [graph @app-state]
      (.getElementById js/document "app")))

  ;the first time the page loads, load the app state from the url hash
  (defn on-page-load! []
    (devtools/enable-feature! :sanity-hints)
    (devtools/install!)
    (swap! app-state load-hash)
   )
  (defonce on-page-load (on-page-load!))

  ;whenever the app state changes, render the whole page
  (add-watch app-state :on-change (fn [_ _ _ _] (render!)))
  (add-watch ui-state :on-change (fn [_ _ _ _] (render!)))
  (swap! app-state update-state)
  (hist/record! app-state :app-state)
