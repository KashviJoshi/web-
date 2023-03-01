"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3643], {
        AO9g: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("pP/M")),
                i = r(n("rS1O")),
                a = r(n("q1tI")),
                u = r(n("17x9")),
                l = n("sq3K"),
                c = ["src", "srcMobile", "alt", "id", "height", "heightMobile", "showTint", "tintBackground", "children", "large", "zImageProps"],
                f = function(e) {
                    var t = e.src,
                        n = e.srcMobile,
                        r = e.alt,
                        u = e.id,
                        f = e.height,
                        d = e.heightMobile,
                        s = e.showTint,
                        _ = e.tintBackground,
                        p = e.children,
                        m = e.large,
                        E = e.zImageProps,
                        g = (0, i.default)(e, c);
                    return a.default.createElement(l.Container, (0, o.default)({}, g, {
                        height: f,
                        heightMobile: d
                    }), a.default.createElement(l.ImageContainer, null, a.default.createElement(l.BackdropImage, (0, o.default)({
                        id: u,
                        src: t,
                        alt: r,
                        height: "100%"
                    }, E)), a.default.createElement(l.BackdropImage, (0, o.default)({
                        isMWeb: !0,
                        id: u,
                        src: n || t,
                        alt: r,
                        height: "100%"
                    }, E)), s && a.default.createElement(l.Gradient, {
                        tintBackground: _
                    })), a.default.createElement(l.ContentSection, {
                        large: m
                    }, p))
                };
            f.propTypes = {
                src: u.default.string.isRequired,
                alt: u.default.string.isRequired,
                id: u.default.string.isRequired,
                height: u.default.string.isRequired,
                srcMobile: u.default.string,
                showTint: u.default.bool,
                tintBackground: u.default.string,
                children: u.default.objectOf(u.default.any),
                heightMobile: u.default.string.isRequired,
                large: u.default.bool,
                zImageProps: u.default.objectOf(u.default.any)
            }, f.defaultProps = {
                srcMobile: "",
                tintBackground: "",
                heightMobile: "",
                large: !1,
                showTint: !1,
                zImageProps: {}
            };
            var d = f;
            t.default = d
        },
        bL8M: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("AO9g")).default;
            t.default = o
        },
        sq3K: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ImageContainer = t.Gradient = t.ContentSection = t.Container = t.BackdropImage = void 0;
            var o = r(n("vOnD")),
                i = r(n("lFeK")),
                a = o.default.div.withConfig({
                    componentId: "sc-1vtbhe-0"
                })(["max-width:none;height:100%;width:100%;max-width:none;@media (max-width:768px){width:100%;margin:0;max-width:none;}@media (max-width:480px){margin:0;max-width:none;}"]);
            t.ImageContainer = a;
            var u = o.default.div.withConfig({
                componentId: "sc-1vtbhe-1"
            })(["position:relative;height:", ";@media (max-width:480px){height:", ";}"], (function(e) {
                return e.height
            }), (function(e) {
                var t = e.height;
                return e.heightMobile || t
            }));
            t.Container = u;
            var l = (0, o.default)(i.default).withConfig({
                componentId: "sc-1vtbhe-2"
            })(["margin:auto;height:100%;display:", ";@media (max-width:480px){display:", ";}"], (function(e) {
                return e.isMWeb ? "none" : "block"
            }), (function(e) {
                return e.isMWeb ? "block" : "none"
            }));
            t.BackdropImage = l;
            var c = o.default.div.withConfig({
                componentId: "sc-1vtbhe-3"
            })(["position:absolute;left:50%;transform:translateX(-50%) rotate(-180deg);top:0;width:100%;height:100%;background:", ";@media (max-width:1440px){width:100%;}"], (function(e) {
                return e.tintBackground || "linear-gradient(rgba(0, 0, 0, 0) 57.17%, rgba(0, 0, 0, 0.46) 100%),\n    rgba(0, 0, 0, 0.3)"
            }));
            t.Gradient = c;
            var f = o.default.div.withConfig({
                componentId: "sc-1vtbhe-4"
            })(["position:absolute;top:0;left:50%;height:100%;transform:translateX(-50%);overflow:hidden;width:", "rem;@media (max-width:900px){width:100%;}@media (max-width:768px){width:calc(100% - 4.8rem);}"], (function(e) {
                return e.large ? 110 : 90
            }));
            t.ContentSection = f
        },
        kdDk: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("2qDD")).default;
            t.default = o
        },
        "J+Im": (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("pP/M")),
                i = r(n("q1tI")),
                a = r(n("w/pp")),
                u = r(n("6jlT")),
                l = function(e) {
                    var t = (0, u.default)();
                    return i.default.createElement(a.default, (0, o.default)({
                        uniqueId: t
                    }, e), i.default.createElement("title", null, "back"), i.default.createElement("path", {
                        d: "M18.98 9.42h-15.6l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-7 7c-0.1 0.1-0.2 0.2-0.2 0.3-0.1 0.3-0.1 0.5 0 0.8 0.1 0.1 0.1 0.2 0.2 0.3l7 7c0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3h15.6c0.6 0 1-0.4 1-1s-0.4-1-1-1z"
                    }))
                };
            t.default = l
        },
        BJIh: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("pP/M")),
                i = r(n("q1tI")),
                a = r(n("w/pp")),
                u = r(n("6jlT")),
                l = function(e) {
                    var t = (0, u.default)();
                    return i.default.createElement(a.default, (0, o.default)({
                        uniqueId: t
                    }, e), i.default.createElement("path", {
                        d: "M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM13.375 12.3125C13.6875 12.625 13.6875 13.125 13.375 13.4375C13.25 13.5625 13.0625 13.625 12.875 13.625C12.6875 13.625 12.5 13.5 12.375 13.4375L10 11.125L7.6875 13.4375C7.5625 13.5625 7.375 13.625 7.1875 13.625C7 13.625 6.8125 13.5 6.6875 13.4375C6.375 13.125 6.375 12.625 6.6875 12.3125L8.875 10L6.5625 7.6875C6.25 7.375 6.25 6.875 6.5625 6.5625C6.875 6.25 7.375 6.25 7.6875 6.5625L10 8.875L12.3125 6.5625C12.625 6.25 13.125 6.25 13.4375 6.5625C13.75 6.875 13.75 7.375 13.4375 7.6875L11.125 10L13.375 12.3125Z"
                    }))
                };
            t.default = l
        },
        Pm6m: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("pP/M")),
                i = r(n("q1tI")),
                a = r(n("w/pp")),
                u = r(n("6jlT")),
                l = function(e) {
                    var t = (0, u.default)();
                    return i.default.createElement(a.default, (0, o.default)({
                        uniqueId: t
                    }, e), i.default.createElement("title", null, "mail-fill"), i.default.createElement("path", {
                        d: "M10 9.58c-1.62 0-10-4.76-10-4.76v-0.74c0-0.92 0.74-1.66 1.66-1.66h16.68c0.92 0 1.66 0.74 1.66 1.66l-0.020 0.84c0 0-8.28 4.66-9.98 4.66zM10 11.86c1.78 0 9.98-4.46 9.98-4.46l0.020 10c0 0.92-0.74 1.66-1.66 1.66h-16.68c-0.92 0-1.66-0.74-1.66-1.66l0.020-10c0 0 8.36 4.46 9.98 4.46z"
                    }))
                };
            t.default = l
        },
        xnBh: (e, t, n) => {
            var r = n("JMD1"),
                o = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n("q1tI")),
                a = r(n("17x9")),
                u = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = f(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            u && (u.get || u.set) ? Object.defineProperty(r, a, u) : r[a] = e[a]
                        }
                    r.default = e, n && n.set(e, r);
                    return r
                }(n("vOnD")),
                l = n("YgTD"),
                c = n("SEds");

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (f = function(e) {
                    return e ? n : t
                })(e)
            }
            var d = function e(t) {
                return i.default.createElement(e.Element, t, t.children)
            };
            d.Element = u.default.mark.withConfig({
                componentId: "sc-qeo8wm-0"
            })(["line-height:", ";padding:0 0.2rem;margin-block-start:0.67em;margin-block-end:0.67em;margin-inline-start:0px;margin-inline-end:0px;font-weight:", ";", ""], l.lineHeight.regular, l.fontWeights.bold, (function(e) {
                switch (e.type) {
                    case "bg":
                        return (0, u.css)(["color:", ";background-color:", ";font-weight:", ";"], c.grey.z900, c.yellow.z200, l.fontWeights.medium);
                    case "strikethrough":
                        return (0, u.css)(["color:", ";text-decoration-line:line-through;background-color:transparent;"], c.grey.z800);
                    default:
                        return (0, u.css)(["color:", ";background-color:transparent;font-weight:", ";"], c.black, l.fontWeights.medium)
                }
            })), d.propTypes = {
                type: a.default.oneOf(["bg", "text", "strikethrough"])
            }, d.defaultProps = {
                type: "text"
            };
            var s = d;
            t.default = s
        },
        kkbd: (e, t, n) => {
            var r = n("JMD1"),
                o = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Mark", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(t, "P", {
                enumerable: !0,
                get: function() {
                    return a.P
                }
            }), Object.defineProperty(t, "Strong", {
                enumerable: !0,
                get: function() {
                    return a.Strong
                }
            }), Object.defineProperty(t, "Tag", {
                enumerable: !0,
                get: function() {
                    return a.Tag
                }
            }), Object.defineProperty(t, "Text", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(t, "Underline", {
                enumerable: !0,
                get: function() {
                    return a.Underline
                }
            });
            var i = r(n("xnBh")),
                a = function(e, t) {
                    if (!t && e && e.__esModule) return e;
                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                        default: e
                    };
                    var n = u(t);
                    if (n && n.has(e)) return n.get(e);
                    var r = {},
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(r, a, l) : r[a] = e[a]
                        }
                    r.default = e, n && n.set(e, r);
                    return r
                }(n("wcxm"));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (u = function(e) {
                    return e ? n : t
                })(e)
            }
        },
        "30GX": (e, t, n) => {
            var r = n("JMD1"),
                o = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n("Kq5O")),
                a = r(n("YOv7")),
                u = r(n("UNXm")),
                l = m(n("q1tI")),
                c = m(n("vOnD")),
                f = r(n("17x9")),
                d = r(n("HMsx")),
                s = r(n("LSsp")),
                _ = r(n("j399"));

            function p(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (p = function(e) {
                    return e ? n : t
                })(e)
            }

            function m(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== o(e) && "function" != typeof e) return {
                    default: e
                };
                var n = p(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                        var u = i ? Object.getOwnPropertyDescriptor(e, a) : null;
                        u && (u.get || u.set) ? Object.defineProperty(r, a, u) : r[a] = e[a]
                    }
                return r.default = e, n && n.set(e, r), r
            }
            var E = function(e) {
                    return new Promise((function(t, n) {
                        var r = new Image;
                        r.onload = function() {
                            t()
                        }, r.src = e
                    }))
                },
                g = function e(t) {
                    var r = t.src,
                        o = void 0 === r ? "" : r,
                        c = t.base64,
                        f = void 0 === c ? "" : c,
                        d = t.ratio,
                        s = void 0 === d ? 0 : d,
                        p = t.container,
                        m = void 0 === p ? null : p,
                        g = t.alt,
                        v = void 0 === g ? "image" : g,
                        h = t.fit,
                        b = void 0 === h ? "cover" : h,
                        y = t.doPreload,
                        I = void 0 !== y && y,
                        T = t.height,
                        C = void 0 === T ? "100%" : T,
                        A = t.width,
                        N = void 0 === A ? "100%" : A,
                        P = t.className,
                        S = void 0 === P ? "" : P,
                        L = t.onClick,
                        w = void 0 === L ? _.default : L,
                        R = (t.srcSet, t.fallBack),
                        M = void 0 === R ? "https://b.zmtcdn.com/images/placeholder_200.png?output-quality=70" : R,
                        F = t.isBackground,
                        D = void 0 !== F && F,
                        k = (t.bgGradient, t.customZimageComponent),
                        j = void 0 === k ? null : k,
                        x = t.loadingComponent,
                        G = void 0 === x ? null : x,
                        U = t.blurred,
                        z = void 0 === U ? "" : U,
                        B = t.noTransform,
                        H = void 0 !== B && B,
                        W = t.clickable,
                        q = void 0 !== W && W,
                        V = (0, l.useRef)(),
                        Y = (0, l.useState)(""),
                        K = (0, u.default)(Y, 2),
                        J = K[0],
                        Z = K[1],
                        X = (0, l.useState)(!1),
                        Q = (0, u.default)(X, 2),
                        $ = Q[0],
                        ee = Q[1],
                        te = (0, l.useState)(!1),
                        ne = (0, u.default)(te, 2),
                        re = (ne[0], ne[1]),
                        oe = function() {
                            z && ae(), ee(!0)
                        },
                        ie = function() {
                            re(!0), J && J !== M && Z(M)
                        };
                    (0, l.useEffect)((function() {
                        if (D && J) {
                            var e = new Image;
                            e.onload = oe, e.onerror = ie, e.src = J
                        }
                        $ && ee(!1)
                    }), [J]), (0, l.useEffect)((function() {
                        var e, t;
                        if (!I && "IntersectionObserver" in n.g) {
                            e = new IntersectionObserver((function(e) {
                                var t = (0, u.default)(e, 1)[0].isIntersecting;
                                void 0 !== t && t && J !== o && Z(o)
                            }), {
                                root: m,
                                threshold: s
                            }), (t = V.current) && e.observe(t)
                        } else Z(o);
                        return function() {
                            void 0 !== e && e.unobserve && t && e.unobserve(t)
                        }
                    }), [o]);
                    var ae = function() {
                            var e = (0, a.default)(i.default.mark((function e() {
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, E(J);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        ue = D ? j || e.BgDiv : e.img,
                        le = f ? e.base64 : G || e.Shimmer;
                    return l.default.createElement(e.Container, {
                        ref: V,
                        height: C,
                        width: N,
                        className: S,
                        onClick: w
                    }, z ? l.default.createElement(O, {
                        imgHeight: C,
                        imgWidth: N,
                        url: z,
                        fit: b
                    }) : l.default.createElement(le, {
                        isLoaded: !!J && $,
                        src: f
                    }), l.default.createElement(ue, {
                        alt: v,
                        src: J,
                        isLoaded: !!J && $,
                        onLoad: oe,
                        loading: I ? "auto" : "lazy",
                        fit: b,
                        onError: ie,
                        noTransform: H || !!z,
                        blurred: !!z,
                        clickable: !!q
                    }))
                };
            g.propTypes = {
                src: f.default.string,
                base64: f.default.string,
                ratio: f.default.number,
                container: f.default.node,
                alt: f.default.string.isRequired,
                fit: f.default.oneOf(["cover", "contain", "fill", "inherit", "initial", "none", "scale-down", "unset"]),
                doPreload: f.default.bool,
                height: f.default.string,
                width: f.default.string,
                maxHeight: f.default.string,
                className: f.default.string,
                onClick: f.default.func,
                fallBack: f.default.string,
                isBackground: f.default.bool,
                bgGradient: f.default.string,
                customZimageComponent: f.default.oneOfType([f.default.string, f.default.func]),
                loadingComponent: f.default.oneOfType([f.default.string, f.default.func]),
                noTransform: f.default.bool,
                blurred: f.default.string
            };
            var O = c.default.div.withConfig({
                componentId: "sc-s1isp7-0"
            })(["position:absolute;top:0;background-image:url(", ");width:", ";height:", ";background-size:", ";filter:blur(10px);"], (function(e) {
                return e.url
            }), (function(e) {
                return e.imgWidth
            }), (function(e) {
                return e.imgHeight
            }), (function(e) {
                return "none" === e.fit ? "".concat(e.imgWidth, " ").concat(e.imgHeight || "auto") : e.fit
            }));
            g.Container = c.default.div.withConfig({
                componentId: "sc-s1isp7-1"
            })(["position:relative;max-width:100%;width:", ";height:", ";overflow:hidden;"], (function(e) {
                return e.width
            }), (function(e) {
                return e.height ? e.height : "auto"
            }));
            var v = (0, c.keyframes)(["0%{background-position:-80vw 0;}100%{background-position:80vw 0;}"]);
            g.base64 = c.default.img.withConfig({
                componentId: "sc-s1isp7-2"
            })(["position:absolute;top:0;left:0;width:100%;height:100%;opacity:", ";will-change:transform,opacity;border-radius:inherit;transition:opacity 0.25s ease-in;"], (function(e) {
                return e.isLoaded ? 0 : 1
            })), g.Shimmer = c.default.div.withConfig({
                componentId: "sc-s1isp7-3"
            })(["width:100%;position:absolute;top:0;left:0;height:100%;background:", ";background-image:linear-gradient( to right,", " 0%,", " 10%,", " 40%,", " 100% );background-repeat:no-repeat;opacity:", ";transition:opacity 0.25s ease-out;will-change:opacity;border-radius:inherit;animation:", " 1.5s infinite linear forwards;"], d.default.z95, d.default.z95, s.default, d.default.z95, d.default.z95, (function(e) {
                return e.isLoaded ? 0 : 1
            }), v), g.BgDiv = c.default.div.withConfig({
                componentId: "sc-s1isp7-4"
            })(["width:100%;height:100%;transform:", ";opacity:", ";will-change:transform,opacity;border-radius:inherit;transition:opacity 0.25s ease,transform 0.25s ease;background-size:", ";background-position:center center;background-repeat:no-repeat;background-image:", ";"], (function(e) {
                return e.isLoaded || e.noTransform ? "none" : "scale(0.9)"
            }), (function(e) {
                return e.isLoaded ? 1 : 0
            }), (function(e) {
                return e.fit || "cover"
            }), (function(e) {
                return e.url && (e.bgGradient ? "".concat(e.bgGradient, ",url(").concat(e.url, ")") : "url(".concat(e.url, ")"))
            }));
            g.img = c.default.img.withConfig({
                componentId: "sc-s1isp7-5"
            })(["width:100%;height:100%;object-fit:", ";transform:", ";opacity:", ";will-change:transform,opacity;border-radius:inherit;filter:", ";transition:", ";:hover{transform:", ";filter:", ";}img:not([src]):not([srcset]){visibility:hidden;}@-moz-document url-prefix(){img:-moz-loading{visibility:hidden;}}"], (function(e) {
                return e.fit
            }), (function(e) {
                return e.isLoaded || e.noTransform ? "none" : "scale(0.9)"
            }), (function(e) {
                return e.isLoaded ? 1 : 0
            }), (function(e) {
                return e.clickable ? "brightness(0.95)" : "unset"
            }), (function(e) {
                var t = e.clickable,
                    n = e.blurred;
                return t && n ? "transform 0.4s ease-in-out, opacity 1.63s ease, filter 0.4s ease" : t ? "transform 0.4s ease-in-out, filter 0.4s ease, opacity 0.25s ease" : n ? "opacity 1.63s ease, transform 0.25s ease" : "opacity 0.25s ease, transform 0.25s ease"
            }), (function(e) {
                return e.clickable ? "scale(1.05)" : ""
            }), (function(e) {
                return e.clickable ? "brightness(1.05)" : ""
            }));
            var h = g;
            t.default = h
        },
        lFeK: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = r(n("30GX")).default;
            t.default = o
        },
        "09dp": (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = l(n("q1tI")),
                i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("vOnD")),
                a = l(n("17x9"));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                var e = _(["\n  border: none;\n  width: 100%;\n  border-bottom: ", ";\n  padding: 0;\n  margin: 0;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function f() {
                var e = _(["\n  position: absolute;\n  padding: 0.1rem 0.6rem 0.5rem 0.5rem;\n  background: #fff;\n  font-size: 1.8rem;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #696969;\n"]);
                return f = function() {
                    return e
                }, e
            }

            function d() {
                var e = _(["\n      margin: ", ";\n    "]);
                return d = function() {
                    return e
                }, e
            }

            function s() {
                var e = _(["\n  position: relative;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  ", "\n"]);
                return s = function() {
                    return e
                }, e
            }

            function _(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var p = function e(t) {
                var n = t.children,
                    r = t.className,
                    i = t.margin,
                    a = t.lineColor,
                    u = t.lineThikness;
                return o.default.createElement(e.Wrapper, {
                    margin: i
                }, o.default.createElement(e.El, {
                    className: r,
                    lineColor: a,
                    lineThikness: u
                }), n && o.default.createElement(e.text, null, n))
            };
            p.propTypes = {
                children: a.default.node,
                className: a.default.string,
                margin: a.default.string
            }, p.defaultProps = {
                children: null,
                className: "",
                margin: ""
            }, p.Wrapper = i.default.div(s(), (function(e) {
                return e.margin && (0, i.css)(d(), e.margin)
            })), p.text = i.default.span(f()), p.El = i.default.hr(c(), (function(e) {
                return m(e)
            }));
            var m = function(e) {
                    var t = e.lineColor,
                        n = e.lineThikness;
                    return "".concat(n || "1px", " solid ").concat(t || "#e8e8e8", "}")
                },
                E = p;
            t.default = E
        },
        BUyX: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = ((r = n("09dp")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = o
        },
        y8c3: (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.SocialButton = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = O();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                i = g(n("17x9")),
                a = g(n("vOnD")),
                u = g(n("HMsx")),
                l = g(n("LSsp")),
                c = g(n("wRyO")),
                f = g(n("j399")),
                d = g(n("lXQd")),
                s = g(n("ieZA")),
                _ = g(n("J1pR")),
                p = n("NsBr"),
                m = n("zzCw"),
                E = n("AgGD");

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return O = function() {
                    return e
                }, e
            }

            function v() {
                var e = y(["\n  display: flex;\n  flex-direction: column;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function h() {
                var e = y(["\n  width: 100%;\n  height: 4.8rem;\n  display: flex;\n  align-items: center;\n  padding-left: 6rem;\n  border: 1px solid #cfcfcf;\n  border-radius: 0.6rem;\n  cursor: ", ";\n  background: ", ";\n  :active {\n    background: ", ";\n  }\n  user-select: none;\n"]);
                return h = function() {
                    return e
                }, e
            }

            function b() {
                var e = y(["\n  color: #696969;\n  font-size: 1.8rem;\n  font-weight: 400;\n  margin-left: 1.5rem;\n"]);
                return b = function() {
                    return e
                }, e
            }

            function y(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function I() {
                return I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, I.apply(this, arguments)
            }

            function T(e, t, n, r, o, i, a) {
                try {
                    var u = e[i](a),
                        l = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var N = function(e) {
                var t = C((0, o.useState)(!1), 2),
                    n = t[0],
                    r = t[1],
                    i = e.loginSuccess,
                    a = e.loginFailure,
                    u = e.locale,
                    l = e.enableOneTap,
                    c = e.actionBasedCallback,
                    f = e.screen,
                    s = function(e) {
                        r(!1);
                        var t = e.success,
                            n = void 0 !== t && t,
                            o = e.message,
                            u = void 0 === o ? "" : o,
                            l = e.user_data,
                            d = void 0 === l ? {} : l;
                        c(E.GOOGLE_SIGN_IN, {
                            message: u,
                            screen: f,
                            success: n
                        }), n ? i(d) : a(u)
                    };
                (0, o.useEffect)((function() {
                    l && (window.onload = function() {
                        google.accounts.id.initialize({
                            client_id: "442739719837.apps.googleusercontent.com",
                            callback: O
                        }), google.accounts.id.prompt()
                    })
                }), []);
                var g = function(e) {
                        (0, m.doLogin)(m.LOGIN_TYPE_GOOGLE, {
                            id_token: e
                        }).then((function(e) {
                            return e.json()
                        })).then(s).catch(function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var n, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r(!1), n = "", !t.response) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.next = 5, t.response.json();
                                        case 5:
                                            o = e.sent, n = (0, d.default)(o, "message", ""), a(n), e.next = 12;
                                            break;
                                        case 10:
                                            n = u.error_occured_text, a(n);
                                        case 12:
                                            c(E.GOOGLE_SIGN_IN, {
                                                message: n,
                                                screen: f,
                                                success: !1
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    n = arguments;
                                return new Promise((function(r, o) {
                                    var i = e.apply(t, n);

                                    function a(e) {
                                        T(i, r, o, a, u, "next", e)
                                    }

                                    function u(e) {
                                        T(i, r, o, a, u, "throw", e)
                                    }
                                    a(void 0)
                                }))
                            });
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    },
                    O = function(e) {
                        var t = e.credential;
                        g(void 0 === t ? "" : t)
                    },
                    v = function(e) {
                        r(!1), c(E.GOOGLE_SIGN_IN, {
                            message: E.DEFAULT_ERROR_MESSAGE.message || "",
                            screen: f,
                            success: !1
                        })
                    };
                return o.default.createElement(L, null, o.default.createElement(P, {
                    text: u.continue_with_google_button_text,
                    icon: o.default.createElement(_.default, null),
                    onClick: function() {
                        r(!0), (0, p.handleGoogleLogin)(g, v)
                    },
                    loading: n
                }))
            };
            N.propTypes = {
                loginFailure: i.default.func.isRequired,
                loginSuccess: i.default.func.isRequired,
                actionBasedCallback: i.default.func
            }, N.defaultProps = {
                actionBasedCallback: f.default
            };
            var P = function e(t) {
                var n = t.icon,
                    r = t.text,
                    i = t.loading,
                    a = t.onClick;
                return o.default.createElement(e.Wrapper, I({}, t, {
                    role: "button",
                    tabIndex: "0",
                    "aria-label": r,
                    onClick: function() {
                        i || a()
                    }
                }), i ? o.default.createElement(s.default, {
                    size: "medium",
                    color: c.default.z500
                }) : n, o.default.createElement(S, null, r))
            };
            t.SocialButton = P;
            var S = a.default.span(b());
            P.Wrapper = a.default.div(h(), (function(e) {
                return e.loading ? "initial" : "pointer"
            }), (function(e) {
                return e.loading ? u.default.z100 : l.default
            }), (function(e) {
                return e.loading ? u.default.z100 : u.default.z95
            })), P.propTypes = {
                text: i.default.string.isRequired,
                icon: i.default.node.isRequired,
                locale: i.default.objectOf(i.default.string),
                enableOneTap: i.default.bool,
                loading: i.default.bool
            }, P.defaultProps = {
                enableOneTap: !1,
                loading: !1
            };
            var L = a.default.div(v()),
                w = N;
            t.default = w
        },
        zzCw: (e, t) => {
            var n;

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                        i(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.initiateProfileUpdate1FAVerificationFlow = t.initiateEmailUpdate2FAVerificationFlow = t.verifyOnefaOTP = t.verifyTwofaOTPEmailUpdate = t.doResend = t.doInitilizeData = t.doOTMEmailVerify = t.doMobileUserCreate = t.doEmailLinkAccount = t.doMobileLinkAccount = t.doMobileVerify = t.doVerify = t.doSignup = t.doLogin = t.LOGIN_TYPE_PHONE = t.LOGIN_TYPE_EMAIL = t.LOGIN_TYPE_FACEBOOK = t.LOGIN_TYPE_GOOGLE = void 0;
            var a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.headers,
                        r = void 0 === n ? {} : n,
                        i = o(o({}, t), {}, {
                            headers: o(o({}, r), {}, {
                                "x-zomato-csrft": window.csrft || ""
                            })
                        });
                    return fetch(e, i)
                },
                u = "user",
                l = "auth",
                c = (i(n = {}, u, {
                    windowRoute: "__USER_DEV_ROUTE",
                    originRoute: "/webroutes/user",
                    zomatoRoute: "/user"
                }), i(n, l, {
                    windowRoute: "__AUTH_DEV_ROUTE",
                    originRoute: "/webroutes/auth",
                    zomatoRoute: "/auth"
                }), n),
                f = [u, l],
                d = function(e) {
                    if (!f.includes(e)) return "";
                    var t = c[e],
                        n = "";
                    if ("undefined" != typeof window) {
                        var r = t.windowRoute;
                        n = r in window ? window[r] : "".concat(window.location.origin).concat(t.originRoute)
                    } else n = "".concat("https://www.zomato.com/webroutes").concat(t.zomatoRoute);
                    return n
                },
                s = function(e) {
                    return "".concat(d(u)).concat(e)
                };
            t.LOGIN_TYPE_GOOGLE = "google";
            t.LOGIN_TYPE_FACEBOOK = "facebook";
            t.LOGIN_TYPE_EMAIL = "email";
            t.LOGIN_TYPE_PHONE = "phone";
            var _ = {
                    google: ["id_token"],
                    facebook: ["fbid", "access_token"],
                    email: ["email_id", "hash"],
                    phone: ["country_id", "phone", "verification_type"]
                },
                p = function(e) {
                    return {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    }
                },
                m = function(e) {
                    return "".concat(d(l)).concat(e)
                };
            t.doLogin = function(e, t) {
                var n = function(e, t) {
                        var n = {};
                        return (_[e] || []).forEach((function(e) {
                            n[e] = t[e] || ""
                        })), n.method = e, n
                    }(e, t),
                    r = m("/login"),
                    o = p(n);
                return a(r, o)
            };
            t.doSignup = function(e) {
                var t = m("/signup"),
                    n = p(e);
                return a(t, n)
            };
            t.doVerify = function(e) {
                var t = m("/verify"),
                    n = p(e);
                return a(t, n)
            };
            t.doMobileVerify = function(e) {
                var t = m("/mobile_login/verify"),
                    n = p(e);
                return a(t, n)
            };
            t.doMobileLinkAccount = function(e) {
                var t = m("/mobile_login/link"),
                    n = p(e);
                return a(t, n)
            };
            t.doEmailLinkAccount = function(e) {
                var t = m("/mobile_login/send_login_link"),
                    n = p(e);
                return a(t, n)
            };
            t.doMobileUserCreate = function(e) {
                var t = m("/create_user"),
                    n = p(e);
                return a(t, n)
            };
            t.doOTMEmailVerify = function(e) {
                var t = m("/mobile_login/verify_otp_link"),
                    n = p(e);
                return a(t, n)
            };
            t.doInitilizeData = function(e) {
                var t = m("/init");
                return a(t, {
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            };
            t.doResend = function(e) {
                var t = m("/resend"),
                    n = p(e);
                return a(t, n)
            };
            t.verifyTwofaOTPEmailUpdate = function(e) {
                var t = s("/email/update/verify "),
                    n = p(e);
                return a(t, n)
            };
            t.verifyOnefaOTP = function(e) {
                var t = s("/auth/verification/verify"),
                    n = p(e);
                return a(t, n)
            };
            t.initiateEmailUpdate2FAVerificationFlow = function(e) {
                var t = s("/email/update/init"),
                    n = p(e);
                return a(t, n)
            };
            t.initiateProfileUpdate1FAVerificationFlow = function(e) {
                var t = s("/auth/verification/init"),
                    n = p(e);
                return a(t, n)
            }
        },
        "+S4G": (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatLangKey = t.OTPexhaustedText = t.Span = t.StyledP = t.Gap5 = t.Gap10 = t.Gap24 = t.validatePhone = t.validateName = t.validateEmail = void 0;
            var o = f(n("q1tI")),
                i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("vOnD")),
                a = n("kkbd"),
                u = f(n("wRyO")),
                l = n("SEds");

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d() {
                var e = g(["\n  font-size: 1.4rem;\n  color: #696969;\n  line-height: 2.1rem;\n  width: 70%;\n  margin: 0 0 4rem 0;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function s() {
                var e = g(["\n  color: ", ";\n  cursor: pointer;\n  line-height: ", ";\n  font-size: ", ";\n"]);
                return s = function() {
                    return e
                }, e
            }

            function _() {
                var e = g(["\n  line-height: ", ";\n  font-size: ", ";\n  color: ", ";\n  text-align: ", ";\n  margin: ", ";\n"]);
                return _ = function() {
                    return e
                }, e
            }

            function p() {
                var e = g(["\n  margin-bottom: 0.5rem;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function m() {
                var e = g(["\n  margin-bottom: 1rem;\n"]);
                return m = function() {
                    return e
                }, e
            }

            function E() {
                var e = g(["\n  margin-bottom: 2.4rem;\n  display: block;\n"]);
                return E = function() {
                    return e
                }, e
            }

            function g(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            t.validateEmail = function(e) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())
            };
            t.validateName = function(e) {
                return !(!e || e.length < 2 || /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g.test(e))
            };
            t.validatePhone = function(e, t) {
                return 1 === t ? 10 === e.toString().length : e.toString().length > 1
            };
            var O = i.default.span(E());
            t.Gap24 = O;
            var v = i.default.span(m());
            t.Gap10 = v;
            var h = i.default.span(p());
            t.Gap5 = h;
            var b = (0, i.default)(a.P)(_(), (function(e) {
                return e.lineHeight || "1rem"
            }), (function(e) {
                return e.fontSize || "1.6rem"
            }), (function(e) {
                return e.color || l.black
            }), (function(e) {
                return e.textAlign || "left"
            }), (function(e) {
                return e.paraMargin || "inherit inherit 2"
            }));
            t.StyledP = b;
            var y = i.default.span(s(), u.default.z500, (function(e) {
                return e.lineHeight || "inherit"
            }), (function(e) {
                return e.fontSize || "inherit"
            }));
            t.Span = y;
            var I = i.default.p(d());
            t.OTPexhaustedText = I;
            t.formatLangKey = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var i = new RegExp(/(\{[\d]+\})/),
                    a = !1,
                    u = e.split(i).map((function(e) {
                        if (e.match(i)) {
                            var t = Number(e.slice(1).slice(0, -1));
                            return o.default.isValidElement(n[t]) ? (a || (a = !0), n[t]) : "string" != typeof n[t] ? n[t].toString() : n[t]
                        }
                        return e
                    }));
                return a ? u : u.join("")
            }
        },
        nLaI: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                i = n("B8oK");
            var a = function(e) {
                var t = e.locale,
                    n = e.links || {},
                    r = n.tos,
                    a = void 0 === r ? "" : r,
                    u = n.privacy,
                    l = void 0 === u ? "" : u,
                    c = n.content,
                    f = void 0 === c ? "" : c;
                return o.default.createElement(o.default.Fragment, null, o.default.createElement(i.TermsContainer, null, t.agree_to_zomato_policy_text_v2, o.default.createElement(i.ConditionsContainer, null, o.default.createElement(i.Condition, null, o.default.createElement(i.A, {
                    href: a
                }, t.terms_of_service_text)), o.default.createElement(i.Condition, null, o.default.createElement(i.A, {
                    href: l
                }, t.privacy_policy_text)), o.default.createElement(i.Condition, null, o.default.createElement(i.A, {
                    href: f
                }, t.content_policies)))))
            };
            t.default = a
        },
        HQku: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = ((r = n("nLaI")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = o
        },
        B8oK: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.A = t.Condition = t.ConditionsContainer = t.TermsContainer = void 0;
            var r = i(n("vOnD")),
                o = i(n("HMsx"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a() {
                var e = f(["\n  text-decoration: none;\n  font-weight: 400;\n  color: ", ";\n"]);
                return a = function() {
                    return e
                }, e
            }

            function u() {
                var e = f(["\n  line-height: 1.6rem;\n  font-size: 1.2rem;\n  color: ", ";\n  position: relative;\n  padding-bottom: 1px;\n  border-bottom: 1px dashed ", ";\n"]);
                return u = function() {
                    return e
                }, e
            }

            function l() {
                var e = f(["\n  margin-top: 0.6rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 30rem;\n"]);
                return l = function() {
                    return e
                }, e
            }

            function c() {
                var e = f(["\n  line-height: 1.6rem;\n  font-size: 1.2rem;\n  color: #696969;\n  width: 100%;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 2rem;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function f(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var d = r.default.div(c());
            t.TermsContainer = d;
            var s = r.default.div(l());
            t.ConditionsContainer = s;
            var _ = r.default.div(u(), o.default.z700, o.default.z700);
            t.Condition = _;
            var p = r.default.a(a(), o.default.z700);
            t.A = p
        },
        AgGD: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TWO_FA_RESEND = t.ONE_FA_RESEND = t.ENTERED_NEW_EMAIL = t.ONEFA_VERIFICATION_INITIATED = t.TWOFA_EMAIL_VERIFICATION_INITIATED = t.TWOFA_EMAIL_VERIFICATION_SUCCESSFUL = t.ONEFA_VERIFICATION_SUCCESSFUL = t.EMAIL_TWO_FA_FOR_EDIT_PROFILE = t.EMAIL_ONE_FA_FOR_EDIT_PROFILE = t.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE = t.CLOSE_OTP_REASONS = t.USER_PROFILE_UPDATE_TYPES = t.LOGIN_TYPES = t.SELECTED_COUNTRY_CODE = t.CREATE_ACCOUNT_SCREEN = t.PHONE_CREATE_ACCOUNT_SCREEN = t.MULTI_ACCOUNT_SCREEN = t.OTP_SCREEN = t.LOGIN_SCREEN = t.ACCOUNT_LINK = t.PHONE_CREATE_ACCOUNT = t.CREATE_ACCOUNT = t.SEND_LOGIN_OTP = t.GOOGLE_SIGN_IN = t.OTP_ENTERED = t.TAP_BUTTON = t.SUCCESS_CALLBACK_ACTION = t.SCREEN_LOADED_ACTION = t.ERROR_CALLBACK_ACTION = t.OTM_EMAIL_VERIFICATION_ACTION = t.CHANGE_LOGIN_INPUT_TYPE_ACTION = t.SET_SELECTED_COUNTRY_DATA_ACTION = t.DEFAULT_ERROR_MESSAGE = t.EMAIL_ENTITY = t.PHONE_ENTITY = t.PHONE_LOGIN_OTP_VERIFY = t.OTM_EMAIL_LINK_OTP_VERIFICATION = t.DEFAULT_OTP_VERIFICATION = t.PHONE_LOGIN_OTP_VERFICATION = t.EMAIL_LOGIN_METHOD = t.FACEBOOK_LOGIN_METHOD = t.GOOGLE_LOGIN_METHOD = t.LOGIN_CASE_ALREADY_REGISTERED = t.LOGIN_CASE_OTM_MAPPING = t.LOGIN_CASE_OTO_MAPPING = t.LOGIN_CASE_NEW_USER = t.staticLang = void 0;
            t.staticLang = {
                login_failed_title: "Login Failed",
                signup_failed_title: "Signup Failed",
                otp_verification_title: "Enter Verification Code",
                login_title: "Login",
                signup_title: "Signup",
                signup_name_error_message: "Please enter a valid name",
                signup_empty_email_error_message: "Please enter an email",
                signup_invalid_email_error_message: "Invalid Email id",
                signup_invalid_phone_error_message: "Invalid Phone Number",
                signup_phone_error_message: "Please enter phone number",
                signup_full_name_label: "Full Name",
                signup_email_label: "Email",
                signup_email_label_optional: "Email(optional)",
                signup_phone_label: "Phone number",
                terms_of_service_text: "Terms of Service",
                privacy_policy_text: "Privacy Policy",
                content_policies: "Content Policies",
                agree_to_zomato_policy_text: "I agree to Zomato's {0}, {1} and {2}",
                create_account_button_text: "Create account",
                already_have_an_account_text: "Already have an account? {0}",
                login_with_phone_error: "Login with Phone number is not currently available",
                new_to_zomato_text: "New to Zomato?",
                send_otp_text: "Send OTP",
                error_messaage_box_try_other_methods_text: "Try using other methods",
                error_messaage_box_skip_for_now_text: "Skip for now",
                new_otp_has_been_sent_text: "A new OTP has been sent",
                not_received_otp_text: "Didn't receive OTP?",
                resend_now_text: "Resend Now",
                terminate_verification_text: "Are you sure you want to terminate the verification?",
                yes_button_text: "Yes",
                no_button_text: "No",
                continue_with_google_button_text: "Continue with Google",
                error_occured_text: "Error occured!",
                or_text: "or",
                otp_text_box_label: "OTP",
                otp_text_box_proceed_button: "Proceed",
                agree_to_zomato_policy_text_v2: "By continuing, you agree to our",
                checkout_login_flow_login_title: "Verify your phone number",
                checkout_login_flow_login_subtitle: "We need your number to place the order",
                checkout_login_flow_otp_screen: "Enter OTP",
                checkout_continue_with_email_caption: "Continue with Email",
                checkout_otp_flow_change_number: "Change number",
                phone_login_new_user_title: "Provide Personal Details",
                phone_login_new_user_subtitle: "Tell us a bit more about yourself",
                phone_number_verified_text: "Verified phone number",
                checkout_flow_phone_login_otp_header_text: "We have sent an OTP to {0}",
                checkout_flow_new_user_phone_login_button_caption: "Continue"
            };
            t.LOGIN_CASE_NEW_USER = 1;
            t.LOGIN_CASE_OTO_MAPPING = 2;
            t.LOGIN_CASE_OTM_MAPPING = 3;
            t.LOGIN_CASE_ALREADY_REGISTERED = 4;
            t.GOOGLE_LOGIN_METHOD = "google";
            t.FACEBOOK_LOGIN_METHOD = "facebook";
            t.EMAIL_LOGIN_METHOD = "email";
            t.PHONE_LOGIN_OTP_VERFICATION = "PHONE_LOGIN_VERFICATION";
            t.DEFAULT_OTP_VERIFICATION = "DEFAULT_OTP_VERIFICATION";
            t.OTM_EMAIL_LINK_OTP_VERIFICATION = "OTM_EMAIL_LINK_OTP_VERIFICATION";
            t.PHONE_LOGIN_OTP_VERIFY = "PHONE_LOGIN_OTP_VERIFY";
            t.PHONE_ENTITY = "phone";
            t.EMAIL_ENTITY = "email";
            t.DEFAULT_ERROR_MESSAGE = {
                message: "Something went wrong, please try again"
            };
            t.SET_SELECTED_COUNTRY_DATA_ACTION = "SET_SELECTED_COUNTRY_DATA_ACTION";
            t.CHANGE_LOGIN_INPUT_TYPE_ACTION = "CHANGE_LOGIN_INPUT_TYPE_ACTION";
            t.OTM_EMAIL_VERIFICATION_ACTION = "OTM_EMAIL_VERIFICATION_ACTION";
            t.ERROR_CALLBACK_ACTION = "ERROR_CALLBACK_ACTION";
            t.SCREEN_LOADED_ACTION = "SCREEN_LOADED_ACTION";
            t.SUCCESS_CALLBACK_ACTION = "SUCCESS_CALLBACK_ACTION";
            t.TAP_BUTTON = "TAP_BUTTON";
            t.OTP_ENTERED = "OTP_ENTERED";
            t.GOOGLE_SIGN_IN = "GOOGLE_SIGN_IN";
            t.SEND_LOGIN_OTP = "SEND_LOGIN_OTP";
            t.CREATE_ACCOUNT = "CREATE_ACCOUNT";
            t.PHONE_CREATE_ACCOUNT = "PHONE_CREATE_ACCOUNT";
            t.ACCOUNT_LINK = "ACCOUNT_LINK";
            t.LOGIN_SCREEN = "LOGIN_SCREEN";
            t.OTP_SCREEN = "OTP_SCREEN";
            t.MULTI_ACCOUNT_SCREEN = "MULTI_ACCOUNT_SCREEN";
            t.PHONE_CREATE_ACCOUNT_SCREEN = "PHONE_CREATE_ACCOUNT_SCREEN";
            t.CREATE_ACCOUNT_SCREEN = "CREATE_ACCOUNT_SCREEN";
            t.SELECTED_COUNTRY_CODE = {
                countryId: 1,
                name: "India",
                isdCode: 91,
                alpha2Code: "IN",
                alpha3Code: "IND",
                isoCurrencyCode: "INR",
                flagImgUrl: "https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
            };
            t.LOGIN_TYPES = {
                LOGIN: "login",
                SIGNUP: "signup"
            };
            t.USER_PROFILE_UPDATE_TYPES = {
                PHONE: "USER_PROFILE_PHONE_UPDATE",
                EMAIL: "USER_PROFILE_EMAIL_UPDATE"
            };
            t.CLOSE_OTP_REASONS = {
                CLOSE_MODAL: "CLOSE_MODAL",
                CHANGE_NUMBER: "CHANGE_NUMBER"
            };
            t.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE = "PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE";
            t.EMAIL_ONE_FA_FOR_EDIT_PROFILE = "EMAIL_ONE_FA_FOR_EDIT_PROFILE";
            t.EMAIL_TWO_FA_FOR_EDIT_PROFILE = "EMAIL_TWO_FA_FOR_EDIT_PROFILE";
            t.ONEFA_VERIFICATION_SUCCESSFUL = "ONEFA_VERIFICATION_SUCCESSFUL";
            t.TWOFA_EMAIL_VERIFICATION_SUCCESSFUL = "TWOFA_EMAIL_VERIFICATION_SUCCESSFUL";
            t.TWOFA_EMAIL_VERIFICATION_INITIATED = "TWOFA_EMAIL_VERIFICATION_INITIATED";
            t.ONEFA_VERIFICATION_INITIATED = "ONEFA_VERIFICATION_INITIATED";
            t.ENTERED_NEW_EMAIL = "ENTERED_NEW_EMAIL";
            t.ONE_FA_RESEND = "ONE_FA_RESEND";
            t.TWO_FA_RESEND = "TWO_FA_RESEND"
        },
        J1pR: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("q1tI")),
                o = i(n("17x9"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = function(e) {
                var t = e.size;
                return r.default.createElement("svg", {
                    width: t,
                    height: t,
                    viewBox: "0 0 22 22",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, r.default.createElement("path", {
                    d: "M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z",
                    fill: "#FBBB00"
                }), r.default.createElement("path", {
                    d: "M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z",
                    fill: "#518EF8"
                }), r.default.createElement("path", {
                    d: "M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z",
                    fill: "#28B446"
                }), r.default.createElement("path", {
                    d: "M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z",
                    fill: "#F14336"
                }))
            };
            a.propTypes = {
                size: o.default.number
            }, a.defaultProps = {
                size: 24
            };
            var u = a;
            t.default = u
        },
        qZ2b: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("q1tI")),
                o = a(n("17x9")),
                i = n("O4kB");

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                var t = e.onAccept,
                    n = e.onReject,
                    o = e.visible,
                    a = e.acceptLabel,
                    u = e.rejectLabel,
                    l = e.title,
                    c = void 0 === l ? "" : l,
                    f = e.message;
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(i.StyledModal, {
                    visible: o,
                    padding: "2.4rem",
                    isCentered: !0
                }, r.default.createElement(i.StyledH4, null, c), r.default.createElement(i.StyledPTag, {
                    fontSize: "1.4rem",
                    fontWeight: "400"
                }, f), r.default.createElement("div", null, r.default.createElement(i.StyledButton, {
                    appearance: "link",
                    btnColor: "blue",
                    size: "medium",
                    onClick: t
                }, a)), r.default.createElement("div", null, r.default.createElement(i.StyledButton, {
                    appearance: "link",
                    btnColor: "red",
                    size: "medium",
                    onClick: n
                }, u))))
            };
            u.propTypes = {
                onAccept: o.default.func.isRequired,
                onReject: o.default.func.isRequired,
                visible: o.default.bool.isRequired,
                acceptLabel: o.default.string.isRequired,
                rejectLabel: o.default.string.isRequired,
                type: o.default.string,
                title: o.default.string.isRequired,
                message: o.default.string.isRequired
            }, u.defaultProps = {
                type: "small"
            };
            var l = u;
            t.default = l
        },
        "1Nrc": (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = C(n("q1tI")),
                i = I(n("17x9")),
                a = I(n("vOnD")),
                u = I(n("kdDk")),
                l = n("wcxm"),
                c = I(n("aowA")),
                f = I(n("+cBz")),
                d = I(n("lFeK")),
                s = I(n("Pm6m")),
                _ = n("SEds"),
                p = I(n("N/Eu")),
                m = I(n("j399")),
                E = I(n("lXQd")),
                g = I(n("HQku")),
                O = n("zzCw"),
                v = C(n("y8c3")),
                h = I(n("BUyX")),
                b = n("+S4G"),
                y = n("AgGD");

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return T = function() {
                    return e
                }, e
            }

            function C(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var t = T();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                    }
                return n.default = e, t && t.set(e, n), n
            }

            function A() {
                var e = w(["\n  padding-top: ", ";\n  height: 4.8rem;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function N() {
                var e = w(["\n  position: relative;\n  width: 16rem;\n  height: 16rem;\n  margin: auto;\n  margin-top: -3rem;\n"]);
                return N = function() {
                    return e
                }, e
            }

            function P() {
                var e = w(["\n  background-color: ", ";\n  border-radius: 0.4rem;\n  -webkit-appearance: none;\n  &::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  -moz-appearance: textfield;\n"]);
                return P = function() {
                    return e
                }, e
            }

            function S() {
                var e = w(["\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  width: 100%;\n  text-align: center;\n  color: ", ";\n  font-weight: 500;\n  margin-top: 1.6rem;\n  margin-bottom: 0.8rem;\n"]);
                return S = function() {
                    return e
                }, e
            }

            function L() {
                var e = w(["\n  margin-top: 0.4rem;\n  margin-bottom: 1rem;\n  & > span {\n    font-weight: 400;\n  }\n"]);
                return L = function() {
                    return e
                }, e
            }

            function w(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function R() {
                return R = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, R.apply(this, arguments)
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return F(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return F(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var D = function(e) {
                    var t = e.handleOnSignupClick,
                        n = e.sendLoginOTP,
                        r = e.setLoginError,
                        i = e.userDataCallback,
                        a = e.locale,
                        u = e.enableOneTap,
                        l = e.enablePhoneLogin,
                        c = e.countryCodeData,
                        f = e.actionBasedCallback,
                        d = e.selectedLoginInputType,
                        m = e.o2CheckoutFlow,
                        E = e.visible,
                        h = e.links,
                        I = e.setPhoneNumberLoginDetails,
                        T = e.hash,
                        C = e.emailEditFlow,
                        A = e.updateFlowsActionBasedCallback,
                        N = c.selectedCountryCode,
                        P = void 0 === N ? {} : N,
                        S = M((0, o.useState)(""), 2),
                        L = S[0],
                        w = S[1],
                        R = M((0, o.useState)(null), 2),
                        F = R[0],
                        D = R[1],
                        G = M((0, o.useState)(!1), 2),
                        U = G[0],
                        z = G[1],
                        B = function(e) {
                            var t = e.success,
                                r = void 0 !== t && t,
                                o = e.message,
                                i = void 0 === o ? "" : o;
                            r ? C ? n(e) : n(F.val, i, d, e) : w(i), f(y.TAP_BUTTON, {
                                message: i,
                                tapButtonName: a.send_otp_text,
                                type: y.SEND_LOGIN_OTP,
                                success: r,
                                screen: y.LOGIN_SCREEN
                            })
                        },
                        H = function(e) {
                            var t = e.success,
                                r = void 0 !== t && t,
                                o = e.message,
                                i = void 0 === o ? "" : o;
                            A(y.ENTERED_NEW_EMAIL, {
                                success: r,
                                message: i
                            }), r ? n(e, F.val) : w(i)
                        };
                    (0, o.useEffect)((function() {
                        E && f(y.SCREEN_LOADED_ACTION, {
                            screen: y.LOGIN_SCREEN
                        })
                    }), [E]), (0, o.useEffect)((function() {
                        w(""), D(null)
                    }), [d]);
                    var W = M((0, o.useState)(m), 2),
                        q = W[0],
                        V = W[1];
                    (0, o.useEffect)((function() {
                        V(m)
                    }), [m]);
                    var Y, K = d !== O.LOGIN_TYPE_EMAIL;
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(j, {
                        isModalVisible: E,
                        input: F,
                        handleCountryChange: function(e) {
                            f(y.SET_SELECTED_COUNTRY_DATA_ACTION, e)
                        },
                        handleOnChange: function(e, t) {
                            L && w(""), D({
                                val: e,
                                isPhone: t
                            })
                        },
                        errorMessage: L,
                        locale: a,
                        enablePhoneLogin: l,
                        countryCodeData: c,
                        selectedLoginInputType: d,
                        handleSubmit: function() {
                            if (F)
                                if (F.isPhone) {
                                    var e = P.countryId,
                                        t = void 0 === e ? 1 : e;
                                    (0, b.validatePhone)(F.val, t) ? (z(!0), (0, O.doLogin)(O.LOGIN_TYPE_PHONE, {
                                        phone: F.val,
                                        country_id: t,
                                        verification_type: "sms"
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        I({
                                            phone: F.val,
                                            countryId: t
                                        }), z(!1), B(e)
                                    })).catch((function(e) {
                                        z(!1), B(y.DEFAULT_ERROR_MESSAGE)
                                    }))) : w(a.signup_invalid_phone_error_message)
                                } else {
                                    (0, b.validateEmail)(F.val) ? (z(!0), C ? (0, O.initiateEmailUpdate2FAVerificationFlow)({
                                        email_id: F.val,
                                        hash: T
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        z(!1), H(e)
                                    })).catch((function(e) {
                                        z(!1), H(y.DEFAULT_ERROR_MESSAGE)
                                    })) : (0, O.doLogin)(O.LOGIN_TYPE_EMAIL, {
                                        email_id: F.val
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        z(!1), B(e)
                                    })).catch((function(e) {
                                        z(!1), B(y.DEFAULT_ERROR_MESSAGE)
                                    }))) : w(a.signup_invalid_email_error_message)
                                }
                            else {
                                var n = d === O.LOGIN_TYPE_EMAIL ? a.signup_empty_email_error_message : a.signup_phone_error_message;
                                w(n)
                            }
                        },
                        isFetching: U,
                        showLineSeparator: !m
                    }), Boolean(K && m && q) && o.default.createElement(o.default.Fragment, null, o.default.createElement(x, {
                        appearance: "link",
                        icon: o.default.createElement(p.default, null),
                        iconAlign: "right",
                        onClick: function() {
                            return V(!1)
                        }
                    }, a.checkout_continue_with_email_caption)), Boolean(K && !q) && o.default.createElement(o.default.Fragment, null, o.default.createElement(v.SocialButton, {
                        text: a.checkout_continue_with_email_caption,
                        onClick: (Y = O.LOGIN_TYPE_EMAIL, function() {
                            w(""), D(null), f(y.CHANGE_LOGIN_INPUT_TYPE_ACTION, {
                                type: Y
                            })
                        }),
                        icon: o.default.createElement(s.default, {
                            color: _.red.z500,
                            size: 24
                        })
                    }), o.default.createElement(b.Gap24, null), o.default.createElement(v.default, {
                        loginSuccess: i,
                        loginFailure: r,
                        locale: a,
                        enableOneTap: u,
                        actionBasedCallback: f,
                        screen: y.LOGIN_SCREEN
                    }), o.default.createElement(b.Gap24, null), m && o.default.createElement(k, {
                        locale: a,
                        handleOnSignupClick: t,
                        o2CheckoutFlow: m
                    })), Boolean(K && m) && o.default.createElement(g.default, {
                        locale: a,
                        links: h
                    }), Boolean(K && !m) && o.default.createElement(k, {
                        locale: a,
                        handleOnSignupClick: t
                    }))
                },
                k = function(e) {
                    var t = e.locale,
                        n = e.handleOnSignupClick,
                        r = e.o2CheckoutFlow;
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(h.default, R({
                        margin: "0 0 1.6rem 0"
                    }, r && {
                        lineColor: _.grey.z200,
                        lineThikness: "0.5px",
                        margin: "0 0 0.8rem 0"
                    })), o.default.createElement(b.StyledP, R({
                        fontSize: "1.6rem"
                    }, r && {
                        fontSize: "1.2rem",
                        lineHeight: "1.8rem",
                        paraMargin: "0 0 2rem 0",
                        textAlign: "center"
                    }), "".concat(t.new_to_zomato_text, " "), o.default.createElement(b.Span, R({
                        lineHeight: "1.6rem",
                        onClick: n
                    }, r && {
                        lineHeight: "1.8rem",
                        fontSize: "1.2rem"
                    }), t.create_account_button_text)))
                },
                j = function(e) {
                    var t = e.handleOnChange,
                        n = e.handleCountryChange,
                        r = e.errorMessage,
                        i = e.locale,
                        a = e.enablePhoneLogin,
                        u = e.countryCodeData,
                        l = e.selectedLoginInputType,
                        f = e.handleSubmit,
                        d = e.isFetching,
                        s = e.showLineSeparator,
                        _ = e.isModalVisible,
                        m = e.input,
                        g = u || {},
                        v = g.allCountryCode,
                        y = void 0 === v ? [] : v,
                        I = g.selectedCountryCode,
                        T = void 0 === I ? {} : I,
                        C = T.countryId,
                        A = void 0 === C ? 1 : C,
                        N = M((0, o.useState)(""), 2),
                        P = N[0],
                        S = N[1],
                        L = M((0, o.useState)(""), 2),
                        w = L[0],
                        F = L[1];
                    var D = l === O.LOGIN_TYPE_PHONE ? {
                        type: "number",
                        pattern: "[0-9]{1}",
                        inputMode: "numeric"
                    } : {};
                    return o.default.createElement(o.default.Fragment, null, Boolean(l === O.LOGIN_TYPE_EMAIL) && o.default.createElement(o.default.Fragment, null, o.default.createElement(z, {
                        src: "https://b.zmtcdn.com/Zwebmolecules/73b3ee9d469601551f2a0952581510831595917292.png",
                        imgAlt: "Email Icon",
                        height: "3.5rem",
                        width: "16rem",
                        fit: "contain"
                    }), o.default.createElement(c.default, {
                        value: P,
                        label: i.signup_email_label,
                        fullWidth: !0,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onChange: function(e) {
                            t(e, !1), S(e)
                        },
                        errorMsg: r,
                        hideLabel: !0
                    }), o.default.createElement(b.Gap10, null), o.default.createElement(B, {
                        btnColor: "red",
                        onClick: f,
                        loading: d,
                        isError: !!r
                    }, i.send_otp_text)), Boolean(l === O.LOGIN_TYPE_PHONE && a) && o.default.createElement(o.default.Fragment, null, o.default.createElement(U, R({}, D, {
                        width: "100%",
                        placeholder: i.signup_phone_label,
                        onChange: function(e) {
                            e && !/^[0-9]+$/.test(e) || (t(e, !0), F(e))
                        },
                        fnCountryChange: n,
                        errorText: r,
                        countries: y,
                        defaultIsdCode: T.isdCode,
                        autoFocusInput: _,
                        value: w
                    })), o.default.createElement(B, R({
                        disabled: !(0, b.validatePhone)((0, E.default)(m, "val", ""), A),
                        btnColor: "red",
                        onClick: f,
                        loading: d,
                        isError: !!r
                    }, !s && {
                        icon: o.default.createElement(p.default, null),
                        iconAlign: "right"
                    }), i.send_otp_text), Boolean(s) ? o.default.createElement(o.default.Fragment, null, o.default.createElement(b.Gap24, null), o.default.createElement(h.default, {
                        margin: "0 0 2.4rem 0"
                    }, i.or_text)) : o.default.createElement(o.default.Fragment, null, o.default.createElement(G, null, (i.or_text || "").toUpperCase()))))
                },
                x = (0, a.default)(u.default)(L()),
                G = (0, a.default)(l.P)(S(), _.grey.z800),
                U = (0, a.default)(f.default)(P(), _.grey.z50),
                z = (0, a.default)(d.default)(N()),
                B = (0, a.default)(u.default)(A(), (function(e) {
                    return e.isError ? "0.6rem" : "0"
                }));
            j.propTypes = {
                setPhoneNumberLoginDetails: i.default.func.isRequired,
                handleOnChange: i.default.func.isRequired,
                handleCountryChange: i.default.func.isRequired,
                errorMessage: i.default.string,
                locale: i.default.objectOf(i.default.string).isRequired,
                enablePhoneLogin: i.default.bool,
                selectedLoginInputType: i.default.string.isRequired
            }, j.defaultProps = {
                errorMessage: "",
                locale: {},
                enablePhoneLogin: !1
            }, D.propTypes = {
                handleOnSignupClick: i.default.func.isRequired,
                sendLoginOTP: i.default.func.isRequired,
                setLoginError: i.default.func.isRequired,
                userDataCallback: i.default.func.isRequired,
                locale: i.default.objectOf(i.default.string).isRequired,
                enableOneTap: i.default.bool,
                enablePhoneLogin: i.default.bool,
                actionBasedCallback: i.default.func,
                selectedLoginInputType: i.default.string.isRequired,
                visible: i.default.bool,
                hash: i.default.string,
                emailEditFlow: i.default.bool,
                updateFlowsActionBasedCallback: i.default.func
            }, D.defaultProps = {
                enableOneTap: !1,
                hash: "",
                emailEditFlow: !1,
                enablePhoneLogin: !1,
                actionBasedCallback: m.default,
                visible: !1,
                updateFlowsActionBasedCallback: m.default
            };
            var H = D;
            t.default = H
        },
        Q4ka: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = _(n("q1tI")),
                o = _(n("17x9")),
                i = _(n("vOnD")),
                a = _(n("bL8M")),
                u = n("SEds"),
                l = _(n("BJIh")),
                c = _(n("BAyj")),
                f = _(n("j399")),
                d = _(n("1Nrc")),
                s = n("zzCw");

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p() {
                var e = O(["\n  position: absolute;\n  width: 100%;\n  bottom: 2rem;\n  padding: 0 2rem;\n  @media (max-width: 480px) {\n    bottom: 13rem;\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }

            function m() {
                var e = O(["\n  border-radius: 0.6rem;\n  overflow: hidden;\n  div:nth-child(2) {\n    width: 100%;\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function E() {
                var e = O(["\n  border-radius: 1.2rem;\n  overflow: hidden;\n  height: 43rem;\n  @media (max-width: 480px) {\n    height: ", ";\n  }\n"]);
                return E = function() {
                    return e
                }, e
            }

            function g() {
                var e = O(["\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  padding: 2rem;\n"]);
                return g = function() {
                    return e
                }, e
            }

            function O(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var v = function(e) {
                    var t = e.enablePhoneLogin,
                        n = void 0 !== t && t,
                        o = e.selectedLoginInputType,
                        i = void 0 === o ? "" : o,
                        a = e.onClose,
                        l = e.showShimmer,
                        f = e.showSmallShimmer;
                    return l ? r.default.createElement(b, {
                        height: f ? "50vh" : "95vh"
                    }, r.default.createElement(c.default, {
                        width: "100%",
                        height: "100%"
                    })) : r.default.createElement(r.default.Fragment, null, i !== s.LOGIN_TYPE_PHONE || n ? r.default.createElement(d.default, e) : r.default.createElement(r.default.Fragment, null, r.default.createElement(y, {
                        id: "styledFluid",
                        height: "43rem",
                        heightMobile: "95vh",
                        src: "https://b.zmtcdn.com/zwebmolecules/fdf80c52548d914d6ee1ed8f727855481595928059.png",
                        srcMobile: "https://b.zmtcdn.com/Zwebmolecules/5c8215b9c28d2372335efe23beb2c3b61595916877.png",
                        alt: "Login-background"
                    }, r.default.createElement(I, null, r.default.createElement(d.default, e))), r.default.createElement(h, {
                        color: u.red.z400,
                        size: 28,
                        onClick: a
                    })))
                },
                h = (0, i.default)(l.default)(g()),
                b = i.default.div(E(), (function(e) {
                    return e.height || "95vh"
                })),
                y = (0, i.default)(a.default)(m()),
                I = i.default.div(p());
            v.propTypes = {
                enablePhoneLogin: o.default.bool,
                selectedLoginInputType: o.default.string,
                onClose: o.default.func,
                showShimmer: o.default.bool
            }, v.defaultProps = {
                enablePhoneLogin: !1,
                selectedLoginInputType: "",
                onClose: f.default,
                showShimmer: !1
            };
            var T = v;
            t.default = T
        },
        oboH: (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.Gap10 = void 0;
            var o = O(n("q1tI")),
                i = O(n("vOnD")),
                a = E(n("17x9")),
                u = E(n("OHja")),
                l = E(n("qZ2b")),
                c = E(n("aowA")),
                f = E(n("kdDk")),
                d = E(n("HMsx")),
                s = E(n("j399")),
                _ = n("zzCw"),
                p = n("AgGD"),
                m = n("+S4G");

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return g = function() {
                    return e
                }, e
            }

            function O(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" !== r(e) && "function" != typeof e) return {
                    default: e
                };
                var t = g();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if (Object.prototype.hasOwnProperty.call(e, i)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                    }
                return n.default = e, t && t.set(e, n), n
            }

            function v() {
                var e = N(["\n  margin-bottom: 1rem;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function h() {
                var e = N(["\n  font-size: 1.7rem;\n  text-align: center;\n  line-height: 2.2rem;\n  margin: ", ";\n  color: ", ";\n  font-weight: ", ";\n"]);
                return h = function() {
                    return e
                }, e
            }

            function b() {
                var e = N(["\n      cursor: pointer;\n      color: #ed5a6b;\n    "]);
                return b = function() {
                    return e
                }, e
            }

            function y() {
                var e = N(["\n  color: #b5b5b5;\n  ", "\n"]);
                return y = function() {
                    return e
                }, e
            }

            function I() {
                var e = N(["\n  font-size: 1.6rem;\n  line-height: 2rem;\n  color: #696969;\n  text-align: center;\n  margin-top: 0.8rem;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function T() {
                var e = N(["\n  font-size: 1.2rem;\n  color: ", ";\n  margin: 0.5rem 0 0;\n  text-align: center;\n"]);
                return T = function() {
                    return e
                }, e
            }

            function C() {
                var e = N(["\n  min-height: 2.2rem !important;\n  & > span {\n    min-height: 2.2rem !important;\n    font-size: 1.5rem;\n    font-weight: 400;\n  }\n  margin-bottom: 1.6rem;\n"]);
                return C = function() {
                    return e
                }, e
            }

            function A() {
                var e = N(["\n  font-size: 3.2rem;\n  line-height: 4.5rem;\n  color: #1c1c1c;\n  text-align: center;\n  margin: 2rem 0 0 0;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function N(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        L(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function L(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var M = function(e) {
                    var t = e.o2CheckoutFlow,
                        n = e.phoneNumberLoginDetails,
                        r = e.countryCode,
                        i = e.headerText,
                        a = e.closeModal,
                        d = e.currentEmail,
                        s = e.currentPhone,
                        E = e.setShowOTPScreen,
                        g = e.setLoginError,
                        O = e.setShowDialog,
                        v = e.showDialog,
                        h = e.userDataCallback,
                        b = e.type,
                        y = e.locale,
                        I = e.countryId,
                        T = e.verificationType,
                        C = e.actionBasedCallback,
                        A = e.userHash,
                        N = e.updateFlowsActionBasedCallback,
                        P = e.messageUuid,
                        L = y.new_otp_has_been_sent_text,
                        R = w((0, o.useState)(""), 2),
                        M = R[0],
                        z = R[1],
                        B = w((0, o.useState)(!1), 2),
                        H = B[0],
                        W = B[1],
                        q = w((0, o.useState)(30), 2),
                        V = q[0],
                        Y = q[1],
                        K = w((0, o.useState)(!1), 2),
                        J = K[0],
                        Z = K[1],
                        X = w((0, o.useState)(!1), 2),
                        Q = X[0],
                        $ = X[1],
                        ee = w((0, o.useState)(""), 2),
                        te = ee[0],
                        ne = ee[1],
                        re = w((0, o.useState)(p.CLOSE_OTP_REASONS.CLOSE_MODAL), 2),
                        oe = re[0],
                        ie = re[1];
                    (0, o.useEffect)((function() {
                        var e = {
                            screen: p.OTP_SCREEN
                        };
                        T === p.OTM_EMAIL_LINK_OTP_VERIFICATION && (e = S(S({}, e), {}, {
                            pageOpenSource: "multi_link_accounts"
                        })), C(p.SCREEN_LOADED_ACTION, e)
                    }), []);
                    var ae = function(e) {
                            $(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.TWOFA_EMAIL_VERIFICATION_INITIATED, {
                                success: n,
                                message: o
                            }), n ? N(p.TWOFA_EMAIL_VERIFICATION_SUCCESSFUL, {
                                response: e
                            }) : (W(!0), z(o))
                        },
                        ue = function(e) {
                            $(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.user_data,
                                o = void 0 === r ? {} : r,
                                i = e.message,
                                a = void 0 === i ? "" : i;
                            C(p.OTP_ENTERED, {
                                message: a,
                                success: n,
                                verificationType: T,
                                screen: p.OTP_SCREEN
                            }), n ? (E(!1), h(o)) : function(e) {
                                var t = e.message,
                                    n = void 0 === t ? "" : t,
                                    r = e.error_type;
                                switch (void 0 === r ? "" : r) {
                                    case "filled-wrong-password-general":
                                    case "filled-wrong-password-few-attempts-left":
                                        W(!0), z(n);
                                        break;
                                    default:
                                        g(n)
                                }
                            }(e)
                        },
                        le = function(e) {
                            $(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.user_data,
                                o = void 0 === r ? {} : r,
                                i = e.message,
                                a = void 0 === i ? "" : i;
                            C(p.OTP_ENTERED, {
                                message: a,
                                success: n,
                                verificationType: T,
                                screen: p.OTP_SCREEN,
                                pageOpenSource: "multi_link_accounts"
                            }), n ? h(o) : (W(!0), z(a))
                        },
                        ce = function(e) {
                            $(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.ONEFA_VERIFICATION_INITIATED, {
                                success: n,
                                message: o
                            }), n ? N(p.ONEFA_VERIFICATION_SUCCESSFUL, {
                                response: e
                            }) : (W(!0), z(o))
                        },
                        fe = function(e) {
                            $(!1);
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.user_data,
                                o = void 0 === r ? {} : r,
                                i = e.message,
                                a = void 0 === i ? "" : i;
                            if (C(p.OTP_ENTERED, {
                                    message: a,
                                    success: n,
                                    verificationType: T,
                                    screen: p.OTP_SCREEN
                                }), n) {
                                var u = e.login_case,
                                    l = void 0 === u ? "" : u;
                                switch (l) {
                                    case p.LOGIN_CASE_OTO_MAPPING:
                                    case p.LOGIN_CASE_ALREADY_REGISTERED:
                                        E(!1), h(o);
                                        break;
                                    case p.LOGIN_CASE_OTM_MAPPING:
                                    case p.LOGIN_CASE_NEW_USER:
                                        C(p.PHONE_LOGIN_OTP_VERIFY, {
                                            screen: l,
                                            response: e
                                        });
                                        break;
                                    default:
                                        E(!1), h(o)
                                }
                            } else W(!0), z(a)
                        },
                        de = function(e) {
                            var t = {};
                            T === p.PHONE_LOGIN_OTP_VERFICATION ? (t = {
                                phone: s,
                                code: e,
                                country_id: I
                            }, (0, _.doMobileVerify)(t).then((function(e) {
                                return e.json()
                            })).then(fe)) : T === p.OTM_EMAIL_LINK_OTP_VERIFICATION ? (t = {
                                hash: A,
                                token: e
                            }, (0, _.doOTMEmailVerify)(t).then((function(e) {
                                return e.json()
                            })).then(le)) : [p.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE, p.EMAIL_ONE_FA_FOR_EDIT_PROFILE].includes(T) ? (t = {
                                hash: A,
                                otp: e
                            }, (0, _.verifyOnefaOTP)(t).then((function(e) {
                                return e.json()
                            })).then(ce)) : T === p.EMAIL_TWO_FA_FOR_EDIT_PROFILE ? (t = {
                                otp: e,
                                hash: A
                            }, (0, _.verifyTwofaOTPEmailUpdate)(t).then((function(e) {
                                return e.json()
                            })).then(ae)) : (t = {
                                email_id: d,
                                otp: e
                            }, (0, _.doVerify)(t).then((function(e) {
                                return e.json()
                            })).then(ue))
                        },
                        se = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            n ? (W(!1), z(L), Y(30)) : (W(!0), z(o), Z(!0))
                        },
                        _e = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.ONE_FA_RESEND, {
                                success: n,
                                message: o
                            }), se(e)
                        },
                        pe = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                r = e.message,
                                o = void 0 === r ? "" : r;
                            N(p.TWO_FA_RESEND, {
                                success: n,
                                message: o
                            }), se(e)
                        };
                    (0, o.useEffect)((function() {
                        var e = null;
                        return 0 === V ? (z(""), Z(!0)) : e = setInterval((function() {
                                return Y(V - 1)
                            }), 1e3),
                            function() {
                                return e && clearInterval(e)
                            }
                    }), [V]);
                    var me = T === p.PHONE_LOGIN_OTP_VERFICATION && b === p.LOGIN_TYPES.LOGIN || T === p.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE && b === p.USER_PROFILE_UPDATE_TYPES.EMAIL,
                        Ee = t && me ? (0, m.formatLangKey)(y.checkout_flow_phone_login_otp_header_text, o.default.createElement(G, {
                            boxMargin: "0",
                            fontWeight: 600
                        }, "+".concat(r, "-").concat(n.phone || ""))) : i;
                    return o.default.createElement(o.default.Fragment, null, o.default.createElement(G, null, Ee), me && !b === p.USER_PROFILE_UPDATE_TYPES.EMAIL && o.default.createElement(D, {
                        appearance: "link",
                        onClick: function() {
                            ie(p.CLOSE_OTP_REASONS.CHANGE_NUMBER), O(!0)
                        }
                    }, y.checkout_otp_flow_change_number), me ? o.default.createElement(u.default, {
                        length: 6,
                        fnInputFill: function(e) {
                            $(!0), de(e)
                        },
                        onChange: function() {
                            return M && z("")
                        },
                        loading: Q,
                        inputType: "number"
                    }) : o.default.createElement(o.default.Fragment, null, o.default.createElement(c.default, {
                        value: te,
                        label: y.otp_text_box_label,
                        fullWidth: !0,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onChange: function(e) {
                            ne(e)
                        },
                        hideLabel: !0
                    }), o.default.createElement(U, null), o.default.createElement(f.default, {
                        btnColor: "red",
                        loading: Q,
                        onClick: function() {
                            $(!0), de(te)
                        }
                    }, y.otp_text_box_proceed_button)), o.default.createElement(k, {
                        isError: H
                    }, M), o.default.createElement(F, {
                        time: "00:".concat(V < 10 ? "0".concat(V) : V)
                    }), o.default.createElement(j, null, y.not_received_otp_text, " ", o.default.createElement(x, {
                        enabled: J,
                        onClick: function() {
                            if (J)
                                if (Z(!1), T === p.PHONE_LOGIN_OTP_VERFICATION)(0, _.doLogin)(_.LOGIN_TYPE_PHONE, {
                                    phone: s,
                                    country_id: I,
                                    verification_type: "sms"
                                }).then((function(e) {
                                    return e.json()
                                })).then(se).catch((function(e) {
                                    return se(p.DEFAULT_ERROR_MESSAGE)
                                }));
                                else if (T === p.OTM_EMAIL_LINK_OTP_VERIFICATION)(0, _.doEmailLinkAccount)({
                                hash: A
                            }).then((function(e) {
                                return e.json()
                            })).then(se).catch((function(e) {
                                return se(p.DEFAULT_ERROR_MESSAGE)
                            }));
                            else if ([p.PHONE_NUMBER_ONE_FA_FOR_EDIT_PROFILE, p.EMAIL_ONE_FA_FOR_EDIT_PROFILE].includes(T)) {
                                var e = {
                                    message_uuid: P,
                                    entity: p.EMAIL_ENTITY
                                };
                                (0, _.initiateProfileUpdate1FAVerificationFlow)(e).then((function(e) {
                                    return e.json()
                                })).then(_e).catch((function(e) {
                                    return se(p.DEFAULT_ERROR_MESSAGE)
                                }))
                            } else if (T === p.EMAIL_TWO_FA_FOR_EDIT_PROFILE) {
                                var t = {
                                    email_id: d,
                                    hash: A
                                };
                                (0, _.initiateEmailUpdate2FAVerificationFlow)(t).then((function(e) {
                                    return e.json()
                                })).then(pe).catch((function(e) {
                                    return se(p.DEFAULT_ERROR_MESSAGE)
                                }))
                            } else(0, _.doResend)({
                                email_id: d,
                                type: b
                            }).then((function(e) {
                                return e.json()
                            })).then(se).catch((function(e) {
                                return se(p.DEFAULT_ERROR_MESSAGE)
                            }))
                        }
                    }, y.resend_now_text)), o.default.createElement(l.default, {
                        visible: v,
                        onAccept: function() {
                            O(!1), E(!1), oe == p.CLOSE_OTP_REASONS.CLOSE_MODAL && a(), C(p.ERROR_CALLBACK_ACTION, {
                                message: "Manually closed otp screen",
                                screen: p.OTP_SCREEN,
                                verificationType: T
                            })
                        },
                        onReject: function() {
                            ie(p.CLOSE_OTP_REASONS.CLOSE_MODAL), O(!1)
                        },
                        acceptLabel: y.yes_button_text,
                        rejectLabel: y.no_button_text,
                        message: y.terminate_verification_text
                    }))
                },
                F = function e(t) {
                    var n = t.time;
                    return o.default.createElement(e.Text, null, n)
                };
            F.Text = i.default.p(A()), F.propTypes = {
                time: a.default.string.isRequired
            };
            var D = (0, i.default)(f.default)(C()),
                k = i.default.p(T(), (function(e) {
                    return e.isError ? "#ed5a6b" : "#2781e7"
                })),
                j = i.default.p(I()),
                x = i.default.span(y(), (function(e) {
                    return e.enabled && (0, i.css)(b())
                })),
                G = i.default.p(h(), (function(e) {
                    return e.boxMargin || "0 0 0.8rem 0"
                }), d.default.z800, (function(e) {
                    return e.fontWeight || 300
                })),
                U = i.default.span(v());
            t.Gap10 = U, M.propTypes = {
                headerText: a.default.string.isRequired,
                currentEmail: a.default.string.isRequired,
                currentPhone: a.default.string.isRequired,
                closeModal: a.default.func.isRequired,
                setShowOTPScreen: a.default.func.isRequired,
                setLoginError: a.default.func.isRequired,
                showDialog: a.default.bool.isRequired,
                setShowDialog: a.default.func.isRequired,
                userDataCallback: a.default.func.isRequired,
                type: a.default.string.isRequired,
                locale: a.default.objectOf(a.default.string),
                countryId: a.default.number.isRequired,
                verificationType: a.default.string,
                actionBasedCallback: a.default.func.isRequired,
                userHash: a.default.string,
                messageUuid: a.default.string,
                updateFlowsActionBasedCallback: a.default.func
            }, M.defaultProps = {
                updateFlowsActionBasedCallback: s.default,
                verificationType: p.DEFAULT_OTP_VERIFICATION,
                userHash: "",
                messageUuid: ""
            };
            var z = M;
            t.default = z
        },
        O4kB: (e, t, n) => {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Timer = t.StyledModal = t.StyledH4 = t.ResendSpan = t.ResendSection = t.TextDiv = t.StyledZImage = t.StyledButton = t.StyledPTag = t.StyledP = t.StyledSpan = t.WidthDiv = t.LinkedAccounts = t.MarginDiv = t.GoBack = t.FlexWrapper = void 0;
            var o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = _();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("vOnD")),
                i = s(n("lFeK")),
                a = n("kkbd"),
                u = s(n("wRyO")),
                l = s(n("gAKm")),
                c = s(n("FrN4")),
                f = s(n("kdDk")),
                d = s(n("J+Im"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return _ = function() {
                    return e
                }, e
            }

            function p() {
                var e = w(["\n  font-size: 3rem;\n  line-height: 4rem;\n  color: #1c1c1c;\n  text-align: center;\n  margin: 1rem 0 0 0;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function m() {
                var e = w(["\n  z-index: 101 !important;\n  @media only screen and (min-width: 481px) {\n    div:nth-child(2) {\n      width: 40rem;\n    }\n  }\n\n  div:nth-child(2) {\n    text-align: center;\n    border-radius: 2.5rem;\n  }\n"]);
                return m = function() {
                    return e
                }, e
            }

            function E() {
                var e = w(["\n  padding-bottom: 1.5rem;\n"]);
                return E = function() {
                    return e
                }, e
            }

            function g() {
                var e = w(["\n      cursor: pointer;\n      color: #ed5a6b;\n    "]);
                return g = function() {
                    return e
                }, e
            }

            function O() {
                var e = w(["\n  color: #b5b5b5;\n  ", "\n"]);
                return O = function() {
                    return e
                }, e
            }

            function v() {
                var e = w(["\n  font-size: 1.6rem;\n  line-height: 2.1rem;\n  color: #696969;\n  text-align: center;\n"]);
                return v = function() {
                    return e
                }, e
            }

            function h() {
                var e = w(["\n  padding-left: 2rem;\n  cursor: pointer;\n  flex-grow: 1;\n"]);
                return h = function() {
                    return e
                }, e
            }

            function b() {
                var e = w(["\n  border-radius: 50%;\n"]);
                return b = function() {
                    return e
                }, e
            }

            function y() {
                var e = w(["\n  span {\n    font-weight: ", ";\n    font-size: 1.6rem;\n  }\n"]);
                return y = function() {
                    return e
                }, e
            }

            function I() {
                var e = w(["\n  padding-bottom: 2rem;\n  text-align: center;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function T() {
                var e = w(["\n  font-weight: ", ";\n  font-size: ", ";\n"]);
                return T = function() {
                    return e
                }, e
            }

            function C() {
                var e = w(["\n  color: ", ";\n  cursor: pointer;\n"]);
                return C = function() {
                    return e
                }, e
            }

            function A() {
                var e = w(["\n  width: ", ";\n"]);
                return A = function() {
                    return e
                }, e
            }

            function N() {
                var e = w(["\n  margin: 2rem 0 2rem 0;\n  padding-left: 3rem;\n"]);
                return N = function() {
                    return e
                }, e
            }

            function P() {
                var e = w(["\n  margin: 3rem 0 3rem 0;\n"]);
                return P = function() {
                    return e
                }, e
            }

            function S() {
                var e = w(["\n  cursor: pointer;\n"]);
                return S = function() {
                    return e
                }, e
            }

            function L() {
                var e = w(["\n  display: flex;\n  align-items: center;\n  padding: 1rem 0 1rem 0;\n  justify-content: ", ";\n"]);
                return L = function() {
                    return e
                }, e
            }

            function w(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var R = o.default.div(L(), (function(e) {
                return e.justifyContent ? e.justifyContent : "initial"
            }));
            t.FlexWrapper = R;
            var M = (0, o.default)(d.default)(S());
            t.GoBack = M;
            var F = o.default.div(P());
            t.MarginDiv = F;
            var D = o.default.div(N());
            t.LinkedAccounts = D;
            var k = o.default.div(A(), (function(e) {
                return e.width ? e.width : 0
            }));
            t.WidthDiv = k;
            var j = o.default.span(C(), u.default.z500);
            t.StyledSpan = j;
            var x = (0, o.default)(a.P)(T(), (function(e) {
                return e.fontWeight ? e.fontWeight : 500
            }), (function(e) {
                return e.fontSize
            }));
            t.StyledP = x;
            var G = (0, o.default)(x)(I());
            t.StyledPTag = G;
            var U = (0, o.default)(f.default)(y(), (function(e) {
                return e.fontWeight ? e.fontWeight : "500"
            }));
            t.StyledButton = U;
            var z = (0, o.default)(i.default)(b());
            t.StyledZImage = z;
            var B = o.default.div(h());
            t.TextDiv = B;
            var H = o.default.p(v());
            t.ResendSection = H;
            var W = o.default.span(O(), (function(e) {
                return e.enabled && (0, o.css)(g())
            }));
            t.ResendSpan = W;
            var q = (0, o.default)(l.default)(E());
            t.StyledH4 = q;
            var V = (0, o.default)(c.default)(m());
            t.StyledModal = V;
            var Y = (0, o.default)(a.P)(p());
            t.Timer = Y
        }
    }
]);