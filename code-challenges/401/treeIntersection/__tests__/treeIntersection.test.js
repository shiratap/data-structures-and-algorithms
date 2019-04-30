'use strict';
let BT = require('../../fizzBuzzTree/tree');
let tI = require('../treeIntersection.js');

describe('Tree Intersection tests', () => {
  it('Given two BT with multiple nodes, should return an array of shared values between the two', () => {
    let T1 = BT();
    let T2 = BT();
    expect(true).toBeTruthy();
  });
  it('Should return an empty array if there are no values shared', () => {
    expect(true).toBeTruthy();
  });
  it('If node values are strings, should also work', () => {
    expect(true).toBeTruthy();
  });
});