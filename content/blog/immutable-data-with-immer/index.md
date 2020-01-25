---
slug: immer
date: 2019-10-19
title: 'Immutable Data with Immer'
description: "Immer provides a simple api for updating immutable data so that you aren't left spreading deeply nested objects just so you can update one property."
published: true
keywords: ['immer']
banner: './usgs-FPEiu3NAvns-unsplash.jpg'
author: 'Zac Jones' 
---
Photo by [USGS](https://unsplash.com/@usgs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Using immutable data to store state has many interesting benefits. Immutable data makes it easy to trace state over time. It can be distributed easily, and by leveraging structural sharing we can leverage optimization techniques such as memoization.

In this course we will build a multi user gift-list, in which we will discover how using immer doesn’t just significantly simplifies our state manipulation code. It also provides us with very useful tools such as patches that can help us to distribute changes, build undo/ redo, etc.

I took some notes on this topic from Michel Weststrates [Immutable JavaScript Data Structures with Immer](https://egghead.io/courses/immutable-javascript-data-structures-with-immer) egghead io course.

Check out the notes here: [eggheadio-Notes-Immutable-JavaScript-Data-Structures-with-Immer](https://github.com/zacjones93/eggheadio-Notes-Immutable-JavaScript-Data-Structures-with-Immer).