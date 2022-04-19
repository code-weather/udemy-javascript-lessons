/* 
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jameson");
console.log(23);

let message = "Hello world";

console.log(message);
console.log(message);
console.log(message);

/////////////////////////////////////////////////////////////

// Symbols that are allowed in JS are numbers (cannot start with a number), letters, underscore _ , and $
// Reserved names that cannot be used are "function" and "new". Must start with a underscore or a dollar sign.
let $function = 24;
let $new = "my gaming computer";

let bing_bong = "Ling long";

console.log($new);
console.log(bing_bong);

// Convention that are reserved that'll never change
let PI = 3.14159;

////////////////
// BOOLEAN
////////////////
let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof shows what type of data type
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jameson");

// Dynamic typing - Change the type of value that is held in a variable
javascriptIsFun = "Yes!";
console.log(javascriptIsFun); // It logs as string

// Undefined
let year;
console.log(year);
console.log(typeof year);

year = 1998; // Assigned new value to the variable "year"...Remember it's called dynamic typing
console.log(typeof year);

// An error that exist in typeof operator
console.log(typeof null);


//////////////////////////////
// let, const, and var
//////////////////////////////
let age = 24;
age = 25;
console.log(age);

// Cannot change const variable...therefore console.log will return an error
const birthYear = 1998;
// birthYear = 1999;
// console.log(birthYear);

// Cannot declare empty const variable
const job;

//////////////////////
// Basic Operators
//////////////////////
const now = 2032;
const ageJameson = now - 1998;
const ageFutureShorty = now - 2001;
console.log(ageJameson, ageFutureShorty);

console.log(ageJameson * 2, ageJameson / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jameson";
const lastName = "Wang";
console.log(firstName + " " + lastName); // Concatenate Strings
console.log(`${firstName} ${lastName}`); // Template Strings

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 100
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJameson > ageFutureShorty); // >, <, >=, <=
console.log(ageFutureShorty >= 100);

const isFullAge = ageFutureShorty >= 18;
console.log(isFullAge);

console.log(now - 1998 > now - 2001);
*/

///////////////////////
// //Operator Precedence
///////////////////////
// const now = 2037;
// const ageJameson = now - 1998;
// const ageFutureShorty = now - 2018;

// console.log(now - 1998 > now - 2018);

// console.log(25 - 10 - 5); // Associativity from left-to-right

// // example of associativity from right-to-left
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// // Grouping (PEMDAS) operator type
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// // Operators with higher precedence become the operands of operators with lower precedence.
// const averageAge = (ageJameson + ageFutureShorty) / 2; // Example of PEMDAS
// console.log(ageJameson, ageFutureShorty, averageAge);

/////////////////////////////////
// Strings and Template Literals
/////////////////////////////////
const firstName = "Jameson";
const job = "software engineer";
const birthYear = 1998;
const year = 2022;

const jameson =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jameson);

const jamesonNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jamesonNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
