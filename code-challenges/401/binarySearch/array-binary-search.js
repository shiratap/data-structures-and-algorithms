'use strict';


let binarySearch = function(array, value){
  if(!array || typeof array !== typeof []){return null;}

  if(typeof value !== 'number' || value < array[0] || value > array[array.length-1]){return -1;}

  let midpoint = Math.ceil(array.length/2);
  let lowerUpper = [0, (array.length-1)];
  let index = loopingFunction(lowerUpper, value, midpoint, array);
  return index;
};

let loopingFunction = function(lowerUpper, value, midpoint, array){
  if(array[midpoint] === value || lowerUpper[0] === lowerUpper[1]){return midpoint;}
  else if(array[midpoint] > value ){
    return loopingFunction([lowerUpper[0], midpoint], value, Math.ceil((midpoint - lowerUpper[0])/2 + lowerUpper[0]), array);
  }
  else if(array[midpoint] < value ){
    return loopingFunction([midpoint, lowerUpper[1]], value, Math.floor((lowerUpper[1] - midpoint)/2 + midpoint), array);
  }
};

module.exports = binarySearch;
