'use strict';

const modules = require('../linked-list.js');
const LL = modules.LL;
const node = modules.node;

let log = jest.spyOn(global.console, 'log').mockImplementation( () => {} );

describe('Normal functionality', () => {
  it('Should create a new linked list', () => {
    const testLinkedList = new LL();
    expect(testLinkedList).toBeTruthy();
  });
  it('Can properly insert into the linked list', () =>{
    const testLinkedList = new LL();
    const testNode = new node(13);
    testLinkedList.insert(testNode);
    expect(testLinkedList.head).toBe(testNode);
  });
  it('The head property will properly point to the first node in the linked list', () =>{
    const testLinkedList = new LL();
    const testNode = new node(13);
    testLinkedList.insert(testNode);
    expect(testLinkedList.head).toBe(testNode);
  });
  it('Should Properly insert into a linked list', () =>{
    const testLinkedList = new LL();
    const testNode = new node(13);
    testLinkedList.insert(testNode);
    expect(testLinkedList.head).toBe(testNode);
  });
  it('Can properly insert multiple nodes into the linked list', () =>{
    const testLinkedList = new LL();
    const testNode = new node(13);
    const testNode2 = new node(22);
    testLinkedList.insert(testNode);
    testLinkedList.insert(testNode2);
    expect(testLinkedList.head.next).toBe(testNode);
  });
  it('Will return true when finding a value within the linked list that exists', () =>{
    const testLinkedList = new LL();
    const testNode = new node(4);
    const testNode2 = new node(5);
    const testNode3 = new node(6);

    testLinkedList.insert(testNode);
    testLinkedList.insert(testNode2);
    testLinkedList.insert(testNode3);
    expect(testLinkedList.includes(5)).toBe(true);

  });
  it('Will return false when searching for a value in the linked list that does not exist', () =>{
    const testLinkedList = new LL();
    const testNode = new node(4);
    const testNode2 = new node(6);
    const testNode3 = new node(7);

    testLinkedList.insert(testNode);
    testLinkedList.insert(testNode2);
    testLinkedList.insert(testNode3);
    expect(testLinkedList.includes(5)).toBe(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list', () =>{
    const testLinkedList = new LL();
    const testNode = new node(5);
    const testNode2 = new node(6);
    const testNode3 = new node(7);

    testLinkedList.insert(testNode);
    testLinkedList.insert(testNode2);
    testLinkedList.insert(testNode3);
    testLinkedList.print();
    expect(log).toHaveBeenCalledWith('7, 6, 5');
  });
});
