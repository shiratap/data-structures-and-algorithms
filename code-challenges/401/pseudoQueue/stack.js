'use strict';

const Node = require('./node.js');

class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    if(this.top === null){
      this.top = new Node(value);
    }
    else{
      let x = new Node(value);
      x.next = this.top;
      this.top = x;
    }
  }
  pop(){
    if(this.top === null){
      return null;
    }
    else{
      let popNode = this.top;
      this.top = this.top.next;
      return popNode.value;
    }
  }
  peek(){
    return this.top.value;
  }
}
module.exports = Stack;