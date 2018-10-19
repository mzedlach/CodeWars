// link: https://www.codewars.com/kata/simple-pig-latin/solutions/javascript 

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  // Split string into individual words
  var strArray = str.split(' ');
  //Holder for words converted into piglatin
  var pigLatinArray = []; 
  
  for (var i = 0 ; i < strArray.length ; i++) {
  //If the input word is punctuation, just push that to the pigLatinArray without altering it. 
    if (strArray[i] == '!' || strArray[i] == '?') {
      pigLatinArray.push(strArray[i]);
    //Otherwise, the input is a word that needs to be altered:
    } else {
    //Split the word int an array of letters
      var firstWord = strArray[i].split('');
      //Save the first letter in variable 'firstLetter'
      var firstLetter = firstWord[0];
      //Alter the array of letters by removing the first one. 
      firstWord.shift();
      //Add the first letter to the end of the array
      firstWord.push(firstLetter);
      //Add 'ay' to the end of the array
      firstWord.push('ay');
      //Join all the letters and push this pigLatin word into pigLatingArray
      pigLatinArray.push(firstWord.join(''));
    }
  }
  //Return the string of converted words
  return pigLatinArray.join(' ');
}





