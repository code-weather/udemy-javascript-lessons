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


// //////////////////////////
// // INTRODUCTION TO ARRAYS
// //////////////////////////
/*
NOTES:
const does NOT define a constant array. It defines a constant reference to an array. Therefore, elements can be reassigned/mutated
 */
// // Alternative way to write an array (but not practical)
// const yearsArr = new Array(1991, 1992, 2005, 2043, "bing", true, "bong");
// console.log(yearsArr);

// const friend1 = "Joe";
// const friend2 = "Bri";
// const friend3 = "Mia";

// const friends = ["Joe", "Bri", "Mia"];
// console.log(friends);

// console.log(friends[0]); // "Joe"
// console.log(friends[2]); // "Mia"

// console.log(friends.length); // The amount of variables in an array
// console.log(friends[friends.length - 1]); // To get the last index of an array. (number of variables - 1) since it's 0 based count of index

// friends[2] = "Aim"; // Changing index 2 ["Joe", "Bri", "Aim"]
// console.log(friends);
// // friends = ["Bob", "Alice"]...cannot change array

// const firstName = "Jameson";
// const arrVariables = [firstName, "ZhingZhangZhong", 5 + 5, "beep", "boop", true, friends];
// console.log(arrVariables);
// console.log(arrVariables.length)

// // Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]); 
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);


// ////////////////////////////////////
// // BASIC ARRAY OPERATIONS (METHODS)
// ////////////////////////////////////
// /* NOTES:

// ADDING ELEMENTS:
// .push() => method add elements to the end of the array making it the last index...it is technically a function and we call the function directly into the array

// .unshift() => function that adds an element in the front of the array. Index[0]

// REMOVING ELEMENTS:
// .pop() => Removes last index of the array
// .shift() => Removes the first index of the array

// IDENTIFY ELEMENTS: BOTH STRICT EQUALITY...there is no type coercion (i.e. "23" === 23 is false)
// .indexOf() => Return the position of the index in the array...if the value is not found it returns -1

// .includes() => Returns true/false. Method returns true if an index contains a specified index. Returns false if there is no existing index. The method IS CASE SENSITIVE!
// */

// const friends = ["Matthew", false, "Luke", "Joe", "Bri", "Mia"];

// // Add elements
// // const newLength = friends.push("Jay"); // Not a practical way...also it shows the number of index
// // console.log(friends);
// // console.log(newLength);

// friends.push("Jay"); // Add element in last index
// console.log(friends);

// friends.unshift("John"); // Add element in the first index
// console.log(friends);

// // Remove elements
// friends.pop(); // Removes last element/index
// console.log(friends);

// friends.shift();
// console.log(friends); // Removes first element/index

// // Identifying index/elements
// console.log(friends.indexOf("Joe"));
// console.log(friends.indexOf("Bob"));
// console.log(friends.indexOf("23"));

// console.log(friends.includes(false)); // true
// console.log(friends.includes("joe")); // case sensitive. Results in false
// console.log(friends.includes("Joe")); // True
// friends.push(23);
// console.log(friends.includes("23")); // False

// // We can use .includes() method to write conditionals
// if (friends.includes("Bri")) {
//     console.log("You have a friend named Bri")
// } else {
//     console.log("Bing bong, ling long, ting tong")
// }


// ///////////////////////////
// // INTRODUCTION TO OBJECTS
// ///////////////////////////
// /* NOTES:
// In an array of object, we use key-value pairs...for example:

// When using an object, we use curly braces and not brackets

// const object = {
//     key: value,
//     key: value,
// }
// */

// // Array
// const jayArray = [
//     "Jay",
//     "W",
//     2022 - 1998,
//     "unemployed 🥲",
//     ["Joe", "Bri", "Mia"]
// ]
// console.log(jayArray);

// // Object
// const jay = {
//     firstName: "Jay",
//     lastName: "W BABY!",
//     age: 2022 - 1998,
//     job: "unemployed 🥲",
//     friends: ["Joe", "Bri", "Mia"]
// }
// console.log(jay); // In the browser console, it is listed alphabetical order


// /////////////////////////////
// // DOT V.S. BRACKET NOTATION
// /////////////////////////////
// /* NOTES:
// https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572 <= USEFUL WEBSITE
// const object = {
//     name: "value"
// };
// DOT NOTATION:
// object.name; // "value"

// BRACKET NOTATION:
// object["name"]; // "value"

// *** AS A DEFAULT, USE DOT NOTATION ***

// DOT NOTATION:
// PROS:
// - EASIER TO READ
// - FASTER TO TYPE

// CONS:
// - ISSUE WORKING WITH IDENTIFIERS
// - ISSUE WORKING WITH VARIABLES

// ************** SIDE NOTE:
// Idenifiers => a sequence of characters in the code that identifies a variable, function, or property.

// Rules of identifier:
// - case sensitve
// - can contain Unicode letters
// - $, -, are allowed
// - Digits (0-9) are okay BUT may not start with a digit
// ********************************************
// Read the rest on the website on top.....
// */

// // Object
// const jay = {
//     firstName: "Jay",
//     lastName: "Double-U",
//     age: 2022 - 1998,
//     job: "unemployed 🥲",
//     friends: ["Joe", "Bri", "Mia"]
// }
// console.log(jay);

// console.log(jay.lastName);
// console.log(jay["lastName"]);

// // Bracket notation can concatenate string and variable. Example shown below...
// const nameKey = "Name";
// console.log(jay["first" + nameKey]);
// console.log(jay["last" + nameKey]);
// console.log(jay[`first${nameKey}`]);

// // console.log(jay."first" + nameKey); // Concatenating/use template literal a string with dot notation will result in an error

// const interestedIn = prompt("What do you want to know about me? Choose between firstName, lastName, age, job, and friends");
// // console.log(jay.interestedIn); // Result of undefined bc there's no property (i.e. firstName, lastName, age) with interestedIn

// // console.log(jay[interestedIn]); // Use bracket notation for this prompt example

// if (jay[interestedIn]) {
//     console.log(`Nosy butthole tickler...but here's the info 👉 ${jay[interestedIn]}`)
// } else {
//     console.log("Wrong request! CAN'T YOU READ, DUMMY??? Choose b/n firstName, lastName, age, job, and friends")
// }

// // Check the browser console and not the terminal
// jay.location = "USA"; // 
// jay["twitter"] = "N/A";
// console.log(jay);

// // Challenge
// // "Jay has 3 friends, and his best friend is named Joe"
// console.log(`${jay.firstName} has ${jay.friends.length} friends, and his best friend is named ${jay.friends[0]}`)


// //////////////////
// // OBJECT METHODS
// //////////////////
// const jay = {
//     firstName: "Jay",
//     lastName: "Double-U",
//     birthYear: 1998,
//     job: "unemployed for now 🥲",
//     friends: ["Joe", "Bri", "Mia"],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2022 - birthYear;
//     // }

//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old who is ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//     }
// };

// // console.log(jay.calcAge(1998)); // for the first exmaple
// // console.log(jay["calcAge"](1998)); // for the 1st example

// console.log(jay.calcAge());

// console.log(jay.age);
// console.log(jay.age);
// console.log(jay.age);

// // Challenge
// // "Jay is a 24-years old who is unemployed 🥲, and he has a/no driver's license"
// // console.log(`${jay.firstName} is a ${jay.age}-years old who is ${jay.job}, and he ${jay.hasDriversLicense ? "has a driver's license" : "has no driver's license"}`) //  ** THIS IS A MISTAKE **

// console.log(jay.getSummary()); // On line 364


///////////////////////////
// ITERATION: THE FOR LOOP
///////////////////////////
// console.log("Lifting weights repetition 1 🏋️");
// console.log("Lifting weights repetition 2 🏋️");
// console.log("Lifting weights repetition 3 🏋️");
// console.log("Lifting weights repetition 4 🏋️");
// console.log("Lifting weights repetition 5 🏋️");
// console.log("Lifting weights repetition 6 🏋️");
// console.log("Lifting weights repetition 7 🏋️");
// console.log("Lifting weights repetition 8 🏋️");
// console.log("Lifting weights repetition 9 🏋️");
// console.log("Lifting weights repetition 10 🏋️");

// //for loop keeps running while conditions are TRUE
// for(let rep = 1; rep <= 10; rep ++) {
//     // console.log("Lifting weights repetition 1")
//     console.log(`Lifting weights repetition ${rep} 🏋️`)
// }

//////////////////////////////////////////////////////////////

// for(let rep = 2; rep <= 10; rep += 2) {
//     console.log(`Lifting weights repetition ${rep} 🏋️`)
// }

//////////////////////////////////////////////////////////////

// // Without a condition, the loop will ALWAYS evaluate to true. If there's an ongoing loop, hit CTRL + C to kill the terminal
// for(let i = 1; i++;) {
//     console.log(`Counting down from ${i}`)
// }