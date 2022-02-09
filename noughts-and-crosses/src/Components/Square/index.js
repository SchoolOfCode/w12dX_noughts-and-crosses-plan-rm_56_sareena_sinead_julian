// - Square
//   - Props
//     - make a move
//   - Render
//     - `"", X, or O`
function Square({handlePlayerMove, moveSymbol}) {
    //TODO: replace this placeholder with a real button with an onclick event, and the relevant value showing.
    function handleClick() {
        console.log(`Square->handleClick: start`);
        //when the button is clicked
        handlePlayerMove();
    }

    return (
        <>
            <button onClick={handleClick}>{moveSymbol}</button>
        </>
    );
}
export default Square;
