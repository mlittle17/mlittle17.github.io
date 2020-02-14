/**
 * VARIABLES
 * 0. Variables are the containers of all the data we use and manipulate within javascript. Typically our programs need to access the data multiple times, so variables
 * are a great way to store data in a place where our programs can go back to acces it. Additionally, variables are great because, in most cases (more on that below), 
 * that data or value of a variable can be changed or updated, meaning we don't have to go back and do it ourselves!
 * 
 * If data and data types are the fuel of our programs, we could consider variables the engine that takes that fuel and turns it into power. So let's get started!
 * 
*/
// 1. declaration and assignment //

/**
 * Declaration is the act of “declaring” what want to name a container for our 
 * data or value. We can do that by using three keywords: var, let, const. For
 * our example below, we'll use var for now.
 */
    // variable named name is declared
    var name;


/**
 * Assignment is the act of “assigning” a value or data to that container. 
 * The first assignment of a variable is called the initialization.
 */
    // variable name is assigned the string “Ignatius”
    var name = "Ignatius";
    
// 2. var, let, and const //

/**
 * As we mentioned above, there are three variable keywords we can use and they are:
 *      1. var
 *      2. let
 *      3. const
 * 
 * What differentiates these variables are their respective properties for 
 * re-assignement and how they are hoisted (more on that in a bit) to their 
 * respective scope.
 * 
 */
 
 // Here’s a breakdown of each variable types' ability to re-assign:
 
    // var
        // variables declared with var can be re-assigned through a program
            var name = "Ignatius";
            name = "Myrna";
            // will print “Myrna” to the console
            console.log(name)
    
    // let
        // variables declared with let can be re-assigned through a program
            let age = 42;
            age = 65;
            // will print 65 to the console
            console.log(age);
            
    // const
        // variables declared with const CANNOT be re-assigned throgh a program
            const hometown = "New Orleans";
             // NOT ALLOWED and will return an error
            hometown = "Baton Rouge";
            // will return an error because const cannot be re-assigned
            console.log(hometown);
            
// 3. Hoisting

/**
 * Before we go into how variable types “hoist” their values, let’s do a quick 
 * explanation of what hoisting even is.
 * 
 * Programs run top down. And as we discussed above, we can always declare a 
 * variable without assigning it any value. However, where let and const differ 
 * themselves is that when they are not assigned a value, the program will not
 * recognize them until that is complete. Variables using var, however, are
 * actually “hoisted” to the top, which allows the program to recognize them
 * as variables, but obviously will not recognize any value, because it hasn’t
 * been assigned yet.
 */
 
 // Here’s how this looks in programming:
    
    /* since mom is declared with var, let’s imagine it’s hoisted to the top
    of this page, but since it hasn't been initialized with a value, it's 
    curent value is undefined */ 
    
    var mom
    // will print undefined to the console
    console.log(mom);
    
    mom = "Irene";
    // will print Irene to the console
    console.log(mom);
    
    /* since variables neighborhood and employed are declared with let and
    const, the program will return a reference error when we try to print it 
    to the console. The variables aren’t hoisted, so the program doesn’t even 
    know what neighborhood or employed is */
    
    let neighborhood;
    // will return a reference error
    console.log(neighborhood);
    neighborhood = "Uptown";
    
    // will return a reference error
    console.log(employed);
    const employed = false;

    
            

            

    

 
 
 
