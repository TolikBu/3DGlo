const formValid = () => {
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const form3 = document.getElementById("form3");
  const formName = document.querySelectorAll(".form-name");
  const formPhone = document.querySelectorAll(".form-phone");
  const formEmail = document.querySelectorAll(".form-email");

  // console.log(formName);
  // console.log(formPhone);
  // console.log(formEmail);

  const validName = function () {
    formName.forEach((item) => {
      console.log(item);
      let isError = false;

      if (!/[^а-яА-Я]/gi.test(item.value) && item.value !== "") {
        item.style.border = "3px solid green";
      } else {
        isError = true;
        item.style.border = "none";
        alert("Имя должно быть на кирилице");
        item.value = "";
      }

      if (!isError) {
        alert("Форма отправлена");
      }
    });
  };

  const validEmail = function () {
    formEmail.forEach((item) => {
      console.log(item);
      let isError = false;

      if (!/[^\d()-]/gi.test(item.value) && item.value !== "") {
        item.style.border = "3px solid green";
      } else {
        isError = true;
        alert("Введите номер в формате 8-(999)-000-00-00");
        item.style.border = "none";
        item.value = "";
      }

      if (!isError) {
        alert("Форма отправлена");
      }
    });
  };

  const validPhone = function () {
    formPhone.forEach((item) => {
      console.log(item);
      let isError = false;

      if (/[\_\.\!\~\*\'\-\w]+@([\w]+\.)+[\w]+/gi.test(item.value) && item.value !== "") {
        item.style.border = "3px solid green";
      } else {
        isError = true;
        alert("Введите email на латинице формата tolik@tolik.ru");
        item.style.border = "none";
        item.value = "";
      }

      if (!isError) {
        alert("Форма отправлена");
      }
    });
  };


  form1.addEventListener("submit", (e) => {
    e.preventDefault();
    validName();
    validEmail();
    validPhone();
  });


  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    validName();
    validEmail();
    validPhone();
  });

  form3.addEventListener("submit", (e) => {
    e.preventDefault();
    validName();
    validEmail();
    validPhone();
  });
};

export default formValid;

