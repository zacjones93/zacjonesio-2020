---
slug: essential-questions
date: 2019-12-20
title: 'Thinking Reactively with RxJS'
description: "RxJS is really good at certain problems involving asynchony, especially when multiple 'events' are being called and reference."
published: true
keywords: ['rxjs']
banner: './jonatan-pie-sQVXYkOVc18-unsplash.jpg'
author: 'Zac Jones' 
---
Photo by [Jonatan Pie](https://unsplash.com/@r3dmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

RxJS is really good at certain problems involving asynchony, especially when multiple 'events' are being called and reference. The consitent tool kit that you have at your disposal makes it easy to read and extensible - harder to mess up.

RxJS needs upfront thought on the design of the code to make it become as extensible and beautiful as possible. In this live stream, Rares' broke a requirement from a pretend manager down into digestible problems that could be solved immediately.

A key aspect of this problem solving style is identifying the unkowns upfront so you know how to design your solution in a self-contained, isolated fashion. In this case, separating how the UI is represented as well as how background tasks start/end. He assumes that there will be tasks coming in and ending themselves somehow.

This summary was written after taking notes from Rares Matei's Thinking Reactively with RxJS workshop. You can find the notes here: [Thinking Reactively with RxJS](https://github.com/zacjones93/thinking-reactively-rxjs-livestream-notes).

Once the problems are broken down into digestible chunks, Rares builds chains of RxJS streams that will end up reading much like the plain english requirements they were broken down into.