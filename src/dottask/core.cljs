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
    [tubax.core :as tbx])
  (:import [goog.events EventType])
)
;; Constants
  (def ppi 72); pixels per inch
  (def colors [
    {:name "white" :hex "#F5F5F5" :shortcut "w"}
    {:name "magenta" :hex "#F5CCF5" :shortcut "m"}
    {:name "red" :hex "#F5CCCC" :shortcut "r"}
    {:name "yellow" :hex "#F5F5CC" :shortcut "y"}
    {:name "green" :hex "#CCF5CC" :shortcut "g"}
    {:name "cyan" :hex "#CCF5F5" :shortcut "c"}
    {:name "blue" :hex "#CCCCF5" :shortcut "b"}
  ])
  (def color-keycode-lookup (zipmap (map :shortcut colors) colors))
;; Utils
  (defn debug [result]
    (.log js/console "DEBUG" result)
    result
   )
  (defn prompt [message val]
    (js/prompt message val)
    )
  (defn toggler [state key]
    (fn []
      (swap! state assoc key (not (key @state)))
     )
   )
  (defn extent [numbers] 
    { :min (apply min numbers)
      :max (apply max numbers)
    } 
   )
  (defn map-vals [func hmap]
    (into {}
      (for [[k v] hmap]
        [k (func v)]
       )
     )
   )
  (defn get-node [nodes id]
    (first (filter #(= id (:id %)) nodes))
   )
  ;removes an item if it's in the list, adds it if it's not
  (defn toggle-item [coll item]
    (let [ len (count coll)
           new_coll (remove #(= % item) coll)
          ]
      (if (= len (count new_coll))
        (conj new_coll item)
        new_coll
       )
     )
   )
  (defn show-help []
    (js/alert (str 
      "Mouse:\n"                                      
      "\tclick on blank space: add card\n"
      "\tclick on card text: change text\n"
      "\tdouble-click on card: add box around card\n"
      "\tdrag from one card to another: link/unlink cards\n"
      "\tdrag from one card to empty space above/below:\n"
      "\t   create card linked to/from start card\n"
      "\t   hold down shift to 'split' the card into 2\n"
      "\tdrag between cards and box titles: box/unbox cards\n"
      "Buttons:\n"
      "\tx: delete card/box\n"
      "\thandle at bottom right: resize card\n"
      "Keyboard Shortcuts:\n"
      "\tj/k: go to previous/next card\n"
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
  (defn get-node-dim [node dim]
    (case dim
      :width (or (:moving-width node) (:width node) 2)
      :height (or (:moving-height node) (:height node) 1.2)
      )
   )
  (defn el->nodeid [el]
    (let [node (dom/getAncestorByClass el "node-overlay")
          node-id (when node (.getAttribute node "data-nodeid"))
          ]
      node-id
     )
   )
  (defn el->clusterid [el]
    (let [cluster (dom/getAncestorByClass el "cluster-overlay")
          cluster-id (when cluster (.getAttribute cluster "data-clusterid"))
          ]
      cluster-id
     )
   )
;; State
  (defonce app-state (reagent/atom {
    :id-counter 6
    :nodes [
      { :id "node1" :text "Drag things" }
      { :id "node2" :text "Make nodes" }
      { :id "node3" :text "Make links" }
      { :id "node4" :text "???" }
      { :id "node5" :text "Profit!" }
    ]
    :clusters {}
    :selected-node-id nil
    :toggle-link-node-id nil
    :deps [["node1" "node2"] ["node1" "node3"] ["node2" "node4"] ["node3" "node4"] ["node4" "node5"]]
    :svg ""
    :bulk-add-modal-visible? false
  }))
;; Save/Load state
  (def state-to-save [:id-counter :clusters :nodes :deps])
  (defn save-hash [state]
    (aset js/window "location" "hash" (js/encodeURIComponent(pr-str(select-keys state state-to-save))))
    )
  (defn load-hash [state]
    (merge state (reader/read-string (js/decodeURIComponent (apply str (rest (aget js/window "location" "hash"))))))
    )
;; Make graph
  (defn cluster->dot [cluster-id nodes-by-cluster-id clusters-by-cluster-id]
    (str
      "\nsubgraph " (or cluster-id "root") "{\n"
      "label=\" \";\n "
      (clojure.string/join "\n" (map #(cluster->dot % nodes-by-cluster-id clusters-by-cluster-id) (map :id (get clusters-by-cluster-id cluster-id))))
      "\n"
      (clojure.string/join ";\n" (map :id (get nodes-by-cluster-id cluster-id)))
      "}\n"
    )
  )
  (defn to-dot [nodes deps clusters]
    (let [nodes-by-cluster-id (group-by :cluster-id nodes) clusters-by-cluster-id (group-by :cluster-id (vals clusters))]
      (str
       "digraph G {\n"
       "dpi=72;"
       "node [label=\"\" shape=\"rect\"]\n"
       (cluster->dot nil nodes-by-cluster-id clusters-by-cluster-id)
        (->>
          (concat
            (map #(str (:id %) "[height=\"" (get-node-dim % :height) "\" width=\"" (get-node-dim % :width) "\"];") nodes)
            (map #(str (first %) "->" (second %) ";") deps)
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
  (defn get-gdata [cljdot]
    (->>
      cljdot
      :content
      first
      :content
    )
    (let [ items (->>
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
          dot (to-dot (:nodes state) (:deps state) (:clusters state))
          same-graph (= dot (:dot state));if the dot is the same, don't need to re-calc svg/gdata
          svg (if same-graph (:svg state) (dot->svg dot))
          gdata
            (if same-graph {:nodes (:gnodes state) :clusters (:gclusters state)} (->>
                svg
                tbx/xml->clj
                get-gdata
              )
            )
          ]
      (assoc state :dot dot :svg svg
             ;add the nodes from :nodes state to the gdata version.
             ;even if the dot representation hasn't changed, we want to always update this.
             :gnodes (mapv #(assoc % :node (get-node (:nodes state) (:id %))) (:nodes gdata))
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
  (defn resize-node [state node-id width height evt-type]
    (let [ height-pt (/ height ppi)
           width-pt (/ width ppi)
           w (evt-type {:mousemove :moving-width :mouseup :width})
           h (evt-type {:mousemove :moving-height :mouseup :height})
          ]
      (update-node state node-id #(assoc (dissoc % :moving-width :moving-height) w width-pt h height-pt))
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
    ([state direction]
     (let [gdata (:gnodes state)
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
  (defn add-node
    ( [state befores afters]
      (add-node state befores afters "")
     )
    ( [state befores afters text]
      (let [
            new_node {:id (str "node" (:id-counter state)) :text text}
            new_nodes (conj (:nodes state) new_node)
            all_deps (reduce into (:deps state) [
                       (map #(vector % (:id new_node)) befores)
                       (map #(vector (:id new_node) %) afters)
                                      ]
                             )
            ]
        (assoc state :nodes new_nodes :deps all_deps :id-counter (inc (:id-counter state)))
       )
     )
   )
  (defn inside-cluster? [clusters child parent-id]
    (.log js/console "ddddd" clusters child parent-id)
    (cond
      (nil? (:cluster-id child)) false
      (= parent-id (:cluster-id child)) true
      :else (inside-cluster? clusters (get clusters (:cluster-id child)) parent-id)
     )
   )
  (defn toggle-cluster-nesting[state child-id parent-id]
    (if (inside-cluster? (:clusters state) (get-in state [:clusters parent-id]) child-id)
      state
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
      (let [cluster-id (str "cluster_" (:id-counter state))]
        (reduce
          #(recluster-node %1 %2 cluster-id)
          (assoc state :clusters (assoc (:clusters state) cluster-id {:id cluster-id :text text}) :id-counter (inc (:id-counter state)))
          node-ids
         )
       )
     )
   )
  (defn delete-cluster [state id]
    (let [wipe-id #(if (= (:cluster-id %) id) (assoc % :cluster-id (get-in state [:clusters id :cluster-id])) %)]
      (assoc state
        :nodes (map wipe-id (:nodes state))
        :clusters (map-vals wipe-id (dissoc (:clusters state) id))
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
  (defn outer-cluster-prompt [state inner-cluster-id]
    (->
      (add-cluster state [])
      (toggle-cluster-nesting inner-cluster-id (str "cluster_" (:id-counter state)))
     )
    )
  (defn toggle-node-cluster [state node-id cluster-id]
    (let [new-cluster-id (if (= cluster-id (:cluster-id (get-node (:nodes state) node-id))) "" cluster-id)]
      (recluster-node state node-id new-cluster-id)
     )
   )
  (defn add-nodes [state labels]
   (reduce #(add-node %1 [] [] %2) state labels) 
   )
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
  ;new-node-pos is :before or :after
  (defn split-node [state node-id new-node-pos]
    (let [
          new-node-id (str "node" (:id-counter state))
          new_node {:id new-node-id :text ""}
          new_nodes (conj (:nodes state) new_node)
          new_deps (move-deps (:deps state) node-id new-node-id new-node-pos)
          final_deps (conj new_deps (if (= new-node-pos :before) [new-node-id node-id] [node-id new-node-id]))
          ]
        (assoc state :nodes new_nodes :deps final_deps :id-counter (inc (:id-counter state)))
      ))
  (defn add-or-split-node [state node-id position split?]
    (if split?
      (split-node state node-id position)
      (if (= position :before)
        (add-node state [] [node-id])
        (add-node state [node-id] [])
       )
     )
   )
  (defn toggle-dep [state dep]
    (update-in state [:deps] #(vec (toggle-item % dep)))
   )
  (defn toggle-dep-clear [state dep]
    (assoc (toggle-dep state dep) :toggle-link-node-id nil)
    )
  (defn on-toggle-dep-click [state node-id]
    (let [last-clicked-id (:toggle-link-node-id state)]
      (if (nil? last-clicked-id)
        (assoc state :toggle-link-node-id node-id)
        (if (= last-clicked-id node-id)
          (assoc state :toggle-link-node-id nil)
          (toggle-dep-clear state [last-clicked-id node-id])
         )
        )
     )
   )
;; Event Handlers
  (defn link-mouseup [src-node-id src-y shift-key]
    (fn [e]
      (let [
            node-id (el->nodeid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            cluster-id (el->clusterid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            ]
        (if node-id
          ; If on a different node, link to it
          (when (not= node-id src-node-id) ((rerender! toggle-dep-clear) [src-node-id node-id]))
          (if cluster-id
            ((rerender! toggle-node-cluster) src-node-id cluster-id) 
            ; If not on a node, add a new node before/after based on deltaY
            ((rerender! add-or-split-node) src-node-id (if (< (.-clientY e) src-y) :before :after) shift-key)
            
         )
       )
     )
    )
  )
  (defn cluster-mouseup [src-cluster-id shift-key]
    (fn [e]
      (let [
            node-id (el->nodeid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            cluster-id (el->clusterid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            ]
        (if node-id
          ((rerender! toggle-node-cluster) node-id src-cluster-id) 
          (when (not= cluster-id src-cluster-id)
            (if cluster-id
              ; If on a different cluster, nest this one inside it
              ((rerender! toggle-cluster-nesting) src-cluster-id cluster-id)
               ;If not on a node/cluster, make a new node/cluster outside of this one
              ((rerender! outer-cluster-prompt) src-cluster-id)
             )
           )
         )
       )
     )
   )
  (defn resize-mouse [target evt-type move-key]
    (fn [e]
      (let [ node( dom/getAncestorByClass target "node-overlay")
             container (dom/getAncestorByClass target "dotgraph")
             bounds (.getBoundingClientRect node)
             ctop (.-top (.getBoundingClientRect container))
             width (- (.-clientX e) (.-left bounds))
             height (- (.-clientY e) (.-top bounds))
             node-id (el->nodeid target)
            ]
        (when (and (> width 30) (> height 30))
          ((rerender! resize-node) node-id width height evt-type)
         )
        (when move-key
          (events/unlistenByKey move-key)
         )
       )
     )
   )
  (defn node-mousedown [e]
    (if (classlist/contains (.-target e) "node-resize")
      (do 
        (let [move-key (events/listen js/window EventType.MOUSEMOVE (resize-mouse (.-target e) :mousemove nil))]
          (events/listenOnce js/window EventType.MOUSEUP (resize-mouse (.-target e) :mouseup move-key))
         )
       )
      (events/listenOnce js/window (array EventType.MOUSEUP EventType.TOUCHEND) (link-mouseup (.getAttribute (dom/getAncestorByClass (.-target e) "node-overlay") "data-nodeid") (.-clientY e) (.-shiftKey e)))
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
  (defn bulk-add-modal []
    (let [bulk-text (reagent/atom "")]
      (keyed-modal app-state :bulk-add-modal-visible? {:class "bulk-modal"}
        [:div
          [:div {:class "modal-title"} "Bulk Add"]
          [:div "Add a line of text for each node you want created"]
          [textarea bulk-text]
          [:div {:class "modal-buttons"}
            [:button
             {
               :style {:display "inline-block" :float "right"}
               :on-click #(
                 let [lines (remove empty? (clojure.string/split-lines @bulk-text))]
                 (.log js/console "fooooom" @bulk-text lines)
                 ((rerender! add-nodes) lines)
                 ((toggler app-state :bulk-add-modal-visible?))
              )}
             "Add nodes"]
           ]
         ]
       )
     )
   )
  (defn graph [state]
    (let [[_ x-offset y-offset]
          (re-find #"translate\((\d+) (\d+)\)" (:svg state))
          ]
      [:div
        {:on-key-press #(.log js/console %)}
        [:button {:on-click #((rerender! add-node) [] [])} "Add card"]
        [:button {:on-click (toggler app-state :bulk-add-modal-visible?)} "Bulk add"]
        [:button {:on-click #(save-hash @app-state)} "Save"]
        [:button {:on-click #(show-help)} "Help"]
        (bulk-add-modal)
        [:div {:class "dotgraph"
               :on-click #(when (= (.-nodeName (.-target %)) "polygon") ((rerender! add-node) [] []))
               }
          [:div {:class "graph-overlay"} 
            ;Node overlays
            (map
              (fn [node]
                [:div {:class (str "node-overlay" (when (= (:id node) (:selected-node-id state)) " selected")) 
                       :key (:id node)
                       :on-click #((rerender! select-node) (:id node))
                       :on-double-click #((rerender! add-cluster) (prompt "Enter title for box:" "") [(:id node)])
                       :data-nodeid (:id node)
                       :on-mouse-down node-mousedown
                       :on-touch-start node-mousedown
                       :style {
                         :left (str (+ (js/parseInt x-offset) (get-in node [:points :x :min])) "px")
                         :top (str (+ (js/parseInt y-offset) (get-in node [:points :y :min])) "px")
                         :width (str (* (get-node-dim (:node node) :width) ppi) "px")
                         :height (str (* (get-node-dim (:node node) :height) ppi) "px")
                         :background-color (:color (:node node) "")
                       }}
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
                  [:span
                    { :class "delete"
                      :title "Delete"
                      :on-click #((rerender! delete-node) (:id node))
                     }
                    "×"
                   ]
                  [:div
                    { :class "task-text"
                      :title "Click to Change"
                      :on-click #((rerender! rename-prompt) (:id node))}
                    (get-in node [:node :text])
                   ]
                  [:span
                   { :style {
                             :position "absolute"
                             :right "0"
                             :bottom "0"
                             :width "12px"
                             :height "12px"
                             ;:background-color "#EEE"
                             :cursor "nwse-resize"
                             ;:box-shadow "-1px -1px 5px #333, inset -10px -10px 8px -10px #FFF"
                             :border-bottom "double #888"
                             :border-right "double #888"
                             }
                     :class "draggable node-resize"
                    }
                    ""
                   ]
                 ]
               )
              (:gnodes state))
            ;Cluster overlays
            (map
              (fn [cluster]
                (let [
                  top (+ 1 (js/parseInt y-offset) (get-in cluster [:points :y :min]))
                  left (+ 1 (js/parseInt x-offset) (get-in cluster [:points :x :min]))
                  right (+ -1 (js/parseInt x-offset) (get-in cluster [:points :x :max]))
                  width (- right left)
                  ]
                [:div {:class "cluster-overlay"
                       :key (:id cluster)
                       :data-clusterid (:id cluster)
                       :on-mouse-down cluster-mousedown
                       :on-touch-start cluster-mousedown
                       :on-click #((rerender! rename-cluster-prompt) (:id cluster))
                       :style {
                         :position "absolute"
                         :background-color "rgba(255, 255, 255, 0.75)"
                         :left (str left "px")
                         :top (str top "px")
                         :width (str width "px")
                         :height "18px"
                         :padding-top "1px"
                         :text-align "center"
                         
                       }}
                  [:span
                    { :class "delete"
                      :title "Delete"
                      :on-click #((rerender! delete-cluster) (:id cluster))
                     }
                    "×"
                   ]
                   (:text (get (:clusters state) (:id cluster)))
                 ])
               )
              (:gclusters state))
          ]
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
    (.log js/console "KEYDOWN" evt (= (.-body js/document) (.-target evt)))
    (let [shift (.-shiftKey evt);whether shift key is being held down
          selected (:selected-node-id @app-state)
          keycode (.-which evt)
          keychar (clojure.string/lower-case (char keycode))
          color (get color-keycode-lookup keychar)]
      (when (= (.-body js/document) (.-target evt))
        (case keycode
          ;d
          68 ((rerender! delete-node) selected) 
          ;e
          69 ((rerender! rename-prompt) selected)
          ;i
          73 ((rerender! add-cluster) (prompt "Enter title for box:" "") [selected]) 
          ;j
          74 ((rerender! select-next-node) 1)
          ;k
          75 ((rerender! select-next-node) -1)
          ;n
          78 ((rerender! add-node) [] [] (prompt "Enter title for node:" ""))
          ;,/<
          188 (when shift ((rerender! add-node) [] [selected] (prompt "Enter title for node:" "")))
          ;./>
          190 (when shift ((rerender! add-node) [selected] [] (prompt "Enter Title:" "")))
          ;-
          189 ((rerender! on-toggle-dep-click) selected)
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
  (swap! app-state update-state)
