import{i as l}from"./assets/vendor-17o45ynk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function a(o){return o.map(e=>`<li class="gallery-item">
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
    </li>`).join("")}const u="46388480-c15d12bd9d9852ccc018edcf5",d="https://pixabay.com/api/";function m(o){const s=`${d}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>e.json()).catch(e=>{throw e})}console.log(document);const f=document.querySelector(".form"),n=document.querySelector(".imagebox");f.addEventListener("submit",h);function h(o){o.preventDefault(),n.innerHTML="";const s=o.target.elements.input.value.trim();if(!s){l.warning({title:"Hey",message:"It's alive! Congratulations!"});return}m(s).then(e=>{if(e.hits.length===0){l.error({title:"Hey",message:"Sorry, there are no images matching your search query. Please try again!"});return}console.log(e);const c=a(e.hits);n.innerHTML=c,console.log(c)}).catch(e=>{l.error({title:"Hey",message:`${e.message}`})})}
//# sourceMappingURL=index.js.map
