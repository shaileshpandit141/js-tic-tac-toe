export default function touchSound() {
    const audio = document.createElement("audio")
    audio.src = "../../assets/sounds/glass-knock.mp3"
    audio.play()
}