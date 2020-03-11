/**
* FUNCTIONS:
* 0. Functions are a lot of things in Javascript, but the easiest way to think
* about them is as sub-programs, no matter how big or small. We use Javascript
* to build programs, and functions are the sub-programs that power the programs
* we build.
* 
* If data are the building blocks of our programs, a function is the action of
* putting those building blocks to work, whether it's building the foundation,
* installing a door, or fixing the roof. Functions act on our data.
* 
*/

// 1. The two phases to using functions //

    /**
     * The two phases of functions are naming the function and then 
     * calling that function somewhere in our code. Easily enough, we
     * can create a function by using the keyword "function", then using
     * whatever name we want.
     * 
     * So let's create a function named exampleFunction below.
     */ 
     
        function exampleFunction() {
            
            
        };
        
    /** You'll notice that in addtion to the function keyword and the name of
     * the function, we also have empty parentheses as well as open curly
     * braces. In the parentheses is where we put our parameters (more on those
     * below) and within the curly braces are where we put our funciton's 
     * "statments" or the code we want to execute within the code block.
     * So let's write exampleFunction again with these parts highlighted.
     */
     
        function exampleFunction(parameters) {
            
            /**
             * This is our code block of the 
             * exampleFunction
             */
        }
        
    /**
     * We create functions because there will likely be some kind of task
     * or operation we'll need to do routinely to our data. To do that, we
     * "call" our function by simply writing the name of the function and
     * then including the needed parameters in the parentheses. This is 
     * what it looks like:
     */
     
        exampleFunction("example parameter");
        
    /** 
     * Once that function call is complete, the function is "activated" and 
     * then runs over these input parameters.
     */

// 2. The difference between parameters and arguments //

    /**
     * So we've touched on what paramters are within the context of building
     * new functions, but it's important to think of parameters as only
     * placeholders for input values. In theory, we really have no way
     * of controlling what data gets passed in, even if we explicitly name
     * a paramter "array" or "number". It informs us how the function should 
     * work, but does not dicatate how we have to use it. That responsiblilty
     * is entrusted to the code block within the function.
     * 
     * So with that out of the way, if parameters are only placeholders, what
     * do we call the actual values we use in our functions? Those are called
     * arguements. Meaning that when we call a function, we're calling it with
     * arguements, not paramters.
     * 
     * I've built a function named add below that gives you an idea of 
     * what this looks like in application.
     * 
     */
     
     // decalring a function named add with paramters of num1 and num2
     function add(num1, num2) {
         // this function will return the result of num1 + num2
         return num1 + num2
     }
     
     /** now that the function is active, we can pass in the ARGUMENTS
      * of 1 and 2 to the add function to activate it.
      */
      
      // will return the number 3
     add(1,2);
     
// 3. Syntax when naming a function

    /**
     * We've more or less covered the syntax of naming functions, but let's 
     * give a quick review. Naming a function goes like this:
     *  
     *  1. Use the function key word.
     *  2. Name your function with the same kind of camelCase syntax as variables.
     *  3. Open parentheses and name your parameters, seperated by a comma. Close
     *      your parentheses.
     *  4. Create a pair of curly braces and build your function body within
     *      the braces.
     *  5. Add your trusty semi-colon outside of the curly braces.
     * 
     */
     
// 4. Assigning a function to a variable

    /**
     * So we just covered creating a standalone function, but we can also
     * assign functions to standalone variables, which are called function
     * expressions.
     * 
     * The benefit of this is that we can update whatever variable we're using 
     * for our function with a new or modified function if we so choose. In
     * the exampleFunction above, the name exampleFunction is now reseved 
     * for that specific operation. In function expressions, we're only really
     * tied to the name, not the function body or what the function does.
     * 
     */
     
     /**
      * In the below function expression, we're assigning the myFunction 
      * variable the value of a function that returns the result of num1 - num2.
      * But then we decide we want to re-assign myFunction the value of 
      * the result of adding num1 and num2. That was easy!
      */
     
     let myFunction = function(num1, num2) {
         
         return num1 - num2
         
     }
     
     // re-assigning the value of myFunction
     
     myFunction = function(num1, num2) {
         
         return num1 + num2
     }
     
// 5. Specifiying inputs and outputs

    /**
     * As we mentioned above, even though we can give paramters names like
     * string or array, we really don't have absolute control over which data type
     * gets passed in. 
     * 
     * Thus, it's really important in our documentation of our funcitons
     * that we specifiy what our functions should take in and also what they 
     * should return. In fact, it's also a good practice to build steps in our
     * code block that actually return something if the data we're trying to pass
     * in isn't what we actually need.
     */
     
     /**
     * In the example below, we've created a function that checks to see if 
     * the input value is an array. If it is, we'll return the value of true,
     * if it's not, we'll return false.
     * 
     */
     
     
     function isArray(array) {
         if(Array.isArray(array)) {
             return true;
         } else return false;
     }
     
     isArray([1,2]); // will return true
     isArray("1"); // will return false
     
// 6. Functions and Scopes

    /**
     * Functions, like variables or conditional statements, are impacted
     * by whatever scope they are created or assigned in. However, a lot of that
     * has to do where and how the function is created. We've covered named
     * functions and function expressions, so let's break down the differences
     * now.
     */
     
     /** Named functions are hoisted to the top of whatever scope their declared
      * in. So in the example namedFunction below, calling namedFunction before
      * even building the function works because the function is hoisted to the
      * top. Sometimes this can be useful when we know the data we want to pass
      * into the function as arguments and we know the final result, but we just
      * don't know the exact way we're going to build it.
      */
     
     // will return string of Hello World
     namedFunction("Hello ", "World");
     
     function namedFunction(string, string) {
         return string + string;
     }
     
     /** Function expressions, however, are not hoisted. Thus, since our code
      * follows a standard top down flow, calling a function expression here
      * before we've assigned it the value of our function, will result in a
      * reference error.
      */
      
     // will return reference error because functionExpression is not defined
     functionExpression("Hello ", "World");
     
     let functionExpression = function(string1, string2) {
         return string1 + string2
     }
     
// 7. Closures

    /**
     * As we mentioned in the Functions and Scopes section, functions are also
     * restrained to the scope their created in, but they can access variables
     * or data that are created in their parent scope. Functions that access 
     * variables from the parent scope are called closures. 
     * 
     */
     
     // defining variable named parentVar that is part of this pages Global Scope
     let parentVar = 2;
     
     /**
      * In the below function, multiply is a closure because the variable 
      * multiply inside the multiply function is accessing our parentVar outside
      * the function.
      */
      
     function multiply(number) {
         var multiply = number * parentVar;
         return multiply
     }
     
     multiply(2); // will return the number 4
     
     
     
     