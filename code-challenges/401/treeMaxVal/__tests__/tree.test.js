'use strict';

let BST = require('../tree.js');
let Node = require('../node.js');

describe('should test', () => {
  it('should be alive!', () => {
    expect(true).toBeTruthy();
  });
});


describe('MaxVal tests', () => {
  it('should do things with a valid input', () => {
    let root = new Node(13);
    let bst = new BST(root);

    bst.add(15, bst.root);
    bst.add(100, bst.root);
    bst.add(11, bst.root);
    bst.add(12, bst.root);
    bst.add(14, bst.root);
    bst.add(99, bst.root);
  
    expect(bst.findMaximumValue()).toEqual(100);

  });
  it('shouldnt do things with invalid input', () => {
    let root = new Node('oom');
    let bst = new BST(root);

    expect(bst.findMaximumValue()).toBeFalsy();
  });
  it('should do things when the tree is empty', () => {
    let root = new Node(null);
    let bst = new BST(root);

    expect(bst.findMaximumValue()).toBeNull();
  });
});