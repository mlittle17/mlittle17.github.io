
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  // assigning the variable hash to the value of an empty string
  let hash = '';
  // using a for loop that assigns i to the number 1
  for(let i = 1; i <= number; i++) {
    
    console.log(hash += "#");
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  // for loop that uses start and end parameters and plus 1 iterator
  for (let i = start; i <= end; i++) {
    // condtional that checks if i is divisable by 3 and 5
    if(i % 3 === 0 && i % 5 === 0) {
      // will print fizzbuzz to console if true
      console.log("fizzbuzz")
      // else if that checks if i is divisable by 3
    } else if (i % 3 === 0) {
      // will print fizz to console if true
      console.log("fizz")
      // else if that checks if i is divisable by 5
    } else if (i % 5 === 0) {
      // will print buzz to the console if true
      console.log("buzz")
      // final else statement that prints i to console
    } else console.log(i);
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {

// declaring cb variable that is equal to empty string
let cb = "";

/** 
 * for loop that starts at 0 then runs until i is no longer less than size,
 * and then will run another for loop and add a newline character to the 
 * string if that condition resolves to true
 */
 
for (let i = 0; i < number; i++) {
  // using another for loop that creates another variable ii
  for (let ii = 0;ii < number; ii++) {
    // conditional that checks if i + ii is even
    if ((i + ii) % 2 == 0) {
      // if true, will add a blank space to cb string
      cb += " ";
      // if false, will add string of hash mark to cb string
    } else {
      cb += "#";
    }
  }
  cb += "\n";
}

console.log(cb);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
