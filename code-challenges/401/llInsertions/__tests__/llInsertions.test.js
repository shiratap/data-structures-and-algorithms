'use strict';

const modules = require('../llInsertions.js');
const LL = modules.LL;
const node = modules.node;


describe('Base test cases for new insertion methods for Linked Lists', () => {
  it('Can successfully add a node to the end of the linked list', () => {
    const testLinkedList = new LL();
    const testNode = new node(13);
    const testNode1 = new node(16);

    testLinkedList.insert(testNode);
    testLinkedList.insert(testNode1);
    testLinkedList.append(14);

    expect(testLinkedList.head.next.next).toEqual({value:14, next:null});
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const testLinkedList = new LL();
    const testNode = new node(13);
    const testNode1 = new node(14);
    const testNode2 = new node(5);

    testLinkedList.insert(testNode);
    testLinkedList.insert(testNode1);
    testLinkedList.insert(testNode2);

    testLinkedList.append(14);
    testLinkedList.append(18);

    expect(testLinkedList.head.next.next.next.next).toEqual({value:18,next:null});
  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const testLinkedList = new LL();
    const testNode = new node(13);

    testLinkedList.insert(testNode);
    testLinkedList.append(5);
    testLinkedList.append(10);
    testLinkedList.append(9);

    testLinkedList.insertBefore(10,4);

    expect(testLinkedList.head.next.next.value).toEqual(4);
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    const testLinkedList = new LL();
    const testNode = new node(13);
    const testNode1 = new node(13);

    testLinkedList.insert(testNode);
    testLinkedList.insert(testNode1);
    
    expect(testLinkedList.head).toBe(testNode1);
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    const testLinkedList = new LL();
    const testNode = new node(13);

    testLinkedList.insert(testNode);
    testLinkedList.append(5);
    testLinkedList.append(10);
    testLinkedList.append(9);
    testLinkedList.insertAfter(10, 2);
    
    expect(testLinkedList.head.next.next.next.value).toEqual(2);
  });
  
  it('Can successfully insert a node after the last node of the linked list', () => {
    const testLinkedList = new LL();
    const testNode = new node(13);

    testLinkedList.insert(testNode);
    testLinkedList.append(5);
    testLinkedList.append(10);
    testLinkedList.append(9);
    testLinkedList.insertAfter(9,14);
    
    expect(testLinkedList.head.next.next.next.next.value).toBe(14);
  });
});
