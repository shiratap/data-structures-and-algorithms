'use strict';

module.exports = (node) => {
  if (!node || node && !node.adj) { return null; }
  let arr = [];
  function addToArr(node) {
    arr.push(node);
    node.adj.forEach(neighbor => {
      if (!arr.includes(neighbor[0])) {
        addToArr(neighbor[0]);
      }
    });
  }
  addToArr(node);
  return arr;
};