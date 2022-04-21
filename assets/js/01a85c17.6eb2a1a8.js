"use strict";
(self.webpackChunkreact_native_echarts_pro_docs =
  self.webpackChunkreact_native_echarts_pro_docs || []).push([
  [13],
  {
    8665: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = a(3366),
        n = a(7294),
        l = a(6010),
        c = a(2600),
        i = a(9960),
        s = "sidebar_a9qW",
        m = "sidebarItemTitle_uKok",
        o = "sidebarItemList_Kvuv",
        u = "sidebarItem_CF0Q",
        d = "sidebarItemLink_miNk",
        g = "sidebarItemLinkActive_RRTD",
        E = a(5999);
      function v(e) {
        var t = e.sidebar;
        return 0 === t.items.length
          ? null
          : n.createElement(
              "nav",
              {
                className: (0, l.Z)(s, "thin-scrollbar"),
                "aria-label": (0, E.I)({
                  id: "theme.blog.sidebar.navAriaLabel",
                  message: "Blog recent posts navigation",
                  description:
                    "The ARIA label for recent posts in the blog sidebar",
                }),
              },
              n.createElement(
                "div",
                { className: (0, l.Z)(m, "margin-bottom--md") },
                t.title
              ),
              n.createElement(
                "ul",
                { className: o },
                t.items.map(function (e) {
                  return n.createElement(
                    "li",
                    { key: e.permalink, className: u },
                    n.createElement(
                      i.Z,
                      {
                        isNavLink: !0,
                        to: e.permalink,
                        className: d,
                        activeClassName: g,
                      },
                      e.title
                    )
                  );
                })
              )
            );
      }
      var b = ["sidebar", "toc", "children"];
      function p(e) {
        var t = e.sidebar,
          a = e.toc,
          i = e.children,
          s = (0, r.Z)(e, b),
          m = t && t.items.length > 0;
        return n.createElement(
          c.Z,
          s,
          n.createElement(
            "div",
            { className: "container margin-vert--lg" },
            n.createElement(
              "div",
              { className: "row" },
              m &&
                n.createElement(
                  "aside",
                  { className: "col col--3" },
                  n.createElement(v, { sidebar: t })
                ),
              n.createElement(
                "main",
                {
                  className: (0, l.Z)("col", {
                    "col--7": m,
                    "col--9 col--offset-1": !m,
                  }),
                  itemScope: !0,
                  itemType: "http://schema.org/Blog",
                },
                i
              ),
              a && n.createElement("div", { className: "col col--2" }, a)
            )
          )
        );
      }
    },
    497: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return d;
          },
        });
      var r = a(7294),
        n = a(8665),
        l = a(7774),
        c = a(5979),
        i = "tag_Shcx";
      function s(e) {
        var t = e.letterEntry;
        return r.createElement(
          "article",
          null,
          r.createElement("h2", null, t.letter),
          r.createElement(
            "ul",
            { className: "padding--none" },
            t.tags.map(function (e) {
              return r.createElement(
                "li",
                { key: e.permalink, className: i },
                r.createElement(l.Z, e)
              );
            })
          ),
          r.createElement("hr", null)
        );
      }
      function m(e) {
        var t = e.tags,
          a = (0, c.PZ)(t);
        return r.createElement(
          "section",
          { className: "margin-vert--lg" },
          a.map(function (e) {
            return r.createElement(s, { key: e.letter, letterEntry: e });
          })
        );
      }
      var o = a(4739),
        u = a(6010);
      function d(e) {
        var t = e.tags,
          a = e.sidebar,
          l = (0, c.MA)();
        return r.createElement(
          c.FG,
          {
            className: (0, u.Z)(
              c.kM.wrapper.blogPages,
              c.kM.page.blogTagsListPage
            ),
          },
          r.createElement(c.d, { title: l }),
          r.createElement(o.Z, { tag: "blog_tags_list" }),
          r.createElement(
            n.Z,
            { sidebar: a },
            r.createElement("h1", null, l),
            r.createElement(m, { tags: Object.values(t) })
          )
        );
      }
    },
    7774: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = a(7294),
        n = a(6010),
        l = a(9960),
        c = "tag_hD8n",
        i = "tagRegular_D6E_",
        s = "tagWithCount_i0QQ";
      function m(e) {
        var t = e.permalink,
          a = e.name,
          m = e.count;
        return r.createElement(
          l.Z,
          { href: t, className: (0, n.Z)(c, m ? s : i) },
          a,
          m && r.createElement("span", null, m)
        );
      }
    },
  },
]);
