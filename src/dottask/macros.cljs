(ns dottask.macros
)
(defmacro let?
  "bindings => binding-form test

  When test is true, evaluates body with binding-form bound to the value of test"
  [bindings & body]
  (let [newbindings (map-indexed (fn [idx bind]
                                   (if (even? idx)
                                     bind
                                     `((fn [x] (.log js/console "LET" ~idx x) x) ~bind)
                                     )
                                   ))]
   `(let ~bindings
      ~@body
      )
  )
  )
