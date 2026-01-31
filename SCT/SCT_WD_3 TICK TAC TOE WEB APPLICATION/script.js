let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

let scoreX = 0;
let scoreO = 0;

const statusText = document.getElementById("status");
const cells = document.getElementsByClassName("cell");
const scoreXEl = document.getElementById("scoreX");
const scoreOEl = document.getElementById("scoreO");

const winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;

    checkWinner();
}

function checkWinner() {
    for (let condition of winConditions) {
        let [a, b, c] = condition;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusText.innerText = `Player ${currentPlayer} Wins! 🎉`;
            gameActive = false;

            if (currentPlayer === "X") {
                scoreX++;
                scoreXEl.innerText = scoreX;
            } else {
                scoreO++;
                scoreOEl.innerText = scoreO;
            }
            return;
        }
    }

    if (!board.includes("")) {
        statusText.innerText = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer} Turn`;
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusText.innerText = "Player X Turn";

    for (let cell of cells) {
        cell.innerText = "";
    }
}

function resetScore() {
    scoreX = 0;
    scoreO = 0;
    scoreXEl.innerText = 0;
    scoreOEl.innerText = 0;
    resetGame();
}