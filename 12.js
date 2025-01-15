const assertEqual = require('./test.js');

// Create a variable for a number and print whether it is even or odd.

// modulo

// only see in algo challenges
// 4 % 2 == 0 

// modulo divides the second number into the first and returns the remainder

// 5 % 3 would equal 2 becuase that's the remainder of 5 / 3

// assigning a variable is one equals sign
// let num = 5
// but checking equivalency is two equal signs

// if(num == 5){
//   console.log("the number is five!")
// }

function EvenOrOdd(num){
  if(num % 2 == 0){
    // even
    return 'even';
  } else {
    return 'odd';
  }
}

assertEqual('even', EvenOrOdd(2))
assertEqual('odd', EvenOrOdd(11))