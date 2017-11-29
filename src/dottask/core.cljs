(ns dottask.core
  (:require
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
    [tubax.core :as tbx])
  (:require-macros
    [historian.core :as hist]
   )
  (:import [goog.events EventType])
)
;; Constants
  (def ppi 72); pixels per inch
  ;Colors for the nodes. :shortcut is the keyboard shortcut to set selected node that color
  (def colors [
    {:name "white" :hex "#C9C9C9" :shortcut "w"}
    ;After each of these shades, I've included a lighter and darker shade in case I want to change them in the future
    {:name "red" :hex "#D1686E" :shortcut "r"}
    ;{:name "#A7383D" :hex "#A7383D"}
    ;{:name "#FBA7AB" :hex "#FBA7AB"}
    {:name "orange" :hex "#D4B06A" :shortcut "o"}
    ;{:name "#AA8339" :hex "#AA8339"}
    ;{:name "#FFE2AA" :hex "#FFE2AA"}
    {:name "yellow" :hex "#D4D36A" :shortcut "y"}
    ;{:name "#AAA939" :hex "#AAA939"}
    ;{:name "#FFFEAA" :hex "#FFFEAA"}
    {:name "green" :hex "#5FAE57" :shortcut "g"}
    ;{:name "#378B2E" :hex "#378B2E"}
    ;{:name "#92D18B" :hex "#92D18B"}
    {:name "blue" :hex "#4E638E" :shortcut "b"}
    ;{:name "#2D4471" :hex "#2D4471"}
    ;{:name "#7788AA" :hex "#7788AA"}
    {:name "purple" :hex "#744B8E" :shortcut "v"}
    ;{:name "#562A72" :hex "#562A72"}
    ;{:name "#9675AB" :hex "#9675AB"}
  ])
  (def color-keycode-lookup (zipmap (map :shortcut colors) colors))
  ;List of edge directions
  (def directions {
    :up {
      :label "up" ;label to use in dropdown
      :dot "BT" ;graphviz rankdir
      :coord :y ;x/y axis
      :before > ;function to compare x/y coordinates. Returns true if first arg is "before" second
     }
    :down {
      :label "down"
      :dot "TB"
      :coord :y
      :before <
     }
    :left {
      :label "left"
      :dot "RL"
      :coord :x
      :before >
     }
    :right {
      :label "right"
      :dot "LR"
      :coord :x
      :before <
     }
   })
;; Utils
  (defn debug [result] ;log arg to console and return it
    (.log js/console "DEBUG" result)
    result
   )
  (defn prompt [message val] ;Present user with a prompt. val is the default value
    (js/prompt message val)
    )
  (defn toggle [dict key] ;Toggle a dict key true/false
    (assoc dict key (not (key dict)))
    )
  (defn toggler [state key] ;return a func that swaps a state key true/false
    (fn []
      (swap! state toggle key)
     )
   )
  (defn extent [numbers] ;return the min/max numbers in the seq
    { :min (apply min numbers)
      :max (apply max numbers)
    } 
   )
  (defn map-vals [func hmap] ;map func over the vals of a hash-map
    (into {}
      (for [[k v] hmap]
        [k (func v)]
       )
     )
   )
  (defn hesc [text] ;escape html
    (.getTypedStringValue (shtml/htmlEscape text))
   )
  (defn esc [text] ;escape a string
    (gstring/escapeString (str text))
   )
  ; get mouse coordinates of event
  (defn coords [evt]
    {
      :x (.-clientX evt)
      :y (.-clientY evt)
     }
   )
  ;compare two coordinates and return :before/:after
  ;this/other are hash-maps with :x and :y keys
  ;direction is val from the directions constant
  (defn compare-coords [this other direction] 
    (let [coord (:coord direction)
          before (:before direction)]
      (if (before (coord this) (coord other)) :before :after)
     )
   )
  ;take a map of keys to lists of vals and invert to a map of each val to its key
  ;{:odd [1 3] :even [2 4]} -> {1 :odd 3 :odd 2 :even 4 :even}
  (defn invert-list-map [hmap]
    (into
      {}
      (map
        (fn [item]
          (map (fn [val] [val (first item)]) (second item))
         )
        hmap
       )
     )
   )
  (defn get-node [nodes id]
    (first (filter #(= id (:id %)) nodes))
   )
  (defn show-help []
    (js/alert (str 
      "Mouse:\n"                                      
      "\tclick on card text: change text\n"
      "\tdouble-click on card: add box around card\n"
      "\tdrag from one card to another: link/unlink cards\n"
      "\t   hold down shift to set/change the label for the link\n"
      "\tdrag from one card to empty space above/below:\n"
      "\t   create card linked to/from start card\n"
      "\t   hold down shift to 'split' the card into 2\n"
      "\tdrag between cards and box titles: box/unbox cards\n"
      "Buttons:\n"
      "\tx: delete card/box\n"
      "\thandle at bottom right: resize card\n"
      "Keyboard Shortcuts:\n"
      "\tj/k: go to previous/next card\n"
      "\tEsc: de-select card\n"
      "\td: delete selected card\n"
      "\te: edit text of selected card\n"
      "\ti: put selected card inside a new box\n"
      "\t" (clojure.string/join "/" (map :shortcut colors)) ": change color of selected card to " (clojure.string/join "/" (map :name colors)) "\n" 
      "\t</>: add card before/after\n"
      "\t-: link/unlink cards (first on source, then target)\n"
      "Saving: clicking save adds all the page state to the url hash. "
      "This can be bookmarked so that you can reload the page later "
      "and pick up where you left off."
    ))
   )
  ;get a node's width/height, using the proper defaults if they're not set
  (defn get-node-dim [node dim]
    (case dim
      :width (or (:width node) 2)
      :height (or (:height node) 1.2)
      )
   )
  ;get the node id off of a clicked element. looks it up via the data-nodeid html attribute
  (defn el->nodeid [el]
    (let [node (dom/getAncestorByClass el "node-overlay")
          node-id (when node (.getAttribute node "data-nodeid"))
          ]
      node-id
     )
   )
  ;get the cluster id off of a clicked element. looks it up via the data-nodeid html attribute
  (defn el->clusterid [el]
    (let [cluster (dom/getAncestorByClass el "cluster-overlay")
          clusternode (dom/getAncestorByClass el "cluster-node")
          cluster-id (or
            (when cluster (.getAttribute cluster "data-clusterid"))
            (when clusternode (.getAttribute clusternode "data-nodeid"))
           )
          ]
      cluster-id
     )
   )
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
  }))
  ; Holds the state of the current ui (whether popups are visible, etc)
  ; This is separate from the app-state because we don't want undo/redo to toggle popups, only the graph state
  (defonce ui-state (reagent/atom {
    :bulk-add-modal-visible? false ;setting this to true makes the bulk add modal pop up
    :resize-points nil ;while dragging the node resize handle, this stores size for the node (upper left corner is node's upper left, bottom right is position of the mouse). When this is set, a preview of the new node is rendered.
    ;:resize-points {:x {:min 162, :max 326}, :y {:min -452, :max -316}}
  }))
;; Save/Load state
  ;keys of app-state to save in the hash. the rest can be computed from this.
  (def state-to-save [:id-counter :clusters :nodes :deps])
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
    (let [rename-lookup (invert-list-map hidden-ids)]
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
      (str (:id node) "[label=\"" (esc label) "\" color=\"" (or (:color node) "#666666")  "\" height=\"" (get-node-dim node :height) "\" width=\"" (get-node-dim node :width) "\"];")
     )
   )
  ;Get dot representation for a cluster and all of its contents
  ;if cluster-id is nil, returns representation of all nodes/clusters in the graph
  (defn cluster->dot [cluster-id clusters nodes-by-cluster-id clusters-by-cluster-id hidden-ids labels?]
    (let [cluster (get clusters cluster-id)
          label (if labels? (:text cluster) " ")]
    (if (:collapsed cluster)
      (node->dot {:id cluster-id} label)
      (str
        "\nsubgraph " (or cluster-id "root") "{\n" ;we put all the nodes/clusters inside a 'root' subgraph (mostly because it makes code cleaner)
        "label=\"" (esc label) "\";\n "
        "color=\"#666666\";\n "
        ;All the child clusters
        (clojure.string/join "\n" (map #(cluster->dot % clusters nodes-by-cluster-id clusters-by-cluster-id hidden-ids labels?) (map :id (get clusters-by-cluster-id cluster-id))))
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
       "digraph G {\n"
       "dpi=" ppi ";\n"
       "rankdir=" (:dot direction) ";\n" ;direction
       "node [label=\"\" shape=\"rect\" penwidth=\"4\"]\n" ;default node attributes
       "edge [color=\"#555555\"]\n" ;default edge attributes
       (cluster->dot nil clusters nodes-by-cluster-id clusters-by-cluster-id hidden-ids labels?)
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
        (map extent)
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
          ]
      {:nodes 
        (->>
          items
          (filter #(= (:class(:attributes %)) "node"))
          (map (fn [node]
                 {
                  :id (get-cljdot-id node)
                  :points (get-points node)
                  }
                 ))
         )
        :clusters
          (->>
            items
            (filter #(= (:class(:attributes %)) "cluster"))
            (map (fn [cluster]
                   {
                    :id (get-cljdot-id cluster)
                    :points (get-points cluster)
                    }
                 ))
           )
       }
    )
  )

  (defn dot->svg [dot]
    (string/replace;TODO replacing pt with px globally might be too general
      (js/Viz dot "svg") 
      #"pt\""
      "px\""
     )
  )
;; Rerender/ update state
  ;Whenever you change the nodes, deps, etc, you need to re-generate the graph
  (defn update-state [state]
    (let [
          dot (graph->dot (:nodes state) (:deps state) (:clusters state) ((:direction state) directions) false)
          same-graph (= dot (:dot state));if the dot is the same, don't need to re-calc svg/gdata
          svg (if same-graph (:svg state) (dot->svg dot))
          gdata
            (if same-graph
              {:nodes (:gnodes state) :clusters (:gclusters state)}
              (svg->gdata svg)
            )
          ]
      (assoc state :dot dot :svg svg
             ;add the nodes from :nodes state to the gdata version.
             ;even if the dot representation hasn't changed, we want to always update this.
             :gnodes (mapv #(assoc % :node (get-node (:nodes state) (:id %)) :cluster (get-in state [:clusters (:id %)]) ) (:nodes gdata))
             :gclusters (:clusters gdata)
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
  ; prompt a user for a new name and if they provide one, rename the node to that.
  (defn rename-prompt [state node-id]
    (let [node (get-node (:nodes state) node-id)
          new-name (prompt "Enter new name" (:text node))
          ]
      (if new-name
        (rename-node state node-id new-name)
        state
       )
     )
   )
  (defn select-node [state node-id]
    (assoc state :selected-node-id node-id)
   )
  (defn select-next-node
    ([state] (select-next-node state 1))
    ;direction = 1/-1 for forwards/backwards
    ([state direction]
     (let [gdata (remove :cluster (:gnodes state))
           positioned-nodes (sort (map (fn [node]  ; [[y x id]...]
                                   (vector (apply + (vals (get-in node [:points :y]))); sort by the midpoint for the height
                                           (get-in node [:points :x :min])
                                           (:id node)
                                    ))
                                 gdata))
           node-index (apply hash-map (apply concat (map-indexed (fn [idx node] [(nth node 2) idx]) positioned-nodes)))
           old-index (get node-index (:selected-node-id state))
           new-index (if (nil? (:selected-node-id state)) 0 (mod (+ old-index direction) (count positioned-nodes)))
           new-node (nth positioned-nodes new-index)
           new-node-id (nth new-node 2)
           ]
        (assoc state :selected-node-id new-node-id)
       )
     )
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
            new_state (assoc state :nodes new_nodes :deps all_deps :id-counter (inc (:id-counter state)))
            ]
        (if return-id?
          [new_state  new_node_id]
          new_state
         )
       )
     )
   )
  (defn add-nodes [state labels]
   (reduce #(add-node %1 [] [] %2) state labels) 
   )
  (defn inside-cluster? [clusters child parent-id]
    (cond
      (nil? (:cluster-id child)) false
      (= parent-id (:cluster-id child)) true
      :else (inside-cluster? clusters (get clusters (:cluster-id child)) parent-id)
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
      (add-cluster state (prompt "Enter a name for the box" "") node-ids)
     )
    ([state text node-ids]
      (add-cluster state text node-ids false)
     )
    ([state text node-ids return-id?]
      (let [cluster-id (str "cluster_" (:id-counter state))
            new-state (reduce
                        #(recluster-node %1 %2 cluster-id)
                        (assoc state :clusters (assoc (:clusters state) cluster-id {:id cluster-id :text text :collapsed false}) :id-counter (inc (:id-counter state)))
                        node-ids
                       )
            ]
        (if return-id?
          [new-state cluster-id]
          new-state
         )
       )
     )
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
              :clusters (map-vals wipe-id (dissoc (:clusters state) id))
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
      (let [new-name (prompt "Enter new name" (get-in state [:clusters cluster-id :text]))]
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
    (->
      (add-cluster state [])
      (toggle-cluster-nesting inner-cluster-id (str "cluster_" (:id-counter state)))
      ;TODO it's dirty that we guess the cluster id based on id-counter.
     )
    )
  (defn toggle-node-cluster [state node-id cluster-id]
    (let [new-cluster-id (if (= cluster-id (:cluster-id (get-node (:nodes state) node-id))) "" cluster-id)]
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
          node (get-node nodes node-id)
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
  ;add/remove a dep
  (defn toggle-dep [state dep]
    (let [found (first (filter #(= (take 2 %) (take 2 dep)) (:deps state)))]
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
  (defn node-mouseup [src-node-id src-coords direction shift-key]
    (fn [e]
      (let [
            node-id (el->nodeid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            cluster-id (el->clusterid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            tgt-coords (coords e)
            ]
        (cond 
          ;On a node that's not a collapsed cluster. link to it.
          (and node-id (not= node-id cluster-id)) 
            (when (not= node-id src-node-id) ((rerender! toggle-dep-clear) [src-node-id node-id (if shift-key (prompt "Enter link text:" "") nil)]))
          ;On a cluster. add/remove node from cluster
          cluster-id
            ((rerender! toggle-node-cluster) src-node-id cluster-id) 
          ;On blank space. Add a new node before/after if the drag target is before/after the source
          :else
            ((rerender! add-or-split-node) src-node-id (compare-coords tgt-coords src-coords (direction directions)) shift-key)
         )
       )
     )
   )
  ;when a user lifts their mouse after dragging from a cluster
  (defn cluster-mouseup [src-cluster-id shift-key]
    (fn [e]
      (let [
            node-id (el->nodeid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            cluster-id (el->clusterid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            ]
        (if node-id
          ;target is a nede; put that node inside this cluster
          ((rerender! toggle-node-cluster) node-id src-cluster-id) 
          (when (not= cluster-id src-cluster-id);do nothing if on the same cluster the drag started on
            (if cluster-id
              ;on a different cluster, nest this one inside it
              ((rerender! toggle-cluster-nesting) src-cluster-id cluster-id)
               ;If not on a node/cluster, make a new node/cluster outside of this one
              ((rerender! outer-cluster-prompt) src-cluster-id)
             )
           )
         )
       )
     )
   )
  (defn resize-mouse [target move-key]
    ;This function is called when the user is dragging/releasing the mouse after clicking the resize handle
    ;If this was called on a drag event, move-key will be nil (otherwise it's the ID of an event handler that should be unregistered)
    ;While the mouse is dragging, this updates a placeholder's location by swapping ui-state
    ;When the mouse is lifted, this updates the actual node and relays the graph
    (fn [e]
      (let [ node( dom/getAncestorByClass target "node-overlay")
             container (dom/getAncestorByClass target "dotgraph")
             bounds (.getBoundingClientRect node)
             ctop (.-top (.getBoundingClientRect container))
             width (max (- (.-clientX e) (.-left bounds)) 35)
             height (max (- (.-clientY e) (.-top bounds)) 35)
             node-id (el->nodeid target)
            ]
        (if move-key
          ;Mouse lifted: update actual node and clear the resize placeholder
          (do 
            (events/unlistenByKey move-key)
            ((rerender! resize-node) node-id width height)
            (swap! ui-state (fn [state] (assoc state :resize-points nil :resize-label "")))
           )
          ;Mouse dragged: udpate the size of the resize placeholder
          (swap! ui-state (fn [state] (-> state (assoc-in [:resize-points :x :max] (+ width (get-in state [:resize-points :x :min]))) (assoc-in [:resize-points :y :max] (+ height (get-in state [:resize-points :y :min]))))))
         )
       )
     )
   )
  (defn node-mousedown [e direction]
    (if (classlist/contains (.-target e) "node-resize")
      (do ;draw a preview of the resized node and register the handler for when the mouse is lifted
        (let [target (.-target e)
              node-id (el->nodeid target)
              gnode (get-node (:gnodes @app-state) node-id)
              move-key (events/listen js/window EventType.MOUSEMOVE (resize-mouse (.-target e) nil))]
          (swap! ui-state (fn [state] (assoc state :resize-points (:points gnode) :resize-label (get-in gnode [:node :text]))))
          (events/listenOnce js/window EventType.MOUSEUP (resize-mouse target move-key))
         )
       )
      (events/listenOnce js/window (array EventType.MOUSEUP EventType.TOUCHEND) (node-mouseup (.getAttribute (dom/getAncestorByClass (.-target e) "node-overlay") "data-nodeid") (coords e) direction (.-shiftKey e)))
     )
   )
  (defn cluster-mousedown [e]
    (events/listenOnce js/window (array EventType.MOUSEUP EventType.TOUCHEND) (cluster-mouseup (.getAttribute (dom/getAncestorByClass (.-target e) "cluster-overlay") "data-clusterid") (.-shiftKey e)))
   )
;; Dom rendering
  (defn modal [is-visible? close! options contents]
    [:div {
           :on-click (fn [e] (when (classlist/contains (.-target e) "modal-backdrop") (close!)))
           :class (str "modal-backdrop" (if (is-visible?) "" " hidden"))}
      [:div {:class (str "modal " (:class options ""))}
        [:span {:class "x-button" :on-click close!} "×"]
        contents
       ] 
     ]
   )
  (defn keyed-modal [state modal-key options contents]
    (modal
      (fn [] (modal-key @state))
      (toggler state modal-key)
      options
      contents
     )
   )
  (defn textarea [value]
    [:textarea {
           :rows 20
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

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
    (defn bulk-add-modal []
      (let [bulk-text (reagent/atom ""); the text in the textbox
            mode (reagent/atom "")]; how to handle indentation. See parse-bulk-add for a description of the modes
        (fn []
          (keyed-modal ui-state :bulk-add-modal-visible? {:class "bulk-modal"}
            [:div
              [:div {:class "modal-title"} "Bulk Add"]
              [:div "Add a line of text for each node you want created"]
              [:select {:value @mode :on-change #(reset! mode (-> % .-target .-value))}
                [:option {:value "ignore"} "ignore"]
                [:option {:value "link"} "link"]
                [:option {:value "cluster"} "cluster"]
               ]
              [textarea bulk-text]
              [:div {:class "modal-buttons"}
                [:button
                 {
                   :style {:display "inline-block" :float "right"}
                   :on-click #(
                     let [
                          ;lines (remove empty? (clojure.string/split-lines @bulk-text))
                          parsed (parse-bulk-add @bulk-text)
                          ]
                     ((toggler ui-state :bulk-add-modal-visible?))
                     ((rerender! (fn [state] (->
                                               state
                                               (add-lines parsed @mode)
                                               ))))
                  )}
                 "Add nodes"]
               ]
             ]
           )
          )
       )
     )

  (defn graph [state]
    (let [[_ x-offset y-offset]
          (map js/parseInt (re-find #"translate\((\d+) (\d+)\)" (:svg state)))
          ]
      [:div
        {:on-key-press #(.log js/console %)}
        "Arrow Direction: "
        [:select {:value (:label ((:direction state) directions)) :on-change #((rerender! set-direction) (keyword (-> % .-target .-value)))} (map (fn [[dirkey dir]] [:option {:key dirkey :value dirkey :on-click #((rerender! set-direction) dirkey)} (:label dir)]) directions)]
        [:br]
        [:button {:on-click #((rerender! add-node) [] [])} "Add card"]
        [:button {:on-click (toggler ui-state :bulk-add-modal-visible?)} "Bulk add"]
        [:button {:on-click #((rerender! delete-all))} "Delete all"]
        [:button {:on-click #(save-hash @app-state)} "Save"]
        [:button {:on-click hist/undo!} "Undo"]
        [:button {:on-click hist/redo!} "Redo"]
        [:button {:on-click #(let [w (js/window.open)] (.write (.-document w) (str "<pre>" (hesc (graph->dot (:nodes @app-state) (:deps @app-state) (:clusters @app-state) ((:direction @app-state) directions) true)) "</pre>")))} "Show dot"]
        [:button {:on-click #(show-help)} "Help"]
        [bulk-add-modal]
        [:div {:class "dotgraph"
               ;:on-click #(when (= (.-nodeName (.-target %)) "polygon") ((rerender! add-node) [] []))
               }
          [:div {:class "graph-overlay"} 
            ;Resize overlay
            (when (:resize-points @ui-state)
              (let [xmin (get-in @ui-state [:resize-points :x :min])
                    xmax (get-in @ui-state [:resize-points :x :max])
                    ymin (get-in @ui-state [:resize-points :y :min])
                    ymax (get-in @ui-state [:resize-points :y :max])
                    x (+ x-offset xmin)
                    y (+ y-offset ymin)
                    width (- xmax xmin)
                    height (- ymax ymin)
                    ]
                [:div {:class "resize-overlay"
                       :style {
                         :left (str x "px")
                         :top (str y "px")
                         :width (str width "px")
                         :height (str height "px")
                                                      }}
                  [:div {:class "task-text"} (:resize-label @ui-state)]
                 ]
                )
              )
            ;Node overlays
            (map
              (fn [node]
                ;We draw divs on top of where the nodes are in the graphviz svg so that we can do more advanced styling/functionality
                ;Collapsed clusters are also turned into nodes. They have different styling and can be differentiated by a truthy :cluster value
                [:div {:class (str "node-overlay" (when (= (:id node) (:selected-node-id state)) " selected") (when (:cluster node) " cluster-node")) 
                       :key (:id node)
                       ;When cluster nodes are clicked on, expand the cluster
                       :on-click (when (:cluster node) #((rerender! (fn [state] (assoc-in state [:clusters (:id node) :collapsed] false )))))
                       ;When nodes are double-clicked, add a surrounding cluster
                       :on-double-click #((rerender! add-cluster) (prompt "Enter title for box:" "") [(:id node)])
                       ;Store the node ID as a dom attribute so event handlers can extract it later
                       :data-nodeid (:id node)
                       ;On mouse down/ touch start, set things up so that when the user stops dragging, we can add the link/node
                       :on-mouse-down (when (:node node) #(node-mousedown % (:direction state)))
                       :on-touch-start (when (:node node) #(node-mousedown % (:direction state)))
                       :style {
                         :left (str (+ x-offset (get-in node [:points :x :min])) "px")
                         :top (str (+ y-offset (get-in node [:points :y :min])) "px")
                         :width (str (* (get-node-dim (:node node) :width) ppi) "px")
                         :height (str (* (get-node-dim (:node node) :height) ppi) "px")
                         :background-color (:color (:node node) "")
                       }}
                  [:div {:class "node-sidebar"} ;sidebar opens on hover and contains delete/color buttons
                    [:span
                      { :class "delete"
                        :title "Delete"
                        :on-click #(if (:cluster node)
                                     ((rerender!  delete-cluster) (:id node) true)
                                     ((rerender!  delete-node) (:id node)))
                       }
                      "×"
                     ]
                    (when (:node node)
                      [:span {:class "color-picker"}
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
                          colors)
                       ]
                     )
                   ]
                  [:div ;Text box containing node label
                    { :class "task-text"
                      :title "Click to Change"
                      :on-click (fn [e] ((rerender! (if (:cluster node) rename-cluster-prompt rename-prompt)) (:id node)) false)}
                    ;Contents are the node/cluster text
                    (or (get-in node [:node :text]) (get-in node [:cluster :text]))
                   ]
                  (when (:node node)
                    [:span ;Nodes have a resize hander in the bottom right
                      {:class "draggable node-resize"}
                      ""
                     ]
                   )
                 ]
               )
              (:gnodes state))
            ;Cluster overlays
            (map
              (fn [cluster]
                (let [
                  top (+ 1 y-offset (get-in cluster [:points :y :min]))
                  left (+ 1 x-offset (get-in cluster [:points :x :min]))
                  right (+ -1 x-offset (get-in cluster [:points :x :max]))
                  width (- right left)
                  ]
                [:div {:class "cluster-overlay"
                       :key (:id cluster)
                       ;Store the cluster ID as a dom attribute so event handlers can extract it later
                       :data-clusterid (:id cluster)
                       :on-mouse-down cluster-mousedown
                       :on-touch-start cluster-mousedown
                       ;On click, rename the cluster
                       :on-click #((rerender! rename-cluster-prompt) (:id cluster))
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
                  ;Button in top right to delete cluster
                  [:span
                    { :class "delete"
                      :title "Delete"
                      :on-click (fn [e] ((rerender! delete-cluster) (:id cluster)) false)
                     }
                    "×"
                   ]
                   (:text (get (:clusters state) (:id cluster)))
                 ])
               )
              (:gclusters state))
          ]
          ;SVG containing the graphviz graph. Used for edges and clusters
          [:div {:dangerouslySetInnerHTML {:__html
                (:svg state)
              }}]
         ]
       ]
     )
   )
;; Init
  (.initializeTouchEvents js/React true)
  ;handle key events
  (set! (.-onkeydown js/document) (fn [evt] 
    (let [shift (.-shiftKey evt);whether shift key is being held down
          selected (:selected-node-id @app-state)
          keycode (.-which evt)
          keychar (clojure.string/lower-case (char keycode))
          color (get color-keycode-lookup keychar)]
      (when (= (.-body js/document) (.-target evt))
        (case keycode
          ;Esc
          27 (swap! app-state assoc :selected-node-id nil)
          ;<
          37 (when shift (hist/undo!))
          ;>
          39 (when shift (hist/redo!))
          ;d
          68 ((rerender! delete-node) selected) 
          ;e
          69 ((rerender! rename-prompt) selected)
          ;i
          73 ((rerender! add-cluster) (prompt "Enter title for box:" "") [selected]) 
          ;j
          74 (hist/off-the-record ((rerender! select-next-node) 1))
          ;k
          75 (hist/off-the-record ((rerender! select-next-node) -1))
          ;n
          78 ((rerender! add-node) [] [] (prompt "Enter title for node:" ""))
          ;,/<
          188 (when shift ((rerender! add-node) [] [selected] (prompt "Enter title for node:" "")))
          ;./>
          190 (when shift ((rerender! add-node) [selected] [] (prompt "Enter Title:" "")))
          ;-
          189 ((rerender! on-toggle-dep-click) selected (if shift (prompt "Enter link text:" "") nil))
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
  (defonce on-page-load (do 
    (devtools/enable-feature! :sanity-hints)
    (devtools/install!)
    (swap! app-state load-hash)
   ))

  ;whenever the app state changes, render the whole page
  (add-watch app-state :on-change (fn [_ _ _ _] (render!)))
  (add-watch ui-state :on-change (fn [_ _ _ _] (render!)))
  (swap! app-state update-state)
  (hist/record! app-state :app-state)
