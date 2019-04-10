'use strict';

const Node = require('./treenode.js/index.js');
const Queue = require('./queue.js');

class BinaryTree{
  constructor(node){
    this.root = node;
    this.preOrderArr = [];
    this.inOrderArr = [];
    this.postOrderArr = [];
  }

  preOrder(node){
    this.preOrderArr.push(node.value);
    if(node.left){this.preOrder(node.left);}
    if(node.right){this.preOrder(node.right);}
  }
  inOrder(node){
    if(node.left){this.preOrder(node.left);}
    this.preOrderArr.push(node.value);
    if(node.right){this.preOrder(node.right);}
  }
  postOrder(node){
    if(node.left){this.preOrder(node.left);}
    if(node.right){this.preOrder(node.right);}
    this.preOrderArr.push(node.value);
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(node){
    super();
    super.root = node;
  }
  add(value, root){
    if(root.value > value && root.left){this.add(value, root.left);}
    else if(root.value < value && root.right){this.add(value, root.right);}
    else if(root.value > value && !root.left){
      root.left = new Node(value);
      return root.left;
    }
    else if(root.value < value && !root.right){
      root.right = new Node(value);
      return root.left;
    }
    else if (root.value === value){
      return root.value;
    }
  }
  contains(value, root){
    if(root.value === value){return true;}
    if(root.value < value && root.left){this.contains(value, root.left);}
    else if(root.value > value && root.right){this.contains(value, root.left);}
    else{return false;}
  }

  //BREADTH TRAVERSAL
  findMaximumValue(){
    let Q = new Queue();
    let maxVal = this.root.value;
    Q.enqueue(this.root);
    while(Q.front !== null){
      let V = Q.dequeue();
      if(V.value > maxVal){maxVal = V.value;}
      if(V.left){Q.enqueue(V.left);}
      if(V.right){Q.enqueue(V.right);}
    }
    return maxVal;
  }
}

module.exports = BinarySearchTree;