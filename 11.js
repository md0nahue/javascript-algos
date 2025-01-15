const assertEqual = require('./test.js');

// Write a function that multiplies three numbers and returns the result.

// // snake case used in ruby
// function multiply_numbers_dsfdsf_fdsfds_

// // camel case
// function multiplyNumbersThisWay

// // Pascal case
// function MultiplyNumbersThisWay

function multiplyNumbers(num1, num2, num3){
  return num1 * num2 * num3;
}


assertEqual(8, multiplyNumbers(2,2,2))
assertEqual(27, multiplyNumbers(3,3,3))

let obj = {name: "Mark", hobby: "software", age: 99}