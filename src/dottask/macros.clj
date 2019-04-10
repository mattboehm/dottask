(ns dottask.macros
)
(defmacro let?
  "bindings => binding-form test

  When test is true, evaluates body with binding-form bound to the value of test"
  [bindings & body]
  (let [newbindings (into [] (mapcat (fn [[label bind]] [label `((fn [x#] (.log js/console "LET" '~label x#) x#) ~bind)] )
                                     (partition 2 bindings)))
        ]
   `(let ~newbindings ~@body)
  )
  )
