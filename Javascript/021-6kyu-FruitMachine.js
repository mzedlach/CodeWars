// link: https://www.codewars.com/kata/fruit-machine/train/javascript/5be53f61535c5597550000d0 

//Please see full instructions in link above. 
// Task
//  	You will be given three reels of different images and told at which index the reels stop. From this information your job is to return the score of the resulted reels.
// Rules
//  	1. There are always exactly three reels
// 2. Each reel has 10 different items.
// 3. The three reel inputs may be different.
// 4. The spin array represents the index of where the reels finish.
// 5. The three spin inputs may be different
// 6. Three of the same is worth more than two of the same
// 7. Two of the same plus one "Wild" is double the score.
// 8. No matching items returns 0.


// My Solution

function fruit(reels, spins){
  //Item with corresponding point value arrays 
  var items = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']
  var pairItemsValue = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  
  //Variables to hold result string
  var item1 = reels[0][spins[0]];
  var item2 = reels[1][spins[1]];
  var item3 = reels[2][spins[2]];
  
  //Array of results and starting score of zero
  var spinResult = [item1, item2, item3];
  var score = 0;
  
  //If all three items are the same. Find the location of item and its point value
  //Return value times ten
  if (item1 === item2 && item2 === item3) { //
    return pairItemsValue[items.indexOf(item1)]*10;
  //Else, item-one is the same as item-two or item-three
  } else if (item1 === item2 || item1 === item3) {
    //If the pairs are both wild, find value of 'Wild' and set score 
    if (item1+item2 == 'WildWild' || item1+item3 == 'WildWild') {
      score = pairItemsValue[items.indexOf(item1)];
    //Otherwise the pairs are not both wild, run function wild test
    //Find the score of item-one, run function wild test
    } else {
      score = pairItemsValue[items.indexOf(item1)];
      wildTest(score);
    }
  //Item-two is the same as item-three
  //Find the score of item-two run wild test
  } else if (item2 === item3) {
    score = pairItemsValue[items.indexOf(item2)];
    wildTest(score);
  }  
  return score;

  //Test for presence of Wild card
  //If there is one score is doubled otherwise score
  //remains the same as where the function was called from
  function wildTest(s) {
    if (spinResult.indexOf('Wild') !== -1) {
      score = s*2;
      return score;
    };
  }
}

//For some reason, numbers and directly naming wild-Test in comments was interferring with 
//the code