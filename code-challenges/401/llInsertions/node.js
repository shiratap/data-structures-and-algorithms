'use strict';
class Node {
  constructor(value, next){
    this.value = value;
    this.next = next? next: null;
  }
  setNext(pointer){
    this.next = pointer;
  }
}
module.exports = Node;