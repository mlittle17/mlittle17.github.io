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
    // I: an array
    // O: number
    // C. use _.filter
    
    
    
    // get access to each customer object and filter out the males
//     let arrOfMaleObj = _.filter(array, function(customerObj){
//         // checking to see if customer object is a male using the gender key
//         return customerObj.gender === "male";
//     })
//     let number = arrOfMaleObj.length // chain on .length to get number of male customers
//     console.log(number);
//     return number;
// };

return _.filter(array, function(customerObj, index, array) {
    return customerObj.gender === "male";
    
}).length
};


var femaleCount = function(array) {
    let arrOfFmaleObj = _.filter(array, function(customerObj){
        return customerObj.gender === "female";
    }
    )
    let number = arrOfFmaleObj.length
    return number;
    
    
};

var oldestCustomer = function(array) {
    let name
    let age = 0;

    _.each(array,function(value,index, array) {
        
        if(value.age > age) {
            age = value.age
            name = value.name
        }
    })
    return name
}

    
    
    
    

var youngestCustomer = function(array) {
    let name
    let age = 100;
    
    _.each(array, function(value, index, array) {
        
        if(value.age < age) {
            age = value.age
            name = value.name
        }
        
    })
    return name;
    
    
    
    
};

var averageBalance = function(array) {

// Find the average balance of all customers

let balances = _.pluck(array, "balance");
// console.log(balances);
let numBalances = [];

for (let i = 0; i < balances.length; i++) {
  let balString = balances[i].replace("$", "")
    balString = balString.replace(",", "")
    numBalances.push(Number(balString));
}

let total = 0; 

for(let i = 0; i < numBalances.length; i++) {
    total += numBalances[i];
}

return total/numBalances.length;

}

var firstLetterCount = function(array,letter) {
    var lowLetter = letter.toLowerCase();
    return _.filter(array, function(customerObj, index, array) {
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
  
    console.log(tagsArr);
    
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
