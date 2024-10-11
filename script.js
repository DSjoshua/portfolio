// Hamburger Menu Functions
function hamburg() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}

function cancel() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-500px)";
}

// Add Event Listeners for Hamburger and Cancel buttons
document.querySelector('.hamburg').addEventListener('click', hamburg);
document.querySelector('.cancel').addEventListener('click', cancel);

// Typewriter Effect
const texts = [
    "DEVELOPER",
    "DESIGNER",
];

let speed = 100; // Typing speed
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0; // Current text index
let charcterIndex = 0; // Current character index

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); // Call typeWriter after a delay
    } else {
        setTimeout(eraseText, 1000); // Wait before starting to erase
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); // Remove last character
        setTimeout(eraseText, 50); // Call eraseText after a delay
    } else {
        textIndex = (textIndex + 1) % texts.length; // Cycle to the next text
        charcterIndex = 0; // Reset character index
        setTimeout(typeWriter, 500); // Wait before starting to type
    }
}

// Start the typewriter effect on window load
window.onload = typeWriter;
