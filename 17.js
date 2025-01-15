const assertEqual = require('./test.js');

//     Write a function that takes a number and returns "Fizz" 
// if it’s divisible by 3, "Buzz" if it’s divisible by 5, 
// and "FizzBuzz" if it’s divisible by both.




function fizzBuzz(num){

  if(num % 3 == 0 && num % 5 == 0){
    return "fizzbuzz"
  } else if(num % 5 == 0){
    return 'buzz'
  } else if(num % 3 == 0){
    return 'fizz'
  }

}

assertEqual('fizzbuzz', fizzBuzz(15));
assertEqual('fizz', fizzBuzz(3));
assertEqual('buzz', fizzBuzz(5));