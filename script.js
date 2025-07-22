'use strict';
/*
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  let avgPoints = sum / classPoints.length;

  return yourPoints > avgPoints ? true : false;
}
console.log(betterThanAverage([5, 8, 9, 10, 13], 8));


*/
const temperatures = [3, 2, 6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [7, 85];

const calcTempAmplitutde = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};
const ans = calcTempAmplitutde(temperatures);
console.log(ans);
const calcTempAmplitutdeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitude = calcTempAmplitutdeNew(temperatures, temperatures2);
console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degree celsius')),
    value: 100,
  };
  console.log(typeof measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

const calcTempAmplitutdeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return max - min;
};

const amplitudeBug = calcTempAmplitutdeBug(temperatures, temperatures2);
console.log(amplitudeBug);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const strTemplate = `... ${arr[i]}°C in ${i + 1} days `;
    str += strTemplate;
  }
  console.log(str);
};
const test = [12, 5, -5, 0, 4];
printForecast([17, 21, 23]);

const timeTracker = function (arr) {
  let totalHours = 0;
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    totalHours += arr[0];
    if (arr[i] > max) max = arr[i];
  }
};
