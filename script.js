// Hamburger Menu Functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    const hamburgButton = document.querySelector('.hamburg');
    const cancelButton = document.querySelector('.cancel');

    navbar.style.transform = "translateY(0px)";
    hamburgButton.style.display = "none"; // Hide the hamburger icon when menu is open
    cancelButton.style.display = "block"; // Show the cancel text
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    const hamburgButton = document.querySelector('.hamburg');
    const cancelButton = document.querySelector('.cancel');

    navbar.style.transform = "translateY(-500px)";
    hamburgButton.style.display = "block"; // Show the hamburger icon when menu is closed
    cancelButton.style.display = "none"; // Hide the cancel text
}

// Add Event Listeners for Hamburger and Cancel buttons after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const hamburgButton = document.querySelector('.hamburg');
    const cancelButton = document.querySelector('.cancel');

    if (hamburgButton) {
        hamburgButton.addEventListener('click', hamburg);
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', cancel);
        cancelButton.style.display = "none"; // Hide cancel text initially
    }

    // Start the typewriter effect after the DOM is fully loaded
    typeWriter();
});

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
];

let speed = 100; // Typing speed
let textIndex = 0; // Current text index
let charIndex = 0; // Current character index

function typeWriter() {
    const textElements = document.querySelector(".typewriter-text");

    if (textElements) {
        if (charIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, speed); // Call typeWriter after a delay
        } else {
            setTimeout(eraseText, 1000); // Wait before starting to erase
        }
    }
}

function eraseText() {
    const textElements = document.querySelector(".typewriter-text");

    if (textElements) {
        if (textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0, -1); // Remove last character
            setTimeout(eraseText, 50); // Call eraseText after a delay
        } else {
            textIndex = (textIndex + 1) % texts.length; // Cycle to the next text
            charIndex = 0; // Reset character index
            setTimeout(typeWriter, 500); // Wait before starting to type
        }
    }
}
