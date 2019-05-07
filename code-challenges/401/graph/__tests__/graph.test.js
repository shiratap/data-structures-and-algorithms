'use strict';

let Graph = require('../graph.js');

describe('', () => {
  it('Node can be successfully added to the graph', () => {
    let test = new Graph();
    let TN = test.AddNode(13);
    expect(TN.value).toEqual(13);
  });
  it('An edge can be successfully added to the graph', () => {
    let test = new Graph();
    let TN1 = test.AddNode(13);
    let TN2 = test.AddNode(14);
    test.AddEdge(TN1, TN2);
    expect(TN1.adj).toEqual([[TN2, 1]]);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let test = new Graph();
    let TN1 = test.AddNode(13);
    let TN2 = test.AddNode(14);
    expect(test.GetNodes()).toEqual([TN1, TN2]);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    let test = new Graph();
    let TN1 = test.AddNode(13);
    let TN2 = test.AddNode(14);
    test.AddEdge(TN1, TN2);
    expect(test.GetNeighbors(TN1)).toEqual([[TN2, 1]]);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    let test = new Graph();
    let TN1 = test.AddNode(13);
    let TN2 = test.AddNode(14);
    test.AddEdge(TN1, TN2, 3);
    expect(test.GetNeighbors(TN1)).toEqual([[TN2, 3]]);
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let test = new Graph();
    let TN1 = test.AddNode(13);
    let TN2 = test.AddNode(14);
    expect(test.Size()).toEqual(2);
  });
  it('A graph with only one node and edge can be properly returned', () => {
    let test = new Graph();
    let TN1 = test.AddNode(13);
    expect(test.AddEdge(TN1, 3)).toBeNull();
  });
  it('An empty graph properly returns null', () => {
    let test = new Graph();
    expect(test.GetNodes()).toBeNull();
  });
});