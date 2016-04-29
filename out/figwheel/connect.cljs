(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [dottask.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/dottask.core.render! (apply js/dottask.core.render! x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'dottask.core/render!' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

