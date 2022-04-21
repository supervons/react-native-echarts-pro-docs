"use strict";
(self.webpackChunkreact_native_echarts_pro_docs =
  self.webpackChunkreact_native_echarts_pro_docs || []).push([
  [562],
  {
    3905: function (t, e, r) {
      r.d(e, {
        Zo: function () {
          return p;
        },
        kt: function () {
          return b;
        },
      });
      var n = r(7294);
      function o(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function i(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? i(Object(r), !0).forEach(function (e) {
                o(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      function a(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++)
              (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              e.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, r) &&
                  (o[r] = t[r]));
        }
        return o;
      }
      var s = n.createContext({}),
        u = function (t) {
          var e = n.useContext(s),
            r = e;
          return t && (r = "function" == typeof t ? t(e) : c(c({}, e), t)), r;
        },
        p = function (t) {
          var e = u(t.components);
          return n.createElement(s.Provider, { value: e }, t.children);
        },
        l = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return n.createElement(n.Fragment, {}, e);
          },
        },
        h = n.forwardRef(function (t, e) {
          var r = t.components,
            o = t.mdxType,
            i = t.originalType,
            s = t.parentName,
            p = a(t, ["components", "mdxType", "originalType", "parentName"]),
            h = u(r),
            b = o,
            f = h["".concat(s, ".").concat(b)] || h[b] || l[b] || i;
          return r
            ? n.createElement(f, c(c({ ref: e }, p), {}, { components: r }))
            : n.createElement(f, c({ ref: e }, p));
        });
      function b(t, e) {
        var r = arguments,
          o = e && e.mdxType;
        if ("string" == typeof t || o) {
          var i = r.length,
            c = new Array(i);
          c[0] = h;
          var a = {};
          for (var s in e) hasOwnProperty.call(e, s) && (a[s] = e[s]);
          (a.originalType = t),
            (a.mdxType = "string" == typeof t ? t : o),
            (c[1] = a);
          for (var u = 2; u < i; u++) c[u] = r[u];
          return n.createElement.apply(null, c);
        }
        return n.createElement.apply(null, r);
      }
      h.displayName = "MDXCreateElement";
    },
    9421: function (t, e, r) {
      r.r(e),
        r.d(e, {
          assets: function () {
            return p;
          },
          contentTitle: function () {
            return s;
          },
          default: function () {
            return b;
          },
          frontMatter: function () {
            return a;
          },
          metadata: function () {
            return u;
          },
          toc: function () {
            return l;
          },
        });
      var n = r(7462),
        o = r(3366),
        i = (r(7294), r(3905)),
        c = ["components"],
        a = { sidebar_position: 4 },
        s = "Contributors",
        u = {
          unversionedId: "contributors",
          id: "contributors",
          title: "Contributors",
          description:
            "This project exists thanks to all the people who contribute. Contribute",
          source: "@site/docs/contributors.mdx",
          sourceDirName: ".",
          slug: "/contributors",
          permalink: "/react-native-echarts-pro-docs/docs/contributors",
          editUrl:
            "https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/contributors.mdx",
          tags: [],
          version: "current",
          sidebarPosition: 4,
          frontMatter: { sidebar_position: 4 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Method",
            permalink:
              "/react-native-echarts-pro-docs/docs/tutorial-basics/method",
          },
          next: {
            title: "License",
            permalink: "/react-native-echarts-pro-docs/docs/license",
          },
        },
        p = {},
        l = [],
        h = { toc: l };
      function b(t) {
        var e = t.components,
          r = (0, o.Z)(t, c);
        return (0, i.kt)(
          "wrapper",
          (0, n.Z)({}, h, r, { components: e, mdxType: "MDXLayout" }),
          (0, i.kt)("h1", { id: "contributors" }, "Contributors"),
          (0, i.kt)(
            "p",
            null,
            "This project exists thanks to all the people who contribute. ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href:
                  "https://github.com/supervons/react-native-echarts-pro/graphs/contributors",
              },
              "Contribute"
            )
          ),
          (0, i.kt)(
            "a",
            { href: "https://github.com/supervons" },
            " ",
            (0, i.kt)("img", {
              style: { width: 100, borderRadius: 50 },
              src: "https://avatars.githubusercontent.com/u/31637849",
            }),
            " "
          ),
          (0, i.kt)(
            "a",
            { href: "https://github.com/ljh257110" },
            " ",
            (0, i.kt)("img", {
              style: { width: 100, borderRadius: 50 },
              src: "https://avatars.githubusercontent.com/u/30766973",
            }),
            " "
          ),
          (0, i.kt)(
            "a",
            { href: "https://github.com/congshengwu" },
            " ",
            (0, i.kt)("img", {
              style: { width: 100, borderRadius: 50 },
              src: "https://avatars.githubusercontent.com/u/26167428",
            }),
            " "
          ),
          (0, i.kt)(
            "a",
            { href: "https://github.com/RengeRenge" },
            " ",
            (0, i.kt)("img", {
              style: { width: 100, borderRadius: 50 },
              src: "https://avatars.githubusercontent.com/u/14158970",
            }),
            " "
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://github.com/supervons" },
              "@supervons"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://github.com/ljh257110" },
              "@ljh257110"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://github.com/congshengwu" },
              "@congshengwu"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              { parentName: "p", href: "https://github.com/RengeRenge" },
              "@RengeRenge"
            )
          )
        );
      }
      b.isMDXComponent = !0;
    },
  },
]);
