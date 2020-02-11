// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    let arr = input.split(""); // creating array named arr that will be an array of all characters within the input string, seperated by a comma
    let revArr = []; // creating an empty array that will hold the characters once they are pushed through the reverse for-loop
    // for loop that initializes i at the last index of any given string, running as long as i is greater than or equal to 0, decreasing by one in each iteration
    for(let i = arr.length - 1; i >= 0; i--) { 
        
        revArr.push(arr[i]); // pushes each element into revArr as the for-loop runs
    } 
    
    return revArr.join(""); // using the join method to concatenate all elements within the revArray with no spaces in-between
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}