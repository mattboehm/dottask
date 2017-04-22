(ns dottask.core
  (:require [reagent.core :as reagent]
            [clojure.string :as string]
            [clojure.set :as cset]
            [cljs.reader :as reader]
            [devtools.core :as devtools]
            [goog.dom :as dom]
            [goog.dom.classlist :as classlist]
            [goog.events :as events]
            [reagent-modals.modals :as modals]
            [tubax.core :as tbx])
  (:import [goog.events EventType])
 )
  (.initializeTouchEvents js/React true)
;; Constants
  (def ppi 72); pixels per inch
;; Utils
  (defn debug [result]
    (.log js/console "DEBUG" result)
    result
   )
  (defn prompt [message val]
    (js/prompt message val)
    )
  (defn extent [numbers] 
    { :min (apply min numbers)
      :max (apply max numbers)
    } 
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
      "\tclick on card text: change text\n"
      "\tdrag from one card to another: link/unlink cards\n"
      "\tdrag from one card to empty space above/below:"
      "\t   create card linked to/from start card\n"
      "\t   hold down shift to 'split' the card into 2\n"
      "Buttons:\n"
      "\tx: delete card\n"
      "\thandle at bottom right: resize card\n"
      "Keyboard Shortcuts:\n"
      "\tj/k: go to previous/next node\n"
      "\td: delete selected card\n"
      "\te: edit text of selected card\n"
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
;; State
  (defonce app-state (reagent/atom {
    :id-counter 6
    ;:tags [["#animals" "#mammals"] ["#animals" "node3"] ["#mammals" "node5"]]
    :tags []
    :nodes [
      { :id "node1" :text "node 1" }
      { :id "node2" :text "node 2" }
      { :id "node3" :text "node 3" }
      { :id "node4" :text "node 4" }
      { :id "node5" :text "node 5" }
    ]
    :selected-node-id nil
    :toggle-link-node-id nil
    :deps [["node1" "node3"] ["node2" "node3"] ["node3" "node5"] ["node4" "node5"]]
  }))
  (def status-list [
    {:id     :todo
     :label  "TODO"
     }
    {:id     :progress
     :label  "In progress"
     }
    {:id     :done
     :label  "Done"
     }
    {:id     :blocked
     :label  "Blocked"
     }
   ])
  (def statuses (zipmap (map :id status-list) status-list))
;; Save/Load state
  (def state-to-save [:id-counter :tags :nodes :deps])
  (defn save-hash [state]
    (aset js/window "location" "hash" (js/encodeURIComponent(pr-str(select-keys state state-to-save))))
    )
  (defn load-hash [state]
    (merge state (reader/read-string (js/decodeURIComponent (apply str (rest (aget js/window "location" "hash"))))))
    )
;; Tags (not finished yet)
  ;edges: [[1 2][2 3][2 4]]
  ;return: list of root nodes. []
  (defn treeify
    ([edges]
      (let [
            ; make sets of all things that appear on the left vs right side
            [parents children] (apply map hash-set edges)
            ; root nodes are ones that only appear on the LHS
            roots (cset/difference parents children)
            ]
        (map #(treeify edges %) roots)
        )
     )
    ([edges vertex]
     {
      :node vertex
      :children (map #(treeify edges %) (map second (filter #(= (first %) vertex) edges)))
      }
     )
    
    )
  (defn render-tag-tree [tree]
    (cond 
      (seq? tree) (apply str (map render-tag-tree tree))
      (not= (first (:node tree)) "#") (str (:node tree) ";")
      :else (str "subgraph cluster_" (string/replace (:node tree) #"#" "") "{label=\"" (:node tree) "\";" (render-tag-tree (:children tree)) "}")
    )
  )
;; Make graph
  (defn to-dot [nodes deps tags]
    (str
     "digraph G {\n"
     "dpi=72;"
     "node [label=\"\" shape=\"rect\"]\n"
      (when (seq tags) (render-tag-tree (treeify tags)))
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

  ;get the bounding box for points
  (defn parse-points [pointstr]
    (->>
      (string/split pointstr #" ")
      (map #(string/split % #","))
      (map #(map js/parseInt %))
      (apply map vector);zip
      (map extent)
      (zipmap [:x :y])
    )
  )

  (defn get-nodes [cljdot]
    (->>
      cljdot
      :content
      first
      :content
      (filter #(= (:class(:attributes %)) "node"))
      (map (fn [node]
             {
              :id (->>
                    node
                    :content
                    first
                    :content
                    first)
               :points (
                        ->>
                        node
                        :content
                        second
                        :attributes
                        :points
                        parse-points
                        )
              }
             ))
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
          dot (to-dot (:nodes state) (:deps state) (:tags state))
          same-graph (= dot (:dot state));if the dot is the same, don't need to re-calc svg/gdata
          svg (if same-graph (:svg state) (dot->svg dot))
          gdata
            (if same-graph (:gdata state) (->>
                svg
                tbx/xml->clj
                get-nodes
              )
            )
          ]
      (assoc state :dot dot :svg svg
             ;add the nodes from :nodes state to the gdata version.
             ;even if the dot representation hasn't changed, we want to always update this.
             :gdata (mapv #(assoc % :node (get-node (:nodes state) (:id %))) gdata))
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
  (defn change-node-status [state node-id status]
      [state node-id status]
      (update-node state node-id #(assoc % :status status))
    )
  (defn select-node [state node-id]
    (assoc state :selected-node-id node-id)
   )
  (defn select-next-node
    ([state] (select-next-node state 1))
    ([state direction]
    ;(->> @dt/app-state :gdata (map (fn [node]  (vector (get-in node [:points :y :min])  (get-in node [:points :x :min]) (:id node) (get-in node [:node :text])     ) ) )  sort  )
     (let [gdata (:gdata state)
           positioned-nodes (sort (map (fn [node]  ; [[y x id]...]
                                   (vector (get-in node [:points :y :min])
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
            ;new_deps (into 
                     ;)
            ;all_deps (into (:deps state) new_deps)
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
  (defn el->nodeid [el]
    (let [node (dom/getAncestorByClass el "node-overlay")
          node-id (when node (.getAttribute node "data-nodeid"))
          ]
      node-id
     )
   )
  (defn link-mouseup [src-node-id src-y shift-key]
    (fn [e]
      (let [ node-id (el->nodeid (.elementFromPoint js/document (.-clientX e) (.-clientY e)))
            ]
        (if node-id
          ; If on a different node, link to it
          (when (not= node-id src-node-id) ((rerender! toggle-dep-clear) [src-node-id node-id]))
          ; If not on a node, add a new node before/after based on deltaY
          ((rerender! add-or-split-node) src-node-id (if (< (.-clientY e) src-y) :before :after) shift-key)
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
;; Dom rendering
  (defn get-toggle-link-button-text [state node-id]
    (let [last-clicked-id (:toggle-link-node-id state)]
      (cond 
        (nil? last-clicked-id) "+--"
        (= last-clicked-id node-id) "x--"
        :else "-->"
       )
      )
    )

  (defn graph [state]
    (let [[_ x-offset y-offset]
          (re-find #"translate\((\d+) (\d+)\)" (:svg state))
          ]
      [:div
        {:on-key-press #(.log js/console %)}
        [modals/modal-window]
        [:button {:on-click #((rerender! add-node) [] [])} "Add card"]
        [:button {:on-click #(save-hash @app-state)} "Save"]
        [:button {:on-click #(show-help)} "Help"]
        [:div {:class "dotgraph"
               ;TODO make not add node when dragging
               ;:on-click #(when (and (.-target %) (not (dom/getAncestorByClass (.-target %) "node-overlay"))) (.log js/console "clk" (.-target %))((rerender! add-node) [] []))
               }
          [:div {:class "graph-overlay"} 
            (map
              (fn [node]
                [:div {:class (str "node-overlay " (subs (str (get-in node [:node :status])) 1) (when (= (:id node) (:selected-node-id state)) " selected")) 
                       :key (:id node)
                       :on-click #((rerender! select-node) (:id node))
                       :data-nodeid (:id node)
                       :on-mouse-down node-mousedown
                       :on-touch-start node-mousedown
                       :style {
                         :left (str (+ (js/parseInt x-offset) (get-in node [:points :x :min])) "px")
                         :top (str (+ (js/parseInt y-offset) (get-in node [:points :y :min])) "px")
                         :width (str (* (get-node-dim (:node node) :width) ppi) "px")
                         :height (str (* (get-node-dim (:node node) :height) ppi) "px")

                       }}
                  [:button
                    { :class "add-before"
                      :title "Add Before"
                      :on-click (fn [evt] ((rerender! add-or-split-node) (:id node) :before (.-shiftKey evt)))
                     }
                    "+"
                   ]
                  [:span
                    { :class "delete"
                      :title "Delete"
                      :on-click #((rerender! delete-node) (:id node))
                     }
                    "×"
                   ]
                  [:button
                    { :title "Add/Remove Link"
                      :on-click #((rerender! on-toggle-dep-click) (:id node))
                     }
                    (get-toggle-link-button-text state (:id node))
                   ]
                  [:button
                    { :class "add-after"
                      :title "Add After"
                      :on-click #(if (.-shiftKey %)
                                   ((rerender! split-node) (:id node) :after)
                                   ((rerender! add-node) [(:id node)] []))
                     }
                    "+"
                   ]
                  [:select
                    {:class "status-picker"
                     :value (get-in node [:node :status])
                     :on-change #((rerender! change-node-status) (:id node) (keyword (.. % -target -value)))}
                    [:option {:value nil} ""]
                    (map (fn [status]
                            [:option {:key (:id status) :value (:id status)} (:label status)]
                            ) status-list)
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
              (:gdata state))
          ]
          [:div {:dangerouslySetInnerHTML {:__html
                (:svg state)
              }}]
         ]
       ]
     )
   )
;; Init
  ;handle key events
  (set! (.-onkeydown js/document) (fn [evt] 
    (.log js/console "KEYDOWN" evt (= (.-body js/document) (.-target evt)))
    (let [shift (.-shiftKey evt);whether shift key is being held down
          selected (:selected-node-id @app-state)]
      (when (= (.-body js/document) (.-target evt))
        (case (.-which evt)
          ;d
          68 ((rerender! delete-node) selected) 
          ;e
          69 ((rerender! rename-prompt) selected)
          ;j
          74 ((rerender! select-next-node) 1)
          ;k
          75 ((rerender! select-next-node) -1)
          ;n
          78 ((rerender! add-node) [] [] (prompt "Enter Title:" ""))
          ;,/<
          188 (when shift ((rerender! add-node) [] [selected] (prompt "Enter Title:" "")))
          ;./>
          190 (when shift ((rerender! add-node) [selected] [] (prompt "Enter Title:" "")))
          ;-
          189 ((rerender! on-toggle-dep-click) selected)
          ""
         )
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
