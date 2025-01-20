// const a=1
// var c=2
// var c=1
// console.log(c)



// let a=5
// let b=5
// // console.log(a*b)



// if (a>b){
//     console.log(" a is greater");
    
// }else{
//     console.log("b is greater");

// }






// 1. Variables, Keywords, and Identifiers
let name = "John";  // 'let' is a keyword, 'name' is an identifier.
const age = 30;
console.log(name, age);  // Output: John 30


// 2. Execution Context, Hoisting, and Call Stack
console.log(a); // undefined due to hoisting
var a = 5;      // 'a' is hoisted, but not initialized at the point of logging


// 3. Let, Var, Const, and Temporal Dead Zone (TDZ)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;     // 'let' variables are not hoisted in the same way as 'var' variables.


// 4. JavaScript Runtime, Call Stack, Event Loop
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 5000);

console.log("End");
// Output: "Start" and "End" first, followed by "Async Task" after the call stack is cleared, demonstrating the event loop.

// 5. Scopes, Scope Chaining, Lexical Environment
function outer() {
  let outerVar = "I am outer";
  function inner() {
    console.log(outerVar); // Can access outerVar due to scope chaining
  }
  inner();
}
outer();  // Output: I am outer

// 6. Primitive and Non-Primitive, Mutable and Immutable
let num = 5;  // Primitive (immutable)
num = 10;     // Reassigned, not modified in place

let obj = { name: "John" }; // Non-primitive (mutable)
obj.name = "Jane";          // Modified in place

console.log(num, obj);  // Output: 10 { name: 'Jane' }

// 8. Post Increment and Pre Increment
let aVal = 5;
console.log(aVal++); // 5 (Post-increment, prints before increment)
console.log(aVal);   // 6

let bVal = 5;
console.log(++bVal); // 6 (Pre-increment, increments before printing)


// Conditional Statements:
// 1. If-Else Example
let x = 10;
if (x > 5) {
  console.log("x is greater than 5"); // Executes because the condition is true.
} else {
  console.log("x is 5 or less"); // Not executed.
}
// Output: "x is greater than 5"

// 2. Switch Example
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break; // Stops further evaluation after this case.
  case 2:
    console.log("Tuesday"); // Executes this block because day is 2.
    break;
    case 3:
        console.log("wednessday");
        break;
  default:
    console.log("Invalid day"); // Not executed because the case matches.
}
// Output: "Tuesday"


// Loop Examples:

// 3. For Loop Example
// The for loop repeats a block of code a specific number of times.
for (let i = 0; i < 3; i++) {
  console.log("For loop iteration", i); // Runs 3 times: i = 0, 1, 2.
}
// Output:
// For loop iteration 0
// For loop iteration 1
// For loop iteration 2


// 4. While Loop Example
// The while loop repeats a block of code while the specified condition is true.
let i = 0;
while (i < 3) {
  console.log("While loop iteration", i); // Runs while i < 3.
  i++; // Increments i each time.
}
// Output:
// While loop iteration 0
// While loop iteration 1
// While loop iteration 2
 

// 5. Do-While Loop Example
// The do-while loop guarantees at least one iteration, even if the condition is false.
let count = 0;
do {
  console.log("Current count:", count); // Always runs at least once.
  count++; // Increments count each time.
} while (count < 3);
// Output:
// Current count: 0
// Current count: 1
// Current count: 2


// Types of Functions:

// 1. Traditional Function (Function Declaration)
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alice"));  // Output: "Hello, Alice"

// 2. Anonymous Function
const square = function (num) {
  return num * num;
};
console.log(square(5));  // Output: 16

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(6, 4));  // Output: 12

// 4. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("I am an IIFE!");  // Executes immediately.
})();
