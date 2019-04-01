'use strict';

let mergedLists = require('../mergedLists.js');
let LLandNode = require('../../llInsertions/llInsertions.js');
let LL = LLandNode.LL;
let node = LLandNode.node;

describe('', () => {
  it('Should work with regular input', () => {
    const LL1 = new LL();
    const LL2 = new LL();
    const testNode = new node(1);
    const testNode1 = new node(2);

    LL1.insert(testNode);
    LL1.append(3);
    LL1.append(5);
    LL1.append(7);

    LL2.insert(testNode1);
    LL2.append(4);
    LL2.append(6);
    LL2.append(8);

    LL1.print();
    LL2.print();
    
    const result = mergedLists(LL1,LL2);

    expect(mergedLists(LL1,LL2)).toBe(result);
    expect(mergedLists(LL1,LL2).next.value).toEqual(2);
    LL1.print();
    LL2.print();
  });
  xit('Should fail with wrong input types', () => {
    const LL1 = {};
    const LL2 = 'This sucks';

    const result = mergedLists(LL1,LL2);
    expect('someShit');

  });
  xit('Should return null if both LL have no nodes', () => {
    const LL1 = new LL();
    const LL2 = new LL();
    expect(mergedLists(LL1,LL2)).toBe(null);
  });
});