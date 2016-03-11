(defproject dottask "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [funcool/tubax "0.2.0"]
                 [reagent "0.5.1"]
                 [sablono "0.3.6"]]
  :plugins [[lein-figwheel "0.5.0-1"]
            [lein-cljsbuild "1.1.3"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel {:on-jsload "dottask.core/render!"}
              :compiler {:main "dottask.core"}
            }{:id "release"
              :source-paths ["src"]
              ;:figwheel {:on-jsload "dottask.core/render!"}
              :compiler {
                         :main "dottask.core"
                         :output-to "out/main.js"
                         :output-dir "out"
                         :optimizations :advanced
                         :pretty-print false
                         :source-map "out/main.js.map"}
            }]
  }
  :figwheel {
    :css-dirs ["css"]
  }
)

