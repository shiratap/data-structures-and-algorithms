# Find the Maximum Value in a Binary Tree

## Travis
[![Build Status](https://travis-ci.com/shiratap/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/shiratap/data-structures-and-algorithms)

## Challenge
Add a method that prints the values of a tree in a breadth traversal

## Approach & Efficiency
* create a queue
* enqueue the queue with the root of the tree
* while loop until the queue is empty
  1. dequeue the stack and check if popped node value is greater than current max
  2. dequeued value has left child, enqueue left child
  3. dequeued value has right child, enqueue right child

## Solution
![BreadthFirst](../assets/FindMaximumValue.jpg)