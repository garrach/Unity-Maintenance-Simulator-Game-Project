import{R as Wn,r as vn,j as l,d as A}from"./app-BUPJ0MyC.js";import{P as g}from"./index-BgVfiXLj.js";function bn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?bn(Object(e),!0).forEach(function(a){P(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):bn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Pt(t){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pt(t)}function ke(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function gn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function we(t,n,e){return n&&gn(t.prototype,n),e&&gn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function tn(t,n){return Oe(t)||Pe(t,n)||Hn(t,n)||je()}function mt(t){return Ae(t)||Se(t)||Hn(t)||Ee()}function Ae(t){if(Array.isArray(t))return Yt(t)}function Oe(t){if(Array.isArray(t))return t}function Se(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pe(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Hn(t,n){if(t){if(typeof t=="string")return Yt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Yt(t,n)}}function Yt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function Ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var pn=function(){},nn={},Gn={},Xn=null,Bn={mark:pn,measure:pn};try{typeof window<"u"&&(nn=window),typeof document<"u"&&(Gn=document),typeof MutationObserver<"u"&&(Xn=MutationObserver),typeof performance<"u"&&(Bn=performance)}catch{}var Ne=nn.navigator||{},hn=Ne.userAgent,yn=hn===void 0?"":hn,W=nn,y=Gn,xn=Xn,bt=Bn;W.document;var D=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Vn=~yn.indexOf("MSIE")||~yn.indexOf("Trident/"),gt,pt,ht,yt,xt,z="___FONT_AWESOME___",$t=16,qn="fa",Kn="svg-inline--fa",K="data-fa-i2svg",Ut="data-fa-pseudo-element",Ce="data-fa-pseudo-element-pending",en="data-prefix",an="data-icon",kn="fontawesome-i2svg",Ie="async",Te=["HTML","HEAD","STYLE","SCRIPT"],Qn=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",rn=[h,x];function dt(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[h]}})}var st=dt((gt={},P(gt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),P(gt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),gt)),ft=dt((pt={},P(pt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(pt,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),pt)),lt=dt((ht={},P(ht,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(ht,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ht)),_e=dt((yt={},P(yt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(yt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),yt)),Le=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Jn="fa-layers-text",Me=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ze=dt((xt={},P(xt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(xt,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),xt)),Zn=[1,2,3,4,5,6,7,8,9,10],Re=Zn.concat([11,12,13,14,15,16,17,18,19,20]),Fe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],V={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ct=new Set;Object.keys(ft[h]).map(ct.add.bind(ct));Object.keys(ft[x]).map(ct.add.bind(ct));var De=[].concat(rn,mt(ct),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",V.GROUP,V.SWAP_OPACITY,V.PRIMARY,V.SECONDARY]).concat(Zn.map(function(t){return"".concat(t,"x")})).concat(Re.map(function(t){return"w-".concat(t)})),it=W.FontAwesomeConfig||{};function Ye(t){var n=y.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function $e(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var Ue=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ue.forEach(function(t){var n=tn(t,2),e=n[0],a=n[1],r=$e(Ye(e));r!=null&&(it[a]=r)})}var te={styleDefault:"solid",familyDefault:"classic",cssPrefix:qn,replacementClass:Kn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);var et=m(m({},te),it);et.autoReplaceSvg||(et.observeMutations=!1);var v={};Object.keys(te).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(e){et[t]=e,ot.forEach(function(a){return a(v)})},get:function(){return et[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){et.cssPrefix=n,ot.forEach(function(e){return e(v)})},get:function(){return et.cssPrefix}});W.FontAwesomeConfig=v;var ot=[];function We(t){return ot.push(t),function(){ot.splice(ot.indexOf(t),1)}}var $=$t,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function He(t){if(!(!t||!D)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=y.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(n,a),t}}var Ge="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ut(){for(var t=12,n="";t-- >0;)n+=Ge[Math.random()*62|0];return n}function at(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function on(t){return t.classList?at(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ne(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xe(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(ne(t[e]),'" ')},"").trim()}function Ct(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function sn(t){return t.size!==L.size||t.x!==L.x||t.y!==L.y||t.rotate!==L.rotate||t.flipX||t.flipY}function Be(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:u}}function Ve(t){var n=t.transform,e=t.width,a=e===void 0?$t:e,r=t.height,i=r===void 0?$t:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Vn?f+="translate(".concat(n.x/$-a/2,"em, ").concat(n.y/$-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/$,"em), calc(-50% + ").concat(n.y/$,"em)) "):f+="translate(".concat(n.x/$,"em, ").concat(n.y/$,"em) "),f+="scale(".concat(n.size/$*(n.flipX?-1:1),", ").concat(n.size/$*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var qe=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ee(){var t=qn,n=Kn,e=v.cssPrefix,a=v.replacementClass,r=qe;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var wn=!1;function Mt(){v.autoAddCss&&!wn&&(He(ee()),wn=!0)}var Ke={mixout:function(){return{dom:{css:ee,insertCss:Mt}}},hooks:function(){return{beforeDOMElementCreation:function(){Mt()},beforeI2svg:function(){Mt()}}}},R=W||{};R[z]||(R[z]={});R[z].styles||(R[z].styles={});R[z].hooks||(R[z].hooks={});R[z].shims||(R[z].shims=[]);var _=R[z],ae=[],Qe=function t(){y.removeEventListener("DOMContentLoaded",t),Et=1,ae.map(function(n){return n()})},Et=!1;D&&(Et=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Et||y.addEventListener("DOMContentLoaded",Qe));function Je(t){D&&(Et?setTimeout(t,0):ae.push(t))}function vt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ne(t):"<".concat(n," ").concat(Xe(a),">").concat(i.map(vt).join(""),"</").concat(n,">")}function An(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var Ze=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},zt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?Ze(e,r):e,f,u,c;for(a===void 0?(f=1,c=n[i[0]]):(f=0,c=a);f<o;f++)u=i[f],c=s(c,n[u],u,n);return c};function ta(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Wt(t){var n=ta(t);return n.length===1?n[0].toString(16):null}function na(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function On(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Ht(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=On(n);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(t,On(n)):_.styles[t]=m(m({},_.styles[t]||{}),i),t==="fas"&&Ht("fa",n)}var kt,wt,At,J=_.styles,ea=_.shims,aa=(kt={},P(kt,h,Object.values(lt[h])),P(kt,x,Object.values(lt[x])),kt),fn=null,re={},ie={},oe={},se={},fe={},ra=(wt={},P(wt,h,Object.keys(st[h])),P(wt,x,Object.keys(st[x])),wt);function ia(t){return~De.indexOf(t)}function oa(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ia(r)?r:null}var le=function(){var n=function(i){return zt(J,function(o,s,f){return o[f]=zt(s,i,{}),o},{})};re=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),ie=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),fe=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in J||v.autoFetchSvg,a=zt(ea,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});oe=a.names,se=a.unicodes,fn=It(v.styleDefault,{family:v.familyDefault})};We(function(t){fn=It(t.styleDefault,{family:v.familyDefault})});le();function ln(t,n){return(re[t]||{})[n]}function sa(t,n){return(ie[t]||{})[n]}function q(t,n){return(fe[t]||{})[n]}function ce(t){return oe[t]||{prefix:null,iconName:null}}function fa(t){var n=se[t],e=ln("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H(){return fn}var cn=function(){return{prefix:null,iconName:null,rest:[]}};function It(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?h:e,r=st[a][t],i=ft[a][t]||ft[a][r],o=t in _.styles?t:null;return i||o||null}var Sn=(At={},P(At,h,Object.keys(lt[h])),P(At,x,Object.keys(lt[x])),At);function Tt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},P(n,h,"".concat(v.cssPrefix,"-").concat(h)),P(n,x,"".concat(v.cssPrefix,"-").concat(x)),n),o=null,s=h;(t.includes(i[h])||t.some(function(u){return Sn[h].includes(u)}))&&(s=h),(t.includes(i[x])||t.some(function(u){return Sn[x].includes(u)}))&&(s=x);var f=t.reduce(function(u,c){var d=oa(v.cssPrefix,c);if(J[c]?(c=aa[s].includes(c)?_e[s][c]:c,o=c,u.prefix=c):ra[s].indexOf(c)>-1?(o=c,u.prefix=It(c,{family:s})):d?u.iconName=d:c!==v.replacementClass&&c!==i[h]&&c!==i[x]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var b=o==="fa"?ce(u.iconName):{},p=q(u.prefix,u.iconName);b.prefix&&(o=null),u.iconName=b.iconName||p||u.iconName,u.prefix=b.prefix||u.prefix,u.prefix==="far"&&!J.far&&J.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},cn());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(J.fass||v.autoFetchSvg)&&(f.prefix="fass",f.iconName=q(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var la=function(){function t(){ke(this,t),this.definitions={}}return we(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=m(m({},e.definitions[s]||{}),o[s]),Ht(s,o[s]);var f=lt[h][s];f&&Ht(f,o[s]),le()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,u=o.icon,c=u[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(e[s][d]=u)}),e[s][f]=u}),e}}]),t}(),Pn=[],Z={},nt={},ca=Object.keys(nt);function ua(t,n){var e=n.mixoutsTo;return Pn=t,Z={},Object.keys(nt).forEach(function(a){ca.indexOf(a)===-1&&delete nt[a]}),Pn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Pt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(nt)}),e}function Gt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=Z[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function Q(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=Z[t]||[];r.forEach(function(i){i.apply(null,e)})}function F(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,n):void 0}function Xt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||H();if(n)return n=q(e,n)||n,An(ue.definitions,e,n)||An(_.styles,e,n)}var ue=new la,ma=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,Q("noAuto")},da={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(Q("beforeI2svg",n),F("pseudoElements2svg",n),F("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Je(function(){ba({autoReplaceSvgRoot:e}),Q("watch",n)})}},va={icon:function(n){if(n===null)return null;if(Pt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:q(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=It(n[0]);return{prefix:a,iconName:q(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(Le))){var r=Tt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=H();return{prefix:i,iconName:q(i,n)||n}}}},T={noAuto:ma,config:v,dom:da,parse:va,library:ue,findIconDefinition:Xt,toHtml:vt},ba=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?y:e;(Object.keys(_.styles).length>0||v.autoFetchSvg)&&D&&v.autoReplaceSvg&&T.dom.i2svg({node:a})};function _t(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return vt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(D){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ga(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(sn(o)&&e.found&&!a.found){var s=e.width,f=e.height,u={x:s/f/2,y:.5};r.style=Ct(m(m({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function pa(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function un(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,c=t.titleId,d=t.extra,b=t.watchable,p=b===void 0?!1:b,O=a.found?a:e,j=O.width,k=O.height,C=r==="fak",w=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(Y){return d.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(d.classes).join(" "),S={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(k)})},I=C&&!~d.classes.indexOf("fa-fw")?{width:"".concat(j/k*16*.0625,"em")}:{};p&&(S.attributes[K]=""),f&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(c||ut())},children:[f]}),delete S.attributes.title);var E=m(m({},S),{},{prefix:r,iconName:i,main:e,mask:a,maskId:u,transform:o,symbol:s,styles:m(m({},I),d.styles)}),X=a.found&&e.found?F("generateAbstractMask",E)||{children:[],attributes:{}}:F("generateAbstractIcon",E)||{children:[],attributes:{}},B=X.children,Lt=X.attributes;return E.children=B,E.attributes=Lt,s?pa(E):ga(E)}function En(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(u[K]="");var c=m({},o.styles);sn(r)&&(c.transform=Ve({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var d=Ct(c);d.length>0&&(u.style=d);var b=[];return b.push({tag:"span",attributes:u,children:[n]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function ha(t){var n=t.content,e=t.title,a=t.extra,r=m(m(m({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=Ct(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Rt=_.styles;function Bt(t){var n=t[0],e=t[1],a=t.slice(4),r=tn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(V.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(V.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(V.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var ya={found:!1,width:512,height:512};function xa(t,n){!Qn&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Vt(t,n){var e=n;return n==="fa"&&v.styleDefault!==null&&(n=H()),new Promise(function(a,r){if(F("missingIconAbstract"),e==="fa"){var i=ce(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Rt[n]&&Rt[n][t]){var o=Rt[n][t];return a(Bt(o))}xa(t,n),a(m(m({},ya),{},{icon:v.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var jn=function(){},qt=v.measurePerformance&&bt&&bt.mark&&bt.measure?bt:{mark:jn,measure:jn},rt='FA "6.5.1"',ka=function(n){return qt.mark("".concat(rt," ").concat(n," begins")),function(){return me(n)}},me=function(n){qt.mark("".concat(rt," ").concat(n," ends")),qt.measure("".concat(rt," ").concat(n),"".concat(rt," ").concat(n," begins"),"".concat(rt," ").concat(n," ends"))},mn={begin:ka,end:me},Ot=function(){};function Nn(t){var n=t.getAttribute?t.getAttribute(K):null;return typeof n=="string"}function wa(t){var n=t.getAttribute?t.getAttribute(en):null,e=t.getAttribute?t.getAttribute(an):null;return n&&e}function Aa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function Oa(){if(v.autoReplaceSvg===!0)return St.replace;var t=St[v.autoReplaceSvg];return t||St.replace}function Sa(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Pa(t){return y.createElement(t)}function de(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?Sa:Pa:e;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(de(o,{ceFn:a}))}),r}function Ea(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var St={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(de(r),e)}),e.getAttribute(K)===null&&v.keepOriginalSource){var a=y.createComment(Ea(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~on(e).indexOf(v.replacementClass))return St.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===v.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return vt(s)}).join(`
`);e.setAttribute(K,""),e.innerHTML=o}};function Cn(t){t()}function ve(t,n){var e=typeof n=="function"?n:Ot;if(t.length===0)e();else{var a=Cn;v.mutateApproach===Ie&&(a=W.requestAnimationFrame||Cn),a(function(){var r=Oa(),i=mn.begin("mutate");t.map(r),i(),e()})}}var dn=!1;function be(){dn=!0}function Kt(){dn=!1}var jt=null;function In(t){if(xn&&v.observeMutations){var n=t.treeCallback,e=n===void 0?Ot:n,a=t.nodeCallback,r=a===void 0?Ot:a,i=t.pseudoElementsCallback,o=i===void 0?Ot:i,s=t.observeMutationsRoot,f=s===void 0?y:s;jt=new xn(function(u){if(!dn){var c=H();at(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Nn(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Nn(d.target)&&~Fe.indexOf(d.attributeName))if(d.attributeName==="class"&&wa(d.target)){var b=Tt(on(d.target)),p=b.prefix,O=b.iconName;d.target.setAttribute(en,p||c),O&&d.target.setAttribute(an,O)}else Aa(d.target)&&r(d.target)})}}),D&&jt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ja(){jt&&jt.disconnect()}function Na(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Ca(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Tt(on(t));return r.prefix||(r.prefix=H()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=sa(r.prefix,t.innerText)||ln(r.prefix,Wt(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ia(t){var n=at(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(e?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||ut()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ta(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Ca(t),a=e.iconName,r=e.prefix,i=e.rest,o=Ia(t),s=Gt("parseNodeAttributes",{},t),f=n.styleParser?Na(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var _a=_.styles;function ge(t){var n=v.autoReplaceSvg==="nest"?Tn(t,{styleParser:!1}):Tn(t);return~n.extra.classes.indexOf(Jn)?F("generateLayersText",t,n):F("generateSvgReplacementMutation",t,n)}var G=new Set;rn.map(function(t){G.add("fa-".concat(t))});Object.keys(st[h]).map(G.add.bind(G));Object.keys(st[x]).map(G.add.bind(G));G=mt(G);function _n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var e=y.documentElement.classList,a=function(d){return e.add("".concat(kn,"-").concat(d))},r=function(d){return e.remove("".concat(kn,"-").concat(d))},i=v.autoFetchSvg?G:rn.map(function(c){return"fa-".concat(c)}).concat(Object.keys(_a));i.includes("fa")||i.push("fa");var o=[".".concat(Jn,":not([").concat(K,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(K,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=at(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=mn.begin("onTree"),u=s.reduce(function(c,d){try{var b=ge(d);b&&c.push(b)}catch(p){Qn||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(b){ve(b,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(b){f(),d(b)})})}function La(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ge(t).then(function(e){e&&ve([e],n)})}function Ma(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Xt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Xt(r||{})),t(a,m(m({},e),{},{mask:r}))}}var za=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?L:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,u=e.maskId,c=u===void 0?null:u,d=e.title,b=d===void 0?null:d,p=e.titleId,O=p===void 0?null:p,j=e.classes,k=j===void 0?[]:j,C=e.attributes,w=C===void 0?{}:C,S=e.styles,I=S===void 0?{}:S;if(n){var E=n.prefix,X=n.iconName,B=n.icon;return _t(m({type:"icon"},n),function(){return Q("beforeDOMElementCreation",{iconDefinition:n,params:e}),v.autoA11y&&(b?w["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(O||ut()):(w["aria-hidden"]="true",w.focusable="false")),un({icons:{main:Bt(B),mask:f?Bt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:X,transform:m(m({},L),r),symbol:o,title:b,maskId:c,titleId:O,extra:{attributes:w,styles:I,classes:k}})})}},Ra={mixout:function(){return{icon:Ma(za)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=_n,e.nodeCallback=La,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?y:a,i=e.callback,o=i===void 0?function(){}:i;return _n(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,u=a.symbol,c=a.mask,d=a.maskId,b=a.extra;return new Promise(function(p,O){Promise.all([Vt(r,s),c.iconName?Vt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var k=tn(j,2),C=k[0],w=k[1];p([e,un({icons:{main:C,mask:w},prefix:s,iconName:r,transform:f,symbol:u,maskId:d,title:i,titleId:o,extra:b,watchable:!0})])}).catch(O)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=Ct(s);f.length>0&&(r.style=f);var u;return sn(o)&&(u=F("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Fa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(mt(i)).join(" ")},children:o}]})}}}},Da={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,u=f===void 0?{}:f,c=a.styles,d=c===void 0?{}:c;return _t({type:"counter",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),ha({content:e.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(mt(s))}})})}}}},Ya={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?L:r,o=a.title,s=o===void 0?null:o,f=a.classes,u=f===void 0?[]:f,c=a.attributes,d=c===void 0?{}:c,b=a.styles,p=b===void 0?{}:b;return _t({type:"text",content:e},function(){return Q("beforeDOMElementCreation",{content:e,params:a}),En({content:e,transform:m(m({},L),i),title:s,extra:{attributes:d,styles:p,classes:["".concat(v.cssPrefix,"-layers-text")].concat(mt(u))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Vn){var u=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/u,f=c.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,En({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},$a=new RegExp('"',"ug"),Ln=[1105920,1112319];function Ua(t){var n=t.replace($a,""),e=na(n,0),a=e>=Ln[0]&&e<=Ln[1],r=n.length===2?n[0]===n[1]:!1;return{value:Wt(r?n[0]:n),isSecondary:a||r}}function Mn(t,n){var e="".concat(Ce).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=at(t.children),o=i.filter(function(B){return B.getAttribute(Ut)===n})[0],s=W.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Me),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?x:h,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ft[b][f[2].toLowerCase()]:ze[b][u],O=Ua(d),j=O.value,k=O.isSecondary,C=f[0].startsWith("FontAwesome"),w=ln(p,j),S=w;if(C){var I=fa(j);I.iconName&&I.prefix&&(w=I.iconName,p=I.prefix)}if(w&&!k&&(!o||o.getAttribute(en)!==p||o.getAttribute(an)!==S)){t.setAttribute(e,S),o&&t.removeChild(o);var E=Ta(),X=E.extra;X.attributes[Ut]=n,Vt(w,p).then(function(B){var Lt=un(m(m({},E),{},{icons:{main:B,mask:cn()},prefix:p,iconName:S,extra:X,watchable:!0})),Y=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=Lt.map(function(xe){return vt(xe)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function Wa(t){return Promise.all([Mn(t,"::before"),Mn(t,"::after")])}function Ha(t){return t.parentNode!==document.head&&!~Te.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ut)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zn(t){if(D)return new Promise(function(n,e){var a=at(t.querySelectorAll("*")).filter(Ha).map(Wa),r=mn.begin("searchPseudoElements");be(),Promise.all(a).then(function(){r(),Kt(),n()}).catch(function(){r(),Kt(),e()})})}var Ga={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=zn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?y:a;v.searchPseudoElements&&zn(r)}}},Rn=!1,Xa={mixout:function(){return{dom:{unwatch:function(){be(),Rn=!0}}}},hooks:function(){return{bootstrap:function(){In(Gt("mutationObserverCallbacks",{}))},noAuto:function(){ja()},watch:function(e){var a=e.observeMutationsRoot;Rn?Kt():In(Gt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Fn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},Ba={mixout:function(){return{parse:{transform:function(e){return Fn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=Fn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(u," ").concat(c)},b={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:b};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),p.path)}]}]}}}},Ft={x:0,y:0,width:"100%",height:"100%"};function Dn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Va(t){return t.tag==="g"?t.children:[t]}var qa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Tt(r.split(" ").map(function(o){return o.trim()})):cn();return i.prefix||(i.prefix=H()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,u=i.width,c=i.icon,d=o.width,b=o.icon,p=Be({transform:f,containerWidth:d,iconWidth:u}),O={tag:"rect",attributes:m(m({},Ft),{},{fill:"white"})},j=c.children?{children:c.children.map(Dn)}:{},k={tag:"g",attributes:m({},p.inner),children:[Dn(m({tag:c.tag,attributes:m(m({},c.attributes),p.path)},j))]},C={tag:"g",attributes:m({},p.outer),children:[k]},w="mask-".concat(s||ut()),S="clip-".concat(s||ut()),I={tag:"mask",attributes:m(m({},Ft),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,C]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Va(b)},I]};return a.push(E,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(w,")")},Ft)}),{children:a,attributes:r}}}},Ka={provides:function(n){var e=!1;W.matchMedia&&(e=W.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Qa={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},Ja=[Ke,Ra,Fa,Da,Ya,Ga,Xa,Ba,qa,Ka,Qa];ua(Ja,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var Qt=T.parse;T.findIconDefinition;T.toHtml;var Za=T.icon;T.layer;T.text;T.counter;function Yn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function U(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Yn(Object(e),!0).forEach(function(a){tt(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Yn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Nt(t){"@babel/helpers - typeof";return Nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Nt(t)}function tt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function tr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function nr(t,n){if(t==null)return{};var e=tr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function Jt(t){return er(t)||ar(t)||rr(t)||ir()}function er(t){if(Array.isArray(t))return Zt(t)}function ar(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rr(t,n){if(t){if(typeof t=="string")return Zt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Zt(t,n)}}function Zt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function ir(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function or(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,b=t.fixedWidth,p=t.inverse,O=t.border,j=t.listItem,k=t.flip,C=t.size,w=t.rotation,S=t.pull,I=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":b,"fa-inverse":p,"fa-border":O,"fa-li":j,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},tt(n,"fa-".concat(C),typeof C<"u"&&C!==null),tt(n,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),tt(n,"fa-pull-".concat(S),typeof S<"u"&&S!==null),tt(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(I).map(function(E){return I[E]?E:null}).filter(function(E){return E})}function sr(t){return t=t-0,t===t}function pe(t){return sr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fr=["style"];function lr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function cr(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=pe(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[lr(r)]=i:n[r]=i,n},{})}function he(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return he(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,u){var c=n.attributes[u];switch(u){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=cr(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?f.attrs[u.toLowerCase()]=c:f.attrs[pe(u)]=c}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=nr(e,fr);return r.attrs.style=U(U({},r.attrs.style),o),t.apply(void 0,[n.tag,U(U({},r.attrs),s)].concat(Jt(a)))}var ye=!1;try{ye=!0}catch{}function ur(){if(!ye&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function $n(t){if(t&&Nt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Qt.icon)return Qt.icon(t);if(t===null)return null;if(t&&Nt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Dt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?tt({},t,n):{}}var N=Wn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,u=$n(e),c=Dt("classes",[].concat(Jt(or(t)),Jt(i.split(" ")))),d=Dt("transform",typeof t.transform=="string"?Qt.transform(t.transform):t.transform),b=Dt("mask",$n(a)),p=Za(u,U(U(U(U({},c),d),b),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!p)return ur("Could not find icon",u),null;var O=p.abstract,j={ref:n};return Object.keys(t).forEach(function(k){N.defaultProps.hasOwnProperty(k)||(j[k]=t[k])}),mr(O[0],j)});N.displayName="FontAwesomeIcon";N.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};N.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var mr=he.bind(null,Wn.createElement),Un={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},dr={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},M=dr;const vr=({Children:t,auth:n,expand:e})=>{const[a,r]=vn.useState(!1);vn.useEffect(()=>{},[a]);const i=()=>{r(o=>!o)};return l.jsx(l.Fragment,{children:a?l.jsxs(l.Fragment,{children:[l.jsxs("aside",{className:"bg-gray-800 text-gray-500 sm:w-56 dark:bg-gray-900 dark:text-gray-300",children:[l.jsx("nav",{children:l.jsxs("ul",{className:"p-0 mmLi sm:w-56",children:[l.jsx("li",{className:"px-0 py-0",onClick:i,children:l.jsx("span",{className:"text-white",children:l.jsx(N,{icon:Un})})}),n.user.role==="admin"&&l.jsxs(l.Fragment,{children:[l.jsx("li",{children:l.jsx(A,{href:route("basic-maintenance"),children:"Basic Maintenance"})}),l.jsx("li",{children:l.jsx(A,{href:route("car-analytics"),children:"Car Analytics"})}),l.jsx("li",{children:l.jsx(A,{href:route("connected-services"),children:"Connected Services"})}),l.jsx("li",{children:l.jsx(A,{href:route("reminder-notifications"),children:"Reminder Notifications"})}),l.jsx("li",{children:l.jsx(A,{href:route("full-maintenance-suite"),children:"Full Maintenance Suite"})}),l.jsx("li",{children:l.jsx(A,{href:route("customizable-maintenance-schedules"),children:"Customizable Schedules"})}),l.jsx("li",{children:l.jsx(A,{href:route("exclusive-discounts"),children:"Exclusive Discounts"})}),l.jsx("li",{children:l.jsx(A,{href:route("priority-customer-support"),children:"Priority Support"})}),l.jsx("li",{children:l.jsx(A,{href:route("advanced-maintenance-reports"),children:"Advanced Reports"})})]}),t]})}),l.jsxs("div",{className:"really-idk mx-auto flex bg-gray-800 dark:bg-gray-900",children:[l.jsx("span",{children:l.jsx("img",{src:"",alt:""})}),l.jsx("ul",{children:l.jsx("li",{className:"bg-gray-800 dark:bg-gray-900 ml-2 py-4 rounded hover:rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 px-12",children:l.jsx(A,{href:route("myaccount"),children:n.user.name})})})]})]}),l.jsx("style",{children:`
        .really-idk{
    width: auto;
    position: fixed;
    height: 7rem;
    color:white;
    cursor:pointer;
    bottom: 0;
}
    .menu-content{
    width:100%;
    height:auto;
    background-color:transparent;

    }
    .mmLi li{
    display:flex;
    width:100%;
    height:auto;
    padding:20px;
    background-color:transparent;
    transition: all 300ms ease;
    }
    .mmLi ul{
    width:100%;
    height:auto;
    }
    .mmLi ul:hover{
    width:100%;
    height:auto;
    }
    
    .mmLi li:hover{
    background-color:black;
    color:white;
    cursor:pointer;
    }`})]}):l.jsxs(l.Fragment,{children:[n.user.role==="admin"&&l.jsx(l.Fragment,{children:l.jsxs("aside",{className:"bg-gray-800",children:[l.jsx("nav",{children:l.jsxs("ul",{className:"mmLi",children:[l.jsx("li",{children:l.jsx("span",{className:"text-white mx-auto mt-4",onClick:i,children:l.jsx(N,{icon:Un,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("basic-maintenance"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("car-analytics"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("connected-services"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("reminder-notifications"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("full-maintenance-suite"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("customizable-maintenance-schedules"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("exclusive-discounts"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("priority-customer-support"),children:l.jsx(N,{icon:M,size:"lg"})})}),l.jsx("li",{className:"text-white mx-5 mt-4",children:l.jsx(A,{href:route("advanced-maintenance-reports"),children:l.jsx(N,{icon:M,size:"lg"})})}),t]})}),l.jsxs("div",{className:"really-idk mx-auto text-white flex bg-gray-800",children:[l.jsx("span",{children:l.jsx("img",{src:"",alt:""})}),l.jsx("ul",{children:l.jsx("li",{children:l.jsxs(A,{href:route("myaccount"),children:[" ",n.user.name]})})})]})]})}),l.jsx("style",{children:`
                aside{
                    width:100%;
                    overflow:hidden;
                    padding-bottom:5rem;
                    color:#1f2937;
                }
                .really-idk{
                    width: 4rem;
                    position: fixed;
                    padding:0;
                    text-wrap: wrap;
                    height: 5rem;
                    cursor:pointer;
                    bottom: 0;
                    }
                    .menu-content{
                        width:100%;
                        height:auto;
                        background-color:transparent;
                        overflow:hiddin;

                    }
                    .mmLi li{
                        display:flex;
                        width:100%;
                        height:auto;
                        padding:10px;
                        overflow:hiddin;
                        background-color:transparent;
                        transition: all 300ms ease;
                    }
                    .mmLi ul{
                        width:100%;
                        height:auto;
                        overflow:hiddin;

                    }
                    .mmLi ul:hover{
                        width:100%;
                        height:auto;
                    }
                    
                    .mmLi li:hover{
                        background-color:black;
                        color:#1f2937;
                        cursor:pointer;
                    }`})]})})},pr=vr;export{pr as default};
