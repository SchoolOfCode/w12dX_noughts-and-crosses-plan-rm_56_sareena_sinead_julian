import { Col, Row } from 'react-bootstrap';
import './board.css';

// - Board
//   - Props
//     - board
//     - make a move
//   - Render
//     - Squares - 1 for each item in board, arranged into a grid

// TODO: Refactor: Hardcoded rows and col and render with map
function Board() {
  return (
    <>
      <Row>
        <Col>0</Col>
        <Col>x</Col>
        <Col>0</Col>
      </Row>
      <Row>
        <Col>0</Col>
        <Col>x</Col>
        <Col>0</Col>
      </Row>
      <Row>
        <Col>0</Col>
        <Col>x</Col>
        <Col>0</Col>
      </Row>
    </>
  );
}

export default Board;
