// link: https://www.codewars.com/kata/human-readable-time/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

//My Solution

function humanReadable(seconds) {
  //Array to hold the generated times
  var time = ["00",":","00",":","00"];
  
  //Three cases to test. First is if there are only seconds
  if (seconds < 60) {
    lessThanTen(seconds, 4); 
    
  //Second scenario is if there are enough seconds for minutes
  } else if ( seconds < 3599) {
    var minutes = Math.trunc(seconds/60);
    var seconds = seconds-(minutes*60);
    lessThanTen(minutes, 2); 
    lessThanTen(seconds, 4); 
    
  //Third scenario is if there are enough seconds for hours
  } else {
    var hours = Math.trunc(seconds/3600);
    var minutes = Math.trunc((seconds-(hours*3600))/60);
    var seconds = seconds-(minutes*60+hours*3600);
    lessThanTen(hours, 0);
    lessThanTen(minutes, 2); 
    lessThanTen(seconds, 4); 
  }
  
  //Function to check if seconds, minutes, or hours value are less than ten.
  function lessThanTen(value, position) {
  //If value is less than ten, have to add 0 in front of that value to the array
    if (value < 10) {
      time[position] = "0" + value;
      //Otherwise, there are two digits and those can be assigned to the corresponding position in the time array. 
      } else {
      time[position] = value;
      }
    }
  //Return time array as a string 
  return time.join('');
}