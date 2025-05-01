let rock = 1
let paper = 2
let scissors = 3



function getRandomMove() {
    return Math.floor(Math.random() * 3) + 1;
}

function getMoveName(move) {
    switch (move) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "Invalid move";
    }
}

function gameOne() {
    let playerMove = getRandomMove();
    let computerMove = getRandomMove();

    console.log("Player's move: " + getMoveName(playerMove));
    console.log("Computer's move: " + getMoveName(computerMove));

    if (playerMove === computerMove) {
        return "It's a tie!";
    } else if (
        (playerMove === 1 && computerMove === 3) ||
        (playerMove === 2 && computerMove === 1) ||
        (playerMove === 3 && computerMove === 2)
    ) {
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

console.log(gameOne());