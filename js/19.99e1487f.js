// bus/agro.vue

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19], {
    "22fe": function(t, i, s) {
        "use strict";
        s.r(i);
        var e = function() {
            var t = this
              , i = t.$createElement
              , s = t._self._c || i;
            return s("z-view", {
                staticClass: "bg-ff-agro",
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
                    label: "SEGUROS AGRO",
                    "label-pos": "bottom",
                    to: "family"
                }
            }, [s("i", {
                staticClass: "fas fa-leaf",
                class: 1 == this.isMobile ? "text-subtitle2" : "text-h6"
            })]), s("z-spot", {
                staticClass: "sub-circle animal-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 40,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: (this.isMobile,
                    "SEGURO DE ANIMAIS"),
                    "label-pos": 1 == this.isMobile ? "bottom" : "right"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=agro-animais")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle agricola-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 345,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: (this.isMobile,
                    "SEGURO AGRÍCOLA"),
                    "label-pos": 1 == this.isMobile ? "top" : "right"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=agro-agricola")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle penhor-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 295,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "PENHOR RURAL",
                    "label-pos": 1 == this.isMobile ? "top" : "right"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=agro-penhor")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle patrimonio-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 245,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "PATRIMONIAL RURAL",
                    "label-pos": 1 == this.isMobile ? "top" : "left"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=agro-patrimonial")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle floresta-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 195,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: this.isMobile ? "SEGURO FLORESTAS" : "SEGURO DE FLORESTAS",
                    "label-pos": 1 == this.isMobile ? "top" : "left"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=agro-florestas")
                    }
                }
            }), s("z-spot", {
                staticClass: "sub-circle pecuario-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 140,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "SEGURO PECUÁRIO",
                    "label-pos": 1 == this.isMobile ? "top" : "left"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=agro-pecuario")
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
          , l = n
          , a = s("2877")
          , c = s("9c40")
          , r = s("eebe")
          , b = s.n(r)
          , u = Object(a["a"])(l, e, o, !1, null, null, null);
        i["default"] = u.exports;
        b()(u, "components", {
            QBtn: c["a"]
        })
    }
}]);
