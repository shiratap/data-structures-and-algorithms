'use strict';

const RW = require('../repeatedWord.js');

describe('Repeated word tests', () => {
  it('Should return false if given a non string input', () => {
    let TI = { text: 'This text sucks' };
    expect(RW(TI)).toEqual(false);
  });
  it('Should expect the repeated word in the input string', () => {
    let TI = 'The howdier dog takes a howdier walk';
    expect(RW(TI)).toEqual('howdier');
  });
  it('Should expect false if there are no repeated words in the string', () => {
    let TI = 'a b c d';
    expect(RW(TI)).toEqual(false);
  });
});