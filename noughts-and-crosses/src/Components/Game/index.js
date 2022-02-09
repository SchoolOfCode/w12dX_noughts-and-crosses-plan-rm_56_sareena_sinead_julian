// Game
//   - State
//       - `board = [null,null,null,null,null,null,null,null,null] <- "X", "O", or null`
//       - `x's turn = true | false`
//   - Behaviour
//       - make a move
//         - if the square is not empty, you can't pick it
//         - if the square is empty, you can pick it - put the player symbol in that square
//       - check winner
//         - check if there's matching symbols in rows, columns, or diagonals
//         - if there is, the game ends and the symbol wins
//         - if the board is full, the game ends as a draw
//   - Render
//      - Board
//      - Who's turn is it?
//      - Winner
//
import "./game.css";
import {useState} from "react";
import {calculateWinner} from "../../helper.js";
import Board from "../Board";
import GameInfo from "../GameInfo";
import {PLAYER_X_MOVE, PLAYER_O_MOVE} from "../../config.js";

function Game() {
    const initialBoardArray = Array(9).fill(null);
    const [boardArray, setBoardArray] = useState(initialBoardArray);

    const [isTurnOfX, setIsTurnOfX] = useState(true);
    const currentPlayer = isTurnOfX ? PLAYER_X_MOVE : PLAYER_O_MOVE;

    const winner = calculateWinner(boardArray); //null, X or O or DRAW

    function handlePlayerMove(index) {
        //if there's a winner (or a draw), or if the square is already filled, then don't do anything; just return
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

    function handlePlayAgainClick() {
        setBoardArray(initialBoardArray);
    }
    return (
        <>
            <div className="game">
                <GameInfo
                    gameTitleText="Room 56"
                    winnerOrDraw={winner}
                    whosTurn={currentPlayer}
                    buttonText="Play Again"
                    handleButtonClick={handlePlayAgainClick}
                />
                <Board
                    boardArray={boardArray}
                    handlePlayerMove={handlePlayerMove}
                />
            </div>
        </>
    );
}

export default Game;
