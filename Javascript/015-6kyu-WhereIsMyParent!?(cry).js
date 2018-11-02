//My solution 
function findChildren(dancingBrigade){
  return dancingBrigade
    .split('')
    .sort(function (a, b) {
      return a.localeCompare(b, 'en-US-u-kf-upper')
    })
    .join('');
};
// Split the string into an array, then sort 
// alphabetically with uppcase taking precedence over lowercase, join array
// This is the shortest and most satisfing bit I've written.
// I'm sure I'm going to submit this and someone will have done it even shorter. 