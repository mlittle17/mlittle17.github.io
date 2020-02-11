// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // using Array.isArray method to see if the input array is an array
    if(Array.isArray(value)) {
        // returning true if conditional statement resolves to true
        return true
        // returning false if conditional statement resolves to false
    } else return false
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    /** Using conditional statement, OR logical operator, typeof operator,
     * and instanceof operator for Date. Will resolve to true if any of the
     * conditions below are true. */
     
    if(isArray(value) || value instanceof Date || typeof value === "number" || typeof value === "string" || value === null || typeof value === "function" || typeof value === "boolean") {
        // will return false if the conditional statement resolves to true
        return false
        // will return true if otherwise
    } else return true
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    /** conditional statement that uses both the isArray function OR the isObject
     * function to evaluate the input value. If either of these conditions
     * resolves to true, will run run code block */
     
    if(isArray(value) || isObject(value)) {
        // will return true if conditional resolves to true
        return true
        // will return false otherwise
    }   else return false;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // conditional statement that uses isObject function to see if value is an object
    if(isObject(value)) {
        // will return string of "object" if conditional resolves to true
        return "object"
    // conditional statement that uses isArray function to see if value is an array
    } else if (isArray(value)) {
        // will return string of "array" if conditional resolves to true
        return "array"
    // conditional statement that uses instanceof method to see if value is a date
    } else if (value instanceof Date) {
        // will return string of "date" if conditional resolves to true
        return "date"
    // conditional statement that uses strict comparison to see if value is null
    } else if (value === null) {
        // will return string of "null" if conditional resolves to true
        return "null"
    // using typeof method to return string of any other type
    } else return (typeof value)
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
