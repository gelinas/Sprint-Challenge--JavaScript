# Louis Gelinas 23AUG19
# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`

.forEach loops through each element in an array and performs a function with it--- this could be pushing it to a new array, or it could be something completely different (pushing characters to a string, mutating the original array, etc).

.map loops through each element in an array, performs a function, and pushes it to a new array.

2. What is the difference between a function and a method?

A function can be defined within any scope (global or block) and called within that scope.

A method is defined within an object and can only be called by first referencing that object (or it's class/prototype children).

3. What is closure?

A closure is the lexical scope of a function. It is novel because when an inner function accesses variables outside of it's lexical scope (outside of its closure), that inner function will still have access to that variable even after both the inner and out function return. This can be manipulated to create a memory of the variable's new value or to create data privacy.

4. Describe the four rules of the 'this' keyword.


* 1. window/global binding: when in the global scope, 'this' refers to the entire environment. 'use strict' prevents issues that result from global binding
* 2. implciit binding: when a function is called, the left of the dot is the 'this'. So any 'this' references in the function will look for the attributes in the object preceeding the dot.
* 3. new binding: if a contructor function contains a method with 'this', and the constructor function is used to make a new object, and the method is called on the new object... the 'this' will refer to the attributes of the new object.
* 4. Explicit binding: use .call(obj) and .apply(obj) to override the 'this' from the other principles, and set the attributes 'this' references to be the ones called/applied

5. Why do we need super() in an extended class?

super() is the syntactic corralary to 'Object.call(this, attributes);' which is the code required to establish inheritance. Since JavaScript classes are just 'syntactic sugar' over prototype methods and object inheritance, not using super in an extended class will prevent it from actually inheriting the parent class' properties.

## Project Set up

Follow these steps to set up and work on your project:

Follow these steps for completing your project:

## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [X] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [X] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [X] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
