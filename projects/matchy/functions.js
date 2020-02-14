/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    
   /** Loops through the `animals` Array, and returns the animal's Object if
    * an animal with that name exists
    */

   
   for(var i = 0; i < animals.length; i++) {
       if(animals[i].name === name) {
           return animals[i];
       } 
       
   } 
   // Returns `null` if no animal with that name exists
   return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    

    
// using a for loop to loop over the animals array
for(let i = 0; i < animals.length; i++) {
    /** conditional statement that resolves to true if the name of the object
     * at the index of i is strictly equal to name */
    if(animals[i].name === name) {
        // if true, 1 replacement object will be swapped out with that element
        animals.splice(i, 1, replacement)
    }
}
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 /** 1. Write a function called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.
 */
 
 function remove(animals, name) {
     // using a for loop to loop over the animals array
     for(let i = 0; i < animals.length; i++) {
         
         /** if the name property of the element at the index of i is strictly
          * equal to the input name, the conditional statement will resolve to 
          * true */
         if(animals[i].name === name) {
             // using splice method to remove that element at the respective index
             animals.splice(i)
         }
     }
 }

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works. */
   
   function add(animals, animal) {
       
       /** conditional statement that checks the following:
        *       that the input object animal has a name property greater than 0
        *       that the input object animal has a species propoerty greater than 0
        *       using the seach function we created earlier, that the input
        *           object animal has a unique name value within the animals array
        * 
        * resolves to true if all conditions resolve to true
        */
        
       if(animal.name.length > 0 && animal.species.length > 0 && search(animals, animal.name) === null) {
           // will push that animal object to the animals array if true
           animals.push(animal);
       }
   }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
