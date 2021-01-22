/**
 * The TryCatchPop file adds integer added by the 
 * user to the stack array and it pops it off the stack. It also checks
 * whether the stack is empty or not and doesn't crash.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
// Importing the class WajdStack from another file
const WajdStack3 = require("./WajdStack3");

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// Declaring stack by using the JacobStack class
let stack = new WajdStack3();

// Declaring variables used:
let sizeStack = 0;
let intAdded = 0;
let counter = 0;
let counter2 = 0;
let popNumber = 0;

// Try Catch Statement:
try {
  
  // Input / Process / Output
  
  // Getting size of the stack:
  sizeStack = prompt(`Enter the size of the stack: `);
    
  // Checking if entered size is an integer:
  if (isNaN(sizeStack) == true) {
    throw "ERROR: Invalid Input";
  } else {
    // Checking if entered size is valid:
    if (sizeStack == 0) {
      console.log(`You can't have a stack size 0!`);
    } else {
      // Entering a do/while loop to add integers into the stack:
      do {
        // Getting an integer to add from user:
        intAdded = prompt(`Enter a number to add to the stack: `);
        // Checking if entered number is an integer:
        if (isNaN(intAdded) == true) {
           throw "ERROR: Invalid Input";
        } else {
          // Adding one to counter each time:
          counter = counter + 1;
          // pushing the integer inputted to the stack:
          stack.push(intAdded);
        }
      } while (counter != sizeStack);
    }
      // Asking users what they  want to do with the stack.
      // Pop, or Peek top value, or clear stack:
      // Asking the user whether or not they want to pop off integers from stack:
      console.log(``);
      console.log(`What do you want to do with the stack?`);
      console.log(`Do you want to pop off top value? Get the top value or clear stack?`);
      console.log(`Valid entries are 'pop', 'peek', 'clear'`);
      let userDecision = prompt(``);
      
      // User decided to peek top value:
      if (userDecision == `peek`) {
        console.log(`The top number is ${stack.peek()}`);
        console.log(``);
      
      // User decided to pop off numbers from stack:
      } else if (userDecision == `pop`) {
        popNumber = (`How many times do you want to pop integers off stack? `);
          // Try Catch Statement for catching if stack is empty:
          try {
            // Entering a do/while loop to pop off numbers from stack:
            do {
              // Popping off the first element in the stack and printing to user:
              console.log(``);
              console.log(`The popped number is ${stack.pop1()}`);
              // Printing array list stack the user created:
              console.log(``);
              console.log(`The stack after popping off the current top integer: `);
              console.log(stack.list());
              //  Adding one to counter2 each time:
              counter2 = counter2 + 1;
            } while (counter2 != popNumber);
          // Error catch null value passed:
          } catch (e) {
            console.log(`ERROR. Stack is empty!`);
          }
      // User decided to clear stack: 
      } else if (userDecision == `clear`) {
        stack.clear();
        console.log(stack.list());
        console.log(`The stack is cleared!`);
      }
    }
  // Error Catch Statement:
} catch(err) {
    console.log (`ERROR`);
}
