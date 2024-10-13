import{d as i}from"./assets/vendor-DQZVfDfk.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function n(c){return c.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.original}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
    <ul class="descr-list">
  <li class="descr-item">
    <h3 class="descr-title">Likes</h3>
    <p class="descr-num">${e.likes}</p>
  </li>
  <li class="descr-item">
    <h3 class="descr-title">Views</h3>
    <p class="descr-num">${e.views}</p>
  </li>
  <li class="descr-item">
    <h3 class="descr-title">Comments</h3>
    <p class="descr-num">${e.comments}</p>
  </li>
  <li class="descr-item">
    <h3 class="descr-title">Downloads</h3>
    <p class="descr-num">${e.downloads}</p>
  </li>
</ul>
    </a>
    </li>`).join("")}const a="46388480-c15d12bd9d9852ccc018edcf5",u="https://pixabay.com/api/";function d(c){const r=`${u}?key=${a}&q=${c}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>e.json()).catch(e=>console.log(e))}console.log(i);const m=i.querySelector(".form");i.querySelector(".imagebox");m.addEventListener("submit",f);function f(c){c.preventDefault();const r=c.target.elements.input.value.trim();d(r).then(e=>{console.log(e);const o=n(e.hits);console.log(o)})}
//# sourceMappingURL=index.js.map
