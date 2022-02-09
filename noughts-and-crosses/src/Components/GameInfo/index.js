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
import {
    PLAYER_X_SYMBOL,
    PLAYER_O_SYMBOL,
    PLAYER_DRAW,
    GAME_ONGOING,
} from "../../config.js";
import "./game-info.css";

function GameInfo({
    gameTitleText,
    winnerOrDraw,
    whosTurn,
    buttonText,
    handleButtonClick,
}) {
    //winner can be X or O, or a draw, which means game is over (render play again button)
    // ... or winner can be null in which case continue playing (render next player)
    let gameInfoText = "";
    if (winnerOrDraw === PLAYER_DRAW) gameInfoText = ` 😥 It's a draw 😥`;

    if (winnerOrDraw === PLAYER_X_SYMBOL || winnerOrDraw === PLAYER_O_SYMBOL)
        gameInfoText = `🎉 ${winnerOrDraw} wins! 🎉`;

    if (winnerOrDraw === GAME_ONGOING)
        gameInfoText = `Next Player is ${whosTurn}`;

    return (
        <div className="game-info">
            <h1>{gameTitleText}</h1>
            <h3>
                {/* previous version when winner didn't include draw option */}
                {/* {winner ? `🎉 ${winner} wins 🎉` : `Next Player is ${whosTurn}`} */}
                {gameInfoText}
            </h3>
            {winnerOrDraw ? (
                <button class="pushable" onClick={handleButtonClick}>
                    <span class="shadow"></span>
                    <span class="edge"></span>
                    <span class="front">{buttonText}</span>
                </button>
            ) : null}
        </div>
    );
}
export default GameInfo;
