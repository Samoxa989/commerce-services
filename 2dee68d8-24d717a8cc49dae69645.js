"use strict";(self.webpackChunkcommerce_services=self.webpackChunkcommerce_services||[]).push([[206],{91515:function(e,t,n){var l=n(15785),i=n(64572),r=n(15007),o=n(1597),a=n(64983),s=n(87990),d=n(26777),u=n(44264),c=n(42075),p=n(23576),v=n(69679),m=n(56013),h=n(24149),f=n(48261),g=n(31160),b=n(21183),y=n(45553),x=n(47029),Z=n(60325),w=n(1931),P=n(54360);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const C=e=>{let{childrenArray:t,query:n,hasSideNav:l}=e;const i=[];let o=null,a=null;for(;t.length;){const e=t[0];let s=0;Object.keys(P.a).forEach((d=>{var c;if((null==e||null===(c=e.props)||void 0===c?void 0:c.mdxType)===d){s++;let d=[];if(e.props.slots||e.props.repeat){const n=Math.max(parseInt(e.props.repeat)||1,1);for(let l=0;l<n;l++)d=d.concat((e.props.slots||"element").split(",").map(((e,i)=>[""+e.trim()+(1===n?"":l),t[d.length+i+1]])))}if(d.length){s+=d.length;const t=Object.fromEntries(d);"Variant"===e.props.mdxType&&(t.query=n),"Hero"===e.props.mdxType&&l&&(t.width="calc("+u.Av+" - "+u.dP+");");const c=(0,r.cloneElement)(e,j({},t));"Hero"===e.props.mdxType?o=o||c:"Resources"===e.props.mdxType?a=a||c:i.push(c)}else i.push(e)}})),0===s&&(s++,i.push(e)),t=t.splice(s)}return{filteredChildren:i,heroChild:o,resourcesChild:a}};var q={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},A={name:"4zleql",styles:"display:block"},k={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},z={name:"zjik7",styles:"display:flex"},D={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};t.Z=e=>{var t;let{children:n,pageContext:i,query:O}=e;const{hasSideNav:M,siteMetadata:N,location:S,allSitePage:E,allMdx:T,allGithub:_,allGithubContributors:B}=(0,r.useContext)(d.ZP),L=void 0===i;let X=r.Children.toArray(n);if(L||"none"===(null==i||null===(t=i.frontmatter)||void 0===t?void 0:t.layout)){const{filteredChildren:e}=C({childrenArray:(0,Z.L)(X),query:O,hasSideNav:M});return L?(0,s.tZ)(a.MDXProvider,null,e):(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},e,(0,s.tZ)(c.$,{hasSideNav:M}))}{var G,H,Y,J,K,R,$,I,V,F,Q,U,W,ee,te,ne,le,ie,re,oe;const e=(0,u.kR)(null==S?void 0:S.pathname,null==N?void 0:N.subPages),t=(0,u.P4)(null==S?void 0:S.pathname,null==N?void 0:N.subPages),{nextPage:n,previousPage:r}=(0,u.sl)(null==S?void 0:S.pathname,null==N?void 0:N.subPages),d=null==i||null===(G=i.frontmatter)||void 0===G?void 0:G.contributor_name,O=null==i||null===(H=i.frontmatter)||void 0===H?void 0:H.contributor_link,L=null==i||null===(Y=i.frontmatter)||void 0===Y?void 0:Y.edition,ae=null==E?void 0:E.nodes.find((e=>{let{path:t}=e;return(0,o.dq)(t)===(null==S?void 0:S.pathname)})),se=null!==(J=null==ae?void 0:ae.component)&&void 0!==J?J:"",de=null==T?void 0:T.nodes.find((e=>{let{fileAbsolutePath:t}=e;return t===se})),ue=null!==(K=null==de?void 0:de.tableOfContents)&&void 0!==K?K:{},{repository:ce,default_branch:pe,root:ve}=null==_?void 0:_.nodes[0],me=null==B?void 0:B.nodes.find((e=>{let{path:t}=e;return t===se})),he=null!==(R=null==me?void 0:me.contributors)&&void 0!==R?R:[],fe=se.replace(/.*\/src\/pages\//g,""),ge=void 0!==(null==i||null===($=i.frontmatter)||void 0===$?void 0:$.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof ge)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");const{home:be}=N,ye=(0,u.A6)(S.pathname),xe=(0,u.Gh)(null==N?void 0:N.pages),Ze=(0,u.Yx)(ye,xe),we=(0,u.xH)(ye,Ze),Pe=(0,u.Lh)(null==S?void 0:S.pathname,null==N?void 0:N.subPages);let Oe=[];if(Pe.length){const e=Pe[Pe.length-1].level+1;for(let t=0;t<e;t++){const e=Pe.filter((e=>e.level===t));e.length&&Oe.push(e.pop())}}let je=!1;null!=i&&null!==(I=i.frontmatter)&&void 0!==I&&I.jsDoc&&(je=!0,X=(0,Z.L)(X));const{filteredChildren:Ce,heroChild:qe,resourcesChild:Ae}=C({childrenArray:X,hasSideNav:M}),ke=null===qe,ze=null!==qe&&(!qe.props.variant||"default"===qe.props.variant),De=null!==qe&&qe.props.variant&&"default"!==qe.props.variant,Me=null==ue||null===(V=ue.items)||void 0===V||null===(F=V[0])||void 0===F?void 0:F.items,Ne=!qe&&(M||je)&&Me&&(Me.length>1||1===Me.length&&(null===(Q=Me[0])||void 0===Q||null===(U=Q.items)||void 0===U?void 0:U.length)>1||(null===(W=Me[0])||void 0===W?void 0:W.title)),Se=(null==e?void 0:e.pathname)===(null==t||null===(ee=t[0])||void 0===ee?void 0:ee.pathname),Ee=12,Te=[];return Ne&&Te.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),M&&Te.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},w.t),P.a)},(0,s.tZ)("main",{css:D},qe&&qe,(0,s.tZ)("div",{css:(0,s.iv)(De?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",ze&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:z},(0,s.tZ)("div",{css:(0,s.iv)("width:",De?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(Ee,Te),";@media screen and (max-width: ",u.Av,"){width:100%;}")},ke&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!ge&&Ze&&(0,s.tZ)("div",{css:k},!0!==(null==be?void 0:be.hidden)&&null!=be&&be.title&&null!=be&&be.href?(0,s.tZ)(h.O,{pages:[u.JK,be,j(j({},Ze),{},{href:(0,o.dq)(Ze.href)}),we&&j(j({},we),{},{href:(0,o.dq)(we.href)})].concat((0,l.Z)(Oe.map((e=>j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})))))}):(0,s.tZ)(h.O,{pages:[u.JK,(null==N||null===(te=N.pages)||void 0===te?void 0:te.length)>1?j(j({},null==N||null===(ne=N.pages)||void 0===ne?void 0:ne[0]),{},{href:(0,o.dq)(null==N||null===(le=N.pages)||void 0===le||null===(ie=le[0])||void 0===ie?void 0:ie.href)}):null,j(j({},Ze),{},{href:(0,o.dq)(Ze.href)}),we&&j(j({},we),{},{href:(0,o.dq)(we.href)})].concat((0,l.Z)(Oe.map((e=>e.title===(null==Ze?void 0:Ze.title)&&e.href===(null==Ze?void 0:Ze.href)?null:j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(m.X,{repository:ce,branch:pe,root:ve,pagePath:fe}))),(0,s.tZ)("div",{css:A},L&&(0,s.tZ)(g.c,{name:L}),O&&(0,s.tZ)(f.x,{name:d,link:O})),Ce,ke&&Se&&(0,s.tZ)(y.x,{pages:t}),ke&&(0,s.tZ)(x.m,{nextPage:n,previousPage:r}),!De&&(0,s.tZ)("div",{css:q},(0,s.tZ)("div",null,(0,s.tZ)(p.T,{repository:ce,branch:pe,root:ve,pagePath:fe,contributors:he,externalContributors:null==i||null===(re=i.frontmatter)||void 0===re?void 0:re.contributors,date:null!==(oe=he[0])&&void 0!==oe&&oe.date?new Date(he[0].date).toLocaleDateString():""})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(v.x,null)))),Ne&&(0,s.tZ)(b.m,{tableOfContents:ue}),Ae&&Ae)),(0,s.tZ)(c.$,{hasSideNav:M})))}}}}]);
//# sourceMappingURL=2dee68d8-24d717a8cc49dae69645.js.map