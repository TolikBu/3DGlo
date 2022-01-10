const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Наш менеджер с вами свяжется!';

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      const formElement = form.querySelectorAll('input');
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gi;

      if (input.classList.contains('success')) {
        success = false;
      } else if (formElement[0] < 3) {
        success = false;
      } else if (reg.test(formElement[1].value) == false) {
        success = false;
      } else if (formElement[2].value.length < 18) {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};


    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
         
          
          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          //  setInterval(() => {
          //    form.delete(statusBlock);
          //  }, 3000);
        });
    } else {
      alert('Данные не валидны: имя должно быть не короче 3 симвовлов, E-mail в формате xxxx@yyyy.zzz, номер телефона не короче 11 цифр');
      statusBlock.textContent = errorText;
    }

  };

  try {
    if (!form) {
      throw new Error('Верните форму на место');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
