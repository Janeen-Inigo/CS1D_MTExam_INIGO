// Declare a variable to store the favorite number
let favoriteNumber = 10; 

// Initialize a variable to store the user's guess
let guess = 0;

// Use a while loop to keep asking until the user guesses correctly
while (guess !== favoriteNumber) {
    // Prompt the user for a guess
    guess = parseInt(prompt("Guess my fav Num:)"), 10);

// This will show if their guess is wrong
    if (guess < favoriteNumber) {
        alert("Too low! Try again!!!:)");
    } else if (guess > favoriteNumber) {
        alert("Too high! Try again!!!:)");
    } else if (guess === favoriteNumber) {
        alert("Correct! You guessed my favorite number!:))))");
    } else {
        alert("Invalid input. Please enter a number:((( ");
    }
}