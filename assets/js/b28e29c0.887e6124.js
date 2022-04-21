"use strict";
(self.webpackChunkreact_native_echarts_pro_docs =
  self.webpackChunkreact_native_echarts_pro_docs || []).push([
  [395],
  {
    3905: function (e, r, t) {
      t.d(r, {
        Zo: function () {
          return u;
        },
        kt: function () {
          return d;
        },
      });
      var n = t(7294);
      function o(e, r, t) {
        return (
          r in e
            ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[r] = t),
          e
        );
      }
      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function a(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? c(Object(t), !0).forEach(function (r) {
                o(e, r, t[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      function i(e, r) {
        if (null == e) return {};
        var t,
          n,
          o = (function (e, r) {
            if (null == e) return {};
            var t,
              n,
              o = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (t = c[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, r);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (n = 0; n < c.length; n++)
            (t = c[n]),
              r.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var s = n.createContext({}),
        p = function (e) {
          var r = n.useContext(s),
            t = r;
          return e && (t = "function" == typeof e ? e(r) : a(a({}, r), e)), t;
        },
        u = function (e) {
          var r = p(e.components);
          return n.createElement(s.Provider, { value: r }, e.children);
        },
        l = {
          inlineCode: "code",
          wrapper: function (e) {
            var r = e.children;
            return n.createElement(n.Fragment, {}, r);
          },
        },
        f = n.forwardRef(function (e, r) {
          var t = e.components,
            o = e.mdxType,
            c = e.originalType,
            s = e.parentName,
            u = i(e, ["components", "mdxType", "originalType", "parentName"]),
            f = p(t),
            d = o,
            m = f["".concat(s, ".").concat(d)] || f[d] || l[d] || c;
          return t
            ? n.createElement(m, a(a({ ref: r }, u), {}, { components: t }))
            : n.createElement(m, a({ ref: r }, u));
        });
      function d(e, r) {
        var t = arguments,
          o = r && r.mdxType;
        if ("string" == typeof e || o) {
          var c = t.length,
            a = new Array(c);
          a[0] = f;
          var i = {};
          for (var s in r) hasOwnProperty.call(r, s) && (i[s] = r[s]);
          (i.originalType = e),
            (i.mdxType = "string" == typeof e ? e : o),
            (a[1] = i);
          for (var p = 2; p < c; p++) a[p] = t[p];
          return n.createElement.apply(null, a);
        }
        return n.createElement.apply(null, t);
      }
      f.displayName = "MDXCreateElement";
    },
    8853: function (e, r, t) {
      t.r(r),
        t.d(r, {
          assets: function () {
            return u;
          },
          contentTitle: function () {
            return s;
          },
          default: function () {
            return d;
          },
          frontMatter: function () {
            return i;
          },
          metadata: function () {
            return p;
          },
          toc: function () {
            return l;
          },
        });
      var n = t(7462),
        o = t(3366),
        c = (t(7294), t(3905)),
        a = ["components"],
        i = { sidebar_position: 6 },
        s = "Sponsor",
        p = {
          unversionedId: "sponsor",
          id: "sponsor",
          title: "Sponsor",
          description: "You can sponsor us in : opencollective",
          source: "@site/docs/sponsor.md",
          sourceDirName: ".",
          slug: "/sponsor",
          permalink: "/react-native-echarts-pro-docs/docs/sponsor",
          editUrl:
            "https://github.com/supervons/react-native-echarts-pro-website/tree/main/docs/sponsor.md",
          tags: [],
          version: "current",
          sidebarPosition: 6,
          frontMatter: { sidebar_position: 6 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "License",
            permalink: "/react-native-echarts-pro-docs/docs/license",
          },
        },
        u = {},
        l = [],
        f = { toc: l };
      function d(e) {
        var r = e.components,
          t = (0, o.Z)(e, a);
        return (0, c.kt)(
          "wrapper",
          (0, n.Z)({}, f, t, { components: r, mdxType: "MDXLayout" }),
          (0, c.kt)("h1", { id: "sponsor" }, "Sponsor"),
          (0, c.kt)(
            "p",
            null,
            "You can sponsor us in : ",
            (0, c.kt)(
              "a",
              {
                parentName: "p",
                href:
                  "https://opencollective.com/react-native-echarts-pro#category-CONTRIBUTE",
              },
              "opencollective"
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
