// ////////////
// // FUNCTION
// ////////////
// const describeCountry1 = (country, population, capitalCity) => {
//   return `${country} has ${population} billion people and its capital city is ${capitalCity}`;
// };

// console.log(describeCountry1("China", 1, "Beijing"));
// console.log(describeCountry1("Bing", 3, "Bong"));
// console.log(describeCountry1("Ling", 3, "Long"));

// // OR

// const describeCountry2 = (country, population, capitalCity) => {
//   console.log(
//     `${country} has ${population} million people and its capital city is ${capitalCity}`
//   );
// };

// describeCountry2("United States", 331, "Washington D.C.");
// describeCountry2("Ting", 2, "Tong");
// describeCountry2("Ding", 8, "Dong");

// //////////////////////////////////////////////////////////////
// // FUNCTION DECLARATIONS V.S. EXPRESSIONS V.S. ARROW FUNCTION
// //////////////////////////////////////////////////////////////
// // Function declaration
// function percentageOfWorld1(population) {
//   const percentage = (population / 7900) * 100;
//   return percentage;
// }

// const percUSA1 = percentageOfWorld1(332);
// const percChina1 = percentageOfWorld1(1441);
// const percPortugal1 = percentageOfWorld1(10);
// console.log(percUSA1, percChina1, percPortugal1);

// // Function expressions
// const percentageOfWorld2 = function (population) {
//   const percentage = (population / 7900) * 100;
//   return percentage;
// };

// const percUSA2 = percentageOfWorld1(332);
// const percChina2 = percentageOfWorld1(1441);
// const percPortugal2 = percentageOfWorld1(10);
// console.log(percUSA2, percChina2, percPortugal2);

// // Arrow Functions
// const percentageOfWorld3 = (population) => {
//   const percentage = (population / 7900) * 100;
//   return percentage;
// };

// const percUSA3 = percentageOfWorld1(332);
// const percChina3 = percentageOfWorld1(1441);
// const percPortugal3 = percentageOfWorld1(10);
// console.log(percUSA3, percChina3, percPortugal3);

/////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS
/////////////////////////////////////
/*
NOTE: Parameters can be reused within the function code block
*/

const percentageOfWorld1 = (population1) => {
  return (population1 / 7900) * 100;
};

const describePopulation = (country, population) => {
  const countryPopulation = percentageOfWorld1(population);

  return `${country} has ${population} million people, which is about ${countryPopulation}% of the world.`;
};

console.log(describePopulation("US", 334));
console.log(describePopulation("Greece", 10));
console.log(describePopulation("Taiwan", 23));
