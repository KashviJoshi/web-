"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3677], {
        lHJf: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => M
            });
            var l = a("q1tI"),
                n = a("lXQd"),
                i = a("j399"),
                o = a("17x9"),
                c = a.n(o),
                u = a("LxjJ"),
                r = a("ieZA"),
                d = a("pLIU"),
                f = a("TRpf"),
                s = a("wRyO"),
                p = a("HMsx"),
                L = a("wcxm"),
                m = a("tRD2"),
                E = a("X2+A"),
                _ = function(e) {
                    var t = e.displayTitle,
                        a = e.openLocationModal,
                        n = e.isLocationDetailsFetching;
                    return l.createElement(m.E1, {
                        onClick: a
                    }, l.createElement(m.M6, null, l.createElement("div", {
                        className: "icon-section"
                    }, n ? l.createElement(r.default, {
                        color: s.default.z500,
                        size: "small"
                    }) : l.createElement(u.default, {
                        size: 20,
                        color: s.default.z500
                    })), l.createElement(L.P, {
                        className: "city-name"
                    }, t)), l.createElement(d.default, {
                        size: 16,
                        color: p.default.z500
                    }))
                };
            _.propTypes = {
                displayTitle: c().string.isRequired,
                openLocationModal: c().func,
                isLocationDetailsFetching: c().bool
            }, _.defaultProps = {
                openLocationModal: i.default,
                isLocationDetailsFetching: !1
            };
            const M = (0, f.$j)((function(e) {
                return {
                    displayTitle: (0, n.default)(e, "location.currentLocation.orderLocationName", "") || (0, n.default)(e, "location.currentLocation.entityName", ""),
                    isLocationDetailsFetching: (0, n.default)(e, "apiState.GET_LOCATION_DETAILS.isFetching", !1)
                }
            }), (function(e) {
                return {
                    openLocationModal: function() {
                        return e((0, E.NW)())
                    }
                }
            }))(_)
        },
        pLIU: (e, t, a) => {
            var l = a("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = l(a("pP/M")),
                i = l(a("q1tI")),
                o = l(a("w/pp")),
                c = l(a("6jlT")),
                u = function(e) {
                    var t = (0, c.default)();
                    return i.default.createElement(o.default, (0, n.default)({
                        uniqueId: t
                    }, e), i.default.createElement("title", null, "down-triangle"), i.default.createElement("path", {
                        d: "M20 5.42l-10 10-10-10h20z"
                    }))
                };
            t.default = u
        },
        LxjJ: (e, t, a) => {
            var l = a("JMD1");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = l(a("pP/M")),
                i = l(a("q1tI")),
                o = l(a("w/pp")),
                c = l(a("6jlT")),
                u = function(e) {
                    var t = (0, c.default)();
                    return i.default.createElement(o.default, (0, n.default)({
                        uniqueId: t
                    }, e), i.default.createElement("title", null, "location-fill"), i.default.createElement("path", {
                        d: "M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"
                    }))
                };
            t.default = u
        }
    }
]);