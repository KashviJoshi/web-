"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [374], {
        cjht: (e, t, r) => {
            var n = r("JMD1"),
                o = r("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(r("pP/M")),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var r = f(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r("q1tI")),
                i = n(r("17x9")),
                l = n(r("vOnD")),
                d = n(r("j399"));

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (f = function(e) {
                    return e ? r : t
                })(e)
            }
            var c = function e(t) {
                var r = (0, u.useRef)(),
                    n = t.handleClickOutside,
                    o = t.removeHandler;
                return (0, u.useEffect)((function() {
                    if ("function" == typeof n && !o) {
                        var e = function(e) {
                            r.current && r.current.contains(e.target) || n(e)
                        };
                        return document.addEventListener("mousedown", e),
                            function() {
                                document.removeEventListener("mousedown", e)
                            }
                    }
                    return d.default
                }), [n, o]), u.default.createElement(e.Wrapper, (0, a.default)({}, t, {
                    ref: r
                }), t.children)
            };
            c.Wrapper = l.default.div.withConfig({
                componentId: "sc-18n4g8v-0"
            })(["width:", ";"], (function(e) {
                return e.width ? e.width : "max-content"
            })), c.propTypes = {
                width: i.default.string,
                children: i.default.node,
                handleClickOutside: i.default.func.isRequired,
                removeHandler: i.default.bool
            }, c.defaultProps = {
                removeHandler: !1
            };
            var s = c;
            t.default = s
        },
        PQmA: (e, t, r) => {
            var n = r("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(r("pP/M")),
                a = n(r("q1tI")),
                u = n(r("w/pp")),
                i = n(r("6jlT")),
                l = function(e) {
                    var t = (0, i.default)();
                    return a.default.createElement(u.default, (0, o.default)({
                        uniqueId: t
                    }, e), a.default.createElement("title", null, "chevron-down"), a.default.createElement("path", {
                        d: "M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"
                    }))
                };
            t.default = l
        },
        "44J2": (e, t, r) => {
            var n = r("JMD1"),
                o = r("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(r("watF")),
                u = n(r("UNXm")),
                i = y(r("q1tI")),
                l = n(r("17x9")),
                d = y(r("vOnD")),
                f = n(r("cjht")),
                c = n(r("PQmA")),
                s = n(r("HMsx")),
                p = r("fHDd"),
                g = r("GrVj"),
                v = n(r("xQ7Z")),
                m = n(r("lFeK"));

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (h = function(e) {
                    return e ? r : t
                })(e)
            }

            function y(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var r = h(t);
                if (r && r.has(e)) return r.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var u in e)
                    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                        var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]
                    }
                return n.default = e, r && r.set(e, n), n
            }

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        (0, a.default)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var O = function e(t) {
                    t.country;
                    var r = t.code,
                        n = t.countries,
                        o = t.selectCountry,
                        a = t.showMenu,
                        l = t.setShowMenu,
                        d = t.focusOnInput,
                        c = t.countryFlagImgUrl,
                        s = (0, i.useState)(0),
                        m = (0, u.default)(s, 2),
                        h = m[0],
                        y = m[1],
                        w = function() {
                            l(!1), y(0)
                        },
                        b = function(e) {
                            return function() {
                                o(e), w(), d()
                            }
                        },
                        O = (0, g.isOldLoginInputVersion)(n) ? Object.keys(n).length : n.length,
                        I = (0, i.useRef)(),
                        P = function(e) {
                            if (I.current && O) {
                                var t = I.current,
                                    r = t.scrollHeight,
                                    n = void 0 === r ? 0 : r,
                                    o = t.scrollTop,
                                    a = void 0 === o ? 0 : o,
                                    u = t.clientHeight,
                                    i = void 0 === u ? 0 : u,
                                    l = n / O,
                                    d = (h + 1) * l;
                                "up" === e ? d > i && (I.current.scrollTop = a - l) : d > i && (I.current.scrollTop = a + l)
                            }
                        },
                        k = (0, g.isOldLoginInputVersion)(n) && n ? Object.keys(n).map((function(e, t) {
                            return i.default.createElement(C, {
                                key: e,
                                country: e,
                                code: n[e],
                                onClick: b(e),
                                isKeySelected: t === h - 1
                            })
                        })) : n.map((function(e, t) {
                            return i.default.createElement(v.default, {
                                key: e.countryId,
                                country: e.name,
                                isdCode: e.isdCode,
                                flagImgUrl: e.flagImgUrl,
                                onClick: b(e),
                                isKeySelected: t === h - 1
                            })
                        }));
                    return i.default.createElement(f.default, {
                        handleClickOutside: w
                    }, i.default.createElement(e.Wrapper, {
                        onKeyDown: (0, p.onKeyChoose)((function(e, t) {
                            if (e.preventDefault(), a && O) {
                                switch (t) {
                                    case "UP":
                                        h ? 1 !== h && y(h - 1) : y(1), P("up");
                                        break;
                                    case "DOWN":
                                        h || y(1), h !== O && y(h + 1), P("down");
                                        break;
                                    case "ENTER":
                                        ! function() {
                                            if (h) {
                                                if ((0, g.isOldLoginInputVersion)(n)) {
                                                    var e = Object.keys(n)[h - 1];
                                                    o(e)
                                                } else {
                                                    var t = n[h - 1];
                                                    o(t)
                                                }
                                                y(0), w(), d()
                                            }
                                        }()
                                }
                            }
                        })),
                        tabIndex: "0",
                        onFocus: function() {
                            return l(!0)
                        },
                        onClick: function(e) {
                            return e.stopPropagation()
                        }
                    }, i.default.createElement(e.Head, {
                        onMouseDown: function() {
                            return l(!a)
                        }
                    }, i.default.createElement(j, {
                        countryFlag: c,
                        code: r
                    }), i.default.createElement(M, {
                        size: 16,
                        menuOpen: a
                    }), i.default.createElement(x, null)), a && i.default.createElement(e.Menu, {
                        isNewVersion: !(0, g.isOldLoginInputVersion)(n),
                        ref: I
                    }, k)))
                },
                I = (0, d.default)(m.default).withConfig({
                    componentId: "sc-1rq4z74-0"
                })(["margin-right:0.5rem;"]),
                j = function e(t) {
                    var r = t.code,
                        n = t.countryFlag;
                    return i.default.createElement(e.Wrapper, t, n && i.default.createElement(I, {
                        alt: "flag",
                        height: "2rem",
                        width: "2.3rem",
                        src: n,
                        fit: "contain"
                    }), i.default.createElement(O.ISD, null, "+", r))
                };
            j.Wrapper = d.default.div.withConfig({
                componentId: "sc-1rq4z74-1"
            })(["display:flex;align-items:center;min-height:3rem;"]), j.propTypes = {
                code: l.default.oneOfType([l.default.string, l.default.number])
            };
            var C = (0, d.default)(j).withConfig({
                    componentId: "sc-1rq4z74-2"
                })(["width:100%;padding:0 0.8rem;cursor:pointer;text-align:right;justify-content:space-between;", ":hover{background:", ";}"], (function(e) {
                    return e.isKeySelected && (0, d.css)(["background:", ";"], s.default.z200)
                }), s.default.z200),
                M = (0, d.default)(c.default).withConfig({
                    componentId: "sc-1rq4z74-3"
                })(["margin:0.4rem 0 0 0.2rem;transition:0.2s ease transform;transform:rotate(", ");"], (function(e) {
                    return e.menuOpen ? "180deg" : 0
                })),
                x = d.default.span.withConfig({
                    componentId: "sc-1rq4z74-4"
                })(["width:0;height:2.4rem;border-right:1px solid #cfcfcf;margin-left:1rem;"]);
            O.propTypes = b(b({}, j.propTypes), {}, {
                countries: l.default.object,
                selectCountry: l.default.func.isRequired
            }), O.defaultProps = {
                countries: null
            }, O.Head = d.default.div.withConfig({
                componentId: "sc-1rq4z74-5"
            })(["position:relative;display:flex;align-items:center;cursor:pointer;"]), O.Menu = d.default.div.withConfig({
                componentId: "sc-1rq4z74-6"
            })(["position:absolute;top:4rem;padding:0.8rem 0;width:", ";margin-left:-0.8rem;max-height:20rem;background:#fff;overflow-y:auto;border-radius:6px;box-shadow:0px 2px 8px rgba(28,28,28,0.15);z-index:10;user-select:none;background:#fff;"], (function(e) {
                return e.isNewVersion ? "25rem" : "calc(100% + 0.8rem)"
            })), O.Wrapper = d.default.div.withConfig({
                componentId: "sc-1rq4z74-7"
            })(["margin-right:1rem;position:relative;"]), O.ISD = d.default.span.withConfig({
                componentId: "sc-1rq4z74-8"
            })(["font-size:1.6rem;color:#1c1c1c;min-width:4rem;text-align:right;"]);
            var P = O;
            t.default = P
        },
        "8Gu5": (e, t, r) => {
            var n = r("JMD1"),
                o = r("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(r("pP/M")),
                u = n(r("UNXm")),
                i = n(r("rS1O")),
                l = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var r = m(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r("q1tI")),
                d = n(r("44J2")),
                f = n(r("j399")),
                c = n(r("lXQd")),
                s = n(r("17x9")),
                p = r("T5Y+"),
                g = r("GrVj"),
                v = ["width", "placeholder", "onChange", "fnCountryChange", "errorText", "defaultIsdCode", "countries", "onFocus", "isNakedInMobile", "autoFocusInput"];

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (m = function(e) {
                    return e ? r : t
                })(e)
            }
            var h = function(e) {
                var t = e.width,
                    r = void 0 === t ? "" : t,
                    n = e.placeholder,
                    o = void 0 === n ? "type here..." : n,
                    s = e.onChange,
                    m = void 0 === s ? f.default : s,
                    h = e.fnCountryChange,
                    y = void 0 === h ? f.default : h,
                    w = e.errorText,
                    b = void 0 === w ? "" : w,
                    O = e.defaultIsdCode,
                    I = e.countries,
                    j = e.onFocus,
                    C = e.isNakedInMobile,
                    M = e.autoFocusInput,
                    x = (0, i.default)(e, v),
                    P = (0, l.useState)(O),
                    k = (0, u.default)(P, 2),
                    E = k[0],
                    D = k[1],
                    _ = (0, l.useState)(function(e, t) {
                        if (!(t && e && Array.isArray(e) && e.length)) return "";
                        var r = e.find((function(e) {
                            return e.isdCode === String(t)
                        }));
                        return r && r.flagImgUrl ? r.flagImgUrl : ""
                    }(I, O)),
                    z = (0, u.default)(_, 2),
                    W = z[0],
                    S = z[1],
                    T = (0, l.useState)(!1),
                    q = (0, u.default)(T, 2),
                    F = q[0],
                    N = q[1],
                    L = (0, l.useRef)(),
                    U = function() {
                        return L && L.current && L.current.focus()
                    };
                (0, l.useEffect)((function() {
                    M && U()
                }), [M, L]);
                return l.default.createElement(l.default.Fragment, null, l.default.createElement(p.Container, (0, a.default)({
                    width: r
                }, x), l.default.createElement(p.InputWrapper, {
                    isNakedInMobile: C,
                    onClick: U,
                    isError: b
                }, l.default.createElement(d.default, {
                    countryFlagImgUrl: W,
                    code: E,
                    selectCountry: function(e) {
                        if ((0, g.isOldLoginInputVersion)(I)) D(I[e]), S((0, c.default)(e, "flagImgUrl", "")), y(I[e]);
                        else {
                            var t = (0, c.default)(e, "isdCode", "");
                            D(t), S((0, c.default)(e, "flagImgUrl", "")), y(e)
                        }
                    },
                    countries: I,
                    showMenu: F,
                    setShowMenu: N,
                    focusOnInput: U
                }), l.default.createElement(p.Input, (0, a.default)({}, e, {
                    ref: L,
                    placeholder: o,
                    onChange: function(e) {
                        var t = e.target.value || "";
                        m(t, e)
                    },
                    isError: b,
                    onFocus: function(e) {
                        j(e), N(!1)
                    }
                })))), l.default.createElement(p.ErrorText, {
                    isError: b
                }, b))
            };
            h.propTypes = {
                autoFocusInput: s.default.bool,
                width: s.default.string,
                placeholder: s.default.string,
                onChange: s.default.func.isRequired,
                fnCountryChange: s.default.func.isRequired,
                value: s.default.string,
                errorText: s.default.string,
                defaultIsdCode: s.default.number,
                countries: s.default.oneOfType([s.default.object, s.default.arrayOf(s.default.shape({
                    countryId: s.default.string,
                    name: s.default.string,
                    isdCode: s.default.string,
                    flagImgUrl: s.default.string
                }))]),
                onFocus: s.default.func,
                isNakedInMobile: s.default.bool
            }, h.defaultProps = {
                countries: g.defaultCountries,
                defaultIsdCode: 91,
                onFocus: f.default,
                isNakedInMobile: !1,
                autoFocusInput: !1
            };
            var y = h;
            t.default = y
        },
        B5Y0: (e, t, r) => {
            var n = r("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(r("rS1O")),
                a = n(r("q1tI")),
                u = n(r("17x9")),
                i = r("6zk0"),
                l = ["country", "isdCode", "flagImgUrl"],
                d = function(e) {
                    var t = e.country,
                        r = e.isdCode,
                        n = e.flagImgUrl,
                        u = (0, o.default)(e, l);
                    return a.default.createElement(i.Wrapper, u, a.default.createElement(i.ImageNameWrapper, null, a.default.createElement(i.StyledFlag, {
                        alt: "".concat(t, "-flag"),
                        height: "2rem",
                        width: "3rem",
                        src: n,
                        fit: "contain"
                    }), a.default.createElement(i.CountryText, null, t)), a.default.createElement(i.ISDCode, {
                        isKeySelected: u.isKeySelected
                    }, "+", r))
                };
            d.propTypes = {
                country: u.default.string.isRequired,
                isdCode: u.default.string.isRequired,
                flagImgUrl: u.default.string.isRequired
            };
            var f = d;
            t.default = f
        },
        xQ7Z: (e, t, r) => {
            var n = r("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(r("B5Y0")).default;
            t.default = o
        },
        "6zk0": (e, t, r) => {
            var n = r("JMD1"),
                o = r("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Wrapper = t.StyledFlag = t.ImageNameWrapper = t.ISDCode = t.CountryText = void 0;
            var a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var r = d(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r("vOnD")),
                u = n(r("lFeK")),
                i = n(r("LSsp")),
                l = n(r("HMsx"));

            function d(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (d = function(e) {
                    return e ? r : t
                })(e)
            }
            var f = a.default.p.withConfig({
                componentId: "sc-z0j6xu-0"
            })(["text-align:right;font-size:1.4rem;font-weight:500;margin:0;padding:0 0 0 0.5rem;width:5rem;flex-shrink:0;flex-grow:0;border-left:0.1rem solid ", ";"], (function(e) {
                return e.isKeySelected ? i.default : l.default.z200
            }));
            t.ISDCode = f;
            var c = a.default.p.withConfig({
                componentId: "sc-z0j6xu-1"
            })(["font-size:1.4rem;margin:0;padding:0;line-height:1.5;color:", ";text-overflow:ellipsis;white-space:nowrap;width:14rem;overflow:hidden;"], l.default.z800);
            t.CountryText = c;
            var s = a.default.div.withConfig({
                componentId: "sc-z0j6xu-2"
            })(["display:flex;justify-content:space-between;align-items:center;min-height:3rem;padding:0.7rem 0.8rem;width:100%;cursor:pointer;", ":hover{background:", ";}:hover p{border-color:", ";}"], (function(e) {
                return e.isKeySelected && (0, a.css)(["background:", ";"], l.default.z200)
            }), l.default.z200, i.default);
            t.Wrapper = s;
            var p = (0, a.default)(u.default).withConfig({
                componentId: "sc-z0j6xu-3"
            })(["margin-right:1rem;"]);
            t.StyledFlag = p;
            var g = a.default.div.withConfig({
                componentId: "sc-z0j6xu-4"
            })(["display:flex;align-items:center;width:18rem;flex-shrink:0;flex-grow:0;"]);
            t.ImageNameWrapper = g
        },
        GrVj: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isOldLoginInputVersion = t.defaultCountries = void 0;
            t.defaultCountries = {
                india: 91,
                malaysia: 60,
                philippines: 63,
                srilanka: 94,
                chile: 56,
                usa: 1,
                newzealand: 64,
                southafrica: 27,
                ireland: 353,
                uk: 44,
                uae: 971,
                czechrepublic: 420,
                singapore: 65,
                portugal: 351,
                qatar: 974,
                australia: 61,
                slovakia: 421,
                brazil: 55,
                poland: 48,
                indonesia: 62,
                lebanon: 961,
                italy: 39,
                turkey: 90
            };
            t.isOldLoginInputVersion = function(e) {
                return !Array.isArray(e)
            }
        },
        "+cBz": (e, t, r) => {
            var n = r("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(r("8Gu5")).default;
            t.default = o
        },
        "T5Y+": (e, t, r) => {
            var n = r("JMD1"),
                o = r("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.noBorder = t.InputWrapper = t.Input = t.ErrorText = t.Container = void 0;
            var a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var r = i(t);
                    if (r && r.has(e)) return r.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var u in e)
                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, u, l) : n[u] = e[u]
                        }
                    n.default = e, r && r.set(e, n);
                    return n
                }(r("vOnD")),
                u = n(r("LSsp"));

            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    r = new WeakMap;
                return (i = function(e) {
                    return e ? r : t
                })(e)
            }
            var l = a.default.input.withConfig({
                componentId: "sc-60vv3c-0"
            })(["border:none;outline:none;width:100%;height:100%;color:#1c1c1c;font-size:1.8rem;&::placeholder{color:#b5b5b5;font-size:1.8rem;font-weight:400;}"]);
            t.Input = l;
            var d = (0, a.css)(["border:0;"]);
            t.noBorder = d;
            var f = a.default.div.withConfig({
                componentId: "sc-60vv3c-1"
            })(["position:relative;display:flex;width:100%;min-height:4.8rem;padding:", ";font-size:1.6rem;align-items:center;border:", ";border-radius:6px;:focus-within{border:", ";padding:0.7rem;}@media (max-width:480px){", ";:focus-within{", "}}"], (function(e) {
                return e.isError ? "0.7rem" : "0.8rem"
            }), (function(e) {
                return e.isError ? "2px solid #d64155" : "1px solid #cfcfcf"
            }), (function(e) {
                return e.isError ? "2px solid #d64155" : "2px solid #009999"
            }), (function(e) {
                return e.isNakedInMobile && d
            }), (function(e) {
                return e.isNakedInMobile && d
            }));
            t.InputWrapper = f;
            var c = a.default.div.withConfig({
                componentId: "sc-60vv3c-2"
            })(["width:", ";background:", ";"], (function(e) {
                return e.width ? e.width : "auto"
            }), u.default);
            t.Container = c;
            var s = a.default.p.withConfig({
                componentId: "sc-60vv3c-3"
            })(["height:13px;color:#d64155;visibility:", ";font-size:1.1rem;line-height:1.3rem;margin:0.2rem 0 0 0;"], (function(e) {
                return e.isError ? "visible" : "hidden"
            }));
            t.ErrorText = s
        }
    }
]);