//Portfolio Image Expansion//
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    const fullscreenContainer = document.createElement("div");
    fullscreenContainer.classList.add("fullscreen-container");

    const fullscreenImage = document.createElement("img");
    fullscreenContainer.appendChild(fullscreenImage);

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-btn");
    fullscreenContainer.appendChild(closeButton);

    document.body.appendChild(fullscreenContainer);

    images.forEach(image => {
        image.addEventListener("click", function () {
            fullscreenImage.src = this.src;
            fullscreenContainer.classList.add("active");
        });
    });

    closeButton.addEventListener("click", function () {
        fullscreenContainer.classList.remove("active");
    });

    fullscreenContainer.addEventListener("click", function (e) {
        if (e.target !== fullscreenImage && e.target !== closeButton) {
            fullscreenContainer.classList.remove("active");
        }
    });
});

// Intro Text Effects
const dynamicText = document.querySelector("#typewriter span");
const words = ["graphic designer", "developer", "tech support", "coffee drinker"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100); // Faster typing
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50); // Faster deleting
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 700); // Shorter pause before switching words
    }
};

typeEffect();