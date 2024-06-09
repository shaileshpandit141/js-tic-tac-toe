export default function winnerCondition(forWhichOne, scoreList) {
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