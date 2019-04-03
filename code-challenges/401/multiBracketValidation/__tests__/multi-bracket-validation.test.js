'use strict';

const MBV = require('../multi-bracket-validation.js');

describe('Valid input', () =>{
  it('Can return true', () => {
    expect(MBV('(){}{}{}')).toBe(true);
  });
  it('Can return false', () => {
    expect(MBV('({)}')).toBe(false);
  });
});

describe('Invalid input', () =>{
  xit('When not given an string, returns false', () => {
    expect(MBV({hello:'hello'})).toBeFalsy();
  });
  it('When given the same number of opening and closing tags, but in the wrong order', () => {
    expect(MBV('({)}')).toBe(false);
  });
});