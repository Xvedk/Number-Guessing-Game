// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        // Grab guess from the user
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        // Keep a record of the number of attempted guesses
        previousGuesses.push(guess);
        // Check to see if the game is over
        if (numGuesses === 10) {
            displayGuesses(guess);
            displayMessage(`Game Over! The number was ${randomNumber}.`);
            endGame();
        } else {
            // Display previous guessed numbers
            displayGuesses(guess);
            // Check the guess and display a hint
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    // Calculate the difference between the guess and the random number
    const difference = Math.abs(guess - randomNumber);
    let hint = '';

    if (difference === 0) {
        hint = `You guessed correctly!`;
        endGame();
    } else if (difference <= 10) {
        hint = `Hot!`;
    } else if (difference <= 20) {
        hint = `Warm.`;
    } else {
        hint = `Cold.`;
    }

    displayMessage(`Too ${hint} Try again!`);
}

function displayGuesses(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    remaining.innerHTML = `${10 - numGuesses}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = message;
}

function endGame() {
    // Clear user input
    userInput.value = '';
    // Disable user input and submit button
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    
    // Display the "Start New Game" button
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    document.body.appendChild(p);
    playGame = false;
    
    // Add a click event listener to the "Start New Game" button
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        // Pick a new random number
        randomNumber = Math.floor(Math.random() * 100) + 1;
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${10 - numGuesses}`;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        // Remove the "Start New Game" button
        document.body.removeChild(p);
        playGame = true;
    });
}

// Initial call to display the "Start New Game" button
endGame();
