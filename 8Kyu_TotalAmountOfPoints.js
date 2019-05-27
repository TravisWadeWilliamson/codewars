/***********************************/
// 8kyu Total Amount of Points
/***********************************/
// Input: An array of strings of scores
// Output: a score of the nums in the string based on some given rules
// Edge cases:
// Restrictions: 


// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


function points(games) {
    // your code here
    
    //create a variable to store results from matches
    let matchResult = 0;
    //loop over the values in the matches
  
  games.forEach(game =>{
    //assign firstNum to the first score and secondNum to the second score
    //turn that string into an integer
    const firstNum = parseInt(game[0]);
    const secondNum = parseInt(game[2]);
    
    //compare x and y and assign points based on the rules below
    //if x>y - 3 points, if x<y - 0 point, if x=y - 1 point
   
    if (firstNum > secondNum) {
      matchResult  += 3; 
    } else if(firstNum === secondNum) {
      matchResult += 1; 
  
    }     
    //add the values based on the output from the rules applied to the match comparison
   //output is the sum of the points of the 10 matches
      
  });

  console.log(matchResult)
  return matchResult
}


points(["3:1", "2:2", "0:1", '5:2', '1:3', '2:0',  '5:2', '1:3', '2:0'])
