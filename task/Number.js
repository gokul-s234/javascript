const n = 22;
const str1 = "22";

console.log(n);
console.log(str1)

console.log(n === str1);

console.log(typeof n);

console.log(Number('hi'));
console.log(Number.isNaN('hi'));

const n1 = 7;
console.log(n1.toString());

const f = 54.731;
console.log(f.toPrecision(4));

const str2 = "54.731abc";
console.log(Number.parseFloat(str2));
console.log(Number.parseInt(str2));


////MATH FUNCTIONS
// Math.round() - Rounds a number to the nearest integer.
let number = 5.5
let result1 = Math.round(number);
console.log(result1); // Output: 6

//Math.pow() - Raises a number to the power of another number.
let base = 3;
let exponent = 4;
let result2 = Math.pow(base, exponent);
console.log(result2); // Output: 81

//Math.floor() - Rounds a number down to the nearest integer.
let number1 = 7.8;
let result3 = Math.floor(number1);
console.log(result3); // Output: 7

//Math.sqrt() - Finds the square root of a number.
let number2 = 81;
let result4 = Math.sqrt(number2);
console.log(result4); // Output: 4

//Math.ceil() - Rounds a number up to the nearest integer.
let number3 = 7.3;
let result5 = Math.ceil(number3);
console.log(result5); // Output: 8
﻿
