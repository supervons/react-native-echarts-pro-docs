"use strict";(self.webpackChunkreact_native_echarts_pro_docs=self.webpackChunkreact_native_echarts_pro_docs||[]).push([[392],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o=void 0,s={unversionedId:"tutorial-basics/method",id:"tutorial-basics/method",title:"method",description:"| Method name  |             Params             |                     Description                     |",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorial-basics/method.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/method",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/tutorial-basics/method",editUrl:"https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/tutorial-basics/method.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"props",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/tutorial-basics/props"},next:{title:"comparison",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/comparison"}},c={},l=[{value:"setNewOption",id:"setnewoption",level:2},{value:"option",id:"option",level:3},{value:"optionSetting",id:"optionsetting",level:3},{value:"getInstance",id:"getinstance",level:2},{value:"usage",id:"usage",level:3},{value:"getWidth",id:"getwidth",level:3},{value:"getHeight",id:"getheight",level:3},{value:"getOption",id:"getoption",level:3},{value:"resize",id:"resize",level:3},{value:"dispatchAction",id:"dispatchaction",level:3},{value:"dispatchAction",id:"dispatchaction-1",level:2}],p={toc:l};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"method"},"Method"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Method name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Params"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"setNewOption"),(0,r.kt)("td",{parentName:"tr",align:"center"},"option(require), optionSetting?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u91cd\u65b0\u8bbe\u7f6e\u56fe\u8868 option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"getInstance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"functionName, params?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u83b7\u53d6\u56fe\u8868 instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"dispatchAction"),(0,r.kt)("td",{parentName:"tr",align:"center"},"callbackData?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u56fe\u8868\u4e8b\u4ef6\u76d1\u542c.")))),(0,r.kt)("h2",{id:"setnewoption"},"setNewOption"),(0,r.kt)("h3",{id:"option"},"option"),(0,r.kt)("p",null,"\u56fe\u8868\u6838\u5fc3\u914d\u7f6e\u9879\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>\n\n// use, no optionSetting\nthis.echarts.setNewOption({...})\n")),(0,r.kt)("h3",{id:"optionsetting"},"optionSetting"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u662f\u4f1a\u5408\u5e76\u6bcf\u6b21\u66f4\u65b0\u7684\u6570\u636e\uff0c\u5982\u679c\u4e0d\u60f3\u5408\u5e76\u53ef\u4ee5\u53c2\u8003\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>\n\nthis.echarts.setNewOption({...}, {\n    notMerge?: boolean,\n    replaceMerge?: string | string[],\n    lazyUpdate?: boolean,\n})\n")),(0,r.kt)("p",null,"\u53c2\u8003\u66f4\u591a => ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/zh/api.html#echartsInstance.setOption"},"setOption")),(0,r.kt)("h2",{id:"getinstance"},"getInstance"),(0,r.kt)("p",null,"\u83b7\u53d6\u56fe\u8868\u5b9e\u4f8b instance\uff0c\u4ee5\u4fbf\u505a\u66f4\u591a\u7684\u64cd\u4f5c."),(0,r.kt)("h3",{id:"usage"},"usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function resizeHeight() {\n    echartsRef.current.getInstance('getHeight').then(res=>{\n        console.log(res) // 200\n    })\n}\nreturn (\n    <View style={{ height: 300, paddingTop: 25 }}>\n        <RNEChartsPro ref={echartsRef} height={200} option={pieOption} />\n        <Button title={'Resize'} onPress={resizeHeight}/>\n    </View>\n);\n")),(0,r.kt)("h3",{id:"getwidth"},"getWidth"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"promise")),(0,r.kt)("p",null,"\u83b7\u53d6\u56fe\u8868\u5b9e\u4f8b\u5bbd\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"echartsRef.current.getInstance('getWeight').then(res=>{\n  console.log(res)\n})\n")),(0,r.kt)("h3",{id:"getheight"},"getHeight"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"promise")),(0,r.kt)("p",null,"\u83b7\u53d6\u56fe\u8868\u5b9e\u4f8b\u9ad8\u5ea6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"echartsRef.current.getInstance('getHeight').then(res=>{\n  console.log(res)\n})\n")),(0,r.kt)("h3",{id:"getoption"},"getOption"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"promise")),(0,r.kt)("p",null,"\u83b7\u53d6\u56fe\u8868 option \u914d\u7f6e\u9879\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"echartsRef.current.getInstance('getOption').then(res=>{\n  console.log(res)\n})\n")),(0,r.kt)("h3",{id:"resize"},"resize"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"\u91cd\u65b0\u8bbe\u7f6e\u56fe\u8868\u9ad8\u5ea6\u3001\u5bbd\u5ea6\u7b49\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"echartsRef.current.getInstance('resize', {height: 300, ...other})\n")),(0,r.kt)("h3",{id:"dispatchaction"},"dispatchAction"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Triggers chart action, like chart switch legendToggleSelect,zoom data area dataZoom, show tooltip showTip and so on. See action and events for more information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"echartsRef.current.getInstance('dispatchAction', {\n  type: \"showTip\",\n  seriesIndex: 0,\n  dataIndex: 0,\n})\n")),(0,r.kt)("p",null,"\u67e5\u770b\u66f4\u591a => ",(0,r.kt)("a",{parentName:"p",href:"https://echarts.apache.org/zh/api.html#echartsInstance"},"EchartsInstance")),(0,r.kt)("h2",{id:"dispatchaction-1"},"dispatchAction"),(0,r.kt)("p",null,"\u529f\u80fd\u540c\uff1a ",(0,r.kt)("a",{parentName:"p",href:"#getinstance"},"getInstance"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'echartsRef.current.dispatchAction({\n  type: "showTip",\n  seriesIndex: 0,\n  dataIndex: 0,\n})\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"datazoom")," \u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useRef } from "react";\nimport { Text, View } from "react-native";\nimport Echarts from "react-native-echarts-pro";\nexport default function StockInDetail() {\n  const echartsRef = new useRef(null);\n  function highlight() {\n    echartsRef.current.dispatchAction({\n      // This line\n      batch: [\n        {\n          animation: {},\n          batch: null,\n          end: 80,\n          start: 30,\n          type: "datazoom",\n        },\n      ],\n      type: "dataZoom",\n    });\n  }\n  return (\n    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>\n      <Echarts\n        ref={echartsRef}\n        option={{\n          xAxis: {\n            type: "category",\n            boundaryGap: false,\n            inverse: true,\n            data: [\n              "2022/9/30",\n              "2022/9/29",\n              "2022/9/28",\n              "2022/9/27",\n              "2022/9/26",\n              "2022/9/25",\n              "2022/9/24",\n              "2022/9/23",\n              "2022/9/22",\n              "2022/9/21",\n            ],\n            axisTick: {\n              show: false,\n            },\n            axisLine: {\n              show: false,\n            },\n          },\n          yAxis: {\n            type: "value",\n            position: "right",\n            offset: 4,\n            axisLine: {\n              show: false,\n            },\n            axisTick: {\n              show: false,\n            },\n            splitLine: {\n              lineStyle: {\n                type: "dashed",\n                color: "#ccc",\n              },\n            },\n            min: 0,\n            max: 150,\n            boundaryGap: [0, "100%"],\n          },\n          animation: false,\n          dataZoom: [\n            {\n              type: "inside",\n              minValueSpan: 5,\n              start: 0,\n              throttle: 0,\n              end: 10,\n            },\n            {\n              start: 0,\n              end: 10,\n            },\n          ],\n          series: [\n            {\n              name: "Fake Data",\n              type: "line",\n              symbol: "none",\n              sampling: "lttb",\n              itemStyle: {\n                color: "rgb(255, 70, 131)",\n              },\n              data: [50, 70, 80, 90, 30, 40, 56, 67, 78, 87],\n            },\n          ],\n        }}\n        height={300}\n        eventActions={{\n          dataZoom: params => {\n            console.log(params);\n          },\n        }}\n      />\n      <Text onPress={highlight}>Click action</Text>\n    </View>\n  );\n}\n')))}h.isMDXComponent=!0}}]);