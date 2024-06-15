export default function loseSound(soundSwitch, state) {
    if (state) {
        const audio = document.createElement("audio")
        audio.src = "../../assets/sounds/lose-sound.mp3"
        audio.play()
    }
    soundSwitch.checked = state
}