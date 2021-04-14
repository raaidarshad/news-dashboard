var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function s(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e){return null==e?"":e}function i(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function u(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function h(){return d(" ")}function p(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function b(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}}let w;function $(e){w=e}function x(){if(!w)throw new Error("Function called outside component initialization");return w}const y=[],k=[],q=[],j=[],_=Promise.resolve();let z=!1;function T(e){q.push(e)}let N=!1;const O=new Set;function S(){if(!N){N=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];$(t),H(t.$$)}for($(null),y.length=0;k.length;)k.pop()();for(let e=0;e<q.length;e+=1){const t=q[e];O.has(t)||(O.add(t),t())}q.length=0}while(y.length);for(;j.length;)j.pop()();z=!1,N=!1,O.clear()}}function H(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(T)}}const M=new Set;let L;function W(){L={r:0,c:[],p:L}}function E(){L.r||r(L.c),L=L.p}function B(e,t){e&&e.i&&(M.delete(e),e.i(t))}function C(e,t,n,r){if(e&&e.o){if(M.has(e))return;M.add(e),L.c.push((()=>{M.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function P(e,t){const n=t.token={};function r(e,r,s,l){if(t.token!==n)return;t.resolved=l;let o=t.ctx;void 0!==s&&(o=o.slice(),o[s]=l);const i=e&&(t.current=e)(o);let a=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==r&&e&&(W(),C(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),E())})):t.block.d(1),i.c(),B(i,1),i.m(t.mount(),t.anchor),a=!0),t.block=i,t.blocks&&(t.blocks[r]=i),a&&S()}if((s=e)&&"object"==typeof s&&"function"==typeof s.then){const n=x();if(e.then((e=>{$(n),r(t.then,1,t.value,e),$(null)}),(e=>{if($(n),r(t.catch,2,t.error,e),$(null),!t.hasCatch)throw e})),t.current!==t.pending)return r(t.pending,0),!0}else{if(t.current!==t.then)return r(t.then,1,t.value,e),!0;t.resolved=e}var s}function A(e){e&&e.c()}function R(e,n,l,o){const{fragment:i,on_mount:a,on_destroy:c,after_update:u}=e.$$;i&&i.m(n,l),o||T((()=>{const n=a.map(t).filter(s);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(T)}function D(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function F(e,t){-1===e.$$.dirty[0]&&(y.push(e),z||(z=!0,_.then(S)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(t,s,l,o,i,a,u=[-1]){const f=w;$(t);const d=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(d.ctx=l?l(t,s.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),h&&F(t,e)),n})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);d.fragment&&d.fragment.l(e),e.forEach(c)}else d.fragment&&d.fragment.c();s.intro&&B(t.$$.fragment),R(t,s.target,s.anchor,s.customElement),S()}$(f)}class J{$destroy(){D(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function K(t){let n,r,s,l,o,u,d=t[0].title+"";return{c(){n=f("main"),r=f("div"),s=f("hr"),l=h(),o=f("a"),m(s,"class","svelte-1cxbwhl"),m(o,"href",u=t[0].link),m(o,"target","_blank"),m(o,"rel","noopener noreferrer")},m(e,t){a(e,n,t),i(n,r),i(r,s),i(r,l),i(r,o),o.innerHTML=d},p(e,[t]){1&t&&d!==(d=e[0].title+"")&&(o.innerHTML=d),1&t&&u!==(u=e[0].link)&&m(o,"href",u)},i:e,o:e,d(e){e&&c(n)}}}function X(e,t,n){let{article:r}=t;return e.$$set=e=>{"article"in e&&n(0,r=e.article)},[r]}class I extends J{constructor(e){super(),U(this,e,X,K,l,{article:0})}}function Y(e,t,n){const r=e.slice();return r[10]=t[n],r}function G(e,t,n){const r=e.slice();return r[13]=t[n],r}function Q(e){let t,n,r,s,l=e[13].text+"";return{c(){t=f("option"),n=d(l),r=h(),t.__value=s=e[13],t.value=t.__value},m(e,s){a(e,t,s),i(t,n),i(t,r)},p(e,r){4&r&&l!==(l=e[13].text+"")&&v(n,l),4&r&&s!==(s=e[13])&&(t.__value=s,t.value=t.__value)},d(e){e&&c(t)}}}function V(t){return{c:e,m:e,p:e,i:e,o:e,d:e}}function Z(e){let t,n,r=e[9].entries,s=[];for(let t=0;t<r.length;t+=1)s[t]=ee(Y(e,r,t));const l=e=>C(s[e],1,1,(()=>{s[e]=null}));return{c(){t=f("ul");for(let e=0;e<s.length;e+=1)s[e].c();m(t,"class","svelte-blkge9")},m(e,r){a(e,t,r);for(let e=0;e<s.length;e+=1)s[e].m(t,null);n=!0},p(e,n){if(16&n){let o;for(r=e[9].entries,o=0;o<r.length;o+=1){const l=Y(e,r,o);s[o]?(s[o].p(l,n),B(s[o],1)):(s[o]=ee(l),s[o].c(),B(s[o],1),s[o].m(t,null))}for(W(),o=r.length;o<s.length;o+=1)l(o);E()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)B(s[e]);n=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)C(s[e]);n=!1},d(e){e&&c(t),u(s,e)}}}function ee(e){let t,n,r;return n=new I({props:{article:e[10]}}),{c(){t=f("li"),A(n.$$.fragment)},m(e,s){a(e,t,s),R(n,t,null),r=!0},p(e,t){const r={};16&t&&(r.article=e[10]),n.$set(r)},i(e){r||(B(n.$$.fragment,e),r=!0)},o(e){C(n.$$.fragment,e),r=!1},d(e){e&&c(t),D(n)}}}function te(t){let n;return{c(){n=f("p"),n.textContent="Waiting..."},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}function ne(e){let t,n,s,l,o,w,$,x,y,k,q,j=e[2],_=[];for(let t=0;t<j.length;t+=1)_[t]=Q(G(e,j,t));let z={ctx:e,current:null,token:null,hasCatch:!1,pending:te,then:Z,catch:V,value:9,blocks:[,,,]};return P(x=e[4],z),{c(){t=f("main"),n=f("p"),s=d(e[0]),l=h(),o=f("div"),w=f("select");for(let e=0;e<_.length;e+=1)_[e].c();$=h(),z.block.c(),m(n,"class","title svelte-blkge9"),m(w,"class","svelte-blkge9"),void 0===e[3]&&T((()=>e[6].call(w))),g(o,"background-color",e[1]),g(o,"height","100%"),m(o,"class","svelte-blkge9"),m(t,"class","svelte-blkge9")},m(r,c){a(r,t,c),i(t,n),i(n,s),i(t,l),i(t,o),i(o,w);for(let e=0;e<_.length;e+=1)_[e].m(w,null);b(w,e[3]),i(o,$),z.block.m(o,z.anchor=null),z.mount=()=>o,z.anchor=null,y=!0,k||(q=[p(w,"change",e[6]),p(w,"change",re)],k=!0)},p(t,[n]){if(e=t,(!y||1&n)&&v(s,e[0]),4&n){let t;for(j=e[2],t=0;t<j.length;t+=1){const r=G(e,j,t);_[t]?_[t].p(r,n):(_[t]=Q(r),_[t].c(),_[t].m(w,null))}for(;t<_.length;t+=1)_[t].d(1);_.length=j.length}if(12&n&&b(w,e[3]),z.ctx=e,16&n&&x!==(x=e[4])&&P(x,z));else{const t=e.slice();t[9]=z.resolved,z.block.p(t,n)}(!y||2&n)&&g(o,"background-color",e[1])},i(e){y||(B(z.block),y=!0)},o(e){for(let e=0;e<3;e+=1){C(z.blocks[e])}y=!1},d(e){e&&c(t),u(_,e),z.block.d(),z.token=null,z=null,k=!1,r(q)}}}async function re(){}function se(e,t,n){let r,{title:s}=t,{bgcolor:l="transparent"}=t,{rssOptions:o}=t,{limit:i=10}=t,a=o[0];return e.$$set=e=>{"title"in e&&n(0,s=e.title),"bgcolor"in e&&n(1,l=e.bgcolor),"rssOptions"in e&&n(2,o=e.rssOptions),"limit"in e&&n(5,i=e.limit)},e.$$.update=()=>{8&e.$$.dirty&&a.url,8&e.$$.dirty&&n(4,r=async function(e){const t=await fetch(`./feed?rssUrl=${e}&limit=${i}`),n=await t.json();if(t.ok)return n;throw new Error(n)}(a.url))},[s,l,o,a,r,i,function(){a=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),n(3,a),n(2,o)}]}class le extends J{constructor(e){super(),U(this,e,se,ne,l,{title:0,bgcolor:1,rssOptions:2,limit:5})}}var oe=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ae="object"==typeof ie&&ie&&ie.Object===Object&&ie,ce="object"==typeof self&&self&&self.Object===Object&&self,ue=ae||ce||Function("return this")(),fe=function(){return ue.Date.now()},de=/\s/;var he=function(e){for(var t=e.length;t--&&de.test(e.charAt(t)););return t},pe=/^\s+/;var me=function(e){return e?e.slice(0,he(e)+1).replace(pe,""):e},ve=ue.Symbol,ge=Object.prototype,be=ge.hasOwnProperty,we=ge.toString,$e=ve?ve.toStringTag:void 0;var xe=function(e){var t=be.call(e,$e),n=e[$e];try{e[$e]=void 0;var r=!0}catch(e){}var s=we.call(e);return r&&(t?e[$e]=n:delete e[$e]),s},ye=Object.prototype.toString;var ke=function(e){return ye.call(e)},qe=ve?ve.toStringTag:void 0;var je=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qe&&qe in Object(e)?xe(e):ke(e)};var _e=function(e){return null!=e&&"object"==typeof e};var ze=function(e){return"symbol"==typeof e||_e(e)&&"[object Symbol]"==je(e)},Te=/^[-+]0x[0-9a-f]+$/i,Ne=/^0b[01]+$/i,Oe=/^0o[0-7]+$/i,Se=parseInt;var He=function(e){if("number"==typeof e)return e;if(ze(e))return NaN;if(oe(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=oe(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=me(e);var n=Ne.test(e);return n||Oe.test(e)?Se(e.slice(2),n?2:8):Te.test(e)?NaN:+e},Me=Math.max,Le=Math.min;var We=function(e,t,n){var r,s,l,o,i,a,c=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,l=s;return r=s=void 0,c=t,o=e.apply(l,n)}function p(e){return c=e,i=setTimeout(v,t),u?h(e):o}function m(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-c>=l}function v(){var e=fe();if(m(e))return g(e);i=setTimeout(v,function(e){var n=t-(e-a);return f?Le(n,l-(e-c)):n}(e))}function g(e){return i=void 0,d&&r?h(e):(r=s=void 0,o)}function b(){var e=fe(),n=m(e);if(r=arguments,s=this,a=e,n){if(void 0===i)return p(a);if(f)return clearTimeout(i),i=setTimeout(v,t),h(a)}return void 0===i&&(i=setTimeout(v,t)),o}return t=He(t)||0,oe(n)&&(u=!!n.leading,l=(f="maxWait"in n)?Me(He(n.maxWait)||0,t):l,d="trailing"in n?!!n.trailing:d),b.cancel=function(){void 0!==i&&clearTimeout(i),c=0,r=a=s=i=void 0},b.flush=function(){return void 0===i?o:g(fe())},b};function Ee(e){let t,n,s,l,u,v,g,b,w,$,x,y,k,q,j,_,z,T,N,O,S,H,M,L,W,E,P,F,U,J,K,X,I,Y,G,Q,V,Z,ee,te,ne;return E=new le({props:{class:"farleft",rssOptions:e[5],title:"Left",bgcolor:"#99aeff33"}}),U=new le({props:{rssOptions:e[4],title:"Left-leaning",bgcolor:"#cce1ff33"}}),X=new le({props:{rssOptions:e[3],title:"Center"}}),G=new le({props:{rssOptions:e[2],title:"Right-leaning",bgcolor:"#ffe0e933"}}),Z=new le({props:{rssOptions:e[1],title:"Right",bgcolor:"#ffadb633"}}),{c(){t=f("main"),n=f("div"),s=f("a"),l=d("Left"),v=h(),g=f("a"),b=d("Left-lean"),$=h(),x=f("a"),y=d("Center"),q=h(),j=f("a"),_=d("Right-lean"),T=h(),N=f("a"),O=d("Right"),H=h(),M=f("div"),L=f("div"),W=f("div"),A(E.$$.fragment),P=h(),F=f("div"),A(U.$$.fragment),J=h(),K=f("div"),A(X.$$.fragment),I=h(),Y=f("div"),A(G.$$.fragment),Q=h(),V=f("div"),A(Z.$$.fragment),m(s,"class",u=o("left"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(s,"href","#left"),m(g,"class",w=o("left-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(g,"href","#left-lean"),m(x,"class",k=o("center"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(x,"href","#center"),m(j,"class",z=o("right-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(j,"href","#right-lean"),m(N,"class",S=o("right"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"),m(N,"href","#right"),m(n,"class","anchor-nav svelte-8zxfzf"),m(W,"id","left"),m(W,"class","lane svelte-8zxfzf"),m(F,"id","left-lean"),m(F,"class","lane svelte-8zxfzf"),m(K,"id","center"),m(K,"class","lane svelte-8zxfzf"),m(Y,"id","right-lean"),m(Y,"class","lane svelte-8zxfzf"),m(V,"id","right"),m(V,"class","lane svelte-8zxfzf"),m(L,"class","lanes svelte-8zxfzf"),m(M,"class","scrolling-wrapper svelte-8zxfzf")},m(r,o){a(r,t,o),i(t,n),i(n,s),i(s,l),i(n,v),i(n,g),i(g,b),i(n,$),i(n,x),i(x,y),i(n,q),i(n,j),i(j,_),i(n,T),i(n,N),i(N,O),i(t,H),i(t,M),i(M,L),i(L,W),R(E,W,null),i(L,P),i(L,F),R(U,F,null),i(L,J),i(L,K),R(X,K,null),i(L,I),i(L,Y),R(G,Y,null),i(L,Q),i(L,V),R(Z,V,null),ee=!0,te||(ne=[p(s,"click",e[7]),p(g,"click",e[8]),p(x,"click",e[9]),p(j,"click",e[10]),p(N,"click",e[11]),p(M,"scroll",e[6])],te=!0)},p(e,[t]){(!ee||1&t&&u!==(u=o("left"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(s,"class",u),(!ee||1&t&&w!==(w=o("left-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(g,"class",w),(!ee||1&t&&k!==(k=o("center"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(x,"class",k),(!ee||1&t&&z!==(z=o("right-lean"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(j,"class",z),(!ee||1&t&&S!==(S=o("right"===e[0]?"selected lane-nav":"lane-nav")+" svelte-8zxfzf"))&&m(N,"class",S)},i(e){ee||(B(E.$$.fragment,e),B(U.$$.fragment,e),B(X.$$.fragment,e),B(G.$$.fragment,e),B(Z.$$.fragment,e),ee=!0)},o(e){C(E.$$.fragment,e),C(U.$$.fragment,e),C(X.$$.fragment,e),C(G.$$.fragment,e),C(Z.$$.fragment,e),ee=!1},d(e){e&&c(t),D(E),D(U),D(X),D(G),D(Z),te=!1,r(ne)}}}function Be(e,t,n){let r=[{id:1,text:"OAN (Home)",url:"https://www.oann.com/category/newsroom/feed"},{id:2,text:"Breitbart (Home)",url:"http://feeds.feedburner.com/breitbart"},{id:3,text:"New York Post (Home)",url:"https://nypost.com/feed/"},{id:4,text:"Daily Mail (Latest)",url:"https://www.dailymail.co.uk/articles.rss"}],s=[{id:1,text:"Fox News (Latest)",url:"http://feeds.foxnews.com/foxnews/latest"},{id:2,text:"Fox News (World)",url:"http://feeds.foxnews.com/foxnews/world"},{id:3,text:"The Washington Times (Home)",url:"https://www.washingtontimes.com/rss/headlines/news/"},{id:4,text:"Newsmax (Home)",url:"https://www.newsmax.com/rss/Newsfront/16"}],l=[{id:1,text:"NPR (Home)",url:"http://www.npr.org/rss/rss.php?id=1001"},{id:2,text:"The Wall Street Journal (World News)",url:"https://feeds.a.dj.com/rss/RSSWorldNews.xml"},{id:3,text:"Reuters (World)",url:"https://www.reutersagency.com/feed/?taxonomy=best-regions&post_type=best"},{id:4,text:"The BBC (World)",url:"http://feeds.bbci.co.uk/news/rss.xml"}],o=[{id:1,text:"The New York Times (Home)",url:"https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"},{id:2,text:"The Washington Post (National)",url:"http://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_39"},{id:3,text:"The Washington Post (World)",url:"http://feeds.washingtonpost.com/rss/world?itid=lk_inline_manual_43"},{id:4,text:"The Guardian (World)",url:"https://www.theguardian.com/world/rss"}],i=[{id:1,text:"Jacobin (Home)",url:"https://jacobinmag.com/feed"},{id:2,text:"The Intercept (All)",url:"https://theintercept.com/feed/?lang=en"},{id:3,text:"Vox (Home)",url:"https://www.vox.com/rss/index.xml"},{id:4,text:"BuzzfeedNews (Home)",url:"https://www.buzzfeed.com/index.xml"}],a="center";const c=We((e=>{return t=e.target.scrollLeft,void n(0,a=t<300?"left":t<500?"left-lean":t<1e3?"center":t<1500?"right-lean":"right");var t}),90);var u;u=()=>{0!==document.querySelector(".scrolling-wrapper").scrollLeftMax&&window.innerWidth<650&&(document.querySelector(".scrolling-wrapper").scrollLeft=872)},x().$$.on_mount.push(u);return[a,r,s,l,o,i,c,()=>n(0,a="left"),()=>n(0,a="left-lean"),()=>n(0,a="center"),()=>n(0,a="right-lean"),()=>n(0,a="right")]}class Ce extends J{constructor(e){super(),U(this,e,Be,Ee,l,{})}}function Pe(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-eij1pi"><h1 id="about" class="svelte-eij1pi">About</h1> \n        <p class="svelte-eij1pi">We often find ourselves wondering how people can live in such entirely\n            different realities. One commonly discussed idea is that of online\n            &quot;bubbles&quot;, where we only consume news from certain sources and only\n            talk about it with like-minded people. These bubbles often reinforce\n            our prior beliefs and further distance us from those in other\n            bubbles. One small way to help bridge this gap is to simply be aware\n            of the full spectrum of news available to us. We&#39;ve tried doing this\n            by following a variety of accounts on Twitter, but there is so much\n            noise on that platform.</p> \n        <p class="svelte-eij1pi">In response, we made this super simple news dashboard. It is divided\n            into five columns, ranging from one end of the political spectrum to\n            the other (as defined by\n            <a href="https://www.allsides.com/media-bias/media-bias-ratings">AllSides research</a>). Each lane lists the top 10 news stories from an RSS feed of that\n            news source, and you can click the headline to visit the source\n            article to read further. You can also click on the news source name\n            (try clicking on &quot;Vox (Home)&quot;) to select a different news source.\n            With this tool, you can get an idea of what news is disseminated\n            across the political spectrum at a quick glance. In short, you can\n            pop the bubble.</p></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ae extends J{constructor(e){super(),U(this,e,null,Pe,l,{})}}function Re(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-d95pqp"><h1 id="contact" class="svelte-d95pqp">Contact</h1> \n        <p class="svelte-d95pqp">We appreciate your thoughts on how to make this better and more usable. Please direct\n            all comments, questions, feature requests, and more to <a href="mailto: team@popthebubble.news">team@popthebubble.news</a>.\n            We are actively working on this and are excited for your feedback!</p></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class De extends J{constructor(e){super(),U(this,e,null,Re,l,{})}}function Fe(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-1pn6dmk"><p class="svelte-1pn6dmk">Pop the Bubble is a news aggregator, and as such, does not own and is not responsible for the content in any news article included on the site. \n            Content is owned/copyrighted by the individual author, contributor or news site, and should not be used without proper permission.</p> \n        <p class="svelte-1pn6dmk">Copyright 2021 by Pop the Bubble News</p></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ue extends J{constructor(e){super(),U(this,e,null,Fe,l,{})}}function Je(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="svelte-rfbvuw"><a class="headermargin svelte-rfbvuw" href="#support">Support</a> \n        <a class="headermargin svelte-rfbvuw" href="#about">About</a> \n        <a href="#contact" class="svelte-rfbvuw">Contact</a></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ke extends J{constructor(e){super(),U(this,e,null,Je,l,{})}}function Xe(t){let n;return{c(){n=f("main"),n.innerHTML='<div class="support-wrapper svelte-xjqfu3"><h1 id="support" class="svelte-xjqfu3">Support</h1> \n        <div class="sub-wrapper svelte-xjqfu3"><div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/M2VAKG4HBERHJJF63JEZMC3H?src=embed"><p class="square-text svelte-xjqfu3">Keep the lights on</p> \n                    <p class="square-text svelte-xjqfu3">$1.00/month</p></a></div> \n            <div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/3VBSFOFH6UXNUPUMBTLEKHPM?src=embed"><p class="square-text svelte-xjqfu3">Make it better</p> \n                    <p class="square-text svelte-xjqfu3">$5.00/month</p></a></div> \n            <div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/5YQKDA7L4QQMNFOXBJ2BH5QK?src=embed"><p class="square-text svelte-xjqfu3">Make it amazing</p> \n                    <p class="square-text svelte-xjqfu3">$10.00/month</p></a></div> \n            <div class="sub-section svelte-xjqfu3"><a class="subscribe svelte-xjqfu3" target="_blank" href="https://checkout.square.site/merchant/MLEN4D7S80T7W/checkout/IGO7MUKGYN26XPDXXXBJXEUK?src=embed"><p class="square-text svelte-xjqfu3">Make it yours</p> \n                    <p class="square-text svelte-xjqfu3">Any/month</p></a></div></div></div>'},m(e,t){a(e,n,t)},p:e,i:e,o:e,d(e){e&&c(n)}}}class Ie extends J{constructor(e){super(),U(this,e,null,Xe,l,{})}}function Ye(t){let n,r,s,l,o,u,d,p,v,g,b,w,$,x,y,k,q,j;return s=new Ke({}),v=new Ce({}),b=new Ie({}),$=new Ae({}),y=new De({}),q=new Ue({}),{c(){n=f("main"),r=f("div"),A(s.$$.fragment),l=h(),o=f("h1"),o.textContent="Pop the Bubble News",u=h(),d=f("h5"),d.textContent="A simple RSS feed dashboard to quickly view the full spectrum of\n\t\t\tnews in the U.S.",p=h(),A(v.$$.fragment),g=h(),A(b.$$.fragment),w=h(),A($.$$.fragment),x=h(),A(y.$$.fragment),k=h(),A(q.$$.fragment),m(o,"class","svelte-1rdx3a6"),m(d,"class","svelte-1rdx3a6"),m(r,"class","maincontent svelte-1rdx3a6"),m(n,"class","svelte-1rdx3a6")},m(e,t){a(e,n,t),i(n,r),R(s,r,null),i(r,l),i(r,o),i(r,u),i(r,d),i(r,p),R(v,r,null),i(n,g),R(b,n,null),i(n,w),R($,n,null),i(n,x),R(y,n,null),i(n,k),R(q,n,null),j=!0},p:e,i(e){j||(B(s.$$.fragment,e),B(v.$$.fragment,e),B(b.$$.fragment,e),B($.$$.fragment,e),B(y.$$.fragment,e),B(q.$$.fragment,e),j=!0)},o(e){C(s.$$.fragment,e),C(v.$$.fragment,e),C(b.$$.fragment,e),C($.$$.fragment,e),C(y.$$.fragment,e),C(q.$$.fragment,e),j=!1},d(e){e&&c(n),D(s),D(v),D(b),D($),D(y),D(q)}}}return new class extends J{constructor(e){super(),U(this,e,null,Ye,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
