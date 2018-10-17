// link: https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript 

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


//My Solution
function toCamelCase(str){
  //Split string at all values that are not alphabetical
  var splitString = str.split(/[^A-Za-z]/);
  //Create array that holds converted cases, set equal to first word in array
  var convertedArray = [splitString[0]];
  
  //For all words in the split string. 
  for (var i = 1 ; i < splitString.length ; i++) {
    //Set first letter to uppercase
    var firstLetter = splitString[i][0].toUpperCase();
    //Set remaining letters to lowercase
    var remainingLetters = splitString[i].substring(1,(splitString[i].length)).toLowerCase();
    //Add these to 'convertedArray'
    convertedArray.push(firstLetter, remainingLetters);
  };
  //Return 'converted Array' elements all joined. 
  return convertedArray.join('');
};