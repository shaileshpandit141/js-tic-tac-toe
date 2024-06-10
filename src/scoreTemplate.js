export default function scoreTemplate(winnerScore, lossScore) {
    return (`
        <h3 class="winner-score">Winner score</h3>
        <h3>:</h3>
        <h3 class="winner-score-number">${winnerScore}</h3>
        <h3 class="loss-score">loss score</h3>
        <h3>:</h3>
        <h3 class="loss-score-number">${lossScore}</h3>
        <h3 class="current-user">Current user</h3>
        <h3>:</h3>
        <h3 class="current-user-state">computer</h3>
    `)
}