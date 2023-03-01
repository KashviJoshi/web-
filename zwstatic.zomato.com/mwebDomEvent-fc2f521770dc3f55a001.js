(() => {
    "use strict";
    var e = "csfs",
        t = "mweb_dom_painted",
        n = function() {
            return !! function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                if ("undefined" == typeof document) return "";
                var t = decodeURIComponent(document.cookie),
                    n = new RegExp("".concat(e, "=\\w+"), "g").exec(t);
                return n ? n[0].substring(e.length + 1) : ""
            }(e)
        },
        o = function() {
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                e && (document.cookie = "".concat(e, "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/"))
            }(e)
        },
        r = function() {
            var e, t, n, o, r, i, u, a = null !== (e = window.__PRELOADED_STATE__) && void 0 !== e ? e : {},
                c = null !== (t = null == a || null === (n = a.pages) || void 0 === n ? void 0 : n.current) && void 0 !== t ? t : {},
                s = null !== (o = null == a ? void 0 : a.pageConfig) && void 0 !== o ? o : {},
                d = c.isMobile,
                l = void 0 === d ? 0 : d,
                f = c.name,
                w = void 0 === f ? "" : f,
                v = c.subType,
                p = void 0 === v ? "" : v,
                b = s.openAppModalV3,
                g = void 0 === b ? {} : b,
                h = s.cacheMeta,
                O = void 0 === h ? {} : h,
                y = g.deeplinkUrl,
                m = void 0 === y ? "" : y;
            return {
                isMobile: l,
                showOpenAppModalV3: null !== (r = null == g ? void 0 : g.showOnPageLoad) && void 0 !== r && r,
                deeplink: m,
                pageName: w,
                subType: p,
                isCacheable: O.cacheable ? "true" : "",
                cacheTrackingIdentifier: null !== (i = null == O || null === (u = O.trackingData) || void 0 === u ? void 0 : u.identifier) && void 0 !== i ? i : ""
            }
        };

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach((function(t) {
                i(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    var c = function(e, t) {
            window.requestQueue && window.requestQueue.push({
                reqClient: e,
                reqClientData: t
            })
        },
        s = function(e, t) {
            if (new Date - window.csrf_set_time >= 144e4 || !window.csrft)
                if (window.csrfRequested) c(e, t);
                else {
                    window.csrfRequested = !0, c(e, t);
                    var n = new XMLHttpRequest;
                    n.open("GET", "/webroutes/auth/csrf"), n.send(), n.onreadystatechange = function() {
                        4 === n.readyState && (window.csrfRequested = !1, 200 === n.status && (! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = {};
                            try {
                                t = JSON.parse(e)
                            } catch (e) {}
                            window.csrft = t.csrf || "", t.csrf && (window.csrf_set_time = (new Date).valueOf())
                        }(n.responseText), window.requestQueue && (window.requestQueue.forEach((function(e) {
                            var t = e.reqClient,
                                n = e.reqClientData;
                            t && n && (t.setRequestHeader("x-zomato-csrft", window.csrft), t.send(n))
                        })), window.requestQueue = [])))
                    }
                }
            else e.setRequestHeader("x-zomato-csrft", window.csrft), e.send(t)
        },
        d = function() {
            "csrfRequested" in window || (window.csrfRequested = !1), "requestQueue" in window || (window.requestQueue = [])
        },
        l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            d();
            var t = new XMLHttpRequest,
                n = JSON.stringify(e);
            t.open("POST", "/webroutes/jumbo/sendJEvent"), t.setRequestHeader("Content-type", "application/json; charset=utf-8"), s(t, n)
        },
        f = r(),
        w = f.pageName,
        v = void 0 === w ? "" : w,
        p = f.subType,
        b = {
            var1: v,
            var2: void 0 === p ? "" : p
        },
        g = r(),
        h = g.pageName,
        O = void 0 === h ? "" : h,
        y = g.subType,
        m = void 0 === y ? "" : y,
        q = g.isCacheable,
        j = void 0 === q ? "" : q,
        T = g.cacheTrackingIdentifier,
        R = void 0 === T ? "" : T,
        P = g.showOpenAppModalV3,
        D = void 0 !== P && P;
    setTimeout((function() {
        ! function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = Object.keys(t).length ? t : b;
            l(a({
                ename: e
            }, n))
        }(t, {
            var1: O,
            var2: m,
            var3: j,
            var4: n(),
            var5: R
        }), D || o()
    }), 0)
})();