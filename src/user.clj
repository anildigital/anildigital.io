(ns user
  (:use org.httpkit.server)
  (:require [anildigital-io.core :as b]
            [clojure.tools.namespace.repl :refer [refresh]]))

(defonce server (atom nil))

(defn app [req]
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    "hello HTTP!"}) 

(defn go []
  (reset! server (run-server #'app {:port 8080})))

(defn reset
  []
  (when-not (nil? @server)
     (@server :timeout 100)
     (reset! server nil))
  (refresh :after 'user/go))
