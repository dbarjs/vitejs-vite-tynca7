// page: produto.vue (all sections)

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16], {
    "63b4": function(o, e, a) {
        "use strict";
        a.r(e);
        var r = function() {
            var o = this
              , e = o.$createElement
              , a = o._self._c || e;
            return a("q-page", {}, [a("q-layout", {
                attrs: {
                    view: "lHr LpR fff"
                }
            }, [a("div", {
                staticClass: "row justify-center items-center text-center q-ma-none"
            }, [a("div", {
                staticClass: "col-12"
            }, [a("q-parallax", {
                attrs: {
                    height: o.$q.screen.gt.sm ? 600 : 510
                },
                scopedSlots: o._u([{
                    key: "media",
                    fn: function() {
                        return [a("video", {
                            attrs: {
                                height: "auto",
                                poster: o.sectionPosterImg,
                                autoplay: "",
                                loop: "",
                                muted: ""
                            },
                            domProps: {
                                muted: !0
                            }
                        }, [a("source", {
                            attrs: {
                                type: "video/mp4",
                                src: o.sectionPoster
                            }
                        })])]
                    },
                    proxy: !0
                }])
            }, [a("div", {
                staticClass: "row justify-center items-center"
            }, [a("span", {
                class: o.$q.screen.gt.sm ? "col-12 q-mt-xl text-white text-h3 text-uppercase" : "col-12 q-mt-xl text-white text-h4 text-uppercase"
            }, [o._v("\n              " + o._s("" == o.sectionTable ? o.section : o.sectionTable) + "\n            ")])])])], 1)]), a("div", {
                class: "" == o.sectionDesc && o.sectionDesc ? "hidden" : "row justify-center items-center text-center q-ma-none"
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "" != o.sectionDesc || !o.sectionDesc,
                    expression: "sectionDesc != '' || !sectionDesc"
                }],
                class: o.$q.screen.gt.sm ? "text-h6 col-9 q-my-lg" : "text-subtitle2 col-9 q-my-lg"
            }, [a("p", {
                class: "" != o.sectionDesc ? "" : "hidden",
                domProps: {
                    innerHTML: o._s(o.sectionDesc)
                }
            })])]), a("q-separator", {
                class: "" != o.sectionDesc ? "q-mb-lg q-py-xs" : "hidden",
                staticStyle: {
                    "background-color": "#f1f1f1"
                }
            }), a("q-intersection", {
                attrs: {
                    transition: "scale"
                }
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "" != o.sectionItems || !o.sectionItems,
                    expression: "sectionItems != '' || !sectionItems "
                }],
                staticClass: "row justify-center items-center"
            }, [a("div", {
                staticClass: "col-9"
            }, [a("q-table", {
                attrs: {
                    grid: "",
                    data: o.sectionItems,
                    filter: o.filter,
                    "hide-header": "",
                    "hide-pagination": "",
                    "row-key": "name",
                    "rows-per-page-options": [50]
                },
                scopedSlots: o._u([{
                    key: "top-left",
                    fn: function() {
                        return [a("span", {
                            staticClass: "text-uppercase text-h6 q-pb-none"
                        }, [o._v(o._s(o.section))]), a("p"), a("span", {
                            class: "" != o.sectionInfo ? "text-uppercase text-caption" : "hidden"
                        }, [o._v(o._s(o.sectionInfo))])]
                    },
                    proxy: !0
                }, {
                    key: "top-right",
                    fn: function() {
                        return [a("q-input", {
                            attrs: {
                                borderless: "",
                                dense: "",
                                debounce: "300",
                                placeholder: "Filtre aqui"
                            },
                            scopedSlots: o._u([{
                                key: "append",
                                fn: function() {
                                    return [a("q-icon", {
                                        attrs: {
                                            name: "search"
                                        }
                                    })]
                                },
                                proxy: !0
                            }]),
                            model: {
                                value: o.filter,
                                callback: function(e) {
                                    o.filter = e
                                },
                                expression: "filter"
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "item",
                    fn: function(e) {
                        return [a("div", {
                            class: 5 == o.sectionItems.length ? "q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-4 row column" : 2 == o.sectionItems.length ? "q-pa-xs col-xs-12 col-sm-12 col-md-6 col-lg-6 row column" : 1 == o.sectionItems.length ? "q-pa-xs col-xs-12 col-sm-12 col-md-12 col-lg-12 row column" : "q-pa-xs col-xs-12 col-sm-6 col-md-3 col-lg-3 row column"
                        }, [a("q-card", {
                            staticClass: "full-height items-stretch",
                            attrs: {
                                flat: "",
                                bordered: ""
                            }
                        }, [a("q-item", [a("q-item-section", [a("q-item-label", {
                            staticClass: "text-subtitle1 text-weight-bold text-center",
                            attrs: {
                                header: ""
                            }
                        }, [o._v(o._s(e.row.nome))]), a("q-item-label", {
                            class: "" != e.row.texto ? "text-black q-pb-none text-center" : "q-my-none hidden"
                        }, [o._v(" " + o._s(e.row.texto))]), a("q-item-label", {
                            class: "" != e.row.more ? "text-black text-center" : "q-my-none hidden"
                        }, [a("span", {
                            domProps: {
                                innerHTML: o._s(e.row.more)
                            }
                        })])], 1)], 1)], 1)], 1)]
                    }
                }, {
                    key: "bottom",
                    fn: function() {
                        return [a("div", {
                            staticClass: "q-pa-xs col-xs-12 col-sm-12 col-md-12 col-lg-12 row column q-pt-xl"
                        }, [a("span", {
                            domProps: {
                                innerHTML: o._s(o.sectionBottom)
                            }
                        })])]
                    },
                    proxy: !0
                }])
            })], 1)]), a("q-separator", {
                class: "" == o.sectionItems && o.sectionItems ? "hidden" : "q-my-lg q-py-xs",
                staticStyle: {
                    "background-color": "#f1f1f1"
                }
            }), a("div", {
                staticClass: "row justify-center items-center"
            }, [a("div", {
                staticClass: "col-9 text-center text-h5 text-weight-bolder q-my-lg"
            }, [o._v("\n          CONHEÇA TAMBÉM NOSSOS OUTROS PRODUTOS\n        ")]), a("div", {
                staticClass: "col-9"
            }, [a("q-table", {
                attrs: {
                    grid: "",
                    data: o.BUs,
                    "hide-header": "",
                    "hide-pagination": "",
                    "row-key": "name",
                    "rows-per-page-options": [50]
                },
                scopedSlots: o._u([{
                    key: "item",
                    fn: function(e) {
                        return [e.row.category === o.sectionCategory && e.row.nome != o.sectionText && "Seguro Aquícola" !== e.row.nome ? a("div", {
                            staticClass: "q-pa-xs col-xs-auto col-sm-auto col-md col-lg row column justify-center items-center"
                        }, [a("q-card", {
                            staticClass: "full-height items-stretch acoes",
                            attrs: {
                                flat: "",
                                clickable: ""
                            },
                            on: {
                                click: function(a) {
                                    return o.To(e.row.codinome)
                                }
                            }
                        }, [a("q-img", {
                            class: "cursor-pointer " + e.row.icon + "-icon",
                            attrs: {
                                src: "",
                                ratio: 1,
                                width: "150px"
                            }
                        }, [a("div", {
                            staticClass: "absolute-full text-subtitle2 text-weight-bolder flex flex-center text-center"
                        }, [o._v("\n                      " + o._s(e.row.nome) + "\n                      "), a("div", {
                            staticClass: "absolute-bottom q-mb-xs"
                        }, [a("q-btn", {
                            attrs: {
                                rounded: "",
                                size: "sm",
                                flat: ""
                            }
                        }, [o._v("clique")])], 1)])])], 1)], 1) : o._e()]
                    }
                }])
            })], 1)]), a("q-separator", {
                staticClass: "q-my-lg q-py-xs",
                staticStyle: {
                    "background-color": "#f1f1f1"
                }
            }), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: null != o.sectionContatos,
                    expression: "sectionContatos != null"
                }],
                staticClass: "row justify-center items-center text-center text-h4 text-weight-bolder q-my-lg"
            }, [o._v("\n        ALGUMA DÚVIDA?\n      ")]), a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: null != o.sectionContatos,
                    expression: "sectionContatos != null"
                }],
                staticClass: "row justify-center items-center text-center"
            }, [a("div", {
                staticClass: "col-md-10 col-10"
            }, [a("q-table", {
                attrs: {
                    grid: "",
                    data: o.sectionContatos,
                    "hide-header": "",
                    "hide-pagination": "",
                    "row-key": "name",
                    "rows-per-page-options": [50]
                },
                scopedSlots: o._u([{
                    key: "item",
                    fn: function(e) {
                        return [a("div", {
                            staticClass: "q-pa-xs col-xs-12 col-sm-6 col-md-6 row column"
                        }, [a("q-card", {
                            staticClass: "full-height items-stretch",
                            attrs: {
                                flat: "",
                                bordered: ""
                            }
                        }, [a("q-item", [a("q-item-section", [a("q-item-label", {
                            staticClass: "text-h6 text-weight-bold",
                            style: "color: " + o.sectionColor
                        }, [o._v(" " + o._s(e.row.nome))])], 1)], 1), a("q-card-section", {
                            staticClass: "justify-center items-center",
                            attrs: {
                                horizontal: 0 == o.$q.screen.lt.sm
                            }
                        }, [a("q-card-section", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "" != e.row.telefone,
                                expression: "props.row.telefone != ''"
                            }]
                        }, [a("q-card-section", {
                            staticClass: "text-center"
                        }, [a("q-img", {
                            attrs: {
                                src: "https://central.fairfax.com.br/source/img/phone-call.png",
                                width: "60px"
                            }
                        })], 1), a("q-card-section", {
                            staticClass: "text-center"
                        }, [o._v("\n                        Contate-nos por telefone:\n                        "), a("br"), a("span", {
                            staticClass: "text-no-wrap"
                        }, [o._v(o._s(e.row.telefone))])])], 1), a("q-card-section", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "" != e.row.email,
                                expression: "props.row.email != ''"
                            }]
                        }, [a("q-card-section", [a("q-img", {
                            attrs: {
                                src: "https://central.fairfax.com.br/source/img/email.png",
                                width: "60px"
                            }
                        })], 1), a("q-card-section", {
                            staticClass: "text-center"
                        }, [o._v("\n                        Contate-nos por email:\n                        "), a("br"), a("a", {
                            attrs: {
                                href: "mailto:" + e.row.email
                            }
                        }, [o._v(o._s(e.row.email))])])], 1)], 1)], 1)], 1)]
                    }
                }])
            })], 1)]), a("q-separator", {
                staticClass: "q-my-xl bg-white"
            }), a("div", {
                class: "" != o.sectionDisclaimer ? "row justify-center items-center text-center q-ma-none" : "hidden"
            }, [a("div", {
                staticClass: "col-9"
            }, [a("p", {
                staticClass: "text-caption q-ma-none",
                staticStyle: {
                    "font-size": "x-small"
                },
                domProps: {
                    innerHTML: o._s(o.sectionDisclaimer)
                }
            })])]), a("div", {
                class: "" != o.sectionObs ? "row justify-center items-center text-center q-ma-none" : "hidden"
            }, [a("div", {
                staticClass: "col-9"
            }, [a("p", {
                staticClass: "text-caption",
                staticStyle: {
                    "font-size": "x-small"
                },
                domProps: {
                    innerHTML: o._s(o.sectionObs)
                }
            })])])], 1)], 1)], 1)
        }
          , s = []
          , i = a("2b0e")
          , t = i["default"].extend({
            name: "Produtos",
            meta() {
                return {
                    title: "FF Produtos » " + this.section
                }
            },
            data() {
                return {
                    tabteste: "mails",
                    splitterModel: 20,
                    section: null,
                    sectionText: null,
                    sectionDesc: null,
                    sectionDisclaimer: null,
                    sectionObs: null,
                    sectionItems: null,
                    sectionIcon: null,
                    sectionContatos: null,
                    sectionPoster: null,
                    sectionColor: null,
                    sectionCategory: null,
                    sectionPosterImg: null,
                    sectionTable: null,
                    filter: "",
                    filterContatos: "",
                    panel: "slide-1",
                    items: "first-line",
                    title: "",
                    message: "",
                    adicional: "",
                    BUs: [{
                        id: "1",
                        category: "agro",
                        icon: "agricola",
                        codinome: "agro-agricola",
                        nome: "Seguro Agrícola",
                        table: "Seguro Agrícola",
                        texto: "O Seguro Agrícola é essencial e pensado na proteção da produção rural. Nosso produto é desenvolvido para atender às necessidades dos produtores rurais por perdas de produção causados, principalmente, por riscos climáticos. O principal produto ofertado é o Seguro Multirrisco Grãos, para grãos de inverno e verão. Para mais informações, temos uma equipe focada e especializada, pronto para atendê-lo.",
                        disclaimer: "",
                        obs: "",
                        info: "",
                        poster: "https://central.fairfax.com.br/source/mp4/agro_agricola.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_agro_agricola.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguro Agrícola e Florestas",
                            email: "agricola_ffb@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }, {
                            id: "2",
                            nome: "Operacional",
                            email: "operacional_agro@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }],
                        color: "#00682C"
                    }, {
                        id: "2",
                        category: "agro",
                        icon: "penhor",
                        codinome: "agro-penhor",
                        nome: "Penhor Rural",
                        table: "Penhor Rural",
                        texto: "Pensado na importância dos bens para produção ou criação, o Seguro Penhor Rural da FF Seguros foi desenvolvido para proteger os bens que estão penhorados em contratos de financiamentos rurais, garantindo que o equipamento estará em operação durante a vigência do contrato gerando estabilidade para a execução das atividades agrícolas. Oferece ainda cobertura contra acidentes de causa externa, furto, incêndio e outros riscos cobertos. Temos uma equipe especializada para atendê-lo e esclarecer qualquer dúvida. Entre em contato!",
                        disclaimer: "",
                        obs: "",
                        info: "",
                        poster: "https://central.fairfax.com.br/source/mp4/agro_penhor.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_agro_penhor.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguro Rural (Bens, Benfeitorias e Penhor Rural)",
                            email: "rural_ffb@fairfax.com.br",
                            telefone: ""
                        }, {
                            id: "2",
                            nome: "Operacional",
                            email: "operacional_agro@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }],
                        color: "#00682C"
                    }, {
                        id: "3",
                        category: "agro",
                        icon: "animal",
                        codinome: "agro-animais",
                        nome: "Seguro de Animais",
                        table: "Seguro de Animais",
                        texto: "Produto desenvolvido para cobrir a morte de animais Equinos, utilizados principalmente para esporte e reprodução, considerados animais de Elite. Possui ainda demais coberturas, como reembolsos para cirurgias e atendimento clínico de emergência, função reprodutiva etc. Para mais informações, temos uma equipe focada e especializada, pronto para atendê-lo!",
                        disclaimer: "",
                        obs: "",
                        info: "",
                        poster: "https://central.fairfax.com.br/source/mp4/agro_animais.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_agro_animais.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguro de Animais/Pecuário/Agrícola",
                            email: "animais_ffb@fairfax.com.br",
                            telefone: "(11) 4872-7649"
                        }, {
                            id: "2",
                            nome: "Operacional",
                            email: "operacional_agro@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }],
                        color: "#00682C"
                    }, {
                        id: "4",
                        category: "agro",
                        icon: "aquicola",
                        codinome: "agro-aquicola",
                        nome: "Seguro Aquícola",
                        table: "Seguro Aquícola",
                        texto: "É um produto desenvolvido para atender às necessidades dos produtores aquícolas garantindo indenização ou reposição de estoque da produção em decorrência da mortalidade, perda física e/ou perda total do valor do mercado (causado por poluição/contaminação da água) das espécies aquáticas. O seguro que pode ser contratado por criatórios “onshore” e “offshore” e conta com as seguintes coberturas: roubo e furto qualificado, predadores, inundação, alagamentos e tsunamis, interrupção acidental do sistema de suprimento de água, seca, incêndio, raio e explosão, temporal e relâmpagos, terremoto, geada e granizo, avaria mecânica e elétrica do maquinário, desoxigenação da água, alteração química da água, doenças, falha estrutural e de equipamento e reembolso de salvamento. Temos uma equipe especializada para atendê-lo e esclarecer qualquer dúvida. Entre em contato!",
                        disclaimer: "",
                        obs: "",
                        info: "",
                        poster: "https://central.fairfax.com.br/source/mp4/agro_aquicola.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_agro_aquicola.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguro Agrícola e Florestas",
                            email: "agricola_ffb@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }, {
                            id: "2",
                            nome: "Operacional",
                            email: "operacional_agro@fairfax.com.br",
                            telefone: "(11) 5555-5757 R: 4656"
                        }],
                        color: "#00682C"
                    }, {
                        id: "5",
                        category: "agro",
                        icon: "floresta",
                        codinome: "agro-florestas",
                        nome: "Seguro de Florestas",
                        table: "Seguro de Florestas",
                        texto: "Este produto foi desenvolvido para atender às necessidades dos proprietários de florestas comerciais e/ou nativas contra a perda de árvores causada, basicamente, por: incêndio, incluindo aqueles causados por queda de raio, explosão e queda de aeronaves. Nosso produto conta ainda com a possibilidade de contratar as seguintes coberturas de despesas de combate aos incêndios, fenômenos meteorológicos, incêndio em madeira cortada e ventos fortes. Temos uma equipe especializada para atendê-lo e esclarecer qualquer dúvida. Entre em contato!",
                        disclaimer: "",
                        obs: "",
                        info: "",
                        poster: "https://central.fairfax.com.br/source/mp4/agro_florestas.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_agro_florestas.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguro Agrícola e Florestas",
                            email: "floresta_ffb@fairfax.com.br",
                            telefone: ""
                        }, {
                            id: "2",
                            nome: "Operacional",
                            email: "operacional_agro@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }],
                        color: "#00682C"
                    }, {
                        id: "6",
                        category: "agro",
                        icon: "patrimonio",
                        codinome: "agro-patrimonial",
                        nome: "Patrimonial Rural",
                        table: "Patrimonial Rural",
                        texto: "Sabemos que o setor agropecuário é de grande importância no cenário nacional, por isso nossos produtos foram desenvolvidos para garantir a estabilidade e segurança para a produção/criação do pecuarista e do agricultor. Nosso produto foi desenvolvido para proteger os bens da atividade agrícola, máquinas, implementos, equipamentos e construções rurais, garantindo tranquilidade ao produtor rural desenvolver sua atividade. Em uma única apólice é possível cobrir as máquinas e a propriedade rural. Oferecendo cobertura contra acidentes de causa externa, furto, incêndio e outros riscos cobertos. ",
                        disclaimer: "",
                        obs: "",
                        info: "",
                        poster: "https://central.fairfax.com.br/source/mp4/agro_patrimonio.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_agro_patrimonio.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguro Rural (Bens, Benfeitorias e Penhor Rural)",
                            email: "rural_ffb@fairfax.com.br",
                            telefone: "(11) 3041-3074"
                        }, {
                            id: "2",
                            nome: "Operacional",
                            email: "operacional_agro@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }],
                        color: "#00682C"
                    }, {
                        id: "7",
                        category: "agro",
                        icon: "pecuario",
                        codinome: "agro-pecuario",
                        nome: "Seguro Pecuário",
                        table: "Seguro Pecuário",
                        texto: "Segurança e Perpetuidade do negócio. Nosso produto foi desenvolvido tanto para animais de elite quanto para o rebanho, dando garantia de indenização ao produtor, caso algum animal venha a óbito pelos riscos cobertos na apólice de seguro, minimizando assim os prejuízos e tranquilizando o produtor nos investimentos realizados. Por se tratar de uma modalidade enquadrada no Seguro Rural, a contratação do seguro pecuário possui isenção de taxa de IOF e a aplicação do Programa de Subvenção ao Prêmio do Seguro Rural (PSR) que oferece a oportunidade de segurar sua criação com custo reduzido, por meio de auxílio financeiro do Governo Federal e de alguns Estados.",
                        disclaimer: "",
                        obs: "",
                        info: "",
                        poster: "https://central.fairfax.com.br/source/mp4/agro_penhor.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_agro_penhor.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguro Rural (Bens, Benfeitorias e Penhor Rural)",
                            email: "pecuário_ffb@fairfax.com.br",
                            telefone: "(11) 3529-3320"
                        }, {
                            id: "2",
                            nome: "Operacional",
                            email: "operacional_agro@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }],
                        color: "#00682C"
                    }, {
                        id: "8",
                        category: "empresarial",
                        icon: "patrimonial",
                        codinome: "emp-patrimoniais",
                        nome: "Seguros Patrimoniais",
                        table: "",
                        texto: "Pensando na proteção de seus bens, desenvolvemos produtos versáteis e adaptáveis para garantir a melhor cobertura. Nos preocupamos com o bem-estar de sua família e com a continuidade de seus negócios, de acordo com o tamanho, do faturamento ou da área de atuação da sua empresa.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Multirisco Compreensivo Empresarial15414.000829/2010-96, Multirisco COMPREENSIVO EMPRESARIAL – NOMEADOS 15414.900295/2018-69, Multirisco COMPREENSIVO EMPRESARIAL – OPERACIONAIS 15414.900296/2018-11, Multirisco COMPREENSIVO EMPRESARIAL – RODOVIAS 15414.900341/2018-20, Riscos Diversos 15414.001456/2010-82, Riscos Operacionais 15414.000889/2010-11, Riscos Nomeados 15414.001235/2010-12, Rodovias 15414.000849/2010-79, SECUNDÁRIO DE LUCROS CESSANTES 15414.000827/2010-17, SECUNDÁRIO DE LUCROS CESSANTES (RN) 15414.000843/2010-00, SECUNDÁRIO DE PERDA DE RECEITA (RO) 15414.000845/2010-91, SECUNDÁRIO DE RISCOS DE ENGENHARIA 15414.901145/2018-72, SECUNDÁRIO DE RC 15414.900173/2018-72",
                        obs: 'A aceitação do seguro estará sujeita à análise do risco pela Seguradora; o registro deste plano na Susep não implica, por parte da Autarquia, incentivo ou recomendação a sua comercialização; o segurado poderá consultar a situação cadastral de seu corretor de seguros, no site <a href="http://www.susep.gov.br" target="_blank">www.susep.gov.br</a>, por meio do número de seu registro na SUSEP, nome completo, CNPJ ou CPF.',
                        poster: "https://central.fairfax.com.br/source/mp4/empresa_patrimonio.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_empresa_patrimonio.jpg",
                        items: [{
                            id: "1",
                            nome: "Compreensivo Empresarial",
                            texto: "Seguro destinado a segurar e proteger empresas de pequeno e médio porte.",
                            more: "Tem como diferencial a escolha de coberturas específicas para que sua empresa fique protegida da melhor forma."
                        }, {
                            id: "2",
                            nome: "Riscos Nomeados",
                            texto: "",
                            more: "Modalidade de seguro mais conhecida como “Named Perils” e é destinado a segurar empresas de médio e grande porte. Como característica principal da apólice, destaca-se a nomeação das garantias contratadas pelo segurado e poderá incluir a cobertura de Lucros Cessantes ou Perda de Receitas, decorrente de um dano material coberto."
                        }, {
                            id: "3",
                            nome: "Riscos Operacionais",
                            texto: "",
                            more: "Modalidade de seguro mais conhecida como “All Risks”, destinado à segurar empresas de grande porte, cobrindo os danos materiais sofridos pelos objetos segurados à exceção dos riscos excluídos. Esta modalidade pode, ainda, incluir a cobertura para Lucros Cessantes ou Perda de Receitas."
                        }, {
                            id: "4",
                            nome: "Riscos Diversos – Equipamentos Móveis, Estacionários e Portáteis",
                            texto: "",
                            more: "Seguro destinado aos setores Industrial, Construção Civil e Comércio/Serviços atendendo equipamentos de grande e médio porte, como os utilizados em um pequeno comércio até os de maior complexidade e valor agregado, como guindastes, gruas e similares."
                        }, {
                            id: "5",
                            nome: "Construção Civil e Projetos de Engenharia",
                            texto: "Um produto pensado para proteger o construtor e/ou proprietário da obra por perdas ou danos materiais, de origem súbita e imprevista, ocorridos durante a execução da obra, atendendo as seguintes modalidades:",
                            more: "Riscos de Engenharia; <br/><br/> Perda de Lucros Esperados (ALoP); <br/><br/> Responsabilidade Civil decorrente das Obras;"
                        }],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "RN/RO/Empresarial",
                            email: "property_ffb@fairfax.com.br",
                            telefone: ""
                        }, {
                            id: "2",
                            nome: "Riscos de Engenharia/RC Obras",
                            email: "construction_oilgas@fairfax.com.br",
                            telefone: "(11) 4872-7647"
                        }],
                        color: "#117CFD"
                    }, {
                        id: "9",
                        category: "empresarial",
                        icon: "responsabilidade",
                        codinome: "emp-responsabilidade",
                        nome: "Seguros de Responsabilidade Civil Geral",
                        table: "Responsabilidade Civil Geral",
                        texto: "O seguro de Responsabilidade Civil Geral é destinado à empresas que querem se proteger de perdas decorrentes de danos que sua operação possa causar à terceiros. Abrange diversas atividades, sempre com agilidade na tomada de decisão e expertise de seus profissionais. Entre outras coberturas oferecemos proteção para danos decorrentes da existência, uso e conservação dos imóveis do segurado, prestação de serviços em locais de terceiros, realização de obras civis, defeitos de produtos fabricados, distribuídos ou comercializados nacional ou internacionalmente, morte e Invalidez total ou parcial, recall e danos morais.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – RCG – Empresas Concessionárias ou Não de Pontes e/ou Rodovias (2013) 15414.900717/2013-91, RCG – Limite Único – Obras (2013) 15414.900717/2013-91, RC Reparador Naval 15414.900438/2014-17",
                        obs: "A aceitação do seguro estará sujeita à análise do risco pela Seguradora; o registro deste plano na Susep não implica, por parte da Autarquia, incentivo ou recomendação a sua comercialização; ",
                        poster: "https://central.fairfax.com.br/source/mp4/empresa_resp_civil_geral.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_empresa_resp_civil_geral.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Resp. Civil Geral",
                            email: "rcg@fairfax.com.br",
                            telefone: ""
                        }],
                        color: "#117CFD"
                    }, {
                        id: "10",
                        category: "empresarial",
                        icon: "maritimo",
                        codinome: "emp-maritimo",
                        nome: "Seguros Marítimos",
                        table: "Marítimos",
                        texto: "Para navegar com segurança e tranquilidade, a proteção do seu patrimônio, passageiros e tripulação são essenciais. Nossos seguros atendem de acordo com a necessidade de seu negócio. Conheça um pouco mais nossas cobertas ou entre em contato com nossa equipe.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Operador Portuário 15414.000717/2010-47, RCF-Embarcações 15414.000719/2010-36, P&I 15414.633634/2019-77, Cascos 15414.000760/2010-11, Náutico 15414.900530/2015-50",
                        obs: "A aceitação do seguro estará sujeita à análise do risco pela Seguradora; o registro deste plano na Susep não implica, por parte da Autarquia, incentivo ou recomendação a sua comercialização;",
                        poster: "https://central.fairfax.com.br/source/mp4/empresa_maritimo.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_empresa_maritimo.jpg",
                        items: [{
                            id: "1",
                            nome: "Operador Portuário e/ou Logístico",
                            texto: "Destinado a empresas com operações portuárias em área de porto organizado ou empresas que movimentam e/ou armazenam mercadorias destinadas e/ou provenientes de transporte aquaviário, englobando Responsabilidade Civil do Segurado, Riscos Patrimoniais e Perda de Receita.",
                            more: ""
                        }, {
                            id: "2",
                            nome: "Cascos Marítimos, Construção Naval e Resp. Civil do Reparador Naval",
                            texto: "Seguros para cobrir perdas ou danos que atinjam a embarcação, seu casco, suas máquinas e todos os seus aparelhos e pertences, em serviços de vias navegáveis. Algumas modalidades envolvidas são cascos marítimos (H&M), construção naval (Builder’s Risk) e Responsabilidade Civil do Reparador Naval.",
                            more: ""
                        }, {
                            id: "3",
                            nome: "Responsabilidade Civil Facultativa para Embarcações",
                            texto: "Seguro de Responsabilidade Civil do proprietário ou armador da embarcação cobrindo danos de abalroação, colisão com objetos fixos ou flutuantes, danos à carga, doenças, acidentes ou morte de tripulantes, poluição súbita, remoção de destroços, entre ouras coberturas.",
                            more: ""
                        }, {
                            id: "4",
                            nome: "Seguro Náutico",
                            texto: "Esteja seguro no seu momento de relaxar. O Seguro Náutico Fairfax foi desenvolvido para embarcações de recreio, veleiros e iates, para que você tenha uma viagem tranquila.",
                            more: ""
                        }],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Op. Portuário/Cascos Marítimos/P&I",
                            email: "maritimos@fairfax.com.br",
                            telefone: ""
                        }, {
                            id: "2",
                            nome: "Embarcações de recreio",
                            email: "nautico@fairfax.com.br",
                            telefone: ""
                        }],
                        color: "#117CFD"
                    }, {
                        id: "11",
                        category: "empresarial",
                        icon: "aeronautico",
                        codinome: "emp-aeronautico",
                        nome: "Seguro Aeronáutico",
                        table: "Aeronáutico",
                        texto: "Você precisa se locomover de forma rápida e segura? Nós te acompanhamos nessa viagem. Com o Seguro Aeronáutico FF, você conta com coberturas sob medida para aviação executiva. Temos condições personalizadas e capazes de atender às suas necessidades para diferentes operações e tipos de aeronaves, tais como: aeronaves a jato, a pistão bimotor, turboélices mono e bimotores e helicópteros turbinados. Oferecemos seguros Aeronáuticos (Casco), Responsabilidade Civil Facultativa para Aeronaces (RCF) e Responsabilidade do Explorador ou Transportador Aéreo (RETA).",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Cascos 15414.901232-2016-68, RCF 15414.000718/2010-91, RETA 15414.900658-2018-66",
                        obs: "A aceitação do seguro estará sujeita à análise do risco pela Seguradora; o registro deste plano na Susep não implica, por parte da Autarquia, incentivo ou recomendação a sua comercialização;",
                        poster: "https://central.fairfax.com.br/source/mp4/empresa_aeronautico.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_empresa_aeronautico.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Aeronáutico",
                            email: "aviation-ffb@fairfax.com.br",
                            telefone: ""
                        }],
                        color: "#117CFD"
                    }, {
                        id: "12",
                        category: "empresarial",
                        icon: "petroleo",
                        codinome: "emp-petroleo",
                        nome: "Seguro para Riscos de Petróleo",
                        table: "Riscos de Petróleo",
                        texto: "Produtos de seguro pensados para produzir em segurança onshore e offshore.  Tudo o que você precisa, desde a proteção de equipamentos, bens, Responsabilidade Civil das Operações e Prestadores de Serviços, Despesas Extras até Aplicação em Obras de Construção e Instalação de Plataformas.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Riscos de Petróleo 15414.902218/2013-39, Prestadores 15414.002872/2011-89, Equipamentos 15414.000873/2010-16, Construção Offshore 15414.000554/2012-64, OEE 15414.005474/2012-03, OEE 15414.902178/2013-25, Construção Naval 15414.000873/2010-16, Riscos de Petróleo 15414.900889/2016-16",
                        obs: 'A aceitação do seguro estará sujeita à análise do risco pela Seguradora; o registro deste plano na Susep não implica, por parte da Autarquia, incentivo ou recomendação a sua comercialização; o segurado poderá consultar a situação cadastral de seu corretor de seguros, no site <a href="http://www.susep.gov.br" target="_blank">www.susep.gov.br</a>, por meio do número de seu registro na SUSEP, nome completo, CNPJ ou CPF.',
                        poster: "https://central.fairfax.com.br/source/mp4/empresa_petroleo.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_empresa_petroleo.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Riscos de Petróleo",
                            email: "riscospetroleo@fairfax.com.br",
                            telefone: ""
                        }],
                        color: "#117CFD"
                    }, {
                        id: "13",
                        category: "cargo",
                        icon: "embarcador",
                        codinome: "cargo-embarcador",
                        nome: "Seguros para Embarcadores",
                        table: "Seguro Embarcador",
                        texto: "É preciso garantir que tudo chegue ao seu destino, seja por vias aquaviárias, terrestres ou aéreas. Nosso Seguro Transportes FF tem solução sob medida para cada operação, equipes especializadas e diferenciais que você só encontra aqui. Para o Embarcador, proprietário da mercadoria, o seguro de transportes é contratado pelo proprietário da carga e garante ao segurado a indenização pelos prejuízos causados aos bens segurados durante o seu transporte em viagens de percursos nacionais e internacionais.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – RC Transportador – viagem internacional 15141.900712/2016-10, RC Transportador Aéreo – Carga 15414.000708/2010-56, RC Transportador Rodoviário – Carga 15414.000712/2010-14, RC Facultativa – Desvio de Carga 15414.001938/2012-02, RC Transportador Aquaviário – Carga 15414.000711/2010-70.",
                        obs: 'A aceitação do seguro estará sujeita à análise do risco pela Seguradora; o registro deste plano na Susep não implica, por parte da Autarquia, incentivo ou recomendação a sua comercialização; o segurado poderá consultar a situação cadastral de seu corretor de seguros, no site <a href="http://www.susep.gov.br" target="_blank">www.susep.gov.br</a>, por meio do número de seu registro na SUSEP, nome completo, CNPJ ou CPF.',
                        poster: "https://central.fairfax.com.br/source/mp4/cargo_embarcador.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_cargo_embarcador.jpg",
                        items: [{
                            id: "1",
                            nome: "Transporte Nacional (Ramo 21)",
                            texto: "Seguro destinado à carga transportada por meio rodoviário, aquaviário, aéreo ou férreo, em qualquer localidade do território brasileiro. Coberturas (básicas, adicionais e específicas) sob consulta.",
                            more: ""
                        }, {
                            id: "2",
                            nome: "Transporte Internacional - Importação e Exportação (Ramo 22)",
                            texto: "Seguro destinado à carga transportada por meio rodoviário, aquaviário, aéreo ou férreo sob o âmbito geográfico de importação e exportação, de acordo com as responsabilidades definidas no INCOTERM negociado. Coberturas (básicas, adicionais e específicas) sob consulta.",
                            more: ""
                        }],
                        contatos: [{
                            id: "1",
                            nome: "Seguros Cargo",
                            email: "marine-ffb@fairfax.com.br",
                            telefone: ""
                        }],
                        bottom: "",
                        color: "#452D4D"
                    }, {
                        id: "14",
                        category: "cargo",
                        icon: "transportador",
                        codinome: "cargo-transportador",
                        nome: "Seguros para Transportadores",
                        table: "Seguro Transportador",
                        texto: "Para empresas responsáveis pelo transporte de mercadorias de terceiros, nosso Seguro Transporte FF para Transportador conta com Responsabilidade Civil do Transportador, sendo este obrigatoriamente contratado pela empresa de transporte, cobrindo prejuízos pelos quais o próprio transportador seja responsável, como colisão, capotagem, abalroamento, incêndio ou explosão no veículo transportador. Temos uma equipe especializada pronta para atende-lo.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Transporte Nacional 15414.000949/2010-03, Transporte Internacional 15414.000948/2010-51.",
                        obs: 'A aceitação do seguro estará sujeita à análise do risco pela Seguradora; o registro deste plano na Susep não implica, por parte da Autarquia, incentivo ou recomendação a sua comercialização; o segurado poderá consultar a situação cadastral de seu corretor de seguros, no site <a href="http://www.susep.gov.br" target="_blank">www.susep.gov.br</a>, por meio do número de seu registro na SUSEP, nome completo, CNPJ ou CPF.',
                        poster: "https://central.fairfax.com.br/source/mp4/cargo_transportador.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_cargo_transportador.jpg",
                        items: [{
                            id: "1",
                            nome: "Responsabilidade Civil do Transportador Rodoviário em Viagem Internacional - Danos à Carga Transportada - RCTR-VI-C (Ramo 32)",
                            texto: "Seguro destinado à carga de terceiros, por meio rodoviário e através de empresas de transportes devidamente licenciadas, atendendo em território internacional e com coberturas para colisão, capotagem, abalroamento e/ou tombamento do veículo transportador; incêndio ou explosão no veículo transportador. *",
                            more: ""
                        }, {
                            id: "2",
                            nome: "Responsabilidade Civil do Transportador Rodoviário de Carga (Ramo 54)",
                            texto: "Seguro destinado à carga de terceiros, por meio rodoviário e através de empresas de transportes devidamente licenciadas, atendendo qualquer localidade do território brasileiro e com coberturas para colisão, capotagem, abalroamento e/ou tombamento do veículo transportador; incêndio ou explosão no veículo transportador.",
                            more: ""
                        }, {
                            id: "3",
                            nome: "Responsabilidade Civil Facultativa do Transportador Rodoviário por Desvio de Carga (Ramo 55)",
                            texto: "Seguro destinado à carga de terceiros, por meio rodoviário e através de empresas de transportes devidamente licenciadas, atendendo qualquer localidade do território brasileiro, cobrindo desaparecimento total da carga, junto ao veículo, durante o transporte, em decorrência de apropriação indébita e/ou estelionato, furtos ou extorsão e roubos. ",
                            more: ""
                        }, {
                            id: "4",
                            nome: "Responsabilidade Civil do Transportador Aéreo de Carga (Ramo 52)",
                            texto: "Seguro destinado à carga de terceiros, por meio aéreo, em todo o território brasileiro, cobrindo colisão, queda ou aterrissagem forçada, incêndio ou explosão da aeronave ou depósitos.",
                            more: ""
                        }, {
                            id: "5",
                            nome: "Responsabilidade Civil do Transportador Aquaviário de Carga (Ramo 56)",
                            texto: "Também destinado à carga de terceiros, para qualquer localidade do território brasileiro, pelo meio aquaviário. Cobertura de encalhe, varação, naufrágio ou soçobramento do navio ou embarcação, Incêndio ou explosão, no navio ou embarcação ou depósitos.",
                            more: ""
                        }],
                        bottom: '<span class="text-left">* Convênios estabelecidos com Seguradoras estrangeiras para o seguro de RCTR-VI – Responsabilidade Civil do Transportador Rodoviário – Viagem Internacional, de acordo com a Circular SUSEP nº 617, de 23 de novembro de 2020. <br/>ARGENTINA Razão Social: La Meridional Compañía Argentina de Seguros S.A. <br/>Tipo de Seguro: <br/>RCTR-VI – Responsabilidade Civil do Transportador Rodoviário – Viagem Internacional <br/>País de estabelecimento: Argentina <br/>Número de registro: 07062021 <br/>Número do Convênio: FF 001 <br/>Data de início do Convênio: 07/06/2021 <br/>Data de término do Convênio: indefinido <br/>Endereço: Tte. General Juan Domingo Perón 646 – Piso: 4 - Ciudad Autónoma de Buenos Aires – República Argentina <br/>Telefone: +54 11 49090 7000 <br/>Email: denunciasempresas@meridionalseguros.com.ar <br/>Site: www.meridionalseguros.com.ar </span>',
                        contatos: [{
                            id: "1",
                            nome: "Seguros Cargo",
                            email: "marine-ffb@fairfax.com.br",
                            telefone: ""
                        }],
                        color: "#452D4D"
                    }, {
                        id: "15",
                        category: "afinidade",
                        icon: "acidente",
                        codinome: "affinity-acidente",
                        nome: "Seguro de Acidentes Pessoais",
                        table: "",
                        texto: "Seus colaboradores precisam trabalhar com tranquilidade., pois sabemos que acidentes acontecem em nosso dia a dia. O Seguro de Acidentes Pessoais da FF Seguros foi pensado para que seus colaboradores tenham tranquilidade e, em caso de algum acidente coberto, suas famílias também estejam amparadas.",
                        disclaimer: "",
                        obs: "",
                        poster: "https://central.fairfax.com.br/source/mp4/pessoas_acidente.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_pessoas_acidente.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguros de Linhas Pessoais e Afinidades",
                            email: "affinity_ffb@fairfax.com.br",
                            telefone: "(11) 3529-3329"
                        }],
                        color: "#FF8000"
                    }, {
                        id: "16",
                        category: "afinidade",
                        icon: "fianca",
                        codinome: "affinity-fiança",
                        nome: "Seguro de Fiança Locatícia",
                        table: "",
                        texto: "Alugue sem preocupações e burocracia e ainda conte com agilidade para o inquilino e segurança para o proprietário. Com Seguro de Fiança Locatícia para pessoa física você não precisa de fiador e é um custo que cabe no seu bolso. Se você é o proprietário do imóvel, protege seu bolso e seu patrimônio.",
                        disclaimer: "",
                        obs: "",
                        poster: "https://central.fairfax.com.br/source/mp4/pessoas_fianca.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_pessoas_fianca.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguros de Linhas Pessoais e Afinidades",
                            email: "affinity_ffb@fairfax.com.br",
                            telefone: "(11) 3529-3329"
                        }],
                        color: "#FF8000"
                    }, {
                        id: "17",
                        category: "afinidade",
                        icon: "stoploss",
                        codinome: "affinity-stoploss",
                        nome: "Seguro Stop Loss",
                        table: "",
                        texto: "O Seguro de Excedente de Perdas Financeiras para planos de assistência médica - Stop Loss - é um seguro que limita as perdas decorrentes de gastos médicos relacionados a eventos de alto custo. A cobertura é personalizada de acordo com a experiência de cada empresa.",
                        disclaimer: "",
                        obs: "",
                        poster: "https://central.fairfax.com.br/source/mp4/pessoas_stop.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_pessoas_stop.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguros de Linhas Pessoais e Afinidades",
                            email: "affinity_ffb@fairfax.com.br",
                            telefone: "(11) 3529-3329"
                        }],
                        color: "#FF8000"
                    }, {
                        id: "18",
                        category: "financeiro",
                        icon: "profissional",
                        codinome: "finance-profissional",
                        nome: "Responsabilidade Civil Profissional - E&O",
                        table: "",
                        texto: "Fique focado em seu trabalho, protegendo você ou sua empresa. Nosso seguro cobre os danos ou prejuízos decorrentes de falhas profissionais. Algumas das modalidades atendidas por nosso seguro são para profissionais liberais como médicos, dentistas, corretoras de seguros, entre outros.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Stop Loss 15414.005259/2011-13",
                        obs: "",
                        poster: "https://central.fairfax.com.br/source/mp4/finan_profissional.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_finan_profissional.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguros Linhas Financeiras",
                            email: "cadastro@fairfax.com.br",
                            telefone: "(11) 4872-7652 / (11) 3041-3069"
                        }],
                        color: "#FCF909"
                    }, {
                        id: "19",
                        category: "financeiro",
                        icon: "executivo",
                        codinome: "finance-executivo",
                        nome: "Seguro de Responsabilidade Civil Executivos - D&O",
                        table: "",
                        texto: "O Seguro de Responsabilidade Civil dos Administradores (D&O) é contratado pela empresa em benefício dos seus administradores. Tem como objetivo a proteção do patrimônio particular do administrador, em virtude da responsabilidade pessoal, solidária, subsidiária ou devido à desconsideração da personalidade jurídica do gestor, caso esse venha a ser reclamado por terceiros (acionistas, empregados, consumidores, entidades governamentais, etc.), por perdas ou danos resultantes de atos da sua gestão, enquanto no exercício de sua função.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Stop Loss 15414.005259/2011-13",
                        obs: "",
                        poster: "https://central.fairfax.com.br/source/mp4/finan_executivo.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_finan_executivo.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguros Linhas Financeiras",
                            email: "cadastro@fairfax.com.br",
                            telefone: "(11) 4872-7652 / (11) 3041-3069"
                        }],
                        color: "#FCF909"
                    }, {
                        id: "20",
                        category: "financeiro",
                        icon: "garantia",
                        codinome: "finance-garantia",
                        nome: "Seguro Garantia",
                        table: "Seguro Garantia",
                        texto: "Pensando na proteção do seu negócio, o Seguro Garantia FF Seguros visa o cumprimento de contratos (Performance Bonds), licitações (BID Bonds) e Concessões, que são garantias tradicionais. Ainda oferecemos todas as modalidades de Seguro Garantia Judicial (Fiscais, Cíveis, Trabalhistas, Recursais) e também Fiança Locatícia. Temos uma equipe focada e especializa, pronta para atende-lo.",
                        disclaimer: "Para maiores informações, consulte os termos e condições contratuais do seguro, bem como o registro do produto da Fairfax Brasil Seguros Corporativos S/A, CNPJ nº 10.793.428/0001-92, junto à Superintendência de Seguros Privados – Susep, por meio do seguinte número de processos – Stop Loss 15414.005259/2011-13",
                        obs: "",
                        poster: "https://central.fairfax.com.br/source/mp4/finan_garantia.mp4",
                        posterImg: "https://central.fairfax.com.br/source/img/pre_finan_garantia.jpg",
                        items: [],
                        bottom: "",
                        contatos: [{
                            id: "1",
                            nome: "Seguros Linhas Financeiras",
                            email: "cadastro@fairfax.com.br",
                            telefone: "(11) 4872-7652 / (11) 3041-3069"
                        }],
                        color: "#FCF909"
                    }]
                }
            },
            mounted: function() {
                let o = 0;
                for (o = 0; o <= this.BUs.length; o++)
                    this.$route.query.section === this.BUs[o].codinome && (this.section = this.BUs[o].nome,
                    this.sectionCategory = this.BUs[o].category,
                    this.sectionIcon = this.BUs[o].icon,
                    this.sectionText = this.BUs[o].nome,
                    this.sectionDesc = this.BUs[o].texto,
                    this.sectionDisclaimer = this.BUs[o].disclaimer,
                    this.sectionObs = this.BUs[o].obs,
                    this.sectionInfo = this.BUs[o].info,
                    this.sectionItems = this.BUs[o].items,
                    this.sectionContatos = this.BUs[o].contatos,
                    this.sectionPoster = this.BUs[o].poster,
                    this.sectionPosterImg = this.BUs[o].posterImg,
                    this.sectionTable = this.BUs[o].table,
                    this.sectionColor = this.BUs[o].color,
                    this.sectionBottom = this.BUs[o].bottom)
            },
            methods: {
                To(o) {
                    this.$router.push("produto?section=" + o),
                    this.$router.go({
                        path: "produto?section=" + o,
                        force: !0
                    })
                }
            }
        })
          , n = t
          , c = a("2877")
          , d = a("9989")
          , m = a("4d5a")
          , l = a("639d")
          , p = a("eb85")
          , u = a("ad56")
          , g = a("eaac")
          , f = a("27f9")
          , b = a("0016")
          , v = a("f09f")
          , x = a("66e5")
          , h = a("4074")
          , S = a("0170")
          , C = a("068f")
          , q = a("9c40")
          , R = a("a370")
          , P = a("eebe")
          , _ = a.n(P)
          , w = Object(c["a"])(n, r, s, !1, null, null, null);
        e["default"] = w.exports;
        _()(w, "components", {
            QPage: d["a"],
            QLayout: m["a"],
            QParallax: l["a"],
            QSeparator: p["a"],
            QIntersection: u["a"],
            QTable: g["a"],
            QInput: f["a"],
            QIcon: b["a"],
            QCard: v["a"],
            QItem: x["a"],
            QItemSection: h["a"],
            QItemLabel: S["a"],
            QImg: C["a"],
            QBtn: q["a"],
            QCardSection: R["a"]
        })
    }
}]);
