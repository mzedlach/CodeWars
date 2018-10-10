// link: https://www.codewars.com/kata/square-every-digit/train/javascript

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//My Solution: 

function squareDigits(num){
  // split number into an array of string digits
  var newArr = num.toString().split('');
  // Holder array for squared digits
  var squaredArr = [];
  
  // iterate through newArr, squaring one digit at a time and adding it to squaredArr
  for (var i = 0 ; i < newArr.length ; i++) {
    var squared = Math.pow(newArr[i], 2);
    squaredArr.push(squared);
  }
  // Join list of string digits in squaredArr and change it back into an integer. 
  return parseInt(squaredArr.join(''));
}