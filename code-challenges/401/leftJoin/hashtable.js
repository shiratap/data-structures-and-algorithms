'use strict';

class HashTable {
  constructor() {
    this.table = new Array(1024);
  }
  add(val, key) {
    let hash = this.hash(key);
    if (this.table[hash] === undefined) {
      this.table[hash] = { key: key, value: [val] };

    }
    else {
      this.table[hash].value.push(val);
    }
  }

  get(key) {   //takes in the key and returns the value from the table.
    let hash = this.hash(key);
    return this.table[hash] && this.table[hash].value;
  }

  contains(key) {  //takes in the key and returns a boolean, indicating if the key exists in the table already.
    let hash = this.hash(key);
    if (this.table[hash]) { return true; }
    else { return false; }
  }

  hash(key) {
    let hashedKey = 0;
    key.toLowerCase();
    let arr = key.split('');
    arr.forEach((item, idx) => {
      hashedKey += item.charCodeAt(0) * 799 / 1024;
    });
    hashedKey / 1024;
    return Math.floor(hashedKey);
  }
}


module.exports = HashTable;