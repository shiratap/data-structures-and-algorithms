'use strict';

function FizzBuzzTree(tree){
  preorderMod(tree.root);
  return tree;
}

function preorderMod(root){
  if(root.value % 5 === 0 && root.value % 3 === 0){
    root.value = 'FizzBuzz';
  }
  else if(root.value % 5 === 0){
    root.value = 'Buzz';
  }
  else if(root.value % 3 === 0){
    root.value = 'Fizz';
  }
  if(root.left){preorderMod(root.left); return;}
  if(root.right){preorderMod(root.right); return;}
}

module.exports = FizzBuzzTree;