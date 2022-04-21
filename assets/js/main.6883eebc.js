/*! For license information please see main.6883eebc.js.LICENSE.txt */
(self.webpackChunkreact_native_echarts_pro_docs =
  self.webpackChunkreact_native_echarts_pro_docs || []).push([
  [179],
  {
    7757: function (e, t, n) {
      e.exports = n(5666);
    },
    8726: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function o(e, t, n) {
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
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      var l = n(7294),
        u = n(5697),
        s = [],
        c = [];
      function f(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function d(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var a = f(e[r]);
            a.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = a.loaded), (t.error = a.error)),
              n.push(a.promise),
              a.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function p(e, t) {
        return l.createElement((n = e) && n.__esModule ? n.default : n, t);
        var n;
      }
      function m(e, t) {
        var f, d;
        if (!t.loading)
          throw new Error("react-loadable requires a `loading` component");
        var m = i(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: p,
              webpack: null,
              modules: null,
            },
            t
          ),
          h = null;
        function g() {
          return h || (h = e(m.loader)), h.promise;
        }
        return (
          s.push(g),
          "function" == typeof m.webpack &&
            c.push(function () {
              if (
                (0, m.webpack)().every(function (e) {
                  return void 0 !== e && void 0 !== n.m[e];
                })
              )
                return g();
            }),
          (d = f = (function (t) {
            function n(n) {
              var r;
              return (
                o(a(a((r = t.call(this, n) || this))), "retry", function () {
                  r.setState({ error: null, loading: !0, timedOut: !1 }),
                    (h = e(m.loader)),
                    r._loadModule();
                }),
                g(),
                (r.state = {
                  error: h.error,
                  pastDelay: !1,
                  timedOut: !1,
                  loading: h.loading,
                  loaded: h.loaded,
                }),
                r
              );
            }
            r(n, t),
              (n.preload = function () {
                return g();
              });
            var i = n.prototype;
            return (
              (i.UNSAFE_componentWillMount = function () {
                this._loadModule();
              }),
              (i.componentDidMount = function () {
                this._mounted = !0;
              }),
              (i._loadModule = function () {
                var e = this;
                if (
                  (this.context.loadable &&
                    Array.isArray(m.modules) &&
                    m.modules.forEach(function (t) {
                      e.context.loadable.report(t);
                    }),
                  h.loading)
                ) {
                  var t = function (t) {
                    e._mounted && e.setState(t);
                  };
                  "number" == typeof m.delay &&
                    (0 === m.delay
                      ? this.setState({ pastDelay: !0 })
                      : (this._delay = setTimeout(function () {
                          t({ pastDelay: !0 });
                        }, m.delay))),
                    "number" == typeof m.timeout &&
                      (this._timeout = setTimeout(function () {
                        t({ timedOut: !0 });
                      }, m.timeout));
                  var n = function () {
                    t({ error: h.error, loaded: h.loaded, loading: h.loading }),
                      e._clearTimeouts();
                  };
                  h.promise
                    .then(function () {
                      return n(), null;
                    })
                    .catch(function (e) {
                      return n(), null;
                    });
                }
              }),
              (i.componentWillUnmount = function () {
                (this._mounted = !1), this._clearTimeouts();
              }),
              (i._clearTimeouts = function () {
                clearTimeout(this._delay), clearTimeout(this._timeout);
              }),
              (i.render = function () {
                return this.state.loading || this.state.error
                  ? l.createElement(m.loading, {
                      isLoading: this.state.loading,
                      pastDelay: this.state.pastDelay,
                      timedOut: this.state.timedOut,
                      error: this.state.error,
                      retry: this.retry,
                    })
                  : this.state.loaded
                  ? m.render(this.state.loaded, this.props)
                  : null;
              }),
              n
            );
          })(l.Component)),
          o(f, "contextTypes", {
            loadable: u.shape({ report: u.func.isRequired }),
          }),
          d
        );
      }
      function h(e) {
        return m(f, e);
      }
      h.Map = function (e) {
        if ("function" != typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return m(d, e);
      };
      var g = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        r(t, e);
        var n = t.prototype;
        return (
          (n.getChildContext = function () {
            return { loadable: { report: this.props.report } };
          }),
          (n.render = function () {
            return l.Children.only(this.props.children);
          }),
          t
        );
      })(l.Component);
      function v(e) {
        for (var t = []; e.length; ) {
          var n = e.pop();
          t.push(n());
        }
        return Promise.all(t).then(function () {
          if (e.length) return v(e);
        });
      }
      o(g, "propTypes", { report: u.func.isRequired }),
        o(g, "childContextTypes", {
          loadable: u.shape({ report: u.func.isRequired }).isRequired,
        }),
        (h.Capture = g),
        (h.preloadAll = function () {
          return new Promise(function (e, t) {
            v(s).then(e, t);
          });
        }),
        (h.preloadReady = function () {
          return new Promise(function (e, t) {
            v(c).then(e, e);
          });
        }),
        (e.exports = h);
    },
    9782: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          title: "react-native-echarts-pro",
          tagline: "Based on Apache ECharts",
          url: "https://supervons.github.io",
          baseUrl: "/react-native-echarts-pro-docs/",
          onBrokenLinks: "throw",
          onBrokenMarkdownLinks: "warn",
          favicon: "img/favicon.ico",
          organizationName: "supervons",
          projectName: "react-native-echarts-pro-docs",
          i18n: {
            defaultLocale: "en",
            locales: ["en", "zh-cn"],
            localeConfigs: {},
          },
          presets: [
            [
              "classic",
              {
                docs: {
                  sidebarPath:
                    "/Users/vons/Primeton/Project/my/github-docs/react-native-echarts-pro-website/sidebars.js",
                  editUrl:
                    "https://github.com/supervons/react-native-echarts-pro-website/tree/main/",
                },
                blog: {
                  showReadingTime: !0,
                  editUrl:
                    "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                },
                theme: {
                  customCss:
                    "/Users/vons/Primeton/Project/my/github-docs/react-native-echarts-pro-website/src/css/custom.css",
                },
              },
            ],
          ],
          themeConfig: {
            navbar: {
              title: "RNE-Pro",
              logo: { alt: "My Site Logo", src: "img/logo.png" },
              items: [
                {
                  type: "localeDropdown",
                  position: "right",
                  dropdownItemsBefore: [],
                  dropdownItemsAfter: [],
                },
                {
                  type: "doc",
                  docId: "intro",
                  position: "left",
                  label: "Tutorial",
                },
                {
                  href: "https://github.com/supervons/react-native-echarts-pro",
                  label: "GitHub",
                  position: "right",
                },
                {
                  href: "https://github.com/supervons",
                  label: "About",
                  position: "right",
                },
              ],
              hideOnScroll: !1,
            },
            footer: {
              style: "dark",
              links: [
                {
                  title: "Docs",
                  items: [{ label: "Tutorial", to: "/docs/intro" }],
                },
                {
                  title: "Community",
                  items: [
                    {
                      label: "ISSUES",
                      href:
                        "https://github.com/supervons/react-native-echarts-pro/issues",
                    },
                  ],
                },
                {
                  title: "More",
                  items: [
                    {
                      label: "CSDN-BLOG",
                      href: "https://blog.csdn.net/qq934235475",
                    },
                  ],
                },
              ],
              copyright: "Copyright \xa9 2022 MIT.",
            },
            prism: {
              theme: {
                plain: { color: "#393A34", backgroundColor: "#f6f8fa" },
                styles: [
                  {
                    types: ["comment", "prolog", "doctype", "cdata"],
                    style: { color: "#999988", fontStyle: "italic" },
                  },
                  { types: ["namespace"], style: { opacity: 0.7 } },
                  {
                    types: ["string", "attr-value"],
                    style: { color: "#e3116c" },
                  },
                  {
                    types: ["punctuation", "operator"],
                    style: { color: "#393A34" },
                  },
                  {
                    types: [
                      "entity",
                      "url",
                      "symbol",
                      "number",
                      "boolean",
                      "variable",
                      "constant",
                      "property",
                      "regex",
                      "inserted",
                    ],
                    style: { color: "#36acaa" },
                  },
                  {
                    types: ["atrule", "keyword", "attr-name", "selector"],
                    style: { color: "#00a4db" },
                  },
                  {
                    types: ["function", "deleted", "tag"],
                    style: { color: "#d73a49" },
                  },
                  { types: ["function-variable"], style: { color: "#6f42c1" } },
                  {
                    types: ["tag", "selector", "keyword"],
                    style: { color: "#00009f" },
                  },
                ],
              },
              darkTheme: {
                plain: { color: "#F8F8F2", backgroundColor: "#282A36" },
                styles: [
                  {
                    types: ["prolog", "constant", "builtin"],
                    style: { color: "rgb(189, 147, 249)" },
                  },
                  {
                    types: ["inserted", "function"],
                    style: { color: "rgb(80, 250, 123)" },
                  },
                  { types: ["deleted"], style: { color: "rgb(255, 85, 85)" } },
                  {
                    types: ["changed"],
                    style: { color: "rgb(255, 184, 108)" },
                  },
                  {
                    types: ["punctuation", "symbol"],
                    style: { color: "rgb(248, 248, 242)" },
                  },
                  {
                    types: ["string", "char", "tag", "selector"],
                    style: { color: "rgb(255, 121, 198)" },
                  },
                  {
                    types: ["keyword", "variable"],
                    style: { color: "rgb(189, 147, 249)", fontStyle: "italic" },
                  },
                  { types: ["comment"], style: { color: "rgb(98, 114, 164)" } },
                  {
                    types: ["attr-name"],
                    style: { color: "rgb(241, 250, 140)" },
                  },
                ],
              },
              additionalLanguages: [],
            },
            colorMode: {
              defaultMode: "light",
              disableSwitch: !1,
              respectPrefersColorScheme: !1,
            },
            docs: { versionPersistence: "localStorage" },
            metadata: [],
            hideableSidebar: !1,
            autoCollapseSidebarCategories: !1,
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
          },
          baseUrlIssueBanner: !0,
          onDuplicateRoutes: "warn",
          staticDirectories: ["static"],
          customFields: {},
          plugins: [],
          themes: [],
          scripts: [],
          stylesheets: [],
          clientModules: [],
          titleDelimiter: "|",
          noIndex: !1,
        });
    },
    9637: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var r = n(7294),
        a = n(7462);
      function o(e, t, n, r, a, o, i) {
        try {
          var l = e[o](i),
            u = l.value;
        } catch (s) {
          return void n(s);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, a);
      }
      var i = n(7757),
        l = n.n(i),
        u = n(8726),
        s = n.n(u);
      function c(e) {
        var t = e.error,
          n = e.retry,
          a = e.pastDelay;
        return t
          ? r.createElement(
              "div",
              {
                style: {
                  textAlign: "center",
                  color: "#fff",
                  backgroundColor: "#fa383e",
                  borderColor: "#fa383e",
                  borderStyle: "solid",
                  borderRadius: "0.25rem",
                  borderWidth: "1px",
                  boxSizing: "border-box",
                  display: "block",
                  padding: "1rem",
                  flex: "0 0 50%",
                  marginLeft: "25%",
                  marginRight: "25%",
                  marginTop: "5rem",
                  maxWidth: "50%",
                  width: "100%",
                },
              },
              r.createElement("p", null, t.message),
              r.createElement(
                "div",
                null,
                r.createElement(
                  "button",
                  { type: "button", onClick: n },
                  "Retry"
                )
              )
            )
          : a
          ? r.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                },
              },
              r.createElement(
                "svg",
                {
                  id: "loader",
                  style: {
                    width: 128,
                    height: 110,
                    position: "absolute",
                    top: "calc(100vh - 64%)",
                  },
                  viewBox: "0 0 45 45",
                  xmlns: "http://www.w3.org/2000/svg",
                  stroke: "#61dafb",
                },
                r.createElement(
                  "g",
                  {
                    fill: "none",
                    fillRule: "evenodd",
                    transform: "translate(1 1)",
                    strokeWidth: "2",
                  },
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "1.5s",
                      dur: "3s",
                      values: "6;22",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-opacity",
                      begin: "1.5s",
                      dur: "3s",
                      values: "1;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-width",
                      begin: "1.5s",
                      dur: "3s",
                      values: "2;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  ),
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "3s",
                      dur: "3s",
                      values: "6;22",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-opacity",
                      begin: "3s",
                      dur: "3s",
                      values: "1;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-width",
                      begin: "3s",
                      dur: "3s",
                      values: "2;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  ),
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "8" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "0s",
                      dur: "1.5s",
                      values: "6;1;2;3;4;5;6",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  )
                )
              )
            )
          : null;
      }
      var f = n(6887),
        d = {
          "01a85c17": [
            function () {
              return Promise.all([n.e(532), n.e(13)]).then(n.bind(n, 497));
            },
            "@theme/BlogTagsListPage",
            497,
          ],
          "043b7896": [
            function () {
              return n.e(438).then(n.t.bind(n, 5455, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-hola-4a9-list.json",
            5455,
          ],
          "0e384e19": [
            function () {
              return n.e(671).then(n.bind(n, 9881));
            },
            "@site/docs/intro.md",
            9881,
          ],
          17896441: [
            function () {
              return Promise.all([n.e(532), n.e(459), n.e(918)]).then(
                n.bind(n, 2179)
              );
            },
            "@theme/DocItem",
            2179,
          ],
          "1be78505": [
            function () {
              return Promise.all([n.e(532), n.e(514)]).then(n.bind(n, 1579));
            },
            "@theme/DocPage",
            1579,
          ],
          "1d519576": [
            function () {
              return n.e(942).then(n.t.bind(n, 3769, 19));
            },
            "/Users/vons/Primeton/Project/my/github-docs/react-native-echarts-pro-website/.docusaurus/docusaurus-plugin-content-docs/default/plugin-route-context-module-100.json",
            3769,
          ],
          "1f391b9e": [
            function () {
              return Promise.all([n.e(532), n.e(459), n.e(85)]).then(
                n.bind(n, 6416)
              );
            },
            "@theme/MDXPage",
            6416,
          ],
          "234af00e": [
            function () {
              return n.e(432).then(n.t.bind(n, 35, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-hola-4a9.json",
            35,
          ],
          "393be207": [
            function () {
              return n.e(414).then(n.bind(n, 3123));
            },
            "@site/src/pages/markdown-page.md",
            3123,
          ],
          "5141c73a": [
            function () {
              return n.e(562).then(n.bind(n, 9421));
            },
            "@site/docs/contributors.mdx",
            9421,
          ],
          "52376b9e": [
            function () {
              return n.e(894).then(n.t.bind(n, 4359, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-f59.json",
            4359,
          ],
          "544a93d6": [
            function () {
              return n.e(824).then(n.t.bind(n, 4469, 19));
            },
            "/Users/vons/Primeton/Project/my/github-docs/react-native-echarts-pro-website/.docusaurus/docusaurus-plugin-content-blog/default/plugin-route-context-module-100.json",
            4469,
          ],
          "572598a7": [
            function () {
              return n.e(189).then(n.t.bind(n, 5324, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-archive-d34.json",
            5324,
          ],
          59362658: [
            function () {
              return n.e(267).then(n.bind(n, 8642));
            },
            "@site/blog/2021-08-01-mdx-blog-post.mdx",
            8642,
          ],
          "5e9f5e1a": [
            function () {
              return Promise.resolve().then(n.bind(n, 9782));
            },
            "@generated/docusaurus.config",
            9782,
          ],
          "6875c492": [
            function () {
              return Promise.all([n.e(532), n.e(459), n.e(610)]).then(
                n.bind(n, 9404)
              );
            },
            "@theme/BlogTagsPostsPage",
            9404,
          ],
          "6bd4c7a4": [
            function () {
              return n.e(555).then(n.bind(n, 7641));
            },
            "@site/docs/tutorial-basics/props.md",
            7641,
          ],
          "6ec41a2e": [
            function () {
              return n.e(458).then(n.t.bind(n, 9496, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-facebook-27c.json",
            9496,
          ],
          "73664a40": [
            function () {
              return n.e(36).then(n.bind(n, 1976));
            },
            "@site/blog/2019-05-29-long-blog-post.md",
            1976,
          ],
          "7661071f": [
            function () {
              return n.e(642).then(n.bind(n, 6911));
            },
            "@site/blog/2021-08-26-welcome/index.md?truncated=true",
            6911,
          ],
          "8084a15a": [
            function () {
              return n.e(269).then(n.t.bind(n, 427, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-docusaurus-467.json",
            427,
          ],
          "814f3328": [
            function () {
              return n.e(535).then(n.t.bind(n, 5641, 19));
            },
            "~blog/default/blog-post-list-prop-default.json",
            5641,
          ],
          "8717b14a": [
            function () {
              return n.e(948).then(n.bind(n, 3352));
            },
            "@site/blog/2019-05-29-long-blog-post.md?truncated=true",
            3352,
          ],
          "8e313565": [
            function () {
              return n.e(676).then(n.t.bind(n, 8110, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-docusaurus-467-list.json",
            8110,
          ],
          "925b3f96": [
            function () {
              return n.e(3).then(n.bind(n, 8856));
            },
            "@site/blog/2019-05-28-first-blog-post.md?truncated=true",
            8856,
          ],
          "935f2afb": [
            function () {
              return n.e(53).then(n.t.bind(n, 1109, 19));
            },
            "~docs/default/version-current-metadata-prop-751.json",
            1109,
          ],
          "9e4087bc": [
            function () {
              return n.e(608).then(n.bind(n, 3012));
            },
            "@theme/BlogArchivePage",
            3012,
          ],
          "9eb98387": [
            function () {
              return n.e(733).then(n.t.bind(n, 5745, 19));
            },
            "/Users/vons/Primeton/Project/my/github-docs/react-native-echarts-pro-website/.docusaurus/docusaurus-plugin-content-pages/default/plugin-route-context-module-100.json",
            5745,
          ],
          a6aa9e1f: [
            function () {
              return Promise.all([n.e(532), n.e(459), n.e(89)]).then(
                n.bind(n, 7329)
              );
            },
            "@theme/BlogListPage",
            7329,
          ],
          ac5280f2: [
            function () {
              return n.e(529).then(n.bind(n, 5687));
            },
            "@site/docs/license.md",
            5687,
          ],
          b28e29c0: [
            function () {
              return n.e(395).then(n.bind(n, 8853));
            },
            "@site/docs/sponsor.md",
            8853,
          ],
          c4f5d8e4: [
            function () {
              return Promise.all([n.e(532), n.e(195)]).then(n.bind(n, 3261));
            },
            "@site/src/pages/index.js",
            3261,
          ],
          c7b8c794: [
            function () {
              return n.e(940).then(n.t.bind(n, 3863, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-hello-bd4.json",
            3863,
          ],
          ccc49370: [
            function () {
              return Promise.all([n.e(532), n.e(459), n.e(103)]).then(
                n.bind(n, 9360)
              );
            },
            "@theme/BlogPostPage",
            9360,
          ],
          d9f32620: [
            function () {
              return n.e(914).then(n.bind(n, 2900));
            },
            "@site/blog/2021-08-26-welcome/index.md",
            2900,
          ],
          e273c56f: [
            function () {
              return n.e(362).then(n.bind(n, 1947));
            },
            "@site/blog/2019-05-28-first-blog-post.md",
            1947,
          ],
          e2b4efc3: [
            function () {
              return n.e(603).then(n.t.bind(n, 1103, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-facebook-27c-list.json",
            1103,
          ],
          e7978525: [
            function () {
              return n.e(998).then(n.bind(n, 7042));
            },
            "@site/docs/tutorial-basics/method.md",
            7042,
          ],
          ef4c7f6d: [
            function () {
              return n.e(699).then(n.t.bind(n, 6200, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-tags-843.json",
            6200,
          ],
          f2dee294: [
            function () {
              return n.e(93).then(n.t.bind(n, 849, 19));
            },
            "~blog/default/react-native-echarts-pro-docs-blog-tags-hello-bd4-list.json",
            849,
          ],
          f4f34a3a: [
            function () {
              return n.e(636).then(n.bind(n, 5145));
            },
            "@site/blog/2021-08-01-mdx-blog-post.mdx?truncated=true",
            5145,
          ],
        },
        p = n(9670),
        m = n(226);
      function h(e, t) {
        if ("*" === e)
          return s()({
            loading: c,
            loader:
              ((i = l().mark(function e() {
                var t;
                return l().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), n.e(75).then(n.bind(n, 4608));
                      case 2:
                        return (
                          (t = e.sent.default),
                          e.abrupt("return", function (e) {
                            return r.createElement(
                              m.z,
                              {
                                value: {
                                  plugin: { name: "native", id: "default" },
                                },
                              },
                              r.createElement(t, e)
                            );
                          })
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              (u = function () {
                var e = this,
                  t = arguments;
                return new Promise(function (n, r) {
                  var a = i.apply(e, t);
                  function l(e) {
                    o(a, n, r, l, u, "next", e);
                  }
                  function u(e) {
                    o(a, n, r, l, u, "throw", e);
                  }
                  l(void 0);
                });
              }),
              function () {
                return u.apply(this, arguments);
              }),
          });
        var i,
          u,
          h = f[e + "-" + t],
          g = [],
          v = [],
          b = {},
          y = (0, p.Z)(h);
        return (
          Object.entries(y).forEach(function (e) {
            var t = e[0],
              n = e[1],
              r = d[n];
            r && ((b[t] = r[0]), g.push(r[1]), v.push(r[2]));
          }),
          s().Map({
            loading: c,
            loader: b,
            modules: g,
            webpack: function () {
              return v;
            },
            render: function (t, n) {
              var o = JSON.parse(JSON.stringify(h));
              Object.keys(t).forEach(function (n) {
                var r = t[n].default;
                if (!r)
                  throw new Error(
                    "The page component at " +
                      e +
                      " doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component."
                  );
                ("object" != typeof r && "function" != typeof r) ||
                  Object.keys(t[n])
                    .filter(function (e) {
                      return "default" !== e;
                    })
                    .forEach(function (e) {
                      r[e] = t[n][e];
                    });
                var a = o,
                  i = n.split(".");
                i.slice(0, -1).forEach(function (e) {
                  a = a[e];
                }),
                  (a[i[i.length - 1]] = r);
              });
              var i = o.component;
              delete o.component;
              var l = o.__routeContextModule;
              return (
                delete o.__routeContextModule,
                r.createElement(
                  m.z,
                  { value: l },
                  r.createElement(i, (0, a.Z)({}, o, n))
                )
              );
            },
          })
        );
      }
      var g = [
        {
          path: "/react-native-echarts-pro-docs/blog",
          component: h("/react-native-echarts-pro-docs/blog", "fb8"),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/archive",
          component: h("/react-native-echarts-pro-docs/blog/archive", "5e2"),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/first-blog-post",
          component: h(
            "/react-native-echarts-pro-docs/blog/first-blog-post",
            "05f"
          ),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/long-blog-post",
          component: h(
            "/react-native-echarts-pro-docs/blog/long-blog-post",
            "8f1"
          ),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/mdx-blog-post",
          component: h(
            "/react-native-echarts-pro-docs/blog/mdx-blog-post",
            "afb"
          ),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/tags",
          component: h("/react-native-echarts-pro-docs/blog/tags", "46c"),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/tags/docusaurus",
          component: h(
            "/react-native-echarts-pro-docs/blog/tags/docusaurus",
            "817"
          ),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/tags/facebook",
          component: h(
            "/react-native-echarts-pro-docs/blog/tags/facebook",
            "81b"
          ),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/tags/hello",
          component: h("/react-native-echarts-pro-docs/blog/tags/hello", "947"),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/tags/hola",
          component: h("/react-native-echarts-pro-docs/blog/tags/hola", "708"),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/blog/welcome",
          component: h("/react-native-echarts-pro-docs/blog/welcome", "6fe"),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/markdown-page",
          component: h("/react-native-echarts-pro-docs/markdown-page", "086"),
          exact: !0,
        },
        {
          path: "/react-native-echarts-pro-docs/docs",
          component: h("/react-native-echarts-pro-docs/docs", "98d"),
          routes: [
            {
              path: "/react-native-echarts-pro-docs/docs/contributors",
              component: h(
                "/react-native-echarts-pro-docs/docs/contributors",
                "fad"
              ),
              exact: !0,
              sidebar: "tutorialSidebar",
            },
            {
              path: "/react-native-echarts-pro-docs/docs/intro",
              component: h("/react-native-echarts-pro-docs/docs/intro", "b08"),
              exact: !0,
              sidebar: "tutorialSidebar",
            },
            {
              path: "/react-native-echarts-pro-docs/docs/license",
              component: h(
                "/react-native-echarts-pro-docs/docs/license",
                "6df"
              ),
              exact: !0,
              sidebar: "tutorialSidebar",
            },
            {
              path: "/react-native-echarts-pro-docs/docs/sponsor",
              component: h(
                "/react-native-echarts-pro-docs/docs/sponsor",
                "b57"
              ),
              exact: !0,
              sidebar: "tutorialSidebar",
            },
            {
              path:
                "/react-native-echarts-pro-docs/docs/tutorial-basics/method",
              component: h(
                "/react-native-echarts-pro-docs/docs/tutorial-basics/method",
                "fa0"
              ),
              exact: !0,
              sidebar: "tutorialSidebar",
            },
            {
              path: "/react-native-echarts-pro-docs/docs/tutorial-basics/props",
              component: h(
                "/react-native-echarts-pro-docs/docs/tutorial-basics/props",
                "f41"
              ),
              exact: !0,
              sidebar: "tutorialSidebar",
            },
          ],
        },
        {
          path: "/react-native-echarts-pro-docs/",
          component: h("/react-native-echarts-pro-docs/", "660"),
          exact: !0,
        },
        { path: "*", component: h("*") },
      ];
    },
    8934: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return a;
        },
        t: function () {
          return o;
        },
      });
      var r = n(7294),
        a = r.createContext(!1);
      function o(e) {
        var t = e.children,
          n = (0, r.useState)(!1),
          o = n[0],
          i = n[1];
        return (
          (0, r.useEffect)(function () {
            i(!0);
          }, []),
          r.createElement(a.Provider, { value: o }, t)
        );
      }
    },
    3608: function (e, t, n) {
      "use strict";
      var r = n(7294),
        a = n(3935),
        o = n(3727),
        i = n(405),
        l = n(9637),
        u = n(412),
        s = n(8790),
        c = n(8934),
        f = n(8940),
        d = n(4578),
        p = n(6775),
        m = n(4865),
        h = n.n(m),
        g = [n(2497), n(2448), n(6743), n(2295)];
      function v(e, t) {
        g.forEach(function (n) {
          var r,
            a,
            o =
              null != (r = null == n || null == (a = n.default) ? void 0 : a[e])
                ? r
                : n[e];
          null == o || o.apply(void 0, t);
        });
      }
      var b = {
          onRouteUpdate: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            v("onRouteUpdate", t);
          },
          onRouteUpdateDelayed: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            v("onRouteUpdateDelayed", t);
          },
        },
        y = b;
      function w(e, t) {
        var n = (0, s.f)(e, t);
        return Promise.all(
          n.map(function (e) {
            var t;
            return null == (t = e.route.component) || null == t.preload
              ? void 0
              : t.preload();
          })
        );
      }
      var k = {};
      function E(e) {
        if (k[e.pathname])
          return Object.assign({}, e, { pathname: k[e.pathname] });
        var t = e.pathname.trim().replace(/\/index\.html$/, "") || "/";
        return (k[e.pathname] = t), Object.assign({}, e, { pathname: t });
      }
      h().configure({ showSpinner: !1 });
      var S = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).previousLocation = null),
              (n.progressBarTimeout = null),
              (n.state = { nextRouteHasLoaded: !0 }),
              n
            );
          }
          (0, d.Z)(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e, t) {
              var n = this,
                r = e.location !== this.props.location,
                a = this.props,
                o = a.routes,
                i = a.delay;
              if (r) {
                var l = E(e.location);
                return (
                  this.startProgressBar(i),
                  (this.previousLocation = E(this.props.location)),
                  this.setState({ nextRouteHasLoaded: !1 }),
                  w(o, l.pathname)
                    .then(function () {
                      y.onRouteUpdate({
                        previousLocation: n.previousLocation,
                        location: l,
                      }),
                        (n.previousLocation = null),
                        n.setState(
                          { nextRouteHasLoaded: !0 },
                          n.stopProgressBar
                        );
                      var e = l.hash;
                      if (e) {
                        var t = decodeURIComponent(e.substring(1)),
                          r = document.getElementById(t);
                        r && r.scrollIntoView();
                      } else window.scrollTo(0, 0);
                    })
                    .catch(function (e) {
                      return console.warn(e);
                    }),
                  !1
                );
              }
              return !!t.nextRouteHasLoaded;
            }),
            (n.clearProgressBarTimeout = function () {
              this.progressBarTimeout &&
                (clearTimeout(this.progressBarTimeout),
                (this.progressBarTimeout = null));
            }),
            (n.startProgressBar = function (e) {
              var t = this;
              this.clearProgressBarTimeout(),
                (this.progressBarTimeout = setTimeout(function () {
                  y.onRouteUpdateDelayed({ location: E(t.props.location) }),
                    h().start();
                }, e));
            }),
            (n.stopProgressBar = function () {
              this.clearProgressBarTimeout(), h().done();
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = e.location;
              return r.createElement(p.AW, {
                location: E(n),
                render: function () {
                  return t;
                },
              });
            }),
            t
          );
        })(r.Component),
        x = (0, p.EN)(S),
        C = n(5742),
        _ = n(2263),
        T = "docusaurus-base-url-issue-banner-container",
        L = "docusaurus-base-url-issue-banner-suggestion-container",
        P = "__DOCUSAURUS_INSERT_BASEURL_BANNER";
      function A(e) {
        return (
          "\nwindow['" +
          P +
          "'] = true;\n\ndocument.addEventListener('DOMContentLoaded', maybeInsertBanner);\n\nfunction maybeInsertBanner() {\n  var shouldInsert = window['" +
          P +
          "'];\n  shouldInsert && insertBanner();\n}\n\nfunction insertBanner() {\n  var bannerContainer = document.getElementById('" +
          T +
          "');\n  if (!bannerContainer) {\n    return;\n  }\n  var bannerHtml = " +
          JSON.stringify(
            (function (e) {
              return (
                '\n<div id="docusaurus-base-url-issue-banner" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseurl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">' +
                e +
                "</span> " +
                ("/" === e ? " (default value)" : "") +
                '</p>\n   <p>We suggest trying baseUrl = <span id="' +
                L +
                '" style="font-weight: bold; color: green;"></span></p>\n</div>\n'
              );
            })(e)
          ).replace(/</g, "\\<") +
          ";\n  bannerContainer.innerHTML = bannerHtml;\n  var suggestionContainer = document.getElementById('" +
          L +
          "');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n"
        );
      }
      function O() {
        var e = (0, _.Z)().siteConfig.baseUrl;
        return (
          (0, r.useLayoutEffect)(function () {
            window[P] = !1;
          }, []),
          r.createElement(
            r.Fragment,
            null,
            !u.Z.canUseDOM &&
              r.createElement(C.Z, null, r.createElement("script", null, A(e))),
            r.createElement("div", { id: T })
          )
        );
      }
      function N() {
        var e = (0, _.Z)().siteConfig,
          t = e.baseUrl,
          n = e.baseUrlIssueBanner,
          a = (0, p.TH)().pathname;
        return n && a === t ? r.createElement(O, null) : null;
      }
      var R = n(4996);
      function I() {
        var e = (0, _.Z)(),
          t = e.siteConfig,
          n = t.favicon,
          a = t.tagline,
          o = t.title,
          i = e.i18n,
          l = i.currentLocale,
          u = i.localeConfigs,
          s = (0, R.Z)(n),
          c = u[l],
          f = c.htmlLang,
          d = c.direction;
        return r.createElement(
          C.Z,
          { defaultTitle: o + (a ? " \xb7 " + a : "") },
          r.createElement("html", { lang: f, dir: d }),
          n && r.createElement("link", { rel: "icon", href: s })
        );
      }
      function D(e) {
        var t = e.children;
        return r.createElement(r.Fragment, null, t);
      }
      var M = n(7462),
        j = n(4739),
        F = n(5979);
      function B() {
        var e = (0, _.Z)().i18n,
          t = e.defaultLocale,
          n = e.localeConfigs,
          a = (0, F.l5)();
        return r.createElement(
          C.Z,
          null,
          Object.entries(n).map(function (e) {
            var t = e[0],
              n = e[1].htmlLang;
            return r.createElement("link", {
              key: t,
              rel: "alternate",
              href: a.createUrl({ locale: t, fullyQualified: !0 }),
              hrefLang: n,
            });
          }),
          r.createElement("link", {
            rel: "alternate",
            href: a.createUrl({ locale: t, fullyQualified: !0 }),
            hrefLang: "x-default",
          })
        );
      }
      function U(e) {
        var t = e.permalink,
          n = (0, _.Z)().siteConfig.url,
          a = (function () {
            var e = (0, _.Z)().siteConfig.url,
              t = (0, p.TH)().pathname;
            return e + (0, R.Z)(t);
          })(),
          o = t ? "" + n + t : a;
        return r.createElement(
          C.Z,
          null,
          r.createElement("meta", { property: "og:url", content: o }),
          r.createElement("link", { rel: "canonical", href: o })
        );
      }
      function z() {
        var e = (0, _.Z)().i18n.currentLocale,
          t = (0, F.LU)(),
          n = t.metadata,
          a = t.image;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            C.Z,
            null,
            r.createElement("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            r.createElement("body", { className: F.hC })
          ),
          a && r.createElement(F.d, { image: a }),
          r.createElement(U, null),
          r.createElement(B, null),
          r.createElement(j.Z, { tag: F.HX, locale: e }),
          r.createElement(
            C.Z,
            null,
            n.map(function (e, t) {
              return r.createElement(
                "meta",
                (0, M.Z)({ key: "metadata_" + t }, e)
              );
            })
          )
        );
      }
      var Z = n(780),
        $ = n(4953);
      function q() {
        return r.createElement(
          Z.Z,
          { fallback: $.Z },
          r.createElement(
            f.M,
            null,
            r.createElement(
              c.t,
              null,
              r.createElement(
                D,
                null,
                r.createElement(I, null),
                r.createElement(z, null),
                r.createElement(N, null),
                r.createElement(x, { routes: l.Z, delay: 1e3 }, (0, s.H)(l.Z))
              )
            )
          )
        );
      }
      var G = n(6887);
      var H = (function (e) {
          if ("undefined" == typeof document) return !1;
          var t = document.createElement("link");
          try {
            if (t.relList && "function" == typeof t.relList.supports)
              return t.relList.supports(e);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (e) {
              return new Promise(function (t, n) {
                var r, a;
                if ("undefined" != typeof document) {
                  var o = document.createElement("link");
                  o.setAttribute("rel", "prefetch"),
                    o.setAttribute("href", e),
                    (o.onload = t),
                    (o.onerror = n);
                  var i =
                    null != (r = document.getElementsByTagName("head")[0])
                      ? r
                      : null == (a = document.getElementsByName("script")[0])
                      ? void 0
                      : a.parentNode;
                  null == i || i.appendChild(o);
                } else n();
              });
            }
          : function (e) {
              return new Promise(function (t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e, !0),
                  (r.withCredentials = !0),
                  (r.onload = function () {
                    200 === r.status ? t() : n();
                  }),
                  r.send(null);
              });
            },
        V = {};
      var W = n(9670),
        Y = {},
        K = {},
        Q = function () {
          var e, t;
          return (
            (null == (e = navigator.connection)
              ? void 0
              : e.effectiveType.includes("2g")) &&
            (null == (t = navigator.connection) ? void 0 : t.saveData)
          );
        },
        X = {
          prefetch: function (e) {
            return (
              !!(function (e) {
                return !Q() && !K[e] && !Y[e];
              })(e) &&
              ((Y[e] = !0),
              (0, s.f)(l.Z, e)
                .flatMap(function (e) {
                  return (
                    (t = e.route.path),
                    Object.entries(G)
                      .filter(function (e) {
                        return e[0].replace(/-[^-]+$/, "") === t;
                      })
                      .flatMap(function (e) {
                        var t = e[1];
                        return Object.values((0, W.Z)(t));
                      })
                  );
                  var t;
                })
                .forEach(function (e) {
                  var t,
                    r = n.gca(e);
                  r &&
                    !/undefined/.test(r) &&
                    ((t = r),
                    new Promise(function (e) {
                      V[t]
                        ? e()
                        : H(t)
                            .then(function () {
                              e(), (V[t] = !0);
                            })
                            .catch(function () {});
                    }));
                }),
              !0)
            );
          },
          preload: function (e) {
            return (
              !!(function (e) {
                return !Q() && !K[e];
              })(e) && ((K[e] = !0), w(l.Z, e), !0)
            );
          },
        };
      if (u.Z.canUseDOM) {
        window.docusaurus = X;
        var J = a.hydrate;
        w(l.Z, window.location.pathname).then(function () {
          J(
            r.createElement(
              i.B6,
              null,
              r.createElement(o.VK, null, r.createElement(q, null))
            ),
            document.getElementById("__docusaurus")
          );
        });
      }
    },
    8940: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
        M: function () {
          return f;
        },
      });
      var r = n(7294),
        a = n(9782),
        o = JSON.parse(
          '{"docusaurus-plugin-content-docs":{"default":{"path":"/react-native-echarts-pro-docs/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/react-native-echarts-pro-docs/docs","mainDocId":"intro","docs":[{"id":"contributors","path":"/react-native-echarts-pro-docs/docs/contributors","sidebar":"tutorialSidebar"},{"id":"intro","path":"/react-native-echarts-pro-docs/docs/intro","sidebar":"tutorialSidebar"},{"id":"license","path":"/react-native-echarts-pro-docs/docs/license","sidebar":"tutorialSidebar"},{"id":"sponsor","path":"/react-native-echarts-pro-docs/docs/sponsor","sidebar":"tutorialSidebar"},{"id":"tutorial-basics/method","path":"/react-native-echarts-pro-docs/docs/tutorial-basics/method","sidebar":"tutorialSidebar"},{"id":"tutorial-basics/props","path":"/react-native-echarts-pro-docs/docs/tutorial-basics/props","sidebar":"tutorialSidebar"}],"sidebars":{"tutorialSidebar":{"link":{"path":"/react-native-echarts-pro-docs/docs/intro","label":"intro"}}}}],"breadcrumbs":true}}}'
        ),
        i = JSON.parse(
          '{"defaultLocale":"en","locales":["en","zh-cn"],"currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en"},"zh-cn":{"label":"\u4e2d\u6587\uff08\u4e2d\u56fd\uff09","direction":"ltr","htmlLang":"zh-cn"}}}'
        ),
        l = n(7529),
        u = JSON.parse(
          '{"docusaurusVersion":"2.0.0-beta.18","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.0.0-beta.18"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.0.0-beta.18"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.0.0-beta.18"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.0.0-beta.18"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.0.0-beta.18"}}}'
        ),
        s = {
          siteConfig: a.default,
          siteMetadata: u,
          globalData: o,
          i18n: i,
          codeTranslations: l,
        },
        c = r.createContext(s);
      function f(e) {
        var t = e.children;
        return r.createElement(c.Provider, { value: s }, t);
      }
    },
    780: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(4578),
        a = n(7294),
        o = n(412),
        i = n(4953),
        l = (function (e) {
          function t(t) {
            var n;
            return ((n = e.call(this, t) || this).state = { error: null }), n;
          }
          (0, r.Z)(t, e);
          var n = t.prototype;
          return (
            (n.componentDidCatch = function (e) {
              o.Z.canUseDOM && this.setState({ error: e });
            }),
            (n.render = function () {
              var e,
                t = this,
                n = this.props.children,
                r = this.state.error;
              return r
                ? (null != (e = this.props.fallback) ? e : i.Z)({
                    error: r,
                    tryAgain: function () {
                      return t.setState({ error: null });
                    },
                  })
                : null != n
                ? n
                : null;
            }),
            t
          );
        })(a.Component);
    },
    412: function (e, t) {
      "use strict";
      var n = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        r = {
          canUseDOM: n,
          canUseEventListeners:
            n && !(!window.addEventListener && !window.attachEvent),
          canUseIntersectionObserver: n && "IntersectionObserver" in window,
          canUseViewport: n && !!window.screen,
        };
      t.Z = r;
    },
    5742: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = n(405);
      function o(e) {
        return r.createElement(a.ql, e);
      }
    },
    9960: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(3727),
        l = n(2263),
        u = n(3919),
        s = n(412),
        c = o.createContext({ collectLink: function () {} });
      var f = n(4996),
        d = n(8780),
        p = [
          "isNavLink",
          "to",
          "href",
          "activeClassName",
          "isActive",
          "data-noBrokenLinkCheck",
          "autoAddBaseUrl",
        ];
      function m(e, t) {
        var n,
          m,
          h = e.isNavLink,
          g = e.to,
          v = e.href,
          b = e.activeClassName,
          y = e.isActive,
          w = e["data-noBrokenLinkCheck"],
          k = e.autoAddBaseUrl,
          E = void 0 === k || k,
          S = (0, a.Z)(e, p),
          x = (0, l.Z)().siteConfig,
          C = x.trailingSlash,
          _ = x.baseUrl,
          T = (0, f.C)().withBaseUrl,
          L = (0, o.useContext)(c),
          P = (0, o.useRef)(null);
        (0, o.useImperativeHandle)(t, function () {
          return P.current;
        });
        var A = g || v;
        var O,
          N = (0, u.Z)(A),
          R = null == A ? void 0 : A.replace("pathname://", ""),
          I =
            void 0 !== R
              ? ((O = R),
                E &&
                (function (e) {
                  return e.startsWith("/");
                })(O)
                  ? T(O)
                  : O)
              : void 0;
        I &&
          N &&
          (I = (0, d.applyTrailingSlash)(I, { trailingSlash: C, baseUrl: _ }));
        var D = (0, o.useRef)(!1),
          M = h ? i.OL : i.rU,
          j = s.Z.canUseIntersectionObserver,
          F = (0, o.useRef)();
        (0, o.useEffect)(
          function () {
            return (
              !j && N && null != I && window.docusaurus.prefetch(I),
              function () {
                j && F.current && F.current.disconnect();
              }
            );
          },
          [F, I, j, N]
        );
        var B = null != (n = null == (m = I) ? void 0 : m.startsWith("#")) && n,
          U = !I || !N || B;
        return (
          I && N && !B && !w && L.collectLink(I),
          U
            ? o.createElement(
                "a",
                (0, r.Z)(
                  { ref: P, href: I },
                  A && !N && { target: "_blank", rel: "noopener noreferrer" },
                  S
                )
              )
            : o.createElement(
                M,
                (0, r.Z)(
                  {},
                  S,
                  {
                    onMouseEnter: function () {
                      D.current ||
                        null == I ||
                        (window.docusaurus.preload(I), (D.current = !0));
                    },
                    innerRef: function (e) {
                      var t, n;
                      (P.current = e),
                        j &&
                          e &&
                          N &&
                          ((t = e),
                          (n = function () {
                            null != I && window.docusaurus.prefetch(I);
                          }),
                          (F.current = new window.IntersectionObserver(
                            function (e) {
                              e.forEach(function (e) {
                                t === e.target &&
                                  (e.isIntersecting ||
                                    e.intersectionRatio > 0) &&
                                  (F.current.unobserve(t),
                                  F.current.disconnect(),
                                  n());
                              });
                            }
                          )),
                          F.current.observe(t));
                    },
                    to: I,
                  },
                  h && { isActive: y, activeClassName: b }
                )
              )
        );
      }
      var h = o.forwardRef(m);
    },
    1875: function (e, t) {
      "use strict";
      t.Z = function () {
        return null;
      };
    },
    5999: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
        I: function () {
          return s;
        },
      });
      var r = n(7294),
        a = /\{\w+\}/g,
        o = "{}";
      function i(e, t) {
        var n = [],
          i = e.replace(a, function (e) {
            var a = e.substring(1, e.length - 1),
              i = null == t ? void 0 : t[a];
            if (void 0 !== i) {
              var l = (0, r.isValidElement)(i) ? i : String(i);
              return n.push(l), o;
            }
            return e;
          });
        return 0 === n.length
          ? e
          : n.every(function (e) {
              return "string" == typeof e;
            })
          ? i.split(o).reduce(function (e, t, r) {
              var a;
              return e.concat(t).concat(null != (a = n[r]) ? a : "");
            }, "")
          : i.split(o).reduce(function (e, t, a) {
              return [].concat(e, [
                r.createElement(r.Fragment, { key: a }, t, n[a]),
              ]);
            }, []);
      }
      var l = n(7529);
      function u(e) {
        var t,
          n,
          r = e.id,
          a = e.message;
        if (void 0 === r && void 0 === a)
          throw new Error(
            "Docusaurus translation declarations must have at least a translation id or a default translation message"
          );
        return null != (t = null != (n = l[null != r ? r : a]) ? n : a) ? t : r;
      }
      function s(e, t) {
        return i(u({ message: e.message, id: e.id }), t);
      }
      function c(e) {
        var t = e.children,
          n = e.id,
          a = e.values;
        if (t && "string" != typeof t)
          throw (
            (console.warn("Illegal <Translate> children", t),
            new Error(
              "The Docusaurus <Translate> component only accept simple string values"
            ))
          );
        var o = u({ message: t, id: n });
        return r.createElement(r.Fragment, null, i(o, a));
      }
    },
    9935: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return r;
        },
      });
      var r = "default";
    },
    3919: function (e, t, n) {
      "use strict";
      function r(e) {
        return !0 === /^(?:\w*:|\/\/)/.test(e);
      }
      function a(e) {
        return void 0 !== e && !r(e);
      }
      n.d(t, {
        Z: function () {
          return a;
        },
        b: function () {
          return r;
        },
      });
    },
    8143: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          Redirect: function () {
            return r.l_;
          },
          matchPath: function () {
            return r.LX;
          },
          useHistory: function () {
            return r.k6;
          },
          useLocation: function () {
            return r.TH;
          },
        });
      var r = n(6775);
    },
    4996: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return o;
        },
        Z: function () {
          return i;
        },
      });
      var r = n(2263),
        a = n(3919);
      function o() {
        var e = (0, r.Z)().siteConfig,
          t = e.baseUrl,
          n = e.url;
        return {
          withBaseUrl: function (e, r) {
            return (function (e, t, n, r) {
              var o = void 0 === r ? {} : r,
                i = o.forcePrependBaseUrl,
                l = void 0 !== i && i,
                u = o.absolute,
                s = void 0 !== u && u;
              if (!n) return n;
              if (n.startsWith("#")) return n;
              if ((0, a.b)(n)) return n;
              if (l) return t + n.replace(/^\//, "");
              if (n === t.replace(/\/$/, "")) return t;
              var c = n.startsWith(t) ? n : t + n.replace(/^\//, "");
              return s ? e + c : c;
            })(n, t, e, r);
          },
        };
      }
      function i(e, t) {
        return void 0 === t && (t = {}), (0, o().withBaseUrl)(e, t);
      }
    },
    2263: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = n(8940);
      function o() {
        return (0, r.useContext)(a._);
      }
    },
    8084: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o;
          },
          useAllPluginInstancesData: function () {
            return i;
          },
          usePluginData: function () {
            return l;
          },
        });
      var r = n(2263),
        a = n(9935);
      function o() {
        var e = (0, r.Z)().globalData;
        if (!e) throw new Error("Docusaurus global data not found.");
        return e;
      }
      function i(e) {
        var t = o()[e];
        if (!t)
          throw new Error(
            'Docusaurus plugin global data not found for "' + e + '" plugin.'
          );
        return t;
      }
      function l(e, t) {
        void 0 === t && (t = a.m);
        var n = i(e)[t];
        if (!n)
          throw new Error(
            'Docusaurus plugin global data not found for "' +
              e +
              '" plugin with id "' +
              t +
              '".'
          );
        return n;
      }
    },
    2389: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = n(8934);
      function o() {
        return (0, r.useContext)(a._);
      }
    },
    9670: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r(e) {
        var t = {};
        return (
          (function e(n, r) {
            Object.entries(n).forEach(function (n) {
              var a,
                o = n[0],
                i = n[1],
                l = r ? r + "." + o : o;
              "object" == typeof (a = i) && a && Object.keys(a).length > 0
                ? e(i, l)
                : (t[l] = i);
            });
          })(e),
          t
        );
      }
    },
    226: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return a;
        },
        z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = r.createContext(null);
      function o(e) {
        var t = e.children,
          n = e.value,
          o = r.useContext(a),
          i = (0, r.useMemo)(
            function () {
              return (function (e) {
                var t = e.parent,
                  n = e.value;
                if (!t) {
                  if (!n)
                    throw new Error(
                      "Unexpected: no Docusaurus route context found"
                    );
                  if (!("plugin" in n))
                    throw new Error(
                      "Unexpected: Docusaurus topmost route context has no `plugin` attribute"
                    );
                  return n;
                }
                var r = Object.assign({}, t.data, null == n ? void 0 : n.data);
                return { plugin: t.plugin, data: r };
              })({ parent: o, value: n });
            },
            [o, n]
          );
        return r.createElement(a.Provider, { value: i }, t);
      }
    },
    4953: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(7294),
        a = n(2600),
        o = n(780),
        i = n(5742);
      function l(e) {
        var t = e.error,
          n = e.tryAgain;
        return r.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              width: "100%",
              fontSize: "20px",
            },
          },
          r.createElement("h1", null, "This page crashed."),
          r.createElement("p", null, t.message),
          r.createElement("button", { type: "button", onClick: n }, "Try again")
        );
      }
      function u(e) {
        var t = e.error,
          n = e.tryAgain;
        return r.createElement(
          o.Z,
          {
            fallback: function () {
              return r.createElement(l, { error: t, tryAgain: n });
            },
          },
          r.createElement(
            i.Z,
            null,
            r.createElement("title", null, "Page Error")
          ),
          r.createElement(
            a.Z,
            null,
            r.createElement(l, { error: t, tryAgain: n })
          )
        );
      }
    },
    8408: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDocVersionSuggestions = t.getActiveDocContext = t.getActiveVersion = t.getLatestVersion = t.getActivePlugin = void 0);
      var r = n(8143);
      t.getActivePlugin = function (e, t, n) {
        void 0 === n && (n = {});
        var a = Object.entries(e)
            .sort(function (e, t) {
              return t[1].path.localeCompare(e[1].path);
            })
            .find(function (e) {
              var n = e[1];
              return !!(0,
              r.matchPath)(t, { path: n.path, exact: !1, strict: !1 });
            }),
          o = a ? { pluginId: a[0], pluginData: a[1] } : void 0;
        if (!o && n.failfast)
          throw new Error(
            "Can't find active docs plugin for \"" +
              t +
              '" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ' +
              Object.values(e)
                .map(function (e) {
                  return e.path;
                })
                .join(", ")
          );
        return o;
      };
      t.getLatestVersion = function (e) {
        return e.versions.find(function (e) {
          return e.isLast;
        });
      };
      t.getActiveVersion = function (e, n) {
        var a = (0, t.getLatestVersion)(e);
        return []
          .concat(
            e.versions.filter(function (e) {
              return e !== a;
            }),
            [a]
          )
          .find(function (e) {
            return !!(0,
            r.matchPath)(n, { path: e.path, exact: !1, strict: !1 });
          });
      };
      t.getActiveDocContext = function (e, n) {
        var a,
          o,
          i = (0, t.getActiveVersion)(e, n),
          l =
            null == i
              ? void 0
              : i.docs.find(function (e) {
                  return !!(0,
                  r.matchPath)(n, { path: e.path, exact: !0, strict: !1 });
                });
        return {
          activeVersion: i,
          activeDoc: l,
          alternateDocVersions: l
            ? ((a = l.id),
              (o = {}),
              e.versions.forEach(function (e) {
                e.docs.forEach(function (t) {
                  t.id === a && (o[e.name] = t);
                });
              }),
              o)
            : {},
        };
      };
      t.getDocVersionSuggestions = function (e, n) {
        var r = (0, t.getLatestVersion)(e),
          a = (0, t.getActiveDocContext)(e, n);
        return {
          latestDocSuggestion:
            null == a ? void 0 : a.alternateDocVersions[r.name],
          latestVersionSuggestion: r,
        };
      };
    },
    5551: function (e, t, n) {
      "use strict";
      t.Jo = t.Iw = t.zu = t.yW = t.gB = t.gA = t.zh = t._r = void 0;
      var r = n(655),
        a = n(8143),
        o = r.__importStar(n(8084)),
        i = n(8408),
        l = {};
      t._r = function () {
        var e;
        return null != (e = (0, o.default)()["docusaurus-plugin-content-docs"])
          ? e
          : l;
      };
      t.zh = function (e) {
        return (0, o.usePluginData)("docusaurus-plugin-content-docs", e);
      };
      t.gA = function (e) {
        void 0 === e && (e = {});
        var n = (0, t._r)(),
          r = (0, a.useLocation)().pathname;
        return (0, i.getActivePlugin)(n, r, e);
      };
      t.gB = function (e) {
        return (0, t.zh)(e).versions;
      };
      t.yW = function (e) {
        var n = (0, t.zh)(e);
        return (0, i.getLatestVersion)(n);
      };
      t.zu = function (e) {
        var n = (0, t.zh)(e),
          r = (0, a.useLocation)().pathname;
        return (0, i.getActiveVersion)(n, r);
      };
      t.Iw = function (e) {
        var n = (0, t.zh)(e),
          r = (0, a.useLocation)().pathname;
        return (0, i.getActiveDocContext)(n, r);
      };
      t.Jo = function (e) {
        var n = (0, t.zh)(e),
          r = (0, a.useLocation)().pathname;
        return (0, i.getDocVersionSuggestions)(n, r);
      };
    },
    541: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = "iconExternalLink_I5OW";
      function o(e) {
        var t = e.width,
          n = void 0 === t ? 13.5 : t,
          o = e.height,
          i = void 0 === o ? 13.5 : o;
        return r.createElement(
          "svg",
          {
            width: n,
            height: i,
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: a,
          },
          r.createElement("path", {
            fill: "currentColor",
            d:
              "M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z",
          })
        );
      }
    },
    2600: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return we;
        },
      });
      var r = n(7294),
        a = n(6010),
        o = n(780),
        i = n(6775),
        l = n(5999),
        u = n(5979),
        s = "skipToContent_ZgBM";
      function c(e) {
        e.setAttribute("tabindex", "-1"),
          e.focus(),
          e.removeAttribute("tabindex");
      }
      function f() {
        var e = (0, r.useRef)(null),
          t = (0, i.k6)().action;
        return (
          (0, u.SL)(function (n) {
            var r = n.location;
            e.current && !r.hash && "PUSH" === t && c(e.current);
          }),
          r.createElement(
            "div",
            { ref: e, role: "region" },
            r.createElement(
              "a",
              {
                href: "#",
                className: s,
                onClick: function (e) {
                  e.preventDefault();
                  var t =
                    document.querySelector("main:first-of-type") ||
                    document.querySelector(".main-wrapper");
                  t && c(t);
                },
              },
              r.createElement(
                l.Z,
                {
                  id: "theme.common.skipToMainContent",
                  description:
                    "The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation",
                },
                "Skip to main content"
              )
            )
          )
        );
      }
      var d = n(7462),
        p = n(3366),
        m = ["width", "height", "color", "strokeWidth", "className"];
      function h(e) {
        var t = e.width,
          n = void 0 === t ? 21 : t,
          a = e.height,
          o = void 0 === a ? 21 : a,
          i = e.color,
          l = void 0 === i ? "currentColor" : i,
          u = e.strokeWidth,
          s = void 0 === u ? 1.2 : u,
          c = (e.className, (0, p.Z)(e, m));
        return r.createElement(
          "svg",
          (0, d.Z)({ viewBox: "0 0 15 15", width: n, height: o }, c),
          r.createElement(
            "g",
            { stroke: l, strokeWidth: s },
            r.createElement("path", {
              d: "M.75.75l13.5 13.5M14.25.75L.75 14.25",
            })
          )
        );
      }
      var g = "announcementBar_IbjG",
        v = "announcementBarPlaceholder_NC_W",
        b = "announcementBarClose_FG1z",
        y = "announcementBarContent_KsVm";
      function w() {
        var e = (0, u.nT)(),
          t = e.isActive,
          n = e.close,
          o = (0, u.LU)().announcementBar;
        if (!t) return null;
        var i = o.content,
          s = o.backgroundColor,
          c = o.textColor,
          f = o.isCloseable;
        return r.createElement(
          "div",
          {
            className: g,
            style: { backgroundColor: s, color: c },
            role: "banner",
          },
          f && r.createElement("div", { className: v }),
          r.createElement("div", {
            className: y,
            dangerouslySetInnerHTML: { __html: i },
          }),
          f
            ? r.createElement(
                "button",
                {
                  type: "button",
                  className: (0, a.Z)("clean-btn close", b),
                  onClick: n,
                  "aria-label": (0, l.I)({
                    id: "theme.AnnouncementBar.closeButtonAriaLabel",
                    message: "Close",
                    description:
                      "The ARIA label for close button of announcement bar",
                  }),
                },
                r.createElement(h, { width: 14, height: 14, strokeWidth: 3.1 })
              )
            : null
        );
      }
      function k(e) {
        var t = e.header,
          n = e.primaryMenu,
          o = e.secondaryMenu,
          i = (0, u.YW)().shown;
        return r.createElement(
          "div",
          { className: "navbar-sidebar" },
          t,
          r.createElement(
            "div",
            {
              className: (0, a.Z)("navbar-sidebar__items", {
                "navbar-sidebar__items--show-secondary": i,
              }),
            },
            r.createElement(
              "div",
              { className: "navbar-sidebar__item menu" },
              n
            ),
            r.createElement(
              "div",
              { className: "navbar-sidebar__item menu" },
              o
            )
          )
        );
      }
      var E = n(2389);
      function S(e) {
        return r.createElement(
          "svg",
          (0, d.Z)({ viewBox: "0 0 24 24", width: 24, height: 24 }, e),
          r.createElement("path", {
            fill: "currentColor",
            d:
              "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z",
          })
        );
      }
      function x(e) {
        return r.createElement(
          "svg",
          (0, d.Z)({ viewBox: "0 0 24 24", width: 24, height: 24 }, e),
          r.createElement("path", {
            fill: "currentColor",
            d:
              "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z",
          })
        );
      }
      var C = {
        toggle: "toggle_S7eR",
        toggleButton: "toggleButton_rCf9",
        darkToggleIcon: "darkToggleIcon_nQuB",
        lightToggleIcon: "lightToggleIcon_v35p",
        toggleButtonDisabled: "toggleButtonDisabled_Pu9x",
      };
      function _(e) {
        var t = e.className,
          n = e.value,
          o = e.onChange,
          i = (0, E.Z)(),
          u = (0, l.I)(
            {
              message: "Switch between dark and light mode (currently {mode})",
              id: "theme.colorToggle.ariaLabel",
              description: "The ARIA label for the navbar color mode toggle",
            },
            {
              mode:
                "dark" === n
                  ? (0, l.I)({
                      message: "dark mode",
                      id: "theme.colorToggle.ariaLabel.mode.dark",
                      description: "The name for the dark color mode",
                    })
                  : (0, l.I)({
                      message: "light mode",
                      id: "theme.colorToggle.ariaLabel.mode.light",
                      description: "The name for the light color mode",
                    }),
            }
          );
        return r.createElement(
          "div",
          { className: (0, a.Z)(C.toggle, t) },
          r.createElement(
            "button",
            {
              className: (0, a.Z)(
                "clean-btn",
                C.toggleButton,
                !i && C.toggleButtonDisabled
              ),
              type: "button",
              onClick: function () {
                return o("dark" === n ? "light" : "dark");
              },
              disabled: !i,
              title: u,
              "aria-label": u,
            },
            r.createElement(S, {
              className: (0, a.Z)(C.toggleIcon, C.lightToggleIcon),
            }),
            r.createElement(x, {
              className: (0, a.Z)(C.toggleIcon, C.darkToggleIcon),
            })
          )
        );
      }
      var T = r.memo(_);
      function L(e) {
        var t = e.className,
          n = (0, u.LU)().colorMode.disableSwitch,
          a = (0, u.If)(),
          o = a.colorMode,
          i = a.setColorMode;
        return n
          ? null
          : r.createElement(T, { className: t, value: o, onChange: i });
      }
      var P = n(5537);
      function A() {
        return r.createElement(P.Z, {
          className: "navbar__brand",
          imageClassName: "navbar__logo",
          titleClassName: "navbar__title",
        });
      }
      function O() {
        var e = (0, u.el)();
        return r.createElement(
          "button",
          {
            type: "button",
            className: "clean-btn navbar-sidebar__close",
            onClick: function () {
              return e.toggle();
            },
          },
          r.createElement(h, { color: "var(--ifm-color-emphasis-600)" })
        );
      }
      function N() {
        return r.createElement(
          "div",
          { className: "navbar-sidebar__brand" },
          r.createElement(A, null),
          r.createElement(L, { className: "margin-right--md" }),
          r.createElement(O, null)
        );
      }
      var R = n(2207);
      function I() {
        var e = (0, u.el)(),
          t = (0, u.LU)().navbar.items;
        return r.createElement(
          "ul",
          { className: "menu__list" },
          t.map(function (t, n) {
            return r.createElement(
              R.Z,
              (0, d.Z)({ mobile: !0 }, t, {
                onClick: function () {
                  return e.toggle();
                },
                key: n,
              })
            );
          })
        );
      }
      function D(e) {
        return r.createElement(
          "button",
          (0, d.Z)({}, e, {
            type: "button",
            className: "clean-btn navbar-sidebar__back",
          }),
          r.createElement(
            l.Z,
            {
              id: "theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",
              description:
                "The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)",
            },
            "\u2190 Back to main menu"
          )
        );
      }
      function M() {
        var e = 0 === (0, u.LU)().navbar.items.length,
          t = (0, u.YW)();
        return r.createElement(
          r.Fragment,
          null,
          !e &&
            r.createElement(D, {
              onClick: function () {
                return t.hide();
              },
            }),
          t.content
        );
      }
      function j() {
        var e = (0, u.el)();
        return (
          (0, u.Ni)(e.shown),
          e.shouldRender
            ? r.createElement(k, {
                header: r.createElement(N, null),
                primaryMenu: r.createElement(I, null),
                secondaryMenu: r.createElement(M, null),
              })
            : null
        );
      }
      var F = "navbarHideable_ObN2",
        B = "navbarHidden_FtgE";
      function U(e) {
        return r.createElement(
          "div",
          (0, d.Z)({ role: "presentation" }, e, {
            className: (0, a.Z)("navbar-sidebar__backdrop", e.className),
          })
        );
      }
      function z(e) {
        var t = e.children,
          n = (0, u.LU)().navbar,
          o = n.hideOnScroll,
          i = n.style,
          l = (0, u.el)(),
          s = (0, u.cK)(o),
          c = s.navbarRef,
          f = s.isNavbarVisible;
        return r.createElement(
          "nav",
          {
            ref: c,
            className: (0, a.Z)(
              "navbar",
              "navbar--fixed-top",
              o && [F, !f && B],
              {
                "navbar--dark": "dark" === i,
                "navbar--primary": "primary" === i,
                "navbar-sidebar--show": l.shown,
              }
            ),
          },
          t,
          r.createElement(U, { onClick: l.toggle }),
          r.createElement(j, null)
        );
      }
      var Z = n(1875),
        $ = ["width", "height", "className"];
      function q(e) {
        var t = e.width,
          n = void 0 === t ? 30 : t,
          a = e.height,
          o = void 0 === a ? 30 : a,
          i = e.className,
          l = (0, p.Z)(e, $);
        return r.createElement(
          "svg",
          (0, d.Z)(
            {
              className: i,
              width: n,
              height: o,
              viewBox: "0 0 30 30",
              "aria-hidden": "true",
            },
            l
          ),
          r.createElement("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            strokeWidth: "2",
            d: "M4 7h22M4 15h22M4 23h22",
          })
        );
      }
      function G() {
        var e = (0, u.el)();
        return r.createElement(
          "button",
          {
            onClick: e.toggle,
            onKeyDown: e.toggle,
            "aria-label": "Navigation bar toggle",
            className: "navbar__toggle clean-btn",
            type: "button",
            tabIndex: 0,
          },
          r.createElement(q, null)
        );
      }
      var H = "colorModeToggle_vKtC";
      function V(e) {
        var t = e.items;
        return r.createElement(
          r.Fragment,
          null,
          t.map(function (e, t) {
            return r.createElement(R.Z, (0, d.Z)({}, e, { key: t }));
          })
        );
      }
      function W(e) {
        var t = e.left,
          n = e.right;
        return r.createElement(
          "div",
          { className: "navbar__inner" },
          r.createElement("div", { className: "navbar__items" }, t),
          r.createElement(
            "div",
            { className: "navbar__items navbar__items--right" },
            n
          )
        );
      }
      function Y() {
        var e = (0, u.el)(),
          t = (0, u.LU)().navbar.items,
          n = (0, u.A5)(t),
          a = n[0],
          o = n[1],
          i = !t.some(function (e) {
            return "search" === e.type;
          });
        return r.createElement(W, {
          left: r.createElement(
            r.Fragment,
            null,
            !e.disabled && r.createElement(G, null),
            r.createElement(A, null),
            r.createElement(V, { items: a })
          ),
          right: r.createElement(
            r.Fragment,
            null,
            r.createElement(V, { items: o }),
            r.createElement(L, { className: H }),
            i && r.createElement(Z.Z, null)
          ),
        });
      }
      function K() {
        return r.createElement(z, null, r.createElement(Y, null));
      }
      var Q = n(9960),
        X = n(4996),
        J = n(3919),
        ee = n(541),
        te = ["to", "href", "label", "prependBaseUrlToHref"];
      function ne(e) {
        var t = e.item,
          n = t.to,
          a = t.href,
          o = t.label,
          i = t.prependBaseUrlToHref,
          l = (0, p.Z)(t, te),
          u = (0, X.Z)(n),
          s = (0, X.Z)(a, { forcePrependBaseUrl: !0 });
        return r.createElement(
          Q.Z,
          (0, d.Z)(
            { className: "footer__link-item" },
            a ? { href: i ? s : a } : { to: u },
            l
          ),
          o,
          a && !(0, J.Z)(a) && r.createElement(ee.Z, null)
        );
      }
      function re(e) {
        var t = e.item;
        return t.html
          ? r.createElement("li", {
              className: "footer__item",
              dangerouslySetInnerHTML: { __html: t.html },
            })
          : r.createElement(
              "li",
              { key: t.href || t.to, className: "footer__item" },
              r.createElement(ne, { item: t })
            );
      }
      function ae(e) {
        var t = e.column;
        return r.createElement(
          "div",
          { className: "col footer__col" },
          r.createElement("div", { className: "footer__title" }, t.title),
          r.createElement(
            "ul",
            { className: "footer__items" },
            t.items.map(function (e, t) {
              return r.createElement(re, { key: t, item: e });
            })
          )
        );
      }
      function oe(e) {
        var t = e.columns;
        return r.createElement(
          "div",
          { className: "row footer__links" },
          t.map(function (e, t) {
            return r.createElement(ae, { key: t, column: e });
          })
        );
      }
      function ie() {
        return r.createElement(
          "span",
          { className: "footer__link-separator" },
          "\xb7"
        );
      }
      function le(e) {
        var t = e.item;
        return t.html
          ? r.createElement("span", {
              className: "footer__link-item",
              dangerouslySetInnerHTML: { __html: t.html },
            })
          : r.createElement(ne, { item: t });
      }
      function ue(e) {
        var t = e.links;
        return r.createElement(
          "div",
          { className: "footer__links text--center" },
          r.createElement(
            "div",
            { className: "footer__links" },
            t.map(function (e, n) {
              return r.createElement(
                r.Fragment,
                { key: n },
                r.createElement(le, { item: e }),
                t.length !== n + 1 && r.createElement(ie, null)
              );
            })
          )
        );
      }
      function se(e) {
        var t = e.links;
        return (0, u.aV)(t)
          ? r.createElement(oe, { columns: t })
          : r.createElement(ue, { links: t });
      }
      var ce = "footerLogoLink_gHmE",
        fe = n(9750);
      function de(e) {
        var t,
          n = e.logo,
          a = (0, X.C)().withBaseUrl,
          o = { light: a(n.src), dark: a(null != (t = n.srcDark) ? t : n.src) };
        return r.createElement(fe.Z, {
          className: "footer__logo",
          alt: n.alt,
          sources: o,
          width: n.width,
          height: n.height,
        });
      }
      function pe(e) {
        var t = e.logo;
        return t.href
          ? r.createElement(
              Q.Z,
              { href: t.href, className: ce },
              r.createElement(de, { logo: t })
            )
          : r.createElement(de, { logo: t });
      }
      function me(e) {
        var t = e.copyright;
        return r.createElement("div", {
          className: "footer__copyright",
          dangerouslySetInnerHTML: { __html: t },
        });
      }
      function he(e) {
        var t = e.style,
          n = e.links,
          o = e.logo,
          i = e.copyright;
        return r.createElement(
          "footer",
          { className: (0, a.Z)("footer", { "footer--dark": "dark" === t }) },
          r.createElement(
            "div",
            { className: "container container-fluid" },
            n,
            (o || i) &&
              r.createElement(
                "div",
                { className: "footer__bottom text--center" },
                o &&
                  r.createElement("div", { className: "margin-bottom--sm" }, o),
                i
              )
          )
        );
      }
      function ge() {
        var e = (0, u.LU)().footer;
        if (!e) return null;
        var t = e.copyright,
          n = e.links,
          a = e.logo,
          o = e.style;
        return r.createElement(he, {
          style: o,
          links: n && n.length > 0 && r.createElement(se, { links: n }),
          logo: a && r.createElement(pe, { logo: a }),
          copyright: t && r.createElement(me, { copyright: t }),
        });
      }
      var ve = r.memo(ge);
      function be(e) {
        var t = e.children;
        return r.createElement(
          u.SG,
          null,
          r.createElement(
            u.pl,
            null,
            r.createElement(
              u.z5,
              null,
              r.createElement(
                u.OC,
                null,
                r.createElement(
                  u.L5,
                  null,
                  r.createElement(u.VC, null, r.createElement(u.Vy, null, t))
                )
              )
            )
          )
        );
      }
      function ye(e) {
        var t = e.error,
          n = e.tryAgain;
        return r.createElement(
          "main",
          { className: "container margin-vert--xl" },
          r.createElement(
            "div",
            { className: "row" },
            r.createElement(
              "div",
              { className: "col col--6 col--offset-3" },
              r.createElement(
                "h1",
                { className: "hero__title" },
                r.createElement(
                  l.Z,
                  {
                    id: "theme.ErrorPageContent.title",
                    description:
                      "The title of the fallback page when the page crashed",
                  },
                  "This page crashed."
                )
              ),
              r.createElement("p", null, t.message),
              r.createElement(
                "div",
                null,
                r.createElement(
                  "button",
                  { type: "button", onClick: n },
                  r.createElement(
                    l.Z,
                    {
                      id: "theme.ErrorPageContent.tryAgain",
                      description:
                        "The label of the button to try again when the page crashed",
                    },
                    "Try again"
                  )
                )
              )
            )
          )
        );
      }
      function we(e) {
        var t = e.children,
          n = e.noFooter,
          i = e.wrapperClassName,
          l = e.title,
          s = e.description;
        return (
          (0, u.t$)(),
          r.createElement(
            be,
            null,
            r.createElement(u.d, { title: l, description: s }),
            r.createElement(f, null),
            r.createElement(w, null),
            r.createElement(K, null),
            r.createElement(
              "div",
              { className: (0, a.Z)(u.kM.wrapper.main, i) },
              r.createElement(o.Z, { fallback: ye }, t)
            ),
            !n && r.createElement(ve, null)
          )
        );
      }
    },
    5537: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(9960),
        l = n(9750),
        u = n(4996),
        s = n(2263),
        c = n(5979),
        f = ["imageClassName", "titleClassName"];
      function d(e) {
        var t = (0, s.Z)().siteConfig.title,
          n = (0, c.LU)().navbar,
          d = n.title,
          p = n.logo,
          m = void 0 === p ? { src: "" } : p,
          h = e.imageClassName,
          g = e.titleClassName,
          v = (0, a.Z)(e, f),
          b = (0, u.Z)(m.href || "/"),
          y = { light: (0, u.Z)(m.src), dark: (0, u.Z)(m.srcDark || m.src) },
          w = o.createElement(l.Z, {
            sources: y,
            height: m.height,
            width: m.width,
            alt: m.alt || d || t,
          });
        return o.createElement(
          i.Z,
          (0, r.Z)({ to: b }, v, m.target && { target: m.target }),
          m.src && (h ? o.createElement("div", { className: h }, w) : w),
          null != d && o.createElement("b", { className: g }, d)
        );
      }
    },
    5525: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(6010),
        l = n(3072),
        u = n(1068),
        s = ["className", "isDropdownItem"],
        c = ["className", "isDropdownItem"],
        f = ["mobile", "position"];
      function d(e) {
        var t = e.className,
          n = e.isDropdownItem,
          u = void 0 !== n && n,
          c = (0, a.Z)(e, s),
          f = o.createElement(
            l.Z,
            (0, r.Z)(
              {
                className: (0, i.Z)(
                  u ? "dropdown__link" : "navbar__item navbar__link",
                  t
                ),
              },
              c
            )
          );
        return u ? o.createElement("li", null, f) : f;
      }
      function p(e) {
        var t = e.className,
          n = (e.isDropdownItem, (0, a.Z)(e, c));
        return o.createElement(
          "li",
          { className: "menu__list-item" },
          o.createElement(
            l.Z,
            (0, r.Z)({ className: (0, i.Z)("menu__link", t) }, n)
          )
        );
      }
      function m(e) {
        var t,
          n = e.mobile,
          i = void 0 !== n && n,
          l = (e.position, (0, a.Z)(e, f)),
          s = i ? p : d;
        return o.createElement(
          s,
          (0, r.Z)({}, l, {
            activeClassName: null != (t = l.activeClassName) ? t : (0, u.E)(i),
          })
        );
      }
    },
    6400: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(5525),
        l = n(5551),
        u = n(6010),
        s = n(1068),
        c = n(5979),
        f = ["docId", "label", "docsPluginId"];
      function d(e) {
        var t,
          n = e.docId,
          d = e.label,
          p = e.docsPluginId,
          m = (0, a.Z)(e, f),
          h = (0, l.Iw)(p),
          g = h.activeVersion,
          v = h.activeDoc,
          b = (0, c.J)(p).preferredVersion,
          y = (0, l.yW)(p),
          w = (function (e, t) {
            var n = e.flatMap(function (e) {
                return e.docs;
              }),
              r = n.find(function (e) {
                return e.id === t;
              });
            if (!r) {
              var a = n
                .map(function (e) {
                  return e.id;
                })
                .join("\n- ");
              throw new Error(
                "DocNavbarItem: couldn't find any doc with id \"" +
                  t +
                  '" in version' +
                  (e.length ? "s" : "") +
                  " " +
                  e
                    .map(function (e) {
                      return e.name;
                    })
                    .join(", ") +
                  '".\nAvailable doc ids are:\n- ' +
                  a
              );
            }
            return r;
          })((0, c.jj)([g, b, y].filter(Boolean)), n),
          k = (0, s.E)(m.mobile);
        return o.createElement(
          i.Z,
          (0, r.Z)({ exact: !0 }, m, {
            className: (0, u.Z)(
              m.className,
              ((t = {}),
              (t[k] =
                (null == v ? void 0 : v.sidebar) && v.sidebar === w.sidebar),
              t)
            ),
            activeClassName: k,
            label: null != d ? d : w.id,
            to: w.path,
          })
        );
      }
    },
    4792: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(5525),
        l = n(5551),
        u = n(6010),
        s = n(1068),
        c = n(5979),
        f = ["sidebarId", "label", "docsPluginId"];
      function d(e) {
        var t,
          n = e.sidebarId,
          d = e.label,
          p = e.docsPluginId,
          m = (0, a.Z)(e, f),
          h = (0, l.Iw)(p),
          g = h.activeVersion,
          v = h.activeDoc,
          b = (0, c.J)(p).preferredVersion,
          y = (0, l.yW)(p),
          w = (function (e, t) {
            var n = e
                .flatMap(function (e) {
                  if (e.sidebars) return Object.entries(e.sidebars);
                })
                .filter(function (e) {
                  return !!e;
                }),
              r = n.find(function (e) {
                return e[0] === t;
              });
            if (!r)
              throw new Error(
                "DocSidebarNavbarItem: couldn't find any sidebar with id \"" +
                  t +
                  '" in version' +
                  (e.length ? "s" : "") +
                  " " +
                  e
                    .map(function (e) {
                      return e.name;
                    })
                    .join(", ") +
                  '".\nAvailable sidebar ids are:\n- ' +
                  Object.keys(n).join("\n- ")
              );
            if (!r[1].link)
              throw new Error(
                "DocSidebarNavbarItem: couldn't find any document for sidebar with id \"" +
                  t +
                  '"'
              );
            return r[1].link;
          })((0, c.jj)([g, b, y].filter(Boolean)), n),
          k = (0, s.E)(m.mobile);
        return o.createElement(
          i.Z,
          (0, r.Z)({ exact: !0 }, m, {
            className: (0, u.Z)(
              m.className,
              ((t = {}), (t[k] = (null == v ? void 0 : v.sidebar) === n), t)
            ),
            activeClassName: k,
            label: null != d ? d : w.label,
            to: w.path,
          })
        );
      }
    },
    9308: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(5525),
        l = n(3154),
        u = n(5551),
        s = n(5979),
        c = n(5999),
        f = [
          "mobile",
          "docsPluginId",
          "dropdownActiveClassDisabled",
          "dropdownItemsBefore",
          "dropdownItemsAfter",
        ],
        d = function (e) {
          return e.docs.find(function (t) {
            return t.id === e.mainDocId;
          });
        };
      function p(e) {
        var t,
          n,
          p = e.mobile,
          m = e.docsPluginId,
          h = e.dropdownActiveClassDisabled,
          g = e.dropdownItemsBefore,
          v = e.dropdownItemsAfter,
          b = (0, a.Z)(e, f),
          y = (0, u.Iw)(m),
          w = (0, u.gB)(m),
          k = (0, u.yW)(m),
          E = (0, s.J)(m),
          S = E.preferredVersion,
          x = E.savePreferredVersionName;
        var C,
          _ =
            ((C = w.map(function (e) {
              var t =
                (null == y ? void 0 : y.alternateDocVersions[e.name]) || d(e);
              return {
                isNavLink: !0,
                label: e.label,
                to: t.path,
                isActive: function () {
                  return e === (null == y ? void 0 : y.activeVersion);
                },
                onClick: function () {
                  x(e.name);
                },
              };
            })),
            [].concat(g, C, v)),
          T = null != (t = null != (n = y.activeVersion) ? n : S) ? t : k,
          L =
            p && _.length > 1
              ? (0, c.I)({
                  id: "theme.navbar.mobileVersionsDropdown.label",
                  message: "Versions",
                  description:
                    "The label for the navbar versions dropdown on mobile view",
                })
              : T.label,
          P = p && _.length > 1 ? void 0 : d(T).path;
        return _.length <= 1
          ? o.createElement(
              i.Z,
              (0, r.Z)({}, b, {
                mobile: p,
                label: L,
                to: P,
                isActive: h
                  ? function () {
                      return !1;
                    }
                  : void 0,
              })
            )
          : o.createElement(
              l.Z,
              (0, r.Z)({}, b, {
                mobile: p,
                label: L,
                to: P,
                items: _,
                isActive: h
                  ? function () {
                      return !1;
                    }
                  : void 0,
              })
            );
      }
    },
    7250: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(5525),
        l = n(5551),
        u = n(5979),
        s = ["label", "to", "docsPluginId"];
      function c(e) {
        var t,
          n = e.label,
          c = e.to,
          f = e.docsPluginId,
          d = (0, a.Z)(e, s),
          p = (0, l.zu)(f),
          m = (0, u.J)(f).preferredVersion,
          h = (0, l.yW)(f),
          g = null != (t = null != p ? p : m) ? t : h,
          v = null != n ? n : g.label,
          b =
            null != c
              ? c
              : (function (e) {
                  return e.docs.find(function (t) {
                    return t.id === e.mainDocId;
                  });
                })(g).path;
        return o.createElement(i.Z, (0, r.Z)({}, d, { label: v, to: b }));
      }
    },
    3154: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(6010),
        l = n(5979),
        u = n(3072),
        s = n(2207),
        c = ["items", "position", "className"],
        f = ["items", "className", "position"],
        d = ["mobile"];
      function p(e, t) {
        return e.some(function (e) {
          return (function (e, t) {
            return (
              !!(0, l.Mg)(e.to, t) ||
              !!(0, l.Fx)(e.activeBaseRegex, t) ||
              !(!e.activeBasePath || !t.startsWith(e.activeBasePath))
            );
          })(e, t);
        });
      }
      function m(e) {
        var t,
          n = e.items,
          l = e.position,
          f = e.className,
          d = (0, a.Z)(e, c),
          p = (0, o.useRef)(null),
          m = (0, o.useState)(!1),
          h = m[0],
          g = m[1];
        return (
          (0, o.useEffect)(
            function () {
              var e = function (e) {
                p.current && !p.current.contains(e.target) && g(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                document.addEventListener("touchstart", e),
                function () {
                  document.removeEventListener("mousedown", e),
                    document.removeEventListener("touchstart", e);
                }
              );
            },
            [p]
          ),
          o.createElement(
            "div",
            {
              ref: p,
              className: (0, i.Z)(
                "navbar__item",
                "dropdown",
                "dropdown--hoverable",
                { "dropdown--right": "right" === l, "dropdown--show": h }
              ),
            },
            o.createElement(
              u.Z,
              (0, r.Z)(
                {
                  "aria-haspopup": "true",
                  "aria-expanded": h,
                  role: "button",
                  href: d.to ? void 0 : "#",
                  className: (0, i.Z)("navbar__link", f),
                },
                d,
                {
                  onClick: d.to
                    ? void 0
                    : function (e) {
                        return e.preventDefault();
                      },
                  onKeyDown: function (e) {
                    "Enter" === e.key && (e.preventDefault(), g(!h));
                  },
                }
              ),
              null != (t = d.children) ? t : d.label
            ),
            o.createElement(
              "ul",
              { className: "dropdown__menu" },
              n.map(function (e, t) {
                return o.createElement(
                  s.Z,
                  (0, r.Z)(
                    {
                      isDropdownItem: !0,
                      onKeyDown: function (e) {
                        if (t === n.length - 1 && "Tab" === e.key) {
                          e.preventDefault(), g(!1);
                          var r = p.current.nextElementSibling;
                          if (r)
                            (r instanceof HTMLAnchorElement
                              ? r
                              : r.querySelector("a")
                            ).focus();
                        }
                      },
                      activeClassName: "dropdown__link--active",
                    },
                    e,
                    { key: t }
                  )
                );
              })
            )
          )
        );
      }
      function h(e) {
        var t,
          n = e.items,
          c = e.className,
          d = (e.position, (0, a.Z)(e, f)),
          m = (0, l.be)(),
          h = p(n, m),
          g = (0, l.uR)({
            initialState: function () {
              return !h;
            },
          }),
          v = g.collapsed,
          b = g.toggleCollapsed,
          y = g.setCollapsed;
        return (
          (0, o.useEffect)(
            function () {
              h && y(!h);
            },
            [m, h, y]
          ),
          o.createElement(
            "li",
            {
              className: (0, i.Z)("menu__list-item", {
                "menu__list-item--collapsed": v,
              }),
            },
            o.createElement(
              u.Z,
              (0, r.Z)(
                {
                  role: "button",
                  className: (0, i.Z)("menu__link menu__link--sublist", c),
                },
                d,
                {
                  onClick: function (e) {
                    e.preventDefault(), b();
                  },
                }
              ),
              null != (t = d.children) ? t : d.label
            ),
            o.createElement(
              l.zF,
              { lazy: !0, as: "ul", className: "menu__list", collapsed: v },
              n.map(function (e, t) {
                return o.createElement(
                  s.Z,
                  (0, r.Z)(
                    {
                      mobile: !0,
                      isDropdownItem: !0,
                      onClick: d.onClick,
                      activeClassName: "menu__link--active",
                    },
                    e,
                    { key: t }
                  )
                );
              })
            )
          )
        );
      }
      function g(e) {
        var t = e.mobile,
          n = void 0 !== t && t,
          r = (0, a.Z)(e, d),
          i = n ? h : m;
        return o.createElement(i, r);
      }
    },
    3072: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(9960),
        l = n(4996),
        u = n(541),
        s = n(3919),
        c = n(5979),
        f = [
          "activeBasePath",
          "activeBaseRegex",
          "to",
          "href",
          "label",
          "activeClassName",
          "prependBaseUrlToHref",
        ];
      function d(e) {
        var t,
          n = e.activeBasePath,
          d = e.activeBaseRegex,
          p = e.to,
          m = e.href,
          h = e.label,
          g = e.activeClassName,
          v = void 0 === g ? "" : g,
          b = e.prependBaseUrlToHref,
          y = (0, a.Z)(e, f),
          w = (0, l.Z)(p),
          k = (0, l.Z)(n),
          E = (0, l.Z)(m, { forcePrependBaseUrl: !0 }),
          S = h && m && !(0, s.Z)(m),
          x = "dropdown__link--active" === v;
        return o.createElement(
          i.Z,
          (0, r.Z)(
            {},
            m
              ? { href: b ? E : m }
              : Object.assign(
                  {
                    isNavLink: !0,
                    activeClassName:
                      null != (t = y.className) && t.includes(v) ? "" : v,
                    to: w,
                  },
                  n || d
                    ? {
                        isActive: function (e, t) {
                          return d
                            ? (0, c.Fx)(d, t.pathname)
                            : t.pathname.startsWith(k);
                        },
                      }
                    : null
                ),
            y
          ),
          h,
          S && o.createElement(u.Z, x && { width: 12, height: 12 })
        );
      }
    },
    2207: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var r = n(3366),
        a = n(7294),
        o = n(5525),
        i = n(3154),
        l = n(7462),
        u = ["width", "height"];
      function s(e) {
        var t = e.width,
          n = void 0 === t ? 20 : t,
          o = e.height,
          i = void 0 === o ? 20 : o,
          s = (0, r.Z)(e, u);
        return a.createElement(
          "svg",
          (0, l.Z)(
            { viewBox: "0 0 24 24", width: n, height: i, "aria-hidden": !0 },
            s
          ),
          a.createElement("path", {
            fill: "currentColor",
            d:
              "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z",
          })
        );
      }
      var c = n(2263),
        f = n(5979),
        d = n(5999),
        p = "iconLanguage_dNtB",
        m = ["mobile", "dropdownItemsBefore", "dropdownItemsAfter"];
      function h(e) {
        var t = e.mobile,
          n = e.dropdownItemsBefore,
          o = e.dropdownItemsAfter,
          u = (0, r.Z)(e, m),
          h = (0, c.Z)().i18n,
          g = h.currentLocale,
          v = h.locales,
          b = h.localeConfigs,
          y = (0, f.l5)();
        function w(e) {
          return b[e].label;
        }
        var k = v.map(function (e) {
            var t =
              "pathname://" + y.createUrl({ locale: e, fullyQualified: !1 });
            return {
              isNavLink: !0,
              label: w(e),
              to: t,
              target: "_self",
              autoAddBaseUrl: !1,
              className: e === g ? "dropdown__link--active" : "",
            };
          }),
          E = [].concat(n, k, o),
          S = t
            ? (0, d.I)({
                message: "Languages",
                id: "theme.navbar.mobileLanguageDropdown.label",
                description:
                  "The label for the mobile language switcher dropdown",
              })
            : w(g);
        return a.createElement(
          i.Z,
          (0, l.Z)({}, u, {
            mobile: t,
            label: a.createElement(
              "span",
              null,
              a.createElement(s, { className: p }),
              a.createElement("span", null, S)
            ),
            items: E,
          })
        );
      }
      var g = n(1875);
      function v(e) {
        return e.mobile ? null : a.createElement(g.Z, null);
      }
      var b = ["type"],
        y = {
          default: function () {
            return o.Z;
          },
          localeDropdown: function () {
            return h;
          },
          search: function () {
            return v;
          },
          dropdown: function () {
            return i.Z;
          },
          docsVersion: function () {
            return n(7250).Z;
          },
          docsVersionDropdown: function () {
            return n(9308).Z;
          },
          doc: function () {
            return n(6400).Z;
          },
          docSidebar: function () {
            return n(4792).Z;
          },
        };
      function w(e) {
        var t = e.type,
          n = (0, r.Z)(e, b),
          o = (function (e, t) {
            return e && "default" !== e ? e : t ? "dropdown" : "default";
          })(t, void 0 !== n.items),
          i = (function (e) {
            var t = y[e];
            if (!t)
              throw new Error(
                'No NavbarItem component found for type "' + e + '".'
              );
            return t();
          })(o);
        return a.createElement(i, n);
      }
    },
    1068: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return r;
        },
      });
      var r = function (e) {
        return e ? "menu__link--active" : "navbar__link--active";
      };
    },
    4739: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = n(5742);
      function o(e) {
        var t = e.locale,
          n = e.version,
          o = e.tag,
          i = t;
        return r.createElement(
          a.Z,
          null,
          t &&
            r.createElement("meta", { name: "docusaurus_locale", content: t }),
          n &&
            r.createElement("meta", { name: "docusaurus_version", content: n }),
          o && r.createElement("meta", { name: "docusaurus_tag", content: o }),
          i &&
            r.createElement("meta", { name: "docsearch:language", content: i }),
          n &&
            r.createElement("meta", { name: "docsearch:version", content: n }),
          o &&
            r.createElement("meta", {
              name: "docsearch:docusaurus_tag",
              content: o,
            })
        );
      }
    },
    9750: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(6010),
        l = n(2389),
        u = n(5979),
        s = {
          themedImage: "themedImage_W2Cr",
          "themedImage--light": "themedImage--light_TfLj",
          "themedImage--dark": "themedImage--dark_oUvU",
        },
        c = ["sources", "className", "alt"];
      function f(e) {
        var t = (0, l.Z)(),
          n = (0, u.If)().colorMode,
          f = e.sources,
          d = e.className,
          p = e.alt,
          m = (0, a.Z)(e, c),
          h = t ? ("dark" === n ? ["dark"] : ["light"]) : ["light", "dark"];
        return o.createElement(
          o.Fragment,
          null,
          h.map(function (e) {
            return o.createElement(
              "img",
              (0, r.Z)(
                {
                  key: e,
                  src: f[e],
                  alt: p,
                  className: (0, i.Z)(s.themedImage, s["themedImage--" + e], d),
                },
                m
              )
            );
          })
        );
      }
    },
    467: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(9782);
      function a(e) {
        var t = r.default.themeConfig.prism.additionalLanguages;
        (globalThis.Prism = e),
          t.forEach(function (e) {
            n(6726)("./prism-" + e);
          }),
          delete globalThis.Prism;
      }
    },
    2448: function (e, t, n) {
      "use strict";
      var r = a(n(7410));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (0, a(n(467)).default)(r.default);
    },
    5979: function (e, t, n) {
      "use strict";
      n.d(t, {
        pl: function () {
          return Xe;
        },
        zF: function () {
          return De;
        },
        SG: function () {
          return Mt;
        },
        HX: function () {
          return ge;
        },
        PO: function () {
          return qe;
        },
        D_: function () {
          return E;
        },
        L5: function () {
          return pe;
        },
        bT: function () {
          return P;
        },
        qu: function () {
          return C;
        },
        FG: function () {
          return _t;
        },
        Vy: function () {
          return tn;
        },
        Zo: function () {
          return Qt;
        },
        d: function () {
          return xt;
        },
        VC: function () {
          return Tt;
        },
        OC: function () {
          return ht;
        },
        z5: function () {
          return on;
        },
        kM: function () {
          return He;
        },
        os: function () {
          return ve;
        },
        Wl: function () {
          return te;
        },
        _F: function () {
          return re;
        },
        aV: function () {
          return pt;
        },
        Fx: function () {
          return yt;
        },
        Mg: function () {
          return X;
        },
        hC: function () {
          return un;
        },
        PZ: function () {
          return rt;
        },
        bc: function () {
          return G;
        },
        Vo: function () {
          return H;
        },
        nZ: function () {
          return V;
        },
        A5: function () {
          return en;
        },
        MA: function () {
          return nt;
        },
        jj: function () {
          return Ge;
        },
        l5: function () {
          return j;
        },
        nT: function () {
          return Je;
        },
        uR: function () {
          return Te;
        },
        If: function () {
          return jt;
        },
        fP: function () {
          return S;
        },
        J: function () {
          return he;
        },
        Vq: function () {
          return A;
        },
        E6: function () {
          return _;
        },
        b9: function () {
          return dt;
        },
        cK: function () {
          return ln;
        },
        Ns: function () {
          return J;
        },
        t$: function () {
          return sn;
        },
        be: function () {
          return et;
        },
        SL: function () {
          return Se;
        },
        Ni: function () {
          return dn;
        },
        el: function () {
          return Ht;
        },
        YW: function () {
          return Jt;
        },
        c2: function () {
          return Ee;
        },
        D9: function () {
          return b;
        },
        pJ: function () {
          return fn;
        },
        RF: function () {
          return bt;
        },
        s1: function () {
          return ae;
        },
        Si: function () {
          return ut;
        },
        LU: function () {
          return a;
        },
        iP: function () {
          return Zt;
        },
      });
      var r = n(2263);
      function a() {
        return (0, r.Z)().siteConfig.themeConfig;
      }
      var o = n(7294);
      function i(e) {
        return (
          (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          i(e)
        );
      }
      var l = n(9611);
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && (0, l.Z)(e, t);
      }
      function s() {
        s = function (e, t) {
          return new n(e, void 0, t);
        };
        var e = RegExp.prototype,
          t = new WeakMap();
        function n(e, r, a) {
          var o = new RegExp(e, r);
          return t.set(o, a || t.get(e)), (0, l.Z)(o, n.prototype);
        }
        function r(e, n) {
          var r = t.get(n);
          return Object.keys(r).reduce(function (t, n) {
            return (t[n] = e[r[n]]), t;
          }, Object.create(null));
        }
        return (
          u(n, RegExp),
          (n.prototype.exec = function (t) {
            var n = e.exec.call(this, t);
            return n && (n.groups = r(n, this)), n;
          }),
          (n.prototype[Symbol.replace] = function (n, a) {
            if ("string" == typeof a) {
              var o = t.get(this);
              return e[Symbol.replace].call(
                this,
                n,
                a.replace(/\$<([^>]+)>/g, function (e, t) {
                  return "$" + o[t];
                })
              );
            }
            if ("function" == typeof a) {
              var l = this;
              return e[Symbol.replace].call(this, n, function () {
                var e = arguments;
                return (
                  "object" != i(e[e.length - 1]) &&
                    (e = [].slice.call(e)).push(r(e, l)),
                  a.apply(this, e)
                );
              });
            }
            return e[Symbol.replace].call(this, n, a);
          }),
          s.apply(this, arguments)
        );
      }
      var c = n(4578);
      function f(e) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          f(e)
        );
      }
      function d() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function p(e, t, n) {
        return (
          (p = d()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && (0, l.Z)(a, n.prototype), a;
              }),
          p.apply(null, arguments)
        );
      }
      function m(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (
          (m = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return p(e, arguments, f(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              (0, l.Z)(r, e)
            );
          }),
          m(e)
        );
      }
      var h = n(412),
        g = h.Z.canUseDOM ? o.useLayoutEffect : o.useEffect;
      function v(e) {
        var t = (0, o.useRef)(e);
        return (
          g(
            function () {
              t.current = e;
            },
            [e]
          ),
          (0, o.useCallback)(function () {
            return t.current.apply(t, arguments);
          }, [])
        );
      }
      function b(e) {
        var t = (0, o.useRef)();
        return (
          g(function () {
            t.current = e;
          }),
          t.current
        );
      }
      var y = (function (e) {
          function t(t, n) {
            var r, a, o, i;
            return (
              ((i = e.call(this) || this).name = "ReactContextError"),
              (i.message =
                "Hook " +
                (null == (r = i.stack) ||
                null == (a = r.split("\n")[1]) ||
                null == (o = a.match(s(/at (?:\w+\.)?(\w+)/, { name: 1 })))
                  ? void 0
                  : o.groups.name) +
                " is called outside the <" +
                t +
                ">. " +
                (n || "")),
              i
            );
          }
          return (0, c.Z)(t, e), t;
        })(m(Error)),
        w = Symbol("EmptyContext"),
        k = o.createContext(w);
      function E(e) {
        var t = e.children,
          n = (0, o.useState)(null),
          r = n[0],
          a = n[1],
          i = (0, o.useMemo)(
            function () {
              return { expandedItem: r, setExpandedItem: a };
            },
            [r]
          );
        return o.createElement(k.Provider, { value: i }, t);
      }
      function S() {
        var e = (0, o.useContext)(k);
        if (e === w) throw new y("DocSidebarItemsExpandedStateProvider");
        return e;
      }
      var x = o.createContext(null);
      function C(e) {
        var t = e.children,
          n = e.version;
        return o.createElement(x.Provider, { value: n }, t);
      }
      function _() {
        var e = (0, o.useContext)(x);
        if (null === e) throw new y("DocsVersionProvider");
        return e;
      }
      var T = Symbol("EmptyContext"),
        L = o.createContext(T);
      function P(e) {
        var t = e.children,
          n = e.sidebar;
        return o.createElement(L.Provider, { value: n }, t);
      }
      function A() {
        var e = (0, o.useContext)(L);
        if (e === T) throw new y("DocsSidebarProvider");
        return e;
      }
      var O = "localStorage";
      function N(e) {
        if ((void 0 === e && (e = O), "undefined" == typeof window))
          throw new Error(
            "Browser storage is not available on Node.js/Docusaurus SSR process."
          );
        if ("none" === e) return null;
        try {
          return window[e];
        } catch (n) {
          return (
            (t = n),
            R ||
              (console.warn(
                "Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",
                t
              ),
              (R = !0)),
            null
          );
        }
        var t;
      }
      var R = !1;
      var I = {
        get: function () {
          return null;
        },
        set: function () {},
        del: function () {},
      };
      function D(e, t) {
        if ("undefined" == typeof window)
          return (function (e) {
            function t() {
              throw new Error(
                'Illegal storage API usage for storage key "' +
                  e +
                  '".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.'
              );
            }
            return { get: t, set: t, del: t };
          })(e);
        var n = N(null == t ? void 0 : t.persistence);
        return null === n
          ? I
          : {
              get: function () {
                try {
                  return n.getItem(e);
                } catch (t) {
                  return (
                    console.error(
                      "Docusaurus storage error, can't get key=" + e,
                      t
                    ),
                    null
                  );
                }
              },
              set: function (t) {
                try {
                  n.setItem(e, t);
                } catch (r) {
                  console.error(
                    "Docusaurus storage error, can't set " + e + "=" + t,
                    r
                  );
                }
              },
              del: function () {
                try {
                  n.removeItem(e);
                } catch (t) {
                  console.error(
                    "Docusaurus storage error, can't delete key=" + e,
                    t
                  );
                }
              },
            };
      }
      var M = n(6775);
      function j() {
        var e = (0, r.Z)(),
          t = e.siteConfig,
          n = t.baseUrl,
          a = t.url,
          o = e.i18n,
          i = o.defaultLocale,
          l = o.currentLocale,
          u = (0, M.TH)().pathname,
          s = l === i ? n : n.replace("/" + l + "/", "/"),
          c = u.replace(n, "");
        return {
          createUrl: function (e) {
            var t = e.locale;
            return (
              "" +
              (e.fullyQualified ? a : "") +
              (function (e) {
                return e === i ? "" + s : "" + s + e + "/";
              })(t) +
              c
            );
          },
        };
      }
      var F = n(7594),
        B = n.n(F),
        U = s(/title=(["'])(.*?)\1/, { quote: 1, title: 2 }),
        z = s(/\{([\d,-]+)\}/, { range: 1 }),
        Z = {
          js: { start: "\\/\\/", end: "" },
          jsBlock: { start: "\\/\\*", end: "\\*\\/" },
          jsx: { start: "\\{\\s*\\/\\*", end: "\\*\\/\\s*\\}" },
          python: { start: "#", end: "" },
          html: { start: "\x3c!--", end: "--\x3e" },
        },
        $ = ["highlight-next-line", "highlight-start", "highlight-end"];
      function q(e) {
        var t = e
          .map(function (e) {
            var t = Z[e],
              n = t.start,
              r = t.end;
            return "(?:" + n + "\\s*(" + $.join("|") + ")\\s*" + r + ")";
          })
          .join("|");
        return new RegExp("^\\s*(?:" + t + ")\\s*$");
      }
      function G(e) {
        var t, n;
        return null !=
          (t = null == e || null == (n = e.match(U)) ? void 0 : n.groups.title)
          ? t
          : "";
      }
      function H(e) {
        var t = e.split(" ").find(function (e) {
          return e.startsWith("language-");
        });
        return null == t ? void 0 : t.replace(/language-/, "");
      }
      function V(e, t, n) {
        var r = e.replace(/\n$/, "");
        if (t && z.test(t)) {
          var a = t.match(z).groups.range;
          return {
            highlightLines: B()(a)
              .filter(function (e) {
                return e > 0;
              })
              .map(function (e) {
                return e - 1;
              }),
            code: r,
          };
        }
        if (void 0 === n) return { highlightLines: [], code: r };
        for (
          var o,
            i = (function (e) {
              switch (e) {
                case "js":
                case "javascript":
                case "ts":
                case "typescript":
                  return q(["js", "jsBlock"]);
                case "jsx":
                case "tsx":
                  return q(["js", "jsBlock", "jsx"]);
                case "html":
                  return q(["js", "jsBlock", "html"]);
                case "python":
                case "py":
                  return q(["python"]);
                default:
                  return q(Object.keys(Z));
              }
            })(n),
            l = r.split("\n"),
            u = "",
            s = 0;
          s < l.length;

        ) {
          var c = l[s].match(i);
          if (null !== c) {
            switch (
              c.slice(1).find(function (e) {
                return void 0 !== e;
              })
            ) {
              case "highlight-next-line":
                u += s + ",";
                break;
              case "highlight-start":
                o = s;
                break;
              case "highlight-end":
                u += o + "-" + (s - 1) + ",";
            }
            l.splice(s, 1);
          } else s += 1;
        }
        return { highlightLines: B()(u), code: (r = l.join("\n")) };
      }
      var W = n(5551);
      function Y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function K(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return Y(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Y(e, t)
                  : void 0
              );
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var Q = n(9637);
      function X(e, t) {
        var n = function (e) {
          var t;
          return null ==
            (t = !e || (null != e && e.endsWith("/")) ? e : e + "/")
            ? void 0
            : t.toLowerCase();
        };
        return n(e) === n(t);
      }
      function J() {
        var e = (0, r.Z)().siteConfig.baseUrl;
        return (0, o.useMemo)(
          function () {
            return (function (e) {
              var t = e.baseUrl;
              function n(e) {
                return e.path === t && !0 === e.exact;
              }
              function r(e) {
                return e.path === t && !e.exact;
              }
              return (function e(t) {
                if (0 !== t.length)
                  return (
                    t.find(n) ||
                    e(
                      t.filter(r).flatMap(function (e) {
                        var t;
                        return null != (t = e.routes) ? t : [];
                      })
                    )
                  );
              })(e.routes);
            })({ routes: Q.Z, baseUrl: e });
          },
          [e]
        );
      }
      var ee = !!W._r;
      function te(e) {
        if (e.href) return e.href;
        for (var t, n = K(e.items); !(t = n()).done; ) {
          var r = t.value;
          if ("link" === r.type) return r.href;
          if ("category" === r.type) {
            var a = te(r);
            if (a) return a;
          } else if ("html" !== r.type)
            throw new Error(
              "Unexpected category item type for " + JSON.stringify(r)
            );
        }
      }
      var ne = function (e, t) {
        return void 0 !== e && X(e, t);
      };
      function re(e, t) {
        return "link" === e.type
          ? ne(e.href, t)
          : "category" === e.type &&
              (ne(e.href, t) ||
                (function (e, t) {
                  return e.some(function (e) {
                    return re(e, t);
                  });
                })(e.items, t));
      }
      function ae() {
        var e,
          t = A(),
          n = (0, M.TH)().pathname;
        if (
          !1 ===
            (null == (e = (0, W.gA)()) ? void 0 : e.pluginData.breadcrumbs) ||
          !t
        )
          return null;
        var r = [];
        return (
          (function e(t) {
            for (var a, o = K(t); !(a = o()).done; ) {
              var i = a.value;
              if (
                ("category" === i.type && (X(i.href, n) || e(i.items))) ||
                ("link" === i.type && X(i.href, n))
              )
                return r.push(i), !0;
            }
            return !1;
          })(t),
          r.reverse()
        );
      }
      var oe = n(9935),
        ie = function (e) {
          return "docs-preferred-version-" + e;
        },
        le = function (e, t, n) {
          D(ie(e), { persistence: t }).set(n);
        },
        ue = function (e, t) {
          return D(ie(e), { persistence: t }).get();
        },
        se = function (e, t) {
          D(ie(e), { persistence: t }).del();
        };
      var ce = o.createContext(null);
      function fe() {
        var e = (0, W._r)(),
          t = a().docs.versionPersistence,
          n = (0, o.useMemo)(
            function () {
              return Object.keys(e);
            },
            [e]
          ),
          r = (0, o.useState)(function () {
            return (function (e) {
              return Object.fromEntries(
                e.map(function (e) {
                  return [e, { preferredVersionName: null }];
                })
              );
            })(n);
          }),
          i = r[0],
          l = r[1];
        return (
          (0, o.useEffect)(
            function () {
              l(
                (function (e) {
                  var t = e.pluginIds,
                    n = e.versionPersistence,
                    r = e.allDocsData;
                  return Object.fromEntries(
                    t.map(function (e) {
                      return [
                        e,
                        ((t = e),
                        (a = ue(t, n)),
                        r[t].versions.some(function (e) {
                          return e.name === a;
                        })
                          ? { preferredVersionName: a }
                          : (se(t, n), { preferredVersionName: null })),
                      ];
                      var t, a;
                    })
                  );
                })({ allDocsData: e, versionPersistence: t, pluginIds: n })
              );
            },
            [e, t, n]
          ),
          [
            i,
            (0, o.useMemo)(
              function () {
                return {
                  savePreferredVersion: function (e, n) {
                    le(e, t, n),
                      l(function (t) {
                        var r;
                        return Object.assign(
                          {},
                          t,
                          (((r = {})[e] = { preferredVersionName: n }), r)
                        );
                      });
                  },
                };
              },
              [t]
            ),
          ]
        );
      }
      function de(e) {
        var t = e.children,
          n = fe();
        return o.createElement(ce.Provider, { value: n }, t);
      }
      function pe(e) {
        var t = e.children;
        return ee ? o.createElement(de, null, t) : t;
      }
      function me() {
        var e = (0, o.useContext)(ce);
        if (!e) throw new y("DocsPreferredVersionContextProvider");
        return e;
      }
      function he(e) {
        var t;
        void 0 === e && (e = oe.m);
        var n = (0, W.zh)(e),
          r = me(),
          a = r[0],
          i = r[1],
          l = a[e].preferredVersionName;
        return {
          preferredVersion:
            null !=
            (t = n.versions.find(function (e) {
              return e.name === l;
            }))
              ? t
              : null,
          savePreferredVersionName: (0, o.useCallback)(
            function (t) {
              i.savePreferredVersion(e, t);
            },
            [i, e]
          ),
        };
      }
      var ge = "default";
      function ve(e, t) {
        return "docs-" + e + "-" + t;
      }
      var be = ["zero", "one", "two", "few", "many", "other"];
      function ye(e) {
        return be.filter(function (t) {
          return e.includes(t);
        });
      }
      var we = {
        locale: "en",
        pluralForms: ye(["one", "other"]),
        select: function (e) {
          return 1 === e ? "one" : "other";
        },
      };
      function ke() {
        var e = (0, r.Z)().i18n.currentLocale;
        return (0, o.useMemo)(
          function () {
            try {
              return (
                (t = e),
                (n = new Intl.PluralRules(t)),
                {
                  locale: t,
                  pluralForms: ye(n.resolvedOptions().pluralCategories),
                  select: function (e) {
                    return n.select(e);
                  },
                }
              );
            } catch (r) {
              return (
                console.error(
                  'Failed to use Intl.PluralRules for locale "' +
                    e +
                    '".\nDocusaurus will fallback to the default (English) implementation.\nError: ' +
                    r.message +
                    "\n"
                ),
                we
              );
            }
            var t, n;
          },
          [e]
        );
      }
      function Ee() {
        var e = ke();
        return {
          selectMessage: function (t, n) {
            return (function (e, t, n) {
              var r = e.split("|");
              if (1 === r.length) return r[0];
              r.length > n.pluralForms.length &&
                console.error(
                  "For locale=" +
                    n.locale +
                    ", a maximum of " +
                    n.pluralForms.length +
                    " plural forms are expected (" +
                    n.pluralForms +
                    "), but the message contains " +
                    r.length +
                    ": " +
                    e
                );
              var a = n.select(t),
                o = n.pluralForms.indexOf(a);
              return r[Math.min(o, r.length - 1)];
            })(n, t, e);
          },
        };
      }
      function Se(e) {
        var t = (0, M.TH)(),
          n = b(t),
          r = v(e);
        (0, o.useEffect)(
          function () {
            n && t !== n && r({ location: t, previousLocation: n });
          },
          [r, t, n]
        );
      }
      var xe = n(3366),
        Ce = ["collapsed"],
        _e = ["lazy"];
      function Te(e) {
        var t = e.initialState,
          n = (0, o.useState)(null != t && t),
          r = n[0],
          a = n[1],
          i = (0, o.useCallback)(function () {
            a(function (e) {
              return !e;
            });
          }, []);
        return { collapsed: r, setCollapsed: a, toggleCollapsed: i };
      }
      var Le = { display: "none", overflow: "hidden", height: "0px" },
        Pe = { display: "block", overflow: "visible", height: "auto" };
      function Ae(e, t) {
        var n = t ? Le : Pe;
        (e.style.display = n.display),
          (e.style.overflow = n.overflow),
          (e.style.height = n.height);
      }
      function Oe(e) {
        var t = e.collapsibleRef,
          n = e.collapsed,
          r = e.animation,
          a = (0, o.useRef)(!1);
        (0, o.useEffect)(
          function () {
            var e,
              o = t.current;
            function i() {
              var e,
                t,
                n = o.scrollHeight,
                a =
                  null != (e = null == r ? void 0 : r.duration)
                    ? e
                    : (function (e) {
                        var t = e / 36;
                        return Math.round(
                          10 * (4 + 15 * Math.pow(t, 0.25) + t / 5)
                        );
                      })(n);
              return {
                transition:
                  "height " +
                  a +
                  "ms " +
                  (null != (t = null == r ? void 0 : r.easing)
                    ? t
                    : "ease-in-out"),
                height: n + "px",
              };
            }
            function l() {
              var e = i();
              (o.style.transition = e.transition), (o.style.height = e.height);
            }
            if (!a.current) return Ae(o, n), void (a.current = !0);
            return (
              (o.style.willChange = "height"),
              (e = requestAnimationFrame(function () {
                n
                  ? (l(),
                    requestAnimationFrame(function () {
                      (o.style.height = Le.height),
                        (o.style.overflow = Le.overflow);
                    }))
                  : ((o.style.display = "block"),
                    requestAnimationFrame(function () {
                      l();
                    }));
              })),
              function () {
                return cancelAnimationFrame(e);
              }
            );
          },
          [t, n, r]
        );
      }
      function Ne(e) {
        if (!h.Z.canUseDOM) return e ? Le : Pe;
      }
      function Re(e) {
        var t = e.as,
          n = void 0 === t ? "div" : t,
          r = e.collapsed,
          a = e.children,
          i = e.animation,
          l = e.onCollapseTransitionEnd,
          u = e.className,
          s = e.disableSSRStyle,
          c = (0, o.useRef)(null);
        return (
          Oe({ collapsibleRef: c, collapsed: r, animation: i }),
          o.createElement(
            n,
            {
              ref: c,
              style: s ? void 0 : Ne(r),
              onTransitionEnd: function (e) {
                "height" === e.propertyName &&
                  (Ae(c.current, r), null == l || l(r));
              },
              className: u,
            },
            a
          )
        );
      }
      function Ie(e) {
        var t = e.collapsed,
          n = (0, xe.Z)(e, Ce),
          r = (0, o.useState)(!t),
          a = r[0],
          i = r[1];
        (0, o.useLayoutEffect)(
          function () {
            t || i(!0);
          },
          [t]
        );
        var l = (0, o.useState)(t),
          u = l[0],
          s = l[1];
        return (
          (0, o.useLayoutEffect)(
            function () {
              a && s(t);
            },
            [a, t]
          ),
          a ? o.createElement(Re, Object.assign({}, n, { collapsed: u })) : null
        );
      }
      function De(e) {
        var t = e.lazy,
          n = (0, xe.Z)(e, _e),
          r = t ? Ie : Re;
        return o.createElement(r, Object.assign({}, n));
      }
      var Me = n(2389),
        je = n(6010),
        Fe = "details_lb9f",
        Be = "isBrowser_bmU9",
        Ue = "collapsibleContent_i85q",
        ze = ["summary", "children"];
      function Ze(e) {
        return !!e && ("SUMMARY" === e.tagName || Ze(e.parentElement));
      }
      function $e(e, t) {
        return !!e && (e === t || $e(e.parentElement, t));
      }
      function qe(e) {
        var t = e.summary,
          n = e.children,
          r = (0, xe.Z)(e, ze),
          a = (0, Me.Z)(),
          i = (0, o.useRef)(null),
          l = Te({ initialState: !r.open }),
          u = l.collapsed,
          s = l.setCollapsed,
          c = (0, o.useState)(r.open),
          f = c[0],
          d = c[1];
        return o.createElement(
          "details",
          Object.assign({}, r, {
            ref: i,
            open: f,
            "data-collapsed": u,
            className: (0, je.Z)(Fe, a && Be, r.className),
            onMouseDown: function (e) {
              Ze(e.target) && e.detail > 1 && e.preventDefault();
            },
            onClick: function (e) {
              e.stopPropagation();
              var t = e.target;
              Ze(t) &&
                $e(t, i.current) &&
                (e.preventDefault(), u ? (s(!1), d(!0)) : s(!0));
            },
          }),
          t,
          o.createElement(
            De,
            {
              lazy: !1,
              collapsed: u,
              disableSSRStyle: !0,
              onCollapseTransitionEnd: function (e) {
                s(e), d(!e);
              },
            },
            o.createElement("div", { className: Ue }, n)
          )
        );
      }
      function Ge(e) {
        return Array.from(new Set(e));
      }
      var He = {
          page: {
            blogListPage: "blog-list-page",
            blogPostPage: "blog-post-page",
            blogTagsListPage: "blog-tags-list-page",
            blogTagPostListPage: "blog-tags-post-list-page",
            docsDocPage: "docs-doc-page",
            docsTagsListPage: "docs-tags-list-page",
            docsTagDocListPage: "docs-tags-doc-list-page",
            mdxPage: "mdx-page",
          },
          wrapper: {
            main: "main-wrapper",
            blogPages: "blog-wrapper",
            docsPages: "docs-wrapper",
            mdxPages: "mdx-wrapper",
          },
          common: {
            editThisPage: "theme-edit-this-page",
            lastUpdated: "theme-last-updated",
            backToTopButton: "theme-back-to-top-button",
            codeBlock: "theme-code-block",
          },
          layout: {},
          docs: {
            docVersionBanner: "theme-doc-version-banner",
            docVersionBadge: "theme-doc-version-badge",
            docBreadcrumbs: "theme-doc-breadcrumbs",
            docMarkdown: "theme-doc-markdown",
            docTocMobile: "theme-doc-toc-mobile",
            docTocDesktop: "theme-doc-toc-desktop",
            docFooter: "theme-doc-footer",
            docFooterTagsRow: "theme-doc-footer-tags-row",
            docFooterEditMetaRow: "theme-doc-footer-edit-meta-row",
            docSidebarContainer: "theme-doc-sidebar-container",
            docSidebarMenu: "theme-doc-sidebar-menu",
            docSidebarItemCategory: "theme-doc-sidebar-item-category",
            docSidebarItemLink: "theme-doc-sidebar-item-link",
            docSidebarItemCategoryLevel: function (e) {
              return "theme-doc-sidebar-item-category-level-" + e;
            },
            docSidebarItemLinkLevel: function (e) {
              return "theme-doc-sidebar-item-link-level-" + e;
            },
          },
          blog: {},
        },
        Ve = D("docusaurus.announcement.dismiss"),
        We = D("docusaurus.announcement.id"),
        Ye = function () {
          return "true" === Ve.get();
        },
        Ke = function (e) {
          return Ve.set(String(e));
        },
        Qe = o.createContext(null);
      function Xe(e) {
        var t = e.children,
          n = (function () {
            var e = a().announcementBar,
              t = (0, Me.Z)(),
              n = (0, o.useState)(function () {
                return !!t && Ye();
              }),
              r = n[0],
              i = n[1];
            (0, o.useEffect)(function () {
              i(Ye());
            }, []);
            var l = (0, o.useCallback)(function () {
              Ke(!0), i(!0);
            }, []);
            return (
              (0, o.useEffect)(
                function () {
                  if (e) {
                    var t = e.id,
                      n = We.get();
                    "annoucement-bar" === n && (n = "announcement-bar");
                    var r = t !== n;
                    We.set(t), r && Ke(!1), (!r && Ye()) || i(!1);
                  }
                },
                [e]
              ),
              (0, o.useMemo)(
                function () {
                  return { isActive: !!e && !r, close: l };
                },
                [e, r, l]
              )
            );
          })();
        return o.createElement(Qe.Provider, { value: n }, t);
      }
      function Je() {
        var e = (0, o.useContext)(Qe);
        if (!e) throw new y("AnnouncementBarProvider");
        return e;
      }
      function et() {
        var e = (0, r.Z)().siteConfig.baseUrl;
        return (0, M.TH)().pathname.replace(e, "/");
      }
      var tt = n(5999),
        nt = function () {
          return (0, tt.I)({
            id: "theme.tags.tagsPageTitle",
            message: "Tags",
            description: "The title of the tag list page",
          });
        };
      function rt(e) {
        var t = {};
        return (
          Object.values(e).forEach(function (e) {
            var n = (function (e) {
              return e[0].toUpperCase();
            })(e.name);
            null != t[n] || (t[n] = []), t[n].push(e);
          }),
          Object.entries(t)
            .sort(function (e, t) {
              var n = e[0],
                r = t[0];
              return n.localeCompare(r);
            })
            .map(function (e) {
              return {
                letter: e[0],
                tags: e[1].sort(function (e, t) {
                  return e.name.localeCompare(t.name);
                }),
              };
            })
        );
      }
      function at(e) {
        !(function (e) {
          var t = (0, M.k6)().block,
            n = v(e);
          (0, o.useEffect)(
            function () {
              return t(function (e, t) {
                return n(e, t);
              });
            },
            [t, n]
          );
        })(function (t, n) {
          if ("POP" === n) return e(t, n);
        });
      }
      function ot(e) {
        var t = e.getBoundingClientRect();
        return t.top === t.bottom ? ot(e.parentNode) : t;
      }
      function it(e, t) {
        var n,
          r,
          a = t.anchorTopOffset,
          o = e.find(function (e) {
            return ot(e).top >= a;
          });
        return o
          ? (function (e) {
              return e.top > 0 && e.bottom < window.innerHeight / 2;
            })(ot(o))
            ? o
            : null != (r = e[e.indexOf(o) - 1])
            ? r
            : null
          : null != (n = e[e.length - 1])
          ? n
          : null;
      }
      function lt() {
        var e = (0, o.useRef)(0),
          t = a().navbar.hideOnScroll;
        return (
          (0, o.useEffect)(
            function () {
              e.current = t
                ? 0
                : document.querySelector(".navbar").clientHeight;
            },
            [t]
          ),
          e
        );
      }
      function ut(e) {
        var t = (0, o.useRef)(void 0),
          n = lt();
        (0, o.useEffect)(
          function () {
            if (!e) return function () {};
            var r = e.linkClassName,
              a = e.linkActiveClassName,
              o = e.minHeadingLevel,
              i = e.maxHeadingLevel;
            function l() {
              var e = (function (e) {
                  return Array.from(document.getElementsByClassName(e));
                })(r),
                l = (function (e) {
                  for (
                    var t = e.minHeadingLevel,
                      n = e.maxHeadingLevel,
                      r = [],
                      a = t;
                    a <= n;
                    a += 1
                  )
                    r.push("h" + a + ".anchor");
                  return Array.from(document.querySelectorAll(r.join()));
                })({ minHeadingLevel: o, maxHeadingLevel: i }),
                u = it(l, { anchorTopOffset: n.current }),
                s = e.find(function (e) {
                  return (
                    u &&
                    u.id ===
                      (function (e) {
                        return decodeURIComponent(
                          e.href.substring(e.href.indexOf("#") + 1)
                        );
                      })(e)
                  );
                });
              e.forEach(function (e) {
                !(function (e, n) {
                  if (n) {
                    var r;
                    t.current &&
                      t.current !== e &&
                      (null == (r = t.current) || r.classList.remove(a)),
                      e.classList.add(a),
                      (t.current = e);
                  } else e.classList.remove(a);
                })(e, e === s);
              });
            }
            return (
              document.addEventListener("scroll", l),
              document.addEventListener("resize", l),
              l(),
              function () {
                document.removeEventListener("scroll", l),
                  document.removeEventListener("resize", l);
              }
            );
          },
          [e, n]
        );
      }
      var st = ["parentIndex"];
      function ct(e) {
        var t = e.map(function (e) {
            return Object.assign({}, e, { parentIndex: -1, children: [] });
          }),
          n = Array(7).fill(-1);
        t.forEach(function (e, t) {
          var r = n.slice(2, e.level);
          (e.parentIndex = Math.max.apply(Math, r)), (n[e.level] = t);
        });
        var r = [];
        return (
          t.forEach(function (e) {
            var n = e.parentIndex,
              a = (0, xe.Z)(e, st);
            n >= 0 ? t[n].children.push(a) : r.push(a);
          }),
          r
        );
      }
      function ft(e) {
        var t = e.toc,
          n = e.minHeadingLevel,
          r = e.maxHeadingLevel;
        return t.flatMap(function (e) {
          var t = ft({
            toc: e.children,
            minHeadingLevel: n,
            maxHeadingLevel: r,
          });
          return (function (e) {
            return e.level >= n && e.level <= r;
          })(e)
            ? [Object.assign({}, e, { children: t })]
            : t;
        });
      }
      function dt(e) {
        var t = e.toc,
          n = e.minHeadingLevel,
          r = e.maxHeadingLevel;
        return (0, o.useMemo)(
          function () {
            return ft({ toc: ct(t), minHeadingLevel: n, maxHeadingLevel: r });
          },
          [t, n, r]
        );
      }
      function pt(e) {
        return "title" in e[0];
      }
      var mt = o.createContext(void 0);
      function ht(e) {
        var t,
          n = e.children,
          r =
            ((t = (0, o.useRef)(!0)),
            (0, o.useMemo)(function () {
              return {
                scrollEventsEnabledRef: t,
                enableScrollEvents: function () {
                  t.current = !0;
                },
                disableScrollEvents: function () {
                  t.current = !1;
                },
              };
            }, []));
        return o.createElement(mt.Provider, { value: r }, n);
      }
      function gt() {
        var e = (0, o.useContext)(mt);
        if (null == e) throw new y("ScrollControllerProvider");
        return e;
      }
      var vt = function () {
        return h.Z.canUseDOM
          ? { scrollX: window.pageXOffset, scrollY: window.pageYOffset }
          : null;
      };
      function bt(e, t) {
        void 0 === t && (t = []);
        var n = gt().scrollEventsEnabledRef,
          r = (0, o.useRef)(vt()),
          a = v(e);
        (0, o.useEffect)(function () {
          var e = function () {
              if (n.current) {
                var e = vt();
                a && a(e, r.current), (r.current = e);
              }
            },
            t = { passive: !0 };
          return (
            e(),
            window.addEventListener("scroll", e, t),
            function () {
              return window.removeEventListener("scroll", e, t);
            }
          );
        }, [a, n].concat(t));
      }
      function yt(e, t) {
        return void 0 !== e && void 0 !== t && new RegExp(e, "gi").test(t);
      }
      var wt = n(5742),
        kt = n(226);
      function Et() {
        var e = o.useContext(kt._);
        if (!e)
          throw new Error("Unexpected: no Docusaurus route context found");
        return e;
      }
      var St = n(4996);
      function xt(e) {
        var t = e.title,
          n = e.description,
          a = e.keywords,
          i = e.image,
          l = e.children,
          u = (function (e) {
            var t = (0, r.Z)().siteConfig,
              n = t.title,
              a = t.titleDelimiter;
            return null != e && e.trim().length
              ? e.trim() + " " + a + " " + n
              : n;
          })(t),
          s = (0, St.C)().withBaseUrl,
          c = i ? s(i, { absolute: !0 }) : void 0;
        return o.createElement(
          wt.Z,
          null,
          t && o.createElement("title", null, u),
          t && o.createElement("meta", { property: "og:title", content: u }),
          n && o.createElement("meta", { name: "description", content: n }),
          n &&
            o.createElement("meta", { property: "og:description", content: n }),
          a &&
            o.createElement("meta", {
              name: "keywords",
              content: Array.isArray(a) ? a.join(",") : a,
            }),
          c && o.createElement("meta", { property: "og:image", content: c }),
          c && o.createElement("meta", { name: "twitter:image", content: c }),
          l
        );
      }
      var Ct = o.createContext(void 0);
      function _t(e) {
        var t = e.className,
          n = e.children,
          r = o.useContext(Ct),
          a = (0, je.Z)(r, t);
        return o.createElement(
          Ct.Provider,
          { value: a },
          o.createElement(
            wt.Z,
            null,
            o.createElement("html", { className: a })
          ),
          n
        );
      }
      function Tt(e) {
        var t = e.children,
          n = Et(),
          r =
            "plugin-" +
            n.plugin.name.replace(
              /docusaurus-(?:plugin|theme)-(?:content-)?/gi,
              ""
            ),
          a = "plugin-id-" + n.plugin.id;
        return o.createElement(_t, { className: (0, je.Z)(r, a) }, t);
      }
      var Lt = o.createContext(void 0),
        Pt = "theme",
        At = D(Pt),
        Ot = "light",
        Nt = "dark",
        Rt = function (e) {
          return e === Nt ? Nt : Ot;
        },
        It = function (e) {
          At.set(Rt(e));
        };
      function Dt() {
        var e = a().colorMode,
          t = e.defaultMode,
          n = e.disableSwitch,
          r = e.respectPrefersColorScheme,
          i = (0, o.useState)(
            (function (e) {
              return h.Z.canUseDOM
                ? Rt(document.documentElement.getAttribute("data-theme"))
                : Rt(e);
            })(t)
          ),
          l = i[0],
          u = i[1],
          s = (0, o.useCallback)(function (e) {
            u(e), It(e);
          }, []);
        (0, o.useEffect)(
          function () {
            document.documentElement.setAttribute("data-theme", Rt(l));
          },
          [l]
        ),
          (0, o.useEffect)(
            function () {
              if (!n) {
                var e = function (e) {
                  if (e.key === Pt)
                    try {
                      var t = At.get();
                      null !== t && s(Rt(t));
                    } catch (n) {
                      console.error(n);
                    }
                };
                return (
                  window.addEventListener("storage", e),
                  function () {
                    return window.removeEventListener("storage", e);
                  }
                );
              }
            },
            [n, s]
          );
        var c = (0, o.useRef)(!1);
        return (
          (0, o.useEffect)(
            function () {
              if (!n || r) {
                var e = window.matchMedia("(prefers-color-scheme: dark)"),
                  t = function (e) {
                    var t = e.matches;
                    window.matchMedia("print").matches || c.current
                      ? (c.current = window.matchMedia("print").matches)
                      : s(t ? Nt : Ot);
                  };
                return (
                  e.addListener(t),
                  function () {
                    return e.removeListener(t);
                  }
                );
              }
            },
            [s, n, r]
          ),
          (0, o.useMemo)(
            function () {
              return {
                colorMode: l,
                setColorMode: s,
                get isDarkTheme() {
                  return l === Nt;
                },
                setLightTheme: function () {
                  s(Ot), It(Ot);
                },
                setDarkTheme: function () {
                  s(Nt), It(Nt);
                },
              };
            },
            [l, s]
          )
        );
      }
      function Mt(e) {
        var t = e.children,
          n = Dt();
        return o.createElement(Lt.Provider, { value: n }, t);
      }
      function jt() {
        var e = (0, o.useContext)(Lt);
        if (null == e)
          throw new y(
            "ColorModeProvider",
            "Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode."
          );
        return e;
      }
      var Ft = "desktop",
        Bt = "mobile",
        Ut = "ssr";
      function zt() {
        return h.Z.canUseDOM ? (window.innerWidth > 996 ? Ft : Bt) : Ut;
      }
      function Zt() {
        var e = (0, o.useState)(function () {
            return zt();
          }),
          t = e[0],
          n = e[1];
        return (
          (0, o.useEffect)(function () {
            function e() {
              n(zt());
            }
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e),
                  clearTimeout(undefined);
              }
            );
          }, []),
          t
        );
      }
      var $t = o.createContext(void 0);
      function qt() {
        var e,
          t = ((e = (0, W.gA)()), 0 === a().navbar.items.length && !e),
          n = Zt(),
          r = !t && "mobile" === n,
          i = (0, o.useState)(!1),
          l = i[0],
          u = i[1];
        at(function () {
          if (l) return u(!1), !1;
        });
        var s = (0, o.useCallback)(function () {
          u(function (e) {
            return !e;
          });
        }, []);
        return (
          (0, o.useEffect)(
            function () {
              "desktop" === n && u(!1);
            },
            [n]
          ),
          (0, o.useMemo)(
            function () {
              return { disabled: t, shouldRender: r, toggle: s, shown: l };
            },
            [t, r, s, l]
          )
        );
      }
      function Gt(e) {
        var t = e.children,
          n = qt();
        return o.createElement($t.Provider, { value: n }, t);
      }
      function Ht() {
        var e = o.useContext($t);
        if (void 0 === e) throw new y("NavbarMobileSidebarProvider");
        return e;
      }
      var Vt = { shown: !1, content: { component: null, props: null } },
        Wt = o.createContext(null);
      function Yt(e) {
        var t,
          n,
          r,
          a,
          i,
          l,
          u,
          s,
          c,
          f = e.children,
          d =
            ((r = Ht()),
            (a = (0, o.useState)(Vt)),
            (i = a[0]),
            (l = a[1]),
            (u = function (e) {
              return l(function (t) {
                return Object.assign({}, t, { shown: e });
              });
            }),
            (s = null !== (null == (t = i.content) ? void 0 : t.component)),
            (c = b(null !== (null == (n = i.content) ? void 0 : n.component))),
            (0, o.useEffect)(
              function () {
                s && !c && u(!0);
              },
              [s, c]
            ),
            (0, o.useEffect)(
              function () {
                s ? r.shown || u(!0) : u(!1);
              },
              [r.shown, s]
            ),
            [i, l]);
        return o.createElement(Wt.Provider, { value: d }, f);
      }
      function Kt() {
        var e = (0, o.useContext)(Wt);
        if (null === e) throw new y("MobileSecondaryMenuProvider");
        return e;
      }
      function Qt(e) {
        var t,
          n = e.component,
          r = e.props,
          a = Kt()[1],
          i =
            ((t = r),
            (0, o.useMemo)(function () {
              return t;
            }, [].concat(Object.keys(t), Object.values(t))));
        return (
          (0, o.useEffect)(
            function () {
              a(function (e) {
                return Object.assign({}, e, {
                  content: { component: n, props: i },
                });
              });
            },
            [a, n, i]
          ),
          (0, o.useEffect)(
            function () {
              return function () {
                return a(function (e) {
                  return Object.assign({}, e, { component: null, props: null });
                });
              };
            },
            [a]
          ),
          null
        );
      }
      function Xt(e) {
        var t;
        if (null != (t = e.content) && t.component) {
          var n = e.content.component;
          return o.createElement(n, Object.assign({}, e.content.props));
        }
      }
      function Jt() {
        var e = Kt(),
          t = e[0],
          n = e[1],
          r = (0, o.useCallback)(
            function () {
              return n(function (e) {
                return Object.assign({}, e, { shown: !1 });
              });
            },
            [n]
          );
        return (0, o.useMemo)(
          function () {
            return { shown: t.shown, hide: r, content: Xt(t) };
          },
          [r, t]
        );
      }
      function en(e) {
        function t(e) {
          var t;
          return "left" === (null != (t = e.position) ? t : "right");
        }
        return [
          e.filter(t),
          e.filter(function (e) {
            return !t(e);
          }),
        ];
      }
      function tn(e) {
        var t = e.children;
        return o.createElement(Gt, null, o.createElement(Yt, null, t));
      }
      var nn = "docusaurus.tab.",
        rn = o.createContext(void 0);
      function an() {
        var e = (0, o.useState)({}),
          t = e[0],
          n = e[1],
          r = (0, o.useCallback)(function (e, t) {
            D("docusaurus.tab." + e).set(t);
          }, []);
        (0, o.useEffect)(function () {
          try {
            var e = {};
            (function (e) {
              void 0 === e && (e = O);
              var t = N(e);
              if (!t) return [];
              for (var n = [], r = 0; r < t.length; r += 1) {
                var a = t.key(r);
                null !== a && n.push(a);
              }
              return n;
            })().forEach(function (t) {
              if (t.startsWith(nn)) {
                var n = t.substring(nn.length);
                e[n] = D(t).get();
              }
            }),
              n(e);
          } catch (t) {
            console.error(t);
          }
        }, []);
        var a = (0, o.useCallback)(
          function (e, t) {
            n(function (n) {
              var r;
              return Object.assign({}, n, (((r = {})[e] = t), r));
            }),
              r(e, t);
          },
          [r]
        );
        return (0, o.useMemo)(
          function () {
            return { tabGroupChoices: t, setTabGroupChoices: a };
          },
          [t, a]
        );
      }
      function on(e) {
        var t = e.children,
          n = an();
        return o.createElement(rn.Provider, { value: n }, t);
      }
      function ln(e) {
        var t = (0, o.useState)(e),
          n = t[0],
          r = t[1],
          a = (0, o.useRef)(!1),
          i = (0, o.useRef)(0),
          l = (0, o.useCallback)(function (e) {
            null !== e && (i.current = e.getBoundingClientRect().height);
          }, []);
        return (
          bt(function (t, n) {
            if (e) {
              var o = t.scrollY;
              if (o < i.current) r(!0);
              else if (a.current) a.current = !1;
              else {
                var l = null == n ? void 0 : n.scrollY,
                  u = document.documentElement.scrollHeight - i.current,
                  s = window.innerHeight;
                l && o >= l ? r(!1) : o + s < u && r(!0);
              }
            }
          }),
          Se(function (t) {
            if (e)
              return t.location.hash
                ? ((a.current = !0), void r(!1))
                : void r(!0);
          }),
          { navbarRef: l, isNavbarVisible: n }
        );
      }
      var un = "navigation-with-keyboard";
      function sn() {
        (0, o.useEffect)(function () {
          function e(e) {
            "keydown" === e.type &&
              "Tab" === e.key &&
              document.body.classList.add(un),
              "mousedown" === e.type && document.body.classList.remove(un);
          }
          return (
            document.addEventListener("keydown", e),
            document.addEventListener("mousedown", e),
            function () {
              document.body.classList.remove(un),
                document.removeEventListener("keydown", e),
                document.removeEventListener("mousedown", e);
            }
          );
        }, []);
      }
      var cn = {
        plain: { color: "#bfc7d5", backgroundColor: "#292d3e" },
        styles: [
          {
            types: ["comment"],
            style: { color: "rgb(105, 112, 152)", fontStyle: "italic" },
          },
          {
            types: ["string", "inserted"],
            style: { color: "rgb(195, 232, 141)" },
          },
          { types: ["number"], style: { color: "rgb(247, 140, 108)" } },
          {
            types: ["builtin", "char", "constant", "function"],
            style: { color: "rgb(130, 170, 255)" },
          },
          {
            types: ["punctuation", "selector"],
            style: { color: "rgb(199, 146, 234)" },
          },
          { types: ["variable"], style: { color: "rgb(191, 199, 213)" } },
          {
            types: ["class-name", "attr-name"],
            style: { color: "rgb(255, 203, 107)" },
          },
          { types: ["tag", "deleted"], style: { color: "rgb(255, 85, 114)" } },
          { types: ["operator"], style: { color: "rgb(137, 221, 255)" } },
          { types: ["boolean"], style: { color: "rgb(255, 88, 116)" } },
          { types: ["keyword"], style: { fontStyle: "italic" } },
          {
            types: ["doctype"],
            style: { color: "rgb(199, 146, 234)", fontStyle: "italic" },
          },
          { types: ["namespace"], style: { color: "rgb(178, 204, 214)" } },
          { types: ["url"], style: { color: "rgb(221, 221, 221)" } },
        ],
      };
      function fn() {
        var e = a().prism,
          t = jt().colorMode,
          n = e.theme || cn,
          r = e.darkTheme || n;
        return "dark" === t ? r : n;
      }
      function dn(e) {
        void 0 === e && (e = !0),
          (0, o.useEffect)(
            function () {
              return (
                (document.body.style.overflow = e ? "hidden" : "visible"),
                function () {
                  document.body.style.overflow = "visible";
                }
              );
            },
            [e]
          );
      }
    },
    8802: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          var n = t.trailingSlash,
            r = t.baseUrl;
          if (e.startsWith("#")) return e;
          if (void 0 === n) return e;
          var a,
            o = e.split(/[#?]/)[0],
            i =
              "/" === o || o === r
                ? o
                : ((a = o),
                  n
                    ? (function (e) {
                        return e.endsWith("/") ? e : e + "/";
                      })(a)
                    : (function (e) {
                        return e.endsWith("/") ? e.slice(0, -1) : e;
                      })(a));
          return e.replace(o, i);
        });
    },
    8780: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.applyTrailingSlash = t.blogPostContainerID = void 0),
        (t.blogPostContainerID = "post-content");
      var a = n(8802);
      Object.defineProperty(t, "applyTrailingSlash", {
        enumerable: !0,
        get: function () {
          return r(a).default;
        },
      });
    },
    6010: function (e, t, n) {
      "use strict";
      function r(e) {
        var t,
          n,
          a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = r(e[t])) && (a && (a += " "), (a += n));
          else for (t in e) e[t] && (a && (a += " "), (a += t));
        return a;
      }
      function a() {
        for (var e, t, n = 0, a = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = r(e)) && (a && (a += " "), (a += t));
        return a;
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
    },
    2358: function (e, t, n) {
      "use strict";
      n.d(t, {
        lX: function () {
          return S;
        },
        q_: function () {
          return P;
        },
        ob: function () {
          return h;
        },
        PP: function () {
          return O;
        },
        Ep: function () {
          return m;
        },
        Hp: function () {
          return g;
        },
      });
      var r = n(7462);
      function a(e) {
        return "/" === e.charAt(0);
      }
      function o(e, t) {
        for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
          e[n] = e[r];
        e.pop();
      }
      var i = function (e, t) {
        void 0 === t && (t = "");
        var n,
          r = (e && e.split("/")) || [],
          i = (t && t.split("/")) || [],
          l = e && a(e),
          u = t && a(t),
          s = l || u;
        if (
          (e && a(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))),
          !i.length)
        )
          return "/";
        if (i.length) {
          var c = i[i.length - 1];
          n = "." === c || ".." === c || "" === c;
        } else n = !1;
        for (var f = 0, d = i.length; d >= 0; d--) {
          var p = i[d];
          "." === p
            ? o(i, d)
            : ".." === p
            ? (o(i, d), f++)
            : f && (o(i, d), f--);
        }
        if (!s) for (; f--; f) i.unshift("..");
        !s || "" === i[0] || (i[0] && a(i[0])) || i.unshift("");
        var m = i.join("/");
        return n && "/" !== m.substr(-1) && (m += "/"), m;
      };
      function l(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      var u = function e(t, n) {
          if (t === n) return !0;
          if (null == t || null == n) return !1;
          if (Array.isArray(t))
            return (
              Array.isArray(n) &&
              t.length === n.length &&
              t.every(function (t, r) {
                return e(t, n[r]);
              })
            );
          if ("object" == typeof t || "object" == typeof n) {
            var r = l(t),
              a = l(n);
            return r !== t || a !== n
              ? e(r, a)
              : Object.keys(Object.assign({}, t, n)).every(function (r) {
                  return e(t[r], n[r]);
                });
          }
          return !1;
        },
        s = n(2177);
      function c(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function f(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function d(e, t) {
        return (function (e, t) {
          return (
            0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
            -1 !== "/?#".indexOf(e.charAt(t.length))
          );
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function p(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function m(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          a = t || "/";
        return (
          n && "?" !== n && (a += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r),
          a
        );
      }
      function h(e, t, n, a) {
        var o;
        "string" == typeof e
          ? ((o = (function (e) {
              var t = e || "/",
                n = "",
                r = "",
                a = t.indexOf("#");
              -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
              var o = t.indexOf("?");
              return (
                -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
                {
                  pathname: t,
                  search: "?" === n ? "" : n,
                  hash: "#" === r ? "" : r,
                }
              );
            })(e)),
            (o.state = t))
          : (void 0 === (o = (0, r.Z)({}, e)).pathname && (o.pathname = ""),
            o.search
              ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
              : (o.search = ""),
            o.hash
              ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
              : (o.hash = ""),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (o.key = n),
          a
            ? o.pathname
              ? "/" !== o.pathname.charAt(0) &&
                (o.pathname = i(o.pathname, a.pathname))
              : (o.pathname = a.pathname)
            : o.pathname || (o.pathname = "/"),
          o
        );
      }
      function g(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          u(e.state, t.state)
        );
      }
      function v() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, a) {
            if (null != e) {
              var o = "function" == typeof e ? e(t, n) : e;
              "string" == typeof o
                ? "function" == typeof r
                  ? r(o, a)
                  : a(!0)
                : a(!1 !== o);
            } else a(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var b = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function y(e, t) {
        t(window.confirm(e));
      }
      var w = "popstate",
        k = "hashchange";
      function E() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function S(e) {
        void 0 === e && (e = {}), b || (0, s.Z)(!1);
        var t,
          n = window.history,
          a =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = e,
          l = i.forceRefresh,
          u = void 0 !== l && l,
          f = i.getUserConfirmation,
          g = void 0 === f ? y : f,
          S = i.keyLength,
          x = void 0 === S ? 6 : S,
          C = e.basename ? p(c(e.basename)) : "";
        function _(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            a = window.location,
            o = a.pathname + a.search + a.hash;
          return C && (o = d(o, C)), h(o, r, n);
        }
        function T() {
          return Math.random().toString(36).substr(2, x);
        }
        var L = v();
        function P(e) {
          (0, r.Z)(z, e),
            (z.length = n.length),
            L.notifyListeners(z.location, z.action);
        }
        function A(e) {
          (function (e) {
            return (
              void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            );
          })(e) || R(_(e.state));
        }
        function O() {
          R(_(E()));
        }
        var N = !1;
        function R(e) {
          if (N) (N = !1), P();
          else {
            L.confirmTransitionTo(e, "POP", g, function (t) {
              t
                ? P({ action: "POP", location: e })
                : (function (e) {
                    var t = z.location,
                      n = D.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = D.indexOf(e.key);
                    -1 === r && (r = 0);
                    var a = n - r;
                    a && ((N = !0), j(a));
                  })(e);
            });
          }
        }
        var I = _(E()),
          D = [I.key];
        function M(e) {
          return C + m(e);
        }
        function j(e) {
          n.go(e);
        }
        var F = 0;
        function B(e) {
          1 === (F += e) && 1 === e
            ? (window.addEventListener(w, A),
              o && window.addEventListener(k, O))
            : 0 === F &&
              (window.removeEventListener(w, A),
              o && window.removeEventListener(k, O));
        }
        var U = !1;
        var z = {
          length: n.length,
          action: "POP",
          location: I,
          createHref: M,
          push: function (e, t) {
            var r = "PUSH",
              o = h(e, t, T(), z.location);
            L.confirmTransitionTo(o, r, g, function (e) {
              if (e) {
                var t = M(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.pushState({ key: i, state: l }, null, t), u))
                    window.location.href = t;
                  else {
                    var s = D.indexOf(z.location.key),
                      c = D.slice(0, s + 1);
                    c.push(o.key), (D = c), P({ action: r, location: o });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              o = h(e, t, T(), z.location);
            L.confirmTransitionTo(o, r, g, function (e) {
              if (e) {
                var t = M(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.replaceState({ key: i, state: l }, null, t), u))
                    window.location.replace(t);
                  else {
                    var s = D.indexOf(z.location.key);
                    -1 !== s && (D[s] = o.key), P({ action: r, location: o });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: j,
          goBack: function () {
            j(-1);
          },
          goForward: function () {
            j(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = L.setPrompt(e);
            return (
              U || (B(1), (U = !0)),
              function () {
                return U && ((U = !1), B(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = L.appendListener(e);
            return (
              B(1),
              function () {
                B(-1), t();
              }
            );
          },
        };
        return z;
      }
      var x = "hashchange",
        C = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + f(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: f, decodePath: c },
          slash: { encodePath: c, decodePath: c },
        };
      function _(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function T() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function L(e) {
        window.location.replace(_(window.location.href) + "#" + e);
      }
      function P(e) {
        void 0 === e && (e = {}), b || (0, s.Z)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf("Firefox"), e),
          a = n.getUserConfirmation,
          o = void 0 === a ? y : a,
          i = n.hashType,
          l = void 0 === i ? "slash" : i,
          u = e.basename ? p(c(e.basename)) : "",
          f = C[l],
          g = f.encodePath,
          w = f.decodePath;
        function k() {
          var e = w(T());
          return u && (e = d(e, u)), h(e);
        }
        var E = v();
        function S(e) {
          (0, r.Z)(U, e),
            (U.length = t.length),
            E.notifyListeners(U.location, U.action);
        }
        var P = !1,
          A = null;
        function O() {
          var e,
            t,
            n = T(),
            r = g(n);
          if (n !== r) L(r);
          else {
            var a = k(),
              i = U.location;
            if (
              !P &&
              ((t = a),
              (e = i).pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash)
            )
              return;
            if (A === m(a)) return;
            (A = null),
              (function (e) {
                if (P) (P = !1), S();
                else {
                  var t = "POP";
                  E.confirmTransitionTo(e, t, o, function (n) {
                    n
                      ? S({ action: t, location: e })
                      : (function (e) {
                          var t = U.location,
                            n = D.lastIndexOf(m(t));
                          -1 === n && (n = 0);
                          var r = D.lastIndexOf(m(e));
                          -1 === r && (r = 0);
                          var a = n - r;
                          a && ((P = !0), M(a));
                        })(e);
                  });
                }
              })(a);
          }
        }
        var N = T(),
          R = g(N);
        N !== R && L(R);
        var I = k(),
          D = [m(I)];
        function M(e) {
          t.go(e);
        }
        var j = 0;
        function F(e) {
          1 === (j += e) && 1 === e
            ? window.addEventListener(x, O)
            : 0 === j && window.removeEventListener(x, O);
        }
        var B = !1;
        var U = {
          length: t.length,
          action: "POP",
          location: I,
          createHref: function (e) {
            var t = document.querySelector("base"),
              n = "";
            return (
              t && t.getAttribute("href") && (n = _(window.location.href)),
              n + "#" + g(u + m(e))
            );
          },
          push: function (e, t) {
            var n = "PUSH",
              r = h(e, void 0, void 0, U.location);
            E.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = m(r),
                  a = g(u + t);
                if (T() !== a) {
                  (A = t),
                    (function (e) {
                      window.location.hash = e;
                    })(a);
                  var o = D.lastIndexOf(m(U.location)),
                    i = D.slice(0, o + 1);
                  i.push(t), (D = i), S({ action: n, location: r });
                } else S();
              }
            });
          },
          replace: function (e, t) {
            var n = "REPLACE",
              r = h(e, void 0, void 0, U.location);
            E.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = m(r),
                  a = g(u + t);
                T() !== a && ((A = t), L(a));
                var o = D.indexOf(m(U.location));
                -1 !== o && (D[o] = t), S({ action: n, location: r });
              }
            });
          },
          go: M,
          goBack: function () {
            M(-1);
          },
          goForward: function () {
            M(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = E.setPrompt(e);
            return (
              B || (F(1), (B = !0)),
              function () {
                return B && ((B = !1), F(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = E.appendListener(e);
            return (
              F(1),
              function () {
                F(-1), t();
              }
            );
          },
        };
        return U;
      }
      function A(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function O(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          a = t.initialEntries,
          o = void 0 === a ? ["/"] : a,
          i = t.initialIndex,
          l = void 0 === i ? 0 : i,
          u = t.keyLength,
          s = void 0 === u ? 6 : u,
          c = v();
        function f(e) {
          (0, r.Z)(w, e),
            (w.length = w.entries.length),
            c.notifyListeners(w.location, w.action);
        }
        function d() {
          return Math.random().toString(36).substr(2, s);
        }
        var p = A(l, 0, o.length - 1),
          g = o.map(function (e) {
            return h(e, void 0, "string" == typeof e ? d() : e.key || d());
          }),
          b = m;
        function y(e) {
          var t = A(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? f({ action: "POP", location: r, index: t }) : f();
          });
        }
        var w = {
          length: g.length,
          action: "POP",
          location: g[p],
          index: p,
          entries: g,
          createHref: b,
          push: function (e, t) {
            var r = "PUSH",
              a = h(e, t, d(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              if (e) {
                var t = w.index + 1,
                  n = w.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                  f({ action: r, location: a, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              a = h(e, t, d(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              e && ((w.entries[w.index] = a), f({ action: r, location: a }));
            });
          },
          go: y,
          goBack: function () {
            y(-1);
          },
          goForward: function () {
            y(1);
          },
          canGo: function (e) {
            var t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return w;
      }
    },
    8679: function (e, t, n) {
      "use strict";
      var r = n(9864),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function u(e) {
        return r.isMemo(e) ? i : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = i);
      var s = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (m) {
            var a = p(n);
            a && a !== m && e(t, a, r);
          }
          var i = c(n);
          f && (i = i.concat(f(n)));
          for (var l = u(t), h = u(n), g = 0; g < i.length; ++g) {
            var v = i[g];
            if (!(o[v] || (r && r[v]) || (h && h[v]) || (l && l[v]))) {
              var b = d(n, v);
              try {
                s(t, v, b);
              } catch (y) {}
            }
          }
        }
        return t;
      };
    },
    1143: function (e) {
      "use strict";
      e.exports = function (e, t, n, r, a, o, i, l) {
        if (!e) {
          var u;
          if (void 0 === t)
            u = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var s = [n, r, a, o, i, l],
              c = 0;
            (u = new Error(
              t.replace(/%s/g, function () {
                return s[c++];
              })
            )).name = "Invariant Violation";
          }
          throw ((u.framesToPop = 1), u);
        }
      };
    },
    5826: function (e) {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    6743: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    2497: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    2295: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    4865: function (e, t, n) {
      var r, a;
      (r = function () {
        var e,
          t,
          n = { version: "0.2.0" },
          r = (n.settings = {
            minimum: 0.08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template:
              '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
          });
        function a(e, t, n) {
          return e < t ? t : e > n ? n : e;
        }
        function o(e) {
          return 100 * (-1 + e);
        }
        function i(e, t, n) {
          var a;
          return (
            ((a =
              "translate3d" === r.positionUsing
                ? { transform: "translate3d(" + o(e) + "%,0,0)" }
                : "translate" === r.positionUsing
                ? { transform: "translate(" + o(e) + "%,0)" }
                : { "margin-left": o(e) + "%" }).transition =
              "all " + t + "ms " + n),
            a
          );
        }
        (n.configure = function (e) {
          var t, n;
          for (t in e)
            void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
          return this;
        }),
          (n.status = null),
          (n.set = function (e) {
            var t = n.isStarted();
            (e = a(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
            var o = n.render(!t),
              s = o.querySelector(r.barSelector),
              c = r.speed,
              f = r.easing;
            return (
              o.offsetWidth,
              l(function (t) {
                "" === r.positionUsing &&
                  (r.positionUsing = n.getPositioningCSS()),
                  u(s, i(e, c, f)),
                  1 === e
                    ? (u(o, { transition: "none", opacity: 1 }),
                      o.offsetWidth,
                      setTimeout(function () {
                        u(o, {
                          transition: "all " + c + "ms linear",
                          opacity: 0,
                        }),
                          setTimeout(function () {
                            n.remove(), t();
                          }, c);
                      }, c))
                    : setTimeout(t, c);
              }),
              this
            );
          }),
          (n.isStarted = function () {
            return "number" == typeof n.status;
          }),
          (n.start = function () {
            n.status || n.set(0);
            var e = function () {
              setTimeout(function () {
                n.status && (n.trickle(), e());
              }, r.trickleSpeed);
            };
            return r.trickle && e(), this;
          }),
          (n.done = function (e) {
            return e || n.status
              ? n.inc(0.3 + 0.5 * Math.random()).set(1)
              : this;
          }),
          (n.inc = function (e) {
            var t = n.status;
            return t
              ? ("number" != typeof e &&
                  (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                (t = a(t + e, 0, 0.994)),
                n.set(t))
              : n.start();
          }),
          (n.trickle = function () {
            return n.inc(Math.random() * r.trickleRate);
          }),
          (e = 0),
          (t = 0),
          (n.promise = function (r) {
            return r && "resolved" !== r.state()
              ? (0 === t && n.start(),
                e++,
                t++,
                r.always(function () {
                  0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                }),
                this)
              : this;
          }),
          (n.render = function (e) {
            if (n.isRendered()) return document.getElementById("nprogress");
            c(document.documentElement, "nprogress-busy");
            var t = document.createElement("div");
            (t.id = "nprogress"), (t.innerHTML = r.template);
            var a,
              i = t.querySelector(r.barSelector),
              l = e ? "-100" : o(n.status || 0),
              s = document.querySelector(r.parent);
            return (
              u(i, {
                transition: "all 0 linear",
                transform: "translate3d(" + l + "%,0,0)",
              }),
              r.showSpinner ||
                ((a = t.querySelector(r.spinnerSelector)) && p(a)),
              s != document.body && c(s, "nprogress-custom-parent"),
              s.appendChild(t),
              t
            );
          }),
          (n.remove = function () {
            f(document.documentElement, "nprogress-busy"),
              f(document.querySelector(r.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && p(e);
          }),
          (n.isRendered = function () {
            return !!document.getElementById("nprogress");
          }),
          (n.getPositioningCSS = function () {
            var e = document.body.style,
              t =
                "WebkitTransform" in e
                  ? "Webkit"
                  : "MozTransform" in e
                  ? "Moz"
                  : "msTransform" in e
                  ? "ms"
                  : "OTransform" in e
                  ? "O"
                  : "";
            return t + "Perspective" in e
              ? "translate3d"
              : t + "Transform" in e
              ? "translate"
              : "margin";
          });
        var l = (function () {
            var e = [];
            function t() {
              var n = e.shift();
              n && n(t);
            }
            return function (n) {
              e.push(n), 1 == e.length && t();
            };
          })(),
          u = (function () {
            var e = ["Webkit", "O", "Moz", "ms"],
              t = {};
            function n(e) {
              return e
                .replace(/^-ms-/, "ms-")
                .replace(/-([\da-z])/gi, function (e, t) {
                  return t.toUpperCase();
                });
            }
            function r(t) {
              var n = document.body.style;
              if (t in n) return t;
              for (
                var r, a = e.length, o = t.charAt(0).toUpperCase() + t.slice(1);
                a--;

              )
                if ((r = e[a] + o) in n) return r;
              return t;
            }
            function a(e) {
              return (e = n(e)), t[e] || (t[e] = r(e));
            }
            function o(e, t, n) {
              (t = a(t)), (e.style[t] = n);
            }
            return function (e, t) {
              var n,
                r,
                a = arguments;
              if (2 == a.length)
                for (n in t)
                  void 0 !== (r = t[n]) && t.hasOwnProperty(n) && o(e, n, r);
              else o(e, a[1], a[2]);
            };
          })();
        function s(e, t) {
          return ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0;
        }
        function c(e, t) {
          var n = d(e),
            r = n + t;
          s(n, t) || (e.className = r.substring(1));
        }
        function f(e, t) {
          var n,
            r = d(e);
          s(e, t) &&
            ((n = r.replace(" " + t + " ", " ")),
            (e.className = n.substring(1, n.length - 1)));
        }
        function d(e) {
          return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
        }
        function p(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        return n;
      }),
        void 0 === (a = "function" == typeof r ? r.call(t, n, t, e) : r) ||
          (e.exports = a);
    },
    7418: function (e) {
      "use strict";
      var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (a) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, o) {
            for (var i, l, u = a(e), s = 1; s < arguments.length; s++) {
              for (var c in (i = Object(arguments[s])))
                n.call(i, c) && (u[c] = i[c]);
              if (t) {
                l = t(i);
                for (var f = 0; f < l.length; f++)
                  r.call(i, l[f]) && (u[l[f]] = i[l[f]]);
              }
            }
            return u;
          };
    },
    7594: function (e, t) {
      function n(e) {
        let t,
          n = [];
        for (let r of e.split(",").map((e) => e.trim()))
          if (/^-?\d+$/.test(r)) n.push(parseInt(r, 10));
          else if (
            (t = r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
          ) {
            let [e, r, a, o] = t;
            if (r && o) {
              (r = parseInt(r)), (o = parseInt(o));
              const e = r < o ? 1 : -1;
              ("-" !== a && ".." !== a && "\u2025" !== a) || (o += e);
              for (let t = r; t !== o; t += e) n.push(t);
            }
          }
        return n;
      }
      (t.default = n), (e.exports = n);
    },
    4779: function (e, t, n) {
      var r = n(5826);
      (e.exports = p),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return l(o(e, t), t);
        }),
        (e.exports.tokensToFunction = l),
        (e.exports.tokensToRegExp = d);
      var a = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function o(e, t) {
        for (
          var n, r = [], o = 0, i = 0, l = "", c = (t && t.delimiter) || "/";
          null != (n = a.exec(e));

        ) {
          var f = n[0],
            d = n[1],
            p = n.index;
          if (((l += e.slice(i, p)), (i = p + f.length), d)) l += d[1];
          else {
            var m = e[i],
              h = n[2],
              g = n[3],
              v = n[4],
              b = n[5],
              y = n[6],
              w = n[7];
            l && (r.push(l), (l = ""));
            var k = null != h && null != m && m !== h,
              E = "+" === y || "*" === y,
              S = "?" === y || "*" === y,
              x = n[2] || c,
              C = v || b;
            r.push({
              name: g || o++,
              prefix: h || "",
              delimiter: x,
              optional: S,
              repeat: E,
              partial: k,
              asterisk: !!w,
              pattern: C ? s(C) : w ? ".*" : "[^" + u(x) + "]+?",
            });
          }
        }
        return i < e.length && (l += e.substr(i)), l && r.push(l), r;
      }
      function i(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function l(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          "object" == typeof e[a] &&
            (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", f(t)));
        return function (t, a) {
          for (
            var o = "",
              l = t || {},
              u = (a || {}).pretty ? i : encodeURIComponent,
              s = 0;
            s < e.length;
            s++
          ) {
            var c = e[s];
            if ("string" != typeof c) {
              var f,
                d = l[c.name];
              if (null == d) {
                if (c.optional) {
                  c.partial && (o += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(d)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(d) +
                      "`"
                  );
                if (0 === d.length) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (var p = 0; p < d.length; p++) {
                  if (((f = u(d[p])), !n[s].test(f)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(f) +
                        "`"
                    );
                  o += (0 === p ? c.prefix : c.delimiter) + f;
                }
              } else {
                if (
                  ((f = c.asterisk
                    ? encodeURI(d).replace(/[?#]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : u(d)),
                  !n[s].test(f))
                )
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      f +
                      '"'
                  );
                o += c.prefix + f;
              }
            } else o += c;
          }
          return o;
        };
      }
      function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function s(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function c(e, t) {
        return (e.keys = t), e;
      }
      function f(e) {
        return e && e.sensitive ? "" : "i";
      }
      function d(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (
          var a = (n = n || {}).strict, o = !1 !== n.end, i = "", l = 0;
          l < e.length;
          l++
        ) {
          var s = e[l];
          if ("string" == typeof s) i += u(s);
          else {
            var d = u(s.prefix),
              p = "(?:" + s.pattern + ")";
            t.push(s),
              s.repeat && (p += "(?:" + d + p + ")*"),
              (i += p = s.optional
                ? s.partial
                  ? d + "(" + p + ")?"
                  : "(?:" + d + "(" + p + "))?"
                : d + "(" + p + ")");
          }
        }
        var m = u(n.delimiter || "/"),
          h = i.slice(-m.length) === m;
        return (
          a || (i = (h ? i.slice(0, -m.length) : i) + "(?:" + m + "(?=$))?"),
          (i += o ? "$" : a && h ? "" : "(?=" + m + "|$)"),
          c(new RegExp("^" + i, f(n)), t)
        );
      }
      function p(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return c(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], a = 0; a < e.length; a++)
                  r.push(p(e[a], t, n).source);
                return c(new RegExp("(?:" + r.join("|") + ")", f(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return d(o(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    7410: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = (function () {
          var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            n = {},
            r = {
              util: {
                encode: function e(t) {
                  return t instanceof a
                    ? new a(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                    e.__id
                  );
                },
                clone: function e(t, n) {
                  var a, o;
                  switch (((n = n || {}), r.util.type(t))) {
                    case "Object":
                      if (((o = r.util.objId(t)), n[o])) return n[o];
                      for (var i in ((a = {}), (n[o] = a), t))
                        t.hasOwnProperty(i) && (a[i] = e(t[i], n));
                      return a;
                    case "Array":
                      return (
                        (o = r.util.objId(t)),
                        n[o]
                          ? n[o]
                          : ((a = []),
                            (n[o] = a),
                            t.forEach(function (t, r) {
                              a[r] = e(t, n);
                            }),
                            a)
                      );
                    default:
                      return t;
                  }
                },
                getLanguage: function (t) {
                  for (; t; ) {
                    var n = e.exec(t.className);
                    if (n) return n[1].toLowerCase();
                    t = t.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (t, n) {
                  (t.className = t.className.replace(RegExp(e, "gi"), "")),
                    t.classList.add("language-" + n);
                },
                isActive: function (e, t, n) {
                  for (var r = "no-" + t; e; ) {
                    var a = e.classList;
                    if (a.contains(t)) return !0;
                    if (a.contains(r)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                plain: n,
                plaintext: n,
                text: n,
                txt: n,
                extend: function (e, t) {
                  var n = r.util.clone(r.languages[e]);
                  for (var a in t) n[a] = t[a];
                  return n;
                },
                insertBefore: function (e, t, n, a) {
                  var o = (a = a || r.languages)[e],
                    i = {};
                  for (var l in o)
                    if (o.hasOwnProperty(l)) {
                      if (l == t)
                        for (var u in n) n.hasOwnProperty(u) && (i[u] = n[u]);
                      n.hasOwnProperty(l) || (i[l] = o[l]);
                    }
                  var s = a[e];
                  return (
                    (a[e] = i),
                    r.languages.DFS(r.languages, function (t, n) {
                      n === s && t != e && (this[t] = i);
                    }),
                    i
                  );
                },
                DFS: function e(t, n, a, o) {
                  o = o || {};
                  var i = r.util.objId;
                  for (var l in t)
                    if (t.hasOwnProperty(l)) {
                      n.call(t, l, t[l], a || l);
                      var u = t[l],
                        s = r.util.type(u);
                      "Object" !== s || o[i(u)]
                        ? "Array" !== s ||
                          o[i(u)] ||
                          ((o[i(u)] = !0), e(u, n, l, o))
                        : ((o[i(u)] = !0), e(u, n, null, o));
                    }
                },
              },
              plugins: {},
              highlight: function (e, t, n) {
                var o = { code: e, grammar: t, language: n };
                return (
                  r.hooks.run("before-tokenize", o),
                  (o.tokens = r.tokenize(o.code, o.grammar)),
                  r.hooks.run("after-tokenize", o),
                  a.stringify(r.util.encode(o.tokens), o.language)
                );
              },
              tokenize: function (e, t) {
                var n = t.rest;
                if (n) {
                  for (var r in n) t[r] = n[r];
                  delete t.rest;
                }
                var a = new l();
                return (
                  u(a, a.head, e),
                  i(e, a, t, a.head, 0),
                  (function (e) {
                    var t = [],
                      n = e.head.next;
                    for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                    return t;
                  })(a)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = r.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = r.hooks.all[e];
                  if (n && n.length) for (var a, o = 0; (a = n[o++]); ) a(t);
                },
              },
              Token: a,
            };
          function a(e, t, n, r) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (r || "").length);
          }
          function o(e, t, n, r) {
            e.lastIndex = t;
            var a = e.exec(n);
            if (a && r && a[1]) {
              var o = a[1].length;
              (a.index += o), (a[0] = a[0].slice(o));
            }
            return a;
          }
          function i(e, t, n, l, c, f) {
            for (var d in n)
              if (n.hasOwnProperty(d) && n[d]) {
                var p = n[d];
                p = Array.isArray(p) ? p : [p];
                for (var m = 0; m < p.length; ++m) {
                  if (f && f.cause == d + "," + m) return;
                  var h = p[m],
                    g = h.inside,
                    v = !!h.lookbehind,
                    b = !!h.greedy,
                    y = h.alias;
                  if (b && !h.pattern.global) {
                    var w = h.pattern.toString().match(/[imsuy]*$/)[0];
                    h.pattern = RegExp(h.pattern.source, w + "g");
                  }
                  for (
                    var k = h.pattern || h, E = l.next, S = c;
                    E !== t.tail && !(f && S >= f.reach);
                    S += E.value.length, E = E.next
                  ) {
                    var x = E.value;
                    if (t.length > e.length) return;
                    if (!(x instanceof a)) {
                      var C,
                        _ = 1;
                      if (b) {
                        if (!(C = o(k, S, e, v)) || C.index >= e.length) break;
                        var T = C.index,
                          L = C.index + C[0].length,
                          P = S;
                        for (P += E.value.length; T >= P; )
                          P += (E = E.next).value.length;
                        if (((S = P -= E.value.length), E.value instanceof a))
                          continue;
                        for (
                          var A = E;
                          A !== t.tail && (P < L || "string" == typeof A.value);
                          A = A.next
                        )
                          _++, (P += A.value.length);
                        _--, (x = e.slice(S, P)), (C.index -= S);
                      } else if (!(C = o(k, 0, x, v))) continue;
                      T = C.index;
                      var O = C[0],
                        N = x.slice(0, T),
                        R = x.slice(T + O.length),
                        I = S + x.length;
                      f && I > f.reach && (f.reach = I);
                      var D = E.prev;
                      if (
                        (N && ((D = u(t, D, N)), (S += N.length)),
                        s(t, D, _),
                        (E = u(t, D, new a(d, g ? r.tokenize(O, g) : O, y, O))),
                        R && u(t, E, R),
                        _ > 1)
                      ) {
                        var M = { cause: d + "," + m, reach: I };
                        i(e, t, n, E.prev, S, M),
                          f && M.reach > f.reach && (f.reach = M.reach);
                      }
                    }
                  }
                }
              }
          }
          function l() {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function u(e, t, n) {
            var r = t.next,
              a = { value: n, prev: t, next: r };
            return (t.next = a), (r.prev = a), e.length++, a;
          }
          function s(e, t, n) {
            for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
            (t.next = r), (r.prev = t), (e.length -= a);
          }
          return (
            (a.stringify = function e(t, n) {
              if ("string" == typeof t) return t;
              if (Array.isArray(t)) {
                var a = "";
                return (
                  t.forEach(function (t) {
                    a += e(t, n);
                  }),
                  a
                );
              }
              var o = {
                  type: t.type,
                  content: e(t.content, n),
                  tag: "span",
                  classes: ["token", t.type],
                  attributes: {},
                  language: n,
                },
                i = t.alias;
              i &&
                (Array.isArray(i)
                  ? Array.prototype.push.apply(o.classes, i)
                  : o.classes.push(i)),
                r.hooks.run("wrap", o);
              var l = "";
              for (var u in o.attributes)
                l +=
                  " " +
                  u +
                  '="' +
                  (o.attributes[u] || "").replace(/"/g, "&quot;") +
                  '"';
              return (
                "<" +
                o.tag +
                ' class="' +
                o.classes.join(" ") +
                '"' +
                l +
                ">" +
                o.content +
                "</" +
                o.tag +
                ">"
              );
            }),
            r
          );
        })(),
        a = r;
      (r.default = r),
        (a.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
        (a.languages.markup.tag.inside["attr-value"].inside.entity =
          a.languages.markup.entity),
        (a.languages.markup.doctype.inside["internal-subset"].inside =
          a.languages.markup),
        a.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(a.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: a.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r["language-" + t] = { pattern: /[\s\S]+/, inside: a.languages[t] };
            var o = {};
            (o[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              a.languages.insertBefore("markup", "cdata", o);
          },
        }),
        Object.defineProperty(a.languages.markup.tag, "addAttribute", {
          value: function (e, t) {
            a.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  "(?:" +
                  e +
                  ")" +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                "i"
              ),
              lookbehind: !0,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, "language-" + t],
                      inside: a.languages[t],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (a.languages.html = a.languages.markup),
        (a.languages.mathml = a.languages.markup),
        (a.languages.svg = a.languages.markup),
        (a.languages.xml = a.languages.extend("markup", {})),
        (a.languages.ssml = a.languages.xml),
        (a.languages.atom = a.languages.xml),
        (a.languages.rss = a.languages.xml),
        (function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: r.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: r.variable,
            function: {
              pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var a = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              o = r.variable[1].inside,
              i = 0;
            i < a.length;
            i++
          )
            o[a[i]] = e.languages.bash[a[i]];
          e.languages.shell = e.languages.bash;
        })(a),
        (a.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (a.languages.c = a.languages.extend("clike", {
          comment: {
            pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          "class-name": {
            pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        a.languages.insertBefore("c", "string", {
          char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0,
          },
        }),
        a.languages.insertBefore("c", "string", {
          macro: {
            pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                a.languages.c.string,
              ],
              char: a.languages.c.char,
              comment: a.languages.c.comment,
              "macro-name": [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: "function",
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword",
              },
              "directive-hash": /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: a.languages.c },
            },
          },
        }),
        a.languages.insertBefore("c", "function", {
          constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete a.languages.c.boolean,
        (function (e) {
          var t = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
              /<keyword>/g,
              function () {
                return t.source;
              }
            );
          (e.languages.cpp = e.languages.extend("c", {
            "class-name": [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    }
                  )
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/,
          })),
            e.languages.insertBefore("cpp", "string", {
              module: {
                pattern: RegExp(
                  /(\b(?:import|module)\s+)/.source +
                    "(?:" +
                    /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                    "|" +
                    /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                      /<mod-name>/g,
                      function () {
                        return n;
                      }
                    ) +
                    ")"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  string: /^[<"][\s\S]+/,
                  operator: /:/,
                  punctuation: /\./,
                },
              },
              "raw-string": {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: "string",
                greedy: !0,
              },
            }),
            e.languages.insertBefore("cpp", "keyword", {
              "generic-function": {
                pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                  function: /^\w+/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp,
                  },
                },
              },
            }),
            e.languages.insertBefore("cpp", "operator", {
              "double-colon": { pattern: /::/, alias: "punctuation" },
            }),
            e.languages.insertBefore("cpp", "class-name", {
              "base-clause": {
                pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend("cpp", {}),
              },
            }),
            e.languages.insertBefore(
              "inside",
              "double-colon",
              { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp["base-clause"]
            );
        })(a),
        (function (e) {
          var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  t.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  t.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: t, greedy: !0 },
            property: {
              pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            n.tag.addAttribute("style", "css"));
        })(a),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              "pseudo-class": /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  "case-sensitivity": {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  "attr-name": {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  "attr-value": [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              "n-th": [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside[
              "selector-function-argument"
            ].inside = t),
            e.languages.insertBefore("css", "property", {
              variable: {
                pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
            a = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore("css", "function", {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
            color: [
              {
                pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: a,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: a,
          });
        })(a),
        (a.languages.javascript = a.languages.extend("clike", {
          "class-name": [
            a.languages.clike["class-name"],
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                /NaN|Infinity/.source +
                "|" +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                "|" +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                "|" +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                "|" +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (a.languages.javascript[
          "class-name"
        ][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        a.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: a.languages.regex,
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/,
            },
          },
          "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        a.languages.insertBefore("javascript", "string", {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
          "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation",
                  },
                  rest: a.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
        }),
        a.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property",
          },
        }),
        a.languages.markup &&
          (a.languages.markup.tag.addInlined("script", "javascript"),
          a.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            "javascript"
          )),
        (a.languages.js = a.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function o(e, t) {
            return (
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return r;
                })
                .replace(/<SPREAD>/g, function () {
                  return a;
                })),
              RegExp(e, t)
            );
          }
          (a = o(a).source),
            (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = o(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside[
              "attr-value"
            ].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside[
              "class-name"
            ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: o(/<SPREAD>/.source),
                  inside: e.languages.jsx,
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: o(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag
            );
          var i = function (e) {
              return e
                ? "string" == typeof e
                  ? e
                  : "string" == typeof e.content
                  ? e.content
                  : e.content.map(i).join("")
                : "";
            },
            l = function (t) {
              for (var n = [], r = 0; r < t.length; r++) {
                var a = t[r],
                  o = !1;
                if (
                  ("string" != typeof a &&
                    ("tag" === a.type &&
                    a.content[0] &&
                    "tag" === a.content[0].type
                      ? "</" === a.content[0].content[0].content
                        ? n.length > 0 &&
                          n[n.length - 1].tagName ===
                            i(a.content[0].content[1]) &&
                          n.pop()
                        : "/>" === a.content[a.content.length - 1].content ||
                          n.push({
                            tagName: i(a.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : n.length > 0 &&
                        "punctuation" === a.type &&
                        "{" === a.content
                      ? n[n.length - 1].openedBraces++
                      : n.length > 0 &&
                        n[n.length - 1].openedBraces > 0 &&
                        "punctuation" === a.type &&
                        "}" === a.content
                      ? n[n.length - 1].openedBraces--
                      : (o = !0)),
                  (o || "string" == typeof a) &&
                    n.length > 0 &&
                    0 === n[n.length - 1].openedBraces)
                ) {
                  var u = i(a);
                  r < t.length - 1 &&
                    ("string" == typeof t[r + 1] ||
                      "plain-text" === t[r + 1].type) &&
                    ((u += i(t[r + 1])), t.splice(r + 1, 1)),
                    r > 0 &&
                      ("string" == typeof t[r - 1] ||
                        "plain-text" === t[r - 1].type) &&
                      ((u = i(t[r - 1]) + u), t.splice(r - 1, 1), r--),
                    (t[r] = new e.Token("plain-text", u, null, u));
                }
                a.content && "string" != typeof a.content && l(a.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            ("jsx" !== e.language && "tsx" !== e.language) || l(e.tokens);
          });
        })(a),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t
            );
          }
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.insertBefore("javascript", "keyword", {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var n = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var a = n[r],
              o = e.languages.javascript[a];
            "RegExp" === e.util.type(o) &&
              (o = e.languages.javascript[a] = { pattern: o });
            var i = o.inside || {};
            (o.inside = i), (i["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(a),
        (function (e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            r = t.inside.interpolation,
            a = r.inside["interpolation-punctuation"],
            o = r.pattern.source;
          function i(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + r + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function l(e, t) {
            return "___" + t.toUpperCase() + "_" + e + "___";
          }
          function u(t, n, r) {
            var a = { code: t, grammar: n, language: r };
            return (
              e.hooks.run("before-tokenize", a),
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run("after-tokenize", a),
              a.tokens
            );
          }
          function s(t) {
            var n = {};
            n["interpolation-punctuation"] = a;
            var o = e.tokenize(t, n);
            if (3 === o.length) {
              var i = [1, 1];
              i.push.apply(i, u(o[1], e.languages.javascript, "javascript")),
                o.splice.apply(o, i);
            }
            return new e.Token("interpolation", o, r.alias, t);
          }
          function c(t, n, r) {
            var a = e.tokenize(t, {
                interpolation: { pattern: RegExp(o), lookbehind: !0 },
              }),
              i = 0,
              c = {},
              f = u(
                a
                  .map(function (e) {
                    if ("string" == typeof e) return e;
                    for (
                      var n, a = e.content;
                      -1 !== t.indexOf((n = l(i++, r)));

                    );
                    return (c[n] = a), n;
                  })
                  .join(""),
                n,
                r
              ),
              d = Object.keys(c);
            return (
              (i = 0),
              (function e(t) {
                for (var n = 0; n < t.length; n++) {
                  if (i >= d.length) return;
                  var r = t[n];
                  if ("string" == typeof r || "string" == typeof r.content) {
                    var a = d[i],
                      o = "string" == typeof r ? r : r.content,
                      l = o.indexOf(a);
                    if (-1 !== l) {
                      ++i;
                      var u = o.substring(0, l),
                        f = s(c[a]),
                        p = o.substring(l + a.length),
                        m = [];
                      if ((u && m.push(u), m.push(f), p)) {
                        var h = [p];
                        e(h), m.push.apply(m, h);
                      }
                      "string" == typeof r
                        ? (t.splice.apply(t, [n, 1].concat(m)),
                          (n += m.length - 1))
                        : (r.content = m);
                    }
                  } else {
                    var g = r.content;
                    Array.isArray(g) ? e(g) : e([g]);
                  }
                }
              })(f),
              new e.Token(r, f, "language-" + r, t)
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:markdown|md)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            i("sql", /\bsql/.source),
            t,
          ].filter(Boolean);
          var f = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          function d(e) {
            return "string" == typeof e
              ? e
              : Array.isArray(e)
              ? e.map(d).join("")
              : d(e.content);
          }
          e.hooks.add("after-tokenize", function (t) {
            t.language in f &&
              (function t(n) {
                for (var r = 0, a = n.length; r < a; r++) {
                  var o = n[r];
                  if ("string" != typeof o) {
                    var i = o.content;
                    if (Array.isArray(i))
                      if ("template-string" === o.type) {
                        var l = i[1];
                        if (
                          3 === i.length &&
                          "string" != typeof l &&
                          "embedded-code" === l.type
                        ) {
                          var u = d(l),
                            s = l.alias,
                            f = Array.isArray(s) ? s[0] : s,
                            p = e.languages[f];
                          if (!p) continue;
                          i[1] = c(u, p, f);
                        }
                      } else t(i);
                    else "string" != typeof i && t([i]);
                  }
                }
              })(t.tokens);
          });
        })(a),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: "variable" };
          (e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
          })),
            e.languages.insertBefore("coffeescript", "comment", {
              "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment",
              },
              "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore("coffeescript", "string", {
              "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: "language-javascript",
                    inside: e.languages.javascript,
                  },
                },
              },
              "multiline-string": [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: "string",
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript["template-string"],
            (e.languages.coffee = e.languages.coffeescript);
        })(a),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              a = [];
            /^\w+$/.test(n) || a.push(/\w+/.exec(n)[0]),
              "diff" === n && a.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: a,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(a),
        (a.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/ },
          },
          coord: /^@@.*@@$/m,
          "commit-sha1": /^commit \w{40}$/m,
        }),
        (a.languages.go = a.languages.extend("clike", {
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
            lookbehind: !0,
            greedy: !0,
          },
          keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        a.languages.insertBefore("go", "string", {
          char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
        }),
        delete a.languages.go["class-name"],
        (a.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: a.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        a.hooks.add("after-tokenize", function (e) {
          if ("graphql" === e.language)
            for (
              var t = e.tokens.filter(function (e) {
                  return (
                    "string" != typeof e &&
                    "comment" !== e.type &&
                    "scalar" !== e.type
                  );
                }),
                n = 0;
              n < t.length;

            ) {
              var r = t[n++];
              if ("keyword" === r.type && "mutation" === r.content) {
                var a = [];
                if (
                  f(["definition-mutation", "punctuation"]) &&
                  "(" === c(1).content
                ) {
                  n += 2;
                  var o = d(/^\($/, /^\)$/);
                  if (-1 === o) continue;
                  for (; n < o; n++) {
                    var i = c(0);
                    "variable" === i.type &&
                      (p(i, "variable-input"), a.push(i.content));
                  }
                  n = o + 1;
                }
                if (
                  f(["punctuation", "property-query"]) &&
                  "{" === c(0).content &&
                  (n++, p(c(0), "property-mutation"), a.length > 0)
                ) {
                  var l = d(/^\{$/, /^\}$/);
                  if (-1 === l) continue;
                  for (var u = n; u < l; u++) {
                    var s = t[u];
                    "variable" === s.type &&
                      a.indexOf(s.content) >= 0 &&
                      p(s, "variable-input");
                  }
                }
              }
            }
          function c(e) {
            return t[n + e];
          }
          function f(e, t) {
            t = t || 0;
            for (var n = 0; n < e.length; n++) {
              var r = c(n + t);
              if (!r || r.type !== e[n]) return !1;
            }
            return !0;
          }
          function d(e, r) {
            for (var a = 1, o = n; o < t.length; o++) {
              var i = t[o],
                l = i.content;
              if ("punctuation" === i.type && "string" == typeof l)
                if (e.test(l)) a++;
                else if (r.test(l) && 0 === --a) return o;
            }
            return -1;
          }
          function p(e, t) {
            var n = e.alias;
            n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []),
              n.push(t);
          }
        }),
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, r, a, o) {
                if (n.language === r) {
                  var i = (n.tokenStack = []);
                  (n.code = n.code.replace(a, function (e) {
                    if ("function" == typeof o && !o(e)) return e;
                    for (
                      var a, l = i.length;
                      -1 !== n.code.indexOf((a = t(r, l)));

                    )
                      ++l;
                    return (i[l] = e), a;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var a = 0,
                    o = Object.keys(n.tokenStack);
                  !(function i(l) {
                    for (var u = 0; u < l.length && !(a >= o.length); u++) {
                      var s = l[u];
                      if (
                        "string" == typeof s ||
                        (s.content && "string" == typeof s.content)
                      ) {
                        var c = o[a],
                          f = n.tokenStack[c],
                          d = "string" == typeof s ? s : s.content,
                          p = t(r, c),
                          m = d.indexOf(p);
                        if (m > -1) {
                          ++a;
                          var h = d.substring(0, m),
                            g = new e.Token(
                              r,
                              e.tokenize(f, n.grammar),
                              "language-" + r,
                              f
                            ),
                            v = d.substring(m + p.length),
                            b = [];
                          h && b.push.apply(b, i([h])),
                            b.push(g),
                            v && b.push.apply(b, i([v])),
                            "string" == typeof s
                              ? l.splice.apply(l, [u, 1].concat(b))
                              : (s.content = b);
                        }
                      } else s.content && i(s.content);
                    }
                    return l;
                  })(n.tokens);
                }
              },
            },
          });
        })(a),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:false|true)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
              lookbehind: !0,
              alias: "keyword",
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add("before-tokenize", function (t) {
              e.languages["markup-templating"].buildPlaceholders(
                t,
                "handlebars",
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              );
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(
                t,
                "handlebars"
              );
            }),
            (e.languages.hbs = e.languages.handlebars);
        })(a),
        (a.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (a.languages.webmanifest = a.languages.json),
        (a.languages.less = a.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
        a.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (a.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "builtin-target": {
            pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            alias: "builtin",
          },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: "symbol",
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r;
              }
            ),
            o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
              .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + o + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + o + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + o + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(r),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (n) {
                  t !== n &&
                    (e.languages.markdown[t].inside.content.inside[n] =
                      e.languages.markdown[n]);
                }
              );
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" != typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                      var a = t[n];
                      if ("code" === a.type) {
                        var o = a.content[1],
                          i = a.content[3];
                        if (
                          o &&
                          i &&
                          "code-language" === o.type &&
                          "code-block" === i.type &&
                          "string" == typeof o.content
                        ) {
                          var l = o.content
                              .replace(/\b#/g, "sharp")
                              .replace(/\b\+\+/g, "pp"),
                            u =
                              "language-" +
                              (l = (/[a-z][\w-]*/i.exec(l) || [
                                "",
                              ])[0].toLowerCase());
                          i.alias
                            ? "string" == typeof i.alias
                              ? (i.alias = [i.alias, u])
                              : i.alias.push(u)
                            : (i.alias = [u]);
                        }
                      } else e(a.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                  var o = t.classes[r],
                    s = /language-(.+)/.exec(o);
                  if (s) {
                    n = s[1];
                    break;
                  }
                }
                var c,
                  f = e.languages[n];
                if (f)
                  t.content = e.highlight(
                    ((c = t.content),
                    c
                      .replace(i, "")
                      .replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (
                        e,
                        t
                      ) {
                        var n;
                        if ("#" === (t = t.toLowerCase())[0])
                          return (
                            (n =
                              "x" === t[1]
                                ? parseInt(t.slice(2), 16)
                                : Number(t.slice(1))),
                            u(n)
                          );
                        var r = l[t];
                        return r || e;
                      })),
                    f,
                    n
                  );
                else if (n && "none" !== n && e.plugins.autoloader) {
                  var d =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = d),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(d);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            });
          var i = RegExp(e.languages.markup.tag.pattern.source, "gi"),
            l = { amp: "&", lt: "<", gt: ">", quot: '"' },
            u = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(a),
        (a.languages.objectivec = a.languages.extend("c", {
          string: {
            pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete a.languages.objectivec["class-name"],
        (a.languages.objc = a.languages.objectivec),
        (a.languages.ocaml = {
          comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
          char: {
            pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
            greedy: !0,
          },
          string: [
            { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
          ],
          number: [
            /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
            /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
            /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
          ],
          directive: { pattern: /\B#\w+/, alias: "property" },
          label: { pattern: /\B~\w+/, alias: "property" },
          "type-variable": { pattern: /\B'\w+/, alias: "function" },
          variant: { pattern: /`\w+/, alias: "symbol" },
          keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          "operator-like-punctuation": {
            pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
            alias: "punctuation",
          },
          operator: /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
        }),
        (a.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          "string-interpolation": {
            pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (a.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = a.languages.python),
        (a.languages.py = a.languages.python),
        (a.languages.reason = a.languages.extend("clike", {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        a.languages.insertBefore("reason", "class-name", {
          char: {
            pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            greedy: !0,
          },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete a.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
              greedy: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                greedy: !0,
                inside: { atrule: /(?:@[\w-]+|[+=])/ },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
              { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              greedy: !0,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              greedy: !0,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0,
              },
            });
        })(a),
        (a.languages.scss = a.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        a.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        a.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        a.languages.insertBefore("scss", "function", {
          "module-modifier": {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: "keyword",
          },
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (a.languages.scss.atrule.inside.rest = a.languages.scss),
        (a.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:false|true)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (r.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
              delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
              rest: r,
            },
          }),
            (r.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              "atrule-declaration": {
                pattern: /(^[ \t]*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              "property-declaration": {
                pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(a),
        (function (e) {
          (e.languages.typescript = e.languages.extend("javascript", {
            "class-name": {
              pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            e.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete e.languages.typescript.parameter,
            delete e.languages.typescript["literal-property"];
          var t = e.languages.extend("typescript", {});
          delete t["class-name"],
            (e.languages.typescript["class-name"].inside = t),
            e.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(a),
        (function (e) {
          var t = e.util.clone(e.languages.typescript);
          (e.languages.tsx = e.languages.extend("jsx", t)),
            delete e.languages.tsx.parameter,
            delete e.languages.tsx["literal-property"];
          var n = e.languages.tsx.tag;
          (n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
            n.pattern.flags
          )),
            (n.lookbehind = !0);
        })(a),
        (a.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
          number: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              "(?:" +
              n.source +
              "(?:[ \t]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ \t]+" +
              n.source +
              ")?)",
            a = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
              /<PLAIN>/g,
              function () {
                return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                  .source;
              }
            ),
            o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function i(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function () {
                return r;
              })
              .replace(/<<value>>/g, function () {
                return e;
              });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + a + "|" + o + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: i(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: i(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: i(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: i(o), lookbehind: !0, greedy: !0 },
            number: {
              pattern: i(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(a),
        (t.default = a);
    },
    9901: function (e) {
      e.exports &&
        (e.exports = {
          core: {
            meta: { path: "components/prism-core.js", option: "mandatory" },
            core: "Core",
          },
          themes: {
            meta: {
              path: "themes/{id}.css",
              link: "index.html?theme={id}",
              exclusive: !0,
            },
            prism: { title: "Default", option: "default" },
            "prism-dark": "Dark",
            "prism-funky": "Funky",
            "prism-okaidia": { title: "Okaidia", owner: "ocodia" },
            "prism-twilight": { title: "Twilight", owner: "remybach" },
            "prism-coy": { title: "Coy", owner: "tshedor" },
            "prism-solarizedlight": {
              title: "Solarized Light",
              owner: "hectormatos2011 ",
            },
            "prism-tomorrow": { title: "Tomorrow Night", owner: "Rosey" },
          },
          languages: {
            meta: {
              path: "components/prism-{id}",
              noCSS: !0,
              examplesPath: "examples/prism-{id}",
              addCheckAll: !0,
            },
            markup: {
              title: "Markup",
              alias: ["html", "xml", "svg", "mathml", "ssml", "atom", "rss"],
              aliasTitles: {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                atom: "Atom",
                rss: "RSS",
              },
              option: "default",
            },
            css: { title: "CSS", option: "default", modify: "markup" },
            clike: { title: "C-like", option: "default" },
            javascript: {
              title: "JavaScript",
              require: "clike",
              modify: "markup",
              optional: "regex",
              alias: "js",
              option: "default",
            },
            abap: { title: "ABAP", owner: "dellagustin" },
            abnf: { title: "ABNF", owner: "RunDevelopment" },
            actionscript: {
              title: "ActionScript",
              require: "javascript",
              modify: "markup",
              owner: "Golmote",
            },
            ada: { title: "Ada", owner: "Lucretia" },
            agda: { title: "Agda", owner: "xy-ren" },
            al: { title: "AL", owner: "RunDevelopment" },
            antlr4: { title: "ANTLR4", alias: "g4", owner: "RunDevelopment" },
            apacheconf: { title: "Apache Configuration", owner: "GuiTeK" },
            apex: {
              title: "Apex",
              require: ["clike", "sql"],
              owner: "RunDevelopment",
            },
            apl: { title: "APL", owner: "ngn" },
            applescript: { title: "AppleScript", owner: "Golmote" },
            aql: { title: "AQL", owner: "RunDevelopment" },
            arduino: {
              title: "Arduino",
              require: "cpp",
              alias: "ino",
              owner: "dkern",
            },
            arff: { title: "ARFF", owner: "Golmote" },
            asciidoc: { alias: "adoc", title: "AsciiDoc", owner: "Golmote" },
            aspnet: {
              title: "ASP.NET (C#)",
              require: ["markup", "csharp"],
              owner: "nauzilus",
            },
            asm6502: { title: "6502 Assembly", owner: "kzurawel" },
            asmatmel: { title: "Atmel AVR Assembly", owner: "cerkit" },
            autohotkey: { title: "AutoHotkey", owner: "aviaryan" },
            autoit: { title: "AutoIt", owner: "Golmote" },
            avisynth: { title: "AviSynth", alias: "avs", owner: "Zinfidel" },
            "avro-idl": {
              title: "Avro IDL",
              alias: "avdl",
              owner: "RunDevelopment",
            },
            bash: {
              title: "Bash",
              alias: "shell",
              aliasTitles: { shell: "Shell" },
              owner: "zeitgeist87",
            },
            basic: { title: "BASIC", owner: "Golmote" },
            batch: { title: "Batch", owner: "Golmote" },
            bbcode: {
              title: "BBcode",
              alias: "shortcode",
              aliasTitles: { shortcode: "Shortcode" },
              owner: "RunDevelopment",
            },
            bicep: { title: "Bicep", owner: "johnnyreilly" },
            birb: { title: "Birb", require: "clike", owner: "Calamity210" },
            bison: { title: "Bison", require: "c", owner: "Golmote" },
            bnf: {
              title: "BNF",
              alias: "rbnf",
              aliasTitles: { rbnf: "RBNF" },
              owner: "RunDevelopment",
            },
            brainfuck: { title: "Brainfuck", owner: "Golmote" },
            brightscript: { title: "BrightScript", owner: "RunDevelopment" },
            bro: { title: "Bro", owner: "wayward710" },
            bsl: {
              title: "BSL (1C:Enterprise)",
              alias: "oscript",
              aliasTitles: { oscript: "OneScript" },
              owner: "Diversus23",
            },
            c: { title: "C", require: "clike", owner: "zeitgeist87" },
            csharp: {
              title: "C#",
              require: "clike",
              alias: ["cs", "dotnet"],
              owner: "mvalipour",
            },
            cpp: { title: "C++", require: "c", owner: "zeitgeist87" },
            cfscript: {
              title: "CFScript",
              require: "clike",
              alias: "cfc",
              owner: "mjclemente",
            },
            chaiscript: {
              title: "ChaiScript",
              require: ["clike", "cpp"],
              owner: "RunDevelopment",
            },
            cil: { title: "CIL", owner: "sbrl" },
            clojure: { title: "Clojure", owner: "troglotit" },
            cmake: { title: "CMake", owner: "mjrogozinski" },
            cobol: { title: "COBOL", owner: "RunDevelopment" },
            coffeescript: {
              title: "CoffeeScript",
              require: "javascript",
              alias: "coffee",
              owner: "R-osey",
            },
            concurnas: {
              title: "Concurnas",
              alias: "conc",
              owner: "jasontatton",
            },
            csp: { title: "Content-Security-Policy", owner: "ScottHelme" },
            coq: { title: "Coq", owner: "RunDevelopment" },
            crystal: {
              title: "Crystal",
              require: "ruby",
              owner: "MakeNowJust",
            },
            "css-extras": {
              title: "CSS Extras",
              require: "css",
              modify: "css",
              owner: "milesj",
            },
            csv: { title: "CSV", owner: "RunDevelopment" },
            cypher: { title: "Cypher", owner: "RunDevelopment" },
            d: { title: "D", require: "clike", owner: "Golmote" },
            dart: { title: "Dart", require: "clike", owner: "Golmote" },
            dataweave: { title: "DataWeave", owner: "machaval" },
            dax: { title: "DAX", owner: "peterbud" },
            dhall: { title: "Dhall", owner: "RunDevelopment" },
            diff: { title: "Diff", owner: "uranusjr" },
            django: {
              title: "Django/Jinja2",
              require: "markup-templating",
              alias: "jinja2",
              owner: "romanvm",
            },
            "dns-zone-file": {
              title: "DNS zone file",
              owner: "RunDevelopment",
              alias: "dns-zone",
            },
            docker: {
              title: "Docker",
              alias: "dockerfile",
              owner: "JustinBeckwith",
            },
            dot: {
              title: "DOT (Graphviz)",
              alias: "gv",
              optional: "markup",
              owner: "RunDevelopment",
            },
            ebnf: { title: "EBNF", owner: "RunDevelopment" },
            editorconfig: { title: "EditorConfig", owner: "osipxd" },
            eiffel: { title: "Eiffel", owner: "Conaclos" },
            ejs: {
              title: "EJS",
              require: ["javascript", "markup-templating"],
              owner: "RunDevelopment",
              alias: "eta",
              aliasTitles: { eta: "Eta" },
            },
            elixir: { title: "Elixir", owner: "Golmote" },
            elm: { title: "Elm", owner: "zwilias" },
            etlua: {
              title: "Embedded Lua templating",
              require: ["lua", "markup-templating"],
              owner: "RunDevelopment",
            },
            erb: {
              title: "ERB",
              require: ["ruby", "markup-templating"],
              owner: "Golmote",
            },
            erlang: { title: "Erlang", owner: "Golmote" },
            "excel-formula": {
              title: "Excel Formula",
              alias: ["xlsx", "xls"],
              owner: "RunDevelopment",
            },
            fsharp: { title: "F#", require: "clike", owner: "simonreynolds7" },
            factor: { title: "Factor", owner: "catb0t" },
            false: { title: "False", owner: "edukisto" },
            "firestore-security-rules": {
              title: "Firestore security rules",
              require: "clike",
              owner: "RunDevelopment",
            },
            flow: { title: "Flow", require: "javascript", owner: "Golmote" },
            fortran: { title: "Fortran", owner: "Golmote" },
            ftl: {
              title: "FreeMarker Template Language",
              require: "markup-templating",
              owner: "RunDevelopment",
            },
            gml: {
              title: "GameMaker Language",
              alias: "gamemakerlanguage",
              require: "clike",
              owner: "LiarOnce",
            },
            gap: { title: "GAP (CAS)", owner: "RunDevelopment" },
            gcode: { title: "G-code", owner: "RunDevelopment" },
            gdscript: { title: "GDScript", owner: "RunDevelopment" },
            gedcom: { title: "GEDCOM", owner: "Golmote" },
            gherkin: { title: "Gherkin", owner: "hason" },
            git: { title: "Git", owner: "lgiraudel" },
            glsl: { title: "GLSL", require: "c", owner: "Golmote" },
            gn: { title: "GN", alias: "gni", owner: "RunDevelopment" },
            go: { title: "Go", require: "clike", owner: "arnehormann" },
            "go-module": {
              title: "Go module",
              alias: "go-mod",
              owner: "RunDevelopment",
            },
            graphql: {
              title: "GraphQL",
              optional: "markdown",
              owner: "Golmote",
            },
            groovy: { title: "Groovy", require: "clike", owner: "robfletcher" },
            haml: {
              title: "Haml",
              require: "ruby",
              optional: [
                "css",
                "css-extras",
                "coffeescript",
                "erb",
                "javascript",
                "less",
                "markdown",
                "scss",
                "textile",
              ],
              owner: "Golmote",
            },
            handlebars: {
              title: "Handlebars",
              require: "markup-templating",
              alias: "hbs",
              owner: "Golmote",
            },
            haskell: { title: "Haskell", alias: "hs", owner: "bholst" },
            haxe: {
              title: "Haxe",
              require: "clike",
              optional: "regex",
              owner: "Golmote",
            },
            hcl: { title: "HCL", owner: "outsideris" },
            hlsl: { title: "HLSL", require: "c", owner: "RunDevelopment" },
            hoon: { title: "Hoon", owner: "matildepark" },
            http: {
              title: "HTTP",
              optional: [
                "csp",
                "css",
                "hpkp",
                "hsts",
                "javascript",
                "json",
                "markup",
                "uri",
              ],
              owner: "danielgtaylor",
            },
            hpkp: { title: "HTTP Public-Key-Pins", owner: "ScottHelme" },
            hsts: {
              title: "HTTP Strict-Transport-Security",
              owner: "ScottHelme",
            },
            ichigojam: { title: "IchigoJam", owner: "BlueCocoa" },
            icon: { title: "Icon", owner: "Golmote" },
            "icu-message-format": {
              title: "ICU Message Format",
              owner: "RunDevelopment",
            },
            idris: {
              title: "Idris",
              alias: "idr",
              owner: "KeenS",
              require: "haskell",
            },
            ignore: {
              title: ".ignore",
              owner: "osipxd",
              alias: ["gitignore", "hgignore", "npmignore"],
              aliasTitles: {
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
              },
            },
            inform7: { title: "Inform 7", owner: "Golmote" },
            ini: { title: "Ini", owner: "aviaryan" },
            io: { title: "Io", owner: "AlesTsurko" },
            j: { title: "J", owner: "Golmote" },
            java: { title: "Java", require: "clike", owner: "sherblot" },
            javadoc: {
              title: "JavaDoc",
              require: ["markup", "java", "javadoclike"],
              modify: "java",
              optional: "scala",
              owner: "RunDevelopment",
            },
            javadoclike: {
              title: "JavaDoc-like",
              modify: ["java", "javascript", "php"],
              owner: "RunDevelopment",
            },
            javastacktrace: {
              title: "Java stack trace",
              owner: "RunDevelopment",
            },
            jexl: { title: "Jexl", owner: "czosel" },
            jolie: { title: "Jolie", require: "clike", owner: "thesave" },
            jq: { title: "JQ", owner: "RunDevelopment" },
            jsdoc: {
              title: "JSDoc",
              require: ["javascript", "javadoclike", "typescript"],
              modify: "javascript",
              optional: ["actionscript", "coffeescript"],
              owner: "RunDevelopment",
            },
            "js-extras": {
              title: "JS Extras",
              require: "javascript",
              modify: "javascript",
              optional: [
                "actionscript",
                "coffeescript",
                "flow",
                "n4js",
                "typescript",
              ],
              owner: "RunDevelopment",
            },
            json: {
              title: "JSON",
              alias: "webmanifest",
              aliasTitles: { webmanifest: "Web App Manifest" },
              owner: "CupOfTea696",
            },
            json5: { title: "JSON5", require: "json", owner: "RunDevelopment" },
            jsonp: { title: "JSONP", require: "json", owner: "RunDevelopment" },
            jsstacktrace: { title: "JS stack trace", owner: "sbrl" },
            "js-templates": {
              title: "JS Templates",
              require: "javascript",
              modify: "javascript",
              optional: [
                "css",
                "css-extras",
                "graphql",
                "markdown",
                "markup",
                "sql",
              ],
              owner: "RunDevelopment",
            },
            julia: { title: "Julia", owner: "cdagnino" },
            keepalived: { title: "Keepalived Configure", owner: "dev-itsheng" },
            keyman: { title: "Keyman", owner: "mcdurdin" },
            kotlin: {
              title: "Kotlin",
              alias: ["kt", "kts"],
              aliasTitles: { kts: "Kotlin Script" },
              require: "clike",
              owner: "Golmote",
            },
            kumir: {
              title: "KuMir (\u041a\u0443\u041c\u0438\u0440)",
              alias: "kum",
              owner: "edukisto",
            },
            kusto: { title: "Kusto", owner: "RunDevelopment" },
            latex: {
              title: "LaTeX",
              alias: ["tex", "context"],
              aliasTitles: { tex: "TeX", context: "ConTeXt" },
              owner: "japborst",
            },
            latte: {
              title: "Latte",
              require: ["clike", "markup-templating", "php"],
              owner: "nette",
            },
            less: {
              title: "Less",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            lilypond: {
              title: "LilyPond",
              require: "scheme",
              alias: "ly",
              owner: "RunDevelopment",
            },
            liquid: {
              title: "Liquid",
              require: "markup-templating",
              owner: "cinhtau",
            },
            lisp: {
              title: "Lisp",
              alias: ["emacs", "elisp", "emacs-lisp"],
              owner: "JuanCaicedo",
            },
            livescript: { title: "LiveScript", owner: "Golmote" },
            llvm: { title: "LLVM IR", owner: "porglezomp" },
            log: {
              title: "Log file",
              optional: "javastacktrace",
              owner: "RunDevelopment",
            },
            lolcode: { title: "LOLCODE", owner: "Golmote" },
            lua: { title: "Lua", owner: "Golmote" },
            magma: { title: "Magma (CAS)", owner: "RunDevelopment" },
            makefile: { title: "Makefile", owner: "Golmote" },
            markdown: {
              title: "Markdown",
              require: "markup",
              optional: "yaml",
              alias: "md",
              owner: "Golmote",
            },
            "markup-templating": {
              title: "Markup templating",
              require: "markup",
              owner: "Golmote",
            },
            matlab: { title: "MATLAB", owner: "Golmote" },
            maxscript: { title: "MAXScript", owner: "RunDevelopment" },
            mel: { title: "MEL", owner: "Golmote" },
            mermaid: { title: "Mermaid", owner: "RunDevelopment" },
            mizar: { title: "Mizar", owner: "Golmote" },
            mongodb: {
              title: "MongoDB",
              owner: "airs0urce",
              require: "javascript",
            },
            monkey: { title: "Monkey", owner: "Golmote" },
            moonscript: {
              title: "MoonScript",
              alias: "moon",
              owner: "RunDevelopment",
            },
            n1ql: { title: "N1QL", owner: "TMWilds" },
            n4js: {
              title: "N4JS",
              require: "javascript",
              optional: "jsdoc",
              alias: "n4jsd",
              owner: "bsmith-n4",
            },
            "nand2tetris-hdl": {
              title: "Nand To Tetris HDL",
              owner: "stephanmax",
            },
            naniscript: {
              title: "Naninovel Script",
              owner: "Elringus",
              alias: "nani",
            },
            nasm: { title: "NASM", owner: "rbmj" },
            neon: { title: "NEON", owner: "nette" },
            nevod: { title: "Nevod", owner: "nezaboodka" },
            nginx: { title: "nginx", owner: "volado" },
            nim: { title: "Nim", owner: "Golmote" },
            nix: { title: "Nix", owner: "Golmote" },
            nsis: { title: "NSIS", owner: "idleberg" },
            objectivec: {
              title: "Objective-C",
              require: "c",
              alias: "objc",
              owner: "uranusjr",
            },
            ocaml: { title: "OCaml", owner: "Golmote" },
            opencl: {
              title: "OpenCL",
              require: "c",
              modify: ["c", "cpp"],
              owner: "Milania1",
            },
            openqasm: {
              title: "OpenQasm",
              alias: "qasm",
              owner: "RunDevelopment",
            },
            oz: { title: "Oz", owner: "Golmote" },
            parigp: { title: "PARI/GP", owner: "Golmote" },
            parser: { title: "Parser", require: "markup", owner: "Golmote" },
            pascal: {
              title: "Pascal",
              alias: "objectpascal",
              aliasTitles: { objectpascal: "Object Pascal" },
              owner: "Golmote",
            },
            pascaligo: { title: "Pascaligo", owner: "DefinitelyNotAGoat" },
            psl: { title: "PATROL Scripting Language", owner: "bertysentry" },
            pcaxis: { title: "PC-Axis", alias: "px", owner: "RunDevelopment" },
            peoplecode: {
              title: "PeopleCode",
              alias: "pcode",
              owner: "RunDevelopment",
            },
            perl: { title: "Perl", owner: "Golmote" },
            php: {
              title: "PHP",
              require: "markup-templating",
              owner: "milesj",
            },
            phpdoc: {
              title: "PHPDoc",
              require: ["php", "javadoclike"],
              modify: "php",
              owner: "RunDevelopment",
            },
            "php-extras": {
              title: "PHP Extras",
              require: "php",
              modify: "php",
              owner: "milesj",
            },
            plsql: { title: "PL/SQL", require: "sql", owner: "Golmote" },
            powerquery: {
              title: "PowerQuery",
              alias: ["pq", "mscript"],
              owner: "peterbud",
            },
            powershell: { title: "PowerShell", owner: "nauzilus" },
            processing: {
              title: "Processing",
              require: "clike",
              owner: "Golmote",
            },
            prolog: { title: "Prolog", owner: "Golmote" },
            promql: { title: "PromQL", owner: "arendjr" },
            properties: { title: ".properties", owner: "Golmote" },
            protobuf: {
              title: "Protocol Buffers",
              require: "clike",
              owner: "just-boris",
            },
            pug: {
              title: "Pug",
              require: ["markup", "javascript"],
              optional: [
                "coffeescript",
                "ejs",
                "handlebars",
                "less",
                "livescript",
                "markdown",
                "scss",
                "stylus",
                "twig",
              ],
              owner: "Golmote",
            },
            puppet: { title: "Puppet", owner: "Golmote" },
            pure: {
              title: "Pure",
              optional: ["c", "cpp", "fortran"],
              owner: "Golmote",
            },
            purebasic: {
              title: "PureBasic",
              require: "clike",
              alias: "pbfasm",
              owner: "HeX0R101",
            },
            purescript: {
              title: "PureScript",
              require: "haskell",
              alias: "purs",
              owner: "sriharshachilakapati",
            },
            python: { title: "Python", alias: "py", owner: "multipetros" },
            qsharp: {
              title: "Q#",
              require: "clike",
              alias: "qs",
              owner: "fedonman",
            },
            q: { title: "Q (kdb+ database)", owner: "Golmote" },
            qml: {
              title: "QML",
              require: "javascript",
              owner: "RunDevelopment",
            },
            qore: { title: "Qore", require: "clike", owner: "temnroegg" },
            r: { title: "R", owner: "Golmote" },
            racket: {
              title: "Racket",
              require: "scheme",
              alias: "rkt",
              owner: "RunDevelopment",
            },
            cshtml: {
              title: "Razor C#",
              alias: "razor",
              require: ["markup", "csharp"],
              optional: ["css", "css-extras", "javascript", "js-extras"],
              owner: "RunDevelopment",
            },
            jsx: {
              title: "React JSX",
              require: ["markup", "javascript"],
              optional: ["jsdoc", "js-extras", "js-templates"],
              owner: "vkbansal",
            },
            tsx: { title: "React TSX", require: ["jsx", "typescript"] },
            reason: { title: "Reason", require: "clike", owner: "Golmote" },
            regex: { title: "Regex", owner: "RunDevelopment" },
            rego: { title: "Rego", owner: "JordanSh" },
            renpy: { title: "Ren'py", alias: "rpy", owner: "HyuchiaDiego" },
            rest: { title: "reST (reStructuredText)", owner: "Golmote" },
            rip: { title: "Rip", owner: "ravinggenius" },
            roboconf: { title: "Roboconf", owner: "Golmote" },
            robotframework: {
              title: "Robot Framework",
              alias: "robot",
              owner: "RunDevelopment",
            },
            ruby: {
              title: "Ruby",
              require: "clike",
              alias: "rb",
              owner: "samflores",
            },
            rust: { title: "Rust", owner: "Golmote" },
            sas: {
              title: "SAS",
              optional: ["groovy", "lua", "sql"],
              owner: "Golmote",
            },
            sass: {
              title: "Sass (Sass)",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            scss: {
              title: "Sass (Scss)",
              require: "css",
              optional: "css-extras",
              owner: "MoOx",
            },
            scala: { title: "Scala", require: "java", owner: "jozic" },
            scheme: { title: "Scheme", owner: "bacchus123" },
            "shell-session": {
              title: "Shell session",
              require: "bash",
              alias: ["sh-session", "shellsession"],
              owner: "RunDevelopment",
            },
            smali: { title: "Smali", owner: "RunDevelopment" },
            smalltalk: { title: "Smalltalk", owner: "Golmote" },
            smarty: {
              title: "Smarty",
              require: "markup-templating",
              optional: "php",
              owner: "Golmote",
            },
            sml: {
              title: "SML",
              alias: "smlnj",
              aliasTitles: { smlnj: "SML/NJ" },
              owner: "RunDevelopment",
            },
            solidity: {
              title: "Solidity (Ethereum)",
              alias: "sol",
              require: "clike",
              owner: "glachaud",
            },
            "solution-file": {
              title: "Solution file",
              alias: "sln",
              owner: "RunDevelopment",
            },
            soy: {
              title: "Soy (Closure Template)",
              require: "markup-templating",
              owner: "Golmote",
            },
            sparql: {
              title: "SPARQL",
              require: "turtle",
              owner: "Triply-Dev",
              alias: "rq",
            },
            "splunk-spl": { title: "Splunk SPL", owner: "RunDevelopment" },
            sqf: {
              title: "SQF: Status Quo Function (Arma 3)",
              require: "clike",
              owner: "RunDevelopment",
            },
            sql: { title: "SQL", owner: "multipetros" },
            squirrel: {
              title: "Squirrel",
              require: "clike",
              owner: "RunDevelopment",
            },
            stan: { title: "Stan", owner: "RunDevelopment" },
            iecst: {
              title: "Structured Text (IEC 61131-3)",
              owner: "serhioromano",
            },
            stylus: { title: "Stylus", owner: "vkbansal" },
            swift: { title: "Swift", owner: "chrischares" },
            systemd: {
              title: "Systemd configuration file",
              owner: "RunDevelopment",
            },
            "t4-templating": {
              title: "T4 templating",
              owner: "RunDevelopment",
            },
            "t4-cs": {
              title: "T4 Text Templates (C#)",
              require: ["t4-templating", "csharp"],
              alias: "t4",
              owner: "RunDevelopment",
            },
            "t4-vb": {
              title: "T4 Text Templates (VB)",
              require: ["t4-templating", "vbnet"],
              owner: "RunDevelopment",
            },
            tap: { title: "TAP", owner: "isaacs", require: "yaml" },
            tcl: { title: "Tcl", owner: "PeterChaplin" },
            tt2: {
              title: "Template Toolkit 2",
              require: ["clike", "markup-templating"],
              owner: "gflohr",
            },
            textile: {
              title: "Textile",
              require: "markup",
              optional: "css",
              owner: "Golmote",
            },
            toml: { title: "TOML", owner: "RunDevelopment" },
            tremor: {
              title: "Tremor",
              alias: ["trickle", "troy"],
              owner: "darach",
              aliasTitles: { trickle: "trickle", troy: "troy" },
            },
            turtle: {
              title: "Turtle",
              alias: "trig",
              aliasTitles: { trig: "TriG" },
              owner: "jakubklimek",
            },
            twig: {
              title: "Twig",
              require: "markup-templating",
              owner: "brandonkelly",
            },
            typescript: {
              title: "TypeScript",
              require: "javascript",
              optional: "js-templates",
              alias: "ts",
              owner: "vkbansal",
            },
            typoscript: {
              title: "TypoScript",
              alias: "tsconfig",
              aliasTitles: { tsconfig: "TSConfig" },
              owner: "dkern",
            },
            unrealscript: {
              title: "UnrealScript",
              alias: ["uscript", "uc"],
              owner: "RunDevelopment",
            },
            uorazor: { title: "UO Razor Script", owner: "jaseowns" },
            uri: {
              title: "URI",
              alias: "url",
              aliasTitles: { url: "URL" },
              owner: "RunDevelopment",
            },
            v: { title: "V", require: "clike", owner: "taggon" },
            vala: {
              title: "Vala",
              require: "clike",
              optional: "regex",
              owner: "TemplarVolk",
            },
            vbnet: { title: "VB.Net", require: "basic", owner: "Bigsby" },
            velocity: {
              title: "Velocity",
              require: "markup",
              owner: "Golmote",
            },
            verilog: { title: "Verilog", owner: "a-rey" },
            vhdl: { title: "VHDL", owner: "a-rey" },
            vim: { title: "vim", owner: "westonganger" },
            "visual-basic": {
              title: "Visual Basic",
              alias: ["vb", "vba"],
              aliasTitles: { vba: "VBA" },
              owner: "Golmote",
            },
            warpscript: { title: "WarpScript", owner: "RunDevelopment" },
            wasm: { title: "WebAssembly", owner: "Golmote" },
            "web-idl": {
              title: "Web IDL",
              alias: "webidl",
              owner: "RunDevelopment",
            },
            wiki: { title: "Wiki markup", require: "markup", owner: "Golmote" },
            wolfram: {
              title: "Wolfram language",
              alias: ["mathematica", "nb", "wl"],
              aliasTitles: {
                mathematica: "Mathematica",
                nb: "Mathematica Notebook",
              },
              owner: "msollami",
            },
            wren: { title: "Wren", owner: "clsource" },
            xeora: {
              title: "Xeora",
              require: "markup",
              alias: "xeoracube",
              aliasTitles: { xeoracube: "XeoraCube" },
              owner: "freakmaxi",
            },
            "xml-doc": {
              title: "XML doc (.net)",
              require: "markup",
              modify: ["csharp", "fsharp", "vbnet"],
              owner: "RunDevelopment",
            },
            xojo: { title: "Xojo (REALbasic)", owner: "Golmote" },
            xquery: { title: "XQuery", require: "markup", owner: "Golmote" },
            yaml: { title: "YAML", alias: "yml", owner: "hason" },
            yang: { title: "YANG", owner: "RunDevelopment" },
            zig: { title: "Zig", owner: "RunDevelopment" },
          },
          plugins: {
            meta: { path: "plugins/{id}/prism-{id}", link: "plugins/{id}/" },
            "line-highlight": {
              title: "Line Highlight",
              description: "Highlights specific lines and/or line ranges.",
            },
            "line-numbers": {
              title: "Line Numbers",
              description: "Line number at the beginning of code lines.",
              owner: "kuba-kubula",
            },
            "show-invisibles": {
              title: "Show Invisibles",
              description:
                "Show hidden characters such as tabs and line breaks.",
              optional: ["autolinker", "data-uri-highlight"],
            },
            autolinker: {
              title: "Autolinker",
              description:
                "Converts URLs and emails in code to clickable links. Parses Markdown links in comments.",
            },
            wpd: {
              title: "WebPlatform Docs",
              description:
                'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
            },
            "custom-class": {
              title: "Custom Class",
              description:
                "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
              owner: "dvkndn",
              noCSS: !0,
            },
            "file-highlight": {
              title: "File Highlight",
              description:
                "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
              noCSS: !0,
            },
            "show-language": {
              title: "Show Language",
              description:
                "Display the highlighted language in code blocks (inline code does not show the label).",
              owner: "nauzilus",
              noCSS: !0,
              require: "toolbar",
            },
            "jsonp-highlight": {
              title: "JSONP Highlight",
              description:
                "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
              noCSS: !0,
              owner: "nauzilus",
            },
            "highlight-keywords": {
              title: "Highlight Keywords",
              description:
                "Adds special CSS classes for each keyword for fine-grained highlighting.",
              owner: "vkbansal",
              noCSS: !0,
            },
            "remove-initial-line-feed": {
              title: "Remove initial line feed",
              description: "Removes the initial line feed in code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "inline-color": {
              title: "Inline color",
              description:
                "Adds a small inline preview for colors in style sheets.",
              require: "css-extras",
              owner: "RunDevelopment",
            },
            previewers: {
              title: "Previewers",
              description:
                "Previewers for angles, colors, gradients, easing and time.",
              require: "css-extras",
              owner: "Golmote",
            },
            autoloader: {
              title: "Autoloader",
              description:
                "Automatically loads the needed languages to highlight the code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "keep-markup": {
              title: "Keep Markup",
              description:
                "Prevents custom markup from being dropped out during highlighting.",
              owner: "Golmote",
              optional: "normalize-whitespace",
              noCSS: !0,
            },
            "command-line": {
              title: "Command Line",
              description:
                "Display a command line with a prompt and, optionally, the output/response from the commands.",
              owner: "chriswells0",
            },
            "unescaped-markup": {
              title: "Unescaped Markup",
              description: "Write markup without having to escape anything.",
            },
            "normalize-whitespace": {
              title: "Normalize Whitespace",
              description:
                "Supports multiple operations to normalize whitespace in code blocks.",
              owner: "zeitgeist87",
              optional: "unescaped-markup",
              noCSS: !0,
            },
            "data-uri-highlight": {
              title: "Data-URI Highlight",
              description: "Highlights data-URI contents.",
              owner: "Golmote",
              noCSS: !0,
            },
            toolbar: {
              title: "Toolbar",
              description:
                "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
              owner: "mAAdhaTTah",
            },
            "copy-to-clipboard": {
              title: "Copy to Clipboard Button",
              description:
                "Add a button that copies the code block to the clipboard when clicked.",
              owner: "mAAdhaTTah",
              require: "toolbar",
              noCSS: !0,
            },
            "download-button": {
              title: "Download Button",
              description:
                "A button in the toolbar of a code block adding a convenient way to download a code file.",
              owner: "Golmote",
              require: "toolbar",
              noCSS: !0,
            },
            "match-braces": {
              title: "Match braces",
              description: "Highlights matching braces.",
              owner: "RunDevelopment",
            },
            "diff-highlight": {
              title: "Diff Highlight",
              description: "Highlights the code inside diff blocks.",
              owner: "RunDevelopment",
              require: "diff",
            },
            "filter-highlight-all": {
              title: "Filter highlightAll",
              description:
                "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
              owner: "RunDevelopment",
              noCSS: !0,
            },
            treeview: {
              title: "Treeview",
              description:
                "A language with special styles to highlight file system tree structures.",
              owner: "Golmote",
            },
          },
        });
    },
    2885: function (e, t, n) {
      const r = n(9901),
        a = n(9642),
        o = new Set();
      function i(e) {
        void 0 === e
          ? (e = Object.keys(r.languages).filter((e) => "meta" != e))
          : Array.isArray(e) || (e = [e]);
        const t = [...o, ...Object.keys(Prism.languages)];
        a(r, e, t).load((e) => {
          if (!(e in r.languages))
            return void (
              i.silent || console.warn("Language does not exist: " + e)
            );
          const t = "./prism-" + e;
          delete n.c[n(6500).resolve(t)],
            delete Prism.languages[e],
            n(6500)(t),
            o.add(e);
        });
      }
      (i.silent = !1), (e.exports = i);
    },
    6726: function (e, t, n) {
      var r = { "./": 2885 };
      function a(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 6726);
    },
    6500: function (e, t, n) {
      var r = { "./": 2885 };
      function a(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 6500);
    },
    9642: function (e) {
      "use strict";
      var t = (function () {
        var e = function () {};
        function t(e, t) {
          Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0);
        }
        function n(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
          return t;
        }
        function r(e) {
          var n = {},
            r = [];
          function a(r, o) {
            if (!(r in n)) {
              o.push(r);
              var i = o.indexOf(r);
              if (i < o.length - 1)
                throw new Error(
                  "Circular dependency: " + o.slice(i).join(" -> ")
                );
              var l = {},
                u = e[r];
              if (u) {
                function s(t) {
                  if (!(t in e))
                    throw new Error(
                      r + " depends on an unknown component " + t
                    );
                  if (!(t in l))
                    for (var i in (a(t, o), (l[t] = !0), n[t])) l[i] = !0;
                }
                t(u.require, s), t(u.optional, s), t(u.modify, s);
              }
              (n[r] = l), o.pop();
            }
          }
          return function (e) {
            var t = n[e];
            return t || (a(e, r), (t = n[e])), t;
          };
        }
        function a(e) {
          for (var t in e) return !0;
          return !1;
        }
        return function (o, i, l) {
          var u = (function (e) {
              var t = {};
              for (var n in e) {
                var r = e[n];
                for (var a in r)
                  if ("meta" != a) {
                    var o = r[a];
                    t[a] = "string" == typeof o ? { title: o } : o;
                  }
              }
              return t;
            })(o),
            s = (function (e) {
              var n;
              return function (r) {
                if (r in e) return r;
                if (!n)
                  for (var a in ((n = {}), e)) {
                    var o = e[a];
                    t(o && o.alias, function (t) {
                      if (t in n)
                        throw new Error(
                          t + " cannot be alias for both " + a + " and " + n[t]
                        );
                      if (t in e)
                        throw new Error(
                          t +
                            " cannot be alias of " +
                            a +
                            " because it is a component."
                        );
                      n[t] = a;
                    });
                  }
                return n[r] || r;
              };
            })(u);
          (i = i.map(s)), (l = (l || []).map(s));
          var c = n(i),
            f = n(l);
          i.forEach(function e(n) {
            var r = u[n];
            t(r && r.require, function (t) {
              t in f || ((c[t] = !0), e(t));
            });
          });
          for (var d, p = r(u), m = c; a(m); ) {
            for (var h in ((d = {}), m)) {
              var g = u[h];
              t(g && g.modify, function (e) {
                e in f && (d[e] = !0);
              });
            }
            for (var v in f)
              if (!(v in c))
                for (var b in p(v))
                  if (b in c) {
                    d[v] = !0;
                    break;
                  }
            for (var y in (m = d)) c[y] = !0;
          }
          var w = {
            getIds: function () {
              var e = [];
              return (
                w.load(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            load: function (t, n) {
              return (function (t, n, r, a) {
                var o = a ? a.series : void 0,
                  i = a ? a.parallel : e,
                  l = {},
                  u = {};
                function s(e) {
                  if (e in l) return l[e];
                  u[e] = !0;
                  var a,
                    c = [];
                  for (var f in t(e)) f in n && c.push(f);
                  if (0 === c.length) a = r(e);
                  else {
                    var d = i(
                      c.map(function (e) {
                        var t = s(e);
                        return delete u[e], t;
                      })
                    );
                    o
                      ? (a = o(d, function () {
                          return r(e);
                        }))
                      : r(e);
                  }
                  return (l[e] = a);
                }
                for (var c in n) s(c);
                var f = [];
                for (var d in u) f.push(l[d]);
                return i(f);
              })(p, c, t, n);
            },
          };
          return w;
        };
      })();
      e.exports = t;
    },
    2703: function (e, t, n) {
      "use strict";
      var r = n(414);
      function a() {}
      function o() {}
      (o.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, o, i) {
            if (i !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    5697: function (e, t, n) {
      e.exports = n(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    4448: function (e, t, n) {
      "use strict";
      var r = n(7294),
        a = n(7418),
        o = n(3840);
      function i(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(i(227));
      var l = new Set(),
        u = {};
      function s(e, t) {
        c(e, t), c(e + "Capture", t);
      }
      function c(e, t) {
        for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
      }
      var f = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = Object.prototype.hasOwnProperty,
        m = {},
        h = {};
      function g(e, t, n, r, a, o, i) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = i);
      }
      var v = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          v[e] = new g(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          v[t] = new g(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            v[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          v[e] = new g(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            v[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          v[e] = new g(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          v[e] = new g(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          v[e] = new g(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          v[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var b = /[\-:]([a-z])/g;
      function y(e) {
        return e[1].toUpperCase();
      }
      function w(e, t, n, r) {
        var a = v.hasOwnProperty(t) ? v[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!p.call(h, e) ||
                  (!p.call(m, e) &&
                    (d.test(e) ? (h[e] = !0) : ((m[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(b, y);
          v[t] = new g(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(b, y);
            v[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(b, y);
          v[t] = new g(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          v[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (v.xlinkHref = new g(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          v[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        E = 60103,
        S = 60106,
        x = 60107,
        C = 60108,
        _ = 60114,
        T = 60109,
        L = 60110,
        P = 60112,
        A = 60113,
        O = 60120,
        N = 60115,
        R = 60116,
        I = 60121,
        D = 60128,
        M = 60129,
        j = 60130,
        F = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var B = Symbol.for;
        (E = B("react.element")),
          (S = B("react.portal")),
          (x = B("react.fragment")),
          (C = B("react.strict_mode")),
          (_ = B("react.profiler")),
          (T = B("react.provider")),
          (L = B("react.context")),
          (P = B("react.forward_ref")),
          (A = B("react.suspense")),
          (O = B("react.suspense_list")),
          (N = B("react.memo")),
          (R = B("react.lazy")),
          (I = B("react.block")),
          B("react.scope"),
          (D = B("react.opaque.id")),
          (M = B("react.debug_trace_mode")),
          (j = B("react.offscreen")),
          (F = B("react.legacy_hidden"));
      }
      var U,
        z = "function" == typeof Symbol && Symbol.iterator;
      function Z(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (z && e[z]) || e["@@iterator"])
          ? e
          : null;
      }
      function $(e) {
        if (void 0 === U)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            U = (t && t[1]) || "";
          }
        return "\n" + U + e;
      }
      var q = !1;
      function G(e, t) {
        if (!e || q) return "";
        q = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (u) {
                var r = u;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (u) {
                r = u;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (u) {
              r = u;
            }
            e();
          }
        } catch (u) {
          if (u && r && "string" == typeof u.stack) {
            for (
              var a = u.stack.split("\n"),
                o = r.stack.split("\n"),
                i = a.length - 1,
                l = o.length - 1;
              1 <= i && 0 <= l && a[i] !== o[l];

            )
              l--;
            for (; 1 <= i && 0 <= l; i--, l--)
              if (a[i] !== o[l]) {
                if (1 !== i || 1 !== l)
                  do {
                    if ((i--, 0 > --l || a[i] !== o[l]))
                      return "\n" + a[i].replace(" at new ", " at ");
                  } while (1 <= i && 0 <= l);
                break;
              }
          }
        } finally {
          (q = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? $(e) : "";
      }
      function H(e) {
        switch (e.tag) {
          case 5:
            return $(e.type);
          case 16:
            return $("Lazy");
          case 13:
            return $("Suspense");
          case 19:
            return $("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = G(e.type, !1));
          case 11:
            return (e = G(e.type.render, !1));
          case 22:
            return (e = G(e.type._render, !1));
          case 1:
            return (e = G(e.type, !0));
          default:
            return "";
        }
      }
      function V(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case x:
            return "Fragment";
          case S:
            return "Portal";
          case _:
            return "Profiler";
          case C:
            return "StrictMode";
          case A:
            return "Suspense";
          case O:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case L:
              return (e.displayName || "Context") + ".Consumer";
            case T:
              return (e._context.displayName || "Context") + ".Provider";
            case P:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case N:
              return V(e.type);
            case I:
              return V(e._render);
            case R:
              (t = e._payload), (e = e._init);
              try {
                return V(e(t));
              } catch (n) {}
          }
        return null;
      }
      function W(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function Y(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function K(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = Y(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var a = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function Q(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function X(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function J(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = W(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && w(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = W(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ae(e, t.type, W(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ae(e, t, n) {
        ("number" === t && X(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function oe(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function ie(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function le(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function ue(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(i(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(i(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: W(n) };
      }
      function se(e, t) {
        var n = W(t.value),
          r = W(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var fe = "http://www.w3.org/1999/xhtml",
        de = "http://www.w3.org/2000/svg";
      function pe(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function me(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? pe(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var he,
        ge,
        ve =
          ((ge = function (e, t) {
            if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (he = he || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = he.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ge(e, t);
                });
              }
            : ge);
      function be(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var ye = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        we = ["Webkit", "ms", "Moz", "O"];
      function ke(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (ye.hasOwnProperty(e) && ye[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function Ee(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = ke(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(ye).forEach(function (e) {
        we.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ye[t] = ye[e]);
        });
      });
      var Se = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function xe(e, t) {
        if (t) {
          if (
            Se[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(i(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(i(60));
            if (
              "object" != typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(i(61));
          }
          if (null != t.style && "object" != typeof t.style) throw Error(i(62));
        }
      }
      function Ce(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function _e(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Te = null,
        Le = null,
        Pe = null;
      function Ae(e) {
        if ((e = ra(e))) {
          if ("function" != typeof Te) throw Error(i(280));
          var t = e.stateNode;
          t && ((t = oa(t)), Te(e.stateNode, e.type, t));
        }
      }
      function Oe(e) {
        Le ? (Pe ? Pe.push(e) : (Pe = [e])) : (Le = e);
      }
      function Ne() {
        if (Le) {
          var e = Le,
            t = Pe;
          if (((Pe = Le = null), Ae(e), t))
            for (e = 0; e < t.length; e++) Ae(t[e]);
        }
      }
      function Re(e, t) {
        return e(t);
      }
      function Ie(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function De() {}
      var Me = Re,
        je = !1,
        Fe = !1;
      function Be() {
        (null === Le && null === Pe) || (De(), Ne());
      }
      function Ue(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = oa(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
        return n;
      }
      var ze = !1;
      if (f)
        try {
          var Ze = {};
          Object.defineProperty(Ze, "passive", {
            get: function () {
              ze = !0;
            },
          }),
            window.addEventListener("test", Ze, Ze),
            window.removeEventListener("test", Ze, Ze);
        } catch (ge) {
          ze = !1;
        }
      function $e(e, t, n, r, a, o, i, l, u) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, s);
        } catch (c) {
          this.onError(c);
        }
      }
      var qe = !1,
        Ge = null,
        He = !1,
        Ve = null,
        We = {
          onError: function (e) {
            (qe = !0), (Ge = e);
          },
        };
      function Ye(e, t, n, r, a, o, i, l, u) {
        (qe = !1), (Ge = null), $e.apply(We, arguments);
      }
      function Ke(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Qe(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Xe(e) {
        if (Ke(e) !== e) throw Error(i(188));
      }
      function Je(e) {
        if (
          ((e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ke(e))) throw Error(i(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var o = a.alternate;
              if (null === o) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === o.child) {
                for (o = a.child; o; ) {
                  if (o === n) return Xe(a), e;
                  if (o === r) return Xe(a), t;
                  o = o.sibling;
                }
                throw Error(i(188));
              }
              if (n.return !== r.return) (n = a), (r = o);
              else {
                for (var l = !1, u = a.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = a), (r = o);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = a), (n = o);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) {
                  for (u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) throw Error(i(189));
                }
              }
              if (n.alternate !== r) throw Error(i(190));
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t;
          })(e)),
          !e)
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        at,
        ot = !1,
        it = [],
        lt = null,
        ut = null,
        st = null,
        ct = new Map(),
        ft = new Map(),
        dt = [],
        pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
      function mt(e, t, n, r, a) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: a,
          targetContainers: [r],
        };
      }
      function ht(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            lt = null;
            break;
          case "dragenter":
          case "dragleave":
            ut = null;
            break;
          case "mouseover":
          case "mouseout":
            st = null;
            break;
          case "pointerover":
          case "pointerout":
            ct.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            ft.delete(t.pointerId);
        }
      }
      function gt(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = mt(t, n, r, a, o)),
            null !== t && null !== (t = ra(t)) && nt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e);
      }
      function vt(e) {
        var t = na(e.target);
        if (null !== t) {
          var n = Ke(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Qe(n)))
                return (
                  (e.blockedOn = t),
                  void at(e.lanePriority, function () {
                    o.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function bt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = ra(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function yt(e, t, n) {
        bt(e) && n.delete(t);
      }
      function wt() {
        for (ot = !1; 0 < it.length; ) {
          var e = it[0];
          if (null !== e.blockedOn) {
            null !== (e = ra(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && it.shift();
        }
        null !== lt && bt(lt) && (lt = null),
          null !== ut && bt(ut) && (ut = null),
          null !== st && bt(st) && (st = null),
          ct.forEach(yt),
          ft.forEach(yt);
      }
      function kt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          ot ||
            ((ot = !0),
            o.unstable_scheduleCallback(o.unstable_NormalPriority, wt)));
      }
      function Et(e) {
        function t(t) {
          return kt(t, e);
        }
        if (0 < it.length) {
          kt(it[0], e);
          for (var n = 1; n < it.length; n++) {
            var r = it[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== lt && kt(lt, e),
            null !== ut && kt(ut, e),
            null !== st && kt(st, e),
            ct.forEach(t),
            ft.forEach(t),
            n = 0;
          n < dt.length;
          n++
        )
          (r = dt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
          vt(n), null === n.blockedOn && dt.shift();
      }
      function St(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var xt = {
          animationend: St("Animation", "AnimationEnd"),
          animationiteration: St("Animation", "AnimationIteration"),
          animationstart: St("Animation", "AnimationStart"),
          transitionend: St("Transition", "TransitionEnd"),
        },
        Ct = {},
        _t = {};
      function Tt(e) {
        if (Ct[e]) return Ct[e];
        if (!xt[e]) return e;
        var t,
          n = xt[e];
        for (t in n) if (n.hasOwnProperty(t) && t in _t) return (Ct[e] = n[t]);
        return e;
      }
      f &&
        ((_t = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete xt.animationend.animation,
          delete xt.animationiteration.animation,
          delete xt.animationstart.animation),
        "TransitionEvent" in window || delete xt.transitionend.transition);
      var Lt = Tt("animationend"),
        Pt = Tt("animationiteration"),
        At = Tt("animationstart"),
        Ot = Tt("transitionend"),
        Nt = new Map(),
        Rt = new Map(),
        It = [
          "abort",
          "abort",
          Lt,
          "animationEnd",
          Pt,
          "animationIteration",
          At,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Ot,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function Dt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1];
          (a = "on" + (a[0].toUpperCase() + a.slice(1))),
            Rt.set(r, t),
            Nt.set(r, a),
            s(a, [r]);
        }
      }
      (0, o.unstable_now)();
      var Mt = 8;
      function jt(e) {
        if (0 != (1 & e)) return (Mt = 15), 1;
        if (0 != (2 & e)) return (Mt = 14), 2;
        if (0 != (4 & e)) return (Mt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Mt = 12), t)
          : 0 != (32 & e)
          ? ((Mt = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((Mt = 10), t)
          : 0 != (256 & e)
          ? ((Mt = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((Mt = 8), t)
          : 0 != (4096 & e)
          ? ((Mt = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((Mt = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((Mt = 5), t)
          : 67108864 & e
          ? ((Mt = 4), 67108864)
          : 0 != (134217728 & e)
          ? ((Mt = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((Mt = 2), t)
          : 0 != (1073741824 & e)
          ? ((Mt = 1), 1073741824)
          : ((Mt = 8), e);
      }
      function Ft(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Mt = 0);
        var r = 0,
          a = 0,
          o = e.expiredLanes,
          i = e.suspendedLanes,
          l = e.pingedLanes;
        if (0 !== o) (r = o), (a = Mt = 15);
        else if (0 !== (o = 134217727 & n)) {
          var u = o & ~i;
          0 !== u
            ? ((r = jt(u)), (a = Mt))
            : 0 !== (l &= o) && ((r = jt(l)), (a = Mt));
        } else
          0 !== (o = n & ~i)
            ? ((r = jt(o)), (a = Mt))
            : 0 !== l && ((r = jt(l)), (a = Mt));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - qt(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== t && t !== r && 0 == (t & i))
        ) {
          if ((jt(t), a <= Mt)) return t;
          Mt = a;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; )
            (a = 1 << (n = 31 - qt(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function Bt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function Ut(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = zt(24 & ~t)) ? Ut(10, t) : e;
          case 10:
            return 0 === (e = zt(192 & ~t)) ? Ut(8, t) : e;
          case 8:
            return (
              0 === (e = zt(3584 & ~t)) &&
                0 === (e = zt(4186112 & ~t)) &&
                (e = 512),
              e
            );
          case 2:
            return 0 === (t = zt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(i(358, e));
      }
      function zt(e) {
        return e & -e;
      }
      function Zt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function $t(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - qt(t))] = n);
      }
      var qt = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Gt(e) / Ht) | 0)) | 0;
            },
        Gt = Math.log,
        Ht = Math.LN2;
      var Vt = o.unstable_UserBlockingPriority,
        Wt = o.unstable_runWithPriority,
        Yt = !0;
      function Kt(e, t, n, r) {
        je || De();
        var a = Xt,
          o = je;
        je = !0;
        try {
          Ie(a, e, t, n, r);
        } finally {
          (je = o) || Be();
        }
      }
      function Qt(e, t, n, r) {
        Wt(Vt, Xt.bind(null, e, t, n, r));
      }
      function Xt(e, t, n, r) {
        var a;
        if (Yt)
          if ((a = 0 == (4 & t)) && 0 < it.length && -1 < pt.indexOf(e))
            (e = mt(null, e, t, n, r)), it.push(e);
          else {
            var o = Jt(e, t, n, r);
            if (null === o) a && ht(e, r);
            else {
              if (a) {
                if (-1 < pt.indexOf(e))
                  return (e = mt(o, e, t, n, r)), void it.push(e);
                if (
                  (function (e, t, n, r, a) {
                    switch (t) {
                      case "focusin":
                        return (lt = gt(lt, e, t, n, r, a)), !0;
                      case "dragenter":
                        return (ut = gt(ut, e, t, n, r, a)), !0;
                      case "mouseover":
                        return (st = gt(st, e, t, n, r, a)), !0;
                      case "pointerover":
                        var o = a.pointerId;
                        return (
                          ct.set(o, gt(ct.get(o) || null, e, t, n, r, a)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (o = a.pointerId),
                          ft.set(o, gt(ft.get(o) || null, e, t, n, r, a)),
                          !0
                        );
                    }
                    return !1;
                  })(o, e, t, n, r)
                )
                  return;
                ht(e, r);
              }
              Dr(e, t, r, null, n);
            }
          }
      }
      function Jt(e, t, n, r) {
        var a = _e(r);
        if (null !== (a = na(a))) {
          var o = Ke(a);
          if (null === o) a = null;
          else {
            var i = o.tag;
            if (13 === i) {
              if (null !== (a = Qe(o))) return a;
              a = null;
            } else if (3 === i) {
              if (o.stateNode.hydrate)
                return 3 === o.tag ? o.stateNode.containerInfo : null;
              a = null;
            } else o !== a && (a = null);
          }
        }
        return Dr(e, t, r, a, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          a = "value" in en ? en.value : en.textContent,
          o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function an(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function on() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function un(e) {
        function t(t, n, r, a, o) {
          for (var i in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = o),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? on
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          a(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = on));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = on));
            },
            persist: function () {},
            isPersistent: on,
          }),
          t
        );
      }
      var sn,
        cn,
        fn,
        dn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        pn = un(dn),
        mn = a({}, dn, { view: 0, detail: 0 }),
        hn = un(mn),
        gn = a({}, mn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Ln,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== fn &&
                  (fn && "mousemove" === e.type
                    ? ((sn = e.screenX - fn.screenX),
                      (cn = e.screenY - fn.screenY))
                    : (cn = sn = 0),
                  (fn = e)),
                sn);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : cn;
          },
        }),
        vn = un(gn),
        bn = un(a({}, gn, { dataTransfer: 0 })),
        yn = un(a({}, mn, { relatedTarget: 0 })),
        wn = un(
          a({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        kn = a({}, dn, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        En = un(kn),
        Sn = un(a({}, dn, { data: 0 })),
        xn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        Cn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        _n = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Tn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = _n[e]) && !!t[e];
      }
      function Ln() {
        return Tn;
      }
      var Pn = a({}, mn, {
          key: function (e) {
            if (e.key) {
              var t = xn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = an(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? Cn[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Ln,
          charCode: function (e) {
            return "keypress" === e.type ? an(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? an(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        An = un(Pn),
        On = un(
          a({}, gn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Nn = un(
          a({}, mn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ln,
          })
        ),
        Rn = un(
          a({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        In = a({}, gn, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        Dn = un(In),
        Mn = [9, 13, 27, 32],
        jn = f && "CompositionEvent" in window,
        Fn = null;
      f && "documentMode" in document && (Fn = document.documentMode);
      var Bn = f && "TextEvent" in window && !Fn,
        Un = f && (!jn || (Fn && 8 < Fn && 11 >= Fn)),
        zn = String.fromCharCode(32),
        Zn = !1;
      function $n(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Mn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function qn(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Gn = !1;
      var Hn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Vn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Hn[e.type] : "textarea" === t;
      }
      function Wn(e, t, n, r) {
        Oe(r),
          0 < (t = jr(t, "onChange")).length &&
            ((n = new pn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Yn = null,
        Kn = null;
      function Qn(e) {
        Pr(e, 0);
      }
      function Xn(e) {
        if (Q(aa(e))) return e;
      }
      function Jn(e, t) {
        if ("change" === e) return t;
      }
      var er = !1;
      if (f) {
        var tr;
        if (f) {
          var nr = "oninput" in document;
          if (!nr) {
            var rr = document.createElement("div");
            rr.setAttribute("oninput", "return;"),
              (nr = "function" == typeof rr.oninput);
          }
          tr = nr;
        } else tr = !1;
        er = tr && (!document.documentMode || 9 < document.documentMode);
      }
      function ar() {
        Yn && (Yn.detachEvent("onpropertychange", or), (Kn = Yn = null));
      }
      function or(e) {
        if ("value" === e.propertyName && Xn(Kn)) {
          var t = [];
          if ((Wn(t, Kn, e, _e(e)), (e = Qn), je)) e(t);
          else {
            je = !0;
            try {
              Re(e, t);
            } finally {
              (je = !1), Be();
            }
          }
        }
      }
      function ir(e, t, n) {
        "focusin" === e
          ? (ar(), (Kn = n), (Yn = t).attachEvent("onpropertychange", or))
          : "focusout" === e && ar();
      }
      function lr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Xn(Kn);
      }
      function ur(e, t) {
        if ("click" === e) return Xn(t);
      }
      function sr(e, t) {
        if ("input" === e || "change" === e) return Xn(t);
      }
      var cr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        fr = Object.prototype.hasOwnProperty;
      function dr(e, t) {
        if (cr(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!fr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function pr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function mr(e, t) {
        var n,
          r = pr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = pr(r);
        }
      }
      function hr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? hr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function gr() {
        for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = X((e = t.contentWindow).document);
        }
        return t;
      }
      function vr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var br = f && "documentMode" in document && 11 >= document.documentMode,
        yr = null,
        wr = null,
        kr = null,
        Er = !1;
      function Sr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        Er ||
          null == yr ||
          yr !== X(r) ||
          ("selectionStart" in (r = yr) && vr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (kr && dr(kr, r)) ||
            ((kr = r),
            0 < (r = jr(wr, "onSelect")).length &&
              ((t = new pn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = yr))));
      }
      Dt(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        Dt(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        Dt(It, 2);
      for (
        var xr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(
            " "
          ),
          Cr = 0;
        Cr < xr.length;
        Cr++
      )
        Rt.set(xr[Cr], 0);
      c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        s(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        s(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        s("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        s(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        s(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        s(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
        Tr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(_r)
        );
      function Lr(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, o, l, u, s) {
            if ((Ye.apply(this, arguments), qe)) {
              if (!qe) throw Error(i(198));
              var c = Ge;
              (qe = !1), (Ge = null), He || ((He = !0), (Ve = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Pr(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                var l = r[i],
                  u = l.instance,
                  s = l.currentTarget;
                if (((l = l.listener), u !== o && a.isPropagationStopped()))
                  break e;
                Lr(a, l, s), (o = u);
              }
            else
              for (i = 0; i < r.length; i++) {
                if (
                  ((u = (l = r[i]).instance),
                  (s = l.currentTarget),
                  (l = l.listener),
                  u !== o && a.isPropagationStopped())
                )
                  break e;
                Lr(a, l, s), (o = u);
              }
          }
        }
        if (He) throw ((e = Ve), (He = !1), (Ve = null), e);
      }
      function Ar(e, t) {
        var n = ia(t),
          r = e + "__bubble";
        n.has(r) || (Ir(t, e, 2, !1), n.add(r));
      }
      var Or = "_reactListening" + Math.random().toString(36).slice(2);
      function Nr(e) {
        e[Or] ||
          ((e[Or] = !0),
          l.forEach(function (t) {
            Tr.has(t) || Rr(t, !1, e, null), Rr(t, !0, e, null);
          }));
      }
      function Rr(e, t, n, r) {
        var a =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          o = n;
        if (
          ("selectionchange" === e && 9 !== n.nodeType && (o = n.ownerDocument),
          null !== r && !t && Tr.has(e))
        ) {
          if ("scroll" !== e) return;
          (a |= 2), (o = r);
        }
        var i = ia(o),
          l = e + "__" + (t ? "capture" : "bubble");
        i.has(l) || (t && (a |= 4), Ir(o, e, a, t), i.add(l));
      }
      function Ir(e, t, n, r) {
        var a = Rt.get(t);
        switch (void 0 === a ? 2 : a) {
          case 0:
            a = Kt;
            break;
          case 1:
            a = Qt;
            break;
          default:
            a = Xt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !ze ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Dr(e, t, n, r, a) {
        var o = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var i = r.tag;
            if (3 === i || 4 === i) {
              var l = r.stateNode.containerInfo;
              if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
              if (4 === i)
                for (i = r.return; null !== i; ) {
                  var u = i.tag;
                  if (
                    (3 === u || 4 === u) &&
                    ((u = i.stateNode.containerInfo) === a ||
                      (8 === u.nodeType && u.parentNode === a))
                  )
                    return;
                  i = i.return;
                }
              for (; null !== l; ) {
                if (null === (i = na(l))) return;
                if (5 === (u = i.tag) || 6 === u) {
                  r = o = i;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Fe) return e(t, n);
          Fe = !0;
          try {
            Me(e, t, n);
          } finally {
            (Fe = !1), Be();
          }
        })(function () {
          var r = o,
            a = _e(n),
            i = [];
          e: {
            var l = Nt.get(e);
            if (void 0 !== l) {
              var u = pn,
                s = e;
              switch (e) {
                case "keypress":
                  if (0 === an(n)) break e;
                case "keydown":
                case "keyup":
                  u = An;
                  break;
                case "focusin":
                  (s = "focus"), (u = yn);
                  break;
                case "focusout":
                  (s = "blur"), (u = yn);
                  break;
                case "beforeblur":
                case "afterblur":
                  u = yn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  u = vn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  u = bn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  u = Nn;
                  break;
                case Lt:
                case Pt:
                case At:
                  u = wn;
                  break;
                case Ot:
                  u = Rn;
                  break;
                case "scroll":
                  u = hn;
                  break;
                case "wheel":
                  u = Dn;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  u = En;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  u = On;
              }
              var c = 0 != (4 & t),
                f = !c && "scroll" === e,
                d = c ? (null !== l ? l + "Capture" : null) : l;
              c = [];
              for (var p, m = r; null !== m; ) {
                var h = (p = m).stateNode;
                if (
                  (5 === p.tag &&
                    null !== h &&
                    ((p = h),
                    null !== d &&
                      null != (h = Ue(m, d)) &&
                      c.push(Mr(m, h, p))),
                  f)
                )
                  break;
                m = m.return;
              }
              0 < c.length &&
                ((l = new u(l, s, null, n, a)),
                i.push({ event: l, listeners: c }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((u = "mouseout" === e || "pointerout" === e),
              (!(l = "mouseover" === e || "pointerover" === e) ||
                0 != (16 & t) ||
                !(s = n.relatedTarget || n.fromElement) ||
                (!na(s) && !s[ea])) &&
                (u || l) &&
                ((l =
                  a.window === a
                    ? a
                    : (l = a.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                u
                  ? ((u = r),
                    null !==
                      (s = (s = n.relatedTarget || n.toElement)
                        ? na(s)
                        : null) &&
                      (s !== (f = Ke(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                      (s = null))
                  : ((u = null), (s = r)),
                u !== s))
            ) {
              if (
                ((c = vn),
                (h = "onMouseLeave"),
                (d = "onMouseEnter"),
                (m = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = On),
                  (h = "onPointerLeave"),
                  (d = "onPointerEnter"),
                  (m = "pointer")),
                (f = null == u ? l : aa(u)),
                (p = null == s ? l : aa(s)),
                ((l = new c(h, m + "leave", u, n, a)).target = f),
                (l.relatedTarget = p),
                (h = null),
                na(a) === r &&
                  (((c = new c(d, m + "enter", s, n, a)).target = p),
                  (c.relatedTarget = f),
                  (h = c)),
                (f = h),
                u && s)
              )
                e: {
                  for (d = s, m = 0, p = c = u; p; p = Fr(p)) m++;
                  for (p = 0, h = d; h; h = Fr(h)) p++;
                  for (; 0 < m - p; ) (c = Fr(c)), m--;
                  for (; 0 < p - m; ) (d = Fr(d)), p--;
                  for (; m--; ) {
                    if (c === d || (null !== d && c === d.alternate)) break e;
                    (c = Fr(c)), (d = Fr(d));
                  }
                  c = null;
                }
              else c = null;
              null !== u && Br(i, l, u, c, !1),
                null !== s && null !== f && Br(i, f, s, c, !0);
            }
            if (
              "select" ===
                (u =
                  (l = r ? aa(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ("input" === u && "file" === l.type)
            )
              var g = Jn;
            else if (Vn(l))
              if (er) g = sr;
              else {
                g = lr;
                var v = ir;
              }
            else
              (u = l.nodeName) &&
                "input" === u.toLowerCase() &&
                ("checkbox" === l.type || "radio" === l.type) &&
                (g = ur);
            switch (
              (g && (g = g(e, r))
                ? Wn(i, g, n, a)
                : (v && v(e, l, r),
                  "focusout" === e &&
                    (v = l._wrapperState) &&
                    v.controlled &&
                    "number" === l.type &&
                    ae(l, "number", l.value)),
              (v = r ? aa(r) : window),
              e)
            ) {
              case "focusin":
                (Vn(v) || "true" === v.contentEditable) &&
                  ((yr = v), (wr = r), (kr = null));
                break;
              case "focusout":
                kr = wr = yr = null;
                break;
              case "mousedown":
                Er = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (Er = !1), Sr(i, n, a);
                break;
              case "selectionchange":
                if (br) break;
              case "keydown":
              case "keyup":
                Sr(i, n, a);
            }
            var b;
            if (jn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var y = "onCompositionStart";
                    break e;
                  case "compositionend":
                    y = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    y = "onCompositionUpdate";
                    break e;
                }
                y = void 0;
              }
            else
              Gn
                ? $n(e, n) && (y = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (y = "onCompositionStart");
            y &&
              (Un &&
                "ko" !== n.locale &&
                (Gn || "onCompositionStart" !== y
                  ? "onCompositionEnd" === y && Gn && (b = rn())
                  : ((tn = "value" in (en = a) ? en.value : en.textContent),
                    (Gn = !0))),
              0 < (v = jr(r, y)).length &&
                ((y = new Sn(y, e, null, n, a)),
                i.push({ event: y, listeners: v }),
                b ? (y.data = b) : null !== (b = qn(n)) && (y.data = b))),
              (b = Bn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return qn(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Zn = !0), zn);
                      case "textInput":
                        return (e = t.data) === zn && Zn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Gn)
                      return "compositionend" === e || (!jn && $n(e, t))
                        ? ((e = rn()), (nn = tn = en = null), (Gn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                      default:
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return Un && "ko" !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (r = jr(r, "onBeforeInput")).length &&
                ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                i.push({ event: a, listeners: r }),
                (a.data = b));
          }
          Pr(i, t);
        });
      }
      function Mr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function jr(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var a = e,
            o = a.stateNode;
          5 === a.tag &&
            null !== o &&
            ((a = o),
            null != (o = Ue(e, n)) && r.unshift(Mr(e, o, a)),
            null != (o = Ue(e, t)) && r.push(Mr(e, o, a))),
            (e = e.return);
        }
        return r;
      }
      function Fr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Br(e, t, n, r, a) {
        for (var o = t._reactName, i = []; null !== n && n !== r; ) {
          var l = n,
            u = l.alternate,
            s = l.stateNode;
          if (null !== u && u === r) break;
          5 === l.tag &&
            null !== s &&
            ((l = s),
            a
              ? null != (u = Ue(n, o)) && i.unshift(Mr(n, u, l))
              : a || (null != (u = Ue(n, o)) && i.push(Mr(n, u, l)))),
            (n = n.return);
        }
        0 !== i.length && e.push({ event: t, listeners: i });
      }
      function Ur() {}
      var zr = null,
        Zr = null;
      function $r(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function qr(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Gr = "function" == typeof setTimeout ? setTimeout : void 0,
        Hr = "function" == typeof clearTimeout ? clearTimeout : void 0;
      function Vr(e) {
        1 === e.nodeType
          ? (e.textContent = "")
          : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
      }
      function Wr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Yr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Kr = 0;
      var Qr = Math.random().toString(36).slice(2),
        Xr = "__reactFiber$" + Qr,
        Jr = "__reactProps$" + Qr,
        ea = "__reactContainer$" + Qr,
        ta = "__reactEvents$" + Qr;
      function na(e) {
        var t = e[Xr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[ea] || n[Xr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Yr(e); null !== e; ) {
                if ((n = e[Xr])) return n;
                e = Yr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ra(e) {
        return !(e = e[Xr] || e[ea]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function aa(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(i(33));
      }
      function oa(e) {
        return e[Jr] || null;
      }
      function ia(e) {
        var t = e[ta];
        return void 0 === t && (t = e[ta] = new Set()), t;
      }
      var la = [],
        ua = -1;
      function sa(e) {
        return { current: e };
      }
      function ca(e) {
        0 > ua || ((e.current = la[ua]), (la[ua] = null), ua--);
      }
      function fa(e, t) {
        ua++, (la[ua] = e.current), (e.current = t);
      }
      var da = {},
        pa = sa(da),
        ma = sa(!1),
        ha = da;
      function ga(e, t) {
        var n = e.type.contextTypes;
        if (!n) return da;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          o = {};
        for (a in n) o[a] = t[a];
        return (
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }
      function va(e) {
        return null != (e = e.childContextTypes);
      }
      function ba() {
        ca(ma), ca(pa);
      }
      function ya(e, t, n) {
        if (pa.current !== da) throw Error(i(168));
        fa(pa, t), fa(ma, n);
      }
      function wa(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var o in (r = r.getChildContext()))
          if (!(o in e)) throw Error(i(108, V(t) || "Unknown", o));
        return a({}, n, r);
      }
      function ka(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            da),
          (ha = pa.current),
          fa(pa, e),
          fa(ma, ma.current),
          !0
        );
      }
      function Ea(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(i(169));
        n
          ? ((e = wa(e, t, ha)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            ca(ma),
            ca(pa),
            fa(pa, e))
          : ca(ma),
          fa(ma, n);
      }
      var Sa = null,
        xa = null,
        Ca = o.unstable_runWithPriority,
        _a = o.unstable_scheduleCallback,
        Ta = o.unstable_cancelCallback,
        La = o.unstable_shouldYield,
        Pa = o.unstable_requestPaint,
        Aa = o.unstable_now,
        Oa = o.unstable_getCurrentPriorityLevel,
        Na = o.unstable_ImmediatePriority,
        Ra = o.unstable_UserBlockingPriority,
        Ia = o.unstable_NormalPriority,
        Da = o.unstable_LowPriority,
        Ma = o.unstable_IdlePriority,
        ja = {},
        Fa = void 0 !== Pa ? Pa : function () {},
        Ba = null,
        Ua = null,
        za = !1,
        Za = Aa(),
        $a =
          1e4 > Za
            ? Aa
            : function () {
                return Aa() - Za;
              };
      function qa() {
        switch (Oa()) {
          case Na:
            return 99;
          case Ra:
            return 98;
          case Ia:
            return 97;
          case Da:
            return 96;
          case Ma:
            return 95;
          default:
            throw Error(i(332));
        }
      }
      function Ga(e) {
        switch (e) {
          case 99:
            return Na;
          case 98:
            return Ra;
          case 97:
            return Ia;
          case 96:
            return Da;
          case 95:
            return Ma;
          default:
            throw Error(i(332));
        }
      }
      function Ha(e, t) {
        return (e = Ga(e)), Ca(e, t);
      }
      function Va(e, t, n) {
        return (e = Ga(e)), _a(e, t, n);
      }
      function Wa() {
        if (null !== Ua) {
          var e = Ua;
          (Ua = null), Ta(e);
        }
        Ya();
      }
      function Ya() {
        if (!za && null !== Ba) {
          za = !0;
          var e = 0;
          try {
            var t = Ba;
            Ha(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Ba = null);
          } catch (n) {
            throw (null !== Ba && (Ba = Ba.slice(e + 1)), _a(Na, Wa), n);
          } finally {
            za = !1;
          }
        }
      }
      var Ka = k.ReactCurrentBatchConfig;
      function Qa(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Xa = sa(null),
        Ja = null,
        eo = null,
        to = null;
      function no() {
        to = eo = Ja = null;
      }
      function ro(e) {
        var t = Xa.current;
        ca(Xa), (e.type._context._currentValue = t);
      }
      function ao(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function oo(e, t) {
        (Ja = e),
          (to = eo = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (ji = !0), (e.firstContext = null));
      }
      function io(e, t) {
        if (to !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((to = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === eo)
          ) {
            if (null === Ja) throw Error(i(308));
            (eo = t),
              (Ja.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else eo = eo.next = t;
        return e._currentValue;
      }
      var lo = !1;
      function uo(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function so(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function co(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function fo(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function po(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            o = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
            } while (null !== n);
            null === o ? (a = o = t) : (o = o.next = t);
          } else a = o = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: o,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function mo(e, t, n, r) {
        var o = e.updateQueue;
        lo = !1;
        var i = o.firstBaseUpdate,
          l = o.lastBaseUpdate,
          u = o.shared.pending;
        if (null !== u) {
          o.shared.pending = null;
          var s = u,
            c = s.next;
          (s.next = null), null === l ? (i = c) : (l.next = c), (l = s);
          var f = e.alternate;
          if (null !== f) {
            var d = (f = f.updateQueue).lastBaseUpdate;
            d !== l &&
              (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
              (f.lastBaseUpdate = s));
          }
        }
        if (null !== i) {
          for (d = o.baseState, l = 0, f = c = s = null; ; ) {
            u = i.lane;
            var p = i.eventTime;
            if ((r & u) === u) {
              null !== f &&
                (f = f.next = {
                  eventTime: p,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
              e: {
                var m = e,
                  h = i;
                switch (((u = t), (p = n), h.tag)) {
                  case 1:
                    if ("function" == typeof (m = h.payload)) {
                      d = m.call(p, d, u);
                      break e;
                    }
                    d = m;
                    break e;
                  case 3:
                    m.flags = (-4097 & m.flags) | 64;
                  case 0:
                    if (
                      null ==
                      (u =
                        "function" == typeof (m = h.payload)
                          ? m.call(p, d, u)
                          : m)
                    )
                      break e;
                    d = a({}, d, u);
                    break e;
                  case 2:
                    lo = !0;
                }
              }
              null !== i.callback &&
                ((e.flags |= 32),
                null === (u = o.effects) ? (o.effects = [i]) : u.push(i));
            } else
              (p = {
                eventTime: p,
                lane: u,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              }),
                null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                (l |= u);
            if (null === (i = i.next)) {
              if (null === (u = o.shared.pending)) break;
              (i = u.next),
                (u.next = null),
                (o.lastBaseUpdate = u),
                (o.shared.pending = null);
            }
          }
          null === f && (s = d),
            (o.baseState = s),
            (o.firstBaseUpdate = c),
            (o.lastBaseUpdate = f),
            (zl |= l),
            (e.lanes = l),
            (e.memoizedState = d);
        }
      }
      function ho(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" != typeof a))
                throw Error(i(191, a));
              a.call(r);
            }
          }
      }
      var go = new r.Component().refs;
      function vo(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var bo = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ke(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = du(),
            a = pu(e),
            o = co(r, a);
          (o.payload = t), null != n && (o.callback = n), fo(e, o), mu(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = du(),
            a = pu(e),
            o = co(r, a);
          (o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            fo(e, o),
            mu(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = du(),
            r = pu(e),
            a = co(n, r);
          (a.tag = 2), null != t && (a.callback = t), fo(e, a), mu(e, r, n);
        },
      };
      function yo(e, t, n, r, a, o, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, i)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !dr(n, r) ||
              !dr(a, o);
      }
      function wo(e, t, n) {
        var r = !1,
          a = da,
          o = t.contextType;
        return (
          "object" == typeof o && null !== o
            ? (o = io(o))
            : ((a = va(t) ? ha : pa.current),
              (o = (r = null != (r = t.contextTypes)) ? ga(e, a) : da)),
          (t = new t(n, o)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = bo),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e =
              e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function ko(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && bo.enqueueReplaceState(t, t.state, null);
      }
      function Eo(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = go), uo(e);
        var o = t.contextType;
        "object" == typeof o && null !== o
          ? (a.context = io(o))
          : ((o = va(t) ? ha : pa.current), (a.context = ga(e, o))),
          mo(e, n, a, r),
          (a.state = e.memoizedState),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            (vo(e, t, o, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && bo.enqueueReplaceState(a, a.state, null),
            mo(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" == typeof a.componentDidMount && (e.flags |= 4);
      }
      var So = Array.isArray;
      function xo(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(i(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(i(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : ((t = function (e) {
                  var t = r.refs;
                  t === go && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                }),
                (t._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(i(284));
          if (!n._owner) throw Error(i(290, e));
        }
        return e;
      }
      function Co(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            i(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t
            )
          );
      }
      function _o(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = Hu(e, t)).index = 0), (e.sibling = null), e;
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags = 2), n)
                  : r
                : ((t.flags = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Ku(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = xo(e, t, n)), (r.return = e), r)
            : (((r = Vu(n.type, n.key, n.props, null, e.mode, r)).ref = xo(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Qu(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Wu(n, e.mode, r, o)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Ku("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case E:
                return (
                  ((n = Vu(t.type, t.key, t.props, null, e.mode, n)).ref = xo(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case S:
                return ((t = Qu(t, e.mode, n)).return = e), t;
            }
            if (So(t) || Z(t))
              return ((t = Wu(t, e.mode, n, null)).return = e), t;
            Co(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case E:
                return n.key === a
                  ? n.type === x
                    ? f(e, t, n.props.children, r, a)
                    : s(e, t, n, r)
                  : null;
              case S:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (So(n) || Z(n)) return null !== a ? null : f(e, t, n, r, null);
            Co(e, n);
          }
          return null;
        }
        function m(e, t, n, r, a) {
          if ("string" == typeof r || "number" == typeof r)
            return u(t, (e = e.get(n) || null), "" + r, a);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case E:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === x
                    ? f(t, e, r.props.children, a, r.key)
                    : s(t, e, r, a)
                );
              case S:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (So(r) || Z(r)) return f(t, (e = e.get(n) || null), r, a, null);
            Co(t, r);
          }
          return null;
        }
        function h(a, i, l, u) {
          for (
            var s = null, c = null, f = i, h = (i = 0), g = null;
            null !== f && h < l.length;
            h++
          ) {
            f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
            var v = p(a, f, l[h], u);
            if (null === v) {
              null === f && (f = g);
              break;
            }
            e && f && null === v.alternate && t(a, f),
              (i = o(v, i, h)),
              null === c ? (s = v) : (c.sibling = v),
              (c = v),
              (f = g);
          }
          if (h === l.length) return n(a, f), s;
          if (null === f) {
            for (; h < l.length; h++)
              null !== (f = d(a, l[h], u)) &&
                ((i = o(f, i, h)),
                null === c ? (s = f) : (c.sibling = f),
                (c = f));
            return s;
          }
          for (f = r(a, f); h < l.length; h++)
            null !== (g = m(f, a, h, l[h], u)) &&
              (e &&
                null !== g.alternate &&
                f.delete(null === g.key ? h : g.key),
              (i = o(g, i, h)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g));
          return (
            e &&
              f.forEach(function (e) {
                return t(a, e);
              }),
            s
          );
        }
        function g(a, l, u, s) {
          var c = Z(u);
          if ("function" != typeof c) throw Error(i(150));
          if (null == (u = c.call(u))) throw Error(i(151));
          for (
            var f = (c = null), h = l, g = (l = 0), v = null, b = u.next();
            null !== h && !b.done;
            g++, b = u.next()
          ) {
            h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
            var y = p(a, h, b.value, s);
            if (null === y) {
              null === h && (h = v);
              break;
            }
            e && h && null === y.alternate && t(a, h),
              (l = o(y, l, g)),
              null === f ? (c = y) : (f.sibling = y),
              (f = y),
              (h = v);
          }
          if (b.done) return n(a, h), c;
          if (null === h) {
            for (; !b.done; g++, b = u.next())
              null !== (b = d(a, b.value, s)) &&
                ((l = o(b, l, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b));
            return c;
          }
          for (h = r(a, h); !b.done; g++, b = u.next())
            null !== (b = m(h, a, g, b.value, s)) &&
              (e &&
                null !== b.alternate &&
                h.delete(null === b.key ? g : b.key),
              (l = o(b, l, g)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b));
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e);
              }),
            c
          );
        }
        return function (e, r, o, u) {
          var s =
            "object" == typeof o &&
            null !== o &&
            o.type === x &&
            null === o.key;
          s && (o = o.props.children);
          var c = "object" == typeof o && null !== o;
          if (c)
            switch (o.$$typeof) {
              case E:
                e: {
                  for (c = o.key, s = r; null !== s; ) {
                    if (s.key === c) {
                      if (7 === s.tag) {
                        if (o.type === x) {
                          n(e, s.sibling),
                            ((r = a(s, o.props.children)).return = e),
                            (e = r);
                          break e;
                        }
                      } else if (s.elementType === o.type) {
                        n(e, s.sibling),
                          ((r = a(s, o.props)).ref = xo(e, s, o)),
                          (r.return = e),
                          (e = r);
                        break e;
                      }
                      n(e, s);
                      break;
                    }
                    t(e, s), (s = s.sibling);
                  }
                  o.type === x
                    ? (((r = Wu(
                        o.props.children,
                        e.mode,
                        u,
                        o.key
                      )).return = e),
                      (e = r))
                    : (((u = Vu(
                        o.type,
                        o.key,
                        o.props,
                        null,
                        e.mode,
                        u
                      )).ref = xo(e, r, o)),
                      (u.return = e),
                      (e = u));
                }
                return l(e);
              case S:
                e: {
                  for (s = o.key; null !== r; ) {
                    if (r.key === s) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === o.containerInfo &&
                        r.stateNode.implementation === o.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, o.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Qu(o, e.mode, u)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" == typeof o || "number" == typeof o)
            return (
              (o = "" + o),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
                : (n(e, r), ((r = Ku(o, e.mode, u)).return = e), (e = r)),
              l(e)
            );
          if (So(o)) return h(e, r, o, u);
          if (Z(o)) return g(e, r, o, u);
          if ((c && Co(e, o), void 0 === o && !s))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(i(152, V(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var To = _o(!0),
        Lo = _o(!1),
        Po = {},
        Ao = sa(Po),
        Oo = sa(Po),
        No = sa(Po);
      function Ro(e) {
        if (e === Po) throw Error(i(174));
        return e;
      }
      function Io(e, t) {
        switch ((fa(No, t), fa(Oo, e), fa(Ao, Po), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
            break;
          default:
            t = me(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        ca(Ao), fa(Ao, t);
      }
      function Do() {
        ca(Ao), ca(Oo), ca(No);
      }
      function Mo(e) {
        Ro(No.current);
        var t = Ro(Ao.current),
          n = me(t, e.type);
        t !== n && (fa(Oo, e), fa(Ao, n));
      }
      function jo(e) {
        Oo.current === e && (ca(Ao), ca(Oo));
      }
      var Fo = sa(0);
      function Bo(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var Uo = null,
        zo = null,
        Zo = !1;
      function $o(e, t) {
        var n = qu(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function qo(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          default:
            return !1;
        }
      }
      function Go(e) {
        if (Zo) {
          var t = zo;
          if (t) {
            var n = t;
            if (!qo(e, t)) {
              if (!(t = Wr(n.nextSibling)) || !qo(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), (Zo = !1), void (Uo = e)
                );
              $o(Uo, n);
            }
            (Uo = e), (zo = Wr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (Zo = !1), (Uo = e);
        }
      }
      function Ho(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Uo = e;
      }
      function Vo(e) {
        if (e !== Uo) return !1;
        if (!Zo) return Ho(e), (Zo = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !qr(t, e.memoizedProps))
        )
          for (t = zo; t; ) $o(e, t), (t = Wr(t.nextSibling));
        if ((Ho(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(i(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    zo = Wr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            zo = null;
          }
        } else zo = Uo ? Wr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Wo() {
        (zo = Uo = null), (Zo = !1);
      }
      var Yo = [];
      function Ko() {
        for (var e = 0; e < Yo.length; e++)
          Yo[e]._workInProgressVersionPrimary = null;
        Yo.length = 0;
      }
      var Qo = k.ReactCurrentDispatcher,
        Xo = k.ReactCurrentBatchConfig,
        Jo = 0,
        ei = null,
        ti = null,
        ni = null,
        ri = !1,
        ai = !1;
      function oi() {
        throw Error(i(321));
      }
      function ii(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!cr(e[n], t[n])) return !1;
        return !0;
      }
      function li(e, t, n, r, a, o) {
        if (
          ((Jo = o),
          (ei = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Qo.current = null === e || null === e.memoizedState ? Ri : Ii),
          (e = n(r, a)),
          ai)
        ) {
          o = 0;
          do {
            if (((ai = !1), !(25 > o))) throw Error(i(301));
            (o += 1),
              (ni = ti = null),
              (t.updateQueue = null),
              (Qo.current = Di),
              (e = n(r, a));
          } while (ai);
        }
        if (
          ((Qo.current = Ni),
          (t = null !== ti && null !== ti.next),
          (Jo = 0),
          (ni = ti = ei = null),
          (ri = !1),
          t)
        )
          throw Error(i(300));
        return e;
      }
      function ui() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e), ni
        );
      }
      function si() {
        if (null === ti) {
          var e = ei.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = ti.next;
        var t = null === ni ? ei.memoizedState : ni.next;
        if (null !== t) (ni = t), (ti = e);
        else {
          if (null === e) throw Error(i(310));
          (e = {
            memoizedState: (ti = e).memoizedState,
            baseState: ti.baseState,
            baseQueue: ti.baseQueue,
            queue: ti.queue,
            next: null,
          }),
            null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e);
        }
        return ni;
      }
      function ci(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function fi(e) {
        var t = si(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = ti,
          a = r.baseQueue,
          o = n.pending;
        if (null !== o) {
          if (null !== a) {
            var l = a.next;
            (a.next = o.next), (o.next = l);
          }
          (r.baseQueue = a = o), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var u = (l = o = null),
            s = a;
          do {
            var c = s.lane;
            if ((Jo & c) === c)
              null !== u &&
                (u = u.next = {
                  lane: 0,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                }),
                (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
            else {
              var f = {
                lane: c,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null,
              };
              null === u ? ((l = u = f), (o = r)) : (u = u.next = f),
                (ei.lanes |= c),
                (zl |= c);
            }
            s = s.next;
          } while (null !== s && s !== a);
          null === u ? (o = r) : (u.next = l),
            cr(r, t.memoizedState) || (ji = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = u),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function di(e) {
        var t = si(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          o = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            (o = e(o, l.action)), (l = l.next);
          } while (l !== a);
          cr(o, t.memoizedState) || (ji = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o);
        }
        return [o, r];
      }
      function pi(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (
          (null !== a
            ? (e = a === r)
            : ((e = e.mutableReadLanes),
              (e = (Jo & e) === e) &&
                ((t._workInProgressVersionPrimary = r), Yo.push(t))),
          e)
        )
          return n(t._source);
        throw (Yo.push(t), Error(i(350)));
      }
      function mi(e, t, n, r) {
        var a = Rl;
        if (null === a) throw Error(i(349));
        var o = t._getVersion,
          l = o(t._source),
          u = Qo.current,
          s = u.useState(function () {
            return pi(a, t, n);
          }),
          c = s[1],
          f = s[0];
        s = ni;
        var d = e.memoizedState,
          p = d.refs,
          m = p.getSnapshot,
          h = d.source;
        d = d.subscribe;
        var g = ei;
        return (
          (e.memoizedState = { refs: p, source: t, subscribe: r }),
          u.useEffect(
            function () {
              (p.getSnapshot = n), (p.setSnapshot = c);
              var e = o(t._source);
              if (!cr(l, e)) {
                (e = n(t._source)),
                  cr(f, e) ||
                    (c(e),
                    (e = pu(g)),
                    (a.mutableReadLanes |= e & a.pendingLanes)),
                  (e = a.mutableReadLanes),
                  (a.entangledLanes |= e);
                for (var r = a.entanglements, i = e; 0 < i; ) {
                  var u = 31 - qt(i),
                    s = 1 << u;
                  (r[u] |= e), (i &= ~s);
                }
              }
            },
            [n, t, r]
          ),
          u.useEffect(
            function () {
              return r(t._source, function () {
                var e = p.getSnapshot,
                  n = p.setSnapshot;
                try {
                  n(e(t._source));
                  var r = pu(g);
                  a.mutableReadLanes |= r & a.pendingLanes;
                } catch (o) {
                  n(function () {
                    throw o;
                  });
                }
              });
            },
            [t, r]
          ),
          (cr(m, n) && cr(h, t) && cr(d, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: ci,
              lastRenderedState: f,
            }).dispatch = c = Oi.bind(null, ei, e)),
            (s.queue = e),
            (s.baseQueue = null),
            (f = pi(a, t, n)),
            (s.memoizedState = s.baseState = f)),
          f
        );
      }
      function hi(e, t, n) {
        return mi(si(), e, t, n);
      }
      function gi(e) {
        var t = ui();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue = {
            pending: null,
            dispatch: null,
            lastRenderedReducer: ci,
            lastRenderedState: e,
          }).dispatch = Oi.bind(null, ei, e)),
          [t.memoizedState, e]
        );
      }
      function vi(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = ei.updateQueue)
            ? ((t = { lastEffect: null }),
              (ei.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function bi(e) {
        return (e = { current: e }), (ui().memoizedState = e);
      }
      function yi() {
        return si().memoizedState;
      }
      function wi(e, t, n, r) {
        var a = ui();
        (ei.flags |= e),
          (a.memoizedState = vi(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function ki(e, t, n, r) {
        var a = si();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== ti) {
          var i = ti.memoizedState;
          if (((o = i.destroy), null !== r && ii(r, i.deps)))
            return void vi(t, n, o, r);
        }
        (ei.flags |= e), (a.memoizedState = vi(1 | t, n, o, r));
      }
      function Ei(e, t) {
        return wi(516, 4, e, t);
      }
      function Si(e, t) {
        return ki(516, 4, e, t);
      }
      function xi(e, t) {
        return ki(4, 2, e, t);
      }
      function Ci(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function _i(e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          ki(4, 2, Ci.bind(null, t, e), n)
        );
      }
      function Ti() {}
      function Li(e, t) {
        var n = si();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ii(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Pi(e, t) {
        var n = si();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ii(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Ai(e, t) {
        var n = qa();
        Ha(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Ha(97 < n ? 97 : n, function () {
            var n = Xo.transition;
            Xo.transition = 1;
            try {
              e(!1), t();
            } finally {
              Xo.transition = n;
            }
          });
      }
      function Oi(e, t, n) {
        var r = du(),
          a = pu(e),
          o = {
            lane: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          i = t.pending;
        if (
          (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
          (t.pending = o),
          (i = e.alternate),
          e === ei || (null !== i && i === ei))
        )
          ai = ri = !0;
        else {
          if (
            0 === e.lanes &&
            (null === i || 0 === i.lanes) &&
            null !== (i = t.lastRenderedReducer)
          )
            try {
              var l = t.lastRenderedState,
                u = i(l, n);
              if (((o.eagerReducer = i), (o.eagerState = u), cr(u, l))) return;
            } catch (s) {}
          mu(e, a, r);
        }
      }
      var Ni = {
          readContext: io,
          useCallback: oi,
          useContext: oi,
          useEffect: oi,
          useImperativeHandle: oi,
          useLayoutEffect: oi,
          useMemo: oi,
          useReducer: oi,
          useRef: oi,
          useState: oi,
          useDebugValue: oi,
          useDeferredValue: oi,
          useTransition: oi,
          useMutableSource: oi,
          useOpaqueIdentifier: oi,
          unstable_isNewReconciler: !1,
        },
        Ri = {
          readContext: io,
          useCallback: function (e, t) {
            return (ui().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: io,
          useEffect: Ei,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              wi(4, 2, Ci.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return wi(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ui();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = ui();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }).dispatch = Oi.bind(null, ei, e)),
              [r.memoizedState, e]
            );
          },
          useRef: bi,
          useState: gi,
          useDebugValue: Ti,
          useDeferredValue: function (e) {
            var t = gi(e),
              n = t[0],
              r = t[1];
            return (
              Ei(
                function () {
                  var t = Xo.transition;
                  Xo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Xo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = gi(!1),
              t = e[0];
            return bi((e = Ai.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = ui();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: t, setSnapshot: null },
                source: e,
                subscribe: n,
              }),
              mi(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (Zo) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: D, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Kr++).toString(36))),
                    Error(i(355)))
                  );
                }),
                n = gi(t)[1];
              return (
                0 == (2 & ei.mode) &&
                  ((ei.flags |= 516),
                  vi(
                    5,
                    function () {
                      n("r:" + (Kr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return gi((t = "r:" + (Kr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        Ii = {
          readContext: io,
          useCallback: Li,
          useContext: io,
          useEffect: Si,
          useImperativeHandle: _i,
          useLayoutEffect: xi,
          useMemo: Pi,
          useReducer: fi,
          useRef: yi,
          useState: function () {
            return fi(ci);
          },
          useDebugValue: Ti,
          useDeferredValue: function (e) {
            var t = fi(ci),
              n = t[0],
              r = t[1];
            return (
              Si(
                function () {
                  var t = Xo.transition;
                  Xo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Xo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = fi(ci)[0];
            return [yi().current, e];
          },
          useMutableSource: hi,
          useOpaqueIdentifier: function () {
            return fi(ci)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Di = {
          readContext: io,
          useCallback: Li,
          useContext: io,
          useEffect: Si,
          useImperativeHandle: _i,
          useLayoutEffect: xi,
          useMemo: Pi,
          useReducer: di,
          useRef: yi,
          useState: function () {
            return di(ci);
          },
          useDebugValue: Ti,
          useDeferredValue: function (e) {
            var t = di(ci),
              n = t[0],
              r = t[1];
            return (
              Si(
                function () {
                  var t = Xo.transition;
                  Xo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Xo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = di(ci)[0];
            return [yi().current, e];
          },
          useMutableSource: hi,
          useOpaqueIdentifier: function () {
            return di(ci)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Mi = k.ReactCurrentOwner,
        ji = !1;
      function Fi(e, t, n, r) {
        t.child = null === e ? Lo(t, null, n, r) : To(t, e.child, n, r);
      }
      function Bi(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return (
          oo(t, a),
          (r = li(e, t, n, r, o, a)),
          null === e || ji
            ? ((t.flags |= 1), Fi(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              ol(e, t, a))
        );
      }
      function Ui(e, t, n, r, a, o) {
        if (null === e) {
          var i = n.type;
          return "function" != typeof i ||
            Gu(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Vu(n.type, null, r, t, t.mode, o)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = i), zi(e, t, i, r, a, o));
        }
        return (
          (i = e.child),
          0 == (a & o) &&
          ((a = i.memoizedProps),
          (n = null !== (n = n.compare) ? n : dr)(a, r) && e.ref === t.ref)
            ? ol(e, t, o)
            : ((t.flags |= 1),
              ((e = Hu(i, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function zi(e, t, n, r, a, o) {
        if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
          if (((ji = !1), 0 == (o & a)))
            return (t.lanes = e.lanes), ol(e, t, o);
          0 != (16384 & e.flags) && (ji = !0);
        }
        return qi(e, t, n, r, o);
      }
      function Zi(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          o = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), Eu(t, n);
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== o ? o.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                Eu(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              Eu(t, null !== o ? o.baseLanes : n);
          }
        else
          null !== o
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Eu(t, r);
        return Fi(e, t, a, n), t.child;
      }
      function $i(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function qi(e, t, n, r, a) {
        var o = va(n) ? ha : pa.current;
        return (
          (o = ga(t, o)),
          oo(t, a),
          (n = li(e, t, n, r, o, a)),
          null === e || ji
            ? ((t.flags |= 1), Fi(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              ol(e, t, a))
        );
      }
      function Gi(e, t, n, r, a) {
        if (va(n)) {
          var o = !0;
          ka(t);
        } else o = !1;
        if ((oo(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            wo(t, n, r),
            Eo(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var i = t.stateNode,
            l = t.memoizedProps;
          i.props = l;
          var u = i.context,
            s = n.contextType;
          "object" == typeof s && null !== s
            ? (s = io(s))
            : (s = ga(t, (s = va(n) ? ha : pa.current)));
          var c = n.getDerivedStateFromProps,
            f =
              "function" == typeof c ||
              "function" == typeof i.getSnapshotBeforeUpdate;
          f ||
            ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
              "function" != typeof i.componentWillReceiveProps) ||
            ((l !== r || u !== s) && ko(t, i, r, s)),
            (lo = !1);
          var d = t.memoizedState;
          (i.state = d),
            mo(t, r, i, a),
            (u = t.memoizedState),
            l !== r || d !== u || ma.current || lo
              ? ("function" == typeof c &&
                  (vo(t, n, c, r), (u = t.memoizedState)),
                (l = lo || yo(t, n, l, r, d, u, s))
                  ? (f ||
                      ("function" != typeof i.UNSAFE_componentWillMount &&
                        "function" != typeof i.componentWillMount) ||
                      ("function" == typeof i.componentWillMount &&
                        i.componentWillMount(),
                      "function" == typeof i.UNSAFE_componentWillMount &&
                        i.UNSAFE_componentWillMount()),
                    "function" == typeof i.componentDidMount && (t.flags |= 4))
                  : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (i.props = r),
                (i.state = u),
                (i.context = s),
                (r = l))
              : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                (r = !1));
        } else {
          (i = t.stateNode),
            so(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : Qa(t.type, l)),
            (i.props = s),
            (f = t.pendingProps),
            (d = i.context),
            "object" == typeof (u = n.contextType) && null !== u
              ? (u = io(u))
              : (u = ga(t, (u = va(n) ? ha : pa.current)));
          var p = n.getDerivedStateFromProps;
          (c =
            "function" == typeof p ||
            "function" == typeof i.getSnapshotBeforeUpdate) ||
            ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
              "function" != typeof i.componentWillReceiveProps) ||
            ((l !== f || d !== u) && ko(t, i, r, u)),
            (lo = !1),
            (d = t.memoizedState),
            (i.state = d),
            mo(t, r, i, a);
          var m = t.memoizedState;
          l !== f || d !== m || ma.current || lo
            ? ("function" == typeof p &&
                (vo(t, n, p, r), (m = t.memoizedState)),
              (s = lo || yo(t, n, s, r, d, m, u))
                ? (c ||
                    ("function" != typeof i.UNSAFE_componentWillUpdate &&
                      "function" != typeof i.componentWillUpdate) ||
                    ("function" == typeof i.componentWillUpdate &&
                      i.componentWillUpdate(r, m, u),
                    "function" == typeof i.UNSAFE_componentWillUpdate &&
                      i.UNSAFE_componentWillUpdate(r, m, u)),
                  "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof i.getSnapshotBeforeUpdate &&
                    (t.flags |= 256))
                : ("function" != typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof i.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = m)),
              (i.props = r),
              (i.state = m),
              (i.context = u),
              (r = s))
            : ("function" != typeof i.componentDidUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof i.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Hi(e, t, n, r, o, a);
      }
      function Hi(e, t, n, r, a, o) {
        $i(e, t);
        var i = 0 != (64 & t.flags);
        if (!r && !i) return a && Ea(t, n, !1), ol(e, t, o);
        (r = t.stateNode), (Mi.current = t);
        var l =
          i && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && i
            ? ((t.child = To(t, e.child, null, o)),
              (t.child = To(t, null, l, o)))
            : Fi(e, t, l, o),
          (t.memoizedState = r.state),
          a && Ea(t, n, !0),
          t.child
        );
      }
      function Vi(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ya(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ya(0, t.context, !1),
          Io(e, t.containerInfo);
      }
      var Wi,
        Yi,
        Ki,
        Qi = { dehydrated: null, retryLane: 0 };
      function Xi(e, t, n) {
        var r,
          a = t.pendingProps,
          o = Fo.current,
          i = !1;
        return (
          (r = 0 != (64 & t.flags)) ||
            (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
          r
            ? ((i = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (o |= 1),
          fa(Fo, 1 & o),
          null === e
            ? (void 0 !== a.fallback && Go(t),
              (e = a.children),
              (o = a.fallback),
              i
                ? ((e = Ji(t, e, o, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Qi),
                  e)
                : "number" == typeof a.unstable_expectedLoadTime
                ? ((e = Ji(t, e, o, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Qi),
                  (t.lanes = 33554432),
                  e)
                : (((n = Yu(
                    { mode: "visible", children: e },
                    t.mode,
                    n,
                    null
                  )).return = t),
                  (t.child = n)))
            : (e.memoizedState,
              i
                ? ((a = tl(e, t, a.children, a.fallback, n)),
                  (i = t.child),
                  (o = e.child.memoizedState),
                  (i.memoizedState =
                    null === o
                      ? { baseLanes: n }
                      : { baseLanes: o.baseLanes | n }),
                  (i.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Qi),
                  a)
                : ((n = el(e, t, a.children, n)), (t.memoizedState = null), n))
        );
      }
      function Ji(e, t, n, r) {
        var a = e.mode,
          o = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          0 == (2 & a) && null !== o
            ? ((o.childLanes = 0), (o.pendingProps = t))
            : (o = Yu(t, a, 0, null)),
          (n = Wu(n, a, r, null)),
          (o.return = e),
          (n.return = e),
          (o.sibling = n),
          (e.child = o),
          n
        );
      }
      function el(e, t, n, r) {
        var a = e.child;
        return (
          (e = a.sibling),
          (n = Hu(a, { mode: "visible", children: n })),
          0 == (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e &&
            ((e.nextEffect = null),
            (e.flags = 8),
            (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function tl(e, t, n, r, a) {
        var o = t.mode,
          i = e.child;
        e = i.sibling;
        var l = { mode: "hidden", children: n };
        return (
          0 == (2 & o) && t.child !== i
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = l),
              null !== (i = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect),
                  (t.lastEffect = i),
                  (i.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = Hu(i, l)),
          null !== e ? (r = Hu(e, r)) : ((r = Wu(r, o, a, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function nl(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ao(e.return, t);
      }
      function rl(e, t, n, r, a, o) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
              lastEffect: o,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailMode = a),
            (i.lastEffect = o));
      }
      function al(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          o = r.tail;
        if ((Fi(e, t, r.children, n), 0 != (2 & (r = Fo.current))))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 != (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && nl(e, n);
              else if (19 === e.tag) nl(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((fa(Fo, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Bo(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                rl(t, !1, a, n, o, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Bo(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              rl(t, !0, n, null, o, t.lastEffect);
              break;
            case "together":
              rl(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function ol(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (zl |= t.lanes),
          0 != (n & t.childLanes))
        ) {
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Hu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Hu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function il(e, t) {
        if (!Zo)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function ll(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
          case 17:
            return va(t.type) && ba(), null;
          case 3:
            return (
              Do(),
              ca(ma),
              ca(pa),
              Ko(),
              (r = t.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (Vo(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            jo(t);
            var o = Ro(No.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Yi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(i(166));
                return null;
              }
              if (((e = Ro(Ao.current)), Vo(t))) {
                (r = t.stateNode), (n = t.type);
                var l = t.memoizedProps;
                switch (((r[Xr] = t), (r[Jr] = l), n)) {
                  case "dialog":
                    Ar("cancel", r), Ar("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ar("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < _r.length; e++) Ar(_r[e], r);
                    break;
                  case "source":
                    Ar("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Ar("error", r), Ar("load", r);
                    break;
                  case "details":
                    Ar("toggle", r);
                    break;
                  case "input":
                    ee(r, l), Ar("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!l.multiple }),
                      Ar("invalid", r);
                    break;
                  case "textarea":
                    ue(r, l), Ar("invalid", r);
                }
                for (var s in (xe(n, l), (e = null), l))
                  l.hasOwnProperty(s) &&
                    ((o = l[s]),
                    "children" === s
                      ? "string" == typeof o
                        ? r.textContent !== o && (e = ["children", o])
                        : "number" == typeof o &&
                          r.textContent !== "" + o &&
                          (e = ["children", "" + o])
                      : u.hasOwnProperty(s) &&
                        null != o &&
                        "onScroll" === s &&
                        Ar("scroll", r));
                switch (n) {
                  case "input":
                    K(r), re(r, l, !0);
                    break;
                  case "textarea":
                    K(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof l.onClick && (r.onclick = Ur);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((s = 9 === o.nodeType ? o : o.ownerDocument),
                  e === fe && (e = pe(n)),
                  e === fe
                    ? "script" === n
                      ? (((e = s.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                      ? (e = s.createElement(n, { is: r.is }))
                      : ((e = s.createElement(n)),
                        "select" === n &&
                          ((s = e),
                          r.multiple
                            ? (s.multiple = !0)
                            : r.size && (s.size = r.size)))
                    : (e = s.createElementNS(e, n)),
                  (e[Xr] = t),
                  (e[Jr] = r),
                  Wi(e, t),
                  (t.stateNode = e),
                  (s = Ce(n, r)),
                  n)
                ) {
                  case "dialog":
                    Ar("cancel", e), Ar("close", e), (o = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ar("load", e), (o = r);
                    break;
                  case "video":
                  case "audio":
                    for (o = 0; o < _r.length; o++) Ar(_r[o], e);
                    o = r;
                    break;
                  case "source":
                    Ar("error", e), (o = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Ar("error", e), Ar("load", e), (o = r);
                    break;
                  case "details":
                    Ar("toggle", e), (o = r);
                    break;
                  case "input":
                    ee(e, r), (o = J(e, r)), Ar("invalid", e);
                    break;
                  case "option":
                    o = oe(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (o = a({}, r, { value: void 0 })),
                      Ar("invalid", e);
                    break;
                  case "textarea":
                    ue(e, r), (o = le(e, r)), Ar("invalid", e);
                    break;
                  default:
                    o = r;
                }
                xe(n, o);
                var c = o;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var f = c[l];
                    "style" === l
                      ? Ee(e, f)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (f = f ? f.__html : void 0) && ve(e, f)
                      : "children" === l
                      ? "string" == typeof f
                        ? ("textarea" !== n || "" !== f) && be(e, f)
                        : "number" == typeof f && be(e, "" + f)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (u.hasOwnProperty(l)
                          ? null != f && "onScroll" === l && Ar("scroll", e)
                          : null != f && w(e, l, f, s));
                  }
                switch (n) {
                  case "input":
                    K(e), re(e, r, !1);
                    break;
                  case "textarea":
                    K(e), ce(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + W(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? ie(e, !!r.multiple, l, !1)
                        : null != r.defaultValue &&
                          ie(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof o.onClick && (e.onclick = Ur);
                }
                $r(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Ki(0, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(i(166));
              (n = Ro(No.current)),
                Ro(Ao.current),
                Vo(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Xr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (9 === n.nodeType
                      ? n
                      : n.ownerDocument
                    ).createTextNode(r))[Xr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              ca(Fo),
              (r = t.memoizedState),
              0 != (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Vo(t)
                    : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 != (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Fo.current)
                      ? 0 === Fl && (Fl = 3)
                      : ((0 !== Fl && 3 !== Fl) || (Fl = 4),
                        null === Rl ||
                          (0 == (134217727 & zl) && 0 == (134217727 & Zl)) ||
                          bu(Rl, Dl))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return Do(), null === e && Nr(t.stateNode.containerInfo), null;
          case 10:
            return ro(t), null;
          case 19:
            if ((ca(Fo), null === (r = t.memoizedState))) return null;
            if (((l = 0 != (64 & t.flags)), null === (s = r.rendering)))
              if (l) il(r, !1);
              else {
                if (0 !== Fl || (null !== e && 0 != (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (s = Bo(e))) {
                      for (
                        t.flags |= 64,
                          il(r, !1),
                          null !== (l = s.updateQueue) &&
                            ((t.updateQueue = l), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((l = n).flags &= 2),
                          (l.nextEffect = null),
                          (l.firstEffect = null),
                          (l.lastEffect = null),
                          null === (s = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = e),
                              (l.child = null),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = s.childLanes),
                              (l.lanes = s.lanes),
                              (l.child = s.child),
                              (l.memoizedProps = s.memoizedProps),
                              (l.memoizedState = s.memoizedState),
                              (l.updateQueue = s.updateQueue),
                              (l.type = s.type),
                              (e = s.dependencies),
                              (l.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return fa(Fo, (1 & Fo.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  $a() > Hl &&
                  ((t.flags |= 64), (l = !0), il(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!l)
                if (null !== (e = Bo(s))) {
                  if (
                    ((t.flags |= 64),
                    (l = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    il(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !s.alternate &&
                      !Zo)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * $a() - r.renderingStartTime > Hl &&
                    1073741824 !== n &&
                    ((t.flags |= 64),
                    (l = !0),
                    il(r, !1),
                    (t.lanes = 33554432));
              r.isBackwards
                ? ((s.sibling = t.child), (t.child = s))
                : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                  (r.last = s));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = $a()),
                (n.sibling = null),
                (t = Fo.current),
                fa(Fo, l ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              Su(),
              null !== e &&
                (null !== e.memoizedState) != (null !== t.memoizedState) &&
                "unstable-defer-without-hiding" !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(i(156, t.tag));
      }
      function ul(e) {
        switch (e.tag) {
          case 1:
            va(e.type) && ba();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Do(), ca(ma), ca(pa), Ko(), 0 != (64 & (t = e.flags))))
              throw Error(i(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return jo(e), null;
          case 13:
            return (
              ca(Fo),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return ca(Fo), null;
          case 4:
            return Do(), null;
          case 10:
            return ro(e), null;
          case 23:
          case 24:
            return Su(), null;
          default:
            return null;
        }
      }
      function sl(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += H(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (o) {
          a = "\nError generating stack: " + o.message + "\n" + o.stack;
        }
        return { value: e, source: t, stack: a };
      }
      function cl(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Wi = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Yi = function (e, t, n, r) {
          var o = e.memoizedProps;
          if (o !== r) {
            (e = t.stateNode), Ro(Ao.current);
            var i,
              l = null;
            switch (n) {
              case "input":
                (o = J(e, o)), (r = J(e, r)), (l = []);
                break;
              case "option":
                (o = oe(e, o)), (r = oe(e, r)), (l = []);
                break;
              case "select":
                (o = a({}, o, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (l = []);
                break;
              case "textarea":
                (o = le(e, o)), (r = le(e, r)), (l = []);
                break;
              default:
                "function" != typeof o.onClick &&
                  "function" == typeof r.onClick &&
                  (e.onclick = Ur);
            }
            for (f in (xe(n, r), (n = null), o))
              if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && null != o[f])
                if ("style" === f) {
                  var s = o[f];
                  for (i in s)
                    s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                  "dangerouslySetInnerHTML" !== f &&
                    "children" !== f &&
                    "suppressContentEditableWarning" !== f &&
                    "suppressHydrationWarning" !== f &&
                    "autoFocus" !== f &&
                    (u.hasOwnProperty(f)
                      ? l || (l = [])
                      : (l = l || []).push(f, null));
            for (f in r) {
              var c = r[f];
              if (
                ((s = null != o ? o[f] : void 0),
                r.hasOwnProperty(f) && c !== s && (null != c || null != s))
              )
                if ("style" === f)
                  if (s) {
                    for (i in s)
                      !s.hasOwnProperty(i) ||
                        (c && c.hasOwnProperty(i)) ||
                        (n || (n = {}), (n[i] = ""));
                    for (i in c)
                      c.hasOwnProperty(i) &&
                        s[i] !== c[i] &&
                        (n || (n = {}), (n[i] = c[i]));
                  } else n || (l || (l = []), l.push(f, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === f
                    ? ((c = c ? c.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != c && s !== c && (l = l || []).push(f, c))
                    : "children" === f
                    ? ("string" != typeof c && "number" != typeof c) ||
                      (l = l || []).push(f, "" + c)
                    : "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      (u.hasOwnProperty(f)
                        ? (null != c && "onScroll" === f && Ar("scroll", e),
                          l || s === c || (l = []))
                        : "object" == typeof c && null !== c && c.$$typeof === D
                        ? c.toString()
                        : (l = l || []).push(f, c));
            }
            n && (l = l || []).push("style", n);
            var f = l;
            (t.updateQueue = f) && (t.flags |= 4);
          }
        }),
        (Ki = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var fl = "function" == typeof WeakMap ? WeakMap : Map;
      function dl(e, t, n) {
        ((n = co(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Kl || ((Kl = !0), (Ql = r)), cl(0, t);
          }),
          n
        );
      }
      function pl(e, t, n) {
        (n = co(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var a = t.value;
          n.payload = function () {
            return cl(0, t), r(a);
          };
        }
        var o = e.stateNode;
        return (
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r &&
                (null === Xl ? (Xl = new Set([this])) : Xl.add(this), cl(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      var ml = "function" == typeof WeakSet ? WeakSet : Set;
      function hl(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (n) {
              Uu(e, n);
            }
          else t.current = null;
      }
      function gl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Qa(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Vr(t.stateNode.containerInfo));
        }
        throw Error(i(163));
      }
      function vl(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                if (3 == (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                var a = e;
                (r = a.next),
                  0 != (4 & (a = a.tag)) &&
                    0 != (1 & a) &&
                    (ju(n, e), Mu(n, e)),
                  (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : Qa(n.type, t.memoizedProps)),
                    e.componentDidUpdate(
                      r,
                      t.memoizedState,
                      e.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (t = n.updateQueue) && ho(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                  case 1:
                    e = n.child.stateNode;
                }
              ho(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                $r(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && Et(n))))
            );
        }
        throw Error(i(163));
      }
      function bl(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" == typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var a = n.memoizedProps.style;
              (a = null != a && a.hasOwnProperty("display") ? a.display : null),
                (r.style.display = ke("display", a));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = t ? "" : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === e) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function yl(e, t) {
        if (xa && "function" == typeof xa.onCommitFiberUnmount)
          try {
            xa.onCommitFiberUnmount(Sa, t);
          } catch (o) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  a = r.destroy;
                if (((r = r.tag), void 0 !== a))
                  if (0 != (4 & r)) ju(t, n);
                  else {
                    r = t;
                    try {
                      a();
                    } catch (o) {
                      Uu(r, o);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if (
              (hl(t),
              "function" == typeof (e = t.stateNode).componentWillUnmount)
            )
              try {
                (e.props = t.memoizedProps),
                  (e.state = t.memoizedState),
                  e.componentWillUnmount();
              } catch (o) {
                Uu(t, o);
              }
            break;
          case 5:
            hl(t);
            break;
          case 4:
            Cl(e, t);
        }
      }
      function wl(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function kl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function El(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (kl(t)) break e;
            t = t.return;
          }
          throw Error(i(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(i(161));
        }
        16 & n.flags && (be(t, ""), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || kl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? Sl(e, n, t) : xl(e, n, t);
      }
      function Sl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Ur));
        else if (4 !== r && null !== (e = e.child))
          for (Sl(e, t, n), e = e.sibling; null !== e; )
            Sl(e, t, n), (e = e.sibling);
      }
      function xl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (xl(e, t, n), e = e.sibling; null !== e; )
            xl(e, t, n), (e = e.sibling);
      }
      function Cl(e, t) {
        for (var n, r, a = t, o = !1; ; ) {
          if (!o) {
            o = a.return;
            e: for (;;) {
              if (null === o) throw Error(i(160));
              switch (((n = o.stateNode), o.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              o = o.return;
            }
            o = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var l = e, u = a, s = u; ; )
              if ((yl(l, s), null !== s.child && 4 !== s.tag))
                (s.child.return = s), (s = s.child);
              else {
                if (s === u) break e;
                for (; null === s.sibling; ) {
                  if (null === s.return || s.return === u) break e;
                  s = s.return;
                }
                (s.sibling.return = s.return), (s = s.sibling);
              }
            r
              ? ((l = n),
                (u = a.stateNode),
                8 === l.nodeType
                  ? l.parentNode.removeChild(u)
                  : l.removeChild(u))
              : n.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (n = a.stateNode.containerInfo),
                (r = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((yl(e, a), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (o = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function _l(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 == (3 & r.tag) &&
                  ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
          case 12:
          case 17:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var o = t.updateQueue;
              if (((t.updateQueue = null), null !== o)) {
                for (
                  n[Jr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      te(n, r),
                    Ce(e, a),
                    t = Ce(e, r),
                    a = 0;
                  a < o.length;
                  a += 2
                ) {
                  var l = o[a],
                    u = o[a + 1];
                  "style" === l
                    ? Ee(n, u)
                    : "dangerouslySetInnerHTML" === l
                    ? ve(n, u)
                    : "children" === l
                    ? be(n, u)
                    : w(n, l, u, t);
                }
                switch (e) {
                  case "input":
                    ne(n, r);
                    break;
                  case "textarea":
                    se(n, r);
                    break;
                  case "select":
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (o = r.value)
                        ? ie(n, !!r.multiple, o, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? ie(n, !!r.multiple, r.defaultValue, !0)
                            : ie(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(i(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (n = t.stateNode).hydrate &&
              ((n.hydrate = !1), Et(n.containerInfo))
            );
          case 13:
            return (
              null !== t.memoizedState && ((Gl = $a()), bl(t.child, !0)),
              void Tl(t)
            );
          case 19:
            return void Tl(t);
          case 23:
          case 24:
            return void bl(t, null !== t.memoizedState);
        }
        throw Error(i(163));
      }
      function Tl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new ml()),
            t.forEach(function (t) {
              var r = Zu.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Ll(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Pl = Math.ceil,
        Al = k.ReactCurrentDispatcher,
        Ol = k.ReactCurrentOwner,
        Nl = 0,
        Rl = null,
        Il = null,
        Dl = 0,
        Ml = 0,
        jl = sa(0),
        Fl = 0,
        Bl = null,
        Ul = 0,
        zl = 0,
        Zl = 0,
        $l = 0,
        ql = null,
        Gl = 0,
        Hl = 1 / 0;
      function Vl() {
        Hl = $a() + 500;
      }
      var Wl,
        Yl = null,
        Kl = !1,
        Ql = null,
        Xl = null,
        Jl = !1,
        eu = null,
        tu = 90,
        nu = [],
        ru = [],
        au = null,
        ou = 0,
        iu = null,
        lu = -1,
        uu = 0,
        su = 0,
        cu = null,
        fu = !1;
      function du() {
        return 0 != (48 & Nl) ? $a() : -1 !== lu ? lu : (lu = $a());
      }
      function pu(e) {
        if (0 == (2 & (e = e.mode))) return 1;
        if (0 == (4 & e)) return 99 === qa() ? 1 : 2;
        if ((0 === uu && (uu = Ul), 0 !== Ka.transition)) {
          0 !== su && (su = null !== ql ? ql.pendingLanes : 0), (e = uu);
          var t = 4186112 & ~su;
          return (
            0 === (t &= -t) &&
              0 === (t = (e = 4186112 & ~e) & -e) &&
              (t = 8192),
            t
          );
        }
        return (
          (e = qa()),
          0 != (4 & Nl) && 98 === e
            ? (e = Ut(12, uu))
            : (e = Ut(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                uu
              )),
          e
        );
      }
      function mu(e, t, n) {
        if (50 < ou) throw ((ou = 0), (iu = null), Error(i(185)));
        if (null === (e = hu(e, t))) return null;
        $t(e, t, n), e === Rl && ((Zl |= t), 4 === Fl && bu(e, Dl));
        var r = qa();
        1 === t
          ? 0 != (8 & Nl) && 0 == (48 & Nl)
            ? yu(e)
            : (gu(e, n), 0 === Nl && (Vl(), Wa()))
          : (0 == (4 & Nl) ||
              (98 !== r && 99 !== r) ||
              (null === au ? (au = new Set([e])) : au.add(e)),
            gu(e, n)),
          (ql = e);
      }
      function hu(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function gu(e, t) {
        for (
          var n = e.callbackNode,
            r = e.suspendedLanes,
            a = e.pingedLanes,
            o = e.expirationTimes,
            l = e.pendingLanes;
          0 < l;

        ) {
          var u = 31 - qt(l),
            s = 1 << u,
            c = o[u];
          if (-1 === c) {
            if (0 == (s & r) || 0 != (s & a)) {
              (c = t), jt(s);
              var f = Mt;
              o[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= s);
          l &= ~s;
        }
        if (((r = Ft(e, e === Rl ? Dl : 0)), (t = Mt), 0 === r))
          null !== n &&
            (n !== ja && Ta(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== ja && Ta(n);
          }
          15 === t
            ? ((n = yu.bind(null, e)),
              null === Ba ? ((Ba = [n]), (Ua = _a(Na, Ya))) : Ba.push(n),
              (n = ja))
            : 14 === t
            ? (n = Va(99, yu.bind(null, e)))
            : ((n = (function (e) {
                switch (e) {
                  case 15:
                  case 14:
                    return 99;
                  case 13:
                  case 12:
                  case 11:
                  case 10:
                    return 98;
                  case 9:
                  case 8:
                  case 7:
                  case 6:
                  case 4:
                  case 5:
                    return 97;
                  case 3:
                  case 2:
                  case 1:
                    return 95;
                  case 0:
                    return 90;
                  default:
                    throw Error(i(358, e));
                }
              })(t)),
              (n = Va(n, vu.bind(null, e)))),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function vu(e) {
        if (((lu = -1), (su = uu = 0), 0 != (48 & Nl))) throw Error(i(327));
        var t = e.callbackNode;
        if (Du() && e.callbackNode !== t) return null;
        var n = Ft(e, e === Rl ? Dl : 0);
        if (0 === n) return null;
        var r = n,
          a = Nl;
        Nl |= 16;
        var o = _u();
        for ((Rl === e && Dl === r) || (Vl(), xu(e, r)); ; )
          try {
            Pu();
            break;
          } catch (u) {
            Cu(e, u);
          }
        if (
          (no(),
          (Al.current = o),
          (Nl = a),
          null !== Il ? (r = 0) : ((Rl = null), (Dl = 0), (r = Fl)),
          0 != (Ul & Zl))
        )
          xu(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Nl |= 64),
              e.hydrate && ((e.hydrate = !1), Vr(e.containerInfo)),
              0 !== (n = Bt(e)) && (r = Tu(e, n))),
            1 === r)
          )
            throw ((t = Bl), xu(e, 0), bu(e, n), gu(e, $a()), t);
          switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
            case 5:
              Nu(e);
              break;
            case 3:
              if (
                (bu(e, n), (62914560 & n) === n && 10 < (r = Gl + 500 - $a()))
              ) {
                if (0 !== Ft(e, 0)) break;
                if (((a = e.suspendedLanes) & n) !== n) {
                  du(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Gr(Nu.bind(null, e), r);
                break;
              }
              Nu(e);
              break;
            case 4:
              if ((bu(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - qt(n);
                (o = 1 << l), (l = r[l]) > a && (a = l), (n &= ~o);
              }
              if (
                ((n = a),
                10 <
                  (n =
                    (120 > (n = $a() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Pl(n / 1960)) - n))
              ) {
                e.timeoutHandle = Gr(Nu.bind(null, e), n);
                break;
              }
              Nu(e);
              break;
            default:
              throw Error(i(329));
          }
        }
        return gu(e, $a()), e.callbackNode === t ? vu.bind(null, e) : null;
      }
      function bu(e, t) {
        for (
          t &= ~$l,
            t &= ~Zl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - qt(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function yu(e) {
        if (0 != (48 & Nl)) throw Error(i(327));
        if ((Du(), e === Rl && 0 != (e.expiredLanes & Dl))) {
          var t = Dl,
            n = Tu(e, t);
          0 != (Ul & Zl) && (n = Tu(e, (t = Ft(e, t))));
        } else n = Tu(e, (t = Ft(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Nl |= 64),
            e.hydrate && ((e.hydrate = !1), Vr(e.containerInfo)),
            0 !== (t = Bt(e)) && (n = Tu(e, t))),
          1 === n)
        )
          throw ((n = Bl), xu(e, 0), bu(e, t), gu(e, $a()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Nu(e),
          gu(e, $a()),
          null
        );
      }
      function wu(e, t) {
        var n = Nl;
        Nl |= 1;
        try {
          return e(t);
        } finally {
          0 === (Nl = n) && (Vl(), Wa());
        }
      }
      function ku(e, t) {
        var n = Nl;
        (Nl &= -2), (Nl |= 8);
        try {
          return e(t);
        } finally {
          0 === (Nl = n) && (Vl(), Wa());
        }
      }
      function Eu(e, t) {
        fa(jl, Ml), (Ml |= t), (Ul |= t);
      }
      function Su() {
        (Ml = jl.current), ca(jl);
      }
      function xu(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Hr(n)), null !== Il))
          for (n = Il.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && ba();
                break;
              case 3:
                Do(), ca(ma), ca(pa), Ko();
                break;
              case 5:
                jo(r);
                break;
              case 4:
                Do();
                break;
              case 13:
              case 19:
                ca(Fo);
                break;
              case 10:
                ro(r);
                break;
              case 23:
              case 24:
                Su();
            }
            n = n.return;
          }
        (Rl = e),
          (Il = Hu(e.current, null)),
          (Dl = Ml = Ul = t),
          (Fl = 0),
          (Bl = null),
          ($l = Zl = zl = 0);
      }
      function Cu(e, t) {
        for (;;) {
          var n = Il;
          try {
            if ((no(), (Qo.current = Ni), ri)) {
              for (var r = ei.memoizedState; null !== r; ) {
                var a = r.queue;
                null !== a && (a.pending = null), (r = r.next);
              }
              ri = !1;
            }
            if (
              ((Jo = 0),
              (ni = ti = ei = null),
              (ai = !1),
              (Ol.current = null),
              null === n || null === n.return)
            ) {
              (Fl = 1), (Bl = t), (Il = null);
              break;
            }
            e: {
              var o = e,
                i = n.return,
                l = n,
                u = t;
              if (
                ((t = Dl),
                (l.flags |= 2048),
                (l.firstEffect = l.lastEffect = null),
                null !== u &&
                  "object" == typeof u &&
                  "function" == typeof u.then)
              ) {
                var s = u;
                if (0 == (2 & l.mode)) {
                  var c = l.alternate;
                  c
                    ? ((l.updateQueue = c.updateQueue),
                      (l.memoizedState = c.memoizedState),
                      (l.lanes = c.lanes))
                    : ((l.updateQueue = null), (l.memoizedState = null));
                }
                var f = 0 != (1 & Fo.current),
                  d = i;
                do {
                  var p;
                  if ((p = 13 === d.tag)) {
                    var m = d.memoizedState;
                    if (null !== m) p = null !== m.dehydrated;
                    else {
                      var h = d.memoizedProps;
                      p =
                        void 0 !== h.fallback &&
                        (!0 !== h.unstable_avoidThisFallback || !f);
                    }
                  }
                  if (p) {
                    var g = d.updateQueue;
                    if (null === g) {
                      var v = new Set();
                      v.add(s), (d.updateQueue = v);
                    } else g.add(s);
                    if (0 == (2 & d.mode)) {
                      if (
                        ((d.flags |= 64),
                        (l.flags |= 16384),
                        (l.flags &= -2981),
                        1 === l.tag)
                      )
                        if (null === l.alternate) l.tag = 17;
                        else {
                          var b = co(-1, 1);
                          (b.tag = 2), fo(l, b);
                        }
                      l.lanes |= 1;
                      break e;
                    }
                    (u = void 0), (l = t);
                    var y = o.pingCache;
                    if (
                      (null === y
                        ? ((y = o.pingCache = new fl()),
                          (u = new Set()),
                          y.set(s, u))
                        : void 0 === (u = y.get(s)) &&
                          ((u = new Set()), y.set(s, u)),
                      !u.has(l))
                    ) {
                      u.add(l);
                      var w = zu.bind(null, o, s, l);
                      s.then(w, w);
                    }
                    (d.flags |= 4096), (d.lanes = t);
                    break e;
                  }
                  d = d.return;
                } while (null !== d);
                u = Error(
                  (V(l.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== Fl && (Fl = 2), (u = sl(u, l)), (d = i);
              do {
                switch (d.tag) {
                  case 3:
                    (o = u),
                      (d.flags |= 4096),
                      (t &= -t),
                      (d.lanes |= t),
                      po(d, dl(0, o, t));
                    break e;
                  case 1:
                    o = u;
                    var k = d.type,
                      E = d.stateNode;
                    if (
                      0 == (64 & d.flags) &&
                      ("function" == typeof k.getDerivedStateFromError ||
                        (null !== E &&
                          "function" == typeof E.componentDidCatch &&
                          (null === Xl || !Xl.has(E))))
                    ) {
                      (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        po(d, pl(d, o, t));
                      break e;
                    }
                }
                d = d.return;
              } while (null !== d);
            }
            Ou(n);
          } catch (S) {
            (t = S), Il === n && null !== n && (Il = n = n.return);
            continue;
          }
          break;
        }
      }
      function _u() {
        var e = Al.current;
        return (Al.current = Ni), null === e ? Ni : e;
      }
      function Tu(e, t) {
        var n = Nl;
        Nl |= 16;
        var r = _u();
        for ((Rl === e && Dl === t) || xu(e, t); ; )
          try {
            Lu();
            break;
          } catch (a) {
            Cu(e, a);
          }
        if ((no(), (Nl = n), (Al.current = r), null !== Il))
          throw Error(i(261));
        return (Rl = null), (Dl = 0), Fl;
      }
      function Lu() {
        for (; null !== Il; ) Au(Il);
      }
      function Pu() {
        for (; null !== Il && !La(); ) Au(Il);
      }
      function Au(e) {
        var t = Wl(e.alternate, e, Ml);
        (e.memoizedProps = e.pendingProps),
          null === t ? Ou(e) : (Il = t),
          (Ol.current = null);
      }
      function Ou(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 == (2048 & t.flags))) {
            if (null !== (n = ll(n, t, Ml))) return void (Il = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 != (1073741824 & Ml) ||
              0 == (4 & n.mode)
            ) {
              for (var r = 0, a = n.child; null !== a; )
                (r |= a.lanes | a.childLanes), (a = a.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 == (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = t.firstEffect),
                (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = t)
                  : (e.firstEffect = t),
                (e.lastEffect = t)));
          } else {
            if (null !== (n = ul(t))) return (n.flags &= 2047), void (Il = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Il = t);
          Il = t = e;
        } while (null !== t);
        0 === Fl && (Fl = 5);
      }
      function Nu(e) {
        var t = qa();
        return Ha(99, Ru.bind(null, e, t)), null;
      }
      function Ru(e, t) {
        do {
          Du();
        } while (null !== eu);
        if (0 != (48 & Nl)) throw Error(i(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(i(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          a = r,
          o = e.pendingLanes & ~a;
        (e.pendingLanes = a),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= a),
          (e.mutableReadLanes &= a),
          (e.entangledLanes &= a),
          (a = e.entanglements);
        for (var l = e.eventTimes, u = e.expirationTimes; 0 < o; ) {
          var s = 31 - qt(o),
            c = 1 << s;
          (a[s] = 0), (l[s] = -1), (u[s] = -1), (o &= ~c);
        }
        if (
          (null !== au && 0 == (24 & r) && au.has(e) && au.delete(e),
          e === Rl && ((Il = Rl = null), (Dl = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((a = Nl),
            (Nl |= 32),
            (Ol.current = null),
            (zr = Yt),
            vr((l = gr())))
          ) {
            if ("selectionStart" in l)
              u = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: if (
                ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                (c = u.getSelection && u.getSelection()) && 0 !== c.rangeCount)
              ) {
                (u = c.anchorNode),
                  (o = c.anchorOffset),
                  (s = c.focusNode),
                  (c = c.focusOffset);
                try {
                  u.nodeType, s.nodeType;
                } catch (_) {
                  u = null;
                  break e;
                }
                var f = 0,
                  d = -1,
                  p = -1,
                  m = 0,
                  h = 0,
                  g = l,
                  v = null;
                t: for (;;) {
                  for (
                    var b;
                    g !== u || (0 !== o && 3 !== g.nodeType) || (d = f + o),
                      g !== s || (0 !== c && 3 !== g.nodeType) || (p = f + c),
                      3 === g.nodeType && (f += g.nodeValue.length),
                      null !== (b = g.firstChild);

                  )
                    (v = g), (g = b);
                  for (;;) {
                    if (g === l) break t;
                    if (
                      (v === u && ++m === o && (d = f),
                      v === s && ++h === c && (p = f),
                      null !== (b = g.nextSibling))
                    )
                      break;
                    v = (g = v).parentNode;
                  }
                  g = b;
                }
                u = -1 === d || -1 === p ? null : { start: d, end: p };
              } else u = null;
            u = u || { start: 0, end: 0 };
          } else u = null;
          (Zr = { focusedElem: l, selectionRange: u }),
            (Yt = !1),
            (cu = null),
            (fu = !1),
            (Yl = r);
          do {
            try {
              Iu();
            } catch (_) {
              if (null === Yl) throw Error(i(330));
              Uu(Yl, _), (Yl = Yl.nextEffect);
            }
          } while (null !== Yl);
          (cu = null), (Yl = r);
          do {
            try {
              for (l = e; null !== Yl; ) {
                var y = Yl.flags;
                if ((16 & y && be(Yl.stateNode, ""), 128 & y)) {
                  var w = Yl.alternate;
                  if (null !== w) {
                    var k = w.ref;
                    null !== k &&
                      ("function" == typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & y) {
                  case 2:
                    El(Yl), (Yl.flags &= -3);
                    break;
                  case 6:
                    El(Yl), (Yl.flags &= -3), _l(Yl.alternate, Yl);
                    break;
                  case 1024:
                    Yl.flags &= -1025;
                    break;
                  case 1028:
                    (Yl.flags &= -1025), _l(Yl.alternate, Yl);
                    break;
                  case 4:
                    _l(Yl.alternate, Yl);
                    break;
                  case 8:
                    Cl(l, (u = Yl));
                    var E = u.alternate;
                    wl(u), null !== E && wl(E);
                }
                Yl = Yl.nextEffect;
              }
            } catch (_) {
              if (null === Yl) throw Error(i(330));
              Uu(Yl, _), (Yl = Yl.nextEffect);
            }
          } while (null !== Yl);
          if (
            ((k = Zr),
            (w = gr()),
            (y = k.focusedElem),
            (l = k.selectionRange),
            w !== y &&
              y &&
              y.ownerDocument &&
              hr(y.ownerDocument.documentElement, y))
          ) {
            null !== l &&
              vr(y) &&
              ((w = l.start),
              void 0 === (k = l.end) && (k = w),
              "selectionStart" in y
                ? ((y.selectionStart = w),
                  (y.selectionEnd = Math.min(k, y.value.length)))
                : (k =
                    ((w = y.ownerDocument || document) && w.defaultView) ||
                    window).getSelection &&
                  ((k = k.getSelection()),
                  (u = y.textContent.length),
                  (E = Math.min(l.start, u)),
                  (l = void 0 === l.end ? E : Math.min(l.end, u)),
                  !k.extend && E > l && ((u = l), (l = E), (E = u)),
                  (u = mr(y, E)),
                  (o = mr(y, l)),
                  u &&
                    o &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== u.node ||
                      k.anchorOffset !== u.offset ||
                      k.focusNode !== o.node ||
                      k.focusOffset !== o.offset) &&
                    ((w = w.createRange()).setStart(u.node, u.offset),
                    k.removeAllRanges(),
                    E > l
                      ? (k.addRange(w), k.extend(o.node, o.offset))
                      : (w.setEnd(o.node, o.offset), k.addRange(w))))),
              (w = []);
            for (k = y; (k = k.parentNode); )
              1 === k.nodeType &&
                w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              "function" == typeof y.focus && y.focus(), y = 0;
              y < w.length;
              y++
            )
              ((k = w[y]).element.scrollLeft = k.left),
                (k.element.scrollTop = k.top);
          }
          (Yt = !!zr), (Zr = zr = null), (e.current = n), (Yl = r);
          do {
            try {
              for (y = e; null !== Yl; ) {
                var S = Yl.flags;
                if ((36 & S && vl(y, Yl.alternate, Yl), 128 & S)) {
                  w = void 0;
                  var x = Yl.ref;
                  if (null !== x) {
                    var C = Yl.stateNode;
                    Yl.tag,
                      (w = C),
                      "function" == typeof x ? x(w) : (x.current = w);
                  }
                }
                Yl = Yl.nextEffect;
              }
            } catch (_) {
              if (null === Yl) throw Error(i(330));
              Uu(Yl, _), (Yl = Yl.nextEffect);
            }
          } while (null !== Yl);
          (Yl = null), Fa(), (Nl = a);
        } else e.current = n;
        if (Jl) (Jl = !1), (eu = e), (tu = t);
        else
          for (Yl = r; null !== Yl; )
            (t = Yl.nextEffect),
              (Yl.nextEffect = null),
              8 & Yl.flags && (((S = Yl).sibling = null), (S.stateNode = null)),
              (Yl = t);
        if (
          (0 === (r = e.pendingLanes) && (Xl = null),
          1 === r ? (e === iu ? ou++ : ((ou = 0), (iu = e))) : (ou = 0),
          (n = n.stateNode),
          xa && "function" == typeof xa.onCommitFiberRoot)
        )
          try {
            xa.onCommitFiberRoot(Sa, n, void 0, 64 == (64 & n.current.flags));
          } catch (_) {}
        if ((gu(e, $a()), Kl)) throw ((Kl = !1), (e = Ql), (Ql = null), e);
        return 0 != (8 & Nl) || Wa(), null;
      }
      function Iu() {
        for (; null !== Yl; ) {
          var e = Yl.alternate;
          fu ||
            null === cu ||
            (0 != (8 & Yl.flags)
              ? et(Yl, cu) && (fu = !0)
              : 13 === Yl.tag && Ll(e, Yl) && et(Yl, cu) && (fu = !0));
          var t = Yl.flags;
          0 != (256 & t) && gl(e, Yl),
            0 == (512 & t) ||
              Jl ||
              ((Jl = !0),
              Va(97, function () {
                return Du(), null;
              })),
            (Yl = Yl.nextEffect);
        }
      }
      function Du() {
        if (90 !== tu) {
          var e = 97 < tu ? 97 : tu;
          return (tu = 90), Ha(e, Fu);
        }
        return !1;
      }
      function Mu(e, t) {
        nu.push(t, e),
          Jl ||
            ((Jl = !0),
            Va(97, function () {
              return Du(), null;
            }));
      }
      function ju(e, t) {
        ru.push(t, e),
          Jl ||
            ((Jl = !0),
            Va(97, function () {
              return Du(), null;
            }));
      }
      function Fu() {
        if (null === eu) return !1;
        var e = eu;
        if (((eu = null), 0 != (48 & Nl))) throw Error(i(331));
        var t = Nl;
        Nl |= 32;
        var n = ru;
        ru = [];
        for (var r = 0; r < n.length; r += 2) {
          var a = n[r],
            o = n[r + 1],
            l = a.destroy;
          if (((a.destroy = void 0), "function" == typeof l))
            try {
              l();
            } catch (s) {
              if (null === o) throw Error(i(330));
              Uu(o, s);
            }
        }
        for (n = nu, nu = [], r = 0; r < n.length; r += 2) {
          (a = n[r]), (o = n[r + 1]);
          try {
            var u = a.create;
            a.destroy = u();
          } catch (s) {
            if (null === o) throw Error(i(330));
            Uu(o, s);
          }
        }
        for (u = e.current.firstEffect; null !== u; )
          (e = u.nextEffect),
            (u.nextEffect = null),
            8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
            (u = e);
        return (Nl = t), Wa(), !0;
      }
      function Bu(e, t, n) {
        fo(e, (t = dl(0, (t = sl(n, t)), 1))),
          (t = du()),
          null !== (e = hu(e, 1)) && ($t(e, 1, t), gu(e, t));
      }
      function Uu(e, t) {
        if (3 === e.tag) Bu(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Bu(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Xl || !Xl.has(r)))
              ) {
                var a = pl(n, (e = sl(t, e)), 1);
                if ((fo(n, a), (a = du()), null !== (n = hu(n, 1))))
                  $t(n, 1, a), gu(n, a);
                else if (
                  "function" == typeof r.componentDidCatch &&
                  (null === Xl || !Xl.has(r))
                )
                  try {
                    r.componentDidCatch(t, e);
                  } catch (o) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function zu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = du()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Rl === e &&
            (Dl & n) === n &&
            (4 === Fl || (3 === Fl && (62914560 & Dl) === Dl && 500 > $a() - Gl)
              ? xu(e, 0)
              : ($l |= n)),
          gu(e, t);
      }
      function Zu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (0 == (2 & (t = e.mode))
              ? (t = 1)
              : 0 == (4 & t)
              ? (t = 99 === qa() ? 1 : 2)
              : (0 === uu && (uu = Ul),
                0 === (t = zt(62914560 & ~uu)) && (t = 4194304))),
          (n = du()),
          null !== (e = hu(e, t)) && ($t(e, t, n), gu(e, n));
      }
      function $u(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function qu(e, t, n, r) {
        return new $u(e, t, n, r);
      }
      function Gu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Hu(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = qu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Vu(e, t, n, r, a, o) {
        var l = 2;
        if (((r = e), "function" == typeof e)) Gu(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else
          e: switch (e) {
            case x:
              return Wu(n.children, a, o, t);
            case M:
              (l = 8), (a |= 16);
              break;
            case C:
              (l = 8), (a |= 1);
              break;
            case _:
              return (
                ((e = qu(12, n, t, 8 | a)).elementType = _),
                (e.type = _),
                (e.lanes = o),
                e
              );
            case A:
              return (
                ((e = qu(13, n, t, a)).type = A),
                (e.elementType = A),
                (e.lanes = o),
                e
              );
            case O:
              return ((e = qu(19, n, t, a)).elementType = O), (e.lanes = o), e;
            case j:
              return Yu(n, a, o, t);
            case F:
              return ((e = qu(24, n, t, a)).elementType = F), (e.lanes = o), e;
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case T:
                    l = 10;
                    break e;
                  case L:
                    l = 9;
                    break e;
                  case P:
                    l = 11;
                    break e;
                  case N:
                    l = 14;
                    break e;
                  case R:
                    (l = 16), (r = null);
                    break e;
                  case I:
                    l = 22;
                    break e;
                }
              throw Error(i(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = qu(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t
        );
      }
      function Wu(e, t, n, r) {
        return ((e = qu(7, e, r, t)).lanes = n), e;
      }
      function Yu(e, t, n, r) {
        return ((e = qu(23, e, r, t)).elementType = j), (e.lanes = n), e;
      }
      function Ku(e, t, n) {
        return ((e = qu(6, e, null, t)).lanes = n), e;
      }
      function Qu(e, t, n) {
        return (
          ((t = qu(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).lanes = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Xu(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Zt(0)),
          (this.expirationTimes = Zt(-1)),
          (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
          (this.entanglements = Zt(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Ju(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: S,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function es(e, t, n, r) {
        var a = t.current,
          o = du(),
          l = pu(a);
        e: if (n) {
          t: {
            if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(i(170));
            var u = n;
            do {
              switch (u.tag) {
                case 3:
                  u = u.stateNode.context;
                  break t;
                case 1:
                  if (va(u.type)) {
                    u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              u = u.return;
            } while (null !== u);
            throw Error(i(171));
          }
          if (1 === n.tag) {
            var s = n.type;
            if (va(s)) {
              n = wa(n, s, u);
              break e;
            }
          }
          n = u;
        } else n = da;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = co(o, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          fo(a, t),
          mu(a, l, o),
          l
        );
      }
      function ts(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function ns(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function rs(e, t) {
        ns(e, t), (e = e.alternate) && ns(e, t);
      }
      function as(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Xu(e, t, null != n && !0 === n.hydrate)),
          (t = qu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          uo(t),
          (e[ea] = n.current),
          Nr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var a = (t = r[e])._getVersion;
            (a = a(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, a])
                : n.mutableSourceEagerHydrationData.push(t, a);
          }
        this._internalRoot = n;
      }
      function os(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function is(e, t, n, r, a) {
        var o = n._reactRootContainer;
        if (o) {
          var i = o._internalRoot;
          if ("function" == typeof a) {
            var l = a;
            a = function () {
              var e = ts(i);
              l.call(e);
            };
          }
          es(t, i, e, a);
        } else {
          if (
            ((o = n._reactRootContainer = (function (e, t) {
              if (
                (t ||
                  (t = !(
                    !(t = e
                      ? 9 === e.nodeType
                        ? e.documentElement
                        : e.firstChild
                      : null) ||
                    1 !== t.nodeType ||
                    !t.hasAttribute("data-reactroot")
                  )),
                !t)
              )
                for (var n; (n = e.lastChild); ) e.removeChild(n);
              return new as(e, 0, t ? { hydrate: !0 } : void 0);
            })(n, r)),
            (i = o._internalRoot),
            "function" == typeof a)
          ) {
            var u = a;
            a = function () {
              var e = ts(i);
              u.call(e);
            };
          }
          ku(function () {
            es(t, i, e, a);
          });
        }
        return ts(i);
      }
      function ls(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!os(t)) throw Error(i(200));
        return Ju(e, t, null, n);
      }
      (Wl = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || ma.current) ji = !0;
          else {
            if (0 == (n & r)) {
              switch (((ji = !1), t.tag)) {
                case 3:
                  Vi(t), Wo();
                  break;
                case 5:
                  Mo(t);
                  break;
                case 1:
                  va(t.type) && ka(t);
                  break;
                case 4:
                  Io(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  fa(Xa, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 != (n & t.child.childLanes)
                      ? Xi(e, t, n)
                      : (fa(Fo, 1 & Fo.current),
                        null !== (t = ol(e, t, n)) ? t.sibling : null);
                  fa(Fo, 1 & Fo.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                    if (r) return al(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    fa(Fo, Fo.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Zi(e, t, n);
              }
              return ol(e, t, n);
            }
            ji = 0 != (16384 & e.flags);
          }
        else ji = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (a = ga(t, pa.current)),
              oo(t, n),
              (a = li(null, t, r, e, a, n)),
              (t.flags |= 1),
              "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                va(r))
              ) {
                var o = !0;
                ka(t);
              } else o = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                uo(t);
              var l = r.getDerivedStateFromProps;
              "function" == typeof l && vo(t, r, l, e),
                (a.updater = bo),
                (t.stateNode = a),
                (a._reactInternals = t),
                Eo(t, r, e, n),
                (t = Hi(null, t, r, !0, o, n));
            } else (t.tag = 0), Fi(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (o = a._init)(a._payload)),
                (t.type = a),
                (o = t.tag = (function (e) {
                  if ("function" == typeof e) return Gu(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === P) return 11;
                    if (e === N) return 14;
                  }
                  return 2;
                })(a)),
                (e = Qa(a, e)),
                o)
              ) {
                case 0:
                  t = qi(null, t, a, e, n);
                  break e;
                case 1:
                  t = Gi(null, t, a, e, n);
                  break e;
                case 11:
                  t = Bi(null, t, a, e, n);
                  break e;
                case 14:
                  t = Ui(null, t, a, Qa(a.type, e), r, n);
                  break e;
              }
              throw Error(i(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              qi(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Gi(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
            );
          case 3:
            if ((Vi(t), (r = t.updateQueue), null === e || null === r))
              throw Error(i(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              so(e, t),
              mo(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              Wo(), (t = ol(e, t, n));
            else {
              if (
                ((o = (a = t.stateNode).hydrate) &&
                  ((zo = Wr(t.stateNode.containerInfo.firstChild)),
                  (Uo = t),
                  (o = Zo = !0)),
                o)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((o = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      Yo.push(o);
                for (n = Lo(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Fi(e, t, r, n), Wo();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Mo(t),
              null === e && Go(t),
              (r = t.type),
              (a = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (l = a.children),
              qr(r, a) ? (l = null) : null !== o && qr(r, o) && (t.flags |= 16),
              $i(e, t),
              Fi(e, t, l, n),
              t.child
            );
          case 6:
            return null === e && Go(t), null;
          case 13:
            return Xi(e, t, n);
          case 4:
            return (
              Io(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = To(t, null, r, n)) : Fi(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Bi(e, t, r, (a = t.elementType === r ? a : Qa(r, a)), n)
            );
          case 7:
            return Fi(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Fi(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (l = t.memoizedProps),
                (o = a.value);
              var u = t.type._context;
              if ((fa(Xa, u._currentValue), (u._currentValue = o), null !== l))
                if (
                  ((u = l.value),
                  0 ===
                    (o = cr(u, o)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(u, o)
                          : 1073741823)))
                ) {
                  if (l.children === a.children && !ma.current) {
                    t = ol(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var s = u.dependencies;
                    if (null !== s) {
                      l = u.child;
                      for (var c = s.firstContext; null !== c; ) {
                        if (c.context === r && 0 != (c.observedBits & o)) {
                          1 === u.tag &&
                            (((c = co(-1, n & -n)).tag = 2), fo(u, c)),
                            (u.lanes |= n),
                            null !== (c = u.alternate) && (c.lanes |= n),
                            ao(u.return, n),
                            (s.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== l) l.return = u;
                    else
                      for (l = u; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (u = l.sibling)) {
                          (u.return = l.return), (l = u);
                          break;
                        }
                        l = l.return;
                      }
                    u = l;
                  }
              Fi(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (o = t.pendingProps).children),
              oo(t, n),
              (r = r((a = io(a, o.unstable_observedBits)))),
              (t.flags |= 1),
              Fi(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (o = Qa((a = t.type), t.pendingProps)),
              Ui(e, t, a, (o = Qa(a.type, o)), r, n)
            );
          case 15:
            return zi(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : Qa(r, a)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              va(r) ? ((e = !0), ka(t)) : (e = !1),
              oo(t, n),
              wo(t, r, a),
              Eo(t, r, a, n),
              Hi(null, t, r, !0, e, n)
            );
          case 19:
            return al(e, t, n);
          case 23:
          case 24:
            return Zi(e, t, n);
        }
        throw Error(i(156, t.tag));
      }),
        (as.prototype.render = function (e) {
          es(e, this._internalRoot, null, null);
        }),
        (as.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          es(null, e, null, function () {
            t[ea] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (mu(e, 4, du()), rs(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (mu(e, 67108864, du()), rs(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = du(),
              n = pu(e);
            mu(e, n, t), rs(e, n);
          }
        }),
        (at = function (e, t) {
          return t();
        }),
        (Te = function (e, t, n) {
          switch (t) {
            case "input":
              if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = oa(r);
                    if (!a) throw Error(i(90));
                    Q(r), ne(r, a);
                  }
                }
              }
              break;
            case "textarea":
              se(e, n);
              break;
            case "select":
              null != (t = n.value) && ie(e, !!n.multiple, t, !1);
          }
        }),
        (Re = wu),
        (Ie = function (e, t, n, r, a) {
          var o = Nl;
          Nl |= 4;
          try {
            return Ha(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (Nl = o) && (Vl(), Wa());
          }
        }),
        (De = function () {
          0 == (49 & Nl) &&
            ((function () {
              if (null !== au) {
                var e = au;
                (au = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), gu(e, $a());
                  });
              }
              Wa();
            })(),
            Du());
        }),
        (Me = function (e, t) {
          var n = Nl;
          Nl |= 2;
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && (Vl(), Wa());
          }
        });
      var us = { Events: [ra, aa, oa, Oe, Ne, Du, { current: !1 }] },
        ss = {
          findFiberByHostInstance: na,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        },
        cs = {
          bundleType: ss.bundleType,
          version: ss.version,
          rendererPackageName: ss.rendererPackageName,
          rendererConfig: ss.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: k.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Je(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            ss.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!fs.isDisabled && fs.supportsFiber)
          try {
            (Sa = fs.inject(cs)), (xa = fs);
          } catch (ge) {}
      }
      t.hydrate = function (e, t, n) {
        if (!os(t)) throw Error(i(200));
        return is(null, e, t, !0, n);
      };
    },
    3935: function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(4448));
    },
    9590: function (e) {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function o(e, i) {
        if (e === i) return !0;
        if (e && i && "object" == typeof e && "object" == typeof i) {
          if (e.constructor !== i.constructor) return !1;
          var l, u, s, c;
          if (Array.isArray(e)) {
            if ((l = e.length) != i.length) return !1;
            for (u = l; 0 != u--; ) if (!o(e[u], i[u])) return !1;
            return !0;
          }
          if (n && e instanceof Map && i instanceof Map) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(u = c.next()).done; )
              if (!i.has(u.value[0])) return !1;
            for (c = e.entries(); !(u = c.next()).done; )
              if (!o(u.value[1], i.get(u.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && i instanceof Set) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(u = c.next()).done; )
              if (!i.has(u.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
            if ((l = e.length) != i.length) return !1;
            for (u = l; 0 != u--; ) if (e[u] !== i[u]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === i.source && e.flags === i.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === i.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === i.toString();
          if ((l = (s = Object.keys(e)).length) !== Object.keys(i).length)
            return !1;
          for (u = l; 0 != u--; )
            if (!Object.prototype.hasOwnProperty.call(i, s[u])) return !1;
          if (t && e instanceof Element) return !1;
          for (u = l; 0 != u--; )
            if (
              (("_owner" !== s[u] && "__v" !== s[u] && "__o" !== s[u]) ||
                !e.$$typeof) &&
              !o(e[s[u]], i[s[u]])
            )
              return !1;
          return !0;
        }
        return e != e && i != i;
      }
      e.exports = function (e, t) {
        try {
          return o(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    405: function (e, t, n) {
      "use strict";
      n.d(t, {
        B6: function () {
          return G;
        },
        ql: function () {
          return J;
        },
      });
      var r = n(7294),
        a = n(5697),
        o = n.n(a),
        i = n(9590),
        l = n.n(i),
        u = n(1143),
        s = n.n(u),
        c = n(6774),
        f = n.n(c);
      function d() {
        return (
          (d =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          d.apply(this, arguments)
        );
      }
      function p(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          m(e, t);
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function h(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          t.indexOf((n = o[r])) >= 0 || (a[n] = e[n]);
        return a;
      }
      var g = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
          FRAGMENT: "Symbol(react.fragment)",
        },
        v = { rel: ["amphtml", "canonical", "alternate"] },
        b = { type: ["application/ld+json"] },
        y = {
          charset: "",
          name: ["robots", "description"],
          property: [
            "og:type",
            "og:title",
            "og:url",
            "og:image",
            "og:image:alt",
            "og:description",
            "twitter:url",
            "twitter:title",
            "twitter:description",
            "twitter:image",
            "twitter:image:alt",
            "twitter:card",
            "twitter:site",
          ],
        },
        w = Object.keys(g).map(function (e) {
          return g[e];
        }),
        k = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        E = Object.keys(k).reduce(function (e, t) {
          return (e[k[t]] = t), e;
        }, {}),
        S = function (e, t) {
          for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
          }
          return null;
        },
        x = function (e) {
          var t = S(e, g.TITLE),
            n = S(e, "titleTemplate");
          if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
              return t;
            });
          var r = S(e, "defaultTitle");
          return t || r || void 0;
        },
        C = function (e) {
          return S(e, "onChangeClientState") || function () {};
        },
        _ = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return d({}, e, t);
            }, {});
        },
        T = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[g.BASE];
            })
            .map(function (e) {
              return e[g.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a += 1) {
                  var o = r[a].toLowerCase();
                  if (-1 !== e.indexOf(o) && n[o]) return t.concat(n);
                }
              return t;
            }, []);
        },
        L = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  console &&
                  "function" == typeof console.warn &&
                  console.warn(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      typeof t[e] +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (var n, o = Object.keys(e), i = 0; i < o.length; i += 1) {
                  var l = o[i],
                    u = l.toLowerCase();
                  -1 === t.indexOf(u) ||
                    ("rel" === n && "canonical" === e[n].toLowerCase()) ||
                    ("rel" === u && "stylesheet" === e[u].toLowerCase()) ||
                    (n = u),
                    -1 === t.indexOf(l) ||
                      ("innerHTML" !== l &&
                        "cssText" !== l &&
                        "itemprop" !== l) ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                var s = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][s] && ((a[n][s] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var o = Object.keys(a), i = 0; i < o.length; i += 1) {
                var l = o[i],
                  u = d({}, r[l], a[l]);
                r[l] = u;
              }
              return e;
            }, [])
            .reverse();
        },
        P = function (e, t) {
          if (Array.isArray(e) && e.length)
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
          return !1;
        },
        A = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        O = function (e, t) {
          return Array.isArray(e)
            ? e.reduce(
                function (e, n) {
                  return (
                    (function (e, t) {
                      for (var n = Object.keys(e), r = 0; r < n.length; r += 1)
                        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                      return !1;
                    })(n, t)
                      ? e.priority.push(n)
                      : e.default.push(n),
                    e
                  );
                },
                { priority: [], default: [] }
              )
            : { default: e };
        },
        N = function (e, t) {
          var n;
          return d({}, e, (((n = {})[t] = void 0), n));
        },
        R = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
        I = function (e, t) {
          return (
            void 0 === t && (t = !0),
            !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;")
          );
        },
        D = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        M = function (e, t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
              return (t[k[n] || n] = e[n]), t;
            }, t)
          );
        },
        j = function (e, t) {
          return t.map(function (t, n) {
            var a,
              o = (((a = { key: n })["data-rh"] = !0), a);
            return (
              Object.keys(t).forEach(function (e) {
                var n = k[e] || e;
                "innerHTML" === n || "cssText" === n
                  ? (o.dangerouslySetInnerHTML = {
                      __html: t.innerHTML || t.cssText,
                    })
                  : (o[n] = t[e]);
              }),
              r.createElement(e, o)
            );
          });
        },
        F = function (e, t, n) {
          switch (e) {
            case g.TITLE:
              return {
                toComponent: function () {
                  return (
                    (n = t.titleAttributes),
                    ((a = { key: (e = t.title) })["data-rh"] = !0),
                    (o = M(n, a)),
                    [r.createElement(g.TITLE, o, e)]
                  );
                  var e, n, a, o;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = D(n),
                      o = A(t);
                    return a
                      ? "<" +
                          e +
                          ' data-rh="true" ' +
                          a +
                          ">" +
                          I(o, r) +
                          "</" +
                          e +
                          ">"
                      : "<" + e + ' data-rh="true">' + I(o, r) + "</" + e + ">";
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case "bodyAttributes":
            case "htmlAttributes":
              return {
                toComponent: function () {
                  return M(t);
                },
                toString: function () {
                  return D(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return j(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !("innerHTML" === e || "cssText" === e);
                          })
                          .reduce(function (e, t) {
                            var a =
                              void 0 === r[t] ? t : t + '="' + I(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        o = r.innerHTML || r.cssText || "",
                        i = -1 === R.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-rh="true" ' +
                        a +
                        (i ? "/>" : ">" + o + "</" + e + ">")
                      );
                    }, "");
                  })(e, t, n);
                },
              };
          }
        },
        B = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            o = e.noscriptTags,
            i = e.styleTags,
            l = e.title,
            u = void 0 === l ? "" : l,
            s = e.titleAttributes,
            c = e.linkTags,
            f = e.metaTags,
            d = e.scriptTags,
            p = {
              toComponent: function () {},
              toString: function () {
                return "";
              },
            };
          if (e.prioritizeSeoTags) {
            var m = (function (e) {
              var t = e.linkTags,
                n = e.scriptTags,
                r = e.encode,
                a = O(e.metaTags, y),
                o = O(t, v),
                i = O(n, b);
              return {
                priorityMethods: {
                  toComponent: function () {
                    return [].concat(
                      j(g.META, a.priority),
                      j(g.LINK, o.priority),
                      j(g.SCRIPT, i.priority)
                    );
                  },
                  toString: function () {
                    return (
                      F(g.META, a.priority, r) +
                      " " +
                      F(g.LINK, o.priority, r) +
                      " " +
                      F(g.SCRIPT, i.priority, r)
                    );
                  },
                },
                metaTags: a.default,
                linkTags: o.default,
                scriptTags: i.default,
              };
            })(e);
            (p = m.priorityMethods),
              (c = m.linkTags),
              (f = m.metaTags),
              (d = m.scriptTags);
          }
          return {
            priority: p,
            base: F(g.BASE, t, r),
            bodyAttributes: F("bodyAttributes", n, r),
            htmlAttributes: F("htmlAttributes", a, r),
            link: F(g.LINK, c, r),
            meta: F(g.META, f, r),
            noscript: F(g.NOSCRIPT, o, r),
            script: F(g.SCRIPT, d, r),
            style: F(g.STYLE, i, r),
            title: F(g.TITLE, { title: u, titleAttributes: s }, r),
          };
        },
        U = [],
        z = function (e, t) {
          var n = this;
          void 0 === t && (t = "undefined" != typeof document),
            (this.instances = []),
            (this.value = {
              setHelmet: function (e) {
                n.context.helmet = e;
              },
              helmetInstances: {
                get: function () {
                  return n.canUseDOM ? U : n.instances;
                },
                add: function (e) {
                  (n.canUseDOM ? U : n.instances).push(e);
                },
                remove: function (e) {
                  var t = (n.canUseDOM ? U : n.instances).indexOf(e);
                  (n.canUseDOM ? U : n.instances).splice(t, 1);
                },
              },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
              (e.helmet = B({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {},
              }));
        },
        Z = r.createContext({}),
        $ = o().shape({
          setHelmet: o().func,
          helmetInstances: o().shape({
            get: o().func,
            add: o().func,
            remove: o().func,
          }),
        }),
        q = "undefined" != typeof document,
        G = (function (e) {
          function t(n) {
            var r;
            return (
              ((r = e.call(this, n) || this).helmetData = new z(
                r.props.context,
                t.canUseDOM
              )),
              r
            );
          }
          return (
            p(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                Z.Provider,
                { value: this.helmetData.value },
                this.props.children
              );
            }),
            t
          );
        })(r.Component);
      (G.canUseDOM = q),
        (G.propTypes = {
          context: o().shape({ helmet: o().shape() }),
          children: o().node.isRequired,
        }),
        (G.defaultProps = { context: {} }),
        (G.displayName = "HelmetProvider");
      var H = function (e, t) {
          var n,
            r = document.head || document.querySelector(g.HEAD),
            a = r.querySelectorAll(e + "[data-rh]"),
            o = [].slice.call(a),
            i = [];
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var r = document.createElement(e);
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) &&
                    ("innerHTML" === a
                      ? (r.innerHTML = t.innerHTML)
                      : "cssText" === a
                      ? r.styleSheet
                        ? (r.styleSheet.cssText = t.cssText)
                        : r.appendChild(document.createTextNode(t.cssText))
                      : r.setAttribute(a, void 0 === t[a] ? "" : t[a]));
                r.setAttribute("data-rh", "true"),
                  o.some(function (e, t) {
                    return (n = t), r.isEqualNode(e);
                  })
                    ? o.splice(n, 1)
                    : i.push(r);
              }),
            o.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: o, newTags: i }
          );
        },
        V = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute("data-rh"),
                a = r ? r.split(",") : [],
                o = [].concat(a),
                i = Object.keys(t),
                l = 0;
              l < i.length;
              l += 1
            ) {
              var u = i[l],
                s = t[u] || "";
              n.getAttribute(u) !== s && n.setAttribute(u, s),
                -1 === a.indexOf(u) && a.push(u);
              var c = o.indexOf(u);
              -1 !== c && o.splice(c, 1);
            }
            for (var f = o.length - 1; f >= 0; f -= 1) n.removeAttribute(o[f]);
            a.length === o.length
              ? n.removeAttribute("data-rh")
              : n.getAttribute("data-rh") !== i.join(",") &&
                n.setAttribute("data-rh", i.join(","));
          }
        },
        W = function (e, t) {
          var n = e.baseTag,
            r = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            i = e.noscriptTags,
            l = e.onChangeClientState,
            u = e.scriptTags,
            s = e.styleTags,
            c = e.title,
            f = e.titleAttributes;
          V(g.BODY, e.bodyAttributes),
            V(g.HTML, r),
            (function (e, t) {
              void 0 !== e && document.title !== e && (document.title = A(e)),
                V(g.TITLE, t);
            })(c, f);
          var d = {
              baseTag: H(g.BASE, n),
              linkTags: H(g.LINK, a),
              metaTags: H(g.META, o),
              noscriptTags: H(g.NOSCRIPT, i),
              scriptTags: H(g.SCRIPT, u),
              styleTags: H(g.STYLE, s),
            },
            p = {},
            m = {};
          Object.keys(d).forEach(function (e) {
            var t = d[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (m[e] = d[e].oldTags);
          }),
            t && t(),
            l(e, p, m);
        },
        Y = null,
        K = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t
            );
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !f()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
              this.emitChange();
            }),
            (n.componentWillUnmount = function () {
              this.props.context.helmetInstances.remove(this),
                this.emitChange();
            }),
            (n.emitChange = function () {
              var e,
                t,
                n = this.props.context,
                r = n.setHelmet,
                a = null,
                o =
                  ((e = n.helmetInstances.get().map(function (e) {
                    var t = d({}, e.props);
                    return delete t.context, t;
                  })),
                  {
                    baseTag: T(["href"], e),
                    bodyAttributes: _("bodyAttributes", e),
                    defer: S(e, "defer"),
                    encode: S(e, "encodeSpecialCharacters"),
                    htmlAttributes: _("htmlAttributes", e),
                    linkTags: L(g.LINK, ["rel", "href"], e),
                    metaTags: L(
                      g.META,
                      ["name", "charset", "http-equiv", "property", "itemprop"],
                      e
                    ),
                    noscriptTags: L(g.NOSCRIPT, ["innerHTML"], e),
                    onChangeClientState: C(e),
                    scriptTags: L(g.SCRIPT, ["src", "innerHTML"], e),
                    styleTags: L(g.STYLE, ["cssText"], e),
                    title: x(e),
                    titleAttributes: _("titleAttributes", e),
                    prioritizeSeoTags: P(e, "prioritizeSeoTags"),
                  });
              G.canUseDOM
                ? ((t = o),
                  Y && cancelAnimationFrame(Y),
                  t.defer
                    ? (Y = requestAnimationFrame(function () {
                        W(t, function () {
                          Y = null;
                        });
                      }))
                    : (W(t), (Y = null)))
                : B && (a = B(o)),
                r(a);
            }),
            (n.init = function () {
              this.rendered ||
                ((this.rendered = !0),
                this.props.context.helmetInstances.add(this),
                this.emitChange());
            }),
            (n.render = function () {
              return this.init(), null;
            }),
            t
          );
        })(r.Component);
      (K.propTypes = { context: $.isRequired }),
        (K.displayName = "HelmetDispatcher");
      var Q = ["children"],
        X = ["children"],
        J = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !l()(N(this.props, "helmetData"), N(e, "helmetData"));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
              if (!t) return null;
              switch (e.type) {
                case g.SCRIPT:
                case g.NOSCRIPT:
                  return { innerHTML: t };
                case g.STYLE:
                  return { cssText: t };
                default:
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
              }
            }),
            (n.flattenArrayTypeChildren = function (e) {
              var t,
                n = e.child,
                r = e.arrayTypeChildren;
              return d(
                {},
                r,
                (((t = {})[n.type] = [].concat(r[n.type] || [], [
                  d(
                    {},
                    e.newChildProps,
                    this.mapNestedChildrenToProps(n, e.nestedChildren)
                  ),
                ])),
                t)
              );
            }),
            (n.mapObjectTypeChildren = function (e) {
              var t,
                n,
                r = e.child,
                a = e.newProps,
                o = e.newChildProps,
                i = e.nestedChildren;
              switch (r.type) {
                case g.TITLE:
                  return d(
                    {},
                    a,
                    (((t = {})[r.type] = i), (t.titleAttributes = d({}, o)), t)
                  );
                case g.BODY:
                  return d({}, a, { bodyAttributes: d({}, o) });
                case g.HTML:
                  return d({}, a, { htmlAttributes: d({}, o) });
                default:
                  return d({}, a, (((n = {})[r.type] = d({}, o)), n));
              }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
              var n = d({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  var r;
                  n = d({}, n, (((r = {})[t] = e[t]), r));
                }),
                n
              );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
              return (
                s()(
                  w.some(function (t) {
                    return e.type === t;
                  }),
                  "function" == typeof e.type
                    ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                    : "Only elements types " +
                        w.join(", ") +
                        " are allowed. Helmet does not support rendering <" +
                        e.type +
                        "> elements. Refer to our API for more information."
                ),
                s()(
                  !t ||
                    "string" == typeof t ||
                    (Array.isArray(t) &&
                      !t.some(function (e) {
                        return "string" != typeof e;
                      })),
                  "Helmet expects a string as a child of <" +
                    e.type +
                    ">. Did you forget to wrap your children in braces? ( <" +
                    e.type +
                    ">{``}</" +
                    e.type +
                    "> ) Refer to our API for more information."
                ),
                !0
              );
            }),
            (n.mapChildrenToProps = function (e, t) {
              var n = this,
                a = {};
              return (
                r.Children.forEach(e, function (e) {
                  if (e && e.props) {
                    var r = e.props,
                      o = r.children,
                      i = h(r, Q),
                      l = Object.keys(i).reduce(function (e, t) {
                        return (e[E[t] || t] = i[t]), e;
                      }, {}),
                      u = e.type;
                    switch (
                      ("symbol" == typeof u
                        ? (u = u.toString())
                        : n.warnOnInvalidChildren(e, o),
                      u)
                    ) {
                      case g.FRAGMENT:
                        t = n.mapChildrenToProps(o, t);
                        break;
                      case g.LINK:
                      case g.META:
                      case g.NOSCRIPT:
                      case g.SCRIPT:
                      case g.STYLE:
                        a = n.flattenArrayTypeChildren({
                          child: e,
                          arrayTypeChildren: a,
                          newChildProps: l,
                          nestedChildren: o,
                        });
                        break;
                      default:
                        t = n.mapObjectTypeChildren({
                          child: e,
                          newProps: t,
                          newChildProps: l,
                          nestedChildren: o,
                        });
                    }
                  }
                }),
                this.mapArrayTypeChildrenToProps(a, t)
              );
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = h(e, X),
                a = d({}, n),
                o = n.helmetData;
              return (
                t && (a = this.mapChildrenToProps(t, a)),
                !o || o instanceof z || (o = new z(o.context, o.instances)),
                o
                  ? r.createElement(
                      K,
                      d({}, a, { context: o.value, helmetData: void 0 })
                    )
                  : r.createElement(Z.Consumer, null, function (e) {
                      return r.createElement(K, d({}, a, { context: e }));
                    })
              );
            }),
            t
          );
        })(r.Component);
      (J.propTypes = {
        base: o().object,
        bodyAttributes: o().object,
        children: o().oneOfType([o().arrayOf(o().node), o().node]),
        defaultTitle: o().string,
        defer: o().bool,
        encodeSpecialCharacters: o().bool,
        htmlAttributes: o().object,
        link: o().arrayOf(o().object),
        meta: o().arrayOf(o().object),
        noscript: o().arrayOf(o().object),
        onChangeClientState: o().func,
        script: o().arrayOf(o().object),
        style: o().arrayOf(o().object),
        title: o().string,
        titleAttributes: o().object,
        titleTemplate: o().string,
        prioritizeSeoTags: o().bool,
        helmetData: o().object,
      }),
        (J.defaultProps = {
          defer: !0,
          encodeSpecialCharacters: !0,
          prioritizeSeoTags: !1,
        }),
        (J.displayName = "Helmet");
    },
    9921: function (e, t) {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        a = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        s = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        h = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        y = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case f:
                case o:
                case l:
                case i:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case d:
                    case g:
                    case h:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function E(e) {
        return k(e) === f;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = s),
        (t.ContextProvider = u),
        (t.Element = r),
        (t.ForwardRef = d),
        (t.Fragment = o),
        (t.Lazy = g),
        (t.Memo = h),
        (t.Portal = a),
        (t.Profiler = l),
        (t.StrictMode = i),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return E(e) || k(e) === c;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return k(e) === s;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === d;
        }),
        (t.isFragment = function (e) {
          return k(e) === o;
        }),
        (t.isLazy = function (e) {
          return k(e) === g;
        }),
        (t.isMemo = function (e) {
          return k(e) === h;
        }),
        (t.isPortal = function (e) {
          return k(e) === a;
        }),
        (t.isProfiler = function (e) {
          return k(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === i;
        }),
        (t.isSuspense = function (e) {
          return k(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === f ||
            e === l ||
            e === i ||
            e === p ||
            e === m ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === d ||
                e.$$typeof === b ||
                e.$$typeof === y ||
                e.$$typeof === w ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = k);
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
    },
    8790: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return l;
        },
        f: function () {
          return i;
        },
      });
      var r = n(6775),
        a = n(7462),
        o = n(7294);
      function i(e, t, n) {
        return (
          void 0 === n && (n = []),
          e.some(function (e) {
            var a = e.path
              ? (0, r.LX)(t, e)
              : n.length
              ? n[n.length - 1].match
              : r.F0.computeRootMatch(t);
            return (
              a &&
                (n.push({ route: e, match: a }), e.routes && i(e.routes, t, n)),
              a
            );
          }),
          n
        );
      }
      function l(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          e
            ? o.createElement(
                r.rs,
                n,
                e.map(function (e, n) {
                  return o.createElement(r.AW, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function (n) {
                      return e.render
                        ? e.render((0, a.Z)({}, n, {}, t, { route: e }))
                        : o.createElement(
                            e.component,
                            (0, a.Z)({}, n, t, { route: e })
                          );
                    },
                  });
                })
              )
            : null
        );
      }
    },
    3727: function (e, t, n) {
      "use strict";
      n.d(t, {
        OL: function () {
          return y;
        },
        VK: function () {
          return c;
        },
        rU: function () {
          return g;
        },
      });
      var r = n(6775),
        a = n(4578),
        o = n(7294),
        i = n(2358),
        l = n(7462),
        u = n(3366),
        s = n(2177),
        c = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).history = (0,
              i.lX)(t.props)),
              t
            );
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              return o.createElement(r.F0, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(o.Component);
      o.Component;
      var f = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        d = function (e, t) {
          return "string" == typeof e ? (0, i.ob)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        m = o.forwardRef;
      void 0 === m && (m = p);
      var h = m(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          i = (0, u.Z)(e, ["innerRef", "navigate", "onClick"]),
          s = i.target,
          c = (0, l.Z)({}, i, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (s && "_self" !== s) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (c.ref = (p !== m && t) || n), o.createElement("a", c);
      });
      var g = m(function (e, t) {
          var n = e.component,
            a = void 0 === n ? h : n,
            c = e.replace,
            g = e.to,
            v = e.innerRef,
            b = (0, u.Z)(e, ["component", "replace", "to", "innerRef"]);
          return o.createElement(r.s6.Consumer, null, function (e) {
            e || (0, s.Z)(!1);
            var n = e.history,
              r = d(f(g, e.location), e.location),
              u = r ? n.createHref(r) : "",
              h = (0, l.Z)({}, b, {
                href: u,
                navigate: function () {
                  var t = f(g, e.location),
                    r = (0, i.Ep)(e.location) === (0, i.Ep)(d(t));
                  (c || r ? n.replace : n.push)(t);
                },
              });
            return (
              p !== m ? (h.ref = t || v) : (h.innerRef = v),
              o.createElement(a, h)
            );
          });
        }),
        v = function (e) {
          return e;
        },
        b = o.forwardRef;
      void 0 === b && (b = v);
      var y = b(function (e, t) {
        var n = e["aria-current"],
          a = void 0 === n ? "page" : n,
          i = e.activeClassName,
          c = void 0 === i ? "active" : i,
          p = e.activeStyle,
          m = e.className,
          h = e.exact,
          y = e.isActive,
          w = e.location,
          k = e.sensitive,
          E = e.strict,
          S = e.style,
          x = e.to,
          C = e.innerRef,
          _ = (0, u.Z)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return o.createElement(r.s6.Consumer, null, function (e) {
          e || (0, s.Z)(!1);
          var n = w || e.location,
            i = d(f(x, n), n),
            u = i.pathname,
            T = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            L = T
              ? (0, r.LX)(n.pathname, {
                  path: T,
                  exact: h,
                  sensitive: k,
                  strict: E,
                })
              : null,
            P = !!(y ? y(L, n) : L),
            A = "function" == typeof m ? m(P) : m,
            O = "function" == typeof S ? S(P) : S;
          P &&
            ((A = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(A, c)),
            (O = (0, l.Z)({}, O, p)));
          var N = (0, l.Z)(
            { "aria-current": (P && a) || null, className: A, style: O, to: i },
            _
          );
          return (
            v !== b ? (N.ref = t || C) : (N.innerRef = C), o.createElement(g, N)
          );
        });
      });
    },
    6775: function (e, t, n) {
      "use strict";
      n.d(t, {
        l_: function () {
          return L;
        },
        AW: function () {
          return N;
        },
        F0: function () {
          return S;
        },
        rs: function () {
          return F;
        },
        s6: function () {
          return E;
        },
        LX: function () {
          return O;
        },
        k6: function () {
          return z;
        },
        TH: function () {
          return Z;
        },
        EN: function () {
          return B;
        },
      });
      var r = n(4578),
        a = n(7294),
        o = n(2358),
        i = n(5697),
        l = n.n(i),
        u = 1073741823,
        s =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : {};
      function c(e) {
        var t = [];
        return {
          on: function (e) {
            t.push(e);
          },
          off: function (e) {
            t = t.filter(function (t) {
              return t !== e;
            });
          },
          get: function () {
            return e;
          },
          set: function (n, r) {
            (e = n),
              t.forEach(function (t) {
                return t(e, r);
              });
          },
        };
      }
      var f =
          a.createContext ||
          function (e, t) {
            var n,
              o,
              i =
                "__create-react-context-" +
                (function () {
                  var e = "__global_unique_id__";
                  return (s[e] = (s[e] || 0) + 1);
                })() +
                "__",
              f = (function (e) {
                function n() {
                  var t;
                  return (
                    ((t = e.apply(this, arguments) || this).emitter = c(
                      t.props.value
                    )),
                    t
                  );
                }
                (0, r.Z)(n, e);
                var a = n.prototype;
                return (
                  (a.getChildContext = function () {
                    var e;
                    return ((e = {})[i] = this.emitter), e;
                  }),
                  (a.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        a = e.value;
                      (
                        (o = r) === (i = a)
                          ? 0 !== o || 1 / o == 1 / i
                          : o != o && i != i
                      )
                        ? (n = 0)
                        : ((n = "function" == typeof t ? t(r, a) : u),
                          0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var o, i;
                  }),
                  (a.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(a.Component);
            f.childContextTypes = (((n = {})[i] = l().object.isRequired), n);
            var d = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.apply(this, arguments) || this).state = {
                    value: e.getValue(),
                  }),
                  (e.onUpdate = function (t, n) {
                    0 != ((0 | e.observedBits) & n) &&
                      e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, r.Z)(n, t);
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? u : t;
                }),
                (a.componentDidMount = function () {
                  this.context[i] && this.context[i].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? u : e;
                }),
                (a.componentWillUnmount = function () {
                  this.context[i] && this.context[i].off(this.onUpdate);
                }),
                (a.getValue = function () {
                  return this.context[i] ? this.context[i].get() : e;
                }),
                (a.render = function () {
                  return ((e = this.props.children),
                  Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(a.Component);
            return (
              (d.contextTypes = (((o = {})[i] = l().object), o)),
              { Provider: f, Consumer: d }
            );
          },
        d = f,
        p = n(2177),
        m = n(7462),
        h = n(4779),
        g = n.n(h),
        v = (n(9864), n(3366)),
        b = n(8679),
        y = n.n(b),
        w = function (e) {
          var t = d();
          return (t.displayName = e), t;
        },
        k = w("Router-History"),
        E = w("Router"),
        S = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._isMounted
                    ? n.setState({ location: e })
                    : (n._pendingLocation = e);
                })),
              n
            );
          }
          (0, r.Z)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this._isMounted = !0),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten &&
                (this.unlisten(),
                (this._isMounted = !1),
                (this._pendingLocation = null));
            }),
            (n.render = function () {
              return a.createElement(
                E.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                a.createElement(k.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                })
              );
            }),
            t
          );
        })(a.Component);
      a.Component;
      var x = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        (0, r.Z)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            this.props.onMount && this.props.onMount.call(this, this);
          }),
          (n.componentDidUpdate = function (e) {
            this.props.onUpdate && this.props.onUpdate.call(this, this, e);
          }),
          (n.componentWillUnmount = function () {
            this.props.onUnmount && this.props.onUnmount.call(this, this);
          }),
          (n.render = function () {
            return null;
          }),
          t
        );
      })(a.Component);
      var C = {},
        _ = 0;
      function T(e, t) {
        return (
          void 0 === e && (e = "/"),
          void 0 === t && (t = {}),
          "/" === e
            ? e
            : (function (e) {
                if (C[e]) return C[e];
                var t = g().compile(e);
                return _ < 1e4 && ((C[e] = t), _++), t;
              })(e)(t, { pretty: !0 })
        );
      }
      function L(e) {
        var t = e.computedMatch,
          n = e.to,
          r = e.push,
          i = void 0 !== r && r;
        return a.createElement(E.Consumer, null, function (e) {
          e || (0, p.Z)(!1);
          var r = e.history,
            l = e.staticContext,
            u = i ? r.push : r.replace,
            s = (0, o.ob)(
              t
                ? "string" == typeof n
                  ? T(n, t.params)
                  : (0, m.Z)({}, n, { pathname: T(n.pathname, t.params) })
                : n
            );
          return l
            ? (u(s), null)
            : a.createElement(x, {
                onMount: function () {
                  u(s);
                },
                onUpdate: function (e, t) {
                  var n = (0, o.ob)(t.to);
                  (0, o.Hp)(n, (0, m.Z)({}, s, { key: n.key })) || u(s);
                },
                to: n,
              });
        });
      }
      var P = {},
        A = 0;
      function O(e, t) {
        void 0 === t && (t = {}),
          ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          a = n.exact,
          o = void 0 !== a && a,
          i = n.strict,
          l = void 0 !== i && i,
          u = n.sensitive,
          s = void 0 !== u && u;
        return [].concat(r).reduce(function (t, n) {
          if (!n && "" !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = "" + t.end + t.strict + t.sensitive,
                r = P[n] || (P[n] = {});
              if (r[e]) return r[e];
              var a = [],
                o = { regexp: g()(e, a, t), keys: a };
              return A < 1e4 && ((r[e] = o), A++), o;
            })(n, { end: o, strict: l, sensitive: s }),
            a = r.regexp,
            i = r.keys,
            u = a.exec(e);
          if (!u) return null;
          var c = u[0],
            f = u.slice(1),
            d = e === c;
          return o && !d
            ? null
            : {
                path: n,
                url: "/" === n && "" === c ? "/" : c,
                isExact: d,
                params: i.reduce(function (e, t, n) {
                  return (e[t.name] = f[n]), e;
                }, {}),
              };
        }, null);
      }
      var N = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(E.Consumer, null, function (t) {
              t || (0, p.Z)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? O(n.pathname, e.props)
                  : t.match,
                o = (0, m.Z)({}, t, { location: n, match: r }),
                i = e.props,
                l = i.children,
                u = i.component,
                s = i.render;
              return (
                Array.isArray(l) &&
                  (function (e) {
                    return 0 === a.Children.count(e);
                  })(l) &&
                  (l = null),
                a.createElement(
                  E.Provider,
                  { value: o },
                  o.match
                    ? l
                      ? "function" == typeof l
                        ? l(o)
                        : l
                      : u
                      ? a.createElement(u, o)
                      : s
                      ? s(o)
                      : null
                    : "function" == typeof l
                    ? l(o)
                    : null
                )
              );
            });
          }),
          t
        );
      })(a.Component);
      function R(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function I(e, t) {
        if (!e) return t;
        var n = R(e);
        return 0 !== t.pathname.indexOf(n)
          ? t
          : (0, m.Z)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function D(e) {
        return "string" == typeof e ? e : (0, o.Ep)(e);
      }
      function M(e) {
        return function () {
          (0, p.Z)(!1);
        };
      }
      function j() {}
      a.Component;
      var F = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(E.Consumer, null, function (t) {
              t || (0, p.Z)(!1);
              var n,
                r,
                o = e.props.location || t.location;
              return (
                a.Children.forEach(e.props.children, function (e) {
                  if (null == r && a.isValidElement(e)) {
                    n = e;
                    var i = e.props.path || e.props.from;
                    r = i
                      ? O(o.pathname, (0, m.Z)({}, e.props, { path: i }))
                      : t.match;
                  }
                }),
                r ? a.cloneElement(n, { location: o, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(a.Component);
      function B(e) {
        var t = "withRouter(" + (e.displayName || e.name) + ")",
          n = function (t) {
            var n = t.wrappedComponentRef,
              r = (0, v.Z)(t, ["wrappedComponentRef"]);
            return a.createElement(E.Consumer, null, function (t) {
              return (
                t || (0, p.Z)(!1),
                a.createElement(e, (0, m.Z)({}, r, t, { ref: n }))
              );
            });
          };
        return (n.displayName = t), (n.WrappedComponent = e), y()(n, e);
      }
      var U = a.useContext;
      function z() {
        return U(k);
      }
      function Z() {
        return U(E).location;
      }
    },
    2408: function (e, t, n) {
      "use strict";
      var r = n(7418),
        a = 60103,
        o = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var i = 60109,
        l = 60110,
        u = 60112;
      t.Suspense = 60113;
      var s = 60115,
        c = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var f = Symbol.for;
        (a = f("react.element")),
          (o = f("react.portal")),
          (t.Fragment = f("react.fragment")),
          (t.StrictMode = f("react.strict_mode")),
          (t.Profiler = f("react.profiler")),
          (i = f("react.provider")),
          (l = f("react.context")),
          (u = f("react.forward_ref")),
          (t.Suspense = f("react.suspense")),
          (s = f("react.memo")),
          (c = f("react.lazy"));
      }
      var d = "function" == typeof Symbol && Symbol.iterator;
      function p(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = {};
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || m);
      }
      function v() {}
      function b(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || m);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(p(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (v.prototype = g.prototype);
      var y = (b.prototype = new v());
      (y.constructor = b), r(y, g.prototype), (y.isPureReactComponent = !0);
      var w = { current: null },
        k = Object.prototype.hasOwnProperty,
        E = { key: !0, ref: !0, __self: !0, __source: !0 };
      function S(e, t, n) {
        var r,
          o = {},
          i = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            k.call(t, r) && !E.hasOwnProperty(r) && (o[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) o.children = n;
        else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          o.children = s;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === o[r] && (o[r] = u[r]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: l,
          props: o,
          _owner: w.current,
        };
      }
      function x(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a;
      }
      var C = /\/+/g;
      function _(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function T(e, t, n, r, i) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (l) {
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case o:
                  u = !0;
              }
          }
        if (u)
          return (
            (i = i((u = e))),
            (e = "" === r ? "." + _(u, 0) : r),
            Array.isArray(i)
              ? ((n = ""),
                null != e && (n = e.replace(C, "$&/") + "/"),
                T(i, t, n, "", function (e) {
                  return e;
                }))
              : null != i &&
                (x(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: a,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    i,
                    n +
                      (!i.key || (u && u.key === i.key)
                        ? ""
                        : ("" + i.key).replace(C, "$&/") + "/") +
                      e
                  )),
                t.push(i)),
            1
          );
        if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var s = 0; s < e.length; s++) {
            var c = r + _((l = e[s]), s);
            u += T(l, t, n, c, i);
          }
        else if (
          ((c = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof c)
        )
          for (e = c.call(e), s = 0; !(l = e.next()).done; )
            u += T((l = l.value), t, n, (c = r + _(l, s++)), i);
        else if ("object" === l)
          throw (
            ((t = "" + e),
            Error(
              p(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t
              )
            ))
          );
        return u;
      }
      function L(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          T(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function P(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var A = { current: null };
      function O() {
        var e = A.current;
        if (null === e) throw Error(p(321));
        return e;
      }
      var N = {
        ReactCurrentDispatcher: A,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: w,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: L,
        forEach: function (e, t, n) {
          L(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            L(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            L(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!x(e)) throw Error(p(143));
          return e;
        },
      }),
        (t.Component = g),
        (t.PureComponent = b),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(p(267, e));
          var o = r({}, e.props),
            i = e.key,
            l = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
              void 0 !== t.key && (i = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (c in t)
              k.call(t, c) &&
                !E.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) o.children = n;
          else if (1 < c) {
            s = Array(c);
            for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
            o.children = s;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: i,
            ref: l,
            props: o,
            _owner: u,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: l,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: i, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = S),
        (t.createFactory = function (e) {
          var t = S.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = x),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: P,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return O().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return O().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return O().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return O().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return O().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return O().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return O().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return O().useRef(e);
        }),
        (t.useState = function (e) {
          return O().useState(e);
        }),
        (t.version = "17.0.2");
    },
    7294: function (e, t, n) {
      "use strict";
      e.exports = n(2408);
    },
    5666: function (e) {
      var t = (function (e) {
        "use strict";
        var t,
          n = Object.prototype,
          r = n.hasOwnProperty,
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          l = a.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          u({}, "");
        } catch (O) {
          u = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function s(e, t, n, r) {
          var a = t && t.prototype instanceof g ? t : g,
            o = Object.create(a.prototype),
            i = new L(r || []);
          return (
            (o._invoke = (function (e, t, n) {
              var r = f;
              return function (a, o) {
                if (r === p) throw new Error("Generator is already running");
                if (r === m) {
                  if ("throw" === a) throw o;
                  return A();
                }
                for (n.method = a, n.arg = o; ; ) {
                  var i = n.delegate;
                  if (i) {
                    var l = C(i, n);
                    if (l) {
                      if (l === h) continue;
                      return l;
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg;
                  else if ("throw" === n.method) {
                    if (r === f) throw ((r = m), n.arg);
                    n.dispatchException(n.arg);
                  } else "return" === n.method && n.abrupt("return", n.arg);
                  r = p;
                  var u = c(e, t, n);
                  if ("normal" === u.type) {
                    if (((r = n.done ? m : d), u.arg === h)) continue;
                    return { value: u.arg, done: n.done };
                  }
                  "throw" === u.type &&
                    ((r = m), (n.method = "throw"), (n.arg = u.arg));
                }
              };
            })(e, n, i)),
            o
          );
        }
        function c(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        e.wrap = s;
        var f = "suspendedStart",
          d = "suspendedYield",
          p = "executing",
          m = "completed",
          h = {};
        function g() {}
        function v() {}
        function b() {}
        var y = {};
        u(y, o, function () {
          return this;
        });
        var w = Object.getPrototypeOf,
          k = w && w(w(P([])));
        k && k !== n && r.call(k, o) && (y = k);
        var E = (b.prototype = g.prototype = Object.create(y));
        function S(e) {
          ["next", "throw", "return"].forEach(function (t) {
            u(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          function n(a, o, i, l) {
            var u = c(e[a], e, o);
            if ("throw" !== u.type) {
              var s = u.arg,
                f = s.value;
              return f && "object" == typeof f && r.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      n("next", e, i, l);
                    },
                    function (e) {
                      n("throw", e, i, l);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (s.value = e), i(s);
                    },
                    function (e) {
                      return n("throw", e, i, l);
                    }
                  );
            }
            l(u.arg);
          }
          var a;
          this._invoke = function (e, r) {
            function o() {
              return new t(function (t, a) {
                n(e, r, t, a);
              });
            }
            return (a = a ? a.then(o, o) : o());
          };
        }
        function C(e, n) {
          var r = e.iterator[n.method];
          if (r === t) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                e.iterator.return &&
                ((n.method = "return"),
                (n.arg = t),
                C(e, n),
                "throw" === n.method)
              )
                return h;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return h;
          }
          var a = c(r, e.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"), (n.arg = a.arg), (n.delegate = null), h
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((n[e.resultName] = o.value),
                (n.next = e.nextLoc),
                "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                (n.delegate = null),
                h)
              : o
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              h);
        }
        function _(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function T(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(_, this),
            this.reset(!0);
        }
        function P(e) {
          if (e) {
            var n = e[o];
            if (n) return n.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var a = -1,
                i = function n() {
                  for (; ++a < e.length; )
                    if (r.call(e, a)) return (n.value = e[a]), (n.done = !1), n;
                  return (n.value = t), (n.done = !0), n;
                };
              return (i.next = i);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: t, done: !0 };
        }
        return (
          (v.prototype = b),
          u(E, "constructor", b),
          u(b, "constructor", v),
          (v.displayName = u(b, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === v || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, b)
                : ((e.__proto__ = b), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(E)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          S(x.prototype),
          u(x.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new x(s(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          S(E),
          u(E, l, "Generator"),
          u(E, o, function () {
            return this;
          }),
          u(E, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop();
                  if (r in e) return (n.value = r), (n.done = !1), n;
                }
                return (n.done = !0), n;
              }
            );
          }),
          (e.values = P),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = t),
                this.tryEntries.forEach(T),
                !e)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var n = this;
              function a(r, a) {
                return (
                  (l.type = "throw"),
                  (l.arg = e),
                  (n.next = r),
                  a && ((n.method = "next"), (n.arg = t)),
                  !!a
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  l = i.completion;
                if ("root" === i.tryLoc) return a("end");
                if (i.tryLoc <= this.prev) {
                  var u = r.call(i, "catchLoc"),
                    s = r.call(i, "finallyLoc");
                  if (u && s) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return a(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return a(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                h
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), T(n), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    T(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: P(e), resultName: n, nextLoc: r }),
                "next" === this.method && (this.arg = t),
                h
              );
            },
          }),
          e
        );
      })(e.exports);
      try {
        regeneratorRuntime = t;
      } catch (n) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = t)
          : Function("r", "regeneratorRuntime = r")(t);
      }
    },
    53: function (e, t) {
      "use strict";
      var n, r, a, o;
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var i = performance;
        t.unstable_now = function () {
          return i.now();
        };
      } else {
        var l = Date,
          u = l.now();
        t.unstable_now = function () {
          return l.now() - u;
        };
      }
      if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var s = null,
          c = null,
          f = function () {
            if (null !== s)
              try {
                var e = t.unstable_now();
                s(!0, e), (s = null);
              } catch (n) {
                throw (setTimeout(f, 0), n);
              }
          };
        (n = function (e) {
          null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
        }),
          (r = function (e, t) {
            c = setTimeout(e, t);
          }),
          (a = function () {
            clearTimeout(c);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (o = t.unstable_forceFrameRate = function () {});
      } else {
        var d = window.setTimeout,
          p = window.clearTimeout;
        if ("undefined" != typeof console) {
          var m = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" != typeof m &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var h = !1,
          g = null,
          v = -1,
          b = 5,
          y = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= y;
        }),
          (o = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (b = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var w = new MessageChannel(),
          k = w.port2;
        (w.port1.onmessage = function () {
          if (null !== g) {
            var e = t.unstable_now();
            y = e + b;
            try {
              g(!0, e) ? k.postMessage(null) : ((h = !1), (g = null));
            } catch (n) {
              throw (k.postMessage(null), n);
            }
          } else h = !1;
        }),
          (n = function (e) {
            (g = e), h || ((h = !0), k.postMessage(null));
          }),
          (r = function (e, n) {
            v = d(function () {
              e(t.unstable_now());
            }, n);
          }),
          (a = function () {
            p(v), (v = -1);
          });
      }
      function E(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < C(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function x(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var o = 2 * (r + 1) - 1,
                i = e[o],
                l = o + 1,
                u = e[l];
              if (void 0 !== i && 0 > C(i, n))
                void 0 !== u && 0 > C(u, i)
                  ? ((e[r] = u), (e[l] = n), (r = l))
                  : ((e[r] = i), (e[o] = n), (r = o));
              else {
                if (!(void 0 !== u && 0 > C(u, n))) break e;
                (e[r] = u), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function C(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var _ = [],
        T = [],
        L = 1,
        P = null,
        A = 3,
        O = !1,
        N = !1,
        R = !1;
      function I(e) {
        for (var t = S(T); null !== t; ) {
          if (null === t.callback) x(T);
          else {
            if (!(t.startTime <= e)) break;
            x(T), (t.sortIndex = t.expirationTime), E(_, t);
          }
          t = S(T);
        }
      }
      function D(e) {
        if (((R = !1), I(e), !N))
          if (null !== S(_)) (N = !0), n(M);
          else {
            var t = S(T);
            null !== t && r(D, t.startTime - e);
          }
      }
      function M(e, n) {
        (N = !1), R && ((R = !1), a()), (O = !0);
        var o = A;
        try {
          for (
            I(n), P = S(_);
            null !== P &&
            (!(P.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var i = P.callback;
            if ("function" == typeof i) {
              (P.callback = null), (A = P.priorityLevel);
              var l = i(P.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof l ? (P.callback = l) : P === S(_) && x(_),
                I(n);
            } else x(_);
            P = S(_);
          }
          if (null !== P) var u = !0;
          else {
            var s = S(T);
            null !== s && r(D, s.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (P = null), (A = o), (O = !1);
        }
      }
      var j = o;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          N || O || ((N = !0), n(M));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return A;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(_);
        }),
        (t.unstable_next = function (e) {
          switch (A) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = A;
          }
          var n = A;
          A = t;
          try {
            return e();
          } finally {
            A = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = j),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = A;
          A = e;
          try {
            return t();
          } finally {
            A = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, o, i) {
          var l = t.unstable_now();
          switch (
            ("object" == typeof i && null !== i
              ? (i = "number" == typeof (i = i.delay) && 0 < i ? l + i : l)
              : (i = l),
            e)
          ) {
            case 1:
              var u = -1;
              break;
            case 2:
              u = 250;
              break;
            case 5:
              u = 1073741823;
              break;
            case 4:
              u = 1e4;
              break;
            default:
              u = 5e3;
          }
          return (
            (e = {
              id: L++,
              callback: o,
              priorityLevel: e,
              startTime: i,
              expirationTime: (u = i + u),
              sortIndex: -1,
            }),
            i > l
              ? ((e.sortIndex = i),
                E(T, e),
                null === S(_) &&
                  e === S(T) &&
                  (R ? a() : (R = !0), r(D, i - l)))
              : ((e.sortIndex = u), E(_, e), N || O || ((N = !0), n(M))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = A;
          return function () {
            var n = A;
            A = t;
            try {
              return e.apply(this, arguments);
            } finally {
              A = n;
            }
          };
        });
    },
    3840: function (e, t, n) {
      "use strict";
      e.exports = n(53);
    },
    6774: function (e) {
      e.exports = function (e, t, n, r) {
        var a = n ? n.call(r, e, t) : void 0;
        if (void 0 !== a) return !!a;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          i = Object.keys(t);
        if (o.length !== i.length) return !1;
        for (
          var l = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < o.length;
          u++
        ) {
          var s = o[u];
          if (!l(s)) return !1;
          var c = e[s],
            f = t[s];
          if (
            !1 === (a = n ? n.call(r, c, f, s) : void 0) ||
            (void 0 === a && c !== f)
          )
            return !1;
        }
        return !0;
      };
    },
    2177: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = "Invariant failed";
      function a(e, t) {
        if (!e) throw new Error(r);
      }
    },
    655: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __assign: function () {
            return o;
          },
          __asyncDelegator: function () {
            return k;
          },
          __asyncGenerator: function () {
            return w;
          },
          __asyncValues: function () {
            return E;
          },
          __await: function () {
            return y;
          },
          __awaiter: function () {
            return c;
          },
          __classPrivateFieldGet: function () {
            return T;
          },
          __classPrivateFieldSet: function () {
            return L;
          },
          __createBinding: function () {
            return d;
          },
          __decorate: function () {
            return l;
          },
          __exportStar: function () {
            return p;
          },
          __extends: function () {
            return a;
          },
          __generator: function () {
            return f;
          },
          __importDefault: function () {
            return _;
          },
          __importStar: function () {
            return C;
          },
          __makeTemplateObject: function () {
            return S;
          },
          __metadata: function () {
            return s;
          },
          __param: function () {
            return u;
          },
          __read: function () {
            return h;
          },
          __rest: function () {
            return i;
          },
          __spread: function () {
            return g;
          },
          __spreadArray: function () {
            return b;
          },
          __spreadArrays: function () {
            return v;
          },
          __values: function () {
            return m;
          },
        });
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          r(e, t)
        );
      };
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function i(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      function l(e, t, n, r) {
        var a,
          o = arguments.length,
          i =
            o < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          i = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (a = e[l]) &&
              (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
        return o > 3 && i && Object.defineProperty(t, n, i), i;
      }
      function u(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function s(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function c(e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              u(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function l(e) {
            try {
              u(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      function f(e, t) {
        var n,
          r,
          a,
          o,
          i = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: l(0), throw: l(1), return: l(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function l(o) {
          return function (l) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; i; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, o[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                    case 0:
                    case 1:
                      a = o;
                      break;
                    case 4:
                      return i.label++, { value: o[1], done: !1 };
                    case 5:
                      i.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = i.ops.pop()), i.trys.pop();
                      continue;
                    default:
                      if (
                        !((a = i.trys),
                        (a = a.length > 0 && a[a.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        i = 0;
                        continue;
                      }
                      if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                        i.label = o[1];
                        break;
                      }
                      if (6 === o[0] && i.label < a[1]) {
                        (i.label = a[1]), (a = o);
                        break;
                      }
                      if (a && i.label < a[2]) {
                        (i.label = a[2]), i.ops.push(o);
                        break;
                      }
                      a[2] && i.ops.pop(), i.trys.pop();
                      continue;
                  }
                  o = t.call(e, i);
                } catch (l) {
                  (o = [6, l]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, l]);
          };
        }
      }
      var d = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n),
              Object.defineProperty(e, r, {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              });
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function p(e, t) {
        for (var n in e)
          "default" === n ||
            Object.prototype.hasOwnProperty.call(t, n) ||
            d(t, e, n);
      }
      function m(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function h(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          a,
          o = n.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            i.push(r.value);
        } catch (l) {
          a = { error: l };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      }
      function g() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(h(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var o = arguments[t], i = 0, l = o.length; i < l; i++, a++)
            r[a] = o[i];
        return r;
      }
      function b(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function y(e) {
        return this instanceof y ? ((this.v = e), this) : new y(e);
      }
      function w(e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          a = n.apply(e, t || []),
          o = [];
        return (
          (r = {}),
          i("next"),
          i("throw"),
          i("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function i(e) {
          a[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                o.push([e, t, n, r]) > 1 || l(e, t);
              });
            });
        }
        function l(e, t) {
          try {
            (n = a[e](t)).value instanceof y
              ? Promise.resolve(n.value.v).then(u, s)
              : c(o[0][2], n);
          } catch (r) {
            c(o[0][3], r);
          }
          var n;
        }
        function u(e) {
          l("next", e);
        }
        function s(e) {
          l("throw", e);
        }
        function c(e, t) {
          e(t), o.shift(), o.length && l(o[0][0], o[0][1]);
        }
      }
      function k(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, a) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: y(e[r](t)), done: "return" === r }
                  : a
                  ? a(t)
                  : t;
              }
            : a;
        }
      }
      function E(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = m(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, a) {
                (function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, a, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      function S(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var x = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          };
      function C(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              d(t, e, n);
        return x(t, e), t;
      }
      function _(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e, t, n, r) {
        if ("a" === n && !r)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function L(e, t, n, r, a) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !a)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !a : !t.has(e))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return "a" === r ? a.call(e, n) : a ? (a.value = n) : t.set(e, n), n;
      }
    },
    7462: function (e, t, n) {
      "use strict";
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    4578: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(9611);
      function a(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (0, r.Z)(e, t);
      }
    },
    3366: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    9611: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          r(e, t)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    7529: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"theme.ErrorPageContent.title":"This page crashed.","theme.ErrorPageContent.tryAgain":"Try again","theme.NotFound.title":"Page Not Found","theme.NotFound.p1":"We could not find what you were looking for.","theme.NotFound.p2":"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.","theme.AnnouncementBar.closeButtonAriaLabel":"Close","theme.BackToTopButton.buttonAriaLabel":"Scroll back to top","theme.blog.archive.title":"Archive","theme.blog.archive.description":"Archive","theme.blog.paginator.navAriaLabel":"Blog list page navigation","theme.blog.paginator.newerEntries":"Newer Entries","theme.blog.paginator.olderEntries":"Older Entries","theme.blog.post.readingTime.plurals":"One min read|{readingTime} min read","theme.blog.post.readMoreLabel":"Read more about {title}","theme.blog.post.readMore":"Read More","theme.blog.post.paginator.navAriaLabel":"Blog post page navigation","theme.blog.post.paginator.newerPost":"Newer Post","theme.blog.post.paginator.olderPost":"Older Post","theme.blog.sidebar.navAriaLabel":"Blog recent posts navigation","theme.blog.post.plurals":"One post|{count} posts","theme.blog.tagTitle":"{nPosts} tagged with \\"{tagName}\\"","theme.tags.tagsPageLink":"View All Tags","theme.colorToggle.ariaLabel":"Switch between dark and light mode (currently {mode})","theme.colorToggle.ariaLabel.mode.dark":"dark mode","theme.colorToggle.ariaLabel.mode.light":"light mode","theme.docs.DocCard.categoryDescription":"{count} items","theme.docs.sidebar.expandButtonTitle":"Expand sidebar","theme.docs.sidebar.expandButtonAriaLabel":"Expand sidebar","theme.docs.paginator.navAriaLabel":"Docs pages navigation","theme.docs.paginator.previous":"Previous","theme.docs.paginator.next":"Next","theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel":"Toggle the collapsible sidebar category \'{label}\'","theme.docs.tagDocListPageTitle.nDocsTagged":"One doc tagged|{count} docs tagged","theme.docs.tagDocListPageTitle":"{nDocsTagged} with \\"{tagName}\\"","theme.docs.versionBadge.label":"Version: {versionLabel}","theme.docs.versions.unreleasedVersionLabel":"This is unreleased documentation for {siteTitle} {versionLabel} version.","theme.docs.versions.unmaintainedVersionLabel":"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.","theme.docs.versions.latestVersionSuggestionLabel":"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).","theme.docs.versions.latestVersionLinkLabel":"latest version","theme.common.editThisPage":"Edit this page","theme.common.headingLinkTitle":"Direct link to heading","theme.lastUpdated.atDate":" on {date}","theme.lastUpdated.byUser":" by {user}","theme.lastUpdated.lastUpdatedAtBy":"Last updated{atDate}{byUser}","theme.navbar.mobileVersionsDropdown.label":"Versions","theme.common.skipToMainContent":"Skip to main content","theme.TOCCollapsible.toggleButtonLabel":"On this page","theme.tags.tagsListLabel":"Tags:","theme.CodeBlock.copied":"Copied","theme.CodeBlock.copyButtonAriaLabel":"Copy code to clipboard","theme.CodeBlock.copy":"Copy","theme.navbar.mobileLanguageDropdown.label":"Languages","theme.docs.sidebar.collapseButtonTitle":"Collapse sidebar","theme.docs.sidebar.collapseButtonAriaLabel":"Collapse sidebar","theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel":"\u2190 Back to main menu","theme.tags.tagsPageTitle":"Tags","homepage.visitMyBlog.feature1":"blog","Easy to Use":"Easy to Use"}'
      );
    },
    6887: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"/react-native-echarts-pro-docs/blog-fb8":{"component":"a6aa9e1f","sidebar":"814f3328","items":[{"content":"7661071f"},{"content":"f4f34a3a"},{"content":"8717b14a"},{"content":"925b3f96"}],"metadata":"52376b9e","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/archive-5e2":{"component":"9e4087bc","archive":"572598a7","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/first-blog-post-05f":{"component":"ccc49370","sidebar":"814f3328","content":"e273c56f","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/long-blog-post-8f1":{"component":"ccc49370","sidebar":"814f3328","content":"73664a40","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/mdx-blog-post-afb":{"component":"ccc49370","sidebar":"814f3328","content":"59362658","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/tags-46c":{"component":"01a85c17","sidebar":"814f3328","tags":"ef4c7f6d","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/tags/docusaurus-817":{"component":"6875c492","sidebar":"814f3328","items":[{"content":"7661071f"},{"content":"f4f34a3a"},{"content":"8717b14a"},{"content":"925b3f96"}],"metadata":"8084a15a","listMetadata":"8e313565","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/tags/facebook-81b":{"component":"6875c492","sidebar":"814f3328","items":[{"content":"7661071f"}],"metadata":"6ec41a2e","listMetadata":"e2b4efc3","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/tags/hello-947":{"component":"6875c492","sidebar":"814f3328","items":[{"content":"7661071f"},{"content":"8717b14a"}],"metadata":"c7b8c794","listMetadata":"f2dee294","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/tags/hola-708":{"component":"6875c492","sidebar":"814f3328","items":[{"content":"925b3f96"}],"metadata":"234af00e","listMetadata":"043b7896","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/blog/welcome-6fe":{"component":"ccc49370","sidebar":"814f3328","content":"d9f32620","__routeContextModule":"544a93d6"},"/react-native-echarts-pro-docs/markdown-page-086":{"component":"1f391b9e","content":"393be207","__routeContextModule":"9eb98387"},"/react-native-echarts-pro-docs/docs-98d":{"component":"1be78505","versionMetadata":"935f2afb","__routeContextModule":"1d519576"},"/react-native-echarts-pro-docs/docs/contributors-fad":{"component":"17896441","content":"5141c73a"},"/react-native-echarts-pro-docs/docs/intro-b08":{"component":"17896441","content":"0e384e19"},"/react-native-echarts-pro-docs/docs/license-6df":{"component":"17896441","content":"ac5280f2"},"/react-native-echarts-pro-docs/docs/sponsor-b57":{"component":"17896441","content":"b28e29c0"},"/react-native-echarts-pro-docs/docs/tutorial-basics/method-fa0":{"component":"17896441","content":"e7978525"},"/react-native-echarts-pro-docs/docs/tutorial-basics/props-f41":{"component":"17896441","content":"6bd4c7a4"},"/react-native-echarts-pro-docs/-660":{"component":"c4f5d8e4","config":"5e9f5e1a","__routeContextModule":"9eb98387"}}'
      );
    },
  },
  function (e) {
    e.O(0, [532], function () {
      return (t = 3608), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
