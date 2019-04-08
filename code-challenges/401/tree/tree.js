'use strict';

const Node = require('./node.js');

class BinaryTree{
  constructor(node){
    this.root = node;
    this.preOrderArr = [];
    this.inOrderArr = [];
    this.postOrderArr = [];
  }

  preOrder(node){
    this.preOrderArr.push(node.value);
    if(this.node.leftChild){this.preOrder(node.leftChild);}
    if(this.node.rightChild){this.preOrder(node.rightChild);}
  }
  inOrder(node){
    if(this.node.leftChild){this.preOrder(node.leftChild);}
    this.preOrderArr.push(node.value);
    if(this.node.rightChild){this.preOrder(node.rightChild);}
  }
  postOrder(node){
    if(this.node.leftChild){this.preOrder(node.leftChild);}
    if(this.node.rightChild){this.preOrder(node.rightChild);}
    this.preOrderArr.push(node.value);
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(node){
    super();
    super.root = node;
  }
  add(value, root){
    if(!root){
      root = new Node(value);
    }
    if(root.value > value && root.leftChild){this.add(value, root.leftChild);}
    else if(root.value < value && root.rightChild){this.add(value, root.leftChild);}
    else if(root.value > value && !root.leftChild){
      root.leftChild = new Node(value);
      return root.leftChild;
    }
    else if(root.value < value && !root.rightChild){
      root.rightChild = new Node(value);
      return root.leftChild;
    }
    else if (root.value === value){
      return root.value;
    }
  }
  contains(value, root){
    if(root.value === value){return true;}
    if(root.value < value && root.leftChild){this.contains(value, root.leftChild);}
    else if(root.value > value && root.rightChild){this.contains(value, root.leftChild);}
    else{return false;}
  }
}

module.exports = BinarySearchTree;