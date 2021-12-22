const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalClose = modal.querySelector(".popup-close");

  const width = document.documentElement.clientWidth;

  let count = 10;
  let interval;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      const modalAnimation = () => {
        count++;
        interval = requestAnimationFrame(modalAnimation);

        if (count > 10 && count < 100) {
          modalContent.style.opacity = "0." + count;
        } else {
          cancelAnimationFrame(interval);
        }
      };
      if (width > 768) {
        modalAnimation();
      }
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    count = "10";
  });
};

export default modal;
