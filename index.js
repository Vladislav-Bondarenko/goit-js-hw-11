import{a as f,S as m,i as l}from"./assets/vendor-DtRopbQG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="49317113-6ec0477c2a8a63e568c804eb9",y="https://pixabay.com/api/";async function g(s){try{return(await f.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{throw new Error("Failed to fetch images")}}const h=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new m(".gallery a",{captionsData:"alt",captionDelay:250});function w(){u.style.display="block"}function b(){u.style.display="none"}function S(s){h.innerHTML=s.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:r,comments:a,downloads:d})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${t}" alt="${i}" />
        </a>
        <div class="info">
          <p> Likes ${e}</p>
          <p> Views ${r}</p>
          <p> Comments ${a}</p>
          <p> Downloads ${d}</p>
        </div>
      </li>`).join(""),L.refresh()}const q=document.querySelector(".form"),n=document.querySelector('input[name="search-text"]'),v=document.querySelector(".gallery");q.addEventListener("submit",async s=>{s.preventDefault();const t=n.value.trim();if(!t){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight",backgroundColor:"#ffc107",theme:"dark",progressBarColor:"#ffd54f",timeout:3e3});return}v.innerHTML="",w();try{const[o]=await Promise.all([g(t),new Promise(i=>setTimeout(i,500))]);o.length===0?(c(),n.classList.add("error"),setTimeout(()=>n.classList.remove("error"),1e3)):S(o)}catch{c(),n.classList.add("error"),setTimeout(()=>n.classList.remove("error"),1e3)}finally{b()}});function c(){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ff4444",theme:"dark",progressBarColor:"#ff6666",timeout:5e3,displayMode:2,layout:2})}
//# sourceMappingURL=index.js.map
