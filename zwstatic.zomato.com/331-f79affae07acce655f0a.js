"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [331], {
        "7xh5": (e, n, t) => {
            t.d(n, {
                n: () => p,
                w: () => m
            });
            var r = t("77l8"),
                i = t("/0+J"),
                a = t("Kq5O"),
                l = t.n(a),
                o = t("lXQd"),
                d = t("AdJq"),
                u = t("sLkX"),
                s = t("ZHIB"),
                c = "api_response_error",
                f = "api_response_empty",
                m = function() {
                    var e = (0, i.Z)(l().mark((function e(n, t) {
                        var i, a, m, p, h, v, g, x, E = arguments;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = E.length > 2 && void 0 !== E[2] ? E[2] : "", a = E.length > 3 && void 0 !== E[3] ? E[3] : {}, m = {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        params: (0, r.Z)((0, r.Z)({}, t), {}, {
                                            q: n,
                                            context: i,
                                            searchMetadata: JSON.stringify(a)
                                        })
                                    }, p = {}, h = "", v = !1, e.prev = 6, e.next = 9, (0, u.ZP)(d.EN, m);
                                case 9:
                                    return p = e.sent, e.next = 12, p.json();
                                case 12:
                                    p = e.sent, e.next = 25;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(6), g = e.t0, !e.t0.response) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.next = 21, e.t0.response.text();
                                case 21:
                                    g = e.sent;
                                case 22:
                                    v = !0, h = g;
                                case 25:
                                    return 0 === (x = (0, o.default)(p, "results", [])).length && (0, s.MR)(m.params, v ? c : f, h), e.abrupt("return", {
                                        results: x,
                                        params: {
                                            query: n
                                        }
                                    });
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 15]
                        ])
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                p = function(e) {
                    window.location.href = e
                }
        },
        vVHM: (e, n, t) => {
            t.d(n, {
                II: () => m,
                im: () => c,
                nv: () => f,
                qY: () => s
            });
            var r, i, a, l, o = t("RlfA"),
                d = t("vOnD"),
                u = t("cjht"),
                s = d.default.div(r || (r = (0, o.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 6rem;\n  margin: -1px;\n  margin-right: -0.6rem;\n"]))),
                c = (0, d.default)(u.default)(i || (i = (0, o.Z)(["\n  @media (min-width: 481px) {\n    border-radius: 0.8rem;\n    width: 53rem;\n    height: 100%;\n    display: flex;\n    position: relative;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    border: none;\n    border-radius: 0;\n  }\n"]))),
                f = d.default.div(a || (a = (0, o.Z)(["\n  @media (min-width: 481px) {\n    border-radius: 0.8rem;\n    width: 53rem;\n    height: 100%;\n    display: flex;\n    position: relative;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    border: none;\n    border-radius: 0;\n  }\n"]))),
                m = d.default.input(l || (l = (0, o.Z)(["\n  border: none;\n  font-size: 1.4rem;\n  width: 100%;\n  border-radius: 0.8rem;\n"])))
        },
        WWOB: (e, n, t) => {
            t.d(n, {
                Ob: () => o,
                i: () => d,
                u9: () => u
            });
            var r, i = t("zThL"),
                a = t("8xvU"),
                l = t("VNSe"),
                o = "TRENDING",
                d = "RECENT",
                u = (r = {}, (0, i.Z)(r, o, a.default), (0, i.Z)(r, d, l.default), r)
        },
        Aljr: (e, n, t) => {
            t.d(n, {
                Z: () => T
            });
            var r = t("37Uq"),
                i = t("Vadf"),
                a = t("+9dH"),
                l = t("BkpH"),
                o = t("q1tI"),
                d = t("17x9"),
                u = t.n(d),
                s = t("MKeS"),
                c = t("j399"),
                f = t("lXQd"),
                m = t("HMsx"),
                p = t("wRyO"),
                h = t("eLLh"),
                v = t("8xvU"),
                g = t("P62M"),
                x = t("pJBr"),
                E = t("cHze"),
                b = t("Uq/k"),
                w = t("nZpF"),
                y = t("WWOB"),
                Z = ["entityType", "title", "items"],
                R = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "RestaurantCard"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(9283).then(t.bind(t, "BT5O"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "BT5O"
                    }
                }),
                S = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "DefaultComponent"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(1381).then(t.bind(t, "HF69"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "HF69"
                    }
                }),
                O = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "GroupComponent"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(442).then(t.bind(t, "XJ1A"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "XJ1A"
                    }
                }),
                A = (0, s.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "BlankStateDefaultRail"
                    },
                    isReady: function(e) {
                        var n = this.resolve(e);
                        return !0 === this.resolved[n] && !!t.m[n]
                    },
                    importAsync: function() {
                        return t.e(5684).then(t.bind(t, "cTtr"))
                    },
                    requireAsync: function(e) {
                        var n = this,
                            t = this.resolve(e);
                        return this.resolved[t] = !1, this.importAsync(e).then((function(e) {
                            return n.resolved[t] = !0, e
                        }))
                    },
                    requireSync: function e(n) {
                        var r = this.resolve(n);
                        return t(r)
                    },
                    resolve: function e() {
                        return "cTtr"
                    }
                }),
                _ = function(e, n, t, r, i, d, u, s) {
                    var c = e.entityType,
                        m = e.title,
                        p = void 0 === m ? "" : m,
                        h = e.items,
                        v = void 0 === h ? [] : h,
                        x = (0, l.Z)(e, Z);
                    switch (c) {
                        case b.m3:
                            return d(n === t.parentIndex, n), o.createElement(R, (0, a.Z)({
                                ref: u.current[n],
                                isSelected: n === t.parentIndex,
                                handleOnClick: r,
                                key: n,
                                fallback: o.createElement(E.e, null)
                            }, x));
                        case b.B$:
                        case b.BP:
                        case b.xX:
                        case b.oB:
                            return (0, g.Of)(v) && o.createElement(O, (0, a.Z)({
                                items: v,
                                title: p,
                                parentIndex: n,
                                cursorPosition: t,
                                handleOnClick: r,
                                key: n,
                                elRef: u,
                                updateSelectedElement: d,
                                heading: (0, f.default)(i, "TOP_RESTAURANTS"),
                                isMobile: s,
                                fallback: o.createElement(E.e, null)
                            }, e));
                        case y.Ob:
                        case y.i:
                            return (0, g.Of)(v) && o.createElement(A, {
                                items: v,
                                title: p,
                                parentIndex: n,
                                cursorPosition: t,
                                handleOnClick: r,
                                updateSelectedElement: d,
                                entityType: c
                            });
                        default:
                            return d(n === t.parentIndex, n), o.createElement(S, (0, a.Z)({}, x, {
                                isSelected: n === t.parentIndex,
                                handleOnClick: r,
                                key: n,
                                ref: u.current[n],
                                fallback: o.createElement(E.e, null),
                                isMobile: s
                            }))
                    }
                },
                N = function(e) {
                    var n = e.searchResults,
                        t = e.visible,
                        a = e.popularSearches,
                        l = e.cursorPosition,
                        d = e.showShimmer,
                        u = e.dropdownDefault,
                        s = e.handleOnClick,
                        c = e.locale,
                        p = e.isMobile,
                        v = (0, o.useState)(null),
                        b = (0, i.Z)(v, 2),
                        y = b[0],
                        Z = b[1],
                        R = (0, o.useRef)(),
                        S = (0, o.useRef)(),
                        O = (0, x.Z)(S, 600),
                        A = (0, i.Z)(O, 2),
                        N = A[0],
                        T = A[1];
                    (0, o.useEffect)((function() {
                        T()
                    }), [t, T]);
                    var C = function(e, n) {
                        e && y !== R.current[n] && Z(R.current[n])
                    };
                    (0, o.useEffect)((function() {
                        var e = n.reduce((function(e, n) {
                            var t = n.items,
                                i = void 0 === t ? [] : t;
                            return (0, g.Of)(i) ? [].concat((0, r.Z)(e), (0, r.Z)(i.map((function() {
                                return (0, o.createRef)()
                            })))) : [].concat((0, r.Z)(e), [(0, o.createRef)()])
                        }), []);
                        R.current = e
                    }), [n]), (0, o.useEffect)((function() {
                        if (y && y.current) {
                            var e = {
                                selectedElement: y.current.getBoundingClientRect(),
                                containerBound: S.current.getBoundingClientRect()
                            };
                            e.selectedElement.bottom > e.containerBound.bottom ? S.current.scrollTo({
                                top: S.current.scrollTop + e.selectedElement.top - e.containerBound.top,
                                behavior: "smooth"
                            }) : e.selectedElement.top < e.containerBound.top && S.current.scrollTo({
                                top: S.current.scrollTop - (e.containerBound.top - e.selectedElement.top),
                                behavior: "smooth"
                            })
                        }
                    }), [y]);
                    var D = (0, g.Of)(n) || (0, g.Of)(a) || !u || d;
                    return o.createElement(w.im, {
                        heightFromScreenBottom: N,
                        ref: S,
                        visible: t && D
                    }, d ? o.createElement(E.Z, null) : (0, g.Of)(n) ? n.map((function(e, n) {
                        return _(e, n, l, s, c, C, R, p)
                    })) : u ? (0, g.Of)(a) ? o.createElement(o.Fragment, null, o.createElement(w.ej, null, (0, f.default)(c, "TRENDING_SEARCHES")), o.createElement(h.default, {
                        gap: 5
                    }, a.map((function(e, n) {
                        return o.createElement(h.default.Item, {
                            colD: 6,
                            colM: 6
                        }, o.createElement(w.lx, {
                            isSelected: n === l.parentIndex,
                            onClick: s({
                                url: e.redirect_url,
                                title: e.keyword,
                                urlWithHost: !0
                            })
                        }, o.createElement(k, {
                            name: e.keyword
                        })))
                    })))) : null : o.createElement(w.xM, null, o.createElement(w._B, {
                        color: m.default.z500,
                        size: "1.6rem",
                        fontWeight: "500"
                    }, "Oops!"), o.createElement(w._B, {
                        color: m.default.z500,
                        size: "1.3rem",
                        fontWeight: "400"
                    }, (0, f.default)(c, "NO_SEARCH_RESULT_FOUND"))))
                },
                k = function(e) {
                    var n = e.name;
                    return o.createElement(w.fk, null, o.createElement(v.default, {
                        size: 18,
                        color: p.default.z500
                    }), o.createElement(w.kr, null, n))
                };
            k.propTypes = {
                name: u().string.isRequired
            }, N.propTypes = {
                searchResults: u().arrayOf(u().objectOf),
                popularSearches: u().arrayOf(u().object),
                visible: u().bool,
                cursorPosition: u().shape({
                    parentIndex: u().number,
                    childIndex: u().number
                }),
                showShimmer: u().bool,
                dropdownDefault: u().bool,
                handleOnClick: u().func,
                locale: u().shape({
                    NO_SEARCH_RESULT_FOUND: u().string,
                    TRENDING_SEARCHES: u().string,
                    NO_TRENDING_SEARCH: u().string,
                    TOP_RESTAURANTS: u().string
                }),
                isMobile: u().bool
            }, N.defaultProps = {
                searchResults: [],
                popularSearches: [],
                visible: !1,
                cursorPosition: {},
                showShimmer: !1,
                dropdownDefault: !0,
                handleOnClick: c.default,
                locale: {},
                isMobile: !1
            };
            const T = (0, o.memo)(N, g.Uh)
        },
        DeNg: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t("TRpf"),
                i = t("lXQd"),
                a = t("Aljr");
            const l = (0, r.$j)((function(e) {
                return {
                    isMobile: !!(0, i.default)(e, "pages.current.isMobile")
                }
            }))(a.Z)
        },
        cHze: (e, n, t) => {
            t.d(n, {
                Z: () => Z,
                e: () => g
            });
            var r, i, a, l, o, d, u = t("RlfA"),
                s = t("q1tI"),
                c = t("17x9"),
                f = t.n(c),
                m = t("vOnD"),
                p = t("CII1"),
                h = t("BAyj"),
                v = function() {
                    return s.createElement(y, null, (0, p.default)(0, 6).map((function(e) {
                        return s.createElement(g, {
                            ind: e
                        })
                    })))
                },
                g = function(e) {
                    var n = e.ind;
                    return s.createElement(b, {
                        key: n
                    }, s.createElement(x, {
                        height: "7rem",
                        width: "7rem"
                    }), s.createElement(w, null, s.createElement(E, {
                        width: "10rem",
                        height: "2rem"
                    }), s.createElement(h.default, {
                        width: "20rem",
                        height: "2rem"
                    })))
                };
            g.propTypes = {
                ind: f().number.isRequired
            };
            var x = (0, m.default)(h.default)(r || (r = (0, u.Z)(["\n  border-radius: 50%;\n  @media (max-width: 480px) {\n    height: 5rem;\n    width: 5rem;\n  }\n"]))),
                E = (0, m.default)(h.default)(i || (i = (0, u.Z)(["\n  margin-bottom: 1rem;\n  @media (max-width: 480px) {\n    width: 70%;\n  }\n"]))),
                b = m.default.div(a || (a = (0, u.Z)(["\n  display: flex;\n  padding: 1rem 0;\n  @media (max-width: 480px) {\n    padding: 1.5rem 0;\n  }\n"]))),
                w = m.default.div(l || (l = (0, u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 1rem;\n  @media (max-width: 480px) {\n    flex-grow: 1;\n  }\n"]))),
                y = m.default.div(o || (o = (0, u.Z)(["\n  padding: 0 1.6rem;\n  @media (max-width: 480px) {\n    padding: 0;\n    width: 100%;\n    margin-top: 2rem;\n  }\n"])));
            v.Wrapper = m.default.div(d || (d = (0, u.Z)(["\n  margin-top: 3rem;\n"])));
            const Z = v
        },
        nZpF: (e, n, t) => {
            t.d(n, {
                A0: () => oe,
                Dx: () => M,
                Iq: () => se,
                Nx: () => de,
                ON: () => F,
                QE: () => W,
                Sn: () => J,
                W2: () => ae,
                Yo: () => L,
                _B: () => $,
                ej: () => re,
                ez: () => U,
                f$: () => q,
                fk: () => ee,
                gn: () => X,
                im: () => ne,
                kr: () => Y,
                lC: () => ie,
                lx: () => Q,
                pF: () => le,
                sg: () => G,
                x1: () => te,
                xM: () => V,
                xN: () => ue,
                yS: () => K,
                zg: () => j
            });
            var r, i, a, l, o, d, u, s, c, f, m, p, h, v, g, x, E, b, w, y, Z, R, S, O, A, _, N, k, T = t("RlfA"),
                C = t("vOnD"),
                D = t("HMsx"),
                z = t("hkzt"),
                H = t("LSsp"),
                B = t("lFeK"),
                I = t("wcxm"),
                P = t("kdDk"),
                q = C.default.div(r || (r = (0, T.Z)(["\n  display: flex;\n  position: relative;\n  background: ", ";\n  :hover {\n    background: ", ";\n  }\n  padding: ", ";\n  box-shadow: ", ";\n  @media (max-width: 480px) {\n    padding: 1rem 0;\n  }\n  filter: ", ";\n"])), (function(e) {
                    return e.isSelected ? z.default.z100 : H.default
                }), D.default.z100, (function(e) {
                    var n = e.showOld;
                    return "".concat(n ? 1.1 : 1.5, "rem 1.4rem")
                }), (function(e) {
                    return e.showOld ? "inset 0px -0.5px 0px ".concat(D.default.z200) : "none"
                }), (function(e) {
                    return e.isDisabled ? "grayscale(1) opacity(0.5);" : "none"
                })),
                L = (0, C.default)(B.default)(i || (i = (0, T.Z)(["\n  border-radius: 0.8rem;\n  flex-shrink: 0;\n  cursor: pointer;\n  top: 0.4rem;\n"]))),
                U = C.default.div(a || (a = (0, T.Z)(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  padding-left: 1.5rem;\n  width: 100%;\n  flex-shrink: 1;\n"]))),
                j = (0, C.default)(U)(l || (l = (0, T.Z)(["\n  padding-top: 0.5rem;\n"]))),
                M = (0, C.default)(I.P)(o || (o = (0, T.Z)(["\n  font-size: ", ";\n  font-weight: 500;\n  text-align: left;\n  width: 85%;\n"])), (function(e) {
                    return e.size ? e.size : "1.6rem"
                })),
                F = (0, C.default)(M)(d || (d = (0, T.Z)(["\n  color: ", ";\n  font-size: 1.4rem;\n"])), D.default.z700),
                W = (0, C.default)(I.P)(u || (u = (0, T.Z)(["\n  text-align: left;\n"]))),
                G = (0, C.default)(P.default)(s || (s = (0, T.Z)(["\n  ", ";\n  & > span {\n    padding: 0;\n    margin-bottom: -0.7rem;\n  }\n\n  @media (max-width: 480px) {\n    span {\n      font-size: 1.2rem;\n    }\n  }\n"])), (function(e) {
                    return e.showOld ? "" : (0, C.css)(c || (c = (0, T.Z)(["\n          min-height: 2rem;\n          & > span {\n            min-height: 2rem;\n            line-height: 2rem;\n          }\n        "])))
                })),
                K = C.default.div(f || (f = (0, T.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  flex-wrap: wrap;\n"]))),
                X = C.default.div(m || (m = (0, T.Z)([""]))),
                J = (0, C.default)(P.default)(p || (p = (0, T.Z)(["\n  cursor: pointer;\n  position: absolute;\n  bottom: 1.9rem;\n  right: 0;\n"]))),
                Q = C.default.div(h || (h = (0, T.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  background: ", ";\n  :hover {\n    background: ", ";\n  }\n  padding-left: 1.4rem;\n\n  @media (max-width: 480px) {\n    padding: 0;\n  }\n"])), (function(e) {
                    return e.isSelected ? z.default.z100 : H.default
                }), D.default.z100),
                V = C.default.div(v || (v = (0, T.Z)(["\n  padding-left: 1.6rem;\n  @media (max-width: 480px) {\n    padding: 0;\n    margin-top: 2rem;\n  }\n"]))),
                $ = (0, C.default)(I.P)(g || (g = (0, T.Z)(["\n  font-weight: ", ";\n"])), (function(e) {
                    return e.fontWeight ? e.fontWeight : 500
                })),
                Y = C.default.span(x || (x = (0, T.Z)(["\n  font-size: 1.6rem;\n  line-height: 2.4rem;\n  color: ", ";\n  margin-left: 1rem;\n  font-weight: 400;\n  width: 17rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), D.default.z900),
                ee = C.default.div(E || (E = (0, T.Z)(["\n  display: flex;\n  cursor: pointer;\n  padding: 0.5rem 0;\n"]))),
                ne = C.default.div(b || (b = (0, T.Z)(["\n  width: 100%;\n  background: ", ";\n  z-index: 10;\n\n  @media (min-width: 481px) {\n    max-height: ", ";\n    border-radius: 0.8rem;\n    position: absolute;\n    overflow: auto;\n    top: ", ";\n    visibility: ", ";\n    opacity: ", ";\n    border: 1px solid ", ";\n    box-shadow: 0px 2px 8px rgba(28, 28, 28, 0.08);\n    transition: opacity 0.25s ease, top 0.25s ease;\n    padding: 1.6rem 0;\n  }\n"])), H.default, (function(e) {
                    var n = e.heightFromScreenBottom;
                    return !n || n >= 600 ? "60rem" : "".concat(n, "px")
                }), (function(e) {
                    return e.visible ? "6rem" : "3rem"
                }), (function(e) {
                    return e.visible ? "visible" : "hidden"
                }), (function(e) {
                    return e.visible ? 1 : 0
                }), D.default.z300),
                te = C.default.div(w || (w = (0, T.Z)(["\n  width: 100%;\n  margin-top: 0.7rem;\n  border-bottom: 1px solid ", ";\n"])), D.default.z200),
                re = (C.default.div(y || (y = (0, T.Z)([""]))), C.default.p(Z || (Z = (0, T.Z)(["\n  font-size: 1.4rem;\n  line-height: 2.1rem;\n  color: ", ";\n  text-align: left;\n  padding: 0 1.6rem;\n\n  @media (max-width: 480px) {\n    padding: 0;\n  }\n"])), D.default.z500)),
                ie = (0, C.default)(P.default)(R || (R = (0, T.Z)(["\n  cursor: pointer;\n  position: absolute;\n  right: -1.6rem;\n  top: -0.6rem;\n"]))),
                ae = C.default.div(S || (S = (0, T.Z)(["\n  position: relative;\n"]))),
                le = C.default.div(O || (O = (0, T.Z)(["\n  padding: 1.1rem 1.4rem;\n  @media (max-width: 480px) {\n    padding: 1rem 0;\n  }\n"]))),
                oe = C.default.div(A || (A = (0, T.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),
                de = (0, C.default)(P.default)(_ || (_ = (0, T.Z)(["\n  width: ", ";\n"])), (function(e) {
                    return e.fullWidth ? "100%" : "calc(50% - 3px)"
                })),
                ue = (0, C.default)(I.P)(N || (N = (0, T.Z)(["\n  padding: 0rem 0rem 1rem 0;\n  font-weight: 500;\n  font-size: 1.5rem;\n"]))),
                se = (0, C.default)(I.P)(k || (k = (0, T.Z)(["\n  font-weight: 500;\n  text-align: left;\n"])))
        },
        pJBr: (e, n, t) => {
            t.d(n, {
                Z: () => l
            });
            var r = t("Vadf"),
                i = t("q1tI"),
                a = t("lXQd");
            const l = function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 450,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50,
                    l = (0, i.useState)(n),
                    o = (0, r.Z)(l, 2),
                    d = o[0],
                    u = o[1];
                (0, i.useEffect)((function() {
                    u(n)
                }), [n]);
                var s = (0, i.useCallback)((function() {
                    var r = (0, a.default)(window, "document.documentElement.clientHeight", 0),
                        i = 0;
                    e.current && (i = e.current.getBoundingClientRect().top);
                    var l = r - i - t;
                    u(l <= 0 ? n : l)
                }), [e, t]);
                return [d, s]
            }
        },
        r6rq: (e, n, t) => {
            t.d(n, {
                C: () => a
            });
            var r = t("lXQd"),
                i = t("WHL/"),
                a = function(e) {
                    return {
                        popularSearches: (0, r.default)(e, "location.popularSearches", []),
                        currentLocation: (0, r.default)(e, "location.currentLocation", {}),
                        isPartnershipFlow: (0, i.ZP)((0, r.default)(e, "pages.current.name", "")),
                        locale: {
                            NO_SEARCH_RESULT_FOUND: (0, r.default)(e, "langKeys.NO_SEARCH_RESULT_FOUND", ""),
                            TRENDING_SEARCHES: (0, r.default)(e, "langKeys.TRENDING_SEARCHES", ""),
                            NO_TRENDING_SEARCH: (0, r.default)(e, "langKeys.NO_TRENDING_SEARCH", ""),
                            TOP_RESTAURANTS: (0, r.default)(e, "langKeys.TOP_RESTAURANTS", ""),
                            SEARCH_PLACEHOLDER: (0, r.default)(e, "langKeys.SEARCH_PLACEHOLDER", "")
                        }
                    }
                }
        }
    }
]);