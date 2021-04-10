const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".links");
const searchField = document.querySelector(".links__search");
const btnBurger = document.querySelector(".burger");
const socialLinks = document.querySelector(".links__social");
const act = document.querySelector(".act");
let isScroll = true;

const removeClass = (target, cl) => {
  target ? target.classList.remove(cl) : 1;
};

btnBurger.addEventListener("click", (e) => {
  e.target.classList.toggle("burger_active");
  mobileMenu.classList.toggle("links_active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("nav")) {
    mobileMenu.classList.remove("links_active");
    btnBurger.classList.remove("burger_active");
  }

  if (
    e.target.classList.contains("active-srch") ||
    !e.target.closest(".links__button")
  ) {
    searchField.classList.remove("links__search_active");
    act.className = "act";
    socialLinks.classList.remove("links__social_active");
  } else if (e.target.classList.contains("act")) {
    searchField.classList.add("links__search_active");
    act.className = "act active-srch";
  }
  if (e.target.classList.contains("social-link")) {
    socialLinks.classList.add("links__social_active");
    searchField.classList.remove("links__search_active");
  }
});

let scrollMenu = (e) => {
  if (pageYOffset < 10) isScroll = null;
  if (isScroll) {
    menu.classList.add("menu_active");
    isScroll = null;
  } else {
    menu.classList.remove("menu_active");
  }

  isScroll = true;
  return false;
};

scrollMenu(event);
window.addEventListener("scroll", scrollMenu);
