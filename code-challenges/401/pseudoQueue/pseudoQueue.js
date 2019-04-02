'use strict';

const Node = require('./node.js');
const Stack = require('./stack.js');

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value){
    this.stack1.push(value);
  }
  dequeue(){
    if(this.stack1.top === null){
      return null;
    }
    else{
      let x = this.stack1.top;
      while(x !== null){
        this.stack2.push(new Node(this.stack1.pop()));
        x = x.next;
      }
      let returnVal = this.stack2.pop();
      x = this.stack2.top;
      while(x !== null){
        this.stack1.push(new Node(this.stack2.pop()));
        x = x.next;
      }
      return returnVal.value;
    }
  }
}
module.exports = PseudoQueue;