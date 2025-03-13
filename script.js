//portfolio image expansion//
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

// intro text effects
const dynamicText = document.querySelector("#typewriter span");
const words = ["picture doctor", "website maker", "tech support", "coffee drinker"];
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
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 700);
    }
};

typeEffect();

/* mobile responsiveness */
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});
