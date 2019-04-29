'use strict';

let HS = require('../hashtable/hashtable.js');

function repeatedWord(str) {
  if (typeof str !== typeof '') { return false; }
  let hs = new HS();
  let brokenStr = str.split(' ');
  let returnS = false;
  brokenStr.forEach((item, idx) => {
    if (!hs.add(item, item)) {
      returnS = item;
    }
  });
  return returnS;
}

module.exports = repeatedWord;