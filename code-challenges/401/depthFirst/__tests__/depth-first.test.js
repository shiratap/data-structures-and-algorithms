'use strict';

const DF = require('../depth-first.js');

const Graph = require('../../graph/graph.js');

describe('Depth First testing', () => {
  it('Should display depth first', () => {
    let test = new Graph();
    let TN1 = test.AddNode(13);
    let TN2 = test.AddNode(14);
    let TN3 = test.AddNode(15);
    let TN4 = test.AddNode(16);

    test.AddEdge(TN1, TN2);
    test.AddEdge(TN2, TN3);
    test.AddEdge(TN2, TN4);

    expect(DF(TN1)).toEqual([TN1, TN2, TN3, TN4]);
  });
  it('If a node isnt passed in to the function, null is returned', () => {
    expect(DF(13)).toBeNull();
  });
  it('If there isnt any input, return null', () => {
    expect(DF()).toBeNull();
  });
});