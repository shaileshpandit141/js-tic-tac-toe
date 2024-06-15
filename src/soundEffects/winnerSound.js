export default function winnerSound(soundSwitch, state) {
    if (state) {
        const audio = document.createElement("audio")
        audio.src = "../../assets/sounds/good-result.mp3"
        audio.play()
    }
    soundSwitch.checked = state
}