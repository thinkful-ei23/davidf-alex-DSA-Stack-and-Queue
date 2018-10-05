'use strict';

const Queue = require('./Queue');
const starTrekQ = new Queue();

function main() {
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');
  display(removeItem(starTrekQ, 'Spock'));
}

function peek(queue) {
  return queue.first.value;
}

function display(queue) {
  let currentNode = queue.first;
  while(currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.prev;
  }
}

function removeItem(list, item) {
  const updatedQueue = new Queue();
  let currentNode = list.first;

  while(currentNode.prev !== null) {
    if (currentNode.value !== item) {
      updatedQueue.enqueue(currentNode.value);
    }
    currentNode = currentNode.prev;
    list.dequeue();
  }
  if (starTrekQ.last === currentNode) {
    updatedQueue.enqueue(currentNode.value);
    list.dequeue();
  }
  return(updatedQueue);
}

main();