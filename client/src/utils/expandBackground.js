export const expandBackground = (compSize) => {
  const sBackground = document.querySelector(".bg-small");

  // sBackground.style.width = "80rem";
  // sBackground.style.height = "60rem";
  // sBackground.style.transition = "all .5s";

  const toogleIt = () => {
    sBackground.classList.toggle(compSize);
  };

  toogleIt();
};
