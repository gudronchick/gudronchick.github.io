// Increase num
const increaseNums = [...document.querySelectorAll(".increase-num")];
let startTime = null;
let isNull = null;

const animNum = (elem) => {
  let max = +elem.dataset.maxNum;
  let time = 1600 / max;
  let n = 0;
  let interval = setInterval(() => {
    n++;
    elem.innerText = n;
    isNull = null;
    if (n >= max) {
      clearInterval(interval);
      n = null;
      time = null;
      elem = null;
    }
  }, time);
};

let observingNum = (e) => {
  increaseNums.forEach((el, i) => {
    let rect = el.getBoundingClientRect();
    if (
      rect.top - document.documentElement.clientHeight <= 0 &&
      rect.bottom >= -100 &&
      !+el.innerText
    ) {
      animNum(el);
      el = null;
      increaseNums.splice(i, 1);
    }
  });
  if (!increaseNums.length) {
    window.removeEventListener("scroll", observingNum);
  }
};

observingNum();
increaseNums.forEach((el, i) => {
  let rect = el.getBoundingClientRect();
  if (
    rect.top - document.documentElement.clientHeight >= -400 &&
    rect.bottom >= -100 &&
    rect.top - document.documentElement.clientHeight <= 200
  ) {
    animNum(el);
  }
});

observingNum ? (observingNum = observingNum) : 1;
window.addEventListener("scroll", observingNum);
