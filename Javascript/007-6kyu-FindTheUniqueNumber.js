// linke: https://www.codewars.com/kata/find-the-unique-number-1/train/javascript 

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


function findUniq(arr) {
  //filtered array is equal to input array so that there is somethign to compare in the .filter funtion
  var filtered = arr; 

  //As long as there is not just ONE value in the filtered array, this function will continue filtering
  while (filtered.length !== 1) {
    filtered = arr.filter(function(el) {
      // filtered becomes all elements that do not match the one being filtered. 
      return el !== filtered[0]; 
    });
  };
  return filtered[0];
};

