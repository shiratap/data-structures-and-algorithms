'use strict';

const insertShiftArray = function(array, value){

  if(checkIfInvalidInput(array) || array.length === 0){return null;}

  const newArray = new Array(array.length + 1);
  const midpoint = findMidpoint(array.length);
  for(let i = 0; i < newArray.length; i++){
    if(i < midpoint){
      newArray[i] = array[i];
    }
    else if(i === midpoint){
      newArray[i] = value;
    }
    else{
      newArray[i] = array[i - 1];
    }
  }
  return newArray;
};

let findMidpoint = function(arrayLength){
  if(arrayLength % 2 === 1){
    return (arrayLength/2) + .5;
  }
  else{
    return (arrayLength/2);
  }
};

let checkIfInvalidInput = function(input){
  return (typeof input !== typeof []);
};

module.exports = insertShiftArray;