"use strict";
// console.log("Hello, GitHub!");
/*
function logger() {
  console.log("My name is Emmanuel");
}

logger();

const calcAverage = (x, y, z) => (x + y + z) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(95, 84, 99);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgDolphins * 2 <= avgKoalas) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
} else {
    return `No team wins...`;
}
};
console.log(checkWinner(scoreDolphins, scoreKoalas));

*/

const calcAverage = function (grow) {
  //   console.log(grow);
  return grow * 5;
};
calcAverage(99);

function calcAverage2(grow) {
  console.log(grow);
}
calcAverage2("Emmanuel");

const calcAverage3 = (grow) => console.log(grow);
calcAverage3("na men dey run am");

const money = function (input) {
  const addendum = calcAverage(input);
  return `I've got ${addendum} million dollars in my bank account`;
};
console.log(money(20));
