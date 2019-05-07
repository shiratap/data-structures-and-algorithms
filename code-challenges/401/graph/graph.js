'use strict';

const Node = require('./node.js');

module.exports = class Graph {
  constructor() {
    this.nodes = [];
  }

  AddNode(val) {
    this.nodes.push(new Node(val));
    return this.nodes[this.nodes.length - 1];
  }

  AddEdge(n1, n2, weight) {
    if (!this.nodes.includes(n1) || !this.nodes.includes(n2)) { return null; }
    n1.adj.push([n2, weight || 1]);
    n2.adj.push([n1, weight || 1]);
  }

  GetNodes() { if (this.nodes.length > 0) { return this.nodes; } else { return null; } }

  GetNeighbors(node) {
    return node.adj;
  }

  Size() { return this.nodes.length; }
};