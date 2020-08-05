---
slug: day-4-brave-clojure
date: 2020-08-05
title: 'Day 4: Brave Clojure Chapter 3 - Do things'
description: "Revisiting clojure basics."
published: true
keywords: ['clojure']
banner: './ingmar-MIT0d2Y1Sd0-unsplash.jpg'
author: 'Zac Jones' 
---
<span>Photo by <a href="https://unsplash.com/@ingmarr?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ingmar</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

These are my notes from Clojure for the Brave and True by Daniel Higginbotham. They are intended for the #learninpublic run that I'm doing with [ClojureFam (Team Phanes)](https://github.com/athensresearch/ClojureFam/issues/53)

These are notes for chapter 3 [Do Things: A Clojure Crash Course](https://www.braveclojure.com/do-things/)

# Table of Contents
1.  [Chapter 3: A Clojure Crash Course](#org0365b66)
    1.  [Forms](#orga1b06bd)
    2.  [Control Flow](#orgcafee1a)
    3.  [Naming Values with def](#orgfe955a2)
    4.  [Data Structures](#org77bfbf5)
        1.  [Numbers](#org89201e1)
        2.  [Strings](#orga7bb421)
        3.  [Maps](#orgfcfe346)
        4.  [Keywords](#org25edfec)
        5.  [Vectors](#org5cd0069)
        6.  [Lists](#org5c0f208)
        7.  [Sets](#orgf60eabd)
        8.  [Simplicity](#orgdb4ac63)
    5.  [Functions](#org56678c0)
        1.  [Calling functions](#org8d9f7b3)
        2.  [Function Calls, Macro Calls, and Special Forms](#org8e9c6fc)
        3.  [Defining Functions](#orgfc9333b)
        4.  [Arity](#org68bd1c1)
        5.  [Destructuring](#org23a3687)
        6.  [Function body](#orgbaef7bc)
        7.  [Anonymous Functions](#org7935b52)
    6.  [Returning Functions](#orge2bd6d1)
    7.  [Shire model](#orgc422d89)

<a id="org0365b66"></a>

# Chapter 3: A Clojure Crash Course


<a id="orga1b06bd"></a>

## Forms

Clojure recognizes two kinds of structures:

1.  Literal representations of data structures
2.  Operations

3.  **Form:** valid code
4.  **Expression:** Clojure forms

`Clojure evaluates every form to produce a value`

You use literals in operations

    (+ 1 2 3)
    ; => 6


<a id="orgcafee1a"></a>

## Control Flow

- **Boolean form:** a form that evaluates to a truthy or falsey value.
    
        (if true
          "By Zeus's hammer!"
          "By Aquaman's trident!")

Control flow branches in Clojure are implicit. The first is true, the second is false. In other words. first is then, next is else

The else branch is optional.

Each branch can only have one Form normally. You can get around this with the `do` operator.

    (if true
      (do (println "Success!")
          "By Zeus's hammer!")
      (do (println "Failure!")
          "By Aquaman's trident!"))

`when` operator is a combination of `if` and `do`. You can run multiple commands but it doesn't have an `else` branch

- **nil:** indicates no value in Clojure
    
    You can check if nil with `nil?`
    
    Both `nil` and `false` are used to represent logical falsiness
    
    Operators go first in Clojure forms so:
    
        (= 1 1)
    
    Clojure has Boolean operators:
    
    - **or:** returns either the first truthy value or the last value
    
    - **and:** returns the first falsey value or, if no values are falsey, the last truthy value


<a id="orgfe955a2"></a>

## Naming Values with def

- **def:** an operator to bind a name to a value in Clojure
    bind is intentional language here because we don't re-define variables once they are bound. Other languages might re-assign variables multiple times.

    (def failed-protagonist-names
      ["Larry Potter" "Doreen the Explorer" "The Incredible Bulk"])
    
    failed-protagonist-names


<a id="org77bfbf5"></a>

## Data Structures


<a id="org89201e1"></a>

### Numbers

[coercion and contagion in clojure?](http://clojure.org/data_structures#Data%20Structures-Numbers)

    93
    1.2
    1/5


<a id="orga7bb421"></a>

### Strings

    "Lord Voldemort"
    "\"He who must not be named\""
    "\"Great cow of Moscow!\" - Hermes Conrad"

Single quote's don't count as strings!
No string interpolation!

`str` concatinates strings

    (def name "Chewbacca")
    (str "\"Uggllglglglglglglglll\" - " name)


<a id="orgfcfe346"></a>

### Maps

Two kinds of maps, hash maps and sorted maps

`{}` is a map literal

    {:first-name "Charlie"
     :last-name "McFishwich"}

You can associate string keys to functions

    {"string-key" +}

Maps can be nested
Values can be any type - clojure don't care!

`hash-map` will create a map for you

    (hash-map :a 1 :b 2)

`get` looks up values

    (get {:a 0 :b 1} :b)

`get-in` looks up values in nested maps
You can access values in a map by treating it like a function. The keys are it's arguments

    ({:name "The Human Coffeepot"} :name)


<a id="org25edfec"></a>

### Keywords

Keywords are primarily used in maps. they can be used as functions that look up corresponding value in a data structure.
They accept defaults just like `get`

People us this all the time!


<a id="org5cd0069"></a>

### Vectors

Vectors are similar to arrays. They are 0-base indexed.

    (get ["a" {:name "Pugsley Winterbottom"} "c"] 1)

You can use the `vector` function to create one. or the vector literal `[]`

`conj` function adds elements to the vector


<a id="org5c0f208"></a>

### Lists

Lists are linear collections of values.
You can't retrieve elements in a list with get.

list literal: '(1 2 3 4)

If you want to retrieve an element from the list you can use the `nth` function

    (nth '(:a :b :c) 0)
    (nth '(:a :b :c) 2)


<a id="orgf60eabd"></a>

### Sets

Clojure has two kinds of sets: hash sets and sorted sets

hash set literal: #{}
or use the `hash-set` function to create a set

Sets only allow unique values
You can convert vectors to sets with the `set` function

you can check for set membership by using `contains?` in tandem with `get`

    (contains? #{:a :b} :a)
    ; => true
    
    (contains? #{:a :b} 3)
    ; => false
    
    (contains? #{nil} nil)


<a id="orgdb4ac63"></a>

### Simplicity

> It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures.
> —Alan Perlis


<a id="org56678c0"></a>

## Functions


<a id="org8d9f7b3"></a>

### Calling functions

all Clojure operations have the same syntax: opening parenthesis, operator, operands, closing parenthesis. Function call is just another term for an operation where the operator is a function or a function expression (an expression that returns a function).

    (+ 1 2 3 4)
    (* 1 2 3 4)
    (first [1 2 3 4])

    (1 2 3 4)
    ("test" 1 2 3)

When you call a number or string as a function you'll get the error above. This will happen alot!

- **higher-order functions:** functions that can either take a function as an argument or return a function
    This is 'first-class' function support

    (map inc [0 1 2 3])

Map applies inc to each value in the vector. `map` allows you to generalize the process of transforming a collection by applying a function—any function—over any collection.

`Clojure evaluates all function arguemnts recursively before passing them to the function.`


<a id="org8e9c6fc"></a>

### Function Calls, Macro Calls, and Special Forms

- **Function Call:** expressions that have a function expression as the operator
- **Macro calls:** evaluate their operands differently (but how?!) and can't be passed as arguments to functions
- **Special forms:** don't evaluate all their operands (think if expressions).
    You can't use special forms as arguments to functions.


<a id="orgfc9333b"></a>

### Defining Functions

The 5 main parts:

- `defn`
- Function name
- **docstring:** describing the function (optional). use (doc fn-name) to see the function doc
- **Parameters (and Arity):** listed in brackets (vector). The number of parameters is the level of arity.
- Function body

    (def my-special-multiplier (fn [x] (* x 3)))
    (defn def-my-special-multiplier [x] (* x 3))
    
    (my-special-multiplier 2)
    (def-my-special-multiplier 4)


<a id="org68bd1c1"></a>

### Arity

- **arity overloading:** define a function so a different function body will run depending on the arity. each definition will be closed in parens and have an argument list.
    
    Arity overloading is one way to provide default values for arguments.

    (defn x-chop
      "Describe the kind of chop you're inflicting on someone"
      ([name chop-type]
         (str "I " chop-type " chop " name "! Take that!"))
      ([name]
         (x-chop name "karate")))
    
    (x-chop "Kanye West" "slap")
    (x-chop "Kanye West")

You can provide variable arity to a function with the rest parameter: `&`


<a id="org23a3687"></a>

### Destructuring

- **destructuring:** Lets you concisely bind names to values within a collection

    ;; Return the first element of a collection
    (defn my-first
      [[first-thing]] ; Notice that first-thing is within a vector
      first-thing)
    
    (my-first ["oven" "bike" "war-axe"])

You can name as many arguments as you want and use the rest operator to pass the... rest of the list

You can destructure keywords out of maps as well.

    (defn receive-treasure-location
      [{:keys [lat lng] :as treasure-location}]
      (println (str "Treasure lat: " lat))
      (println (str "Treasure lng: " lng))
    
      ;; One would assume that this would put in new coordinates for your ship
      (steer-ship! treasure-location))


<a id="orgbaef7bc"></a>

### Function body

The function body contains forms of any kind. It will return the last form evaluated.


<a id="org7935b52"></a>

### Anonymous Functions

Create Anonymous functions in 2 ways:

- fn
    treat fn almost identically to how you treat defn
    they can be associated with a name as well!
- \#(...)
    more compact version
    this is possible by what Clojure calls reader macros.
    % indicates Arguments
    %1, %2, %3 indicates multiple arguments
    %& passes the rest of the arguments


<a id="orge2bd6d1"></a>

## Returning Functions

- Returned functions are closures, they can access all the variables that were in scope when the function was created
    
        (defn inc-maker
          "Create a custom incrementor"
          [inc-by]
          #(+ % inc-by))
        
        (def inc3 (inc-maker 3))
        
        (inc3 7)


<a id="orgc422d89"></a>

## Shire model

    (def asym-hobbit-body-parts [{:name "head" :size 3}
                                 {:name "left-eye" :size 1}
                                 {:name "left-ear" :size 1}
                                 {:name "mouth" :size 1}
                                 {:name "nose" :size 1}
                                 {:name "neck" :size 2}
                                 {:name "left-shoulder" :size 3}
                                 {:name "left-upper-arm" :size 3}
                                 {:name "chest" :size 10}
                                 {:name "back" :size 10}
                                 {:name "left-forearm" :size 3}
                                 {:name "abdomen" :size 6}
                                 {:name "left-kidney" :size 1}
                                 {:name "left-hand" :size 2}
                                 {:name "left-knee" :size 2}
                                 {:name "left-thigh" :size 4}
                                 {:name "left-lower-leg" :size 3}
                                 {:name "left-achilles" :size 1}
                                 {:name "left-foot" :size 2}])

    (defn sym-hobbit
      [asym]
      (map (fn [{name :name}] (if (clojure.string/includes? (str name) "left")
                                (println "yay")
                                ()
                                )) asym))
    
    (sym-hobbit asym-hobbit-body-parts)

