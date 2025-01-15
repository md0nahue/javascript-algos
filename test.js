function assertEqual(expected, actual){
  if(expected == actual){
    console.log("OK")
  }
  else {
    console.log("TEST FAIL:")
    console.log("expected:")
    console.log(expected)
    console.log("actual:")
    console.log(actual)
  }
}

module.exports = assertEqual;
