'use strict';
function doubleChar(str) {
  let hash = '';
  for (let z = 0; z < str.length; z++) {
    hash += str[z] + str[z];
  }

  return hash;
}
