'use strict';

let HT = require('../hashtable/hashtable.js');

function tree_intersection(T1, T2) {

  let ht = new HT();
  _depthT1(T1.root);
  let arr = [];
  _depthT2(T2.root);
  return arr;

  function _depthT1(node) {
    if (!ht.contains(node.value, node.value)) {
      ht.add(node.value, node.value);
    }
    if (node.left) {
      _depthT1(node.left);
    }
    if (node.right) {
      _depthT1(node.right);
    }
  }
  function _depthT2(node) {
    if (ht.contains(node.value, node.value) && !arr.includes(node.value)) {
      arr.push(node.value);
    }
    if (node.left) {
      _depthT2(node.left);
    }
    if (node.right) {
      _depthT2(node.right);
    }
  }
}

module.exports = tree_intersection;
