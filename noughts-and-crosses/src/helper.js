import {
    PLAYER_X_SYMBOL,
    PLAYER_O_SYMBOL,
    PLAYER_DRAW,
    GAME_ONGOING,
} from "./config.js";

export function calculateWinner(boardArray) {
    // INPUT = the current state of the board
    //
    // OUTPUT = X if Player X has won,
    //          Y if Player Y has won,
    //          null if no-one has yet won
    //          PLAYER_DRAW if board is full and winner is not set

    let winner = PLAYER_DRAW;

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

    allLinesToCheck.forEach((currItem) => {
        const [a, b, c] = currItem;
        if (boardArray[a]) {
            if (
                boardArray[a] === boardArray[b] &&
                boardArray[a] === boardArray[c]
            )
                winner = boardArray[a]; //winner will be set to 'X' or 'O' accordingly
        }
    });

    //if winner identified, return the winner (X or O):
    if (winner === PLAYER_X_SYMBOL || winner === PLAYER_O_SYMBOL) return winner;

    //if no winner identified AND if board not yet full, return GAME_ONGOING
    if (winner === PLAYER_DRAW && boardArray.includes(null))
        return GAME_ONGOING;

    //otherwise, game is complete (no remaining nulls) but a winner is not found, so return a draw
    return PLAYER_DRAW;
}
