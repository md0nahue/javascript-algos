const assertEqual = require('./test.js');

function getFirstLetter(word){
  return word[0]
}

let result;

result = getFirstLetter('cat')
assertEqual('c', result)

result = getFirstLetter('dog')
assertEqual('d', result)
