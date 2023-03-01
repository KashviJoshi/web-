"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6804], {
        uJIT: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => x
            });
            var r, l, a, o = t("RlfA"),
                p = t("zThL"),
                i = t("q1tI"),
                u = t("TRpf"),
                c = t("17x9"),
                s = t.n(c),
                C = t("vOnD"),
                d = t("j399"),
                f = t("lXQd"),
                g = t("LSsp"),
                E = t("Mu5C"),
                T = t("b3mR"),
                A = t("J+Im"),
                P = t("P62M"),
                h = t("aMMj"),
                m = t("WHL/"),
                M = t("VAjR"),
                _ = t("52md"),
                I = t("NEP9"),
                L = t("AdJq"),
                H = t("z6+9"),
                Z = t("tie5"),
                w = t("cLV7"),
                V = t("HYWB"),
                b = t("s2Gh"),
                S = t("QcEp"),
                v = [M.uU, M.sU, M.ZA, M.kk, M.JD],
                O = [M.si, M.Or, M.mo, M.sK],
                U = function(e) {
                    var n = e.showScanner,
                        t = e.scannerClickHandler,
                        r = e.openAppMwebDeeplinkUrl,
                        l = e.openAppText;
                    return i.createElement(R, null, i.createElement(V.Z, {
                        useAppText: l,
                        openAppMwebDeeplinkUrl: r
                    }), i.createElement(Z.Z, null), n && i.createElement(k, {
                        onClick: t,
                        size: 20,
                        color: g.default
                    }))
                };
            U.propTypes = {
                showScanner: s().bool,
                scannerClickHandler: s().func,
                openAppMwebDeeplinkUrl: s().string,
                openAppText: s().string
            }, U.defaultProps = {
                showScanner: !1,
                scannerClickHandler: d.default,
                openAppMwebDeeplinkUrl: "",
                openAppText: ""
            };
            var D = function(e) {
                    var n, t = e.handleSignin,
                        r = e.currentPage,
                        l = e.currentPageSubType,
                        a = e.pageUrlMappings,
                        o = e.userProfileName,
                        u = e.PAGE_NAME_TITLE_MAPPING,
                        c = e.showScanner,
                        s = e.scannerPageUrl,
                        C = e.loadThisPage,
                        g = e.isUserLoggedIn,
                        T = e.openAppMwebDeeplinkUrl,
                        P = e.openAppText,
                        h = e.showAppPitchBottomBar,
                        I = function(e, n, t) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                                l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                                a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                                o = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "";
                            return function() {
                                return i.createElement(e, {
                                    showScanner: n,
                                    openAppMwebDeeplinkUrl: r,
                                    scannerClickHandler: t,
                                    openAppText: l,
                                    showAppPitchBottomBar: a,
                                    currentPageSubType: o
                                })
                            }
                        }(U, c, (function() {
                            g ? C(s, 1) : t()
                        }), T, P, h, l),
                        Z = (n = {}, (0, p.Z)(n, M.xR, (function() {
                            return -1 === v.findIndex((function(e) {
                                return e === l
                            }))
                        })), (0, p.Z)(n, M.Q9, (function() {
                            return l === M.ZE
                        })), n),
                        V = (0, f.default)(Z, r, d.default)() ? function() {
                            return i.createElement(N, null, l === M.gv ? o : u[l])
                        } : null,
                        D = !!(r === M.xR && l === M.ap) || (r === M.lX ? Object.keys(a).length >= 1 : Object.keys(a).length > 1 && !_.zv.includes(r)),
                        R = (0, m.ZP)(r),
                        k = O.includes(r),
                        x = k ? null : H.Xx;
                    return i.createElement(i.Fragment, null, i.createElement(E.Z, {
                        logoImg: x,
                        IconComponent: D ? A.default : null,
                        onIconClick: D ? function() {
                            (0, b.gx)(), r === M.xR && l === M.ap ? window.history.back() : (0, S.u)(a, C)
                        } : d.default,
                        RightSection: R ? null : I,
                        onLogoClick: function() {
                            (0, b.RB)(), window.location.href = L.xG
                        },
                        LogoComponent: V,
                        isTransparent: k,
                        leftInclinedLogo: !!T
                    }), i.createElement(w.Z, null))
                },
                R = C.default.div(r || (r = (0, o.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]))),
                k = (0, C.default)(T.default)(l || (l = (0, o.Z)(["\n  margin-left: 1.2rem;\n"]))),
                N = C.default.div(a || (a = (0, o.Z)(["\n  font-size: 1.8rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
            D.propTypes = {
                handleSignin: s().func,
                currentPage: s().string.isRequired,
                userProfileName: s().string,
                currentPageSubType: s().string,
                pageUrlMappings: s().objectOf(s().object),
                PAGE_NAME_TITLE_MAPPING: s().objectOf(s().object),
                showScanner: s().bool,
                scannerPageUrl: s().string,
                loadThisPage: s().func,
                isUserLoggedIn: s().bool,
                openAppMwebDeeplinkUrl: s().string,
                openAppText: s().string,
                showAppPitchBottomBar: s().bool
            }, D.defaultProps = {
                handleSignin: d.default,
                userProfileName: "",
                currentPageSubType: "",
                pageUrlMappings: {},
                PAGE_NAME_TITLE_MAPPING: {},
                showScanner: !1,
                scannerPageUrl: "",
                loadThisPage: d.default,
                isUserLoggedIn: !1,
                openAppMwebDeeplinkUrl: "",
                openAppText: "",
                showAppPitchBottomBar: !1
            };
            const x = (0, u.$j)((function(e) {
                var n, t = (0, f.default)(e, "pages.current.userId", 0),
                    r = (0, f.default)(e, "langKeys", {}),
                    l = (0, f.default)(e, "pages.current.skuId", 0);
                return {
                    currentPage: (0, f.default)(e, "pages.current.name", ""),
                    isUserLoggedIn: (0, P.Pc)(e),
                    userProfileName: (0, f.default)(e, "pages.user.".concat(t, ".sections.").concat(I.mM, ".name"), ""),
                    PAGE_NAME_TITLE_MAPPING: (n = {}, (0, p.Z)(n, M.d5, r.TITLE_REC_VIEWED), (0, p.Z)(n, M.Ve, r.TITLE_FAVORITE_ORDER), (0, p.Z)(n, M.r$, r.TITLE_ADDRESS), (0, p.Z)(n, M.P3, r.TITLE_BOOKMARK), (0, p.Z)(n, M.V0, r.TITLE_ORDER_HISTORY), (0, p.Z)(n, M.hV, r.TITLE_BOOKING_HISTORY), (0, p.Z)(n, M.EW, r.TITLE_CDNG_HISTORY || "Order History"), (0, p.Z)(n, M.ap, "Manage Cards"), (0, p.Z)(n, M.YO, r.TITLE_DINING_HELP || "Support"), (0, p.Z)(n, M.ZE, (0, f.default)(e, "pages.dotePdp.".concat(l, ".sections.SECTION_ALL_FAQS.title"), "")), n),
                    pageUrlMappings: (0, f.default)(e, "pageUrlMappings"),
                    showAppPitchBottomBar: (0, f.default)(e, "pageConfig.showOpenAppBottomBar.visible", !1)
                }
            }), (function(e) {
                return {
                    loadThisPage: function(n) {
                        return (0, h.ij)(e, n, void 0, void 0, 1)
                    }
                }
            }))((0, i.memo)(D, P.Uh))
        },
        b3mR: (e, n, t) => {
            var r = t("JMD1");
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var l = r(t("pP/M")),
                a = r(t("q1tI")),
                o = r(t("w/pp")),
                p = r(t("6jlT")),
                i = function(e) {
                    var n = (0, p.default)();
                    return a.default.createElement(o.default, (0, l.default)({
                        uniqueId: n
                    }, e), a.default.createElement("g", {
                        clipPath: "url(#clip0)"
                    }, a.default.createElement("path", {
                        d: "M20 1.25V4.79167C20 5.01268 19.9122 5.22464 19.7559 5.38092C19.5996 5.5372 19.3877 5.625 19.1667 5.625C18.9457 5.625 18.7337 5.5372 18.5774 5.38092C18.4211 5.22464 18.3333 5.01268 18.3333 4.79167V1.66667H15.2083C14.9873 1.66667 14.7754 1.57887 14.6191 1.42259C14.4628 1.26631 14.375 1.05435 14.375 0.833333C14.375 0.61232 14.4628 0.400358 14.6191 0.244078C14.7754 0.0877974 14.9873 0 15.2083 0L18.75 0C19.0815 0 19.3995 0.131696 19.6339 0.366117C19.8683 0.600537 20 0.918479 20 1.25ZM0.833333 5.625C1.05435 5.625 1.26631 5.5372 1.42259 5.38092C1.57887 5.22464 1.66667 5.01268 1.66667 4.79167V1.66667H4.79167C5.01268 1.66667 5.22464 1.57887 5.38092 1.42259C5.5372 1.26631 5.625 1.05435 5.625 0.833333C5.625 0.61232 5.5372 0.400358 5.38092 0.244078C5.22464 0.0877974 5.01268 0 4.79167 0L1.25 0C0.918479 0 0.600537 0.131696 0.366117 0.366117C0.131696 0.600537 0 0.918479 0 1.25L0 4.79167C0 5.01268 0.0877974 5.22464 0.244078 5.38092C0.400358 5.5372 0.61232 5.625 0.833333 5.625ZM3.95833 18.3333H1.66667V15.2083C1.66667 14.9873 1.57887 14.7754 1.42259 14.6191C1.26631 14.4628 1.05435 14.375 0.833333 14.375C0.61232 14.375 0.400358 14.4628 0.244078 14.6191C0.0877974 14.7754 0 14.9873 0 15.2083L0 18.75C0 19.0815 0.131696 19.3995 0.366117 19.6339C0.600537 19.8683 0.918479 20 1.25 20H3.95833C4.17935 20 4.39131 19.9122 4.54759 19.7559C4.70387 19.5996 4.79167 19.3877 4.79167 19.1667C4.79167 18.9457 4.70387 18.7337 4.54759 18.5774C4.39131 18.4211 4.17935 18.3333 3.95833 18.3333ZM19.1667 14.375C18.9457 14.375 18.7337 14.4628 18.5774 14.6191C18.4211 14.7754 18.3333 14.9873 18.3333 15.2083V18.3333H15.2083C14.9873 18.3333 14.7754 18.4211 14.6191 18.5774C14.4628 18.7337 14.375 18.9457 14.375 19.1667C14.375 19.3877 14.4628 19.5996 14.6191 19.7559C14.7754 19.9122 14.9873 20 15.2083 20H18.75C19.0815 20 19.3995 19.8683 19.6339 19.6339C19.8683 19.3995 20 19.0815 20 18.75V15.2083C20 14.9873 19.9122 14.7754 19.7559 14.6191C19.5996 14.4628 19.3877 14.375 19.1667 14.375ZM9.16667 4.16667V7.91667C9.16667 8.24819 9.03497 8.56613 8.80055 8.80055C8.56613 9.03497 8.24819 9.16667 7.91667 9.16667H4.16667C3.83515 9.16667 3.5172 9.03497 3.28278 8.80055C3.04836 8.56613 2.91667 8.24819 2.91667 7.91667V4.16667C2.91667 3.83515 3.04836 3.5172 3.28278 3.28278C3.5172 3.04836 3.83515 2.91667 4.16667 2.91667H7.91667C8.24819 2.91667 8.56613 3.04836 8.80055 3.28278C9.03497 3.5172 9.16667 3.83515 9.16667 4.16667ZM7.5 4.58333H4.58333V7.5H7.5V4.58333ZM12.0833 9.16667C11.7518 9.16667 11.4339 9.03497 11.1994 8.80055C10.965 8.56613 10.8333 8.24819 10.8333 7.91667V4.16667C10.8333 3.83515 10.965 3.5172 11.1994 3.28278C11.4339 3.04836 11.7518 2.91667 12.0833 2.91667H15.8333C16.1649 2.91667 16.4828 3.04836 16.7172 3.28278C16.9516 3.5172 17.0833 3.83515 17.0833 4.16667V7.91667C17.0833 8.24819 16.9516 8.56613 16.7172 8.80055C16.4828 9.03497 16.1649 9.16667 15.8333 9.16667H12.0833ZM12.5 7.5H15.4167V4.58333H12.5V7.5ZM9.16667 12.0833V15.8333C9.16667 16.1649 9.03497 16.4828 8.80055 16.7172C8.56613 16.9516 8.24819 17.0833 7.91667 17.0833H4.16667C3.83515 17.0833 3.5172 16.9516 3.28278 16.7172C3.04836 16.4828 2.91667 16.1649 2.91667 15.8333V12.0833C2.91667 11.7518 3.04836 11.4339 3.28278 11.1994C3.5172 10.965 3.83515 10.8333 4.16667 10.8333H7.91667C8.24819 10.8333 8.56613 10.965 8.80055 11.1994C9.03497 11.4339 9.16667 11.7518 9.16667 12.0833ZM7.5 12.5H4.58333V15.4167H7.5V12.5ZM15 16.25H12.9167C12.5851 16.25 12.2672 16.1183 12.0328 15.8839C11.7984 15.6495 11.6667 15.3315 11.6667 15V12.9167C11.6667 12.5851 11.7984 12.2672 12.0328 12.0328C12.2672 11.7984 12.5851 11.6667 12.9167 11.6667H15C15.3315 11.6667 15.6495 11.7984 15.8839 12.0328C16.1183 12.2672 16.25 12.5851 16.25 12.9167V15C16.25 15.3315 16.1183 15.6495 15.8839 15.8839C15.6495 16.1183 15.3315 16.25 15 16.25ZM14.5833 13.3333H13.3333V14.5833H14.5833V13.3333Z"
                    })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                        id: "clip0"
                    }, a.default.createElement("rect", {
                        width: "20",
                        height: "20"
                    }))))
                };
            n.default = i
        }
    }
]);