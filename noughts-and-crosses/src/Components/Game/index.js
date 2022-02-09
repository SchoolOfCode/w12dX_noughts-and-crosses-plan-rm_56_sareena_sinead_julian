import "./game.css";
import Board from "../Board";
import GameInfo from "../GameInfo";

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

function Game() {
    let moveSymbol = "";

    // Winner = [0,0] [1,0] [2,0] 
    //          [0,1] [1,1] [2,1]
    //          [0,2] [1,2] [2,2]


    //          [0,0] [0,1] [0,2] 
    //          [1,0] [1,1] [1,2] 
    //          [2,0] [2,1] [2,2] 

    //          [0,0] [1,1] [2,2] 
    //          [0,2] [1,1] [2,0] 


    let boardArray = [['', '', ''],
                      ['', '' ,''],
                      ['', '', '']]

    function handlePlayerMove(move, index) {
        console.log(`Game->handlePlayerMove: start ${index}`);
        moveSymbol = move;
    }

    return (
        <div className="Game">
            <Board
                board={boardArray}
                handlePlayerMove={handlePlayerMove}
                moveSymbol={moveSymbol}
            />
            <GameInfo />
        </div>
    );
}

export default Game;
