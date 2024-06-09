export default function lossWinnerTemplatet(gameState) {
    document.querySelector(".tic-tac-toe-center")
        .style.pointerEvents = "none"
    document.querySelector(".scores-container").innerHTML = (
        `<div class="winner-wrapper">
            <h2>${gameState}</h2>
            <div class="link-container">
                <a class="play-again" href=".">Play again</a>
            </div>
        </div>
        `
    )
}