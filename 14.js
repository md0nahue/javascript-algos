const assertEqual = require('./test.js');

 // Write a function that takes an array and a 
// number and checks if the number is in the array (return true or false).

function numInArray(num, array){
  for(let i = 0; i < array.length; i++){
    if(array[i] == num){
      return true
    }
  }

  return false;
}


assertEqual(false, numInArray(4, [1,2,3]))
assertEqual(true, numInArray(5, [1,2,3,5,5,5,5,5]))