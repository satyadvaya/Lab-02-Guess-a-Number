const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const guess = document.getElementById('submitted-guess')
const result = document.getElementById('submitted-result');
const wonOrLost = document.getElementById('won-or-lost');
const guessResult = document.getElementById('guess-result');
const guessesToGo = document.getElementById('guesses-to-go')
const outcomeResponse = document.getElementById('outcome-response');
const resetButton = document.getElementById('reset');
const mainArea = document.getElementById('main-area');

const generatedNumber = Math.floor(Math.random() * 20 + 1) ;

const decision = compareNumbers(guess, generatedNumber);

function beginGame() {
    let correctAnswers = 0;
    let remainingGuesses = 4;
}

function winner() {
    wonOrLost.textContent = 'You Are a Winner!';
}

function loser() {
    wonOrLost.textContent = 'You Are a Loser!';    
}

if (decision === 0) {
    winner();
}

else if (decision === -1) {
    guessResult.textContent = 'Your guess was too low -- guess higher!';
}

else if (decision === 1) {
    guessResult.textContent = 'Your guess was too high -- guess lower!';
}

submitButton.addEventListener('click', beginGame);