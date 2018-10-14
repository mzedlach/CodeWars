// link: https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// a being 1, b being 2, etc.

// As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

function alphabetPosition(text) {
  var charString = [];  
  
  for (var i = 0 ; i < text.length ; i ++) {
    //Get Dec value for letter value
    var charCodeVal = text.charCodeAt(i);
    //If value is capital, between 65 adn 90, subtract 64 and add to charString
    if (charCodeVal >= 65 && charCodeVal <= 90) {
      charString.push(charCodeVal-64);
      //Else, value is lowercase bwetween 97 and 122. Subtract 96 and add to charString
    } else if (charCodeVal >= 97 && charCodeVal <= 122 ) {
      charString.push(charCodeVal-96);
    }
  }
  // Return charString with a space betweeen all number values of alphabet. 
  return charString.join(' ');
}