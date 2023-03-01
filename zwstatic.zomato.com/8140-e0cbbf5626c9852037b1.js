"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8140], {
        xtGn: (e, n, t) => {
            t.d(n, {
                Z: () => v
            });
            var a, i, o, r, l = t("+9dH"),
                d = t("RlfA"),
                s = t("q1tI"),
                u = t("17x9"),
                p = t.n(u),
                m = t("vOnD"),
                c = t("j399"),
                f = t("lXQd"),
                _ = t("+cBz"),
                E = t("aowA"),
                g = t("kdDk"),
                T = t("SEds"),
                h = t("YFsC"),
                A = m.default.div(a || (a = (0, d.Z)(["\n  display: flex;\n  align-items: start;\n  margin-bottom: 1rem;\n\n  @media (max-width: 768px) {\n    width: 300px;\n  }\n\n  @media (max-width: 480px) {\n    justify-content: center;\n  }\n"]))),
                P = (0, m.default)(g.default)(i || (i = (0, d.Z)(["\n  margin-left: 0.8rem;\n  display: block;\n  & > span {\n    height: 48px;\n  }\n\n  @media (max-width: 768px) {\n    display: none !important;\n  }\n\n  @media (max-width: 480px) {\n    display: none !important;\n  }\n"]))),
                y = (0, m.default)(g.default)(o || (o = (0, d.Z)(["\n  display: none;\n  margin-left: 0.8rem;\n  & > span {\n    height: 48px;\n  }\n\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]))),
                Z = (0, m.default)(_.default)(r || (r = (0, d.Z)(["\n  input {\n    min-width: 0;\n  }\n"]))),
                C = function(e) {
                    var n = e.type,
                        t = void 0 === n ? h.XT : n,
                        a = e.value,
                        i = void 0 === a ? "" : a,
                        o = e.onChange,
                        r = void 0 === o ? c.default : o,
                        d = e.errorMsg,
                        u = void 0 === d ? h.jy : d,
                        p = e.onBlur,
                        m = void 0 === p ? c.default : p,
                        _ = e.onSubmit,
                        g = void 0 === _ ? c.default : _,
                        C = e.isSubmitting,
                        v = void 0 !== C && C,
                        x = e.onCountryCodeChange,
                        O = void 0 === x ? c.default : x,
                        L = e.localizedButtonCaptions,
                        S = e.localizedEmailLabel,
                        I = e.onFocus,
                        w = {
                            onClick: g,
                            loading: v,
                            disabled: u !== h.jy
                        };
                    return s.createElement(A, null, "email" === t ? s.createElement(E.default, {
                        fullWidth: !0,
                        innerWidth: "100%",
                        label: S,
                        borderColor: T.teal.z500,
                        value: i,
                        onChange: r,
                        onBlur: m,
                        errorMsg: u,
                        disabled: v,
                        onFocus: I
                    }) : s.createElement("div", null, s.createElement(Z, {
                        onBlur: m,
                        errorText: u,
                        value: i,
                        onChange: r,
                        disabled: v,
                        fnCountryChange: O
                    })), s.createElement(P, (0, l.Z)({}, w, {
                        btnColor: "red"
                    }), (0, f.default)(L, "shareAppLink", "")), s.createElement(y, (0, l.Z)({}, w, {
                        btnColor: "red",
                        size: "small"
                    }), (0, f.default)(L, "share", "")))
                };
            C.propTypes = {
                type: p().string.isRequired,
                value: p().string.isRequired,
                errorMsg: p().string.isRequired,
                isSubmitting: p().bool.isRequired,
                onChange: p().func.isRequired,
                onBlur: p().func.isRequired,
                onSubmit: p().func.isRequired,
                onCountryCodeChange: p().func.isRequired,
                localizedButtonCaptions: p().objectOf(p().string).isRequired,
                localizedEmailLabel: p().string.isRequired,
                onFocus: p().func
            }, C.defaultProps = {
                onFocus: c.default
            };
            const v = C
        },
        YFsC: (e, n, t) => {
            t.d(n, {
                A1: () => v,
                B3: () => S,
                Cj: () => T,
                EK: () => p,
                GE: () => h,
                H7: () => x,
                JP: () => l,
                Jz: () => P,
                K1: () => Z,
                Ok: () => O,
                Qj: () => A,
                RG: () => g,
                XT: () => c,
                ar: () => C,
                bF: () => r,
                fW: () => f,
                i6: () => E,
                jV: () => L,
                jy: () => _,
                kr: () => w,
                lI: () => m,
                oP: () => s,
                pK: () => I,
                pM: () => d,
                pb: () => y,
                sc: () => u
            });
            var a, i, o = t("zThL"),
                r = "Get the Zomato App",
                l = "We will send you a link, open it on your phone to download the app",
                d = "Download app from",
                s = "/web/commons/8b714f6f2ae12bf9e5f75549a984fc431564655708.png",
                u = "get-zomato-app",
                p = "https://zomato.onelink.me/xqzv/CTA",
                m = "https://zomato.onelink.me/xqzv/CTA",
                c = "email",
                f = "mobile",
                _ = "",
                E = "Email",
                g = "Phone",
                T = [{
                    label: "Phone",
                    value: f
                }],
                h = [{
                    label: "Email",
                    value: c
                }, {
                    label: "Phone",
                    value: f
                }],
                A = {
                    email: "Enter your email Id",
                    mobile: "Enter your phone number",
                    default: "Please enter a valid value"
                },
                P = {
                    success: (a = {}, (0, o.Z)(a, f, "Message sent. Check your phone to find a link to download the app. Happy eating!"), (0, o.Z)(a, c, "Email sent. Check your email id to find a link to download the app. Happy eating!"), a),
                    failed: (i = {}, (0, o.Z)(i, f, "Something went wrong, please try after some time"), (0, o.Z)(i, c, "Something went wrong, please try after some time"), i)
                },
                y = "app-download-link",
                Z = "united-sms",
                C = "Share App Link",
                v = "Share",
                x = {
                    APP_LINK: "app link",
                    DOWNLOAD_LINK: "app download home page"
                },
                O = {
                    SHARE_CLICK: "share button click",
                    DOWNLOAD_LINK: "app download link"
                },
                L = "valid_data",
                S = "invalid_data",
                I = "success",
                w = "failed"
        },
        HVcu: (e, n, t) => {
            t.d(n, {
                Z: () => u,
                a: () => d
            });
            var a = t("77l8"),
                i = t("lXQd"),
                o = t("j399"),
                r = t("f773"),
                l = t("YFsC"),
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.XT,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Qj;
                    return {
                        inputValue: "",
                        internationalCode: "+91",
                        valid: !1,
                        errorMessage: n[e],
                        fieldTouched: !1,
                        inputType: e,
                        isSubmitting: !1,
                        isSubmitFailed: !1,
                        isSubmitSuccess: !1,
                        toastState: {
                            text: "",
                            type: "success",
                            show: !1
                        }
                    }
                },
                s = function(e) {
                    switch (e) {
                        case l.XT:
                            return r.if;
                        case l.fW:
                            return r.LV;
                        default:
                            return o.default
                    }
                };
            const u = function(e, n) {
                var t = n.type,
                    o = n.value,
                    r = n.inputType,
                    d = n.apiErrorMessage,
                    u = void 0 === d ? "" : d,
                    p = n.errorMessages;
                switch (t) {
                    case "CHANGE_VALUE":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            inputValue: o,
                            valid: s(e.inputType)(o)
                        });
                    case "CHANGE_TYPE":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            fieldTouched: !1,
                            inputValue: "",
                            inputType: r,
                            errorMessage: (0, i.default)(p, r, p.default),
                            valid: !1
                        });
                    case "BLUR":
                    case "FORM_SUBMIT_FAILED":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            fieldTouched: !0
                        });
                    case "SUBMIT_INITIATE":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            isSubmitting: !0
                        });
                    case "SUBMIT_SUCCESS":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            isSubmitting: !1,
                            inputValue: "",
                            valid: !1,
                            fieldTouched: !1,
                            toastState: {
                                text: l.Jz.success[e.inputType],
                                type: "success",
                                show: !0
                            }
                        });
                    case "SUBMIT_FAILED":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            isSubmitting: !1,
                            inputValue: "",
                            valid: !1,
                            fieldTouched: !1,
                            toastState: {
                                text: u || l.Jz.failed[e.inputType],
                                type: "warning",
                                show: !0
                            }
                        });
                    case "CLOSE_TOAST":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            toastState: (0, a.Z)((0, a.Z)({}, e.toastState), {}, {
                                show: !1
                            })
                        });
                    case "CHANGE_INT_PHONE_CODE":
                        return (0, a.Z)((0, a.Z)({}, e), {}, {
                            internationalCode: o
                        });
                    default:
                        return e
                }
            }
        },
        o5WD: (e, n, t) => {
            t.d(n, {
                Z: () => b
            });
            var a = t("+9dH"),
                i = t("/0+J"),
                o = t("Vadf"),
                r = t("Kq5O"),
                l = t.n(r),
                d = t("q1tI"),
                s = t("17x9"),
                u = t.n(s),
                p = t("lXQd"),
                m = t("9quZ"),
                c = t("VcZT"),
                f = t("SEds"),
                _ = t("P62M"),
                E = t("HVcu"),
                g = t("sLkX"),
                T = t("YFsC"),
                h = t("Wc2h"),
                A = t("AdJq"),
                P = t("xtGn"),
                y = t("2VVk"),
                Z = t("Acma"),
                C = "get-app-form-radio-type-change",
                v = "get-app-form-send-link-click",
                x = "get-app-form-send-link-success-tracking",
                O = "get-app-form-input-focus-tracking",
                L = "get_app_form_appstore_link_click",
                S = function(e) {
                    (0, Z.qw)(v, e)
                },
                I = function(e) {
                    (0, Z.qw)(x, e)
                },
                w = function(e) {
                    var n = e.title,
                        t = e.action,
                        r = e.imgUrl,
                        s = e.imgProps,
                        u = e.appStoreUrl,
                        v = e.playStoreUrl,
                        x = e.radioOptions,
                        w = e.Component,
                        b = e.offersData,
                        k = e.subtitle,
                        R = e.united_uuid,
                        D = e.signature,
                        N = e.selectedInputType,
                        G = e.isUnited,
                        z = e.className,
                        H = e.locale,
                        U = e.deeplink,
                        M = {
                            email: (0, p.default)(H, "GET_Z_APP_EMAIL_ERROR_TEXT", T.Qj[T.XT]),
                            mobile: (0, p.default)(H, "GET_Z_APP_PHONE_ERROR_TEXT", T.Qj[T.fW]),
                            default: T.Qj.default
                        },
                        B = (0, d.useReducer)(E.Z, (0, E.a)(N, M)),
                        j = (0, o.Z)(B, 2),
                        X = j[0],
                        K = j[1],
                        F = X.inputValue,
                        q = X.inputType,
                        V = X.valid,
                        W = X.errorMessage,
                        Q = X.fieldTouched,
                        Y = X.isSubmitting,
                        J = X.toastState,
                        $ = (0, p.default)(H, "GET_Z_APP_EMAIL_RADIO_LABEL", T.i6),
                        ee = x || [{
                            label: $,
                            value: T.XT
                        }, {
                            label: (0, p.default)(H, "GET_Z_APP_PHONE_RADIO_LABEL", T.RG),
                            value: T.fW
                        }],
                        ne = {
                            shareAppLink: (0, p.default)(H, "GET_Z_APP_SHARE_APP_LINK_CAPTION", T.ar),
                            share: (0, p.default)(H, "GET_Z_APP_SHARE_CAPTION", T.A1)
                        };
                    return d.createElement(y.W2, {
                        isUnited: G,
                        className: z
                    }, d.createElement(c.default, (0, a.Z)({
                        align: "top",
                        onClose: function() {
                            return K({
                                type: "CLOSE_TOAST"
                            })
                        }
                    }, J)), d.createElement(y.$0, null, d.createElement(y.mo, {
                        key: "get-app-link-form-image",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, d.createElement(y.iT, (0, a.Z)({
                        src: (0, _.Vl)(r),
                        height: "45rem",
                        alt: T.sc,
                        fit: "contain"
                    }, s, {
                        doPreload: !0
                    }))), d.createElement(y.ex, {
                        key: "get-app-link-form-content",
                        colD: 6,
                        colT: 6,
                        colM: 12
                    }, d.createElement(y.OT, null, n || (0, p.default)(H, "GET_Z_APP_HEADING_TEXT", T.bF)), d.createElement(y.QD, null, k || (0, p.default)(H, "GET_Z_APP_SUB_TEXT", T.JP)), w && d.createElement(w, {
                        offersData: b
                    }), d.createElement(y.TM, null, d.createElement(y.E5, {
                        onChange: function(e) {
                            var n;
                            K({
                                type: "CHANGE_TYPE",
                                inputType: e,
                                errorMessages: M
                            }), n = [e, M], (0, Z.qw)(C, n)
                        },
                        options: ee,
                        name: "radio",
                        selected: q,
                        horizontal: !0,
                        selectedColor: f.red.z500
                    })), d.createElement(P.Z, {
                        type: q,
                        value: F,
                        onChange: function(e) {
                            K({
                                type: "CHANGE_VALUE",
                                value: e
                            })
                        },
                        onBlur: function() {
                            return K({
                                type: "BLUR"
                            })
                        },
                        errorMsg: Q && !V ? W : T.jy,
                        onSubmit: function(e) {
                            ((0, h._k)({
                                eventCategory: T.H7.APP_LINK,
                                eventAction: h.m1.CLICK,
                                eventLabel: T.Ok.SHARE_CLICK
                            }), e.preventDefault(), V) ? (K({
                                type: "SUBMIT_INITIATE"
                            }), S([q, F, T.jV]), function(e) {
                                var n = e.action,
                                    t = e.type,
                                    a = e.sendOn,
                                    i = e.unitedUUID,
                                    o = e.signature,
                                    r = e.deeplink;
                                return (0, g.ZP)(A.aK, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    params: {
                                        action: n,
                                        type: t,
                                        send_on: a,
                                        united_uuid: i,
                                        signature: o,
                                        deeplink: r
                                    }
                                }).then((function(e) {
                                    return e.json()
                                }))
                            }({
                                action: t,
                                type: q,
                                sendOn: F,
                                unitedUUID: R,
                                signature: D,
                                deeplink: U
                            }).then((function() {
                                K({
                                    type: "SUBMIT_SUCCESS"
                                }), I([T.pK])
                            })).catch(function() {
                                var e = (0, i.Z)(l().mark((function e(n) {
                                    var t;
                                    return l().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!n.response) {
                                                    e.next = 8;
                                                    break
                                                }
                                                return e.next = 3, n.response.json();
                                            case 3:
                                                t = e.sent, K({
                                                    type: "SUBMIT_FAILED",
                                                    apiErrorMessage: t.message_text
                                                }), I([T.kr, t.message_text]), e.next = 10;
                                                break;
                                            case 8:
                                                K({
                                                    type: "SUBMIT_FAILED"
                                                }), I([T.kr]);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }())) : (K({
                                type: "FORM_SUBMIT_FAILED"
                            }), S([q, F, T.B3]))
                        },
                        onFocus: function() {
                            (0, Z.qw)(O)
                        },
                        isSubmitting: Y,
                        onCountryCodeChange: function(e) {
                            return K({
                                type: "CHANGE_INT_PHONE_CODE",
                                value: e
                            })
                        },
                        localizedEmailLabel: $,
                        localizedButtonCaptions: ne
                    }), d.createElement(y.zH, null, (0, p.default)(H, "GET_Z_APP_DOWNLOAD_TEXT", T.pM)), d.createElement(y.Pu, {
                        onClick: function() {
                            (0, Z.qw)(L), (0, h._k)({
                                eventCategory: T.H7.DOWNLOAD_LINK,
                                eventAction: h.m1.CLICK,
                                eventLabel: T.Ok.DOWNLOAD_LINK
                            })
                        }
                    }, d.createElement(m.Playstore, {
                        link: v
                    }), d.createElement(y.pY, null, d.createElement(m.Appstore, {
                        link: u
                    }))), G && d.createElement(y.Ib, null, d.createElement("p", null, "OR", d.createElement(y.Fg, {
                        href: "".concat(A.ho, "/order"),
                        color: f.red.z400
                    }, "Continue to Online Ordering"))))))
                };
            w.propTypes = {
                title: u().string,
                action: u().string,
                imgUrl: u().string,
                imgProps: u().objectOf(u().any),
                appStoreUrl: u().string,
                playStoreUrl: u().string,
                subtitle: u().string,
                Component: u().node,
                offersData: u().arrayOf(u().array),
                united_uuid: u().string,
                signature: u().string,
                radioOptions: u().arrayOf(u().object),
                selectedInputType: u().string,
                isUnited: u().bool,
                className: u().string,
                locale: u().shape({
                    GET_Z_APP_HEADING_TEXT: u().string,
                    GET_Z_APP_SUB_TEXT: u().string,
                    GET_Z_APP_DOWNLOAD_TEXT: u().string,
                    GET_Z_APP_EMAIL_RADIO_LABEL: u().string,
                    GET_Z_APP_PHONE_RADIO_LABEL: u().string,
                    GET_Z_APP_SHARE_APP_LINK_CAPTION: u().string,
                    GET_Z_APP_SHARE_CAPTION: u().string,
                    GET_Z_APP_EMAIL_ERROR_TEXT: u().string,
                    GET_Z_APP_PHONE_ERROR_TEXT: u().string
                }),
                deeplink: u().string
            }, w.defaultProps = {
                title: "",
                action: T.pb,
                imgUrl: T.oP,
                imgProps: {},
                appStoreUrl: T.EK,
                playStoreUrl: T.lI,
                subtitle: "",
                Component: null,
                offersData: [],
                united_uuid: "",
                signature: "",
                radioOptions: void 0,
                selectedInputType: T.XT,
                isUnited: !1,
                className: "",
                locale: {
                    GET_Z_APP_HEADING_TEXT: T.bF,
                    GET_Z_APP_SUB_TEXT: T.JP,
                    GET_Z_APP_DOWNLOAD_TEXT: T.pM,
                    GET_Z_APP_EMAIL_RADIO_LABEL: T.i6,
                    GET_Z_APP_PHONE_RADIO_LABEL: T.RG,
                    GET_Z_APP_SHARE_APP_LINK_CAPTION: T.ar,
                    GET_Z_APP_SHARE_CAPTION: T.A1,
                    GET_Z_APP_EMAIL_ERROR_TEXT: T.Qj[T.XT],
                    GET_Z_APP_PHONE_ERROR_TEXT: T.Qj[T.fW]
                },
                deeplink: ""
            };
            const b = w
        },
        "2VVk": (e, n, t) => {
            t.d(n, {
                $0: () => w,
                E5: () => H,
                Fg: () => X,
                Ib: () => U,
                OT: () => D,
                Pu: () => R,
                QD: () => N,
                TM: () => z,
                W2: () => B,
                ex: () => b,
                iT: () => k,
                mo: () => j,
                pY: () => G,
                zH: () => M
            });
            var a, i, o, r, l, d, s, u, p, m, c, f, _, E, g, T, h = t("RlfA"),
                A = t("vOnD"),
                P = t("lFeK"),
                y = t("/ahK"),
                Z = t("wcxm"),
                C = t("ALki"),
                v = t("8Bj0"),
                x = t("N/Eu"),
                O = t("kdDk"),
                L = t("YgTD"),
                S = t("2fHp"),
                I = t("SEds"),
                w = A.default.div(a || (a = (0, h.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: nowrap;\n"]))),
                b = A.default.div(i || (i = (0, h.Z)(["\n  position: relative;\n  top: -2.5rem;\n  width: 45rem;\n  margin-left: 2rem;\n  flex-shrink: 0;\n\n  @media (max-width: 768px) {\n    padding-left: 2.5rem;\n    margin-left: 0;\n    width: 48%;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    text-align: center;\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]))),
                k = (0, A.default)(P.default)(o || (o = (0, h.Z)(["\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                R = A.default.div(r || (r = (0, h.Z)(["\n  display: flex;\n  @media (max-width: 580px) {\n    justify-content: center;\n  }\n"]))),
                D = (0, A.default)(y.default)(l || (l = (0, h.Z)(["\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n  font-size: 4.4rem;\n  line-height: 5.6rem;\n\n  @media (max-width: 768px) {\n    font-size: ", ";\n    margin-bottom: 1.5rem;\n    line-height: 1.2;\n  }\n\n  @media (max-width: 480px) {\n    font-size: ", ";\n    margin-bottom: 1.5rem;\n    line-height: 1.2;\n  }\n"])), L.fontSizes.z700, L.fontSizes.z700),
                N = (0, A.default)(Z.P)(d || (d = (0, h.Z)(["\n  margin-bottom: 2.5rem;\n  width: 100%;\n  font-size: 2.2;\n  line-height: 3.2rem;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    line-height: 1.2;\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    font-size: 1.6rem;\n    line-height: 1.2;\n  }\n"]))),
                G = A.default.div(s || (s = (0, h.Z)(["\n  margin-left: 2rem;\n"]))),
                z = A.default.div(u || (u = (0, h.Z)(["\n  width: 50%;\n  height: 4rem;\n  @media (max-width: 580px) {\n    width: 100%;\n  }\n"]))),
                H = (0, A.default)(C.default)(p || (p = (0, h.Z)(["\n  @media (max-width: 480px) {\n    justify-content: flex-start !important;\n  }\n"]))),
                U = A.default.div(m || (m = (0, h.Z)(["\n  margin-top: 0.5rem;\n\n  p {\n    color: ", ";\n    font-size: ", ";\n  }\n"])), I.grey.z500, L.fontSizes.z200),
                M = (0, A.default)(Z.P)(c || (c = (0, h.Z)(["\n  color: ", ";\n  font-size: ", ";\n  margin-bottom: 1.5rem;\n"])), I.grey.z500, L.fontSizes.z200),
                B = (0, A.default)(S.default)(f || (f = (0, h.Z)(["\n  margin-top: ", ";\n\n  @media (max-width: 768px) {\n    margin-top: 7.5rem;\n  }\n\n  @media (max-width: 480px) {\n    margin-top: 7.5rem;\n  }\n"])), (function(e) {
                    return e.isUnited ? "6rem" : "3rem"
                })),
                j = A.default.div(_ || (_ = (0, h.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 2rem;\n  width: 100%;\n  @media (max-width: 480px) {\n    display: none;\n  }\n"]))),
                X = ((0, A.default)(O.default)(E || (E = (0, h.Z)([""]))), (0, A.default)(v.default)(g || (g = (0, h.Z)(["\n  margin-left: 5px;\n\n  span {\n    font-size: 1.8rem;\n    font-weight: 500;\n    text-decoration: underline;\n  }\n"]))));
            (0, A.default)(x.default)(T || (T = (0, h.Z)(["\n  margin-left: 5px;\n"])))
        },
        f773: (e, n, t) => {
            t.d(n, {
                LV: () => o,
                PR: () => d,
                if: () => r
            });
            var a = new RegExp(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/),
                i = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                o = function(e) {
                    return a.test(e)
                },
                r = function(e) {
                    return i.test(e)
                },
                l = ["gmail.com", "yahoo.com", "yahoo.co", "yahoo.co.in", "yahoo.co.uk", "outlook.com", "live.com", "msn.com", "rediffmail.com", "aol.com", "hotmail.com", "rocketmail.com"],
                d = function(e) {
                    return r(e) && function(e) {
                        var n = e.indexOf("@");
                        if (-1 === n) return !1;
                        var t = e.substring(n + 1).toLowerCase();
                        return !l.includes(t)
                    }(e)
                }
        }
    }
]);