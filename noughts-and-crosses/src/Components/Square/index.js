import './square.css'
// - Square
//   - Props
//     - make a move
//   - Render
//     - `"", X, or O`
function Square({handlePlayerMove, moveSymbol, rowIndex, colIndex}) {
    //TODO: replace this placeholder with a real button with an onclick event, and the relevant value showing.
    function handleClick() {
        console.log(`Player move is: ${moveSymbol}`);
        //when the button is clicked
        handlePlayerMove("X", [rowIndex, colIndex]);
    }


    return (
        <>
            <div className='square' onClick={handleClick}>{moveSymbol}</div>
        </>
    );
}
export default Square;
