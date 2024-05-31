const blockElements = document.querySelectorAll(".block")
const userStte = document.querySelector(".current-user-state")
const winnerScoreEl = document.querySelector(".winner-score-number")
const lossScoreEl = document.querySelector(".loss-score-number")


let computer = "c"
let user = "u"
let gameDraw = "w"
const scoreList = Array(9).fill(null)


function handleComputerClick() {
    let resIndexList = []
    scoreList.forEach((prev, index) => {
        if (prev === null) {
            resIndexList.push(index)
        }
    })

    let randomIndex = Math.floor(Math.random() * (resIndexList.length - 0) + 0)
    if (scoreList[resIndexList[randomIndex]] === null) {
        setTimeout(() => {
            userStte.innerText = "You"
            scoreList[resIndexList[randomIndex]] = computer
            blockElements[resIndexList[randomIndex]].innerText = computer
            try {
                chackComputerWinner()
            } catch {
                // Pass the block if computer is winner. 
            }
        }, 250)
    }
}


handleComputerClick()


function handleUserClick(element, index) {
    if (scoreList[index] === null) {
        scoreList[index] = user
        userStte.innerText = "computer"
        element.innerText = user
        try {
            chackUserWinner()
            handleComputerClick()
        } catch {
            // Pass the block if user is winner. 
        }
    }
}


blockElements.forEach((element, index) => {
    element.addEventListener("click", (event) => {
        handleUserClick(element, index)
    })
})


function chackWinnerCondition(forWhichOne) {
    return (
        ((scoreList[0] === forWhichOne) && (scoreList[1] === forWhichOne) && (scoreList[2] === forWhichOne)) ||
        ((scoreList[3] === forWhichOne) && (scoreList[4] === forWhichOne) && (scoreList[5] === forWhichOne)) ||
        ((scoreList[6] === forWhichOne) && (scoreList[7] === forWhichOne) && (scoreList[8] === forWhichOne)) ||
        ((scoreList[0] === forWhichOne) && (scoreList[3] === forWhichOne) && (scoreList[6] === forWhichOne)) ||
        ((scoreList[1] === forWhichOne) && (scoreList[4] === forWhichOne) && (scoreList[7] === forWhichOne)) ||
        ((scoreList[2] === forWhichOne) && (scoreList[5] === forWhichOne) && (scoreList[8] === forWhichOne)) ||
        ((scoreList[0] === forWhichOne) && (scoreList[4] === forWhichOne) && (scoreList[8] === forWhichOne)) ||
        ((scoreList[2] === forWhichOne) && (scoreList[4] === forWhichOne) && (scoreList[6] === forWhichOne))
    )
}


function chackUserWinner() {
    if (chackWinnerCondition(user)) {
        document.querySelector(".tic-tac-toe-center")
            .style.pointerEvents = "none"
        document.querySelector(".scores-container").innerHTML = (
            `<div class="winner-wrapper">
                <h2>Winner is <span>You 🏆🥇🎉🏅</span></h2>
                <div class="link-container">
                    <a href=".">Play again</a>
                </div>
            </div>
            `
        )
        throw new Error("Winner is User")
    }
}


function chackComputerWinner() {
    if (chackWinnerCondition(computer)) {
        document.querySelector(".tic-tac-toe-center")
            .style.pointerEvents = "none"
        document.querySelector(".scores-container").innerHTML = (
            `<div class="winner-wrapper">
                <h2>Winner is <span>Computer 🏆🥇🎉🏅</span></h2>
                <div class="link-container">
                    <a href=".">Play again</a>
                </div>
            </div>
            `
        )
        throw new Error("Winner is Computer")
    }
}
