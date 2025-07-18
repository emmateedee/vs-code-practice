"use strict";
/*
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

const percentageOfWorld3 = (population) => (population / 7900) * 100;


const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    return `${country} has ${population} million people, which is about ${percentage}% of the world`;
    };
    
    const populationChina = describePopulation("China", 1441);
    console.log(populationChina);
    console.log(populations.length === 4);
    
    
    const neighbours = ["Cameroon", "Niger", "Chad", "Benin republic"];
    neighbours.push("Utopia");
    neighbours.pop();
    
    if (!neighbours.includes("chad")) {
        console.log("Probably not a west african country :D");
        }
    neighbours[2] = "chad republic";
    console.log(neighbours);

    
    const myCountry = {
        country: "Nigeria",
        capital: "Abuja",
        language: "english",
        population: 200,
        neighbours: ["Cameroon", "Niger", "Chad", "Benin republic"],
        describe: function () {
            return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.Island;
        },
        };
        
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);

console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);


for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
    }
    */

const populations = [200, 1441, 30, 6];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);
