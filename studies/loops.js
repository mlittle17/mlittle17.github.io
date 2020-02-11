/**
* LOOPS:
*   0. We use loops in javascript to do some kind of action repeatedly. Simply 
*       by declaring a starting condition, an ending condition, and the action
*       we want our loop to repeat, we can build pretty powerful programs that
*       can do a lot of work very quickly.
*/

// 1. While, For, and For-In Loops //

    /**
     * There are three major types of loops that we use in Javascript:
     *      
     *      while loops
     *      for loops
     *      for-in loops
     * 
     * For the most part what seperates our use of these loops has a lot to do
     * with what type of data we're dealing with or what our program's goal is.
     * 
     */
     
     // while loops
     
        /** While loops are a loop that executes a statment or expression as long
         * as the test conition is evaluating to true. Let's say you wanted a
         * program to print the numbers 20 through 1 in descending order. Here's
         * how you would do it with a while loop.
         */
         
         // declaring variable i equal to the number 20
         let i = 20;
         
         /** using a while loop that prints i the console, decrementing by 1
          * each time it runs back to the loop, meaning that 20 through 1 will
          * be printed to the console
          */
         
         // once i is no longer greater than 1, the loop will stop 
         while(i > 1) {
             console.log(i--)
         }
         
    // for loops
    
        /** For loops are similar to while loops, but instead of just one
         * statement that is being evaluated, for loops effectively have three,
         * which are in the below parentheses, seperated by semi-colons. Let's
         * use the same problem we used in our while loop, but use a for loop
         * instead.
         */
         
         /** In this for loop, we're declaring and initializing i to equal 20.
          * Next, we're stating that this code block should execute as long as
          * the conditional statement of i > 1 resolves to true. Finally, if the
          * condition is true, we'll decrement i by 1.
          */
         
         // this loop will print 20 through 1 to the console, just like our while loop 
         for(let i = 20; i > 1; i--) {
             console.log(i);
         }
         
    // for-in loops
    
        /** for-in loops are what we use to loop over objects in javascript.
         * For example, if we wanted to see all the values within an
         * object, we could use a for-in loop to print them all to the console.
         * Below is an example.
         */
         
         // declaring the variable shoes, assigning it the value of the object named shoes
         let myShoes = {
             size: 9.5,
             color: "red",
             brand: "Nike"
         }
         
         // using a for-in loop to print 
         for(var key in myShoes) {
             
             console.log(myShoes[key])
         }
         
         
        
     
// 2. Using loops to count

    /**
     * 
     */
     
// 3. Looping over an array //

    /**
     * 
     * 
     */
     
// 4. Looping over an object //

    /**
     * 
     */
     
     
