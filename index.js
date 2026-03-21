import{a as f,S as m,i as a}from"./assets/vendor-D8kWkXeg.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="55065937-212aaf594fb16882d72e56cb6",p="https://pixabay.com/api/";function h(i){return f.get(p,{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data).catch(o=>(console.error("Помилка запиту:",o),null))}const c=document.querySelector(".gallery"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".loader");function g(i){const o=i.map(t=>`<li>
    <a class="small-image" href="${t.largeImageURL}">
      <img class="modal-image" src="${t.webformatURL}" alt="${t.tags}">
      <div class="image-info">
        <div class="info-item">
          <p class="info-title">Likes</p>
          <p class="info-number">${t.likes}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Views</p>
          <p class="info-number">${t.views}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Comments</p>
          <p class="info-number">${t.comments}</p>
        </div>
        <div class="info-item">
          <p class="info-title">Downloads</p>
          <p class="info-number">${t.downloads}</p>
        </div>
      </div>
    </a>
  </li>`).join("");c.innerHTML=o,y.refresh()}function F(){c.innerHTML=""}function v(){u.classList.add("visible")}function b(){u.classList.remove("visible")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const t=l.querySelector('input[name="search-text"]').value.trim();if(!t){a.error({title:"Error",message:"Please enter a search term!"});return}F(),v(),h(t).then(s=>{if(!s||s.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",iconColor:"#FFFFFF",color:"#FFFFFF"});return}g(s.hits)}).catch(s=>{console.error(s),a.error({message:"Помилка при запиті!"})}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
