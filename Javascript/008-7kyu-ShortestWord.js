// linke: https://www.codewars.com/kata/shortest-word/train/javascript 

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  //split sentence into array of words
  var sArray = s.split(' ');
  //set smallest word value to some obscenely large number
  var shortest = 100; 
  
  //Loop through array. Test if length of each word is short. If it is, set 'shortest' variable to that smaller value. 
  for (var i = 0 ; i < sArray.length ; i++) {
    if (sArray[i].length < shortest) {
    shortest = sArray[i].length;
    }
  }
  return shortest;
}