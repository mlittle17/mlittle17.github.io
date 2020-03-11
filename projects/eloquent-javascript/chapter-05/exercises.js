// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  /** creating variable named flattened that is equal to the expression of
   * the result of using the reduce method with an anonymous function
   * that returns the concatened result of the first element and then
   * the second element
   */
  var flattened = arrays.reduce(function(e, ee) { 
      return e.concat(ee);
    });
// returning the final result of flattened
return flattened;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, iterator, body) {
  /** building for loop that assigns i to start, and then uses test as
   * the condition. So loop will run as long as test(i) resolves to true.
   * Each time i is true, i will be reassigned to the result of the iterator
   * function called with i
   */
  for(let i = start; test(i); i = iterator(i)) {
    // calling body function with i each time
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // using conventional for loop
  for(let i = 0; i < array.length; i++) {
    // if any function call on the index of i within input array is false..
    if(!test(array[i]))
      // returning false
      return false;
  }
  // otherwise will return true
    return true;
  }

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: string of different texts
//O: string (indicating the dominant director)
//C:
//E: don't want to include symbols in our count
function dominantDirection(text) {
  console.log(text);
  // first, keep the count of each letter in our text for the domiant direction
  let arrayOfScripts = countBy(text, function(characterInText) {
    //find the script for each letter that we come across
    const objOfScripts = characterScript(characterInText.charCodeAt())
    
    // check if our character belongs to a writing direction
      // if it belongs to a writing direction, return it in our callback function
    //if it doesn't belong to a script, return "non-alphabetic"
    if(objOfScripts !== null) {
        return objOfScripts.direction;
    }
    return "non-alphabetic"
  })
  // sort our object to find the highest count value
arrayOfScripts.sort(function(a, b){
  return b.count - a.count;
})
 console.log(arrayOfScripts);
 return arrayOfScripts[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
