'use strict'
const WALL = '#'
const FOOD = '.'
const EMPTY = ' ';
const POWER_FOOD = '🍔'
const CHERRY = '🍒'
var elModal = document.querySelector('.modal')
var elModalText = document.querySelector('.modal h3')
var foodCount;
var cherryInterval;


var gBoard;
var gGame = {
    score: 0,
    isOn: false
}
function init() {
    console.log('hello')
    elModal.style.display = 'none'
    foodCount = 0;
    gGame.score = 0;
    gBoard = buildBoard()
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    var SIZE = 10;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = FOOD;
            if (i === 0 || i === SIZE - 1 ||
                j === 0 || j === SIZE - 1 ||
                (j === 3 && i > 4 && i < SIZE - 2)) {
                board[i][j] = WALL;
            }
            if (i === 1 && j === 1 || i === 1 && j === 8 ||
                i === 8 && j === 1 || i === 8 && j === 8) {
                board[i][j] = POWER_FOOD;
            }
        }
    }
    return board;
}



function updateScore(diff) {
    gGame.score += diff;
    document.querySelector('h2 span').innerText = gGame.score
    foodCount++
    if (foodCount === 56) {
        elModalText.innerText = 'VICTORY!'
        elModal.style.display = 'inline';
        gameOver();
    }
}

function gameOver() {
    console.log('Game Over');
    gGame.isOn = false;

    clearInterval(gIntervalGhosts)
}

