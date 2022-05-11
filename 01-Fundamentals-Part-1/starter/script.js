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


///////////////////////
// let, const, and var
///////////////////////
let age = 24;
age = 25;
console.log(age);

// Cannot change const variable...therefore console.log will return an error
const birthYear = 1998;
// birthYear = 1999;
// console.log(birthYear);

// Cannot declare empty const variable
const job;

//////////////////
// BASIC OPERATORS
//////////////////
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

/////////////////////////
// //OPERATOR PRECEDENCE
/////////////////////////
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

// /////////////////////////////////
// // STRINGS AND TEMPLATE LITERALS
// /////////////////////////////////
// const firstName = "Jameson";
// const job = "software engineer";
// const birthYear = 1998;
// const year = 2022;

// const jameson =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jameson);

// const jamesonNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jamesonNew);

// console.log(`Just a regular string...`);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String
// multiple
// lines`);

// //////////////////////////////////////////
// // TAKING DECISIONS: IF / ELSE STATEMENTS
// //////////////////////////////////////////
// const age = 15;

// if (age >= 19) {
//   console.log("Jameson can start driving");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`You're too young. Wait another ${yearsLeft} years`);
// }

// //if() {

// //} else {

// //}
// //This is known as a controlled structure
// //else block is OPTIONAL. W/o else block, there will be nothing executed

// const birthYear = 2012;

// let century; // Must define century outside the control structure and conditionally re-assign century
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// ////////////////////////////////
// // TYPE CONVERSION AND COERCION
// ////////////////////////////////
// // Type conversion
// const inputYear = "1998";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18); // Result: 199818
// console.log(Number(inputYear) + 18); // Result: 2016

// console.log(Number("Jameson")); // Result: NaN (not a number)
// console.log(typeof NaN); // Result: number

// console.log(String(23), 23); // Result: 23(string), 23

// // Type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1; // "11"
// n = n - 1;
// console.log(n);

// let a = 2 + 3 + 4 + "5"; // "95"
// console.log(a);

// let b = "10" - "4" - "3" - 2 + "5"; // "15"
// console.log(b);

// ///////////////////////////
// // TRUTHY AND FALSY VALUES
// ///////////////////////////
// // 5 falsy values: 0, "" (empty string), undefined, null, NaN (Not a Number)

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const noMoney = 0; // value is 0
// if (noMoney) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// const money = 5;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height1; // undefined value
// if (height1) {
//   console.log("Height is defined!");
// } else {
//   console.log("Height is UNDEFINED");
// }

// let height2 = 0; // value number of 0
// if (height2) {
//   console.log("Height is defined!");
// } else {
//   console.log("Height is UNDEFINED");
// }

// let height3 = 6;
// if (height3) {
//   console.log("Height is defined!");
// } else {
//   console.log("height is UNDEFINED");
// }

// //////////////////////////////////
// // EQUALITY OPERATORS: == VS. ===
// //////////////////////////////////
// const age = "18";
// if (age === 18) console.log("You just became an adult :D (Strict)");

// if (age == 18) console.log("You just became an adult :D (loose)");

// const favorite = prompt("What's your favorite number?");
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite == 23) {
//   // RESULT: true...loose equality will type coercion
//   console.log("Cool! 23 is an amazing number!");
// } else {
//   console.log("Whoops! Not 23.");
// }

// // Convert string prompt into a number.
// const favorite2 = Number(prompt("What's your favorite second number?"));

// if (favorite2 === 24) {
//   console.log("Cool! 24 is a second amazing number!");
// } else if (favorite2 === 7) {
//   console.log("7 is also a cool number!");
// } else if (favorite2 === 9) {
//   console.log("9 is also a cool number!");
// } else {
//   console.log("Number is not 24 nor 7 nor 9");
// }

// if (favorite != 23) {
//   console.log("Why not 23?")
// };

// /////////////////////
// // LOGICAL OPERATORS
// /////////////////////
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B...change this variable to false and see what happens

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("You are able to drive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = true; // C

// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("You are able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

////////////////////////
// The Switch Statement
////////////////////////
const day = "Wednesday";

switch (day) {
  case "Monday": // day === "Monday"
    console.log("Work at Bean Square");
    console.log("Try to practice coding");
    break; // w/o the break it will execute Monday and Tuesday
  case "Tuesday":
    console.log("Code on a Tuesday");
    break;
  case "Wednesday":
    console.log("Do DUH dancing");
    break;
  case "Thursday":
    console.log("Sleep in LMAO it's a free day");
    break;
  case "Friday":
    console.log("Work and I'm free");
    break;
  case "Saturday":
    console.log("Another free day");
    break;
  case "Sunday":
    console.log("Sabbath Day. The Lord's day");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "Monday") {
  console.log("Work at Bean Square");
  console.log("Try to practice coding");
} else if (day === "Tuesday") {
  console.log("Code on a Tuesday");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code and practice");
} else if (day === "Friday") {
  console.log("Getting ready for the weekend");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
