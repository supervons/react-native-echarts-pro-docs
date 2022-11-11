"use strict";(self.webpackChunkreact_native_echarts_pro_docs=self.webpackChunkreact_native_echarts_pro_docs||[]).push([[3318],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8962:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:3,sidebar_label:"\u9ad8\u7ea7"},c=void 0,s={unversionedId:"tutorial-map/senior",id:"tutorial-map/senior",title:"senior",description:"\u6ed1\u52a8\uff0c\u7f29\u653e\u53ca\u5f52\u4f4d",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorial-map/senior.md",sourceDirName:"tutorial-map",slug:"/tutorial-map/senior",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/tutorial-map/senior",editUrl:"https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/tutorial-map/senior.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u9ad8\u7ea7"},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/tutorial-map/events"},next:{title:"\u5185\u7f6e\u5b57\u4f53",permalink:"/react-native-echarts-pro-docs/zh-cn/docs/tutorial-fontfamily/inner"}},p={},u=[{value:"\u6ed1\u52a8\uff0c\u7f29\u653e\u53ca\u5f52\u4f4d",id:"\u6ed1\u52a8\u7f29\u653e\u53ca\u5f52\u4f4d",level:2},{value:"\u6ed1\u52a8 &amp; \u7f29\u653e",id:"\u6ed1\u52a8--\u7f29\u653e",level:3},{value:"\u5f52\u4f4d",id:"\u5f52\u4f4d",level:3},{value:"\u5217\u8868\u4f18\u5316",id:"\u5217\u8868\u4f18\u5316",level:3},{value:"\u81ea\u5b9a\u4e49\u6570\u636e",id:"\u81ea\u5b9a\u4e49\u6570\u636e",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6ed1\u52a8\u7f29\u653e\u53ca\u5f52\u4f4d"},"\u6ed1\u52a8\uff0c\u7f29\u653e\u53ca\u5f52\u4f4d"),(0,a.kt)("p",null,"\u8003\u8651\u5230\u67d0\u4e9b\u56fd\u5bb6\u6216\u5730\u533a\u5728\u4e16\u754c\u8303\u56f4\u5185\u8f83\u5c0f\uff0c\u53ef\u80fd\u5728\u9ed8\u8ba4\u7f29\u653e\u6bd4\u4f8b\u4e0b\u4e0d\u53ef\u89c1\uff0c\u6545\u9700\u8981",(0,a.kt)("inlineCode",{parentName:"p"},"\u6ed1\u52a8"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"\u7f29\u653e"),"\u6765\u914d\u5408\u663e\u793a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u5f52\u4f4d"),"\u5219\u4e3a\u590d\u4f4d\u9ed8\u8ba4\u7f29\u653e\u6bd4\u4f8b\u3002"),(0,a.kt)("h3",{id:"\u6ed1\u52a8--\u7f29\u653e"},"\u6ed1\u52a8 & \u7f29\u653e"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"roam")," \u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u5982\u679c\u53ea\u60f3\u8981\u5f00\u542f\u7f29\u653e\u6216\u8005\u5e73\u79fb\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"'scale'")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"'move'"),"\u3002\u8bbe\u7f6e\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u4e3a\u90fd\u5f00\u542f\u3002"),(0,a.kt)("h3",{id:"\u5f52\u4f4d"},"\u5f52\u4f4d"),(0,a.kt)("p",null,"\u7f29\u653e\u6216\u5e73\u79fb\u540e\uff0c\u6062\u590d\u521d\u59cb\u4f4d\u7f6e\uff1b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"toolbox"),"\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"restore")," \u8fdb\u884c\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'toolbox: {\n  show: true,\n  orient: "horizontal",\n  x: "left",\n  y: "bottom",\n  backgroundColor: "#1e90ff60",\n  itemGap: 10,\n  itemSize: 10,\n  color: "#ffffff",\n  showTitle: false,\n  feature: {\n    restore: {\n      show: true,\n      title: "Reset",\n      },\n    },\n  }\n')),(0,a.kt)("h3",{id:"\u5217\u8868\u4f18\u5316"},"\u5217\u8868\u4f18\u5316"),(0,a.kt)("p",null,"\u5982\u679c\u5730\u56fe\u5904\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView")," \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u6ed1\u52a8&\u7f29\u653e"),"\u53ef\u80fd\u4f1a\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"\u5217\u8868\u6eda\u52a8"),"\u5b58\u5728\u51b2\u7a81\uff08\u5c24\u5176\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Android")," \u7aef\uff09\uff0c\u4f8b\u5982\u5982\u4e0b\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { ScrollView, View } from "react-native";\nimport RNEChartsPro from "react-native-echarts-pro";\n\nexport default function MapCharts() {\n  const mapData = {\n    geo: [\n      {\n        type: "map",\n        map: "world",\n        mapType: "world",\n        selectedMode: "single",\n        itemStyle: {\n          normal: {\n            areaStyle: { color: "#B1D0EC" },\n            color: "#eeeeee",\n            borderColor: "#dadfde",\n          },\n          emphasis: {\n            //mouse hover style\n            label: {\n              show: true,\n              textStyle: {\n                color: "#000000",\n              },\n            },\n          },\n        },\n        roam: true,\n      },\n    ],\n    series: {\n      type: "effectScatter",\n      coordinateSystem: "geo",\n      geoIndex: 0,\n      itemStyle: {\n        color: "red",\n      },\n      data: [[116.4551, 40.2539, 10]],\n    },\n    toolbox: {\n      show: true,\n      orient: "horizontal",\n      x: "left",\n      y: "bottom",\n      backgroundColor: "#1e90ff60",\n      itemGap: 10,\n      itemSize: 10,\n      color: "#ffffff",\n      showTitle: false,\n      feature: {\n        restore: {\n          show: true,\n          title: "Reset",\n        },\n      },\n    },\n  };\n\n  return (\n    <ScrollView style={{ flex: 1 }}>\n      <View style={{ height: 300, backgroundColor: "#965454" }}></View>\n      <RNEChartsPro\n        height={250}\n        option={mapData}\n        onPress={res => {\n          alert(JSON.stringify(res));\n        }}\n      />\n      <View style={{ height: 300, backgroundColor: "#c7b8a1" }}></View>\n    </ScrollView>\n  );\n}\n')),(0,a.kt)("p",null,"\u89e3\u51b3\u7684\u529e\u6cd5\u5c31\u662f\uff0c\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"nestedScrollEnabled")," \u5c5e\u6027\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," \u5373\u53ef\u517c\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { ScrollView, View } from "react-native";\nimport RNEChartsPro from "react-native-echarts-pro";\n\nexport default function MapCharts() {\n  const mapData = {\n    geo: [\n      {\n        type: "map",\n        map: "world",\n        mapType: "world",\n        selectedMode: "single",\n        itemStyle: {\n          normal: {\n            areaStyle: { color: "#B1D0EC" },\n            color: "#eeeeee",\n            borderColor: "#dadfde",\n          },\n          emphasis: {\n            //mouse hover style\n            label: {\n              show: true,\n              textStyle: {\n                color: "#000000",\n              },\n            },\n          },\n        },\n        roam: true,\n      },\n    ],\n    series: {\n      type: "effectScatter",\n      coordinateSystem: "geo",\n      geoIndex: 0,\n      itemStyle: {\n        color: "red",\n      },\n      data: [[116.4551, 40.2539, 10]],\n    },\n    toolbox: {\n      show: true,\n      orient: "horizontal",\n      x: "left",\n      y: "bottom",\n      backgroundColor: "#1e90ff60",\n      itemGap: 10,\n      itemSize: 10,\n      color: "#ffffff",\n      showTitle: false,\n      feature: {\n        restore: {\n          show: true,\n          title: "Reset",\n        },\n      },\n    },\n  };\n\n  return (\n    <ScrollView style={{ flex: 1 }}>\n      <View style={{ height: 300, backgroundColor: "#965454" }}></View>\n      <RNEChartsPro\n        height={250}\n        option={mapData}\n        webViewSettings={{\n          nestedScrollEnabled: true,\n        }}\n        onPress={res => {\n          alert(JSON.stringify(res));\n        }}\n      />\n      <View style={{ height: 300, backgroundColor: "#c7b8a1" }}></View>\n    </ScrollView>\n  );\n}\n')),(0,a.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6570\u636e"},"\u81ea\u5b9a\u4e49\u6570\u636e"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u6570\u636e\u4e3a\u4e16\u754c\u5730\u56fe\uff0c\u82e5\u9700\u8981\u81ea\u5b9a\u4e49\u5c55\u793a\uff0c\u53ef\u4ee5\u524d\u5f80\u4ee5\u4e0b\u6e20\u9053\u4e0b\u8f7d\u5730\u56fe\u6570\u636e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e2d\u56fd\u6570\u636e\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/echarts-maps/echarts-china-cities-js"},"echarts-china-cities-js")),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u81ea\u5b9a\u4e49\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://geojson.io"},"geojson-io"))))}d.isMDXComponent=!0}}]);