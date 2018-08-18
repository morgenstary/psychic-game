

// // Function to generate random letter from a to z //

function makeLetter() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

// Test to console
console.log(makeLetter());

// Test user input to html doc
// var userText = document.getElementById("user-text");

// Program listens for user input, user types a letter, program compares user input to generated letter.

document.onkeypress = function (event) {
    var key = event.key.toLowerCase();

    if (document.onkeypress) {
        keySound.play();
    }


    if (key === makeLetter()) {
        winSound.play();
        alert("You Got It !!!")

        // Scoreboard logic wins

        scoreBoard.wins++;
        document.querySelector("#wins").innerHTML = "<p> Wins:  " + scoreBoard.wins + "</p>"
        scoreBoard.guessesLeft = 9;
        document.querySelector("#guesses-left").innerHTML = "<p> Guesses Left: " + scoreBoard.guessesLeft + "</p>"
        scoreBoard.guessesSoFar = [];
        document.querySelector("#guessed").innerHTML = "<p> Guesses So Far: " + scoreBoard.guessesSoFar + "</p>"

        // Scoreboard logic losses

    } else if (scoreBoard.guessesLeft <= 1) {
        loseSound.play();
        scoreBoard.losses++;
        document.querySelector("#losses").innerHTML = "<p> Losses: " + scoreBoard.losses + "</p>"
        alert("You're Out of Guesses");
        scoreBoard.guessesLeft = 9;
        document.querySelector("#guesses-left").innerHTML = "<p> Guesses Left: " + scoreBoard.guessesLeft + "</p>"
        scoreBoard.guessesSoFar = [];
        document.querySelector("#guessed").innerHTML = "<p> Guesses So Far: " + scoreBoard.guessesSoFar + "</p>"

        // Guesses left and So Far
    } else {
        scoreBoard.guessesLeft--;
        document.querySelector("#guesses-left").innerHTML = "<p> Guesses Left: " + scoreBoard.guessesLeft + "</p>"
        scoreBoard.guessesSoFar.push(key + " ");
        document.querySelector("#guessed").innerHTML = "<p> Guesses So Far: " + scoreBoard.guessesSoFar + "</p>"
    }

    userText.textContent = event.key;

};

// Scoreboard elements

var scoreBoard = {
    wins: 0,
    losses: 0,
    guessesLeft: 9,
    guessesSoFar: [],

};

// Game Sound
var winSound = new Audio("./assets/sounds/success.mp3");
var loseSound = new Audio("./assets/sounds/try-again.mp3");
var keySound = new Audio("./assets/sounds/click.mp3");


// Initialize page

document.querySelector("#wins").innerHTML = "<p> Wins: " + scoreBoard.wins + "</p>"
document.querySelector("#guesses-left").innerHTML = "<p> Guesses Left: " + scoreBoard.guessesLeft + "</p>"
document.querySelector("#losses").innerHTML = "<p> Losses: " + scoreBoard.losses + "</p>"
document.querySelector("#guessed").innerHTML = "<p> Guesses So Far: " + scoreBoard.guessesSoFar + "</p>"

