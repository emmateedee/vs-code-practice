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
