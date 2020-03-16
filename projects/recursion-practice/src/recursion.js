// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base case checking if n is less than 0
  if(n < 0) {
    // returns null if true
    return null
    // checking if n is equal to number 0
  } else if(n === 0) {
    // will return 1 if true
    return 1
    // else, will return n times factorial call of n - 1
  } else
      return n * factorial(n-1);
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // checks if length property of array is falsy
  if(!array.length) {
    // returns 0 if array length is falsy
    return 0
    // if array length is truthy
      // returning the first index of array plus the next index
        //using slice, every time sum is called it's one less index inside of array
  } else return array[0] + sum(array.slice(1))
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

};

// 4. Check if a number is even.
var isEven = function(n) {
  // checking if n is strictly equal to 0
  if(n === 0) {
    // returning true
    return true}
    // checking if n is strictly equal to 1
    else if (n === 1) {
      // returning false if true
      return false;
    // check if n is negative
  } else if (n < 0) {
    // returns the function call with n + 2 until it reaches the above conditions
    return isEven(n + 2);
  } // if all above conditions are false
  else
    // returning the function with n - 2
      // will eventually reach 0 and return true if n is even
      return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // if n is equal to 0, returning 0
  if (n === 0) {
    return 0;    
  } // using ternary operator to check if n is greater than 0
      // if true, returning the result of n - 1 plus the funciton call of n - 1
      // if false, adding 1 to n plus the function call of n + 1
  return (n > 0) ? (n - 1) + sumBelow(n - 1) : (n + 1) + sumBelow(n + 1);
};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // checking if y - x is equal to 1 or 0
  if(y - x === 1 || y - x === 0) {
    // returning an empty array if true since there is no range
    return [];
    // assigning y to the ternary outcome of y being greater than x
      // if true, subtracting 1 from y
      // if false, adding one to y
  } else y = y > x ? y - 1 : y + 1
      // returning empty array if y is strictly equal to x
      // returning range call of x and y with a concat(y) to add y to the array
      return y === x ? [] : range(x,y).concat(y);
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // checking if exponent is equal to 0
  if(exp === 0) {
    // returning 1 if true
    return 1;
    // reurning the result of exponent is greather than 0
  } return exp > 0 ? 
      // if exp greater then 0, returning base * function call of base times exponent - 1
      base * exponent(base, exp - 1) :
      // if false, returning 1 divided by 
        // base times function call with base and -1 times exponent - 1 as arguments, 
      1 / (base * exponent(base, -1 * exp - 1))
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // checking if n is equal to 1 to account for 1 being the only odd integer that's a power of two
  if(n === 1) {
    return true;
  }
  // if n is equal to 0 or has a remainder of 1 (meaning n is odd) returning false
  if(n === 0 || n % 2 === 1) {
    return false;
  }
  // returning the function call of n/2 to eventually get it to 1 if n is a power of 2
  return powerOfTwo(n / 2)
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // using ternart operator to see if string is equal to an empty string
    // will return that empty string true
    // if false will return a function call of reverse, starting at the first index of the string
      // since substr creates a new string, that will always be passed into the reverse function call
        // will concatenate the 0'th inddex of the input string 
  return string === '' ? '' : reverse(string.substr(1)) + string.charAt(0);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
// create a variable and reassign string with all lowercase and no spaces
let string1 = string.toLowerCase().trim();
// checking if string1's length is equal to 1
  if(string1.length === 1) 
  // will return true 
  return true;
  // checking if string1's length is equal to 2 string make index 0 equal index 1
  if(string1.length === 2) 
  // making index 0 equal index 1
  return string1[0] === string1[1];
  // checking if the string index 0 is equal to string slicing from the last index return the function slicing the first index and the last index
  if(string1[0] === string1.slice(-1)) 
    // returning the function with string sliced from the first index up to the last index
    return palindrome(string1.slice(1,-1));
    // return false
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {

  if(x === 0 || y === 0) {
     return 0;
   } else if(y < 0) {

    return -x + multiply(x, y + 1);

  } else return x + multiply(x, y - 1);
  

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // checks if both str1 or str2 is equal to an empty string
  if (str1 === '' && str2 === '') {
    // returns true if true
    return true; 
  } 
  // checks if character at first index of str1 is not equal to first index of str2
  if (str1.charAt(0) !== str2.charAt(0)) {
    // returns false if they are not equal
    return false; 
  } 
    else
    // returning the function call with substring of str1 and str2 at the second index as arguements
      return compareStr(str1.substr(1), str2.substr(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    // using ternary operator to check if length of str is equal to 1
    return str.length === 1 ? 
    // returns an array of that str with that single character if true
    [str.charAt(0)] : 
    // returns an array with the first index of that string
      // concatenated with a function call of the substring, starting at the second index
    [str.charAt(0)].concat(createArray(str.substr(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    // using ternary to check if length is truthy or falsy
      // returns array if false
    return !array.length ? 
        // returns array if false
        array : 
        // returns function call with sliced array at second index
          // concatenated with first indexed element of array
        reverseArr(array.slice(1)).concat(array[0]);
  
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    // ternary that checks if length is equal to 0
    return length === 0 ?
    // returns empty array if true
      [] :
    // returns the value as an array concatenated with function call
      // function call takes the original value and decrementing length by 1 each time
      [value].concat(buildList(value,length - 1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // checking if length of array is 0
  if (array.length === 0) { 
    // returns 0 if true
    return 0;
  } else
  // creating increment variable
    //. equal to ternary outcome of the first index being equal to value
      // if true, increment is equal to 1
      // if false, incremeent is equal to 0
  var increment = array[0] === value ? 1 : 0;
  
  // now returning increment + the function call 
    // starting the array from the second index each time
    // value is unchanged
  return increment + countOccurrence(array.slice(1), value); 
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // if array length is equal to 1
  if(array.length === 1) {
    // returning the callback function call over that one element
  	return callback(array); 
  } else
  // returning an array with the result of the callback over the first index
    // concatenating with the function call with the sliced version of the array, at index 1
      // callback function remains unchanged
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};


// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // checks if n is negative
  if(n < 0) {
    // returns null if true
    return null;
    // else if checks if n is equal to 1
    } else if(n === 1) {
      // returns 1 if true
		return 1;
		// if all conditions above are false
	} else
	// returns the function call of n - 1 plus the function call of n - 2
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    // length is equal to 0, return an empty array
    if(input.length === 0) {
        return [];
    }
    // else return an array of the first element capitalized
      // concatenating with the function call the rest of the array, sliced from second index
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {

    if(!array.length) {
      // if array length is falsy, returning emppty array
      return [];
      // returning an array with first element of array capitalized at first character plus the remaning element, unchanged
        // array concatenated function call of second element of input array
    } else return [array[0].charAt(0).toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  let result = Array.from(arguments) [1] || {};
  if(str.length === 0) {
    return result;
  }
  if(!result[str[0]]) {
    result[str[0]] = 1;
  } else {
    result[str[0]]++
  }
  return letterTally(str.slice(1), result)
  
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
// creating an empty array
let arr = [];
// if the list length is equal to 0 return the empty array
if (list.length === 0) {
  return arr;
}
// if the first value of the list is not equal to the list value index 1, push the first value to the array
if(list[0] !== list.slice(1)[0]){
  arr.push(list[0]);
}
// returning the array concatenated with the list slice starting at the index 1
return arr.concat(compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // if array length is 0, returning the array
  if(array.length === 0) {
    return array
  }
  // conditional that checks if the first index of the sliced(second index) array is equal to 0 AND
    // if the the first element of the input array is equal to 0
  if(minimizeZeroes(array.slice(1)) [0] === 0 && array[0] === 0) {
    // returns the function call with the sliced (second index) array as the input
    return minimizeZeroes(array.slice(1))
  }  else 
    // returning the first index of the array in an array
      // concatenated with function call of sliced (second index) array
    return [array[0]].concat(minimizeZeroes(array.slice(1)))
  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) { 
      // returning array if empty
      return array; 
    }
    // if first index is negative
    if(array[0] < 0) { 
      // changing that value to a positive number
      array[0] = -array[0]; 
    }
    // if the second element is positive
    if(array[1] > 0) {
      // changing that value to a negative number
      array[1] = -array[1];
    }
    // returning the array with the first two updated elements
      // concatenated with function call of sliced (starting at third index) array
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // if the string length is 1 and string is an empty string return srt slice  
  if (str.length === 1 && str === ' ') {
	  return str.slice;
	}
  	// if str is falsy, return an empty string
	if (!str) {
		return '';
	}
  // creating a variable with number words, turning it into an array
	let numberNames = 'zero one two three four five six seven eight nine ten'.split(' ');
	// creating an object called numTranslator 
	let numTranslator = {};
	// looping through the array numberNames
	for (var i = 0 ; i < numberNames.length ; i++) {
	  // numTranslator values are equal to the values of numberNames values 
			numTranslator[i] = [numberNames[i]];
	}
  // creating character variable that is equal to the first index of str
	let character = str[0];
	// using ternary to reassign character to the numTranslator has a character then numTranslator[character] plus a space
	  // if the numTranslator has a character, then numTranslator[character] is added a space
	    // if false, returning character 
	    character = numTranslator[character] ? numTranslator[character] + "": character;
  
  // return the character plus the function call using the str sliced at 1 (second index) 
	return character + numToText(str.slice(1));

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
