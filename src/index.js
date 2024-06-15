import useLocalStorage from "./utils/useLocalStorage.js"
import render from "./utils/render.js"
import { getElementByClass, getElementById } from "./utils/getElement.js"
import useEventListenenr from "./utils/useEventListener.js"
import touchSound from "./soundEffects/touchSound.js"
import winnerSound from "./soundEffects/winnerSound.js"
import loseSound from "./soundEffects/loseSound.js"
import vibrate from "./soundEffects/vibration.js"
import winnerCondition from "./winnerCondition.js"
import lossWinnerTemplatet from "./lossWinnerTemplatet.js"
import theme from "./theme.js"
import scoreTemplate from "./scoreTemplate.js"
import addStyles from "./utils/addStyles.js"


const root = getElementById("root")
const themeSwitch = getElementByClass("themeSwitch")
const soundSwitch = getElementByClass("soundSwitch")
const vibrationSwitch = getElementByClass("vibrationSwitch")
const winnerScoreEl = getElementByClass("winner-score-number")
const lossScoreEl = getElementByClass("loss-score-number")
const blockElements = document.querySelectorAll(".block")


const computer = "c"
const user = "u"
let scoreList = Array(9).fill(null)
const [getThemeState, setThemeState] = useLocalStorage("themeState", false)
const [getSoundState, setSoundState] = useLocalStorage("soundState", false)
const [getVibrationState, setVibrationState] = useLocalStorage("vibrationState", false)
const [getWinnerScore, setWinnerScore] = useLocalStorage("winnerCount", 0)
const [getLossScore, setLossScore] = useLocalStorage("lossCount", 0)


render(winnerScoreEl, getWinnerScore() < 10 ? `0${getWinnerScore()}` : getWinnerScore())
render(lossScoreEl, getLossScore() < 10 ? `0${getLossScore()}` : getLossScore())
theme(themeSwitch, getThemeState())
computerAction()


themeSwitch.addEventListener("change", (event) => {
    setThemeState(event.currentTarget.checked)
    theme(themeSwitch, getThemeState())
})


soundSwitch.addEventListener("change", (event) => {
    setSoundState(event.currentTarget.checked)
})


vibrationSwitch.addEventListener("change", (event) => {
    setVibrationState(event.currentTarget.checked)
})


blockElements.forEach((element, index) => {
    const [handleClick] = useEventListenenr(element, "click")
    handleClick((event) => {
        if (scoreList[index] === null) {
            touchSound(soundSwitch, getSoundState())
            vibrate(vibrationSwitch, getVibrationState())
            scoreList[index] = user
            getElementByClass("current-user-state")
                .innerText = "computer"
            element.innerText = user
            try {
                checkUserWinner()
                computerAction()
            } catch (e) {
                // Pass the block if user is winner. 
                winnerSound(soundSwitch, getSoundState())
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
            getElementByClass("current-user-state")
                .innerText = "You"
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
                loseSound(soundSwitch, getSoundState())
            }
        }, 250)
    }
}


function checkComputerWinner() {
    if (winnerCondition(computer, scoreList)) {
        lossWinnerTemplatet("Winner is <span>Computer 🏆🥇🎉🏅</span>")
        setLossScore(getLossScore() + 1)
        let playAgainBtn = document.querySelector(".play-again")
        playAgainBtn.addEventListener("click", (event) => {
            event.preventDefault()
            handlePageRefresh()
        })
        throw new Error("Winner is Computer")
    }
}


function checkUserWinner() {
    if (winnerCondition(user, scoreList)) {
        lossWinnerTemplatet("Winner is <span>You 🏆🥇🎉🏅</span>")
        setWinnerScore(getWinnerScore() + 1)
        let playAgainBtn = document.querySelector(".play-again")
        playAgainBtn.addEventListener("click", (event) => {
            event.preventDefault()
            handlePageRefresh()
        })
        throw new Error("Winner is User")
    }
}


function gameIsDraw() {
    lossWinnerTemplatet("Game Draw")
    let playAgainBtn = document.querySelector(".play-again")
    playAgainBtn.addEventListener("click", (event) => {
        event.preventDefault()
        handlePageRefresh()
    })
}


function handlePageRefresh() {
    let listOfBox = root.querySelectorAll(".block")
    listOfBox.forEach((box) => {
        box.innerText = null
    })

    for (let node of root.children) {
        root.appendChild(node)
    }

    let template = scoreTemplate(getWinnerScore(), getLossScore())
    document.querySelector(".scores-container")
        .innerHTML = template

    scoreList = Array(9).fill(null)
    document.querySelector(".tic-tac-toe-center")
        .style.pointerEvents = "auto"

    computerAction()
}


let settingContainer = getElementByClass("setting-container")
let settingState = true
settingContainer.addEventListener("click", (event) => {
    if (event.target.id === "setting-img") {
        if (settingState) {
            addStyles(settingContainer, {
                transform: "translateX(0)",
            })
            addStyles(event.target, {
                transform: 'rotate(90deg)'
            })
            settingState = false
        } else {
            addStyles(settingContainer, {
                transform: "translateX(190px)",
            })
            settingState = true
            addStyles(event.target, {
                transform: 'rotate(0deg)'
            })
        }
    } else {
        addStyles(settingContainer, {
            transform: "translateX(190px)",
        })
        addStyles(getElementById("setting-img"), {
            transform: 'rotate(0deg)'
        })
        settingState = true
    }
})