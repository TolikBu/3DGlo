(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),c=function(e){return("0"+e).slice(-2)};setInterval((()=>{let e=(()=>{let e=(new Date("28 december 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours,n.textContent=`${c(e.minutes)}`,o.textContent=`${c(e.seconds)}`,e.timeRemaining<0&&(t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=document.getElementById("service"),r=document.getElementById("service-block"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),l();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),c.addEventListener("click",(e=>{e.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),o=e.querySelector(".popup-close"),c=document.documentElement.clientWidth;let r,l=0;n.forEach((n=>{n.addEventListener("click",(()=>{e.style.display="block";const n=()=>{l++,r=requestAnimationFrame(n),l<16&&c>768?t.style.top=6*l+"px":cancelAnimationFrame(r)};n()}))})),o.addEventListener("click",(()=>{e.style.display="none",l=0}))})()})();