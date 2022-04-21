"use strict";
(self.webpackChunkreact_native_echarts_pro_docs =
  self.webpackChunkreact_native_echarts_pro_docs || []).push([
  [671],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return d;
        },
      });
      var r = n(7294);
      function a(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var s = r.createContext({}),
        c = function (e) {
          var t = r.useContext(s),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
        },
        p = function (e) {
          var t = c(e.components);
          return r.createElement(s.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            o = e.originalType,
            s = e.parentName,
            p = l(e, ["components", "mdxType", "originalType", "parentName"]),
            m = c(n),
            d = a,
            h = m["".concat(s, ".").concat(d)] || m[d] || u[d] || o;
          return n
            ? r.createElement(h, i(i({ ref: t }, p), {}, { components: n }))
            : r.createElement(h, i({ ref: t }, p));
        });
      function d(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var o = n.length,
            i = new Array(o);
          i[0] = m;
          var l = {};
          for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
          (l.originalType = e),
            (l.mdxType = "string" == typeof e ? e : a),
            (i[1] = l);
          for (var c = 2; c < o; c++) i[c] = n[c];
          return r.createElement.apply(null, i);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    9881: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return p;
          },
          contentTitle: function () {
            return s;
          },
          default: function () {
            return d;
          },
          frontMatter: function () {
            return l;
          },
          metadata: function () {
            return c;
          },
          toc: function () {
            return u;
          },
        });
      var r = n(7462),
        a = n(3366),
        o = (n(7294), n(3905)),
        i = ["components"],
        l = { sidebar_position: 1 },
        s = "Tutorial Intro",
        c = {
          unversionedId: "intro",
          id: "intro",
          title: "Tutorial Intro",
          description:
            "Let's discover react-native-echarts-pro in less than 5 minutes.",
          source: "@site/docs/intro.md",
          sourceDirName: ".",
          slug: "/intro",
          permalink: "/react-native-echarts-pro-docs/docs/intro",
          editUrl:
            "https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/intro.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          next: {
            title: "Props",
            permalink:
              "/react-native-echarts-pro-docs/docs/tutorial-basics/props",
          },
        },
        p = {},
        u = [
          { value: "Getting Started", id: "getting-started", level: 2 },
          { value: "What you&#39;ll need", id: "what-youll-need", level: 3 },
          { value: "Usage", id: "usage", level: 2 },
          { value: "Base", id: "base", level: 3 },
          { value: "Map", id: "map", level: 3 },
        ],
        m = { toc: u };
      function d(e) {
        var t = e.components,
          n = (0, a.Z)(e, i);
        return (0, o.kt)(
          "wrapper",
          (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, o.kt)("h1", { id: "tutorial-intro" }, "Tutorial Intro"),
          (0, o.kt)(
            "p",
            null,
            "Let's discover ",
            (0, o.kt)(
              "strong",
              { parentName: "p" },
              "react-native-echarts-pro in less than 5 minutes"
            ),
            "."
          ),
          (0, o.kt)("h2", { id: "getting-started" }, "Getting Started"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "npm install react-native-echarts-pro --save\n"
            )
          ),
          (0, o.kt)("p", null, "or"),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-bash" },
              "yarn add react-native-echarts-pro\n"
            )
          ),
          (0, o.kt)("h3", { id: "what-youll-need" }, "What you'll need"),
          (0, o.kt)(
            "ul",
            null,
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                (0, o.kt)(
                  "a",
                  { parentName: "p", href: "https://reactnative.dev/" },
                  "react-native"
                ),
                " version 0.59 or above."
              )
            ),
            (0, o.kt)(
              "li",
              { parentName: "ul" },
              (0, o.kt)(
                "p",
                { parentName: "li" },
                (0, o.kt)(
                  "a",
                  {
                    parentName: "p",
                    href:
                      "https://github.com/react-native-webview/react-native-webview/",
                  },
                  "react-native-webview"
                ),
                " version 6.9.0 or above."
              )
            )
          ),
          (0, o.kt)("h2", { id: "usage" }, "Usage"),
          (0, o.kt)("h3", { id: "base" }, "Base"),
          (0, o.kt)("img", {
            style: { height: 400 },
            src:
              "https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/pieDemo.png",
            alt: "iOS\u57fa\u672c\u4f7f\u7528",
          }),
          (0, o.kt)("img", {
            style: { height: 400 },
            src:
              "https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/pieDemo_android.png",
            alt: "androd\u57fa\u672c\u4f7f\u7528",
          }),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              'import React from "react";\nimport { View } from "react-native";\nimport RNEChartsPro from "react-native-echarts-pro";\n\nexport default function RNEPDemo() {\n  const pieOption = {\n    series: [\n      {\n        name: "Source",\n        type: "pie",\n        legendHoverLink: true,\n        hoverAnimation: true,\n        avoidLabelOverlap: true,\n        startAngle: 180,\n        radius: "55%",\n        center: ["50%", "35%"],\n        data: [\n          { value: 105.2, name: "android" },\n          { value: 310, name: "iOS" },\n          { value: 234, name: "web" },\n        ],\n        label: {\n          normal: {\n            show: true,\n            textStyle: {\n              fontSize: 12,\n              color: "#23273C",\n            },\n          },\n        },\n      },\n    ],\n  };\n  return (\n          <View style={{ height: 300, paddingTop: 25 }}>\n            <RNEChartsPro height={250} option={pieOption} />\n          </View>\n  );\n}\n'
            )
          ),
          (0, o.kt)("h3", { id: "map" }, "Map"),
          (0, o.kt)("img", {
            style: { height: 400 },
            src:
              "https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/mapDemo.png",
            alt: "iOS\u5730\u56fe\u56fe\u7247",
            height: "500",
            align: "bottom",
          }),
          (0, o.kt)("img", {
            style: { height: 400 },
            src:
              "https://cdn.jsdelivr.net/gh/supervons/ImageLibrary@v1.0.0/react-native-echarts-pro/mapDemo_android.png",
            alt: "android\u5730\u56fe\u56fe\u7247",
            height: "500",
            align: "bottom",
          }),
          (0, o.kt)(
            "pre",
            null,
            (0, o.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              'import React from "react";\nimport { View } from "react-native";\nimport RNEChartsPro from "react-native-echarts-pro";\n\nexport default function Demo() {\n  const mapData = {\n    visualMap: {\n      show: true ,\n      left: "right",\n      top: "center",\n      min: 1,\n      max: 3,\n      calculable: true,\n    },\n    geo: [\n      {\n        type: "map",\n        map: "world",\n        mapType: "world",\n        selectedMode: "single",\n        itemStyle: {\n          normal: {\n            areaStyle: { color: "#B1D0EC" },\n            color: "#eeeeee",\n            borderColor: "#dadfde",\n          },\n          emphasis: {\n            //mouse hover style\n            label: {\n              show: true,\n              textStyle: {\n                color: "#000000",\n              },\n            },\n          },\n        },\n        roam: true,\n      },\n    ],\n    series: {\n      type: "effectScatter",\n      coordinateSystem: "geo",\n      geoIndex: 0,\n      itemStyle: {\n        color: "red",\n      },\n      data: [[116.4551, 40.2539, 10]],\n    },\n    toolbox: {\n      show: true,\n      orient: "horizontal",\n      x: "left",\n      y: "bottom",\n      backgroundColor: "#1e90ff60",\n      itemGap: 10,\n      itemSize: 10,\n      color: "#ffffff",\n      showTitle: false,\n      feature: {\n        restore: {\n          show: true,\n          title: "Reset",\n        },\n      },\n    },\n  };\n\n  return (\n          <View style={{ height: 300 }}>\n            <RNEChartsPro height={250} option={mapData} />\n          </View>\n  );\n}\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
