# Number-Guessing-Game



A number guessing game is a classic game where a player attempts to guess a randomly chosen number within a specific range. The game typically includes elements such as setting a range, providing clues, and keeping track of the player's guesses.

**Game Components:**

1. **User Interface**: The game usually has a user interface that includes a message area to display instructions, clues, and feedback to the player.

2. **Random Number**: The game generates a random number within a specified range. In this case, it's between 1 and 100. This random number is what the player needs to guess.

3. **Player Input**: The player is allowed to enter their guess in an input field and submit it. The input field provides a way for the player to enter their guess.

4. **Feedback**: The game provides feedback to the player after each guess. This feedback typically includes whether the guess is correct or incorrect and may provide hints like "too high" or "too low."

5. **Guesses Remaining**: The game keeps track of the number of guesses the player has made and usually limits the number of guesses (e.g., 10 attempts).

6. **Previous Guesses**: The game may display a list of previous guesses to help the player keep track of what they've already tried.

7. **Restart or New Game**: After the game ends, the player is often given the option to start a new game to play again.

**Game Logic:**

1. **Initialize the Game**: When the game starts, it initializes by generating a random number and setting the number of allowed guesses.

2. **Player Interaction**: The player enters their guess and submits it. The game checks if the guess is valid (within the allowed range).

3. **Feedback**: The game checks the player's guess against the random number. If the guess is correct, the game congratulates the player. If the guess is incorrect, the game provides feedback like "too high" or "too low."

4. **Tracking and Display**: The game keeps track of the number of guesses and displays the current guess count, previous guesses, and the remaining number of guesses.

5. **Game Over**: If the player guesses correctly within the allowed number of attempts, the game ends, and a "You win!" message is displayed. If the player runs out of attempts, the game ends, and a "Game over" message is shown, along with the correct number.

6. **New Game**: After the game ends, the player can choose to start a new game to play again. A new random number is generated, and the game is reset.

The theory behind this game is relatively straightforward and involves using HTML, CSS for styling, and JavaScript for game logic. It provides a good introduction to user interaction, random number generation, and basic event handling in web development. As you advance in web development, you can explore more complex games and features.
