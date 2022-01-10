(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function r(l){let a=(l-n)/o;a>1&&(a=1);let c=e(a);t(c),a<1&&requestAnimationFrame(r)}))},t=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div"),r="Ошибка...";try{if(!o)throw new Error("Верните форму на место");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll("input"),l=new FormData(o),a={};var c;n.textContent="Загрузка...",o.append(n),l.forEach(((e,t)=>{a[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?a[e.id]=t.textContent:"input"===e.type&&(a[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{const n=o.querySelectorAll("input");(e.classList.contains("success")||n[0]<3||0==/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gi.test(n[1].value)||n[2].value.length<18)&&(t=!1)})),t})(e)?(c=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{n.textContent="Наш менеджер с вами свяжется!",e.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent=r})):(alert("Данные не валидны: имя должно быть не короче 3 симвовлов, E-mail в формате xxxx@yyyy.zzz, номер телефона не короче 11 цифр"),n.textContent=r)})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer"),o=document.createElement("span"),n=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");o.classList="timer-days",t.prepend(o);const a=function(e){return("0"+e).slice(-2)};setInterval((()=>{let t=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();o.textContent=t.days+" дн.",n.textContent=`${a(t.hours)}`,r.textContent=`${a(t.minutes)}`,l.textContent=`${a(t.seconds)}`,t.timeRemaining<0&&(o.textContent="00",n.textContent="00",r.textContent="00",l.textContent="00")}),1e3)})("16 june 2022"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=t.querySelectorAll("ul>li>a"),n=document.querySelector("main>a"),r=document.querySelector(".service"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),t.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||e.target.matches("ul>li>a"))&&l()})),o.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))})),n.addEventListener("click",(e=>{e.preventDefault(),r.scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const t=document.querySelector(".popup"),o=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn"),r=document.documentElement.clientWidth;let l=0;n.forEach((n=>{n.addEventListener("click",(()=>{t.style.display="block",r>768&&e({duration:300,timing:e=>Math.pow(e,2),draw(e){o.style.top=10*e+"%"}})}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none"),l=0}))})(),((t=100)=>{const o=document.querySelector(".calc-block"),n=o.querySelectorAll("input"),r=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),s=document.getElementById("total");for(let e of n)e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}));o.addEventListener("input",(o=>{o.target!==r&&o.target!==l&&o.target!==a&&o.target!==c||(()=>{const o=+r.options[r.selectedIndex].value,n=l.value;let i=0,d=1,u=1;a.value>1&&(d+=+a.value/10),c.value&&c.value<5?u=2:c.value&&c.value<10&&(u=1.5),i=r.value&&l.value?t*o*n*d*u:0,e({duration:300,timing:e=>Math.pow(e,2),draw(e){s.textContent=Math.round(e*i)}})})()}))})(100),(()=>{const e=document.querySelectorAll("input"),t=document.querySelectorAll(".form-name"),o=document.querySelectorAll(".form-phone"),n=document.querySelectorAll(".form-email"),r=document.querySelector(".mess");e.forEach((e=>{for(let e of t)e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s]/gi,"")}));for(let e of o)e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d()-]/gi,"")}));for(let e of n)e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9\@\-\_\.\~\!\*\']/gi,"")}))})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\?\!\_\.\:\;\'\-\s\d]/gi,"")})),e.forEach((e=>{}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let n,r=0;const l=(e,t,o)=>{e[t].classList.remove(o)},a=(e,t,o)=>{e[t].classList.add(o)};let c=(()=>{for(let e of t)e=t[0].cloneNode(),e.className="dot",o.append(e)})();c=document.querySelectorAll(".dot"),c[0].classList.add("dot-active");const s=()=>{l(t,r,"portfolio-item-active"),l(c,r,"dot-active"),r++,r>=t.length&&(r=0),a(t,r,"portfolio-item-active"),a(c,r,"dot-active")},i=(e=1500)=>{n=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,r,"portfolio-item-active"),l(c,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),a(t,r,"portfolio-item-active"),a(c,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),document.addEventListener("DOMContentLoaded",(function(){[].forEach.call(document.querySelectorAll(".form-phone"),(function(e){let t;function o(e){e.keyCode&&(t=e.keyCode),this.selectionStart<3&&e.preventDefault();let o="+7 (___)-___-__-__",n=0,r=o.replace(/\D/g,""),l=this.value.replace(/\D/g,""),a=o.replace(/[_\d]/g,(function(e){return n<l.length?l.charAt(n++)||r.charAt(n):e}));n=a.indexOf("_"),-1!=n&&(n<5&&(n=3),a=a.slice(0,n));let c=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");c=new RegExp("^"+c+"$"),(!c.test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=a),"blur"==e.type&&this.value.length<5&&(this.value="")}e.addEventListener("input",o,!1),e.addEventListener("focus",o,!1),e.addEventListener("blur",o,!1),e.addEventListener("keydown",o,!1)}))})),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();