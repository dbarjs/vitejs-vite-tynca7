// bus/empresarial.vue

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
    f794: function(t, i, e) {
        "use strict";
        e.r(i);
        var s = function() {
            var t = this
              , i = t.$createElement
              , e = t._self._c || i;
            return e("z-view", {
                staticClass: "bg-ff-empresarial",
                staticStyle: {
                    "border-width": "8px"
                },
                attrs: {
                    slider: ""
                }
            }, [e("div", {
                attrs: {
                    slot: "extension"
                },
                slot: "extension"
            }, [e("z-spot", {
                staticClass: "sub-circle-info",
                staticStyle: {
                    cursor: "default"
                },
                attrs: {
                    angle: 90,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "SEGUROS EMPRESARIAIS",
                    "label-pos": "bottom",
                    to: "family"
                }
            }, [e("i", {
                staticClass: "fas fa-building",
                class: 1 == this.isMobile ? "text-subtitle2" : "text-h6"
            })]), e("z-spot", {
                staticClass: "sub-circle patrimonial-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 330,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "PATRIMONIAIS",
                    "label-pos": 1 == this.isMobile ? "bottom" : "right"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=emp-patrimoniais")
                    }
                }
            }), e("z-spot", {
                staticClass: "sub-circle responsabilidade-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 30,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "RESPONSABILIDADE CIVIL GERAL",
                    "label-pos": 1 == this.isMobile ? "bottom" : "right"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=emp-responsabilidade")
                    }
                }
            }), e("z-spot", {
                staticClass: "sub-circle maritimo-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 270,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "MARÍTIMO",
                    "label-pos": 1 == this.isMobile ? "bottom" : "top"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=emp-maritimo")
                    }
                }
            }), e("z-spot", {
                staticClass: "sub-circle aeronautico-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 210,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "AERONÁUTICO",
                    "label-pos": 1 == this.isMobile ? "bottom" : "left"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=emp-aeronautico")
                    }
                }
            }), e("z-spot", {
                staticClass: "sub-circle petroleo-icon",
                staticStyle: {
                    cursor: "pointer"
                },
                attrs: {
                    button: !0,
                    angle: 150,
                    size: 1 == this.isMobile ? "s" : "m",
                    distance: 1 == this.isMobile ? 100 : 120,
                    label: "RISCOS DE PETRÓLEO",
                    "label-pos": 1 == this.isMobile ? "bottom" : "left"
                },
                nativeOn: {
                    click: function(i) {
                        return t.To("section=emp-petroleo")
                    }
                }
            }), e("div", {
                staticClass: "absolute-bottom",
                style: t.$q.screen.xl ? "z-index: 999; bottom: -185px;" : t.$q.screen.xs ? "z-index: 999; bottom: -180px;" : "z-index: 999; bottom: -140px;"
            }, [e("q-btn", {
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
            }, [e("q-tooltip", {
                staticClass: "bg-grey-8"
            }, [t._v("Voltar")])], 1)], 1)], 1)])
        }
          , o = []
          , n = {
            data() {
                return {
                    isMobile: !1
                }
            },
            beforeDestroy() {
                if ("undefined" === typeof window)
                    return window.removeEventListener("resize", this.onResize, {
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
          , a = e("2877")
          , c = e("9c40")
          , r = e("05c0")
          , b = e("eebe")
          , u = e.n(b)
          , p = Object(a["a"])(l, s, o, !1, null, null, null);
        i["default"] = p.exports;
        u()(p, "components", {
            QBtn: c["a"],
            QTooltip: r["a"]
        })
    }
}]);
