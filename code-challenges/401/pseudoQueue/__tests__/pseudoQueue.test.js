'use strict';

const Node = require('../node.js');
const PseudoQueue = require('../pseudoQueue.js');

describe('Work case', () => {
  it('Should enqueue', () => {
    const PQ = new PseudoQueue();

    PQ.enqueue(13);
    PQ.enqueue(15);
    PQ.enqueue(18);

    expect(PQ.stack1.top.value  ).toEqual(18);
  });
  it('Should dequeue', () => {
    const PQ = new PseudoQueue();

    PQ.enqueue(13);
    PQ.enqueue(15);
    PQ.enqueue(18);

    expect(PQ.dequeue()).toEqual(13);
  });
});

describe('Does not work cases', () => {
  it('Tries to dequeue without enqueuing values', () => {
    const PQ = new PseudoQueue();
    expect(PQ.dequeue()).toBeNull();
  });
  xit('', () => {
    expect();
  });
});
