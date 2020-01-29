---
title: "The Execution Context in JavaScript"
date: 2018-11-27 18:26:27
category: 'development'
draft: false
---


JavaScript is a dynamic and versatile language after all it can be used both on the frontend and the backend. You can create web apps, server backends, desktop apps, and mobile apps. That's why JavaScript is one of my favorite languages (it's always on the top 3 &#128515;). 

Although javaScript is pretty amazing it is a special breed on its own. JavaScript does not behave like other programming languages (Java, C++, Python, C# etc.). It is wierd. Like really weird. Well, we do have to understand that when we run javaScript code we run it on a widow in the browser. So what happens when we start executing code with javaScript? say hello to...
<br />

## The Global Execution Context

Whenever code is run by javaScript at the global level (meaning not inside a function) it is run inside an execution context. It is basically a wrapper that the javaScript engine creates to wrap your code into an execution context. When we look at a program what we are actually looking at is an execution context being created and run. 

This global execution context is our base execution context, it is accessible everywhere inside our code. So what does it do? First we have to understand that is it created by the javaScript engine, we never write any code to create it. It is part of the Javascript language. It creates two things for us:

- A global Object: A collection of value name pairs. It is always part of the window. Each window has its own execution context. 

- The keyword 'this': A special keyword that has been confusing developers since the creation of the universe

Here we have a window open in the browser with an empty javaScript file and when we type window into the console we get a window object with a bunch of variables and functions: 

<img src="https://raw.githubusercontent.com/AndresXI/Hexo-Blog/master/window-1.png">

similarly when we type the keyword 'this' into the console we get: 
<img src="https://raw.githubusercontent.com/AndresXI/Hexo-Blog/master/window-2.png">

<br >
Yes folks, the window object and the keyword 'this' are essentially the same thing...weird huh? But this is only true at the global level. In javaScript when we create variables and functions (at the global level) they get attached to the global object aka the window object or 'this'. Again this is only happening in the global execution context, yes there can many execution contexts (that on its own can be another post!). Say we create a function and a variable at the global level in a javaScript file 

 ```javascript
  var allDogs = 23; 

  function allDogsSay() {
    console.log("Woof, Woof!); 
  }
 ```
 
 now when we type window into the console we will find our variable and function inside the window object and they will live there for the rest of their lives without any freedom whatsoever. Poor things...
 <img src="https://raw.githubusercontent.com/AndresXI/Hexo-Blog/master/window-3.png">

<br >
 ## Main takeaway 

 The main point to takeaway is that before we write any code in javaScript we already have an object that's created, the window object. This is the javaScript engine working behind the scenes. When most people start to learn javaScript they don't pay attention to what's happening behind the scenes they are more concerned with syntax of the language (as it was the case with me). If you feel comfortable working with javaScript I recommend you start learning how javaScript works under the hood and for that my friends I recommend this course on Udemy [JavaScript Understanding the Weird Parts](https://www.udemy.com/understand-javascript/) See you guys next time and go hack something. Now!

<!-- So you've finally managed to add all the finishing touches to your project and now you're eagerly wanting to show it off to the world. You can do so easily within minutes with [surge.sh](https://surge.sh/) right from the command line.  -->