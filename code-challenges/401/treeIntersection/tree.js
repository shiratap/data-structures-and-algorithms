'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root) { this.root = new Node(value); }
    else {
      let curr = this.root;
      while (curr) {
        if (!curr.L && !curr.R) {
          if (!curr.L) {
            curr.L = new Node(value);
            return;
          }
          else if (!curr.R) {
            curr.R = new Node(value);
            return;
          }
        }
        else {
          if (curr.value < value) {
            curr = curr.R;
          }
          else {
            curr = curr.L;
          }
        }
      }
    }

  }
}


module.exports = BinaryTree;