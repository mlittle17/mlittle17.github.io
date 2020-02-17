//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // declaring empty array
    let array = [];
    // for in loop that loops through the object
    for(var key in object) {
        // pushes all values of object to array
        array.push(object[key]);
    
    // returning array    
    } return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // declaring empty arrau
    let array = [];
    // for in loops through the object
    for(var key in object) {
        // pushes all keys in object to array
        array.push(key);
    } 
    // using join method to return one string with all keys listed with space
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // declaring empty array
    let array = [];
    // using for in loop to loop through object
    for(var key in object) {
        // conditional that checks if value is a string
        if(typeof object[key] === 'string') {
            // push method to add values to array
            array.push(object[key])
        }
    // using join method to return all values as single string with space
    } return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // conditional statement that checks if collection is array
    if(Array.isArray(collection) === true) {
        // returns string of array if resolves to true
        return "array"
        // returns object otherwise
    } else return "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // splitting input string into an array declared as split
    let split = string.split("")
    //console.log(split);
    // using toUpperCase method to uppercase first character of split array
    let capChar = split[0].toUpperCase();
    // replacing element at index of 0 of split with capChar variable
    split[0] = capChar;
    // using join method to return new string with capitalized word
    return split.join("");

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ("one two three four"), "One Two Three Four"
function capitalizeAllWords(string) {
    // creating split array by splitting string with split method
    let split = string.split(" ");
    // creating empty array
    let newArray = [];
    // for loops that loops over split array
    for(let i = 0; i < split.length; i++) {
        // pushing capitalized i element within split array to newArray
        newArray.push(capitalizeWord(split[i]));
    // returning string using join method
    } return newArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// {name: "bert"}), "Welcome Bert!")
function welcomeMessage(object) {
    // using string concatenation and capitalizeWord function to return message
    return "Welcome" + " " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object with a name an a species and return '<Name> is a <Species>
function profileInfo(object) {
    // using capitalizeWord function and string concatenation to return message
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**Should take an object, if this object has a noises array return them 
 * as a string separated by a space, if there are no noises return 
 * 'there are no noises */
 
function maybeNoises(object) {
    // conditional statement checks if object is array and noises property has length greater than 0
    if(Array.isArray(object.noises) === true && object.noises.length > 0) {
        // returns one string of noises if conditional resolves to true
        return object.noises.join(" ");
        // will return there are no noises if otherwise
    } else return "there are no noises"

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // using split method to create array of seperate words
    let array = string.split(" ");
    // using for loop to loop over array
    for(let i = 0; i < array.length; i++) {
        // if element at index of i is equal to word, return true
        if(array[i] === word) {
            return true
        }
    // return false if otherwise
    } return false

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function addFriend (name, object) {
    // using push method to add name to friends array
    object.friends.push(name);
    // returns object
    return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** Should take a name and an object and return true if <name> is a 
 * friend of <object> and false otherwise
 * 
 * isFriend("jimmy",{friends:["bobby", "ralf"]}), false
 * 
 * isFriend("ralf",{friends:["bobby", "ralf"]}), true
 */
function isFriend(name, object) {
    // if friends property equals undefined, return false
    if(object.friends === undefined) {
        return false
    } // else, run for loop that loops over friends array within object 
    else for(let i = 0; i < object.friends.length; i++) {
        // if element at i is strictly equal to input name, return true
        if(object.friends[i] === name) {
          return true
}  // otherwise, return false
} return false
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, list) {
    // creating notFriends array to hold names that are not friends 
    var notFriends = [];
    
    // using for loop that loops over list
    for(var i = 0; i < list.length; i++) {
        // conditional that checks if name is not equal to a name within the list
        if(name !== list[i].name){
            
            if(!list[i].friends.includes(name)){ 
                // pushing those names into the notFriends array
                notFriends.push(list[i].name);
            }
        }
    }
        return notFriends;
}




//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function updateObject(object, key, value) {
    // using bracket notation to check if key/value pair within object exits
    // if key does exist, value will be updated
    // if key does not exist, new key/value pair will be added
    object[key] = value;
    // returning new object
    return object
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


function removeProperties(object, array) {
    // for loop that loops over array
    for(let i = 0; i < array.length; i++) {
        // for in loop that loops over all objects within array
        for(var key in object) {
            // if element within array at index of i matches a key, remove that key
            if(array[i] === key) {
                delete object[key]
            }
        }
        // return edited object
    } return object;
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // declaring new array
    let newArray = [];
    // using for loop to loop over array
    for(let i = 0; i < array.length; i++) {
        // conditional that checks if newArray includes element at index of i
        if(newArray.includes(array[i]) === false) {
            // if false, push that element to newArray
            newArray.push(array[i])
        }
        // returning new array with duplicates removed
    } return newArray;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}