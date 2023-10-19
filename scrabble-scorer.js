// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system.
const input = require("readline-sync");
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
const vowelBonusStructure = {
   3: ['A', 'E', 'I', 'O', 'U'],
   1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
};
function oldScrabbleScorer(word) {
   word = word.toUpperCase();
   let letterPoints = "";
   for (let i = 0; word.length; i++) {
     for (const pointValue in oldPointStructure) {
       if (oldPointStructure[pointValue].includes(word[i])) {
         letterPoints += `Points for '${word[i]}': ${pointValue}\n`
       }
     }
   }
   return letterPoints;
 }
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble!\nEnter a word:");
   return word;
};

//Define a function that takes a word as a parameter and returns a numerical score.
//Each letter within the word is worth 1 point.

function simpleScorer(word) {
   let simpleScore =0;
   for (let i=0; i<word.length; i++) {
      simpleScore = simpleScore +1
   }
   return simpleScore;
//   console.log("\nSimple Score Result:");
//   console.log(`The value for this word is ${simpleScore}.`);
   };

//Define a function that takes a word as a parameter and returns a score.
//Each vowel within the word is worth 3 points, and each consonant is worth 1 point.

function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let vowelPoints = 0 ;
     for (let i=0; i < word.length; i++) {
      for (const pointValue in vowelBonusStructure) {
         if (vowelBonusStructure[pointValue].includes(word[i])) {
            vowelPoints = vowelPoints + Number(pointValue);
         }
       }
   }
//   console.log("\nVowel Score Result:");
//   console.log("The value for this word is: " + vowelPoints);
return vowelPoints;
}
function scrabbleScorer() {
   //console.log("scrabbleScorer function called");
   transform(oldScrabbleScorer()); 
   let newScore = letterPoints;
   return newScore; 
}

let catchTheWord = initialPrompt();
//let scrabbleScorer = oldScrabbleScorer(catchTheWord);

const scoringAlgorithms = [
      {
         description: "Each letter is worth 1 point",
         name: "Simple Score",
         scorerFunction: simpleScorer
        },
      {
         description: "Vowels are 3 points, Consonants are 1 point",
         name: "Bonus Vowels",
         scorerFunction: vowelBonusScorer
      },
       {
         description: "The traditional scoring algorithm",
         name: "Scrabble",
         scorerFunction: scrabbleScorer
         },
];
//Finish writing scorerPrompt() so that the user can select which scoring algorithm to use
//when the program scores their word. Use the selected algorithm to determine the score for
// the word:
//If the user enters 0, have the program output a score using the simple scorer.
//If the user enters 1, use the vowel bonus scoring function.
//If the user enters 2, use the Scrabble scoring option.
//scorerPrompt() should return the object the user has selected.

function scorerPrompt() {
   console.log("Scorer Prompt");
   let scorerChoice = input.question("Which scoring algorithm do you wish to use?\n\n" +
   "0 - Simple: One point per character\n" +
   "1 - Vowel Bonus: Vowels are worth 3 points\n" +
   "2 - Scrabble: (Uses scrabble point system)\n\n" +
   "Enter your choice (0, 1 or 2) now: "
   );
   if (scorerChoice === 0) { simpleScorer(catchTheWord);
//   console.log(`The score for ${catchTheWord} is ` + simpleScore + '.');
   } else if (scorerChoice === 1) { (vowelBonusScorer(catchTheWord));
   } else if (scorerChoice === 2) { (scrabbleScorer(catchTheWord));
   } else {
      console.log("Invalid entry! 0, 1, 2 only!");
}
return scorerChoice;
}
//console.log(scorerChoice);
function transform() {
   let newPointStructure = {};
   for (item in oldPointStructure) {
      for (let i=0; i < oldPointStructure[item].length; i++) {
         let key = oldPointStructure[item][i].toLowerCase();
         newPointStructure[key] = Number(item);
      }
   }
return newPointStructure;
};
let newPointStructure = transform(oldPointStructure);
function runProgram() {
scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //

module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
   runProgram: runProgram,
   scorerPrompt: scorerPrompt
};