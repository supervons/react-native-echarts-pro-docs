"use strict";(self.webpackChunkreact_native_echarts_pro_docs=self.webpackChunkreact_native_echarts_pro_docs||[]).push([[750],{3905:(A,B,Q)=>{Q.d(B,{Zo:()=>w,kt:()=>r});var g=Q(7294);function e(A,B,Q){return B in A?Object.defineProperty(A,B,{value:Q,enumerable:!0,configurable:!0,writable:!0}):A[B]=Q,A}function C(A,B){var Q=Object.keys(A);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);B&&(g=g.filter((function(B){return Object.getOwnPropertyDescriptor(A,B).enumerable}))),Q.push.apply(Q,g)}return Q}function t(A){for(var B=1;B<arguments.length;B++){var Q=null!=arguments[B]?arguments[B]:{};B%2?C(Object(Q),!0).forEach((function(B){e(A,B,Q[B])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(Q)):C(Object(Q)).forEach((function(B){Object.defineProperty(A,B,Object.getOwnPropertyDescriptor(Q,B))}))}return A}function E(A,B){if(null==A)return{};var Q,g,e=function(A,B){if(null==A)return{};var Q,g,e={},C=Object.keys(A);for(g=0;g<C.length;g++)Q=C[g],B.indexOf(Q)>=0||(e[Q]=A[Q]);return e}(A,B);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);for(g=0;g<C.length;g++)Q=C[g],B.indexOf(Q)>=0||Object.prototype.propertyIsEnumerable.call(A,Q)&&(e[Q]=A[Q])}return e}var n=g.createContext({}),c=function(A){var B=g.useContext(n),Q=B;return A&&(Q="function"==typeof A?A(B):t(t({},B),A)),Q},w=function(A){var B=c(A.components);return g.createElement(n.Provider,{value:B},A.children)},I="mdxType",i={inlineCode:"code",wrapper:function(A){var B=A.children;return g.createElement(g.Fragment,{},B)}},M=g.forwardRef((function(A,B){var Q=A.components,e=A.mdxType,C=A.originalType,n=A.parentName,w=E(A,["components","mdxType","originalType","parentName"]),I=c(Q),M=e,r=I["".concat(n,".").concat(M)]||I[M]||i[M]||C;return Q?g.createElement(r,t(t({ref:B},w),{},{components:Q})):g.createElement(r,t({ref:B},w))}));function r(A,B){var Q=arguments,e=B&&B.mdxType;if("string"==typeof A||e){var C=Q.length,t=new Array(C);t[0]=M;var E={};for(var n in B)hasOwnProperty.call(B,n)&&(E[n]=B[n]);E.originalType=A,E[I]="string"==typeof A?A:e,t[1]=E;for(var c=2;c<C;c++)t[c]=Q[c];return g.createElement.apply(null,t)}return g.createElement.apply(null,Q)}M.displayName="MDXCreateElement"},3613:(A,B,Q)=>{Q.r(B),Q.d(B,{assets:()=>n,contentTitle:()=>t,default:()=>i,frontMatter:()=>C,metadata:()=>E,toc:()=>c});var g=Q(7462),e=(Q(7294),Q(3905));const C={sidebar_position:2,sidebar_label:"\u81ea\u5b9a\u4e49"},t=void 0,E={unversionedId:"tutorial-fontfamily/custom",id:"tutorial-fontfamily/custom",title:"custom",description:"\u81ea\u5b9a\u4e49\u5b57\u4f53\u53ef\u4ee5\u8ba9\u4f60\u7684\u56fe\u8868\u62e5\u6709\u66f4\u4e30\u5bcc\u7684\u5c55\u793a\u80fd\u529b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorial-fontfamily/custom.md",sourceDirName:"tutorial-fontfamily",slug:"/tutorial-fontfamily/custom",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/tutorial-fontfamily/custom",editUrl:"https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/tutorial-fontfamily/custom.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"\u81ea\u5b9a\u4e49"},sidebar:"tutorialSidebar",previous:{title:"\u5185\u7f6e\u5b57\u4f53",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/tutorial-fontfamily/inner"},next:{title:"\u7248\u672c\u6bd4\u8f83",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/comparison"}},n={},c=[{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"\u6587\u4ef6\u683c\u5f0f\u8f6c\u6362",id:"\u6587\u4ef6\u683c\u5f0f\u8f6c\u6362",level:2},{value:"1. \u683c\u5f0f\u8f6c\u6362",id:"1-\u683c\u5f0f\u8f6c\u6362",level:3},{value:"2. \u5bfc\u51fa\u4f9b <code>JS</code> \u4f7f\u7528",id:"2-\u5bfc\u51fa\u4f9b-js-\u4f7f\u7528",level:3},{value:"\u5f15\u5165\u53ca\u5c5e\u6027\u914d\u7f6e",id:"\u5f15\u5165\u53ca\u5c5e\u6027\u914d\u7f6e",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],w={toc:c},I="wrapper";function i(A){let{components:B,...Q}=A;return(0,e.kt)(I,(0,g.Z)({},w,Q,{components:B,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"\u81ea\u5b9a\u4e49\u5b57\u4f53\u53ef\u4ee5\u8ba9\u4f60\u7684\u56fe\u8868\u62e5\u6709\u66f4\u4e30\u5bcc\u7684\u5c55\u793a\u80fd\u529b\u3002"),(0,e.kt)("img",{style:{height:400},src:"https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.1/react-native-echarts-pro-website/font/demo_1.png",alt:"\u5b57\u4f53Demo",height:"500",align:"bottom"}),(0,e.kt)("p",null,"\u6838\u5fc3\u662f\u8ba9",(0,e.kt)("inlineCode",{parentName:"p"},"WebView"),"\u5bb9\u5668\u52a0\u8f7d\u5b57\u4f53\uff0c\u7136\u540e\u8ba9",(0,e.kt)("inlineCode",{parentName:"p"},"Echarts"),"\u80fd\u591f\u8fdb\u884c\u8c03\u7528\uff0c\u4e0b\u9762\uff0c\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u63a5\u5165\u81ea\u5b9a\u4e49\u5b57\u4f53\uff01"),(0,e.kt)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u4f60\u6240\u9700\u8981\u7684\u5b57\u4f53\u6587\u4ef6\uff1b"),(0,e.kt)("li",{parentName:"ol"},"\u8f6c\u6362\u6210 ",(0,e.kt)("inlineCode",{parentName:"li"},"base64")," \u683c\u5f0f\u7684 ",(0,e.kt)("inlineCode",{parentName:"li"},"CSS")," \u6587\u4ef6\uff1b"),(0,e.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5c5e\u6027 ",(0,e.kt)("inlineCode",{parentName:"li"},"fontFamilies")," \u5f15\u5165\uff1b"),(0,e.kt)("li",{parentName:"ol"},(0,e.kt)("inlineCode",{parentName:"li"},"Echarts options")," \u4e2d\u4f7f\u7528\u5373\u53ef\uff1b")),(0,e.kt)("h2",{id:"\u6587\u4ef6\u683c\u5f0f\u8f6c\u6362"},"\u6587\u4ef6\u683c\u5f0f\u8f6c\u6362"),(0,e.kt)("h3",{id:"1-\u683c\u5f0f\u8f6c\u6362"},"1. \u683c\u5f0f\u8f6c\u6362"),(0,e.kt)("p",null,(0,e.kt)("a",{parentName:"p",href:"https://transfonter.org/"},"\u70b9\u6b64\u8df3\u8f6c\u8f6c\u6362")),(0,e.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u52fe\u9009 ",(0,e.kt)("inlineCode",{parentName:"p"},"Base64 encode")," \u9009\u9879\uff0c\u7136\u540e\u70b9\u51fb ",(0,e.kt)("inlineCode",{parentName:"p"},"Convert")," \u8f6c\u6362\u3002"),(0,e.kt)("img",{style:{height:600},src:"https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.1/react-native-echarts-pro-website/font/trans_1.png",alt:"\u5b57\u4f53\u8f6c\u6362\u5de5\u5177",height:"500",align:"bottom"}),(0,e.kt)("p",null,"\u751f\u6210\u7684\u6587\u4ef6\u5c31\u4f1a\u5305\u542b ",(0,e.kt)("inlineCode",{parentName:"p"},"CSS")," \u683c\u5f0f\uff1a"),(0,e.kt)("img",{style:{height:200},src:"https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.1/react-native-echarts-pro-website/font/trans_2.png",alt:"CSS\u6587\u4ef6",height:"500",align:"bottom"}),(0,e.kt)("h3",{id:"2-\u5bfc\u51fa\u4f9b-js-\u4f7f\u7528"},"2. \u5bfc\u51fa\u4f9b ",(0,e.kt)("inlineCode",{parentName:"h3"},"JS")," \u4f7f\u7528"),(0,e.kt)("p",null,"\u65b0\u5efa\u5b57\u4f53 ",(0,e.kt)("inlineCode",{parentName:"p"},"CSS")," \u7684 ",(0,e.kt)("inlineCode",{parentName:"p"},"JS")," \u6587\u4ef6\uff0c\u6b64\u5904\u793a\u4f8b\u540d\u79f0\u4e3a ",(0,e.kt)("inlineCode",{parentName:"p"},"TEST.js"),"\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-css"},'export default `\n  @font-face {\n    font-family: "TEST";\n    src: url("TEST.eot"); /* IE9 */\n    src: url("TEST.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */\n    \n    url(data:application/x-font-ttf;charset=utf-8;base64,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) format("truetype"), /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */\n    url("TEST.svg#JY") format("svg"); /* iOS 4.1- */\n      \n    font-style: normal;\n    font-weight: normal;\n  }\n`;\n')),(0,e.kt)("p",null,"\u539f\u7406\u4e3a\u4f7f\u7528 ",(0,e.kt)("inlineCode",{parentName:"p"},"export default")," \u5bfc\u51fa\u4e0a\u9762\u8f6c\u6362\u540e\u7684 ",(0,e.kt)("inlineCode",{parentName:"p"},"CSS")," \u5373\u53ef\u3002"),(0,e.kt)("h2",{id:"\u5f15\u5165\u53ca\u5c5e\u6027\u914d\u7f6e"},"\u5f15\u5165\u53ca\u5c5e\u6027\u914d\u7f6e"),(0,e.kt)("p",null,"\u4f7f\u7528 ",(0,e.kt)("inlineCode",{parentName:"p"},"fontFamilies")," \u5c5e\u6027\uff0c\u5f15\u5165\u4f60\u6240\u9700\u8981\u7684\u5b57\u4f53\u6837\u5f0f\uff0c\u5982\u4e0b\uff1a"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-jsx"},"import TESTCSS from './TEST';\nimport TESTCSS2 from './TEST2';\n\n<RNEChartsPro\n  ...,\n  fontFamilies={[\n    { fontName: \"TEST\", fontFile: TESTCSS },\n    { fontName: \"TEST2\", fontFile: TESTCSS2 },\n  ]},\n  ...,\n  />\n")),(0,e.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,e.kt)("p",null,"\u5728\u4f60\u7684 ",(0,e.kt)("inlineCode",{parentName:"p"},"echarts options"),"\u4e2d\u914d\u7f6e\u4e0a\u4f60\u6240\u9700\u8981\u7684\u5b57\u4f53\uff1b"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-jsx"},'  const pieOption = {\n    textStyle: {\n      fontFamily: "TEST",\n      fontSize: 15,\n    },\n    ...\n  }\n')))}i.isMDXComponent=!0}}]);