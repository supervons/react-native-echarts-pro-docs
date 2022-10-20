"use strict";(self.webpackChunkreact_native_echarts_pro_docs=self.webpackChunkreact_native_echarts_pro_docs||[]).push([[569],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6261:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:3,sidebar_label:"senior"},s=void 0,p={unversionedId:"tutorial-map/senior",id:"tutorial-map/senior",title:"senior",description:"Move, zoom and reset",source:"@site/docs/tutorial-map/senior.md",sourceDirName:"tutorial-map",slug:"/tutorial-map/senior",permalink:"/react-native-echarts-pro-docs/docs/tutorial-map/senior",editUrl:"https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/tutorial-map/senior.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"senior"},sidebar:"tutorialSidebar",previous:{title:"events",permalink:"/react-native-echarts-pro-docs/docs/tutorial-map/events"},next:{title:"Comparison",permalink:"/react-native-echarts-pro-docs/docs/comparison"}},c={},m=[{value:"Move, zoom and reset",id:"move-zoom-and-reset",level:2},{value:"move &amp; zoom",id:"move--zoom",level:3},{value:"reset",id:"reset",level:3},{value:"Touch optimization",id:"touch-optimization",level:2},{value:"Customize data",id:"customize-data",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"move-zoom-and-reset"},"Move, zoom and reset"),(0,a.kt)("p",null,"Some countries/regions are small in the world, they may not be visible under the default zoom ratio, so ",(0,a.kt)("inlineCode",{parentName:"p"},"slide")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"zoom")," is required to match the display, and ",(0,a.kt)("inlineCode",{parentName:"p"},"reset")," is to reset the default zoom ratio."),(0,a.kt)("h3",{id:"move--zoom"},"move & zoom"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"roam")," props, if you only want to enable zoom or move, you can set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"'scale'")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"'move'"),". Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to enable both."),(0,a.kt)("h3",{id:"reset"},"reset"),(0,a.kt)("p",null,"After zooming or panning, restore the original position; use ",(0,a.kt)("inlineCode",{parentName:"p"},"restore")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"toolbox")," to configure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'toolbox: {\n  show: true,\n  orient: "horizontal",\n  x: "left",\n  y: "bottom",\n  backgroundColor: "#1e90ff60",\n  itemGap: 10,\n  itemSize: 10,\n  color: "#ffffff",\n  showTitle: false,\n  feature: {\n    restore: {\n      show: true,\n      title: "Reset",\n      },\n    },\n  }\n')),(0,a.kt)("h2",{id:"touch-optimization"},"Touch optimization"),(0,a.kt)("p",null,"If the map is in a ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"move&zoom")," may conflict with ",(0,a.kt)("inlineCode",{parentName:"p"},"list scroll")," (especially on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Android")," side), such as the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { ScrollView, View } from "react-native";\nimport RNEChartsPro from "react-native-echarts-pro";\n\nexport default function MapCharts() {\n  const mapData = {\n    geo: [\n      {\n        type: "map",\n        map: "world",\n        mapType: "world",\n        selectedMode: "single",\n        itemStyle: {\n          normal: {\n            areaStyle: { color: "#B1D0EC" },\n            color: "#eeeeee",\n            borderColor: "#dadfde",\n          },\n          emphasis: {\n            //mouse hover style\n            label: {\n              show: true,\n              textStyle: {\n                color: "#000000",\n              },\n            },\n          },\n        },\n        roam: true,\n      },\n    ],\n    series: {\n      type: "effectScatter",\n      coordinateSystem: "geo",\n      geoIndex: 0,\n      itemStyle: {\n        color: "red",\n      },\n      data: [[116.4551, 40.2539, 10]],\n    },\n    toolbox: {\n      show: true,\n      orient: "horizontal",\n      x: "left",\n      y: "bottom",\n      backgroundColor: "#1e90ff60",\n      itemGap: 10,\n      itemSize: 10,\n      color: "#ffffff",\n      showTitle: false,\n      feature: {\n        restore: {\n          show: true,\n          title: "Reset",\n        },\n      },\n    },\n  };\n\n  return (\n    <ScrollView style={{ flex: 1 }}>\n      <View style={{ height: 300, backgroundColor: "#965454" }}></View>\n      <RNEChartsPro\n        height={250}\n        option={mapData}\n        onPress={res => {\n          alert(JSON.stringify(res));\n        }}\n      />\n      <View style={{ height: 300, backgroundColor: "#c7b8a1" }}></View>\n    </ScrollView>\n  );\n}\n')),(0,a.kt)("p",null,"The solution is setting the  ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView")," props ",(0,a.kt)("inlineCode",{parentName:"p"},"nestedScrollEnabled")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { ScrollView, View } from "react-native";\nimport RNEChartsPro from "react-native-echarts-pro";\n\nexport default function MapCharts() {\n  const mapData = {\n    geo: [\n      {\n        type: "map",\n        map: "world",\n        mapType: "world",\n        selectedMode: "single",\n        itemStyle: {\n          normal: {\n            areaStyle: { color: "#B1D0EC" },\n            color: "#eeeeee",\n            borderColor: "#dadfde",\n          },\n          emphasis: {\n            //mouse hover style\n            label: {\n              show: true,\n              textStyle: {\n                color: "#000000",\n              },\n            },\n          },\n        },\n        roam: true,\n      },\n    ],\n    series: {\n      type: "effectScatter",\n      coordinateSystem: "geo",\n      geoIndex: 0,\n      itemStyle: {\n        color: "red",\n      },\n      data: [[116.4551, 40.2539, 10]],\n    },\n    toolbox: {\n      show: true,\n      orient: "horizontal",\n      x: "left",\n      y: "bottom",\n      backgroundColor: "#1e90ff60",\n      itemGap: 10,\n      itemSize: 10,\n      color: "#ffffff",\n      showTitle: false,\n      feature: {\n        restore: {\n          show: true,\n          title: "Reset",\n        },\n      },\n    },\n  };\n\n  return (\n    <ScrollView style={{ flex: 1 }}>\n      <View style={{ height: 300, backgroundColor: "#965454" }}></View>\n      <RNEChartsPro\n        height={250}\n        option={mapData}\n        webViewSettings={{\n          nestedScrollEnabled: true,\n        }}\n        onPress={res => {\n          alert(JSON.stringify(res));\n        }}\n      />\n      <View style={{ height: 300, backgroundColor: "#c7b8a1" }}></View>\n    </ScrollView>\n  );\n}\n')),(0,a.kt)("h2",{id:"customize-data"},"Customize data"),(0,a.kt)("p",null,"The default data is the world map. If you need to customize the map json, you can download the map data from the following channels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"China\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://github.com/echarts-maps/echarts-china-cities-js"},"echarts-china-cities-js")),(0,a.kt)("li",{parentName:"ul"},"Other\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://geojson.io"},"geojson-io"))))}d.isMDXComponent=!0}}]);