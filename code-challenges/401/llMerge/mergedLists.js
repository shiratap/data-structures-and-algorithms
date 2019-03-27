'use strict';

module.exports = function mergeLists(LL1, LL2){
  let cur1 = LL1.head;
  let cur2 = LL2.head;

  //Alternating nodes at each index
  while(cur1.next && cur2.next){
    let temp = cur2.next;
    cur2.next = cur1.next;
    cur1.next = cur2;
    cur1 = cur2.next;
    cur2 = temp;
  }

  //Logic for getting last values in,
  if(cur1.next){
    cur1.next = cur2;
  }
  else{
    cur2.next = cur1.next;
    cur1.next = cur2;
  }
  return LL1.head;
};

