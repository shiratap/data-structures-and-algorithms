
const reverseArray = require('../array-shift.js')


describe('Proper functionality for array-reverse',() => {
  it('When `Happy Path` is the second value, returns the array with `Happy Path` at the middle', () => {
    let testValue = 'Happy Path';
    let testArray = [1,2,3,4,5,6,7,8,9,10];
    expect(reverseArray(testArray, testValue)).toEqual([1,2,3,4,5, "Happy Path",6,7,8,9,10])
  })
})

describe('Improper functionality for array-reverse',() => {
  it('When the parameter that is supposed to be an array is not actually an array', () => {
    let testValue = 'Happy Path';
    let testArray = true;
    expect(reverseArray(testArray, testValue)).toBeNull();
  })
})

describe('Improper functionality for array-reverse',() => {
  it('If given an empty array, returns null', () => {
    let testValue = 'Happy Path';
    let testArray = [];
    expect(reverseArray(testArray, testValue)).toBeNull();
  })
})