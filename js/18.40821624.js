// bus/afinidade.vue

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18], {
    ed50: function(t, i, s) {
        "use strict";
        s.r(i);
        var e = function() {
            var t = this
              , i = t.$createElement
              , s = t._self._c || i;
            return s("z-view", {
                staticClass: "bg-ff-affinity",
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
                attrs: {
                    angle: 90,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "SEGUROS DE LINHAS PESSOAIS E AFINIDADES",
                    "label-pos": "bottom",
                    to: "family"
                }
            }, [s("i", {
                staticClass: "fas fa-home",
                class: 1 == this.isMobile ? "text-subtitle2" : "text-h6"
            })]), s("z-spot", {
                staticClass: "sub-circle acidente-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 15,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "ACIDENTES PESSOAIS",
                    "label-pos": 1 == this.isMobile ? "bottom" : "right"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=affinity-acidente")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle fianca-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 165,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "FIANÇA LOCATÍCIA",
                    "label-pos": 1 == this.isMobile ? "bottom" : "left"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=affinity-fiança")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle stoploss-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 270,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "STOP LOSS",
                    "label-pos": (this.isMobile,
                    "top")
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=affinity-stoploss")
                    }
                }
            }), s("div", {
                staticClass: "absolute-bottom",
                style: t.$q.screen.xl ? "z-index: 999; bottom: -185px;" : t.$q.screen.xs ? "z-index: 999; bottom: -180px;" : "z-index: 999; bottom: -140px;"
            }, [s("q-btn", {
                attrs: {
                    className: "fuuu",
                    icon: "",
                    round: "",
                    color: "green"
                },
                on: {
                    click: function(i) {
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
          , l = s("2877")
          , c = s("9c40")
          , r = s("eebe")
          , b = s.n(r)
          , d = Object(l["a"])(a, e, o, !1, null, null, null);
        i["default"] = d.exports;
        b()(d, "components", {
            QBtn: c["a"]
        })
    }
}]);
