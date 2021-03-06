// Link: https://www.codewars.com/kata/52e1476c8147a7547a000811/train/javascript

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.

//My solution, with external help:

function validate(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
  //Look ahead to see if there is at least one uppercase
  //One lowercase and one number. Make sure at least 6 
  //characters long
}