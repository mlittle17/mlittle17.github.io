// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays) {
  // let arr = [];
  // let retArr = [];
  // for(let i = 0; i < arrays.length; i++) {
  //   arr.push(arrays[i]);
  // }
  
  // return retArr.concat(arr);
  
  var flat = 
    arrays.reduce(function(a, b) { 
      return a.concat(b);
    });

console.log(flat);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, func, update, body) {
  for(let value = start; func(value); value = update(value)) {
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
  for(let i = 0; i < array.length; i++) {
    if(!func(array[i]))
      return false;
  }
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
