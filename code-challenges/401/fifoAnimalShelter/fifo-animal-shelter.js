'use strict';

const Node = require('./node.js');

class AnimalShelter {
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(animal){
    if(animal !== 'cat' || animal !== 'dog'){
      return null;
    }
    else if(this.front === null && this.rear === null){
      let newAnimal = new Node(animal);
      this.front = newAnimal;
      this.rear = newAnimal;
    }
    else{
      this.rear.next = new Node(animal);
      this.rear = this.rear.next;
    }
  }
  dequeue(pref){
    if(this.front && this.rear || pref !== 'dog' || pref !== 'cat'){
      return null;
    }
    else{
      let x = this.front;
      if(x.value === pref){
        this.front = this.front.next;
        return x.value;
      }
      else{
        while(x.next.value !== pref){
          x = x.next;
        }
        if(x.next === this.rear){
          this.rear = x;
          return this.rear.next.value;
        }
        else{
          let y = x.next;
          x.next = x.next.next;
          y.next = null;
          return y.value;
        }
      }
    }
  }
}

module.exports = AnimalShelter;