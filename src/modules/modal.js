const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalClose = modal.querySelector(".popup-close");
  const width = document.documentElement.clientWidth;

  let count = 0;
  let interval;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      const modalAnimation = () => {
        count++;
        interval = requestAnimationFrame(modalAnimation);
        if (count < 16 && width > 768) {
          modalContent.style.top = count * 6 + "px";
        } else {
          cancelAnimationFrame(interval);
        }
      };
        modalAnimation();
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    count = 0;
  });
};

export default modal;
