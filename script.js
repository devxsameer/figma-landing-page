const hamburgerBtn = document.querySelector(".hamburger i");
const navBar = document.querySelector(".nav");
hamburgerBtn.addEventListener("click", (e) => {
  navBar.classList.toggle("active");
});
