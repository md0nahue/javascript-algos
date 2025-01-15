const assertEqual = require('./test.js');

//    Write a function that takes a number grade (0–100) 
// and returns a letter grade (A, B, C, D, or F).

// switch

function numberToGrade(num){
  if(num < 50){
    return 'F'
  } else if(num >= 60 && num < 70){
    return 'D'
  } else if(num >= 70 && num < 80){
    return 'C'
  } else if (num >= 80 && num < 90){
    return 'B'
  } else if (num >= 80 && num < 90) {
    return 'A';
  }
}

assertEqual('B', numberToGrade(85))
assertEqual('C', numberToGrade(75))