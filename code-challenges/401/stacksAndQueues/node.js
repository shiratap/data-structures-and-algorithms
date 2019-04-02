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

module.exports = Node;
