'use strict';

let Node = require('./node.js');

class LinkedList{
  
  //Linked list

  constructor(){
    this.head = null;
  }
  insert(node){
    node.setNext(this.head);
    this.head = node;
  }
  includes(value){
    let node = this.head;
    while(node.next){
      if(node.value === value){return true;}
      else{ node = node.next; }
    }
    return false;
  }
  print(){
    let node = this.head;
    let printStatement = '';
    printStatement += node.value;
    while(node.next){
      node = node.next;
      printStatement += ', ' + node.value;
    }
    console.log(printStatement);
  }

  //Linked List insertions
  
  append(value){
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    current.next = new Node(value);
  }

  insertBefore(value, newValue){
    let current = this.head;
    while(current.next.value !== value){
      current = current.next;
    }
    let newNode = new Node(newValue, current.next);
    current.next = newNode;
  }

  insertAfter(value, newValue){
    let current = this.head;
    while(current.value !== value){
      current = current.next;
    }
    let newNode = new Node(newValue, current.next);
    current.next = newNode;
  }
}
module.exports = LinkedList; 