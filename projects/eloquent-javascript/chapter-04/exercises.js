////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function range(start, end, step = start < end ? 1 : -1) {
  // creating empty array for range of values
  let newArr = [];
  // conditional that first checks if start is equal to end
  if(start !== end) {
    // if above conditional is false, will then check if step is greater than 0
    if (step > 0) {
    /** if true, using a for loop that puts start at i and iterates + step until
     * no longer less than or equal to end */
      for (let i = start; i <= end; i += step) {
        // pushing i into empty array each iteration
        newArr.push(i);
    }
  } 
    /** if false, will run for loop with start at i and will add step to i until
     * i is no longer greater than or equal to end */
    else {
      for (let i = start; i >= end; i += step) {
       // pushing elements into array
       newArr.push(i);
    }
  }
  // returning newArr with whatever elements were pushed in
  return newArr;

} else 
    // returning empty array if start is equal to end
    return newArr
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  // declaring sum as the number 0
  let sum = 0;
  // conditional that checks if array length is equal to 0
  if(array.length === 0) {
    // will return length of array if true
    return array.length;
  } else {
    // else, using for loop that ends once i is no longer less than array length
    for(let i = 0; i < array.length; i++) {
      // will add the element at the index of i to sum for each iteration
      sum += array[i];
    }
        
  }// will return sum once for loop is done running
    return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // creating empty array
  let newArr = [];
  // using for a reverse for loop that runs until i is no longer greater than or equal to 0
  for(let i = array.length - 1; i >= 0; i--) {
    // pushes i into newArr at each iteration
    newArr.push(array[i]);
  }
    // will return newArr once complete
    return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
    // using reverse method to return array
    return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: An array of valuesToString
//O: An object
function arrayToList(array) {
  // starting with the first element in the array, make that our first "value's" value
  // create an additional rest key who's value is a nested object
  // set a default value for my list
//   let list = null;
  
//   for(let i = array.length - 1; i >= 0; i--) {
//     if(array[i - 1]) {
//       list = {value: array[i -1], rest: list};
//     }
//   }
//   return list;
// }
// if there are no eements in the array, return 
// stopping recursing when we have no more element in the array
// if(!array.length) {
//   return null
// }

// if(array.length === 1) {
//   return {value: array[0], rest: null}
// }
//   return {value: array[0], rest: arrayToList(array.slice(1))};

  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // creating empty array
  let array = [];
  // for loop that makes the 
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value,list) {
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list,number) {
  // conditoinal that checks if list is falsy value
  if (!list) {
    // will return undefined if true
    return undefined;
    // conditional that checks if number is equal to 0
  } else if (number === 0) {
    // returns value of value property of list if true
    return list.value;
  } else 
      // otherwise will return a function call of nth with the rest value and the input number - 1
      return nth(list.rest, number - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(objA,objB) {
  if (objA === objB) {
    return true
  } else if (objA == null || typeof objA != "object" || objB == null || typeof objB != "object") {
    return false;}

  let keysA = Object.keys(objA)
  let keysB = Object.keys(objB)
  // conditional that checks if keysA length is equal to keysB
  if(keysA.length == keysB.length) {
    // runs for in loop if true, that runs for each key in keysA
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) { 
        /** will return false keysB does not include key or if the call of deepEqual using
         * the keys of objA and the keys of objB does not resolve to true */
        return false;
      }
  }}
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
