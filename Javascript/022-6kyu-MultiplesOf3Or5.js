// link: https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of ProjectEuler.net


function solution(number){
  
  var sum = 0;
  //Variables to hold how many times 'number' is divisible by 3 and 5
  var threes = Math.trunc((number-1)/3);
  var fives = Math.trunc((number-1)/5);

  //Sum increases by threes*3. Three decreases by one integer.
  while ( threes > 0 ) {
    sum = sum + (threes*3);
    threes = threes - 1;
  }
  
  //Sum increases by fives*5
  //Unless this fives*5 is divisible by 3, then it has already been accounted for. 
  //Fives decreases by one integer.
  while ( fives > 0 ) {
    if ((fives*5)%3 == 0) {
      fives = fives - 1;
    } else {
      sum = sum + (fives*5);
      fives = fives - 1;
    }
  }
  return sum;
    
}