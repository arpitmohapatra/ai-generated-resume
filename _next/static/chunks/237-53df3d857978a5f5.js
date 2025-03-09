"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{1362:(e,t,r)=>{r.d(t,{D:()=>c,N:()=>d});var o=r(2115),n=(e,t,r,o,n,l,a,s)=>{let i=document.documentElement,c=["light","dark"];function d(t){var r;(Array.isArray(e)?e:[e]).forEach(e=>{let r="class"===e,o=r&&l?n.map(e=>l[e]||e):n;r?(i.classList.remove(...o),i.classList.add(t)):i.setAttribute(e,t)}),r=t,s&&c.includes(r)&&(i.style.colorScheme=r)}if(o)d(o);else try{let e=localStorage.getItem(t)||r,o=a&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;d(o)}catch(e){}},l=["light","dark"],a="(prefers-color-scheme: dark)",s=o.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=o.useContext(s))?e:i},d=e=>o.useContext(s)?o.createElement(o.Fragment,null,e.children):o.createElement(p,{...e}),u=["light","dark"],p=e=>{let{forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:d=u,defaultTheme:p=n?"system":"light",attribute:g="data-theme",value:y,children:v,nonce:w,scriptProps:x}=e,[k,E]=o.useState(()=>m(c,p)),[z,j]=o.useState(()=>m(c)),C=y?Object.values(y):d,P=o.useCallback(e=>{let t=e;if(!t)return;"system"===e&&n&&(t=h());let o=y?y[t]:t,a=r?b(w):null,s=document.documentElement,c=e=>{"class"===e?(s.classList.remove(...C),o&&s.classList.add(o)):e.startsWith("data-")&&(o?s.setAttribute(e,o):s.removeAttribute(e))};if(Array.isArray(g)?g.forEach(c):c(g),i){let e=l.includes(p)?p:null,r=l.includes(t)?t:e;s.style.colorScheme=r}null==a||a()},[w]),S=o.useCallback(e=>{let t="function"==typeof e?e(k):e;E(t);try{localStorage.setItem(c,t)}catch(e){}},[k]),N=o.useCallback(e=>{j(h(e)),"system"===k&&n&&!t&&P("system")},[k,t]);o.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),o.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?E(e.newValue):S(p))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),o.useEffect(()=>{P(null!=t?t:k)},[t,k]);let M=o.useMemo(()=>({theme:k,setTheme:S,forcedTheme:t,resolvedTheme:"system"===k?z:k,themes:n?[...d,"system"]:d,systemTheme:n?z:void 0}),[k,S,t,z,n,d]);return o.createElement(s.Provider,{value:M},o.createElement(f,{forcedTheme:t,storageKey:c,attribute:g,enableSystem:n,enableColorScheme:i,defaultTheme:p,value:y,themes:d,nonce:w,scriptProps:x}),v)},f=o.memo(e=>{let{forcedTheme:t,storageKey:r,attribute:l,enableSystem:a,enableColorScheme:s,defaultTheme:i,value:c,themes:d,nonce:u,scriptProps:p}=e,f=JSON.stringify([l,r,i,t,d,c,a,s]).slice(1,-1);return o.createElement("script",{...p,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(n.toString(),")(").concat(f,")")}})}),m=(e,t)=>{let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},b=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},h=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},2085:(e,t,r)=>{r.d(t,{F:()=>a});var o=r(2596);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=o.$,a=(e,t)=>r=>{var o;if((null==t?void 0:t.variants)==null)return l(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:a,defaultVariants:s}=t,i=Object.keys(a).map(e=>{let t=null==r?void 0:r[e],o=null==s?void 0:s[e];if(null===t)return null;let l=n(t)||n(o);return a[e][l]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,o]=t;return void 0===o||(e[r]=o),e},{});return l(e,i,null==t?void 0:null===(o=t.compoundVariants)||void 0===o?void 0:o.reduce((e,t)=>{let{class:r,className:o,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...c}[t]):({...s,...c})[t]===r})?[...e,r,o]:e},[]),null==r?void 0:r.class,null==r?void 0:r.className)}},2098:(e,t,r)=>{r.d(t,{A:()=>o});let o=(0,r(9946).A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},2596:(e,t,r)=>{r.d(t,{$:()=>o});function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}},2757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return l},formatWithValidation:function(){return s},urlObjectKeys:function(){return a}});let o=r(6966)._(r(8859)),n=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,l=e.protocol||"",a=e.pathname||"",s=e.hash||"",i=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(c+=":"+e.port)),i&&"object"==typeof i&&(i=String(o.urlQueryToSearchParams(i)));let d=e.search||i&&"?"+i||"";return l&&!l.endsWith(":")&&(l+=":"),e.slashes||(!l||n.test(l))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),""+l+c+(a=a.replace(/[?#]/g,encodeURIComponent))+(d=d.replace("#","%23"))+s}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return l(e)}},3509:(e,t,r)=>{r.d(t,{A:()=>o});let o=(0,r(9946).A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},4624:(e,t,r)=>{r.d(t,{DX:()=>a});var o=r(2115);function n(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var l=r(5155),a=o.forwardRef((e,t)=>{let{children:r,...n}=e,a=o.Children.toArray(r),i=a.find(c);if(i){let e=i.props.children,r=a.map(t=>t!==i?t:o.Children.count(e)>1?o.Children.only(null):o.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...n,ref:t,children:o.isValidElement(e)?o.cloneElement(e,void 0,r):null})}return(0,l.jsx)(s,{...n,ref:t,children:r})});a.displayName="Slot";var s=o.forwardRef((e,t)=>{let{children:r,...l}=e;if(o.isValidElement(r)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,r=t&&"isReactWarning"in t&&t.isReactWarning;return r?e.ref:(r=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(r),a=function(e,t){let r={...t};for(let o in t){let n=e[o],l=t[o];/^on[A-Z]/.test(o)?n&&l?r[o]=(...e)=>{l(...e),n(...e)}:n&&(r[o]=n):"style"===o?r[o]={...n,...l}:"className"===o&&(r[o]=[n,l].filter(Boolean).join(" "))}return{...e,...r}}(l,r.props);return r.type!==o.Fragment&&(a.ref=t?function(...e){return t=>{let r=!1,o=e.map(e=>{let o=n(e,t);return r||"function"!=typeof o||(r=!0),o});if(r)return()=>{for(let t=0;t<o.length;t++){let r=o[t];"function"==typeof r?r():n(e[t],null)}}}}(t,e):e),o.cloneElement(r,a)}return o.Children.count(r)>1?o.Children.only(null):null});s.displayName="SlotClone";var i=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function c(e){return o.isValidElement(e)&&e.type===i}},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=r(2115);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=l(e,o)),t&&(n.current=l(t,o))},[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6874:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let o=r(8229),n=r(5155),l=o._(r(2115)),a=r(2757),s=r(5227),i=r(9818),c=r(6654),d=r(9991),u=r(5929);r(3230);let p=r(4930);function f(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=l.default.forwardRef(function(e,t){let r,o;let{href:a,as:m,children:b,prefetch:h=null,passHref:g,replace:y,shallow:v,scroll:w,onClick:x,onMouseEnter:k,onTouchStart:E,legacyBehavior:z=!1,...j}=e;r=b,z&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let C=l.default.useContext(s.AppRouterContext),P=!1!==h,S=null===h?i.PrefetchKind.AUTO:i.PrefetchKind.FULL,{href:N,as:M}=l.default.useMemo(()=>{let e=f(a);return{href:e,as:m?f(m):e}},[a,m]);z&&(o=l.default.Children.only(r));let O=z?o&&"object"==typeof o&&o.ref:t,A=l.default.useCallback(e=>(P&&null!==C&&(0,p.mountLinkInstance)(e,N,C,S),()=>{(0,p.unmountLinkInstance)(e)}),[P,N,C,S]),T={ref:(0,c.useMergedRef)(A,O),onClick(e){z||"function"!=typeof x||x(e),z&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),C&&!e.defaultPrevented&&!function(e,t,r,o,n,a,s){let{nodeName:i}=e.currentTarget;!("A"===i.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),l.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:a,scroll:e}):t[n?"replace":"push"](o||r,{scroll:e})}))}(e,C,N,M,y,v,w)},onMouseEnter(e){z||"function"!=typeof k||k(e),z&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),C&&P&&(0,p.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){z||"function"!=typeof E||E(e),z&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),C&&P&&(0,p.onNavigationIntent)(e.currentTarget)}};return(0,d.isAbsoluteUrl)(M)?T.href=M:z&&!g&&("a"!==o.type||"href"in o.props)||(T.href=(0,u.addBasePath)(M)),z?l.default.cloneElement(o,T):(0,n.jsx)("a",{...j,...T,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8859:(e,t)=>{function r(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,o(e));else t.set(r,o(n));return t}function l(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,o]of t.entries())e.append(r,o)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return l},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return n}})},9688:(e,t,r)=>{r.d(t,{QP:()=>eu});let o=e=>{let t=s(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),n(r,t)||a(e)},getConflictingClassGroupIds:(e,t)=>{let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},n=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let a=e.join("-");return t.validators.find(({validator:e})=>e(a))?.classGroupId},l=/^\[(.+)\]$/,a=e=>{if(l.test(e)){let t=l.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},s=e=>{let{theme:t,classGroups:r}=e,o={nextPart:new Map,validators:[]};for(let e in r)i(r[e],o,e,t);return o},i=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:c(t,e)).classGroupId=r;return}if("function"==typeof e){if(d(e)){i(e(o),t,r,o);return}t.validators.push({validator:e,classGroupId:r});return}Object.entries(e).forEach(([e,n])=>{i(n,c(t,e),r,o)})})},c=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},d=e=>e.isThemeGetter,u=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,n=(n,l)=>{r.set(n,l),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},p=e=>{let{prefix:t,experimentalParseClassName:r}=e,o=e=>{let t;let r=[],o=0,n=0,l=0;for(let a=0;a<e.length;a++){let s=e[a];if(0===o&&0===n){if(":"===s){r.push(e.slice(l,a)),l=a+1;continue}if("/"===s){t=a;continue}}"["===s?o++:"]"===s?o--:"("===s?n++:")"===s&&n--}let a=0===r.length?e:e.substring(l),s=f(a);return{modifiers:r,hasImportantModifier:s!==a,baseClassName:s,maybePostfixModifierPosition:t&&t>l?t-l:void 0}};if(t){let e=t+":",r=o;o=t=>t.startsWith(e)?r(t.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:t,maybePostfixModifierPosition:void 0}}if(r){let e=o;o=t=>r({className:t,parseClassName:e})}return o},f=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,m=e=>{let t=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{"["===e[0]||t[e]?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r}},b=e=>({cache:u(e.cacheSize),parseClassName:p(e),sortModifiers:m(e),...o(e)}),h=/\s+/,g=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n,sortModifiers:l}=t,a=[],s=e.trim().split(h),i="";for(let e=s.length-1;e>=0;e-=1){let t=s[e],{isExternal:c,modifiers:d,hasImportantModifier:u,baseClassName:p,maybePostfixModifierPosition:f}=r(t);if(c){i=t+(i.length>0?" "+i:i);continue}let m=!!f,b=o(m?p.substring(0,f):p);if(!b){if(!m||!(b=o(p))){i=t+(i.length>0?" "+i:i);continue}m=!1}let h=l(d).join(":"),g=u?h+"!":h,y=g+b;if(a.includes(y))continue;a.push(y);let v=n(b,m);for(let e=0;e<v.length;++e){let t=v[e];a.push(g+t)}i=t+(i.length>0?" "+i:i)}return i};function y(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=v(e))&&(o&&(o+=" "),o+=t);return o}let v=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=v(e[o]))&&(r&&(r+=" "),r+=t);return r},w=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},x=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,E=/^\d+\/\d+$/,z=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,j=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,P=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,N=e=>E.test(e),M=e=>!!e&&!Number.isNaN(Number(e)),O=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&M(e.slice(0,-1)),T=e=>z.test(e),_=()=>!0,I=e=>j.test(e)&&!C.test(e),R=()=>!1,L=e=>P.test(e),W=e=>S.test(e),U=e=>!F(e)&&!q(e),$=e=>ee(e,ea,R),F=e=>x.test(e),G=e=>ee(e,es,I),K=e=>ee(e,ei,M),D=e=>ee(e,er,R),V=e=>ee(e,en,W),B=e=>ee(e,R,L),q=e=>k.test(e),Z=e=>et(e,es),Q=e=>et(e,ec),H=e=>et(e,er),J=e=>et(e,ea),X=e=>et(e,en),Y=e=>et(e,ed,!0),ee=(e,t,r)=>{let o=x.exec(e);return!!o&&(o[1]?t(o[1]):r(o[2]))},et=(e,t,r=!1)=>{let o=k.exec(e);return!!o&&(o[1]?t(o[1]):r)},er=e=>"position"===e,eo=new Set(["image","url"]),en=e=>eo.has(e),el=new Set(["length","size","percentage"]),ea=e=>el.has(e),es=e=>"length"===e,ei=e=>"number"===e,ec=e=>"family-name"===e,ed=e=>"shadow"===e;Symbol.toStringTag;let eu=function(e,...t){let r,o,n;let l=function(s){return o=(r=b(t.reduce((e,t)=>t(e),e()))).cache.get,n=r.cache.set,l=a,a(s)};function a(e){let t=o(e);if(t)return t;let l=g(e,r);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=w("color"),t=w("font"),r=w("text"),o=w("font-weight"),n=w("tracking"),l=w("leading"),a=w("breakpoint"),s=w("container"),i=w("spacing"),c=w("radius"),d=w("shadow"),u=w("inset-shadow"),p=w("drop-shadow"),f=w("blur"),m=w("perspective"),b=w("aspect"),h=w("ease"),g=w("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],v=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],x=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],E=()=>[q,F,i],z=()=>[N,"full","auto",...E()],j=()=>[O,"none","subgrid",q,F],C=()=>["auto",{span:["full",O,q,F]},q,F],P=()=>[O,"auto",q,F],S=()=>["auto","min","max","fr",q,F],I=()=>["start","end","center","between","around","evenly","stretch","baseline"],R=()=>["start","end","center","stretch"],L=()=>["auto",...E()],W=()=>[N,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],ee=()=>[e,q,F],et=()=>[A,G],er=()=>["","none","full",c,q,F],eo=()=>["",M,Z,G],en=()=>["solid","dashed","dotted","double"],el=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ea=()=>["","none",f,q,F],es=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",q,F],ei=()=>["none",M,q,F],ec=()=>["none",M,q,F],ed=()=>[M,q,F],eu=()=>[N,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[T],breakpoint:[T],color:[_],container:[T],"drop-shadow":[T],ease:["in","out","in-out"],font:[U],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[T],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[T],shadow:[T],spacing:["px",M],text:[T],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",N,F,q,b]}],container:["container"],columns:[{columns:[M,F,q,s]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...v(),F,q]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[O,"auto",q,F]}],basis:[{basis:[N,"full","auto",s,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[M,N,"auto","initial","none",F]}],grow:[{grow:["",M,q,F]}],shrink:[{shrink:["",M,q,F]}],order:[{order:[O,"first","last","none",q,F]}],"grid-cols":[{"grid-cols":j()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":j()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":S()}],"auto-rows":[{"auto-rows":S()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...I(),"normal"]}],"justify-items":[{"justify-items":[...R(),"normal"]}],"justify-self":[{"justify-self":["auto",...R()]}],"align-content":[{content:["normal",...I()]}],"align-items":[{items:[...R(),"baseline"]}],"align-self":[{self:["auto",...R(),"baseline"]}],"place-content":[{"place-content":I()}],"place-items":[{"place-items":[...R(),"baseline"]}],"place-self":[{"place-self":["auto",...R()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:L()}],mx:[{mx:L()}],my:[{my:L()}],ms:[{ms:L()}],me:[{me:L()}],mt:[{mt:L()}],mr:[{mr:L()}],mb:[{mb:L()}],ml:[{ml:L()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],w:[{w:[s,"screen",...W()]}],"min-w":[{"min-w":[s,"screen","none",...W()]}],"max-w":[{"max-w":[s,"screen","none","prose",{screen:[a]},...W()]}],h:[{h:["screen",...W()]}],"min-h":[{"min-h":["screen","none",...W()]}],"max-h":[{"max-h":["screen",...W()]}],"font-size":[{text:["base",r,Z,G]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[o,q,K]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",A,F]}],"font-family":[{font:[Q,F,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,q,F]}],"line-clamp":[{"line-clamp":[M,"none",q,K]}],leading:[{leading:[l,...E()]}],"list-image":[{"list-image":["none",q,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",q,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:ee()}],"text-color":[{text:ee()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...en(),"wavy"]}],"text-decoration-thickness":[{decoration:[M,"from-font","auto",q,G]}],"text-decoration-color":[{decoration:ee()}],"underline-offset":[{"underline-offset":[M,"auto",q,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",q,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",q,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...v(),H,D]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",J,$]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},O,q,F],radial:["",q,F],conic:[O,q,F]},X,V]}],"bg-color":[{bg:ee()}],"gradient-from-pos":[{from:et()}],"gradient-via-pos":[{via:et()}],"gradient-to-pos":[{to:et()}],"gradient-from":[{from:ee()}],"gradient-via":[{via:ee()}],"gradient-to":[{to:ee()}],rounded:[{rounded:er()}],"rounded-s":[{"rounded-s":er()}],"rounded-e":[{"rounded-e":er()}],"rounded-t":[{"rounded-t":er()}],"rounded-r":[{"rounded-r":er()}],"rounded-b":[{"rounded-b":er()}],"rounded-l":[{"rounded-l":er()}],"rounded-ss":[{"rounded-ss":er()}],"rounded-se":[{"rounded-se":er()}],"rounded-ee":[{"rounded-ee":er()}],"rounded-es":[{"rounded-es":er()}],"rounded-tl":[{"rounded-tl":er()}],"rounded-tr":[{"rounded-tr":er()}],"rounded-br":[{"rounded-br":er()}],"rounded-bl":[{"rounded-bl":er()}],"border-w":[{border:eo()}],"border-w-x":[{"border-x":eo()}],"border-w-y":[{"border-y":eo()}],"border-w-s":[{"border-s":eo()}],"border-w-e":[{"border-e":eo()}],"border-w-t":[{"border-t":eo()}],"border-w-r":[{"border-r":eo()}],"border-w-b":[{"border-b":eo()}],"border-w-l":[{"border-l":eo()}],"divide-x":[{"divide-x":eo()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":eo()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...en(),"hidden","none"]}],"divide-style":[{divide:[...en(),"hidden","none"]}],"border-color":[{border:ee()}],"border-color-x":[{"border-x":ee()}],"border-color-y":[{"border-y":ee()}],"border-color-s":[{"border-s":ee()}],"border-color-e":[{"border-e":ee()}],"border-color-t":[{"border-t":ee()}],"border-color-r":[{"border-r":ee()}],"border-color-b":[{"border-b":ee()}],"border-color-l":[{"border-l":ee()}],"divide-color":[{divide:ee()}],"outline-style":[{outline:[...en(),"none","hidden"]}],"outline-offset":[{"outline-offset":[M,q,F]}],"outline-w":[{outline:["",M,Z,G]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",d,Y,B]}],"shadow-color":[{shadow:ee()}],"inset-shadow":[{"inset-shadow":["none",q,F,u]}],"inset-shadow-color":[{"inset-shadow":ee()}],"ring-w":[{ring:eo()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:ee()}],"ring-offset-w":[{"ring-offset":[M,G]}],"ring-offset-color":[{"ring-offset":ee()}],"inset-ring-w":[{"inset-ring":eo()}],"inset-ring-color":[{"inset-ring":ee()}],opacity:[{opacity:[M,q,F]}],"mix-blend":[{"mix-blend":[...el(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":el()}],filter:[{filter:["","none",q,F]}],blur:[{blur:ea()}],brightness:[{brightness:[M,q,F]}],contrast:[{contrast:[M,q,F]}],"drop-shadow":[{"drop-shadow":["","none",p,q,F]}],grayscale:[{grayscale:["",M,q,F]}],"hue-rotate":[{"hue-rotate":[M,q,F]}],invert:[{invert:["",M,q,F]}],saturate:[{saturate:[M,q,F]}],sepia:[{sepia:["",M,q,F]}],"backdrop-filter":[{"backdrop-filter":["","none",q,F]}],"backdrop-blur":[{"backdrop-blur":ea()}],"backdrop-brightness":[{"backdrop-brightness":[M,q,F]}],"backdrop-contrast":[{"backdrop-contrast":[M,q,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",M,q,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[M,q,F]}],"backdrop-invert":[{"backdrop-invert":["",M,q,F]}],"backdrop-opacity":[{"backdrop-opacity":[M,q,F]}],"backdrop-saturate":[{"backdrop-saturate":[M,q,F]}],"backdrop-sepia":[{"backdrop-sepia":["",M,q,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",q,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[M,"initial",q,F]}],ease:[{ease:["linear","initial",h,q,F]}],delay:[{delay:[M,q,F]}],animate:[{animate:["none",g,q,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,q,F]}],"perspective-origin":[{"perspective-origin":es()}],rotate:[{rotate:ei()}],"rotate-x":[{"rotate-x":ei()}],"rotate-y":[{"rotate-y":ei()}],"rotate-z":[{"rotate-z":ei()}],scale:[{scale:ec()}],"scale-x":[{"scale-x":ec()}],"scale-y":[{"scale-y":ec()}],"scale-z":[{"scale-z":ec()}],"scale-3d":["scale-3d"],skew:[{skew:ed()}],"skew-x":[{"skew-x":ed()}],"skew-y":[{"skew-y":ed()}],transform:[{transform:[q,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:es()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eu()}],"translate-x":[{"translate-x":eu()}],"translate-y":[{"translate-y":eu()}],"translate-z":[{"translate-z":eu()}],"translate-none":["translate-none"],accent:[{accent:ee()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:ee()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",q,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",q,F]}],fill:[{fill:["none",...ee()]}],"stroke-w":[{stroke:[M,Z,G,K]}],stroke:[{stroke:["none",...ee()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})},9946:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(2115);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,o.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:c="",children:d,iconNode:u,...p}=e;return(0,o.createElement)("svg",{ref:t,...a,width:n,height:n,stroke:r,strokeWidth:i?24*Number(s)/Number(n):s,className:l("lucide",c),...p},[...u.map(e=>{let[t,r]=e;return(0,o.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),i=(e,t)=>{let r=(0,o.forwardRef)((r,a)=>{let{className:i,...c}=r;return(0,o.createElement)(s,{ref:a,iconNode:t,className:l("lucide-".concat(n(e)),i),...c})});return r.displayName="".concat(e),r}},9991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return g},NormalizeError:function(){return b},PageNotFoundError:function(){return h},SP:function(){return p},ST:function(){return f},WEB_VITALS:function(){return r},execOnce:function(){return o},getDisplayName:function(){return i},getLocationOrigin:function(){return a},getURL:function(){return s},isAbsoluteUrl:function(){return l},isResSent:function(){return c},loadGetInitialProps:function(){return u},normalizeRepeatedSlashes:function(){return d},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return function(){for(var o=arguments.length,n=Array(o),l=0;l<o;l++)n[l]=arguments[l];return r||(r=!0,t=e(...n)),t}}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>n.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function i(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function c(e){return e.finished||e.headersSent}function d(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function u(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await u(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&c(r))return o;if(!o)throw Object.defineProperty(Error('"'+i(e)+'.getInitialProps()" should resolve to an object. But found "'+o+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let p="undefined"!=typeof performance,f=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class h extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);