(ns dottask.help
  (:require
    [reagent.core :as reagent]
    [dottask.core :as core]
    )
)

  (def dottask-help [
    {:id "toolbar-buttons" :title "Toolbar" :contents [
      {:id "add-card" :title "Add a card" :contents ["Click the 'Add card' button to add a new blank card"]} 
      {:id "bulk-add" :title "Bulk Add" :contents [
        "If you want to add multiple cards at the same time, click 'Bulk add' and put each node label on a separate line" 
        "There are three different modes for handling indented lines. For the examples below, let's look at what happens if the following text were used:" 
        [:pre "1\n  1.1\n  1.2\n    1.2.1\n    1.2.2"]
        {:id "bulk-add-ignore" :title "ignore mode" :contents ["Whitespace is trimmed from the ends and ignored" [:img {:src "static/bulk_ignore.png" :style {:zoom 0.6 :max-width "100%"}}]]} 
        {:id "bulk-add-link" :title "link mode" :contents ["Parents are linked to their children" [:img {:src "static/bulk_link.png" :style {:zoom 0.6}}]]} 
        {:id "bulk-add-cluster" :title "cluster mode" :contents ["Parents are turned into clusters that contain their children" [:img {:src "static/bulk_cluster.png" :style {:zoom 0.6}}]]} 
        ]
       }
      {:id "delete-all" :title "Delete all" :contents ["Click the 'Delete all' button to delete everything from the graph. This change can still be undone."]} 
      {:id "saving" :title "Saving" :contents [
        "When you click 'Save', the graph's state is serialized and saved to the URL hash." 
        "You can now bookmark the URL, put it in a shortener, send it to a friend, and more." 
        "If you save to a URL and update the graph, you need to click save again to get a new URL in order to preserve your changes." 
        "Some browsers have limits on how long the URL can be that may impact saving. I haven't hit the limit in chrome yet, but be forewarned that it may be possible." 
        ]
       }
      {:id "undo-button" :title "Undo/Redo" :contents ["Click the undo/redo buttons to undo/redo changes to the graph. This history is not included with saves."]}
      {:id "arrow-dir" :title "Change arrow direction" :contents ["Click this to open a menu to change the primary arrow direction. This also changes the direction you must drag from a node to add new nodes (e.g. if you change the direction to 'right', instead of dragging down to make a linked node below, drag right to make one after)"]}
      {:id "export-dot" :title "Export Graphviz Code" :contents ["Clicking this opens up a .dot representation of the graph that can be further edited and rendered with the graphviz application or many online renderers. These .dot representations currently can not be imported back into dottask."]}
      {:id "help-button" :title "Help" :contents ["This button opens/closes the help sidebar. You can also drag from this button to any highlighted element to jump to that help section"]}
      ]}
    {:id "cards" :title "Cards" :contents [
      [:div {:style {:display "block" :position "relative"} :class "node-overlay"} [:div {:class "task-text"} "sample card"]]
      "Cards (or 'nodes') are the basic units of the graph" 
      {:id "delete-card" :title "Delete a card" :contents ["Hover over it then clicking the x button that appears in the upper right"]}
      {:id "card-text" :title "Change card text" :contents ["Click on the light box inside the card" "When done editing, hit enter/escape or click on the area outside the textbox to save changes. You can also hit tab or shift-tab to switch to the next/previous card."]}
      {:id "card-color" :title "Change card color" :contents ["Hover over it and click a colored square in the right panel"]}
      {:id "card-resize" :title "Resize a card" :contents ["Drag the handle in the lower-right corner"]}

      ]}
    {:id "links" :title "Links" :contents [
      "Cards can be linked together" 
      {:id "link-card" :title "Link/unlink cards" :contents ["Drag the mouse from the source to the target"]} 
      {:id "link-label" :title "Change link label" :contents ["Hold down shift while dragging from source to target cards"]} 
      ]}
    {:id "card-drag" :title "Add cards via dragging" :contents [
      [:span {} "If you already have card A and you know you want to create B then link A -> B, you could do this by " (core/a-link "add-card" "adding the card") " and then " (core/a-link "link-card" "creating the link") ". However, using dragging can be much faster"]
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
    {:id "keyboard-shortcuts" :title "Keyboard Shortcuts" :contents [
      "Many of the site's actions also have keyboard shortcuts, which may sometimes be faster or more convenient than using a mouse"
      {:id "shortcut-selecting" :title "Selecting cards" :contents [
        "Many of the shortcuts below act on the selected card. You can select a card by using the following keys:"
        [:ul
           [:li [:b "j: "] "Select next card"]
           [:li [:b "k: "] "Select previous card"]
           [:li [:b "Esc: "] "De-select card"]
         
         ]]} 
      {:id "shortcut-changing" :title "Changing cards" :contents [
        "The following keys allow you to change the selected card (highlighted with a yellow border)"
        [:ul
           [:li [:b "d: "] "Delete card"]
           [:li [:b "e: "] "Edit card text"]
           [:li "Change card color:"
             [:ul
               (map (fn [color] [:li [:b (str (:shortcut color) ": ")] (:name color)]) core/colors)
              ]
            ]
         ]]} 
      {:id "shortcut-adding" :title "Adding items" :contents [
        [:ul
           [:li [:b "</>: "] "Add card before/after selected one (like " (core/a-link "drag-card" "dragging from a card") ")"]
           [:li [:b "-: "] "Link/unlink cards. The first time you hit it, it marks that node as the source. Then select the target node and hit it again to mark the target and create the link"]
         ]]} 
                                                 ]}
    ])

;[{:id "foo" :title "fooing a bar" :contents ["this is how you foo a bar"]}]
  ;anchor-link that scrolls to the element with the given ID
  (defn toc-row[sect]
    [:div {:class "toc-row"}
      (core/a-link (:id sect) (:title sect))
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
    (reagent/render
      [page dottask-help]
      (.getElementById js/document "help")))
(when (core/get-el "#help")
  (render!)
 )
