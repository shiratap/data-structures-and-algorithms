'use strict';

let module1 = require('../tree.js');
let Node = require('../node.js');
let BST = require('../tree.js');

describe('BST tests', () => {
  it('Can successfully instantiate an empty tree', () => {
    let testBST = new BST();
    expect(testBST.root).toBeFalsy();
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    let testN = new Node(13);
    let testBST = new BST(testN);
    expect(testBST.root.value).toEqual(13);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    let testN1 = new Node(13);
    let testBST = new BST(testN1);
    testBST.add(12, testBST.root);
    testBST.add(14, testBST.root);
    expect(testBST.root.leftChild.value).toEqual(12);
    expect(testBST.root.rightChild.value).toEqual(14);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    let testN1 = new Node(13);
    let testBST = new BST(testN1);
    testBST.add(12, testBST.root);
    testBST.add(14, testBST.root);
    testBST.add(11, testBST.root);
    testBST.add(15, testBST.root);
    testBST.add(10, testBST.root);
    testBST.add(16, testBST.root);
    testBST.preOrder(testBST.root);
    expect(testBST.preOrderArr).toEqual([10,11,12,13,14,15,16]);
  });
  xit('Can successfully return a collection from an inorder traversal', () => {
    let testBST = new BST(null);
    expect(testBST.root).toBeNull();
  });
  xit('Can successfully return a collection from a postorder traversal', () => {
    let testBST = new BST(null);
    expect(testBST.root).toBeNull();
  });
});