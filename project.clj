(defproject anildigitalio "0.1.0-SNAPSHOT"
  :description "Homepage"
  :dependencies [[org.clojure/tools.namespace "0.3.0-alpha2"
                  :exclusions [org.clojure/tools.reader]]
                 [javax.servlet/servlet-api "2.5"]
                 [http-kit "2.2.0"]
                 [compojure "1.5.1"]
                 [org.clojure/clojure "1.9.0-alpha12"]
                 [rum "0.10.7" :exclusions [cljsjs/react cljsjs/react-dom]]
                 [cljsjs/react-dom "15.3.1-0" :exclusions [cljsjs/react]]
                 [cljsjs/react-dom-server "15.3.1-0" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "15.3.1-0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [hiccup "1.0.5"]]
  :resource-paths ["resources"]
  :plugins [[lein-figwheel "0.5.7"]]
  :figwheel {:css-dirs ["resources/public/css"]}
  :cljsbuild {:builds [{:id "exchange"
                        :source-paths ["src/"]
                        :compiler {:main "anildigitalio.client"
                                   :optimizations :none
                                   :asset-path "/public/js/out"
                                   :output-to "resources/public/js/anildigitalio.js"
                                   :output-dir "resources/public/js/out"}}]})
