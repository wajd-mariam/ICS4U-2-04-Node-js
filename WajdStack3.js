/**
 *  The WajdStack3 Class creates a stack, and methods to use 
 * by the PeekClear.js program.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
class WajdStack3 {
    
  // Constructors that defines stack array
  constructor() {
    this.stackArray = [];
  }
  // Addition method.
  push(add) {
    this.stackArray.push(add);
  }
  
  // Pop method.
  pop1() {
    if (this.stackArray.length < 1) {
      throw null;
    } else {
      this.poppedNumber = this.stackArray[this.stackArray.length - 1];
      this.stackArray.length = this.stackArray.length - 1;
      return this.poppedNumber;
    }
  }
  
  // Peek method.
  peek() {
    this.topNumber = this.stackArray[this.stackArray.length - 1];
    return this.topNumber;
  }
  
  // Clear method.
  clear() {
    this.stackArray.length = this.stackArray.length - this.stackArray.length;
  }
  // Returning method.
  list () {
    let currentCharacters = "";
    for (let character = 0; character < this.stackArray.length; character++) {
      currentCharacters = currentCharacters + this.stackArray[character] + `,`;
    }
    return currentCharacters;
  }
}

// Exporting the class
module.exports = WajdStack3;
