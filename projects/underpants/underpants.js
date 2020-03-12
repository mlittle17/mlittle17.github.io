// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    // returns input value, unchanged
    return value
}
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    // conditional that checks if value is an array
    if(Array.isArray(value) === true) {
        // returns string of "array" if true
        return "array"
    // else if that checks if value is null    
    } else if(value === null) {
        // returns string of "null" if true
        return "null";
    // returns typeof value (in a string) if above conditions are false
    } return typeof value;
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    // creating empty array
    let arr = [];
    // conditional that checks if array is array AND number is number
    if(_.typeOf(array) === "array" && _.typeOf(number) === "number") {
        // if true, checks to see if number is negative
        if(number < 0) {
            // returns empty array if true
            return arr;
        // else if that checks if number is greater than the array length
        } else if(number > array.length) {
            // returns entire array if true
            return array
        // otherwise, loops over array and pushes the first number of elements to arr    
        } else {for(let i = 0; i < number; i++) {
            arr.push(array[i]);
        // returns arr    
        } return arr;}
    
    // if not an array, just return the empty array    
    } else if (_.typeOf(array) !== "array") {
        return arr
    // if number is not a number, return the first element of the input array
    } else return array[0]
}
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array,number) {
    // creating an empty arrau
    let arr = [];
    // conditional that checks if array is an array && number is a number
    if(_.typeOf(array) === "array" && _.typeOf(number) === "number") {
        // if true, check to see if number is negative
        if(number < 0) {
            // returns empty array if true
            return arr;
        // if not negative, second conditional that checks if number is greater than the length of array    
        } else if(number > array.length) {
            // returns entire array if true
            return array
        // else, will loop over array and return an array of the last number of elements inside that array
        } else {for(let i = array.length - 1; i >= number - 1; i--) {
            arr.unshift(array[i]);
        // returning final array
        } return arr;}
    // if array is not an array, return empty array
    } else if (_.typeOf(array) !== "array") {
        return arr
    // if number is not number, return the last element of the array
    } else return array[array.length - 1]; 
    
    
    
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    // for loop that loops over entire array
    for(let i = 0; i < array.length; i++) {
        // if an element within the array is equal to the input value, return that index
        if(array[i] === value) {
            return i
        }
    }
    // returns -1 otherwise
    return -1
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array,value) {
    // returns true if indexOf() resolves to a number greater than -1, false otherwise
    return (_.indexOf(array, value) !== -1 ? true : false)
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, test) {
    // conditional that checks if collection is an array
    if(_.typeOf(collection) === "array") {
        // loops over array if true
        for(let i = 0; i < collection.length; i++) {
            // calls test function over each element, index, and the collection
            test(collection[i], i, collection);
        }
    // else, loops over object    
    } else for(var key in collection) {
        // calls test function for each value, key, and collection
        test(collection[key], key, collection);
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    // creating empty array
    let newArr = [];
    // looping over array
    for(let i = 0; i < array.length; i++) {
    // conditional that checks if indexOf() resolves to -1, meaning that the element is not inside newArr
    if(_.indexOf(newArr, array[i]) === -1) {
        // pushing that element into the array if true
        newArr.push(array[i]);
    }
    // returning newArr once complete
    } return newArr;
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test) {
// creating empty array
let newArr = [];
// creating function expression that takes in the element, index, and array
let myFunction = function(element, index, array) {
    // if the test function resolves to true for an element, it's index, and the array, push that element into newArr
    if(test(element, index, array)) {
        newArr.push(element);
    }
}    
// calling each with the input array and myFunction as function parameter
_.each(array, myFunction);
     
     // returning newArr
     return newArr;
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test) {
    // creating empoty array
    let newArr = [];
    // creating function expression that takes in the element, index, and array
    let myFunction = function(element, index, array) {
        // if the test function resolves to false for an element, it's index, and the array, push that element into newArr
        if(!test(element, index, array)) {
            newArr.push(element);
        }
   
    }
    // calling filter with the input array and myFunction as function parameter
    _.filter(array, myFunction);
    // returning newArr
    return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, test) {
    // creating an empty array named result
    let result = [];
    // truthy is the result of running the input array through filter, returning an array
    let truthy = _.filter(array, test);
    // falsy is the result of running the input array through reject, returning an array
    let falsy = _.reject(array, test);
    
    // pushing both truthy and falsy to the result array
    result.push(truthy);
    result.push(falsy);
    // returning the result array
    return result;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, test) {
 // creating an empty array
 let resultArr = [];
    // running each of the collection with a function that takes in the element, it's index, and a collection
    _.each(collection, function(element, index, collection) {
        // pushing the result of running test over each element, index, and collection to the resultArr array
        resultArr.push(test(element, index, collection));
    })
    // returning the resultArr
    return resultArr;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(collection, property) {
    // returning the results of running map over the collection, will be an array
    return _.map(collection, function (collection, index) {
        // returning the value at the given property
        return collection[property];
    })
    
    
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
    
_.every = function(collection, test) {
    //check if <test> is a function
    if (_.typeOf(test) === "function") {
        // if it's a function
        // run map on it, calling test on the element, index, collection
        let arrWFunc = _.map(collection, function(e, i , c){
        return test(e, i, c)
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
        if (_.contains(arrWFunc, false)) {
            return false;
        } else {
            return true;
        }
    } else {
        // if it's not a function
        // using map:
        // return true if element is truthy, otherwise return false
        let arrWOFunc = _.map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
         if (_.contains(arrWOFunc, false)) {
            return false;
        } else {
            return true;
        }
    }
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, test) {
 
     //check if <test> is a function
    if (_.typeOf(test) === "function") {
        // if it's a function
        // run map on it, calling test on the element, index, collection
        let arrWFunc = _.map(collection, function(e, i , c){
        return test(e, i, c)
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
        if (_.contains(arrWFunc, true)) {
            return true;
        } else {
            return false;
        }
    } else {
        // if it's not a function
        // using map:
        // return true if element is truthy, otherwise return false
        let arrWOFunc = _.map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
        // set up if statement to check if array contains false
        // if it contains false, return false
        // else return true
         if (_.contains(arrWOFunc, true)) {
            return true;
        } else {
            return false;
        }
    }
 
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(collection, test, seed) {
    // if there is a seed
    let previousResult;
    if(seed !== undefined) {
        previousResult = seed;
        // use each to gain access to each value in the array
        _.each(collection, function(e, i, a){
            // calling function for every element, passing in previous, element
            previousResult = test(previousResult, e, i, a);
            
        })
        // if there is no seed
    } else {
        // use the first element of the array as the seed
        previousResult = collection[0];
        // implement a for loop to start iterating at my first index
        for(let i = 1; i < collection.length; i++) {
            previousResult = test(previousResult, collection[i], i, collection);
        }
        
        
    }
    
    return previousResult;
    
    
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, ...objects) {
    // looping over the collection of objects
    for(let i = 0; i < objects.length; i++) {
        // for in loop that's run over each object
        for(var key in objects[i]) {
            // updates the key within object1 with a new value
                // also creates this key/value pair if it doesn't exist in object 1
            object1[key] = objects[i][key];
        }
        
    }
    // returning the final, updated object1
    return object1;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
