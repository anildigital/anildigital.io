(ns ^:figwheel-always anildigital-io.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require[om.core :as om :include-macros true]
             [om.dom :as dom :include-macros true]
             [cljs-http.client :as http]
             [cljs.core.async :refer [<!]]
             ))

;;;(enable-console-print!)

(defonce app-state (atom {:list [{:name "loading"}]}))

(defn fetch-feed []
  (go (let [response (<! (http/get "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=anildigital&api_key=d5eb0b1875c450d79bb1e5bb36aac9a6&limit=15&format=json" {:with-credentials? false}))]
        (swap! app-state assoc :list   (get-in (:body response)[:recenttracks :track] ) )
        ))
  )

(defn main []
  (om/root 
   (fn [data owner]
     (reify
       om/IInitState
       (init-state [_]
         (swap! app-state assoc :list [{:name "loading..."}])
         )
       om/IDidMount
       (did-mount [_]
         (fetch-feed)
         (js/setInterval (fn [] (fetch-feed)) 10000)
         ) 
       om/IRender
       (render [_]
         (apply dom/ul #js {:className "music_list"}
                (map (fn [text] (dom/li nil (str (get-in text [:name]) " - " (get-in text [:artist :#text]) ) )) (:list data))))))
   app-state
   {:target (. js/document (getElementById "app"))}))
