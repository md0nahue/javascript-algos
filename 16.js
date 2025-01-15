const assertEqual = require('./test.js');

//     Write a function that takes an array and a value, 
// and returns the index of the value in the array (or -1 if it’s not found).


function largestNum(array, num){
  for(let i=0; i < array.length; i++){
    if(array[i] == num){
      return i;
    }
  }

  return -1;
}


assertEqual(1, largestNum([99,88,77], 88))
assertEqual(-1, largestNum([100,101,102], 88))
assertEqual(0, largestNum([1000,2000,3000], 1000))
assertEqual(-1, largestNum([1000,2000,3000], 99999))


