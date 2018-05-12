(ns dottask.core
  (:require
    [reagent.core :as reagent]
    [clojure.string :as string]
    [cljs.reader :as reader]
    [devtools.core :as devtools]
    [goog.dom :as dom]
    [goog.dom.classlist :as classlist]
    [goog.events :as events]
    [goog.html.SafeHtml :as shtml]
    [goog.string :as gstring]
    [tubax.core :as tbx])
)
;; Constants
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
    {:name "violet" :hex "#744B8E" :shortcut "v"}
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
      :rotation "0deg" ;how much to rotate the arrow icon
     }
    :down {
      :label "down"
      :dot "TB"
      :coord :y
      :before <
      :rotation "180deg"
     }
    :left {
      :label "left"
      :dot "RL"
      :coord :x
      :before >
      :rotation "270deg"
     }
    :right {
      :label "right"
      :dot "LR"
      :coord :x
      :before <
      :rotation "90deg"
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
  (defn vmap [& args]
    (into [] (apply map args))
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
  ;get a node's width/height, using the proper defaults if they're not set
  (defn get-node-dim [node dim]
    (case dim
      :width (or (:width node) 2)
      :height (or (:height node) 1.2)
      )
   )
  (defn node-in-link? [node-id link]
    (contains? (->> (subvec link 0 2) (apply hash-set)) node-id))
  (defn get-el [selector]
    (.querySelector js/document selector)
    )
  (defn jump-to-anchor [id]
    (js/setTimeout (fn [] (->> (str "#" id) (get-el) (.scrollIntoView) )) 1)
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
  (defn center [point]
    {:x (/ (+ (get-in point [:x :min]) (get-in point [:x :max])) 2)
     :y (/ (+ (get-in point [:y :min]) (get-in point [:y :max])) 2)
     }
    )
  (defn width [rect]
    (- (get-in rect [:x :max]) (get-in rect [:x :min])))
  (defn height [rect]
    (- (get-in rect [:y :max]) (get-in rect [:y :min])))
  (defn rad->deg [rad]
    (-> rad
        (* 180)
        (/ Math.PI)))
  (defn get-angle [start end]
    (->
      (Math/atan2 (- (:y end) (:y start)) (- (:x end) (:x start)))
      (rad->deg)
     )
    )
  (defn polygon-points
    ([start moves]
     (polygon-points start moves [start])
    )
    ([start moves so-far]
     (if (not-empty moves)
       (polygon-points start (rest moves) (conj so-far (vec (map + (last so-far) (first moves)))))
       (clojure.string/join " " (map (partial clojure.string/join ",") (conj so-far start)))
       )
     )
    
    )
;; Basic components
  (defn btn [opts contents]
    [:span (merge {:class "button"} opts) contents]
    )
  (defn icon
    ([name size]
     (icon name size {})
     )
    ([name size style]
    [:svg {:style (merge {:width size :height size} style)} [:use {:href (str "#" name)}]]
    ))
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
  (defn text-area [value attrs]
    [:textarea (merge {
           :rows 20
           :value @value
           :on-change #(reset! value (-> % .-target .-value))} attrs)])
  (defn a-link
    ([id text]
      (a-link id text nil)
     )
    ([id text func]
    [:a {
         :href "javascript:"
         :on-click (fn [] (when func (func)) (jump-to-anchor id))}
      text]
    ))
