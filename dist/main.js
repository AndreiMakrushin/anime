(()=>{"use strict";document.querySelectorAll(".set-bg").forEach((e=>{const t=e.dataset.setbg;e.style.backgroundImage=`url(${t})`})),(()=>{const e=document.querySelector(".preloder");e.classList.add("active"),setTimeout((()=>{e.classList.remove("active")}),500)})(),(()=>{const e=document.querySelector(".search-model");document.addEventListener("click",(t=>{t.target.closest(".icon_search")?e.style.display="block":t.target.closest(".search-close-switch")&&(e.style.display="none")}))})(),document.getElementById("scrollToTopButton").addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),new Swiper(".Swiper")})();