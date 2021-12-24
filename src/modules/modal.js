const modal = () => {
  const modal = document.querySelector(".popup");
  const modalContent = document.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalClose = modal.querySelector(".popup-close");

  const width = document.documentElement.clientWidth;

  let count = '';
  let interval;

  modalContent.style.top = "-380px";

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      const modalAnimation = () => {
        count += 2 + "px";
        
        modalContent.style.top = `${0 + count}`;
        if (width > 768 && count < 100) {
          requestAnimationFrame(modalAnimation);
        } 
      };
      
      //     console.log(count);
      //     modalContent.style.top = count + "px";
      //   } 
      // const modalAnimation = () => {
      //   count++;
      //   interval = requestAnimationFrame(modalAnimation);
      //   if (width > 768 && count < 100) {
      //     console.log(count);
      //     modalContent.style.top = count + "px";
      //   } else {
      //     cancelAnimationFrame(interval);
      //     modalContent.style.top = "10%";
      //   }
      // };
      // modalAnimation();
    });
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
    count = 0;
    console.log(count);
  });
};

export default modal;
