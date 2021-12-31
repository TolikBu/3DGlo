import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const width = document.documentElement.clientWidth;

  let count = 0;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (width > 768) {
      animate({
        duration: 300,
        timing(timeFraction) {
          return Math.pow(timeFraction, 2);
        },
        draw(progress) {
          modalContent.style.top = progress * 10 + '%';
        },
      });
    }
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";  
    }
    count = 0;
  });
};

export default modal;
