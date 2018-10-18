// link: https://www.codewars.com/kata/5544c7a5cb454edb3c000047 

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note: The ball can only be seen if the height of the rebounding ball is stricty greater than the window parameter.

// Example:

// h = 3, bounce = 0.66, window = 1.5, result is 3

// h = 3, bounce = 1, window = 1.5, result is -1 (Condition 2) not fulfilled).


function bouncingBall(h,  bounce,  window) {

  // If all conditions are met for a valid experiment
  if ( h > 0 && bounce > 0 && bounce < 1 && window < h) {
  //bounceSighting set to 1 to account for first drop. 
    var bounceSighting = 1;
    //After this first drop, ball will be at 2/3 of original height coming back up
    h = h*bounce;
    
    //While this bounce back height is higher than the window
    while (h > window) {
      // If it's equal to the window only add one more to bounceSighting;
      if  (h === window) {
        return bounceSighting+1;
      }
      // Otherwise, it will be higher than the window. Add 2 to bounceSighting and decrease bouce by 2/3
      h = h*bounce;
      bounceSighting = bounceSighting+2;
    }
    return bounceSighting;
  // Otherwise all conditions are not met, return -1. 
  } else {
  return -1;
  }
}
