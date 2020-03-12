// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-mlittle17");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    
// get access to each customer object and filter out the males

// using filter function, taking in the customers array
    // also taking in a function that uses the element that is a customerObj
        // will compile an array of customerObj's that are male
return _.filter(customers, function(customerObj) {
    // returning the length of the array of customerObj's that are male
    return customerObj.gender === "male";}).length
};


var femaleCount = function(array) {
// get access to each customer object and filter out the females

// using filter function, taking in the customers array
    // also taking in a function that uses the element that is a customerObj
        // will compile an array of customerObj's that are female
return _.filter(customers, function(customerObj) {
    // returning the length of the array of customerObj's that are female
    return customerObj.gender === "female";}).length

};

var oldestCustomer = function(array) {
    // creating two variables that will update as we loop through the customers
    let name
    let age = 0;
    // using each to loop through the array of customers
        // function takes in the customerObj
    _.each(customers,function(customerObj) {
        // if the given customerObj's age is greater than current age...
        if(customerObj.age > age) {
            // age is now equal to that object's age
            age = customerObj.age
            // name is now equal to that object's name
            name = customerObj.name
        }
    })
    // return name once loop is complete
    return name
}

    
    
    
    

var youngestCustomer = function(array) {
    // creating two variables that will update as we loop through the customers
    let name
    let age = 100;
    // using each to loop through the array of customers
        // function takes in the customerObj
    _.each(customers, function(customerObj) {
        // if the given customerObj's age is less than current age...
        if(customerObj.age < age) {
            // age is now equal to that object's age
            age = customerObj.age
            // name is now equal to that object's name
            name = customerObj.name
        }
        
    })
    // return name once loop is complete
    return name;
    
};

var averageBalance = function(array) {

// creating a variable named balances that will compile all customer balances
let balances = _.pluck(customers, "balance");
// creating an empty array that will contain balances as numbers
let numBalances = [];
// looping through balances array
for (let i = 0; i < balances.length; i++) {
  // creating balString that holds each balance temporarily
    // first replaces all number symbols with an empty string
  let balString = balances[i].replace("$", "")
    // re-assigning balString with a string that has replaced commas with an empty string
    balString = balString.replace(",", "")
    // pushes that cleaned up string to numBalances as a number
    numBalances.push(Number(balString));
}
// creating total variable with value of 0
let total = 0; 
// for loop that adds each element to total
for(let i = 0; i < numBalances.length; i++) {
    total += numBalances[i];
}

// returning final value of total, divided the length of elements within balances
return total/numBalances.length;

}

var firstLetterCount = function(array,letter) {
    // creating lowLetter to "equalize" the input letter
    var lowLetter = letter.toLowerCase();
    // using filter over the array 
        // function takes in each customerObj
    return _.filter(array, function(customerObj) {
    // returning all customerObj's in an array whose name starts with the input letter
        
    return customerObj.name[0].toLowerCase() === lowLetter;
     // returned in an array, so returing the length of that array to find the number
}).length
};

 

 var friendFirstLetterCount = function(customers, customerName, letter) {
    // using reduce to return the customerObj that matches the input string
        // using customerMatch as seed, looping through customerObj
    let customer = _.reduce(customers, function(customerMatch, customerObj) {
        // checks if customerName is equal to any customerObj's name
        if(customerName === customerObj.name) {
            // returns that customerObj if true
            return customerObj
        // assigns customerMatch to customer variable
        } return customerMatch;
    }) 
    // using firstLetterCount function to check the array of customer friends
        // returning a number of friends that match the input letter
    return firstLetterCount(customer.friends, letter);
 }

var friendsCount = function(customers, customerName) {
   // using reduce to loop over the customers array
    // creating a seed named friendsList, making it's initial value an empty array
        // using customerObj as "current value"
    return _.reduce(customers, function(friendsList, customerObj) {
         // using pluck tp put all the values of name of a given customerObj's friends list in an array
            // also using .includes to check if that array from pluck includes the customerName
         if(_.pluck(customerObj.friends, "name").includes(customerName)) {
             // will push that name into friendsList if the conditional resolves to true
             friendsList.push(customerObj.name);
         };
            // returning friendsList once done
            return friendsList;
    }, [])
    
    
}
    
    

var topThreeTags = function(customers) {
    
    // using reduce to create an array of all tags within every customerObj
        // allTags will be an array of sub-arrays, with each customerObj's tags
    let tagsArr = customers.reduce(function(allTags, customerObj) {
            // assigning flat the value of the allTags array
                // using .concat to create one array that adds each array of tags to it
            var flat = allTags.concat(customerObj["tags"]);
            // returing the final array with all tag values (including duplicates) as elements
            return flat;
        }, []
    )
    
    // creating an object that will include each tag as a key with their value being the number of occurances
        // using reduce with empty object as seed
    let tagsObj = tagsArr.reduce(function(tagObj, tag) {
        // if a given tag exists as a property in the object, add 1 to the value
        if(tagObj[tag]) {
            tagObj[tag] += 1;
        // if a given tag does not exist in the object, create it with the value of 1
        } else {
            tagObj[tag] = 1;
        } 
           // returning the final object
            return tagObj;
        
    }, {});
    
    // creating an array with sub-arrays of a tag and it's corresponding total
        // ex. [["tag", 4],["tag2", 5]
    let subArr = (Object.entries(tagsObj));
    // using sort method to arrange all sub-arrays by the value at the index of 1
        // the higher the number, the further in the back of the array
    let sorted = subArr.sort(function(a, b){
        return a[1] > b[1]})
    // using slice to create an array of the top three sub-arrays
    let topThree = sorted.slice(-3);
    // creating top3Tags as empty array
    let top3Tags = [];
    // looping over topThree array, pushing in the element at the 0 index of i, which will be the tag
    for(let i = 0; i < topThree.length; i++) {
        top3Tags.push(topThree[i][0])
        
    }
    // returning top3Tags, an array of strings
    return top3Tags;
    
}

var genderCount = function(customers) {
    
    // using reduce to loop over the customers array
        // creating a seed of genderCountObj, which is an empty object literal
    return customers.reduce(function(genderCountObj, customerObj) {
        // if genderCountObj does include a given gender property, add 1 to it's value 
        if(genderCountObj[customerObj.gender]) {
            genderCountObj[customerObj.gender] += 1;
        } else {
        // if genderCountObj does not include a given gender property, create it with a value of 1
            genderCountObj[customerObj.gender] = 1;
        }
            // return genderCountObj, which will include the count of each gender
            return genderCountObj;
    }, {})
    
    
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
