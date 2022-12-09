'use strict';

// selecting elements we want to work with

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');



// Starting conditions 
score0.textContent = 0;
score1.textContent = 0;
// hide the dice
diceEl.classList.add('hidden')

//store the scores value in a array
const score = [0, 0]

//needs to be outside
let currentScore = 0;
let activePlayer = 0;

// switch player function
const switchPlayer  = function() {
    //switch to next player : to the opposite 
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};// end switch





// Rolling dice functionality
btnRoll.addEventListener('click', function (){
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) +1;
    console.log(dice)
    // 2 . display the dice , getting the img back
    diceEl.classList.remove('hidden')
    // to get random picture of the 5 pitures, we use src, and accesing the randomness via dice 
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, 
    if (dice !==1){
        // when player is 0 : first player
        // Add dice to current score
        currentScore = currentScore + dice;
        // select the currentScore , based on which player is playing currently and set that score into the currentScore
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

        //current0El.textContent = currentScore;
    }else{
        //switch to next player : to the opposite 
        switchPlayer();

    } // end if

})

btnHold.addEventListener('click', function(){
    // 1. Add current score to active player score
    console.log('Hold button')

    scores[activePlayer] +=currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = score[activePlayer];


    //2.Check if player's score is >= 100

    // finish the game

    // Switch to the next player
    switchPlayer();
});







