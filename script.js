// script.js

// Function to play a sound effect
function playSound(sound) {
    const audio = new Audio(`assets/sounds/${sound}.mp3`);
    audio.play();
}

// Event listener for button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        playSound('click');
    });
});
