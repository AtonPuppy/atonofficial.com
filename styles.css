* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  background: #111;
  overflow: hidden;
}

body {
  font-family: Arial, sans-serif;
  color: #fff;
}

.site {
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 520px;
  overflow: hidden;
  background: #111;
}

/* -------------------------
   SLIDESHOW
------------------------- */

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.4s ease;
}

.slide.active {
  opacity: 1;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  animation: zoom 6500ms linear both;
}

@keyframes zoom {
  from {
    transform: scale(1.015);
  }

  to {
    transform: scale(1.075);
  }
}

/* -------------------------
   DARK OVERLAY
------------------------- */

.shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.08),
      rgba(0, 0, 0, 0.02) 42%,
      rgba(0, 0, 0, 0.52) 100%
    );

  pointer-events: none;
}

/* -------------------------
   MAIN TEXT
------------------------- */

.hero {
  position: absolute;
  z-index: 3;

  left: 7vw;
  bottom: 15vh;

  max-width: 700px;

  text-shadow:
    0 2px 22px rgba(0, 0, 0, 0.28);
}

h1 {
  margin: 0;

  font-family:
    "Arial Black",
    Arial,
    sans-serif;

  font-size: clamp(34px, 4.2vw, 64px);

  line-height: 1.02;

  font-weight: 900;

  letter-spacing: -0.035em;
}

.hero p {
  margin: 18px 0 0;

  font-size: clamp(14px, 1.2vw, 17px);

  line-height: 1.5;

  letter-spacing: 0.01em;
}

/* -------------------------
   EMAIL
------------------------- */

.contact {
  position: absolute;

  z-index: 3;

  left: 7vw;
  bottom: 38px;

  color: #fff;

  text-decoration: none;

  font-size: 11px;

  letter-spacing: 0.08em;

  text-shadow:
    0 2px 12px rgba(0, 0, 0, 0.35);

  transition: opacity 0.25s ease;
}

.contact:hover {
  opacity: 0.65;
}

/* -------------------------
   SLIDE COUNTER
------------------------- */

.counter {
  position: absolute;

  z-index: 3;

  right: 42px;
  bottom: 39px;

  font-size: 11px;

  letter-spacing: 0.16em;

  font-variant-numeric: tabular-nums;
}

/* -------------------------
   PROGRESS BAR
------------------------- */

.progress {
  position: absolute;

  z-index: 3;

  right: 42px;
  bottom: 26px;

  width: 92px;
  height: 1px;

  background: rgba(255, 255, 255, 0.3);
}

.progress i {
  display: block;

  width: 0;
  height: 100%;

  background: #fff;
}

/* -------------------------
   MOBILE
------------------------- */

@media (max-width: 700px) {

  .hero {
    left: 24px;
    right: 24px;
    bottom: 122px;
  }

  h1 {
    font-size: clamp(34px, 10vw, 54px);
  }

  .hero p {
    font-size: 14px;
    margin-top: 15px;
  }

  .contact {
    left: 24px;
    bottom: 31px;

    font-size: 10px;
  }

  .counter {
    right: 24px;
    bottom: 42px;
  }

  .progress {
    right: 24px;
    bottom: 28px;

    width: 74px;
  }
}

/* -------------------------
   REDUCED MOTION
------------------------- */

@media (prefers-reduced-motion: reduce) {

  .slide,
  .slide img {
    animation: none;
    transition: none;
  }
}
