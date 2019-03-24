'use strict';
class LinkedList{
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
}
module.exports = LinkedList; 