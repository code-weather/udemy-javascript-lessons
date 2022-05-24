// ////////////////
// // STRICT MODE
// ////////////////
// /*
// Strict mode makes several changes to normal JavaScript semantics:

// 1. Eliminates some JavaScript silent errors by changing them to throw errors.
// 2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
// 3. Prohibits some syntax likely to be defined in future versions of ECMAScript.
// */
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive! :D");


// ///////////////
// // FUNCTION
// ///////////////
// /*
// A function is a block of code designed to perform a particular task and can be reused.
// */

// function logger() {
//   console.log("My name is Jameson");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// const fruitProcessor = (apples, oranges) => {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// };

// console.log(fruitProcessor(5, 0));


// ////////////////////////////////////////////////////////////////////////
// // FUNCTION DECLARATIONS V.S. FUNCTION EXPRESSIONS V.S. ARROW FUNCTIONS
// ////////////////////////////////////////////////////////////////////////
// /* NOTE:
// Function declaration can call the function before define the function. See example below...

// Function expression cannot call the function before defining the function

// I prefer calling the function in the console.log
// */

// // FUNCTION DECLARATION
// const age1 = calcAge1(1998);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// // const age1 = calcAge1(1998);
// // console.log(age1);

// ////////////////////////////////////////////////////////////

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//   // this is called an anonymous function bc it has no name for the function
//   return 2037 - birthYear;
// };

// // const age2 = calcAge2(1998);

// // console.log(calcAge1(1998), calcAge2(1998)); // FOR BOTH FUNCTIONS

////////////////////////////////////////////////////////////

// ARROW FUNCTIONS
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1998, "Jameson"));
// console.log(yearsUntilRetirement(1980, "Bob"));


// /////////////////////////////////////
// // FUNCTIONS CALLING OTHER FUNCTIONS
// /////////////////////////////////////
// function cutFruitPieces(fruit) {
//   return fruit * 5;
// }

// function fruitProcessor(apples, oranges) {
//   // const applePieces = cutFruitPieces(apples);
//   // const orangePieces = cutFruitPieces(oranges);

//   //return `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;

//   // OR

//   // ALL IN ONE
//   return `Juice with ${cutFruitPieces(apples)} piece of apple and ${cutFruitPieces(oranges)} pieces of orange.`;
// }

// console.log(fruitProcessor(2, 3));


//////////////////////////
// INTRODUCTION TO ARRAYS
//////////////////////////
// Alternative way to write an array (but not practical)
const yearsArr = new Array(1991, 1992, 2005, 2043, "bing", true, "bong");
console.log(yearsArr);

const friend1 = "Joe";
const friend2 = "Bri";
const friend3 = "Mia";

const friends = ["Joe", "Bri", "Mia"];
console.log(friends);

console.log(friends[0]); // "Joe"
console.log(friends[2]); // "Mia"

console.log(friends.length); // The amount of variables in an array
console.log(friends[friends.length - 1]); // To get the last index of an array. (number of )

friends[2] = "Aim"; // Changing index 2 ["Joe", "Bri", "Aim"]
console.log(friends);
// friends = ["Bob", "Alice"]...cannot change array

const firstName = "Jameson";
const arrVariables = [firstName, "ZhingZhangZhong", 5 + 5, "beep", "boop", true, friends];
console.log(arrVariables);
console.log(arrVariables.length)

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);