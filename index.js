import"./assets/vendor-Bgfrje-I.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i="46388480-c15d12bd9d9852ccc018edcf5",u="https://pixabay.com/api/";function l(n){const r=`${u}?key=${i}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(o=>o.json()).catch(o=>console.log(o))}const f=document.querySelector(".form");f.addEventListener("submit",a);function a(n){n.preventDefault();const r=n.target.elements.input.value.trim();l(r).then(o=>console.log(o))}
//# sourceMappingURL=index.js.map
