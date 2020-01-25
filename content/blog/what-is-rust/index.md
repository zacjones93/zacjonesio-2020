---
slug: essential-questions
date: 2020-01-22
title: 'What is Rust?'
description: "Rust is a statically typed language that fully embraces compiler-checked constraints so that you will encounter all of your bugs during compile time, not run-time."
published: true
keywords: ['rust']
banner: './svetlozar-apostolov-fBjPZq1bK6w-unsplash.jpg'
author: 'Zac Jones' 
---
Photo by [Svetlozar Apostolov](https://unsplash.com/@chernoholik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Rust is a statically typed language that fully embraces compiler-checked constraints so that you will encounter all of your bugs during compile time, not run-time. 

This means that `undefined is not a function` will not occur when you're developing with Rust. The trade-off here is that you have to handle all of your edge-cases up front. There is no handling 80% and calling it good, the compiler won't let your code run until you are 100% covered. 

This behavior is due to the fact that Rust is an embedded systems language that is expected to run for years on end without failure. Because of it's embedded systems nature, Rust holds to the promise that all future updates to the Language will be 100% backwards compatible so you can be assured that if you update, none of your code will break.

## Raw Notes and Exerpts
---

These notes were taken from Jake Gouldings stack overflow post [What is Rust and why is it so popular?](https://stackoverflow.blog/2020/01/20/what-is-rust-and-why-is-it-so-popular/) 

Rust solves pain points present in many other languages, providing a solid step forward with a limited number of downsides.

Statically-typed languages allow for compiler-checked constraints on the data and its behavior, alleviating cognitive overhead and misunderstandings.

Rust encodes this possibility using an optional type, and the compiler requires you to handle the None case. This prevents occurrences of the dreaded TypeError: Cannot read property 'foo' of null runtime error (or language equivalent)

Rust learns from both of these styles and requires top-level items like function arguments and constants to have explicit types, while allowing type inference inside of function bodies.

Rust gives you the choice of storing data on the stack or on the heap and determines at compile time when memory is no longer needed and can be cleaned up. This allows efficient usage of memory as well as more performant memory access.

This allows existing projects to replace performance-critical pieces with speedy Rust code without the memory safety risks inherent with other systems programming languages.

With direct access to hardware and memory, Rust is an ideal language for embedded and bare-metal development.

the borrow checker. This is the part of the compiler responsible for ensuring that references do not outlive the data they refer to, and it helps eliminate entire classes of bugs caused by memory unsafety.

Rust strives to have as many zero-cost abstractions as possible—abstractions that are as equally as performant as the equivalent hand-written code.

When safe Rust isn’t able to express some concept, you can use unsafe Rust. This unlocks a few extra powers, but in exchange the programmer is now responsible for ensuring that the code is truly safe.

Using unsafe code should be a calculated decision, as using it correctly requires as much thought and care as any other language where you are responsible for avoiding undefined behavior. 

Systems programming languages have the implicit expectation that they will be around effectively forever. While some modern development doesn’t require that amount of longevity, many businesses want to know that their fundamental code base will be usable for the foreseeable future. Rust recognizes this and has made conscious design decisions around backwards compatibility and stability; it’s a language designed for the next 40 years.

Multiple concurrent Rust toolchains can be installed and managed via rustup. Rust installations come with Cargo, a command line tool to manage dependencies, run tests, generate documentation, and more. Because dependencies, tests, and documentation are available by default, their usage is prevalent. crates.io is the community site for sharing and discovering Rust libraries. Any library published to crates.io will have its documentation built and published on docs.rs.

Going beyond technical points, Rust has a vibrant, welcoming community.

Rust’s strong type system and emphasis on memory safety—all enforced at compile time—mean that it’s extremely common to get errors when compiling your code.

Prototyping solutions in Rust can be challenging due to its statically-typed nature and because Rust requires covering 100% of the conditions, not just 99%. Edge cases must have applicable code, even when the programmer doesn’t yet know what the happy path should do.

Rust is still relatively new, which means that some desired libraries may not be available yet. The upside is there’s plenty of fertile ground to develop these needed libraries, perhaps even taking advantage of recent developments in the relevant computer science fields.