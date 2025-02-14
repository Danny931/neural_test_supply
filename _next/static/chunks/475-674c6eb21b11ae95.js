"use strict";
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
      (e._sentryDebugIds[t] = "38892000-93c7-4787-bace-9babcd8d2ac2"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-38892000-93c7-4787-bace-9babcd8d2ac2"));
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
        (e._sentryDebugIds[t] = "38892000-93c7-4787-bace-9babcd8d2ac2"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-38892000-93c7-4787-bace-9babcd8d2ac2"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [475],
    {
      9475: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return y;
            },
          });
        let r = n(7424),
          u = n(5155),
          o = r._(n(4496)),
          l = n(9630),
          f = n(1112),
          c = n(678),
          a = n(2175),
          d = n(3771),
          i = n(1248),
          s = n(4706);
        function p(e, t, n) {
          "undefined" != typeof window &&
            (async () => e.prefetch(t, n))().catch((e) => {});
        }
        function b(e) {
          return "string" == typeof e ? e : (0, l.formatUrl)(e);
        }
        n(1637);
        let y = o.default.forwardRef(function (e, t) {
          let n, r;
          let {
            href: l,
            as: y,
            children: g,
            prefetch: _ = null,
            passHref: h,
            replace: v,
            shallow: M,
            scroll: w,
            onClick: j,
            onMouseEnter: I,
            onTouchStart: k,
            legacyBehavior: m = !1,
            ...O
          } = e;
          (n = g),
            m &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = (0, u.jsx)("a", { children: n }));
          let C = o.default.useContext(f.AppRouterContext),
            E = !1 !== _,
            P = null === _ ? a.PrefetchKind.AUTO : a.PrefetchKind.FULL,
            { href: R, as: x } = o.default.useMemo(() => {
              let e = b(l);
              return { href: e, as: y ? b(y) : e };
            }, [l, y]),
            D = o.default.useRef(R),
            T = o.default.useRef(x);
          m && (r = o.default.Children.only(n));
          let K = m ? r && "object" == typeof r && r.ref : t,
            [S, A, U] = (0, c.useIntersection)({ rootMargin: "200px" }),
            N = o.default.useCallback(
              (e) => {
                (T.current !== x || D.current !== R) &&
                  (U(), (T.current = x), (D.current = R)),
                  S(e);
              },
              [x, R, U, S]
            ),
            L = (0, d.useMergedRef)(N, K);
          o.default.useEffect(() => {
            C && A && E && p(C, R, { kind: P });
          }, [x, R, A, E, C, P]);
          let q = {
            ref: L,
            onClick(e) {
              m || "function" != typeof j || j(e),
                m &&
                  r.props &&
                  "function" == typeof r.props.onClick &&
                  r.props.onClick(e),
                C &&
                  !e.defaultPrevented &&
                  (function (e, t, n, r, u, l, f) {
                    let { nodeName: c } = e.currentTarget;
                    ("A" === c.toUpperCase() &&
                      (function (e) {
                        let t = e.currentTarget.getAttribute("target");
                        return (
                          (t && "_self" !== t) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e)) ||
                      (e.preventDefault(),
                      o.default.startTransition(() => {
                        let e = null == f || f;
                        "beforePopState" in t
                          ? t[u ? "replace" : "push"](n, r, {
                              shallow: l,
                              scroll: e,
                            })
                          : t[u ? "replace" : "push"](r || n, { scroll: e });
                      }));
                  })(e, C, R, x, v, M, w);
            },
            onMouseEnter(e) {
              m || "function" != typeof I || I(e),
                m &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                C && E && p(C, R, { kind: P });
            },
            onTouchStart: function (e) {
              m || "function" != typeof k || k(e),
                m &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                C && E && p(C, R, { kind: P });
            },
          };
          return (
            (0, i.isAbsoluteUrl)(x)
              ? (q.href = x)
              : (m && !h && ("a" !== r.type || "href" in r.props)) ||
                (q.href = (0, s.addBasePath)(x)),
            m
              ? o.default.cloneElement(r, q)
              : (0, u.jsx)("a", { ...O, ...q, children: n })
          );
        });
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      678: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function () {
              return c;
            },
          });
        let r = n(4496),
          u = n(4589),
          o = "function" == typeof IntersectionObserver,
          l = new Map(),
          f = [];
        function c(e) {
          let { rootRef: t, rootMargin: n, disabled: c } = e,
            a = c || !o,
            [d, i] = (0, r.useState)(!1),
            s = (0, r.useRef)(null),
            p = (0, r.useCallback)((e) => {
              s.current = e;
            }, []);
          return (
            (0, r.useEffect)(() => {
              if (o) {
                if (a || d) return;
                let e = s.current;
                if (e && e.tagName)
                  return (function (e, t, n) {
                    let {
                      id: r,
                      observer: u,
                      elements: o,
                    } = (function (e) {
                      let t;
                      let n = {
                          root: e.root || null,
                          margin: e.rootMargin || "",
                        },
                        r = f.find(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                      if (r && (t = l.get(r))) return t;
                      let u = new Map();
                      return (
                        (t = {
                          id: n,
                          observer: new IntersectionObserver((e) => {
                            e.forEach((e) => {
                              let t = u.get(e.target),
                                n = e.isIntersecting || e.intersectionRatio > 0;
                              t && n && t(n);
                            });
                          }, e),
                          elements: u,
                        }),
                        f.push(n),
                        l.set(n, t),
                        t
                      );
                    })(n);
                    return (
                      o.set(e, t),
                      u.observe(e),
                      function () {
                        if ((o.delete(e), u.unobserve(e), 0 === o.size)) {
                          u.disconnect(), l.delete(r);
                          let e = f.findIndex(
                            (e) => e.root === r.root && e.margin === r.margin
                          );
                          e > -1 && f.splice(e, 1);
                        }
                      }
                    );
                  })(e, (e) => e && i(e), {
                    root: null == t ? void 0 : t.current,
                    rootMargin: n,
                  });
              } else if (!d) {
                let e = (0, u.requestIdleCallback)(() => i(!0));
                return () => (0, u.cancelIdleCallback)(e);
              }
            }, [a, n, t, d, s.current]),
            [
              p,
              d,
              (0, r.useCallback)(() => {
                i(!1);
              }, []),
            ]
          );
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      3771: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "useMergedRef", {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let r = n(4496);
        function u(e, t) {
          let n = (0, r.useRef)(() => {}),
            u = (0, r.useRef)(() => {});
          return (0, r.useMemo)(
            () =>
              e && t
                ? (r) => {
                    null === r
                      ? (n.current(), u.current())
                      : ((n.current = o(e, r)), (u.current = o(t, r)));
                  }
                : e || t,
            [e, t]
          );
        }
        function o(e, t) {
          if ("function" != typeof e)
            return (
              (e.current = t),
              () => {
                e.current = null;
              }
            );
          {
            let n = e(t);
            return "function" == typeof n ? n : () => e(null);
          }
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
    },
  ]);
