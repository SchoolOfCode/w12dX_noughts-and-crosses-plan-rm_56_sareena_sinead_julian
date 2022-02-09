import {PLAYER_DRAW} from "./config.js";

export function calculateWinner(boardArray) {
    // INPUT = the current state of the board
    // OUTPUT = X if Player X has won,
    //          Y if Player Y has won,
    //          null if nonone has yet won
    //          PLAYER_DRAW if board is full and winner is not set

    const allLinesToCheck = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // last column
        [0, 4, 8], // diagonal
        [2, 4, 6], // other diagonal
    ];
    let winner = null;
    let isDraw = true;
    allLinesToCheck.forEach((currItem) => {
        const [a, b, c] = currItem;
        if (boardArray[a]) {
            if (
                boardArray[a] === boardArray[b] &&
                boardArray[a] === boardArray[c]
            )
                winner = boardArray[a]; //winner 'X' or 'O'
        } else {
            isDraw = false;
        }
    });

    if (isDraw && !winner) return PLAYER_DRAW;
    return winner; //null, X or O or DRAW
}
