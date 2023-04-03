const menuIcon = document.querySelector("#menu-icon");
const mobileMenu = document.querySelector("#mobile-menu");
const closeBtn = document.querySelector("#close-btn");
const mobileLinks = Array.from(document.querySelectorAll("#mobile-menu a"));

menuIcon.addEventListener("click", function () {
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
});

mobileLinks.map((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});
