'use strict';

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  let avgPoints = sum / classPoints.length;

  return yourPoints > avgPoints ? true : false;
}
console.log(betterThanAverage([5, 8, 9, 10, 13], 8));

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  let avgPoints = sum / classPoints.length;

  return yourPoints > avgPoints ? true : false;
}
console.log(betterThanAverage([5, 8, 9, 10, 13], 8));
