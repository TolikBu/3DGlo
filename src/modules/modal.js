const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const width = document.documentElement.clientWidth;

  let count = 0;
  let interval;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      const modalAnimation = () => {
        count++;
        interval = requestAnimationFrame(modalAnimation);
        if (count < 26 && width > 768) {
          modalContent.style.top = count * 6 + "px";
        } else {
          cancelAnimationFrame(interval);
        }
      };
        modalAnimation();
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
