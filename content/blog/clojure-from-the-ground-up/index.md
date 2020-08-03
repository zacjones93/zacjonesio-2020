---
slug: clojure-from-the-ground-up
date: 2020-08-03
title: 'Clojure from the Ground Up'
description: "Clojure is a strongly typed dynamic language built on top of the JVM."
published: true
keywords: ['clojure']
banner: './evgeni-tcherkasski-KypNW49ED7k-unsplash.jpg'
author: 'Zac Jones' 
---
<span>Photo by <a href="https://unsplash.com/@evgenit?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Evgeni Tcherkasski</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

These are my notes from [Clojure From the Ground](https://github.com/koluch/aphyr-clojure-book) up by Kyle Kingsbury. They are intended for the #learninpublic run that I'm doing with [ClojureFam (Team Phanes)](https://github.com/athensresearch/ClojureFam/issues/53)

Chapters 1-3 are defining the basics of Clojure to get you familiar with how the language functions at a basic level.

Everything is data in Clojure. Lists are the basic construct and functions decompose programs into smaller pieces.

# Table of Contents

1.  [Chapter 1: Welcome](#org65760bc)
    <!-- 1.  [Resources](#org29346bc)
    2.  [Notes](#org54cf51b) -->
2.  [Chapter 2: Basic Types](#orgc42855c)
    <!-- 1.  [Resources](#org09fdaff)
    2.  [Types](#orge0a1ac8)
    3.  [Integers](#orgeec35b6)
    4.  [Fractional numbers](#orgf073753)
    5.  [Mathematical operations](#org7e13666)
    6.  [Strings](#org3c057fc)
    7.  [Booleans and logic](#orgf78b4a5)
    8.  [Symbols](#orgfe67d0e)
    9.  [Keywords](#orge05a02e)
    10. [Lists](#orge29ca2b)
    11. [Vectors](#org1dab138)
    12. [Sets](#org56a11f9)
    13. [Maps](#orgec9d6f2) -->
3.  [Chapter 3: Functions](#orgfdf5d44)
    <!-- 1.  [Resources](#org862d4e9)
    2.  [let bindings](#orgc33fe80)
    3.  [Functions](#org8dec145)
    4.  [Vars](#org28b723e)
    5.  [Defining functions](#orgf956e7d)
    6.  [How does type work?](#org14191fa) -->


<a id="org65760bc"></a>

# Chapter 1: Welcome


<a id="org29346bc"></a>

## Resources

- [Core Language Concepts](https://aphyr.com/posts/266-core-language-concepts)
- [Lambda Calculus](https://en.wikipedia.org/wiki/Lambda_calculus)


<a id="org54cf51b"></a>

## Notes

- true, false, nil form the three poles of the Lisp logical system.
- values - the nouns of programming
- **symbols:** references to other values
    
    You can escape an expression by 'quoting' it.
    
        'inc
        '123
        '"foo"
        '(1 2 3)

What you quote is what you will get returned. It delays interpretation of the expression

- **LISP:** LISt Processing

- Lists are core to clujure. They can contain anything (e.g. nil, strings, numbers etc.)
    
        '(1 (2 (3 ())))
    
    > Above is a nested list which you can think of as a tree.
    > Language is like a tree.. sentances are comprised of clauses, which can be nested, and each clause may have subjects modified by adjectives, and verbs modified by adverbs, and so on
    
    > A sentence in Lisp is a list. It starts with a verb, and is followed by zero or more objects for that verb to act on.

> The entire grammar of Lisp: the structure for every expression in the language. We transform expressions by substituting menaings for symbols, and obtain some result. This is the core of Lambda Calculus, and it is the theoretical basis for almost all computer languages.


<a id="orgc42855c"></a>

# Chapter 2: Basic Types


<a id="org09fdaff"></a>

## Resources

- [signed two's complement representation](https://en.wikipedia.org/wiki/Two's_complement)
- [Introducing regular expressions](https://www.oreilly.com/library/view/introducing-regular-expressions/9781449338879/)


<a id="orge0a1ac8"></a>

## Types

- **Type:** a group of values which work in the same way. A Property that some values share, which allows us to organize the world into sets of similar things.
- types can overlap and intersect each other
- Types completely subsume one another
- Every language has a type system. Some languages strict, other's more lax.
- Clojure has strong types because operations on improper types will not allowed. It's dynamic because types are enforced when the program is run instead of when it's first read by the computer


<a id="orgeec35b6"></a>

## Integers

- Long intergers
    longs use one bit to store the sign (negative or positive)
    the other 63 bits represent the size of the number
    Which means... 9223372036854775807 is the longest number that's represented


<a id="orgf073753"></a>

## Fractional numbers

floats and doubles are approximations
the ratio type is how to be exact with these numbers.

    (0.99999999999999999)
    ;;-> 1.0
    (type 1/3)
    ;;-> clojure.lang.Ratio


<a id="org7e13666"></a>

## Mathematical operations

    (= 3 3.0)
    ;;-> false
    (== 3 3.0)
    ;;-> true

The operation comes first but you can subtract, multiple and divide numbers how you would expect.

    (- 3 1)
    ;;-> 2


<a id="org3c057fc"></a>

## Strings

- You can make almost anything into a string with `str`
- you can combine things into a string with `str`
- \#&ldquo;...&rdquo; is clojures way of writing regular expressions
- re-find and re-matches find occurances of regex in a string


<a id="orgf78b4a5"></a>

## Booleans and logic

- true is positive
- false and nil are negative
- we can reasion about true with and, or, not
- Boolean logic is important for control flow


<a id="orgfe67d0e"></a>

## Symbols

- the job of symbols is to refer to things, to point to other values
- when evaluated, symbols are replaced by corresponding values.


<a id="orge05a02e"></a>

## Keywords

- Keywords are like strings but they are specifically intended for use as labels or identifiers.
- prepend with :
    
        (type :cat)
        ;;-> clojure.lang.Keyword
- useful when paired with other values in a collection e.g. a map


<a id="orge29ca2b"></a>

## Lists

- ordered collection
- Lists are a collection - a group of values
- quote lists with ' to prevent from being evaluated
- A collection is a container which provides some structure for the thing it holds - which are called elements or members


<a id="org1dab138"></a>

## Vectors

- Vectors are not evaluated like lists
- first, second, and nth work for acessing vectors
- rest and next return 'everything but the first element' in a vector
    
        (rest [1 2 3])
        ;;-> (2 3)
- Vectors have index's
- Vectors are intended for looking up elements by index
    
        ([:a :b :c] 1)
        ;;-> :b


<a id="org56a11f9"></a>

## Sets

- unordered collection
- #{...} defines a set.
- order doesn't matter in a set, if you want order - use a vector
- sets contain unique values
- most common opperation is checking if something is inside a set with contains?
- You can make a set out of any other collection with `set`


<a id="orgec9d6f2"></a>

## Maps

- a data structure which associates keys with values
- maps are surrounded by braces {...}
- maps can be used as verbs
- keywords look themselves up in a map


<a id="orgfdf5d44"></a>

# Chapter 3: Functions

What are verbs?


<a id="org862d4e9"></a>

## Resources

- [clojure cheatsheet](https://clojure.org/api/cheatsheet)


<a id="orgc33fe80"></a>

## let bindings

- let defines a meaning for a symbol within a specific expression
    
        (let [cats 5] (str "I have " cats " cats."))
        ;;->"I have 5 cats."
- the bindings only apply within the let expression itself
- clojure doesn't care about spacing, alignment, or newlines
- later bindings can use previous bindings

    (let [cats 3 legs (* 4 cats)] (str legs " legs all together."))
    ;;-> "12 legs all together."


<a id="org8dec145"></a>

## Functions

- almost all verbs in Clojure are functions
- functions represent unrealized computation - expressions that aren't evaluated yet.
    
        ((fn [x] (+ x 1)) 2)
        ;;-> 3

x is this functions argument or parameter

- functions describe the relationship between arguments and return balues
- there is shorthand for functions too..
    
        (#(+ % 1) 2)
        ;;->3
    
    same function as described above
- functions are meant to delay evaluation. Isolate patterns of computation


<a id="org28b723e"></a>

## Vars

- def defines a varaible
- variables are mutable

    user=> (def astronauts [])
    #'user/astronauts
    user=> (count astronauts)
    0
    user=> (def astronauts ["hey" "heyhey"])
    #'user/astronauts
    user=> (count astronauts)
    2
    user=> 


<a id="orgf956e7d"></a>

## Defining functions

- creating a function and binding it to a var has it's own shorthand `defn`

    user=> (def half (fn [number] (/ number 2)))
    #'user/half
    user=> (half 6)
    3
    user=> (defn half [number] (/ number 2))
    #'user/half

- functions don't have to take arguments
- arity in a function is how many arguments it takes
- you can handle multiple 'arities' of functions by defining alternate forms
    
        user=> (defn half
          #_=> ( [] 1/2)
          #_=> ([x] (/ x 2)))
        #'user/half
        user=> (half)
        1/2
        user=> (half 10)
        5
- Some functions can take any number of args
    use the & when defining arguments and the rest of the args will be put into the last one
    
        user=> (defn vargs
          #_=> [x y & more-args]
          #_=> {:x x
          #_=>  :y y
          #_=>  :more more-args})
        #'user/vargs
        user=> (vargs 1)
        Execution error (ArityException) at user/eval2048 (REPL:1).
        Wrong number of args (1) passed to: user/vargs
        
        user=> (vargs 1 2)
        {:x 1, :y 2, :more nil}
        user=> (vargs 1 2 3 4 5 6)
        {:x 1, :y 2, :more (3 4 5 6)}
- Functions take a docstring which you can add to a function
    
        user=> (defn half
          #_=> "halves a value"
          #_=> ( [] 1/2)
          #_=> ([x] (/ x 2)))
        #'user/half
        user=> (doc half)
        -------------------------
        user/half
        ([] [x])
          halves a value
        nil


<a id="org14191fa"></a>

## How does type work?

    user=> (doc type)
    -------------------------
    clojure.core/type
    ([x])
      Returns the :type metadata of x, or its Class if none
    nil

- almost every function in clojure is made up of simple functions
- use `source` to view the source code of a function

