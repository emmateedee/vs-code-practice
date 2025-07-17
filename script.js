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


console.log(emmanuel.friends);

console.log(
    `${emmanuel.firstName} has ${emmanuel["friends"].length} friends and his best friend is ${emmanuel["friends"][0]}`
);
const emmanuel = {
    firstName: "Emmanuel",
    lastName: "Dauda",
  birthYear: 1998,
  job: "software engineer",
  friends: ["Miracle", "Evelyn", "Samuel", "Charles"],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
},

getSummary: function () {
    this.summary = `${this.firstName} ${this.lastName} is a ${
      this.job
    }, was born in ${this.birthYear} and he's ${this.age} years old. He has ${
      this.friends.length
    } friends. He has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    return this.summary;
  },
};
console.log(emmanuel);
console.log(emmanuel.calcAge());
console.log(emmanuel.getSummary());
console.log(emmanuel.summary);
console.log(emmanuel["summary"]);

*/

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

console.log(mark.calcBMI(), john.calcBMI());

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s (${john.BMI})`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${john.BMI}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.BMI})`
  );
}
