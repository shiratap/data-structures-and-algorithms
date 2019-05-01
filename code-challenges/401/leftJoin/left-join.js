'use strict';

module.exports = function leftJoin(h1, h2) {

  if (typeof h1 === typeof '') { return null; }
  h2.table.forEach(item => {
    if (item) {
      if (h1.contains(item.key)) {
        item.value.forEach(entry => { h1.get(item.key).push(entry); });
      }
    }
  });
  let returnArray = [];
  h1.table.forEach(item => {
    if (item) {
      returnArray.push(item);
    }
  });
  return returnArray;
};