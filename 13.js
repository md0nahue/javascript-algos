const assertEqual = require('./test.js');

// Write a function that reverses the characters in a string.

function reverseString(string){
  let result = []
  for(let i = string.length - 1; i >= 0; i--){
    result.push(string[i])
  }

  return result.join('')
}

assertEqual("yeknom", reverseString("monkey"))
assertEqual("god", reverseString("dog"))
