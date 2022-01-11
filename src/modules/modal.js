import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");

  let count = 0;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      if (document.documentElement.clientWidth > 768) {
        animate({
          duration: 300,
          timing(timeFraction) {
            return timeFraction;
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
      modalContent.style.top = '';
    }
    count = 0;
  });
};

export default modal;
