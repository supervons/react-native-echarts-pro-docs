"use strict";
(self.webpackChunkreact_native_echarts_pro_docs =
  self.webpackChunkreact_native_echarts_pro_docs || []).push([
  [998],
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
      function i(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      var c = r.createContext({}),
        l = function (e) {
          var t = r.useContext(c),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
        },
        p = function (e) {
          var t = l(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        h = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        u = r.forwardRef(function (e, t) {
          var n = e.components,
            a = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            p = s(e, ["components", "mdxType", "originalType", "parentName"]),
            u = l(n),
            d = a,
            g = u["".concat(c, ".").concat(d)] || u[d] || h[d] || i;
          return n
            ? r.createElement(g, o(o({ ref: t }, p), {}, { components: n }))
            : r.createElement(g, o({ ref: t }, p));
        });
      function d(e, t) {
        var n = arguments,
          a = t && t.mdxType;
        if ("string" == typeof e || a) {
          var i = n.length,
            o = new Array(i);
          o[0] = u;
          var s = {};
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s.mdxType = "string" == typeof e ? e : a),
            (o[1] = s);
          for (var l = 2; l < i; l++) o[l] = n[l];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      u.displayName = "MDXCreateElement";
    },
    7042: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return p;
          },
          contentTitle: function () {
            return c;
          },
          default: function () {
            return d;
          },
          frontMatter: function () {
            return s;
          },
          metadata: function () {
            return l;
          },
          toc: function () {
            return h;
          },
        });
      var r = n(7462),
        a = n(3366),
        i = (n(7294), n(3905)),
        o = ["components"],
        s = { sidebar_position: 2 },
        c = "Method",
        l = {
          unversionedId: "tutorial-basics/method",
          id: "tutorial-basics/method",
          title: "Method",
          description:
            "| Method name  |             Params             |                     Description                     |",
          source: "@site/docs/tutorial-basics/method.md",
          sourceDirName: "tutorial-basics",
          slug: "/tutorial-basics/method",
          permalink:
            "/react-native-echarts-pro-docs/docs/tutorial-basics/method",
          editUrl:
            "https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/tutorial-basics/method.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Props",
            permalink:
              "/react-native-echarts-pro-docs/docs/tutorial-basics/props",
          },
          next: {
            title: "Contributors",
            permalink: "/react-native-echarts-pro-docs/docs/contributors",
          },
        },
        p = {},
        h = [
          { value: "setNewOption", id: "setnewoption", level: 2 },
          { value: "option", id: "option", level: 3 },
          { value: "optionSetting", id: "optionsetting", level: 3 },
          { value: "getInstance", id: "getinstance", level: 2 },
          { value: "usage", id: "usage", level: 3 },
          { value: "getWidth", id: "getwidth", level: 3 },
          { value: "getHeight", id: "getheight", level: 3 },
          { value: "getOption", id: "getoption", level: 3 },
          { value: "resize", id: "resize", level: 3 },
          { value: "dispatchAction", id: "dispatchaction", level: 3 },
          { value: "dispatchAction", id: "dispatchaction-1", level: 2 },
        ],
        u = { toc: h };
      function d(e) {
        var t = e.components,
          n = (0, a.Z)(e, o);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "method" }, "Method"),
          (0, i.kt)(
            "table",
            null,
            (0, i.kt)(
              "thead",
              { parentName: "table" },
              (0, i.kt)(
                "tr",
                { parentName: "thead" },
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: "center" },
                  "Method name"
                ),
                (0, i.kt)(
                  "th",
                  { parentName: "tr", align: "center" },
                  "Params"
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
                  "setNewOption"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "option(require), optionSetting?"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Reassign and render the chart."
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "getInstance"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "functionName, params?"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Get chart instance."
                )
              ),
              (0, i.kt)(
                "tr",
                { parentName: "tbody" },
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "dispatchAction"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "callbackData?"
                ),
                (0, i.kt)(
                  "td",
                  { parentName: "tr", align: "center" },
                  "Chart click event,callbackData is the clicked data."
                )
              )
            )
          ),
          (0, i.kt)("h2", { id: "setnewoption" }, "setNewOption"),
          (0, i.kt)("h3", { id: "option" }, "option"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>\n\n// use, no optionSetting\nthis.echarts.setNewOption({...})\n"
            )
          ),
          (0, i.kt)("h3", { id: "optionsetting" }, "optionSetting"),
          (0, i.kt)(
            "p",
            null,
            "If you don't want to merge options, you can do this:"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "<RNEChartsPro ref={(echarts) => (this.echarts = echarts)} option={this.state.options}/>\n\nthis.echarts.setNewOption({...}, {\n    notMerge?: boolean,\n    replaceMerge?: string | string[],\n    lazyUpdate?: boolean,\n})\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "See more => ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href:
                  "https://echarts.apache.org/en/api.html#echartsInstance.setOption",
              },
              "setOption"
            )
          ),
          (0, i.kt)("h2", { id: "getinstance" }, "getInstance"),
          (0, i.kt)("p", null, "Get the chart instance."),
          (0, i.kt)("h3", { id: "usage" }, "usage"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "function resizeHeight() {\n    echartsRef.current.getInstance('getHeight').then(res=>{\n        console.log(res) // 200\n    })\n}\nreturn (\n    <View style={{ height: 300, paddingTop: 25 }}>\n        <RNEChartsPro ref={echartsRef} height={200} option={pieOption} />\n        <Button title={'Resize'} onPress={resizeHeight}/>\n    </View>\n);\n"
            )
          ),
          (0, i.kt)("h3", { id: "getwidth" }, "getWidth"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, "promise")
          ),
          (0, i.kt)("p", null, "Get the charts weight."),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "echartsRef.current.getInstance('getWeight').then(res=>{\n  console.log(res)\n})\n"
            )
          ),
          (0, i.kt)("h3", { id: "getheight" }, "getHeight"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, "promise")
          ),
          (0, i.kt)("p", null, "Get the charts height."),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "echartsRef.current.getInstance('getHeight').then(res=>{\n  console.log(res)\n})\n"
            )
          ),
          (0, i.kt)("h3", { id: "getoption" }, "getOption"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, "promise")
          ),
          (0, i.kt)("p", null, "Get the charts option."),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "echartsRef.current.getInstance('getOption').then(res=>{\n  console.log(res)\n})\n"
            )
          ),
          (0, i.kt)("h3", { id: "resize" }, "resize"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, "void")
          ),
          (0, i.kt)(
            "p",
            null,
            "Resizes chart, which should be called manually when container size changes."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "echartsRef.current.getInstance('resize', {height: 300, ...other})\n"
            )
          ),
          (0, i.kt)("h3", { id: "dispatchaction" }, "dispatchAction"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)("inlineCode", { parentName: "p" }, "void")
          ),
          (0, i.kt)(
            "p",
            null,
            "Triggers chart action, like chart switch legendToggleSelect,zoom data area dataZoom, show tooltip showTip and so on. See action and events for more information."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              "echartsRef.current.getInstance('dispatchAction', {\n  type: \"showTip\",\n  seriesIndex: 0,\n  dataIndex: 0,\n})\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "See more => ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://echarts.apache.org/en/api.html#echartsInstance",
              },
              "EchartsInstance"
            )
          ),
          (0, i.kt)("h2", { id: "dispatchaction-1" }, "dispatchAction"),
          (0, i.kt)(
            "p",
            null,
            "Will be merged to ",
            (0, i.kt)(
              "a",
              { parentName: "p", href: "#getinstance" },
              "getInstance"
            ),
            "."
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-jsx" },
              'echartsRef.current.dispatchAction({\n  type: "showTip",\n  seriesIndex: 0,\n  dataIndex: 0,\n})\n'
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
