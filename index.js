import{S as a,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function u(o){return o.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
    <img
    width="360"
    height="152"
      class="gallery-image"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
    <ul class="descr-list">
  <li class="descr-item-likes">
    <h3 class="descr-title">Likes</h3>
    <p class="descr-num">${e.likes}</p>
  </li>
  <li class="descr-item-views">
    <h3 class="descr-title">Views</h3>
    <p class="descr-num">${e.views}</p>
  </li>
  <li class="descr-item-comments">
    <h3 class="descr-title">Comments</h3>
    <p class="descr-num">${e.comments}</p>
  </li>
  <li class="descr-item-downloads">
    <h3 class="descr-title">Downloads</h3>
    <p class="descr-num">${e.downloads}</p>
  </li>
</ul>
    </a>
    </li>`).join("")}const d="46388480-c15d12bd9d9852ccc018edcf5",m="https://pixabay.com/api/";function f(o){const s=`${m}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>e.json()).catch(e=>{throw e})}const h=new a(".imagebox a",{}),p=document.querySelector(".form"),l=document.querySelector(".imagebox");p.addEventListener("submit",g);function g(o){o.preventDefault(),l.innerHTML="";const s=o.target.elements.input.value.trim();if(!s){n.warning({message:"Try to enter the desired value",position:"topRight"});return}f(s).then(e=>{if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:400,backgroundColor:"#ef4040",messageColor:"#fff"});return}const i=u(e.hits);l.innerHTML=i,h.refresh()}).catch(e=>{n.error({title:"Hey",message:`${e.message}`})})}
//# sourceMappingURL=index.js.map
