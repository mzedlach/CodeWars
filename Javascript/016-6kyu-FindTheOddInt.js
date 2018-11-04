// link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//My Solution:
function findOdd(A) {
  //Sort array from lowest to highest number
  A.sort(function(a, b){return a-b});
  //While there are actually numbers in array A
  while (A.length > 0) {
    //If the first numebr is equal to second number, take them out. 
    if (A[0] == A[1]) {
      A.splice(0,2);
    // Otherwise, they are different, return the first one.
    } else {
    return A[0];
    }
  }
}