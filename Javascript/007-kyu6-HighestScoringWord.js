// link: https://www.codewars.com/kata/highest-scoring-word/train/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//My Solution
function high(x){
  //Create array with individual words
  var sentenceArr = x.split(' ');
  //Variable holder for largest score and the word with largest score. 
  var largestScore = 0; 
  var largestScoreWord = ''; 
  
  for (var i = 0 ; i < sentenceArr.length ; i++) {
    var wordScore = 0 ;
    //Take the first word in the array
    var oneWord = sentenceArr[i]
  
    for (var j = 0 ; j < oneWord.length ; j++) {
    // Set wordScore to the alphabetical value one letter in that word. Iterate through whole word for total sum
      wordScore = wordScore + oneWord.charCodeAt(j)-96 ;
    }
    //If calculated sum is larger than what is in largestScore...
    if (wordScore > largestScore) {
    , //Save that new word in largestScoreWord
      largestScoreWord = sentenceArr[i];
      //Save new largest score in largestScore. 
      largestScore = wordScore; 
    }
  }
  //Return the largest word that has been kept track of. 
  return largestScoreWord;
}