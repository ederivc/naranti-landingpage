const btn = document.querySelector(".menu-toggle");
const links = document.querySelector(".navbar__menu");
const navbar = document.querySelector(".navbar");

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active");
  navbar.classList.toggle("navbar-active");
  links.classList.toggle("active");
});

const animation = (origin) => {
  return {
    distance: "100%",
    origin: origin,
    opacity: null,
    reset: true,
  };
};

ScrollReveal().reveal(
  ".reveal-bottom, .navbar__menu, navbar__brand",
  animation("top")
);
ScrollReveal().reveal(".reveal-left, .web-title", animation("left"));
ScrollReveal().reveal(".reveal-right", animation("right"));
