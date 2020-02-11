// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    // using for loop to declare the variable of i, starting with the value of 1 and will increment by 1 every time i is less than 100, ending once i is equal to 100
    for (let i = 1; i <= 100; i++) {
    
    // conditional statement that is true if i is divisable by 3 and 5    
    if(i % 3 === 0 && i % 5 === 0) {
        
        console.log("FizzBuzz"); // prints FizzBuzz to the console if true
    } 
    // conditional statement that is true if i is divisable by 3
    else if (i % 3 === 0) {
        console.log("Fizz") // prints Fizz to the console if true
    } 
    // conditional statement that is true if i is divisable by 5
    else if (i % 5 === 0) {
        console.log("Buzz") // prints Buzz to the console
    }
    else { // else statement if all statements above are false
        console.log(i) // prints i, which is a numeric value between 1 to 100, to the console
    }
    }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}