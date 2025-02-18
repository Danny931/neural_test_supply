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
      (e._sentryDebugIds[t] = "668fcc09-578c-4542-9f85-23e50dd3e7ed"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-668fcc09-578c-4542-9f85-23e50dd3e7ed"));
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
        (e._sentryDebugIds[t] = "668fcc09-578c-4542-9f85-23e50dd3e7ed"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-668fcc09-578c-4542-9f85-23e50dd3e7ed"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974],
    {
      7676: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 2006));
      },
      2006: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, { default: () => N });
        var s = a(5155);
        a(1743);
        var i = a(9420);
        function n(e) {
          let { text: t, className: a } = e;
          return (0, s.jsx)("span", {
            className: "text-red-primary ".concat(a),
            "data-sentry-component": "RedAccentText",
            "data-sentry-source-file": "RedAccentText.tsx",
            children: t,
          });
        }
        a(7343);
        var r = a(4511),
          l = a(2083);
        function o() {
          return (0, s.jsx)(l.zW, {
            direction: "up",
            damping: 0.5,
            triggerOnce: !0,
            "data-sentry-element": "Fade",
            "data-sentry-component": "Banner",
            "data-sentry-source-file": "Banner.tsx",
            children: (0, s.jsxs)("div", {
              className: "banner-container",
              children: [
                (0, s.jsx)(r.default, {
                  className: "banner-logo",
                  src: "/images/banner/logo_big.svg",
                  alt: "logo",
                  width: 320,
                  height: 320,
                  "data-sentry-element": "Image",
                  "data-sentry-source-file": "Banner.tsx",
                  "data-sentry-element": "Image",
                }),
                (0, s.jsxs)("div", {
                  className: "banner-title-container",
                  children: [
                    (0, s.jsx)("div", {
                      className: "banner-title-first",
                      children: "Architectures for",
                    }),
                    (0, s.jsxs)("div", {
                      className: "banner-title-second",
                      children: [
                        "Massive ",
                        (0, s.jsx)(n, {
                          text: "Multiagent",
                          "data-sentry-element": "RedAccentText",
                          "data-sentry-source-file": "Banner.tsx",
                          "data-sentry-element": "RedAccentText",
                        }),
                        " Online",
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "banner-subtitle",
                  children: "Build the Future of AI-Human Connection",
                }),
                (0, s.jsx)("div", {
                  className: "banner-steps",
                  children: (0, s.jsx)(r.default, {
                    src: "/images/banner/icons.svg",
                    alt: "icons",
                    width: 1200,
                    height: 160,
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "Banner.tsx",
                    "data-sentry-element": "Image",
                  }),
                }),
              ],
            }),
          });
        }
        var d = a(4496);
        a(6166);
        let c = [
          {
            title: "Human-AI",
            subtitle: "Massive Agent Factory",
            desc: "Everyone owns personal AI agents",
            descDetail:
              "We call it User Buddy. It's your new entrypoint, helping you learn, invest, create, grow, and explore.",
          },
          {
            title: "AI-AI",
            subtitle: "The MetaSpace",
            desc: "Be part of the new AI Economy",
            descDetail:
              "An modular embedding space connecting billions of AI Agents creating value. ",
          },
          {
            title: "Human-AI-Human",
            subtitle: "Alignment with RLHF",
            desc: "Make the new AI World yours",
            descDetail:
              "Collective evolution rooted in humanity, governed  and guided by your feedback.",
          },
        ];
        function m() {
          return (0, s.jsx)("div", {
            className: "agent-verse-container",
            "data-sentry-component": "AgentVerse",
            "data-sentry-source-file": "AgentVerse.tsx",
            children: (0, s.jsx)(l.zW, {
              direction: "up",
              damping: 0.5,
              triggerOnce: !0,
              "data-sentry-element": "Fade",
              "data-sentry-source-file": "AgentVerse.tsx",
              "data-sentry-element": "Fade",
              children: (0, s.jsx)("div", {
                className: "agent-verse-list",
                children: c.map((e, t) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: "agent-verse-item",
                      children: [
                        (0, s.jsx)(r.default, {
                          className: "agent-verse-item-dot",
                          src: "/images/agent_verse/dot.svg",
                          alt: "dot",
                          width: 32,
                          height: 32,
                        }),
                        (0, s.jsxs)("div", {
                          className: "agent-verse-item-content",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "agent-verse-item-title-container",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "agent-verse-item-title",
                                  children: e.title,
                                }),
                                (0, s.jsx)("div", {
                                  className: "agent-verse-item-subtitle",
                                  children: e.subtitle,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "agent-verse-item-desc-container",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "agent-verse-item-desc",
                                  children: e.desc,
                                }),
                                (0, s.jsx)("div", {
                                  className: "agent-verse-item-desc-detail",
                                  children: e.descDetail,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            }),
          });
        }
        let u = (e) => {
          let [t, a] = (0, d.useState)(1),
            [s, i] = (0, d.useState)(
              "MetaSpace - The AI-Human Symbiotic Space"
            ),
            [n, r] = (0, d.useState)(
              "a composable, high-dimensional virtual cosmos where autonomous AI agents and humans interact"
            ),
            [l, o] = (0, d.useState)(1),
            [c, m] = (0, d.useState)(!0),
            [u, p] = (0, d.useState)(0),
            [g, h] = (0, d.useState)(1),
            [y, x] = (0, d.useState)(1),
            [f, v] = (0, d.useState)(!1),
            [b, w] = (0, d.useState)(0.1),
            [j, N] = (0, d.useState)(1),
            [I, S] = (0, d.useState)(1),
            [A, _] = (0, d.useState)(1),
            [k, M] = (0, d.useState)(1);
          (0, d.useEffect)(
            () => (
              window.addEventListener("scroll", B),
              () => window.removeEventListener("scroll", B)
            ),
            [e]
          );
          let B = () => {
            let t = window.innerHeight,
              s = document
                .querySelector(".world-container")
                .getBoundingClientRect(),
              n = document.querySelector(".world-slider-universe-bg");
            if (s.top > 0 && s.top < t) {
              a(1),
                m(!0),
                (n.style.position = "static"),
                p(s.top > 0 ? s.top : 0),
                i("MetaSpace - The AI-Human Symbiotic Space"),
                r(
                  "a composable, high-dimensional virtual cosmos where autonomous AI agents and humans interact"
                ),
                v(!1);
              return;
            }
            if (s.top > 0) return;
            let l = Math.abs(s.top),
              d = l / window.innerHeight;
            if (l > 0 && l < t) {
              a(2),
                m(!0),
                (n.style.position = "fixed"),
                p(0),
                h(1 + 10 * d),
                x(1 + d),
                i("Subspace - Modular components of MetaSpace"),
                r(
                  "Specialized virtual domains that compose the MetaSpace, each serving as a distinct yet interconnected environment for AI-Human interaction"
                ),
                v(!1);
              return;
            }
            if (l > t && l < 2 * t) {
              a(3),
                h(2 + d * (e ? 170 : 60)),
                v(!0),
                w(d < 1.2 ? 0.2 : d - 1),
                i("AiPP - AI Preference Protocol"),
                r(
                  "The portal that allows users and AI Agents to interact with each other, ensuring AI-Human Alignment"
                );
              return;
            }
            if (l > 2 * t && l < 3 * t) {
              a(4),
                S(d - 2),
                i("AI Buddies - population in the MetaSpace"),
                r(""),
                o(1);
              return;
            }
            if (l > 3 * t && l < 4 * t) {
              a(5), S(d - 2), _(d - 3), i(""), r(""), o(1);
              return;
            }
            if (l > 4 * t && l < 5 * t) {
              a(6),
                N(1 - (d - 4)),
                _(1 - (d - 4)),
                M(d - 4),
                i("MetaSpace - AI and Human co-exist"),
                r(
                  "A decentralized ecosystem powered by AI and Human collaboration, driving innovation and fairness."
                ),
                o(d - 4);
              return;
            }
            if (l > 5 * t && l < 6 * t) {
              a(7), p(-(l - 5 * t));
              return;
            }
            if (l > 6 * t && l < 7 * t) {
              p(-t);
              return;
            }
          };
          return {
            currentScreen: t,
            universeEarthTitle: s,
            universeEarthDesc: n,
            universeEarthTextOpacity: l,
            universeBgVisible: c,
            universeBgTop: u,
            universeBgScale: g,
            universeNodeScale: y,
            earthBgVisible: f,
            earthBgScale: b,
            earthBgOpacity: j,
            earthMarkerScale: I,
            earthMarkerOpacity: A,
            earthMarkerLinesOpacity: k,
          };
        };
        function p(e) {
          let {
            className: t,
            title: a,
            subtitle: i,
            link: n,
            top: r,
            left: l,
            universeNodeScale: o,
            earthBgVisible: d,
          } = e;
          return (0, s.jsx)("a", {
            href: n,
            target: "_blank",
            "data-sentry-component": "UniverseNode",
            "data-sentry-source-file": "UniverseNode.tsx",
            children: (0, s.jsxs)("div", {
              className: "".concat(t, " ").concat(r, " ").concat(l),
              style: {
                transform: "scale(".concat(o / 2, ")"),
                display: d ? "none" : "flex",
              },
              children: [
                a,
                i &&
                  (0, s.jsx)("span", {
                    className: "ml-2 text-grey-3",
                    children: i,
                  }),
              ],
            }),
          });
        }
        a(2485);
        let g = (e) => {
          let {
              color: t,
              position: a,
              title: i,
              description: n,
              currentScreen: l,
              visibleScreens: o,
              initialScale: c,
              scale: m,
              initialOpacity: u,
              opacity: p,
            } = e,
            g = o.includes(l),
            h = g ? 0.8 * Math.min(c + m, 1) : 0,
            y = 4 === l,
            x = (0, d.useMemo)(
              () => (g ? (6 === l ? p : Math.min(u + p, 1)) : 0),
              [l, g, u, p]
            );
          return (0, s.jsxs)("div", {
            className: "world-slider-earth-node",
            style: { ...a, opacity: x, transform: "scale(".concat(h, ")") },
            "data-sentry-component": "EarthMarker",
            "data-sentry-source-file": "EarthMarker.tsx",
            children: [
              (0, s.jsx)(r.default, {
                className: "world-slider-earth-node-marker",
                src: "/images/world/earth_marker.svg",
                alt: "earth-marker",
                width: 56,
                height: 56,
                "data-sentry-element": "Image",
                "data-sentry-source-file": "EarthMarker.tsx",
                "data-sentry-element": "Image",
              }),
              (0, s.jsx)("div", {
                className: "world-slider-earth-node-title",
                style: { backgroundColor: t },
                children: i,
              }),
              y &&
                n &&
                (0, s.jsx)("div", {
                  className: "world-slider-earth-node-description",
                  children: n,
                }),
            ],
          });
        };
        var h = a(3010);
        function y() {
          let e = (0, h.a)(),
            {
              currentScreen: t,
              universeEarthTitle: a,
              universeEarthDesc: i,
              universeEarthTextOpacity: n,
              universeBgVisible: l,
              universeBgTop: o,
              universeBgScale: d,
              universeNodeScale: c,
              earthBgVisible: m,
              earthBgScale: y,
              earthBgOpacity: x,
              earthMarkerScale: f,
              earthMarkerOpacity: v,
              earthMarkerLinesOpacity: b,
            } = u(e || !1),
            w = [
              {
                title: "First Subspace: Crypto",
                className: "world-slider-universe-grey-node",
                top: e ? "top-[55%]" : "top-[38%]",
                left: e ? "left-[-1%]" : "left-[16%]",
                scale: c,
                earthBgVisible: m,
                link: "https://ido.neuralchain.pro",
              },
              {
                title: "NeuralChain - DeFAI versioned Agentic Rednote",
                className: "world-slider-universe-text",
                top: e ? "top-[60%]" : "top-[48%]",
                left: e ? "left-[2%]" : "left-[16%]",
                scale: c,
                earthBgVisible: m,
              },
              {
                title: "Education",
                subtitle: "(Coming soon)",
                className: "world-slider-universe-white-node",
                top: e ? "top-[20%]" : "top-1/3",
                left: e ? "left-[10%]" : "left-1/2",
                scale: c,
                earthBgVisible: m,
              },
              {
                title: "Social",
                subtitle: "(Coming soon)",
                className: "world-slider-universe-white-node",
                top: e ? "top-[40%]" : "top-1/2",
                left: e ? "left-[45%]" : "left-[60%]",
                scale: c,
                earthBgVisible: m,
              },
            ],
            j = [
              {
                color: "#808080",
                top: e ? "-219px" : "24.5px",
                left: e ? "-132px" : "196px",
                title: "User Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.2,
                opacity: v,
              },
              {
                color: "#FF6B6B",
                top: e ? "-61px" : "4px",
                left: e ? "-195px" : "540px",
                title: "Goal Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.3,
                opacity: v,
              },
              {
                color: "#4A90E2",
                top: e ? "91px" : "189px",
                left: e ? "-116px" : "72px",
                title: "Goal Buddy",
                description:
                  "Autonomous AI agents adapting, cooperating and evolving within the MetaSpace",
                visibleScreens: [4, 5, 6],
                initialScale: 0,
                scale: f,
                initialOpacity: 1,
                opacity: v,
              },
              {
                color: "#90EE90",
                top: e ? "-56px" : "257.5px",
                left: e ? "85px" : "287px",
                title: "Goal Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.4,
                opacity: v,
              },
              {
                color: "#64B5F6",
                top: e ? "37px" : "179px",
                left: e ? "-46px" : "462px",
                title: "Goal Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.3,
                opacity: v,
              },
              {
                color: "#9E9E9E",
                top: e ? "-177px" : "119px",
                left: e ? "43px" : "695px",
                title: "User Buddy",
                description:
                  "AI extensions of human users, evolving and unlock greater capabilities together with human",
                visibleScreens: [4, 5, 6],
                initialScale: 0,
                scale: f,
                initialOpacity: 1,
                opacity: v,
              },
              {
                color: "#FF6B6B",
                top: e ? "119px" : "369px",
                left: e ? "94px" : "120px",
                title: "Goal Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.5,
                opacity: v,
              },
              {
                color: "#FF9999",
                top: e ? "181px" : "422px",
                left: e ? "-45px" : "342px",
                title: "Goal Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.6,
                opacity: v,
              },
              {
                color: "#9E9E9E",
                top: e ? "71px" : "409px",
                left: e ? "100vw" : "525px",
                title: "User Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.5,
                opacity: v,
              },
              {
                color: "#4CAF50",
                top: e ? "65px" : "293px",
                left: e ? "100vw" : "774px",
                title: "Goal Buddy",
                description: "",
                visibleScreens: [5, 6],
                initialScale: -1,
                scale: f,
                initialOpacity: -0.5,
                opacity: v,
              },
            ];
          return (0, s.jsxs)("div", {
            className: "world-container",
            id: "world-section",
            "data-sentry-component": "World",
            "data-sentry-source-file": "World.tsx",
            children: [
              (0, s.jsxs)("div", {
                className: "world-slider-universe-bg",
                style: {
                  top: o,
                  opacity: l ? 1 : 0,
                  backgroundSize: "".concat(100 * d, "% ").concat(100 * d, "%"),
                },
                children: [
                  (0, s.jsx)("div", {
                    className: "world-slider-universe-title",
                    children: "The Future Symbiotic World",
                  }),
                  (0, s.jsx)("div", {
                    className: "world-slider-universe-subtitle",
                    style: { opacity: n },
                    children: a,
                  }),
                  (0, s.jsx)("div", {
                    className: "world-slider-universe-description",
                    style: { opacity: n },
                    children: i,
                  }),
                  null == w
                    ? void 0
                    : w.map((e, t) =>
                        (0, s.jsx)(
                          p,
                          {
                            className: e.className,
                            title: e.title,
                            subtitle: e.subtitle,
                            link: e.link,
                            top: e.top,
                            left: e.left,
                            universeNodeScale: c,
                            earthBgVisible: m,
                          },
                          e.title + t
                        )
                      ),
                  (0, s.jsxs)("div", {
                    className: "world-slider-earth-section",
                    children: [
                      (0, s.jsx)("div", {
                        className: "world-slider-earth-bg",
                        style: {
                          opacity: m ? x : 0,
                          transform: "scale(".concat(y, ")"),
                        },
                      }),
                      (0, s.jsxs)("a", {
                        href: "https://ido.neuralchain.pro",
                        target: "_blank",
                        className: "world-slider-earth-first-screen-node",
                        style: {
                          opacity: 3 === t ? 1 : 0,
                          transform: "scale(".concat(y, ")"),
                        },
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "world-slider-earth-first-screen-node-title",
                            children: "The First AiPP IDO - ",
                          }),
                          (0, s.jsx)(r.default, {
                            className:
                              "world-slider-earth-first-screen-node-logo",
                            src: "/images/world/earth_first_node_logo.svg",
                            alt: "NeuralChain",
                            width: 168,
                            height: 40,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "World.tsx",
                            "data-sentry-element": "Image",
                          }),
                          (0, s.jsx)(r.default, {
                            className:
                              "world-slider-earth-first-screen-node-btn",
                            src: "/images/world/earth_first_node_btn.svg",
                            alt: "NeuralChain",
                            width: 71,
                            height: 32,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "World.tsx",
                            "data-sentry-element": "Image",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "world-slider-earth-node-container",
                        children: j.map((e, a) =>
                          (0, s.jsx)(
                            g,
                            {
                              color: e.color,
                              currentScreen: t,
                              position: { top: e.top, left: e.left },
                              title: e.title,
                              description: e.description,
                              visibleScreens: e.visibleScreens,
                              initialScale: e.initialScale,
                              scale: e.scale,
                              initialOpacity: e.initialOpacity,
                              opacity: e.opacity,
                            },
                            e.title + a
                          )
                        ),
                      }),
                      t >= 6 &&
                        (0, s.jsx)("div", {
                          className:
                            "world-slider-earth-fourth-screen-marker-lines-container",
                          children: (0, s.jsx)(r.default, {
                            className:
                              "world-slider-earth-fourth-screen-marker-lines",
                            src: e
                              ? "/images/world/earth_marker_lines_mobile.svg"
                              : "/images/world/earth_marker_lines.svg",
                            alt: "earth-marker-lines",
                            width: e ? 288 : 1024,
                            height: e ? 412 : 430,
                            style: { opacity: b },
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", { className: "world-slider-item" }),
              (0, s.jsx)("div", { className: "world-slider-item" }),
              (0, s.jsx)("div", { className: "world-slider-item" }),
              (0, s.jsx)("div", { className: "world-slider-item" }),
              (0, s.jsx)("div", { className: "world-slider-item" }),
              (0, s.jsx)("div", { className: "world-slider-item" }),
            ],
          });
        }
        a(8689);
        let x = [
          { image: "/images/teams/logo_google.svg" },
          { image: "/images/teams/logo_deepmind.svg" },
          { image: "/images/teams/logo_meta.svg" },
          { image: "/images/teams/logo_tencent.svg" },
          { image: "/images/teams/logo_apple.svg" },
        ];
        function f(e) {
          return (0, s.jsx)(r.default, {
            className: "team-logo",
            src: e.image,
            alt: "logo",
            width: 140,
            height: 48,
            "data-sentry-element": "Image",
            "data-sentry-component": "TeamLogo",
            "data-sentry-source-file": "Team.tsx",
          });
        }
        function v() {
          return (0, s.jsxs)("div", {
            className: "team-container",
            "data-sentry-component": "Team",
            "data-sentry-source-file": "Team.tsx",
            children: [
              (0, s.jsx)(l.zW, {
                direction: "down",
                damping: 0.5,
                triggerOnce: !0,
                "data-sentry-element": "Fade",
                "data-sentry-source-file": "Team.tsx",
                "data-sentry-element": "Fade",
                children: (0, s.jsxs)("div", {
                  className: "team-header",
                  children: [
                    (0, s.jsx)("div", {
                      className: "team-title",
                      children: "Team",
                    }),
                    (0, s.jsx)("div", {
                      className: "team-description",
                      children:
                        "Our team is composed of an exceptional group of researchers, engineers, and innovators with experience at leading companies like Google, DeepMind, Meta, Apple, Tencent and an ACM-ICPC world champion. Additionally, our members have contributed to the forefront of AI research with publications in top conferences such as Nature, NeurIPS, CVPR, ICCV, ICRA, and IROS.",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "team-logos-container",
                children: (0, s.jsx)(l.zW, {
                  direction: "up",
                  damping: 0.5,
                  triggerOnce: !0,
                  className: "w-full",
                  "data-sentry-element": "Fade",
                  "data-sentry-source-file": "Team.tsx",
                  "data-sentry-element": "Fade",
                  children: (0, s.jsx)("div", {
                    className: "team-logos-list",
                    children: x.map((e) => (0, s.jsx)(f, { ...e }, e.image)),
                  }),
                }),
              }),
            ],
          });
        }
        a(1249);
        let b = [
            {
              img: "/images/insights/insights_1.png",
              title: "What is AMMO?",
              description: "AMMO is all about AI-Human Alignment.",
              buttonText: "Read More",
              link: "",
            },
            {
              img: "/images/insights/insights_2.png",
              title: "Our Mission",
              description: "Build the future of AI-Human connection.",
              buttonText: "Read More",
              link: "",
            },
            {
              img: "/images/insights/insights_3.png",
              title: "Our Vision",
              description: "A Symbiotic Future where AI and Human co-exist.",
              buttonText: "Read More",
              link: "",
            },
          ],
          w = function () {
            return (0, s.jsxs)("div", {
              className: "insights-container",
              "data-sentry-component": "Insights",
              "data-sentry-source-file": "Insights.tsx",
              children: [
                (0, s.jsx)(l.zW, {
                  direction: "down",
                  damping: 0.5,
                  triggerOnce: !0,
                  "data-sentry-element": "Fade",
                  "data-sentry-source-file": "Insights.tsx",
                  "data-sentry-element": "Fade",
                  children: (0, s.jsx)("h2", {
                    className: "insights-title",
                    children: "Latest Insights",
                  }),
                }),
              ],
            });
          };
        var j = a(2010);
        function N() {
          return (0, s.jsxs)("main", {
            className: "main-container",
            "data-sentry-component": "Home",
            "data-sentry-source-file": "page.tsx",
            children: [
              (0, s.jsx)(i.A, {
                "data-sentry-element": "Header",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "Header",
              }),
              (0, s.jsx)(o, {
                "data-sentry-element": "Banner",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "Banner",
              }),
              (0, s.jsx)(m, {
                "data-sentry-element": "AgentVerse",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "AgentVerse",
              }),
              (0, s.jsx)(y, {
                "data-sentry-element": "World",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "World",
              }),
              (0, s.jsx)(v, {
                "data-sentry-element": "Team",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "Team",
              }),
              (0, s.jsx)(w, {
                "data-sentry-element": "Insights",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "Insights",
              }),
              (0, s.jsx)(j.A, {
                "data-sentry-element": "Footer",
                "data-sentry-source-file": "page.tsx",
                "data-sentry-element": "Footer",
              }),
            ],
          });
        }
      },
      1743: () => {},
      6166: () => {},
      7343: () => {},
      1249: () => {},
      8689: () => {},
      2485: () => {},
    },
    (e) => {
      var t = (t) => e((e.s = t));
      e.O(0, [334, 406, 273, 142, 475, 882, 683, 850, 441, 618, 358], () =>
        t(7676)
      ),
        (_N_E = e.O());
    },
  ]);
