!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=6)}({6:function(e,t,n){"use strict";n.r(t);n(7),n(8)},7:function(de,fe,pe){var me,e,t,i,n,r,s,a,c,o;e=window,o=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(o)&&o.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=i.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)},i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s)),function(e,s,l){"use strict";var i,u,o;s.createElement("picture");var E={},a=!1,t=function(){},n=s.createElement("img"),d=n.getAttribute,f=n.setAttribute,p=n.removeAttribute,c=s.documentElement,r={},S={algorithm:""},m="data-pfsrc",h=m+"set",A=navigator.userAgent,C=/rident/.test(A)||/ecko/.test(A)&&A.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",g=/\s+\+?\d+(e\d+)?w/,v=/(\([^)]+\))?\s*(.+)/,y=e.picturefillCFG,z="font-size:100%!important;",b=!0,w={},M={},T=e.devicePixelRatio,R={px:1,in:96},L=s.createElement("a"),P=!1,B=/^[ \t\n\r\u000c]+/,D=/^[, \t\n\r\u000c]+/,W=/^[^ \t\n\r\u000c]+/,_=/[,]+$/,N=/^\d+$/,k=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,$=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},I=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function O(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var F,U,H,Q,j,G,q,V,K,J,X,Y,Z,ee,te,ne,re,ie,se,ae=(F=/^([\d\.]+)(em|vw|px)$/,U=I(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in w))if(w[e]=!1,t&&(n=e.match(F)))w[e]=n[1]*R[n[2]];else try{w[e]=new Function("e",U(e))(R)}catch(e){}return w[e]}),ce=function(e,t){return e.w?(e.cWidth=E.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},oe=function(e){if(a){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=(t=i.elements||E.qsa(i.context||s,i.reevaluate||i.reselect?E.sel:E.selShort)).length){for(E.setupRun(i),P=!0,n=0;n<r;n++)E.fillImg(t[n],i);E.teardownRun(i)}}};function le(e,t){return e.res-t.res}function ue(e,t){var n,r,i;if(e&&t)for(i=E.parseSet(t),e=E.makeUrl(e),n=0;n<i.length;n++)if(e===E.makeUrl(i[n].url)){r=i[n];break}return r}e.console&&console.warn,x in n||(x="src"),r["image/jpeg"]=!0,r["image/gif"]=!0,r["image/png"]=!0,r["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),E.ns=("pf"+(new Date).getTime()).substr(0,9),E.supSrcset="srcset"in n,E.supSizes="sizes"in n,E.supPicture=!!e.HTMLPictureElement,E.supSrcset&&E.supPicture&&!E.supSizes&&(H=s.createElement("img"),n.srcset="data:,a",H.src="data:,a",E.supSrcset=n.complete===H.complete,E.supPicture=E.supSrcset&&E.supPicture),E.supSrcset&&!E.supSizes?(Q="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",j=s.createElement("img"),G=function(){2===j.width&&(E.supSizes=!0),u=E.supSrcset&&!E.supSizes,a=!0,setTimeout(oe)},j.onload=G,j.onerror=G,j.setAttribute("sizes","9px"),j.srcset=Q+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",j.src=Q):a=!0,E.selShort="picture>img,img[srcset]",E.sel=E.selShort,E.cfg=S,E.DPR=T||1,E.u=R,E.types=r,E.setSize=t,E.makeUrl=I(function(e){return L.href=e,L.href}),E.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},E.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?E.matchesMedia=function(e){return!e||matchMedia(e).matches}:E.matchesMedia=E.mMQ,E.matchesMedia.apply(this,arguments)},E.mMQ=function(e){return!e||ae(e)},E.calcLength=function(e){var t=ae(e,!0)||!1;return t<0&&(t=!1),t},E.supportsType=function(e){return!e||r[e]},E.parseSize=I(function(e){var t=(e||"").match(v);return{media:t&&t[1],length:t&&t[2]}}),E.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(a));if(n)return t=n[0],a+=t.length,t}var f,p,t,n,i,s=r.length,a=0,m=[];function c(){var e,t,n,r,i,s,a,c,o,l=!1,u={};for(r=0;r<p.length;r++)s=(i=p[r])[i.length-1],a=i.substring(0,i.length-1),c=parseInt(a,10),o=parseFloat(a),N.test(a)&&"w"===s?((e||t)&&(l=!0),0===c?l=!0:e=c):k.test(a)&&"x"===s?((e||t||n)&&(l=!0),o<0?l=!0:t=o):N.test(a)&&"h"===s?((n||t)&&(l=!0),0===c?l=!0:n=c):l=!0;l||(u.url=f,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,m.push(u))}function o(){for(e(B),t="",n="in descriptor";;){if(i=r.charAt(a),"in descriptor"===n)if(O(i))t&&(p.push(t),t="",n="after descriptor");else{if(","===i)return a+=1,t&&p.push(t),void c();if("("===i)t+=i,n="in parens";else{if(""===i)return t&&p.push(t),void c();t+=i}}else if("in parens"===n)if(")"===i)t+=i,n="in descriptor";else{if(""===i)return p.push(t),void c();t+=i}else if("after descriptor"===n)if(O(i));else{if(""===i)return void c();n="in descriptor",a-=1}a+=1}}for(;;){if(e(D),s<=a)return m;f=e(W),p=[],","===f.slice(-1)?(f=f.replace(_,""),c()):o()}}(e.srcset,e)),e.cands},E.getEmValue=function(){var e;if(!i&&(e=s.body)){var t=s.createElement("div"),n=c.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",c.style.cssText=z,e.style.cssText=z,e.appendChild(t),i=t.offsetWidth,e.removeChild(t),i=parseFloat(i,10),c.style.cssText=n,e.style.cssText=r}return i||16},E.calcListLength=function(e){if(!(e in M)||S.uT){var t=E.calcLength(function(e){var t,n,r,i,s,a,c,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){var t,n="",r=[],i=[],s=0,a=0,c=!1;function o(){n&&(r.push(n),n="")}function l(){r[0]&&(i.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return o(),l(),i;if(c){if("*"===t&&"/"===e[a+1]){c=!1,a+=2,o();continue}a+=1}else{if(O(t)){if(e.charAt(a-1)&&O(e.charAt(a-1))||!n){a+=1;continue}if(0===s){o(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){o(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){c=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<r;t++)if(s=(i=n[t])[i.length-1],c=s,o.test(c)&&0<=parseFloat(c)||l.test(c)||"0"===c||"-0"===c||"+0"===c){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),E.matchesMedia(i))return a}return"100vw"}(e));M[e]=t||R.width}return M[e]},E.setRes=function(e){var t;if(e)for(var n=0,r=(t=E.parseSet(e)).length;n<r;n++)ce(t[n],e.sizes);return t},E.setRes.res=ce,E.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,c,o,l,u,d,f,p,m,h,A,g,v,y,z,b=t[E.ns],w=E.DPR;if(c=b.curSrc||t[x],(o=b.curCan||(d=t,f=c,!(p=e[0].set)&&f&&(p=(p=d[E.ns].sets)&&p[p.length-1]),(m=ue(f,p))&&(f=E.makeUrl(f),d[E.ns].curSrc=f,(d[E.ns].curCan=m).res||ce(m,m.set.sizes)),m))&&o.set===e[0].set&&((u=C&&!t.complete&&o.res-.1>w)||(o.cached=!0,o.res>=w&&(a=o))),!a)for(e.sort(le),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=w){a=e[i=r-1]&&(u||c!==E.makeUrl(n.url))&&(h=e[i].res,A=n.res,g=w,v=e[i].cached,z=y=void 0,g<("saveData"===S.algorithm?2.7<h?g+1:(z=(A-g)*(y=Math.pow(h-.6,1.5)),v&&(z+=.1*y),h+z):1<g?Math.sqrt(h*A):h))?e[i]:n;break}a&&(l=E.makeUrl(a.url),b.curSrc=l,b.curCan=a,l!==c&&E.setSrc(t,a),E.setSize(t))}},E.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},E.getSet=function(e){var t,n,r,i=!1,s=e[E.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&E.matchesMedia(n.media)&&(r=E.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},E.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[E.ns];(o.src===l||n.src)&&(o.src=d.call(e,"src"),o.src?f.call(e,m,o.src):p.call(e,m)),(o.srcset===l||n.srcset||!E.supSrcset||e.srcset)&&(r=d.call(e,"srcset"),o.srcset=r,a=!0),o.sets=[],c&&(o.pic=!0,function(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[E.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:d.call(e,"sizes")},o.sets.push(i),(s=(u||o.src)&&g.test(o.srcset||""))||!o.src||ue(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=l,o.supported=!(c||i&&!E.supSrcset||s&&!E.supSizes),a&&E.supSrcset&&!o.supported&&(r?(f.call(e,h,r),e.srcset=""):p.call(e,h)),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==E.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},E.fillImg=function(e,t){var n,r,i,s,a,c=t.reselect||t.reevaluate;(e[E.ns]||(e[E.ns]={}),n=e[E.ns],c||n.evaled!==o)&&(n.parsed&&!t.reevaluate||E.parseSets(e,e.parentNode,t),n.supported?n.evaled=o:(r=e,s=E.getSet(r),a=!1,"pending"!==s&&(a=o,s&&(i=E.setRes(s),E.applySetCandidate(i,r))),r[E.ns].evaled=a))},E.setupRun=function(){P&&!b&&T===e.devicePixelRatio||(b=!1,T=e.devicePixelRatio,w={},M={},E.DPR=T||1,R.width=Math.max(e.innerWidth||0,c.clientWidth),R.height=Math.max(e.innerHeight||0,c.clientHeight),R.vw=R.width/100,R.vh=R.height/100,o=[R.height,R.width,T].join("-"),R.em=E.getEmValue(),R.rem=R.em)},E.supPicture?(oe=t,E.fillImg=t):(Z=e.attachEvent?/d$|^c/:/d$|^c|^i/,ee=function(){var e=s.readyState||"";te=setTimeout(ee,"loading"===e?200:999),s.body&&(E.fillImgs(),(q=q||Z.test(e))&&clearTimeout(te))},te=setTimeout(ee,s.body?9:99),ne=c.clientHeight,$(e,"resize",(V=function(){b=Math.max(e.innerWidth||0,c.clientWidth)!==R.width||c.clientHeight!==ne,ne=c.clientHeight,b&&E.fillImgs()},K=99,Y=function(){var e=new Date-X;e<K?J=setTimeout(Y,K-e):(J=null,V())},function(){X=new Date,J||(J=setTimeout(Y,K))})),$(s,"readystatechange",ee)),E.picturefill=oe,E.fillImgs=oe,E.teardownRun=t,oe._=E,e.picturefillCFG={pf:E,push:function(e){var t=e.shift();"function"==typeof E[t]?E[t].apply(E,e):(S[t]=e[0],P&&E.fillImgs({reselect:!0}))}};for(;y&&y.length;)e.picturefillCFG.push(y.shift());e.picturefill=oe,"object"==typeof de.exports?de.exports=oe:(me=function(){return oe}.call(fe,pe,fe,de))===l||(de.exports=me),E.supPicture||(r["image/webp"]=(re="image/webp",ie="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",(se=new e.Image).onerror=function(){r[re]=!1,oe()},se.onload=function(){r[re]=1===se.width,oe()},se.src=ie,"pending"))}(window,document)},8:function(e,t,n){var r,i;r=window,i=function(r,u){"use strict";if(!u.getElementsByClassName)return;var d,f,p=u.documentElement,s=r.Date,i=r.HTMLPictureElement,a="addEventListener",m="getAttribute",t=r[a],h=r.setTimeout,n=r.requestAnimationFrame||h,c=r.requestIdleCallback,A=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],l={},g=Array.prototype.forEach,v=function(e,t){return l[t]||(l[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),l[t].test(e[m]("class")||"")&&l[t]},y=function(e,t){v(e,t)||e.setAttribute("class",(e[m]("class")||"").trim()+" "+t)},z=function(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[m]("class")||"").replace(n," "))},b=function(t,n,e){var r=e?a:"removeEventListener";e&&b(t,n),o.forEach(function(e){t[r](e,n)})},w=function(e,t,n,r,i){var s=u.createEvent("Event");return n||(n={}),n.instance=d,s.initEvent(t,!r,!i),s.detail=n,e.dispatchEvent(s),s},E=function(e,t){var n;!i&&(n=r.picturefill||f.pf)?(t&&t.src&&!e[m]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},S=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,n){for(n=n||e.offsetWidth;n<f.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},x=(L=[],P=[],B=L,D=function(){var e=B;for(B=L.length?P:L,R=!(T=!0);e.length;)e.shift()();T=!1},W=function(e,t){T&&!t?e.apply(this,arguments):(B.push(e),R||(R=!0,(u.hidden?h:n)(D)))},W._lsFlush=D,W),e=function(n,e){return e?function(){x(n)}:function(){var e=this,t=arguments;x(function(){n.apply(e,t)})}},M=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?h(i,99-e):(c||r)(r)};return function(){n=s.now(),t||(t=h(i,99))}};var T,R,L,P,B,D,W;!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in f=r.lazySizesConfig||r.lazysizesConfig||{},t)e in f||(f[e]=t[e]);r.lazySizesConfig=f,h(function(){f.init&&k()})}();var _=(le=/^img$/i,ue=/^iframe$/i,de="onscroll"in r&&!/(gle|ing)bot/.test(navigator.userAgent),fe=0,pe=0,me=-1,he=function(e){pe--,e&&e.target&&b(e.target,he),(!e||pe<0||!e.target)&&(pe=0)},Ae=function(e,t){var n,r=e,i="hidden"==S(u.body,"visibility")||"hidden"!=S(e.parentNode,"visibility")&&"hidden"!=S(e,"visibility");for(K-=t,Y+=t,J-=t,X+=t;i&&(r=r.offsetParent)&&r!=u.body&&r!=p;)(i=0<(S(r,"opacity")||1))&&"visible"!=S(r,"overflow")&&(n=r.getBoundingClientRect(),i=X>n.left&&J<n.right&&Y>n.top-1&&K<n.bottom+1);return i},ge=function(){var e,t,n,r,i,s,a,c,o,l=d.elements;if((j=f.loadMode)&&pe<8&&(e=l.length)){t=0,me++,null==ee&&("expand"in f||(f.expand=500<p.clientHeight&&500<p.clientWidth?500:370),Z=f.expand,ee=Z*f.expFactor),fe<ee&&pe<1&&2<me&&2<j&&!u.hidden?(fe=ee,me=0):fe=1<j&&1<me&&pe<6?Z:0;for(;t<e;t++)if(l[t]&&!l[t]._lazyRace)if(de)if((c=l[t][m]("data-expand"))&&(s=1*c)||(s=fe),o!==s&&(q=innerWidth+s*te,V=innerHeight+s,a=-1*s,o=s),n=l[t].getBoundingClientRect(),(Y=n.bottom)>=a&&(K=n.top)<=V&&(X=n.right)>=a*te&&(J=n.left)<=q&&(Y||X||J||K)&&(f.loadHidden||"hidden"!=S(l[t],"visibility"))&&(H&&pe<3&&!c&&(j<3||me<4)||Ae(l[t],s))){if(Se(l[t]),i=!0,9<pe)break}else!i&&H&&!r&&pe<4&&me<4&&2<j&&(U[0]||f.preloadAfterLoad)&&(U[0]||!c&&(Y||X||J||K||"auto"!=l[t][m](f.sizesAttr)))&&(r=U[0]||l[t]);else Se(l[t]);r&&!i&&Se(r)}},ne=ge,ie=0,se=f.throttleDelay,ae=f.ricTimeout,ce=function(){re=!1,ie=s.now(),ne()},oe=c&&49<ae?function(){c(ce,{timeout:ae}),ae!==f.ricTimeout&&(ae=f.ricTimeout)}:e(function(){h(ce)},!0),ve=function(e){var t;(e=!0===e)&&(ae=33),re||(re=!0,(t=se-(s.now()-ie))<0&&(t=0),e||t<9?oe():h(oe,t))},ye=function(e){y(e.target,f.loadedClass),z(e.target,f.loadingClass),b(e.target,be),w(e.target,"lazyloaded")},ze=e(ye),be=function(e){ze({target:e.target})},we=function(e){var t,n=e[m](f.srcsetAttr);(t=f.customMedia[e[m]("data-media")||e[m]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Ee=e(function(e,t,n,r,i){var s,a,c,o,l,u;(l=w(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?y(e,f.autosizesClass):e.setAttribute("sizes",r)),a=e[m](f.srcsetAttr),s=e[m](f.srcAttr),i&&(c=e.parentNode,o=c&&A.test(c.nodeName||"")),u=t.firesLoad||"src"in e&&(a||s||o),l={target:e},u&&(b(e,he,!0),clearTimeout(Q),Q=h(he,2500),y(e,f.loadingClass),b(e,be,!0)),o&&g.call(c.getElementsByTagName("source"),we),a?e.setAttribute("srcset",a):s&&!o&&(ue.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,s):e.src=s),i&&(a||o)&&E(e,{src:s})),e._lazyRace&&delete e._lazyRace,z(e,f.lazyClass),x(function(){(!u||e.complete&&1<e.naturalWidth)&&(u?he(l):pe--,ye(l))},!0)}),Se=function(e){var t,n=le.test(e.nodeName),r=n&&(e[m](f.sizesAttr)||e[m]("sizes")),i="auto"==r;(!i&&H||!n||!e[m]("src")&&!e.srcset||e.complete||v(e,f.errorClass)||!v(e,f.lazyClass))&&(t=w(e,"lazyunveilread").detail,i&&N.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,pe++,Ee(e,t,i,r,n))},Ce=function(){if(!H)if(s.now()-G<999)h(Ce,999);else{var e=M(function(){f.loadMode=3,ve()});H=!0,f.loadMode=3,ve(),t("scroll",function(){3==f.loadMode&&(f.loadMode=2),e()},!0)}},{_:function(){G=s.now(),d.elements=u.getElementsByClassName(f.lazyClass),U=u.getElementsByClassName(f.lazyClass+" "+f.preloadClass),te=f.hFac,t("scroll",ve,!0),t("resize",ve,!0),r.MutationObserver?new MutationObserver(ve).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p[a]("DOMNodeInserted",ve,!0),p[a]("DOMAttrModified",ve,!0),setInterval(ve,999)),t("hashchange",ve,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){u[a](e,ve,!0)}),/d$|^c/.test(u.readyState)?Ce():(t("load",Ce),u[a]("DOMContentLoaded",ve),h(Ce,2e4)),d.elements.length?(ge(),x._lsFlush()):ve()},checkElems:ve,unveil:Se}),N=(I=e(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),A.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||E(e,n.detail)}),O=function(e,t,n){var r,i=e.parentNode;i&&(n=C(e,i,n),(r=w(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&I(e,i,r,n))},F=M(function(){var e,t=$.length;if(t)for(e=0;e<t;e++)O($[e])}),{_:function(){$=u.getElementsByClassName(f.autosizesClass),t("resize",F)},checkElems:F,updateElem:O}),k=function(){k.i||(k.i=!0,N._(),_._())};var $,I,O,F;var U,H,Q,j,G,q,V,K,J,X,Y,Z,ee,te,ne,re,ie,se,ae,ce,oe,le,ue,de,fe,pe,me,he,Ae,ge,ve,ye,ze,be,we,Ee,Se,Ce;return d={cfg:f,autoSizer:N,loader:_,init:k,uP:E,aC:y,rC:z,hC:v,fire:w,gW:C,rAF:x}}(r,r.document),r.lazySizes=i,e.exports&&(e.exports=i)}});