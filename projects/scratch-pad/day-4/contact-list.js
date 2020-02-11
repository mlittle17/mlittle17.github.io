// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    let contact = {
        id: null,
        nameFirst: "",
        nameLast: ""
        
    };
    /** function will take paramaters of id, nameFirst, and nameLast and will
     * assign those values to the keys within the newly created object */
    contact.id = id
    contact.nameFirst = nameFirst
    contact.nameLast = nameLast
    // returning new contact
    return contact
}


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
    // declaring variable of contacts and assigning to an empty array
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
            
        },
        /** creating addContact key, with value being an anonymous function 
         * that pushes each new contact to the contacts array */
        addContact: function(contact) {
            contacts.push(contact)
        },
        /** creating the findContact key, with the value of an anonymous function
         * that takes a fullName parameter and checks to see if it matches any other
         * objects within the contacts array
         * 
         */
        findContact: function(fullName) {
            /** declaring splitName variable with value of the fullName, using the 
             * split method, splitting into an empty array */
            let splitName = fullName.split(" ")
            
            // for loop that loops over the contacts array
            for(let i = 0; i < contacts.length; i++) {
                
                /** conditional statement that evaluates whether the first element
                 * of the splitName array is strictly equal to the value of nameFirst
                 * within the given element, which is an object, within the contacts array
                 * AND whether the second element of the splitName array is strictly equal
                 * to the value of the nameLast within the same object
                 */
                if(splitName[0] === contacts[i].nameFirst && splitName[1] === contacts[i].nameLast) {
                // returning that element (which will be an object), if true
                return contacts[i];
                // returning undefined if false
            } else return undefined
            }
           
            
        },
        removeContact: function(contact) {
            // using splice method to remove one element from the array at the first index
            contacts.splice(0,1);
        },
        printAllContactNames: function() {
            // declaring variable of namesArray that will hold all names from contacts
            let namesArray = [];
            // using for loop to loop over contacts array
            for(let i = 0; i < contacts.length; i++) {
                /** using push method and array access to push a concatenated
                 * string of the first and last names (with a space) to the namesArray
                 */
                 
               namesArray.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
               
            }
                /** using join method to join all elements within the namesArray
                 * array, but using the newline character to take the place of
                 * the commas, thus returning a string with each full name on
                 * a new line */
                return namesArray.join("\n");
        
            },
        
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
