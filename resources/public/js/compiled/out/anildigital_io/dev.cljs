(ns anildigital-io.dev
    (:require
     [anildigital-io.core]
     [figwheel.client :as fw]))

(fw/start {
  :on-jsload (fn []
               ;; (stop-and-start-my app)
               )})
