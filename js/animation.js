const loadedForAnim = (e) => {
  const animElems = document.querySelectorAll(".animation");
  const options = {
    threshold: 0.2,
  };
  const observeFunc = (entries, obs) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let target = entry.target;
        target.classList.add("anim");
        if (target.dataset.delay) {
          target.style.setProperty("animation-delay", target.dataset.delay);
        }
        target.addEventListener("animationend", () => {
          target.classList.remove("animation");
          target.classList.remove("anim");
        });
        observer.unobserve(target);
      }
    });
  };
  const observer = new IntersectionObserver(observeFunc, options);
  animElems.forEach(function (elem) {
    observer.observe(elem);
  });
};
document.addEventListener("DOMContentLoaded", loadedForAnim);
