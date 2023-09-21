'use strict';

// document.querySelector('.message').textContent = "🎉 Correct Number!";
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent = 15;
// document.querySelector('.guess').value = 23;


let secretNumber = Math.trunc(Math.random() *20 ) + 1;
let score = 20;
let highScore = 0;

//refactoring the message DOM to avoid repetition
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
  document.querySelector('.number').textContent = number;
}


document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  //if there are no number typed in the form
  if(!guess) {
    // document.querySelector('.message').textContent = '😮  No Number!';
    displayMessage('😮  No Number!');
  
    //when player wins
  }else if(guess === secretNumber){
  //  document.querySelector('.message').textContent = '🎉 Correct Number!';
   displayMessage('🎉 Correct Number!');

   //to display the guessed number/secret number
  //  document.querySelector('.number').textContent = secretNumber;
   displayNumber(secretNumber);

   document.body.style.backgroundColor = 'green';
   document.querySelector('.number').style.width = '30rem';

   if(score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
   }
   // when guessed number is not equal to the secretNumber and in a refractory form to avoid some unnecessary repetition
  }else if(guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    
  }
  
  // //when guess is too high 
  // else if (guess > secretNumber) {

  //   if(score > 1){
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;

  //   }else{
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
    
  //   // when the guess is too low 
  // }else if(guess < secretNumber) {

  //   if(score>1){
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //   score--;
  //   document.querySelector('.score').textContent = score;

  //   }else{
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
    
    
  // }
 
});

document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})