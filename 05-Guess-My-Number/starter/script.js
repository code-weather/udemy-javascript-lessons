'use strict';

/*
console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".message").textContent = "🎉 Correct number!");
// console.log(document.querySelector(".message").textContent); // ANOTHER OPTION SAME AS LINE 4

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 21); // As a reminder, Math.random generates number from 0 => 0.99999 and Math.trunc gets rid of decimals, regardless whether if it's 5 <= or 4 >=...Thus, if we multiply Math.random by 21, it'll have a number from 0 - 20.999~ and by using Math.trunc, it'll create an integer between 0 - 20.

let score = 20;
// Used 'let' because 'const' is immutable. We will be decreasing the score

let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess)

    // When there is no input 
    if (!guess) {
        // document.querySelector(".message").textContent = "⛔️ No number input!"
        displayMessage("⛔️ No number input!")
        document.querySelector(".number").textContent = secretNumber;

        // When player wins
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "🎉 Correct number!"
        displayMessage("🎉 Correct number!")
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem"

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore
        }

        // When guess is wrong...refactored
    } else if (guess !== secretNumber) {
        if (score > 1) { // The score > 1 so the message of losing the game will pop up at 0 score
            // document.querySelector(".message").textContent = guess > secretNumber ? "📉 Too high!" : "📈 Too low!";
            displayMessage(guess > secretNumber ? "📉 Too high!" : "📈 Too low!")
            score--; // Same as score = score - 1;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent = "Here...take this L 💥 but you can try again! 😄";
            displayMessage("Here...take this L 💥 but you can try again! 😄")
            document.querySelector(".score").textContent = 0;
        }
    }


    //     // When guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) { // The score > 1 so the message of losing the game will pop up at 0 score
    //         document.querySelector(".message").textContent = "📉 Too high!"
    //         score--; // Same as score = score - 1;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "Here...take this L but you can try again! 😄";
    //         document.querySelector(".score").textContent = 0;
    //     }

    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) { // The score > 1 so the message of losing the game will pop up at 0 score
    //         document.querySelector(".message").textContent = "📈 Too low!"
    //         score--; // Same as score = score - 1;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "Here...take this L but you can try again! 😄";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
})

// Implement the Again! button
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 21);

    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...")
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem"
})