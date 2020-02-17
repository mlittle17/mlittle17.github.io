/**
* CONTROL-FLOW:
* 0. Control flow is, quite literally, how we control the flow of our programs
* to ensure that the program does what we intend it to do. Generally speaking,
* computer programs take in data and then do something with it. What that
* program does to the data largely depends on how we build the control flow
* within the program.
* 
* We build control flow by using what are called conditional statements that
* essentially ask one question that has two potential answers: true or false.
* As we've discussed previously, the values of true and false are boolean values.
* If a conditional statment is true, the code block within that statement will
* run. If not, it's completely possible that nothing will happen. However,
* where we also utilize control flow is in its' ability to do something else
* even if our first statement doesn't resolve to true. Meaning, if we think
* about a problem or a program enough, we can probably prepare for a variety of
* outcomes.
* 
*/

// 1. If //

    /**
     * As we mentioned above, if statements are the very first step in establishing
     * our control flow. Essentially, it's the very beginning of a decision tree.
     * For our example, let's just build a simple funciton that compares two
     * input numbers.
     */
     
     /** In the first iteration of this function, we use a conditional statement
      * that returns a string if num1 is greater than num2. Seems pretty simple,
      * right? Sure, but what if num2 is greater than num1? Right now, as we
      * see below, nothing will happen. That's where Else-if statements come in.
      */
     function compare(num1, num2) {
         if(num1 > num2) {
             return "The first number is greater than the second number"
         } 
     }
     
     compare(2,1); // will return "The first number is greater than the second number"
     compare(1,2); // nothing will happen
     
// 2. Else-if //

    /**
     * Else-if statments allow us to account for other possibilites with our
     * input data, so if the first if statement is false, we can tell our 
     * program to do something else. Since our compare function is already 
     * defined, let's just create a new function called compare2 that accounts
     * for the possibility of num2 being greater than num1
     */
     
     /** You'll notice that compare 2 is almost identical to compare for the first
      * few lines, but the difference now is that we now have an else if statement
      * that accounts for the possibility of num2 being greater than num1
      */
     function compare2(num1, num2) {
         if(num1 > num2) {
             return "The first number is greater than the second number"
         } else if (num2 > num1) {
             return "The second number is greater than the first"
         }
     }
     
     compare2(1,2) // will return "The second number is greater than the first"
     
     /** That should account for everything right? Well, probably. But what if
      * someone inputed the same number? Well, similarly to compare without the 
      * else if statement, nothing would happen. We don't have that possibility
      * built into our control flow. */
      
      compare2(2,2) // will return nothing
      
      /** This brings us to the last potential thing we can use in control flow,
       * esle statements */
     
// 3. Else //

    /**
     * Else statements are what we use in control flow when we've exhausted all
     * other potential outcomes (meaning all conditional statments have resloved to false)
     * within our program and we just want our program to do something. As we
     * mentioned in our example above neither compare nor compare2 account for 
     * the possibility of our two parameters being the same number. And while
     * it's a little annoying to have to account for this possibility, the good
     * news is that we don't even have to use a conditional statement! Again,
     * this is because else is our final option command. So let's build a 
     * final version of compare that accounts for all outcomes.
     */
     
     function finalCompare (num1, num2) {
         if(num1 > num2) {
             return "The first number is greater than the second number"
         } else if (num2 > num1) {
             return "The second number is greater than the first number"
         } else return "Hey, these are the same numbers!"
     }
     
     finalCompare(1, 2); // will return the second number is greater than the first
     finalCompare(2, 1); // will return the first number is greater than the second
     finalCompare(3, 3); // will return Hey, these are the same numbers!
     
     /**
      * Conceptually, control flow is pretty straight forward. However, by using
      * if statements, else-if statements, and else, we can build pretty 
      * sophisticated programs that account for a variety of input data as
      * oppossed to simply doing one or two things.
      * 
      * The challenge, of course, is just thinking ahead about what things your program
      * needs to account for so you can build the appropriate control flow.
      */
     
// 4. Switch //
    /**
     * Switch statements are another way we can utilize control flow in programs.
     * Instead of evaluating parameters, we evaluate one input expression and
     * then execute whatever code block matches the input expression.
     * 
     * Similarly to if statements, there is always a possibility that 
     * we don't account for all potential inputs, so we can use default at the
     * end of our switch statement (just like else) to ensure that something 
     * happens.
     */
     
     /**
     * I always have trouble remembering what day the trash comes so we can
     * use a switch statment that takes in the expression of the variable day
     * and then prints what we should do based on that expression.
     */
     
    let day = 'Saturday'// will print Need to wait till Tuesday to the console
    
    switch (day) {
        case 'Monday':
            console.log('Take the trash out tonight!');
        break;
        case 'Tuesday':
            console.log('Might have missed it')
        case 'Wednesday':
            console.log('Trash comes again on Friday');
        break;
        case 'Thursday':
            console.log('Take the trash out tonight!')
        break;
        case 'Friday':
            console.log('Might have missed it!')
        default:
            console.log('Need to wait till Tuesday');
}
