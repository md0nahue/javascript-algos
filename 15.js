const assertEqual = require('./test.js');

// Write a function that takes an array of numbers and returns the largest number.

function largestNum(array){
  let largest = array[0];
  for(let i=1;i<array.length;i++){
    if(array[i] > largest){
      largest = array[i]
    }
  }

  return largest;
}


assertEqual(5, largestNum([1,2,3,3,3,3,3,5]))
assertEqual(11, largestNum([1,2,3,11,3,3,3,5]))