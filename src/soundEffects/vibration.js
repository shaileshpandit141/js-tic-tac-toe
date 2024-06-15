export default function vibrate(vibrationSwitch, state) {
    if (state) {
        if ("vibrate" in navigator) {
            // Vibration is supported
            navigator.vibrate([16]);
        }
    }
    vibrationSwitch.checked = state
}