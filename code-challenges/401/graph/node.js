'use strict';

module.exports = class Node {
  constructor(val) {
    this.value = val;
    this.adj = [];
  }
};