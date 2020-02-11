// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
   // declaring and assigning the variable range to an empty array
    let range = [];
    
    // conditional statement that runs if start is less than end parameter
    if(start < end) {
        
        /** for loop that initialzies i as the starting number and will iterate
         * by 1 each time i is less than or equal to end */
        for(var i = start; i <= end; i++) {
            // using push method to push i to range array each time loop runs
            range.push(i);
    }
    // conditional else that runs if start is greater than end
    } else {
        /** for loop that initialzies i as the start number and will iterate
         * by 1 each time i is greater than or equal to end */
        for(var i = start; i >= end; i--) {
            // using push method to push i to range array each time loop runs
            range.push(i)
        }
    // returning range array
    } return range
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}