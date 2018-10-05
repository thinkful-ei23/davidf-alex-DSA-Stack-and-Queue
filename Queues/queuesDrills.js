'use strict';

const Queue = require('./Queue');
const starTrekQ = new Queue();

function main() {
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock');
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  // console.log(starTrekQ);
  // console.log('break;');
  // console.log(peek(starTrekQ));
  // display(starTrekQ);



  const starTrekQ2 = new Queue();
  let currentNode = starTrekQ.first;
  
  while(currentNode.prev !== null) {
    if (currentNode.value !== 'Spock') {
      starTrekQ2.enqueue(currentNode.value);
    }
    currentNode = currentNode.prev;
    starTrekQ.dequeue();
  }
  if (starTrekQ.last === currentNode) {
    starTrekQ2.enqueue(currentNode.value);
    starTrekQ.dequeue();
  }
  display(starTrekQ2);
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


main();