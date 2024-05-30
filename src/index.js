const blockElements = document.querySelectorAll(".block")
const userStte = document.querySelector(".current-user-state")
const winnerScoreEl = document.querySelector(".winner-score-number")
const lossScoreEl = document.querySelector(".loss-score-number")


let computer = "c"
let user = "u"
const scoreList = Array(9).fill(null)
