//Navigation bar effects on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const navbar = document.querySelector(".nav-bar");

  header.setAttribute("id", window.scrollY > 0 ? "sticky-nav-bar" : "");
  navbar.setAttribute("id", window.scrollY > 0 ? "nav-bar" : "");
});

//Portfolio section - Modal

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations

//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
