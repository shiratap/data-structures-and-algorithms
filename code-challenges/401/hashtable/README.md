# Hashtables

[![Build Status](https://travis-ci.com/shiratap/data-structures-and-algorithms.svg?branch=master)](https://travis-ci.com/shiratap/data-structures-and-algorithms)

## Challenge
Make a basic hash table class

## API
* add()
* get()
* contains()
* hash();

#### add: 
takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
#### get: 
takes in the key and returns the value from the table.
#### contains: 
takes in the key and returns a boolean, indicating if the key exists in the table already.
#### hash: 
takes in an arbitrary key and returns an index in the collection.