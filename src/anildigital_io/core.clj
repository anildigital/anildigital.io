(ns anildigital-io.core
  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]]
        [compojure.core :only [defroutes GET context]]
        org.httpkit.server))


(defn render
  [req]
  {:status 200
   :headers {"Content-Type" "text/html"
             }
   :body "Hello clojure!"
   }
  
  )

(defroutes all-routes
  (GET "/" [] render)
  (files "/public/" {:root "resources/public"})
  )

(def app (site all-routes))
