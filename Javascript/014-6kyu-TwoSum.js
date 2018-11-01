// Link: https://www.codewars.com/kata/two-sum/train/javascript

// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: [index1, index2].

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

//My Solution
//I was going to use a "var j=0" for loop in a "var i = 0" for loop, but thought I woudl practice using .map() 
///This is the first time where the i/j solution would have actually been better! Ach! 

function twoSum(numbers, target) {
  for (var i = 0 ; i<numbers.length ; i++) {
  
    var tester = numbers[i]; 
    //Create an array of sum of numbers[i] + every value in array
    var numbersSumArray = numbers.map(value => value + tester);
    //Check for location of target in this summed array
    var targetTest = numbersSumArray.indexOf(target);
    
    //If target test is the same position as the tester position, keep going through loop
    if ( targetTest === i) {
      continue;
    //Otherwise, target found in different position than tester, return those positions
    }else if ( targetTest > -1) {
      return [i, targetTest];
    } 
  }
}
