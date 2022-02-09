// Game
//   - State
//     - `board = [null,null,null,null,null,null,null,null,null] <- "X", "O", or null`
//     - `x's turn = true | false`
//   - Behaviour
//     - make a move
//       - if the square is not empty, you can't pick it
//       - if the square is empty, you can pick it - put the player symbol in that square
//     - check winner
//       - check if there's matching symbols in rows, columns, or diagonals
//       - if there is, the game ends and the symbol wins
//       - if the board is full, the game ends as a draw
//   - Render
//     - Board
//     - Who's turn is it?
//     - Winner

// Winner = [0,0] [1,0] [2,0]
//          [0,1] [1,1] [2,1]
//          [0,2] [1,2] [2,2]

//          [0,0] [0,1] [0,2]
//          [1,0] [1,1] [1,2]
//          [2,0] [2,1] [2,2]

//          [0,0] [1,1] [2,2]
//          [0,2] [1,1] [2,0]

import "./game.css";
import {useState} from "react";
import {calculateWinner} from "../../helper.js";
import Board from "../Board";
import GameInfo from "../GameInfo";

export const PLAYER_X_MOVE = "X";
export const PLAYER_O_MOVE = "O";

function Game() {
    // let moveSymbol = "";
    // let boardArray = [['', '', ''],
    //                   ['', '' ,''],
    //                   ['', '', '']]

    const [boardArray, setBoardArray] = useState(Array(9).fill(null));

    // boardArray.fill(PLAYER_X_MOVE); //TODO: remove this temp data
    // boardArray[3] = PLAYER_O_MOVE; //TODO: remove this

    const [isTurnOfX, setIsTurnOfX] = useState(true);
    const currentPlayer = isTurnOfX ? PLAYER_X_MOVE : PLAYER_O_MOVE;

    const winner = calculateWinner(boardArray);

    function handlePlayerMove(index) {
        //if there's a winner, or if the square is already filled, then don't do anything, and just return
        if (winner || boardArray[index]) return;

        // otherwise, (1) update the current board with the player's move
        setBoardArray([
            ...boardArray.slice(0, index),
            currentPlayer,
            ...boardArray.slice(index + 1),
        ]);

        //and (2) toggle players
        setIsTurnOfX(!isTurnOfX);
    }

    return (
        <>
            <GameInfo
                gameTitle="Room 56"
                winner={winner}
                whosTurn={currentPlayer}
            />
            <Board
                boardArray={boardArray}
                handlePlayerMove={handlePlayerMove}
            />
        </>
    );
}

export default Game;
