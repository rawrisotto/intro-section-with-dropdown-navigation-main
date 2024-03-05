let hamburgerMenu = document.querySelector("#hamburger-menu");
let overlay = document.querySelector("#overlay");
let mobileMenu = document.querySelector("#mobile-menu");
let dropdownWrapper = document.querySelectorAll(".dropdown-wrapper");

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

  if (window.innerWidth < 950 || window.innerWidth >= 950) {
    dropdownWrapper.forEach((item) => {
      if (item.classList.contains("active")) {
        const dropdown = item.querySelector(".dropdown");
        const dropdownItems = item.querySelector(".dropdown-items");
        item.classList.toggle("active");
        dropdown.classList.toggle("active");
        dropdownItems.classList.toggle("active");
      }
    });
  }
});

dropdownWrapper.forEach((item) => {
  item.addEventListener("click", () => {
    const dropdown = item.querySelector(".dropdown");
    const dropdownItems = item.querySelector(".dropdown-items");
    item.classList.toggle("active");
    dropdown.classList.toggle("active");
    dropdownItems.classList.toggle("active");
  });
});
