let hamburgerMenu = document.querySelector("#hamburger-menu");
let overlay = document.querySelector("#overlay");
let mobileMenu = document.querySelector("#mobile-menu");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 950 && hamburgerMenu.classList.contains("active")) {
    hamburgerMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  }
});
