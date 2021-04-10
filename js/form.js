// Form validation

const questionInputs = document.querySelectorAll(".questions__elem");
const questionBtn = document.querySelector(".questions__btn");

questionBtn.addEventListener("click", (e) => {
  questionInputs.forEach((questionInput) => {
    if (!questionInput.value) {
      questionInput.nextElementSibling.classList.add(
        "questions__required_active"
      );
    } else {
      questionInput.nextElementSibling.classList.remove(
        "questions__required_active"
      );
    }
  });
});

questionInputs.forEach((el) => {
  el.addEventListener("keydown", (e) => {
    el.nextElementSibling.classList.remove("questions__required_active");
  });
});

// Button to top

const topBtn = document.querySelector(".button-to-top");

let toTopFunc = (e) => {
  if (pageYOffset >= 1000) {
    topBtn.classList.add("button-to-top_active");
  } else {
    topBtn.classList.remove("button-to-top_active");
  }
};

toTopFunc(event);

window.addEventListener("scroll", toTopFunc);

const smoothScroll = (duration) => {
  let distance = window.pageYOffset;
  let startTime = null;
  const easeOutQuad = (t, b, c, d) => {
    return c * (t /= d) * (t - 2) + b;
  };
  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = easeOutQuad(timeElapsed, distance, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};

topBtn.addEventListener("click", (e) => {
  smoothScroll(1500);
});
