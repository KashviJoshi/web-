"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6400], {
        STzO: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("pP/M")),
                o = r(n("q1tI")),
                l = r(n("w/pp")),
                i = r(n("6jlT")),
                u = function(e) {
                    var t = (0, i.default)();
                    return o.default.createElement(l.default, (0, a.default)({
                        uniqueId: t
                    }, e), o.default.createElement("path", {
                        d: "M0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20C4.5 20 0 15.5 0 10ZM10.75 15.4375V10.1875H12.1875L12.375 8.375H10.75V7.5C10.75 7.0625 10.8125 6.8125 11.5 6.8125H12.375V5H10.9375C9.1875 5 8.625 5.875 8.625 7.3125V8.375H7.5V10.1875H8.5625V15.4375C8.5625 15.4375 10.75 15.4375 10.75 15.4375Z"
                    }))
                };
            t.default = u
        },
        t1mY: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("pP/M")),
                o = r(n("q1tI")),
                l = r(n("w/pp")),
                i = r(n("6jlT")),
                u = function(e) {
                    var t = (0, i.default)();
                    return o.default.createElement(l.default, (0, a.default)({
                        uniqueId: t
                    }, e), o.default.createElement("path", {
                        d: "M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM13.5 14.1875C12.6875 14.9375 11.5 15.4375 10.125 15.4375C8.125 15.4375 6.375 14.25 5.5625 12.5625C5.1875 11.8125 5 11.0625 5 10.1875C5 9.3125 5.1875 8.5625 5.5625 7.875C6.375 6.1875 8.125 5 10.125 5C11.5 5 12.6875 5.5 13.5625 6.3125L12.125 7.75C11.75 7.4375 11.125 7 10.125 7C8.8125 7 7.625 7.9375 7.25 9.1875C7.125 9.5 7.0625 9.875 7.0625 10.1875C7.0625 10.5 7.125 10.9375 7.25 11.25C7.6875 12.5 8.8125 13.4375 10.125 13.4375C10.875 13.4375 11.4375 13.1875 11.875 12.9375C12.5625 12.4375 12.875 11.6875 12.9375 11.25H10.125V9.3125H14.9375C15 9.625 15.0625 9.9375 15.0625 10.375C15 11.875 14.4375 13.25 13.5 14.1875Z"
                    }))
                };
            t.default = u
        },
        NvCb: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("pP/M")),
                o = r(n("q1tI")),
                l = r(n("w/pp")),
                i = r(n("6jlT")),
                u = function(e) {
                    var t = (0, i.default)();
                    return o.default.createElement(l.default, (0, a.default)({
                        uniqueId: t
                    }, e), o.default.createElement("path", {
                        d: "M10 20C4.5 20 0 15.5 0 10C0 4.5 4.5 0 10 0C15.5 0 20 4.5 20 10C20 15.5 15.5 20 10 20ZM10.1875 9.5625C11.0625 9.5625 15.4375 7.125 15.4375 7.125V6.6875C15.4375 6.1875 15.0625 5.8125 14.5625 5.8125H5.875C5.375 5.8125 5 6.25 5 6.6875V7.0625C5 7.0625 9.375 9.5625 10.1875 9.5625ZM10.1875 10.75C9.375 10.75 5 8.4375 5 8.4375V13.6875C5 14.125 5.375 14.5625 5.875 14.5625H14.5625C15.0625 14.5625 15.4375 14.1875 15.4375 13.6875V8.4375C15.4375 8.4375 11.125 10.75 10.1875 10.75Z"
                    }))
                };
            t.default = u
        },
        NFB5: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("watF")),
                o = r(n("q1tI")),
                l = r(n("17x9")),
                i = r(n("j399")),
                u = r(n("vOnD")),
                c = n("3o+L"),
                d = (r(n("czsM")), r(n("hkzt"))),
                f = function e(t) {
                    var n = (0, c.getType)(t.disabled, t.solid);
                    return o.default.createElement(e.Label, t, o.default.createElement(e.Element, {
                        key: t.value,
                        disabled: t.disabled,
                        cbType: n,
                        type: "checkbox",
                        onChange: function(e) {
                            e.stopPropagation(), e.persist(), t.onChange((0, a.default)({}, t.value, !t.checked), e)
                        },
                        checked: t.checked,
                        "aria-checked": t.checked,
                        color: t.color
                    }), t.label)
                },
                s = function(e) {
                    return e.disabled ? "not-allowed" : "pointer"
                };
            f.Label = u.default.label.withConfig({
                componentId: "sc-1o2pknd-0"
            })(["font-size:14px;line-height:1.2;color:#1c1c1c;height:18px;cursor:", ";display:flex;align-items:center;justify-content:start;height:100%;width:max-content;"], s), f.Element = u.default.input.withConfig({
                componentId: "sc-1o2pknd-1"
            })(["appearance:none;cursor:", ";outline:0;border-radius:4px;margin-right:8px;width:18px;height:18px;background:#fff;border:2px solid ", ";box-sizing:border-box;position:relative;&:hover{border:2px solid ", ';}transition:all 0.4s;&:checked::after{position:absolute;top:3.5%;left:30%;width:0.55rem;height:1rem;content:"";border-color:', ";border-style:solid;border-top:0;border-right-width:2px;border-bottom-width:2px;border-left:0;transform:rotate(48deg);}&:checked{border:2px solid ", ";background:", ";}"], s, (0, c.getAttributes)("borderColor"), (0, c.getAttributes)("hoverBorderColor"), (0, c.getClickedAttributes)("tickColor"), (0, c.getClickedAttributes)("borderColor"), (0, c.getClickedAttributes)("background")), f.propTypes = {
                label: l.default.string.isRequired,
                value: l.default.string.isRequired,
                onChange: l.default.func,
                checked: l.default.bool,
                disabled: l.default.bool,
                solid: l.default.bool,
                color: l.default.string
            }, f.defaultProps = {
                disabled: !1,
                onChange: i.default,
                checked: !1,
                solid: !0,
                color: d.default.z500
            };
            var m = f;
            t.default = m
        },
        "3o+L": (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getType = t.getClickedAttributes = t.getAttributes = void 0;
            var r = n("hJYu");
            t.getClickedAttributes = function(e) {
                return function(t) {
                    return function(e, t) {
                        return r.checkboxSelected[e](t)
                    }(t.cbType, t.color)[e]
                }
            };
            t.getAttributes = function(e) {
                return function(t) {
                    return function(e, t) {
                        return e ? r.checkbox.disabled : r.checkbox.default(t)
                    }(t.disabled, t.color)[e]
                }
            };
            t.getType = function(e, t) {
                var n = [];
                return e && n.push("disabled"), t && n.push("solid"), n.length ? n.join("_") : "default"
            }
        },
        U8Rt: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("NFB5")).default;
            t.default = a
        },
        sSbF: (e, t, n) => {
            var r = n("JMD1"),
                a = n("YovJ");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = v(n("q1tI")),
                l = v(n("vOnD")),
                i = r(n("17x9")),
                u = r(n("PlcA")),
                c = r(n("kdDk")),
                d = r(n("i0d3")),
                f = r(n("5An4")),
                s = r(n("LSsp")),
                m = r(n("HMsx")),
                p = r(n("j399")),
                b = r(n("lXQd")),
                g = r(n("NANp")),
                _ = n("fHDd");

            function h(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    n = new WeakMap;
                return (h = function(e) {
                    return e ? n : t
                })(e)
            }

            function v(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" !== a(e) && "function" != typeof e) return {
                    default: e
                };
                var n = h(t);
                if (n && n.has(e)) return n.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
                        var i = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        i && (i.get || i.set) ? Object.defineProperty(r, l, i) : r[l] = e[l]
                    }
                return r.default = e, n && n.set(e, r), r
            }
            var O = {
                    small: "20vw",
                    medium: "40vw",
                    large: "60vw",
                    huge: "95vw",
                    default: "max-content"
                },
                C = function e(t) {
                    var n = t.mode,
                        r = t.onClose,
                        a = t.visible,
                        l = t.type,
                        i = t.children,
                        c = t.isDialog,
                        d = t.onAccept,
                        s = t.onReject,
                        b = t.acceptLabel,
                        g = t.rejectLabel,
                        h = t.title,
                        v = t.showCloseIcon,
                        O = t.slideOnMobile,
                        C = t.isCentered,
                        E = t.titleComponent,
                        N = t.padding,
                        I = t.overlayClickClose,
                        A = t.maxHeight,
                        L = t.minHeight,
                        x = t.enableScrollOnClose,
                        P = t.className,
                        M = t.showFooter,
                        j = t.renderFooter,
                        D = t.overlayOpacity,
                        R = t.flatModal,
                        G = t.extraCurved,
                        H = t.mobileHeight,
                        F = t.autoHeight,
                        z = t.bgColor,
                        U = t.preventFocus,
                        B = t.useAbsoluteHeight,
                        q = t.zIndex,
                        W = t.id,
                        Y = t.isMobileDialog,
                        V = t.borderRadius,
                        K = (0, o.useRef)();
                    (0, o.useEffect)((function() {
                        return document.body.style.overflow = a ? "hidden" : "auto", x ? function() {
                            return document.body.style.overflow = "auto"
                        } : p.default
                    }), [a]), (0, o.useEffect)((function() {
                        a && K.current && !U && K.current.focus()
                    }), [a]);
                    return o.default.createElement(u.default, null, o.default.createElement(e.Wrapper, {
                        className: "modalWrapper ".concat(P),
                        "aria-hidden": a ? "false" : "true",
                        role: "dialog",
                        visible: a,
                        autoHeight: F,
                        useAbsoluteHeight: B,
                        onScroll: function(e) {
                            !e.target.scrollTop && "0vh" === H && e.target.classList.contains("modalWrapper") && r(e)
                        },
                        zIndex: q
                    }, o.default.createElement(e.Overlay, {
                        onClick: function(e) {
                            return I && r(e)
                        },
                        visible: a,
                        tabIndex: "-1",
                        overlayOpacity: D
                    }), F && o.default.createElement(y, null), o.default.createElement(k, {
                        id: W,
                        mode: n,
                        type: l,
                        visible: a,
                        mobileHeight: H,
                        isDialog: c,
                        shouldSlide: O,
                        isCentered: C,
                        padding: N,
                        tabIndex: "0",
                        onKeyDown: function(e) {
                            e.stopPropagation(), 27 === e.keyCode && r(e)
                        },
                        ref: K,
                        flatModal: R,
                        extraCurved: G,
                        autoHeight: F,
                        bgColor: z,
                        isMobileDialog: Y,
                        borderRadius: V
                    }, !c && (h || E) && o.default.createElement(k.Head, {
                        padding: N
                    }, h ? o.default.createElement(k.Title, {
                        mode: n
                    }, h) : E || null, v && o.default.createElement(T, {
                        size: 24,
                        color: "dark" === n ? m.default.z500 : f.default,
                        showPointer: !0,
                        onClick: r,
                        onKeyUp: (0, _.onKeySelect)(r),
                        tabIndex: "0",
                        "aria-label": "close Modal"
                    })), o.default.createElement(k.Content, {
                        visible: a,
                        maxHeight: A,
                        minHeight: L
                    }, i), c && o.default.createElement(w, {
                        rejectLabel: g,
                        acceptLabel: b,
                        onReject: s,
                        onAccept: d
                    }), M && j()), o.default.createElement(S, {
                        tabIndex: "0",
                        onFocus: function() {
                            a && K.current.focus()
                        }
                    })))
                },
                E = function() {
                    return window.innerHeight
                },
                y = l.default.div.withConfig({
                    componentId: "sc-re4bd0-0"
                })(["display:none;@media (max-width:480px){display:block;min-height:5vh;flex-grow:1;width:100%;}"]),
                T = (0, l.default)(d.default).withConfig({
                    componentId: "sc-re4bd0-1"
                })(["max-height:3rem;height:3rem;width:3rem;display:flex;align-items:center;justify-content:center;border-radius:50%;"]),
                S = l.default.div.withConfig({
                    componentId: "sc-re4bd0-2"
                })(["height:0;width:0;"]),
                w = function e(t) {
                    var n = t.rejectLabel,
                        r = void 0 === n ? "No" : n,
                        a = t.acceptLabel,
                        l = void 0 === a ? "Yes" : a,
                        i = t.onReject,
                        u = void 0 === i ? p.default : i,
                        d = t.onAccept,
                        f = void 0 === d ? p.default : d;
                    return o.default.createElement(e.Wrapper, null, o.default.createElement(e.Holder, null, o.default.createElement(c.default, {
                        appearance: "link",
                        btnColor: "red",
                        size: "small",
                        onKeyUp: (0, _.onKeySelect)(u),
                        onClick: u,
                        tabIndex: "0",
                        role: "button"
                    }, r), o.default.createElement(e.Gap, null), o.default.createElement(c.default, {
                        btnColor: "red",
                        size: "small",
                        onClick: f,
                        onKeyUp: (0, _.onKeySelect)(f),
                        tabIndex: "0",
                        role: "button"
                    }, l)))
                };
            w.propTypes = {
                rejectLabel: i.default.string,
                acceptLabel: i.default.string,
                onAccept: i.default.func,
                onReject: i.default.func
            }, w.Holder = l.default.div.withConfig({
                componentId: "sc-re4bd0-3"
            })(["display:flex;justify-content:flex-end;width:100%;min-width:max-content;margin-top:1rem;"]), w.Gap = l.default.div.withConfig({
                componentId: "sc-re4bd0-4"
            })(["height:1rem;width:1rem;"]), w.Wrapper = l.default.div.withConfig({
                componentId: "sc-re4bd0-5"
            })(["display:flex;"]), C.Wrapper = l.default.div.withConfig({
                componentId: "sc-re4bd0-6"
            })(["position:fixed;top:0;left:0;width:100%;min-width:max-content;height:", ";display:flex;justify-content:center;visibility:", ";overflow:auto;z-index:", ";", ""], (function(e) {
                return e.useAbsoluteHeight ? "calc(".concat(E, ")") : "100%"
            }), (function(e) {
                return e.visible ? "visible" : "hidden"
            }), (function(e) {
                return e.zIndex || 11
            }), (function(e) {
                return e.autoHeight && (0, l.css)(["@media (max-width:480px){display:flex;flex-direction:column;}"])
            })), C.propTypes = {
                mode: i.default.string,
                children: i.default.node,
                onClose: i.default.func,
                visible: i.default.bool,
                isDialog: i.default.bool,
                onAccept: i.default.func,
                onReject: i.default.func,
                rejectLabel: i.default.string,
                acceptLabel: i.default.string,
                title: i.default.string,
                showCloseIcon: i.default.bool,
                type: i.default.oneOf(["small", "medium", "large", "huge", "default"]),
                slideOnMobile: i.default.bool,
                isCentered: i.default.bool,
                titleComponent: i.default.node,
                padding: i.default.string,
                overlayClickClose: i.default.bool,
                maxHeight: i.default.string,
                minHeight: i.default.string,
                enableScrollOnClose: i.default.bool,
                className: i.default.string,
                showFooter: i.default.bool,
                renderFooter: i.default.func,
                overlayOpacity: i.default.number,
                flatModal: i.default.bool,
                extraCurved: i.default.bool,
                mobileHeight: i.default.string,
                bgColor: i.default.string,
                preventFocus: i.default.bool,
                useAbsoluteHeight: i.default.bool,
                zIndex: i.default.number,
                id: i.default.string,
                isMobileDialog: i.default.bool,
                borderRadius: i.default.string
            }, C.defaultProps = {
                mode: "light",
                onClose: p.default,
                visible: !1,
                type: "default",
                children: null,
                isDialog: !1,
                onAccept: p.default,
                onReject: p.default,
                acceptLabel: "",
                rejectLabel: "",
                title: "",
                showCloseIcon: !0,
                slideOnMobile: !1,
                isCentered: !1,
                titleComponent: null,
                padding: "",
                overlayClickClose: !0,
                maxHeight: "",
                minHeight: "8rem",
                enableScrollOnClose: !0,
                className: "",
                showFooter: !1,
                renderFooter: p.default,
                overlayOpacity: .85,
                flatModal: !1,
                extraCurved: !1,
                mobileHeight: "95vh",
                bgColor: s.default,
                preventFocus: !1,
                useAbsoluteHeight: !1,
                zIndex: 11,
                id: "id-" + Math.floor(100 * Math.random()),
                isMobileDialog: !1,
                borderRadius: ""
            };
            var N = function(e) {
                    var t = e.type;
                    return O[t]
                },
                I = function(e) {
                    var t = e.shouldSlide;
                    return e.isMobileDialog ? "80vw" : t ? "100vw" : "95vw"
                },
                A = function(e) {
                    var t = e.borderRadius,
                        n = e.isMobileDialog;
                    return t || (n ? "1.2rem" : "unset")
                };
            C.Overlay = l.default.div.withConfig({
                componentId: "sc-re4bd0-7"
            })(["position:fixed;top:0;left:0;width:100%;height:100%;background-color:", ";opacity:", ";visibility:", ";transition:opacity ", " ease;"], f.default, (function(e) {
                return e.visible ? e.overlayOpacity : 0
            }), (function(e) {
                return e.visible ? "visible" : "hidden"
            }), g.default.animationDuration);
            var k = l.default.div.withConfig({
                componentId: "sc-re4bd0-8"
            })(["background-color:", ";height:max-content;transform:translate3d(0,0,0);@media (min-width:481px){width:", ";margin:", ";min-height:", ";min-width:20rem;border-radius:", ";transform:scale(", ");box-shadow:0 1.2rem 7rem rgba(28,28,28,0.15);transition:transform ", " ease;}@media (max-width:480px){width:", ";border-radius:", ";min-height:", ";margin:", ";", " ", "}opacity:1;z-index:1;display:", ";padding:", ";"], (function(e) {
                return "dark" === e.mode ? m.default.z900 : e.bgColor
            }), N, (function(e) {
                return e.isCentered ? "auto" : "5rem auto"
            }), (function(e) {
                return e.isDialog ? 0 : "150px"
            }), (function(e) {
                return e.borderRadius ? e.borderRadius : "0.6rem"
            }), (function(e) {
                return e.visible ? 1 : 1.2
            }), g.default.animationDuration, I, A, (function(e) {
                return e.shouldSlide ? e.mobileHeight : "auto"
            }), (function(e) {
                return e.isCentered ? "auto" : 0
            }), (function(e) {
                var t = e.flatModal,
                    n = e.extraCurved;
                return e.shouldSlide && (0, l.css)(["margin-top:", ";transition:all ", " ease,visibility 0ms ease;border-radius:", ";"], (function(e) {
                    return e.visible ? "calc(100vh - ".concat(e.mobileHeight, ")") : "100vh"
                }), g.default.animationDuration, n ? "1.2rem 1.2rem 0 0" : !t && "0.6rem 0.6rem 0 0")
            }), (function(e) {
                return e.autoHeight && (0, l.css)(["margin-top:0;min-height:0;"])
            }), (function(e) {
                return e.visible ? "block" : "flex"
            }), (function(e) {
                return e.isDialog ? "2rem" : e.padding ? e.padding : 0
            }));
            k.Head = l.default.section.withConfig({
                componentId: "sc-re4bd0-9"
            })(["width:", ";display:flex;justify-content:space-between;align-items:center;margin:", ";@media (max-width:480px){width:", ";margin:", ";}"], (function(e) {
                return e.padding ? "calc(100% + 0.5rem)" : "calc(100% - 4.6rem)"
            }), (function(e) {
                return e.padding ? "0" : "2rem 2.2rem 0 2.4rem"
            }), (function(e) {
                return e.padding ? "calc(100% + 0.5rem)" : "calc(100% - 2.6rem)"
            }), (function(e) {
                return e.padding ? "0" : "1rem 1.2rem 0 1.4rem"
            })), k.Title = l.default.h2.withConfig({
                componentId: "sc-re4bd0-10"
            })(["font-size:2.4rem;line-height:2.8rem;font-weight:400;color:", ";margin-top:0.5rem;margin-bottom:0.83rem;"], (function(e) {
                return "dark" === e.mode ? s.default : f.default
            })), k.Content = l.default.section.withConfig({
                componentId: "sc-re4bd0-11"
            })(["display:", ";max-height:", ";overflow:", ";@media (max-width:480px){min-height:", ";}"], (function(e) {
                return e.visible ? "block" : "none"
            }), (function(e) {
                return (0, b.default)(e, "maxHeight", "fit-content")
            }), (function(e) {
                return e.maxHeight ? "auto" : "initial"
            }), (function(e) {
                return e.minHeight
            }));
            var L = C;
            t.default = L
        },
        FrN4: (e, t, n) => {
            var r = n("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("sSbF")).default;
            t.default = a
        },
        dsI2: (e, t, n) => {
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
            var a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = E();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = C(n("17x9")),
                l = C(n("vOnD")),
                i = C(n("FrN4")),
                u = C(n("lXQd")),
                c = C(n("AkOy")),
                d = C(n("j399")),
                f = C(n("Q4ka")),
                s = C(n("GJhT")),
                m = C(n("oboH")),
                p = C(n("z7es")),
                b = C(n("bb89")),
                g = C(n("mugf")),
                _ = n("zzCw"),
                h = n("O4kB"),
                v = n("c9uF"),
                O = n("AgGD");

            function C(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function E() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return E = function() {
                    return e
                }, e
            }

            function y() {
                var e = N([""]);
                return y = function() {
                    return e
                }, e
            }

            function T() {
                var e = N(["\n  z-index: 100;\n"]);
                return T = function() {
                    return e
                }, e
            }

            function S() {
                var e = N(["\n  margin-top: ", ";\n  display: flex;\n  flex-direction: column;\n  width: 40rem;\n  @media (max-width: 480px) {\n    width: unset;\n  }\n  padding: ", ";\n"]);
                return S = function() {
                    return e
                }, e
            }

            function w() {
                var e = N(["\n  font-size: 3rem;\n  line-height: 4rem;\n  margin: 1.5rem 0;\n  font-weight: 500;\n  color: #4f4f4f;\n"]);
                return w = function() {
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

            function I() {
                return I = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, I.apply(this, arguments)
            }

            function A(e, t) {
                if (null == e) return {};
                var n, r, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                }
                return a
            }

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? k(Object(n), !0).forEach((function(t) {
                        x(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function x(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(r = (l = i.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var j = (0, a.forwardRef)((function(e, t) {
                    var n = e.isOpen,
                        r = void 0 === n || n,
                        o = e.fnCloseRequest,
                        l = e.loginType,
                        i = void 0 === l ? O.LOGIN_TYPES.LOGIN : l,
                        d = e.setLoginType,
                        h = e.fnOnAuthenticate,
                        C = e.genericActionCallback,
                        E = e.links,
                        y = void 0 === E ? {} : E,
                        T = e.enableScrollOnClose,
                        S = e.locale,
                        w = e.enableOneTap,
                        N = e.enablePhoneLogin,
                        k = e.o2CheckoutFlow,
                        x = e.isMobile,
                        M = P((0, a.useState)(!1), 2),
                        G = M[0],
                        F = M[1],
                        z = P((0, a.useState)(""), 2),
                        U = z[0],
                        B = z[1],
                        q = P((0, a.useState)(""), 2),
                        W = q[0],
                        Y = q[1],
                        V = P((0, a.useState)(""), 2),
                        K = V[0],
                        J = V[1],
                        Z = P((0, a.useState)(""), 2),
                        Q = Z[0],
                        X = Z[1],
                        $ = P((0, a.useState)(0), 2),
                        ee = $[0],
                        te = $[1],
                        ne = P((0, a.useState)(_.LOGIN_TYPE_PHONE), 2),
                        re = ne[0],
                        ae = ne[1],
                        oe = P((0, a.useState)(!1), 2),
                        le = oe[0],
                        ie = oe[1],
                        ue = P((0, a.useState)(0), 2),
                        ce = ue[0],
                        de = ue[1],
                        fe = P((0, a.useState)({}), 2),
                        se = fe[0],
                        me = fe[1],
                        pe = P((0, a.useState)(""), 2),
                        be = pe[0],
                        ge = pe[1],
                        _e = P((0, a.useState)(!1), 2),
                        he = _e[0],
                        ve = _e[1],
                        Oe = P((0, a.useState)({
                            phone: "",
                            countryId: 1
                        }), 2),
                        Ce = Oe[0],
                        Ee = Oe[1],
                        ye = P((0, a.useState)(!0), 2),
                        Te = ye[0],
                        Se = ye[1],
                        we = P((0, a.useState)({
                            selectedCountryCode: O.SELECTED_COUNTRY_CODE
                        }), 2),
                        Ne = we[0],
                        Ie = we[1],
                        Ae = (0, a.useMemo)((function() {
                            return L(L({}, O.staticLang), S)
                        }), [S]);
                    (0, a.useEffect)((function() {
                        ve(!0), (0, _.doInitilizeData)().then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            var t = e.phone_login,
                                n = void 0 !== t && t,
                                r = e.all_country_code,
                                a = void 0 === r ? [] : r,
                                o = e.selected_country_code,
                                l = void 0 === o ? {} : o;
                            n && (Se(!1), Ie({
                                allCountryCode: a,
                                selectedCountryCode: l
                            })), ve(!1)
                        })).catch((function(e) {
                            ve(!1)
                        }))
                    }), []);
                    var ke = function() {
                            return N && !Te
                        },
                        Le = function(e, t) {
                            switch (e) {
                                case O.SET_SELECTED_COUNTRY_DATA_ACTION:
                                    Ie(L(L({}, Ne), {}, {
                                        selectedCountryCode: t
                                    }));
                                    break;
                                case O.CHANGE_LOGIN_INPUT_TYPE_ACTION:
                                    var n = t.type,
                                        r = void 0 === n ? "" : n;
                                    r && ae(r);
                                    break;
                                case O.PHONE_LOGIN_OTP_VERIFY:
                                    var a = t.screen,
                                        o = void 0 === a ? 0 : a,
                                        l = t.response,
                                        u = void 0 === l ? {} : l;
                                    de(o), me(u), F(!1);
                                    break;
                                case O.OTM_EMAIL_VERIFICATION_ACTION:
                                    var c = t.message,
                                        d = void 0 === c ? "" : c,
                                        f = t.title,
                                        s = void 0 === f ? "" : f;
                                    de(O.OTM_EMAIL_LINK_OTP_VERIFICATION), F(!0), ge(s), B(d);
                                    break;
                                case O.ERROR_CALLBACK_ACTION:
                                case O.SCREEN_LOADED_ACTION:
                                case O.SUCCESS_CALLBACK_ACTION:
                                case O.TAP_BUTTON:
                                case O.OTP_ENTERED:
                                case O.GOOGLE_SIGN_IN:
                                    var m = t.flow,
                                        p = void 0 === m ? i : m,
                                        b = t.method,
                                        g = void 0 === b ? re : b,
                                        _ = t.pageOpenSource,
                                        h = void 0 === _ ? p : _,
                                        v = A(t, ["flow", "method", "pageOpenSource"]);
                                    C(L(L({}, v), {}, {
                                        flow: p,
                                        method: g,
                                        action: e,
                                        pageOpenSource: h
                                    }))
                            }
                        },
                        xe = function() {
                            ae(_.LOGIN_TYPE_EMAIL), d(O.LOGIN_TYPES.SIGNUP)
                        },
                        Pe = function() {
                            ae(_.LOGIN_TYPE_PHONE), d(O.LOGIN_TYPES.LOGIN)
                        },
                        Me = Boolean(k && x && ke()),
                        je = (0, a.useCallback)((function() {
                            ae(_.LOGIN_TYPE_PHONE), G || ce === O.LOGIN_CASE_NEW_USER ? ie(!0) : (F(!1), o(), Y(""), J(""))
                        }), [G, ce]),
                        De = function() {
                            if (!(0, c.default)(be)) return be;
                            if (W || K && ze()) return Ae.login_failed_title;
                            if (K) return Ae.signup_failed_title;
                            if (G) return Ae.otp_verification_title;
                            if (ce === O.LOGIN_CASE_OTM_MAPPING) {
                                var e = se.meta_data,
                                    t = (e = void 0 === e ? {} : e).link_account,
                                    n = (t = void 0 === t ? {} : t).title;
                                return void 0 === n ? "" : n
                            }
                            return ce === O.LOGIN_CASE_NEW_USER ? Ae.phone_login_new_user_title : i === O.LOGIN_TYPES.LOGIN ? Ae.login_title : Ae.signup_title
                        },
                        Re = function(e, t, n) {
                            n === _.LOGIN_TYPE_PHONE ? te(e) : X(e), B(t), F(!0)
                        },
                        Ge = function(e, t) {
                            F(!0), B(t), X(e)
                        },
                        He = function() {
                            Y(""), J(""), o()
                        },
                        Fe = function() {
                            Y(""), F(!1), k && de(0), J("")
                        },
                        ze = function() {
                            return ce === O.LOGIN_CASE_NEW_USER && re === _.LOGIN_TYPE_PHONE
                        },
                        Ue = function(e) {
                            Le(O.SUCCESS_CALLBACK_ACTION, {}), h(e), o({
                                success: !0
                            })
                        },
                        Be = function(e) {
                            return function() {
                                return de(e)
                            }
                        },
                        qe = function() {
                            return (0, u.default)(se, "hash", "")
                        },
                        We = ce !== O.LOGIN_CASE_NEW_USER && i === O.LOGIN_TYPES.LOGIN && re === _.LOGIN_TYPE_PHONE && !ke(),
                        Ye = {};
                    (!We || W || K) && (Ye = {
                        padding: "0 2.4rem 2.4rem 2.4rem",
                        titleComponent: a.default.createElement(D, {
                            title: De()
                        })
                    });
                    var Ve = re === _.LOGIN_TYPE_EMAIL && i === O.LOGIN_TYPES.LOGIN,
                        Ke = function() {
                            return ae(_.LOGIN_TYPE_PHONE)
                        };
                    Ve && (Ye = {
                        padding: "0 2.4rem 2.4rem 2.4rem",
                        titleComponent: a.default.createElement(R, {
                            title: De(),
                            handleGoBack: Ke,
                            showBackButton: !G
                        })
                    });
                    var Je = (0, a.useCallback)((function() {
                        W || K ? He() : je()
                    }), [je, W, K]);
                    return (0, a.useImperativeHandle)(t, (function() {
                        return {
                            loginModalClose: Je
                        }
                    }), [Je]), Me && (Ye = {
                        padding: "0",
                        headerWidth: "100%",
                        preventFocus: !0,
                        titleComponent: a.default.createElement(g.default, I({
                            showBackIcon: Ve && !G,
                            handleGoBack: Ke,
                            onCloseClick: Je
                        }, (0, v.getHeaderTitles)({
                            locale: Ae,
                            showOTPScreen: G,
                            screenType: ce,
                            loginType: i,
                            loginInputType: re,
                            loginErrorMessage: W,
                            signupErrorMessage: K,
                            defaultTitle: De()
                        }))),
                        showCloseIcon: !1
                    }), k && (Ye = L(L({}, Ye), {}, {
                        autoHeight: !0
                    })), a.default.createElement(j.Wrapper, null, a.default.createElement(H, I({
                        visible: r,
                        onClose: Je,
                        slideOnMobile: !0,
                        isCentered: !0,
                        enableScrollOnClose: T
                    }, Ye), a.default.createElement(j.Content, {
                        o2CheckoutFlow: Me,
                        showBackground: We
                    }, W ? a.default.createElement(p.default, {
                        errorText: W,
                        close: He,
                        goBack: Fe,
                        locale: Ae
                    }) : K ? a.default.createElement(p.default, {
                        errorText: K,
                        close: He,
                        goBack: Fe,
                        locale: Ae
                    }) : G ? a.default.createElement(m.default, {
                        o2CheckoutFlow: Me,
                        phoneNumberLoginDetails: Ce,
                        countryCode: (0, u.default)(Ne, "selectedCountryCode.isdCode", ""),
                        headerText: U,
                        currentEmail: Q,
                        currentPhone: ee,
                        closeModal: o,
                        setShowOTPScreen: F,
                        setLoginError: Y,
                        showDialog: le,
                        setShowDialog: ie,
                        userDataCallback: Ue,
                        type: i,
                        locale: Ae,
                        countryId: (0, u.default)(Ne, "selectedCountryCode.countryId"),
                        verificationType: re === _.LOGIN_TYPE_PHONE && ce === O.OTM_EMAIL_LINK_OTP_VERIFICATION ? O.OTM_EMAIL_LINK_OTP_VERIFICATION : re === _.LOGIN_TYPE_PHONE ? O.PHONE_LOGIN_OTP_VERFICATION : O.DEFAULT_OTP_VERIFICATION,
                        actionBasedCallback: Le,
                        userHash: qe()
                    }) : ce === O.LOGIN_CASE_OTM_MAPPING ? a.default.createElement(b.default, {
                        handleLoginFlowScreen: Be,
                        phoneVerifyResponse: se,
                        userDataCallback: Ue,
                        actionBasedCallback: Le,
                        locale: Ae
                    }) : ce !== O.LOGIN_CASE_NEW_USER && i === O.LOGIN_TYPES.LOGIN ? a.default.createElement(f.default, {
                        setPhoneNumberLoginDetails: Ee,
                        showSmallShimmer: k,
                        o2CheckoutFlow: Me,
                        handleOnSignupClick: xe,
                        sendLoginOTP: Re,
                        setLoginError: Y,
                        userDataCallback: Ue,
                        locale: Ae,
                        enableOneTap: w,
                        enablePhoneLogin: ke(),
                        countryCodeData: Ne,
                        actionBasedCallback: Le,
                        selectedLoginInputType: re,
                        visible: r,
                        onClose: je,
                        showShimmer: he,
                        links: y
                    }) : a.default.createElement(s.default, {
                        showNewUserCreationTerminationDialog: le,
                        updateUserCreationTerminationDialogeState: ie,
                        onModalClose: o,
                        countryCodeData: Ne,
                        phoneNumberLoginDetails: Ce,
                        handleOnLoginClick: Pe,
                        sendSignupOTP: Ge,
                        setSignupError: J,
                        userDataCallback: Ue,
                        links: y,
                        locale: Ae,
                        o2CheckoutFlow: k,
                        phoneSignUpFlow: ze(),
                        userHash: qe(),
                        metaData: (0, u.default)(se, "meta_data", {}),
                        actionBasedCallback: Le,
                        visible: r
                    }))))
                })),
                D = function(e) {
                    var t = e.title;
                    return a.default.createElement(G, null, t)
                },
                R = function(e) {
                    var t = e.title,
                        n = e.handleGoBack,
                        r = e.showBackButton;
                    return a.default.createElement(a.default.Fragment, null, r && a.default.createElement(h.GoBack, {
                        onClick: n
                    }), a.default.createElement(G, null, t))
                };
            D.propTypes = {
                title: o.default.string.isRequired
            };
            var G = l.default.h2(w());
            j.Content = l.default.section(S(), (function(e) {
                return e.showBackground ? 0 : "2.4rem"
            }), (function(e) {
                return e.o2CheckoutFlow ? "0 1.6rem 1.8rem" : 0
            })), j.propTypes = {
                o2CheckoutFlow: o.default.bool,
                isOpen: o.default.bool.isRequired,
                fnCloseRequest: o.default.func.isRequired,
                loginType: o.default.string.isRequired,
                setLoginType: o.default.func.isRequired,
                fnOnAuthenticate: o.default.func.isRequired,
                links: o.default.shape({
                    tos: o.default.string,
                    privacy: o.default.string,
                    content: o.default.string
                }).isRequired,
                enableScrollOnClose: o.default.bool,
                locale: o.default.objectOf(o.default.string),
                enableOneTap: o.default.bool,
                enablePhoneLogin: o.default.bool,
                genericActionCallback: o.default.func,
                isMobile: o.default.bool
            }, j.defaultProps = {
                isMobile: !1,
                o2CheckoutFlow: !1,
                enableScrollOnClose: !0,
                locale: {},
                enableOneTap: !1,
                enablePhoneLogin: !1,
                genericActionCallback: d.default
            };
            var H = (0, l.default)(i.default)(T());
            j.Wrapper = l.default.div(y());
            var F = j;
            t.default = F
        },
        VmJk: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("q1tI")),
                a = i(n("17x9")),
                o = n("O4kB"),
                l = n("QlFR");

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                var t = e.titleText,
                    n = e.subtitleText,
                    a = e.onCloseClick,
                    i = e.showBackIcon,
                    u = e.handleGoBack;
                return r.default.createElement(l.Container, {
                    noSubtitle: !n
                }, r.default.createElement(l.TitleContainer, null, i && r.default.createElement(o.GoBack, {
                    onClick: u
                }), r.default.createElement(l.Heading, {
                    noSubtitle: !n
                }, t), r.default.createElement(l.CloseButton, {
                    onClick: a,
                    size: 24
                })), r.default.createElement(l.Subheading, null, n))
            };
            u.propTypes = {
                titleText: a.default.string,
                subtitleText: a.default.string,
                onCloseClick: a.default.func.isRequired
            }, u.defaultProps = {
                titleText: "",
                subtitleText: ""
            };
            var c = u;
            t.default = c
        },
        mugf: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = ((r = n("VmJk")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = a
        },
        QlFR: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CloseButton = t.Subheading = t.Heading = t.TitleContainer = t.Container = void 0;
            var r = u(n("vOnD")),
                a = u(n("gAKm")),
                o = n("wcxm"),
                l = u(n("HMsx")),
                i = u(n("i0d3"));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                var e = p([""]);
                return c = function() {
                    return e
                }, e
            }

            function d() {
                var e = p(["\n  font-size: 1.2rem;\n  line-height: 1.2rem;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = p(["\n  font-size: 1.8rem;\n  line-height: 2.7rem;\n  font-weight: 500;\n  max-width: calc(100% - 48px);\n"]);
                return f = function() {
                    return e
                }, e
            }

            function s() {
                var e = p(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: ", ";\n  height: 2.7rem;\n"]);
                return s = function() {
                    return e
                }, e
            }

            function m() {
                var e = p(["\n  padding: ", ";\n  border-bottom: 0.5px solid ", ";\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: space-around;\n  position: relative;\n"]);
                return m = function() {
                    return e
                }, e
            }

            function p(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var b = r.default.div(m(), (function(e) {
                return g(e)
            }), l.default.z200);
            t.Container = b;
            var g = function(e) {
                    return e.noSubtitle ? "16px 12px" : "10px 12px 16px"
                },
                _ = r.default.div(s(), (function(e) {
                    return v(e)
                }));
            t.TitleContainer = _;
            var h = (0, r.default)(a.default)(f());
            t.Heading = h;
            var v = function(e) {
                    return e.noSubtitle ? 0 : "0.5rem"
                },
                O = (0, r.default)(o.P)(d());
            t.Subheading = O;
            var C = (0, r.default)(i.default)(c());
            t.CloseButton = C
        },
        "63ok": (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("q1tI")),
                a = i(n("gEOw")),
                o = n("SEds"),
                l = n("4h3y");

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                var t = e.phone,
                    n = e.countryFlagUrl,
                    i = e.countryCode,
                    u = e.locale;
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(l.Container, null, r.default.createElement(l.PhoneContainer, null, !!n && r.default.createElement(l.Flag, {
                    src: n,
                    height: "1.6rem",
                    width: "2.4rem",
                    fit: "contain"
                }), !!i && r.default.createElement(l.CountryCode, null, "+".concat(i)), !!t && r.default.createElement(l.PhoneNumberText, null, t)), r.default.createElement(a.default, {
                    color: o.green.z500,
                    size: 20
                })), r.default.createElement(l.VerifiedText, null, u.phone_number_verified_text))
            };
            t.default = u
        },
        "66Yr": (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = ((r = n("63ok")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = a
        },
        "4h3y": (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.VerifiedText = t.PhoneContainer = t.PhoneNumberText = t.CountryCode = t.Flag = t.Container = void 0;
            var r = u(n("vOnD")),
                a = n("SEds"),
                o = u(n("HMsx")),
                l = n("wcxm"),
                i = u(n("lFeK"));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                var e = b(["\n  margin-bottom: 1rem;\n  color: ", ";\n  font-size: 1.4rem;\n  line-height: 2rem;\n  margin-top: 0.8rem;\n  font-weight: 400;\n"]);
                return c = function() {
                    return e
                }, e
            }

            function d() {
                var e = b(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n"]);
                return d = function() {
                    return e
                }, e
            }

            function f() {
                var e = b(["\n  font-size: 1.4rem;\n  line-height: 1.7rem;\n  color: ", ";\n  font-weight: 400;\n  margin-right: 0.5rem;\n"]);
                return f = function() {
                    return e
                }, e
            }

            function s() {
                var e = b(["\n  font-size: 1.6rem;\n  line-height: 2.2rem;\n  color: ", ";\n  font-weight: 500;\n  margin-right: 0.5rem;\n"]);
                return s = function() {
                    return e
                }, e
            }

            function m() {
                var e = b(["\n  margin-right: 1rem;\n"]);
                return m = function() {
                    return e
                }, e
            }

            function p() {
                var e = b(["\n  border: 1px solid ", ";\n  border-radius: 0.6rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 4.8rem;\n  box-sizing: border-box;\n  padding: 0 1rem;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function b(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            var g = r.default.div(p(), o.default.z300);
            t.Container = g;
            var _ = (0, r.default)(i.default)(m());
            t.Flag = _;
            var h = (0, r.default)(l.P)(s(), a.black);
            t.CountryCode = h;
            var v = (0, r.default)(l.P)(f(), a.black);
            t.PhoneNumberText = v;
            var O = r.default.div(d());
            t.PhoneContainer = O;
            var C = (0, r.default)(l.P)(c(), a.green.z500);
            t.VerifiedText = C
        },
        c9uF: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getHeaderTitles = void 0;
            var r = n("AgGD"),
                a = n("zzCw");
            t.getHeaderTitles = function(e) {
                var t = e.locale,
                    n = e.showOTPScreen,
                    o = e.screenType,
                    l = e.loginType,
                    i = e.loginInputType,
                    u = e.loginErrorMessage,
                    c = e.signupErrorMessage,
                    d = e.defaultTitle;
                return u || c || [r.LOGIN_CASE_OTM_MAPPING].includes(o) || i === a.LOGIN_TYPE_EMAIL ? {
                    titleText: d || ""
                } : n ? {
                    titleText: t.checkout_login_flow_otp_screen
                } : [r.LOGIN_CASE_NEW_USER].includes(o) ? {
                    titleText: d
                } : l === r.LOGIN_TYPES.LOGIN ? {
                    titleText: t.checkout_login_flow_login_title || "",
                    subtitleText: t.checkout_login_flow_login_subtitle || ""
                } : {
                    titleText: d
                }
            }
        },
        QhZA: (e, t, n) => {
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = ((r = n("dsI2")) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = a
        },
        z7es: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(n("q1tI")),
                a = i(n("17x9")),
                o = i(n("kdDk")),
                l = n("+S4G");

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = function(e) {
                var t = e.errorText,
                    n = e.goBack,
                    a = e.close,
                    i = e.locale;
                return r.default.createElement(r.default.Fragment, null, r.default.createElement(l.OTPexhaustedText, null, t), r.default.createElement(o.default, {
                    appearance: "solid",
                    btnColor: "red",
                    onClick: function() {
                        return n()
                    }
                }, i.error_messaage_box_try_other_methods_text), r.default.createElement(l.Gap10, null), r.default.createElement(o.default, {
                    appearance: "link",
                    btnColor: "red",
                    onClick: function() {
                        return a()
                    }
                }, i.error_messaage_box_skip_for_now_text))
            };
            u.propTypes = {
                errorText: a.default.string.isRequired,
                goBack: a.default.func.isRequired,
                close: a.default.func.isRequired,
                locale: a.default.objectOf(a.default.string).isRequired
            };
            var c = u;
            t.default = c
        },
        bb89: (e, t, n) => {
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
            var a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = O();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = v(n("17x9")),
                l = v(n("lXQd")),
                i = v(n("j399")),
                u = v(n("STzO")),
                c = v(n("t1mY")),
                d = v(n("NvCb")),
                f = v(n("ieZA")),
                s = n("SEds"),
                m = v(n("BUyX")),
                p = v(n("qZ2b")),
                b = n("AgGD"),
                g = n("NsBr"),
                _ = n("zzCw"),
                h = n("O4kB");

            function v(e) {
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

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(r = (l = i.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return E(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var y = function(e) {
                var t = e.handleLoginFlowScreen,
                    n = e.phoneVerifyResponse,
                    r = void 0 === n ? {} : n,
                    o = e.userDataCallback,
                    v = e.actionBasedCallback,
                    O = C((0, a.useState)(!1), 2),
                    E = O[0],
                    y = O[1],
                    T = C((0, a.useState)(""), 2),
                    S = T[0],
                    w = T[1],
                    N = C((0, a.useState)(""), 2),
                    I = N[0],
                    A = N[1],
                    k = C((0, a.useState)(!1), 2),
                    L = k[0],
                    x = k[1],
                    P = (0, l.default)(r, "login_methods", []),
                    M = (0, l.default)(r, "hash", ""),
                    j = function(e) {
                        return E && e === S
                    };
                (0, a.useEffect)((function() {
                    v(b.SCREEN_LOADED_ACTION, {
                        screen: b.MULTI_ACCOUNT_SCREEN
                    })
                }), []);
                var D = function(e, t) {
                        y(!1);
                        var n = e.success,
                            r = void 0 !== n && n,
                            a = e.message,
                            l = void 0 === a ? "" : a,
                            i = e.user_data;
                        r ? o(void 0 === i ? {} : i) : A(l), v(b.TAP_BUTTON, {
                            message: l,
                            tapButtonName: "Link account with ".concat(t),
                            type: "ACCOUNT_LINK",
                            success: r,
                            screen: b.MULTI_ACCOUNT_SCREEN,
                            method: t
                        })
                    },
                    R = function(e) {
                        y(!1), A(b.DEFAULT_ERROR_MESSAGE.message || ""), v(b.TAP_BUTTON, {
                            message: b.DEFAULT_ERROR_MESSAGE.message || "",
                            tapButtonName: "Link account with ".concat(b.GOOGLE_LOGIN_METHOD),
                            type: "ACCOUNT_LINK",
                            success: !1,
                            screen: b.MULTI_ACCOUNT_SCREEN,
                            method: b.GOOGLE_LOGIN_METHOD
                        })
                    },
                    G = function(e) {
                        (0, _.doMobileLinkAccount)({
                            id_token: e,
                            hash: M
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            D(e, b.GOOGLE_LOGIN_METHOD)
                        })).catch((function() {
                            D(b.DEFAULT_ERROR_MESSAGE, b.GOOGLE_LOGIN_METHOD)
                        }))
                    },
                    H = function(e) {
                        var t = (0, l.default)(e, "authResponse.accessToken", ""),
                            n = (0, l.default)(e, "status", "");
                        n === g.FB_STATUS_CONNECTED ? (0, _.doMobileLinkAccount)({
                            fb_token: t,
                            hash: M
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            D(e, b.FACEBOOK_LOGIN_METHOD)
                        })).catch((function() {
                            D(b.DEFAULT_ERROR_MESSAGE, b.FACEBOOK_LOGIN_METHOD)
                        })) : n === g.FB_STATUS_NOT_AUTHORIZED ? D({
                            message: "Facebook Authorization failed"
                        }, b.FACEBOOK_LOGIN_METHOD) : D(b.DEFAULT_ERROR_MESSAGE, b.FACEBOOK_LOGIN_METHOD)
                    },
                    F = function(e) {
                        y(!1);
                        var t = e.success,
                            n = void 0 !== t && t,
                            r = e.message,
                            a = void 0 === r ? {} : r;
                        n ? v(b.OTM_EMAIL_VERIFICATION_ACTION, {
                            title: "Email Verification",
                            message: (0, l.default)(e, "meta_data.otp_message", "")
                        }) : A(a), v(b.TAP_BUTTON, {
                            message: a,
                            tapButtonName: "Link account with email",
                            type: "ACCOUNT_LINK",
                            success: n,
                            screen: b.MULTI_ACCOUNT_SCREEN,
                            method: b.EMAIL_LOGIN_METHOD
                        })
                    },
                    z = function(e) {
                        return function() {
                            switch (y(!0), A(""), w(e), e) {
                                case b.GOOGLE_LOGIN_METHOD:
                                    (0, g.handleGoogleLogin)(G, R);
                                    break;
                                case b.FACEBOOK_LOGIN_METHOD:
                                    (0, g.handleFacebookLogin)(H);
                                    break;
                                case b.EMAIL_LOGIN_METHOD:
                                    (0, _.doEmailLinkAccount)({
                                        hash: M
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        F(e)
                                    })).catch((function() {
                                        F(b.DEFAULT_ERROR_MESSAGE)
                                    }))
                            }
                        }
                    };
                return a.default.createElement(a.default.Fragment, null, L && a.default.createElement(p.default, {
                    visible: L,
                    onAccept: t(b.LOGIN_CASE_NEW_USER),
                    onReject: function() {
                        return x(!1)
                    },
                    acceptLabel: (0, l.default)(r, "meta_data.create_account.positive_action.text", ""),
                    rejectLabel: (0, l.default)(r, "meta_data.create_account.negative_action.text", ""),
                    title: (0, l.default)(r, "meta_data.create_account.title", ""),
                    message: (0, l.default)(r, "meta_data.create_account.message", "")
                }), a.default.createElement(h.StyledP, {
                    fontSize: "1.4rem",
                    fontWeight: "400"
                }, (0, l.default)(r, "meta_data.link_account.message", "")), a.default.createElement(h.LinkedAccounts, null, P.map((function(e) {
                    return a.default.createElement(h.FlexWrapper, {
                        key: e,
                        onClick: E ? i.default : z(e)
                    }, a.default.createElement(h.WidthDiv, {
                        width: "12%"
                    }, function(e) {
                        switch (e) {
                            case b.GOOGLE_LOGIN_METHOD:
                                return j(e) ? a.default.createElement(f.default, {
                                    size: "medium",
                                    color: s.red.z500
                                }) : a.default.createElement(c.default, {
                                    color: s.red.z500,
                                    size: 42
                                });
                            case b.FACEBOOK_LOGIN_METHOD:
                                return j(e) ? a.default.createElement(f.default, {
                                    size: "medium",
                                    color: s.blue.z600
                                }) : a.default.createElement(u.default, {
                                    color: s.blue.z600,
                                    size: 42
                                });
                            case b.EMAIL_LOGIN_METHOD:
                                return j(e) ? a.default.createElement(f.default, {
                                    size: "large",
                                    color: s.red.z500
                                }) : a.default.createElement(d.default, {
                                    size: 42
                                });
                            default:
                                return a.default.createElement(a.default.Fragment, null)
                        }
                    }(e)), a.default.createElement(h.TextDiv, null, a.default.createElement(h.StyledP, {
                        fontSize: "1.8rem",
                        fontWeight: "400"
                    }, (0, l.default)(r, "name", "")), a.default.createElement(h.StyledP, {
                        fontSize: "1.4rem",
                        fontWeight: "300"
                    }, (0, l.default)(r, "email", "")), e === S && a.default.createElement(h.StyledP, {
                        fontSize: "1.2rem",
                        fontWeight: "300",
                        color: s.red.z500
                    }, I)))
                }))), a.default.createElement(m.default, {
                    margin: "0 0 1.8rem 0"
                }), a.default.createElement(h.StyledP, {
                    fontSize: "1.8rem"
                }, "Don't want to link? ", a.default.createElement(h.StyledSpan, {
                    onClick: function() {
                        return x(!0)
                    }
                }, "Create a new Account")))
            };
            y.propTypes = {
                handleLoginFlowScreen: o.default.func.isRequired,
                phoneVerifyResponse: o.default.objectOf(o.default.any).isRequired,
                userDataCallback: o.default.func.isRequired
            }, y.defaultProps = {};
            var T = y;
            t.default = T
        },
        GJhT: (e, t, n) => {
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
            var a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== r(e) && "function" != typeof e) return {
                        default: e
                    };
                    var t = S();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var l = a ? Object.getOwnPropertyDescriptor(e, o) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, o, l) : n[o] = e[o]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = T(n("vOnD")),
                l = T(n("17x9")),
                i = T(n("aowA")),
                u = T(n("U8Rt")),
                c = T(n("kdDk")),
                d = T(n("lXQd")),
                f = T(n("j399")),
                s = T(n("i0d3")),
                m = n("+S4G"),
                p = T(n("y8c3")),
                b = n("SEds"),
                g = T(n("qZ2b")),
                _ = T(n("BUyX")),
                h = n("zzCw"),
                v = n("AgGD"),
                O = n("O4kB"),
                C = T(n("HQku")),
                E = T(n("66Yr")),
                y = T(n("HMsx"));

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return S = function() {
                    return e
                }, e
            }

            function w() {
                var e = L(["\n  text-decoration: none;\n  font-weight: 500;\n  color: ", ";\n"]);
                return w = function() {
                    return e
                }, e
            }

            function N() {
                var e = L(["\n  font-size: 1.2rem;\n  color: #696969;\n"]);
                return N = function() {
                    return e
                }, e
            }

            function I() {
                var e = L(["\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 2rem;\n"]);
                return I = function() {
                    return e
                }, e
            }

            function A() {
                var e = L(["\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: white;\n  height: 40px;\n  width: 30px;\n  border-radius: 0 0.6rem 0.6rem 0;\n  opacity: ", ";\n  transition: opacity 0.2s ease;\n"]);
                return A = function() {
                    return e
                }, e
            }

            function k() {
                var e = L(["\n  position: relative;\n"]);
                return k = function() {
                    return e
                }, e
            }

            function L(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }

            function x() {
                return x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, x.apply(this, arguments)
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var n = [],
                        r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(r = (l = i.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var j = function(e) {
                    var t = e.handleOnLoginClick,
                        n = e.sendSignupOTP,
                        r = e.userDataCallback,
                        o = e.setSignupError,
                        l = e.links,
                        f = void 0 === l ? {} : l,
                        s = e.locale,
                        b = e.phoneSignUpFlow,
                        T = e.o2CheckoutFlow,
                        S = e.userHash,
                        w = e.metaData,
                        N = e.actionBasedCallback,
                        I = e.visible,
                        A = e.countryCodeData,
                        k = e.phoneNumberLoginDetails,
                        L = e.showNewUserCreationTerminationDialog,
                        M = e.updateUserCreationTerminationDialogeState,
                        j = e.onModalClose,
                        z = P((0, a.useState)(!1), 2),
                        U = z[0],
                        B = z[1],
                        q = P((0, a.useState)(""), 2),
                        W = q[0],
                        Y = q[1],
                        V = P((0, a.useState)(""), 2),
                        K = V[0],
                        J = V[1],
                        Z = P((0, a.useState)(""), 2),
                        Q = Z[0],
                        X = Z[1],
                        $ = P((0, a.useState)(""), 2),
                        ee = $[0],
                        te = $[1],
                        ne = P((0, a.useState)(!1), 2),
                        re = ne[0],
                        ae = ne[1],
                        oe = P((0, a.useState)(!1), 2),
                        le = oe[0],
                        ie = oe[1],
                        ue = P((0, a.useState)(!1), 2),
                        ce = ue[0],
                        de = ue[1],
                        fe = P((0, a.useState)(!1), 2),
                        se = fe[0],
                        me = fe[1],
                        pe = P((0, a.useState)({}), 2),
                        be = pe[0],
                        ge = pe[1],
                        _e = function(e) {
                            Y(e), X("")
                        };
                    (0, a.useEffect)((function() {
                        I && (b || N(v.CHANGE_LOGIN_INPUT_TYPE_ACTION, {
                            type: h.LOGIN_TYPE_EMAIL
                        }), N(v.SCREEN_LOADED_ACTION, {
                            screen: b ? v.PHONE_CREATE_ACCOUNT_SCREEN : v.CREATE_ACCOUNT_SCREEN,
                            flow: "signup"
                        }))
                    }), [I]);
                    var he = function(e) {
                            var t = e.success,
                                n = void 0 !== t && t,
                                a = e.user_data,
                                l = void 0 === a ? {} : a,
                                i = (0, d.default)(e, "meta_data.email_error") ? (0, d.default)(e, "meta_data.email_error.message") : (0, d.default)(e, "message", "");
                            N(v.TAP_BUTTON, {
                                message: i,
                                flow: "signup",
                                type: v.PHONE_CREATE_ACCOUNT,
                                screen: v.PHONE_CREATE_ACCOUNT_SCREEN,
                                success: n,
                                tapButtonName: s.create_account_button_text
                            }), n ? r(l) : (0, d.default)(e, "meta_data.email_error") ? (me(!0), ge((0, d.default)(e, "meta_data", {}))) : o(i)
                        },
                        ve = function(e) {
                            var t = e.success,
                                r = void 0 !== t && t,
                                a = e.message,
                                l = void 0 === a ? "" : a;
                            N(v.TAP_BUTTON, {
                                message: l,
                                success: r,
                                screen: v.CREATE_ACCOUNT_SCREEN,
                                type: v.CREATE_ACCOUNT,
                                tapButtonName: s.create_account_button_text
                            }), r ? n(K, l) : o(l)
                        },
                        Oe = function() {
                            var e;
                            b ? function() {
                                var e = !1;
                                if ((0, m.validateName)(W) || (e = !0, X("Please enter a valid name")), (0, m.validateEmail)(K) || e || le || T || (de(!0), e = !0), !e) {
                                    ae(!0);
                                    var t = le || T ? "" : K;
                                    (0, h.doMobileUserCreate)({
                                        email: t,
                                        name: W,
                                        hash: S
                                    }).then((function(e) {
                                        return e.json()
                                    })).then((function(e) {
                                        ae(!1), he(e)
                                    })).catch((function(e) {
                                        ae(!1), he(v.DEFAULT_ERROR_MESSAGE)
                                    }))
                                }
                            }() : (e = !1, (0, m.validateName)(W) || (e = !0, X("Please enter a valid name")), (0, m.validateEmail)(K) || (e = !0, te("Invalid Email id")), e || (ae(!0), (0, h.doSignup)({
                                fullname: W,
                                email_id: K
                            }).then((function(e) {
                                return e.json()
                            })).then((function(e) {
                                ae(!1), ve(e)
                            })).catch((function(e) {
                                ae(!1), ve(v.DEFAULT_ERROR_MESSAGE)
                            }))))
                        };
                    (0, a.useEffect)((function() {
                        le && Oe()
                    }), [le]);
                    var Ce = function() {
                            de(!1), me(!1)
                        },
                        Ee = function() {
                            me(!1), de(!1), ie(!0)
                        },
                        ye = L && T && b,
                        Te = f.tos,
                        Se = void 0 === Te ? "" : Te,
                        we = f.privacy,
                        Ne = void 0 === we ? "" : we,
                        Ie = f.content,
                        Ae = void 0 === Ie ? "" : Ie;
                    return a.default.createElement(a.default.Fragment, null, b && !T && a.default.createElement(O.StyledPTag, {
                        fontSize: "1.4rem"
                    }, s.phone_login_new_user_subtitle), b && ce && !se && a.default.createElement(g.default, {
                        visible: ce,
                        onAccept: Ce,
                        onReject: Ee,
                        acceptLabel: (0, d.default)(w, "skip_email.positive_action.text", ""),
                        rejectLabel: (0, d.default)(w, "skip_email.negative_action.text", ""),
                        title: (0, d.default)(w, "skip_email.title", ""),
                        message: (0, d.default)(w, "skip_email.message", "")
                    }), se && a.default.createElement(g.default, {
                        visible: se,
                        onAccept: Ce,
                        onReject: Ee,
                        acceptLabel: (0, d.default)(be, "email_error.positive_action.text", ""),
                        rejectLabel: (0, d.default)(be, "email_error.negative_action.text", ""),
                        title: (0, d.default)(be, "email_error.title", ""),
                        message: (0, d.default)(be, "email_error.message", "")
                    }), ye && a.default.createElement(g.default, {
                        visible: L,
                        onAccept: function() {
                            M(!1), j(), N(ERROR_CALLBACK_ACTION, {
                                message: "Manually closed new user details screen",
                                screen: v.LOGIN_CASE_NEW_USER
                            })
                        },
                        onReject: function() {
                            M(!1)
                        },
                        acceptLabel: s.yes_button_text,
                        rejectLabel: s.no_button_text,
                        message: s.terminate_verification_text
                    }), a.default.createElement(D, null, a.default.createElement(i.default, {
                        value: W,
                        label: s.signup_full_name_label,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onBlur: function() {
                            (0, m.validateName)(W) || X("Please enter a valid name")
                        },
                        onChange: _e,
                        errorMsg: Q
                    }), a.default.createElement(R, {
                        size: 20,
                        color: y.default.z400,
                        isVisible: Boolean(W && W.length),
                        onClick: function() {
                            _e("")
                        }
                    })), a.default.createElement(m.Gap10, null), T && b ? a.default.createElement(E.default, {
                        locale: s,
                        countryCode: A.selectedCountryCode.isdCode || "",
                        countryFlagUrl: A.selectedCountryCode.flagImgUrl || "",
                        phone: k.phone || ""
                    }) : a.default.createElement(i.default, {
                        value: K,
                        label: b ? s.signup_email_label_optional : s.signup_email_label,
                        innerWidth: "100%",
                        borderColor: "#009999",
                        onBlur: function() {
                            b && "" === K || ((0, m.validateEmail)(K) || te("Invalid Email id"))
                        },
                        onChange: function(e) {
                            J(e), te("")
                        },
                        errorMsg: ee
                    }), a.default.createElement(m.Gap10, null), Boolean(T) ? a.default.createElement(C.default, {
                        locale: s,
                        links: f
                    }) : a.default.createElement(G, null, a.default.createElement(u.default, {
                        checked: U,
                        solid: !1,
                        onChange: function() {
                            return B(!U)
                        },
                        color: "#ED5A6B"
                    }), a.default.createElement(H, null, (0, m.formatLangKey)(s.agree_to_zomato_policy_text, a.default.createElement(F, {
                        href: Se
                    }, s.terms_of_service_text), a.default.createElement(F, {
                        href: Ne
                    }, s.privacy_policy_text), a.default.createElement(F, {
                        href: Ae
                    }, s.content_policies)))), a.default.createElement(c.default, {
                        btnColor: "red",
                        disabled: b && T ? !(0, m.validateName)(W) : b ? !U || !(0, m.validateName)(W) : T ? !(0, m.validateName)(W) && !(0, m.validateEmail)(K) : !U || !(0, m.validateName)(W) || !(0, m.validateEmail)(K),
                        onClick: Oe,
                        loading: re
                    }, b && Boolean(T) ? s.checkout_flow_new_user_phone_login_button_caption : s.create_account_button_text), !b && a.default.createElement(a.default.Fragment, null, a.default.createElement(_.default, {
                        margin: "2.4rem 0 2.4rem 0"
                    }, s.or_text), a.default.createElement(p.default, {
                        loginSuccess: r,
                        loginFailure: o,
                        locale: s,
                        actionBasedCallback: N,
                        screen: v.CREATE_ACCOUNT_SCREEN
                    }), a.default.createElement(_.default, {
                        margin: T ? "2.4rem 0 1rem" : "0 0 2.4rem 0"
                    }), a.default.createElement(m.StyledP, x({}, T && {
                        lineHeight: 1
                    }, {
                        fontSize: T ? "1.6rem" : "1.8rem"
                    }), (0, m.formatLangKey)(s.already_have_an_account_text, a.default.createElement(m.Span, {
                        onClick: t
                    }, s.login_title)))))
                },
                D = o.default.div(k()),
                R = (0, o.default)(s.default)(A(), (function(e) {
                    return e.isVisible ? 1 : 0
                })),
                G = o.default.div(I()),
                H = o.default.span(N()),
                F = o.default.a(w(), b.red.z500);
            j.propTypes = {
                handleOnLoginClick: l.default.func.isRequired,
                sendSignupOTP: l.default.func.isRequired,
                setSignupError: l.default.func.isRequired,
                userDataCallback: l.default.func.isRequired,
                links: l.default.shape({
                    tos: l.default.string,
                    privacy: l.default.string,
                    content: l.default.string
                }).isRequired,
                locale: l.default.objectOf(l.default.string),
                phoneSignUpFlow: l.default.bool,
                userHash: l.default.string,
                metaData: l.default.objectOf(l.default.any),
                actionBasedCallback: l.default.func,
                visible: l.default.bool,
                countryCodeData: l.default.objectOf(l.default.any),
                phoneNumberLoginDetails: l.default.objectOf(l.default.any),
                showNewUserCreationTerminationDialog: l.default.bool,
                updateUserCreationTerminationDialogeState: l.default.func.isRequired,
                onModalClose: l.default.func.isRequired
            }, j.defaultProps = {
                showNewUserCreationTerminationDialog: !1,
                phoneSignUpFlow: !1,
                userHash: "",
                metaData: {},
                actionBasedCallback: f.default,
                visible: !1
            };
            var z = j;
            t.default = z
        }
    }
]);