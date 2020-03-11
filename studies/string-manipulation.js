/**
* STRING-MANIPULATION:
* 0. String manipulation is just that, manipulating a string to appear how
* we want it to. A good analogy one might use for string manipulation is an
* uncut diamond or gem. The uncut or unfished gemstone is what we want, but
* it needs some cleaning up and some tools to make it really beautiful. A lot of times
* we can't control the data we're being given, so string manipulation gives
* us the opportunity to clean our strings up and make them useable.
* 
*/

// 1. String manipulation with operators //

    /**
     * As we discussed in our operators section, operators allow us to manipulate
     * or change our data, whether it's changing a number or the value inside
     * a container like a variable.
     * 
     * Generally speaking, most operators are more ideal when it comes to
     * building numeric expressions, but we can actually use a few operators when it 
     * comes to string manipulation.
     * 
     * The two main ones are the addition operator (+) and the assignment 
     * operators (=). However, it's important to note that when we're 
     * manipulating strings, the addition operator is known as the concatenation
     * operator instead of simply "addition". Let's get into what concatenation 
     * even means.
     */
     
        /**
         * So let's say we have two variables, one named firstName and one named
         * lastName with the values of a string.
         */
         
         var firstName = "George";
         var lastName = "Washington";
         
         /**
          * We want to create a variable of fullName, so we could just re-type
          * George and Washington with a space, but why not just let our 
          * concatenation operator (+) do it for us?
          */
          
          var fullName = firstName + lastName;
          console.log(fullName); // will print GeorgeWashington to the console
          
          /**
           * Well that does most of the work for us, but as you can see in the 
           * console.log, we're actually printing the name without any spaces.
           * How can we fix this? By using more string concatenation! Simply
           * "add" a string of a single space.
           */
           
           fullName = firstName + " " + lastName;
           console.log(fullName); // will print George Washington to the console
           
    /**
     * So we now know that the addition operator can concatenate strings for us,
     * but paired with the assignemnt operator, we can actually make this process
     * even simpler.
     */ 
     
        /**
         * Let's create a variable that will say hello to whatever the name
         * of whoever logs in to our program.
         */
         
         var greeting = "Hello ";
         
         /** Now we could create another variable like namedGreeting that will
          * concatenate the greeting variable and a firstName variable, but why
          * not just use our perfectly good greeting variable?
          */
          
          var name = "Dave";
          
          greeting += name;
          
          console.log(greeting); // will print "Hello Dave" to the console
          
          /**
           * Here we're sinply adding the string of "Dave" to the end of our
           * "Hello " string, allowing us to update the value of greeting
           * without having to create another variable to concatenate two other
           * variables.
           */
           
           
     
     

// 2. String manipulation with string methods //

    /**
     * String manipulation can be done with operators, but the big way we change 
     * strings is by using native string methods within Javascript. There are 
     * a lot of different string methods, so let's get started by building 
     * one string that we will manipulate throughout our discussion.
     */
        // creating stringEx and assigning it the value of "hello"
        var stringEx = "hello";
        
        /** String Length - Like arrays, strings have a length property that we
         * can use in building expressions or simply if we want to figure out
         * the length of an input string.
         */
         
         console.log(stringEx.length); // will print the number 5 to the console
         
         /**
          * Finding Strings Inside Strings - so our stringEx of "hello" is a
          * string, but each letter of "hello", if isolated, is also a string
          * as well. We can use a few methods to locate or find those strings
          * 
          *     indexOf(char);
          *     lastIndexOf(char);
          *     search(char);
          */
          
            // indexOf() - finds the index of an input character inside your given string
            
                // will print 4 to the console since the letter "o" is at the index of 4
                console.log(stringEx.indexOf("o"));
                
                // Important to note that if the character is not in the string, will return -1
                
                console.log(stringEx.indexOf("z")); // will print -1 to console
                
            // lastIndexOf() - finds the last index of an input character
            
                // will print 3 to the console since that's the last occurance of l
                
                console.log(stringEx.lastIndexOf("l"));
                
                // like indexOf(), will return -1 if character is not found
                
                console.log(stringEx.lastIndexOf("z")); // prints -1
                
            // search() - similar to indexOf(), search() will look for a character and return the location
                
                // will print the number 2, because "llo" starts at the index of 2
                console.log(stringEx.search("llo"));
                
        /**
         * Extracting Parts of Strings - In our seaching methods above, we were 
         * only returning the index of a specific segment. We can actually extract
         * parts of a given string by using the following methods:
         * 
         *      slice(start, end)
         *      substring(start, end)
         *      sustr(start, length)
         * 
         * You'll notice that all three of these include parameters to tell the
         * computer to start at a specifc place within the string and end somewhere
         * as well. It's important to note that only start is truly "required"
         * for these methods to work because even if we don't include an ending
         * condition, Javascript will just keep all the remaining characters.
         */
         
            // slice() - "slices off" a segemnt of a string based on the start and end
                
                // will print "llo" to console since an end condition is not required
                console.log(stringEx.slice(2)); 
                
                // will print "ll" to the console since our end condition is 3
                console.log(stringEx.slice(2,3));
                
                // we can also use negative numbers as well to count backwards from the end
                // will print he to the console since those are the remaining characters
                console.log(stringEx.slice(-3));
                
            // substring() - similar to slice, but cannot accept negative numbers 
            
                // will print "ello" to the console
                console.log(stringEx.substr(1))
                
            // substr() - similar to slice, but uses the length as the last parameter instead of end index
                // will print "el" to the console
                console.log(stringEx.substr(1,2));
                
        /**
         * Replacing Parts of Strings - sometimes we may want to replace something
         * in a string with a different string. The replace() method allows us to do that.
         * Here's what the replace method looks like and the parameters it takes:
         * 
         *      replace(string being replaced, replacement string)
         */ 
         
            // will print goodbye to the console since we're replacing hello
                console.log(stringEx.replace("hello", "goodbye"));
                
        /**
         * Converting to Upper and Lower Case - We can use these methods to update
         * and modify our strings to the correct case:
         *      
         *      toUpperCase();
         *      toLowerCase();
         */ 
         
            /**
             * With toUpperCase() it's important to know that if we don't put
             * anything in the parentheses, the method will capitalize all
             * characters within the string.
             */
             
             // will print HELLO to the console
             console.log(stringEx.toUpperCase());
             
             /** Similarly, toLowerCase(), will also update all characters.
              * Since "hello" is already in lowercase, let's create a new variable
              * that will change
              */
              
              let allCaps = "ALLCAPS"
              
              // will print the string of "allcaps" to the console
              console.log(allCaps.toLowerCase());
             
        /** 
         * Concatenation - we've already talked about how we can concatenate strings
         * using the concatenation (+) operator, but there's also a method we 
         * can use when we want to concatenate strings:
         * 
         *      firstString.concat(" ", secondString)
         */
         
            /**
             * So we already have our stringEx, which is a string saying hello.
             * Let's do what we did earlier, but using the concat method.
             */
                
                // will print the string of "hello dave" to the console
                console.log(stringEx.concat(" ", "dave"));
                
        /** 
         * Trimming - Sometimes our strings have unecessary spaces (also known
         * as "whitespace") at the end or the beginning of them. We can use the
         * trim method to get rid of those spaces:
         * 
         *      string.trim();
         */
         
            /** Since our strinEx variable has no uneccesary spaces, let's create
             * a new variable with a space at the beginning and end.
             */
             
                var stringEx2 = " hello ";
                
                // to trim, just string the .trim method at the end
                
                console.log(stringEx2.trim());
             
    
                
            
            
            