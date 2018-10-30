// link: https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Please note that using "encode" in Python is considered cheating.

//My solution: 
function rot13(message){

  for (var i = 0; i < message.length ; i++) {
  //value is position of string getting tested
    var value = message.charCodeAt(i);
    
    //If value is first half of alphabet, add 13
    if (value >=65 && value<=77 || value >=97 && value<=109) {
      value = value+13;
      //Cut string at correct area and insert new letter
      message = [message.slice(0,i), String.fromCharCode(value), message.slice(i+1)].join('');
    //Or value is second half of alphabet, subtract 13
    } else if (value >77 && value<=90 || value >109 && value<=122) {
      value = value-13;
      //Cut string at correct area and insert new letter
      message = [message.slice(0,i), String.fromCharCode(value), message.slice(i+1)].join('');
    //Otherwise, value is something besides a letter, just use that CharCode value
    } else {
      message = [message.slice(0,i), String.fromCharCode(value), message.slice(i+1)].join('');
    }
  }
  //Return converted string
  return message;
}