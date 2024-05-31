export default function loseSound() {
    const audio = document.createElement("audio")
    audio.src = "../../assets/sounds/lose-sound.mp3"
    audio.play()
}