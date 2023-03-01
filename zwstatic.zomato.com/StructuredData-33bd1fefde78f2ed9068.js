"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [9401], {
        Zryz: (t, e, a) => {
            a.d(e, {
                OQ: () => l,
                hE: () => d,
                i_: () => s,
                kn: () => c
            });
            var n = a("lXQd"),
                r = a("VAjR"),
                o = a("P62M"),
                i = a("AdJq"),
                s = function(t, e) {
                    var a = (0, n.default)(t, "current.key", ""),
                        i = {
                            "@context": "https://schema.org",
                            "@type": "Restaurant",
                            name: "Restaurant",
                            url: "",
                            openingHours: "",
                            hasmap: "",
                            menu: "",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "",
                                addressLocality: "",
                                addressRegion: "",
                                postalCode: "",
                                addressCountry: ""
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: "",
                                longitude: ""
                            },
                            potentialAction: {
                                "@type": "OrderAction",
                                deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
                                target: {
                                    "@type": "EntryPoint",
                                    inLanguage: "en-US",
                                    url: "",
                                    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
                                }
                            },
                            telephone: "",
                            priceRange: "",
                            paymentAccepted: "",
                            image: "",
                            servesCuisine: ""
                        },
                        s = (0, n.default)(t, "current.resId", 0),
                        l = (0, n.default)(t, "restaurant.".concat(s, ".sections"), {}),
                        d = (0, n.default)(l, "SECTION_IMAGE_CAROUSEL.entities", []).find((function(t) {
                            return "IMAGES" === t.entity_type
                        })),
                        c = (0, n.default)(d, "entity_ids", {}),
                        u = (0, n.default)(e, "IMAGES.".concat(c[0], ".url"), {});
                    i.name = (0, n.default)(l, "SECTION_BASIC_INFO.name", ""), i.openingHours = (0, n.default)(l, "SECTION_BASIC_INFO.timing.timing_desc", ""), i.potentialAction.inLanguage = (0, n.default)(l, "SECTION_BASIC_INFO.inLanguage", ""), i.telephone = (0, n.default)(l, "SECTION_RES_CONTACT.phoneDetails.phoneStr", ""), i.address.streetAddress = (0, n.default)(l, "SECTION_RES_CONTACT.address", ""), i.geo.latitude = (0, n.default)(l, "SECTION_RES_CONTACT.latitude", ""), i.geo.longitude = (0, n.default)(l, "SECTION_RES_CONTACT.longitude", ""), i.address.addressCountry = (0, n.default)(l, "SECTION_RES_CONTACT.country_name", ""), i.address.addressRegion = (0, n.default)(l, "SECTION_RES_CONTACT.city_name", ""), i.address.postalCode = (0, n.default)(l, "SECTION_RES_CONTACT.zipcode", ""), i.address.addressLocality = (0, n.default)(l, "SECTION_RES_CONTACT.locality_verbose", ""), i.priceRange = (0, n.default)(l, "SECTION_RES_DETAILS.CFT_DETAILS.cfts[0].title", ""), i.servesCuisine = (0, n.default)(l, "SECTION_BASIC_INFO.cuisine_string", ""), i.paymentAccepted = (0, n.default)(l, "SECTION_RES_DETAILS.CFT_DETAILS.accepted_payments", ""), i.hasmap = (0, n.default)(l, "SECTION_RES_CONTACT.static_map_url", ""), i.potentialAction.target.url = "".concat((0, n.default)(l, "SECTION_BASIC_INFO.resUrl", ""), "/book"), i.image = u, i.url = (0, n.default)(l, "SECTION_BASIC_INFO.resUrl", ""), i.menu = "".concat((0, n.default)(l, "SECTION_BASIC_INFO.resUrl", ""), "/menu");
                    var p = (0, n.default)(l, "SECTION_BASIC_INFO.rating.votes", ""),
                        g = (0, n.default)(l, "SECTION_BASIC_INFO.rating.aggregate_rating", "0"),
                        m = (0, n.default)(l, "SECTION_BASIC_INFO.rating.rating_text", ""),
                        f = (0, o.J0)(p),
                        _ = 0 !== (0, o.J0)(g) && "NEW" !== m && f > 0;
                    if (_ && (i.aggregateRating = {
                            "@type": "AggregateRating",
                            ratingValue: g,
                            ratingCount: f,
                            bestRating: 5,
                            worstRating: 0
                        }), _ && a === r.th) {
                        var h = (0, n.default)(l, "SECTION_REVIEWS.entities", []).find((function(t) {
                                return "REVIEWS" === t.entity_type
                            })),
                            C = (0, n.default)(h, "entity_ids", []);
                        i.reviews = C.map((function(t) {
                            var a = {},
                                r = (0, n.default)(e, "REVIEWS.".concat(t), {}),
                                o = (0, n.default)(r, "rating.entities.0.entity_ids.0", ""),
                                i = (0, n.default)(e, "RATING.".concat(o, ".rating"), "");
                            return a.author = (0, n.default)(r, "userName", ""), a.url = (0, n.default)(r, "reviewUrl", ""), a.description = (0, n.default)(r, "reviewText", ""), a.reviewRating = {
                                "@type": "Rating",
                                ratingValue: i,
                                bestRating: 5,
                                worstRating: 0
                            }, a
                        }))
                    }
                    return i
                },
                l = function(t) {
                    return {
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        name: "Zomato",
                        description: t.current.pageDescription,
                        url: "".concat(i.ho).concat(t.current.pageUrl),
                        logo: "https://b.zmtcdn.com/images/square_zomato_logo_new.svg",
                        sameAs: ["https://www.facebook.com/zomato", "https://www.twitter.com/zomato", "https://www.instagram.com/zomato", "https://plus.google.com/+zomato", "https://en.wikipedia.org/wiki/Zomato", "https://www.linkedin.com/company/zomato"]
                    }
                },
                d = function(t) {
                    return {
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        name: "Zomato",
                        description: t.current.pageDescription,
                        url: "".concat(i.ho).concat(t.current.pageUrl),
                        telephone: "01142246966",
                        logo: "https://b.zmtcdn.com/data/o2_assets/b5d627b56ce560e9ffc71163bde658f01631786058.png",
                        sameAs: ["https://www.facebook.com/zomato", "https://www.twitter.com/zomato", "https://www.instagram.com/zomato", "https://plus.google.com/+zomato", "https://en.wikipedia.org/wiki/Zomato", "https://www.linkedin.com/company/zomato"]
                    }
                },
                c = function(t) {
                    return {
                        "@context": "http://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: t.map((function(t, e) {
                            var a = {
                                "@type": "ListItem",
                                position: "",
                                item: {
                                    id: "",
                                    name: "",
                                    url: ""
                                }
                            };
                            return a.position = e, a.item.id = (0, n.default)(t, "url", ""), a.item.url = (0, n.default)(t, "url", ""), a.item.name = (0, n.default)(t, "title", ""), a
                        }))
                    }
                }
        },
        Et5G: (t, e, a) => {
            a.r(e), a.d(e, {
                default: () => O
            });
            var n, r = a("zThL"),
                o = a("q1tI"),
                i = a("lXQd"),
                s = a("j399"),
                l = a("17x9"),
                d = a.n(l),
                c = a("rid2"),
                u = a("TRpf"),
                p = a("Zryz"),
                g = a("XgaV"),
                m = a("jdkn"),
                f = a("VAjR"),
                _ = a("AdJq"),
                h = (n = {}, (0, r.Z)(n, f.lX, p.i_), (0, r.Z)(n, f.Q9, (function(t) {
                    var e, a = (0, g.X)({
                            pages: t
                        }),
                        n = (0, i.default)(a, "SECTION_PRODUCT_DESCRIPTION", {}),
                        r = n.name,
                        o = void 0 === r ? "" : r,
                        s = n.description,
                        l = void 0 === s ? "" : s,
                        d = n.skuId,
                        c = void 0 === d ? "" : d,
                        u = n.brandName,
                        p = void 0 === u ? "" : u,
                        f = (0, i.default)(t, "current.pageUrl", ""),
                        _ = (0, i.default)(a, "SECTION_MEDIA.items", []),
                        h = (0, i.default)(a, "SECTION_PURCHASE.inStock", !1),
                        C = {
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: o,
                            url: f,
                            description: l,
                            image: "",
                            potentialAction: {
                                "@type": "OrderAction",
                                deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
                                target: {
                                    "@type": "EntryPoint",
                                    inLanguage: "en-US",
                                    url: "",
                                    actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
                                }
                            }
                        };
                    return C.brand = {
                        "@type": "Brand",
                        name: p
                    }, C.offers = {
                        "@type": "Offer",
                        url: f,
                        priceCurrency: "INR",
                        price: (0, m.UZ)((0, i.default)(a, "SECTION_PURCHASE.price", "")),
                        itemCondition: "http://schema.org/NewCondition",
                        availability: "http://schema.org/".concat(h ? "InStock" : "OutOfStock")
                    }, C.image = (e = _.find((function(t) {
                        return "image" === t.type
                    })), (0, i.default)(e, "url") ? e.url : ""), C.sku = c, C
                })), (0, r.Z)(n, f.KT, (function(t) {
                    return {
                        "@context": "https://schema.org",
                        "@type": "Website",
                        name: (0, i.default)(t, "current.title", ""),
                        url: (0, i.default)(t, "current.pageUrl", "")
                    }
                })), (0, r.Z)(n, f.Sh, p.OQ), (0, r.Z)(n, f.li, p.hE), n),
                C = function(t) {
                    var e = t.pageName,
                        a = t.pageObject,
                        n = t.entities,
                        r = t.pageUrl,
                        l = (0, i.default)(h, e, s.default)(a, n);
                    return o.createElement(c.ql, null, o.createElement("link", {
                        rel: "canonical",
                        href: "".concat(_.ho).concat(r)
                    }), o.createElement("script", {
                        type: "application/ld+json"
                    }, JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        name: "Zomato",
                        url: "https://www.zomato.com"
                    })), l && o.createElement("script", {
                        type: "application/ld+json"
                    }, JSON.stringify(l)))
                };
            C.propTypes = {
                pageObject: d().objectOf(d().object),
                entities: d().objectOf(d().object),
                pageName: d().string,
                pageUrl: d().string
            }, C.defaultProps = {
                pageName: "",
                pageUrl: "",
                pageObject: {},
                entities: {}
            };
            const O = (0, u.$j)((function(t) {
                return {
                    pageName: (0, i.default)(t, "pages.current.name", ""),
                    pageUrl: (0, i.default)(t, "pages.current.pageUrl", ""),
                    pageObject: (0, i.default)(t, "pages", {}),
                    entities: (0, i.default)(t, "entities", {})
                }
            }))(C)
        },
        XgaV: (t, e, a) => {
            a.d(e, {
                X: () => r
            });
            var n = a("lXQd"),
                r = function(t) {
                    var e = (0, n.default)(t, "pages.current.skuId", 0),
                        a = (0, n.default)(t, "pages.dotePdp", {});
                    return (0, n.default)(a, "".concat(e, ".sections"), {})
                }
        },
        jdkn: (t, e, a) => {
            a.d(e, {
                Sr: () => p,
                UZ: () => g
            });
            var n, r, o = a("RlfA"),
                i = (a("q1tI"), a("vOnD")),
                s = a("lXQd"),
                l = a("j399"),
                d = a("tsC6"),
                c = (a("AdJq"), a("sLkX"), a("P62M")),
                u = {
                    root: null,
                    rootMargin: "0px",
                    threshold: 1
                },
                p = function(t) {
                    var e = t.observerFn,
                        n = t.ref;
                    if ("IntersectionObserver" in a.g) {
                        var r = (0, s.default)(n, "current", null),
                            o = new IntersectionObserver(e, u);
                        return r && o.observe(r),
                            function() {
                                r && o.unobserve(r)
                            }
                    }
                    return l.default
                },
                g = function(t) {
                    return "string" != typeof t ? t : (0, c.J0)(t.slice(1).split(",").join(""))
                };
            i.default.section(n || (n = (0, o.Z)(["\n  display: flex;\n  align-items: flex-start;\n  padding: 0 1.2rem;\n  width: ", ";\n"])), (function(t) {
                return t.maxContent ? "max-content" : "100%"
            })), i.default.div(r || (r = (0, o.Z)(["\n  margin: 1.6rem -1.2rem;\n  overflow: auto;\n  ", ";\n"])), d.I)
        },
        tsC6: (t, e, a) => {
            a.d(e, {
                I: () => o
            });
            var n, r = a("RlfA"),
                o = (0, a("vOnD").css)(n || (n = (0, r.Z)(["\n  ::-webkit-scrollbar {\n    display: none;\n    background-color: transparent;\n    width: 0;\n    height: 0;\n  }\n  ::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n  ::-webkit-scrollbar-thumb {\n    background-color: transparent;\n  }\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n"])))
        }
    }
]);