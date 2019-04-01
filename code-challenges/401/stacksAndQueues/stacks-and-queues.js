'use strict';

const Node = require('./node.js');

class Stack {
  constructor(){
    this.top = null;
  }
  push(value){
    let newTop = new Node(value);
    newTop.setNext(this.top);
    this.top = newTop;
  }
  pop(){
    let popNode = this.top;
    this.top = this.top.next;
    popNode.setNext(null);
  }
  peek(){
    return this.top.value;
  }
}

class Queues {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    if(this.front === null && this.rear === null){
      let x = new Node(value);
      this.front = x;
      this.rear = x;
    }
    else{
      let current = this.rear;
      current.next = new Node(value);
      this.rear = current.next;
    }
  }
  dequeue(){
    if(this.front === null ||this.front.next === null){
      this.front === null;
      this.rear === null;
    }
    else{
      this.front = this.front.next;
    }
  }
  peek(){
    return this.front.value;
  }
}

module.exports = {Node, Stack, Queues};
