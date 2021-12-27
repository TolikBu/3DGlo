const button = document.querySelector(".button");
const reset = document.querySelector(".reset");
const image = document.querySelector(".image");

let active = false;
let count = 0;
let iInterval;

const animate = () => {
  count++;
  iInterval = requestAnimationFrame(animate);

  if (count < 550) {
    image.style.left = count * 2 + "px";
  } else {
    cancelAnimationFrame(iInterval);
  }
};

button.addEventListener("click", () => {
  if (active) {
    cancelAnimationFrame(iInterval);
    active = false;
  } else {
    iInterval = requestAnimationFrame(animate);
    active = true;
  }
});
reset.addEventListener("click", () => {
  image.style.left = "0px";
  count = 0;
});

