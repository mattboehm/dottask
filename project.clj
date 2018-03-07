(defproject dottask "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [binaryage/devtools "0.5.2"]
                 [funcool/tubax "0.2.0"]
                 [historian "1.1.1"]
                 [reagent "0.5.1"]
                 [sablono "0.3.6"]]
  :plugins [[lein-figwheel "0.5.0-1"]
            [lein-cljsbuild "1.1.3"]
            [lein-gossip "0.1.0-SNAPSHOT"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel {:on-jsload "dottask.graph/render!"}
              :compiler {:main "dottask.graph"}
            }
            {:id "help"
              :source-paths ["src"]
              :figwheel {:on-jsload "dottask.help/render!"}
              :compiler {:main "dottask.help"
                         :pretty-print false
                         :output-to "help.js"}
            }
             {:id "release"
              :source-paths ["src"]
              :compiler {
                         :main "dottask.graph"
                         :output-to "out/main.js"
                         :output-dir "out"
                         :optimizations :advanced
                         :pretty-print false
                         :source-map "out/main.js.map"}
            }
             {:id "help-release"
              :source-paths ["src"]
              :compiler {
                         :main "dottask.help"
                         :output-to "out-help/help.js"
                         :output-dir "out-help"
                         :optimizations :advanced
                         :pretty-print false
                         :source-map "out-help/help.js.map"}
            }
             ]
  }
  :figwheel {
    :css-dirs ["css"]
  }
)

