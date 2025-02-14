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
      (e._sentryDebugIds[t] = "a92075f2-16f5-4765-86c8-e094451dea7c"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-a92075f2-16f5-4765-86c8-e094451dea7c"));
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
        (e._sentryDebugIds[t] = "a92075f2-16f5-4765-86c8-e094451dea7c"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-a92075f2-16f5-4765-86c8-e094451dea7c"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [329],
    {
      2359: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 374));
      },
      374: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => v });
        var s = n(5155),
          a = n(9420),
          i = n(4496),
          o = n(4511),
          c = n(2083);
        n(2555);
        let r = () =>
          (0, s.jsxs)("div", {
            className: "vision-header",
            "data-sentry-component": "VisionHeader",
            "data-sentry-source-file": "VisionHeader.tsx",
            children: [
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "VisionHeader.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "vision-header-title",
                  children: "Roadmap",
                }),
              }),
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "VisionHeader.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "vision-header-subtitle",
                  children:
                    "Build “The New Meta” for Billions of AIs and Humans",
                }),
              }),
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "VisionHeader.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsxs)("div", {
                  className: "vision-header-description",
                  children: [
                    (0, s.jsx)(o.default, {
                      className: "vision-header-description-quotation",
                      src: "/images/vision_header/opening_quotation.svg",
                      alt: "opening quotation",
                      width: 16,
                      height: 14,
                      "data-sentry-element": "Image",
                      "data-sentry-source-file": "VisionHeader.tsx",
                      "data-sentry-element": "Image",
                    }),
                    (0, s.jsx)("span", {
                      children: "Powered by alignment with distributed RL-GYM",
                    }),
                    (0, s.jsx)(o.default, {
                      className: "vision-header-description-quotation",
                      src: "/images/vision_header/closing_quotation.svg",
                      alt: "closing quotation",
                      width: 16,
                      height: 14,
                      "data-sentry-element": "Image",
                      "data-sentry-source-file": "VisionHeader.tsx",
                      "data-sentry-element": "Image",
                    }),
                  ],
                }),
              }),
            ],
          });
        n(8361);
        let l = (e) => {
          let { isPositionedBottom: t, info: n } = e,
            { markers: a } = n,
            [c, r] = (0, i.useState)(null);
          (0, i.useEffect)(() => {
            if (!t) return;
            let e = a.find((e) => "active" === e.status);
            if (e) r(e.continent);
            else {
              var n;
              r(
                (null === (n = a[0]) || void 0 === n ? void 0 : n.continent) ||
                  null
              );
            }
          }, [t, a]);
          let l = (e) => {
            console.log("continent", e),
              console.log("isPositionedBottom", t),
              t && r(e);
          };
          return (0, s.jsx)("div", {
            className: "actived-planet ".concat(t ? "actived" : "default"),
            "data-sentry-component": "ActivedPlanet",
            "data-sentry-source-file": "ActivedPlanet.tsx",
            children: a.map((e) =>
              (0, s.jsxs)(
                "div",
                {
                  className:
                    "actived-planet-continent-item actived-planet-continent-".concat(
                      e.continent
                    ),
                  onClick: () => l(e.continent),
                  children: [
                    (0, s.jsx)(o.default, {
                      src: "/images/industry_map/".concat(e.continent, ".svg"),
                      alt: e.continent,
                      width: 307,
                      height: 212,
                      style: { display: c !== e.continent ? "block" : "none" },
                    }),
                    (0, s.jsx)(o.default, {
                      src: "/images/industry_map/".concat(
                        e.continent,
                        "_active.svg"
                      ),
                      alt: e.continent,
                      width: 307,
                      height: 212,
                      style: { display: c === e.continent ? "block" : "none" },
                    }),
                    (0, s.jsxs)("div", {
                      className: "actived-planet-continent-content",
                      children: [
                        (0, s.jsx)("div", {
                          className: "actived-planet-continent-popup-container",
                          children: (0, s.jsxs)("div", {
                            className: "actived-planet-continent-popup "
                              .concat(c === e.continent ? "focus" : "", " ")
                              .concat(e.status),
                            children: [
                              (0, s.jsx)("span", {
                                className:
                                  "actived-planet-continent-popup-title",
                                children: e.name,
                              }),
                              c === e.continent &&
                                e.descList.map((e, t) =>
                                  (0, s.jsx)(
                                    "div",
                                    {
                                      className:
                                        "actived-planet-continent-popup-desc",
                                      children: e,
                                    },
                                    t
                                  )
                                ),
                              c === e.continent &&
                                e.button &&
                                (0, s.jsxs)("a", {
                                  className:
                                    "actived-planet-continent-popup-button",
                                  href: e.button.link,
                                  target: "_blank",
                                  children: [
                                    (0, s.jsx)(o.default, {
                                      src: "/images/industry_map/link.svg",
                                      alt: "link",
                                      width: 12,
                                      height: 12,
                                    }),
                                    e.button.text,
                                  ],
                                }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(o.default, {
                          className: "actived-planet-continent-popup-icon",
                          src: "/images/industry_map/".concat(
                            e.status,
                            "_icon.svg"
                          ),
                          alt: e.status,
                          width: 40,
                          height: 40,
                        }),
                      ],
                    }),
                  ],
                },
                e.name
              )
            ),
          });
        };
        n(1243);
        let d = ["first", "second", "third"],
          m = (e) => {
            let { isPositionedBottom: t, info: n } = e,
              { position: a, markers: i } = n;
            return (0, s.jsx)("div", {
              className: "default-planet "
                .concat(a, " ")
                .concat(t ? "default" : "actived"),
              "data-sentry-component": "DefaultPlanet",
              "data-sentry-source-file": "DefaultPlanet.tsx",
              children:
                null == i
                  ? void 0
                  : i.map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "default-planet-marker ".concat(d[t]),
                          children: [
                            (0, s.jsx)("div", {
                              className: "default-planet-marker-dot",
                            }),
                            (0, s.jsx)("div", {
                              className: "default-planet-marker-name",
                              children: e.name,
                            }),
                          ],
                        },
                        e.name
                      )
                    ),
            });
          };
        n(8702);
        let p = (e) => {
            let { id: t, position: n, info: a, onClick: o } = e,
              [c, r] = (0, i.useState)(!1);
            return (
              (0, i.useEffect)(() => {
                r("bottom" === n);
              }, [n]),
              (0, s.jsxs)(
                "div",
                {
                  className: "planet-container ".concat(n),
                  onClick: () => o(t),
                  "data-sentry-component": "PlanetContainer",
                  "data-sentry-source-file": "PlanetContainer.tsx",
                  children: [
                    c &&
                      (0, s.jsx)("div", { className: "planet-border-narrow" }),
                    c && (0, s.jsx)("div", { className: "planet-border-wide" }),
                    (0, s.jsx)("div", {
                      className: "planet-title ".concat(n),
                      children: a.title,
                    }),
                    (0, s.jsxs)("div", {
                      className: "planet-content",
                      children: [
                        (0, s.jsx)(m, {
                          isPositionedBottom: c,
                          info: a,
                          "data-sentry-element": "DefaultPlanet",
                          "data-sentry-source-file": "PlanetContainer.tsx",
                          "data-sentry-element": "DefaultPlanet",
                        }),
                        (0, s.jsx)(l, {
                          isPositionedBottom: c,
                          info: a,
                          "data-sentry-element": "ActivedPlanet",
                          "data-sentry-source-file": "PlanetContainer.tsx",
                          "data-sentry-element": "ActivedPlanet",
                        }),
                      ],
                    }),
                  ],
                },
                t
              )
            );
          },
          u = [
            {
              id: "finance",
              position: "bottom",
              title: "Finance",
              markers: [
                {
                  name: "Crypto - Coinfans",
                  status: "active",
                  continent: "asia",
                  descList: [
                    "• Core need: Which Coin to buy?",
                    "• User - Coin",
                  ],
                  button: {
                    text: "FakersAI.com",
                    link: "https://fakersai.com",
                  },
                },
                {
                  name: "Crypto - TopTrader",
                  status: "lock",
                  continent: "africa",
                  descList: [
                    "• Core need: Manage Fund for me",
                    "• User - Trader",
                  ],
                },
                {
                  name: "Stocks - AI Robinhood",
                  status: "lock",
                  continent: "america",
                  descList: [
                    "• Core need: Which stock to buy?",
                    "• User - Stock",
                  ],
                },
              ],
            },
            {
              id: "career",
              position: "left",
              title: "Career",
              markers: [
                {
                  name: "Job - AI LinkedIn",
                  status: "lock",
                  continent: "asia",
                  descList: [
                    "• Core need: Which job should I choose?",
                    "• User - Company",
                  ],
                },
                {
                  name: "Degree - AI QS",
                  status: "lock",
                  continent: "africa",
                  descList: [
                    "• Core need: Which degree should I study?",
                    "• User - University",
                  ],
                },
                {
                  name: "VC - AI Crunchbase",
                  status: "lock",
                  continent: "america",
                  descList: ["• Core need: Which VC to pitch?", "• User - VC"],
                },
              ],
            },
            {
              id: "life",
              position: "right",
              title: "Life",
              markers: [
                {
                  name: "Dating - AI Tinder",
                  status: "lock",
                  continent: "asia",
                  descList: ["• Core need: Which to date?", "• User - Partner"],
                },
                {
                  name: "Nomad - AI Lifestyle",
                  status: "lock",
                  continent: "africa",
                  descList: [
                    "• Core need: Which city to live?",
                    "• User - City",
                  ],
                },
                {
                  name: "Food - AI Michelin",
                  status: "lock",
                  continent: "america",
                  descList: [
                    "• Core need: Which restaurant to eat in?",
                    "• User - Restaurant",
                  ],
                },
              ],
            },
            {
              id: "entertainment",
              position: "top",
              title: "Entertainment",
              markers: [
                {
                  name: "Books - AI Kindle",
                  status: "lock",
                  continent: "asia",
                  descList: [
                    "• Core need: Which book to read?",
                    "• User - Book",
                  ],
                },
                {
                  name: "Movies - AI Netflix",
                  status: "lock",
                  continent: "africa",
                  descList: [
                    "• Core need: Which show to watch?",
                    "• User - Movie",
                  ],
                },
                {
                  name: "Gaming - AI Steam",
                  status: "lock",
                  continent: "america",
                  descList: [
                    "• Core need: Which game to play?",
                    "• User - Game",
                  ],
                },
              ],
            },
          ];
        n(5985);
        let y = () => {
          let [e, t] = (0, i.useState)(u),
            n = (n) => {
              var s;
              (null === (s = e.find((e) => e.id === n)) || void 0 === s
                ? void 0
                : s.position) !== "bottom" &&
                t((e) => {
                  let t = e.find((e) => e.id === n),
                    s = ["top", "right", "bottom", "left"];
                  if ("top" === t.position)
                    return e.map((e) => {
                      let t = s.indexOf(e.position);
                      return { ...e, position: s[(t + 1) % 4] };
                    });
                  let a = s.indexOf(t.position),
                    i = (s.indexOf("bottom") - a + 4) % 4;
                  return e.map((e) => {
                    let t = s.indexOf(e.position);
                    return { ...e, position: s[(t + i) % 4] };
                  });
                });
            };
          return (0, s.jsxs)("div", {
            className: "industry-map",
            "data-sentry-component": "IndustryMap",
            "data-sentry-source-file": "IndustryMap.tsx",
            children: [
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "IndustryMap.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "industry-map-title",
                  children: "Rebuild Infinite Industries",
                }),
              }),
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "IndustryMap.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "industry-map-description",
                  children:
                    "Each Subspace is an integral component of the next internet.",
                }),
              }),
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "IndustryMap.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "industry-map-description",
                  children: "Each AiPP is an interactive portal to a Subspace.",
                }),
              }),
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "IndustryMap.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "planets-orbit",
                  children: (0, s.jsx)("div", {
                    className: "planets-container",
                    children: e.map((e) =>
                      (0, s.jsx)(
                        p,
                        { id: e.id, position: e.position, info: e, onClick: n },
                        e.id
                      )
                    ),
                  }),
                }),
              }),
              (0, s.jsx)("div", {
                className: "industry-map-tips-container",
                children: (0, s.jsxs)("div", {
                  className: "industry-map-tips",
                  children: [
                    (0, s.jsx)("p", {
                      className: "industry-map-tips-title",
                      children: "Build your own Subspace",
                    }),
                    (0, s.jsx)("p", {
                      className: "industry-map-tips-desc",
                      children: "Coming soon...",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "industry-map-bottom-desc",
                children: "One framework to create many adaptive subspaces",
              }),
            ],
          });
        };
        var h = n(3010);
        let x = [
          {
            pcX: 250,
            pcY: 100,
            mobileX: 80,
            mobileY: 50,
            text: "Browse News - Explore trending tokens.",
          },
          {
            pcX: 420,
            pcY: 60,
            mobileX: 160,
            mobileY: 30,
            text: "Meet Other Buddies - Chat with others.",
          },
          {
            pcX: 600,
            pcY: 100,
            mobileX: 250,
            mobileY: 30,
            text: "Generate Content - Share opinions and analyses.",
          },
          {
            pcX: 230,
            pcY: 180,
            mobileX: 60,
            mobileY: 90,
            text: "Collaborate - Work on projects with others.",
          },
          {
            pcX: 320,
            pcY: 180,
            mobileX: 100,
            mobileY: 100,
            text: "Discover Interests - Explore new topics.",
          },
          {
            pcX: 480,
            pcY: 180,
            mobileX: 260,
            mobileY: 90,
            text: "Join Events - Participate in discussions.",
          },
          {
            pcX: 580,
            pcY: 180,
            mobileX: 70,
            mobileY: 150,
            text: "Learn Skills - Take courses or tutorials.",
          },
          {
            pcX: 220,
            pcY: 280,
            mobileX: 130,
            mobileY: 150,
            text: "Follow Trends - Monitor popular hashtags.",
          },
          {
            pcX: 360,
            pcY: 260,
            mobileX: 220,
            mobileY: 130,
            text: "Explore Subspaces - Visit new subspaces.",
          },
          {
            pcX: 80,
            pcY: 450,
            mobileX: 70,
            mobileY: 200,
            text: "Browse News - Explore trending tokens.",
          },
          {
            pcX: 200,
            pcY: 450,
            mobileX: 100,
            mobileY: 210,
            text: "Meet Other Buddies - Chat with others.",
          },
          {
            pcX: 70,
            pcY: 550,
            mobileX: 70,
            mobileY: 250,
            text: "Generate Content - Share opinions and analyses.",
          },
          {
            pcX: 160,
            pcY: 550,
            mobileX: 130,
            mobileY: 250,
            text: "Collaborate - Work on projects with others.",
          },
          {
            pcX: 260,
            pcY: 550,
            mobileX: 60,
            mobileY: 300,
            text: "Discover Interests - Explore new topics.",
          },
          {
            pcX: 50,
            pcY: 650,
            mobileX: 140,
            mobileY: 300,
            text: "Join Events - Participate in discussions.",
          },
          {
            pcX: 280,
            pcY: 650,
            mobileX: 70,
            mobileY: 350,
            text: "Learn Skills - Take courses or tutorials.",
          },
          {
            pcX: 50,
            pcY: 750,
            mobileX: 120,
            mobileY: 350,
            text: "Follow Trends - Monitor popular hashtags.",
          },
          {
            pcX: 160,
            pcY: 800,
            mobileX: 80,
            mobileY: 380,
            text: "Explore Subspaces - Visit new subspaces.",
          },
          {
            pcX: 750,
            pcY: 360,
            mobileX: 290,
            mobileY: 180,
            text: "Browse News - Explore trending tokens.",
          },
          {
            pcX: 700,
            pcY: 450,
            mobileX: 260,
            mobileY: 230,
            text: "Meet Other Buddies - Chat with others.",
          },
          {
            pcX: 820,
            pcY: 450,
            mobileX: 310,
            mobileY: 230,
            text: "Generate Content - Share opinions and analyses.",
          },
          {
            pcX: 700,
            pcY: 550,
            mobileX: 270,
            mobileY: 280,
            text: "Collaborate - Work on projects with others.",
          },
          {
            pcX: 880,
            pcY: 600,
            mobileX: 310,
            mobileY: 280,
            text: "Discover Interests - Explore new topics.",
          },
          {
            pcX: 520,
            pcY: 700,
            mobileX: 220,
            mobileY: 330,
            text: "Join Events - Participate in discussions.",
          },
          {
            pcX: 620,
            pcY: 700,
            mobileX: 180,
            mobileY: 380,
            text: "Learn Skills - Take courses or tutorials.",
          },
          {
            pcX: 620,
            pcY: 800,
            mobileX: 240,
            mobileY: 400,
            text: "Follow Trends - Monitor popular hashtags.",
          },
          {
            pcX: 880,
            pcY: 750,
            mobileX: 300,
            mobileY: 370,
            text: "Explore Subspaces - Visit new subspaces.",
          },
        ];
        n(3702);
        let b = () => {
          let e = (0, h.a)(),
            t = (0, i.useRef)(0),
            [n, a] = (0, i.useState)(""),
            r = (0, i.useRef)(null),
            [l, d] = (0, i.useState)(1);
          (0, i.useEffect)(() => {
            void 0 !== e && m();
          }, [e]);
          let m = () => {
            let n = t.current % x.length;
            if (r.current) {
              let t = e ? x[n].mobileY - 60 : x[n].pcY - 120,
                s = e ? x[n].mobileX - 20 : x[n].pcX - 40;
              (r.current.style.top = "".concat(t, "px")),
                (r.current.style.left = "".concat(s, "px"));
            }
            setTimeout(() => {
              d(0);
            }, 1500),
              setTimeout(() => {
                a(""), d(1), a(x[n].text), (t.current += 1), setTimeout(m, 3e3);
              }, 2e3);
          };
          return (0, s.jsxs)("div", {
            className: "eco-system",
            "data-sentry-component": "EcoSystem",
            "data-sentry-source-file": "EcoSystem.tsx",
            children: [
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "EcoSystem.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "eco-system-title",
                  children: "Co-explore and Co-thrive",
                }),
              }),
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "EcoSystem.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "eco-system-title",
                  children: "in the MetaSpace ",
                }),
              }),
              (0, s.jsxs)("div", {
                className: "eco-system-animation",
                children: [
                  (0, s.jsx)("div", {
                    className: "eco-system-continent eco-system-continent-asia",
                    children: "Books",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "eco-system-continent eco-system-continent-africa",
                    children: "Crypto",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "eco-system-continent eco-system-continent-america",
                    children: "Gaming",
                  }),
                  x.map((t, n) =>
                    (0, s.jsx)(
                      "div",
                      {
                        className: "eco-system-marker",
                        style: {
                          left: "".concat(e ? t.mobileX : t.pcX, "px"),
                          top: "".concat(e ? t.mobileY : t.pcX, "px"),
                        },
                      },
                      "".concat(t.text, "-").concat(n)
                    )
                  ),
                  (0, s.jsxs)("div", {
                    className: "eco-system-robot-container",
                    ref: r,
                    children: [
                      n &&
                        (0, s.jsx)("div", {
                          className: "eco-system-robot-text-container",
                          style: { opacity: l },
                          children: (0, s.jsx)("div", {
                            className: "eco-system-robot-text",
                            children: n,
                          }),
                        }),
                      (0, s.jsx)(o.default, {
                        className: "eco-system-robot-icon",
                        src: "/images/eco_system/robot.svg",
                        alt: "Eco System",
                        width: 88,
                        height: 135,
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "EcoSystem.tsx",
                        "data-sentry-element": "Image",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(c.zW, {
                direction: "up",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "EcoSystem.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsx)("div", {
                  className: "eco-system-subtitle",
                  children: "Numerous subspaces linked by your User Buddy",
                }),
              }),
            ],
          });
        };
        var f = n(2010);
        function v() {
          return (0, s.jsxs)("main", {
            className: "main-container",
            "data-sentry-component": "RoadMap",
            "data-sentry-source-file": "page.tsx",
            children: [
              (0, s.jsx)(a.A, {
                "data-sentry-element": "Header",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "Header",
              }),
              (0, s.jsx)(r, {
                "data-sentry-element": "VisionHeader",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "VisionHeader",
              }),
              (0, s.jsx)(y, {
                "data-sentry-element": "IndustryMap",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "IndustryMap",
              }),
              (0, s.jsx)(b, {
                "data-sentry-element": "EcoSystem",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "EcoSystem",
              }),
              (0, s.jsx)(f.A, {
                "data-sentry-element": "Footer",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "Footer",
              }),
            ],
          });
        }
      },
      3702: () => {},
      8361: () => {},
      1243: () => {},
      5985: () => {},
      8702: () => {},
      2555: () => {},
    },
    (e) => {
      var t = (t) => e((e.s = t));
      e.O(0, [406, 385, 142, 475, 882, 683, 850, 441, 618, 358], () => t(2359)),
        (_N_E = e.O());
    },
  ]);
