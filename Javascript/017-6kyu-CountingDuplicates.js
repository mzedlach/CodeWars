// link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//My Solution:

function duplicateCount(text){
  var text = text.toLowerCase();
  var duplicateCount = 0;

  //This approach removes letters piece by peice 
  //So, continue to run this loop until there are no values remaining in variable text 
  while (text.length > 0 ) {
    //To use variable in regular expression, must make new RegExp Object
    var re = new RegExp(text[0],"g");
    //Create new array which holds all of the matched duplicates
    var matchedArr = text.match(re);

    //If the lengths of matchedArr if larger than 1, there ARE duplicates. 
    if (matchedArr.length > 1) {
      //Increase counter by 1
      duplicateCount = duplicateCount + 1;
    }
    //remove all occurences of the letter just tested from text string. 
    text = text.replace(re, "");
  }
  return duplicateCount;
}
