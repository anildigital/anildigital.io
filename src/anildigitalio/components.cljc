(ns anildigitalio.components
  (:require [rum.core :as r]))

(r/defc link [[title year author]]
  [:li {:key title}
   [:a {:href title} title]])

(r/defc books-list [books]
  [:.list
   [:ul
    (map link books)]
   [:a.btn {:href "/add"} "Add book"]])

(r/defc details [[title year author]]
  [:.details
   [:a {:href "/"} "List"]
   [:label "Title"] title
   [:label "Author"] author
   [:label "Year"] year])

(r/defc app [{:keys [books route]}]
  [:.page
   ;; If route match any book title - show detailed view
   ;; else - show list
   (if-let [book (some #(when (= route (first %)) %) books)]
     (details book)
     (books-list books))
   ;; If route is "add" – render additional modal window with form
   ])
