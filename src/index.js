const blockElements = document.querySelectorAll(".block")
const userStte = document.querySelector(".current-user-state")
const winnerScoreEl = document.querySelector(".winner-score-number")
const lossScoreEl = document.querySelector(".loss-score-number")


let computer = "c"
let user = "u"
const scoreList = Array(9).fill(null)


function handleCurrentUser(element, index) {
    if (scoreList[index] === null) {
        scoreList[index] = user
        userStte.innerText = "computer"
        element.innerText = user
        chackUserWinner()
        handleComputerClick()
    }
}


blockElements.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        handleCurrentUser(element, index)
    })
})