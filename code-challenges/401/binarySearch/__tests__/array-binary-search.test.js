'use strict';

const binarySearch = require('../array-binary-search.js');

describe('When looking for a value and the value is in the array', () => {
  it('Should return the index found for that value within the array', () => {
    let array = [1,2,3,4,5,6,7,8,9,10];
    let value = 5;
    expect(binarySearch(array,value)).toEqual(4);
  });
});

describe('If the array is not sorted and the end values do not contain the value' , () => {
  it('Should return -1', () => {
    let array = [3,10,5];
    let value = 10;
    expect(binarySearch(array,value)).toBe(-1);
  });
});

describe('If the first parameter is not an array', () => {
  it('Should return some sort of error or null', () => {
    let array = 'This is not an array';
    let value = 4;
    expect(binarySearch(array,value)).toBeNull();
  });
});

describe('If the second parameter is not an array', () => {
  it('Should return -1', () => {
    let array = [3,4,5];
    let value = 'haHAA';
    expect(binarySearch(array,value)).toBe(-1);
  });
});