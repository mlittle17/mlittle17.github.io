/**
 * DATATYPES
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
 
// 1. Number //
    
    /** 
    * Any numerical value and can be positive, negative, and can 
    * even include decimal points. 
    */
    
    // assigning variable posNumber the numerical value of 5
    var posNumber = 5;
    // assigning variable negNumber the numerical value of -5
    var negNumber = -5;
    // Assigning variable decNumber the numerical value of 5.5
    var decNumber = 5.5;
    
    /**
     * Just like the numbers we used throughout math class, we can add, 
     * subtract, divide, and multiply these numbers, and even have variables
     * equal the results of mathmatical expressions.
     */
     
     // variable mathExpression is equal to 5 multiplied by 5
     var mathExpression = 5 * 5;
     
// 2. Strings //

    /**
     * A collection of characters or symbols such as “New Orleans” or
     * “Big Ea$y”. Important to note that strings must be within quotations 
     * but these can be single quotes or double quotes
     */
    
    // variable city is assigned string value of New Orleans (double quotes)
    var city = "New Orleans";
    // variable state is assigned string value of Louisiana (single quotes)
    var state = 'Louisiana';
    
    /**
     * Strings also have a length property that returns the total number
     * of characters the string contains.
     */
     
     // variable river assgiend the string value of Mississippi
     var river = "Mississippi";
     // will print 11 to the console because that's how many characters are in the string of Mississippi
     console.log(river.length);
    
// 3. Booleans //

    /**
     * A binary, true or false value, which are used in conditional or 
     * comparison statements in order for a program to flow to the necessary
     * action or expression
     */
    
    // var opSparkStudent assigned the boolean value of true, since, you know, I am one 
    var opSparkStudent = true;
    // var collegeStudent assigned the boolean value of false, becuase I'm not
    var collegeStudent = false;
    
// 4. Arrays //

    /**
     * A complex data type that is used to store multiple data types.
     * Declared like any variable, but initialized with pair of brackets ([ ]), 
     * where values are separated by commas.
     */
     
    /**
     * Array named dunce is declared, initialized by brackets holds data, 
     * including string, number, and boolean values
     */
     
     var dunce = ["Ignatius", 42, 'New Orleans', false];
     
        /**
         * When values are inside an array, they are “indexed” or assigned a 
         * position value. This position is sequential, BUT the indexing 
         * actually starts at 0, instead of 1. So in the example above, the 
         * tring “Ignatius” is the 0 postion of the index, the number 42 is 
         * in the 1 position, so on.
         */
         
// 5. Object //

    /**
     * A complex data type that is used to store data, but this data is usually
     * related to a single (you guessed it) object. Similar to arrays in that
     * they are declared like any variable, but instead of brackets, they are
     * initialized with curly braces ({ })
     */
     
     // dunce variable declared and initialized as an Object
     var dunce = {};
     
     /**
      * Instead of values being stored within an index like an array, values 
      * within objects are stored at (important to note AT and not AS) keys.
      */
      
      /** Object named dunce is declared, initialized by curly braces holds
       * values with key/value pairs, including string, number, 
       * and boolean values
       */
       
      var dunce = {
          name: "Ignatius",
          age: 42,
          realPerson: false
      }

// 6. Function //

    /**
     * A function is a reusable block of code that takes in inputs, processes 
     * those inputs, and then returns a new data value. There are four 
     * components to a function declaration:
     *      1. Name of the function
     *      2. Parameter
     *      3. Function body (where the reusable block of code runs
     *      4. Return statement
     */
     
     /**
      * This is declaring a function named exampleFunction that takes in an
      * example parameter and then executes code within the function body and 
      * returns the exampleParameter.
      */
     function exampleFunction(exampleParamater) {
         // this area within the brackets is the funciton body 
         
         // example return statement below
         return exampleParamater
     }
      
      /** Here's a more applicable function example. This function named 
       * plusOne takes any value and adds 1. This includes strings, it will
       * just add 1 to the end of any string.
       */

      function plusOne(value) {
          
          var newValue = value + 1;
          return newValue;
      } 
      // will print the number 3 (the value of 2 + 1)
      console.log(plusOne(2))
      // will print one1 to the console (one + 1)
      console.log(plusOne("one"));
     
// 7. Undefined //

    /**
     * A variable is considered “undefined” when it has not been assigned
     * any value.
     */
     
     var future;
     // will print undefined to the console since the variable future has no value
     console.log(future);
     
     future = "bright";
     // will print bright to the console now that future is assigned with "bright"
     console.log(future);
     
// 8. Null //

    /**
     * Null is a value that doesn’t exist. This is different from
     * undefined because we actually have to assign null to a variable whereas 
     * a variable that returns undefined has been declared, but just hasn’t 
     * been assigned anything.
     */
     
    var favNumber;
    // will print undefined to the console
    console.log(favNumber);
    // assigning the value of null to the variable favNumber
    favNumber = null;
    // will print null to the console
    console.log(favNumber);
    
// 9. NaN //

    /**
     * Is a property with the value of “Not-A-Number”. You can use things like 
     * isNaN() function to check to see if your value or variable contaning a 
     * value is a number or not
     */
    
    // will return false
    isNaN(42);
    // will return true
    isNaN("Ignatius")
    // will return true
    var age = "forty-two";
    isNaN(age);
    
// 10. Infinity and -Infinity //

    /**
     * Infinity is a numeric value that represents positive infinity. 
     * Conversely, -Infinity is numeric value that represents negative
     * infinity. We can use Infinity to make numeric values into infinity 
     * and, if we divide by infinity, make them equal zero.
     */
    
    // will return Infinity 
    console.log(2 + Infinity);
    // will return 0
    console.log(1000/Infinity);
    
// 11. The difference between primitive/simple and complex data types //

    /**
     * The difference is relatively simple. Primitive or simple data types 
     * cannot be changed. They are the fundamental building blocks of 
     * javascript. Complex data types are built with these primitive data 
     * types and can be changed by making changes to the building blocks 
     * inside of them. In other words, they are a collection of these 
     * primitive data types.
     */
     
// 12. By Copy vs. By Reference

    /**
     * 
     * 
     */






     
     

     

    

    

  