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
*/

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(calcTip(100));

const bills = [122, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);
