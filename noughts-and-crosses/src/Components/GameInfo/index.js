//     - Player Turn (text)
//     - Props
//         - whosTurn (state from Game)
//     - Render
//         - "It's the turn of {whosTurn}"

// - Winner (text)
//     - Props
//         - whosTurn (state from Game)
//     - Render
//         - "you win {whosTurn}"
function GameInfo({gameTitle, winner, whosTurn}) {
    return (
        <div className="game-info-wrapper">
            <h1>{gameTitle}</h1>
            <h3>
                {winner
                    ? `🎉 Winner is ${winner}  🎉`
                    : `Next Player is ${whosTurn}`}
            </h3>
        </div>
    );
}
export default GameInfo;
