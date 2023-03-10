(function() {
    var l, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        m = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ba = function() {
            ba = function() {};
            m.Symbol || (m.Symbol = ca)
        },
        ca = function() {
            var a = 0;
            return function(b) {
                return "jscomp_symbol_" + (b || "") + a++
            }
        }(),
        p = function() {
            ba();
            var a = m.Symbol.iterator;
            a || (a = m.Symbol.iterator = m.Symbol("iterator"));
            "function" != typeof Array.prototype[a] &&
                aa(Array.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return da(this)
                    }
                });
            p = function() {}
        },
        da = function(a) {
            var b = 0;
            return ea(function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            })
        },
        ea = function(a) {
            p();
            a = {
                next: a
            };
            a[m.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        q = function(a) {
            p();
            var b = a[Symbol.iterator];
            return b ? b.call(a) : da(a)
        },
        ha = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ia;
    if ("function" == typeof Object.setPrototypeOf) ia = Object.setPrototypeOf;
    else {
        var ja;
        a: {
            var ka = {
                    Ca: !0
                },
                la = {};
            try {
                la.__proto__ = ka;
                ja = la.Ca;
                break a
            } catch (a) {}
            ja = !1
        }
        ia = ja ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ma = ia,
        na = function(a, b) {
            a.prototype = ha(b.prototype);
            a.prototype.constructor = a;
            if (ma) ma(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.na = b.prototype
        },
        oa = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        pa = function(a, b) {
            if (b) {
                var c = m;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b &&
                    aa(c, a, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
            }
        },
        r = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
    pa("WeakMap", function(a) {
        function b(a) {
            r(a, d) || aa(a, d, {
                value: {}
            })
        }

        function c(a) {
            var c = Object[a];
            c && (Object[a] = function(a) {
                b(a);
                return c(a)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var b = Object.seal({}),
                        c = Object.seal({}),
                        d = new a([
                            [b, 2],
                            [c, 3]
                        ]);
                    if (2 != d.get(b) || 3 != d.get(c)) return !1;
                    d["delete"](b);
                    d.set(c, 4);
                    return !d.has(b) && 4 == d.get(c)
                } catch (n) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random();
        c("freeze");
        c("preventExtensions");
        c("seal");
        var e = 0,
            f = function(a) {
                this.U = (e += Math.random() +
                    1).toString();
                if (a) {
                    ba();
                    p();
                    a = q(a);
                    for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
                }
            };
        f.prototype.set = function(a, c) {
            b(a);
            if (!r(a, d)) throw Error("WeakMap key fail: " + a);
            a[d][this.U] = c;
            return this
        };
        f.prototype.get = function(a) {
            return r(a, d) ? a[d][this.U] : void 0
        };
        f.prototype.has = function(a) {
            return r(a, d) && r(a[d], this.U)
        };
        f.prototype["delete"] = function(a) {
            return r(a, d) && r(a[d], this.U) ? delete a[d][this.U] : !1
        };
        return f
    });
    pa("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var b = Object.seal({
                            x: 4
                        }),
                        c = new a(q([
                            [b, "s"]
                        ]));
                    if ("s" != c.get(b) || 1 != c.size || c.get({
                            x: 4
                        }) || c.set({
                            x: 4
                        }, "t") != c || 2 != c.size) return !1;
                    var d = c.entries(),
                        e = d.next();
                    if (e.done || e.value[0] != b || "s" != e.value[1]) return !1;
                    e = d.next();
                    return e.done || 4 != e.value[0].x || "t" != e.value[1] || !d.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        ba();
        p();
        var b = new WeakMap,
            c = function(a) {
                this.S = {};
                this.g = f();
                this.size = 0;
                if (a) {
                    a = q(a);
                    for (var b; !(b = a.next()).done;) b = b.value, this.set(b[0], b[1])
                }
            };
        c.prototype.set = function(a, b) {
            var c = d(this, a);
            c.list || (c.list = this.S[c.id] = []);
            c.f ? c.f.value = b : (c.f = {
                next: this.g,
                w: this.g.w,
                head: this.g,
                key: a,
                value: b
            }, c.list.push(c.f), this.g.w.next = c.f, this.g.w = c.f, this.size++);
            return this
        };
        c.prototype["delete"] = function(a) {
            a = d(this, a);
            return a.f && a.list ? (a.list.splice(a.index, 1), a.list.length || delete this.S[a.id], a.f.w.next = a.f.next, a.f.next.w = a.f.w, a.f.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.S = {};
            this.g = this.g.w = f();
            this.size = 0
        };
        c.prototype.has = function(a) {
            return !!d(this, a).f
        };
        c.prototype.get = function(a) {
            return (a = d(this, a).f) && a.value
        };
        c.prototype.entries = function() {
            return e(this, function(a) {
                return [a.key, a.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(a) {
                return a.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(a) {
                return a.value
            })
        };
        c.prototype.forEach = function(a, b) {
            for (var c = this.entries(), d; !(d = c.next()).done;) d = d.value,
                a.call(b, d[1], d[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(a, c) {
                var d = c && typeof c;
                "object" == d || "function" == d ? b.has(c) ? d = b.get(c) : (d = "" + ++g, b.set(c, d)) : d = "p_" + c;
                var e = a.S[d];
                if (e && r(a.S, d))
                    for (a = 0; a < e.length; a++) {
                        var f = e[a];
                        if (c !== c && f.key !== f.key || c === f.key) return {
                            id: d,
                            list: e,
                            index: a,
                            f: f
                        }
                    }
                return {
                    id: d,
                    list: e,
                    index: -1,
                    f: void 0
                }
            },
            e = function(a, b) {
                var c = a.g;
                return ea(function() {
                    if (c) {
                        for (; c.head != a.g;) c = c.w;
                        for (; c.next != c.head;) return c = c.next, {
                            done: !1,
                            value: b(c)
                        };
                        c = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var a = {};
                return a.w = a.next = a.head = a
            },
            g = 0;
        return c
    });
    pa("Number.isFinite", function(a) {
        return a ? a : function(a) {
            return "number" !== typeof a ? !1 : !isNaN(a) && Infinity !== a && -Infinity !== a
        }
    });
    pa("Number.isInteger", function(a) {
        return a ? a : function(a) {
            return Number.isFinite(a) ? a === Math.floor(a) : !1
        }
    });
    var u = this,
        v = function(a) {
            return "string" == typeof a
        },
        w = function(a) {
            return "number" == typeof a
        },
        x = function() {},
        qa = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" ==
                        c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        z = function(a) {
            var b = qa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        A = function(a) {
            return "function" == qa(a)
        },
        ra = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        sa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ta = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        ua = function(a, b, c) {
            ua = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sa : ta;
            return ua.apply(null, arguments)
        },
        va = Date.now || function() {
            return +new Date
        },
        wa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.na = b.prototype;
            a.prototype =
                new c;
            a.prototype.constructor = a;
            a.Va = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var C = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, C);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    wa(C, Error);
    C.prototype.name = "CustomError";
    var ya = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if (v(a)) return v(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        za = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = v(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ca = function(a) {
            var b = document;
            b = Aa(b.querySelectorAll && b.querySelector ? b.querySelectorAll(".GoogleActiveViewClass") :
                Ba());
            a: {
                for (var c = b.length, d = v(b) ? b.split("") : b, e = 0; e < c; e++)
                    if (e in d && a.call(void 0, d[e], e, b)) {
                        a = e;
                        break a
                    }
                a = -1
            }
            return 0 > a ? null : v(b) ? b.charAt(a) : b[a]
        },
        Da = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        Aa = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Ea = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Fa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        },
        Ga = function() {
            return "opacity".replace(/\-([a-z])/g, function(a, b) {
                return b.toUpperCase()
            })
        },
        Ha = function(a) {
            var b = v(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var D;
    a: {
        var Ia = u.navigator;
        if (Ia) {
            var Ja = Ia.userAgent;
            if (Ja) {
                D = Ja;
                break a
            }
        }
        D = ""
    }
    var E = function(a) {
        return -1 != D.indexOf(a)
    };
    var Ka = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    };
    var La = function(a) {
        La[" "](a);
        return a
    };
    La[" "] = x;
    var Ma = function(a, b) {
        try {
            return La(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Na = E("Opera"),
        F = E("Trident") || E("MSIE"),
        Oa = E("Edge"),
        Pa = E("Gecko") && !(-1 != D.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        Qa = -1 != D.toLowerCase().indexOf("webkit") && !E("Edge"),
        Ra = function() {
            var a = u.document;
            return a ? a.documentMode : void 0
        },
        Sa;
    a: {
        var Ta = "",
            Ua = function() {
                var a = D;
                if (Pa) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Oa) return /Edge\/([\d\.]+)/.exec(a);
                if (F) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Qa) return /WebKit\/(\S+)/.exec(a);
                if (Na) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ua && (Ta = Ua ? Ua[1] : "");
        if (F) {
            var Va = Ra();
            if (null != Va && Va > parseFloat(Ta)) {
                Sa = String(Va);
                break a
            }
        }
        Sa = Ta
    }
    var Wa = Sa,
        Xa = {},
        Ya;
    var $a = u.document;
    Ya = $a && F ? Ra() || ("CSS1Compat" == $a.compatMode ? parseInt(Wa, 10) : 5) : void 0;
    var Ba = function() {
            var a, b;
            var c = document;
            if (c.querySelectorAll && c.querySelector) return c.querySelectorAll(".GoogleActiveViewClass");
            if (c.getElementsByClassName) {
                var d = c.getElementsByClassName("GoogleActiveViewClass");
                return d
            }
            d = c.getElementsByTagName("*");
            var e = {};
            for (a = b = 0; c = d[a]; a++) {
                var f = c.className,
                    g;
                if (g = "function" == typeof f.split) g = 0 <= ya(f.split(/\s+/), "GoogleActiveViewClass");
                g && (e[b++] = c)
            }
            e.length = b;
            return e
        },
        ab = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        };
    var bb = function(a, b) {
        this.Ma = 100;
        this.Ea = a;
        this.Qa = b;
        this.aa = 0;
        this.g = null
    };
    bb.prototype.get = function() {
        if (0 < this.aa) {
            this.aa--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.Ea();
        return a
    };
    bb.prototype.put = function(a) {
        this.Qa(a);
        this.aa < this.Ma && (this.aa++, a.next = this.g, this.g = a)
    };
    var cb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var db = function(a) {
            u.setTimeout(function() {
                throw a;
            }, 0)
        },
        eb, fb = function() {
            var a = u.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow;
                a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
                a = ua(function(a) {
                    if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !E("Trident") && !E("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var a = c.qa;
                        c.qa = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        qa: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(a) {
                    var b = document.createElement("SCRIPT");
                    b.onreadystatechange = function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                    document.documentElement.appendChild(b)
                } : function(a) {
                    u.setTimeout(a, 0)
                }
        };
    var gb = function() {
            this.fa = this.O = null
        },
        ib = new bb(function() {
            return new hb
        }, function(a) {
            a.reset()
        });
    gb.prototype.add = function(a, b) {
        var c = ib.get();
        c.set(a, b);
        this.fa ? this.fa.next = c : this.O = c;
        this.fa = c
    };
    gb.prototype.remove = function() {
        var a = null;
        this.O && (a = this.O, this.O = this.O.next, this.O || (this.fa = null), a.next = null);
        return a
    };
    var hb = function() {
        this.next = this.scope = this.ja = null
    };
    hb.prototype.set = function(a, b) {
        this.ja = a;
        this.scope = b;
        this.next = null
    };
    hb.prototype.reset = function() {
        this.next = this.scope = this.ja = null
    };
    var nb = function(a, b) {
            jb || kb();
            lb || (jb(), lb = !0);
            mb.add(a, b)
        },
        jb, kb = function() {
            if (-1 != String(u.Promise).indexOf("[native code]")) {
                var a = u.Promise.resolve(void 0);
                jb = function() {
                    a.then(ob)
                }
            } else jb = function() {
                var a = ob;
                !A(u.setImmediate) || u.Window && u.Window.prototype && !E("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (eb || (eb = fb()), eb(a)) : u.setImmediate(a)
            }
        },
        lb = !1,
        mb = new gb,
        ob = function() {
            for (var a; a = mb.remove();) {
                try {
                    a.ja.call(a.scope)
                } catch (b) {
                    db(b)
                }
                ib.put(a)
            }
            lb = !1
        };
    var H = function(a) {
            this.u = 0;
            this.wa = void 0;
            this.K = this.A = this.H = null;
            this.$ = this.ia = !1;
            if (a != x) try {
                var b = this;
                a.call(void 0, function(a) {
                    G(b, 2, a)
                }, function(a) {
                    G(b, 3, a)
                })
            } catch (c) {
                G(this, 3, c)
            }
        },
        pb = function() {
            this.next = this.context = this.M = this.V = this.D = null;
            this.Z = !1
        };
    pb.prototype.reset = function() {
        this.context = this.M = this.V = this.D = null;
        this.Z = !1
    };
    var qb = new bb(function() {
            return new pb
        }, function(a) {
            a.reset()
        }),
        rb = function(a, b, c) {
            var d = qb.get();
            d.V = a;
            d.M = b;
            d.context = c;
            return d
        };
    H.prototype.then = function(a, b, c) {
        return sb(this, A(a) ? a : null, A(b) ? b : null, c)
    };
    H.prototype.then = H.prototype.then;
    H.prototype.$goog_Thenable = !0;
    H.prototype.cancel = function(a) {
        0 == this.u && nb(function() {
            var b = new I(a);
            tb(this, b)
        }, this)
    };
    var tb = function(a, b) {
            if (0 == a.u)
                if (a.H) {
                    var c = a.H;
                    if (c.A) {
                        for (var d = 0, e = null, f = null, g = c.A; g && (g.Z || (d++, g.D == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.u && 1 == d ? tb(c, b) : (f ? (d = f, d.next == c.K && (c.K = d), d.next = d.next.next) : ub(c), vb(c, e, 3, b)))
                    }
                    a.H = null
                } else G(a, 3, b)
        },
        xb = function(a, b) {
            a.A || 2 != a.u && 3 != a.u || wb(a);
            a.K ? a.K.next = b : a.A = b;
            a.K = b
        },
        sb = function(a, b, c, d) {
            var e = rb(null, null, null);
            e.D = new H(function(a, g) {
                e.V = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (n) {
                        g(n)
                    }
                } : a;
                e.M = c ? function(b) {
                    try {
                        var e = c.call(d,
                            b);
                        void 0 === e && b instanceof I ? g(b) : a(e)
                    } catch (n) {
                        g(n)
                    }
                } : g
            });
            e.D.H = a;
            xb(a, e);
            return e.D
        };
    H.prototype.Ta = function(a) {
        this.u = 0;
        G(this, 2, a)
    };
    H.prototype.Ua = function(a) {
        this.u = 0;
        G(this, 3, a)
    };
    var G = function(a, b, c) {
            if (0 == a.u) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.u = 1;
                a: {
                    var d = c,
                        e = a.Ta,
                        f = a.Ua;
                    if (d instanceof H) {
                        xb(d, rb(e || x, f || null, a));
                        var g = !0
                    } else {
                        if (d) try {
                            var h = !!d.$goog_Thenable
                        } catch (n) {
                            h = !1
                        } else h = !1;
                        if (h) d.then(e, f, a), g = !0;
                        else {
                            if (ra(d)) try {
                                var k = d.then;
                                if (A(k)) {
                                    yb(d, k, e, f, a);
                                    g = !0;
                                    break a
                                }
                            } catch (n) {
                                f.call(a, n);
                                g = !0;
                                break a
                            }
                            g = !1
                        }
                    }
                }
                g || (a.wa = c, a.u = b, a.H = null, wb(a), 3 != b || c instanceof I || zb(a, c))
            }
        },
        yb = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e,
                        a))
                },
                h = function(a) {
                    f || (f = !0, d.call(e, a))
                };
            try {
                b.call(a, g, h)
            } catch (k) {
                h(k)
            }
        },
        wb = function(a) {
            a.ia || (a.ia = !0, nb(a.Ia, a))
        },
        ub = function(a) {
            var b = null;
            a.A && (b = a.A, a.A = b.next, b.next = null);
            a.A || (a.K = null);
            return b
        };
    H.prototype.Ia = function() {
        for (var a; a = ub(this);) vb(this, a, this.u, this.wa);
        this.ia = !1
    };
    var vb = function(a, b, c, d) {
            if (3 == c && b.M && !b.Z)
                for (; a && a.$; a = a.H) a.$ = !1;
            if (b.D) b.D.H = null, Ab(b, c, d);
            else try {
                b.Z ? b.V.call(b.context) : Ab(b, c, d)
            } catch (e) {
                Bb.call(null, e)
            }
            qb.put(b)
        },
        Ab = function(a, b, c) {
            2 == b ? a.V.call(a.context, c) : a.M && a.M.call(a.context, c)
        },
        zb = function(a, b) {
            a.$ = !0;
            nb(function() {
                a.$ && Bb.call(null, b)
            })
        },
        Bb = db,
        I = function(a) {
            C.call(this, a)
        };
    wa(I, C);
    I.prototype.name = "cancel";
    var Cb = function(a, b, c) {
        this.Oa = a;
        this.resolve = b;
        this.reject = c
    };
    var J = "StopIteration" in u ? u.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        K = function() {};
    K.prototype.next = function() {
        throw J;
    };
    K.prototype.ga = function() {
        return this
    };
    var Db = function(a) {
            if (a instanceof K) return a;
            if ("function" == typeof a.ga) return a.ga(!1);
            if (z(a)) {
                var b = 0,
                    c = new K;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw J;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Eb = function(a, b) {
            if (z(a)) try {
                za(a, b, void 0)
            } catch (c) {
                if (c !== J) throw c;
            } else {
                a = Db(a);
                try {
                    for (;;) b.call(void 0, a.next(), void 0, a)
                } catch (c) {
                    if (c !== J) throw c;
                }
            }
        },
        Fb = function(a, b) {
            var c = 1;
            Eb(a, function(a) {
                c = b.call(void 0, c, a)
            });
            return c
        },
        Gb = function(a, b) {
            var c = Db(a);
            a = new K;
            a.next = function() {
                var a = c.next();
                if (b.call(void 0, a, void 0, c)) return a;
                throw J;
            };
            return a
        };
    var L = function(a, b) {
        this.o = {};
        this.c = [];
        this.Y = this.b = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    };
    l = L.prototype;
    l.v = function() {
        Hb(this);
        for (var a = [], b = 0; b < this.c.length; b++) a.push(this.o[this.c[b]]);
        return a
    };
    l.B = function() {
        Hb(this);
        return this.c.concat()
    };
    l.R = function(a) {
        return M(this.o, a)
    };
    l.clear = function() {
        this.o = {};
        this.Y = this.b = this.c.length = 0
    };
    l.remove = function(a) {
        return M(this.o, a) ? (delete this.o[a], this.b--, this.Y++, this.c.length > 2 * this.b && Hb(this), !0) : !1
    };
    var Hb = function(a) {
        if (a.b != a.c.length) {
            for (var b = 0, c = 0; b < a.c.length;) {
                var d = a.c[b];
                M(a.o, d) && (a.c[c++] = d);
                b++
            }
            a.c.length = c
        }
        if (a.b != a.c.length) {
            var e = {};
            for (c = b = 0; b < a.c.length;) d = a.c[b], M(e, d) || (a.c[c++] = d, e[d] = 1), b++;
            a.c.length = c
        }
    };
    l = L.prototype;
    l.get = function(a, b) {
        return M(this.o, a) ? this.o[a] : b
    };
    l.set = function(a, b) {
        M(this.o, a) || (this.b++, this.c.push(a), this.Y++);
        this.o[a] = b
    };
    l.addAll = function(a) {
        if (a instanceof L)
            for (var b = a.B(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
        else
            for (b in a) this.set(b, a[b])
    };
    l.forEach = function(a, b) {
        for (var c = this.B(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    l.clone = function() {
        return new L(this)
    };
    l.ga = function(a) {
        Hb(this);
        var b = 0,
            c = this.Y,
            d = this,
            e = new K;
        e.next = function() {
            if (c != d.Y) throw Error("The map has changed since the iterator was created");
            if (b >= d.c.length) throw J;
            var e = d.c[b++];
            return a ? e : d.o[e]
        };
        return e
    };
    var M = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Ib = function(a) {
            if (a.v && "function" == typeof a.v) return a.v();
            if (v(a)) return a.split("");
            if (z(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            b = [];
            c = 0;
            for (d in a) b[c++] = a[d];
            return b
        },
        Jb = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (z(a) || v(a)) za(a, b, c);
            else {
                if (a.B && "function" == typeof a.B) var d = a.B();
                else if (a.v && "function" == typeof a.v) d = void 0;
                else if (z(a) || v(a)) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else
                    for (f in d = [], e = 0, a) d[e++] = f;
                e = Ib(a);
                f = e.length;
                for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var Kb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Lb = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
                }
            }
        };
    var N = function(a) {
        this.l = this.I = this.C = "";
        this.N = null;
        this.G = this.j = "";
        this.i = this.Ka = !1;
        if (a instanceof N) {
            this.i = a.i;
            Mb(this, a.C);
            var b = a.I;
            O(this);
            this.I = b;
            b = a.l;
            O(this);
            this.l = b;
            Nb(this, a.N);
            b = a.j;
            O(this);
            this.j = b;
            Ob(this, a.s.clone());
            a = a.G;
            O(this);
            this.G = a
        } else a && (b = String(a).match(Kb)) ? (this.i = !1, Mb(this, b[1] || "", !0), a = b[2] || "", O(this), this.I = Pb(a), a = b[3] || "", O(this), this.l = Pb(a, !0), Nb(this, b[4]), a = b[5] || "", O(this), this.j = Pb(a, !0), Ob(this, b[6] || "", !0), a = b[7] || "", O(this), this.G = Pb(a)) : (this.i = !1, this.s = new P(null, this.i))
    };
    N.prototype.toString = function() {
        var a = [],
            b = this.C;
        b && a.push(Qb(b, Rb, !0), ":");
        var c = this.l;
        if (c || "file" == b) a.push("//"), (b = this.I) && a.push(Qb(b, Rb, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.N, null != c && a.push(":", String(c));
        if (c = this.j) this.l && "/" != c.charAt(0) && a.push("/"), a.push(Qb(c, "/" == c.charAt(0) ? Sb : Tb, !0));
        (c = this.s.toString()) && a.push("?", c);
        (c = this.G) && a.push("#", Qb(c, Ub));
        return a.join("")
    };
    N.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.C;
        c ? Mb(b, a.C) : c = !!a.I;
        if (c) {
            var d = a.I;
            O(b);
            b.I = d
        } else c = !!a.l;
        c ? (d = a.l, O(b), b.l = d) : c = null != a.N;
        d = a.j;
        if (c) Nb(b, a.N);
        else if (c = !!a.j) {
            if ("/" != d.charAt(0))
                if (this.l && !this.j) d = "/" + d;
                else {
                    var e = b.j.lastIndexOf("/"); - 1 != e && (d = b.j.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." ==
                        h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? (O(b), b.j = d) : c = "" !== a.s.toString();
        c ? Ob(b, a.s.clone()) : c = !!a.G;
        c && (a = a.G, O(b), b.G = a);
        return b
    };
    N.prototype.clone = function() {
        return new N(this)
    };
    var Mb = function(a, b, c) {
            O(a);
            a.C = c ? Pb(b, !0) : b;
            a.C && (a.C = a.C.replace(/:$/, ""))
        },
        Nb = function(a, b) {
            O(a);
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.N = b
            } else a.N = null
        },
        Ob = function(a, b, c) {
            O(a);
            b instanceof P ? (a.s = b, a.s.ma(a.i)) : (c || (b = Qb(b, Vb)), a.s = new P(b, a.i))
        },
        Q = function(a, b, c) {
            O(a);
            a.s.set(b, c);
            return a
        };
    N.prototype.removeParameter = function(a) {
        O(this);
        this.s.remove(a);
        return this
    };
    var O = function(a) {
        if (a.Ka) throw Error("Tried to modify a read-only Uri");
    };
    N.prototype.ma = function(a) {
        this.i = a;
        this.s && this.s.ma(a)
    };
    var Pb = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Qb = function(a, b, c) {
            return v(a) ? (a = encodeURI(a).replace(b, Wb), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Wb = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Rb = /[#\/\?@]/g,
        Tb = /[#\?:]/g,
        Sb = /[#\?]/g,
        Vb = /[#\?@]/g,
        Ub = /#/g,
        P = function(a, b) {
            this.b = this.a = null;
            this.h = a || null;
            this.i = !!b
        },
        R = function(a) {
            a.a || (a.a = new L, a.b = 0, a.h && Lb(a.h, function(b, c) {
                a.add(decodeURIComponent(b.replace(/\+/g,
                    " ")), c)
            }))
        };
    l = P.prototype;
    l.add = function(a, b) {
        R(this);
        this.h = null;
        a = S(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b += 1;
        return this
    };
    l.remove = function(a) {
        R(this);
        a = S(this, a);
        return this.a.R(a) ? (this.h = null, this.b -= this.a.get(a).length, this.a.remove(a)) : !1
    };
    l.clear = function() {
        this.a = this.h = null;
        this.b = 0
    };
    l.R = function(a) {
        R(this);
        a = S(this, a);
        return this.a.R(a)
    };
    l.forEach = function(a, b) {
        R(this);
        this.a.forEach(function(c, d) {
            za(c, function(c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    };
    l.B = function() {
        R(this);
        for (var a = this.a.v(), b = this.a.B(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    l.v = function(a) {
        R(this);
        var b = [];
        if (v(a)) this.R(a) && (b = Da(b, this.a.get(S(this, a))));
        else {
            a = this.a.v();
            for (var c = 0; c < a.length; c++) b = Da(b, a[c])
        }
        return b
    };
    l.set = function(a, b) {
        R(this);
        this.h = null;
        a = S(this, a);
        this.R(a) && (this.b -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.b += 1;
        return this
    };
    l.get = function(a, b) {
        a = a ? this.v(a) : [];
        return 0 < a.length ? String(a[0]) : b
    };
    l.toString = function() {
        if (this.h) return this.h;
        if (!this.a) return "";
        for (var a = [], b = this.a.B(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.v(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.h = a.join("&")
    };
    l.clone = function() {
        var a = new P;
        a.h = this.h;
        this.a && (a.a = this.a.clone(), a.b = this.b);
        return a
    };
    var S = function(a, b) {
        b = String(b);
        a.i && (b = b.toLowerCase());
        return b
    };
    P.prototype.ma = function(a) {
        a && !this.i && (R(this), this.h = null, this.a.forEach(function(a, c) {
            var b = c.toLowerCase();
            c != b && (this.remove(c), this.remove(b), 0 < a.length && (this.h = null, this.a.set(S(this, b), Aa(a)), this.b += a.length))
        }, this));
        this.i = a
    };
    P.prototype.extend = function(a) {
        for (var b = 0; b < arguments.length; b++) Jb(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };
    var Xb = cb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function Yb(a) {
        return a ? a.passive && Xb() ? a : a.capture || !1 : a
    }
    var Zb = function(a, b, c) {
        a.addEventListener ? a.addEventListener("load", b, Yb(c)) : a.attachEvent && a.attachEvent("onload", b)
    };
    var $b = function(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.line = b.line || -1;
        this.msg = b.message || "";
        this.file = b.file || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var ac = function(a) {
            try {
                return !!a && null != a.location.href && Ma(a, "foo")
            } catch (b) {
                return !1
            }
        },
        bc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        };
    var cc = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        dc = function(a, b) {
            this.za = a;
            this.Aa = b
        },
        ec = function(a, b) {
            this.url = a;
            this.ra = !!b;
            this.depth = w(void 0) ? void 0 : null
        };
    var fc = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    var gc = function() {
            this.sa = 4E3;
            this.W = "&";
            this.Da = ",$";
            this.da = "trn";
            this.Sa = null;
            this.pa = !1;
            this.P = {};
            this.Na = 0;
            this.J = []
        },
        hc = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        jc = function(a, b, c, d, e) {
            var f = [];
            bc(a, function(a, h) {
                (a = ic(a, b, c, d, e)) && f.push(h + "=" + a)
            });
            return f.join(b)
        },
        ic = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(ic(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" ==
                typeof a) return e = e || 0, 2 > e ? encodeURIComponent(jc(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        T = function(a, b, c, d) {
            a.J.push(b);
            a.P[b] = hc(c, d)
        },
        lc = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = kc(a) - d.length;
            if (0 > e) return "";
            a.J.sort(function(a, b) {
                return a - b
            });
            d = null;
            c = "";
            for (var f = 0; f < a.J.length; f++)
                for (var g = a.J[f], h = a.P[g], k = 0; k < h.length; k++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    var n = jc(h[k], a.W, a.Da);
                    if (n) {
                        n = c + n;
                        if (e >= n.length) {
                            e -= n.length;
                            b += n;
                            c = a.W;
                            break
                        } else a.pa && (c = e, n[c - 1] == a.W && --c, b += n.substr(0,
                            c), c = a.W, e = 0);
                        d = null == d ? g : d
                    }
                }
            f = "";
            a.da && null != d && (f = c + a.da + "=" + (a.Sa || d));
            return b + f + ""
        },
        kc = function(a) {
            if (!a.da) return a.sa;
            var b = 1,
                c;
            for (c in a.P) b = c.length > b ? c.length : b;
            return a.sa - a.da.length - b - a.W.length - 1
        };
    var mc = function(a, b, c, d, e) {
        if ((d ? a.Ra : Math.random()) < (e || a.Fa)) try {
            if (c instanceof gc) var f = c;
            else f = new gc, bc(c, function(a, b) {
                var c = f,
                    d = c.Na++;
                a = hc(b, a);
                c.J.push(d);
                c.P[d] = a
            });
            var g = lc(f, a.Pa, a.l, a.j + b + "&");
            g && fc(u, g)
        } catch (h) {}
    };
    var nc = null;
    var oc = function() {
            var a = u.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : va()
        },
        pc = function() {
            var a = void 0 === a ? u : a;
            return (a = a.performance) && a.now ? a.now() : null
        };
    var qc = function(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = this.label + "_" + this.type + "_" + Math.random();
        this.slotId = void 0
    };
    var U = u.performance,
        rc = !!(U && U.mark && U.measure && U.clearMarks),
        sc = cb(function() {
            var a;
            if (a = rc) {
                var b;
                if (null === nc) {
                    nc = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (nc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = nc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        uc = function() {
            var a = tc;
            this.T = [];
            this.Ja = a || u;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.T = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.L = sc() || (null != b ? b :
                1 > Math.random())
        };
    uc.prototype.disable = function() {
        this.L = !1;
        this.T != this.Ja.google_js_reporting_queue && (sc() && za(this.T, vc), this.T.length = 0)
    };
    var vc = function(a) {
        a && U && sc() && (U.clearMarks("goog_" + a.uniqueId + "_start"), U.clearMarks("goog_" + a.uniqueId + "_end"))
    };
    uc.prototype.start = function(a, b) {
        if (!this.L) return null;
        var c = pc() || oc();
        a = new qc(a, b, c);
        b = "goog_" + a.uniqueId + "_start";
        U && sc() && U.mark(b);
        return a
    };
    uc.prototype.end = function(a) {
        if (this.L && w(a.value)) {
            var b = pc() || oc();
            a.duration = b - a.value;
            b = "goog_" + a.uniqueId + "_end";
            U && sc() && U.mark(b);
            this.L && this.T.push(a)
        }
    };
    var yc = function() {
            var a = wc;
            this.va = xc;
            this.Ha = "jserror";
            this.ya = !0;
            this.oa = null;
            this.Ga = this.ta;
            this.ca = void 0 === a ? null : a;
            this.Ba = !1
        },
        Ac = function(a, b) {
            try {
                if (a.ca && a.ca.L) {
                    var c = a.ca.start((374).toString(), 3);
                    var d = b();
                    a.ca.end(c)
                } else d = b()
            } catch (f) {
                b = a.ya;
                try {
                    vc(c);
                    var e = zc(f);
                    b = a.Ga.call(a, 374, e, void 0, void 0)
                } catch (g) {
                    a.ta(217, g)
                }
                if (!b) throw f;
            }
            return d
        },
        Cc = function(a) {
            var b = Bc;
            return function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                return Ac(b, function() {
                    return a.apply(void 0,
                        d)
                })
            }
        };
    yc.prototype.ta = function(a, b, c, d, e) {
        e = e || this.Ha;
        try {
            var f = new gc;
            f.pa = !0;
            T(f, 1, "context", a);
            b.error && b.meta && b.id || (b = zc(b));
            b.msg && T(f, 2, "msg", b.msg.substring(0, 512));
            b.file && T(f, 3, "file", b.file);
            0 < b.line && T(f, 4, "line", b.line);
            var g = b.meta || {};
            if (this.oa) try {
                this.oa(g)
            } catch (xa) {}
            if (d) try {
                d(g)
            } catch (xa) {}
            b = [g];
            f.J.push(5);
            f.P[5] = b;
            g = u;
            b = [];
            var h = null;
            do {
                d = g;
                if (ac(d)) {
                    var k = d.location.href;
                    h = d.document && d.document.referrer || null
                } else k = h, h = null;
                b.push(new ec(k || ""));
                try {
                    g = d.parent
                } catch (xa) {
                    g = null
                }
            } while (g &&
                d != g);
            k = 0;
            for (var n = b.length - 1; k <= n; ++k) b[k].depth = n - k;
            d = u;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (k = 1; k < b.length; ++k) {
                    var y = b[k];
                    y.url || (y.url = d.location.ancestorOrigins[k - 1] || "", y.ra = !0)
                }
            var t = new ec(u.location.href, !1);
            n = null;
            var Za = b.length - 1;
            for (y = Za; 0 <= y; --y) {
                var B = b[y];
                !n && cc.test(B.url) && (n = B);
                if (B.url && !B.ra) {
                    t = B;
                    break
                }
            }
            B = null;
            var qd = b.length && b[Za].url;
            0 != t.depth && qd && (B = b[Za]);
            var fa = new dc(t, B);
            fa.Aa && T(f, 6, "top", fa.Aa.url || "");
            T(f,
                7, "url", fa.za.url || "");
            mc(this.va, e, f, this.Ba, c)
        } catch (xa) {
            try {
                mc(this.va, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Dc(xa),
                    url: fa && fa.za.url
                }, this.Ba, c)
            } catch (Pd) {}
        }
        return this.ya
    };
    var zc = function(a) {
            return new Ec(Dc(a), a.fileName, a.lineNumber)
        },
        Dc = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        Ec = function(a, b, c) {
            $b.call(this, Error(a), {
                message: a,
                file: void 0 === b ? "" : b,
                line: void 0 === c ? -1 : c
            })
        };
    na(Ec, $b);

    function Fc(a) {
        return Q(Q(Q(new N("//pagead2.googlesyndication.com/pagead/gen_204"), "id", "sodar"), "v", 29), "t", a)
    }
    var V = function(a, b, c, d) {
            var e = Fc(1);
            Q(e, "e", a);
            c && Q(e, "li", c);
            d && Q(e, "cv", d);
            b && Q(e, "bgai", b);
            fc(window, e.toString())
        },
        Gc = function(a, b, c, d, e) {
            c = void 0 === c ? null : c;
            d = void 0 === d ? null : d;
            e = void 0 === e ? null : e;
            "0.01" < Math.random() || (a = Q(Q(Q(Q(Q(new N("//pagead2.googlesyndication.com/pagead/gen_204"), "id", "sodarir"), "v", 29), "d", a ? 1 : 0), "s", b ? 1 : 0), "f", "0.01"), d && Q(a, "li", d), e && Q(a, "cv", e), c && Q(a, "bgai", c), fc(window, a.toString()))
        },
        Jc = function() {
            void 0 === Hc && (Hc = Ic())
        },
        Hc, Kc = function() {
            new Jc;
            return Hc || null
        },
        Ic = function() {
            var a = window.GoogleTyFxhY;
            if (!a) return V(13), null;
            if (0 == a.length) return V(1), null;
            a = a.shift();
            return (a._scs_ || a._cv_) && a._bgu_ && a._bgp_ ? a : (V(2), null)
        },
        Mc = function(a, b) {
            return function() {
                try {
                    return a.apply(this, arguments)
                } catch (f) {
                    if (!(1 <= Lc.count)) {
                        var c = f,
                            d = Fc(3),
                            e = Kc()._scs_;
                        e && Q(d, "bgai", e);
                        Q(d, "c", b);
                        Q(d, "ex", Dc(c));
                        c = d.toString();
                        2E3 < c.length ? V(11, e) : fc(window, c);
                        Lc.count += 1
                    }
                }
            }
        },
        Lc = {
            count: 0
        },
        Nc = function(a, b) {
            b = Mc(b, "i:lh");
            Zb(a, b, {
                capture: void 0
            });
            return b
        },
        Oc = function(a, b) {
            var c =
                b;
            var d = Nc(a, function() {
                if (c) {
                    var b = c;
                    c = null;
                    var f = {
                        capture: void 0
                    };
                    a.removeEventListener ? a.removeEventListener("load", d, Yb(f)) : a.detachEvent && a.detachEvent("onload", d);
                    return b.apply(this, arguments)
                }
            })
        },
        Pc = function() {
            return Ca(function(a) {
                return "DIV" == a.tagName && 0 == a.id.lastIndexOf("DfaVisibilityIdentifier_", 0)
            })
        };

    function Qc(a) {
        switch (a) {
            case void 0:
                return 0;
            case !0:
                return 1;
            case !1:
                return 2;
            default:
                return -1
        }
    };
    var Rc = function(a) {
        return !E("Safari") || (E("Chrome") || E("CriOS")) && !E("Edge") || E("Coast") || E("Opera") || E("Edge") || E("Silk") || E("Android") ? !0 : (a = (a = ab(a)) && a.window, !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0]))
    };
    var Sc = function(a, b) {
        this.La = b;
        this.xa = null == a;
        this.ua = a
    };
    na(Sc, K);
    Sc.prototype.next = function() {
        if (this.xa) throw J;
        var a = this.ua || null;
        this.xa = null == a;
        var b;
        if (b = a) {
            b = this.La;
            if (Ma(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Rc : d;
                if (d(a)) try {
                    var e = ab(a),
                        f = e && (e ? e.parentWindow || e.defaultView : window),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.ua = b;
        return a
    };
    var Tc = {};
    var Uc = function(a) {
        var b = 1;
        a = Gb(new Sc(a, !0), function() {
            return 0 < b
        });
        return Fb(a, function(a, d) {
            var c = 1;
            if (Ma(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = ab(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[Ga()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Tc.opacity;
                        if (!h) {
                            var k = Ga();
                            h = k;
                            void 0 === d.style[k] && (k = (Qa ? "Webkit" : Pa ? "Moz" : F ? "ms" : Na ? "O" : null) + Ha(k), void 0 !==
                                d.style[k] && (h = k));
                            Tc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                w(f) && !isNaN(f) && (c = f)
            }
            return b = a * c
        })
    };
    var Vc = !F || 9 <= Number(Ya),
        Wc = !F || 9 <= Number(Ya),
        Xc;
    if (Xc = F) {
        var Yc;
        if (Object.prototype.hasOwnProperty.call(Xa, "9")) Yc = Xa["9"];
        else {
            for (var Zc = 0, $c = Ea(String(Wa)).split("."), ad = Ea("9").split("."), bd = Math.max($c.length, ad.length), cd = 0; 0 == Zc && cd < bd; cd++) {
                var dd = $c[cd] || "",
                    ed = ad[cd] || "";
                do {
                    var W = /(\d*)(\D*)(.*)/.exec(dd) || ["", "", "", ""],
                        X = /(\d*)(\D*)(.*)/.exec(ed) || ["", "", "", ""];
                    if (0 == W[0].length && 0 == X[0].length) break;
                    Zc = Fa(0 == W[1].length ? 0 : parseInt(W[1], 10), 0 == X[1].length ? 0 : parseInt(X[1], 10)) || Fa(0 == W[2].length, 0 == X[2].length) || Fa(W[2], X[2]);
                    dd = W[3];
                    ed = X[3]
                } while (0 == Zc)
            }
            Yc = Xa["9"] = 0 <= Zc
        }
        Xc = !Yc
    }
    var fd = Xc,
        gd = function() {
            if (!u.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            u.addEventListener("test", x, b);
            u.removeEventListener("test", x, b);
            return a
        }();
    var hd = function(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.la = !1
    };
    hd.prototype.stopPropagation = function() {
        this.la = !0
    };
    hd.prototype.preventDefault = function() {
        this.defaultPrevented = !0
    };
    var Y = function(a, b) {
        hd.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.F = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            (b = a.relatedTarget) ?
            Pa && (Ma(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            null === d ? (this.offsetX = Qa || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Qa || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX =
                d.screenX || 0, this.screenY = d.screenY || 0);
            this.button = a.button;
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = v(a.pointerType) ? a.pointerType : id[a.pointerType] || "";
            this.state = a.state;
            this.F = a;
            a.defaultPrevented && this.preventDefault()
        }
    };
    wa(Y, hd);
    var jd = [1, 4, 2],
        id = {
            2: "touch",
            3: "pen",
            4: "mouse"
        },
        kd = function(a, b) {
            return Vc ? a.F.button == b : "click" == a.type ? 0 == b : !!(a.F.button & jd[b])
        };
    Y.prototype.stopPropagation = function() {
        Y.na.stopPropagation.call(this);
        this.F.stopPropagation ? this.F.stopPropagation() : this.F.cancelBubble = !0
    };
    Y.prototype.preventDefault = function() {
        Y.na.preventDefault.call(this);
        var a = this.F;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, fd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var ld = "closure_listenable_" + (1E6 * Math.random() | 0),
        md = 0;
    var nd = function(a, b, c, d, e) {
            this.listener = a;
            this.ba = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.ka = e;
            this.key = ++md;
            this.X = this.ha = !1
        },
        od = function(a) {
            a.X = !0;
            a.listener = null;
            a.ba = null;
            a.src = null;
            a.ka = null
        };
    var pd = function(a) {
        this.src = a;
        this.m = {};
        this.ea = 0
    };
    pd.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.m[f];
        a || (a = this.m[f] = [], this.ea++);
        var g = rd(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ha = !1)) : (b = new nd(b, this.src, f, !!d, e), b.ha = c, a.push(b));
        return b
    };
    pd.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.m)) return !1;
        var e = this.m[a];
        b = rd(e, b, c, d);
        return -1 < b ? (od(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.m[a], this.ea--), !0) : !1
    };
    pd.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return Ka(this.m, function(a) {
            for (var f = 0; f < a.length; ++f)
                if (!(c && a[f].type != d || e && a[f].capture != b)) return !0;
            return !1
        })
    };
    var rd = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.X && f.listener == b && f.capture == !!c && f.ka == d) return e
        }
        return -1
    };
    var sd = "closure_lm_" + (1E6 * Math.random() | 0),
        td = {},
        ud = 0,
        wd = function(a, b, c, d, e) {
            if (d && d.once) vd(a, b, c, d, e);
            else if ("array" == qa(b))
                for (var f = 0; f < b.length; f++) wd(a, b[f], c, d, e);
            else c = xd(c), a && a[ld] ? a.Wa(b, c, ra(d) ? !!d.capture : !!d, e) : yd(a, b, c, !1, d, e)
        },
        yd = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = ra(e) ? !!e.capture : !!e,
                h = zd(a);
            h || (a[sd] = h = new pd(a));
            c = h.add(b, c, d, g, f);
            if (!c.ba) {
                d = Ad();
                c.ba = d;
                d.src = a;
                d.listener = c;
                if (a.addEventListener) gd || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                    d, e);
                else if (a.attachEvent) a.attachEvent(Bd(b.toString()), d);
                else if (a.addListener && a.removeListener) a.addListener(d);
                else throw Error("addEventListener and attachEvent are unavailable.");
                ud++
            }
        },
        Ad = function() {
            var a = Cd,
                b = Wc ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        vd = function(a, b, c, d, e) {
            if ("array" == qa(b))
                for (var f = 0; f < b.length; f++) vd(a, b[f], c, d, e);
            else c = xd(c), a && a[ld] ? a.Xa(b, c, ra(d) ? !!d.capture : !!d, e) : yd(a, b, c, !0, d, e)
        },
        Bd = function(a) {
            return a in
                td ? td[a] : td[a] = "on" + a
        },
        Ed = function(a, b, c, d) {
            var e = !0;
            if (a = zd(a))
                if (b = a.m[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.X && (f = Dd(f, d), e = e && !1 !== f)
                    }
            return e
        },
        Dd = function(a, b) {
            var c = a.listener,
                d = a.ka || a.src;
            if (a.ha && !w(a) && a && !a.X) {
                var e = a.src;
                if (e && e[ld]) e.Ya(a);
                else {
                    var f = a.type,
                        g = a.ba;
                    e.removeEventListener ? e.removeEventListener(f, g, a.capture) : e.detachEvent ? e.detachEvent(Bd(f), g) : e.addListener && e.removeListener && e.removeListener(g);
                    ud--;
                    if (f = zd(e)) {
                        g = a.type;
                        var h;
                        if (h = g in f.m) {
                            h = f.m[g];
                            var k = ya(h, a),
                                n;
                            (n = 0 <= k) && Array.prototype.splice.call(h, k, 1);
                            h = n
                        }
                        h && (od(a), 0 == f.m[g].length && (delete f.m[g], f.ea--));
                        0 == f.ea && (f.src = null, e[sd] = null)
                    } else od(a)
                }
            }
            return c.call(d, b)
        },
        Cd = function(a, b) {
            if (a.X) return !0;
            if (!Wc) {
                if (!b) a: {
                    b = ["window", "event"];
                    for (var c = u, d = 0; d < b.length; d++)
                        if (c = c[b[d]], null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
                d = b;
                b = new Y(d, this);
                c = !0;
                if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == d.keyCode) try {
                            d.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == d.returnValue) d.returnValue = !0
                    }
                    d = [];
                    for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                    for (e = d.length - 1; !b.la && 0 <= e; e--) {
                        b.currentTarget = d[e];
                        var f = Ed(d[e], a, !0, b);
                        c = c && f
                    }
                    for (e = 0; !b.la && e < d.length; e++) b.currentTarget = d[e],
                    f = Ed(d[e], a, !1, b),
                    c = c && f
                }
                return c
            }
            return Dd(a, new Y(b, this))
        },
        zd = function(a) {
            a = a[sd];
            return a instanceof pd ? a : null
        },
        Fd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        xd = function(a) {
            if (A(a)) return a;
            a[Fd] || (a[Fd] = function(b) {
                return a.handleEvent(b)
            });
            return a[Fd]
        };
    var Gd = function(a) {
        var b = a._scs_,
            c = a._li_,
            d = Pc();
        if (d && d.getBoundingClientRect) {
            var e = 0;
            wd(d, "mouseover", function() {
                ++e
            });
            wd(d, "mousedown", function(a) {
                var f = d.getBoundingClientRect(),
                    h = 0;
                kd(a, 0) ? h = 1 : kd(a, 2) ? h = 4 : kd(a, 1) && (h = 2);
                h && a.shiftKey && (h |= 8);
                h && a.altKey && (h |= 16);
                h && a.ctrlKey && (h |= 32);
                var k = Math.floor(100 * Uc(d)),
                    n = Math.floor(a.clientX - f.left);
                f = Math.floor(a.clientY - f.top);
                var y = e;
                a = a.isTrusted;
                var t = document.defaultView && document.defaultView.mozPaintCount;
                t = void 0 === t ? -1 : w(t) && Number.isInteger(t) ?
                    0 > t ? -3 : t : -2;
                k = Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(new N("//pagead2.googlesyndication.com/pagead/gen_204"), "id", "sodarde"), "v", 29), "nx", n), "ny", f), "bgai", b), "mb", h), "ox", k), "nm", y), "tr", Qc(a)), "mz", t);
                c && Q(k, "li", c);
                fc(window, k.toString())
            })
        }
    };
    var Hd = document,
        Id = window;
    var Jd = !!window.google_async_iframe_id,
        Z = Jd && window.parent || window;
    var xc, Bc;
    if (Jd && !ac(Z)) {
        var Kd = "." + Hd.domain;
        try {
            for (; 2 < Kd.split(".").length && !ac(Z);) Hd.domain = Kd = Kd.substr(Kd.indexOf(".") + 1), Z = window.parent
        } catch (a) {}
        ac(Z) || (Z = window)
    }
    var tc = Z,
        wc = new uc;
    xc = new function() {
        var a = void 0 === a ? Id : a;
        this.Pa = "http:" === a.location.protocol ? "http:" : "https:";
        this.l = "pagead2.googlesyndication.com";
        this.j = "/pagead/gen_204?id=";
        this.Fa = .01;
        this.Ra = Math.random()
    };
    Bc = new yc;
    "complete" == tc.document.readyState ? tc.google_measure_js_timing || wc.disable() : wc.L && Zb(tc, function() {
        tc.google_measure_js_timing || wc.disable()
    });
    var Ld = function() {
        var a, b, c = new H(function(c, e) {
            a = c;
            b = e
        });
        return new Cb(c, a, b)
    }();

    function Md(a) {
        a: {
            try {
                var b;
                if (!(b = a.contentWindow)) {
                    if (a.contentDocument) {
                        var c = a.contentDocument;
                        var d = c ? c.parentWindow || c.defaultView : window
                    } else d = null;
                    b = d
                }
                var e = b;
                break a
            } catch (f) {}
            e = null
        }
        Ld.resolve([(0 == a.src.indexOf("https:") ? "https" : "http") + "://tpc.googlesyndication.com", e])
    }

    function Nd() {
        var a = document.createElement("IFRAME".toString());
        Oc(a, ua(Md, null, a));
        a.src = "//tpc.googlesyndication.com/sodar/Beq5YUTp.html";
        a.width = "0";
        a.height = "0";
        a.style.display = "none";
        document.body.appendChild(a)
    }

    function Od() {
        Ld.Oa.then(function(a) {
            var b = q(a);
            a = b.next().value;
            b = b.next().value;
            var c = Kc();
            var d = c._scs_;
            var e = c._bgu_,
                f = c._bgp_,
                g = c._li_;
            c = c._cv_;
            var h = document.location.origin,
                k = {};
            d = (k["0"] = "0", k["1"] = d || "", k["2"] = e.split("/").pop().replace(/\.js/g, ""), k["3"] = f, k["4"] = g || "", k["5"] = c || "", k["8"] = h || "*", k);
            b ? b.postMessage(d, a) : V(3)
        })
    };
    (function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        Mc(a, b).apply(null, [].concat(d instanceof Array ? d : oa(q(d))))
    })(function() {
        var a = !!window.postMessage,
            b = !1,
            c = null,
            d = null,
            e = null,
            f = Kc();
        f && (b = !0, c = f._scs_, d = f._li_, e = f._cv_, a ? (Nd(), Od()) : V(8, c, d, e), setTimeout(Cc(function() {
            return Gd(f)
        }), 0));
        Gc(b, a, c, d, e)
    }, "i:i");
}).call(this);