"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3694], {
        "2/JD": (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => i
            });
            var a = l("q1tI"),
                c = l("j399"),
                r = l("lXQd"),
                n = l("17x9"),
                u = l.n(n),
                o = l("02XY"),
                d = l("TRpf"),
                f = l("HMsx"),
                s = l("wcxm"),
                p = l("tRD2"),
                E = l("oClw"),
                _ = function(e) {
                    var t = e.openSearchModal,
                        l = e.locale;
                    return a.createElement(p.E1, {
                        onClick: t
                    }, a.createElement(p.M6, null, a.createElement(o.default, {
                        size: 16,
                        color: f.default.z600
                    }), a.createElement(s.P, {
                        className: "search-placeholder"
                    }, "".concat((0, r.default)(l, "SEARCH_PLACEHOLDER", "Searching for food, restaurants etc.")))))
                };
            _.propTypes = {
                openSearchModal: u().func,
                locale: u().objectOf(u().string)
            }, _.defaultProps = {
                openSearchModal: c.default,
                locale: {}
            };
            const i = (0, d.$j)((function(e) {
                return {
                    locale: (0, r.default)(e, "langKeys", {})
                }
            }), (function(e) {
                return {
                    openSearchModal: function() {
                        return e((0, E.AM)())
                    }
                }
            }))(_)
        },
        "02XY": (e, t, l) => {
            var a = l("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = a(l("pP/M")),
                r = a(l("q1tI")),
                n = a(l("w/pp")),
                u = a(l("6jlT")),
                o = function(e) {
                    var t = (0, u.default)();
                    return r.default.createElement(n.default, (0, c.default)({
                        uniqueId: t
                    }, e), r.default.createElement("title", null, "Search"), r.default.createElement("path", {
                        d: "M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"
                    }))
                };
            t.default = o
        }
    }
]);