// - Square
//   - Props
//     - make a move
//   - Render
//     - `"", X, or O`
import "./square.css";

// function Square({handlePlayerMove, moveSymbol, rowIndex, colIndex}) {
function Square({moveSymbol, handlePlayerMove}) {
    const style = moveSymbol ? `squares ${moveSymbol}` : `squares`;

    function handleClick() {
        console.log(`Player move is: ${moveSymbol}`);
        // handlePlayerMove("X", [rowIndex, colIndex]);
        handlePlayerMove();
    }

    return (
        <>
            {/* <div className='square' onClick={handleClick}>{moveSymbol}</div> */}
            <button className={style} onClick={handleClick}>
                {moveSymbol}
            </button>
        </>
    );
}
export default Square;
