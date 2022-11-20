import levels from './levels.js'
{
    /*----- constants -----*/
/*
const solution = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // column 0
    [0, 0, 0, 0, 0, 0, 1, 1, 1], // column 1
    [0, 0, 1, 0, 1, 0, 0, 0, 3], // column 2
    [0, 0, 1, 3, 1, 0, 1, 1, 1], // column 3
    [0, 0, 1, 1, 1, 0, 0, 0, 3], // column 4
    [0, 0, 0, 0, 1, 0, 1, 1, 1], // column 5
    [0, 0, 2, 0, 1, 0, 0, 0, 3], // column 6
    [0, 0, 0, 0, 1, 0, 1, 1, 1], // column 7
    [0, 1, 1, 1, 1, 0, 0, 0, 3], // column 8
];
*/

/*----- app's state variables -----*/
let board;

/*----- cached element references -----*/
let cells = document.querySelectorAll('div');
let headline = document.getElementById('headline');
let puzzleBoard = document.getElementById('puzzleboard');
let restartButton = document.getElementById('restart');
let fullPuzzle = document.getElementById('puzzle-full');
let fullInstructions = document.getElementById('instructions');
// console.log(puzzleBoard.children);

let levelNumber = 0;
const solution = levels[levelNumber].structure;


/*----- event listeners -----*/
puzzleBoard.addEventListener('click', handleClick);
// restartButton.addEventListener('click', cleanBoard);

/*----- functions -----*/
initialize();

renderLevel();

function handleClick(evt) {
    // console.log(evt);
    const marker = evt.target;

    // hard method to get cell coords
    // console.log(marker);    // div id = "c1r1"
    var markerString = marker.id;
    // console.log(markerString); // c1r1
    var rowArr = markerString.split('r');
    // console.log(rowArr); // [ "c1", "1" ]
    var rowIdx = rowArr[rowArr.length - 1];
    // console.log(rowIdx); // 1
    rowArr.pop();
    // console.log(rowArr); // [ "c1" ]
    var colIdx = rowArr.join('').replace('c', '');
    // console.log(colIdx); // 1
    // end of hard method to get cell coords
    // out: rowIdx, colIdx

    
    if (board[rowIdx][colIdx] < 2) {        // если клетка кликабельна (в борде на этом месте не 2 и не 3)
        if (colIdx != 0) {      // если не нулевая колонка (то есть не крайняя левая)
            if (evt.altKey === false) {     // если alt не нажат
                if (!marker.style.backgroundColor) {
                    marker.style.backgroundColor = 'grey'
                    board[rowIdx][colIdx] = 1; // если клетка не выделена, то выделяем, и в борде отмечаем как 1
                } else if (marker.style.backgroundColor = 'grey') {
                    marker.style.backgroundColor = ''
                    board[rowIdx][colIdx] = 0; // если клетка выделена, то снимаем выделение, и в борде отмечаем как 0
                } 
            } else {
                marker.style.backgroundColor = 'pink'
                board[rowIdx][colIdx] = 0; // если нажали с альтом, то красим её в pink и в борде отмечаем как 0
            }
        }
    }

    checkWin() // сверяем с образцом
}

function checkWin() {
    if (board.toString() == solution.toString()) {
        headline.innerHTML = 'you win!';
    } else if (board.toString() !== solution.toString()) {
        headline.innerHTML = 'nonogram puzzle';
    }
}

// Initialize board
function initialize() {
    board = []
    for (let row = 0; row < solution.length; row += 1) {
        board.push([]);
        for (let cell = 0; cell < solution[row].length; cell += 1) {
            if (solution[row][cell] === 1) {
                board[row].push(0);
            } else {
                board[row].push(solution[row][cell]);
            }
        }
    }
    console.log(board)
}

function renderLevel() {
    for (let row = 0; row < board.length; row += 1) {
        for (let cell = 0; cell < board[row].length; cell += 1) {
            if (board[row][cell] === 2) {
                puzzleBoard.children[`c${cell}r${row}`].innerHTML = 'C'
            }
            else if (board[row][cell] === 3) {
                puzzleBoard.children[`c${cell}r${row}`].innerHTML = 'M'
            }
        }
    }

}

}
