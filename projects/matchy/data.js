/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//declaring animal, initializing as an empty object
var animal = {};

// using dot notation to add properties of species, name, and noises to animal
animal.species = "cat";
animal["name"] = "Cheetos";
animal.noises = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declaring noises as empty array
var noises = [];
// using bracket notation to put meow at index of 0
noises[0] = "meow";
// using push method to add purrr at the end of the noises array
noises.push("purrr");
// using unshift method to put "hisss" at the beginning of the array
noises.unshift("hisss");
// using length method to put hello noise at the index equivalent to noises.length
noises[noises.length] = "hello";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// using dot notation to add noises property to animal object
animal.noises = noises;

// using push method to add "feed me" to noises array
noises.push("feed me");

console.log(noises);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
            dot notation and bracket notation
 *
 * 2. What are the different ways of accessing elements on arrays?
 *          bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declaring animals as an empty array
var animals = [];
// pushing animal to animals array
animals.push(animal);
console.log(animals);

// declaring duck variable with value of object
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// pushing duck to animals array
animals.push(duck);
console.log(animals);

// declaring ok variable with value of object
var ok = {
    species: "cat",
    name: "outside kitty",
    noises: ['meow', "hiss", "feed me"]
}

// declaring chanty variable with value of object
var chanty = {
    species: "chicken",
    name: "Chanticleer",
    noises: ["cockadoo", "yodalay-heee"]
}

// pushing ok and chanty variables into animals array
animals.push(ok);
animals.push(chanty);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I have chosen an array because it is an ordered list, which makes it easier to access

// declaring empty friends array
var friends = [];

// declaring getRandom function, with the parameter of collection
function getRandom (collection) {
    // declaring elements variable with value of the input collection's length
    var elements = collection.length;
    
    // returing random number
    return Math.floor(Math.random() * (elements - 0)) + 0;
}

// using bracket notation to add friends array to a random object within animals array
animals[getRandom(animals)].friends = friends;
console.log(friends);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
