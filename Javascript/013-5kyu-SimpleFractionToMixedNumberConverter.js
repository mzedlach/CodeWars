// link: https://www.codewars.com/kata/556b85b433fb5e899200003f/train/javascript

// Task
// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.
// Note
// Make sure not to modify the input of your function in-place, it is a bad practice.

//My Solution
//This was super satisfying to finally get

function mixedFraction(s){
  //Split into array of two numbers
  var numbers = s.split('/');
  
  //If denominator of fraction is zero, throw error
  if (numbers[1] === '0') {
    throw "zero division error";
  //If numerator of fraction is zero, return 0
  } else if (numbers[0] === '0') {
    return '0';
  //If there is no remainder after division, just return evaluated string
  } else if (numbers[0]%numbers[1] == 0) {
    return Math.trunc(eval(s)).toString();
  } 

  //Test for negative sign in numberator and denominator
  function signTest() {
    var signFlag1 = (numbers[0].indexOf('-') !== -1); //true if there, false if not there
    var signFlag2 = (numbers[1].indexOf('-') !== -1);
    
    //If numerator and denominator are both negative, or both positive, return empty string
    if (signFlag1 === true && signFlag2 === true || signFlag1 === false && signFlag2 === false) {
      return '';
    //Otherwise, one of them is negative, return a negative sign
    } else {
      return '-';
    };
  };
  
  //Test for greatest common devisor using Euclidean algorithm
  function gcdTest(num1, num2) {
    while (num2 != 0) {
      var test = num2;
      num2 = num1%num2;
      num1 = test;
    }
    return num1;
  }
  
  //variable to hold '' for + and '-' for negative
  var posNeg = signTest();
  //numbers array holding positive integers of numerator and denominator
  var numbers = s.replace(/-/g,'').split('/');
  
  //Variables to hold values as indicated by variable name
  var wholeNum = Math.trunc(numbers[0]/numbers[1]);
  var numerator = numbers[0]-(Math.abs(wholeNum)*numbers[1]);
  var denominator = numbers[1];
  var gcd = gcdTest(numerator, denominator);

  //Fraction already in simplest form, with no whole number
  if (gcd == 1 && wholeNum == 0) {
    return (posNeg + '' + numerator + '/' + denominator);
  //Fraction already in simplest form, with a whole number
  } else if (gcd == 1 && wholeNum > 0 || wholeNum < 0) {
    return (posNeg + '' + wholeNum + ' ' + numerator + '/' + denominator);
  //Fraction not in simplest form, with no whole number
  } else if (gcd > 1 && wholeNum == 0) {
    return (posNeg + '' + (numerator/gcd) + '/' + (denominator/gcd));
  //Fraction not in simplest form, with a whole number
  } else {
    return (posNeg + '' + wholeNum + ' ' + (numerator/gcd) + '/' + (denominator/gcd));
  }
}