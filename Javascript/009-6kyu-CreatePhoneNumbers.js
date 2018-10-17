// link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript 

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//My Solution
//Retruned string based on position value of integers in array.
function createPhoneNumber(numbers){
  return "(" + numbers[0] + numbers[1] + numbers[2] + ") " + 
  numbers[3] + numbers[4] + numbers[5] + 
  "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}