Dottask: a directed graph editor for making to-do lists.
Built with clojurescript and viz.js. Currently pre-alpha/experimental.

Give it a try at http://dottask.mattboehm.rocks

# Developing

Install leiningen, cd into the repo and run `lein figwheel dev help`. If using the arrow keys in the repl doesn't work, install rlwrap and run `rlwrap lein figwheel dev help` instead.

Once running, visit `file:///path/to/repo/index.html` to see the site.

# Building a new release

This project is designed to be hosted on gh-pages. To make a new build, check out the `gh-pages` branch, merge master into it, run `lein cljsbuild once release help-release`, and commit the changes.
