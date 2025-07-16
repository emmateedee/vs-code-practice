"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const ghana = describeCountry("Ghana", 30, "Accra");
const finland = describeCountry("Finland", 6, "Helsinki");
const nigeria = describeCountry("Nigeria", 200, "Abuja");

console.log(nigeria);
console.log(ghana);
console.log(finland);

const wordPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / wordPopulation) * 100;
}
const chinaPopulation = percentageOfWorld1(1441);
console.log(chinaPopulation);

const nigeriaPopulation = percentageOfWorld1(200);
console.log(nigeriaPopulation);

const ghanaPopulation = percentageOfWorld1(30);
console.log(ghanaPopulation);

const percentageOfWorld2 = function (popultion) {
  return (population / wordPopulation) * 100;
};

const chinaPopulation2 = percentageOfWorld1(1441);
console.log(chinaPopulation2);
