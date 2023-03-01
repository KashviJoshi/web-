"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [4791], {
        dg7M: (C, e, t) => {
            var n, o, a, r, i, s;
            t.d(e, {
                Z: () => B
            });
            const c = "login_ui",
                l = "IFRAME",
                d = "NEW_WINDOW",
                u = "MODAL_TYPE_VISIBLE",
                p = () => {
                    g(), o()
                };
            var h = void 0;
            let f;
            const m = (C, e) => {
                    var t = document.createElement("iframe");
                    if (t.setAttribute("id", "auth-login-ui"), t.setAttribute("src", e), t.setAttribute("sandbox", "allow-top-navigation allow-scripts allow-popups allow-forms allow-same-origin"), t.style.alignItems = "center", t.style.position = "fixed", f = document.createElement("div"), h = t, C === u) {
                        t.style.top = "50%", t.style.left = "50%", t.style.transform = "translate(-50%, -50%)", t.style.border = "0", t.style.borderRadius = "0.6rem", t.style.width = "100vw", t.style.height = "100vh", t.style.minHeight = "150px", t.style.minWidth = "300px", t.style.boxShadow = "rgba(28, 28, 28, 0.15) 0px 1.2rem 7rem";
                        var n = document.createElement("div");
                        n.style.width = "100%", n.style.height = "100%", n.style.position = "absolute", n.style.opacity = "0.8", n.style.top = "0px", n.style.backgroundColor = "black", n.onclick = p, f.style.width = "100%", f.style.height = "100%", f.style.border = "100%", f.style.position = "fixed", f.style.top = 0, f.appendChild(n)
                    } else t.style.width = "0", t.style.height = "0", t.style.visibility = "hidden";
                    f.appendChild(h), document.body.appendChild(f)
                },
                g = () => {
                    void 0 !== f && (f.remove(), f = void 0), void 0 !== h.close && h.close()
                };
            class L {
                constructor() {
                    if (L._instance) return L._instance;
                    L._instance = this, this.cookie_domain = process.env.REACT_APP_COOKIE_DOMAIN, this.accounts_domain = process.env.REACT_APP_ACCOUNTS_DOMAIN, this.google_cid = "442739719837.apps.googleusercontent.com", this.accounts_data = {
                        LOGIN_TYPE: "login",
                        LOGIN_METHODS: ["google", "email", "phone"]
                    }
                }
                setOAuthScreen(C) {
                    this.oauth_screen = C
                }
                setIdToken(C) {
                    this.id_token = C
                }
                setAccountsData(C, e) {
                    var t = ["google", "email", "phone"];
                    if ("LOGIN_METHODS" == C) {
                        if (!Array.isArray(e)) return;
                        var n = [];
                        for (const C of e) t.includes(C) && n.push(C);
                        0 == n.length && (n = ["google", "email", "phone"]), this.accounts_data.LOGIN_METHODS = n
                    } else this.accounts_data[C] = e
                }
                setLoginChallenge(C) {
                    this.login_challenge = C
                }
                setPnlHash(C) {
                    this.pnl_hash = C
                }
                setTheme(C) {
                    this.theme = C
                }
            }
            const b = () => {
                    var C = new W;
                    C.logout_url && (document.cookie = "cid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;", fetch(C.logout_url, {
                        method: "POST"
                    }).then((C => C.json())).then((function(C) {
                        C.status
                    })).catch((C => {})))
                },
                v = C => `; ${document.cookie}`.split(`; ${C}=`).pop().split(";").shift();

            function w() {
                H({
                    ev: "errorFound"
                })
            }

            function x(C) {
                var e = (new L).accounts_domain + "/consent";
                const t = new FormData;
                t.append("cc", C), fetch(e, {
                    method: "POST",
                    credentials: "include",
                    body: t
                }).then((C => C.json())).then((function(C) {
                    1 == C.status && function(C) {
                        if ("" === C) return !1;
                        try {
                            var e = new L;
                            if (new URL(C).origin !== e.accounts_domain) return !1
                        } catch (C) {
                            return !1
                        }
                        return !0
                    }(C.redirect_to) ? H({
                        ev: "redirectCallback",
                        data: C.redirect_to
                    }) : w()
                })).catch((function(C) {
                    w()
                }))
            }

            function M() {
                H({
                    ev: "removeCookies"
                })
            }

            function _() {
                H({
                    ev: "errorFound"
                })
            }

            function y(C, e, t) {
                const n = new FormData;
                n.append("code", C), n.append("state", e), n.append("scope", t);
                var o = new W,
                    a = (new L).accounts_domain + "/callback";
                fetch(a, {
                    method: "POST",
                    credentials: "include",
                    body: n
                }).then((C => C.json())).then((function(C) {
                    if (C.status)
                        if (C.data.opaque_token) {
                            const e = new URLSearchParams;
                            e.append("token", C.data.opaque_token), o.redirect_url && function(C) {
                                if ("" === C) return !1;
                                try {
                                    var e = new URL(C).origin;
                                    if (!/^(https|http):\/\/(.+)?(\.eks\.zdev\.net|\.zdev\.net|\.zomans\.com)$/i.test(e)) return !1
                                } catch (C) {
                                    return !1
                                }
                                return !0
                            }(o.redirect_url) && fetch(o.redirect_url, {
                                method: "POST",
                                body: e,
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    "x-zomato-csrf-token": v("__Host-csrft")
                                }
                            }).then((C => C.json())).then((function(C) {
                                C.status && M()
                            })).catch((C => {
                                _()
                            }))
                        } else M();
                    else _()
                })).catch((function(C) {
                    _()
                }))
            }

            function Z() {
                var C = new Uint32Array(28);
                return window.crypto.getRandomValues(C), Array.from(C, (C => ("0" + C.toString(16)).substr(-2))).join("")
            }
            async function $(C) {
                var e, t = await
                function(C) {
                    const e = (new TextEncoder).encode(C);
                    return window.crypto.subtle.digest("SHA-256", e)
                }(C);
                return e = t, btoa(String.fromCharCode.apply(null, new Uint8Array(e))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
            }
            async function k() {
                var C = new L,
                    e = new W;
                const t = C.accounts_domain + "/oauth2/auth";
                var n = Z(),
                    o = Z(),
                    a = await $(o),
                    r = new URL(t);
                return r.searchParams.append("code_challenge", a), r.searchParams.append("code_challenge_method", "S256"), r.searchParams.append("client_id", e.client_id), r.searchParams.append("redirect_uri", C.accounts_domain + "/zoauth/callback"), r.searchParams.append("scope", e.scope), r.searchParams.append("state", n), r.searchParams.append("response_type", e.response_type), C.setAccountsData("zxcv", o), C.setAccountsData("purl", top.window.location.origin), C.setAccountsData("cid", e.client_id), C.setAccountsData("curl", e.redirect_url),
                    function(C) {
                        var e = new W,
                            t = new L,
                            n = new Date,
                            o = "; expires=" + new Date(n.getFullYear() + 1, n.getMonth(), n.getDate()).toUTCString();
                        e.redirect_url ? document.cookie = "cid=" + (C || "") + o + ";path=/" : document.cookie = "cid=" + (C || "") + o + ";domain=" + t.cookie_domain + ";path=/"
                    }(e.client_id), r.href
            }

            function E(C, e) {
                return new Promise((async (t, a) => {
                    let r = await k();
                    n = t,
                        function(C) {
                            o = C
                        }(a), C === d ? (C => {
                            h = window.open(C);
                            let e = setInterval((function() {
                                h.closed && (clearInterval(e), p())
                            }), 50)
                        })(r) : C === l && m(e === c ? u : "MODAL_TYPE_HIDDEN", r)
                }))
            }
            var P = !1;

            function H(C) {
                var e = new L;
                e.oauth_screen == l ? document.getElementById("auth-login-ui").contentWindow.postMessage(C, e.accounts_domain) : h.postMessage(C, e.accounts_domain)
            }

            function D(C) {
                if (C.data && C.data.ev) {
                    var e = new L,
                        t = JSON.parse(JSON.stringify(C.data));
                    if (C.origin === e.accounts_domain) switch (t.ev) {
                        case "loginModalReady":
                            P ? O() : T();
                            break;
                        case "getLoginConfigs":
                            S();
                            break;
                        case "closeModalContainer":
                        case "completeSignIn":
                            n("able to sign in"), g();
                            break;
                        case "errorInSignIn":
                            p();
                            break;
                        case "refreshDone":
                            i();
                            break;
                        case "loggedOut":
                            b(), a();
                            break;
                        case "errorFound":
                            g(), void 0 !== r ? r("not able to logout") : void 0 !== s ? s("not able to refresh") : void 0 !== o && o("not able to signin"), P && (P = !1);
                            break;
                        case "getAccountsData":
                            H({
                                ev: "accountsData",
                                data: (new L).accounts_data
                            });
                            break;
                        case "completeConsent":
                            x(t.data);
                            break;
                        case "completeCallback":
                            y(t.data.code, t.data.state, t.data.scope);
                            break;
                        case "setLoginChallenge":
                            e.setLoginChallenge(t.lc)
                    }
                }
            }
            const O = () => {
                    if (!P) return;
                    H({
                        ev: "migrate"
                    })
                },
                T = () => {
                    var C = new L;
                    if (void 0 === C.id_token) return;
                    H({
                        ev: "idTokenForOneTap",
                        ID_TOKEN: C.id_token
                    })
                },
                S = () => {
                    H({
                        ev: "themeAndLoginData",
                        THEME: (new L).theme
                    })
                };

            function A() {
                var C = new L;
                google.accounts.id.initialize({
                    client_id: C.google_cid,
                    callback: F
                }), google.accounts.id.prompt()
            }
            const F = ({
                credential: C = ""
            }) => {
                var e = new W,
                    t = new L;
                return t.setIdToken(C), t.setOAuthScreen(l), E(l, "one_tap", e.client_id, e.scope, e.response_type)
            };

            function I() {
                return new Promise(((C, e) => {
                    var t = new W,
                        n = (new L).accounts_domain + "/token/refresh";
                    const o = new FormData;
                    o.append("cid", t.client_id), o.append("callback", t.redirect_url), fetch(n, {
                        method: "POST",
                        credentials: "include",
                        body: o
                    }).then((C => C.json())).then((function(n) {
                        if (n.status)
                            if (n.data.opaque_token) {
                                const o = new URLSearchParams;
                                o.append("token", n.data.opaque_token), t.redirect_url && isValidCallback(t.redirect_url) && fetch(t.redirect_url, {
                                    method: "POST",
                                    body: o,
                                    credentials: "include",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded",
                                        "x-zomato-csrf-token": v("__Host-csrft")
                                    }
                                }).then((C => C.json())).then((function(t) {
                                    t.status ? C(t.message) : e(t.message)
                                })).catch((C => {
                                    e(C)
                                }))
                            } else C(n.message);
                        else e(n.message)
                    })).catch((function(C) {
                        e(C)
                    }))
                }))
            }

            function z(C) {
                var e = v("ttaz");
                if (e && 1e3 * parseInt(e) - Date.now() < 36e5) return I()
            }
            const j = 2,
                V = 4;

            function R(C) {
                document.getElementById("auth-login-ui").src = C
            }
            class W {
                constructor(C = {}) {
                    if (W._instance) return W._instance;
                    W._instance = this, this.client_id = C.client_id, this.scope = C.scope || "offline", this.redirect_url = C.redirect_url || "", this.response_type = "code", this.refresh_enable = C.refresh_enable || !0;
                    var e, t = new L;
                    void 0 !== C.login_methods && t.setAccountsData("LOGIN_METHODS", C.login_methods), this.logout_url = C.logout_url || "", !0 === C.enable_one_tap && function() {
                        let C = document.createElement("script");
                        C.setAttribute("src", "https://accounts.google.com/gsi/client"), C.onload = A, document.body.appendChild(C)
                    }(), void 0 !== C.theme && t.setTheme(C.theme), window.addEventListener("message", D, !1), !0 === C.custom && async function() {
                        var C = new W;
                        (new L).setOAuthScreen(l), E(l, "custom_login", C.client_id, C.scope, C.response_type)
                    }(this.client_id, this.scope, this.response_type), !0 === this.auto_refresh && (z(this.client_id), setInterval((() => z(this.client_id)), 18e5)), (e = v("lme")) && "1" === e && this.migrate().then(void(document.cookie = "lme=; Path=/;Domain=.zdev.net; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"))
                }
                validate() {
                    return new Promise((function(C, e) {
                        fetch(process.env.REACT_APP_GW_DOMAIN + "/gw/internal/auth/validate", {
                            method: "POST"
                        }).then((e => {
                            C(e.json())
                        })).catch((C => {
                            e(C)
                        }))
                    }))
                }
                login(C = l, e = "login_ui") {
                    var t = new L;
                    return [l, d].includes(C) && t.setOAuthScreen(C), E(C, e)
                }
                logout() {
                    return new Promise(((C, e) => {
                        var t = new W,
                            n = (new L).accounts_domain + "/signout";
                        const o = new FormData;
                        o.append("cid", t.client_id), fetch(n, {
                            method: "POST",
                            credentials: "include",
                            body: o
                        }).then((C => C.json())).then((function(t) {
                            t.status ? (b(), C(t.message)) : e(t.message)
                        })).catch((function(C) {
                            e(C)
                        }))
                    }))
                }
                refresh() {
                    return I()
                }
                migrate() {
                    return C = new W, e = new L, P = !0, e.setOAuthScreen(l), E(l, "migration_flow", C.client_id, C.scope, C.response_type);
                    var C, e
                }
                initiatePhoneLogin(C, e, t, n) {
                    return function(C, e, t, n) {
                        return new Promise(((o, a) => {
                            var r = new L;
                            let i = r.accounts_domain + "/login/phone";
                            const s = new FormData;
                            s.append("country_id", C), s.append("number", e), s.append("lc", r.login_challenge), s.append("type", "initiate"), s.append("verification_type", t || "sms"), s.append("message_uuid", n || ""), fetch(i, {
                                method: "POST",
                                body: s,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? o(C) : a(C)
                            }))
                        }))
                    }(C, e, t, n)
                }
                verifyPhoneLogin(C, e, t) {
                    return function(C, e, t) {
                        return new Promise(((n, o) => {
                            var a = new L;
                            let r = a.accounts_domain + "/login/phone";
                            const i = new FormData;
                            i.append("country_id", C), i.append("number", e), i.append("lc", a.login_challenge), i.append("type", "verify"), i.append("otp", t), fetch(r, {
                                method: "POST",
                                body: i,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? ([j, V].includes(C.login_case) ? R(C.redirect_to) : a.setPnlHash(C.hash), n(C)) : o(C)
                            }))
                        }))
                    }(C, e, t)
                }
                signupPhoneLogin(C, e) {
                    return function(C, e) {
                        return new Promise(((t, n) => {
                            var o = new L;
                            let a = o.accounts_domain + "/login/phone";
                            const r = new FormData;
                            r.append("hash", o.pnl_hash), r.append("lc", o.login_challenge), r.append("type", "create_user"), r.append("name", C), r.append("email", e), fetch(a, {
                                method: "POST",
                                body: r,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? (R(C.redirect_to), t(C)) : n(C)
                            }))
                        }))
                    }(C, e)
                }
                initiateEmailLogin(C) {
                    return function(C) {
                        return new Promise(((e, t) => {
                            var n = new L;
                            let o = n.accounts_domain + "/login/email";
                            const a = new FormData;
                            a.append("email", C), a.append("lc", n.login_challenge), a.append("type", "initiate"), fetch(o, {
                                method: "POST",
                                body: a,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? e(C) : t(C)
                            }))
                        }))
                    }(C)
                }
                verifyEmailLogin(C, e) {
                    return function(C, e) {
                        return new Promise(((t, n) => {
                            var o = new L;
                            let a = o.accounts_domain + "/login/email";
                            const r = new FormData;
                            r.append("email", C), r.append("lc", o.login_challenge), r.append("type", "verify"), r.append("otp", e), fetch(a, {
                                method: "POST",
                                body: r,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? (R(C.redirect_to), t(C)) : n(C)
                            }))
                        }))
                    }(C, e)
                }
                initiateEmailSignup(C, e) {
                    return function(C, e) {
                        return new Promise(((t, n) => {
                            var o = new L;
                            let a = o.accounts_domain + "/login/email";
                            const r = new FormData;
                            r.append("name", e), r.append("email", C), r.append("lc", o.login_challenge), r.append("type", "signup"), fetch(a, {
                                method: "POST",
                                body: r,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? t(C) : n(C)
                            }))
                        }))
                    }(C, e)
                }
                linkPhoneLoginWithEmail() {
                    return new Promise(((C, e) => {
                        var t = new L;
                        let n = t.accounts_domain + "/login/phone";
                        const o = new FormData;
                        o.append("hash", t.pnl_hash), o.append("lc", t.login_challenge), o.append("type", "send_login_link"), fetch(n, {
                            method: "POST",
                            body: o,
                            credentials: "include"
                        }).then((C => C.json())).then((t => {
                            t.status ? C(t) : e(t)
                        }))
                    }))
                }
                verifyLinkPhoneLoginWithEmail(C) {
                    return function(C) {
                        return new Promise(((e, t) => {
                            var n = new L;
                            let o = n.accounts_domain + "/login/phone";
                            const a = new FormData;
                            a.append("hash", n.pnl_hash), a.append("lc", n.login_challenge), a.append("type", "verify_otp_link"), a.append("otp", C), fetch(o, {
                                method: "POST",
                                body: a,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? (R(C.redirect_to), e(C)) : t(C)
                            }))
                        }))
                    }(C)
                }
                linkPhoneLoginWithGoogle(C) {
                    return function(C) {
                        return new Promise(((e, t) => {
                            var n = new L;
                            let o = n.accounts_domain + "/login/phone";
                            const a = new FormData;
                            a.append("hash", n.pnl_hash), a.append("lc", n.login_challenge), a.append("type", "link"), a.append("id_token", C), fetch(o, {
                                method: "POST",
                                body: a,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? (R(C.redirect_to), e(C)) : t(C)
                            }))
                        }))
                    }(C)
                }
                linkPhoneLoginWithFacebook(C) {
                    return function(C) {
                        return new Promise(((e, t) => {
                            var n = new L;
                            let o = n.accounts_domain + "/login/phone";
                            const a = new FormData;
                            a.append("hash", n.pnl_hash), a.append("lc", n.login_challenge), a.append("type", "link"), a.append("fb_token", C), fetch(o, {
                                method: "POST",
                                body: a,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? (R(C.redirect_to), e(C)) : t(C)
                            }))
                        }))
                    }(C)
                }
                customGoogleLogin(C) {
                    return function(C) {
                        return new Promise(((e, t) => {
                            var n = new L;
                            let o = n.accounts_domain + "/login/google";
                            const a = new FormData;
                            a.append("id_token", C), a.append("lc", n.login_challenge), a.append("type", "social"), fetch(o, {
                                method: "POST",
                                body: a,
                                credentials: "include"
                            }).then((C => C.json())).then((C => {
                                C.status ? (R(C.redirect_to), e(C)) : t(C)
                            }))
                        }))
                    }(C)
                }
            }
            const B = function(C) {
                var e;
                if (null != (e = C.client_id) && 0 !== e.length) return new W(C)
            }
        },
        Itp7: (C, e, t) => {
            t.d(e, {
                d4: () => a,
                q: () => r,
                B3: () => o,
                $r: () => i
            });
            var n = t("q1tI");
            t("AT7R");
            const o = "text",
                a = "image-sticker",
                r = "promo-sticker",
                i = n.createContext({})
        },
        AT7R: (C, e, t) => {},
        DHSc: (C, e, t) => {
            t.d(e, {
                Z: () => qC
            });
            var n = t("q1tI"),
                o = t("vOnD"),
                a = t("l3X6"),
                r = t("Tg0j"),
                i = t("SEds");

            function s() {
                return s = Object.assign || function(C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }, s.apply(this, arguments)
            }
            const c = o.default.div `
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  /* padding: 5px; */
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,
                l = ({
                    isPaused: C,
                    onPlayPauseToggle: e,
                    ...t
                }) => n.createElement(c, s({
                    onClick: e
                }, t), C ? n.createElement(a.default, {
                    color: i.white,
                    size: 12
                }) : n.createElement(r.default, {
                    color: i.white,
                    size: 12
                })),
                d = o.default.div `
  position: relative;
  top: 0;
  left: 0;
  width: ${({previewWidth:C})=>C}px;
  height: calc((${({previewWidth:C})=>C}px * 16) / 9);
  display: flex;
  align-items: center;
  background: black;
`,
                u = o.default.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`,
                p = (o.default.div `
  width: 100%;
  height: 100%;
  ${({isGradient:C,bg:e,gradient:t})=>C?o.css`
                    background - image: $ {
                        t
                    };
                    `:o.css`
                    background: $ {
                        e
                    };
                    `}
`, o.default.div `
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  transform: ${({transform:C})=>C};
  /* text-align: center;
  background: ${({bg:C})=>C};
  color: ${({color:C})=>C};
  font-size: ${({fontSize:C})=>C};
  line-height: ${({lineHeight:C})=>C};
  font-weight: ${({fontWeight:C})=>C};
  border-radius: ${({borderRadius:C})=>C};
  padding: ${({padding:C})=>C};
  width: ${({width:C})=>C};
  height: ${({height:C})=>C}; */
`),
                h = (0, o.default)(l)
            `
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(
    calc(50% - ${({isAudioControlHidden:C})=>C?"20px":"55px"}),
    calc(50% - 20px)
  );
`;
            var f = t("Itp7");
            const m = ({
                size: C
            }) => n.createElement("svg", {
                width: C,
                height: C * (65 / 32),
                viewBox: "0 0 32 65",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, n.createElement("g", {
                style: {
                    mixBlendMode: "multiply"
                }
            }, n.createElement("path", {
                d: "M27.4753 41.4111C27.6119 41.0308 27.6554 40.6234 27.6022 40.2229C27.5491 39.8224 27.4008 39.4405 27.1698 39.109C26.9388 38.7775 26.6318 38.5062 26.2745 38.3177C25.9171 38.1292 25.5199 38.0289 25.1159 38.0254H25.065C24.2125 37.9508 23.358 37.8854 22.5035 37.8194L22.3509 37.8075C24.9772 34.4397 27.5394 31.0117 30.0369 27.6696L31.5167 25.6886C31.789 25.316 31.9533 24.8755 31.9915 24.4157C32.0297 23.9558 31.9403 23.4943 31.7332 23.0819C31.5262 22.6695 31.2094 22.3222 30.8177 22.0781C30.426 21.8341 29.9746 21.7028 29.5132 21.6987C29.4544 21.6987 29.3692 21.702 29.3111 21.7066L27.3023 21.8644C25.5972 21.9965 23.8559 22.1352 22.1112 22.2811C22.5035 20.4182 22.8865 18.5554 23.2609 16.7341C24.1095 12.6068 24.9864 8.33893 25.9552 4.18065C26.0341 3.84306 26.0424 3.49278 25.9794 3.15185C25.9165 2.81091 25.7836 2.48669 25.5893 2.19957C25.2535 1.71172 24.7583 1.35609 24.1887 1.19384C23.9259 1.10665 23.6507 1.06207 23.3738 1.06177C22.9763 1.06279 22.5845 1.15735 22.2303 1.3378C21.876 1.51825 21.5692 1.77953 21.3346 2.10051C17.5646 7.26915 13.9386 12.6445 10.4295 17.8428C7.5899 22.0546 4.64932 26.4084 1.66317 30.6102C1.39809 30.9313 1.21417 31.3114 1.12693 31.7185C1.03969 32.1256 1.05171 32.5477 1.16196 32.9492C1.31659 33.4291 1.60682 33.8539 1.99763 34.1724C2.38843 34.4909 2.86308 34.6895 3.36426 34.7441L4.20424 34.8293C5.20006 34.9296 6.21305 35.0313 7.22869 35.1376C5.33874 38.5623 3.49567 41.944 1.72723 45.331C1.4753 45.7162 1.33791 46.165 1.33101 46.6253C1.31326 47.2781 1.55007 47.9123 1.99137 48.3937C2.22886 48.654 2.51785 48.8621 2.84002 49.0047C3.16219 49.1474 3.51049 49.2215 3.86283 49.2225C4.0346 49.2226 4.20591 49.2046 4.37395 49.169C5.12742 49.0501 5.90004 48.9194 6.7103 48.7728C6.12984 50.4105 5.55665 52.0455 4.99336 53.6489C4.08801 56.2355 3.15096 58.9113 2.20599 61.5263C2.00019 62.0812 2.00209 62.6918 2.21134 63.2454C2.42059 63.799 2.82306 64.2582 3.34445 64.5382C3.83588 64.827 4.41227 64.9364 4.97535 64.8478C5.53842 64.7591 6.05333 64.478 6.43229 64.0522C9.36693 60.7926 12.4977 57.5853 15.5261 54.4836C19.3377 50.5795 23.2781 46.5421 26.9239 42.3085C27.1706 42.0529 27.3587 41.7466 27.4753 41.4111Z",
                fill: "#FFA3BC"
            })), n.createElement("path", {
                d: "M30.5895 21.807C30.3618 21.486 30.0606 21.2243 29.7109 21.0437C29.3613 20.8631 28.9735 20.7688 28.58 20.7689C28.5219 20.7689 28.4361 20.7689 28.3786 20.7768L26.3691 20.9353C24.6647 21.0674 22.9227 21.2054 21.178 21.3514C21.5703 19.4885 21.9533 17.6256 22.3277 15.8043C23.1763 11.6771 24.0532 7.40917 25.022 3.25089C25.1012 2.91332 25.1096 2.563 25.0466 2.22202C24.9836 1.88105 24.8507 1.55683 24.6562 1.26981C24.3198 0.781215 23.8235 0.425295 23.2529 0.26342C22.9901 0.176177 22.7149 0.131589 22.438 0.131348C22.0405 0.132373 21.6487 0.226938 21.2945 0.40739C20.9402 0.587841 20.6334 0.849112 20.3988 1.17009C16.6288 6.33873 13.0028 11.7147 9.49364 16.9124C6.65409 21.1248 3.71417 25.4779 0.72736 29.6798C0.462473 30.001 0.278667 30.3811 0.191439 30.7882C0.10421 31.1952 0.116118 31.6173 0.226149 32.0188C0.38118 32.4985 0.671521 32.9231 1.06223 33.2417C1.45294 33.5602 1.92738 33.7591 2.42845 33.8143L3.26842 33.8989C4.26425 33.9992 5.27724 34.1009 6.29287 34.2079C4.40358 37.6319 2.55986 41.0142 0.791413 44.4012C0.539413 44.7862 0.402003 45.2348 0.395197 45.6949C0.386565 46.0326 0.445584 46.3686 0.568776 46.6831C0.691967 46.9977 0.87684 47.2844 1.11252 47.5264C1.34819 47.7684 1.62991 47.9608 1.94108 48.0923C2.25224 48.2238 2.58657 48.2917 2.92438 48.292C3.09617 48.2925 3.26751 48.2745 3.4355 48.2386C4.18897 48.1197 4.96159 47.9896 5.77185 47.8423C5.19139 49.4807 4.61886 51.1151 4.05491 52.7184C3.14956 55.3051 2.21251 57.9808 1.26754 60.5959C1.06174 61.1508 1.06364 61.7614 1.27289 62.315C1.48214 62.8686 1.88461 63.3278 2.406 63.6078C2.89757 63.8965 3.47403 64.0058 4.03719 63.9172C4.60034 63.8286 5.11536 63.5475 5.4945 63.1218C8.42914 59.8622 11.5592 56.6548 14.5877 53.5531C18.3993 49.6491 22.3403 45.6116 25.9855 41.3781C26.2323 41.1223 26.4205 40.8158 26.5369 40.48C26.6736 40.0998 26.7172 39.6923 26.6641 39.2917C26.611 38.8912 26.4628 38.5091 26.2318 38.1776C26.0007 37.8461 25.6937 37.5748 25.3362 37.3863C24.9788 37.1978 24.5815 37.0977 24.1774 37.0943H24.1272C23.274 37.0197 22.4195 36.9543 21.565 36.889L21.4125 36.8771C24.0387 33.5092 26.6009 30.0806 29.0984 26.7392L30.5783 24.7581C30.8991 24.3336 31.0736 23.8165 31.0756 23.2844C31.0776 22.7524 30.9071 22.2339 30.5895 21.807Z",
                fill: "white"
            }), n.createElement("path", {
                d: "M3.25516 64.0679H3.22875C3.12055 64.0494 3.01359 64.0243 2.90847 63.9927C2.88844 63.9873 2.8697 63.9779 2.85335 63.9651C2.83699 63.9524 2.82337 63.9364 2.81328 63.9183C2.80319 63.9002 2.79683 63.8802 2.79459 63.8596C2.79235 63.839 2.79426 63.8181 2.80022 63.7982C2.80618 63.7784 2.81607 63.7599 2.8293 63.7439C2.84252 63.7279 2.85882 63.7148 2.87722 63.7052C2.89563 63.6956 2.91577 63.6898 2.93645 63.6881C2.95713 63.6865 2.97793 63.689 2.99762 63.6955C3.09066 63.7231 3.18526 63.7452 3.28092 63.7615C3.31953 63.7678 3.35436 63.7883 3.37845 63.8191C3.40254 63.8499 3.41413 63.8887 3.41087 63.9277C3.40762 63.9666 3.38977 64.0029 3.3609 64.0293C3.33203 64.0557 3.29427 64.0702 3.25516 64.0699V64.0679ZM4.17967 64.0455C4.14118 64.0458 4.10395 64.0318 4.07521 64.0062C4.04648 63.9805 4.02829 63.9452 4.02417 63.9069C4.02006 63.8686 4.03031 63.8302 4.05295 63.7991C4.07558 63.7679 4.10898 63.7463 4.14665 63.7384C4.24153 63.7175 4.33503 63.6908 4.42664 63.6585C4.4654 63.6449 4.50797 63.6472 4.54503 63.665C4.58208 63.6827 4.61059 63.7144 4.62431 63.7531C4.63804 63.7918 4.63585 63.8344 4.61823 63.8715C4.60061 63.9086 4.569 63.9372 4.53032 63.9511C4.42667 63.988 4.32081 64.0185 4.21335 64.0422C4.20224 64.0443 4.19097 64.0454 4.17967 64.0455ZM2.12265 63.5793C2.08959 63.5792 2.05741 63.5686 2.03085 63.5489C1.94216 63.4839 1.85769 63.4133 1.77794 63.3376C1.76311 63.3236 1.75118 63.3068 1.74284 63.2882C1.7345 63.2696 1.72991 63.2495 1.72933 63.2291C1.72815 63.1879 1.74338 63.148 1.77167 63.118C1.79995 63.0881 1.83898 63.0706 1.88015 63.0694C1.92133 63.0682 1.96129 63.0835 1.99123 63.1117C2.06168 63.1786 2.13623 63.241 2.21444 63.2986C2.24096 63.3179 2.26067 63.3451 2.27077 63.3764C2.28086 63.4076 2.28081 63.4412 2.27061 63.4723C2.26042 63.5035 2.2406 63.5307 2.21402 63.5499C2.18743 63.5691 2.15545 63.5794 2.12265 63.5793ZM5.27917 63.4934C5.24746 63.4935 5.2165 63.4839 5.19043 63.4658C5.16437 63.4478 5.14446 63.4222 5.13338 63.3925C5.12231 63.3628 5.12059 63.3304 5.12848 63.2997C5.13636 63.269 5.15346 63.2414 5.17747 63.2207C5.25062 63.1569 5.31987 63.0888 5.38482 63.0167L5.61067 63.2299C5.5387 63.3096 5.46195 63.3848 5.38086 63.4551C5.35281 63.4799 5.31662 63.4936 5.27917 63.4934ZM1.34409 62.627C1.31443 62.627 1.2854 62.6185 1.26046 62.6025C1.23552 62.5864 1.21572 62.5636 1.20343 62.5366C1.15754 62.4363 1.11784 62.3333 1.08456 62.2282C1.0723 62.1889 1.07617 62.1463 1.0953 62.1098C1.11443 62.0733 1.14727 62.046 1.18659 62.0337C1.22591 62.0214 1.26849 62.0253 1.30496 62.0444C1.34143 62.0636 1.3688 62.0964 1.38106 62.1357C1.41026 62.2282 1.4451 62.3189 1.4854 62.4071C1.49392 62.4256 1.4987 62.4456 1.49945 62.466C1.50021 62.4864 1.49693 62.5067 1.48981 62.5257C1.48269 62.5448 1.47188 62.5623 1.45797 62.5772C1.44407 62.5921 1.42736 62.6041 1.4088 62.6125C1.38859 62.6221 1.36647 62.6271 1.34409 62.627ZM6.12707 62.5848C6.09701 62.5846 6.06763 62.5757 6.04249 62.5593C6.01735 62.5428 5.99751 62.5194 5.98536 62.4919C5.97322 62.4644 5.96929 62.434 5.97405 62.4043C5.9788 62.3746 5.99204 62.3469 6.01217 62.3246L6.2215 62.0948C6.23529 62.0797 6.2519 62.0676 6.2704 62.0589C6.2889 62.0503 6.30891 62.0454 6.3293 62.0445C6.34969 62.0436 6.37005 62.0468 6.38923 62.0538C6.40841 62.0607 6.42602 62.0714 6.44107 62.0852C6.45612 62.099 6.4683 62.1156 6.47692 62.1341C6.48555 62.1526 6.49044 62.1726 6.49133 62.193C6.49222 62.2134 6.48909 62.2338 6.48211 62.2529C6.47513 62.2721 6.46443 62.2897 6.45065 62.3048L6.24131 62.5339C6.22713 62.5504 6.20961 62.5637 6.18992 62.5729C6.17023 62.5821 6.14881 62.5871 6.12707 62.5874V62.5848ZM6.96638 61.6682C6.92744 61.6684 6.88988 61.6538 6.86139 61.6273C6.84631 61.6135 6.83411 61.5969 6.82548 61.5784C6.81684 61.5599 6.81195 61.5399 6.81109 61.5196C6.81024 61.4992 6.81342 61.4788 6.82046 61.4597C6.82751 61.4405 6.83827 61.423 6.85214 61.408L7.06346 61.1789C7.07734 61.1639 7.09402 61.1518 7.11256 61.1433C7.1311 61.1348 7.15115 61.13 7.17154 61.1293C7.19192 61.1285 7.21227 61.1318 7.2314 61.1388C7.25053 61.1459 7.26807 61.1567 7.28303 61.1706C7.29799 61.1845 7.31007 61.2012 7.31858 61.2197C7.32709 61.2383 7.33186 61.2583 7.33263 61.2787C7.33339 61.2991 7.33014 61.3194 7.32304 61.3386C7.31595 61.3577 7.30516 61.3752 7.29128 61.3902L7.08063 61.6187C7.06609 61.6344 7.04842 61.647 7.02874 61.6555C7.00907 61.664 6.98782 61.6684 6.96638 61.6682ZM1.12947 61.4166H1.11626C1.09594 61.415 1.07614 61.4094 1.05799 61.4002C1.03984 61.3909 1.0237 61.3781 1.0105 61.3626C0.997309 61.3471 0.987315 61.3291 0.981098 61.3097C0.974881 61.2903 0.972562 61.2698 0.974279 61.2495C0.983022 61.14 0.998241 61.0311 1.01985 60.9233C1.02969 60.8845 1.0541 60.8509 1.08801 60.8296C1.12192 60.8083 1.16274 60.8009 1.20199 60.8089C1.24123 60.8169 1.27589 60.8397 1.29878 60.8725C1.32168 60.9054 1.33104 60.9458 1.32493 60.9854C1.3053 61.0807 1.29141 61.177 1.28333 61.274C1.28034 61.3127 1.26284 61.349 1.23432 61.3754C1.2058 61.4018 1.16836 61.4165 1.12947 61.4166ZM7.81231 60.7562C7.78158 60.7565 7.75145 60.7477 7.72571 60.731C7.69996 60.7142 7.67975 60.6902 7.66761 60.662C7.65547 60.6337 7.65195 60.6026 7.65749 60.5723C7.66302 60.5421 7.67737 60.5142 7.69873 60.4921L7.91136 60.2649C7.93947 60.2348 7.9784 60.2171 8.01957 60.2157C8.06075 60.2142 8.1008 60.2292 8.13093 60.2573C8.16105 60.2854 8.17878 60.3244 8.1802 60.3655C8.18163 60.4067 8.16663 60.4468 8.13852 60.4769L7.92589 60.7041C7.91174 60.7206 7.89425 60.734 7.87456 60.7434C7.85487 60.7527 7.83343 60.7578 7.81165 60.7582L7.81231 60.7562ZM1.46361 60.2227C1.44561 60.2225 1.42775 60.2194 1.41078 60.2134C1.3721 60.1995 1.34052 60.1709 1.32294 60.1338C1.30536 60.0966 1.30323 60.054 1.31701 60.0153L1.422 59.7228C1.43617 59.6843 1.46486 59.653 1.50191 59.6354C1.53895 59.6179 1.58139 59.6156 1.62011 59.629C1.65878 59.6429 1.69038 59.6715 1.70795 59.7087C1.72553 59.7458 1.72767 59.7884 1.71389 59.8271L1.60888 60.1203C1.59839 60.1506 1.5788 60.1768 1.55279 60.1955C1.52678 60.2142 1.49563 60.2244 1.46361 60.2246V60.2227ZM8.66153 59.8496C8.63058 59.8504 8.6001 59.8419 8.57404 59.8252C8.54798 59.8085 8.52754 59.7843 8.51537 59.7558C8.50321 59.7274 8.49987 59.6959 8.5058 59.6655C8.51172 59.6351 8.52664 59.6072 8.54861 59.5854L8.7619 59.3589C8.79019 59.329 8.82921 59.3115 8.87039 59.3103C8.89078 59.3097 8.91108 59.3132 8.93014 59.3204C8.9492 59.3277 8.96664 59.3386 8.98147 59.3526C8.9963 59.3666 9.00823 59.3834 9.01657 59.4021C9.02491 59.4207 9.0295 59.4407 9.03009 59.4611C9.03067 59.4815 9.02723 59.5018 9.01996 59.5209C9.0127 59.5399 9.00176 59.5574 8.98775 59.5722L8.77445 59.7981C8.76069 59.8142 8.74372 59.8273 8.72462 59.8365C8.70552 59.8457 8.68471 59.8508 8.66351 59.8515L8.66153 59.8496ZM1.88095 59.0525C1.86314 59.0527 1.84545 59.0496 1.82879 59.0433C1.80953 59.0365 1.79179 59.0261 1.7766 59.0124C1.76141 58.9988 1.74907 58.9823 1.74029 58.9639C1.73152 58.9455 1.72647 58.9255 1.72545 58.9051C1.72443 58.8847 1.72746 58.8644 1.73435 58.8452L1.8387 58.552C1.85253 58.5132 1.8812 58.4815 1.91842 58.4638C1.95563 58.4462 1.99834 58.444 2.03713 58.4579C2.07593 58.4717 2.10763 58.5004 2.12528 58.5376C2.14293 58.5748 2.14507 58.6175 2.13123 58.6563L2.0269 58.9488C2.0167 58.9791 1.9974 59.0055 1.97164 59.0244C1.94587 59.0434 1.91489 59.0538 1.88293 59.0545L1.88095 59.0525ZM9.51669 58.9475C9.47679 58.9477 9.43839 58.9323 9.40971 58.9046C9.39491 58.8906 9.38302 58.8738 9.37474 58.8551C9.36645 58.8365 9.36194 58.8164 9.36144 58.7961C9.36095 58.7757 9.3645 58.7554 9.37188 58.7364C9.37925 58.7174 9.39032 58.7001 9.40443 58.6854L9.61839 58.4602C9.63244 58.4454 9.64926 58.4335 9.6679 58.4252C9.68654 58.4169 9.70662 58.4124 9.72701 58.4119C9.7474 58.4114 9.76769 58.4149 9.78673 58.4222C9.80576 58.4295 9.82318 58.4405 9.83796 58.4546C9.85275 58.4686 9.86462 58.4854 9.8729 58.5041C9.88118 58.5227 9.88572 58.5428 9.88624 58.5632C9.88676 58.5836 9.88326 58.6039 9.87594 58.6229C9.86862 58.6419 9.85762 58.6593 9.84357 58.6741L9.62962 58.8993C9.61544 58.9147 9.59831 58.9271 9.57925 58.9357C9.56019 58.9443 9.53959 58.949 9.51867 58.9495L9.51669 58.9475ZM10.3752 58.0488C10.335 58.0492 10.2964 58.0337 10.2675 58.0058C10.2527 57.9917 10.2409 57.9748 10.2327 57.9561C10.2244 57.9374 10.22 57.9173 10.2195 57.8968C10.2191 57.8764 10.2227 57.8561 10.2301 57.8371C10.2376 57.818 10.2487 57.8007 10.2629 57.7859L10.4775 57.5621C10.4916 57.5473 10.5085 57.5355 10.5271 57.5273C10.5458 57.5191 10.5659 57.5146 10.5863 57.5141C10.6067 57.5137 10.6269 57.5172 10.646 57.5246C10.665 57.532 10.6823 57.543 10.6971 57.5571C10.7118 57.5712 10.7237 57.5881 10.7319 57.6067C10.7401 57.6254 10.7446 57.6455 10.745 57.6659C10.7455 57.6863 10.7419 57.7066 10.7346 57.7256C10.7272 57.7446 10.7161 57.762 10.702 57.7767L10.4868 58.0012C10.4729 58.0164 10.456 58.0285 10.4373 58.0371C10.4186 58.0456 10.3984 58.0502 10.3778 58.0507L10.3752 58.0488ZM2.29698 57.8804C2.27202 57.8806 2.24739 57.8748 2.22517 57.8634C2.20296 57.852 2.18382 57.8354 2.16942 57.8151C2.15501 57.7947 2.14575 57.7711 2.14244 57.7464C2.13912 57.7216 2.14185 57.6965 2.15038 57.673L2.25406 57.3805C2.26086 57.3612 2.2714 57.3435 2.28506 57.3283C2.29872 57.3131 2.31522 57.3008 2.33365 57.292C2.35208 57.2832 2.37206 57.2781 2.39245 57.277C2.41284 57.276 2.43324 57.2789 2.45249 57.2857C2.47175 57.2925 2.48947 57.3031 2.50465 57.3167C2.51983 57.3304 2.53217 57.3469 2.54097 57.3653C2.54977 57.3837 2.55486 57.4037 2.55593 57.4241C2.55701 57.4445 2.55407 57.4649 2.54726 57.4842L2.44292 57.7774C2.43273 57.8075 2.41351 57.8337 2.38787 57.8525C2.36222 57.8713 2.33141 57.8817 2.29963 57.8824L2.29698 57.8804ZM11.2376 57.154C11.2068 57.1543 11.1767 57.1455 11.1509 57.1287C11.1252 57.1119 11.105 57.0878 11.093 57.0595C11.081 57.0312 11.0776 57 11.0834 56.9698C11.0891 56.9395 11.1037 56.9117 11.1253 56.8898L11.3419 56.6653C11.3707 56.6357 11.41 56.6187 11.4512 56.6181C11.4924 56.6175 11.5322 56.6333 11.5618 56.662C11.5914 56.6907 11.6084 56.73 11.609 56.7713C11.6096 56.8125 11.5939 56.8523 11.5651 56.8819L11.3492 57.1051C11.3353 57.1203 11.3185 57.1326 11.2998 57.1412C11.2811 57.1498 11.2608 57.1546 11.2402 57.1553L11.2376 57.154ZM2.71367 56.7102C2.69608 56.7104 2.67861 56.7072 2.66216 56.701C2.6429 56.6942 2.62516 56.6838 2.60997 56.6701C2.59479 56.6565 2.58245 56.64 2.57367 56.6216C2.56489 56.6032 2.55985 56.5832 2.55883 56.5628C2.55781 56.5424 2.56083 56.5221 2.56773 56.5029L2.67075 56.2103C2.67741 56.191 2.68785 56.1732 2.70144 56.1579C2.71504 56.1427 2.73152 56.1303 2.74995 56.1214C2.76837 56.1126 2.78837 56.1075 2.80878 56.1064C2.82919 56.1053 2.84961 56.1083 2.86885 56.1152C2.90766 56.129 2.93944 56.1576 2.95726 56.1947C2.97508 56.2318 2.97748 56.2744 2.96394 56.3133L2.86027 56.6065C2.84959 56.6369 2.82975 56.6632 2.80349 56.6817C2.77722 56.7003 2.74584 56.7103 2.71367 56.7102ZM12.1046 56.2612C12.0739 56.2616 12.0437 56.2528 12.0179 56.2359C11.9922 56.2191 11.9721 56.1949 11.9601 56.1665C11.9482 56.1381 11.945 56.1068 11.951 56.0766C11.957 56.0464 11.9719 56.0187 11.9937 55.997L12.2096 55.7738C12.2389 55.7472 12.2772 55.7327 12.3168 55.7332C12.3564 55.7338 12.3943 55.7494 12.4228 55.7769C12.4513 55.8044 12.4682 55.8417 12.4702 55.8812C12.4722 55.9207 12.4591 55.9595 12.4335 55.9898L12.2162 56.2136C12.2017 56.2288 12.1843 56.2408 12.165 56.2491C12.1457 56.2574 12.125 56.2617 12.104 56.2618L12.1046 56.2612ZM3.12375 55.5348C3.10616 55.5349 3.0887 55.5317 3.07224 55.5255C3.03344 55.5118 3.00165 55.4832 2.98384 55.4461C2.96602 55.409 2.96362 55.3663 2.97715 55.3274L3.08017 55.0342C3.08697 55.015 3.0975 54.9972 3.11116 54.9821C3.12482 54.9669 3.14133 54.9545 3.15976 54.9457C3.17819 54.9369 3.19817 54.9319 3.21856 54.9308C3.23895 54.9297 3.25935 54.9327 3.27861 54.9395C3.29786 54.9463 3.31558 54.9568 3.33076 54.9705C3.34594 54.9841 3.35828 55.0006 3.36708 55.019C3.37588 55.0375 3.38097 55.0575 3.38204 55.0778C3.38312 55.0982 3.38018 55.1186 3.37337 55.1379L3.27035 55.4304C3.26052 55.4612 3.24139 55.4881 3.21561 55.5075C3.18982 55.5269 3.15865 55.5378 3.1264 55.5387L3.12375 55.5348ZM12.9691 55.367C12.9285 55.3671 12.8896 55.3512 12.8608 55.3228C12.8317 55.2936 12.8154 55.2541 12.8154 55.2128C12.8154 55.1716 12.8317 55.1321 12.8608 55.1029L13.078 54.8797C13.1068 54.8502 13.1462 54.8333 13.1874 54.8328C13.2287 54.8323 13.2684 54.8482 13.2979 54.8771C13.3274 54.9059 13.3443 54.9452 13.3448 54.9865C13.3453 55.0277 13.3294 55.0674 13.3006 55.097L13.084 55.3195C13.0698 55.3353 13.0525 55.3481 13.0332 55.3569C13.0139 55.3658 12.9929 55.3706 12.9717 55.371L12.9691 55.367ZM13.8368 54.4762C13.8063 54.476 13.7765 54.4668 13.7512 54.4499C13.7258 54.4329 13.706 54.4088 13.6942 54.3807C13.6824 54.3526 13.6791 54.3216 13.6847 54.2917C13.6903 54.2617 13.7046 54.234 13.7258 54.2121L13.9431 53.9895C13.9719 53.9601 14.0112 53.9433 14.0524 53.9429C14.0936 53.9425 14.1332 53.9584 14.1627 53.9872C14.1921 54.016 14.2089 54.0554 14.2093 54.0965C14.2097 54.1377 14.1938 54.1774 14.165 54.2068L13.9477 54.4293C13.9339 54.4445 13.9173 54.4569 13.8987 54.4656C13.8801 54.4743 13.8599 54.4793 13.8394 54.4802L13.8368 54.4762ZM3.53516 54.362C3.51784 54.3621 3.50063 54.3592 3.48431 54.3534C3.46498 54.3467 3.44716 54.3363 3.43188 54.3227C3.41659 54.3091 3.40415 54.2927 3.39525 54.2742C3.38635 54.2558 3.38118 54.2358 3.38003 54.2154C3.37888 54.195 3.38178 54.1746 3.38856 54.1553L3.49091 53.8621C3.50457 53.8232 3.53312 53.7913 3.57027 53.7735C3.60742 53.7557 3.65014 53.7533 3.68902 53.767C3.7279 53.7807 3.75977 53.8092 3.7776 53.8463C3.79543 53.8835 3.79777 53.9262 3.78411 53.9651L3.68175 54.2576C3.67196 54.2883 3.65293 54.3151 3.62728 54.3345C3.60162 54.3539 3.5706 54.3649 3.53846 54.3659L3.53516 54.362ZM14.7045 53.5867C14.664 53.5868 14.625 53.5709 14.5962 53.5425C14.5671 53.5133 14.5508 53.4737 14.5508 53.4325C14.5508 53.3913 14.5671 53.3518 14.5962 53.3226L14.8134 53.1007C14.8277 53.0861 14.8447 53.0745 14.8635 53.0665C14.8822 53.0585 14.9024 53.0543 14.9228 53.0541C14.9431 53.0538 14.9634 53.0576 14.9823 53.0652C15.0012 53.0729 15.0184 53.0841 15.033 53.0984C15.0476 53.1126 15.0592 53.1296 15.0672 53.1484C15.0752 53.1671 15.0794 53.1873 15.0796 53.2077C15.0799 53.2281 15.076 53.2483 15.0684 53.2672C15.0608 53.2861 15.0496 53.3034 15.0353 53.3179L14.8194 53.5398C14.8051 53.5553 14.7879 53.5678 14.7687 53.5765C14.7496 53.5853 14.7288 53.5901 14.7078 53.5907L14.7045 53.5867ZM3.9459 53.1905C3.92858 53.1906 3.91137 53.1877 3.89505 53.1819C3.85611 53.1683 3.82413 53.1398 3.80608 53.1027C3.78802 53.0656 3.78535 53.0229 3.79864 52.9838L3.90166 52.6899C3.90832 52.6706 3.91876 52.6528 3.93236 52.6376C3.94597 52.6224 3.96247 52.61 3.98091 52.6012C3.99936 52.5924 4.01936 52.5874 4.03977 52.5864C4.06017 52.5854 4.08057 52.5885 4.09977 52.5955C4.13857 52.6093 4.17035 52.6378 4.18817 52.675C4.20599 52.7121 4.20839 52.7547 4.19485 52.7936L4.0925 53.0862C4.08249 53.1165 4.06336 53.1431 4.03772 53.1622C4.01208 53.1814 3.98118 53.1922 3.9492 53.1931L3.9459 53.1905ZM15.5722 52.6985C15.5415 52.6987 15.5114 52.6899 15.4858 52.673C15.4601 52.6561 15.4401 52.632 15.4281 52.6037C15.4162 52.5755 15.4129 52.5443 15.4187 52.5141C15.4245 52.484 15.439 52.4562 15.4606 52.4344L15.6772 52.2125C15.7064 52.1846 15.7452 52.1692 15.7856 52.1694C15.8259 52.1696 15.8646 52.1854 15.8935 52.2135C15.9224 52.2417 15.9393 52.2799 15.9406 52.3203C15.9419 52.3606 15.9275 52.3998 15.9004 52.4298L15.6838 52.6523C15.6553 52.6819 15.6165 52.6994 15.5755 52.7012L15.5722 52.6985ZM4.35994 52.0217C4.3422 52.0217 4.32458 52.0188 4.30777 52.0131C4.26898 51.9993 4.23724 51.9707 4.21953 51.9336C4.20182 51.8964 4.1996 51.8538 4.21335 51.815L4.31571 51.5218C4.32937 51.4829 4.35791 51.451 4.39506 51.4332C4.43221 51.4154 4.47493 51.413 4.51381 51.4267C4.55269 51.4403 4.58455 51.4689 4.60239 51.506C4.62022 51.5432 4.62256 51.5859 4.6089 51.6248L4.50654 51.918C4.49578 51.9483 4.47592 51.9745 4.44968 51.9931C4.42344 52.0116 4.39209 52.0216 4.35994 52.0217ZM16.4445 51.8136C16.4139 51.8137 16.3839 51.8047 16.3584 51.7878C16.3328 51.7709 16.3129 51.7468 16.301 51.7186C16.2891 51.6903 16.2859 51.6592 16.2917 51.6291C16.2975 51.599 16.3121 51.5713 16.3336 51.5495L16.5489 51.327C16.5781 51.3002 16.6163 51.2855 16.6559 51.2859C16.6956 51.2864 16.7335 51.3019 16.7621 51.3293C16.7907 51.3567 16.8078 51.394 16.8099 51.4335C16.812 51.4731 16.7989 51.512 16.7734 51.5422L16.5561 51.7661C16.5412 51.7809 16.5235 51.7926 16.504 51.8004C16.4845 51.8083 16.4636 51.8121 16.4425 51.8117L16.4445 51.8136ZM17.3103 50.9222C17.2797 50.9221 17.2499 50.913 17.2244 50.8961C17.199 50.8791 17.1791 50.8551 17.1672 50.827C17.1553 50.7988 17.1519 50.7678 17.1575 50.7378C17.1631 50.7077 17.1774 50.68 17.1987 50.658L17.4153 50.4348C17.444 50.4053 17.4832 50.3884 17.5244 50.3879C17.5656 50.3873 17.6053 50.4031 17.6348 50.4318C17.6643 50.4606 17.6812 50.4998 17.6818 50.541C17.6824 50.5822 17.6665 50.6219 17.6378 50.6514L17.4225 50.874C17.4076 50.889 17.3898 50.9009 17.3702 50.9089C17.3505 50.9168 17.3295 50.9207 17.3083 50.9202L17.3103 50.9222ZM4.77399 50.8469C4.75625 50.8469 4.73861 50.844 4.72182 50.8383C4.68324 50.8243 4.65173 50.7956 4.63407 50.7586C4.6164 50.7215 4.61401 50.679 4.62739 50.6402L4.73041 50.3476C4.74407 50.3088 4.77261 50.2769 4.80977 50.2591C4.84692 50.2412 4.88963 50.2389 4.92851 50.2526C4.96739 50.2662 4.99925 50.2948 5.01709 50.3319C5.03492 50.3691 5.03727 50.4118 5.02361 50.4507L4.92059 50.7439C4.90972 50.774 4.88981 50.8001 4.86357 50.8185C4.83734 50.837 4.80606 50.8469 4.77399 50.8469ZM18.1747 50.0267C18.1441 50.0266 18.1143 50.0175 18.0888 50.0006C18.0634 49.9837 18.0435 49.9597 18.0316 49.9315C18.0197 49.9034 18.0163 49.8723 18.0219 49.8423C18.0275 49.8123 18.0418 49.7845 18.0631 49.7626L18.2783 49.5394C18.3069 49.5097 18.3461 49.4925 18.3872 49.4917C18.4284 49.4909 18.4682 49.5065 18.4979 49.5351C18.5276 49.5636 18.5447 49.6028 18.5455 49.644C18.5463 49.6851 18.5308 49.725 18.5022 49.7546L18.2869 49.9792C18.272 49.9945 18.2541 50.0066 18.2344 50.0147C18.2146 50.0229 18.1934 50.027 18.172 50.0267H18.1747ZM5.18606 49.6741C5.16831 49.6741 5.15068 49.6712 5.13388 49.6655C5.09531 49.6515 5.0638 49.6228 5.04613 49.5858C5.02847 49.5487 5.02607 49.5062 5.03946 49.4674L5.14247 49.1742C5.14846 49.1539 5.15853 49.135 5.17207 49.1187C5.18561 49.1023 5.20233 49.089 5.22122 49.0794C5.2401 49.0697 5.26074 49.0641 5.28189 49.0627C5.30304 49.0613 5.32425 49.0643 5.34421 49.0714C5.36418 49.0785 5.38249 49.0896 5.39802 49.104C5.41355 49.1184 5.42598 49.1359 5.43454 49.1553C5.4431 49.1747 5.44761 49.1956 5.4478 49.2168C5.448 49.238 5.44387 49.259 5.43567 49.2785L5.33265 49.5711C5.32163 49.6017 5.30133 49.628 5.27457 49.6465C5.2478 49.665 5.21593 49.6746 5.18341 49.6741H5.18606ZM19.0364 49.1313C19.0058 49.1313 18.9759 49.1223 18.9503 49.1054C18.9248 49.0886 18.9048 49.0645 18.8928 49.0364C18.8808 49.0082 18.8774 48.9771 18.883 48.947C18.8886 48.9169 18.9029 48.8891 18.9242 48.8671L19.1388 48.6426C19.1672 48.6127 19.2062 48.5954 19.2474 48.5943C19.2886 48.5933 19.3285 48.6086 19.3584 48.637C19.3882 48.6654 19.4056 48.7044 19.4067 48.7456C19.4077 48.7868 19.3923 48.8267 19.364 48.8565L19.1487 49.0817C19.134 49.0975 19.1162 49.11 19.0964 49.1185C19.0767 49.1271 19.0553 49.1314 19.0338 49.1313H19.0364ZM5.59944 48.5019C5.5817 48.502 5.56406 48.4991 5.54727 48.4934C5.50869 48.4793 5.47718 48.4507 5.45952 48.4136C5.44185 48.3766 5.43946 48.3341 5.45284 48.2952L5.55652 48.0027C5.56332 47.9835 5.57385 47.9657 5.58751 47.9506C5.60117 47.9354 5.61768 47.923 5.63611 47.9142C5.65454 47.9054 5.67452 47.9003 5.69491 47.8993C5.7153 47.8982 5.7357 47.9011 5.75495 47.9079C5.77421 47.9147 5.79193 47.9253 5.80711 47.9389C5.82229 47.9526 5.83463 47.9691 5.84343 47.9875C5.85223 48.006 5.85732 48.0259 5.85839 48.0463C5.85947 48.0667 5.85653 48.0871 5.84972 48.1064L5.74604 48.3996C5.73491 48.4301 5.71455 48.4563 5.6878 48.4746C5.66105 48.493 5.62923 48.5025 5.5968 48.5019H5.59944ZM2.62386 48.426H2.60405C2.49508 48.4122 2.38703 48.3919 2.28047 48.3652C2.24277 48.3532 2.21107 48.3272 2.1918 48.2927C2.17253 48.2581 2.16714 48.2175 2.17672 48.1791C2.1863 48.1407 2.21013 48.1074 2.24338 48.0859C2.27663 48.0644 2.31681 48.0564 2.35575 48.0635C2.45036 48.0872 2.54627 48.1052 2.64301 48.1176C2.68346 48.121 2.72099 48.14 2.74754 48.1707C2.7741 48.2014 2.78757 48.2413 2.78506 48.2818C2.78256 48.3224 2.76427 48.3603 2.73414 48.3875C2.704 48.4147 2.66441 48.429 2.62386 48.4273V48.426ZM3.54836 48.3745C3.50859 48.3755 3.46995 48.3612 3.44042 48.3346C3.41089 48.3079 3.39273 48.2709 3.38968 48.2313C3.38663 48.1916 3.39893 48.1523 3.42403 48.1214C3.44914 48.0906 3.48513 48.0705 3.52459 48.0654L3.831 48.0166C3.85111 48.0133 3.87168 48.0141 3.89151 48.0188C3.91134 48.0235 3.93006 48.032 3.94658 48.0439C3.96311 48.0559 3.97712 48.0709 3.98782 48.0883C3.99853 48.1056 4.00571 48.1249 4.00897 48.145C4.01222 48.1651 4.01148 48.1857 4.00678 48.2055C4.00209 48.2254 3.99353 48.2441 3.9816 48.2606C3.96967 48.2771 3.95461 48.2911 3.93726 48.3018C3.91992 48.3125 3.90064 48.3197 3.88052 48.323L3.57345 48.3725C3.56428 48.374 3.55501 48.3746 3.54572 48.3745H3.54836ZM19.8942 48.2318C19.8634 48.2325 19.833 48.2239 19.807 48.2072C19.7811 48.1904 19.7607 48.1662 19.7486 48.1378C19.7366 48.1094 19.7333 48.078 19.7392 48.0476C19.7452 48.0173 19.7601 47.9895 19.782 47.9677L19.9953 47.7425C20.0236 47.7126 20.0626 47.6951 20.1038 47.6939C20.1449 47.6927 20.1849 47.708 20.2149 47.7363C20.2448 47.7645 20.2623 47.8036 20.2635 47.8447C20.2646 47.8859 20.2494 47.9259 20.2211 47.9558L20.0072 48.1817C19.9925 48.1976 19.9746 48.2103 19.9547 48.219C19.9348 48.2276 19.9133 48.232 19.8916 48.2318H19.8942ZM4.77201 48.1724C4.73339 48.1717 4.69639 48.1568 4.66819 48.1304C4.63999 48.104 4.6226 48.068 4.6194 48.0295C4.61619 47.9911 4.62739 47.9527 4.65083 47.922C4.67427 47.8913 4.70827 47.8704 4.74625 47.8634L5.05266 47.8112C5.09329 47.8042 5.13505 47.8136 5.16873 47.8374C5.20242 47.8612 5.22527 47.8974 5.23228 47.938C5.23928 47.9786 5.22986 48.0204 5.20609 48.0541C5.18231 48.0877 5.14613 48.1106 5.10549 48.1176L4.79842 48.1704C4.79034 48.1717 4.78217 48.1723 4.77399 48.1724H4.77201ZM1.47021 47.9816C1.43838 47.9815 1.4073 47.9719 1.38106 47.9538C1.2908 47.8906 1.20456 47.8218 1.12286 47.7478C1.0923 47.7201 1.07398 47.6815 1.07194 47.6403C1.06989 47.5991 1.0843 47.5588 1.11197 47.5282C1.13964 47.4977 1.17832 47.4794 1.2195 47.4773C1.26067 47.4753 1.30097 47.4897 1.33154 47.5173C1.40348 47.5825 1.47935 47.6431 1.5587 47.6989C1.58585 47.7178 1.60626 47.7448 1.61697 47.7761C1.62768 47.8074 1.62813 47.8412 1.61826 47.8728C1.60838 47.9043 1.5887 47.9319 1.56207 47.9514C1.53544 47.971 1.50326 47.9816 1.47021 47.9816ZM20.7435 47.3291C20.7039 47.3293 20.6658 47.3142 20.6372 47.2869C20.6223 47.273 20.6103 47.2562 20.6019 47.2376C20.5935 47.2191 20.5888 47.199 20.5882 47.1786C20.5876 47.1582 20.591 47.138 20.5983 47.1189C20.6056 47.0999 20.6165 47.0824 20.6306 47.0676L20.8432 46.8411C20.8714 46.8111 20.9104 46.7935 20.9515 46.7922C20.9927 46.7909 21.0327 46.806 21.0628 46.8342C21.0928 46.8624 21.1104 46.9014 21.1117 46.9425C21.113 46.9837 21.0979 47.0237 21.0697 47.0538L20.8564 47.2803C20.8422 47.2954 20.8251 47.3075 20.8062 47.3159C20.7873 47.3243 20.7668 47.3288 20.7461 47.3291H20.7435ZM0.664574 47.0505C0.635737 47.0506 0.607443 47.0426 0.582924 47.0274C0.558404 47.0122 0.538647 46.9905 0.5259 46.9646C0.475911 46.8665 0.431809 46.7655 0.393828 46.6622C0.379904 46.6234 0.381958 46.5806 0.399543 46.5434C0.417129 46.5061 0.448801 46.4773 0.487594 46.4634C0.526387 46.4495 0.569121 46.4515 0.606397 46.4691C0.643674 46.4867 0.672439 46.5184 0.686363 46.5572C0.719045 46.6491 0.75742 46.7388 0.801265 46.8259C0.810328 46.8442 0.815709 46.8641 0.817097 46.8844C0.818484 46.9047 0.81585 46.9251 0.80935 46.9444C0.80285 46.9638 0.792607 46.9816 0.77921 46.997C0.765812 47.0123 0.749526 47.0249 0.731271 47.034C0.711376 47.0441 0.689517 47.0497 0.667218 47.0505H0.664574ZM21.5934 46.4225C21.5625 46.4231 21.5321 46.4145 21.5062 46.3978C21.4802 46.381 21.4599 46.357 21.4477 46.3286C21.4355 46.3003 21.432 46.2689 21.4377 46.2386C21.4435 46.2082 21.4581 46.1803 21.4798 46.1583L21.6917 45.9312C21.7201 45.9023 21.7585 45.8857 21.799 45.8848C21.8394 45.8839 21.8786 45.8988 21.9082 45.9263C21.9377 45.9538 21.9554 45.9918 21.9574 46.0322C21.9595 46.0726 21.9456 46.1121 21.9189 46.1425L21.7069 46.3703C21.693 46.3861 21.676 46.3989 21.6569 46.4079C21.6378 46.4169 21.6171 46.4218 21.596 46.4225H21.5934ZM0.395803 45.8486C0.354996 45.8486 0.315866 45.8324 0.287011 45.8035C0.258156 45.7747 0.241942 45.7356 0.241942 45.6947C0.243728 45.5843 0.25233 45.474 0.267697 45.3646C0.273476 45.3238 0.295229 45.2869 0.328171 45.2621C0.361113 45.2374 0.402548 45.2267 0.443355 45.2325C0.484162 45.2383 0.521002 45.26 0.54577 45.293C0.570539 45.3259 0.581206 45.3673 0.575427 45.4082C0.561638 45.5035 0.554132 45.5997 0.552969 45.6961C0.551952 45.7364 0.53538 45.7748 0.506707 45.8033C0.478033 45.8317 0.439479 45.8479 0.399108 45.8486H0.395803ZM22.4373 45.5112C22.4065 45.5116 22.3763 45.5029 22.3504 45.4862C22.3246 45.4695 22.3043 45.4455 22.2921 45.4172C22.2798 45.389 22.2763 45.3577 22.2818 45.3274C22.2873 45.2971 22.3017 45.2692 22.3231 45.247L22.5377 45.0218C22.5515 45.0068 22.5681 44.9946 22.5866 44.986C22.6051 44.9774 22.6251 44.9725 22.6455 44.9716C22.6659 44.9707 22.6862 44.9738 22.7054 44.9808C22.7246 44.9878 22.7422 44.9985 22.7572 45.0123C22.7723 45.0261 22.7845 45.0427 22.7931 45.0612C22.8017 45.0797 22.8066 45.0997 22.8075 45.1201C22.8084 45.1405 22.8052 45.1608 22.7983 45.18C22.7913 45.1992 22.7806 45.2168 22.7668 45.2318L22.5562 45.461C22.5415 45.4769 22.5236 45.4896 22.5037 45.4983C22.4838 45.5069 22.4623 45.5113 22.4406 45.5112H22.4373ZM0.720703 44.6646C0.693311 44.6646 0.666407 44.6573 0.642777 44.6435C0.607138 44.6229 0.581136 44.589 0.570485 44.5492C0.559835 44.5095 0.56541 44.4671 0.585987 44.4315C0.609099 44.3919 0.633539 44.3522 0.658633 44.3139L0.735229 44.166C0.744681 44.1479 0.757608 44.1319 0.773261 44.1188C0.788913 44.1057 0.806986 44.0958 0.826455 44.0897C0.845925 44.0836 0.866406 44.0814 0.886728 44.0832C0.90705 44.0851 0.926815 44.0909 0.944896 44.1003C0.962977 44.1098 0.979022 44.1227 0.99211 44.1383C1.0052 44.154 1.01507 44.1721 1.02117 44.1915C1.02727 44.211 1.02948 44.2315 1.02767 44.2518C1.02585 44.2721 1.02005 44.2919 1.0106 44.31L0.926074 44.4711C0.897018 44.5167 0.875229 44.5517 0.855419 44.5867C0.842096 44.6099 0.822994 44.6293 0.799967 44.6429C0.77694 44.6566 0.750773 44.664 0.724008 44.6646H0.720703ZM23.2766 44.5933C23.2465 44.5933 23.2171 44.5845 23.1919 44.5682C23.1667 44.5518 23.1469 44.5284 23.1347 44.5009C23.1225 44.4734 23.1186 44.443 23.1234 44.4133C23.1282 44.3836 23.1415 44.356 23.1617 44.3337L23.3697 44.1033C23.3979 44.0747 23.4361 44.0581 23.4762 44.0569C23.5163 44.0557 23.5554 44.0701 23.5852 44.097C23.615 44.1239 23.6332 44.1613 23.6361 44.2013C23.6391 44.2414 23.6264 44.281 23.6009 44.312L23.3915 44.5424C23.3773 44.558 23.3601 44.5706 23.341 44.5793C23.3218 44.5881 23.301 44.5928 23.2799 44.5933H23.2766ZM24.1093 43.6688C24.0792 43.6689 24.0497 43.6603 24.0244 43.6439C23.9991 43.6276 23.9791 43.6042 23.9669 43.5767C23.9546 43.5492 23.9506 43.5187 23.9554 43.489C23.9602 43.4592 23.9735 43.4315 23.9938 43.4092L24.1998 43.1781C24.2129 43.1613 24.2293 43.1474 24.248 43.1372C24.2667 43.127 24.2873 43.1207 24.3085 43.1188C24.3298 43.1169 24.3512 43.1193 24.3714 43.126C24.3916 43.1327 24.4103 43.1434 24.4262 43.1576C24.4421 43.1717 24.455 43.189 24.4639 43.2083C24.4729 43.2276 24.4779 43.2486 24.4784 43.2699C24.479 43.2912 24.4752 43.3124 24.4672 43.3321C24.4593 43.3519 24.4474 43.3698 24.4322 43.3848L24.2249 43.6173C24.2109 43.6334 24.1937 43.6465 24.1743 43.6557C24.155 43.6649 24.134 43.6701 24.1126 43.6707L24.1093 43.6688ZM1.30909 43.569C1.28231 43.5691 1.25597 43.5622 1.23264 43.549C1.20932 43.5359 1.18979 43.5169 1.17597 43.494C1.16214 43.4711 1.15448 43.4449 1.15374 43.4182C1.153 43.3914 1.15919 43.3649 1.17173 43.3412L1.31635 43.0665C1.33561 43.0301 1.36856 43.0028 1.40794 42.9907C1.44732 42.9785 1.48991 42.9825 1.52634 43.0018C1.56277 43.0211 1.59006 43.054 1.60219 43.0934C1.61433 43.1328 1.61033 43.1754 1.59106 43.2118L1.44644 43.4865C1.43333 43.5116 1.41359 43.5325 1.38936 43.5471C1.36513 43.5616 1.33735 43.5692 1.30909 43.569ZM24.9381 42.7429C24.9081 42.7429 24.8788 42.7343 24.8536 42.718C24.8284 42.7017 24.8084 42.6786 24.7961 42.6512C24.7838 42.6239 24.7796 42.5936 24.784 42.564C24.7885 42.5343 24.8014 42.5066 24.8212 42.4841L25.0259 42.2516C25.053 42.2206 25.0913 42.2015 25.1324 42.1986C25.1735 42.1958 25.2141 42.2094 25.2451 42.2364C25.2762 42.2635 25.2953 42.3018 25.2981 42.3429C25.301 42.384 25.2874 42.4246 25.2603 42.4557L25.0543 42.6901C25.0396 42.7064 25.0217 42.7194 25.0017 42.7283C24.9817 42.7371 24.96 42.7417 24.9381 42.7416V42.7429ZM1.89152 42.4702C1.86593 42.4703 1.84073 42.4639 1.81822 42.4517C1.80005 42.4423 1.78392 42.4294 1.77076 42.4138C1.75759 42.3981 1.74767 42.38 1.74153 42.3605C1.73539 42.3409 1.73317 42.3204 1.735 42.3C1.73683 42.2797 1.74267 42.2598 1.75218 42.2417L1.89812 41.967C1.91747 41.9307 1.95047 41.9035 1.98986 41.8915C2.02924 41.8795 2.07178 41.8836 2.10812 41.903C2.14446 41.9223 2.17162 41.9553 2.18363 41.9947C2.19565 42.0341 2.19152 42.0766 2.17217 42.113L2.02624 42.3877C2.013 42.4122 1.99337 42.4327 1.96942 42.447C1.94547 42.4613 1.91809 42.4689 1.8902 42.4689L1.89152 42.4702ZM25.7576 41.8099C25.7201 41.81 25.6839 41.7964 25.6559 41.7716C25.6404 41.7583 25.6278 41.7421 25.6186 41.7239C25.6095 41.7057 25.604 41.6859 25.6025 41.6656C25.601 41.6452 25.6036 41.6248 25.61 41.6055C25.6165 41.5862 25.6267 41.5683 25.64 41.553L25.8428 41.3179C25.8561 41.3025 25.8723 41.2898 25.8905 41.2806C25.9087 41.2715 25.9285 41.266 25.9489 41.2645C25.9692 41.263 25.9896 41.2655 26.009 41.2719C26.0283 41.2783 26.0462 41.2884 26.0617 41.3017C26.0771 41.315 26.0898 41.3312 26.099 41.3494C26.1081 41.3677 26.1136 41.3875 26.1151 41.4078C26.1166 41.4281 26.1141 41.4486 26.1077 41.4679C26.1013 41.4873 26.0912 41.5052 26.0779 41.5206L25.8751 41.7557C25.86 41.7719 25.8415 41.7847 25.821 41.7933C25.8005 41.8018 25.7785 41.8059 25.7563 41.8052L25.7576 41.8099ZM2.47594 41.376C2.44903 41.376 2.42257 41.3691 2.39915 41.3558C2.37574 41.3426 2.35618 41.3234 2.3424 41.3003C2.32861 41.2772 2.32107 41.2509 2.32052 41.224C2.31997 41.1971 2.32642 41.1705 2.33925 41.1468L2.48584 40.8735C2.50528 40.8371 2.53837 40.81 2.57781 40.798C2.61725 40.7861 2.65983 40.7903 2.69617 40.8097C2.73251 40.8292 2.75964 40.8623 2.77159 40.9017C2.78354 40.9411 2.77933 40.9837 2.75989 41.0201L2.61264 41.2948C2.59859 41.3187 2.57837 41.3385 2.5541 41.3519C2.52982 41.3654 2.50238 41.3721 2.47462 41.3714L2.47594 41.376ZM26.4794 40.8061C26.458 40.8062 26.4369 40.8019 26.4173 40.7936C26.3795 40.777 26.3498 40.7462 26.3347 40.7078C26.3196 40.6695 26.3203 40.6267 26.3367 40.5888C26.3585 40.5373 26.379 40.4845 26.3975 40.4317C26.412 40.3921 26.4252 40.3531 26.4371 40.3135C26.443 40.2939 26.4527 40.2757 26.4656 40.2598C26.4786 40.244 26.4946 40.2309 26.5126 40.2213C26.5307 40.2116 26.5504 40.2057 26.5708 40.2037C26.5911 40.2017 26.6117 40.2038 26.6312 40.2098C26.6705 40.2221 26.7033 40.2494 26.7227 40.2857C26.7421 40.322 26.7465 40.3645 26.7349 40.4039C26.7211 40.4482 26.7065 40.4924 26.6907 40.536C26.6695 40.5954 26.6471 40.6542 26.6246 40.7123C26.6116 40.7399 26.5908 40.7631 26.5647 40.7789C26.5386 40.7948 26.5085 40.8026 26.478 40.8015L26.4794 40.8061ZM3.06366 40.2811C3.0381 40.2809 3.01298 40.2745 2.99036 40.2626C2.97217 40.2532 2.95603 40.2402 2.94286 40.2245C2.92969 40.2088 2.91974 40.1906 2.91361 40.171C2.90747 40.1514 2.90527 40.1309 2.9071 40.1104C2.90894 40.09 2.91479 40.0701 2.92432 40.052L3.07224 39.7779C3.08191 39.76 3.09502 39.7441 3.11082 39.7312C3.12663 39.7183 3.14482 39.7087 3.16435 39.7028C3.18388 39.697 3.20437 39.695 3.22465 39.6971C3.24494 39.6992 3.26462 39.7052 3.28257 39.7149C3.30052 39.7245 3.31639 39.7376 3.32928 39.7534C3.34216 39.7692 3.3518 39.7874 3.35766 39.807C3.36352 39.8265 3.36547 39.847 3.36341 39.8673C3.36134 39.8876 3.3553 39.9072 3.34563 39.9252L3.19837 40.1992C3.18447 40.2229 3.16458 40.2425 3.14071 40.2561C3.11683 40.2696 3.0898 40.2767 3.06234 40.2765L3.06366 40.2811ZM26.6874 39.593C26.6483 39.5928 26.6106 39.5779 26.582 39.5512C26.5534 39.5245 26.5358 39.4881 26.5328 39.4491C26.5257 39.3523 26.5122 39.2561 26.4926 39.1611C26.4864 39.1216 26.4958 39.0812 26.5187 39.0483C26.5416 39.0154 26.5763 38.9926 26.6155 38.9847C26.6548 38.9767 26.6956 38.9841 26.7295 39.0054C26.7634 39.0267 26.7878 39.0603 26.7977 39.0991C26.8195 39.2081 26.8347 39.3184 26.8432 39.4293C26.8461 39.4703 26.8327 39.5108 26.8059 39.542C26.779 39.5732 26.7409 39.5925 26.6999 39.5957L26.6874 39.593ZM3.65138 39.1829C3.62548 39.1831 3.59999 39.1765 3.57742 39.1638C3.55917 39.1544 3.54296 39.1415 3.52974 39.1257C3.51652 39.11 3.50655 39.0918 3.5004 39.0723C3.49426 39.0527 3.49207 39.032 3.49396 39.0116C3.49584 38.9911 3.50176 38.9713 3.51138 38.9531L3.65996 38.6797C3.66972 38.6618 3.6829 38.646 3.69877 38.6332C3.71464 38.6204 3.73287 38.6108 3.75243 38.6051C3.77199 38.5993 3.7925 38.5975 3.81278 38.5996C3.83306 38.6018 3.85271 38.6079 3.87062 38.6177C3.88852 38.6274 3.90434 38.6406 3.91715 38.6565C3.92996 38.6723 3.93952 38.6906 3.94528 38.7101C3.95105 38.7297 3.9529 38.7502 3.95074 38.7705C3.94858 38.7908 3.94245 38.8104 3.93269 38.8283L3.78411 39.1017C3.7711 39.1257 3.75197 39.1459 3.72866 39.1602C3.70535 39.1744 3.6787 39.1823 3.65138 39.1829ZM26.2951 38.4216C26.2688 38.4216 26.243 38.415 26.2199 38.4025C26.1968 38.3899 26.1772 38.3717 26.163 38.3496L26.1373 38.3106C26.0926 38.2419 26.0441 38.1758 25.992 38.1125C25.9657 38.0806 25.9532 38.0396 25.9572 37.9985C25.9611 37.9574 25.9813 37.9195 26.0131 37.8933C26.045 37.867 26.086 37.8545 26.1271 37.8584C26.1682 37.8624 26.2061 37.8825 26.2324 37.9144C26.2906 37.9856 26.3453 38.0596 26.3961 38.1363L26.4252 38.1812C26.4401 38.2048 26.4484 38.2319 26.4492 38.2598C26.45 38.2877 26.4433 38.3153 26.4298 38.3397C26.4163 38.3642 26.3965 38.3845 26.3725 38.3987C26.3484 38.4128 26.321 38.4203 26.2931 38.4202L26.2951 38.4216ZM4.2457 38.0881C4.21875 38.0881 4.19228 38.081 4.16887 38.0677C4.14546 38.0543 4.12592 38.0351 4.1122 38.0119C4.09847 37.9887 4.09101 37.9624 4.09057 37.9354C4.09013 37.9085 4.09671 37.8819 4.10967 37.8583L4.25825 37.5849C4.27804 37.5487 4.31139 37.5219 4.35096 37.5103C4.39052 37.4987 4.43307 37.5033 4.46924 37.5231C4.5054 37.5429 4.53222 37.5763 4.5438 37.6158C4.55538 37.6554 4.55077 37.6979 4.53098 37.7341L4.38174 38.0075C4.36842 38.0319 4.34875 38.0523 4.32481 38.0665C4.30086 38.0807 4.27353 38.0881 4.2457 38.0881ZM25.4049 37.5697C25.3781 37.5697 25.3518 37.5629 25.3284 37.5499C25.243 37.5018 25.1548 37.459 25.0642 37.4218C25.0261 37.4061 24.9958 37.3759 24.98 37.3379C24.9641 37.2999 24.964 37.2571 24.9797 37.219C24.9954 37.1809 25.0255 37.1506 25.0635 37.1348C25.1016 37.1189 25.1443 37.1188 25.1824 37.1345C25.2844 37.1763 25.3834 37.2248 25.4789 37.2798C25.5086 37.2968 25.5318 37.323 25.545 37.3546C25.5582 37.3861 25.5606 37.4211 25.5519 37.4541C25.5432 37.4872 25.5238 37.5164 25.4967 37.5373C25.4697 37.5582 25.4365 37.5696 25.4023 37.5697H25.4049ZM24.2163 37.2468H24.1331L23.8934 37.2276C23.873 37.2259 23.8532 37.2201 23.8351 37.2107C23.817 37.2013 23.8009 37.1884 23.7878 37.1728C23.7746 37.1571 23.7647 37.139 23.7586 37.1195C23.7525 37.1001 23.7503 37.0796 23.7521 37.0592C23.7563 37.0184 23.7762 36.9808 23.8076 36.9544C23.8391 36.928 23.8795 36.9149 23.9205 36.9179L24.1437 36.9371H24.1806H24.2209C24.2621 36.9377 24.3013 36.9546 24.33 36.9841C24.3586 37.0137 24.3744 37.0534 24.3738 37.0946C24.3732 37.1357 24.3563 37.1749 24.3267 37.2036C24.2972 37.2323 24.2575 37.248 24.2163 37.2474V37.2468ZM22.9781 37.151H22.9656L22.6559 37.1266C22.6355 37.125 22.6157 37.1194 22.5975 37.1102C22.5793 37.1009 22.5632 37.0881 22.5499 37.0726C22.5367 37.0571 22.5266 37.0391 22.5203 37.0197C22.514 37.0003 22.5116 36.9799 22.5132 36.9595C22.5176 36.9189 22.5373 36.8815 22.5684 36.8549C22.5995 36.8284 22.6395 36.8148 22.6803 36.8169L22.99 36.8413C23.0312 36.8429 23.07 36.8607 23.098 36.891C23.126 36.9212 23.1408 36.9613 23.1393 37.0024C23.1377 37.0436 23.1198 37.0824 23.0896 37.1104C23.0594 37.1384 23.0193 37.1532 22.9781 37.1517V37.151ZM21.7386 37.0546H21.7267L21.417 37.0302C21.3967 37.0287 21.3769 37.0232 21.3587 37.014C21.3405 37.0048 21.3244 36.9921 21.3111 36.9766C21.2979 36.9612 21.2878 36.9432 21.2815 36.9239C21.2752 36.9045 21.2728 36.8841 21.2744 36.8638C21.2779 36.8229 21.2973 36.7851 21.3285 36.7584C21.3596 36.7318 21.3999 36.7184 21.4408 36.7211L21.7499 36.7442C21.7896 36.7478 21.8264 36.7665 21.8527 36.7964C21.8791 36.8263 21.893 36.8652 21.8916 36.9051C21.8901 36.9449 21.8735 36.9827 21.845 37.0106C21.8166 37.0386 21.7785 37.0545 21.7386 37.0553V37.0546ZM4.84003 36.9972C4.81393 36.9972 4.78824 36.9906 4.76541 36.978C4.74746 36.9682 4.73162 36.9549 4.71881 36.939C4.706 36.9231 4.69648 36.9047 4.69077 36.8851C4.68506 36.8655 4.68329 36.8449 4.68556 36.8246C4.68783 36.8043 4.69409 36.7846 4.70399 36.7667L4.85323 36.494C4.87302 36.4578 4.90637 36.431 4.94594 36.4194C4.98551 36.4078 5.02805 36.4124 5.06422 36.4322C5.10039 36.452 5.12721 36.4854 5.13879 36.5249C5.15036 36.5645 5.14575 36.607 5.12596 36.6432L4.97672 36.9166C4.9635 36.9414 4.94382 36.9622 4.91975 36.9767C4.89569 36.9912 4.86814 36.999 4.84003 36.9991V36.9972ZM21.983 36.3051C21.9539 36.3051 21.9254 36.297 21.9008 36.2817C21.8761 36.2663 21.8563 36.2444 21.8435 36.2183C21.8307 36.1922 21.8254 36.1631 21.8284 36.1342C21.8313 36.1053 21.8423 36.0778 21.8601 36.0548L22.0503 35.8085C22.0766 35.7788 22.1131 35.7602 22.1526 35.7565C22.1921 35.7528 22.2315 35.7643 22.2628 35.7886C22.2941 35.8129 22.3149 35.8482 22.3211 35.8874C22.3273 35.9265 22.3183 35.9666 22.296 35.9993L22.1058 36.2443C22.0913 36.2632 22.0727 36.2785 22.0515 36.289C22.0302 36.2995 22.0067 36.305 21.983 36.3051ZM5.44029 35.9089C5.41419 35.909 5.38851 35.9024 5.36567 35.8897C5.32955 35.8698 5.30281 35.8364 5.2913 35.7968C5.27979 35.7572 5.28445 35.7146 5.30426 35.6784L5.45483 35.4063C5.46413 35.3876 5.47713 35.3708 5.49307 35.3572C5.50901 35.3436 5.52754 35.3333 5.54755 35.3271C5.56756 35.3208 5.58864 35.3187 5.6095 35.3208C5.63036 35.3229 5.65059 35.3292 5.66894 35.3393C5.6873 35.3495 5.70341 35.3632 5.7163 35.3797C5.72919 35.3963 5.7386 35.4153 5.74395 35.4355C5.74931 35.4558 5.7505 35.477 5.74745 35.4977C5.7444 35.5185 5.73719 35.5384 5.72623 35.5562L5.57699 35.8283C5.56351 35.8528 5.54371 35.8731 5.51966 35.8873C5.49562 35.9015 5.4682 35.9089 5.44029 35.9089ZM22.7417 35.3218C22.7128 35.3216 22.6845 35.3133 22.66 35.2979C22.6354 35.2825 22.6157 35.2606 22.603 35.2346C22.5902 35.2087 22.5849 35.1796 22.5878 35.1508C22.5906 35.122 22.6014 35.0946 22.6189 35.0715L22.8084 34.8252C22.8209 34.8091 22.8364 34.7955 22.854 34.7853C22.8717 34.7751 22.8913 34.7685 22.9115 34.7659C22.9317 34.7633 22.9523 34.7646 22.972 34.7699C22.9917 34.7752 23.0102 34.7844 23.0263 34.7968C23.0425 34.8093 23.0561 34.8248 23.0662 34.8425C23.0764 34.8602 23.083 34.8797 23.0857 34.8999C23.0883 34.9201 23.0869 34.9407 23.0816 34.9604C23.0763 34.9801 23.0672 34.9986 23.0547 35.0147L22.8652 35.2611C22.8507 35.2798 22.8321 35.2951 22.8108 35.3056C22.7895 35.3161 22.7661 35.3217 22.7424 35.3218H22.7417ZM6.03924 34.8199C6.01314 34.82 5.98746 34.8134 5.96462 34.8008C5.94667 34.791 5.93084 34.7777 5.91803 34.7618C5.90522 34.7459 5.89568 34.7275 5.88998 34.7079C5.88427 34.6883 5.88251 34.6677 5.88478 34.6474C5.88705 34.627 5.89331 34.6074 5.9032 34.5895L6.05377 34.3167C6.06307 34.298 6.07608 34.2812 6.09202 34.2676C6.10796 34.254 6.12649 34.2437 6.1465 34.2375C6.16651 34.2312 6.18759 34.2291 6.20845 34.2312C6.22931 34.2333 6.24953 34.2396 6.26789 34.2497C6.28624 34.2599 6.30235 34.2736 6.31524 34.2902C6.32814 34.3067 6.33755 34.3257 6.3429 34.3459C6.34826 34.3662 6.34945 34.3874 6.3464 34.4081C6.34335 34.4289 6.33613 34.4488 6.32518 34.4667L6.17527 34.7394C6.16195 34.7637 6.14238 34.7839 6.11857 34.7981C6.09477 34.8123 6.06761 34.8198 6.0399 34.8199H6.03924ZM23.4985 34.3352C23.4644 34.3354 23.4312 34.3243 23.4041 34.3035C23.3714 34.2784 23.35 34.2414 23.3446 34.2006C23.3391 34.1597 23.3501 34.1184 23.375 34.0856L23.5639 33.8386C23.5889 33.8059 23.6259 33.7844 23.6668 33.779C23.7077 33.7735 23.749 33.7845 23.7818 33.8096C23.8145 33.8346 23.836 33.8717 23.8414 33.9125C23.8469 33.9534 23.8359 33.9948 23.8108 34.0275L23.622 34.2745C23.6076 34.2935 23.5891 34.3088 23.5677 34.3194C23.5464 34.3299 23.5229 34.3353 23.4992 34.3352H23.4985ZM5.57831 34.2857H5.56642L5.25606 34.254C5.21508 34.2497 5.17747 34.2293 5.15153 34.1973C5.12559 34.1653 5.11341 34.1243 5.11771 34.0833C5.122 34.0423 5.14239 34.0047 5.17441 33.9788C5.20642 33.9528 5.24743 33.9407 5.28841 33.945L5.59746 33.9767C5.63729 33.9803 5.67416 33.9993 5.70038 34.0295C5.7266 34.0597 5.74015 34.0988 5.73819 34.1388C5.73623 34.1787 5.71892 34.2164 5.68987 34.2439C5.66082 34.2714 5.62227 34.2866 5.58227 34.2864L5.57831 34.2857ZM4.34079 34.1596H4.32494L4.04232 34.1312L4.03175 33.974L4.07335 33.8215L4.35665 33.8505C4.39655 33.8542 4.43348 33.8732 4.45972 33.9034C4.48595 33.9337 4.49946 33.973 4.49742 34.013C4.49537 34.053 4.47792 34.0907 4.44873 34.1181C4.41954 34.1456 4.38086 34.1607 4.34079 34.1602V34.1596ZM3.1046 34.0348H3.08875L2.77971 34.0037C2.75942 34.0017 2.73971 33.9958 2.72172 33.9862C2.70374 33.9766 2.68783 33.9635 2.67489 33.9477C2.66195 33.932 2.65225 33.9138 2.64632 33.8943C2.6404 33.8748 2.63837 33.8543 2.64037 33.834C2.64236 33.8137 2.64834 33.794 2.65795 33.776C2.66755 33.7581 2.68061 33.7421 2.69637 33.7292C2.71212 33.7163 2.73028 33.7066 2.74979 33.7006C2.7693 33.6947 2.78979 33.6927 2.81008 33.6947L3.11979 33.7257C3.15962 33.7294 3.19649 33.7483 3.22271 33.7785C3.24893 33.8087 3.26248 33.8479 3.26052 33.8879C3.25856 33.9278 3.24125 33.9655 3.2122 33.993C3.18315 34.0205 3.1446 34.0357 3.1046 34.0354V34.0348ZM1.87832 33.8486C1.86125 33.8483 1.84432 33.8454 1.82813 33.84C1.72432 33.8043 1.62267 33.7626 1.5237 33.7152C1.50383 33.7075 1.48575 33.6958 1.4706 33.6808C1.45544 33.6658 1.44354 33.6478 1.43563 33.6281C1.42772 33.6083 1.42396 33.5871 1.42461 33.5658C1.42525 33.5445 1.43028 33.5235 1.43937 33.5042C1.44846 33.485 1.46143 33.4678 1.47746 33.4537C1.49349 33.4397 1.51223 33.4291 1.53254 33.4226C1.55284 33.4161 1.57426 33.4139 1.59546 33.4161C1.61666 33.4182 1.6372 33.4247 1.65577 33.4352C1.7434 33.4776 1.8336 33.5144 1.92586 33.5454C1.96061 33.5575 1.98999 33.5814 2.00879 33.613C2.02759 33.6446 2.03461 33.6819 2.02861 33.7182C2.0226 33.7545 2.00395 33.7874 1.97597 33.8113C1.94798 33.8352 1.91245 33.8484 1.87567 33.8486H1.87832ZM24.2526 33.3467C24.2236 33.3469 24.1952 33.339 24.1705 33.3238C24.1458 33.3086 24.1259 33.2868 24.113 33.2608C24.1001 33.2349 24.0948 33.2058 24.0977 33.177C24.1005 33.1481 24.1114 33.1207 24.1291 33.0977L24.3167 32.8501C24.3415 32.8173 24.3784 32.7956 24.4192 32.79C24.46 32.7844 24.5014 32.7952 24.5343 32.82C24.5671 32.8449 24.5887 32.8818 24.5944 32.9226C24.6 32.9634 24.5892 33.0048 24.5643 33.0376L24.3761 33.2859C24.3617 33.3045 24.3433 33.3197 24.3223 33.3302C24.3013 33.3407 24.2781 33.3463 24.2546 33.3467H24.2526ZM0.833622 33.1948C0.813068 33.195 0.7927 33.1909 0.773744 33.183C0.754788 33.175 0.737644 33.1633 0.723347 33.1486C0.645895 33.0701 0.573336 32.987 0.506086 32.8996C0.493685 32.8834 0.484599 32.8649 0.479347 32.8452C0.474096 32.8254 0.47278 32.8049 0.475478 32.7846C0.480927 32.7438 0.502395 32.7067 0.535146 32.6817C0.567897 32.6567 0.609253 32.6456 0.65012 32.6511C0.690988 32.6565 0.728015 32.678 0.75306 32.7108C0.812045 32.7877 0.875785 32.861 0.943905 32.93C0.95846 32.9444 0.970019 32.9615 0.977906 32.9804C0.985794 32.9992 0.989853 33.0195 0.989853 33.0399C0.989853 33.0604 0.985794 33.0807 0.977906 33.0995C0.970019 33.1184 0.95846 33.1355 0.943905 33.1499C0.92955 33.1643 0.912454 33.1757 0.893628 33.1834C0.874802 33.1911 0.854626 33.195 0.834283 33.1948H0.833622ZM25.0028 32.3561C24.9689 32.3559 24.936 32.3448 24.909 32.3244C24.8763 32.2994 24.8547 32.2625 24.8492 32.2216C24.8436 32.1808 24.8544 32.1394 24.8793 32.1065L25.0662 31.8589C25.0912 31.8262 25.1281 31.8046 25.1689 31.7989C25.2097 31.7933 25.2511 31.8039 25.2841 31.8285C25.3004 31.8407 25.3142 31.8561 25.3245 31.8736C25.3349 31.8912 25.3417 31.9106 25.3445 31.9308C25.3474 31.951 25.3462 31.9716 25.341 31.9913C25.3358 32.011 25.3268 32.0295 25.3145 32.0458L25.1269 32.2941C25.1125 32.3131 25.094 32.3285 25.0727 32.3393C25.0514 32.35 25.028 32.3558 25.0041 32.3561H25.0028ZM0.217509 32.1323C0.183647 32.1323 0.150701 32.1213 0.123654 32.1009C0.096608 32.0805 0.0769322 32.0519 0.0676059 32.0194C0.0387916 31.913 0.0167356 31.8049 0.00156997 31.6958C-0.00427742 31.6549 0.00634887 31.6133 0.0311137 31.5803C0.0558784 31.5472 0.0927557 31.5254 0.133642 31.5195C0.17442 31.5143 0.215608 31.5252 0.248504 31.5499C0.2814 31.5745 0.303434 31.611 0.309961 31.6515C0.323698 31.7474 0.343775 31.8423 0.370056 31.9355C0.375695 31.9551 0.377398 31.9757 0.37507 31.996C0.372741 32.0163 0.366421 32.0359 0.356481 32.0538C0.346541 32.0717 0.333173 32.0874 0.317143 32.1C0.301114 32.1127 0.282736 32.1221 0.26307 32.1277C0.248187 32.1314 0.232841 32.133 0.217509 32.1323ZM25.7556 31.3643C25.7219 31.3643 25.6892 31.3531 25.6625 31.3326C25.6296 31.3079 25.6078 31.2711 25.602 31.2304C25.5962 31.1896 25.6068 31.1483 25.6315 31.1153L25.819 30.8664C25.8308 30.8486 25.8461 30.8334 25.8639 30.8218C25.8818 30.8102 25.9019 30.8023 25.9229 30.7988C25.9439 30.7952 25.9654 30.796 25.9861 30.8011C26.0068 30.8062 26.0262 30.8155 26.0432 30.8284C26.0602 30.8413 26.0743 30.8575 26.0848 30.8761C26.0952 30.8947 26.1017 30.9152 26.1039 30.9364C26.1061 30.9576 26.104 30.979 26.0975 30.9994C26.0911 31.0197 26.0806 31.0385 26.0666 31.0546L25.8798 31.3022C25.8652 31.3218 25.8461 31.3377 25.8242 31.3485C25.8022 31.3593 25.7781 31.3647 25.7536 31.3643H25.7556ZM0.195059 30.902C0.182847 30.902 0.17067 30.9007 0.158736 30.8981C0.118675 30.8884 0.0840945 30.8632 0.0625597 30.828C0.0410249 30.7929 0.0342902 30.7506 0.043834 30.7105C0.0694409 30.6036 0.101637 30.4984 0.140244 30.3955C0.147355 30.3764 0.158165 30.3589 0.172053 30.3439C0.18594 30.329 0.202635 30.3169 0.221185 30.3084C0.239734 30.2999 0.259772 30.2952 0.280159 30.2944C0.300547 30.2937 0.320883 30.297 0.340004 30.3041C0.359126 30.3112 0.376658 30.322 0.391603 30.3359C0.406548 30.3498 0.418611 30.3665 0.427104 30.385C0.435597 30.4036 0.440358 30.4236 0.441106 30.444C0.441854 30.4644 0.438576 30.4847 0.431465 30.5038C0.39729 30.5951 0.368837 30.6884 0.346276 30.7832C0.338051 30.8175 0.318414 30.848 0.290582 30.8697C0.26275 30.8914 0.228375 30.9031 0.193076 30.9027L0.195059 30.902ZM26.5031 30.3698C26.4695 30.3699 26.4368 30.359 26.41 30.3387C26.3771 30.314 26.3553 30.2773 26.3495 30.2365C26.3437 30.1958 26.3543 30.1544 26.379 30.1215L26.5659 29.8719C26.5906 29.8389 26.6275 29.8172 26.6683 29.8114C26.7091 29.8057 26.7505 29.8164 26.7834 29.8412C26.8164 29.8659 26.8381 29.9028 26.8439 29.9436C26.8496 29.9844 26.8389 30.0258 26.8142 30.0588L26.6273 30.3077C26.6125 30.3275 26.5933 30.3435 26.5711 30.3544C26.549 30.3653 26.5245 30.3708 26.4998 30.3704L26.5031 30.3698ZM0.749102 29.8025C0.716966 29.8025 0.685615 29.7926 0.659286 29.7741C0.642615 29.7624 0.628437 29.7474 0.617554 29.7301C0.60667 29.7129 0.599297 29.6936 0.595861 29.6735C0.592426 29.6534 0.592992 29.6328 0.59753 29.6129C0.602068 29.593 0.610491 29.5742 0.62231 29.5575L0.802587 29.304C0.826406 29.2703 0.862609 29.2475 0.903229 29.2406C0.943849 29.2337 0.98556 29.2432 1.01919 29.267C1.05281 29.2908 1.0756 29.327 1.08254 29.3676C1.08947 29.4082 1.07998 29.4499 1.05616 29.4836L0.875886 29.7372C0.861673 29.7576 0.842711 29.7743 0.820627 29.7858C0.798543 29.7973 0.774001 29.8033 0.749102 29.8032V29.8025ZM27.2474 29.3753C27.2138 29.3754 27.181 29.3645 27.1542 29.3442C27.1213 29.3195 27.0996 29.2828 27.0937 29.242C27.0879 29.2013 27.0985 29.1599 27.1232 29.127L27.3094 28.878C27.3341 28.845 27.3709 28.8232 27.4117 28.8173C27.4525 28.8114 27.494 28.822 27.527 28.8467C27.56 28.8714 27.5819 28.9081 27.5878 28.949C27.5936 28.9898 27.5831 29.0312 27.5584 29.0642L27.3715 29.3132C27.3572 29.3327 27.3385 29.3485 27.3169 29.3594C27.2954 29.3703 27.2715 29.376 27.2474 29.3759V29.3753ZM1.46691 28.7876C1.43503 28.7878 1.40386 28.7781 1.37776 28.7598C1.36104 28.7481 1.34679 28.7332 1.33585 28.7159C1.3249 28.6987 1.31747 28.6795 1.31397 28.6593C1.31047 28.6392 1.31098 28.6186 1.31547 28.5987C1.31996 28.5787 1.32834 28.5599 1.34012 28.5432L1.51908 28.2883C1.54289 28.2547 1.5791 28.2319 1.61972 28.225C1.66034 28.218 1.70205 28.2275 1.73568 28.2513C1.7693 28.2752 1.79209 28.3114 1.79903 28.352C1.80596 28.3926 1.79648 28.4343 1.77266 28.4679L1.59436 28.7215C1.58011 28.7421 1.56107 28.759 1.53887 28.7706C1.51666 28.7822 1.49197 28.7883 1.46691 28.7882V28.7876ZM27.9922 28.3808C27.9586 28.3809 27.9259 28.37 27.8991 28.3497C27.8662 28.325 27.8444 28.2883 27.8386 28.2475C27.8328 28.2068 27.8434 28.1654 27.8681 28.1325L28.0543 27.8835C28.0789 27.8505 28.1156 27.8286 28.1564 27.8227C28.1971 27.8167 28.2386 27.8272 28.2716 27.8518C28.3046 27.8764 28.3265 27.9131 28.3324 27.9539C28.3384 27.9946 28.3279 28.0361 28.3033 28.0691L28.117 28.3187C28.1025 28.338 28.0836 28.3536 28.0619 28.3644C28.0403 28.3752 28.0164 28.3808 27.9922 28.3808ZM2.18208 27.7713C2.15025 27.7712 2.11917 27.7615 2.09293 27.7435C2.0592 27.7198 2.03623 27.6837 2.02905 27.6431C2.02187 27.6025 2.03106 27.5608 2.05463 27.5269L2.23293 27.272C2.24464 27.2553 2.25951 27.2411 2.27672 27.2302C2.29392 27.2192 2.31312 27.2118 2.3332 27.2083C2.35328 27.2047 2.37386 27.2052 2.39376 27.2096C2.41366 27.214 2.4325 27.2224 2.4492 27.2341C2.46589 27.2458 2.48012 27.2606 2.49106 27.2778C2.502 27.295 2.50944 27.3142 2.51297 27.3343C2.51649 27.3544 2.51603 27.375 2.51161 27.3949C2.50718 27.4148 2.49887 27.4336 2.48716 27.4503L2.30953 27.7046C2.29525 27.7251 2.27619 27.742 2.254 27.7536C2.23181 27.7652 2.20713 27.7713 2.18208 27.7713ZM28.7371 27.385C28.7036 27.3847 28.671 27.3738 28.644 27.3539C28.611 27.3291 28.5893 27.2922 28.5834 27.2514C28.5776 27.2105 28.5882 27.169 28.613 27.136L28.7999 26.887C28.8246 26.8541 28.8613 26.8323 28.9021 26.8265C28.9428 26.8207 28.9842 26.8313 29.0171 26.856C29.0501 26.8807 29.0718 26.9175 29.0776 26.9582C29.0835 26.9989 29.0729 27.0403 29.0482 27.0733L28.8619 27.3222C28.8474 27.3417 28.8286 27.3575 28.807 27.3683C28.7853 27.3792 28.7614 27.3849 28.7371 27.385ZM2.89329 26.7517C2.86162 26.7519 2.83067 26.7422 2.8048 26.7239C2.78802 26.7124 2.77367 26.6976 2.76259 26.6805C2.75152 26.6634 2.74392 26.6442 2.74024 26.6242C2.73656 26.6041 2.73687 26.5835 2.74115 26.5636C2.74543 26.5437 2.75359 26.5248 2.76517 26.508L2.94215 26.2518C2.96665 26.2203 3.00227 26.1994 3.04169 26.1935C3.08111 26.1875 3.12132 26.1968 3.15406 26.2196C3.1868 26.2423 3.20958 26.2768 3.2177 26.3158C3.22582 26.3548 3.21866 26.3955 3.19771 26.4294L3.02073 26.6843C3.00656 26.7051 2.98755 26.722 2.96535 26.7338C2.94314 26.7455 2.91841 26.7516 2.89329 26.7517ZM29.4813 26.3891C29.4477 26.3893 29.415 26.3784 29.3882 26.3581C29.3553 26.3333 29.3335 26.2964 29.3277 26.2555C29.3219 26.2147 29.3325 26.1732 29.3572 26.1402L29.5434 25.8912C29.5557 25.8749 29.5711 25.8612 29.5886 25.8508C29.6062 25.8405 29.6257 25.8337 29.6459 25.8308C29.6661 25.8279 29.6866 25.8291 29.7064 25.8342C29.7262 25.8393 29.7447 25.8482 29.761 25.8605C29.7773 25.8728 29.7911 25.8881 29.8014 25.9057C29.8118 25.9233 29.8186 25.9427 29.8214 25.9629C29.8243 25.9832 29.8231 26.0037 29.818 26.0235C29.8129 26.0432 29.804 26.0618 29.7917 26.0781L29.6062 26.3264C29.5917 26.3459 29.5729 26.3617 29.5512 26.3726C29.5295 26.3835 29.5056 26.3892 29.4813 26.3891ZM3.60119 25.7288C3.56952 25.729 3.53857 25.7193 3.51271 25.701C3.49592 25.6895 3.48158 25.6747 3.4705 25.6576C3.45942 25.6405 3.45182 25.6213 3.44814 25.6013C3.44447 25.5812 3.44478 25.5606 3.44906 25.5407C3.45333 25.5208 3.4615 25.5019 3.47309 25.4851L3.65006 25.2295C3.67344 25.1956 3.70932 25.1724 3.74982 25.165C3.79032 25.1576 3.83211 25.1665 3.866 25.1899C3.89989 25.2133 3.9231 25.2492 3.93053 25.2897C3.93796 25.3302 3.929 25.372 3.90562 25.4058L3.72864 25.6621C3.71452 25.6828 3.69551 25.6999 3.67329 25.7116C3.65107 25.7233 3.62632 25.7295 3.60119 25.7294V25.7288ZM30.2262 25.3926C30.1926 25.3929 30.1599 25.382 30.1331 25.3616C30.1168 25.3494 30.103 25.3341 30.0925 25.3166C30.0821 25.2991 30.0752 25.2797 30.0723 25.2595C30.0693 25.2394 30.0704 25.2188 30.0754 25.199C30.0804 25.1793 30.0892 25.1607 30.1014 25.1443L30.2877 24.8954C30.3123 24.8624 30.349 24.8405 30.3897 24.8345C30.4305 24.8286 30.4719 24.8391 30.5049 24.8637C30.5379 24.8883 30.5598 24.925 30.5657 24.9658C30.5717 25.0065 30.5612 25.0479 30.5366 25.081L30.3504 25.3306C30.3361 25.35 30.3174 25.3659 30.2958 25.3768C30.2742 25.3877 30.2504 25.3933 30.2262 25.3933V25.3926ZM4.30646 24.7052C4.27504 24.7051 4.24438 24.6955 4.21863 24.6775C4.18476 24.6541 4.16152 24.6183 4.15398 24.5778C4.14643 24.5374 4.15519 24.4956 4.17835 24.4615L4.35466 24.2053C4.36624 24.1885 4.38102 24.1741 4.39815 24.163C4.41529 24.1519 4.43444 24.1443 4.45452 24.1405C4.47461 24.1368 4.49522 24.1371 4.51519 24.1414C4.53517 24.1456 4.55411 24.1538 4.57093 24.1654C4.58776 24.1769 4.60213 24.1917 4.61325 24.2089C4.62436 24.226 4.63199 24.2451 4.6357 24.2652C4.63941 24.2853 4.63912 24.3059 4.63487 24.3259C4.63061 24.3459 4.62246 24.3648 4.61088 24.3816L4.43457 24.6378C4.42037 24.6588 4.40127 24.6759 4.37894 24.6877C4.35662 24.6996 4.33174 24.7058 4.30646 24.7059V24.7052ZM30.8998 24.3539C30.8799 24.3537 30.8602 24.3499 30.8417 24.3427C30.8035 24.3271 30.7729 24.2971 30.7568 24.2591C30.7407 24.2211 30.7404 24.1782 30.7558 24.1399C30.7922 24.0499 30.8228 23.9577 30.8476 23.8639C30.8528 23.8442 30.8619 23.8257 30.8742 23.8094C30.8866 23.7932 30.902 23.7796 30.9197 23.7693C30.9373 23.759 30.9568 23.7523 30.977 23.7496C30.9972 23.7468 31.0178 23.7481 31.0375 23.7533C31.0572 23.7585 31.0757 23.7675 31.092 23.7799C31.1082 23.7923 31.1218 23.8077 31.1321 23.8253C31.1424 23.843 31.1491 23.8624 31.1518 23.8826C31.1546 23.9029 31.1533 23.9234 31.1481 23.9432C31.1198 24.0497 31.0852 24.1544 31.0444 24.2568C31.0324 24.2852 31.0122 24.3094 30.9865 24.3265C30.9608 24.3435 30.9306 24.3526 30.8998 24.3526V24.3539ZM5.00908 23.6803C4.97801 23.68 4.9477 23.6706 4.92191 23.6533C4.88794 23.63 4.86456 23.5942 4.85689 23.5537C4.84922 23.5133 4.85788 23.4714 4.88097 23.4373L5.05663 23.1804C5.08092 23.1489 5.11635 23.1278 5.15567 23.1216C5.19499 23.1154 5.23521 23.1244 5.26808 23.1469C5.30094 23.1693 5.32396 23.2035 5.3324 23.2424C5.34085 23.2814 5.33409 23.322 5.31351 23.3561L5.13785 23.6123C5.12362 23.6334 5.10445 23.6507 5.082 23.6627C5.05956 23.6746 5.03452 23.6809 5.00908 23.681V23.6803ZM31.0609 23.1342C31.0231 23.1343 30.9865 23.1205 30.9581 23.0955C30.9298 23.0704 30.9116 23.0358 30.9071 22.9982C30.8952 22.9016 30.8773 22.8059 30.8536 22.7116C30.8471 22.6913 30.8448 22.6699 30.847 22.6486C30.8491 22.6274 30.8555 22.6069 30.8659 22.5883C30.8763 22.5696 30.8904 22.5533 30.9073 22.5404C30.9242 22.5274 30.9436 22.5181 30.9643 22.5129C30.985 22.5078 31.0065 22.5069 31.0275 22.5104C31.0486 22.5139 31.0687 22.5216 31.0866 22.5332C31.1045 22.5448 31.1198 22.5599 31.1316 22.5776C31.1435 22.5954 31.1516 22.6153 31.1554 22.6363C31.1819 22.7428 31.202 22.8509 31.2155 22.9599C31.2205 23.0003 31.2095 23.0411 31.1848 23.0734C31.1601 23.1058 31.1237 23.1271 31.0834 23.1329C31.076 23.1344 31.0685 23.1351 31.0609 23.1349V23.1342ZM5.71038 22.6535C5.67923 22.6536 5.64879 22.6442 5.62321 22.6264C5.60632 22.6149 5.59186 22.6002 5.58066 22.5832C5.56946 22.5661 5.56173 22.547 5.55793 22.5269C5.55412 22.5069 5.55431 22.4862 5.55849 22.4663C5.56267 22.4463 5.57075 22.4273 5.58227 22.4105L5.75661 22.1536C5.7681 22.1367 5.7828 22.1223 5.79987 22.1111C5.81694 22.0999 5.83604 22.0922 5.8561 22.0884C5.87615 22.0846 5.89675 22.0848 5.91673 22.0889C5.93671 22.0931 5.95568 22.1011 5.97255 22.1126C5.98941 22.1241 6.00385 22.1388 6.01504 22.1559C6.02622 22.173 6.03393 22.1921 6.03774 22.2121C6.04154 22.2322 6.04136 22.2528 6.0372 22.2728C6.03303 22.2927 6.02498 22.3117 6.01349 22.3286L5.83849 22.5855C5.82445 22.6066 5.80541 22.6239 5.78306 22.6359C5.7607 22.6479 5.73574 22.6541 5.71038 22.6541V22.6535ZM30.6112 21.9931C30.5867 21.9928 30.5626 21.9866 30.5409 21.9751C30.5192 21.9636 30.5005 21.9472 30.4864 21.9271L30.4653 21.8987C30.4083 21.8187 30.3465 21.7422 30.2804 21.6695C30.2528 21.6391 30.2383 21.599 30.2403 21.558C30.2422 21.5169 30.2603 21.4783 30.2906 21.4506C30.3209 21.4229 30.361 21.4084 30.402 21.4102C30.4431 21.412 30.4817 21.43 30.5095 21.4602C30.584 21.5411 30.6533 21.6267 30.7169 21.7164L30.736 21.7422C30.7532 21.7653 30.7636 21.7927 30.766 21.8213C30.7685 21.85 30.7629 21.8788 30.75 21.9045C30.737 21.9302 30.7172 21.9517 30.6927 21.9668C30.6682 21.9819 30.64 21.9898 30.6112 21.9898V21.9931ZM6.4097 21.6293C6.38121 21.6301 6.35303 21.623 6.3283 21.6088C6.30357 21.5947 6.28325 21.5739 6.26958 21.5489C6.25591 21.5239 6.24942 21.4956 6.25084 21.4671C6.25227 21.4386 6.26154 21.4111 6.27763 21.3876L6.45263 21.1294C6.47583 21.0953 6.51162 21.0718 6.55212 21.0642C6.59261 21.0565 6.6345 21.0652 6.66856 21.0884C6.70262 21.1116 6.72608 21.1474 6.73376 21.1879C6.74144 21.2284 6.73272 21.2703 6.70951 21.3044L6.53517 21.5606C6.52101 21.5808 6.50224 21.5973 6.48042 21.6088C6.4586 21.6202 6.43436 21.6264 6.4097 21.6266V21.6293ZM21.9387 21.4463C21.8976 21.4479 21.8575 21.4331 21.8273 21.4051C21.797 21.3771 21.7792 21.3382 21.7776 21.2971C21.776 21.2559 21.7909 21.2158 21.8188 21.1856C21.8468 21.1554 21.8857 21.1375 21.9268 21.136L22.2359 21.1109C22.2764 21.1078 22.3167 21.1204 22.3482 21.1461C22.3798 21.1718 22.4003 21.2085 22.4056 21.2489C22.4073 21.2692 22.405 21.2897 22.3988 21.3092C22.3926 21.3286 22.3826 21.3466 22.3694 21.3622C22.3562 21.3778 22.3401 21.3906 22.3219 21.4C22.3038 21.4093 22.284 21.415 22.2636 21.4166L21.9539 21.4417L21.9387 21.4463ZM23.1782 21.3453C23.1578 21.3461 23.1375 21.3429 23.1184 21.3359C23.0992 21.3289 23.0816 21.3181 23.0667 21.3043C23.0517 21.2905 23.0395 21.2738 23.031 21.2553C23.0224 21.2368 23.0176 21.2168 23.0168 21.1964C23.0159 21.176 23.0191 21.1557 23.0262 21.1365C23.0332 21.1174 23.044 21.0998 23.0578 21.0848C23.0716 21.0698 23.0882 21.0577 23.1068 21.0491C23.1253 21.0406 23.1453 21.0358 23.1657 21.0349L23.476 21.0105C23.5171 21.0073 23.5578 21.0205 23.5891 21.0472C23.6205 21.074 23.6399 21.1121 23.6431 21.1531C23.6464 21.1942 23.6332 21.2349 23.6064 21.2662C23.5797 21.2975 23.5415 21.317 23.5005 21.3202L23.1914 21.3446L23.1782 21.3453ZM21.2143 21.3453C21.2034 21.3452 21.1926 21.3441 21.1819 21.342C21.1619 21.3378 21.1429 21.3298 21.1261 21.3182C21.1092 21.3067 21.0947 21.292 21.0836 21.2749C21.0724 21.2577 21.0647 21.2386 21.061 21.2185C21.0572 21.1984 21.0575 21.1777 21.0618 21.1578L21.1278 20.8533C21.1371 20.8135 21.1615 20.7788 21.1959 20.7565C21.2302 20.7342 21.2718 20.7261 21.312 20.7338C21.332 20.738 21.3509 20.7462 21.3677 20.7577C21.3845 20.7693 21.3989 20.784 21.41 20.8011C21.4211 20.8183 21.4287 20.8374 21.4324 20.8575C21.4361 20.8775 21.4358 20.8981 21.4316 20.918L21.3655 21.2218C21.3576 21.2554 21.3387 21.2854 21.3118 21.3071C21.2849 21.3287 21.2515 21.3408 21.2169 21.3413L21.2143 21.3453ZM24.4171 21.2482C24.3759 21.2498 24.3358 21.235 24.3056 21.207C24.2754 21.179 24.2575 21.1401 24.2559 21.099C24.2544 21.0578 24.2692 21.0177 24.2972 20.9875C24.3252 20.9573 24.364 20.9394 24.4052 20.9379L24.7149 20.9134C24.7557 20.9107 24.7961 20.924 24.8273 20.9505C24.8585 20.977 24.8781 21.0146 24.8819 21.0554C24.8837 21.0757 24.8814 21.0962 24.8751 21.1157C24.8689 21.1351 24.859 21.1531 24.8458 21.1687C24.8326 21.1843 24.8164 21.1971 24.7983 21.2065C24.7801 21.2158 24.7603 21.2215 24.74 21.2231L24.4296 21.2476L24.4171 21.2482ZM29.6504 21.1723C29.6275 21.1722 29.605 21.167 29.5844 21.1571C29.4971 21.1147 29.407 21.0781 29.3149 21.0475C29.2759 21.0344 29.2436 21.0064 29.2252 20.9696C29.2068 20.9327 29.2038 20.8901 29.2169 20.851C29.2299 20.812 29.258 20.7797 29.2948 20.7613C29.3316 20.7429 29.3743 20.7399 29.4133 20.753C29.5178 20.7879 29.6199 20.8293 29.7191 20.8771C29.7508 20.8923 29.7764 20.9177 29.7917 20.9493C29.8071 20.9809 29.8112 21.0167 29.8036 21.051C29.7959 21.0852 29.7768 21.1159 29.7495 21.1379C29.7222 21.16 29.6882 21.1721 29.653 21.1723H29.6504ZM25.6565 21.1498C25.6154 21.1514 25.5753 21.1366 25.5451 21.1086C25.5149 21.0806 25.497 21.0417 25.4954 21.0006C25.4938 20.9594 25.5087 20.9193 25.5367 20.8891C25.5647 20.8589 25.6035 20.841 25.6447 20.8395L25.9537 20.8157C25.9948 20.8124 26.0355 20.8255 26.0669 20.8522C26.0983 20.8789 26.1178 20.9169 26.1211 20.958C26.1244 20.9991 26.1113 21.0398 26.0846 21.0712C26.0579 21.1026 26.0199 21.1221 25.9788 21.1254L25.6684 21.1498H25.6565ZM26.896 21.0508C26.8563 21.0504 26.8182 21.0347 26.7896 21.007C26.7611 20.9792 26.7443 20.9416 26.7426 20.9019C26.741 20.8621 26.7548 20.8233 26.781 20.7934C26.8072 20.7634 26.8439 20.7447 26.8835 20.7411L27.1939 20.716C27.2347 20.7139 27.2747 20.7275 27.3058 20.754C27.3369 20.7806 27.3566 20.818 27.3609 20.8586C27.3626 20.879 27.3602 20.8994 27.3539 20.9188C27.3476 20.9382 27.3375 20.9562 27.3243 20.9717C27.311 20.9872 27.2948 21 27.2767 21.0093C27.2585 21.0185 27.2386 21.0241 27.2183 21.0257L26.9086 21.0501L26.896 21.0508ZM28.1349 20.953C28.0951 20.9525 28.0571 20.9367 28.0287 20.9089C28.0003 20.8811 27.9836 20.8435 27.982 20.8038C27.9805 20.7641 27.9943 20.7253 28.0205 20.6955C28.0467 20.6656 28.0834 20.6469 28.123 20.6433L28.4373 20.6196C28.4579 20.6175 28.4787 20.6198 28.4983 20.6263C28.518 20.6328 28.5361 20.6433 28.5514 20.6572C28.5668 20.671 28.5791 20.6879 28.5875 20.7068C28.5959 20.7257 28.6004 20.7461 28.6004 20.7668C28.6015 20.7872 28.5985 20.8075 28.5917 20.8267C28.5849 20.8459 28.5743 20.8636 28.5606 20.8787C28.5469 20.8938 28.5304 20.906 28.5119 20.9147C28.4935 20.9234 28.4735 20.9283 28.4532 20.9293L28.1474 20.9524L28.1349 20.953ZM7.1077 20.5998C7.07669 20.5997 7.04638 20.5905 7.02054 20.5733C6.98657 20.5501 6.96319 20.5143 6.95552 20.4738C6.94784 20.4334 6.9565 20.3915 6.97959 20.3574L7.15327 20.1005C7.17639 20.0664 7.21213 20.0428 7.25262 20.035C7.29312 20.0272 7.33506 20.0358 7.36921 20.0589C7.40336 20.082 7.42693 20.1178 7.43473 20.1583C7.44253 20.1988 7.43393 20.2407 7.41081 20.2749L7.23648 20.5317C7.22197 20.5525 7.20257 20.5694 7.18 20.5809C7.15743 20.5924 7.13237 20.5982 7.10704 20.5978L7.1077 20.5998ZM21.4692 20.1263C21.4585 20.1276 21.4476 20.1276 21.4368 20.1263C21.4168 20.1221 21.3978 20.114 21.381 20.1025C21.3641 20.091 21.3496 20.0762 21.3385 20.0591C21.3273 20.042 21.3196 20.0229 21.3159 20.0028C21.3121 19.9827 21.3124 19.962 21.3167 19.942L21.3827 19.6389C21.386 19.6182 21.3934 19.5984 21.4045 19.5806C21.4157 19.5628 21.4303 19.5475 21.4475 19.5355C21.4648 19.5236 21.4842 19.5152 21.5048 19.511C21.5253 19.5068 21.5465 19.5068 21.5671 19.511C21.5876 19.5152 21.6071 19.5235 21.6244 19.5354C21.6416 19.5474 21.6563 19.5627 21.6674 19.5804C21.6786 19.5982 21.686 19.6181 21.6893 19.6388C21.6926 19.6595 21.6916 19.6807 21.6865 19.701L21.6204 20.0061C21.6126 20.0404 21.5933 20.0711 21.5657 20.0929C21.538 20.1148 21.5038 20.1266 21.4686 20.1263H21.4692ZM7.80504 19.5709C7.77653 19.5716 7.74839 19.5644 7.72369 19.5501C7.699 19.5359 7.67871 19.5151 7.66506 19.49C7.65142 19.465 7.64494 19.4367 7.64633 19.4082C7.64773 19.3797 7.65694 19.3522 7.67297 19.3286L7.84665 19.0717C7.85805 19.0548 7.87267 19.0403 7.88968 19.029C7.90668 19.0178 7.92575 19.01 7.94577 19.0061C7.96579 19.0022 7.98637 19.0023 8.00636 19.0063C8.02635 19.0104 8.04535 19.0183 8.06226 19.0297C8.07917 19.0412 8.09366 19.0558 8.10492 19.0728C8.11618 19.0898 8.12398 19.1088 8.12787 19.1289C8.13177 19.1489 8.13168 19.1695 8.12761 19.1895C8.12355 19.2095 8.11559 19.2284 8.10419 19.2454L7.92985 19.5029C7.91577 19.5232 7.89701 19.5397 7.87518 19.5512C7.85334 19.5627 7.82906 19.5688 7.80438 19.5689L7.80504 19.5709ZM21.7215 18.9105C21.7109 18.9118 21.7003 18.9118 21.6898 18.9105C21.6698 18.9065 21.6508 18.8985 21.6339 18.887C21.617 18.8755 21.6026 18.8609 21.5914 18.8438C21.5803 18.8267 21.5726 18.8076 21.5688 18.7876C21.5651 18.7675 21.5653 18.7469 21.5696 18.727L21.6356 18.4225C21.6455 18.3834 21.6703 18.3496 21.7046 18.3283C21.739 18.307 21.7802 18.2999 21.8197 18.3085C21.8592 18.3171 21.8938 18.3406 21.9163 18.3742C21.9387 18.4078 21.9472 18.4488 21.94 18.4886L21.874 18.7924C21.865 18.8259 21.845 18.8554 21.8172 18.8762C21.7895 18.8971 21.7555 18.908 21.7208 18.9073L21.7215 18.9105ZM8.49974 18.5414C8.46871 18.5414 8.43837 18.5322 8.41257 18.515C8.37843 18.492 8.35481 18.4565 8.34688 18.4161C8.33896 18.3757 8.34738 18.3339 8.37031 18.2997L8.54464 18.0422C8.55609 18.0253 8.57076 18.0108 8.5878 17.9995C8.60485 17.9883 8.62394 17.9805 8.644 17.9767C8.66405 17.9728 8.68467 17.9729 8.70467 17.977C8.72468 17.9811 8.74367 17.9891 8.76058 18.0006C8.77749 18.012 8.79198 18.0267 8.80323 18.0437C8.81447 18.0608 8.82224 18.0799 8.8261 18.0999C8.82997 18.12 8.82984 18.1406 8.82574 18.1606C8.82164 18.1806 8.81363 18.1996 8.80219 18.2165L8.62851 18.4727C8.61441 18.4939 8.59526 18.5113 8.57279 18.5233C8.55031 18.5353 8.52522 18.5415 8.49974 18.5414ZM21.9711 17.6922C21.9606 17.6935 21.9499 17.6935 21.9394 17.6922C21.9194 17.6881 21.9004 17.6801 21.8835 17.6687C21.8666 17.6572 21.8521 17.6425 21.8409 17.6255C21.8296 17.6084 21.8219 17.5893 21.8181 17.5693C21.8142 17.5492 21.8144 17.5286 21.8185 17.5086L21.8813 17.2042C21.89 17.1638 21.9145 17.1286 21.9492 17.1062C21.9839 17.0839 22.0261 17.0762 22.0665 17.085C22.1069 17.0937 22.1421 17.1182 22.1645 17.1529C22.1868 17.1877 22.1945 17.2298 22.1857 17.2702L22.123 17.574C22.1141 17.607 22.0947 17.6362 22.0676 17.6571C22.0405 17.678 22.0073 17.6894 21.9731 17.6895L21.9711 17.6922ZM9.19312 17.5119C9.16228 17.512 9.13213 17.5028 9.10661 17.4855C9.08965 17.4742 9.07509 17.4596 9.06376 17.4427C9.05242 17.4257 9.04454 17.4067 9.04055 17.3867C9.03656 17.3668 9.03656 17.3462 9.04053 17.3262C9.0445 17.3062 9.05236 17.2872 9.06369 17.2702L9.23802 17.012C9.24947 16.9951 9.26413 16.9807 9.28116 16.9695C9.29819 16.9583 9.31726 16.9506 9.33728 16.9467C9.3573 16.9429 9.37788 16.943 9.39784 16.9472C9.4178 16.9513 9.43676 16.9593 9.45363 16.9707C9.4705 16.9822 9.48494 16.9968 9.49614 17.0139C9.50735 17.0309 9.51509 17.05 9.51892 17.07C9.52276 17.09 9.5226 17.1106 9.51848 17.1306C9.51436 17.1505 9.50635 17.1695 9.4949 17.1864L9.32189 17.4432C9.308 17.4632 9.28956 17.4796 9.26809 17.4911C9.24662 17.5026 9.22274 17.5088 9.1984 17.5093L9.19312 17.5119ZM9.88781 16.4818C9.8593 16.4824 9.83115 16.4752 9.80646 16.461C9.78177 16.4467 9.76149 16.4259 9.74784 16.4009C9.73419 16.3758 9.72771 16.3475 9.72911 16.319C9.7305 16.2905 9.73971 16.263 9.75574 16.2394L9.93008 15.9819C9.94105 15.964 9.95552 15.9486 9.97262 15.9365C9.98971 15.9244 10.0091 15.9159 10.0295 15.9115C10.05 15.907 10.0712 15.9068 10.0917 15.9108C10.1123 15.9148 10.1318 15.9229 10.1492 15.9346C10.1665 15.9463 10.1813 15.9614 10.1927 15.979C10.204 15.9966 10.2117 16.0164 10.2152 16.037C10.2188 16.0576 10.2181 16.0788 10.2132 16.0992C10.2084 16.1195 10.1994 16.1387 10.187 16.1555L10.0133 16.4137C9.99921 16.4335 9.98072 16.4497 9.95928 16.461C9.93784 16.4724 9.91405 16.4786 9.8898 16.4791L9.88781 16.4818ZM22.2214 16.4751C22.2107 16.4751 22.2001 16.474 22.1897 16.4718C22.1697 16.4678 22.1507 16.4598 22.1337 16.4483C22.1168 16.4369 22.1024 16.4222 22.0911 16.4051C22.0799 16.3881 22.0722 16.369 22.0683 16.3489C22.0645 16.3289 22.0647 16.3083 22.0688 16.2883L22.1348 15.9838C22.1392 15.9639 22.1474 15.945 22.159 15.9282C22.1707 15.9115 22.1855 15.8972 22.2027 15.8861C22.2199 15.8751 22.239 15.8675 22.2591 15.8639C22.2792 15.8603 22.2998 15.8606 22.3197 15.865C22.3397 15.8693 22.3586 15.8775 22.3754 15.8892C22.3921 15.9008 22.4064 15.9156 22.4175 15.9328C22.4285 15.95 22.4361 15.9692 22.4397 15.9892C22.4433 16.0093 22.443 16.0299 22.4386 16.0499L22.3759 16.3543C22.3675 16.3883 22.3479 16.4185 22.3202 16.44C22.2925 16.4615 22.2584 16.4729 22.2233 16.4725L22.2214 16.4751ZM10.5852 15.4483C10.5566 15.449 10.5285 15.4418 10.5038 15.4275C10.4791 15.4132 10.4588 15.3924 10.4452 15.3674C10.4315 15.3424 10.425 15.314 10.4264 15.2856C10.4278 15.2571 10.4371 15.2295 10.4531 15.2059L10.6274 14.9484C10.6384 14.9306 10.6529 14.9151 10.67 14.903C10.687 14.8909 10.7064 14.8824 10.7269 14.878C10.7474 14.8736 10.7685 14.8734 10.7891 14.8773C10.8096 14.8813 10.8292 14.8894 10.8465 14.9011C10.8639 14.9129 10.8787 14.928 10.89 14.9456C10.9014 14.9632 10.909 14.9829 10.9126 15.0035C10.9161 15.0242 10.9154 15.0453 10.9106 15.0657C10.9057 15.0861 10.8968 15.1052 10.8843 15.1221L10.7106 15.3803C10.6966 15.4008 10.678 15.4177 10.6561 15.4295C10.6343 15.4413 10.61 15.4478 10.5852 15.4483ZM22.4716 15.2548C22.4609 15.2548 22.4503 15.2534 22.4399 15.2508C22.4199 15.2467 22.4009 15.2387 22.384 15.2273C22.3671 15.2159 22.3526 15.2012 22.3414 15.1841C22.3302 15.1671 22.3224 15.148 22.3186 15.1279C22.3148 15.1079 22.3149 15.0872 22.3191 15.0673L22.3851 14.7642C22.3892 14.7442 22.3972 14.7252 22.4086 14.7083C22.42 14.6914 22.4346 14.6769 22.4517 14.6656C22.4687 14.6544 22.4877 14.6466 22.5078 14.6427C22.5278 14.6388 22.5484 14.6389 22.5684 14.643C22.5884 14.647 22.6074 14.655 22.6243 14.6664C22.6412 14.6779 22.6557 14.6925 22.6669 14.7095C22.6782 14.7265 22.686 14.7456 22.6898 14.7656C22.6937 14.7856 22.6936 14.8062 22.6896 14.8262L22.6235 15.1307C22.6163 15.1656 22.5972 15.197 22.5696 15.2196C22.5419 15.2422 22.5073 15.2546 22.4716 15.2548ZM11.2799 14.4181C11.2488 14.418 11.2185 14.4089 11.1927 14.3917C11.1586 14.3685 11.1351 14.3328 11.1273 14.2923C11.1195 14.2519 11.1281 14.21 11.1511 14.1758L11.3261 13.9176C11.3375 13.9007 11.3522 13.8863 11.3692 13.8751C11.3862 13.8639 11.4053 13.8561 11.4253 13.8523C11.4454 13.8485 11.4659 13.8486 11.4859 13.8527C11.5059 13.8568 11.5248 13.8649 11.5417 13.8763C11.5586 13.8877 11.573 13.9024 11.5842 13.9194C11.5954 13.9365 11.6031 13.9555 11.607 13.9756C11.6108 13.9956 11.6107 14.0162 11.6065 14.0361C11.6024 14.0561 11.5944 14.075 11.583 14.0919L11.4086 14.3501C11.3945 14.3708 11.3756 14.3878 11.3536 14.3996C11.3315 14.4115 11.3069 14.4178 11.2818 14.4181H11.2799ZM22.7226 14.0378C22.7118 14.0387 22.701 14.0387 22.6902 14.0378C22.6499 14.0293 22.6147 14.0053 22.5921 13.9709C22.5696 13.9364 22.5616 13.8945 22.57 13.8542L22.6328 13.5498C22.6367 13.5297 22.6446 13.5106 22.656 13.4936C22.6674 13.4767 22.6821 13.4621 22.6992 13.4509C22.7163 13.4397 22.7355 13.4321 22.7556 13.4284C22.7757 13.4247 22.7964 13.4251 22.8163 13.4296C22.8363 13.4337 22.8553 13.4417 22.8723 13.4531C22.8892 13.4645 22.9036 13.4792 22.9149 13.4963C22.9261 13.5133 22.9338 13.5324 22.9377 13.5525C22.9415 13.5725 22.9413 13.5932 22.9372 13.6131L22.8712 13.9169C22.8637 13.9505 22.8452 13.9806 22.8186 14.0025C22.7921 14.0244 22.759 14.0368 22.7246 14.0378H22.7226ZM11.9792 13.3906C11.9482 13.3905 11.9179 13.3813 11.892 13.3642C11.8581 13.3409 11.8347 13.3052 11.8269 13.2648C11.8191 13.2243 11.8276 13.1825 11.8504 13.1482L12.0254 12.8907C12.0369 12.8738 12.0515 12.8593 12.0686 12.8481C12.0856 12.8368 12.1047 12.8291 12.1248 12.8252C12.1448 12.8213 12.1654 12.8214 12.1854 12.8255C12.2054 12.8297 12.2244 12.8377 12.2413 12.8491C12.2582 12.8606 12.2727 12.8752 12.284 12.8923C12.2952 12.9093 12.303 12.9284 12.3069 12.9485C12.3107 12.9685 12.3106 12.9891 12.3065 13.0091C12.3024 13.0291 12.2944 13.0481 12.2829 13.065L12.108 13.3226C12.0937 13.3436 12.0745 13.3609 12.0521 13.3727C12.0296 13.3846 12.0046 13.3907 11.9792 13.3906ZM22.9755 12.8234C22.9649 12.8243 22.9543 12.8243 22.9438 12.8234C22.9238 12.8193 22.9048 12.8113 22.888 12.7998C22.8711 12.7884 22.8566 12.7737 22.8455 12.7566C22.8343 12.7395 22.8266 12.7204 22.8229 12.7004C22.8191 12.6803 22.8194 12.6597 22.8236 12.6398L22.8896 12.3354C22.8984 12.295 22.9228 12.2597 22.9576 12.2374C22.9923 12.215 23.0345 12.2074 23.0749 12.2162C23.1152 12.2249 23.1505 12.2493 23.1728 12.2841C23.1952 12.3188 23.2028 12.361 23.1941 12.4014L23.128 12.7051C23.1192 12.7387 23.0993 12.7683 23.0717 12.7892C23.044 12.8102 23.0102 12.8213 22.9755 12.8207V12.8234ZM12.6778 12.3611C12.6496 12.3611 12.6218 12.3534 12.5976 12.3388C12.5734 12.3242 12.5536 12.3033 12.5404 12.2783C12.5272 12.2533 12.5211 12.2251 12.5227 12.1969C12.5244 12.1687 12.5337 12.1414 12.5497 12.1181L12.7241 11.8612C12.7472 11.8271 12.7829 11.8035 12.8234 11.7957C12.8639 11.7879 12.9059 11.7965 12.94 11.8196C12.9742 11.8427 12.9977 11.8785 13.0055 11.919C13.0133 11.9595 13.0047 12.0014 12.9816 12.0355L12.8059 12.2931C12.7915 12.3136 12.7723 12.3304 12.75 12.3419C12.7277 12.3534 12.7029 12.3593 12.6778 12.3591V12.3611ZM23.2284 11.6056C23.2179 11.6069 23.2072 11.6069 23.1967 11.6056C23.1767 11.6016 23.1577 11.5936 23.1409 11.5821C23.124 11.5706 23.1096 11.556 23.0984 11.5389C23.0872 11.5218 23.0795 11.5027 23.0758 11.4827C23.072 11.4626 23.0723 11.442 23.0765 11.4221L23.1426 11.1183C23.1469 11.0984 23.1551 11.0795 23.1668 11.0627C23.1784 11.0459 23.1932 11.0316 23.2104 11.0206C23.2276 11.0095 23.2467 11.002 23.2668 10.9984C23.2869 10.9947 23.3075 10.9951 23.3275 10.9994C23.3474 11.0038 23.3663 11.012 23.3831 11.0236C23.3998 11.0353 23.4142 11.0501 23.4252 11.0673C23.4362 11.0844 23.4438 11.1036 23.4474 11.1237C23.451 11.1438 23.4507 11.1644 23.4463 11.1843L23.3803 11.4888C23.3713 11.5221 23.3515 11.5515 23.324 11.5723C23.2965 11.5931 23.2629 11.6041 23.2284 11.6037V11.6056ZM13.3778 11.3329C13.3493 11.3336 13.3212 11.3264 13.2965 11.3121C13.2718 11.2979 13.2515 11.2771 13.2378 11.252C13.2242 11.227 13.2177 11.1987 13.2191 11.1702C13.2205 11.1417 13.2297 11.1142 13.2457 11.0906L13.4214 10.833C13.4324 10.8149 13.4469 10.7992 13.4642 10.7868C13.4814 10.7745 13.501 10.7658 13.5217 10.7613C13.5424 10.7568 13.5639 10.7566 13.5847 10.7607C13.6055 10.7647 13.6253 10.773 13.6428 10.785C13.6603 10.7969 13.6751 10.8123 13.6865 10.8303C13.6978 10.8482 13.7054 10.8682 13.7087 10.8892C13.712 10.9101 13.7111 10.9315 13.7058 10.9521C13.7006 10.9726 13.6912 10.9919 13.6783 11.0087L13.5033 11.2649C13.4891 11.2851 13.4703 11.3015 13.4485 11.313C13.4267 11.3245 13.4025 11.3306 13.3778 11.3309V11.3329ZM23.4813 10.3899C23.4706 10.3909 23.4597 10.3909 23.449 10.3899C23.4087 10.3812 23.3735 10.357 23.351 10.3225C23.3285 10.288 23.3205 10.246 23.3288 10.2057L23.3948 9.90193C23.4036 9.86156 23.428 9.82631 23.4628 9.80396C23.4975 9.78161 23.5397 9.77397 23.58 9.78273C23.6204 9.79148 23.6557 9.81592 23.678 9.85066C23.7004 9.8854 23.708 9.92759 23.6992 9.96796L23.6332 10.2724C23.6244 10.3053 23.605 10.3345 23.5781 10.3553C23.5511 10.3762 23.5181 10.3877 23.484 10.3879L23.4813 10.3899ZM14.0765 10.3061C14.0482 10.306 14.0205 10.2981 13.9963 10.2835C13.9721 10.2688 13.9523 10.2478 13.9392 10.2227C13.926 10.1977 13.9199 10.1695 13.9215 10.1413C13.9231 10.113 13.9324 10.0858 13.9484 10.0624L14.124 9.80617C14.1483 9.77462 14.1838 9.75357 14.2231 9.74733C14.2624 9.74109 14.3026 9.75013 14.3355 9.7726C14.3683 9.79508 14.3914 9.82927 14.3998 9.86817C14.4083 9.90708 14.4015 9.94775 14.3809 9.98183L14.2046 10.2387C14.1904 10.2588 14.1716 10.2752 14.1497 10.2865C14.1279 10.2979 14.1037 10.3039 14.0791 10.3041L14.0765 10.3061ZM14.7804 9.28052C14.7491 9.2807 14.7184 9.27125 14.6926 9.25345C14.6757 9.24198 14.6612 9.22729 14.65 9.21022C14.6388 9.19315 14.6311 9.17403 14.6273 9.15397C14.6235 9.13391 14.6237 9.1133 14.6279 9.09332C14.6321 9.07333 14.6401 9.05437 14.6517 9.03751L14.8286 8.78063C14.8521 8.74674 14.8881 8.72356 14.9286 8.7162C14.9692 8.70883 15.011 8.71787 15.0449 8.74134C15.0788 8.76481 15.102 8.80078 15.1093 8.84134C15.1167 8.88189 15.1077 8.92372 15.0842 8.95761L14.9085 9.21317C14.8943 9.23323 14.8755 9.24962 14.8537 9.26098C14.8319 9.27235 14.8077 9.27837 14.7831 9.27854L14.7804 9.28052ZM23.7395 9.17355C23.7288 9.17452 23.7179 9.17452 23.7072 9.17355C23.6668 9.16498 23.6315 9.14079 23.609 9.10625C23.5865 9.07172 23.5786 9.02967 23.587 8.9893L23.653 8.68488C23.6573 8.66493 23.6656 8.64604 23.6772 8.62927C23.6888 8.61251 23.7037 8.59819 23.7209 8.58716C23.738 8.57612 23.7572 8.56857 23.7773 8.56494C23.7974 8.56131 23.818 8.56168 23.8379 8.56601C23.8579 8.57035 23.8768 8.57857 23.8935 8.59021C23.9103 8.60185 23.9246 8.61667 23.9356 8.63384C23.9467 8.65101 23.9542 8.67019 23.9579 8.69028C23.9615 8.71037 23.9611 8.73097 23.9568 8.75091L23.8907 9.05468C23.8822 9.08775 23.8631 9.11711 23.8362 9.13822C23.8094 9.15934 23.7763 9.17106 23.7422 9.17156L23.7395 9.17355ZM15.485 8.25763C15.4567 8.25748 15.4289 8.24959 15.4047 8.23483C15.3805 8.22007 15.3608 8.19899 15.3477 8.17386C15.3346 8.14873 15.3286 8.12049 15.3303 8.0922C15.3321 8.06391 15.3415 8.03662 15.3576 8.01329L15.5346 7.75839C15.5456 7.74046 15.5602 7.72496 15.5774 7.71285C15.5947 7.70073 15.6142 7.69226 15.6348 7.68794C15.6554 7.68362 15.6767 7.68354 15.6974 7.68771C15.718 7.69188 15.7376 7.70021 15.7549 7.71219C15.7723 7.72418 15.787 7.73956 15.7982 7.75742C15.8094 7.77527 15.8168 7.79522 15.82 7.81604C15.8232 7.83686 15.8222 7.85812 15.8169 7.87852C15.8117 7.89892 15.8023 7.91804 15.7895 7.93471L15.6125 8.19093C15.5983 8.21065 15.5796 8.22678 15.5581 8.23802C15.5365 8.24925 15.5126 8.25529 15.4883 8.25565L15.485 8.25763ZM23.9997 7.95848C23.9887 7.95943 23.9777 7.95943 23.9667 7.95848C23.9265 7.94963 23.8914 7.92521 23.8691 7.89056C23.8468 7.85591 23.8392 7.81385 23.8478 7.77358L23.9139 7.46915C23.9237 7.43006 23.9483 7.39631 23.9826 7.37507C24.0168 7.35382 24.058 7.34674 24.0974 7.35532C24.1368 7.36391 24.1713 7.38747 24.1936 7.42105C24.2159 7.45462 24.2243 7.49555 24.217 7.53519L24.1509 7.8383C24.1427 7.87151 24.1237 7.90108 24.097 7.92244C24.0702 7.94381 24.0372 7.95577 24.003 7.9565L23.9997 7.95848ZM16.1936 7.23209C16.1617 7.23234 16.1305 7.22264 16.1044 7.20435C16.0877 7.19262 16.0735 7.17772 16.0625 7.16047C16.0516 7.14323 16.0442 7.12399 16.0407 7.10387C16.0372 7.08375 16.0377 7.06313 16.0422 7.0432C16.0466 7.02328 16.055 7.00444 16.0668 6.98776L16.2438 6.73286C16.2676 6.69927 16.3037 6.67641 16.3442 6.66924C16.3848 6.66207 16.4265 6.67116 16.4604 6.69455C16.4771 6.70623 16.4915 6.72111 16.5025 6.73833C16.5135 6.75554 16.521 6.77477 16.5245 6.7949C16.5281 6.81502 16.5276 6.83565 16.5232 6.85561C16.5188 6.87556 16.5104 6.89443 16.4987 6.91115L16.321 7.16605C16.3072 7.18609 16.2889 7.20261 16.2676 7.2143C16.2463 7.226 16.2225 7.23255 16.1982 7.23341L16.1936 7.23209ZM24.2652 6.74012C24.254 6.74142 24.2427 6.74142 24.2315 6.74012C24.1913 6.73128 24.1563 6.70683 24.1341 6.67215C24.1119 6.63748 24.1045 6.59541 24.1133 6.55522L24.1793 6.25145C24.1883 6.21132 24.2128 6.17634 24.2474 6.15409C24.282 6.13185 24.324 6.12412 24.3642 6.13259C24.4044 6.14143 24.4394 6.16588 24.4616 6.20056C24.4838 6.23523 24.4913 6.2773 24.4824 6.31749L24.4164 6.62125C24.4087 6.65494 24.39 6.68509 24.3632 6.70687C24.3364 6.72866 24.303 6.74083 24.2685 6.74144L24.2652 6.74012ZM16.9048 6.21183C16.873 6.21179 16.8419 6.20212 16.8157 6.1841C16.782 6.1603 16.7592 6.12416 16.7521 6.08357C16.7451 6.04298 16.7544 6.00124 16.778 5.9675L16.9563 5.71326C16.968 5.69657 16.9829 5.68234 17.0001 5.6714C17.0173 5.66046 17.0365 5.65301 17.0566 5.64948C17.0767 5.64596 17.0972 5.64642 17.1171 5.65085C17.137 5.65528 17.1559 5.66359 17.1726 5.67529C17.1893 5.687 17.2035 5.70188 17.2144 5.71908C17.2254 5.73628 17.2328 5.75548 17.2364 5.77556C17.2399 5.79565 17.2394 5.81622 17.235 5.83613C17.2306 5.85603 17.2223 5.87486 17.2105 5.89155L17.0322 6.1458C17.0184 6.16613 16.9999 6.18289 16.9783 6.19471C16.9568 6.20654 16.9327 6.21308 16.9081 6.21381L16.9048 6.21183ZM24.5346 5.52638C24.5233 5.52637 24.512 5.52503 24.5009 5.52242C24.481 5.51805 24.4621 5.50976 24.4453 5.49805C24.4286 5.48633 24.4144 5.47142 24.4034 5.45416C24.3925 5.43691 24.3851 5.41765 24.3817 5.39752C24.3782 5.37738 24.3788 5.35677 24.3834 5.33686L24.4494 5.03375C24.4606 4.99599 24.4856 4.96386 24.5194 4.94379C24.5533 4.92373 24.5935 4.91722 24.632 4.92558C24.6705 4.93395 24.7043 4.95656 24.7268 4.98887C24.7493 5.02119 24.7587 5.06081 24.7532 5.09978L24.6871 5.40355C24.6803 5.43831 24.6618 5.46967 24.6346 5.49239C24.6075 5.51511 24.5733 5.52781 24.5379 5.52836L24.5346 5.52638ZM17.6193 5.1962C17.5908 5.19624 17.5629 5.18844 17.5385 5.17365C17.5142 5.15885 17.4944 5.13765 17.4813 5.11234C17.4682 5.08704 17.4623 5.05862 17.4643 5.03019C17.4663 5.00177 17.476 4.97444 17.4925 4.9512L17.6721 4.69763C17.6959 4.66417 17.732 4.6415 17.7725 4.6346C17.813 4.62769 17.8545 4.6371 17.8881 4.66078C17.9216 4.68445 17.9444 4.72046 17.9515 4.76091C17.9585 4.80135 17.9493 4.84295 17.9257 4.87658L17.7461 5.13083C17.7322 5.15082 17.7138 5.16722 17.6923 5.1787C17.6708 5.19018 17.6469 5.19641 17.6226 5.19686L17.6193 5.1962ZM24.8093 4.31528C24.7977 4.31526 24.7862 4.31393 24.775 4.31132C24.755 4.3068 24.7362 4.29839 24.7195 4.28658C24.7029 4.27476 24.6887 4.25978 24.6779 4.24248C24.667 4.22517 24.6597 4.2059 24.6563 4.18576C24.6529 4.16562 24.6535 4.145 24.6581 4.12509L24.7281 3.82133C24.732 3.80078 24.7401 3.78124 24.7518 3.76389C24.7635 3.74654 24.7786 3.73175 24.7962 3.72038C24.8137 3.70901 24.8334 3.70131 24.854 3.69775C24.8747 3.69419 24.8958 3.69483 24.9162 3.69965C24.9365 3.70446 24.9557 3.71334 24.9726 3.72576C24.9894 3.73817 25.0036 3.75387 25.0142 3.7719C25.0248 3.78993 25.0317 3.80992 25.0344 3.83067C25.0371 3.85142 25.0355 3.87251 25.0299 3.89265L24.9605 4.19443C24.953 4.22831 24.9343 4.25868 24.9075 4.28071C24.8807 4.30274 24.8473 4.31514 24.8126 4.31594L24.8093 4.31528ZM18.3378 4.1832C18.3093 4.1831 18.2813 4.17518 18.257 4.1603C18.2327 4.14543 18.2129 4.12417 18.1999 4.09884C18.1868 4.07351 18.1809 4.04508 18.1829 4.01664C18.1848 3.9882 18.1946 3.96085 18.211 3.93755L18.3913 3.68464C18.4031 3.66803 18.4181 3.65392 18.4354 3.64311C18.4527 3.63229 18.4719 3.62499 18.492 3.62162C18.5122 3.61824 18.5327 3.61886 18.5526 3.62345C18.5725 3.62803 18.5913 3.63648 18.6079 3.64831C18.6245 3.66015 18.6386 3.67515 18.6494 3.69244C18.6602 3.70973 18.6675 3.72898 18.6709 3.74909C18.6743 3.76921 18.6736 3.78978 18.6691 3.80965C18.6645 3.82953 18.656 3.84831 18.6442 3.86491L18.4646 4.11783C18.4503 4.13739 18.4318 4.15341 18.4104 4.16463C18.389 4.17586 18.3653 4.18199 18.3411 4.18255L18.3378 4.1832ZM19.0602 3.17154C19.0316 3.17167 19.0035 3.16389 18.9791 3.14906C18.9546 3.13424 18.9347 3.11294 18.9216 3.08752C18.9085 3.06211 18.9027 3.03357 18.9047 3.00504C18.9068 2.97652 18.9168 2.94912 18.9334 2.92588L19.115 2.67362C19.1269 2.65706 19.1419 2.643 19.1593 2.63224C19.1766 2.62149 19.1958 2.61425 19.2159 2.61094C19.236 2.60763 19.2566 2.60831 19.2765 2.61295C19.2963 2.61758 19.3151 2.62609 19.3316 2.63797C19.3482 2.64985 19.3622 2.66488 19.373 2.68219C19.3838 2.69951 19.391 2.71876 19.3943 2.73888C19.3976 2.75899 19.3969 2.77956 19.3923 2.79941C19.3877 2.81926 19.3792 2.838 19.3673 2.85456L19.1863 3.10682C19.1722 3.12628 19.1538 3.14219 19.1325 3.15331C19.1112 3.16443 19.0876 3.17044 19.0635 3.17087L19.0602 3.17154ZM25.0695 3.10153H25.0523C25.0114 3.09704 24.9739 3.07654 24.948 3.04449C24.9222 3.01245 24.91 2.97146 24.9143 2.9305C24.9235 2.84673 24.9281 2.76252 24.9282 2.67825V2.6406C24.9264 2.6194 24.929 2.59807 24.9358 2.57791C24.9426 2.55776 24.9535 2.5392 24.9677 2.5234C24.9819 2.50759 24.9993 2.49487 25.0186 2.48602C25.038 2.47716 25.0589 2.47236 25.0802 2.47191C25.1014 2.47146 25.1226 2.47536 25.1423 2.48339C25.162 2.49142 25.1798 2.50339 25.1947 2.51858C25.2096 2.53376 25.2213 2.55184 25.2289 2.57169C25.2366 2.59154 25.2401 2.61275 25.2392 2.634V2.67825C25.2394 2.77377 25.2343 2.86922 25.224 2.96418C25.2195 3.001 25.202 3.035 25.1746 3.06005C25.1472 3.08511 25.1118 3.09959 25.0748 3.10088L25.0695 3.10153ZM19.7866 2.1625C19.7538 2.16279 19.7218 2.15236 19.6955 2.13279C19.6789 2.12093 19.6648 2.10588 19.6541 2.08852C19.6433 2.07116 19.6361 2.05184 19.6329 2.03168C19.6298 2.01152 19.6306 1.99093 19.6354 1.9711C19.6403 1.95127 19.649 1.93261 19.6611 1.91619L19.8427 1.66525C19.8668 1.6318 19.9032 1.60929 19.9439 1.60266C19.9846 1.59604 20.0262 1.60585 20.0597 1.62993C20.0931 1.65401 20.1156 1.69039 20.1223 1.73107C20.1289 1.77175 20.1191 1.8134 20.095 1.84685L19.9121 2.09845C19.8983 2.11839 19.88 2.13477 19.8586 2.14625C19.8373 2.15773 19.8135 2.16398 19.7893 2.16449L19.7866 2.1625ZM24.9004 1.88317C24.8697 1.88311 24.8397 1.87391 24.8141 1.85674C24.7886 1.83958 24.7688 1.81522 24.7571 1.78676C24.7202 1.69614 24.6777 1.60791 24.6297 1.52262C24.6197 1.50484 24.6133 1.48526 24.6108 1.46501C24.6084 1.44475 24.6099 1.42421 24.6154 1.40456C24.6209 1.3849 24.6302 1.36652 24.6428 1.35047C24.6554 1.33441 24.671 1.32098 24.6888 1.31097C24.7066 1.30095 24.7262 1.29454 24.7464 1.29209C24.7667 1.28964 24.7872 1.2912 24.8069 1.29669C24.8265 1.30218 24.8449 1.31148 24.8609 1.32408C24.877 1.33667 24.8904 1.35229 24.9004 1.37007C24.9548 1.46593 25.0028 1.56519 25.0444 1.66723C25.0599 1.70542 25.0596 1.7482 25.0437 1.78619C25.0277 1.82418 24.9973 1.85431 24.9592 1.86997C24.9414 1.87744 24.9224 1.88169 24.9031 1.88251L24.9004 1.88317ZM20.5242 1.16272C20.4945 1.16263 20.4654 1.15405 20.4404 1.13798C20.4154 1.12191 20.3955 1.09902 20.3831 1.07202C20.3707 1.04502 20.3662 1.01503 20.3703 0.985585C20.3744 0.95614 20.3868 0.928467 20.406 0.905837C20.4781 0.822754 20.5551 0.744035 20.6365 0.670092C20.6671 0.64242 20.7074 0.628026 20.7485 0.630069C20.7897 0.632112 20.8284 0.650429 20.8561 0.680991C20.8837 0.711552 20.8981 0.751854 20.8961 0.793031C20.894 0.834208 20.8757 0.872885 20.8452 0.900557C20.7729 0.965644 20.705 1.03535 20.6418 1.10923C20.6274 1.12558 20.6097 1.13872 20.5899 1.14782C20.5701 1.15692 20.5487 1.16177 20.5269 1.16206L20.5242 1.16272ZM24.1674 0.898574C24.1319 0.89866 24.0974 0.886545 24.0697 0.864242C23.9942 0.802455 23.9148 0.745544 23.832 0.693864C23.797 0.671797 23.7721 0.636722 23.763 0.59635C23.7538 0.555977 23.761 0.513614 23.7831 0.478586C23.8052 0.443558 23.8403 0.418732 23.8806 0.409567C23.921 0.400403 23.9634 0.407653 23.9984 0.42972C24.0912 0.488453 24.1805 0.552622 24.2658 0.621887C24.2816 0.634738 24.2947 0.650583 24.3043 0.668504C24.314 0.686425 24.32 0.70607 24.322 0.726318C24.324 0.746566 24.322 0.767018 24.3161 0.786493C24.3102 0.805969 24.3005 0.82408 24.2876 0.839801C24.2733 0.857012 24.2553 0.87085 24.235 0.880324C24.2147 0.889797 24.1925 0.894678 24.1701 0.894616L24.1674 0.898574ZM21.53 0.458119C21.4939 0.457676 21.4592 0.444757 21.4316 0.421562C21.404 0.398367 21.3853 0.366325 21.3787 0.3309C21.3721 0.295474 21.3779 0.258855 21.3953 0.227267C21.4126 0.195679 21.4404 0.171076 21.4738 0.157652C21.5764 0.117687 21.6814 0.0843787 21.7882 0.0579371C21.8079 0.0529507 21.8285 0.0519062 21.8487 0.0548659C21.8688 0.0578255 21.8882 0.0647327 21.9057 0.0751877C21.9233 0.0856428 21.9385 0.0994404 21.9507 0.115799C21.9629 0.132158 21.9717 0.150762 21.9767 0.170534C21.9817 0.190306 21.9827 0.210865 21.9798 0.23104C21.9768 0.251215 21.9699 0.270605 21.9594 0.288112C21.949 0.305619 21.9352 0.320895 21.9188 0.333068C21.9025 0.345242 21.8839 0.354079 21.8641 0.359065C21.7697 0.382769 21.6768 0.412319 21.5861 0.447551C21.5688 0.452937 21.5507 0.455172 21.5326 0.454153L21.53 0.458119ZM23.0567 0.364345C23.0442 0.364436 23.0318 0.362885 23.0197 0.359726C22.9248 0.336625 22.8287 0.318765 22.7318 0.306233C22.6914 0.30065 22.6549 0.279335 22.6301 0.246928C22.6054 0.214521 22.5945 0.173648 22.5997 0.133219C22.6058 0.0929294 22.6273 0.0565947 22.6598 0.0319322C22.6922 0.00726977 22.733 -0.00377611 22.7734 0.00114714C22.8824 0.0148155 22.9905 0.035107 23.097 0.0619031C23.1337 0.0710801 23.1659 0.0933835 23.1873 0.12461C23.2088 0.155836 23.2181 0.193829 23.2134 0.231427C23.2088 0.269025 23.1906 0.303631 23.1622 0.328723C23.1338 0.353816 23.0972 0.367661 23.0593 0.36765L23.0567 0.364345Z",
                fill: "#636466"
            }), n.createElement("path", {
                d: "M28.7135 23.1956C28.7057 23.1879 28.6993 23.1789 28.6943 23.1692C28.6826 23.1465 28.6641 23.1279 28.6414 23.1161C28.6187 23.1043 28.5929 23.0998 28.5675 23.1032L26.5528 23.2616C23.8842 23.471 21.1246 23.6876 18.4145 23.9339H18.4026C18.3838 23.9339 18.3653 23.9298 18.3482 23.9221C18.3312 23.9144 18.3159 23.9031 18.3035 23.889C18.2899 23.8734 18.2801 23.8548 18.2749 23.8347C18.2697 23.8147 18.2694 23.7937 18.2738 23.7734C18.8853 20.9649 19.4737 18.1016 20.0429 15.3327C20.8941 11.1909 21.7744 6.90783 22.7504 2.71983C22.7565 2.69765 22.7579 2.67444 22.7545 2.6517C22.751 2.62895 22.7429 2.60718 22.7306 2.58776C22.713 2.5646 22.691 2.54519 22.6658 2.53068C22.6407 2.51616 22.6128 2.50683 22.584 2.50323C22.5701 2.50066 22.5566 2.49645 22.5437 2.49068C22.5114 2.47431 22.4756 2.46573 22.4394 2.46559C22.4093 2.46519 22.3796 2.47228 22.353 2.48623C22.3264 2.50018 22.3036 2.52055 22.2868 2.54549C18.5413 7.67979 14.9265 13.0373 11.4299 18.2185C8.55598 22.4771 5.58435 26.8811 2.53547 31.1615C2.51102 31.1843 2.49322 31.2133 2.48397 31.2454C2.47326 31.2602 2.46588 31.2771 2.46235 31.295C2.45882 31.3129 2.45921 31.3313 2.4635 31.3491C2.47398 31.3742 2.48954 31.3969 2.50919 31.4158C2.52885 31.4346 2.55218 31.4493 2.57774 31.4587C2.60336 31.4768 2.63311 31.4881 2.66425 31.4917L3.50488 31.5762C5.58039 31.7849 7.72722 32.0015 9.83509 32.2531C9.85707 32.2554 9.87813 32.2631 9.89634 32.2756C9.91455 32.2882 9.92933 32.3051 9.93931 32.3248C9.9493 32.3445 9.95418 32.3664 9.95351 32.3885C9.95284 32.4106 9.94663 32.4321 9.93547 32.4512C7.46638 36.9053 5.06201 41.265 2.7884 45.6247C2.78251 45.6361 2.77493 45.6466 2.76594 45.6558C2.75345 45.6701 2.74412 45.687 2.73855 45.7052C2.73297 45.7234 2.73128 45.7425 2.73358 45.7614C2.73158 45.7855 2.73473 45.8097 2.74282 45.8325C2.7509 45.8553 2.76374 45.8761 2.78047 45.8935C2.81929 45.9343 2.87273 45.9581 2.92905 45.9595C2.9515 45.9591 2.97376 45.9553 2.99509 45.9483C4.82825 45.6597 6.77697 45.3031 9.12851 44.8257C9.13729 44.8247 9.14614 44.8247 9.15492 44.8257C9.17612 44.8257 9.19702 44.8308 9.21583 44.8406C9.23464 44.8504 9.25081 44.8646 9.26298 44.8819C9.27516 44.8993 9.28298 44.9193 9.28578 44.9403C9.28858 44.9613 9.28627 44.9827 9.27907 45.0027C8.25353 47.8264 7.2445 50.7095 6.26783 53.4969C5.35983 56.0894 4.41882 58.7705 3.47187 61.3974C3.44215 61.4786 3.47187 61.5381 3.57224 61.5863C3.59937 61.6067 3.63206 61.6185 3.66601 61.62C3.68601 61.619 3.70558 61.6137 3.72335 61.6045C3.74113 61.5952 3.75671 61.5823 3.76903 61.5665C6.7347 58.2726 9.88197 55.0481 12.9262 51.9298C16.7339 48.0298 20.6709 43.9963 24.3016 39.7792C24.3253 39.7585 24.3417 39.7307 24.3485 39.7C24.3601 39.6714 24.3643 39.6404 24.3607 39.6099C24.3571 39.5793 24.3459 39.5501 24.328 39.525C24.3112 39.4984 24.2877 39.4767 24.2599 39.4619C24.2321 39.4472 24.201 39.4401 24.1695 39.4411H24.1583C24.1471 39.4443 24.1356 39.4459 24.124 39.4457H24.1127C23.208 39.3645 22.302 39.2952 21.396 39.2258C20.0013 39.1189 18.5565 39.0086 17.1459 38.856C17.1224 38.8535 17.0999 38.8448 17.0809 38.8306C17.0619 38.8164 17.047 38.7974 17.0379 38.7755C17.0288 38.7536 17.0257 38.7297 17.0291 38.7062C17.0324 38.6827 17.042 38.6606 17.0568 38.6421C20.5567 34.2936 23.9523 29.7477 27.2382 25.351L28.7187 23.3699C28.7312 23.3589 28.7411 23.3453 28.7477 23.33C28.7542 23.3147 28.7574 23.2982 28.7569 23.2815C28.7564 23.2649 28.7522 23.2486 28.7447 23.2337C28.7372 23.2189 28.7265 23.2059 28.7135 23.1956Z",
                fill: "#FFD642"
            }), n.createElement("path", {
                d: "M28.6938 23.1692C28.682 23.1465 28.6635 23.1279 28.6409 23.1161C28.6182 23.1043 28.5924 23.0997 28.567 23.1031L26.5522 23.2616C23.8837 23.471 21.1241 23.6876 18.414 23.9339H18.4021C18.3833 23.9339 18.3648 23.9298 18.3477 23.9221C18.3306 23.9144 18.3154 23.9031 18.303 23.889C18.2893 23.8734 18.2795 23.8548 18.2744 23.8347C18.2692 23.8147 18.2688 23.7937 18.2733 23.7734C18.8848 20.9649 19.4732 18.1016 20.0424 15.3327C20.8936 11.1909 21.7739 6.90783 22.7499 2.71983C22.756 2.69765 22.7573 2.67444 22.7539 2.6517C22.7505 2.62895 22.7424 2.60718 22.7301 2.58776C22.7125 2.5646 22.6905 2.54519 22.6653 2.53068C22.6401 2.51616 22.6123 2.50683 22.5835 2.50323C22.5696 2.50066 22.5561 2.49645 22.5432 2.49068C22.5108 2.47431 22.4751 2.46573 22.4389 2.46559C22.4088 2.46519 22.3791 2.47228 22.3525 2.48623C22.3258 2.50018 22.3031 2.52055 22.2863 2.54549C21.8425 3.15368 16.5887 19.5564 14.8322 25.1958C14.1896 27.2608 14.3039 27.6273 16.244 27.4919C16.5517 27.4701 19.0175 27.2086 19.81 27.1782C21.7481 27.1036 21.3849 27.6557 20.185 29.1415C18.3948 31.359 15.3572 35.0662 13.349 37.6601C10.6877 41.098 10.8324 41.2261 13.2453 41.4671C14.15 41.5562 16.2572 41.7068 17.1031 41.7477C19.2526 41.8521 18.6134 42.3467 17.5185 43.746C13.5564 48.8044 3.56379 61.1234 3.46605 61.3941C3.43634 61.4753 3.46605 61.5348 3.56643 61.583C3.59355 61.6034 3.62626 61.6152 3.6602 61.6167C3.68021 61.6157 3.69977 61.6104 3.71755 61.6011C3.73533 61.5919 3.7509 61.579 3.76321 61.5632C6.72889 58.2693 9.87617 55.0448 12.9204 51.9265C16.7281 48.0265 20.6651 43.993 24.2958 39.7759C24.3195 39.7552 24.3359 39.7274 24.3427 39.6967C24.3543 39.6681 24.3585 39.6371 24.3549 39.6065C24.3513 39.576 24.3401 39.5468 24.3222 39.5217C24.3054 39.4951 24.2819 39.4734 24.2541 39.4586C24.2263 39.4439 24.1952 39.4367 24.1637 39.4378H24.1525C24.1413 39.441 24.1298 39.4426 24.1181 39.4424H24.1069C23.2022 39.3612 22.2962 39.2919 21.3902 39.2225C19.9955 39.1156 18.5507 39.0053 17.1401 38.8527C17.1166 38.8502 17.0941 38.8414 17.0751 38.8273C17.0561 38.8131 17.0412 38.7941 17.0321 38.7722C17.023 38.7503 17.0199 38.7264 17.0232 38.7029C17.0266 38.6794 17.0361 38.6573 17.051 38.6388C20.5509 34.2903 23.9465 29.7444 27.2324 25.3477L28.7129 23.3666C28.7242 23.356 28.7331 23.3432 28.7392 23.329C28.7453 23.3148 28.7485 23.2995 28.7485 23.2841C28.7485 23.2686 28.7453 23.2533 28.7392 23.2392C28.7331 23.225 28.7242 23.2122 28.7129 23.2015C28.7046 23.192 28.6981 23.181 28.6938 23.1692Z",
                fill: "#FBBB4A"
            }), n.createElement("path", {
                d: "M28.8215 23.44C28.8625 23.3931 28.884 23.3323 28.8817 23.2701C28.8793 23.2079 28.8533 23.1489 28.809 23.1052C28.7853 23.0595 28.748 23.0222 28.7022 22.9985C28.6564 22.9749 28.6045 22.966 28.5534 22.9731C25.1691 23.2412 21.7834 23.4968 18.4024 23.8039C19.9291 16.7935 21.2512 9.7382 22.8789 2.75028C22.9285 2.53632 22.77 2.39434 22.6029 2.37057C22.5328 2.33263 22.4513 2.32136 22.3735 2.33884C22.2957 2.35632 22.2268 2.40137 22.1796 2.46567C15.3541 11.823 9.16063 21.624 2.44807 31.0592C2.41219 31.0897 2.38544 31.1294 2.37081 31.1741C2.26779 31.3412 2.36091 31.499 2.50619 31.5704C2.54936 31.5995 2.599 31.6176 2.6508 31.6232C5.04196 31.8642 7.43313 32.0993 9.81901 32.3846C7.39681 36.7555 4.98188 41.131 2.67128 45.5614C2.64756 45.5857 2.62915 45.6147 2.61721 45.6466C2.60528 45.6784 2.60007 45.7124 2.60194 45.7463C2.60039 45.7973 2.6107 45.8481 2.63208 45.8945C2.65345 45.9409 2.68529 45.9817 2.7251 46.0137C2.76491 46.0457 2.8116 46.068 2.8615 46.0789C2.9114 46.0898 2.96315 46.089 3.01268 46.0765C5.06838 45.7536 7.11285 45.3672 9.15402 44.9539C7.17294 50.4031 5.31668 55.896 3.34682 61.3486C3.33316 61.3808 3.32619 61.4155 3.32636 61.4504C3.32652 61.4854 3.3338 61.52 3.34777 61.5521C3.36173 61.5841 3.38208 61.613 3.40758 61.637C3.43308 61.6609 3.46318 61.6794 3.49606 61.6913C3.55056 61.7348 3.61999 61.7549 3.68926 61.7473C3.75852 61.7398 3.822 61.7052 3.86586 61.6511C10.5401 54.2379 17.8774 47.4434 24.3846 39.875C24.4257 39.8407 24.4554 39.7946 24.4698 39.743C24.5695 39.5066 24.3416 39.2477 24.1231 39.3051C21.8039 39.0978 19.4748 38.9651 17.1589 38.7154C21.1719 33.7218 24.9815 28.567 28.8215 23.44ZM9.89628 44.7095C9.90877 44.6864 9.91767 44.6614 9.92268 44.6356C9.92474 44.6304 9.92651 44.6251 9.92797 44.6197C9.92797 44.6151 9.92797 44.6118 9.92797 44.6072C9.92993 44.5991 9.93125 44.591 9.93193 44.5827C9.94167 44.5471 9.9438 44.5097 9.93819 44.4732C9.93259 44.4366 9.91936 44.4016 9.89938 44.3705C9.8794 44.3394 9.8531 44.3128 9.82219 44.2925C9.79129 44.2722 9.75645 44.2586 9.71996 44.2526C9.66426 44.2301 9.60321 44.2243 9.5443 44.236C7.52624 44.6508 5.5029 45.0377 3.46899 45.3699C5.77034 40.9765 8.16811 36.6347 10.5718 32.2948C10.6973 32.0696 10.5197 31.8616 10.3255 31.8325C10.2987 31.8195 10.2703 31.8101 10.241 31.8048C7.89935 31.5182 5.55242 31.2857 3.20484 31.0493C9.60175 22.0447 15.5384 12.7151 22.0099 3.75931C20.4713 10.5055 19.1882 17.3066 17.7083 24.066C17.6969 24.1208 17.7005 24.1776 17.7189 24.2305C17.7217 24.2649 17.7315 24.2983 17.7478 24.3288C17.7641 24.3592 17.7864 24.386 17.8135 24.4075C17.8406 24.4289 17.8718 24.4445 17.9051 24.4534C17.9385 24.4622 17.9733 24.4641 18.0075 24.4589C21.3007 24.1558 24.5972 23.9049 27.8944 23.6454C24.1132 28.6998 20.3524 33.7773 16.385 38.6877C16.3385 38.7181 16.3021 38.7617 16.2805 38.8129C16.2589 38.864 16.2529 38.9204 16.2635 38.975C16.265 38.9946 16.2684 39.014 16.2734 39.0331C16.2727 39.0375 16.2727 39.0419 16.2734 39.0463C16.3216 39.2081 16.4847 39.3289 16.6372 39.2827C18.9333 39.5468 21.2452 39.6842 23.5492 39.877C17.4739 46.8808 10.7098 53.242 4.44962 60.0748C6.28476 54.959 8.03604 49.8154 9.89628 44.7095Z",
                fill: "#68182B"
            }), n.createElement("path", {
                d: "M6.08336 30.0251C6.73184 29.4307 7.25617 28.6977 7.75738 27.9779C8.28567 27.2205 8.82452 26.4895 8.97112 25.559C9.00018 25.3761 8.81264 25.1569 8.62245 25.2903C7.91389 25.7855 7.5038 26.4697 7.09372 27.2179C6.62486 28.0763 6.13157 28.948 5.84828 29.8864C5.80602 30.0277 5.98035 30.1149 6.08336 30.0237V30.0251Z",
                fill: "#FBEB4C"
            }), n.createElement("path", {
                d: "M7.47128 40.4244C7.0693 40.9046 6.72182 41.428 6.43518 41.9848C6.18491 42.4708 5.81708 43.0328 5.87651 43.5987C5.87757 43.6308 5.88682 43.6621 5.90338 43.6896C5.91994 43.7171 5.94326 43.7399 5.97112 43.7559C5.99898 43.7718 6.03046 43.7804 6.06256 43.7807C6.09467 43.7811 6.12633 43.7732 6.15453 43.7579C6.69074 43.5281 6.94036 42.9159 7.17149 42.4154C7.43088 41.8354 7.64481 41.2362 7.81137 40.6232C7.86552 40.4363 7.60534 40.2633 7.47128 40.425V40.4244Z",
                fill: "#FBEB4C"
            }));
            var g = t("wcxm"),
                L = t("gDZf"),
                b = t("LSsp"),
                v = t("5An4"),
                w = t("HMsx"),
                x = t("i0d3");
            const M = o.css `
  display: flex;
  align-items: center;
  justify-content: center;
`,
                _ = o.css `
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`,
                y = o.css `
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
`,
                Z = o.default.div `
  ${M}
  cursor: pointer;
  border-radius: 50%;
  padding: 2px;
  background: ${b.default};
  border: 1px solid ${w.default.z400};
  z-index: 5;
  ${({position:C})=>"top-right"===C?y:_}
  ${({isIndependent:C})=>C&&o.css`
            opacity: 0;
            transition: 0.2 s ease opacity;
            `}
`, $ = n.forwardRef((({
                isVisible: C,
                removeClickHandler: e,
                position: t = "top-left",
                isIndependent: o
            }, a) => C && n.createElement(Z, {
                isIndependent: o,
                ref: a,
                onClick: e,
                position: t
            }, n.createElement(x.default, {
                size: 20,
                color: v.default
            }))));

            function k() {
                return k = Object.assign || function(C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }, k.apply(this, arguments)
            }
            const E = o.default.div `
  overflow: hidden;
  position: relative;
  width: max-content;
  border-radius: 0px 6px 6px 0;
`,
                P = o.default.div `
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  overflow: hidden;
  border-radius: 0px 6px 0px 0px;

  width: 100%;
  padding: 8px 15px 12px 50px;
`,
                H = (0, o.default)(g.P)
            `
  font-weight: 600;
  font-size: 15px;
  line-height: 1;
  user-select: none;
`, D = (0, o.default)(g.P)
            `
  font-weight: 800;
  font-size: 20px;
  line-height: 1;
  color: ${L.default.z700};
  user-select: none;
`, O = o.default.div `
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16px);

  overflow: hidden;
  border-radius: 0px 0px 6px 0px;

  width: 100%;

  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-weight: 500;
  font-size: 9px;
  line-height: 1.5;

  color: ${b.default};
  padding: 3px 0px 3px 50px;
  user-select: none;
`, T = o.default.div `
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0px, -50%);
`, S = o.default.div `
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
`, A = n.forwardRef((({
                value: C,
                timingsText: e
            }, t) => n.createElement(E, {
                ref: t
            }, n.createElement(P, null, n.createElement(H, null, "UP TO"), n.createElement(D, null, `${C}% off`)), n.createElement(O, null, e), n.createElement(T, null, n.createElement(m, {
                size: 30
            })))));
            F = A;
            var F, I = t("AkOy");
            const z = "image",
                j = "video",
                V = ["px", "rem", "em"],
                R = ({
                    value: C,
                    unit: e
                } = {}, t = 1) => {
                    let n = !1;
                    return (0, I.default)(V.find((C => e === C))) && (n = !0), C ? Array.isArray(C) ? C.reduce(((C, o) => {
                        let a = o;
                        return n && (a *= t), C ? `${C} ${a}${e}` : `${a}${e}`
                    }), "") : n ? `${C*t}${e}` : `${C}${e}` : e
                };
            var W = t("lFeK");
            const B = ({
                    viewerFrameWidthInPx: C,
                    backgroundType: e,
                    backgroundMeta: t,
                    isVideoMuted: o,
                    autoplay: a,
                    isStoryPaused: r
                }) => {
                    const i = (0, n.useRef)();
                    switch ((0, n.useEffect)((() => {
                        i && i.current && !a && (r ? i.current.pause() : i.current.play())
                    }), [i, r, a]), e) {
                        case z:
                            {
                                const {
                                    url: C
                                } = t || {};
                                return n.createElement(W.default, {
                                    src: C,
                                    fit: "contain",
                                    alt: "story bg"
                                })
                            }
                        case j:
                            {
                                const {
                                    url: e
                                } = t;
                                return n.createElement("video", {
                                    ref: i,
                                    muted: o,
                                    key: e,
                                    width: `${C}px`,
                                    controls: a,
                                    fit: "contain",
                                    autoPlay: a,
                                    loop: !0
                                }, n.createElement("source", {
                                    src: e
                                }), "Your browser does not support HTML5 video.")
                            }
                        default:
                            return null
                    }
                },
                N = ({
                    scale: C,
                    veiwerToCreatorRatio: e,
                    x: t,
                    y: n
                }) => `translate(${`calc(${50*(e-1)}% + ${t*e}px)`}, ${`calc(${50*(e-1)}% + ${n*e}px)`}) scale(${C*e})`,
                U = o.default.img `
  user-select: none;
  cursor: default;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,
                G = o.default.div `
  position: absolute;
  top: 0;
  left: 0;
  width: ${({width:C})=>`
            $ {
                C
            }
            px `};
  height: ${({height:C})=>`
            $ {
                C
            }
            px `};
  transform: ${({x:C,y:e})=>`
            translate($ {
                    C
                }
                px, $ {
                    e
                }
                px)
            `};
  /* width: max-content; */
`, q = ({
                viewerFrameWidthInPx: C,
                url: e,
                width: t,
                height: o,
                x: a,
                y: r
            }) => {
                const i = 16 * C / 9;
                return n.createElement(G, {
                    x: a * C / 100,
                    y: r * i / 100,
                    width: t * C / 100,
                    height: o * i / 100
                }, n.createElement(U, {
                    alt: "test",
                    src: e
                }))
            }, K = o.default.img `
  user-select: none;
  cursor: default;
`, Y = o.default.div `
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({transform:C})=>C};
  width: max-content;
`, J = ({
                url: C,
                label: e,
                transform: t
            }) => n.createElement(Y, {
                transform: t
            }, n.createElement(K, {
                alt: e,
                src: C,
                fit: "contain"
            }));
            t("AT7R");
            const X = "nocurve",
                Q = "small",
                CC = "medium",
                eC = "large",
                tC = [X, Q, CC, eC],
                nC = (C, e = 1) => C < -1 * e ? "" : C > -1 * e && C < 1 * e ? X : C < 13.5 * e ? Q : C < 16 * e ? CC : eC,
                oC = (C, e) => {
                    if ("top" !== C && "bottom" != C) return;
                    e.classList.remove(`${C}-curve`);
                    const t = "bottom" === C ? "b" : "t";
                    tC.forEach((C => {
                        e.classList.remove(`${t}${C}`)
                    }))
                },
                aC = (C, e, t, n = 1) => {
                    const o = C ? .children ? ? [];
                    if (t < o.length - 1) {
                        const C = e.getBoundingClientRect().width,
                            a = o[t + 1].getBoundingClientRect().width,
                            r = nC(a - C, n);
                        oC("bottom", e), r ? (e.classList.add("bottom-curve"), e.classList.add(`b${r}`), e.textButificationData = {
                            bottomCurve: {
                                isEnabled: !0,
                                curveSize: r
                            }
                        }) : e.textButificationData = {
                            bottomCurve: {
                                isEnabled: !1,
                                curveSize: ""
                            }
                        }
                    } else oC("bottom", e), e.textButificationData = {
                        bottomCurve: {
                            isEnabled: !1,
                            curveSize: ""
                        }
                    };
                    if (t > 0) {
                        const C = e.getBoundingClientRect().width,
                            a = o[t - 1].getBoundingClientRect().width,
                            r = nC(a - C, n);
                        oC("top", e), r ? (e.classList.add("top-curve"), e.classList.add(`t${r}`), e.textButificationData = {
                            topCurve: {
                                isEnabled: !0,
                                curveSize: r
                            }
                        }) : e.textButificationData = {
                            topCurve: {
                                isEnabled: !1,
                                curveSize: ""
                            }
                        }
                    } else oC("top", e), e.textButificationData = {
                        topCurve: {
                            isEnabled: !1,
                            curveSize: ""
                        }
                    }
                },
                rC = (o.default.div `
  top: 0;
  left: 0;
  position: absolute;
  width: max-content;
  cursor: ${({isDragging:C})=>C?"grabbing":"default"};
  outline-offset: -0px;
  border-radius: 4px;
`, o.default.div `
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;

  ${({isSelected:C})=>C&&o.css`
                    outline: 2 px dashed black; outline - offset: 1 px; border - radius: 4 px;
                    `}
`, o.css `
  content: '';
  z-index: 1;
  background: transparent;
`),
                iC = o.css `
  width: 4px;
  height: 4px;
`,
                sC = o.css `
  width: 8px;
  height: 8px;
`,
                cC = o.css `
  width: 16px;
  height: 16px;
`,
                lC = o.css `
  ${iC}
  transform: translate(-4px, 0);
  box-shadow: 1px 0px 0 0 ${({bg:C})=>C};
`,
                dC = o.css `
  ${sC}
  transform: translate(-8px, 0);
  box-shadow: 4px 0px 0 0 ${({bg:C})=>C};
`,
                uC = o.css `
  ${cC}
  transform: translate(-16px, 0);
  box-shadow: 8px 0px 0 0 ${({bg:C})=>C};
`,
                pC = o.css `
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-right-radius: 50%;
`,
                hC = o.css `
  ${iC}
  transform: translate(4px, 0);
  box-shadow: -1px 0px 0 0 ${({bg:C})=>C};
`,
                fC = o.css `
  ${sC}
  transform: translate(8px, 0);
  box-shadow: -4px 0px 0 0 ${({bg:C})=>C};
`,
                mC = o.css `
  ${cC}
  transform: translate(16px, 0);
  box-shadow: -8px 0px 0 0 ${({bg:C})=>C};
`,
                gC = o.css `
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-left-radius: 50%;
`,
                LC = o.css `
  ${iC}
  transform: translate(-4px, 0);
  box-shadow: 1px 0px 0 0 ${({bg:C})=>C};
`,
                bC = o.css `
  ${sC}
  transform: translate(-8px, 0);
  box-shadow: 4px 0px 0 0 ${({bg:C})=>C};
`,
                vC = o.css `
  ${cC}
  transform: translate(-16px, 0);
  box-shadow: 8px 0px 0 0 ${({bg:C})=>C};
`,
                wC = o.css `
  position: absolute;
  left: 0;
  top: 0;
  border-top-right-radius: 50%;
`,
                xC = o.css `
  ${iC}
  transform: translate(4px, 0);
  box-shadow: -1px 0px 0 0 ${({bg:C})=>C};
`,
                MC = o.css `
  ${sC}
  transform: translate(8px, 0);
  box-shadow: -4px 0px 0 0 ${({bg:C})=>C};
`,
                _C = o.css `
  ${cC}
  transform: translate(16px, 0);
  box-shadow: -8px 0px 0 0 ${({bg:C})=>C};
`,
                yC = o.css `
  position: absolute;
  right: 0;
  top: 0;
  border-top-left-radius: 50%;
`,
                ZC = o.css `
  & .bottom-curve {
    border-radius: 4px 4px 0 0;
    &::after {
      ${rC}
      ${gC}
    }
    &::before {
      ${rC}
      ${pC}
    }
  }
  & .bottom-curve.bsmall::after {
    ${hC}
  }
  & .bottom-curve.bmedium::after {
    ${fC}
  }
  & .bottom-curve.blarge::after {
    ${mC}
  }
  & .bottom-curve.bsmall::before {
    ${lC}
  }
  & .bottom-curve.bmedium::before {
    ${dC}
  }
  & .bottom-curve.blarge::before {
    ${uC}
  }

  & > div > div {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  & > div.top-curve {
    border-radius: 0px 0px 4px 4px;
  }

  & > div.top-curve.bottom-curve {
    border-radius: 0;
  }

  & > div.top-curve > div {
    &::after {
      ${rC}
      ${wC}
    }
    &::before {
      ${rC}
      ${yC}
    }
  }

  & > div.top-curve.tsmall > div::after {
    ${LC}
  }
  & > div.top-curve.tmedium > div::after {
    ${bC}
  }
  & > div.top-curve.tlarge > div::after {
    ${vC}
  }
  & > div.top-curve.tsmall > div::before {
    ${xC}
  }
  & > div.top-curve.tmedium > div::before {
    ${MC}
  }
  & > div.top-curve.tlarge > div::before {
    ${_C}
  }
`,
                $C = o.css `
  background: ${({bg:C})=>C||w.default.z800};
  color: ${({color:C})=>C||b.default};
  width: max-content;
  border-radius: 4px;
  text-align: center;
  padding: 5px 10px;
`,
                kC = o.css `
  & > div {
    position: relative;
    background: ${({bg:C})=>C||w.default.z800};
    color: ${({color:C})=>C||b.default};
    width: max-content;
    border-radius: 4px;
    text-align: center;
    padding: 5px 10px;
  }
`,
                EC = o.css `
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
`,
                PC = o.css `
  ${EC}
  & > div {
    ${EC}
  }
  & > div > div {
    ${EC}
  }
`,
                HC = (o.default.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: max-content;

  position: absolute;
  top: 0;
  left: 0;

  ${PC}

  ${({isMultiLineText:C})=>C?kC:$C}

  ${ZC}
`, o.default.div `
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  transform: ${({transform:C})=>C};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${ZC}
`),
                DC = o.default.div `
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;
  background: ${({bg:C})=>C};
  color: ${({color:C})=>C};
  font-size: ${({fontSize:C})=>C};
  line-height: ${({lineHeight:C})=>C};
  font-weight: ${({fontWeight:C})=>C};
  border-radius: ${({borderRadius:C})=>C};
  padding: ${({padding:C})=>C};
  width: max-content;
  min-height: 31px; // need to solve for this later
`;

            function OC() {
                return OC = Object.assign || function(C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }, OC.apply(this, arguments)
            }
            const TC = ({
                    children: C,
                    transform: e,
                    width: t,
                    height: o,
                    bg: a,
                    color: r,
                    scaleFactor: i,
                    ...s
                }) => {
                    const c = (0, n.useRef)();
                    if ("string" != typeof C) return null;
                    const l = C.split("\n");
                    return l.length >= 2 && l[l.length - 1] == l[l.length - 2] && "" == l[l.length - 1] && l.pop(), Array.isArray(l) && l.length ? ((0, n.useEffect)((() => {
                        c && c.current && c.current.children && [].forEach.call(c.current.children, ((C, e) => {
                            aC(c.current, C, e, i)
                        }))
                    }), [c, C, e, t, o, a, r, i]), n.createElement(HC, {
                        ref: c,
                        transform: e,
                        bg: a,
                        color: r
                    }, l.map(((C, e) => n.createElement(DC, OC({
                        key: e
                    }, s, {
                        bg: a,
                        color: r
                    }), C, 0 !== e && n.createElement("div", null)))))) : null
                },
                SC = o.default.div `
  position: absolute;
  top: 0;
  left: 0;
  border: 0;
  text-align: center;
  background: ${({bg:C})=>C};
  color: ${({color:C})=>C};
  font-size: ${({fontSize:C})=>C};
  line-height: ${({lineHeight:C})=>C};
  font-weight: ${({fontWeight:C})=>C};
  border-radius: ${({borderRadius:C})=>C};
  padding: ${({padding:C})=>C};
  width: ${({width:C})=>C};
  height: ${({height:C})=>C};
  transform: ${({transform:C})=>C};
`,
                AC = C => n.createElement(SC, C),
                FC = {
                    1: AC,
                    2: TC
                };
            var IC = t("OdE/"),
                zC = t("0hh/");

            function jC() {
                return jC = Object.assign || function(C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }, jC.apply(this, arguments)
            }
            const VC = o.default.div `
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,
                RC = ({
                    isMuted: C,
                    onMuteClick: e,
                    ...t
                }) => n.createElement(VC, jC({
                    onClick: e
                }, t), C ? n.createElement(zC.default, {
                    color: i.white,
                    size: 22
                }) : n.createElement(IC.default, {
                    color: i.white,
                    size: 22
                })),
                WC = o.css `
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
`,
                BC = o.css `
  ${WC}
  width: 300px;
  height: calc((300px * 16) / 9);
  border-radius: 8px;
  z-index: 1;
  overflow: ${({isSelected:C})=>C?"visible":"hidden"};
`,
                NC = (o.default.div `
  ${BC}
  background: ${({background:C})=>C||"#ffffff"};
`, o.default.div `
  ${BC}
  box-shadow: 0 0 1px 100vw rgba(0, 0, 0, 0.8);
  ${({isImageUploaded:C})=>C?o.css`
                    border: 2 px dashed white; pointer - events: none;
                    `:o.css`
                    cursor: pointer; display: flex; align - items: center; justify - content: center; text - align: center; flex - direction: column;
                    `}
`, o.default.div `
  ${BC}
  border: 2px solid rgba(0, 0, 0, 0.8);
  pointer-events: none;
`, o.default.div `
  width: 100%;
  height: 100%;
  ${WC}
  overflow: hidden;
`, (0, o.default)(g.P)
                    `
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${w.default.z600};
  max-width: 80%;
  z-index: 1;
  margin-top: 10px;
`, (0, o.default)(RC)
                    `
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(calc(50% - 20px), calc(50% - 20px));
`);

            function UC() {
                return UC = Object.assign || function(C) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n])
                    }
                    return C
                }, UC.apply(this, arguments)
            }
            const GC = ({
                    viewerFrameWidthInPx: C,
                    state: e,
                    stickerMeta: t = {},
                    autoplay: o = !0,
                    videoMuted: a = !0,
                    hideAudioControlButton: r = !1
                }) => {
                    const i = (C => {
                            const {
                                videoBg: e,
                                imageBg: t,
                                ...n
                            } = C;
                            let o = {
                                backgroundType: ""
                            };
                            return !(0, I.default)(t) && t ? .metaData ? .url ? o = { ...t,
                                backgroundType: z
                            } : !(0, I.default)(e) && e ? .metaData ? .url && (o = { ...e,
                                backgroundType: j
                            }), {
                                background: o,
                                elements: n
                            }
                        })(e),
                        s = i.background,
                        c = i.elements,
                        [l, m] = (0, n.useState)(a),
                        [g, L] = (0, n.useState)(!0),
                        b = (0, n.useRef)();
                    return (0, n.useEffect)((() => {
                        m(a)
                    }), [a]), n.createElement(d, {
                        ref: b,
                        previewWidth: C
                    }, n.createElement(B, {
                        viewerFrameWidthInPx: C,
                        backgroundType: s ? .backgroundType ? ? "",
                        backgroundMeta: { ...s ? .metaData ? ? {}
                        },
                        isVideoMuted: l,
                        autoplay: o,
                        isStoryPaused: g
                    }), n.createElement(u, null, Object.keys(c).map((e => {
                        const t = c[e] || {};
                        switch (t ? .elementType ? ? "") {
                            case f.B3:
                                {
                                    const o = c[e] ? .metaData ? .styleId ? ? "",
                                        a = c[e] ? .metaData ? .text ? .value ? ? "",
                                        r = FC[o] ? ? AC;
                                    return n.createElement(r, UC({
                                        key: e
                                    }, ((C, e) => {
                                        const {
                                            creatorFrameWidth: t,
                                            bg: n,
                                            color: o,
                                            fontSize: a,
                                            lineHeight: r,
                                            fontWeight: i,
                                            borderRadius: s,
                                            padding: c,
                                            width: l = {},
                                            height: d = {}
                                        } = C ? .metaData ? ? {}, {
                                            x: u,
                                            y: p,
                                            scale: h
                                        } = C ? .transformData || {}, f = (e ? .viewerFrameWidthInPx ? ? 300) / t, m = (({
                                            x: C,
                                            y: e,
                                            scale: t,
                                            veiwerToCreatorRatio: n
                                        }) => `translate(calc(${50*(n-1)}% + ${C*n}px), calc(${50*(n-1)}% + ${e*n}px)) scale(${t*n})`)({
                                            width: l,
                                            height: d,
                                            x: u,
                                            y: p,
                                            scale: h,
                                            veiwerToCreatorRatio: f,
                                            creatorFrameWidth: t,
                                            aspectRatio: 9 / 16
                                        });
                                        return {
                                            bg: n,
                                            color: o,
                                            fontWeight: i,
                                            fontSize: R(a),
                                            lineHeight: R(r),
                                            borderRadius: R(s),
                                            padding: R(c),
                                            width: R(l, 1),
                                            height: R(d),
                                            transform: m,
                                            scaleFactor: f * h
                                        }
                                    })(t, {
                                        viewerFrameWidthInPx: C
                                    })), a)
                                }
                            case f.d4:
                                return n.createElement(J, UC({
                                    key: e
                                }, ((C, e) => {
                                    const {
                                        creatorFrameWidth: t,
                                        url: n,
                                        label: o,
                                        naturalWidth: a,
                                        naturalHeight: r
                                    } = C ? .metaData ? ? {}, {
                                        x: i,
                                        y: s,
                                        scale: c
                                    } = C ? .transformData || {};
                                    return {
                                        transform: N({
                                            x: i,
                                            y: s,
                                            scale: c,
                                            veiwerToCreatorRatio: (e ? .viewerFrameWidthInPx ? ? 300) / t
                                        }),
                                        url: n,
                                        label: o,
                                        width: a,
                                        height: r
                                    }
                                })(t, {
                                    viewerFrameWidthInPx: C
                                })));
                            case f.q:
                                return n.createElement(p, UC({
                                    key: e
                                }, ((C, e) => {
                                    const {
                                        creatorFrameWidth: t
                                    } = C ? .metaData ? ? {}, {
                                        x: n,
                                        y: o,
                                        scale: a
                                    } = C ? .transformData || {};
                                    return {
                                        transform: N({
                                            x: n,
                                            y: o,
                                            scale: a,
                                            veiwerToCreatorRatio: (e ? .viewerFrameWidthInPx ? ? 300) / t
                                        })
                                    }
                                })(t, {
                                    viewerFrameWidthInPx: C
                                })), n.createElement(A, {
                                    value: c[e] ? .metaData ? .value || "x",
                                    timingsText: c[e] ? .metaData ? .value || "all day"
                                }));
                            default:
                                return null
                        }
                    })), Object.keys(t).map((e => n.createElement(q, UC({
                        key: e
                    }, t[e], {
                        storyViewerRef: b,
                        viewerFrameWidthInPx: C
                    })))), (s ? .backgroundType ? ? "") === j && !r && n.createElement(NC, {
                        isMuted: l,
                        onMuteClick: () => {
                            m((C => !C))
                        }
                    }), (s ? .backgroundType ? ? "") === j && !o && n.createElement(h, {
                        isPaused: g,
                        isAudioControlHidden: r,
                        onPlayPauseToggle: () => {
                            L((C => !C))
                        }
                    })))
                },
                qC = GC
        }
    }
]);