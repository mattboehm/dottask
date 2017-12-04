(ns dottask.core
  (:require
    [dottask.help :as help]
    [reagent.core :as reagent]
    [clojure.string :as string]
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
