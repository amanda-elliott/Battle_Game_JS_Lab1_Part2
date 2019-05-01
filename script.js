"use strict";

let grantHealth = 10;
let userHealth = 40;
let userWins = 0;
let user;
let userChoice;

function startGame() {
    let play = prompt("Would you like to play a game?", "yes or no");
    if (play === "yes") {
        user = prompt("Type your player name.", "Player name");
        startCombat();
    } else {
        console.log("Maybe next time.");
    }
}

function startCombat() {
    while (startGame) {
        userChoice = prompt("Would you like to attack or quit?", "attack or quit");
        if (userChoice === "attack") {
            getDamage();
            console.log(`The Almighty Grant has ${grantHealth} points remaining.`);
            console.log(`${user} has ${userHealth} points remaining.`);
            if (grantHealth <= 0) {
                userWins++;
                grantHealth = 10;
                console.log(`${user} wins. ${user} must beat The Almighty Grant ${3 - userWins} more time(s).`);
            }
            if (userHealth <= 0) {
                console.log(`${user} has been defeated by the Almighty Grant.`);
                break;
            }
            if (userWins === 3) {
                console.log(`${user} has defeated the Almighty Grant`);
                break;
            }
        } else {
            console.log(`${user} has ended the game.`);
            return;
        }
    }
}

startGame();

function getDamage() {
    grantHealth -= Math.floor(Math.random() * 5) + 1;
    userHealth -= Math.floor(Math.random() * 5) + 1;
}
