"use strict";

const Stack = require("./Stack");
const starTrek = new Stack();

function main() {
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // display(starTrek);
  // starTrek.pop('Scotty');
  // starTrek.pop('McCoy');
  // starTrek.push('Scotty');
  // console.log('SECOND DISPLAY!!!!');
  // display(starTrek);

  // true, true, true
  console.log(is_palindrome("dad"));
  console.log(is_palindrome("A man, a plan, a canal: Panama"));
  console.log(is_palindrome("1001"));
  console.log(is_palindrome("Tauhida"));
}

function peek(list) {
  console.log(list.top.data);
}

function display(list) {
  let currNode = list.top;
  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

function is_palindrome(s) {
  const myStack = new Stack();
  let stringOne = s.toLowerCase().replace(/[\W_]/g, "");
  let stringTwo = '';
  let i, t;
  i = t = stringOne.length;

  while (i > 0) {
    myStack.push(stringOne.substr(t - i, 1));
    i--;
  }

  while (t > 0) {
    stringTwo += myStack.pop();
    t--;
  }

  if (stringOne === stringTwo) {
    return true;
  } else {
    return false;
  }

}

main();