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


  // Check for palindromes using stack
  // true, true, true
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));


  // Matching parentheses in an expression
  let exp = '2 * (3 + 4)';
  matchParentheses(exp);
  
  let exp2 = '2 * (3 + 4';
  matchParentheses(exp2);
}

function peek(list) {
  return list.top.data;
}

function display(list) {
  let currNode = list.top;
  while (currNode !== null) {
    console.log(currNode.data);
    currNode = currNode.next;
  }
}

// Check for palindromes using stack

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

function is_palindrome2(word) {
  word = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const forwardStack = new Stack();
  const backwardStack = new Stack();
  for (let i = 0; i < word.length; i++) {
    forwardStack.push(word[i]); // 0 1 2 3
    backwardStack.push(word[word.length - (i + 1)]);
  }
  for (let i = 0; i < word.length; i++) {
    if (forwardStack.pop() !== backwardStack.pop()) {
      return false;
    }
  }
  return true;
}


// Matching parentheses in an expression
function matchParentheses(exp) {
  const forwardStack = new Stack();
  const positionStack = new Stack();

  for (let i=0; i < exp.length; i++) {
    if (exp[i] === '(') {
      forwardStack.push(exp[i]);
      positionStack.push(i);
    } else if (exp[i] === ')') {
      if (peek(forwardStack) === '(') {
        forwardStack.pop();
        positionStack.pop();
      }
    }
  }

  if (forwardStack.top === null) {
    console.log('Is balanced');
    return true;
  } else {
    console.log(`Is not balanced, index: ${peek(positionStack)}`);
    return peek(positionStack);
  }
}



main();