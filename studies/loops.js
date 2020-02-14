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
     * One thing we kind of glossed over in our previous for loop example
     * is the iterator parameter within the for loop statement. That is the
     * expression that impacts the value of i, or whatever we have decided to 
     * call our variable within the for loop.
     * 
     * The iterator acts on the value of the variable in either a incrementing (++)
     * way or a decrementing (--) way. Thus, for loops can be a great way to 
     * build functions that count for us.
     * 
     */
     
     /** In the below function counter, the function will take in a number and
      * then print that number and all the other numbers that lead up to the 
      * number 50. We can do this by delcaring i with the value of number, the
      * stopping condition of once i is no longer less than 50, and then our
      * iterator is adding 1 to i each time i is less than 50. The code block
      * being executed simply prints i to the console every time i is less
      * than 50 */
      
     function counter (number) {
         for(let i = number; i < 50; i++) {
             console.log(i)
         }
     }
     
     counter(40); // will print 41 through 50 to the console
     
// 3. Looping over an array //

    /**
     * Since we know for loops can be a great way to count, it's worth
     * considering how we can use that feature in other tasks or problems.
     * Well, since we know arrays are indexed with numerical values starting
     * at 0, we can actually use for loops to access elements within our
     * arrays by using i as our reference point for the index of an element
     * within our array.
     * 
     * Let's say we saw a rainbow one day and decided to log all the colors
     * we saw in an array so we could remember it one day. We used an array to
     * store the values because all we need to do is remember the colors, they
     * don't need to be organized in any other way.
     * 
     * Well it's raining a few days later, so we want to use our comptuer to print
     * all the colors to our console to bring some cheeriness to our day. We can use
     * a for loop!
     */
     
     // declaring rainbow with value of array that contains strings of colors
     let rainbow = ["red", "blue", "yellow", "purple", "green"];
     
    /** using for loop to loop over rainbow array by declaring i and making its'
     * value 0. The stoping condition is once i is no longer less than the length
     * of the array (which in this case is 5). Thus, i will only be equal to 4.
     */
     for(let i = 0; i < rainbow.length; i++) {
         /** by using bracket notation, we can acess each element of the array
          * by using i inplace of a number for our index, so each time i is
          * passed into the bracket, it will print the element. But once i is 
          * increased by 1, that will change the index, thus printing another
          * color to the console. */
         console.log(rainbow[i]);
     }
     
// 4. Looping over an object //

    /**
     * We loop over objects by using for-in loops. While arrays are "zero-indexed",
     * ordered lists, the key/value pairs of objects are unordered. Almost imagine them
     * as bags with their key/value pairs as marbles moving around inside. But just because
     * we don't know where key/value pairs sit within an object, we can still
     * use loops to help us.
     * 
     * Let's say we just wanted to know how many key/value pairs are within
     * the myShoes variable we declared earlier in this page. We don't
     * want the key/value pairs themselves, we just want to know how many there
     * are so we know how many we should be collecting for future shoe objects.
     * 
     * Well, we can use a for-in loop to loop over that object and add up all the 
     * key value pairs inside.
     */
     
     // Using a for-in loop that looks for any keys in the object myShoes
     for(var key in myShoes) {
         // assigining the variable counter to the number 0
         let counter = 0
         // adding 1 to counter for each key in the myShoes object
         counter +=1
     }
     // will print three to the console
     console.log(counter);
     
     
