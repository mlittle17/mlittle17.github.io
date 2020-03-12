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
    // using filter 
    return _.filter(array, function(customerObj) {
    return customerObj.name[0].toLowerCase() === lowLetter;
    
}).length
};

 
/**
 * ### 7: `friendFirstLetterCount`
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
 */
 

 var friendFirstLetterCount = function(customers, customerName, letter) {
    // console.log(customerName);
    // using reduce to return the customerObj that matches the input string
    let customer = _.reduce(customers, function(customerMatch, customerObj) {
        if(customerName === customerObj.name) {
            return customerObj
        } return customerMatch;
        
        
    }) 
    // using firstLetterCount function to check the array of customer
        // returning a number of friends that match that letter
    return firstLetterCount(customer.friends, letter);
 }

var friendsCount = function(customers, customerName) {
   
    return _.reduce(customers, function(friendsList, customerObj) {
         if(_.pluck(customerObj.friends, "name").includes(customerName)) {
             friendsList.push(customerObj.name);
         };
            return friendsList;
    }, [])
    
    
}
    
    

var topThreeTags = function(customers) {
    // console.log(customers, "in");
    // returning the top three tags amongst all customers
    let tagsArr = customers.reduce(function(allTags, customerObj) {
            var flat = allTags.concat(customerObj["tags"]);
            // console.log(flat);
            return flat;
            //console.log(allTags);
        }, []
    )
  
    let tagsObj = tagsArr.reduce(function(tagObj, tag) {
        if(tagObj[tag]) {
            tagObj[tag] += 1;
        } else {
            tagObj[tag] = 1;
        } 
            //console.log(tagObj);
            return tagObj;
        
    }, {});
    
    let subArr = (Object.entries(tagsObj));
    let sorted = subArr.sort(function(a, b){
        return a[1] > b[1]})
    
    let topThree = sorted.slice(-3);
    let top3Tags = [];
    for(let i = 0; i < topThree.length; i++) {
        top3Tags.push(topThree[i][0])
        
    }
    
    return top3Tags;
    
    
    // let arr = _.map(tagsObj, function(key) {
    //     let kvArr = [];
    //     kvArr.push(tagsObj);
    //     return kvArr;
    // }
  
    // )
    
    // console.log(arr);
    
}

var genderCount = function(customers) {
    
    
    return customers.reduce(function(genderCountObj, customerObj) {
        if(genderCountObj[customerObj.gender]) {
            genderCountObj[customerObj.gender] += 1;
        } else {
            genderCountObj[customerObj.gender] = 1;
        }
            return genderCountObj;
            console.log(genderCountObj);
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
