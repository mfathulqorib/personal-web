//Navigation bar effects on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const navbar = document.querySelector(".nav-bar");

  header.setAttribute("id", window.scrollY > 0 ? "sticky-nav-bar" : "");
  navbar.setAttribute("id", window.scrollY > 0 ? "nav-bar" : "");
});

//Website dark/light theme

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-items a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

//Typed animations
import Typed from "typed.js";

const typed = new Typed("#element", {
  strings: ["I am Amri,", " I am Operations Managers at eFishery"],
  typeSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

//Confetti animations
import confetti from "canvas-confetti";

const appreciateBtn = document.getElementById("appreciate");
appreciateBtn.addEventListener("click", () => {
  const myCanvas = document.createElement("canvas");
  myCanvas.style.position = "fixed";
  myCanvas.style.bottom = "-100vh";
  myCanvas.style.inset = "0px";
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.zIndex = 11;
  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 500,
    spread: 360,
    origin: {
      x: 0.5,
      y: 0.5,
    },
  });

  setTimeout(() => {
    document.body.removeChild(myCanvas);
  }, 2000);
});
