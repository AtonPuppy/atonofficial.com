const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let timer;

const slideDurations = [
    4200, // 1 — Welcome to Aton's World
    2200, // 2 — empty location
    3200, // 3 — Tail Wagging Delight
    3500, // 4 — Something Cool is Coming Soon
    3500, // 5 — Instagram message
    4200  // 6 — Signature
];

function showNextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

    timer = setTimeout(
        showNextSlide,
        slideDurations[currentSlide]
    );
}


/* Start slideshow */

timer = setTimeout(
    showNextSlide,
    slideDurations[0]
);
