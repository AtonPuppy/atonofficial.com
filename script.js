const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("num");
const progress = document.getElementById("bar");

let current = 0;
const slideDuration = 6500;

function showSlide(nextSlide) {

  slides[current].classList.remove("active");

  current = nextSlide;

  if (current >= slides.length) {
    current = 0;
  }

  slides[current].classList.add("active");

  counter.textContent =
    String(current + 1).padStart(2, "0");

  progress.style.transition = "none";
  progress.style.width = "0%";

  setTimeout(() => {

    progress.style.transition =
      `width ${slideDuration}ms linear`;

    progress.style.width = "100%";

  }, 50);
}


/* Start with first image */

slides[0].classList.add("active");

counter.textContent = "01";


/* Start progress bar */

setTimeout(() => {

  progress.style.transition =
    `width ${slideDuration}ms linear`;

  progress.style.width = "100%";

}, 50);


/* Change image every 6.5 seconds */

setInterval(() => {

  showSlide(current + 1);

}, slideDuration);
