'use strict';


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
  setNext(node){
    this.next = node;
  }
}

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
      this.rear.next = new Node(value);
      this.rear = this.rear.next;
    }
  }
  dequeue(){
    if(this.front === null){
      return this.front;
    }
    else if(this.front.next === null){
      let x = this.front;
      this.front = null;
      return x.value;
    }
    else{
      let x = this.front;
      this.front = this.front.next;
      return x.value;
    }
  }
  peek(){
    return this.front.value;
  }
}



module.exports = {Node, Stack, Queues};
