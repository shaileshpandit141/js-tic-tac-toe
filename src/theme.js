// Get the root element of your document
let root = document.documentElement;


export default function theme(themeSwitch, state) {
    if (state) {
        root.style.setProperty('--background-color', '#f2f2f2');
        root.style.setProperty('--tic-tac-toe-bg', '#e6e6e6');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--btn-bg-color', '#333');
        root.style.setProperty('--active-color', "#006e00");
        root.style.setProperty('--hover-color', "#ccc");
        root.style.setProperty('--winner-bg', '#000000da');
    } else {
        root.style.setProperty('--background-color', '#1a1a1a');
        root.style.setProperty('--tic-tac-toe-bg', '#333');
        root.style.setProperty('--text-color', '#666');
        root.style.setProperty('--btn-bg-color', '#2b2b2b');
        root.style.setProperty('--active-color', "#006e00");
        root.style.setProperty('--hover-color', "#444");
        root.style.setProperty('--winner-bg', '#1a1a1aa9');
    }
    themeSwitch.checked = state
}