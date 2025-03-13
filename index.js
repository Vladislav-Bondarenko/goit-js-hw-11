import{a as d,S as m,i as l}from"./assets/vendor-DtRopbQG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="49317113-6ec0477c2a8a63e568c804eb9",y="https://pixabay.com/api/";async function g(s){try{return(await d.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{throw new Error("Failed to fetch images")}}const h=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(){u.style.display="block"}function w(){u.style.display="none"}function S(s){h.innerHTML=s.map(({webformatURL:t,largeImageURL:o,tags:n,likes:e,views:r,comments:i,downloads:f})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${t}" alt="${n}" />
        </a>
        <div class="info">
          <p> Likes ${e}</p>
          <p> Views ${r}</p>
          <p> Comments ${i}</p>
          <p> Downloads ${f}</p>
        </div>
      </li>`).join(""),L.refresh()}const q=document.querySelector(".form"),a=document.querySelector('input[name="search-text"]'),v=document.querySelector(".gallery");q.addEventListener("submit",async s=>{s.preventDefault();const t=a.value.trim();if(!t){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight",backgroundColor:"#ffc107",theme:"dark",progressBarColor:"#ffd54f",timeout:3e3});return}v.innerHTML="",b();try{const o=await g(t);o.length===0?(c(),a.classList.add("error"),setTimeout(()=>a.classList.remove("error"),1e3)):S(o)}catch{c(),a.classList.add("error"),setTimeout(()=>a.classList.remove("error"),1e3)}finally{w()}});function c(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ff4444",theme:"dark",progressBarColor:"#ff6666",timeout:5e3})}
//# sourceMappingURL=index.js.map
