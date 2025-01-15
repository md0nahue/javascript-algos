const assertEqual = require('./test.js');

//     Write a function that adds two numbers and returns the result.

function addNumbers(num1, num2){
  return num1 + num2;
}

assertEqual(5, addNumbers(2,3))
assertEqual(10, addNumbers(5,5))