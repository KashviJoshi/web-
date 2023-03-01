"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8177], {
        "0zwj": (e, t, n) => {
            var a = n("JMD1"),
                r = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("UNXm")),
                o = w(n("q1tI")),
                i = a(n("17x9")),
                d = w(n("vOnD")),
                u = a(n("j399")),
                f = a(n("6jlT")),
                c = a(n("5An4")),
                m = a(n("HMsx")),
                s = a(n("ukK4")),
                p = a(n("PQmA")),
                g = a(n("RuGz")),
                C = a(n("cjht")),
                b = a(n("eLLh")),
                h = a(n("NANp"));

            function v(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (v = function(e) {
                    return e ? n : t
                })(e)
            }

            function w(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var n = v(t);
                if (n && n.has(e)) return n.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                    }
                return a.default = e, n && n.set(e, a), a
            }
            var y = {
                    DESKTOP: 650,
                    TABLET: 500,
                    MOBILE: 300
                },
                x = function e(t) {
                    var n = t.country,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        i = void 0 === r ? "" : r,
                        d = t.countries,
                        c = void 0 === d ? [] : d,
                        m = t.onSelect,
                        s = void 0 === m ? u.default : m,
                        C = (0, o.useState)(a),
                        h = (0, l.default)(C, 2),
                        v = h[0],
                        w = h[1],
                        x = (0, o.useState)(i),
                        E = (0, l.default)(x, 2),
                        _ = E[0],
                        j = E[1],
                        L = (0, o.useState)(!1),
                        O = (0, l.default)(L, 2),
                        S = O[0],
                        D = O[1],
                        P = (0, o.useState)(0),
                        q = (0, l.default)(P, 2),
                        z = q[0],
                        A = q[1],
                        T = function(e, t, n) {
                            w(e), j(t), s(t, n)
                        },
                        R = "undefined" != typeof window ? window.innerWidth / 2 + Math.min(900, window.innerWidth) / 2 : 0,
                        H = (0, o.useRef)();
                    (0, o.useEffect)((function() {
                        var e = function() {
                                var e = "undefined" != typeof window ? window.innerWidth : 0;
                                return e >= 768 ? "DESKTOP" : e < 768 && e > 480 ? "TABLET" : "MOBILE"
                            }(),
                            t = function(e) {
                                return y[e] || 650
                            }(e),
                            n = H.current.getBoundingClientRect().x,
                            a = n <= 0 ? n : n + t >= R ? n + t - R : 0;
                        a && A(-1 * (a + 10))
                    }), []);
                    var Z = (0, f.default)();
                    return o.default.createElement(I, {
                        handleClickOutside: function() {
                            return D(!1)
                        }
                    }, o.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return D(!S)
                        },
                        tabIndex: "0",
                        "aria-labelledby": "country-dropdown-label"
                    }, o.default.createElement(e.label, null, "Select Country"), o.default.createElement(e.Arrow, {
                        visible: S
                    }), o.default.createElement(e.Menu, {
                        visible: S,
                        tabIndex: "-1",
                        "aria-activedescendant": "country-active_".concat(Z),
                        ref: H,
                        left: z
                    }, o.default.createElement(M, {
                        gap: 5,
                        visible: S
                    }, c.map((function(e) {
                        return o.default.createElement(b.default.Item, {
                            colD: 3,
                            colT: 4,
                            colM: 6,
                            key: e.value
                        }, o.default.createElement(k, {
                            name: e.name,
                            value: e.value,
                            onSelect: T,
                            selected: _ === e.value,
                            countryObj: e,
                            uniqueId: Z
                        }))
                    })))), o.default.createElement(e.Head, null, o.default.createElement(g.default, {
                        country: _,
                        width: 22
                    }), o.default.createElement(e.CountryName, null, v), o.default.createElement(p.default, {
                        size: 15
                    }))))
                },
                M = (0, d.default)(b.default).withConfig({
                    componentId: "sc-10ugfab-0"
                })(["display:", ";"], (function(e) {
                    return e.visible ? "inital" : "none"
                })),
                I = (0, d.default)(C.default).withConfig({
                    componentId: "sc-10ugfab-1"
                })(["max-width:100%;"]),
                E = function(e) {
                    return e.visible ? "1rem 1.4rem 1.4rem 1.4rem" : 0
                },
                k = function e(t) {
                    var n = t.name,
                        a = void 0 === n ? "" : n,
                        r = t.value,
                        l = void 0 === r ? "" : r,
                        i = t.onSelect,
                        d = void 0 === i ? u.default : i,
                        f = t.selected,
                        c = void 0 !== f && f,
                        m = t.countryObj,
                        s = t.uniqueId;
                    return o.default.createElement(e.Wrapper, {
                        onClick: function() {
                            return d(a, l, m)
                        },
                        isSelected: c,
                        id: c ? "country-active_".concat(s) : "country-".concat(l, "_").concat(s)
                    }, o.default.createElement(g.default, {
                        country: l,
                        width: 24
                    }), o.default.createElement(e.CountryName, null, a))
                };
            x.label = d.default.label.withConfig({
                componentId: "sc-10ugfab-2"
            })(["display:none;"]), k.CountryName = d.default.span.withConfig({
                componentId: "sc-10ugfab-3"
            })(["font-size:1.4rem;color:", ";line-height:1.6rem;margin:0 0.5rem 0 0.8rem;font-weight:400;"], c.default), k.propTypes = {
                name: i.default.string,
                value: i.default.string,
                onSelect: i.default.func,
                selected: i.default.bool,
                countryObj: i.default.object.isRequired
            }, k.Wrapper = d.default.div.withConfig({
                componentId: "sc-10ugfab-4"
            })(["display:flex;align-items:center;cursor:pointer;width:96%;padding:1%;:hover{background:", ";}", ""], m.default.z100, (function(e) {
                return e.isSelected && (0, d.css)(["background:", ";"], s.default.z100)
            })), x.propTypes = {
                country: i.default.string,
                countries: i.default.array,
                onSelect: i.default.func,
                value: i.default.string
            }, x.Arrow = d.default.span.withConfig({
                componentId: "sc-10ugfab-5"
            })(["display:", ";position:absolute;top:-1.7rem;left:3.1rem;width:2.1rem;height:2.3rem;transform:rotate(45deg);border-radius:2.2rem 0 0.4rem 0;background:#fff;z-index:11;"], (function(e) {
                return e.visible ? "block" : "none"
            })), x.Menu = d.default.div.withConfig({
                componentId: "sc-10ugfab-6"
            })(["position:absolute;opacity:", ";bottom:4rem;left:", "px;width:", ";visibility:", ";height:", ";background-color:#fff;box-shadow:0.1rem 4rem 4rem rgba(0,0,0,0.15);border-radius:", ";padding:", ";cursor:default;transform-origin:0 100%;transition-property:opacity,padding;will-change:opacity,padding;transition-duration:", ";@media (max-width:768px) and (min-width:481px){width:50rem;}@media (max-width:480px) and (min-width:321px){padding:", ";width:30rem;}@media (max-width:320px){padding:", ";width:28rem;}z-index:10;"], (function(e) {
                return e.visible ? 1 : 0
            }), (function(e) {
                return e.left
            }), (function(e) {
                return e.visible ? "65rem" : 0
            }), (function(e) {
                return e.visible ? "visible" : "hidden"
            }), (function(e) {
                return e.visible ? "auto" : 0
            }), h.default.radius, (function(e) {
                return e.visible ? "1.2rem 1.6rem 1.6rem 1.6rem" : 0
            }), h.default.animationDuration, E, E), x.Head = d.default.div.withConfig({
                componentId: "sc-10ugfab-7"
            })(["display:flex;align-items:center;max-width:100%;overflow:hidden;text-overflow:ellipsis;"]), x.CountryName = d.default.span.withConfig({
                componentId: "sc-10ugfab-8"
            })(["font-size:1.8rem;line-height:2rem;max-width:80%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:", ";margin:0 0.5rem 0 0;font-weight:400;@media (max-width:480px){font-size:1.6rem;}"], c.default), x.Wrapper = d.default.div.withConfig({
                componentId: "sc-10ugfab-9"
            })(["min-width:10rem;width:max-content;max-width:100%;cursor:pointer;position:relative;padding:0.3rem 0.7rem;border:1px solid ", ";border-radius:0.6rem;"], m.default.z400);
            var _ = x;
            t.default = _
        },
        BYLu: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("0zwj")).default;
            t.default = r
        },
        meID: (e, t, n) => {
            var a = n("JMD1"),
                r = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("pP/M")),
                o = a(n("q1tI")),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n("vOnD")),
                d = a(n("17x9")),
                u = n("fHDd");
            a(n("HMsx"));

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (f = function(e) {
                    return e ? n : t
                })(e)
            }
            var c = function e(t) {
                    var n = t.width,
                        a = void 0 === n ? 45 : n,
                        r = t.country,
                        i = g(void 0 === r ? "" : r),
                        d = s(45, a),
                        u = m(d, 45);
                    return o.default.createElement(e.Image, (0, l.default)({}, t, {
                        width: 45,
                        xy: i,
                        scaleFactor: d,
                        leftMargin: u
                    }))
                },
                m = function(e, t) {
                    return e ? Math.floor((t * e - t) / 2) : 0
                },
                s = function(e, t) {
                    return t / e
                },
                p = {
                    malaysia: 1,
                    philippines: 2,
                    srilanka: 3,
                    india: 4,
                    canada: 5,
                    chile: 6,
                    "united-states": 7,
                    newzealand: 8,
                    southafrica: 9,
                    ireland: 10,
                    uk: 11,
                    uae: 12,
                    "czech-republic": 13,
                    "singapore-country": 14,
                    portugal: 15,
                    qatar: 16,
                    australia: 17,
                    slovakia: 18,
                    brasil: 19,
                    poland: 20,
                    indonesia: 21,
                    lebanon: 22,
                    italy: 23,
                    turkey: 24,
                    india2: 25
                },
                g = function(e) {
                    var t = (p[e] || 0) - 1;
                    return "".concat(-(45 * t + 2 * t), "px 0px")
                };
            c.propTypes = {
                width: d.default.number,
                country: d.default.string
            }, c.Image = i.default.span.withConfig({
                componentId: "sc-13tn0rn-0"
            })(["width:", "rem;height:", "rem;display:inline-block;background:url(", ") no-repeat;background-position:", ";transform:scale(", ");", ""], (function(e) {
                return e.width / 10
            }), (function(e) {
                return e.width / 10 * .667
            }), (0, u.getCDN)("data/webuikit/0687ff554c86e36cda9498212e221af61563274375.png"), (function(e) {
                return e.xy
            }), (function(e) {
                return e.scaleFactor
            }), (function(e) {
                return !!e.leftMargin && (0, i.css)(["margin-left:", "rem;"], e.leftMargin / 10)
            }));
            var C = c;
            t.default = C
        },
        RuGz: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("meID")).default;
            t.default = r
        },
        Fptk: (e, t, n) => {
            var a = n("JMD1"),
                r = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(n("pP/M")),
                o = a(n("q1tI")),
                i = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = C(t);
                    if (n && n.has(e)) return n.get(e);
                    var a = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = l ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(a, o, i) : a[o] = e[o]
                        }
                    a.default = e, n && n.set(e, a);
                    return a
                }(n("vOnD")),
                d = a(n("HMsx")),
                u = a(n("lXQd")),
                f = a(n("17x9")),
                c = n("9quZ"),
                m = a(n("BYLu")),
                s = a(n("z5gk")),
                p = a(n("eLLh")),
                g = a(n("j399"));

            function C(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (C = function(e) {
                    return e ? n : t
                })(e)
            }
            var b = (0, n("fHDd").getCDN)("web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"),
                h = function(e) {
                    var t = e.data,
                        n = e.fallback;
                    return null != t && t.content.length ? {
                        name: null == t ? void 0 : t.title,
                        columnContent: null == t ? void 0 : t.content
                    } : {
                        name: null == n ? void 0 : n.title,
                        columnContent: null == n ? void 0 : n.content
                    }
                },
                v = function e(t) {
                    var n = t.fnCountrySelect,
                        a = void 0 === n ? g.default : n,
                        r = t.fnLanguageSelect,
                        i = void 0 === r ? g.default : r,
                        d = t.companyContent,
                        f = t.foodiesContent,
                        m = t.restaurantsContent,
                        s = t.enterpriseContent,
                        p = t.forYouContent,
                        C = t.learnMoreContent,
                        v = t.zomaverseContent,
                        x = t.aboutusContent,
                        M = t.icons,
                        I = t.disclaimer,
                        E = t.countries,
                        k = t.languages,
                        _ = t.storeLinks,
                        j = (_ = void 0 === _ ? {} : _).appStoreLink,
                        L = void 0 === j ? "" : j,
                        D = _.playStoreLink,
                        q = void 0 === D ? "" : D,
                        z = t.onStoreClick,
                        A = void 0 === z ? g.default : z,
                        T = t.selectedCountry,
                        R = t.selectedLanguage,
                        H = t.large,
                        Z = void 0 !== H && H,
                        N = t.showQrCode,
                        J = void 0 !== N && N,
                        W = t.qrCode,
                        F = W.qrId,
                        Q = void 0 === F ? "" : F,
                        V = W.qrInnerId,
                        U = void 0 === V ? "" : V,
                        K = W.qrLink,
                        Y = void 0 === K ? "" : K,
                        B = W.qrImageUrl,
                        X = void 0 === B ? "" : B,
                        G = t.footerDataArray,
                        $ = t.isMobile,
                        ee = t.zLogoImg,
                        te = t.medium,
                        ne = void 0 !== te && te,
                        ae = (0, u.default)(G, "COMPANY", "Company"),
                        re = (0, u.default)(G, "FOR_FOODIES", "For Foodies"),
                        le = (0, u.default)(G, "FOR_RESTAURANTS", "For Restaurants"),
                        oe = (0, u.default)(G, "ABOUT_US", "About Zomato"),
                        ie = (0, u.default)(G, "ZOMAVERSE", "Zomaverse"),
                        de = (0, u.default)(G, "LEARN_MORE", "Learn More"),
                        ue = (0, u.default)(G, "FOR_YOU", "For You"),
                        fe = (0, u.default)(G, "SOCIAL_LINKS", "Social links"),
                        ce = (0, u.default)(G, "FOR_ENTERPRISES", "For Enterprises") || "For Enterprises";
                    return o.default.createElement(e.Wrapper, null, o.default.createElement(e.Content, {
                        large: Z,
                        medium: ne
                    }, o.default.createElement(e.Top, null, o.default.createElement(e.Img, {
                        src: ee || b,
                        alt: "Zomato logo"
                    }), o.default.createElement(S, null), o.default.createElement(O, {
                        languages: k,
                        countries: E,
                        handleCountrySelect: a,
                        handleLangSelect: i,
                        selectedCountry: T,
                        selectedLanguage: R,
                        horizontal: !0
                    })), o.default.createElement(e.List, null, o.default.createElement(e.Column, (0, l.default)({
                        colM: 7,
                        colD: 2.2,
                        colT: 2.2,
                        fnCountrySelect: a,
                        fnLanguageSelect: i,
                        countries: E,
                        languages: k
                    }, h({
                        data: {
                            title: oe,
                            content: x
                        },
                        fallback: {
                            title: ae,
                            content: d
                        }
                    }))), o.default.createElement(e.Column, (0, l.default)({
                        colM: 5,
                        colD: 2.3
                    }, h({
                        data: {
                            title: ie,
                            content: v
                        },
                        fallback: {
                            title: re,
                            content: f
                        }
                    }))), o.default.createElement(e.ColumnContainer, {
                        colM: 7,
                        colD: 3
                    }, !!m.length && o.default.createElement(e.Column, {
                        colM: 7,
                        colD: 3,
                        name: le,
                        columnContent: m,
                        noContainer: !0
                    }), Array.isArray(s) && !!s.length && o.default.createElement(e.Column, {
                        colM: 7,
                        colD: 3,
                        noContainer: !0,
                        name: ce,
                        columnContent: s
                    })), o.default.createElement(e.Column, (0, l.default)({
                        colM: 5,
                        colD: 2
                    }, h({
                        data: {
                            title: de,
                            content: C
                        },
                        fallback: {
                            title: ue,
                            content: p
                        }
                    }))), J ? o.default.createElement(P, {
                        qrId: Q,
                        innerId: U,
                        link: Y,
                        imageUrl: X
                    }) : o.default.createElement(o.default.Fragment, null, !!$ && o.default.createElement(y, null, o.default.createElement(e.MobileStoreLinks, {
                        onClick: A
                    }, o.default.createElement(c.Appstore, {
                        link: L
                    }), o.default.createElement(c.Playstore, {
                        link: q
                    }))), !!$ && o.default.createElement(y, {
                        colM: 12
                    }, o.default.createElement(w, null, fe)), o.default.createElement(e.Links, {
                        colM: 12,
                        colD: 2.2,
                        name: fe,
                        icons: M,
                        appStoreLink: L,
                        playStoreLink: q,
                        isMobile: $,
                        onStoreClick: A
                    }))), o.default.createElement(e.HR, null), o.default.createElement(e.Disclaimer, null, I)))
                };
            v.MobileStoreLinks = i.default.div.withConfig({
                componentId: "sc-elhb8j-0"
            })(["display:flex;justify-content:space-around;"]), v.Img = i.default.img.withConfig({
                componentId: "sc-elhb8j-1"
            })(["@media (max-width:480px){margin-bottom:3rem;}height:2.8rem;width:13.2rem;"]), v.Top = i.default.section.withConfig({
                componentId: "sc-elhb8j-2"
            })(["display:flex;align-items:center;width:100%;justify-content:space-between;margin-bottom:4rem;@media (max-width:480px){flex-direction:column;align-items:flex-start;}"]);
            var w = i.default.p.withConfig({
                    componentId: "sc-elhb8j-3"
                })(["margin:0;margin-top:0.4rem;font-size:1.6rem;text-align:center;"]),
                y = (0, i.default)(p.default.Item).withConfig({
                    componentId: "sc-elhb8j-4"
                })(["display:none;@media (max-width:480px){display:block;margin-bottom:1.5rem;}"]),
                x = function(e) {
                    var t = e.appStoreLink,
                        n = e.playStoreLink,
                        a = e.showInMobile,
                        r = void 0 === a || a,
                        l = e.onStoreClick;
                    return o.default.createElement(v.StoreLinksContainer, {
                        showInMobile: r,
                        onClick: l
                    }, o.default.createElement(c.Appstore, {
                        link: t
                    }), o.default.createElement(S, null), o.default.createElement(c.Playstore, {
                        link: n
                    }))
                };
            x.propTypes = {
                appStoreLink: f.default.string.isRequired,
                playStoreLink: f.default.string.isRequired,
                showInMobile: f.default.bool,
                horizontal: f.default.bool
            };
            var M = f.default.shape({
                    name: f.default.string,
                    value: f.default.string
                }),
                I = M,
                E = {
                    name: "India",
                    value: "india"
                },
                k = {
                    name: "English",
                    value: "EN"
                };
            v.propTypes = {
                fnCountrySelect: f.default.func,
                fnLanguageSelect: f.default.func,
                companyContent: f.default.array,
                foodiesContent: f.default.array,
                learnMoreContent: f.default.arrayOf(f.default.any),
                zomaverseContent: f.default.arrayOf(f.default.any),
                aboutusContent: f.default.arrayOf(f.default.any),
                restaurantsContent: f.default.array,
                enterpriseContent: f.default.array,
                forYouContent: f.default.array,
                icons: f.default.array,
                disclaimer: f.default.string,
                countries: f.default.array,
                languages: f.default.array,
                storeLinks: f.default.shape({
                    appStoreLink: f.default.string.isRequired,
                    playStoreLink: f.default.string.isRequired
                }).isRequired,
                selectedLanguage: I,
                selectedCountry: M,
                large: f.default.bool,
                showQrCode: f.default.bool,
                qrCode: f.default.shape({
                    qrId: f.default.string,
                    qrInnerId: f.default.string,
                    qrLink: f.default.string,
                    qrImageUrl: f.default.string
                }),
                footerDataArray: f.default.objectOf(f.default.any),
                isMobile: f.default.bool,
                onStoreClick: f.default.func,
                medium: f.default.bool
            }, v.defaultProps = {
                showQrCode: !1,
                qrCode: {
                    qrId: "",
                    qrInnerId: "",
                    qrLink: "",
                    qrImageUrl: ""
                },
                restaurantsContent: [],
                learnMoreContent: [],
                zomaverseContent: [],
                aboutusContent: [],
                companyContent: [],
                foodiesContent: [],
                forYouContent: [],
                selectedCountry: E,
                selectedLanguage: k,
                footerDataArray: {},
                isMobile: !0,
                onStoreClick: g.default,
                zLogoImg: ""
            }, v.Disclaimer = i.default.p.withConfig({
                componentId: "sc-elhb8j-5"
            })(["font-size:1.3rem;color:", ";line-height:1.7rem;margin-top:2.3rem;@media (max-width:480px){margin-bottom:3rem;}"], d.default.z800), v.Links = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.icons,
                    r = void 0 === a ? [] : a,
                    l = e.appStoreLink,
                    i = e.playStoreLink,
                    d = e.isMobile,
                    u = e.onStoreClick;
                return o.default.createElement(v.LinksContainer, e, o.default.createElement(L, null, n), o.default.createElement(v.IconContainer, null, r.map((function(e) {
                    return o.default.createElement(v.Item.A, {
                        key: e.name,
                        href: e.link,
                        target: "_blank",
                        isIcon: !0
                    }, !d && o.default.createElement(j, null, o.default.createElement(e.component, {
                        size: 22
                    })), !!d && o.default.createElement(_, null, o.default.createElement(e.component, {
                        size: 28
                    })))
                }))), o.default.createElement(S, null), o.default.createElement(S, null), o.default.createElement(x, {
                    appStoreLink: l,
                    playStoreLink: i,
                    showInMobile: !1,
                    onStoreClick: u
                }))
            };
            var _ = i.default.div.withConfig({
                    componentId: "sc-elhb8j-6"
                })(["display:none;@media (max-width:480px){display:block;}"]),
                j = i.default.div.withConfig({
                    componentId: "sc-elhb8j-7"
                })(["@media (max-width:480px){display:none;}"]),
                L = i.default.h6.withConfig({
                    componentId: "sc-elhb8j-8"
                })(["font-size:1.4rem;letter-spacing:0.2rem;text-transform:uppercase;font-weight:500;margin:0 0 1.2rem 0;@media (max-width:480px){display:none;}"]);
            v.NormalContainer = i.default.div.withConfig({
                componentId: "sc-elhb8j-9"
            })(["margin-bottom:3rem;&:last-of-type{margin-bottom:0;}"]), v.Column = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.columnContent,
                    r = void 0 === a ? [] : a,
                    l = e.noContainer,
                    i = void 0 !== l && l,
                    d = o.default.createElement(o.default.Fragment, null, o.default.createElement(v.Heading, null, n), o.default.createElement("nav", null, r.map((function(e) {
                        return o.default.createElement(v.Item, {
                            key: e.label,
                            label: e.label,
                            link: e.link
                        })
                    }))));
                return i ? o.default.createElement(v.NormalContainer, null, d) : o.default.createElement(v.ColumnContainer, e, d)
            }, v.Item = function(e) {
                return o.default.createElement(v.Item.A, {
                    href: e.link
                }, o.default.createElement(v.Item.P, null, e.label))
            }, v.Locale = function(e) {
                var t = e.name,
                    n = void 0 === t ? "" : t,
                    a = e.columnContent,
                    r = void 0 === a ? [] : a;
                return o.default.createElement(v.LocaleContainer, e, o.default.createElement(v.Column, {
                    colM: 7,
                    colD: 2,
                    columnContent: r,
                    name: n
                }), o.default.createElement(S, null))
            };
            var O = function(e) {
                var t = e.selectedLanguage,
                    n = e.selectedCountry,
                    a = e.languages,
                    r = e.countries,
                    l = e.handleCountrySelect,
                    i = e.handleLangSelect,
                    d = e.showInMobile,
                    u = void 0 === d || d,
                    f = e.horizontal,
                    c = void 0 !== f && f;
                return o.default.createElement(v.DropdownContainer, {
                    showInMobile: u,
                    horizontal: c
                }, o.default.createElement(m.default, {
                    country: n.name,
                    value: n.value,
                    countries: r,
                    onSelect: l
                }), o.default.createElement(S, {
                    horizontal: c
                }), o.default.createElement(s.default, {
                    lang: t.name,
                    value: t.value,
                    languages: a,
                    onSelect: i
                }))
            };
            O.propTypes = {
                languages: f.default.array.isRequired,
                countries: f.default.array.isRequired,
                handleCountrySelect: f.default.func.isRequired,
                handleLangSelect: f.default.func.isRequired,
                showInMobile: f.default.bool,
                horizontal: f.default.bool,
                selectedCountry: M,
                selectedLanguage: I
            }, O.defaultProps = {
                selectedCountry: E,
                selectedLanguage: k
            }, v.Locale.propTypes = {
                name: f.default.string,
                columnContent: f.default.array
            }, v.DropdownContainer = i.default.section.withConfig({
                componentId: "sc-elhb8j-10"
            })(["", " ", ""], (function(e) {
                return e.horizontal && (0, i.css)(["display:flex;"])
            }), (function(e) {
                return !e.showInMobile && (0, i.css)(["@media (max-width:480px){display:none;}"])
            })), v.StoreLinksContainer = i.default.section.withConfig({
                componentId: "sc-elhb8j-11"
            })(["", ""], (function(e) {
                return !e.showInMobile && (0, i.css)(["@media (max-width:480px){display:none;}"])
            }));
            var S = i.default.div.withConfig({
                componentId: "sc-elhb8j-12"
            })(["margin-top:", ";", " @media (max-width:768px) and (min-width:481px){margin-right:1.2rem;}"], (function(e) {
                return e.m ? "".concat(e.m, "px") : "1.2rem"
            }), (function(e) {
                return e.horizontal && (0, i.css)(["margin-left:2rem;"])
            }));
            v.Links.propTypes = {
                name: f.default.string,
                icons: f.default.array,
                appStoreLink: f.default.string,
                playStoreLink: f.default.string
            }, v.Column.propTypes = {
                name: f.default.string,
                columnContent: f.default.array,
                noContainer: f.default.bool
            }, v.Item.propTypes = {
                label: f.default.string,
                link: f.default.string
            }, v.HR = i.default.hr.withConfig({
                componentId: "sc-elhb8j-13"
            })(["margin-top:5rem;border:0;border-top:1px solid ", ";@media (max-width:480px){margin-top:4.4rem;}"], d.default.z300), v.LinksContainer = (0, i.default)(p.default.Item).withConfig({
                componentId: "sc-elhb8j-14"
            })(["display:flex;flex-direction:column;@media (max-width:480px){margin-top:0.5rem;flex-direction:row;width:100%;justify-content:center;}"]), v.IconContainer = i.default.div.withConfig({
                componentId: "sc-elhb8j-15"
            })(["display:flex;justify-content:flex-start;@media (max-width:480px){margin-left:0.6rem;}@media (max-width:550px) and (min-width:481px){flex-direction:column;}"]), v.Item.P = i.default.p.withConfig({
                componentId: "sc-elhb8j-16"
            })(["font-size:1.4rem;line-height:2.1rem;color:", ";margin:0.5rem 0;@media (max-width:480px){font-size:1.3rem;line-height:1.6rem;}:hover{color:#1c1c1c;}"], d.default.z700), v.Item.A = i.default.a.withConfig({
                componentId: "sc-elhb8j-17"
            })(["text-decoration:none;", ""], (function(e) {
                return e.isIcon && (0, i.css)(["margin-right:0.8rem;@media (max-width:550px) and (min-width:481px){margin-top:0.8rem;}"])
            })), v.Heading = i.default.h6.withConfig({
                componentId: "sc-elhb8j-18"
            })(["font-size:1.4rem;letter-spacing:0.2rem;text-transform:uppercase;font-weight:500;margin:0 0 1.2rem 0;"]), v.LocaleContainer = (0, i.default)(p.default.Item).withConfig({
                componentId: "sc-elhb8j-19"
            })(["@media (max-width:480px){margin-bottom:3rem;}"]), v.ColumnContainer = (0, i.default)(p.default.Item).withConfig({
                componentId: "sc-elhb8j-20"
            })(["@media (max-width:480px){margin-bottom:3rem;}"]), v.Wrapper = i.default.footer.withConfig({
                componentId: "sc-elhb8j-21"
            })(["width:100%;background:", ";display:flex;justify-content:center;@media (min-width:768px) and (max-width:900px){&{padding:0 1.5rem;}}"], d.default.z95);
            var D = function(e) {
                return e.large ? "110rem" : e.medium ? "100.6rem" : "90rem"
            };
            v.Content = i.default.div.withConfig({
                componentId: "sc-elhb8j-22"
            })(["max-width:", ";width:", ";padding:4.8rem 0 2.2rem 0;position:relative;@media (max-width:768px) and (min-width:481px){padding:4.8rem 2.4rem 2.2rem 2.4rem;}@media (max-width:480px){padding:4.8rem 1rem 14.2rem 1rem;}"], D, D), v.List = (0, i.default)(p.default).withConfig({
                componentId: "sc-elhb8j-23"
            })(["justify-content:space-between;"]);
            var P = function(e) {
                var t = e.qrId,
                    n = void 0 === t ? "" : t,
                    a = e.innerId,
                    r = void 0 === a ? "" : a,
                    l = e.link,
                    i = void 0 === l ? "" : l,
                    d = e.imageUrl,
                    u = void 0 === d || d;
                return o.default.createElement(v.Qr, null, o.default.createElement("div", {
                    id: n
                }, o.default.createElement("div", {
                    id: r
                }, o.default.createElement("a", {
                    href: i
                }, o.default.createElement("img", {
                    src: u
                })))))
            };
            v.Qr = i.default.div.withConfig({
                componentId: "sc-elhb8j-24"
            })(["width:13rem;img{width:100%;}@media (max-width:480px){margin:0 auto;}"]), P.propTypes = {
                qrId: f.default.string.isRequired,
                innerId: f.default.string.isRequired,
                link: f.default.string.isRequired,
                imageUrl: f.default.string.isRequired
            };
            var q = v;
            t.default = q
        },
        "94yn": (e, t, n) => {
            var a = n("JMD1");
            t.Z = void 0;
            var r = a(n("Fptk")).default;
            t.Z = r
        },
        STzO: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("w/pp")),
                i = a(n("6jlT")),
                d = function(e) {
                    var t = (0, i.default)();
                    return l.default.createElement(o.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"
                    }))
                };
            t.default = d
        },
        hHop: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("w/pp")),
                i = a(n("6jlT")),
                d = function(e) {
                    var t = (0, i.default)();
                    return l.default.createElement(o.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.1875 5C8.8125 5 8.625 5 8.0625 5C7.5 5.0625 7.125 5.125 6.8125 5.25C6.5 5.375 6.1875 5.5625 5.875 5.875C5.5625 6.1875 5.375 6.4375 5.25 6.8125C5.125 7.125 5 7.5 5 8.0625C5 8.625 5 8.75 5 10.1875C5 11.625 5 11.8125 5.0625 12.375C5.0625 12.9375 5.1875 13.3125 5.3125 13.625C5.4375 13.9375 5.625 14.25 5.9375 14.5625C6.1875 14.8125 6.5 15 6.875 15.1875C7.1875 15.3125 7.5625 15.4375 8.125 15.4375C8.6875 15.4375 8.875 15.5 10.25 15.5C11.6875 15.5 11.875 15.5 12.4375 15.4375C13 15.375 13.375 15.3125 13.6875 15.1875C14 15.0625 14.3125 14.875 14.625 14.5625C14.9375 14.25 15.125 14 15.25 13.625C15.375 13.3125 15.5 12.875 15.5 12.375C15.5625 11.8125 15.5625 11.625 15.5625 10.1875C15.5625 8.75 15.5625 8.625 15.5 8.0625C15.5 7.5 15.375 7.125 15.25 6.8125C15.125 6.4375 14.9375 6.1875 14.625 5.875C14.375 5.625 14.0625 5.4375 13.6875 5.25C13.375 5.125 12.9375 5.0625 12.4375 5C11.8125 5 11.625 5 10.1875 5ZM9.75 5.9375C9.875 5.9375 10.0625 5.9375 10.1875 5.9375C11.5625 5.9375 11.75 5.9375 12.3125 5.9375C12.8125 5.9375 13.0625 6.0625 13.25 6.125C13.5 6.25 13.6875 6.375 13.875 6.5C14.0625 6.625 14.1875 6.8125 14.25 7.125C14.3125 7.3125 14.4375 7.5625 14.4375 8.0625C14.5 8.625 14.5 8.8125 14.5 10.1875C14.5 11.5625 14.5 11.75 14.4375 12.3125C14.4375 12.8125 14.3125 13.125 14.25 13.3125C14.1875 13.5625 14.0625 13.6875 13.875 13.9375C13.6875 14.125 13.5 14.1875 13.25 14.3125C13.0625 14.375 12.8125 14.5 12.3125 14.5C11.75 14.5 11.5625 14.5625 10.1875 14.5625C8.8125 14.5625 8.625 14.5625 8.0625 14.5C7.5625 14.5 7.3125 14.375 7.125 14.3125C6.875 14.1875 6.6875 14.125 6.5 13.9375C6.3125 13.75 6.1875 13.5625 6.125 13.3125C6.0625 13.125 6 12.875 5.9375 12.3125C5.9375 11.75 5.9375 11.625 5.9375 10.1875C5.9375 8.8125 5.9375 8.625 5.9375 8.0625C6 7.5625 6.0625 7.3125 6.125 7.125C6.25 6.875 6.375 6.6875 6.5 6.5C6.625 6.3125 6.875 6.1875 7.125 6.125C7.3125 6.0625 7.5625 5.9375 8.0625 5.9375C8.5625 5.9375 8.75 5.9375 9.75 5.9375ZM13 6.8125C12.6875 6.8125 12.375 7.0625 12.375 7.4375C12.375 7.8125 12.625 8.0625 13 8.0625C13.375 8.0625 13.625 7.8125 13.625 7.4375C13.625 7.0625 13.3125 6.8125 13 6.8125ZM10.1875 7.5C8.75 7.5 7.5 8.6875 7.5 10.1875C7.5 11.6875 8.6875 12.875 10.1875 12.875C11.6875 12.875 12.875 11.6875 12.875 10.1875C12.875 8.6875 11.6875 7.5 10.1875 7.5ZM10.1875 8.4375C11.125 8.4375 11.9375 9.1875 11.9375 10.1875C11.9375 11.1875 11.1875 11.9375 10.1875 11.9375C9.25 11.9375 8.4375 11.1875 8.4375 10.1875C8.4375 9.1875 9.25 8.4375 10.1875 8.4375Z"
                    }))
                };
            t.default = d
        },
        ML3Q: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("w/pp")),
                i = a(n("6jlT")),
                d = function(e) {
                    var t = (0, i.default)();
                    return l.default.createElement(o.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM7.0625 8.375H4.75V15.4375H7.0625V8.375ZM7.25 6.1875C7.25 5.5 6.75 5 5.9375 5C5.125 5 4.5625 5.5 4.5625 6.1875C4.5625 6.875 5.0625 7.4375 5.875 7.4375C6.6875 7.4375 7.25 6.875 7.25 6.1875ZM15.5 11.375C15.5 9.1875 14.3125 8.1875 12.8125 8.1875C11.5625 8.1875 11 8.875 10.6875 9.375V8.375H8.375C8.375 9.0625 8.375 15.4375 8.375 15.4375H10.6875V11.5C10.6875 11.3125 10.6875 11.0625 10.75 10.9375C10.9375 10.5 11.3125 10.0625 11.9375 10.0625C12.75 10.0625 13.125 10.6875 13.125 11.6875V15.4375H15.4375C15.5 15.4375 15.5 11.375 15.5 11.375Z"
                    }))
                };
            t.default = d
        },
        H4ep: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("w/pp")),
                i = a(n("6jlT")),
                d = function(e) {
                    var t = (0, i.default)();
                    return l.default.createElement(o.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.0625 8.125V8.5L9.6875 8.4375C8.3125 8.25 7.125 7.6875 6.125 6.6875L5.625 6.1875L5.5 6.5625C5.25 7.375 5.375 8.25 5.9375 8.8125C6.25 9.125 6.1875 9.1875 5.6875 9C5.5 8.9375 5.375 8.875 5.3125 8.9375C5.25 9 5.4375 9.6875 5.5625 9.9375C5.75 10.3125 6.1875 10.6875 6.5625 10.875L6.9375 11.0625H6.5C6.0625 11.0625 6.0625 11.0625 6.125 11.25C6.3125 11.75 6.875 12.25 7.5625 12.5L8 12.6875L7.625 12.9375C7 13.3125 6.3125 13.5 5.625 13.5C5.3125 13.5 5 13.5625 5 13.5625C5 13.625 5.9375 14.0625 6.4375 14.25C8.0625 14.75 9.9375 14.5 11.375 13.6875C12.375 13.0625 13.375 11.875 13.875 10.75C14.125 10.125 14.375 9 14.375 8.5C14.375 8.1875 14.4375 8.125 14.8125 7.6875C15.0625 7.4375 15.3125 7.1875 15.3125 7.0625C15.375 6.9375 15.375 6.9375 15 7.0625C14.375 7.3125 14.25 7.25 14.625 6.875C14.875 6.625 15.125 6.1875 15.125 6.0625C15.125 6.0625 15 6.0625 14.875 6.125C14.75 6.1875 14.4375 6.3125 14.1875 6.375L13.8125 6.5L13.5 6.25C13.3125 6.125 13 5.9375 12.875 5.9375C12.5 5.8125 11.9375 5.8125 11.5625 6C10.5625 6.25 10 7.1875 10.0625 8.125Z"
                    }))
                };
            t.default = d
        },
        QMO7: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("w/pp")),
                i = a(n("6jlT")),
                d = function(e) {
                    var t = (0, i.default)();
                    return l.default.createElement(o.default, (0, r.default)({
                        uniqueId: t
                    }, e), l.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM15.1875 7.4375C15.0625 7 14.6875 6.625 14.25 6.5C13.4375 6.25 10.1875 6.25 10.1875 6.25C10.1875 6.25 6.9375 6.25 6.125 6.5C5.6875 6.625 5.3125 7 5.1875 7.4375C5 8.25 5 10 5 10C5 10 5 11.75 5.25 12.5625C5.375 13 5.75 13.375 6.1875 13.5C7 13.75 10.25 13.75 10.25 13.75C10.25 13.75 13.5 13.75 14.3125 13.5C14.75 13.375 15.125 13 15.25 12.5625C15.5 11.75 15.5 10 15.5 10C15.5 10 15.4375 8.25 15.1875 7.4375ZM9.25 11.75V8.5L11.875 10.125L9.25 11.75Z"
                    }))
                };
            t.default = d
        },
        Xozv: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("Qj/m")),
                i = function(e) {
                    return l.default.createElement(o.default, (0, r.default)({
                        type: "appstore"
                    }, e))
                };
            t.default = i
        },
        rSeK: (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("Qj/m")),
                i = function(e) {
                    return l.default.createElement(o.default, (0, r.default)({
                        type: "appstore_white"
                    }, e))
                };
            t.default = i
        },
        "5jyK": (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("Qj/m")),
                i = function(e) {
                    return l.default.createElement(o.default, (0, r.default)({
                        type: "playstore"
                    }, e))
                };
            t.default = i
        },
        "+Czg": (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("pP/M")),
                l = a(n("q1tI")),
                o = a(n("Qj/m")),
                i = function(e) {
                    return l.default.createElement(o.default, (0, r.default)({
                        type: "playstore_white"
                    }, e))
                };
            t.default = i
        },
        "Qj/m": (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("q1tI")),
                l = a(n("17x9")),
                o = a(n("vOnD")),
                i = a(n("lFeK")),
                d = n("fHDd"),
                u = {
                    playstore: {
                        url_logo_1x: "data/webuikit/61f7c9690d8ba4525ba863d0914ef2aa1556001313.png",
                        url_logo_2x: "data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png",
                        url_logo_3x: "data/webuikit/171050f49cdf259cff90fa3b21a87ccd1556001348.png",
                        url_logo_4x: "data/webuikit/a336792fc43e33ed4df43cfd3ff542431556001376.png"
                    },
                    appstore: {
                        url_logo_1x: "data/webuikit/69c8ac2b881b7ae167c36b480580274e1556003577.png",
                        url_logo_2x: "data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png",
                        url_logo_3x: "data/webuikit/bd19aa0be8dd3a92e58861cb82b9bccb1556003662.png",
                        url_logo_4x: "data/webuikit/9b91a3427bae3d2bf001e3a97f52c7111556003706.png"
                    },
                    playstore_white: {
                        url_logo_1x: "data/webuikit/9f0107c2d8f969bed671b2762ba1c37e1638168371.png",
                        url_logo_2x: "data/webuikit/551de5abea42b58a697dc1e67e29c6b51638168379.png",
                        url_logo_3x: "data/webuikit/6fbf5b33f5d5cd2d66621add219dcb761638168388.png",
                        url_logo_4x: "data/webuikit/ba33ea777b32cb2d13de7c5c166abf431638168397.png"
                    },
                    appstore_white: {
                        url_logo_1x: "data/webuikit/b0f41928f0f14c4375715390dd1a93191638168327.png",
                        url_logo_2x: "data/webuikit/226c4f4db3f2bc8ace08dc439ec471f11638168344.png",
                        url_logo_3x: "data/webuikit/a5ed0df57546dd5c68b736e96d69ad991638168353.png",
                        url_logo_4x: "data/webuikit/73110e52729fe955228063ee7db01b2e1638168362.png"
                    }
                },
                f = function e(t) {
                    var n = t.type,
                        a = void 0 === n ? "appstore" : n,
                        l = t.width,
                        o = void 0 === l ? 137 : l,
                        d = t.link,
                        u = void 0 === d ? "" : d,
                        f = parseInt(o * (40 / 137)),
                        m = c(a, o);
                    return r.default.createElement(e.A, {
                        href: u,
                        target: "_blank",
                        "aria-label": "app store link"
                    }, r.default.createElement(i.default, {
                        width: "".concat(o / 10, "rem"),
                        height: "".concat(f / 10, "rem"),
                        src: m
                    }))
                },
                c = function(e, t) {
                    return t <= 314 ? (0, d.getCDN)(u[e].url_logo_2x) : t <= 451 ? (0, d.getCDN)(u[e].url_logo_3x) : (0, d.getCDN)(u[e].url_logo_4x)
                };
            f.A = o.default.a.withConfig({
                componentId: "sc-16nfz79-0"
            })(["text-decoration:none;"]), f.propTypes = {
                type: l.default.oneOf(["appstore", "playstore"]),
                width: l.default.number,
                link: l.default.string
            };
            var m = f;
            t.default = m
        },
        "9quZ": (e, t, n) => {
            var a = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Appstore", {
                enumerable: !0,
                get: function() {
                    return l.default
                }
            }), Object.defineProperty(t, "AppstoreWhite", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "Playstore", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(t, "PlaystoreWhite", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            });
            var r = a(n("5jyK")),
                l = a(n("Xozv")),
                o = a(n("+Czg")),
                i = a(n("rSeK"))
        }
    }
]);