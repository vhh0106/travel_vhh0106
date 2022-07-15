const mobileMenu = document.querySelector(".mobile-menu");
const toggleMenu = document.querySelector(".menu");
const removeMenu = document.querySelector(".mobile-close");

mobileMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
});
removeMenu.addEventListener("click", () => {
  toggleMenu.classList.remove("active");
});
