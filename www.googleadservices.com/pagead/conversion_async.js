(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var aa;

    function ba(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        l = {},
        ha = {};

    function r(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function v(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in l ? f = l : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(l, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    v("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.g = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.g
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    v("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, l.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ia(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ia(a) {
        a = {
            next: a
        };
        a[r(l.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }
    var ja = fa && "function" == typeof r(Object, "assign") ? r(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    v("Object.assign", function(a) {
        return a || ja
    }, "es6");

    function ka(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    v("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ka(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    v("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    v("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");

    function la(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[r(l.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    v("Array.prototype.values", function(a) {
        return a ? a : function() {
            return la(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    v("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    v("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    v("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ka(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    v("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return la(this, function(b) {
                return b
            })
        }
    }, "es6");
    var w = this || self;

    function ma(a) {
        return a
    };

    function z(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    };

    function na(a, b) {
        this.i = a === oa && b || "";
        this.g = pa
    }
    var pa = {},
        oa = {};
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var qa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        ra = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };
    var sa;

    function va(a, b) {
        this.g = b === wa ? a : ""
    }
    va.prototype.toString = function() {
        return this.g + ""
    };

    function xa(a) {
        return a instanceof va && a.constructor === va ? a.g : "type_error:TrustedResourceUrl"
    }
    var ya = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        wa = {};

    function za(a) {
        if (void 0 === sa) {
            var b = null;
            var c = w.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: ma,
                        createScript: ma,
                        createScriptURL: ma
                    })
                } catch (d) {
                    w.console && w.console.error(d.message)
                }
                sa = b
            } else sa = b
        }
        a = (b = sa) ? b.createScriptURL(a) : a;
        return new va(a, wa)
    }

    function Aa(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function Ba(a) {
        var b;
        a: {
            if (b = w.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function Ca(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Da(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ea(a) {
        Ea[" "](a);
        return a
    }
    Ea[" "] = function() {};
    var Fa = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ga(a) {
        var b = a.match(Fa);
        a = b[5];
        var c = b[6];
        b = b[7];
        var d = "";
        a && (d += a);
        c && (d += "?" + c);
        b && (d += "#" + b);
        return d
    }

    function Ha(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var Ia = /#|$/;

    function A(a, b) {
        var c = a.search(Ia),
            d = Ha(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    var Ja = /[?&]($|#)/;

    function C(a, b, c) {
        for (var d = a.search(Ia), e = 0, f, g = []; 0 <= (f = Ha(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.slice(e));
        a = g.join("").replace(Ja, "$1");
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        (b += c) ? (c = a.indexOf("#"), 0 > c && (c = a.length), d = a.indexOf("?"), 0 > d || d > c ? (d = c, e = "") : e = a.substring(d + 1, c), c = [a.slice(0, d), e, a.slice(c)], a = c[1], c[1] = b ? a ? a + "&" + b : b : a, b = c[0] + (c[1] ? "?" + c[1] : "") + c[2]) : b = a;
        return b
    };

    function Ka() {
        if (!l.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            l.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function La(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var Na = Da(function() {
            return ra(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ma) || 1E-4 > Math.random()
        }),
        Oa = Da(function() {
            return Ba("MSIE")
        });

    function Ma(a) {
        return Ba(a)
    }

    function D(a) {
        return /^true$/.test(a)
    }

    function Pa(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Qa = z("0.20"),
        Ra = z("0.002"),
        Sa = z("0.00"),
        Ta = z("0.00"),
        Ua = z("0.00"),
        Va = D("true"),
        Wa = D("true"),
        Xa = D("true"),
        Ya = D("true");
    var Za = null;

    function $a() {
        if (null === Za) {
            Za = "";
            try {
                var a = "";
                try {
                    a = w.top.location.hash
                } catch (c) {
                    a = w.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Za = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Za
    }

    function F(a, b, c) {
        var d = G;
        if (c ? d.g.hasOwnProperty(c) && "" == d.g[c] : 1) {
            var e;
            e = (e = $a()) ? (e = e.match(new RegExp("\\b(" + a.join("|") + ")\\b"))) ? e[0] : null : null;
            if (e) a = e;
            else a: {
                if (!Oa() && !Na() && (e = Math.random(), e < b)) {
                    e = Ka();
                    a = a[Math.floor(e * a.length)];
                    break a
                }
                a = null
            }
            a && "" != a && (c ? d.g.hasOwnProperty(c) && (d.g[c] = a) : d.i[a] = !0)
        }
    }

    function H(a) {
        var b = G;
        return b.g.hasOwnProperty(a) ? b.g[a] : ""
    }

    function ab() {
        var a = G,
            b = [];
        La(a.i, function(c, d) {
            b.push(d)
        });
        La(a.g, function(c) {
            "" != c && b.push(c)
        });
        return b
    };
    var bb = {
            K: 2,
            S: 13,
            R: 14,
            N: 16,
            M: 17,
            L: 18,
            J: 19,
            T: 20
        },
        G = null;

    function cb() {
        return !!G && "592230571" == H(16)
    };

    function db(a) {
        var b = void 0 === b ? w : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };

    function K(a) {
        var b = "u";
        if (a.u && a.hasOwnProperty(b)) return a.u;
        b = new a;
        return a.u = b
    };
    var eb = {
        O: 0,
        G: 1,
        P: 2,
        I: 3,
        H: 4
    };

    function fb() {
        this.g = {}
    }

    function gb(a, b, c) {
        "number" === typeof c && 0 < c && (a.g[b] = Math.round(c))
    }

    function hb(a) {
        var b = K(fb);
        var c = void 0 === c ? w : c;
        c = c.performance;
        gb(b, a, c && c.now ? c.now() : null)
    }

    function ib() {
        function a() {
            return gb(b, 0, db("loadEventStart") - db("navigationStart"))
        }
        var b = K(fb);
        0 != db("loadEventStart") ? a() : window.addEventListener("load", a)
    }

    function jb(a, b) {
        b.google_tag_manager && b.google_tag_manager._li && (b = b.google_tag_manager._li, gb(a, 4, b.cbt), gb(a, 3, b.cst))
    }

    function kb() {
        var a = K(fb);
        return r(Object, "values").call(Object, eb).map(function(b) {
            return [b, a.g[b] || 0]
        })
    };
    var lb = D("false");

    function mb(a) {
        return "function" === typeof a
    }
    var nb = Array.isArray;

    function ob(a, b) {
        if (a && nb(a))
            for (var c = 0; c < a.length; c++)
                if (a[c] && b(a[c])) return a[c]
    }

    function pb(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }

    function qb() {
        return new Date(Date.now())
    };
    var L = window,
        M = document;

    function rb(a, b) {
        b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
            a.readyState in {
                loaded: 1,
                complete: 1
            } && (a.onreadystatechange = null, b())
        })
    }
    var sb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        tb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function ub(a, b, c) {
        b && pb(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }

    function vb(a, b, c) {
        var d = M.createElement("script");
        ub(d, void 0, sb);
        d.type = "text/javascript";
        d.async = !0;
        a = za(a);
        d.src = xa(a);
        Ca(d);
        rb(d, b);
        c ? c.appendChild(d) : (b = M.getElementsByTagName("script")[0] || M.body || M.head, b.parentNode.insertBefore(d, b))
    }

    function wb(a, b, c, d, e, f) {
        f = void 0 === f ? !0 : f;
        var g = e;
        e = !1;
        g || (g = M.createElement("iframe"), e = !0);
        ub(g, c, tb);
        d && pb(d, function(h, k) {
            g.dataset[h] = k
        });
        f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
        e && (c = M.body && M.body.lastChild || M.body || M.head, c.parentNode.insertBefore(g, c));
        rb(g, b);
        void 0 !== a && (g.src = a)
    };
    var xb = {};

    function N(a) {
        xb.TAGGING = xb.TAGGING || [];
        xb.TAGGING[a] = !0
    };

    function yb() {
        var a = void 0 === a ? document : a;
        var b;
        return !(null == (b = a.featurePolicy) || !(aa = b.allowedFeatures(), r(aa, "includes")).call(aa, "attribution-reporting"))
    };

    function zb(a, b, c) {
        a = Ab(a, !0);
        if (a[b]) return !1;
        a[b] = [];
        a[b][0] = c;
        return !0
    }

    function Ab(a, b) {
        var c = a.GooglebQhCsO;
        c || (c = {}, b && (a.GooglebQhCsO = c));
        return c
    };
    var Bb = {},
        Cb = null;

    function Db(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 4;
        void 0 === a && (a = 0);
        if (!Cb)
            for (Cb = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Bb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Cb[h] && (Cb[h] = g)
                }
            }
        a = Bb[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                m = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | m >> 4];
            m = a[(m & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = g + k + m + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };

    function Eb(a, b, c, d) {
        var e = A(c, "fmt");
        if (d) {
            var f = A(c, "random"),
                g = A(c, "label") || "";
            if (!f) return !1;
            f = Db(decodeURIComponent(g.replace(/\+/g, " ")) + ":" + decodeURIComponent(f.replace(/\+/g, " ")));
            if (!zb(a, f, d)) return !1
        }
        e && 4 != e && (c = C(c, "rfmt", e));
        c = C(c, "fmt", 4);
        vb(c, function() {
            a.google_noFurtherRedirects && d && d.call && (a.google_noFurtherRedirects = null, d())
        }, b.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Fb = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);

    function Gb() {
        var a = {};
        this.g = function() {
            var b = Fb.g,
                c = Fb.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.i = function(b) {
            a[Fb.g] = b
        }
    };
    var O = [];

    function P() {
        var a = {};
        var b = L.google_tag_data;
        L.google_tag_data = void 0 === b ? a : b;
        a = L.google_tag_data;
        a.ics || (a.ics = {
            entries: {},
            set: Hb,
            update: Ib,
            addListener: Jb,
            notifyListeners: Kb,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function Hb(a, b, c, d, e, f) {
        var g = P();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries;
            g = h[a] || {};
            var k = g.region;
            c = c && "string" === typeof c ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || c === e || (c === d ? k !== e : !c && !k)) {
                e = !!(f && 0 < f && void 0 === g.update);
                var m = {
                    region: c,
                    initial: "granted" === b,
                    update: g.update,
                    quiet: e
                };
                if ("" !== d || !1 !== g.initial) h[a] = m;
                e && L.setTimeout(function() {
                    h[a] === m && m.quiet && (m.quiet = !1, Lb(a),
                        Kb(), N(2))
                }, f)
            }
        }
    }

    function Ib(a, b) {
        var c = P();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = Mb(c, a),
                e = c.entries;
            e = e[a] = e[a] || {};
            e.update = "granted" === b;
            b = Mb(c, a);
            e.quiet ? (e.quiet = !1, Lb(a)) : b !== d && Lb(a)
        }
    }

    function Jb(a, b) {
        O.push({
            s: a,
            C: b
        })
    }

    function Lb(a) {
        for (var b = 0; b < O.length; ++b) {
            var c = O[b];
            nb(c.s) && -1 !== c.s.indexOf(a) && (c.B = !0)
        }
    }

    function Kb(a, b) {
        for (var c = 0; c < O.length; ++c) {
            var d = O[c];
            if (d.B) {
                d.B = !1;
                try {
                    d.C({
                        U: a,
                        V: b
                    })
                } catch (e) {}
            }
        }
    }

    function Mb(a, b) {
        a = a.entries[b] || {};
        return void 0 !== a.update ? a.update : a.initial
    }

    function Nb(a) {
        var b = P();
        b.accessedAny = !0;
        return Mb(b, a)
    }

    function Ob(a) {
        var b = P();
        b.accessedAny = !0;
        return !(b.entries[a] || {}).quiet
    }

    function Pb() {
        if (!K(Gb).g()) return !1;
        var a = P();
        a.accessedAny = !0;
        return a.active
    }

    function Qb(a, b) {
        P().addListener(a, b)
    }

    function Rb(a) {
        function b() {
            for (var e = 0; e < c.length; e++)
                if (!Ob(c[e])) return !0;
            return !1
        }
        var c = ["ad_storage"];
        if (b()) {
            var d = !1;
            Qb(c, function(e) {
                d || b() || (d = !0, a(e))
            })
        } else a({})
    }

    function Sb(a) {
        function b() {
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f];
                !1 === Nb(g) || d[g] || (e.push(g), d[g] = !0)
            }
            return e
        }
        var c = ["ad_storage"],
            d = {};
        b().length !== c.length && Qb(c, function(e) {
            var f = b();
            0 < f.length && (e.s = f, a(e))
        })
    };

    function Tb(a, b, c, d) {
        if (Ub(d)) {
            d = [];
            b = String(b || Vb()).split(";");
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("="),
                    g = f[0].replace(/^\s*|\s*$/g, "");
                g && g == a && ((f = f.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && c && (f = decodeURIComponent(f)), d.push(f))
            }
            a = d
        } else a = [];
        return a
    }

    function Wb(a, b, c, d) {
        var e = Vb(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        a = Vb();
        return e != a || void 0 != c && 0 <= Tb(b, a, !1, d).indexOf(c)
    }

    function Xb(a, b, c) {
        function d(p, q, t) {
            if (null == t) return delete g[q], p;
            g[q] = t;
            return p + "; " + q + "=" + t
        }

        function e(p, q) {
            if (null == q) return delete g[q], p;
            g[q] = !0;
            return p + "; " + q
        }
        if (Ub(c.j)) {
            if (void 0 == b) var f = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else c.encode && (b = encodeURIComponent(b)), b = Zb(b), f = a + "=" + b;
            var g = {};
            f = d(f, "path", c.path);
            if (c.expires instanceof Date) var h = c.expires.toUTCString();
            else null != c.expires && (h = c.expires);
            f = d(f, "expires", h);
            f = d(f, "max-age", c.W);
            f = d(f, "samesite", c.X);
            c.Y &&
                (f = e(f, "secure"));
            if ((h = c.domain) && "auto" === h.toLowerCase()) {
                h = $b();
                for (var k = 0; k < h.length; ++k) {
                    var m = "none" !== h[k] ? h[k] : void 0,
                        n = d(f, "domain", m);
                    n = e(n, c.flags);
                    if (!ac(m, c.path) && Wb(n, a, b, c.j)) break
                }
            } else h && "none" !== h.toLowerCase() && (f = d(f, "domain", h)), f = e(f, c.flags), ac(h, c.path) || Wb(f, a, b, c.j)
        }
    }

    function bc(a, b, c) {
        null == c.path && (c.path = "/");
        c.domain || (c.domain = "auto");
        Xb(a, b, c)
    }

    function Zb(a) {
        a && 1200 < a.length && (a = a.substring(0, 1200));
        return a
    }
    var cc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        dc = /(^|\.)doubleclick\.net$/i;

    function ac(a, b) {
        return dc.test(window.document.location.hostname) || "/" === b && cc.test(a)
    }

    function Vb() {
        return "null" !== window.origin ? window.document.cookie : ""
    }

    function $b() {
        var a = [],
            b = window.document.location.hostname.split(".");
        if (4 === b.length) {
            var c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"]
        }
        for (c = b.length - 2; 0 <= c; c--) a.push(b.slice(c).join("."));
        b = window.document.location.hostname;
        dc.test(b) || cc.test(b) || a.push("none");
        return a
    }

    function Ub(a) {
        if (!K(Gb).g() || !a || !Pb()) return !0;
        if (!Ob(a)) return !1;
        a = Nb(a);
        return null == a ? !0 : !!a
    };

    function ec(a, b) {
        var c, d = Number(null != a.A ? a.A : void 0);
        0 !== d && (c = new Date((b || qb().getTime()) + 1E3 * (d || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !0,
            expires: c,
            j: void 0
        }
    };

    function fc(a) {
        var b = [],
            c = M.cookie.split(";");
        a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push({
                v: e[1],
                value: e[2],
                timestamp: Number(e[2].split(".")[1]) || 0
            })
        }
        b.sort(function(f, g) {
            return g.timestamp - f.timestamp
        });
        return b
    }

    function Q(a, b) {
        a = fc(a);
        var c = {};
        if (!a || !a.length) return c;
        for (var d = 0; d < a.length; d++) {
            var e = a[d].value.split(".");
            if (!("1" !== e[0] || b && 3 > e.length || !b && 3 !== e.length) && Number(e[1])) {
                c[a[d].v] || (c[a[d].v] = []);
                var f = {
                    version: e[0],
                    timestamp: 1E3 * Number(e[1]),
                    h: e[2]
                };
                b && 3 < e.length && (f.labels = e.slice(3));
                c[a[d].v].push(f)
            }
        }
        return c
    };
    var gc = /:[0-9]+$/;

    function hc(a, b) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            if (decodeURIComponent(d[0]).replace(/\+/g, " ") === b) return decodeURIComponent(d.slice(1).join("=")).replace(/\+/g, " ")
        }
    }

    function ic(a, b) {
        var c = "query",
            d = jc(a.protocol);
        c && (c = String(c).toLowerCase());
        switch (c) {
            case "url_no_fragment":
                b = "";
                a && a.href && (b = a.href.indexOf("#"), b = 0 > b ? a.href : a.href.substr(0, b));
                a = b;
                break;
            case "protocol":
                a = d;
                break;
            case "host":
                a = a.hostname.replace(gc, "").toLowerCase();
                break;
            case "port":
                a = String(Number(a.port) || ("http" === d ? 80 : "https" === d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || N(1);
                a = "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length -
                    1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                b && (a = hc(a, b));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
        }
        return a
    }

    function jc(a) {
        return a ? a.replace(":", "").toLowerCase() : ""
    };
    var kc = {};
    var lc = /^\w+$/,
        mc = /^[\w-]+$/,
        nc = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function R() {
        if (!K(Gb).g() || !Pb()) return !0;
        var a = Nb("ad_storage");
        return null == a ? !0 : !!a
    }

    function oc(a, b) {
        Ob("ad_storage") ? R() ? a() : Sb(a) : b ? N(3) : Rb(function() {
            oc(a, !0)
        })
    }

    function pc(a) {
        return S(a).map(function(b) {
            return b.h
        })
    }

    function S(a) {
        var b = [];
        if ("null" === L.origin || !M.cookie) return b;
        a = Tb(a, M.cookie, void 0, "ad_storage");
        if (!a || 0 == a.length) return b;
        for (var c = {}, d = 0; d < a.length; c = {
                l: c.l
            }, d++) {
            var e = qc(a[d]);
            if (null != e) {
                var f = e;
                e = f.version;
                c.l = f.h;
                var g = f.timestamp;
                f = f.labels;
                var h = ob(b, function(k) {
                    return function(m) {
                        return m.h === k.l
                    }
                }(c));
                h ? (h.timestamp = Math.max(h.timestamp, g), h.labels = rc(h.labels, f || [])) : b.push({
                    version: e,
                    h: c.l,
                    timestamp: g,
                    labels: f
                })
            }
        }
        b.sort(function(k, m) {
            return m.timestamp - k.timestamp
        });
        return sc(b)
    }

    function rc(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (a = 0; a < b.length; a++) c[b[a]] || d.push(b[a]);
        return d
    }

    function tc(a) {
        return a && "string" == typeof a && a.match(lc) ? a : "_gcl"
    }

    function uc() {
        var a = L.location.href,
            b = M.createElement("a");
        a && (b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (a || N(1), c = "/" + c);
        a = b.hostname.replace(gc, "");
        var d = {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: a,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        };
        b = ic(d, "gclid");
        c = ic(d, "gclsrc");
        a = ic(d, "wbraid");
        var e = ic(d, "dclid");
        b && c && a || (d = d.hash.replace("#", ""), b = b || hc(d, "gclid"), c = c || hc(d, "gclsrc"), a = a || hc(d, "wbraid"));
        return vc(b, c, e, a)
    }

    function vc(a, b, c, d) {
        function e(g, h) {
            f[h] || (f[h] = []);
            f[h].push(g)
        }
        var f = {};
        f.gclid = a;
        f.gclsrc = b;
        f.dclid = c;
        void 0 !== d && mc.test(d) && (f.gbraid = d, e(d, "gb"));
        if (void 0 !== a && a.match(mc)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return f
    }

    function wc() {
        var a = {},
            b = uc();
        oc(function() {
            xc(b, !1, a)
        })
    }

    function xc(a, b, c, d, e) {
        function f(p) {
            p = ["GCL", n, p];
            0 < e.length && p.push(e.join("."));
            return p.join(".")
        }

        function g(p, q) {
            if (p = yc(p, h)) bc(p, q, k), m = !0
        }
        c = c || {};
        e = e || [];
        var h = tc(c.prefix);
        d = d || qb().getTime();
        var k = ec(c, d);
        k.j = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3);
        a.aw && g("aw", f(a.aw[0]));
        a.dc && g("dc", f(a.dc[0]));
        a.gf && g("gf", f(a.gf[0]));
        a.ha && g("ha", f(a.ha[0]));
        a.gp && g("gp", f(a.gp[0]));
        if ((void 0 == kc.enable_gbraid_cookie_write ? 0 : kc.enable_gbraid_cookie_write) && !m && a.gb) {
            a = a.gb[0];
            d = yc("gb", h);
            c = !1;
            if (!b)
                for (b =
                    S(d), d = 0; d < b.length; d++) b[d].h === a && b[d].labels && 0 < b[d].labels.length && (c = !0);
            c || g("gb", f(a))
        }
    }

    function yc(a, b) {
        a = nc[a];
        if (void 0 !== a) return b + a
    }

    function zc(a) {
        return 0 !== Ac(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
    }

    function qc(a) {
        a = Ac(a.split("."));
        return 0 === a.length ? null : {
            version: a[0],
            h: a[2],
            timestamp: 1E3 * (Number(a[1]) || 0),
            labels: a.slice(3)
        }
    }

    function Ac(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !mc.test(a[2]) ? [] : a
    }

    function sc(a) {
        return a.filter(function(b) {
            return mc.test(b.h)
        })
    }

    function Bc() {
        var a = ["aw"],
            b = {};
        if ("null" !== L.origin) {
            for (var c = tc(b.prefix), d = {}, e = 0; e < a.length; e++) nc[a[e]] && (d[a[e]] = nc[a[e]]);
            oc(function() {
                pb(d, function(f, g) {
                    g = Tb(c + g, M.cookie, void 0, "ad_storage");
                    g.sort(function(n, p) {
                        return zc(p) - zc(n)
                    });
                    if (g.length) {
                        var h = g[0];
                        g = zc(h);
                        var k = 0 !== Ac(h.split(".")).length ? h.split(".").slice(3) : [],
                            m = {};
                        h = 0 !== Ac(h.split(".")).length ? h.split(".")[2] : void 0;
                        m[f] = [h];
                        xc(m, !0, b, g, k)
                    }
                })
            })
        }
    }

    function Cc(a, b, c, d) {
        var e = [];
        c = c || {};
        if (!R()) return e;
        var f = S(a);
        if (!f.length) return e;
        for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
        if (d) return e;
        1 !== e[0] && (d = f[0], f = f[0].timestamp, b = [d.version, Math.round(f / 1E3), d.h].concat(d.labels || [], [b]).join("."), c = ec(c, f), c.j = "ad_storage", bc(a, b, c));
        return e
    }

    function Dc(a, b) {
        b = tc(b);
        a = yc(a, b);
        if (!a) return 0;
        a = S(a);
        for (var c = b = 0; c < a.length; c++) b = Math.max(b, a[c].timestamp);
        return b
    }

    function Ec(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var Fc = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Gc = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Hc = /^\d+\.fls\.doubleclick\.net$/,
        Ic = /;gac=([^;?]+)/,
        Jc = /;gacgb=([^;?]+)/,
        Kc = /;gclaw=([^;?]+)/,
        Lc = /;gclgb=([^;?]+)/;

    function Mc(a, b, c) {
        if (Hc.test(a.location.host)) return (b = a.location.href.match(c)) && 2 == b.length && b[1].match(Fc) ? decodeURIComponent(b[1]) : "";
        a = [];
        for (var d in b) {
            c = [];
            for (var e = b[d], f = 0; f < e.length; f++) c.push(e[f].h);
            a.push(d + ":" + c.join(","))
        }
        return 0 < a.length ? a.join(";") : ""
    }

    function Nc(a, b, c, d) {
        var e = R() ? Q("_gac_gb", !0) : {},
            f = [],
            g = !1,
            h;
        for (h in e) {
            var k = Cc("_gac_gb_" + h, b, c, d);
            g = g || 0 !== k.length && k.some(function(m) {
                return 1 === m
            });
            f.push(h + ":" + k.join(","))
        }
        return {
            F: g ? f.join(";") : "",
            D: Mc(a, e, Jc)
        }
    }

    function Oc(a, b, c, d) {
        if (Hc.test(a.location.host)) {
            if ((a = a.location.href.match(d)) && 2 == a.length && a[1].match(Gc)) return [{
                h: a[1]
            }]
        } else return S((b || "_gcl") + c);
        return []
    }

    function Pc(a, b) {
        return Oc(a, b, "_aw", Kc).map(function(c) {
            return c.h
        }).join(".")
    }

    function Qc(a, b) {
        return Oc(a, b, "_gb", Lc).map(function(c) {
            return c.h
        }).join(".")
    }

    function Rc(a, b) {
        var c = "" !== Qc(a, b) || 0 < r(Object, "keys").call(Object, R() ? Q("_gac_gb", !0) : {}).length;
        a = "" !== Pc(a, b) || "" !== Mc(a, R() ? Q() : {}, Ic);
        return c && a
    }

    function Sc(a) {
        0 !== pc("_gcl_aw").length || a && 0 !== pc(a + "_aw").length || (wc(), Bc())
    }

    function Tc(a, b, c) {
        a = Cc((b && b.prefix || "_gcl") + "_gb", a, b, c);
        return 0 === a.length || a.every(function(d) {
            return 0 === d
        }) ? "" : a.join(".")
    };

    function Uc() {
        if (mb(L.__uspapi)) {
            var a = "";
            try {
                L.__uspapi("getUSPData", 1, function(b, c) {
                    c && b && (b = b.uspString) && RegExp("^[\\da-zA-Z-]{1,20}$").test(b) && (a = b)
                })
            } catch (b) {}
            return a
        }
    };
    var Vc = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Wc(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Xc(a) {
        a = a.google_tag_data;
        if (null != a && a.uach) {
            a = a.uach;
            var b = r(Object, "assign").call(Object, {}, a);
            a.fullVersionList && (b.fullVersionList = a.fullVersionList.slice(0));
            a = b
        } else a = null;
        return a
    }

    function Yc() {
        var a = window,
            b, c;
        if ("function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)) {
            var d = Wc(a);
            d.uach_promise || (a = a.navigator.userAgentData.getHighEntropyValues(Vc).then(function(e) {
                null != d.uach || (d.uach = e);
                return e
            }), d.uach_promise = a)
        }
    };
    var Zc = {
            id: !0,
            origin: !0,
            destination: !0,
            start_date: !0,
            end_date: !0,
            location_id: !0
        },
        $c = /^[a-zA-Z0-9_]+$/,
        ad = !1,
        bd = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_gtag_event_data google_remarketing_only google_conversion_linker google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_allow_ad_personalization_signals google_restricted_data_processing google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_gtm_url_processor google_conversion_page_url google_conversion_referrer_url google_gtm google_gcl_cookie_prefix google_gcl_cookie_path google_gcl_cookie_flags google_gcl_cookie_domain google_gcl_cookie_max_age_seconds google_read_gcl_cookie_opt_out google_basket_feed_country google_basket_feed_language google_basket_discount google_basket_transaction_type google_additional_conversion_params google_additional_params google_transport_url google_gtm_experiments".split(" ");

    function cd(a, b) {
        var c = a;
        return function() {
            --c;
            0 >= c && b()
        }
    }

    function T(a) {
        return null != a ? encodeURIComponent(String(a)) : ""
    }

    function dd(a) {
        if (null != a) {
            a = String(a).substring(0, 512);
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }
        return ""
    }

    function U(a, b) {
        b = T(b);
        return "" != b && (a = T(a), "" != a) ? "&".concat(a, "=", b) : ""
    }

    function ed(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function fd(a) {
        if (!a || "object" != typeof a || "function" == typeof a.join) return "";
        var b = [],
            c;
        for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                var d = a[c];
                if (d && "function" === typeof d.join) {
                    for (var e = [], f = 0; f < d.length; ++f) {
                        var g = ed(d[f]);
                        null != g && e.push(g)
                    }
                    d = 0 == e.length ? null : e.join(",")
                } else d = ed(d);
                (e = ed(c)) && null != d && b.push(e + "=" + d)
            }
        return b.join(";")
    }

    function V(a) {
        return "number" != typeof a && "string" != typeof a ? "" : T(a.toString())
    }

    function gd(a, b) {
        if (b.google_read_gcl_cookie_opt_out || b.google_remarketing_only || b.google_conversion_domain && (!b.google_gcl_cookie_prefix || !/^_ycl/.test(b.google_gcl_cookie_prefix))) return "";
        var c = "",
            d = hd(b),
            e = {};
        b.google_gcl_cookie_domain && (e.domain = b.google_gcl_cookie_domain);
        b.google_gcl_cookie_flags && (e.flags = b.google_gcl_cookie_flags);
        null != b.google_gcl_cookie_max_age_seconds && (e.A = b.google_gcl_cookie_max_age_seconds);
        b.google_gcl_cookie_path && (e.path = b.google_gcl_cookie_path);
        d && (e.prefix = d);
        if (id(b) && b.m) var f = void 0 === b.o;
        else Hc.test(a.location.host) ? f = !(Kc.test(a.location.href) || Ic.test(a.location.href)) : (f = Math.max(Dc("aw", d), Ec(R() ? Q() : {})), f = Math.max(Dc("gb", d), Ec(R() ? Q("_gac_gb", !0) : {})) > f);
        if (f) {
            if (void 0 !== b.o) return b.o;
            c = Qc(a, d || void 0);
            f = b.google_conversion_label;
            var g = Tc(f, e, b.m);
            c = U("gclgb", c) + (g ? U("mcov", g) : "");
            if (d) return b.o = c;
            d = Nc(a, f, e, b.m);
            a = d.D;
            d = d.F;
            c += (a ? U("gacgb", a) : "") + (d ? U("gacmcov", d) : "");
            return b.o = c
        }
        if (d) return b = Pc(a, d), U("gclaw", b);
        (b = Pc(a)) && (c = U("gclaw",
            b));
        b = Mc(a, R() ? Q() : {}, Ic);
        return c + (b ? U("gac", b) : "")
    }

    function jd(a) {
        function b(d) {
            try {
                return decodeURIComponent(d), !0
            } catch (e) {
                return !1
            }
        }
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        a = encodeURIComponent(a);
        for (var c = 256; !b(a.substr(0, c));) c--;
        return "&tiba=" + a.substr(0, c)
    }

    function kd(a, b, c, d, e, f) {
        var g = "https://",
            h = "landing" === d.google_conversion_type ? "/extclk" : "/";
        switch (e) {
            default: return "";
            case 2:
                    case 3:
                    var k = "googleads.g.doubleclick.net/";
                var m = "pagead/viewthroughconversion/";
                break;
            case 1:
                    k = "www.google.com/";m = "pagead/1p-conversion/";
                break;
            case 6:
                    k = "www.google.com/";m = "ccm/conversion/";
                break;
            case 0:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "pagead/conversion/";
                break;
            case 5:
                    k = d.google_conversion_domain || "www.googleadservices.com/";m = "ccm/conversion/";
                break;
            case 4:
                    k = (k = d.google_gtm_experiments) && k.apcm ? "www.google.com" : k && k.capiorig ? d.google_conversion_id + ".privacysandbox.googleadservices.com" : "www.google.com/";m = "pagead/privacysandbox/conversion/";
                break;
            case 7:
                    k = "googleads.g.doubleclick.net/",
                m = "td/rul/"
        }
        Va && d.google_transport_url && (k = d.google_transport_url);
        "/" !== k[k.length - 1] && (k += "/");
        if (0 === k.indexOf("http://") || 0 === k.indexOf("https://")) g = "";
        g = [g, k, m, T(d.google_conversion_id), h, "?random=", T(d.google_conversion_time)].join("");
        h = U("cv", d.google_conversion_js_version);
        k = U("fst", d.google_conversion_first_time);
        m = U("num", d.google_conversion_snippets);
        var n = U("fmt", d.google_conversion_format),
            p = d.google_remarketing_only ? U("userId", d.google_user_id) : "";
        var q = d.google_tag_for_child_directed_treatment;
        q = null == q || 0 !== q && 1 !== q ? "" : U("tfcd", q);
        var t = d.google_tag_for_under_age_of_consent;
        t = null == t || 0 !== t && 1 !== t ? "" : U("tfua", t);
        var E = d.google_allow_ad_personalization_signals;
        E = !1 === E ? U("npa", 1) : !0 === E ? U("npa", 0) : "";
        var Y = d.google_restricted_data_processing;
        Y = Xa ? !0 === Y ? U("rdp",
            1) : !1 === Y ? U("rdp", 0) : "" : "";
        var vd = U("value", d.google_conversion_value),
            wd = U("currency_code", d.google_conversion_currency),
            xd = U("label", d.google_conversion_label),
            yd = U("oid", d.google_conversion_order_id),
            zd = U("bg", d.google_conversion_color);
        a: {
            var y = d.google_conversion_language;
            if (null != y) {
                y = y.toString();
                if (2 == y.length) {
                    y = U("hl", y);
                    break a
                }
                if (5 == y.length) {
                    y = U("hl", y.substring(0, 2)) + U("gl", y.substring(3, 5));
                    break a
                }
            }
            y = ""
        }
        var Ad = U("guid", "ON"),
            Bd = !d.google_conversion_domain && "GooglemKTybQhCsO" in w &&
            "function" == typeof w.GooglemKTybQhCsO ? U("resp", "GooglemKTybQhCsO") : "",
            Cd = U("disvt", d.google_disable_viewthrough),
            Dd = U("eid", ab().join());
        var Z = d.google_conversion_date;
        var x = [];
        if (a) {
            var I = a.screen;
            I && (x.push(U("u_h", I.height)), x.push(U("u_w", I.width)), x.push(U("u_ah", I.availHeight)), x.push(U("u_aw", I.availWidth)), x.push(U("u_cd", I.colorDepth)));
            a.history && x.push(U("u_his", a.history.length))
        }
        Z && "function" == typeof Z.getTimezoneOffset && x.push(U("u_tz", -Z.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled &&
            x.push(U("u_java", b.javaEnabled())), b.plugins && x.push(U("u_nplug", b.plugins.length)), b.mimeTypes && x.push(U("u_nmime", b.mimeTypes.length)));
        Z = x.join("");
        x = U("gtm", d.google_gtm);
        b = b && b.sendBeacon ? U("sendb", "1") : "";
        I = ld();
        var Fd = U("ig", /googleadservices\.com/.test("www.googleadservices.com") ? 1 : 0),
            ta = fd(d.google_custom_params);
        f = fd(f);
        f = ta.concat(0 < ta.length && 0 < f.length ? ";" : "", f);
        f = "" == f ? "" : "&".concat("data=", encodeURIComponent(f));
        ta = gd(c, d);
        var Yb = d.google_conversion_page_url,
            Gd = d.google_conversion_referrer_url,
            ua = "";
        if (c) {
            if (a.top == a) var u = 0;
            else {
                var J = a.location.ancestorOrigins;
                if (J) u = J[J.length - 1] == a.location.origin ? 1 : 2;
                else {
                    J = a.top;
                    try {
                        var B;
                        if (B = !!J && null != J.location.href) c: {
                            try {
                                Ea(J.foo);
                                B = !0;
                                break c
                            } catch (Hd) {}
                            B = !1
                        }
                        u = B
                    } catch (Hd) {
                        u = !1
                    }
                    u = u ? 1 : 2
                }
            }
            B = Yb ? Yb : 1 == u ? a.top.location.href : a.location.href;
            ua += U("frm", u);
            ua += U("url", dd(B));
            ua += U("ref", dd(Gd || c.referrer))
        }
        a = [h, k, m, n, p, q, t, E, Y, vd, wd, xd, yd, zd, y, Ad, Bd, Cd, Dd, Z, x, b, I, Fd, f, ta, ua, jd(c), md(d.google_additional_params), md(d.google_remarketing_only ? {} : d.google_additional_conversion_params),
            "&hn=" + T("www.googleadservices.com"), nd(a), od(a)
        ].join("");
        c = $a();
        a += 0 < c.length ? "&debug_experiment_id=" + c : "";
        if (!d.google_remarketing_only && !d.google_conversion_domain) {
            c = [U("mid", d.google_conversion_merchant_id), U("fcntr", d.google_basket_feed_country), U("flng", d.google_basket_feed_language), U("dscnt", d.google_basket_discount), U("bttype", d.google_basket_transaction_type)].join("");
            if (d)
                if (u = d.google_conversion_items) {
                    B = [];
                    h = 0;
                    for (k = u.length; h < k; h++) m = u[h], n = [], m && (n.push(V(m.value)), n.push(V(m.quantity)),
                        n.push(V(m.item_id)), n.push(V(m.start_date)), n.push(V(m.end_date)), B.push("(" + n.join("*") + ")"));
                    u = 0 < B.length ? "&item=" + B.join("") : ""
                } else u = "";
            else u = "";
            c = [a, c, u].join("");
            a = 4E3 < c.length ? [a, U("item", "elngth")].join("") : c
        }
        g += a;
        1 === e || 6 === e ? g += [U("gcp", 1), U("sscte", 1), U("ct_cookie_present", 1)].join("") : 3 == e && (g += U("gcp", 1), g += U("ct_cookie_present", 1));
        Wa && (e = Uc(), void 0 !== e && (g += U("us_privacy", e || "error")));
        id(d) && (g = d.m ? g + U("gbcov", 1) : g + U("gbcov", 0));
        return g
    }

    function pd(a) {
        if (!lb) {
            var b = document;
            var c = "IFRAME";
            "application/xhtml+xml" === b.contentType && (c = c.toLowerCase());
            c = b.createElement(c);
            c.style.display = "none";
            c.src = "https://bid.g.doubleclick.net/xbbe/pixel?d=KAE";
            a.body.appendChild(c)
        }
    }

    function qd() {
        return new Image
    }

    function rd(a, b, c, d, e, f) {
        var g = c.onload_callback,
            h;
        e && g && g.call ? h = g : h = function() {};
        d += U("async", "1");
        e = c.google_gtm_url_processor;
        mb(e) && (d = e(d));
        g = (e = c.opt_image_generator) && e.call;
        if (!(f = g || !f)) {
            if (c.google_conversion_domain) var k = !1;
            else try {
                k = Eb(a, b, d, h)
            } catch (m) {
                k = !1
            }
            f = !k
        }
        f && (a = qd, g && (a = e), a = a(), a.src = d, a.onload = h)
    }

    function sd(a, b) {
        G && "376635471" == H(2) && ("complete" === b.readyState ? pd(b) : a.addEventListener ? a.addEventListener("load", function() {
            pd(b)
        }) : a.attachEvent("onload", function() {
            pd(b)
        }))
    }

    function td(a) {
        if ("landing" === a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough) return !1;
        a.google_conversion_date = new Date;
        a.google_conversion_time = a.google_conversion_date.getTime();
        a.google_conversion_snippets = "number" === typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets + 1 : 1;
        void 0 === a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
        a.google_conversion_js_version =
            "9";
        0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 3);
        !1 !== a.google_enable_display_cookie_match && (a.google_enable_display_cookie_match = !0);
        return !0
    }

    function ud(a, b) {
        function c(f) {
            d[f] = b && null != b[f] ? b[f] : a[f]
        }
        for (var d = {}, e = 0; e < bd.length; e++) c(bd[e]);
        c("onload_callback");
        return d
    }

    function Ed(a) {
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = void 0;
            d.hasOwnProperty("google_business_vertical") ? (e = d.google_business_vertical, b[e] = b[e] || {
                google_business_vertical: e
            }) : (e = "", Object.prototype.hasOwnProperty.call(b, e) || (b[e] = {}));
            e = b[e];
            for (var f = r(Object, "keys").call(Object, d).filter(function(k) {
                    return Zc.hasOwnProperty(k)
                }), g = 0; g < f.length; g++) {
                var h = f[g];
                h in e || (e[h] = []);
                e[h].push(d[h])
            }
        }
        return r(Object, "values").call(Object, b)
    }

    function ld() {
        var a = "";
        cb() && (a = kb().map(function(b) {
            return b.join("-")
        }).join("_"));
        return U("li", a)
    }

    function nd(a) {
        if (!Ya || !a.__gsaExp || !a.__gsaExp.id) return "";
        a = a.__gsaExp.id;
        if (!mb(a)) return "";
        try {
            var b = Number(a());
            return isNaN(b) ? "" : U("gsaexp", b)
        } catch (c) {
            return ""
        }
    }

    function od(a) {
        function b(d, e) {
            null != e && c.push(d + "=" + e)
        }
        if (!G || "466465926" != H(20)) return "";
        a = Xc(a);
        if (!a) return "";
        var c = [];
        b("&uaa", a.architecture);
        b("&uab", a.bitness);
        b("&uam", a.model);
        b("&uap", a.platform);
        b("&uapv", a.platformVersion);
        null != a.wow64 && c.push("&uaw=" + (a.wow64 ? "1" : "0"));
        a.fullVersionList && c.push("&uafvl=" + a.fullVersionList.map(function(d) {
            return encodeURIComponent(d.brand || "") + ";" + encodeURIComponent(d.version || "")
        }).join("|"));
        return c.join("")
    }

    function md(a) {
        if (!a) return "";
        var b = "",
            c;
        for (c in a) a.hasOwnProperty(c) && (b += U(c, a[c]));
        return b
    }

    function id(a) {
        return (a = a.google_gtm_experiments) && a.gbcov ? !0 : !1
    }

    function hd(a) {
        return a.google_gcl_cookie_prefix && "_gcl" !== a.google_gcl_cookie_prefix && $c.test(a.google_gcl_cookie_prefix) ? a.google_gcl_cookie_prefix : ""
    }

    function Id(a, b) {
        if (!b.google_remarketing_only && Jd(a, b)) {
            a = b.google_additional_conversion_params || {};
            var c = b.google_gtm_experiments;
            a.capi = c && c.apcm ? "2" : "1";
            b.google_additional_conversion_params = a
        }
    }

    function Jd(a, b) {
        if (b.google_transport_url) return !1;
        if ((b = b.google_gtm_experiments) && b.apcm) return !0;
        if (!b || !b.capi) return !1;
        a: {
            if (!ad && !yb()) {
                if (b = r("www.googleadservices.com", "endsWith").call("www.googleadservices.com", "google.com") ? "" : "Azy2GzGQxPvGmQwVDdEL1jRuKSXIdSSASA06JCA6PCeaVHpFYf8Rw5/q+9adc9CrBTxfCeUwxkuDM4PWEmdqywwAAACKeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJQcml2YWN5U2FuZGJveEFkc0FQSXMiLCJleHBpcnkiOjE2NjEyOTkxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", a.head) {
                    var c = Pa("META");
                    a.head.appendChild(c);
                    c.httpEquiv = "origin-trial";
                    c.content = b;
                    a = c
                } else a = null;
                if (!a) {
                    a = !1;
                    break a
                }
                ad = !0
            }
            a = yb()
        }
        return a
    }

    function Kd(a, b, c, d, e) {
        a = kd(a, b, c, d, 7, e);
        b = "AW-" + d.google_conversion_id;
        (d = d.google_conversion_label) && (b = b + "/" + d);
        a: {
            d = b;b = void 0;
            try {
                b = M.querySelector('iframe[data-tagging-id="' + d + '"]')
            } catch (f) {}
            if (b) {
                if ((c = Number(b.dataset.loadTime)) && 6E4 > qb().getTime() - c) {
                    N(9);
                    break a
                }
            } else try {
                if (50 <= M.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                    N(10);
                    break a
                }
            } catch (f) {}
            wb(a, void 0, {
                allow: "join-ad-interest-group"
            }, {
                taggingId: d,
                loadTime: qb().getTime()
            }, b)
        }
    };
    var Ld = !1,
        Md = document.currentScript && document.currentScript.src || "";

    function Nd(a, b, c) {
        try {
            if (!Ld && (Ld = !0, !c.google_gtm)) {
                var d = void 0,
                    e = A(a.location.href, "gtm_debug");
                Od(e) && (d = 2);
                d || 0 !== b.referrer.indexOf("https://tagassistant.google.com/") || (d = 3);
                var f;
                if (f = !d) f = 0 <= qa(b.cookie.split("; "), "__TAG_ASSISTANT=x");
                f && (d = 4);
                if (!d) {
                    var g = b.documentElement.getAttribute("data-tag-assistant-present");
                    Od(g) && (d = 5)
                }
                if (d) {
                    var h = "AW-" + (c.google_conversion_id || "");
                    if (!a["google.tagmanager.debugui2.queue"]) {
                        a["google.tagmanager.debugui2.queue"] = [];
                        var k = new na(oa, "https://www.googletagmanager.com/debug/bootstrap");
                        var m = za(k instanceof na && k.constructor === na && k.g === pa ? k.i : "type_error:Const");
                        c = {
                            id: h,
                            src: "LEGACY",
                            cond: d
                        };
                        var n = ya.exec(xa(m).toString()),
                            p = n[3] || "";
                        var q = za(n[1] + Aa("?", n[2] || "", c) + Aa("#", p));
                        var t = Pa("SCRIPT", b);
                        t.src = xa(q);
                        Ca(t);
                        var E = b.getElementsByTagName("script")[0];
                        E && E.parentNode && E.parentNode.insertBefore(t, E)
                    }
                    a["google.tagmanager.debugui2.queue"].push({
                        messageType: "LEGACY_CONTAINER_STARTING",
                        data: {
                            id: h,
                            scriptSource: Md
                        }
                    })
                }
            }
        } catch (Y) {}
    }

    function Od(a) {
        if (null == a || 0 === a.length) return !1;
        a = Number(a);
        var b = Date.now();
        return a < b + 3E5 && a > b - 9E5
    };

    function Pd(a, b) {
        a.onload_callback && "function" == typeof a.onload_callback.call ? a.onload_callback = cd(b, a.onload_callback) : a.onload_callback = function() {}
    }

    function Qd(a, b, c, d) {
        Nd(a, c, d);
        cb() && (hb(2), d.google_gtm && jb(K(fb), a));
        var e = !1;
        if (3 != d.google_conversion_format) return !1;
        try {
            if (td(d)) {
                d.google_remarketing_only && d.google_enable_display_cookie_match && !lb && G && F(["376635470", "376635471"], Qa, 2);
                d.google_remarketing_only && !d.google_conversion_domain && G && F(["759238990", "759238991"], Ua, 13);
                !d.google_remarketing_only || d.google_conversion_domain || G && ("759248991" == H(14) || "759248990" == H(14)) || G && F(["759248990", "759248991"], Ta, 14);
                !1 !== d.google_conversion_linker &&
                    (d.google_gtm || Sc(d.google_gcl_cookie_prefix));
                if (1 == d.google_remarketing_only && null != d.google_gtag_event_data && null != d.google_gtag_event_data.items && d.google_gtag_event_data.items.constructor === Array && 0 < d.google_gtag_event_data.items.length) Rd(a, b, c, d);
                else {
                    var f = d.google_gtm_experiments && d.google_gtm_experiments.ccmpp;
                    if (d.google_conversion_domain || d.google_transport_url && "https://pagead2.googlesyndication.com/" !== d.google_transport_url) f = !1;
                    var g = !1;
                    r("www.googleadservices.com", "endsWith").call("www.googleadservices.com",
                        "google.com") && (g = !0);
                    var h = d.google_additional_params;
                    h && h.dg && (g = "e" === h.dg);
                    h = function(k, m, n) {
                        m = void 0 === m ? !0 : m;
                        n = void 0 === n ? !0 : n;
                        rd(a, c, d, kd(a, b, c, d, k), m, n)
                    };
                    d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
                    d.google_remarketing_only ? h(2) : g ? (Pd(d, f ? 3 : 2), Id(c, d), h(1), h(3), f && h(6, !0, !1)) : (Pd(d, f ? 2 : 1), Id(c, d), h(0), f && h(5, !0, !1), id(d) && Rc(c, hd(d)) && (d.m = !0, h(0, !1)));
                    d.google_gtm_experiments &&
                        d.google_gtm_experiments.fledge && Kd(a, b, c, d)
                }
                d.google_remarketing_only && d.google_enable_display_cookie_match && sd(a, c);
                e = !0
            }
        } catch (k) {}
        return e
    }

    function Rd(a, b, c, d) {
        var e = Ed(d.google_gtag_event_data.items);
        Pd(d, e.length);
        for (var f = 0; f < e.length; f++) {
            var g = e[f];
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && (d.google_additional_params = d.google_additional_params || {}, d.google_additional_params.fledge = "1");
            rd(a, c, d, kd(a, b, c, d, 2, g), !0, !0);
            d.google_gtm_experiments && d.google_gtm_experiments.fledge && Kd(a, b, c, d, g);
            d.google_conversion_time = d.google_conversion_time + 1
        }
    };
    G = new function() {
        var a = [];
        var b = 0,
            c;
        for (c in bb) a[b++] = bb[c];
        a = void 0 === a ? [] : a;
        this.i = {};
        this.g = {};
        for (b = 0; b < a.length; ++b) this.g[a[b]] = ""
    };
    F(["466465925", "466465926"], Sa, 20);
    G && "466465926" == H(20) && Yc();
    G && F(["592230570", "592230571"], Ra, 16);
    cb() && (hb(1), ib());

    function Sd(a, b, c) {
        function d(m, n) {
            var p = new Image;
            p.onload = m;
            p.src = n
        }

        function e() {
            --f;
            if (0 >= f) {
                var m = Ab(a, !1),
                    n = m[b];
                n && (delete m[b], (m = n[0]) && m.call && m())
            }
        }
        var f = c.length + 1;
        if (2 == c.length) {
            var g = c[0],
                h = c[1];
            0 <= Ha(g, 0, "rmt_tld", g.search(Ia)) && 0 <= Ha(g, 0, "ipr", g.search(Ia)) && !h.match(Fa)[6] && (h += Ga(g), c[1] = C(h, "rmt_tld", "1"))
        }
        for (g = 0; g < c.length; g++) {
            h = c[g];
            var k = A(h, "fmt");
            switch (parseInt(k, 10)) {
                case 1:
                case 2:
                    (k = a.document.getElementById("goog_conv_iframe")) && !k.src ? wb(h, e, void 0, void 0, k, !1) : d(e,
                        h);
                    break;
                case 4:
                    Eb(a, a.document, h, e);
                    break;
                case 5:
                    if (a.navigator && a.navigator.sendBeacon)
                        if (a.navigator.sendBeacon(h, "")) {
                            e();
                            break
                        } else h = C(h, "sendb", 2);
                    h = C(h, "fmt", 3);
                default:
                    d(e, h)
            }
        }
        e()
    }
    var Td = ["GooglemKTybQhCsO"],
        W = w;
    Td[0] in W || "undefined" == typeof W.execScript || W.execScript("var " + Td[0]);
    for (var X; Td.length && (X = Td.shift());) Td.length || void 0 === Sd ? W[X] && W[X] !== Object.prototype[X] ? W = W[X] : W = W[X] = {} : W[X] = Sd;
    window.google_trackConversion = function(a) {
        var b = window,
            c = navigator,
            d = document;
        a = ud(b, a);
        a.google_conversion_format = 3;
        var e = !!a.google_gtm;
        K(Gb).i(e);
        return Qd(b, c, d, a)
    };
}).call(this);