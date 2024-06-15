export default function touchSound(soundSwitch, state) {
    if (state) {
        const audio = document.createElement("audio")
        audio.src = "../../assets/sounds/glass-knock.mp3"
        audio.play()
    }
    soundSwitch.checked = state
}