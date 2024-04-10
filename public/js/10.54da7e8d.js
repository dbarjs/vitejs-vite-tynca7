(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [10],
  {
    '713b': function (t, a, s) {
      'use strict';
      s.r(a);
      var e = function () {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s(
            'q-layout',
            {
              attrs: {
                view: 'lHh Lpr fff',
                id: 'top-page',
              },
            },
            [
              s(
                'q-header',
                {
                  staticClass: 'header',
                  attrs: {
                    elevated: '',
                  },
                },
                [
                  s(
                    'q-toolbar',
                    {
                      class:
                        0 == t.Top && '/' == t.$route.path
                          ? 'header'
                          : 'ff-gray-900',
                    },
                    [
                      s(
                        'q-btn',
                        {
                          staticClass: 'q-px-xs hide-on-drawer-visible',
                          attrs: {
                            type: 'a',
                            flat: '',
                            dense: '',
                          },
                          on: {
                            click: function (a) {
                              return t.scrollWindow();
                            },
                          },
                        },
                        [
                          s(
                            'q-avatar',
                            {
                              attrs: {
                                rounded: '',
                                size: '42px',
                              },
                            },
                            [
                              s('img', {
                                staticClass: 'q-py-sm q-mx-sm',
                                attrs: {
                                  src: 'https://central.fairfax.com.br/source/img/ff-logo-negativo.png',
                                },
                              }),
                            ]
                          ),
                        ],
                        1
                      ),
                      s('q-space'),
                      t.$q.screen.gt.sm
                        ? s(
                            'div',
                            [
                              s(
                                'q-tabs',
                                [
                                  s('q-btn', {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value:
                                          'home' !==
                                          this.$router.history.current.name,
                                        expression:
                                          "this.$router.history.current.name !== 'home'",
                                      },
                                    ],
                                    attrs: {
                                      type: 'a',
                                      stretch: '',
                                      flat: '',
                                      label: 'PÁGINA INICIAL',
                                      to: '/',
                                    },
                                  }),
                                  s('q-separator', {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value:
                                          'home' ==
                                          this.$router.history.current.name,
                                        expression:
                                          "this.$router.history.current.name == 'home'",
                                      },
                                    ],
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      dark: '',
                                      vertical: '',
                                    },
                                  }),
                                  s('q-btn', {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value:
                                          'home' ==
                                          this.$router.history.current.name,
                                        expression:
                                          "this.$router.history.current.name == 'home'",
                                      },
                                    ],
                                    attrs: {
                                      type: 'a',
                                      stretch: '',
                                      flat: '',
                                      label: 'PRODUTOS FF',
                                    },
                                    nativeOn: {
                                      click: function (a) {
                                        return t.scrollWindow('bu');
                                      },
                                    },
                                  }),
                                  s('q-separator', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      dark: '',
                                      vertical: '',
                                    },
                                  }),
                                  s('q-btn', {
                                    attrs: {
                                      type: 'a',
                                      stretch: '',
                                      flat: '',
                                      label: 'FF PLACE',
                                      to: 'ffplace',
                                    },
                                  }),
                                  s('q-separator', {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value:
                                          'home' ==
                                          this.$router.history.current.name,
                                        expression:
                                          "this.$router.history.current.name == 'home'",
                                      },
                                    ],
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      dark: '',
                                      vertical: '',
                                    },
                                  }),
                                  s('q-btn', {
                                    directives: [
                                      {
                                        name: 'show',
                                        rawName: 'v-show',
                                        value:
                                          'home' ==
                                          this.$router.history.current.name,
                                        expression:
                                          "this.$router.history.current.name == 'home'",
                                      },
                                    ],
                                    attrs: {
                                      type: 'a',
                                      stretch: '',
                                      flat: '',
                                      label: 'A FF',
                                    },
                                    on: {
                                      click: function (a) {
                                        return t.scrollWindow('fairfax');
                                      },
                                    },
                                  }),
                                  s('q-separator', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      dark: '',
                                      vertical: '',
                                    },
                                  }),
                                  s('q-btn', {
                                    attrs: {
                                      type: 'a',
                                      stretch: '',
                                      flat: '',
                                      label: 'FALE CONOSCO',
                                      to: 'faleconosco',
                                    },
                                  }),
                                  s('q-separator', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      dark: '',
                                      vertical: '',
                                    },
                                  }),
                                  s('q-btn', {
                                    attrs: {
                                      type: 'a',
                                      stretch: '',
                                      flat: '',
                                      label: 'FF NA MÍDIA',
                                      to: 'ffnews',
                                    },
                                  }),
                                  s('q-separator', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      dark: '',
                                      vertical: '',
                                    },
                                  }),
                                  s('q-btn', {
                                    attrs: {
                                      type: 'a',
                                      stretch: '',
                                      flat: '',
                                      label: 'PORTAIS DE ACESSOS FF',
                                      to: 'links',
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t.$q.screen.gt.sm
                        ? t._e()
                        : s(
                            'div',
                            [
                              s(
                                'q-btn',
                                {
                                  attrs: {
                                    icon: 'reorder',
                                  },
                                },
                                [
                                  s(
                                    'q-menu',
                                    [
                                      s(
                                        'q-list',
                                        {
                                          staticStyle: {
                                            'min-width': '80%',
                                          },
                                        },
                                        [
                                          s(
                                            'q-item',
                                            {
                                              directives: [
                                                {
                                                  name: 'close-popup',
                                                  rawName: 'v-close-popup',
                                                },
                                                {
                                                  name: 'show',
                                                  rawName: 'v-show',
                                                  value:
                                                    'home' !==
                                                    this.$router.history.current
                                                      .name,
                                                  expression:
                                                    "this.$router.history.current.name !== 'home'",
                                                },
                                              ],
                                              staticClass: 'text-black',
                                              attrs: {
                                                clickable: '',
                                                to: '/',
                                              },
                                            },
                                            [
                                              s(
                                                'q-item-section',
                                                {
                                                  attrs: {
                                                    flat: '',
                                                  },
                                                },
                                                [t._v('PÁGINA INICIAL')]
                                              ),
                                            ],
                                            1
                                          ),
                                          s('q-separator', {
                                            directives: [
                                              {
                                                name: 'show',
                                                rawName: 'v-show',
                                                value:
                                                  'home' ==
                                                  this.$router.history.current
                                                    .name,
                                                expression:
                                                  "this.$router.history.current.name == 'home'",
                                              },
                                            ],
                                          }),
                                          s(
                                            'q-item',
                                            {
                                              directives: [
                                                {
                                                  name: 'close-popup',
                                                  rawName: 'v-close-popup',
                                                },
                                                {
                                                  name: 'show',
                                                  rawName: 'v-show',
                                                  value:
                                                    'home' ==
                                                    this.$router.history.current
                                                      .name,
                                                  expression:
                                                    "this.$router.history.current.name == 'home'",
                                                },
                                              ],
                                              attrs: {
                                                clickable: '',
                                              },
                                              nativeOn: {
                                                click: function (a) {
                                                  return t.scrollWindow('bu');
                                                },
                                              },
                                            },
                                            [
                                              s(
                                                'q-item-section',
                                                {
                                                  attrs: {
                                                    flat: '',
                                                  },
                                                },
                                                [t._v('PRODUTOS FF')]
                                              ),
                                            ],
                                            1
                                          ),
                                          s('q-separator'),
                                          s(
                                            'q-item',
                                            {
                                              directives: [
                                                {
                                                  name: 'close-popup',
                                                  rawName: 'v-close-popup',
                                                },
                                              ],
                                              attrs: {
                                                clickable: '',
                                                to: 'ffplace',
                                              },
                                            },
                                            [
                                              s(
                                                'q-item-section',
                                                {
                                                  attrs: {
                                                    flat: '',
                                                  },
                                                },
                                                [t._v('FF PLACE')]
                                              ),
                                            ],
                                            1
                                          ),
                                          s('q-separator', {
                                            directives: [
                                              {
                                                name: 'show',
                                                rawName: 'v-show',
                                                value:
                                                  'home' ==
                                                  this.$router.history.current
                                                    .name,
                                                expression:
                                                  "this.$router.history.current.name == 'home'",
                                              },
                                            ],
                                          }),
                                          s(
                                            'q-item',
                                            {
                                              directives: [
                                                {
                                                  name: 'close-popup',
                                                  rawName: 'v-close-popup',
                                                },
                                                {
                                                  name: 'show',
                                                  rawName: 'v-show',
                                                  value:
                                                    'home' ==
                                                    this.$router.history.current
                                                      .name,
                                                  expression:
                                                    "this.$router.history.current.name == 'home'",
                                                },
                                              ],
                                              attrs: {
                                                clickable: '',
                                              },
                                              nativeOn: {
                                                click: function (a) {
                                                  return t.scrollWindow(
                                                    'fairfax'
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              s(
                                                'q-item-section',
                                                {
                                                  attrs: {
                                                    flat: '',
                                                  },
                                                },
                                                [t._v('A FF')]
                                              ),
                                            ],
                                            1
                                          ),
                                          s('q-separator'),
                                          s(
                                            'q-item',
                                            {
                                              directives: [
                                                {
                                                  name: 'close-popup',
                                                  rawName: 'v-close-popup',
                                                },
                                              ],
                                              attrs: {
                                                clickable: '',
                                                to: 'faleconosco',
                                              },
                                            },
                                            [
                                              s(
                                                'q-item-section',
                                                {
                                                  attrs: {
                                                    flat: '',
                                                  },
                                                },
                                                [t._v('FALE CONOSCO')]
                                              ),
                                            ],
                                            1
                                          ),
                                          s('q-separator'),
                                          s(
                                            'q-item',
                                            {
                                              directives: [
                                                {
                                                  name: 'close-popup',
                                                  rawName: 'v-close-popup',
                                                },
                                              ],
                                              attrs: {
                                                clickable: '',
                                                to: 'ffnews',
                                              },
                                            },
                                            [
                                              s(
                                                'q-item-section',
                                                {
                                                  attrs: {
                                                    flat: '',
                                                  },
                                                },
                                                [t._v('FF NA MÍDIA')]
                                              ),
                                            ],
                                            1
                                          ),
                                          s('q-separator'),
                                          s(
                                            'q-item',
                                            {
                                              directives: [
                                                {
                                                  name: 'close-popup',
                                                  rawName: 'v-close-popup',
                                                },
                                              ],
                                              attrs: {
                                                clickable: '',
                                                to: 'links',
                                              },
                                            },
                                            [
                                              s(
                                                'q-item-section',
                                                {
                                                  attrs: {
                                                    flat: '',
                                                  },
                                                },
                                                [t._v('PORTAIS DE ACESSOS FF')]
                                              ),
                                            ],
                                            1
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                    ],
                    1
                  ),
                ],
                1
              ),
              s('q-page-container', [s('router-view')], 1),
              s(
                'q-footer',
                {
                  staticClass: 'ff-gray-900',
                  attrs: {
                    bordered: '',
                  },
                },
                [
                  s(
                    'div',
                    {
                      staticClass: 'row q-mx-xl q-my-sm',
                    },
                    [
                      s(
                        'q-card',
                        {
                          staticClass: 'col-12 ff-transparent',
                          attrs: {
                            flat: '',
                            square: '',
                          },
                        },
                        [
                          s('img', {
                            staticClass: 'q-my-md',
                            staticStyle: {
                              width: '200px',
                            },
                            attrs: {
                              src: 'https://central.fairfax.com.br/source/img/ff-seguros-companyV2.png',
                            },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  s(
                    'div',
                    {
                      class: t.$q.screen.gt.sm
                        ? 'row q-mx-xl'
                        : 'q-mx-md text-center',
                    },
                    [
                      s(
                        'q-card',
                        {
                          staticClass: 'col-md col-sm-12 ff-transparent',
                          attrs: {
                            flat: '',
                          },
                        },
                        [
                          s(
                            'q-toolbar',
                            [
                              s(
                                'q-toolbar-title',
                                {
                                  staticClass: 'text-subtitle1',
                                },
                                [t._v('A FAIRFAX')]
                              ),
                            ],
                            1
                          ),
                          s('q-separator', {
                            staticClass: 'ff-gray-700',
                          }),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col q-py-sm',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-py-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      staticStyle: {
                                        cursor: 'pointer',
                                      },
                                      on: {
                                        click: function (a) {
                                          return t.scrollWindow('fairfax');
                                        },
                                      },
                                    },
                                    [t._v('INSTITUCIONAL')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-py-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        href: '#/governanca_corporativa',
                                      },
                                    },
                                    [t._v('GOVERNANÇA CORPORATIVA')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-py-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: '#/termos',
                                      },
                                    },
                                    [t._v('TERMOS DE USO')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-py-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'https://dpo.privacytools.com.br/policy-view/2ZZDmyRQ2/1/política-de-privacidade-da-fairfax-brasil/pt_BR?s=1641839699281',
                                      },
                                    },
                                    [t._v('POLÍTICA DE PRIVACIDADE')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-py-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'https://dpo.privacytools.com.br/policy-view/6aWM4xNkn/0/policy/pt_BR?s=1680561500735',
                                      },
                                    },
                                    [
                                      t._v(
                                        'POLÍTICA DE SEGURANÇA DA INFORMAÇÃO'
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-py-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'https://dpo.privacytools.com.br/policy-view/dqPr2M5xG/2/política-de-cookies-da-fairfax-brasil/pt_BR?s=1641839769905',
                                      },
                                    },
                                    [t._v('POLÍTICA DE COOKIES')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-py-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        href: '#/sustentabilidade ',
                                      },
                                    },
                                    [t._v('SUSTENTABILIDADE')]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      s(
                        'q-card',
                        {
                          staticClass: 'col-md-auto col-sm-12 ff-transparent',
                          attrs: {
                            flat: '',
                          },
                        },
                        [
                          s(
                            'q-toolbar',
                            [
                              s(
                                'q-toolbar-title',
                                {
                                  staticClass: 'text-subtitle1',
                                },
                                [t._v('ENDEREÇOS')]
                              ),
                            ],
                            1
                          ),
                          s('q-separator', {
                            staticClass: 'ff-gray-700',
                          }),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('SÃO PAULO')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'apartment',
                                    },
                                  }),
                                  t._v(
                                    ' AL. SANTOS, 1940 . 4º ANDAR\n            '
                                  ),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'fmd_good',
                                    },
                                  }),
                                  t._v(
                                    'CERQUEIRA CÉSAR - CEP 01418-000\n            '
                                  ),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('TELEFONE')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'call',
                                    },
                                  }),
                                  t._v(' +55 11 30413020\n            '),
                                ],
                                1
                              ),
                            ]
                          ),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('BELO HORIZONTE')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'apartment',
                                    },
                                  }),
                                  t._v(
                                    'AV. GETÚLIO VARGAS, 874, SALA 405\n            '
                                  ),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'fmd_good',
                                    },
                                  }),
                                  t._v(
                                    'BAIRRO FUNCIONÁRIOS - CEP: 30112-020\n            '
                                  ),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('TELEFONE')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'call',
                                    },
                                  }),
                                  t._v('+55 31 32874870\n            '),
                                ],
                                1
                              ),
                            ]
                          ),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('RIO DE JANEIRO')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'apartment',
                                    },
                                  }),
                                  t._v(
                                    'AVENIDA ALMIRANTE BARROSO, Nº 81, SALA 3301 - 33B117\n            '
                                  ),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'fmd_good',
                                    },
                                  }),
                                  t._v(
                                    'CENTRO, RIO DE JANEIRO - CEP: 20031-004'
                                  ),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('TELEFONE')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'call',
                                    },
                                  }),
                                  t._v('55 21 9.9436 1022'),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      s(
                        'q-card',
                        {
                          staticClass: 'col-md col-sm-6 ff-transparent',
                          attrs: {
                            flat: '',
                          },
                        },
                        [
                          s(
                            'q-toolbar',
                            [
                              s(
                                'q-toolbar-title',
                                {
                                  staticClass: 'text-subtitle1',
                                },
                                [t._v('FALE CONOSCO')]
                              ),
                            ],
                            1
                          ),
                          s('q-separator', {
                            staticClass: 'ff-gray-700',
                          }),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col q-py-md',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('SAC')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'call',
                                    },
                                  }),
                                  t._v(' 0800 014 3004'),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'alternate_email',
                                    },
                                  }),
                                  t._v(' SAC@FAIRFAX.COM.BR'),
                                ],
                                1
                              ),
                            ]
                          ),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col q-py-sm',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('SAC DEFICIENTES AUDITIVOS')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'accessibility',
                                    },
                                  }),
                                  t._v(' 0800 602 5058'),
                                ],
                                1
                              ),
                            ]
                          ),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col q-py-sm',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('OUVIDORIA')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'alternate_email',
                                    },
                                  }),
                                  t._v(' OUVIDORIA@FAIRFAX.COM.BR'),
                                ],
                                1
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s('q-icon', {
                                    staticClass: 'q-mx-sm',
                                    attrs: {
                                      name: 'call',
                                    },
                                  }),
                                  t._v(' 0800 014 3020'),
                                ],
                                1
                              ),
                            ]
                          ),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col q-py-sm',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-subtitle2 q-my-sm',
                                },
                                [t._v('REDES SOCIAIS')]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'row q-gutter-md items-center',
                                },
                                [
                                  s('q-btn', {
                                    staticClass: 'q-ma-md text-caption',
                                    attrs: {
                                      dense: '',
                                      square: '',
                                      target: '_blank',
                                      type: 'a',
                                      stack: '',
                                      label: 'Facebook',
                                      'no-caps': '',
                                      icon: 'img:https://central.fairfax.com.br/source/img/icon-facebook.png',
                                      href: 'https://www.facebook.com/people/Fairfaxbrasil/100083615134228/?mibextid=LQQJ4d',
                                    },
                                  }),
                                  s('q-btn', {
                                    staticClass: 'q-ma-md text-caption',
                                    attrs: {
                                      dense: '',
                                      square: '',
                                      target: '_blank',
                                      type: 'a',
                                      stack: '',
                                      label: 'Instagram',
                                      'no-caps': '',
                                      icon: 'img:https://central.fairfax.com.br/source/img/icon-instagram.png',
                                      href: 'https://www.instagram.com/fairfax.brasil/',
                                    },
                                  }),
                                  s('q-btn', {
                                    staticClass: 'q-ma-md text-caption',
                                    attrs: {
                                      dense: '',
                                      square: '',
                                      target: '_blank',
                                      type: 'a',
                                      stack: '',
                                      label: 'LinkedIn',
                                      'no-caps': '',
                                      icon: 'img:https://central.fairfax.com.br/source/img/icon-linkedin.png',
                                      href: 'https://br.linkedin.com/company/fairfax-brasil-seguros-corporativos-s-a',
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      s(
                        'q-card',
                        {
                          staticClass: 'col-md col-sm-6 ff-transparent',
                          attrs: {
                            flat: '',
                          },
                        },
                        [
                          s(
                            'q-toolbar',
                            [
                              s(
                                'q-toolbar-title',
                                {
                                  staticClass: 'text-subtitle1',
                                },
                                [t._v('LINKS ÚTEIS')]
                              ),
                            ],
                            1
                          ),
                          s('q-separator', {
                            staticClass: 'ff-gray-700',
                          }),
                          s(
                            'q-card-section',
                            {
                              staticClass: 'col q-py-md',
                            },
                            [
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-sm',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'http://novosite.susep.gov.br/',
                                      },
                                    },
                                    [t._v('SUSEP')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'https://fenseg.org.br/',
                                      },
                                    },
                                    [t._v('FENASEG')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'https://cnseg.org.br/',
                                      },
                                    },
                                    [t._v('\n              CNSEG')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'https://www.fenacor.org.br/',
                                      },
                                    },
                                    [t._v('FENACOR')]
                                  ),
                                ]
                              ),
                              s(
                                'div',
                                {
                                  staticClass: 'text-caption q-my-md',
                                },
                                [
                                  s(
                                    'a',
                                    {
                                      staticClass: 'clean-link text-white',
                                      attrs: {
                                        target: '_blank',
                                        href: 'https://www2.susep.gov.br/safe/menumercado/regapolices/pesquisa.asp',
                                      },
                                    },
                                    [t._v('CLIENTE GARANTIA')]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      s(
                        'q-card',
                        {
                          staticClass: 'col-md-auto col-sm-6 ff-transparent',
                          attrs: {
                            flat: '',
                          },
                        },
                        [
                          s(
                            'q-toolbar',
                            [
                              s(
                                'q-toolbar-title',
                                {
                                  staticClass: 'text-subtitle1',
                                },
                                [t._v('MAPA DO SITE')]
                              ),
                            ],
                            1
                          ),
                          s('q-separator', {
                            staticClass: 'ff-gray-700',
                          }),
                          s('q-card-section', {}, [
                            s(
                              'div',
                              {
                                staticClass: 'text-caption q-my-md',
                              },
                              [
                                s('q-btn', {
                                  attrs: {
                                    type: 'a',
                                    label: 'PRODUTOS FF',
                                  },
                                  on: {
                                    click: function (a) {
                                      return t.scrollWindow('bu');
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'text-caption q-my-md',
                              },
                              [
                                s('q-btn', {
                                  attrs: {
                                    type: 'a',
                                    label: 'FF PLACE',
                                    to: 'ffplace',
                                  },
                                }),
                              ],
                              1
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'text-caption q-pa-none q-ma-none',
                              },
                              [
                                s('q-btn', {
                                  attrs: {
                                    type: 'a',
                                    label: 'A FF',
                                  },
                                  on: {
                                    click: function (a) {
                                      return t.scrollWindow('fairfax');
                                    },
                                  },
                                }),
                              ],
                              1
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'text-caption q-my-md',
                              },
                              [
                                s('q-btn', {
                                  attrs: {
                                    type: 'a',
                                    label: 'FALE CONOSCO',
                                    to: 'faleconosco',
                                  },
                                }),
                              ],
                              1
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'text-caption q-my-md',
                              },
                              [
                                s('q-btn', {
                                  attrs: {
                                    type: 'a',
                                    label: 'FF NA MÍDIA',
                                    to: 'ffnews',
                                  },
                                }),
                              ],
                              1
                            ),
                            s(
                              'div',
                              {
                                staticClass: 'text-caption q-my-md',
                              },
                              [
                                s('q-btn', {
                                  attrs: {
                                    type: 'a',
                                    label: 'PORTAIS DE ACESSO FF',
                                    to: 'links',
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  s(
                    'div',
                    {
                      staticClass: 'col-12 q-ma-md text-center q-py-sm',
                    },
                    [
                      t._v(
                        '\n        ©Fairfax Brasil Seguros Corporativos Todos os direitos reservados.\n      '
                      ),
                    ]
                  ),
                ]
              ),
            ],
            1
          );
        },
        i = [],
        r = s('2b0e'),
        o = r['default'].extend({
          name: 'Header',
          data() {
            return {
              Top: 0,
              seamless: !0,
            };
          },
          mounted() {
            window.addEventListener('scroll', this.Scroll);
          },
          beforeDestroy() {
            window.removeEventListener('scroll', this.Scroll);
          },
          methods: {
            scrollTo(t) {
              'bu' === t &&
                document.getElementById('bus').scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
            },
            Scroll(t) {
              this.Top = t.target.documentElement.scrollTop;
            },
            scrollWindow(t) {
              'home' === this.$router.history.current.name
                ? 'bu' === t
                  ? window.scrollTo({
                      top: this.$q.screen.height - 10,
                      behavior: 'smooth',
                    })
                  : 'fairfax' === t
                  ? window.scrollTo({
                      top: 2 * this.$q.screen.height,
                      behavior: 'smooth',
                    })
                  : window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                : ((localStorage.scroll = t), window.open('/', '_self'));
            },
          },
        }),
        c = o,
        l = s('2877'),
        n = s('4d5a'),
        m = s('e359'),
        p = s('65c6'),
        d = s('9c40'),
        q = s('cb32'),
        v = s('2c91'),
        h = s('429b'),
        C = s('eb85'),
        u = s('4e73'),
        f = s('1c1c'),
        b = s('66e5'),
        x = s('4074'),
        y = s('09e3'),
        w = s('7ff0'),
        A = s('f09f'),
        _ = s('6ac5'),
        O = s('a370'),
        E = s('0016'),
        g = s('7f67'),
        I = s('eebe'),
        k = s.n(I),
        S = Object(l['a'])(c, e, i, !1, null, null, null);
      a['default'] = S.exports;
      k()(S, 'components', {
        QLayout: n['a'],
        QHeader: m['a'],
        QToolbar: p['a'],
        QBtn: d['a'],
        QAvatar: q['a'],
        QSpace: v['a'],
        QTabs: h['a'],
        QSeparator: C['a'],
        QMenu: u['a'],
        QList: f['a'],
        QItem: b['a'],
        QItemSection: x['a'],
        QPageContainer: y['a'],
        QFooter: w['a'],
        QCard: A['a'],
        QToolbarTitle: _['a'],
        QCardSection: O['a'],
        QIcon: E['a'],
      }),
        k()(S, 'directives', {
          ClosePopup: g['a'],
        });
    },
  },
]);
