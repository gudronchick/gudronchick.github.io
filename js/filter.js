const filter = document.querySelector(".projects__filter");
const projectsList = document.querySelector(".projects__list");
document.addEventListener("click", (e) => {
  // Filter
  if (e.target !== filter) {
    projectsList.classList.remove("projects__list_active");
    document
      .querySelector(".projects__filter")
      .classList.remove("projects__filter_active");
  }
  if (e.target.classList.contains("projects__link")) {
    e.preventDefault();
    document
      .querySelector(".projects__link_active")
      .classList.remove("projects__link_active");
    e.target.classList.add("projects__link_active");
  }
});

// Filter Mobile
const filterClicked = (e) => {
  projectsList.classList.toggle("projects__list_active");
  e.target.classList.toggle("projects__filter_active");
};

filter.addEventListener("click", filterClicked);
projectsList.addEventListener("click", (e) => {
  filter.innerHTML = e.target.innerHTML;
});

const gallery = document.querySelector(".gallery");
const links = document.querySelectorAll(".projects__link");
var iso = new Isotope(gallery, {
  itemSelector: ".gallery__item",
  layoutMode: "fitRows",
});
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const selector = e.target.dataset.filter;
    iso.arrange({
      filter: selector,
    });
  });
});
