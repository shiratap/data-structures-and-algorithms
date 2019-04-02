'use strict';

let classes = require('../stacks-and-queues');

const Node = classes.Node;
const Stack = classes.Stack;
const Queues = classes.Queues;

describe('Stacks and Queues',() => {
  it(('Can successfully push onto a stack'),() => {
    let testStack = new Stack();
    testStack.push(13);
    expect(testStack.top.value).toEqual(13);
  });
  it(('Can successfully push multiple nodes onto a stack'),() => {
    let testStack = new Stack();
    testStack.push(10);
    testStack.push(15);
    testStack.push(18);
    expect(testStack.top.next.next.value).toEqual(10);
  });
  it(('Can successfully pop off the  stack'),() => {
    let testStack = new Stack();
    testStack.push(10);
    testStack.push(15);
    testStack.push(18);

    testStack.pop();
    expect(testStack.top.value).toEqual(15);
  });
  it(('Can successfully empty a stack after multiple pops'),() => {
    let testStack = new Stack();
    testStack.push(10);
    testStack.push(15);
    testStack.push(18);

    testStack.pop();
    testStack.pop();
    testStack.pop();
    expect(testStack.top).toBeNull();
  });
  it(('Can successfully peek the next item on the stack'),() => {
    let testStack = new Stack();
    testStack.push(10);
    testStack.push(15);
    testStack.push(18);

    expect(testStack.peek()).toEqual(18);
  });
  it(('Can successfully instantiate an empty stack'),() => {
    let testStack = new Stack();
    expect(testStack.top).toBeNull();
  });
  it(('Can successfully enqueue onto a queue'), () => {
    let testQueue = new Queues();
    testQueue.enqueue(12);
  });
  it(('Can successfully enqueue multiple items into a queue'), () => {
    let testQueue = new Queues();
    testQueue.enqueue(12);
    testQueue.enqueue(14);
    testQueue.enqueue(13);
    testQueue.enqueue(18);
    expect(testQueue.rear.value).toEqual(18);
  });
  it(('Can successfully dequeue off of a queue the expected value'), () => {
    let testQueue = new Queues();
    testQueue.enqueue(12);
    testQueue.enqueue(14);
    testQueue.enqueue(13);
    testQueue.enqueue(18);
    testQueue.dequeue();
    expect(testQueue.front.value).toEqual(14);
  });
  it(('Can successfully peek into a queue, seeing the expected value'),() => {

  });
  xit(('Can successfully empty a queue after multiple dequeues'),() => {
    let testQueue = new Queues();
    testQueue.enqueue(12);
    testQueue.dequeue();
    testQueue.dequeue();
    expect(testQueue.front).toBeNull();
    expect(testQueue.rear).toBeNull();
  });
  xit(('Can successfully instantiate an empty queue'),() => {

  });
});