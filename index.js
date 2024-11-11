import{A as S,S as g}from"./assets/vendor-DpF08Fhr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();function P(){const t=document.querySelector(".header-mob-button"),e=document.querySelector(".mob-menu-backdrop").classList,o=document.querySelector(".mob-close"),s=document.querySelectorAll(".mob-link"),n=document.querySelector(".header-modal-button"),r=document.querySelector(".header-menu"),c=document.querySelector(".tab-menu-hidden").classList,h=document.querySelector(".header-tab-button");r.addEventListener("click",()=>{c.toggle("is-open-menu")}),t.addEventListener("click",()=>{e.add("is-open")}),o.addEventListener("click",()=>{e.remove("is-open")}),n.addEventListener("click",a=>{u(a,n),e.remove("is-open")}),s.forEach(a=>{a.addEventListener("click",I=>{e.remove("is-open"),c.remove("is-open-menu"),u(I,a)})}),h.addEventListener("click",a=>{u(a,h)})}function u(t,e){t.preventDefault(),document.querySelector(e.getAttribute("href")).scrollIntoView({behavior:"smooth"})}const q="/makeUp/assets/icons-CvU_8lcp.svg";function $(){document.addEventListener("DOMContentLoaded",function(){new S(".accordion-container",{duration:700,showMultiple:!0}),document.querySelectorAll(".aboutme-ac-trigger").forEach(o=>{o.addEventListener("click",function(){t(o)})})});function t(e){const o=e.querySelector(".aboutme-accordeon-svg use"),r=e.closest(".aboutme-ac").classList.contains("is-active")?"#icon-accordeon_mobile_opened_svg-min":"#icon-accordeon_svg_mobile-min";o.setAttribute("href",`${q}${r}`)}}function B(){document.addEventListener("DOMContentLoaded",function(){document.querySelector(".swiper-slide"),new g(".swiper-container",{navigation:{nextEl:".swiper-button-next"},direction:"horizontal",spaceBetween:0,enabled:!0,loop:!0,watchOverflow:!0,keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},on:{slideChange:function(){const t=document.querySelectorAll(".aboutme-swiper-slide");t.forEach(o=>{o.style.backgroundColor=""});const e=t[this.activeIndex];e.style.backgroundColor="#ed3b44"}}})})}function D(){document.querySelectorAll(".bnf-button").forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth"})})})}function w(t){return`
    <svg width="15px" height="7.5px" class="faq-svg">
      <use href="${q}#${t}"></use>
    </svg>
  `}function H(){document.addEventListener("DOMContentLoaded",function(){new S(".faq-accordion-container",{duration:300,showMultiple:!0,collapse:!0})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-trigger").forEach(e=>{e.insertAdjacentHTML("beforeend",w("icon-accordeon_svg_mobile-min")),e.addEventListener("click",function(){this.classList.toggle("is-active");const s=this.classList.contains("is-active")?"icon-accordeon_mobile_opened_svg-min":"icon-accordeon_svg_mobile-min";this.querySelector(".faq-svg").outerHTML=w(s)})})})}const _=[{codeItemOne:"#Halloween2024",codeItemTwo:"#TrickOrTreat",codeItemThree:"#Wedding",codeItemFour:"#Ordinary",text:"Твоя краса — це твоя сила, а я лише допомагаю її розкрити. Кожен штрих пензля — це крок до твого бездоганного вигляду, який сяятиме у кожному моменті.",btnHref:"#footer",btnText:"Замовити макіяж"}];function R(){return _.map(({codeItemOne:t,codeItemTwo:e,codeItemThree:o,codeItemFour:s,text:n,btnHref:r,btnText:c})=>`<div class="top-part">
            <ul class="code-list">
              <li class="code-item">
                <p class="code-text">${t}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${e}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${o}</p>
              </li>
              <li class="code-item">
                <p class="code-text">${s}</p>
              </li>
            </ul>
            <p class="main-text">
              ${n}
            </p>
            <a href="${r}" class="main-button-a" id="projectBtn">${c}</a>
          </div>`).join("")}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("projectBtn");t&&t.addEventListener("click",e=>{e.preventDefault();const o=document.querySelector(t.getAttribute("href"));o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})})});const V=document.querySelector(".swiper-wrapper-js"),b=190;async function G(){const t=await fetch("/makeUp/reviews.json");if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}async function F(){let t=[];try{t=(await G()).reviews}catch(e){console.error(e)}t.forEach(e=>{const o=`
        <li class="swiper-slide review-card">
          <img src="${e.avatar_url}" class="review-img" alt="${e.author}" />
          <p class="review-name">${e.author}</p>
          <p class="review-text">${e.review.length>b?e.review.substring(0,b)+"...":e.review}</p>
        </li>`;V.insertAdjacentHTML("beforeend",o)})}const A=document.querySelector(".container-footer-modal"),U=document.querySelector(".hidden"),W=document.querySelector(".button-close"),L=document.querySelector(".modal"),l=document.querySelector(".input-email"),d=document.querySelector(".input-comments"),T=document.querySelector(".span-email-succes"),k=document.querySelector(".span-comments-succes"),M=document.querySelector(".span-email-invalid"),x=document.querySelector(".span-comments-invalid");let i={email:""};const N=document.querySelector(".form-footer");N.addEventListener("input",z);function z(t){const{email:e}=t.currentTarget.elements;i.email=e.value.trim(),i={email:i.email},i.email.includes(".")?i.email.includes("@")&&i.email.includes(".")&&!i.email.endsWith(".")&&(O(),p()):(C(),f())}function J(t){t.preventDefault();const e=t.target,o=e.elements.email.value.trim(),s=e.elements.comments.value.trim();if(o===""&&s===""){f(),E();return}else if(o===""||!s===""){f(),y();return}else if(s===""||!o===""){E(),p();return}else O(),Z(),p(),y(),K({email:o,comment:s});e.reset()}function K(t){const e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch("https://portfolio-js.b.goit.study/api/requests",e).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{const n=[o].map(r=>`<li>
            <h3 class="modal-footer-title">Дякую за зворотній зв'язок. <br/>Це дуже важливо для мене</h3>
          </li>
          <li>
            <p class="modal-footer-text">Зовсім скоро з вами зв'яжемось</p>
          </li>
        `).join("");L.insertAdjacentHTML("beforeend",n)}).catch(o=>console.log(o)),L.innerHTML="",Y()}function Y(){A.classList.remove("hidden"),W.addEventListener("click",m),U.addEventListener("click",m),document.addEventListener("keydown",Q)}function m(){A.classList.add("hidden"),C(),X()}function Q(t){t.code==="Escape"&&m()}function p(){l.classList.add("green"),T.classList.add("green")}function y(){d.classList.add("green"),k.classList.add("green")}function C(){l.classList.remove("green"),T.classList.remove("green")}function X(){d.classList.remove("green"),k.classList.remove("green")}function f(){l.classList.add("red"),M.classList.add("red")}function E(){d.classList.add("red"),x.classList.add("red")}function O(){l.classList.remove("red"),M.classList.remove("red")}function Z(){d.classList.remove("red"),x.classList.remove("red")}const v=document.querySelector(".go-top");v.addEventListener("click",ee);window.addEventListener("scroll",j);function j(){const t=window.scrollY,e=document.documentElement.clientHeight;t>e?v.classList.add("go-top-show"):v.classList.remove("go-top-show")}function ee(){window.scrollTo({top:0,behavior:"smooth"})}P();$();B();D();H();new g(".swiper",{direction:"horizontal",effect:"flip",speed:1e3,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1}});const te=document.querySelectorAll(".slide-part-js");te.forEach(t=>{t.insertAdjacentHTML("afterbegin",R())});F();new g(".review-swiper",{direction:"horizontal",loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,spaceBetween:16},768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}}});const oe=document.querySelector(".form-footer");oe.addEventListener("submit",J);j();
//# sourceMappingURL=index.js.map
