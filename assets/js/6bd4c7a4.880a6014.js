"use strict";
(self.webpackChunkreact_native_echarts_pro_docs =
  self.webpackChunkreact_native_echarts_pro_docs || []).push([
  [555],
  {
    3905: function (t, e, n) {
      n.d(e, {
        Zo: function () {
          return c;
        },
        kt: function () {
          return d;
        },
      });
      var r = n(7294);
      function a(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(n), !0).forEach(function (e) {
                a(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function l(t, e) {
        if (null == t) return {};
        var n,
          r,
          a = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              a = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (n = i[r]), e.indexOf(n) >= 0 || (a[n] = t[n]);
            return a;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (a[n] = t[n]));
        }
        return a;
      }
      var p = r.createContext({}),
        s = function (t) {
          var e = r.useContext(p),
            n = e;
          return t && (n = "function" == typeof t ? t(e) : o(o({}, e), t)), n;
        },
        c = function (t) {
          var e = s(t.components);
          return r.createElement(p.Provider, { value: e }, t.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return r.createElement(r.Fragment, {}, e);
          },
        },
        m = r.forwardRef(function (t, e) {
          var n = t.components,
            a = t.mdxType,
            i = t.originalType,
            p = t.parentName,
            c = l(t, ["components", "mdxType", "originalType", "parentName"]),
            m = s(n),
            d = a,
            h = m["".concat(p, ".").concat(d)] || m[d] || u[d] || i;
          return n
            ? r.createElement(h, o(o({ ref: e }, c), {}, { components: n }))
            : r.createElement(h, o({ ref: e }, c));
        });
      function d(t, e) {
        var n = arguments,
          a = e && e.mdxType;
        if ("string" == typeof t || a) {
          var i = n.length,
            o = new Array(i);
          o[0] = m;
          var l = {};
          for (var p in e) hasOwnProperty.call(e, p) && (l[p] = e[p]);
          (l.originalType = t),
            (l.mdxType = "string" == typeof t ? t : a),
            (o[1] = l);
          for (var s = 2; s < i; s++) o[s] = n[s];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    7641: function (t, e, n) {
      n.r(e),
        n.d(e, {
          assets: function () {
            return c;
          },
          contentTitle: function () {
            return p;
          },
          default: function () {
            return d;
          },
          frontMatter: function () {
            return l;
          },
          metadata: function () {
            return s;
          },
          toc: function () {
            return u;
          },
        });
      var r = n(7462),
        a = n(3366),
        i = (n(7294), n(3905)),
        o = ["components"],
        l = { sidebar_position: 1 },
        p = "Props",
        s = {
          unversionedId: "tutorial-basics/props",
          id: "tutorial-basics/props",
          title: "Props",
          description:
            "|       Prop        |  Type  |   Default   | Require |                         Description                          |",
          source: "@site/docs/tutorial-basics/props.md",
          sourceDirName: "tutorial-basics",
          slug: "/tutorial-basics/props",
          permalink:
            "/react-native-echarts-pro-docs/docs/tutorial-basics/props",
          editUrl:
            "https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/tutorial-basics/props.md",
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: { sidebar_position: 1 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Tutorial Intro",
            permalink: "/react-native-echarts-pro-docs/docs/intro",
          },
          next: {
            title: "Method",
            permalink:
              "/react-native-echarts-pro-docs/docs/tutorial-basics/method",
          },
        },
        c = {},
        u = [
          { value: "height", id: "height", level: 2 },
          { value: "width", id: "width", level: 2 },
          { value: "option", id: "option", level: 2 },
          { value: "backgroundColor", id: "backgroundcolor", level: 2 },
          { value: "themeName", id: "themename", level: 2 },
          { value: "webViewSettings", id: "webviewsettings", level: 2 },
          { value: "formatterVariable", id: "formattervariable", level: 2 },
          { value: "extension", id: "extension", level: 2 },
          { value: "customMapData", id: "custommapdata", level: 2 },
        ],
        m = { toc: u };
      function d(t) {
        var e = t.components,
          n = (0, a.Z)(t, o);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, m, n, { components: e, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "props" }, "Props"),
          (0, i.kt)(
            "table",
            null,
            (0, i.kt)(
              "thead",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "thead" },
                (0, i.kt)("th", { parentName: "tr", align: "center" }, "Prop"),
                (0, i.kt)("th", { parentName: "tr", align: "center" }, "Type"),
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: "center" },
                  "Default"
                ),
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: "center" },
                  "Require"
                ),
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: "center" },
                  "Description"
                )
              )
            ),
            (0, i.kt)(
              "tbody",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "height"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "number"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "400"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "Y"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Chart area height"
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "width"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "number"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "auto"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "N"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Chart area auto"
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "option"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "object"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "null"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "Y"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Chart configuration, see more\uff1a",
                  (0, i.kt)(
                    "a",
                    {
                      parentName: "td",
                      href: "https://echarts.apache.org/en/option.html#title",
                    },
                    "Apache ECharts - options"
                  )
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "backgroundColor"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "string"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "transparent"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "N"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Chart background color"
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "themeName"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "string"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "-"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "N"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "There are only six officially available themes:",
                  (0, i.kt)("br", null),
                  "vintage ",
                  "|",
                  "|",
                  " dark ",
                  "|",
                  "|",
                  " macarons ",
                  "|",
                  "|",
                  " infographic ",
                  "|",
                  "|",
                  " shine ",
                  "|",
                  "|",
                  " roma"
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "webViewSettings"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "object"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "null"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "N"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Customize WebView container properties"
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "formatterVariable"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "object"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "null"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "N"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "If option\u2019formatter function need variable,can use this."
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "extension"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "object"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "null"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "N"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Dynamic support for tripartite expansion, such as word cloud, water polo map, etc. example."
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "customMapData"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "object"
                ),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "null"),
                (0, i.kt)("td", { parentName: "tr", align: "center" }, "N"),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "For custom maps, null is a world map. See the following usage examples"
                )
              )
            )
          ),
          (0, i.kt)("h2", { id: "height" }, "height"),
          (0, i.kt)("p", null, "Chart area height"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "// ...\n<RNEChartsPro height={250} {...other-props}/>\n// ...\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "If you want ",
            (0, i.kt)("strong", { parentName: "p" }, "resize height"),
            ", you can do this:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "export default function Demo() {\n  const echartsRef = new useRef(null);\n  const pieOption = {...options};\n\n  function resizeHeight() {\n    echartsRef.current.getInstance('resize', {height: 250})\n  }\n  \n  return (\n      <View style={{ height: 300, paddingTop: 25 }}>\n        <RNEChartsPro ref={echartsRef} height={200} option={pieOption} />\n        <Button title={'Resize'} onPress={resizeHeight}/>\n      </View>\n  );\n}\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "More on ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "getInstance"),
            " later."
          ),
          (0, i.kt)("h2", { id: "width" }, "width"),
          (0, i.kt)(
            "p",
            null,
            "Chart area width, usually you don't need setting, it will follow parent container."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {
                parentName: "pre",
                className: "language-jsx",
                metastring:
                  "title='This code echarts width will follow the parent view=200\uff1a'",
                title: "'This",
                code: !0,
                echarts: !0,
                width: !0,
                will: !0,
                follow: !0,
                the: !0,
                parent: !0,
                view: "200\uff1a'",
              },
              "export default function Demo() {\n  const pieOption = {...options};\n  return (\n      <View style={{ height: 300, width: 200, paddingTop: 25 }}>\n        <RNEChartsPro height={200} option={pieOption} />\n      </View>\n  );\n}\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "If you want ",
            (0, i.kt)("strong", { parentName: "p" }, "resize width"),
            ", like resize height."
          ),
          (0, i.kt)("h2", { id: "option" }, "option"),
          (0, i.kt)(
            "p",
            null,
            "Chart configuration, see more : ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://echarts.apache.org/en/option.html#title",
              },
              "Apache ECharts - options"
            )
          ),
          (0, i.kt)("h2", { id: "backgroundcolor" }, "backgroundColor"),
          (0, i.kt)(
            "p",
            null,
            "Chart's WebView container background color, default ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "transparent"),
            "."
          ),
          (0, i.kt)("h2", { id: "themename" }, "themeName"),
          (0, i.kt)("p", null, "Chart\u2019s built-in theme:"),
          (0, i.kt)(
            "p",
            null,
            "vintage || dark || macarons || infographic || shine || roma"
          ),
          (0, i.kt)("h2", { id: "webviewsettings" }, "webViewSettings"),
          (0, i.kt)("p", null, "Chart's WebView container settings."),
          (0, i.kt)("h2", { id: "formattervariable" }, "formatterVariable"),
          (0, i.kt)(
            "p",
            null,
            "If the method in ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "option"),
            " uses variables, it can be passed through this attribute"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              '  // ...\n  const pieOption = {\n    yAxis: {\n      axisLabel: {\n        formatter(value) {\n          return value + formatterVariable.unit;\n        }\n      }\n    },\n  }\n  return (\n    <View style={{ height: 300, paddingTop: 25 }}>\n      <RNEChartsPro\n        formatterVariable={{ unit: "dollar" }}\n        option={pieOption}\n      />\n    </View>\n  )\n  // ...\n'
            )
          ),
          (0, i.kt)("h2", { id: "extension" }, "extension"),
          (0, i.kt)(
            "p",
            null,
            "Dynamic support for tripartite expansion, such as word cloud, water polo map, etc. example\uff08echarts-liquidfill\uff09\uff1a"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              '  const liquidOption = {\n    title: {\n      text: "\u6c34\u7403\u56fe",\n      left: "center",\n    },\n    series: [\n      {\n        type: "liquidFill",\n        data: [0.6],\n        color: ["#afb11b"],\n        itemStyle: {\n          opacity: 0.6,\n        },\n        emphasis: {\n          itemStyle: {\n            opacity: 0.9,\n          },\n        },\n      },\n    ],\n  };\n  return (\n    <View style={{ height: 300, paddingTop: 25 }}>\n      <RNEChartsPro\n        extension={[ // Dynamically import third-party CDN or import min.js file\n          "https://cdn.jsdelivr.net/npm/echarts-liquidfill@3.0.0/dist/echarts-liquidfill.min.js",\n        ]}\n        option={liquidOption}\n      />\n    </View>\n  );\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href:
                  "https://github.com/supervons/ExploreRN/blob/master/src/components/charts/chartsExtension.js",
              },
              "Extension-Demo"
            )
          ),
          (0, i.kt)("h2", { id: "custommapdata" }, "customMapData"),
          (0, i.kt)("p", null, "Custom map data, default world map."),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              'import ChinaJsonData from "./ChinaJsonData.js";\n  return (\n    <View style={{ height: 300, paddingTop: 25 }}>\n      <RNEChartsPro\n        {...props}\n        customMapData={ChinaJsonData}\n      />\n    </View>\n  );\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href:
                  "https://github.com/supervons/react-native-echarts-pro/blob/master/src/components/Echarts/map/chinaJson.js",
              },
              "ChinaJsonData.js"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "You can go to this page to download custom map JSON:"
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://geojson.io/" },
              "https://geojson.io/"
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
