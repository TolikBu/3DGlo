(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),l=function(e){return("0"+e).slice(-2)};setInterval((()=>{let e=(()=>{let e=(new Date("31 december 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours,n.textContent=`${l(e.minutes)}`,o.textContent=`${l(e.seconds)}`,e.timeRemaining<0&&(t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),l=document.getElementById("service"),r=document.getElementById("service-block"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),c();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),l.addEventListener("click",(e=>{e.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-close"),l=document.documentElement.clientWidth;let r,c=0;n.forEach((n=>{n.addEventListener("click",(()=>{e.style.display="block";const n=()=>{c++,r=requestAnimationFrame(n),c<16&&l>768?t.style.top=6*c+"px":cancelAnimationFrame(r)};n()}))})),o.addEventListener("click",(()=>{e.style.display="none",c=0}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input");for(let t of e)t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})(),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),o=document.querySelectorAll(".form-name"),l=document.querySelectorAll(".form-phone"),r=document.querySelectorAll(".form-email"),c=function(){o.forEach((e=>{console.log(e);let t=!1;/[^а-яА-Я]/gi.test(e.target.value)||""===e.target.value?(t=!0,e.style.border="none",alert("Имя должно быть на кирилице"),e.value=""):e.style.border="3px solid green",t||alert("Форма отправлена")}))},u=function(){r.forEach((e=>{console.log(e);let t=!1;/[^\d()-]/gi.test(e.target.value)||""===e.target.value?(t=!0,alert("Введите номер в формате 8-(999)-000-00-00"),e.style.border="none",e.value=""):e.style.border="3px solid green",t||alert("Форма отправлена")}))},a=function(){l.forEach((e=>{console.log(e);let t=!1;/[\_\.\!\~\*\'\-\w]+@([\w]+\.)+[\w]+/gi.test(e.target.value)&&""!==e.target.value?e.style.border="3px solid green":(t=!0,alert("Введите email на латинице формата tolik@tolik.ru"),e.style.border="none",e.value=""),t||alert("Форма отправлена")}))};e.addEventListener("submit",(e=>{e.preventDefault(),c(),u(),a()})),t.addEventListener("submit",(e=>{e.preventDefault(),c(),u(),a()})),n.addEventListener("submit",(e=>{e.preventDefault(),c(),u(),a()}))})()})();