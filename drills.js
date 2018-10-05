'use strict';

const Stack = require('./index');
const starTrek = new Stack();

function main() {
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(JSON.stringify(starTrek, null, 2));
}

function peek(list) {
  console.log(list.top.data);
}

function display() {}

main();
peek(starTrek);
