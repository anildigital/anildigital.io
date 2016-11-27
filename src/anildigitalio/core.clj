(ns anildigitalio.core
  (:require [hiccup.core :as hiccup])
  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET context]]
        org.httpkit.server
        ))


(defn render
  [req]
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
                 "PLACE FOR GENERATED HTML"]
                [:script {:src "/public/js/anildigitalio.js"}]
                [:script
                 "anildigitalio.client.init()"]]])})

(defroutes all-routes
  (GET "/" [] render)
  (files "/public/" {:root "resources/public"})
  )

(def app (site all-routes))
