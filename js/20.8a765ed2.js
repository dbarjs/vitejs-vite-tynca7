// bus/cargo.vue

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20], {
    b06a: function(t, e, s) {
        "use strict";
        s.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("z-view", {
                staticClass: "bg-ff-cargo",
                staticStyle: {
                    "border-width": "8px"
                },
                attrs: {
                    slider: ""
                }
            }, [s("div", {
                attrs: {
                    slot: "extension"
                },
                slot: "extension"
            }, [s("z-spot", {
                staticClass: "sub-circle-info",
                staticStyle: {
                    cursor: "default"
                },
                attrs: {
                    angle: 90,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "SEGUROS CARGO",
                    "label-pos": "bottom",
                    to: "family"
                }
            }, [s("i", {
                staticClass: "fas fa-ship",
                class: 1 == this.isMobile ? "text-subtitle2" : "text-h6"
            })]), s("z-spot", {
                staticClass: "sub-circle transportador-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 0,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "PARA O TRANSPORTADOR",
                    "label-pos": 1 == this.isMobile ? "bottom" : "right"
                },
                nativeOn: {
                    click: function(e) {
                        return t.To("section=cargo-transportador")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle embarcador-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 180,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "PARA O EMBARCADOR",
                    "label-pos": 1 == this.isMobile ? "bottom" : "left"
                },
                nativeOn: {
                    click: function(e) {
                        return t.To("section=cargo-embarcador")
                    }
                }
            }), s("div", {
                staticClass: "absolute-bottom",
                style: t.$q.screen.xl ? "z-index: 999; bottom: -185px;" : t.$q.screen.xs ? "z-index: 999; bottom: -180px;" : "z-index: 999; bottom: -140px;"
            }, [s("q-btn", {
                attrs: {
                    icon: "",
                    round: "",
                    color: "green"
                },
                on: {
                    click: function(e) {
                        return t.GoBack("home")
                    }
                }
            })], 1)], 1)])
        }
          , o = []
          , n = {
            data() {
                return {
                    isMobile: !1
                }
            },
            beforeDestroy() {
                "undefined" !== typeof window && window.removeEventListener("resize", this.onResize, {
                    passive: !0
                })
            },
            mounted() {
                this.onResize(),
                window.addEventListener("resize", this.onResize, {
                    passive: !0
                })
            },
            methods: {
                onResize() {
                    this.isMobile = window.innerWidth < 600
                },
                To(t) {
                    window.open("#/produto?" + t, "_self")
                },
                GoBack(t) {
                    window.scrollTo({
                        top: this.$q.screen.height - 10,
                        behavior: "smooth"
                    }),
                    this.$zircle.setNavigationMode("backward"),
                    this.$zircle.goBack()
                }
            }
        }
          , a = n
          , r = s("2877")
          , l = s("9c40")
          , c = s("eebe")
          , b = s.n(c)
          , d = Object(r["a"])(a, i, o, !1, null, null, null);
        e["default"] = d.exports;
        b()(d, "components", {
            QBtn: l["a"]
        })
    }
}]);
