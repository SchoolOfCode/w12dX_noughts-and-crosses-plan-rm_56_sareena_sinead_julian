// - Square
//      - Props
//          - make a move
//      - Render
//            - `"", X, or O`
import "./square.css";

function Square({moveSymbol, handlePlayerMove}) {
    const style = moveSymbol
        ? `squares-button ${moveSymbol}-button`
        : `squares-button`;

    function handleClick() {
        handlePlayerMove();
    }

    return (
        <>
            <button className={style} onClick={handleClick}>
                {moveSymbol}
            </button>
        </>
    );
}
export default Square;
