const formValid = () => {
  const input = document.querySelectorAll("input");
  const formName = document.querySelectorAll(".form-name");
  const formPhone = document.querySelectorAll(".form-phone");
  const formEmail = document.querySelectorAll(".form-email");
  const formMess = document.querySelector(".mess");

  input.forEach((e) => {
    for (let i of formName) {
      i.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\s]/gi, "");
      });
    }
    // for (let i of formPhone) {
    //   i.addEventListener("input", (e) => {
    //     e.target.value = e.target.value.replace(/[^\d()-]/gi, "");
    //   });
    // }
    for (let i of formEmail) {
      i.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\~\!\*\']/gi, "");
      });
    }
  });
  formMess.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\?\!\_\.\:\;\'\-\s\d]/gi, "");
  });

  formName.forEach((i) => {
    i.addEventListener("blur", (e) => {
      e.target.value = e.target.value.trim();

      if (e.target.classList.contains("form-name") && e.target.value) {
        e.target.value = e.target.value
          .split(/\ +/)
          .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(" ");
      }

      e.target.value = e.target.value;
    });
  });
};

export default formValid;
