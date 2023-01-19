var p=Object.defineProperty;var f=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(f(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const v="64b3c92bfa4e38eef2cd8c37cec0b44b",y=async r=>{try{const{location:e}=r;return await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${v}&units=metric`)).json()}catch{console.error("fdf")}};const m=()=>`
    <div class="Footer">
        Made by Viky for The Odin Project 2023
    </div>
    `,l=r=>{const{key:e,value:t}=r;return typeof t=="string"||typeof t=="number"?`
        <div class="InfoCard">
            <span class="key">${e}</span>
            <span class="value">${t}</span>
        </div>
        `:`
    <div class="InfoCard">
        <div class="key">${e}</div>
        <div class="value">
            ${Object.entries(t).map(s=>l({key:s[0],value:s[1]})).join("")}
        </div>
    </div>
    `},u=()=>(setTimeout(async()=>{const r=await y({location:i.location??"Imus"});if(r.cod==="404"){console.log(r);return}const e=Object.entries(r),t=document.querySelector(".Main"),s=document.createElement("div");s.innerHTML=`
            <div class="key">
                ${e[11][1]}
            </div>
            <div class="value">
            ${e.map(n=>{const o=n[0],a=n[1];return l({key:o,value:a})}).join("")}
            </div>
        `,t.innerHTML="",t.appendChild(s)}),`
    <div class="Main">
        
    </div>
    `),h=()=>(setTimeout(()=>{const r=document.querySelector(".Header > input");r.focus(),r.addEventListener("input",e=>{i.location=e.target.value;const t=document.querySelector(".Main");!t.outerHTML===u()&&(t.innerHTML="")})}),`
        <div class="Header">
            <span>Current Weather in </span></br>
            <input/>
        </div>
    `),d=class{};let i=d;c(i,"app",document.querySelector("#app")),c(i,"location","Imus"),c(i,"render",()=>{d.app.innerHTML=`
            ${h()}
            ${u()}
            ${m()}
        `});i.render();
