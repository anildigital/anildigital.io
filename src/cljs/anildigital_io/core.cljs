(ns ^:figwheel-always anildigital-io.core
    (:require-macros [cljs.core.async.macros :refer [go]])
    (:require [om.core :as om :include-macros true]
              [om.dom :as dom :include-macros true]
              [cljs-http.client :as http]
              [cljs.core.async :refer [<!]]
              ))

;;;(enable-console-print!)


(defn main []

  (defonce music-app-state (atom {:list [{:name "loading"}]}))
  (defonce location-app-state (atom {:location {:city "Gotham City", :country "States", :state "", :address "Top of the Tower"}}))

  (defn fetch-music-feed []
    (go (let [response (<! (http/get "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=anildigital&api_key=d5eb0b1875c450d79bb1e5bb36aac9a6&limit=15&format=json" {:with-credentials? false}))]
          (swap! music-app-state assoc :list (get-in (:body response) [:recenttracks :track]))
          ))
    )

  (defn fetch-location-feed []
    (go (let [response (<! (http/get "https://api.foursquare.com/v2/users/self/checkins?oauth_token=5QD2DJX0FK2JDCFNZT450LWDCZDSQ1L1AU5Z2FT4KQWLFBFG&v=20150216&m=foursquare" {:with-credentials? false}))]
          (swap! location-app-state assoc :location (:location (:venue (first (:items (:checkins (:response (:body response))))))))
          ))
    )

  (om/root
   (fn [data owner]
     (reify
       om/IDidMount
       (did-mount [_]
         (fetch-music-feed)
         (js/setInterval (fn [] (fetch-music-feed)) 10000)
         )
       om/IRender
       (render [_]
         (apply dom/ul #js {:className "music_list"}
                (map (fn [text] (dom/li nil (str (get-in text [:name]) " - " (get-in text [:artist :#text])))) (:list data))))))
   music-app-state
   {:target (. js/document (getElementById "app1"))})


  (om/root
   (fn [data owner]
     (reify
       om/IDidMount
       (did-mount [_]
         (fetch-location-feed)
         (js/setInterval (fn [] (fetch-location-feed)) 10000)
         )
       om/IRender
       (render [_]
         (dom/div nil
                  (dom/div #js {:className "label"} "Recent Location:"
                           (apply dom/div nil
                                  (str "Somewhere near " (:address (:location data)) ", " (:city (:location data)) ", " (:country (:location data)))))))))
   location-app-state
   {:target (. js/document (getElementById "app2"))})

  )


