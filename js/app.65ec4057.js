(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)a=u[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"2d0ac61a":"4cdf1179","43de0af4":"9e806883","45917f3e":"3801e286","4b47640d":"ac0bfcc7","4d7d60aa":"c7916d90","6dcf93b7":"69b8d952",aa9ce418:"36c061dd"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"43de0af4":1,"4d7d60aa":1,aa9ce418:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"2d0ac61a":"31d6cfe0","43de0af4":"50cca17b","45917f3e":"31d6cfe0","4b47640d":"31d6cfe0","4d7d60aa":"09c96978","6dcf93b7":"31d6cfe0",aa9ce418:"bf03cda5"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise(function(n,t){r=o[e]=[n,t]});n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,t[1](c)}o[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var d=l;c.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"2f39":function(e,n,t){"use strict";t.r(n);var r=t("a34a"),a=t.n(r),o=(t("96cf"),t("c973")),c=t.n(o),u=(t("5c7d"),t("7d6e"),t("e54f"),t("62f2"),t("7e6d"),t("2b0e")),i=t("b05d"),s=t("4d5a"),l=t("9898"),f=t("f2cc"),d=t("c7a0"),p=t("2ea3"),h=t("65c6"),b=t("6ac5"),v=t("9c40"),m=t("0016"),g=t("497d"),w=t("6ab5"),y=t("033f"),Q=t("e208"),x=t("f531"),k=t("87fe"),C=t("b19c"),S=t("f09f"),P=t("a370"),A=t("4b7e"),j=t("880c"),O=t("32a7"),E=t("62cd"),T=t("07d0"),_=t("639d"),L=t("3786"),N=t("27f9"),I=t("8f8e"),M=t("05c0"),B=t("714f"),V=t("2a19");u["a"].use(i["a"],{config:{},components:{QLayout:s["a"],QHeader:l["a"],QDrawer:f["a"],QPageContainer:d["a"],QPage:p["a"],QToolbar:h["a"],QToolbarTitle:b["a"],QBtn:v["a"],QIcon:m["a"],QList:g["a"],QItem:w["a"],QItemSection:y["a"],QItemLabel:Q["a"],QStepper:x["a"],QStep:k["a"],QStepperNavigation:C["a"],QCard:S["a"],QCardSection:P["a"],QCardActions:A["a"],QCarousel:j["a"],QCarouselControl:O["a"],QCarouselSlide:E["a"],QFooter:T["a"],QParallax:_["a"],QRadio:L["a"],QInput:N["a"],QCheckbox:I["a"],QTooltip:M["a"]},directives:{Ripple:B["a"]},plugins:{Notify:V["a"]}});var q=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},D=[],$={name:"App"},F=$,H=t("2877"),J=Object(H["a"])(F,q,D,!1,null,null,null),R=J.exports,K=t("2f62");u["a"].use(K["a"]);var U=function(){var e=new K["a"].Store({modules:{},strict:!1});return e},z=t("8c4f"),G=t("448a"),W=t.n(G),X=function(){return t.e("aa9ce418").then(t.bind(null,"fa96"))},Y=function(){return t.e("6dcf93b7").then(t.bind(null,"ccdb"))},Z=function(){return t.e("45917f3e").then(t.bind(null,"8217"))},ee=function(){return t.e("2d0ac61a").then(t.bind(null,"18fc"))},ne=function(){return t.e("4d7d60aa").then(t.bind(null,"a733"))},te=[{path:"/",component:function(){return t.e("43de0af4").then(t.bind(null,"4de8"))},children:[{path:"",component:X},{path:"home",component:X,name:"home.home"},{path:"about",component:Z,name:"home.about"},{path:"contact",component:ee,name:"home.contact"},{path:"gallery",component:Y,name:"home.gallery"},{path:"donation",component:ne,name:"home.donation"}]}],re=W()(te);re.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var ae=re;u["a"].use(z["a"]);var oe=function(){var e=new z["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:ae,mode:"history",base:"/",linkActiveClass:"active"});return e},ce=function(){var e="function"===typeof U?U({Vue:u["a"]}):U,n="function"===typeof oe?oe({Vue:u["a"],store:e}):oe;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(R)}};return{app:t,store:e,router:n}},ue=t("9483");Object(ue["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ie=t("a925"),se={failed:"Action failed",success:"Action was successful"},le={"en-us":se},fe=function(){var e=c()(a.a.mark(function e(n){var t,r;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=n.app,r=n.Vue,r.use(ie["a"]),t.i18n=new ie["a"]({locale:"en-us",fallbackLocale:"en-us",messages:le});case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),de=t("bc3a"),pe=t.n(de),he=function(){var e=c()(a.a.mark(function e(n){var t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=n.Vue,t.prototype.$axios=pe.a;case 2:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),be=t("fe3c"),ve=t.n(be),me=ce(),ge=me.app,we=me.store,ye=me.router;function Qe(){return xe.apply(this,arguments)}function xe(){return xe=c()(a.a.mark(function e(){var n,t;return a.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=[fe,he],t=0;case 2:if(!(t<n.length)){e.next=20;break}if("function"===typeof n[t]){e.next=5;break}return e.abrupt("continue",17);case 5:return e.prev=5,e.next=8,n[t]({app:ge,router:ye,store:we,Vue:u["a"],ssrContext:null});case 8:e.next=17;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!e.t0||!e.t0.url){e.next=15;break}return window.location.href=e.t0.url,e.abrupt("return");case 15:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 17:t++,e.next=2;break;case 20:new u["a"](ge);case 21:case"end":return e.stop()}},e,null,[[5,10]])})),xe.apply(this,arguments)}/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){ve.a.attach(document.body)},!1),Qe()},"7e6d":function(e,n,t){}});