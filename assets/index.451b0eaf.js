import{r as e,o as t,c as o,a as r,b as n,d as s,O as a}from"./vendor.26c7e9bc.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const a=new URL(e,r);if(self[t].moduleMap[a])return o(self[t].moduleMap[a]);const i=new Blob([`import * as m from '${a}';`,`${t}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),n(c)},onload(){o(self[t].moduleMap[a]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const i={};let c;i.render=function(r,n){const s=e("router-view");return t(),o(s)};const m={},p=function(e,t){if(!t)return e();if(void 0===c){const e=document.createElement("link").relList;c=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in m)return;m[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":c,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},d=n({history:r(),routes:[{path:"/",component:()=>p((()=>__import__("./index.ee824286.js")),["/assets/index.ee824286.js","/assets/index.6111194c.css","/assets/vendor.26c7e9bc.js"])},{path:"/login",name:"login",component:()=>p((()=>__import__("./login.7d840edf.js")),["/assets/login.7d840edf.js","/assets/login.6780100e.css","/assets/vendor.26c7e9bc.js"])},{path:"/index",name:"index",component:()=>p((()=>__import__("./index.ee824286.js")),["/assets/index.ee824286.js","/assets/index.6111194c.css","/assets/vendor.26c7e9bc.js"])},{path:"/error",name:"error",component:()=>p((()=>__import__("./error.5a8f8c55.js")),["/assets/error.5a8f8c55.js","/assets/error.de8cea1c.css","/assets/vendor.26c7e9bc.js"])},{path:"/404",name:"404",component:()=>p((()=>__import__("./404.b63d1ff0.js")),["/assets/404.b63d1ff0.js","/assets/404.ffbf81a6.css","/assets/vendor.26c7e9bc.js"])}]});const l=s(i);l.use(d),l.use(a),l.mount("#app"),d.beforeEach(((e,t,o)=>{e.name?o():o({path:"/404"})}));
