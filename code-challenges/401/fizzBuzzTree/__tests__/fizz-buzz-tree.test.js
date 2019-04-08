'use strict';

const Node = require('../node.js');
const BST = require('../tree.js');
const change = require('../fizz-buzz-tree.js');

describe('Can change all node values of a tree that are divisible by 3 and 5, 3, 5 correctly', () => {
  it('Can properly change node values if they are numbers', () => {
    let bst = new BST(new Node(15));

    let value = [3,5,16,17];
    value.forEach(number => bst.add(number, bst.root));
    
    const modded = change(bst);
    modded.preOrder(bst.root);

    expect(modded.preOrderArr).toEqual(['FizzBuzz', 'Fizz', 'Buzz', 16, 17]);
  });

  it('Wont change values if theyre letters', () => {
    let bst = new BST(new Node('a'));

    let value = ['b','c'];
    value.forEach(number => bst.add(number, bst.root));
    
    const modded = change(bst);
    modded.preOrder(bst.root);

    expect(modded.preOrderArr).toEqual(['a','b','c']);
  });

});