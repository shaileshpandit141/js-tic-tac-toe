import useLocalStorage from "./utils/useLocalStorage.js"
import render from "./utils/render.js"
import { getElementByClass } from "./utils/getElement.js"
import useEventListenenr from "./utils/useEventListener.js"
import touchSound from "./soundEffects/touchSound.js"
import winnerSound from "./soundEffects/winnerSound.js"
import loseSound from "./soundEffects/loseSound.js"
import winnerCondition from "./winnerCondition.js"
import lossWinnerTemplatet from "./lossWinnerTemplatet.js"


const blockElements = document.querySelectorAll(".block")
const userStte = getElementByClass("current-user-state")
const winnerScoreEl = getElementByClass("winner-score-number")
const lossScoreEl = getElementByClass("loss-score-number")


const computer = "c"
const user = "u"
const scoreList = Array(9).fill(null)
const [getWinnerScore, setWinnerScore] = useLocalStorage("winnerCount", 0)
const [getLossScore, setLossScore] = useLocalStorage("lossCount", 0)


render(winnerScoreEl, getWinnerScore() < 10 ? `0${getWinnerScore()}` : getWinnerScore())
render(lossScoreEl, getLossScore() < 10 ? `0${getLossScore()}` : getLossScore())
computerAction()


blockElements.forEach((element, index) => {
    const [handleClick] = useEventListenenr(element, "click")
    handleClick((event) => {
        if (scoreList[index] === null) {
            touchSound()
            scoreList[index] = user
            userStte.innerText = "computer"
            element.innerText = user
            try {
                checkUserWinner()
                computerAction()
            } catch (e) {
                // Pass the block if user is winner. 
                winnerSound()
            }
        }
    })
})


function computerAction() {
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
                checkComputerWinner()
                let allBoxFillList = scoreList.filter(prev => prev !== null)
                if (allBoxFillList.length === 9) {
                    gameIsDraw()
                }
            } catch (e) {
                // Pass the block if computer is winner. 
                loseSound()
            }
        }, 250)
    }
}


function checkComputerWinner() {
    if (winnerCondition(computer, scoreList)) {
        lossWinnerTemplatet("Winner is <span>Computer 🏆🥇🎉🏅</span>")
        setLossScore(getLossScore() + 1)
        throw new Error("Winner is Computer")
    }
}


function checkUserWinner() {
    if (winnerCondition(user, scoreList)) {
        lossWinnerTemplatet("Winner is <span>You 🏆🥇🎉🏅</span>")
        setWinnerScore(getWinnerScore() + 1)
        throw new Error("Winner is User")
    }
}


function gameIsDraw() {
    lossWinnerTemplatet("Game Draw")
}