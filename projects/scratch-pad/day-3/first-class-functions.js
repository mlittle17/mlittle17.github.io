// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // returning function that takes a given value and compares it to the base
    return function(value) {
        // conditional statement that evaluates if value is greater than base
        if(value > base) {
            // returns true if conditional evaluates to true
            return true
        } else {
            // returns false if conditional evaluates to false
            return false
        }
    }
    
        
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // returning function that takes a given value and compares it to base
    return function(value) {
        // conditional statement that evaluates if value is less than base
        if(value < base) {
            // returns true if conditional evaluates to true
            return true
        } else {
            // returns false if conditional evaluates to false
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //returning function that takes in an input string and startsWith parameter
    return function(string) {
        /** conditional statement that runs code block if startsWith character 
         * is strictly equal to the first character of an input string. Using
         * toLowerCase method to "equalize" both characters */
        if(startsWith.toLowerCase() === string[0].toLowerCase()) {
            // returns true if statement resolves to true
            return true
            // returns false if statement resolves to false
        } else return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //returning function that takes in an input string and endsWith parameter
    return function(string) {
         /** conditional statement that runs code block if endsWith character 
         * is strictly equal to the last character of an input string. Using
         * toLowerCase method to "equalize" both characters */
        if(endsWith.toLowerCase() === string[string.length -1].toLowerCase()) {
            // returns true if statement resolves to true
            return true
            // returns falase if statement resolves to false
        } else return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 // I: an array of strings(strings), a function designed to modify strings (modify)
 // O: an array of the strings, modified
 // C: loop over the strings
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // declaring modStrings variable, assigning to empty array
    let modStrings = [];
    /** for loop that initializes with the number 0 and will iterate by 1 each
     * time i is less than the length of the array */
    for(let i = 0; i < strings.length; i++) {
        // using push method to push each modified string into the modStrings array
        modStrings.push(modify(strings[i]))
    
      // returning modStrings array  
    } return modStrings;

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // implement a for loop to gain access to each element in the array
    for(let i = 0; i < strings.length; i++) {
                // test each element in the array with the "test" param
        
        // if the test fails, return false
       if(test(strings[i]) === false){
           return false
       } 
        
    }
        
        // if the test doesn't fail, check the next one
    
    // if none of the strings failt the test, return true
    return true;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}