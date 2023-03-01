"use strict";(self.webpackChunkreact_native_echarts_pro_docs=self.webpackChunkreact_native_echarts_pro_docs||[]).push([[7459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return n?o.createElement(y,a(a({ref:t},p),{},{components:n})):o.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9649:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(7462),r=n(7294),c=n(6010),a=n(5999),l=n(1548);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_mojV",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_R0VQ"};function s(e){let{as:t,id:n,...s}=e;const{navbar:{hideOnScroll:p}}=(0,l.LU)();return n?r.createElement(t,(0,o.Z)({},s,{className:(0,c.Z)("anchor",p?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar),id:n}),s.children,r.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,s)}function p(e){let{as:t,...n}=e;return"h1"===t?r.createElement("h1",(0,o.Z)({},n,{id:void 0}),n.children):r.createElement(s,(0,o.Z)({as:t},n))}},7459:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(7294),r=n(3905),c=n(7462),a=n(5742);var l=n(6010);const i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var s={Prism:n(7410).default,theme:i};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,c=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(c.style=a.plain),void 0!==r&&(c.style=void 0!==c.style?u({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),p(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return c[n[0]];var a=o?{display:"inline-block"}:{},l=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[a].concat(l))}})),p(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,c=e.token,a=u({},g(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==r&&(a.style=void 0!==a.style?u({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),p(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var c=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,c=this.getThemeDict(this.props),a=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],c=0,a=0,l=[],i=[l];a>-1;){for(;(c=o[a]++)<r[a];){var s=void 0,p=t[a],u=n[a][c];if("string"==typeof u?(p=a>0?p:["plain"],s=u):(p=y(p,u.type),u.alias&&(p=y(p,u.alias)),s=u.content),"string"==typeof s){var h=s.split(d),g=h.length;l.push({types:p,content:h[0]});for(var f=1;f<g;f++)m(l),i.push(l=[]),l.push({types:p,content:h[f]})}else a++,t.push(p),n.push(s),o.push(0),r.push(s.length)}a--,t.pop(),n.pop(),o.pop(),r.pop()}return m(l),i}(void 0!==a?this.tokenize(t,o,a,n):[o]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var v=n(1548);var k=n(5999);const b={copyButton:"copyButton_eDfN",copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function E(e){let{code:t}=e;const[n,r]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),a=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection();let a=!1;c.rangeCount>0&&(a=c.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),a&&(c.removeAllRanges(),c.addRange(a)),r&&r.focus()}(t),r(!0),c.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":n?(0,k.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,k.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,k.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)(b.copyButton,"clean-btn",n&&b.copyButtonCopied),onClick:a},o.createElement("span",{className:b.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:b.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:b.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const B={codeBlockContainer:"codeBlockContainer_I0IT",codeBlockContent:"codeBlockContent_wNvx",codeBlockTitle:"codeBlockTitle_BvAR",codeBlock:"codeBlock_jd64",codeBlockStandalone:"codeBlockStandalone_csWH",codeBlockLines:"codeBlockLines_mRuA"};function N(e){let{children:t,className:n="",metastring:r,title:a,language:i}=e;const{prism:p}=(0,v.LU)(),[u,d]=(0,o.useState)(!1);(0,o.useEffect)((()=>{d(!0)}),[]);const m=(0,v.bc)(r)||a,y=(0,v.pJ)();if(o.Children.toArray(t).some((e=>(0,o.isValidElement)(e))))return o.createElement(f,(0,c.Z)({},s,{key:String(u),theme:y,code:"",language:"text"}),(e=>{let{className:r,style:c}=e;return o.createElement("pre",{tabIndex:0,className:(0,l.Z)(r,B.codeBlockStandalone,"thin-scrollbar",B.codeBlockContainer,n,v.kM.common.codeBlock),style:c},o.createElement("code",{className:B.codeBlockLines},t))}));const h=Array.isArray(t)?t.join(""):t,g=i??(0,v.Vo)(n)??p.defaultLanguage,{highlightLines:k,code:b}=(0,v.nZ)(h,r,g);return o.createElement(f,(0,c.Z)({},s,{key:String(u),theme:y,code:b,language:g??"text"}),(e=>{let{className:t,style:r,tokens:a,getLineProps:i,getTokenProps:s}=e;return o.createElement("div",{className:(0,l.Z)(B.codeBlockContainer,n,{[`language-${g}`]:g&&!n.includes(`language-${g}`)},v.kM.common.codeBlock)},m&&o.createElement("div",{style:r,className:B.codeBlockTitle},m),o.createElement("div",{className:B.codeBlockContent,style:r},o.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,B.codeBlock,"thin-scrollbar")},o.createElement("code",{className:B.codeBlockLines},a.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=i({line:e,key:t});return k.includes(t)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,c.Z)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,c.Z)({key:t},s({token:e,key:t}))))),o.createElement("br",null))})))),o.createElement(E,{code:b})))}))}var O=n(9960);const T={details:"details_BAp3"},Z="alert alert--info";function C(e){let{...t}=e;return o.createElement(v.PO,(0,c.Z)({},t,{className:(0,l.Z)(Z,T.details,t.className)}))}var j=n(9649);function _(e){return o.createElement(j.Z,e)}const S="contains-task-list_tsSF";const w={img:"img_E7b_"};const P={head:function(e){const t=o.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e)));return o.createElement(a.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props.mdxType)))?o.createElement("code",e):o.createElement(N,e)},a:function(e){return o.createElement(O.Z,e)},pre:function(e){return o.createElement(N,(0,o.isValidElement)(e.children)&&"code"===e.children.props.originalType?e.children?.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(C,(0,c.Z)({},e,{summary:n}),r)},ul:function(e){return o.createElement("ul",(0,c.Z)({},e,{className:(t=e.className,(0,l.Z)(t,t?.includes("contains-task-list")&&S))}));var t},img:function(e){return o.createElement("img",(0,c.Z)({loading:"lazy"},e,{className:(t=e.className,(0,l.Z)(t,w.img))}));var t},h1:e=>o.createElement(_,(0,c.Z)({as:"h1"},e)),h2:e=>o.createElement(_,(0,c.Z)({as:"h2"},e)),h3:e=>o.createElement(_,(0,c.Z)({as:"h3"},e)),h4:e=>o.createElement(_,(0,c.Z)({as:"h4"},e)),h5:e=>o.createElement(_,(0,c.Z)({as:"h5"},e)),h6:e=>o.createElement(_,(0,c.Z)({as:"h6"},e))};function x(e){let{children:t}=e;return o.createElement(r.Zo,{components:P},t)}}}]);