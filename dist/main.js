(()=>{var e={823:()=>{(()=>{fetch("./db.json").then((e=>e.json())).then((t=>{const a=new URLSearchParams(window.location.search).get("im");let i=new Set;t.anime.forEach((e=>{i.add(e.ganre)})),a?n(t.anime,a):console.log("fuck you"),e(i)}));const e=e=>{const n=document.querySelector(".header__menu .dropdown");n.innerHTML="",e.forEach((e=>{n.insertAdjacentHTML("beforeend",`\n            <li><a href="./categories.html?ganre=${e}">${e}</a></li>\n            `)}))},n=(e,n)=>{const t=e.find((e=>e.id==n)),a=document.querySelector(".anime__details__content");document.querySelector(".breadcrumb__links").insertAdjacentHTML("afterbegin",`\n        <a href="./index.html"><i class="fa fa-home"></i> Home</a>\n                        <a href="./categories.html">Categories</a>\n                        <span>${t.title}</span>\n        `),a.innerHTML="",a.insertAdjacentHTML("afterbegin",`\n        <div class="row">\n                    <div class="col-lg-3">\n                        <div class="anime__details__pic set-bg" data-setbg="${t.image}">\n                            <div class="view"><i class="fa fa-eye"></i>${t.views}</div>\n                        </div>\n                    </div>\n                    <div class="col-lg-9">\n                        <div class="anime__details__text">\n                            <div class="anime__details__title">\n                                <h3>${t.title}</h3>\n                                <span>${t["original-title"]}</span>\n                            </div>\n   \n                            <p>${t.description}</p>\n                            <div class="anime__details__widget">\n                                <div class="row">\n                                    <div class="col-lg-6 col-md-6">\n                                        <ul>\n                                            <li><span>Date aired:</span>${t.date}</li>\n                                            <li><span>Rating:</span>${t.rating}</li>\n                                            <li><span>Genre:</span>${t.tags.join(", ")}</li>\n                                        </ul>\n                                    </div>\n                                    <div class="col-lg-6 col-md-6">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                    \n        `),a.querySelectorAll(".set-bg").forEach((e=>{e.style.backgroundImage=`url(${e.dataset.setbg})`}))}})()}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var s=n[a]={exports:{}};return e[a](s,s.exports,t),s.exports}(()=>{"use strict";t(823),document.querySelectorAll(".set-bg").forEach((e=>{const n=e.dataset.setbg;e.style.backgroundImage=`url(${n})`})),(()=>{const e=document.querySelector(".preloder");e.classList.add("active"),setTimeout((()=>{e.classList.remove("active")}),500)})(),(()=>{const e=document.querySelector(".search-model");document.addEventListener("click",(n=>{n.target.closest(".icon_search")?e.style.display="block":n.target.closest(".search-close-switch")&&(e.style.display="none")}))})(),document.getElementById("scrollToTopButton").addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),console.log("%cОшибки ниже не на что не влияют!!!","font-size:50px; background:#F9F9F9; color:#581845; padding:10px; border-radius:10px; border: 3px solid #581845;"),(()=>{fetch("./db.json").then((e=>e.json())).then((a=>{const i=new URLSearchParams(window.location.search).get("ganre");let s=new Set;a.anime.forEach((e=>{s.add(e.ganre)})),t(a.anime.sort(((e,n)=>n.views-e.views)).splice(0,5)),n(a.anime.sort(((e,n)=>n.views-e.views)),i?[i]:s),e(s)}));const e=e=>{const n=document.querySelector(".header__menu .dropdown");n.innerHTML="",e.forEach((e=>{n.insertAdjacentHTML("beforeend",`\n            <li><a href="./categories.html?ganre=${e}">${e}</a></li>\n            `)}))},n=(e,n)=>{const t=document.querySelector(".product .col-lg-8");t.innerHTML="",n.forEach((n=>{const a=document.createElement("div"),i=document.createElement("div"),s=e.filter((e=>e.tags.includes(n)));i.classList.add("row"),a.insertAdjacentHTML("beforeend",`\n            <div class="row">\n                            <div class="col-lg-8 col-md-8 col-sm-8">\n                                <div class="section-title">\n                                    <h4>${n}</h4>\n                                </div>\n                            </div>\n                            <div class="col-lg-4 col-md-4 col-sm-4">\n                                <div class="btn__all">\n                                    <a href="/categories.html?ganre=${n}" class="primary-btn">View All <span class="arrow_right"></span></a>\n                                </div>\n                            </div>\n                        </div>\n            `),s.forEach((e=>{const n=document.createElement("ul");e.tags.forEach((e=>{n.insertAdjacentHTML("beforeend",`<li>${e}</li> `)})),i.insertAdjacentHTML("beforeend",`\n                <div class="col-lg-4 col-md-6 col-sm-6 hov" >\n                <div class="product__item">\n                 <div class="product__item__pic set-bg" data-setbg="${e.image}">\n                        <div class="ep">${e.rating} / 10</div>\n                         <div class="view"><i class="fa fa-eye"></i>${e.views}</div>\n                    </div>\n                    <div class="product__item__text">\n                                ${n.outerHTML}\n                <h5><a href="/anime-details.html?im=${e.id}">${e.title}</a></h5>\n                    </div>\n                </div>\n                </div>\n                `)})),i.querySelectorAll(".set-bg").forEach((e=>{e.style.backgroundImage=`url(${e.dataset.setbg})`})),a.append(i),t.append(a)}))},t=e=>{let n=document.querySelector(".filter__gallery");n.innerHTML="",e.forEach((e=>{n.insertAdjacentHTML("beforeend",`\n            <div class="product__sidebar__view__item set-bg mix"\n                                    data-setbg="${e.image}">\n                                    <div class="ep">${e.rating} / 10</div>\n                                    <div class="view"><i class="fa fa-eye"></i>${e.views}</div>\n                                    <h5><a href="/anime-details.html">${e.title}</a></h5>\n                                </div>`)})),n.querySelectorAll(".set-bg").forEach((e=>{e.style.backgroundImage=`url(${e.dataset.setbg})`}))}})(),new Swiper(".swiper",{pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},effect:"fade",speed:1e3})})()})();