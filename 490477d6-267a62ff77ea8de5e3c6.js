"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[3258],{6700:function(e,t,s){s.d(t,{h:function(){return H}});var a=s(54506),i=s(64467),r=s(88763),n=s(40595),l=s(767),c=s(28227),o=s(16992),m=s(73355),d=s(89745);function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}const p=[{title:"Last updated",value:"last_updated",filter:e=>e.sort(((e,t)=>{let{lastUpdated:s}=e,{lastUpdated:a}=t;return new Date(a)>new Date(s)?1:new Date(a)<new Date(s)?-1:0}))},{title:"Name",value:"name",filter:e=>e.sort(((e,t)=>{let{name:s}=e,{name:a}=t;return s.localeCompare(a)}))},{title:"Custom",value:"id",filter:function(e,t){void 0===t&&(t=[]);const s=[];return t.forEach((t=>{const a=e.find((e=>{let{id:s}=e;return s===t}));a&&s.push(a)})),s}}];var g={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},f={name:"qtxyu6",styles:"margin:var(--gap) 0 0 var(--gap)"},v={name:"jfisvt",styles:"height:auto;margin-bottom:0!important"},y={name:"lb9ais",styles:"font-size:var(--spectrum-global-dimension-size-200)"},b={name:"18q6r0i",styles:"margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-100)!important"},h={name:"4iuuc6",styles:"height:var(--spectrum-global-dimension-size-600);width:var(--spectrum-global-dimension-size-600);margin-bottom:var(--spectrum-global-dimension-size-200)"},w={name:"1b40y0w",styles:"height:var(--spectrum-global-dimension-size-3000);overflow:auto;text-align:left"},x={name:"82a6rk",styles:"flex:1"},Y={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},z={name:"16hp6jg",styles:"margin-top:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column"},j={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},O={name:"1e17bzi",styles:"display:flex;align-items:flex-start;flex-direction:column"},C={name:"wyj2j9",styles:"display:flex;align-items:flex-end;width:var(--spectrum-global-dimension-size-3000);flex-direction:column"},A={name:"1xl5zih",styles:"display:flex;align-items:center;height:var(--spectrum-global-dimension-size-800);justify-content:flex-end;margin-right:var(--spectrum-global-dimension-size-400)"};const H=e=>{let{clouds:t=[],products:s=[],interaction:H=!1,orderBy:N="last_updated",filterByCloud:S=[],filterByIds:k=[]}=e;k.length&&(N="id");const D=p.find((e=>{let{value:t}=e;return t===N}));D.ids=k;const{0:P,1:B}=(0,r.useState)(D.value),{0:_,1:E}=(0,r.useState)(D.filter(s,D.ids)),{0:q,1:L}=(0,r.useState)(S);(0,r.useEffect)((()=>{((e,t,s,a)=>{const i=e.filter((e=>{let{cloud:s}=e;return t.some((e=>s===e))})),r=p.find((e=>{let{value:t}=e;return t===s}));a(r.filter(i,r.ids))})(s,q.length?q:t,P,E)}),[q,P]);const X="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-500))",F="calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-800))";return(0,n.Y)("section",{className:"spectrum--light",css:(0,n.AH)("max-width:",d.fy,";margin:var(--spectrum-global-dimension-size-400) auto;","")},H&&(0,n.Y)("div",{css:A},(0,n.Y)(o.L,{isQuiet:!0,items:p.slice(0,2).map((e=>e.value===N?function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){(0,i.A)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({selected:!0},e):e)),"aria-label":"Filter by name or last updated product",onChange:e=>{B(p[e].value)}})),(0,n.Y)("div",{css:(0,n.AH)("display:flex;@media screen and (max-width: ",d.fy,"){align-items:flex-start;flex-wrap:wrap;}","")},H&&(0,n.Y)("div",{css:C},(0,n.Y)("div",{css:O},(0,n.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:j},"Filter by"),(0,n.Y)("div",{css:z},t.map(((e,t)=>(0,n.Y)(c.S,{key:t,value:e,onChange:t=>{L(t?[].concat((0,a.A)(q),[e]):q.filter((t=>t!==e)))},css:Y},e)))))),(0,n.Y)("div",{css:x},(0,n.Y)("div",{css:(0,n.AH)("display:grid;grid-template-columns:repeat(auto-fit, ",F,");grid-auto-rows:",X,";justify-content:center;gap:var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",d.fy,"){margin-top:var(--spectrum-global-dimension-size-400);display:flex;flex-wrap:wrap;}","")},_.map((e=>(0,n.Y)("div",{key:e.id,role:"figure",tabIndex:"0",className:"spectrum-Card spectrum-Card--sizeM",css:(0,n.AH)("width:",F,";height:",X,";&:hover{border-color:var(--spectrum-global-color-gray-200);}@media screen and (max-width: ",d.fy,"){width:0;}","")},(0,n.Y)("div",{className:"spectrum-Card-body",css:w},(0,n.Y)("div",null,e.icon&&(0,n.Y)("div",{css:h},(0,n.Y)(m._,{src:e.icon,"aria-hidden":"true",alt:""}))),(0,n.Y)("div",{className:"spectrum-Card-header spectrum-Heading spectrum-Heading--sizeXXS",css:b},(0,n.Y)("div",{className:"spectrum-Card-title",css:y},(0,n.Y)("strong",null,e.name))),(0,n.Y)("div",{className:"spectrum-Card-content spectrum-Body spectrum-Body--sizeS",css:v},e.description)),(0,n.Y)("div",{className:"spectrum-Card-footer"},(0,n.Y)("div",{css:(0,n.AH)("display:flex;justify-content:flex-end;flex-wrap:wrap;--gap:var(--spectrum-global-dimension-size-200);margin:calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));width:calc(100% + var(--gap));@media screen and (max-width: ",d.fy,"){justify-content:center;}","")},e.discover&&(0,n.Y)("div",{css:f},(0,n.Y)(l.A,{href:e.discover,variant:"secondary",style:"outline"},(0,n.Y)("span",{class:"spectrum-Button-label"},"Learn more"))),e.docs&&(0,n.Y)("div",{css:g},(0,n.Y)(l.A,{href:e.docs,variant:"accent",style:"outline"},(0,n.Y)("span",{class:"spectrum-Button-label"},"View docs"))))))))))))}}}]);
//# sourceMappingURL=490477d6-267a62ff77ea8de5e3c6.js.map