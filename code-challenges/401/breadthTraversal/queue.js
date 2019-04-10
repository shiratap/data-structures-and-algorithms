
'use strict';
class Queues {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    if(this.front === null && this.rear === null){
      this.front = value;
      this.rear = value;
    }
    else{
      let current = this.rear;
      current.next = value;
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
module.exports = Queues;