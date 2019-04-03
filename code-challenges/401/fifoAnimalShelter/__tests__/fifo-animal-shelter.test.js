'use strict';

const AS = require('../fifo-animal-shelter.js');

describe('working cases', () => {
  xit('Should enqueue properly', () => {
    
  });
  xit('Should dequeue properly the dog node', () => {
    const animalShelter = new AS();
    animalShelter.enqueue('cat');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.dequeue('dog');

    expect(animalShelter.rear.value).toEqual('cat');
  });
});

describe('not working cases', () => {
  it('return null if you dequeue with an argument other than dog or cat', () => {
    const animalShelter = new AS();
    expect(animalShelter.dequeue('BadDoggo')).toBeNull();
  });
  it('return null if enqueue value is not dog or cat', () => {
    const animalShelter = new AS();
    animalShelter.enqueue(13);
    expect(animalShelter.rear).toBeNull();
  });
});