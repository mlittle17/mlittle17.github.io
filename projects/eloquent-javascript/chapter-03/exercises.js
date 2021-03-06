////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) {
  // conditional that checks if num1 is less than num2
  if(num1 < num2) {
    // returns num1 if true
    return num1
    // returns num2 if false
  } else return num2

}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
  // conditional that checks if number is divisable by 2 with no remainder
  if(number % 2 === 0) {
      // returns true if true
      return true
      // returns false if true
    } else return false

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  // declaring variable counter with number 0 as value
  let counter = 0;
  // for loop that runs if input string length is less than i
  for (let i = 0; i < string.length; i++) {
    // condtional that checks if string at index of i is equal to character
    if(string[i] === char) {
      // will add 1 to counter if true
      counter += 1
    }
    // returning counter
  } return counter

}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
// using countChars function with string and "B" as arguements  
return countChars(string, "B");

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
