(ns dottask.help
  (:require
    [reagent.core :as reagent]
    ;[clojure.string :as string]
    ;[cljs.reader :as reader]
    ;[devtools.core :as devtools]
    ;[goog.dom :as dom]
    ;[goog.dom.classlist :as classlist]
    ;[goog.events :as events]
    ;[goog.html.SafeHtml :as shtml]
    ;[goog.string :as gstring]
    ;[historian.core :as hist]
    ;[tubax.core :as tbx]
    )
  (:require-macros
    ;[historian.core :as hist]
   )
  ;(:import [goog.events EventType])
)

  (defn get-el [selector]
    (.querySelector js/document selector)
    )
  (defn a-link [id text]
    [:a {
         :href "javascript:"
         :on-click (fn [] (->> (str "#" id) (get-el) (.scrollIntoView) ))}
      text]
    )
  (def dottask-help [
    {:id "cards" :title "Cards" :contents [
                                           [:div {:style {:display "block" :position "relative"} :class "node-overlay"} [:div {:class "task-text"} "sample card"]]
                                           "Cards (or 'nodes') are the basic units of the graph" 
                                           {:id "add-card" :title "Add a card" :contents ["Click the 'Add card' button"]} 
                                           {:id "delete-card" :title "Delete a card" :contents ["Hover over it then clicking the x button that appears in the upper right"]}
                                           {:id "card-text" :title "Change card text" :contents ["Click on the light box inside the card"]}
                                           {:id "card-color" :title "Change card color" :contents ["Hover over it and click a colored square in the right panel"]}
                                           ]}
    {:id "links" :title "Links" :contents [
                                           "Cards can be linked together" 
                                           {:id "link-card" :title "Link/unlink cards" :contents ["Drag the mouse from the source to the target"]} 
                                           {:id "link-label" :title "Change link label" :contents ["Hold down shift while dragging from source to target cards"]} 
                                           ]}
    {:id "card-drag" :title "Add cards via dragging" :contents [
                                                                [:span {} "If you already have card A and you know you want to create B then link A -> B, you could do this by " (a-link "add-card" "adding the card") " and then " (a-link "link-card" "creating the link") ". However, using dragging can be much faster"]
                                                                {:id "drag-card" :title "Add card and link it to an existing card" :contents ["Click down on the card and drag your mouse to empty space above/below the card to add a linked card before/after."]} 
                                                                "If your graph has A->C and you want to change this to A->B->C, you can quickly do this by 'splitting' one of the cards"
                                                                {:id "split-card" :title "Split a card" :contents ["Hold down shift while dragging from the card to an empty space before/after"]} 
                                                                ]}
    {:id "clusters" :title "Clusters" :contents [
                                                 "Cards can be grouped into clusters which appear as a box with a label. If all of a cluster's contents are deleted, it is removed." 
                                                 {:id "add-cluster-card" :title "Create a cluster around a card" :contents ["Double click on the card's border (outside the white text area)"]} 
                                                 {:id "add-cluster-cluster" :title "Create a cluster around a cluster" :contents ["Drag from the cluster text to empty space above"]} 
                                                 {:id "toggle-card-cluster" :title "Add/remove card to/from cluster" :contents ["Drag from the card to the cluster text (or vice versa)"]} 
                                                 {:id "toggle-cluster-cluster" :title "Add/remove cluster to/from cluster" :contents ["Drag from the child cluster text to the parent cluster text"]} 
                                                 {:id "collapse-cluster" :title "Collapse a cluster" :contents ["Click the minus sign in the upper right. The cluster is shrunk to look like a card, all its contents are hidden, and any links going in/out of contents of the cluster now go in/out of the cluster card."]} 
                                                 {:id "expand-cluster" :title "Expand a collapsed cluster" :contents ["Click on its dark border"]} 
                                                 {:id "delete-cluster" :title "Delete a cluster" :contents ["Click the x in the upper right. If it is collapsed, its contents are also deleted."]} 

                                                 ]}
    ])

;[{:id "foo" :title "fooing a bar" :contents ["this is how you foo a bar"]}]
  ;anchor-link that scrolls to the element with the given ID
  (defn toc-row[sect]
    [:div {:class "toc-row"}
      (a-link (:id sect) (:title sect))
      (->>
        (:contents sect [])
        (filter :contents)
        (map toc-row)
        )
     ]
    )
  (defn section 
    ([sect]
      (section sect 0))
    ([sect level]
      (let [tag (if (zero? level) :h3 :b)]
        [:div {:id (:id sect) :class "section"}
          [tag {:class "header"} (:title sect)]
          (map (fn [l]
                   (if (contains? l :contents)
                     [section l (inc level)]
                     [:p {} l]
                    ))
               (:contents sect))])
     )
    )
  (defn page [sections]
    (let [state (reagent/atom {})]
      (fn []
        [:div {:class "page"}
         [:div {:class "toc"}
          (map toc-row sections)
          ]
         (map section sections)
         ]
        )))
  (defn render! []
    (.log js/console "TST@@@@@")
    (reagent/render
      [page dottask-help]
      (.getElementById js/document "help")))
(render!)
(.log js/console "TST!!!!!")
