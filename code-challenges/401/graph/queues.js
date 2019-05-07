'use strict';

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(node) {
    if (this.front === null && this.rear === null) {
      this.front = node;
      this.rear = node;
    }
    else {
      let current = this.rear;
      current.next = node;
      this.rear = current.next;
    }
  }
  dequeue() {
    if (this.front === null) {
      this.front = null;
      this.rear = null;
      return null;
    }
    else if (this.front.next === null) {
      let val = this.front;
      this.front = null;
      this.rear = null;
      return val;
    }
    else {
      let f = this.front;
      this.front = this.front.next;
      return f;
    }
  }
  peek() {
    return this.front.value;
  }
}

module.exports = Queue;
