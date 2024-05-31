export default function winnerSound() {
    const audio = document.createElement("audio")
    audio.src = "../assets/sounds/good-result.mp3"
    audio.play()
}