/**
* OPERATORS:
*   
*   0. Operators are what we use to act, or do something to our data. The string
*       "string" is just a string until we use the assinment operator (=) to
*       assign it to a variable. 1 is just a lonely number until we use the
*       multiplication operator (*) to multiply it by 10.
* 
*       In addition to acting on our data we can use comparison and logical
*       operators to analyze or make decisions off of our data. Computers are
*       powerful, but they don't know what we want them to do, so we use 
*       operators to help them do what we want.
* 
*/

// 1. Assignment Operators //

    /**
     * The assignment operator (the equals or "=" symbol serves the purpose
     * of assigning variables within our program a value, whether that be a 
     * string, number, boolean, arrays, objects, functions, etc. It is the 
     * symbol that both makes a variable a storage container, but also has 
     * (depending on the variable keyword you're using) the power to change 
     * what that variable is equal to. You can also use aritmetic operators 
     * in conjunction with the assignemnt operator to change the value of the
     * variable. As you'll see in the below examples, we'll assign the variables
     * of x and y the values of 1 and 2, respectively. But as we introduce the
     * other assignment operators, you'll see how the numeric values change 
     * based off of whatever aritmitic operators we use.
     * 
     */
     
     // Assignment Operator
        
        var x = 1;
        var y = 2;
        
    // Addition Assignment (+=)
    
    
        
        // assigning x to the value of x + y (1 + 2), equaling 3
        x += y;
    
    // Subtraction assignment (-=)
        
        // assigning x to the value of x - y (3 - 2), equaling 1
        x -= y;
        
    // Multiplication assignemnt (*=)
        
        // assigning x to the value of x * y (1 * 2), equaling 2
        
        x *= y;
        
    // Division assignment (/=)
    
        // assigning x to the value x / y (2 / 2), equaling 1
        
        x /= y;
        
    // Remainder assignemnt (%=)
    
        // assigning y to the remainder of y divided by 1 (2 % 1), which will equal 0
        y %= x;
        
        
     
// 2. Aritmetic Operators //

    /**
     * We've already introduced the variety of aritmetic operators that are
     * available to us when we want to assign a new value to a variable, but 
     * we can also use aritmetic operators in simple expressions or to figure 
     * out numberic values in our expressions. And in some cases we can even
     * use them in less obvious situations, like when we want to combine or 
     * concatenate strings.
     */
     
     // Addition (+) - produces the sum of numbers and concatenates strings
        
        // will print the value of 2 to the console
        console.log(1 + 1);
        
        // will print helloworld to the console
        console.log("Hello" + "World");
        
        // if we add a string of a space to the above example, we'll get Hello World
        console.log("Hello" + " " + "World")
        
    // Subtraction (-) - produces the difference of two numeric values
    
        // will print the number 1 to the console
        console.log(3-2);
        
        // will print the number -1 to the console
        console.log(2-3);
        
    // Division (/) - produces the quotient of two numbers
    
        // will print the numeric value of 2 to the console
        console.log(4/2);
        
        // will pring the numberic value of 1 to the console
        console.log(4/0);
        
    // Multiplication (*) - produces the product of two numbers
        
        // will print the number 16 to the console
        console.log(4*4);
        
        //will print the number 1 to the console
        console.log(0.25 * 4);
    
    // Remainder (%) - produces the remainder when one number is divided by another
    
        // will print the number 1 to the console
        console.log(26 % 5);
        
        /** 
         * The remainder operator can also help us in determining whether a 
         * number is odd or even by using the number 2 as our second number. 
         * If a number is even, the remainder will be 0. If a number is odd,
         * there will always be a remainder of 1.
         */
         
         // creating a function that checks to see if a given number is odd or even
         function oddOrEven (number) {
             // conditional statement that checks if the remainder is equal to 0
             if(number % 2 === 0) {
                 // will print Even! to the console if true
                 console.log("Even!")
            // conditional statement that checks if the remainder is equal to 1
             } else if (number % 2 === 1) {
                 // will print Odd! to the console if true
                 console.log("Odd!")
             }
         }
         
    // Increment (++) - prodcues the value of a variable when it's incremented
        
        // Initialzing the variable of number with the numeric value of 1
        var number1 = 1;
        // will print the number 2 (1 + 1) to the console
        console.log(number1++)
        
    
    // Decrement (--) - produces the value of a variable when it's decremented
    
        // Initialzing the variable of number2 with the numberic value of 2
        var number2 = 2;
        // will print the number 1 (2 - 1) to the console
        console.log(number2--);
        
        
     
// 3. Comparison Operators //

    /**
     * Comparison operators are used to compare variables or values in logical
     * statements. They're outputs are booleans so they're typical used in
     * control flow in conitional statements or using them to determine actions
     * in functions. For the following examples, we'll be using the variable 
     * of exValue, which is equal to 9
     */
     
     // declaring exValue, initizialing with the numeric value of 9
     var exValue = 9;
     
     // Equal to (==) - checks to see if an input is equal to the variable
     
        // will print true to the console
        console.log(exValue == 9);
        // will print false to the console
        console.log(exValue == 7);
     
        /**
        * The equal to comparison operator is somewhat loose in it's comparison,
        * meaning that if we compare the string of "9" to the exValue variable,
        * which is the number 9, we'll still get true, since Javascript still
        * sees 9 within the string. What won't return true is comparing the
        * number 9 to the string of "nine".
        */
      
        // will print true to the console
        console.log(exValue == "9");
        // will print false to the console
        console.log(exValue == "nine");
        
    // Equal value and equal type (aka strict comparison) (===)
    
        /** Like we just mentioned above, the equal to operator only checks to
         * see if the values are equal. The strict comparison operator checks
         * both the value and the data type, ensuring that the values being
         * compared are exactly the same.
         */
         
         // will now print false to the console, since "9" is a string
         console.log(exValue === "9");
         
         // will print true to the console, since 9 is a number
         console.log(exValue === 9);
         
    // Not equal (!=) - checks to see if the value is NOT equal to another
    
        // will now print false to the console since 9 is equal exValue
        console.log(exValue != 9);
        // will now print true, since 7 is not equal to exValue
        console.log(exValue != 7);
        
    // Not equal value or not equal type (!==)
    
        /** Essentially the inverse of the strick comparison operator, checking
         * to see if the values not equal in both value and type.
         */
         
         // will print false to the console
         console.log(exValue !== 9);
         
         //will print true to the console
         console.log(exValue !== "9");
         console.log(exValue !== 6);
         
    // Greater than (>) and less than (<)
        
        /** We can use the greater than and less than operators to compare two
         * values, whether that be two numbers or properties of values like
         * length or which string is higher in the alphabetical orders.
         */
         
         // will print true to the console since 9 is greater than 7
         console.log(exValue > 7);
         
         // will print false to the console since 7 is less than 9
         console.log(7 > exValue);
         
         // will print true to the console since 10 is greater than 9
         console.log(exValue < 10);
         
         // will print false to the console since 9 is greater than 8
         console.log(exValue < 8);
         
    // Greater than or equal to (>=) and less than or equal to (<=)
    
        /** So we know we can use the greater than or less than operators to
         * compare values, but what if both values are equal? By using the "or
         * equal to" symbol, we can ensure that the value we're comparing is
         * also included in our comparison.
         */
         
         // both will print false to the console since 9 isn't greater or less than 9
         console.log(exValue > 9);
         console.log(exValue < 9);
         
         // now will print true since 9 is included within the range
         console.log(exValue >= 9);
         console.log(exValue <= 9);
     
// 4. Logical Operators //

    /**
     * We use logical operators when we want to map out or determine the logic
     * between variables or values. There are three logical operators:
     *      
     *      && and
     *      || or
     *      ! not
     * 
     * We can also use logical operators to determine the control flow of 
     * conditional statements, but logical operators allow us to include a 
     * range of values or outcones instead of a single "if this is true or
     * false" statement. Let's keep our exValue variable around, but let's
     * add another variable named exValue2 that equals the number 10.
     */
     
     // declaring and initialzing the variable of exValue2 to the value of 10
     var exValue2 = 10;
     
     // && or "and" logical operator
        
        /** When we use this operator, we tell the code that this block should
         * only run if both conditions are true. If one condition is false, 
         * that code block will not run.
         */
         
         // will print true to the console since both conditions are true
         if(exValue > 7 && exValue2 < 12) {
             console.log(true)
         } else {
             console.log(false);
         }
         
         // will print false to the console since only one condition is true
         if(exValue > 7 && exValue2 > 12) {
             console.log(true)
         } else {
             console.log(false)
         }
         
    // || or "or" operator
    
        /** This operator will allow us to run a code black if only one condition
         * is true.
         */
         
         // will now print true to the console since exValue is greater than 7
         if(exValue > 7 || exValue2 > 12) {
             console.log(true) 
         } else console.log(false)
         
     
// 5. Unary operators (!, typeOf, -) //

    /**
     * There are a few different unary operators, but we're only going to focus
     * on three:
     * 
     *      ! or the Logical Not
     *      typeof
     *      - Unary negation
     */
     
        // ! or the Logical Not
        
            /** Also known as the bang operator, the (!) symbol essentially
             * gives us the inverse boolean if something is not true. 
             */
             
             // will print false to the console
             console.log(!true);
             // will print true to the console
             console.log(!false);
             
        // typeof
        
            /** The typeof operator helps us determine what data type a value or
             * input is. The output is returned in a string.
             */
             
             // will print number to the console, but without quotes
             console.log(typeof 2);
             
             // the variable of string is equal to a string as a "string"
             let string = typeof "this"
             
        // - Unary negation
        
            /** This operator simply converts whatever our value is to it's 
             * respective negative output.
             */
             
             // will print -9 to the console
             console.log(-exValue);
     
// 6. Ternary operator (a ? b : c)

    /**
     * This operator is very unique in that it takes three operands, which are
     * outlined in the example above with letters. Here's what they mean:
     * 
     *      a - a condition
     *      b - an expression that executes if condition is truthy
     *      c - an express that executes if the condition is falsy
     * 
     * Since the presidential election is just around the corner, let's use
     * a ternary operator to determine if someone is old enough to vote or 
     * not.
     * 
     */
     
     // declaring the variable of age, equal to the number 17
     var age = 17;
     
     // declaring the variable of canVote, initializing with the ternary operator
     var canVote = (age >= 18) ? "Cast Your Vote!" : "Wait a few more years!"
     
     // will print Wait a few more years since age is not greater than or equal to 18
     console.log(canVote);