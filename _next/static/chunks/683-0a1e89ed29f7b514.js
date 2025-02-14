!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "7d559dbb-f26f-4409-b1bb-a3875c65ba42"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-7d559dbb-f26f-4409-b1bb-a3875c65ba42"));
  } catch (e) {}
})(),
  (function () {
    try {
      var e =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        t = new e.Error().stack;
      t &&
        ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[t] = "7d559dbb-f26f-4409-b1bb-a3875c65ba42"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-7d559dbb-f26f-4409-b1bb-a3875c65ba42"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [683],
    {
      2010: (e, t, a) => {
        "use strict";
        a.d(t, { A: () => o });
        var s = a(5155);
        a(4496);
        var n = a(4511);
        a(2327);
        let i = {
            title: "Build the Future of AI-Human Connection",
            subtitle: "Contact Us",
          },
          l = [
            {
              title: "Product",
              links: [{ link: "https://fakersai.com", text: "Fakers" }],
            },
            {
              title: "Resources",
              links: [{ link: "https://medium.com/@ammo_ai", text: "Blogs" }],
            },
          ],
          o = function () {
            return (0, s.jsx)("div", {
              className: "footer-container",
              "data-sentry-component": "Footer",
              "data-sentry-source-file": "Footer.tsx",
              children: (0, s.jsxs)("div", {
                className: "footer-content",
                children: [
                  (0, s.jsx)(n.default, {
                    className: "footer-logo",
                    src: "/images/footer/logo.svg",
                    alt: "logo",
                    width: 111,
                    height: 24,
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "Footer.tsx",
                    "data-sentry-element": "Image",
                  }),
                  (0, s.jsxs)("div", {
                    className: "footer-content-list",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "footer-content-item-social-info",
                        children: [
                          (0, s.jsx)("p", {
                            className: "footer-content-item-social-info-title",
                            children: null == i ? void 0 : i.title,
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "footer-content-item-social-info-subtitle",
                            children: null == i ? void 0 : i.subtitle,
                          }),
                          (0, s.jsxs)("div", {
                            className: "footer-content-item-social-links",
                            children: [
                              (0, s.jsx)("a", {
                                className: "footer-content-item-social-link",
                                href: "https://x.com/Ammo_AI",
                                target: "_blank",
                                children: (0, s.jsx)(n.default, {
                                  src: "/images/footer/x.svg",
                                  alt: "icon",
                                  width: 48,
                                  height: 48,
                                  "data-sentry-element": "Image",
                                  "data-sentry-source-file": "Footer.tsx",
                                  "data-sentry-element": "Image",
                                }),
                              }),
                              (0, s.jsx)("a", {
                                className: "footer-content-item-social-link",
                                href: "https://www.linkedin.com/company/ammo-ai/",
                                target: "_blank",
                                children: (0, s.jsx)(n.default, {
                                  src: "/images/footer/linkin.svg",
                                  alt: "icon",
                                  width: 48,
                                  height: 48,
                                  "data-sentry-element": "Image",
                                  "data-sentry-source-file": "Footer.tsx",
                                  "data-sentry-element": "Image",
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: "footer-content-item-mail-container",
                                onClick: () =>
                                  window.open(
                                    "mailto:official@ammoai.io",
                                    "_blank"
                                  ),
                                children: [
                                  (0, s.jsx)(n.default, {
                                    src: "/images/footer/mail.svg",
                                    alt: "icon",
                                    width: 48,
                                    height: 48,
                                    "data-sentry-element": "Image",
                                    "data-sentry-source-file": "Footer.tsx",
                                    "data-sentry-element": "Image",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "mail-link-text",
                                    children: "official@ammoai.io",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.map((e) => {
                        var t;
                        return (0, s.jsxs)(
                          "div",
                          {
                            className: "footer-content-item",
                            children: [
                              (0, s.jsx)("p", {
                                className: "footer-content-item-title",
                                children: e.title,
                              }),
                              (0, s.jsx)("div", {
                                className: "footer-content-item-links",
                                children:
                                  null == e
                                    ? void 0
                                    : null === (t = e.links) || void 0 === t
                                    ? void 0
                                    : t.map((e) =>
                                        (0, s.jsx)(
                                          "a",
                                          {
                                            className:
                                              "footer-content-item-link",
                                            href: e.link,
                                            target: "_blank",
                                            children: e.text,
                                          },
                                          e.text
                                        )
                                      ),
                              }),
                            ],
                          },
                          e.title
                        );
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
      },
      9420: (e, t, a) => {
        "use strict";
        a.d(t, { A: () => f });
        var s = a(5155),
          n = a(4511),
          i = a(9475),
          l = a.n(i),
          o = a(2083),
          r = a(3010),
          d = a(4496);
        let c = function (e) {
          let { scrollToWorldSection: t } = e,
            [a, i] = (0, d.useState)(!1);
          return (
            (0, d.useEffect)(
              () => (
                a
                  ? (document.body.style.overflow = "hidden")
                  : (document.body.style.overflow = "auto"),
                () => {
                  document.body.style.overflow = "auto";
                }
              ),
              [a]
            ),
            (0, s.jsxs)("div", {
              className: "mobile-nav-container",
              "data-sentry-component": "NavMobile",
              "data-sentry-source-file": "NavMobile.tsx",
              children: [
                (0, s.jsx)(n.default, {
                  className: "mobile-nav-menu",
                  src: "/images/header/mobile_menu.svg",
                  alt: "Mobile Menu",
                  width: 24,
                  height: 24,
                  onClick: () => i(!a),
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "NavMobile.tsx",
                  "data-sentry-element": "Image",
                }),
                (0, s.jsxs)("div", {
                  className: "mobile-nav-menu-content ".concat(a ? "open" : ""),
                  children: [
                    (0, s.jsx)("div", {
                      className: "mobile-nav-menu-item",
                      onClick: () => {
                        i(!1), t();
                      },
                      children: (0, s.jsx)("div", {
                        className: "mobile-nav-menu-item-text",
                        children: "World",
                      }),
                    }),
                    (0, s.jsx)("div", {
                        className: "pc-nav-item",
                        children: (0, s.jsx)("a", {
                          className: "pc-nav-item-text",
                          href: "https://ido.neuralchain.pro",
                          target: "_blank",
                          children: "IDO",
                        }),
                    }),
                    (0, s.jsx)("div", {
                      className: "mobile-nav-menu-item",
                      children: (0, s.jsx)(l(), {
                        href: "/roadmap",
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "NavMobile.tsx",
                        "data-sentry-element": "Link",
                        children: (0, s.jsx)("span", {
                          className: "mobile-nav-menu-item-text",
                          children: "Roadmap",
                        }),
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "mobile-nav-menu-item",
                      children: (0, s.jsx)("a", {
                        className: "mobile-nav-menu-item-text",
                        href: "https://fakersai.com",
                        target: "_blank",
                        children: "Blogs",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "mobile-nav-contact-us",
                      children: [
                        (0, s.jsx)("div", {
                          className: "mobile-nav-contact-us-title",
                          children: "Contact Us",
                        }),
                        (0, s.jsxs)("div", {
                          className: "mobile-nav-contact-us-links",
                          children: [
                            (0, s.jsx)("a", {
                              href: "https://x.com/Ammo_AI",
                              target: "_blank",
                              children: (0, s.jsx)(n.default, {
                                src: "/images/header/x_mobile.svg",
                                alt: "Email",
                                width: 48,
                                height: 48,
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "NavMobile.tsx",
                                "data-sentry-element": "Image",
                              }),
                            }),
                            (0, s.jsx)("a", {
                              href: "https://www.linkedin.com/company/ammo-ai/",
                              target: "_blank",
                              children: (0, s.jsx)(n.default, {
                                src: "/images/header/linkin_mobile.svg",
                                alt: "Email",
                                width: 48,
                                height: 48,
                                "data-sentry-element": "Image",
                                "data-sentry-source-file": "NavMobile.tsx",
                                "data-sentry-element": "Image",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className: "mail-link-container",
                              onClick: () =>
                                window.open(
                                  "mailto:official@ammoai.io",
                                  "_blank"
                                ),
                              children: [
                                (0, s.jsx)(n.default, {
                                  src: "/images/header/mail_mobile.svg",
                                  alt: "Email",
                                  width: 48,
                                  height: 48,
                                  "data-sentry-element": "Image",
                                  "data-sentry-source-file": "NavMobile.tsx",
                                  "data-sentry-element": "Image",
                                }),
                                (0, s.jsx)("div", {
                                  className: "mail-link-text",
                                  children: "official@ammoai.io",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
        var m = a(2084);
        let h = function (e) {
          let { scrollToWorldSection: t } = e,
            a = (0, m.usePathname)();
          return (0, s.jsx)("nav", {
            className: "pc-nav-container",
            "data-sentry-component": "NavPc",
            "data-sentry-source-file": "NavPc.tsx",
            children: (0, s.jsxs)(o.zW, {
              direction: "down",
              cascade: !0,
              damping: 0.5,
              triggerOnce: !0,
              "data-sentry-element": "Fade",
              "data-sentry-source-file": "NavPc.tsx",
              "data-sentry-element": "Fade",
              children: [
                (0, s.jsx)("div", {
                  className: "pc-nav-item",
                  onClick: t,
                  children: (0, s.jsx)("span", {
                    className: "pc-nav-item-text",
                    children: "World",
                  }),
                }),
                (0, s.jsx)("div", {
                    className: "pc-nav-item",
                    children: (0, s.jsx)("a", {
                      className: "pc-nav-item-text",
                      href: "https://ido.neuralchain.pro",
                      target: "_blank",
                      children: "IDO",
                    }),
                }),
                (0, s.jsx)("div", {
                  className: "pc-nav-item",
                  children: (0, s.jsx)(l(), {
                    href: "/roadmap",
                    "data-sentry-element": "Link",
                    "data-sentry-source-file": "NavPc.tsx",
                    "data-sentry-element": "Link",
                    children: (0, s.jsx)("span", {
                      className: "pc-nav-item-text ".concat(
                        "/roadmap" === a ? "text-black-primary" : " text-grey-3"
                      ),
                      children: "Roadmap",
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "pc-nav-item",
                  children: (0, s.jsx)("a", {
                    className: "pc-nav-item-text",
                    href: "https://medium.com/@ammo_ai",
                    target: "_blank",
                    children: "Blogs",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "pc-nav-item",
                  children: (0, s.jsx)("a", {
                    className: "pc-nav-item-text",
                    href: "https://x.com/Ammo_AI",
                    target: "_blank",
                    children: (0, s.jsx)(n.default, {
                      className: "pc-nav-item-icon",
                      src: "/images/header/x.svg",
                      alt: "Ammo Logo",
                      width: 21,
                      height: 21,
                      "data-sentry-element": "Image",
                      "data-sentry-source-file": "NavPc.tsx",
                      "data-sentry-element": "Image",
                    }),
                  }),
                }),
              ],
            }),
          });
        };
        function f() {
          let e = (0, r.a)(),
            t = () => {
              let e = "world-section";
              if ("/" !== window.location.pathname)
                window.location.href = "/#" + e;
              else {
                let t = document.getElementById(e);
                null == t || t.scrollIntoView({ behavior: "smooth" });
              }
            };
          return (0, s.jsxs)("header", {
            className: "header-container",
            "data-sentry-component": "Header",
            "data-sentry-source-file": "Header.tsx",
            children: [
              (0, s.jsx)(o.zW, {
                direction: "down",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "Header.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)(l(), {
                  href: "/",
                  "data-sentry-element": "Link",
                  "data-sentry-source-file": "Header.tsx",
                  "data-sentry-element": "Link",
                  children: (0, s.jsx)(n.default, {
                    className: "header-logo",
                    src: "/images/common/logo_long.svg",
                    alt: "Ammo Logo",
                    width: 111,
                    height: 24,
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "Header.tsx",
                    "data-sentry-element": "Image",
                  }),
                }),
              }),
              e
                ? (0, s.jsx)(c, { scrollToWorldSection: t })
                : (0, s.jsx)(h, { scrollToWorldSection: t }),
            ],
          });
        }
        a(535);
      },
      3010: (e, t, a) => {
        "use strict";
        a.d(t, { a: () => n });
        var s = a(4496);
        let n = () => {
          let [e, t] = (0, s.useState)(void 0),
            a = () => {
              t(window.innerWidth <= 768);
            };
          return (
            (0, s.useEffect)(
              () => (
                a(),
                window.addEventListener("resize", a),
                () => window.removeEventListener("resize", a)
              ),
              []
            ),
            e
          );
        };
      },
      2327: () => {},
      535: () => {},
    },
  ]);
