// link: https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
// Write two methods:

// function encrypt(text, n)
// function decrypt(encryptedText, n)
// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.

// This kata is part of the Simple Encryption Series:
// Simple Encryption #1 - Alternating Split
// Simple Encryption #2 - Index-Difference
// Simple Encryption #3 - Turn The Bits Around
// Simple Encryption #4 - Qwerty


// My Solution:

function encrypt(text, n) {

  //   nullEmptyTest(text,n);
    if ( text === null ) {
      return null;
    } else if ( n <= 0 || text.length === 0 ) {
      return text;
    }
    
    var newString = text;
    //First loop controls the number of times the encryption should run (n)
    for (var j = 0 ; n > j ; j++) {
      //One variable to hold first half, second variable for second half
      var everySecondLetter = [];
      var remainingLetters = [];
      //This loop actually shifts the letters into newString. 
      for (var i = 0 ; newString.length > i ; i=i+2) {
        //Every even letter pushed to everySecondLetter array
        everySecondLetter.push(newString[i+1]);
        //Every odd letter pushed to remainingLetters array
        remainingLetters.push(newString[i]);
      }
      //Those two arrays are joined and moved to newString
      newString = everySecondLetter.join('') + remainingLetters.join('');
    }
    return newString;
  }
  
  function decrypt(encryptedText, n) {
  //   nullEmptyTest(encryptedText, n);
    if ( encryptedText === null ) {
      return null;
    } else if ( n <= 0 || encryptedText.length === 0 ) {
      return encryptedText;
    }
    
    var newString = encryptedText; 
    //find the halfway point of the encrypted string
    var half = Math.trunc(encryptedText.length/2)
    //First loop controls the number of times the encryption should run (n)
    for (var j = 0 ; n > j ; j++){
      //Save first and second half of entire string into their own seperate variable
      var firstHalf = newString.slice(0, half);
      var secondHalf = newString.slice(half,);
      //Temporary string to hold pushed letteers
      var tempString = [];
      for (var i = 0 ; i < secondHalf.length ; i++) {
        //push a letter from teh second half and a letter from the first half to tempString
        tempString.push(secondHalf[i]);
        tempString.push(firstHalf[i]);
      }
      //join all the characters in tempString and push to newString. 
      newString = tempString.join('');
    }
    return newString;
    
  }
  
  //I tried to put the null test into a seperate function but this did not do well with the null values. I'm not sure why. 
  // function nullEmptyTest(e,n) {
  //   if ( e === null ) {
  //     return null;
  //   } else if ( n <= 0 || e.length === 0 ) {
  //     return e;
  //   }
  // }