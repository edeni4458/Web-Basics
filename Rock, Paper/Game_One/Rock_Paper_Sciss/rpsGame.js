
const selectButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const playerScoreSpan = document.querySelector("[data-player-score]");
const computerScoreSpan = document.querySelector("[data-computer-score]");


const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '🖐️',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper'
    }
]
selectButtons.forEach(selectButton => {
    selectButton.addEventListener('click', e => {
        const selectName = selectButton.dataset.selection
        const select = SELECTIONS.find(select => select.name === selectName)
        makeSelection(select)
    })
})

// The below function calls the randoSelection function on line 35
function makeSelection(select) {
    const computerSelection = randomSelection();
    const youWon = isWinner(select, computerSelection)
    const computerWon = isWinner(computerSelection, select)
    console.log(computerSelection);

    addSelectResult(computerSelection, computerWon)
    addSelectResult(select, youWon)

    if (youWon) incrementScore(playerScoreSpan)
    if (computerWon) incrementScore(computerScoreSpan)

}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('score-container')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}

// The below function determines the winner contingent upon each player's selection
const isWinner = (select, opponentSelect) => {
    return select.beats === opponentSelect.name
}


function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}