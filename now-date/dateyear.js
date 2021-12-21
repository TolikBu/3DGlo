"use strict";

const yearDays = document.createElement("p");
const dayNow = document.createElement("p");
const timeNow = document.createElement("p");
const hello = document.createElement("p");
document.querySelector("body").prepend(yearDays);
document.querySelector("body").prepend(timeNow);
document.querySelector("body").prepend(dayNow);
document.querySelector("body").prepend(hello);


// document.querySelector("body").prepend(block);

const time = function () {
  let date = new Date();
  let hours = date.getHours();

  //получаем дни до вого года
  let deadline = "31 december 2021";

  let dateStop = new Date(deadline).getTime();
  let dateNow = new Date().getTime();
  let leftDays = (dateStop - dateNow) / 1000;
  let days = Math.floor(leftDays / 60 / 60 / 24);

  let options = {
    weekday: "long",
  };
  let day = date.getDay();

  let time = date.toLocaleTimeString();

   
  const hi = (one, two, three, four) => {
    if (hours > 12 && hours <= 16) {
      return two;
    }
    if (hours >= 17 && hours < 23) {
      return three;
    }
    if (hours >= 12 && hours <= 4) {
      return one;
    }
    return four;
  };
  

  // получаем время 
  day = date.toLocaleString("ru", options);
 
  timeNow.textContent = "Текущее время: " + time;
  yearDays.textContent = "До нового года осталось " + days + " дней";
  dayNow.textContent = "Сегодня: " + day[0].toUpperCase() + day.slice(1, day.length);
  hello.textContent = `${hi("Доброе утро", "Добрый день", "Добрый вечер", "Доброй ночи")} `;

};
setInterval(time, 1000);



