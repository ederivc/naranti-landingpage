const btn = document.querySelector(".menu-toggle");
const links = document.querySelector(".navbar__menu");
const navbar = document.querySelector(".navbar");
const title = document.getElementById("web-title");
const webTitle = "HACEMOS VISIBLES TUS SUEÑOS";

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active");
  navbar.classList.toggle("navbar-active");
  links.classList.toggle("active");
});

title.innerHTML = webTitle;
title.style.setProperty("--characters", webTitle.length);
