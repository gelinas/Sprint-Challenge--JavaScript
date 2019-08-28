// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb) {
  return cb(a, b);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting(first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: A function can access it's own lexical scope as well as the scope of any higher closures which contain the function-- so it can access variables within it's own scope, variables within any scope that contains the function, and global variables. Then nestedFunction therefore can access both 'internal' and 'external'.

// If we added a third variable, called 'nested', inside of the nestedFunction closure, that variable would be private-- myFunction could not access it! see below for example.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal); //nestedFunction can access variables from a higher scope!
  };
  nestedFunction();
}
myFunction();

// Example -- produces ReferenceError "nestedEx is not defined." nestedEx can't be seen because it is inside a lower scope!"
const externalEx = "I'm outside the example function";

function myFunctionEx() {
  console.log(externalEx);
  const internalEx = "Hello! I'm inside the example myFunctionEx!";
  console.log(nestedEx); //  Comment this out to unbreak the code.

  function nestedFunction() {
    console.log(internalEx);
    const nestedEx = "Hello! I am nested, and myFunctionEx can't see me";
  };
  nestedFunction();
}
myFunctionEx();
