'use strict';

const Stack = require('./Stack');
const starTrek = new Stack();

function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  display(starTrek);
  starTrek.pop('Scotty');
  starTrek.pop('McCoy');
  starTrek.push('Scotty');
  console.log('SECOND DISPLAY!!!!');
  display(starTrek);
}

function peek(list) {
  console.log(list.top.data);
}

function display(list) {
  let currNode = list.top;
  while(currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

main();