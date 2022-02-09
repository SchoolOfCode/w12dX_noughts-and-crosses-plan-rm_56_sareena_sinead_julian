import {Col, Row} from "react-bootstrap";
import "./board.css";
import Square from "../Square";

// - Board
//   - Props
//     - board
//     - make a move
//   - Render
//     - Squares - 1 for each item in board, arranged into a grid

// TODO: Refactor: Hardcoded rows and col and render with map
function Board({handlePlayerMove, moveSymbol}) {
    return (
        <>
            <Row>
                <Col>
                    <Square
                        handlePlayerMove={handlePlayerMove}
                        moveSymbol={moveSymbol}
                    />
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </>
    );
}

export default Board;
