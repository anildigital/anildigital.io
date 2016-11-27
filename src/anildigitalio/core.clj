(ns anildigitalio.core
  (:require [hiccup.core :as hiccup]
            [rum.core :as r]
            [anildigitalio.components :as c])
  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET context]]
        org.httpkit.server
        ))

(defonce books (atom [["The Old Man and the Sea" 1952 "Ernest Hemingway"]
                      ["Hyperion" 1989 "Dan Simmons"]
                      ["The 7 Habits of Highly Effective People" 1989 "Stephen Covey"]]))

(defn render
  [{{route :route} :route-params}]
  (let [state {:route route
               :books @books}]
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    (hiccup/html
               "<!doctype html>"
               [:html
                [:head
                 [:link {:rel "stylesheet" :media "screen"
                         :href  "/public/css/anildigital.css"}]]
                [:body
                 [:div#application
                  (r/render-html (c/app state))
                  ]
                 [:script#initial-data {:type "application/edn"}
                  (pr-str state)]
                 [:script {:src "/public/js/anildigitalio.js"}]
                 [:script
                  "anildigitalio.client.init()"]]])}))

(defroutes all-routes
  (GET "/" [] render)
  (files "/public/" {:root "resources/public"})
  (not-found "Page not found")
  )

(def app (site all-routes))
