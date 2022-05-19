// ///////////////////////////
// // 1. VALUES AND VARIABLES
// ///////////////////////////
// let country = "United States of America";
// let continent = "North America";
// let population = 331;

// console.log(country);
// console.log(continent);
// console.log(population);

// /////////////////
// // 2. DATA TYPES
// /////////////////
// let isIsland = false;
// let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// /////////////////////////
// // 3. LET, CONST, AND VAR
// /////////////////////////
// language = "English";
// const country = true;
// const continent = "North America";
// const population = 331;
// isIsland = false;

// ///////////////////////////////
// // 4. BASIC OPERATORS
// ///////////////////////////////
// let population = 331;
// console.log(population / 2);

// population++;
// console.log(population);

// console.log(population > 8);
// console.log(population < 33);

// const country = "United States of America";
// const continent = "North America";
// let USPopulation = 331;
// const language = "English";

// const description =
//   country +
//   " is in " +
//   continent +
//   ", and about its " +
//   USPopulation +
//   " million people speak " +
//   language;
// console.log(description);

// ////////////////////////////////////
// // 5. STRINGS AND TEMPLATE LITERALS
// ////////////////////////////////////
// const country = "United States of America";
// const continent = "North America";
// let USPopulation = 331;
// const language = "English";

// const templateLiteralDescription = `${country} is in ${continent}, and about its ${USPopulation} million people speak ${language}`;
// console.log(templateLiteralDescription);

// ////////////////////////////////////////////
// //6. TAKING DECISIONS: IF / ELSE STATEMENTS
// ////////////////////////////////////////////
// if (130 > 33) {
//   console.log("This country's population is above average");
// } else {
//   console.log("This country's population is below average");
// }

// ///////////////////////////////////
// // 7. TYPE CONVERSION AND COERCION
// ///////////////////////////////////
// // console.log("9" - "5"); // 4
// // console.log("19" - "13" + "17"); // 23
// // console.log("19" - "13" + 17); // "617"
// // console.log("123" < 57); // false
// // console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// /////////////////////////////////////
// // 8. EQUALITY OPERATORS: == vs. ===
////////////////////////////////////////
// // QUESTION 1.
// // const numNeighbors = prompt("How many neighbor countries does your country have?");
// // This prompt does not with with strict equality (===). Only will work with loose equality due to string converting to an integer which will log in the console "Only 1 border!"

// const numNeighbors = Number(
//   prompt("How many neighbor countries does your country have?")
// );
// // This with Number(prompt()) will work with strict equality (===) since it's looking for integers

// if (numNeighbors === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// /////////////////////
// // LOGICAL OPERATORS
// /////////////////////
// const language = "english";
// const population = 49;
// const isIsland = false;

// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in Portugal :)`);
// } else {
//   console.log(`Portugal does not meet your criteria 🙁`);
// }

// ////////////////////////
// // THE SWITCH STATEMENT
// ////////////////////////
// const language = "mandarin";

// switch (language) {
//   case "mandarin":
//   case "chinese": // in order to use two cases, do it as shown here because without a break, it'll execute the next case
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great languages too :D");
// }

// //////////////////////////////////////
// // THE CONDITIONAL (TERNARY) OPERATOR
// //////////////////////////////////////
// const population = 331;

// population > 33
//   ? console.log("U.S. population is ABOVE average")
//   : console.log("U.S. is population is BELOW average");

// console.log(
//   `U.S.'s population is ${population > 33 ? "above" : "below"} average`
// );
