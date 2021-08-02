'use strict'
const PACMAN = '😷';

var gPacman;
function createPacman(board) {
    gPacman = {
        location: {
            i: 3,
            j: 5
        },
        isSuper: false
    }
    board[gPacman.location.i][gPacman.location.j] = PACMAN
}
function movePacman(ev) {

    if (!gGame.isOn) return;
    // console.log('ev', ev);
    var nextLocation = getNextLocation(ev)

    if (!nextLocation) return;
    // console.log('nextLocation', nextLocation);

    var nextCell = gBoard[nextLocation.i][nextLocation.j]
    // console.log('NEXT CELL', nextCell);

    if (nextCell === WALL) return;
    if (nextCell === FOOD) updateScore(1);
    if (nextCell === POWER_FOOD) {
        startPower();
        setTimeout(endPower, 5000);
    }



    if (!gPacman.isSuper) {
        console.log(gPacman.isSuper)

        if (nextCell === GHOST) {
            gameOver();
            elModalText.innerText = 'YOU LOSE!'
            elModal.style.display = 'inline';
            renderCell(gPacman.location, EMPTY)
            return;
        }


    }


    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;

    // update the dom
    renderCell(gPacman.location, EMPTY);

    gPacman.location = nextLocation;

    // update the model
    gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
    // update the dom
    renderCell(gPacman.location, PACMAN);


}
console.log(gPacman)

function getNextLocation(eventKeyboard) {
    var nextLocation = {
        i: gPacman.location.i,
        j: gPacman.location.j
    }
    switch (eventKeyboard.code) {
        case 'ArrowUp':
            nextLocation.i--;
            break;
        case 'ArrowDown':
            nextLocation.i++;
            break;
        case 'ArrowLeft':
            nextLocation.j--;
            break;
        case 'ArrowRight':
            nextLocation.j++;
            break;
        default:
            return null;
    }
    return nextLocation;
}


function startPower() {
    gPacman.isSuper = true;
    for (var i = 0; i < gGhosts.length; i++) {
        gGhosts[i].color = 'red';

    } if (!gPacman.isSuper) {
        if (nextCell === POWER_FOOD) return
    }
}

function endPower() {
    gPacman.isSuper = false;
    for (var i = 0; i < gGhosts.length; i++) {
        gGhosts[i].color = getRandomColor();
    }
}