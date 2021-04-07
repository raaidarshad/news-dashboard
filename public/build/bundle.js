var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e){return null==e?"":e}function i(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function h(){return d(" ")}function p(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function b(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}}let $;function x(e){$=e}function w(){if(!$)throw new Error("Function called outside component initialization");return $}const k=[],y=[],j=[],z=[],q=Promise.resolve();let _=!1;function T(e){j.push(e)}let O=!1;const N=new Set;function S(){if(!O){O=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];x(t),H(t.$$)}for(x(null),k.length=0;y.length;)y.pop()();for(let e=0;e<j.length;e+=1){const t=j[e];N.has(t)||(N.add(t),t())}j.length=0}while(k.length);for(;z.length;)z.pop()();_=!1,O=!1,N.clear()}}function H(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const M=new Set;let E;function L(){E={r:0,c:[],p:E}}function W(){E.r||r(E.c),E=E.p}function B(e,t){e&&e.i&&(M.delete(e),e.i(t))}function C(e,t,n,r){if(e&&e.o){if(M.has(e))return;M.add(e),E.c.push((()=>{M.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function P(e,t){const n=t.token={};function r(e,r,s,l){if(t.token!==n)return;t.resolved=l;let o=t.ctx;void 0!==s&&(o=o.slice(),o[s]=l);const i=e&&(t.current=e)(o);let a=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==r&&e&&(L(),C(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),W())})):t.block.d(1),i.c(),B(i,1),i.m(t.mount(),t.anchor),a=!0),t.block=i,t.blocks&&(t.blocks[r]=i),a&&S()}if((s=e)&&"object"==typeof s&&"function"==typeof s.then){const n=w();if(e.then((e=>{x(n),r(t.then,1,t.value,e),x(null)}),(e=>{if(x(n),r(t.catch,2,t.error,e),x(null),!t.hasCatch)throw e})),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}var s}function A(e){e&&e.c()}function R(e,n,l,o){const{fragment:i,on_mount:a,on_destroy:c,after_update:u}=e.$$;i&&i.m(n,l),o||T((()=>{const n=a.map(t).filter(s);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(T)}function U(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){-1===e.$$.dirty[0]&&(k.push(e),_||(_=!0,q.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(t,s,l,o,i,a,u=[-1]){const f=$;x(t);const d=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(d.ctx=l?l(t,s.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),h&&D(t,e)),n})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);d.fragment&&d.fragment.l(e),e.forEach(c)}else d.fragment&&d.fragment.c();s.intro&&B(t.$$.fragment),R(t,s.target,s.anchor,s.customElement),S()}x(f)}class K{$destroy(){U(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function X(t){let n,r,s,l,o,u,d=t[0].title+"";return{c(){n=f("main"),r=f("div"),s=f("hr"),l=h(),o=f("a"),m(s,"class","svelte-1cxbwhl"),m(o,"href",u=t[0].link),m(o,"target","_blank"),m(o,"rel","noopener noreferrer")},m(e,t){a(e,n,t),i(n,r),i(r,s),i(r,l),i(r,o),o.innerHTML=d},p(e,[t]){1&t&&d!==(d=e[0].title+"")&&(o.innerHTML=d),1&t&&u!==(u=e[0].link)&&m(o,"href",u)},i:e,o:e,d(e){e&&c(n)}}}function J(e,t,n){let{article:r}=t;return e.$$set=e=>{"article"in e&&n(0,r=e.article)},[r]}class I extends K{constructor(e){super(),F(this,e,J,X,l,{article:0})}}function Y(e,t,n){const r=e.slice();return r[10]=t[n],r}function G(e,t,n){const r=e.slice();return r[13]=t[n],r}function Q(e){let t,n,r,s,l=e[13].text+"";return{c(){t=f("option"),n=d(l),r=h(),t.__value=s=e[13],t.value=t.__value},m(e,s){a(e,t,s),i(t,n),i(t,r)},p(e,r){4&r&&l!==(l=e[13].text+"")&&v(n,l),4&r&&s!==(s=e[13])&&(t.__value=s,t.value=t.__value)},d(e){e&&c(t)}}}function V(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function Z(e){let t,n,r=e[9].entries,s=[];for(let t=0;t<r.length;t+=1)s[t]=ee(Y(e,r,t));const l=e=>C(s[e],1,1,(()=>{s[e]=null}));return{c(){t=f("ul");for(let e=0;e<s.length;e+=1)s[e].c();m(t,"class","svelte-blkge9")},m(e,r){a(e,t,r);for(let e=0;e<s.length;e+=1)s[e].m(t,null);n=!0},p(e,n){if(16&n){let o;for(r=e[9].entries,o=0;o<r.length;o+=1){const l=Y(e,r,o);s[o]?(s[o].p(l,n),B(s[o],1)):(s[o]=ee(l),s[o].c(),B(s[o],1),s[o].m(t,null))}for(L(),o=r.length;o<s.length;o+=1)l(o);W()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)B(s[e]);n=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)C(s[e]);n=!1},d(e){e&&c(t),u(s,e)}}}function ee(e){let t,n,r;return n=new I({props:{article:e[10]}}),{c(){t=f("li"),A(n.$$.fragment)},m(e,s){a(e,t,s),R(n,t,null),r=!0},p(e,t){const r={};16&t&&(r.article=e[10]),n.$set(r)},i(e){r||(B(n.$$.fragment,e),r=!0)},o(e){C(n.$$.fragment,e),r=!1},d(e){e&&c(t),U(n)}}}function te(t){let n;return{c(){n=f("p"),n.textContent="Waiting..."},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}function ne(e){let t,n,s,l,o,$,x,w,k,y,j,z=e[2],q=[];for(let t=0;t<z.length;t+=1)q[t]=Q(G(e,z,t));let _={ctx:e,current:null,token:null,hasCatch:!1,pending:te,then:Z,catch:V,value:9,blocks:[,,,]};return P(w=e[4],_),{c(){t=f("main"),n=f("p"),s=d(e[0]),l=h(),o=f("div"),$=f("select");for(let e=0;e<q.length;e+=1)q[e].c();x=h(),_.block.c(),m(n,"class","title svelte-blkge9"),m($,"class","svelte-blkge9"),void 0===e[3]&&T((()=>e[6].call($))),g(o,"background-color",e[1]),g(o,"height","100%"),m(o,"class","svelte-blkge9"),m(t,"class","svelte-blkge9")},m(r,c){a(r,t,c),i(t,n),i(n,s),i(t,l),i(t,o),i(o,$);for(let e=0;e<q.length;e+=1)q[e].m($,null);b($,e[3]),i(o,x),_.block.m(o,_.anchor=null),_.mount=()=>o,_.anchor=null,k=!0,y||(j=[p($,"change",e[6]),p($,"change",re)],y=!0)},p(t,[n]){if(e=t,(!k||1&n)&&v(s,e[0]),4&n){let t;for(z=e[2],t=0;t<z.length;t+=1){const r=G(e,z,t);q[t]?q[t].p(r,n):(q[t]=Q(r),q[t].c(),q[t].m($,null))}for(;t<q.length;t+=1)q[t].d(1);q.length=z.length}if(12&n&&b($,e[3]),_.ctx=e,16&n&&w!==(w=e[4])&&P(w,_));else{const t=e.slice();t[9]=_.resolved,_.block.p(t,n)}(!k||2&n)&&g(o,"background-color",e[1])},i(e){k||(B(_.block),k=!0)},o(e){for(let e=0;e<3;e+=1){C(_.blocks[e])}k=!1},d(e){e&&c(t),u(q,e),_.block.d(),_.token=null,_=null,y=!1,r(j)}}}async function re(){}function se(e,t,n){let r,{title:s}=t,{bgcolor:l="transparent"}=t,{rssOptions:o}=t,{limit:i=10}=t,a=o[0];return e.$$set=e=>{"title"in e&&n(0,s=e.title),"bgcolor"in e&&n(1,l=e.bgcolor),"rssOptions"in e&&n(2,o=e.rssOptions),"limit"in e&&n(5,i=e.limit)},e.$$.update=()=>{8&e.$$.dirty&&a.url,8&e.$$.dirty&&n(4,r=async function(e){const t=await fetch(`./feed?rssUrl=${e}&limit=${i}`),n=await t.json();if(t.ok)return n;throw new Error(n)}(a.url))},[s,l,o,a,r,i,function(){a=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(3,a),n(2,o)}]}class le extends K{constructor(e){super(),F(this,e,se,ne,l,{title:0,bgcolor:1,rssOptions:2,limit:5})}}var oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ae="object"==typeof ie&&ie&&ie.Object===Object&&ie,ce="object"==typeof self&&self&&self.Object===Object&&self,ue=ae||ce||Function("return this")(),fe=function(){return ue.Date.now()},de=/\s/;var he=function(e){for(var t=e.length;t--&&de.test(e.charAt(t)););return t},pe=/^\s+/;var me=function(e){return e?e.slice(0,he(e)+1).replace(pe,""):e},ve=ue.Symbol,ge=Object.prototype,be=ge.hasOwnProperty,$e=ge.toString,xe=ve?ve.toStringTag:void 0;var we=function(e){var t=be.call(e,xe),n=e[xe];try{e[xe]=void 0;var r=!0}catch(e){}var s=$e.call(e);return r&&(t?e[xe]=n:delete e[xe]),s},ke=Object.prototype.toString;var ye=function(e){return ke.call(e)},je=ve?ve.toStringTag:void 0;var ze=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":je&&je in Object(e)?we(e):ye(e)};var qe=function(e){return null!=e&&"object"==typeof e};var _e=function(e){return"symbol"==typeof e||qe(e)&&"[object Symbol]"==ze(e)},Te=/^[-+]0x[0-9a-f]+$/i,Oe=/^0b[01]+$/i,Ne=/^0o[0-7]+$/i,Se=parseInt;var He=function(e){if("number"==typeof e)return e;if(_e(e))return NaN;if(oe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var n=Oe.test(e);return n||Ne.test(e)?Se(e.slice(2),n?2:8):Te.test(e)?NaN:+e},Me=Math.max,Ee=Math.min;var Le=function(e,t,n){var r,s,l,o,i,a,c=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,l=s;return r=s=void 0,c=t,o=e.apply(l,n)}function p(e){return c=e,i=setTimeout(v,t),u?h(e):o}function m(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-c>=l}function v(){var e=fe();if(m(e))return g(e);i=setTimeout(v,function(e){var n=t-(e-a);return f?Ee(n,l-(e-c)):n}(e))}function g(e){return i=void 0,d&&r?h(e):(r=s=void 0,o)}function b(){var e=fe(),n=m(e);if(r=arguments,s=this,a=e,n){if(void 0===i)return p(a);if(f)return clearTimeout(i),i=setTimeout(v,t),h(a)}return void 0===i&&(i=setTimeout(v,t)),o}return t=He(t)||0,oe(n)&&(u=!!n.leading,l=(f="maxWait"in n)?Me(He(n.maxWait)||0,t):l,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==i&&clearTimeout(i),c=0,r=a=s=i=void 0},b.flush=function(){return void 0===i?o:g(fe())},b};function We(e){let t,n,s,l,u,v,g,b,$,x,w,k,y,j,z,q,_,T,O,N,S,H,M,E,L,W,P,D,F,K,X,J,I,Y,G,Q,V,Z,ee,te,ne;return W=new le({props:{class:"farleft",rssOptions:e[5],title:"Left",bgcolor:"#99aeff33"}}),F=new le({props:{rssOptions:e[4],title:"Left-leaning",bgcolor:"#cce1ff33"}}),J=new le({props:{rssOptions:e[3],title:"Center"}}),G=new le({props:{rssOptions:e[2],title:"Right-leaning",bgcolor:"#ffe0e933"}}),Z=new le({props:{rssOptions:e[1],title:"Right",bgcolor:"#ffadb633"}}),{c(){t=f("main"),n=f("div"),s=f("a"),l=d("Left"),v=h(),g=f("a"),b=d("Left-lean"),x=h(),w=f("a"),k=d("Center"),j=h(),z=f("a"),q=d("Right-lean"),T=h(),O=f("a"),N=d("Right"),H=h(),M=f("div"),E=f("div"),L=f("div"),A(W.$$.fragment),P=h(),D=f("div"),A(F.$$.fragment),K=h(),X=f("div"),A(J.$$.fragment),I=h(),Y=f("div"),A(G.$$.fragment),Q=h(),V=f("div"),A(Z.$$.fragment),m(s,"class",u=o("left"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(s,"href","#left"),m(g,"class",$=o("left-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(g,"href","#left-lean"),m(w,"class",y=o("center"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(w,"href","#center"),m(z,"class",_=o("right-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(z,"href","#right-lean"),m(O,"class",S=o("right"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(O,"href","#right"),m(n,"class","anchor-nav svelte-8zxfzf"),m(L,"id","left"),m(L,"class","lane svelte-8zxfzf"),m(D,"id","left-lean"),m(D,"class","lane svelte-8zxfzf"),m(X,"id","center"),m(X,"class","lane svelte-8zxfzf"),m(Y,"id","right-lean"),m(Y,"class","lane svelte-8zxfzf"),m(V,"id","right"),m(V,"class","lane svelte-8zxfzf"),m(E,"class","lanes svelte-8zxfzf"),m(M,"class","scrolling-wrapper svelte-8zxfzf")},m(r,o){a(r,t,o),i(t,n),i(n,s),i(s,l),i(n,v),i(n,g),i(g,b),i(n,x),i(n,w),i(w,k),i(n,j),i(n,z),i(z,q),i(n,T),i(n,O),i(O,N),i(t,H),i(t,M),i(M,E),i(E,L),R(W,L,null),i(E,P),i(E,D),R(F,D,null),i(E,K),i(E,X),R(J,X,null),i(E,I),i(E,Y),R(G,Y,null),i(E,Q),i(E,V),R(Z,V,null),ee=!0,te||(ne=[p(s,"click",e[7]),p(g,"click",e[8]),p(w,"click",e[9]),p(z,"click",e[10]),p(O,"click",e[11]),p(M,"scroll",e[6])],te=!0)},p(e,[t]){(!ee||1&t&&u!==(u=o("left"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(s,"class",u),(!ee||1&t&&$!==($=o("left-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(g,"class",$),(!ee||1&t&&y!==(y=o("center"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(w,"class",y),(!ee||1&t&&_!==(_=o("right-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(z,"class",_),(!ee||1&t&&S!==(S=o("right"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(O,"class",S)},i(e){ee||(B(W.$$.fragment,e),B(F.$$.fragment,e),B(J.$$.fragment,e),B(G.$$.fragment,e),B(Z.$$.fragment,e),ee=!0)},o(e){C(W.$$.fragment,e),C(F.$$.fragment,e),C(J.$$.fragment,e),C(G.$$.fragment,e),C(Z.$$.fragment,e),ee=!1},d(e){e&&c(t),U(W),U(F),U(J),U(G),U(Z),te=!1,r(ne)}}}function Be(e,t,n){let r=[{id:1,text:"OAN (Home)",url:"https://www.oann.com/category/newsroom/feed"},{id:2,text:"Breitbart (Home)",url:"http://feeds.feedburner.com/breitbart"},{id:3,text:"New York Post (Home)",url:"https://nypost.com/feed/"}],s=[{id:1,text:"Fox News (National)",url:"http://feeds.foxnews.com/foxnews/national"},{id:2,text:"Newsmax (Home)",url:"https://www.newsmax.com/rss/Newsfront/16"}],l=[{id:1,text:"NPR (Home)",url:"http://www.npr.org/rss/rss.php?id=1001"},{id:2,text:"Reuters (U.S.)",url:"https://www.reutersagency.com/feed/?best-regions=north-america&post_type=best"},{id:3,text:"The BBC (World)",url:"http://feeds.bbci.co.uk/news/rss.xml"}],o=[{id:1,text:"The New York Times (Home)",url:"https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"},{id:2,text:"The Washington Post (National)",url:"http://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_39"},{id:3,text:"The Guardian (World)",url:"https://www.theguardian.com/world/rss"}],i=[{id:1,text:"Jacobin (Home)",url:"https://jacobinmag.com/feed"},{id:2,text:"Vox (Home)",url:"https://www.vox.com/rss/index.xml"},{id:2,text:"BuzzfeedNews (Home)",url:"https://www.buzzfeed.com/index.xml"}],a="center";const c=Le((e=>{return t=e.target.scrollLeft,void n(0,a=t<300?"left":t<500?"left-lean":t<1e3?"center":t<1500?"right-lean":"right");var t}),90);var u;u=()=>{0!==document.querySelector(".scrolling-wrapper").scrollLeftMax&&window.innerWidth<650&&(document.querySelector(".scrolling-wrapper").scrollLeft=872)},w().$$.on_mount.push(u);return[a,r,s,l,o,i,c,()=>n(0,a="left"),()=>n(0,a="left-lean"),()=>n(0,a="center"),()=>n(0,a="right-lean"),()=>n(0,a="right")]}class Ce extends K{constructor(e){super(),F(this,e,Be,We,l,{})}}function Pe(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-fr0k8k"><h1 id="about" class="svelte-fr0k8k">About</h1> \n        <p class="svelte-fr0k8k">We often find ourselves wondering how people can live in such entirely\n            different realities. One commonly discussed idea is that of online\n            &quot;bubbles&quot;, where we only consume news from certain sources and only\n            talk about it with like-minded people. These bubbles often reinforce\n            our prior beliefs and further distance us from those in other\n            bubbles. One small way to help bridge this gap is to simply be aware\n            of the full spectrum of news available to us. We&#39;ve tried doing this\n            by following a variety of accounts on Twitter, but there is so much\n            noise on that platform.</p> \n        <p class="svelte-fr0k8k">In response, we made this super simple news dashboard. It is divided\n            into five columns, ranging from one end of the political spectrum to\n            the other (as defined by\n            <a href="https://www.allsides.com/media-bias/media-bias-ratings">AllSides research</a>). Each lane lists the top 10 news stories from an RSS feed of that\n            news source, and you can click the headline to visit the source\n            article to read further. You can also click on the news source name\n            (try clicking on &quot;Vox (Home)&quot;) to select a different news source.\n            With this tool, you can get an idea of what news is disseminated\n            across the political spectrum at a quick glance. In short, you can\n            pop the bubble.</p></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ae extends K{constructor(e){super(),F(this,e,null,Pe,l,{})}}function Re(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-jfszj"><h1 id="contact" class="svelte-jfszj">Contact</h1> \n        <p class="svelte-jfszj">We appreciate your thoughts on how to make this better and more usable. Please direct\n            all comments, questions, feature requests, and more to <a href="mailto: team@popthebubble.news">team@popthebubble.news</a>.\n            We are actively working on this and are excited for your feedback!</p></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ue extends K{constructor(e){super(),F(this,e,null,Re,l,{})}}function De(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-nd1dj6"><p class="svelte-nd1dj6">Pop the Bubble is a news aggregator, and as such, does not own and is not responsible for the content in any news article included on the site. \n            Content is owned/copyrighted by the individual author, contributor or news site, and should not be used without proper permission.</p> \n        <p class="svelte-nd1dj6">Copyright 2021 by Pop the Bubble News</p></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Fe extends K{constructor(e){super(),F(this,e,null,De,l,{})}}function Ke(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-rfbvuw"><a class="headermargin svelte-rfbvuw" href="#support">Support</a> \n        <a class="headermargin svelte-rfbvuw" href="#about">About</a> \n        <a href="#contact" class="svelte-rfbvuw">Contact</a></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Xe extends K{constructor(e){super(),F(this,e,null,Ke,l,{})}}function Je(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="support-wrapper svelte-xjqfu3"><h1 id="support" class="svelte-xjqfu3">Support</h1> \n        <div class="sub-wrapper svelte-xjqfu3"><div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/M2VAKG4HBERHJJF63JEZMC3H?src=embed"><p class="square-text svelte-xjqfu3">Keep the lights on</p> \n                    <p class="square-text svelte-xjqfu3">$1.00/month</p></a></div> \n            <div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/3VBSFOFH6UXNUPUMBTLEKHPM?src=embed"><p class="square-text svelte-xjqfu3">Make it better</p> \n                    <p class="square-text svelte-xjqfu3">$5.00/month</p></a></div> \n            <div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/5YQKDA7L4QQMNFOXBJ2BH5QK?src=embed"><p class="square-text svelte-xjqfu3">Make it amazing</p> \n                    <p class="square-text svelte-xjqfu3">$10.00/month</p></a></div> \n            <div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/IGO7MUKGYN26XPDXXXBJXEUK?src=embed"><p class="square-text svelte-xjqfu3">Make it yours</p> \n                    <p class="square-text svelte-xjqfu3">Any/month</p></a></div></div></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ie extends K{constructor(e){super(),F(this,e,null,Je,l,{})}}function Ye(t){let n,r,s,l,o,u,d,p,v,g,b,$,x,w,k,y,j,z;return s=new Xe({}),v=new Ce({}),b=new Ie({}),x=new Ae({}),k=new Ue({}),j=new Fe({}),{c(){n=f("main"),r=f("div"),A(s.$$.fragment),l=h(),o=f("h1"),o.textContent="Pop the Bubble News",u=h(),d=f("h5"),d.textContent="A simple RSS feed dashboard to quickly view the full spectrum of\n\t\t\tnews in the U.S.",p=h(),A(v.$$.fragment),g=h(),A(b.$$.fragment),$=h(),A(x.$$.fragment),w=h(),A(k.$$.fragment),y=h(),A(j.$$.fragment),m(o,"class","svelte-1rdx3a6"),m(d,"class","svelte-1rdx3a6"),m(r,"class","maincontent svelte-1rdx3a6"),m(n,"class","svelte-1rdx3a6")},m(e,t){a(e,n,t),i(n,r),R(s,r,null),i(r,l),i(r,o),i(r,u),i(r,d),i(r,p),R(v,r,null),i(n,g),R(b,n,null),i(n,$),R(x,n,null),i(n,w),R(k,n,null),i(n,y),R(j,n,null),z=!0},p:e,i(e){z||(B(s.$$.fragment,e),B(v.$$.fragment,e),B(b.$$.fragment,e),B(x.$$.fragment,e),B(k.$$.fragment,e),B(j.$$.fragment,e),z=!0)},o(e){C(s.$$.fragment,e),C(v.$$.fragment,e),C(b.$$.fragment,e),C(x.$$.fragment,e),C(k.$$.fragment,e),C(j.$$.fragment,e),z=!1},d(e){e&&c(n),U(s),U(v),U(b),U(x),U(k),U(j)}}}return new class extends K{constructor(e){super(),F(this,e,null,Ye,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
