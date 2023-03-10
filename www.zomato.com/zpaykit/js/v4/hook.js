! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/zpaykit/js/", n(n.s = 23)
}({
    1: function(e, t) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    12: function(e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        e.exports = function(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    13: function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
    },
    23: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(12),
            o = n.n(i),
            r = n(13),
            a = n.n(r),
            u = n(1),
            s = n.n(u);

        function c(e) {
            return "function" == typeof e
        }
        var d = o()((function e() {
            var t = this;
            a()(this, e), s()(this, "isTopicPresent", (function(e) {
                return t.topics.hasOwnProperty.call(t.topics, e)
            })), s()(this, "widgetOnLoad", (function(e) {
                t.subscribe("widget_on_load", e)
            })), s()(this, "subscribe", (function(e, n) {
                t.isTopicPresent() || (t.topics[e] = []);
                var i = t.topics[e].push(n) - 1;
                return {
                    remove: function() {
                        delete t.topics[e][i]
                    }
                }
            })), s()(this, "publish", (function(e, t) {
                if (null !== document.getElementById("payment_widget")) {
                    var n = document.getElementById("payment_widget").contentWindow,
                        i = {};
                    i.topic = e, i.payload = t, n.postMessage(i, "*")
                }
            })), s()(this, "receiveTopic", (function(e) {
                var n = e.data.topic,
                    i = e.data.payload;
                switch (n) {
                    case "widget_status":
                        var o = i.status;
                        o && (t.isWidgetLoaded = o, t.isTopicPresent("widget_on_load") && t.topics.widget_on_load.forEach((function(e) {
                            c(e) && e()
                        })));
                        break;
                    default:
                        t.isTopicPresent(n) && t.topics[n].forEach((function(e) {
                            c(e) && e(void 0 !== i ? i : {})
                        }))
                }
            })), s()(this, "addTopicListener", (function() {
                window.addEventListener("message", t.receiveTopic, !1)
            })), s()(this, "isWidgetInitiated", (function() {
                return t.isWidgetLoaded
            })), s()(this, "changeBillingDetails", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.publish("change_billing_details", e)
            })), s()(this, "payButtonClicked", (function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t.publish("pay_button_clicked", e)
            })), this.topics = [], this.isWidgetLoaded = !1
        }));
        window.zpayapi = new d, window.zpayapi.addTopicListener()
    }
});