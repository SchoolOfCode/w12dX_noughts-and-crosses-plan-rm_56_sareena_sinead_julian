import './square.css';
// - Square
//   - Props
//     - make a move
//   - Render
//     - `"", X, or O`
// function Square({handlePlayerMove, moveSymbol, rowIndex, colIndex}) {
function Square({ handlePlayerMove, moveSymbol }) {
  //TODO: replace this placeholder with a real button with an onclick event, and the relevant value showing.
  function handleClick() {
    console.log(`Player move is: ${moveSymbol}`);
    //when the button is clicked
    // handlePlayerMove("X", [rowIndex, colIndex]);
    handlePlayerMove();
  }
  //TODO:refactor classname to be dynamic and based on the players move
  return (
    <>
      {/* <div className='square' onClick={handleClick}>{moveSymbol}</div> */}
      <button className="square" onClick={handleClick}>
        {moveSymbol}
      </button>
    </>
  );
}
export default Square;
