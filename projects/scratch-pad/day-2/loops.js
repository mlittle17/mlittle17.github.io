// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // using a for loop to loop over the array and print the element at each index of the array, starting at index 0 and incrementing by 1
  for (let i = 0; i < array.length; i++) {
    
    console.log(array[i]); // printing the element that is located at the numeric value of the variable index
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // using a foor loop to loop over the array and print the element at each index of the array, starting at the end of the array and decrementing by 1 until i is equal to 0
  for(let i = array.length - 1; i >= 0; i--) {
    
    console.log(array[i]); // printing the element that is located at the numeric value of the variable index
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  let keys = []; // declaring and initiaizing an empty array named keys
  
  // using a for-in loop to loop over the input object
  for(let key in object) {
    
    keys.push(key); // using push method to add each key within the input object to the keys array
  } return keys; // returning keys array, which now contains all keys within the input object
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // using a for-in loop to loop over all the keys within an input object
  for(let key in object) {
    
    console.log(key); // printing all keys within the input object to the console
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let values = []; // declaring variable of values, initializing it with the value of an empty array
  // using for-in loop to loop over the keys of an input object
  for(let key in object) {
    
    values.push((object[key])); // using push method to add each value within the input object to the values array
  } return values; // returning values array, which now contains all values within the input object
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // using a for-in loop to loop over all keys within an input object
  for(let key in object) {
    
    console.log(object[key]); // using bracket notation to print all values within an input object to the console
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
    
    let counter = 0 // declaring a variable named counter, initialzing it with value of 0
    // using for-in loop to loop over input object
    for(let key in object) {
      counter += 1 // using addition assignment operator to add 1 to counter for each key/value pair within input object
      
    } return counter // returning counter, which will be the numeric value of the total number of key value pairs within an input object
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  let values = []; // declaring the variable values, initialized with the value of an empty array
  // using a for-in loop to loop over all keys within an input object
  for(let key in object) {
    values.push(object[key]); // using push method and bracket notation to push all values within a given object to the values array
  }
  
  // using reverse for loop to loop over values array, ending once i is equal to 0
  for(let i = values.length - 1; i >= 0; i--) {
    
    console.log(values[i]); // printing all values to the console, using the numeric value of i as the index
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
