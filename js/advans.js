const switchMain = document.querySelector(".switch");
const switchBody = document.querySelector(".switch-body");

const advansNumFunc = (e) => {
  if (!e.target.closest(".switch__elem")) return;
  let num;
  removeClass(
    switchMain.querySelector(".advans__num_active"),
    "advans__num_active"
  );
  removeClass(
    switchMain.querySelector(".choice__item_active"),
    "choice__item_active"
  );

  removeClass(switchBody.querySelector(".switch_active"), "switch_active");

  if (e.target.dataset.switchNum) {
    e.target.classList.add("choice__item_active");
    num = e.target.dataset.switchNum;
  } else {
    e.target.classList.add("advans__num_active");
    num = +e.target.innerText.slice(1) - 1;
  }
  switchBody.children[num].classList.add("switch_active");
};

switchMain.addEventListener("click", advansNumFunc);
