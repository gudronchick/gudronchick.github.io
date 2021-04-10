let skills = document.querySelector(".skills-switch");
let canvasElems = skills.querySelectorAll("canvas");
let expElem = document.querySelector(".exp");
let expBlocks = expElem.querySelectorAll(".exp__block");

const animatNum = (elem, num1) => {
  let setTime = 1500 / +num1;
  let n = 0;
  let t5 = setInterval(() => {
    if (n <= +num1) {
      elem.innerHTML = n + "%";
    }
    n++;
    if (n > +num1) {
      clearInterval(t5);
      t5 = null;
    }
  }, setTime);
};

let drawCircles = () => {
  canvasElems.forEach((canv, i) => {
    let num = 0;
    let numEl = document.querySelectorAll(".skills__num")[i];
    animatNum(numEl, numEl.dataset.skillsNum);

    const context = canv.getContext("2d");
    const drawCircle = () => {
      if (num < canv.dataset.num) {
        context.clearRect(0, 0, canv.width, canv.height);
        context.lineWidth = 8;
        context.beginPath();
        context.strokeStyle = "rgb(218, 218, 218)";
        context.arc(canv.width / 2, canv.height / 2, 68, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.lineWidth = 12;
        context.strokeStyle = "rgb(122, 112, 239)";
        num += 1;
        context.arc(
          canv.width / 2,
          canv.height / 2,
          68,
          (Math.PI * 2 * (100 - num)) / 100,
          0
        );
        context.stroke();
        requestAnimationFrame(drawCircle);
      }
    };
    requestAnimationFrame(drawCircle);
  });
};
let skillsEl = document.querySelector(".skills__el");
const skillsClicked = () => {
  drawCircles();
  setTimeout(() => {
    skills = null;
    canvasElems = null;
    drawCircles = null;
  }, 1600);
  skillsEl.removeEventListener("click", skillsClicked, {
    once: true,
  });
  skillsEl = null;
};

skillsEl.addEventListener("click", skillsClicked, {
  once: true,
});

let isExpNull = true;
let expScroll = (e) => {
  if (
    expElem.getBoundingClientRect().top - pageYOffset <= 100 &&
    expElem.getBoundingClientRect().bottom >= 100 &&
    isExpNull
  ) {
    expBlocks.forEach((expBlock, i) => {
      const expNum = expBlock.querySelector(".exp__num");
      const num = expNum.dataset.expNum;
      expBlock.querySelector(".exp__fill").style.width = num + "%";
      expBlock.querySelector(".exp__percent").style.left = num + "%";
      animatNum(expNum, num);
    });
    isExpNull = null;
    document.removeEventListener("scroll", expScroll);
  }
};
expScroll();
document.addEventListener("scroll", expScroll);

let actComm = document.querySelector(".comment__dot_active");
document.querySelector(".comment__dots").addEventListener("click", (e) => {
  if (!e.target.classList.contains("comment__dot")) return;
  const commentItems = document.querySelectorAll(".comment__item");
  commentItems.forEach((el) => {
    el.style.setProperty("opacity", 0);
  });
  commentItems[e.target.dataset.dotIndex].style.opacity = 1;

  if (actComm) actComm.classList.remove("comment__dot_active");
  actComm = e.target;
  e.target.classList.add("comment__dot_active");
});
