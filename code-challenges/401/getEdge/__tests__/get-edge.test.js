'use strict';

let GE = require('../get-edge.js');
let Graph = require('../../graph/graph.js');

describe('Get Edge tests', () => {
  xit('Should work dude', () => {
    let test = new Graph();

    let TN1 = test.AddNode(13);
    let TN2 = test.AddNode(14);
    let TN3 = test.AddNode(15);
    let TN4 = test.AddNode(16);

    test.AddEdge(TN1, TN2, 300);
    test.AddEdge(TN2, TN3, 400);
    test.AddEdge(TN4, TN3, 500);
    let arr = [TN1, TN2, TN3, TN4];

    expect(GE(test, arr)).toEqual(1200);
  });
});
