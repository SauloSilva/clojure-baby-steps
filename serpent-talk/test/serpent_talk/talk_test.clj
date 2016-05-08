(ns serpent-talk.talk-test
  (:require [clojure.test :refer :all]
            [serpent-talk.talk :refer :all]))

(deftest a-test
  (testing "Cries serpentes! with snack_case version of the input"
    (is (= "Serpent! You said: hello_there"
            (serpent-talk "hello there")))))
