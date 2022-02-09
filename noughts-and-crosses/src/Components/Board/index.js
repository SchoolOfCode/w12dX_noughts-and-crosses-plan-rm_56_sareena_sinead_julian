// - Board
//     - Props
//        - board
//        - make a move
//     - Render
//        - Squares - 1 for each item in board, arranged into a grid
//
// import {Col, Row} from "react-bootstrap";
import "./board.css";
import Square from "../Square";

function Board({boardArray, handlePlayerMove}) {
    return (
        <div className="board">
            {boardArray.map((moveSymbol, index) => {
                return (
                    <Square
                        key={index}
                        moveSymbol={moveSymbol}
                        handlePlayerMove={() => handlePlayerMove(index)}
                    />
                );
            })}
        </div>
    );
}

export default Board;
