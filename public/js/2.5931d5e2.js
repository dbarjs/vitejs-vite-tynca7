(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '0a85': function (e, s, a) {
      'use strict';
      a('cbdc');
    },
    '8b24': function (e, s, a) {
      'use strict';
      a.r(s);
      var t = function () {
          var e = this,
            s = e.$createElement,
            a = e._self._c || s;
          return a(
            'q-page',
            {},
            [
              a(
                'q-layout',
                {
                  staticStyle: {
                    'min-height': 'auto',
                  },
                  attrs: {
                    view: 'lHr LpR fff',
                  },
                },
                [
                  a(
                    'q-carousel',
                    {
                      attrs: {
                        height: e.$q.screen.height + 'px',
                        src: '',
                      },
                      model: {
                        value: e.slide,
                        callback: function (s) {
                          e.slide = s;
                        },
                        expression: 'slide',
                      },
                    },
                    [
                      a(
                        'q-carousel-slide',
                        {
                          staticClass: 'slide-1 column no-wrap flex-center',
                          attrs: {
                            name: 'slider-1',
                          },
                        },
                        [
                          a(
                            'q-card-section',
                            {
                              staticClass: 'q-pa-none',
                            },
                            [
                              a('img', {
                                attrs: {
                                  width: e.$q.screen.sm ? '600px' : '450px',
                                  src: 'https://central.fairfax.com.br/source/img/ff-seguros-companyV2.png',
                                },
                              }),
                            ]
                          ),
                          a(
                            'q-card-section',
                            {
                              staticClass: 'text-center',
                            },
                            [
                              a(
                                'span',
                                {
                                  class: e.$q.screen.xs
                                    ? 'text-body1 text-white'
                                    : 'text-h6 text-white',
                                },
                                [
                                  e._v(
                                    '\n              Somos uma seguradora que trabalha com soluções sob medida para você ou para o seu negócio.'
                                  ),
                                  a('br'),
                                  e._v(
                                    '\n              Contamos com recursos globais e autonomia local, atendendo a sua necessidade, promovendo soluções\n              diferenciadas e inovadoras.'
                                  ),
                                  a('br'),
                                  e._v(
                                    '\n              Buscamos assegurar um crescimento sustentável e um relacionamento de longo prazo com nossos clientes,\n              fornecedores e colaboradores.'
                                  ),
                                  a('br'),
                                  e._v(
                                    '\n              Bem-vindo à Fairfax. Bem-vindo à FF Seguros.\n            '
                                  ),
                                ]
                              ),
                            ]
                          ),
                          a(
                            'div',
                            {
                              staticClass:
                                'row justify-center items-center absolute-bottom q-mb-md',
                            },
                            [
                              a('q-btn', {
                                staticClass: 'text-white',
                                attrs: {
                                  type: 'a',
                                  size: 'md',
                                  round: '',
                                  color: 'blue-10',
                                  icon: 'expand_more',
                                },
                                nativeOn: {
                                  click: function (s) {
                                    return e.scrollWin('fairfax');
                                  },
                                },
                              }),
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
              a(
                'div',
                {
                  attrs: {
                    id: 'app',
                  },
                },
                [
                  a(
                    'div',
                    {
                      staticClass: 'bus',
                      attrs: {
                        id: 'bus',
                      },
                    },
                    [
                      a('q-separator', {
                        staticClass: 'q-py-sm',
                        staticStyle: {
                          'background-color': '#f1f1f1',
                        },
                      }),
                      a(
                        'div',
                        {
                          style: 'height:' + e.$q.screen.height + 'px',
                        },
                        [a('zircle')],
                        1
                      ),
                      a('q-separator', {
                        staticClass: 'q-py-sm',
                        staticStyle: {
                          'background-color': '#f1f1f1',
                        },
                      }),
                    ],
                    1
                  ),
                  a(
                    'div',
                    {
                      staticClass: 'row justify-center items-center q-mt-md',
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'col-8 q-mt-md',
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass: 'row',
                            },
                            [
                              a(
                                'div',
                                {
                                  staticClass:
                                    'col-md col-sm-12 row justify-center items-center',
                                },
                                [
                                  a(
                                    'span',
                                    {
                                      class: e.$q.screen.lt.sm
                                        ? 'text-h6 q-my-md'
                                        : 'text-h4 q-my-xl',
                                    },
                                    [
                                      e._v(
                                        '\n                FAIRFAX NO BRASIL\n              '
                                      ),
                                    ]
                                  ),
                                  a(
                                    'div',
                                    {
                                      class:
                                        e.$q.screen.xs || e.$q.screen.sm
                                          ? 'row justify-center text-body2'
                                          : 'row justify-center text-body1',
                                    },
                                    [
                                      e._v(
                                        '\n                Somos uma seguradora brasileira, atuante nos segmentos comercial, industrial, varejo e digital e\n                pertencemos ao Grupo Fairfax Holding, presente em mais de 100 países nos ramos de seguros e resseguros\n                há mais de 35 anos.\n              '
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      a(
                        'div',
                        {
                          staticClass: 'col-8 q-my-md',
                        },
                        [
                          a(
                            'div',
                            {
                              class:
                                e.$q.screen.xs || e.$q.screen.sm
                                  ? 'row justify-center text-body2'
                                  : 'row justify-center text-body1',
                            },
                            [
                              e._v(
                                '\n            Promovemos soluções diferenciadas, inovadoras e sob medida na transferência de riscos, assegurando um\n            crescimento sustentável e proporcionando um relacionamento de longo prazo com nossos segurados, parceiros,\n            fornecedores e colaboradores.\n            '
                              ),
                              a('br'),
                              a('p'),
                              e._v(
                                '\n            Nossos seguros são desenvolvidos para atender à sua necessidade ou à de sua empresa, por meio de uma atitude\n            proativa e ética, com autonomia local e presença global. Além disso, contamos com uma equipe experiente e\n            especializada, prontos para atendê-lo.\n          '
                              ),
                            ]
                          ),
                        ]
                      ),
                      a(
                        'div',
                        {
                          staticClass: 'col-9 q-my-lg',
                        },
                        [
                          a(
                            'div',
                            {
                              class: e.$q.screen.xs
                                ? 'row justify-center q-my-lg text-center text-h6'
                                : 'row justify-center q-my-lg text-center text-h5',
                            },
                            [
                              e._v(
                                '\n            Por que escolher a FF Seguros:\n          '
                              ),
                            ]
                          ),
                          a(
                            'div',
                            {
                              staticClass:
                                'row justify-center text-center q-my-md',
                            },
                            [
                              a(
                                'div',
                                {
                                  class: e.$q.screen.lt.sm
                                    ? 'col-md col-12'
                                    : 'col-md col-6 q-mx-md',
                                },
                                [
                                  a(
                                    'div',
                                    {
                                      staticClass: 'q-mt-md text-weight-bold',
                                    },
                                    [
                                      a('q-img', {
                                        attrs: {
                                          src: 'https://central.fairfax.com.br/source/img/solidez.png',
                                          width: e.$q.screen.xs
                                            ? '80px'
                                            : '110px',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    'div',
                                    {
                                      staticClass: 'q-mt-md',
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass:
                                            'text-weight-bold row justify-center q-mb-sm',
                                        },
                                        [
                                          e._v(
                                            'Solidez Financeira e Excelência nas\n                  Operações'
                                          ),
                                        ]
                                      ),
                                      a('span', [
                                        e._v(
                                          'Focamos num relacionamento de longo prazo com nossos segurados e parceiros administrando os riscos\n                  com ética, parceria e experiência.'
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                              a(
                                'div',
                                {
                                  class: e.$q.screen.lt.sm
                                    ? 'col-md col-12'
                                    : 'col-md col-6 q-mx-md',
                                },
                                [
                                  a('q-separator', {
                                    class: e.$q.screen.lt.sm
                                      ? 'q-my-md'
                                      : 'hidden',
                                  }),
                                  a(
                                    'div',
                                    {
                                      staticClass: 'q-mt-md text-weight-bold',
                                    },
                                    [
                                      a('q-img', {
                                        attrs: {
                                          src: 'https://central.fairfax.com.br/source/img/foco.png',
                                          width: e.$q.screen.xs
                                            ? '80px'
                                            : '110px',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    'div',
                                    {
                                      staticClass: 'q-mt-md',
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass:
                                            'text-weight-bold row justify-center q-mb-sm',
                                        },
                                        [e._v('Foco no Cliente')]
                                      ),
                                      a('span', [
                                        e._v(
                                          'Buscamos agregar valores aos nossos seguros e ajudar a proteger pessoas, lares e seu\n                  negócio.'
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              a(
                                'div',
                                {
                                  class: e.$q.screen.lt.sm
                                    ? 'col-md col-12'
                                    : 'col-md col-6 q-mx-md',
                                },
                                [
                                  a('q-separator', {
                                    class: e.$q.screen.lt.sm
                                      ? 'q-my-md'
                                      : 'hidden',
                                  }),
                                  a(
                                    'div',
                                    {
                                      staticClass: 'q-mt-md text-weight-bold',
                                    },
                                    [
                                      a('q-img', {
                                        attrs: {
                                          src: 'https://central.fairfax.com.br/source/img/burocracia.png',
                                          width: e.$q.screen.xs
                                            ? '80px'
                                            : '110px',
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  a(
                                    'div',
                                    {
                                      staticClass: 'q-mt-md',
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass:
                                            'text-weight-bold row justify-center q-mb-sm',
                                        },
                                        [
                                          e._v(
                                            'Autonomia de Decisões Local e sem\n                  Burocracia'
                                          ),
                                        ]
                                      ),
                                      a('span', [
                                        e._v(
                                          'Temos um time preocupado em facilitar a contratação do seu seguro.'
                                        ),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                      a(
                        'div',
                        {
                          staticClass:
                            'col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 q-mt-md',
                        },
                        [
                          null !== e.cookie
                            ? a('iframe', {
                                staticStyle: {
                                  'border-radius': '1rem',
                                },
                                attrs: {
                                  width: '100%',
                                  height: e.$q.screen.xs
                                    ? '220px'
                                    : e.$q.screen.sm
                                    ? '400px'
                                    : e.$q.screen.md
                                    ? '508px'
                                    : e.$q.screen.lg
                                    ? '622px'
                                    : '700px',
                                  src: 'https://www.youtube-nocookie.com/embed/52Ah2E3Y08o',
                                  title: 'Vídeo Institucional Fairfax',
                                  frameborder: '0',
                                  allow:
                                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
                                  allowfullscreen: '',
                                },
                              })
                            : e._e(),
                        ]
                      ),
                      a(
                        'div',
                        {
                          staticClass: 'col-8 q-mt-md',
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass:
                                'row col-md col-sm-12 row justify-center items-center',
                            },
                            [
                              a(
                                'span',
                                {
                                  class: e.$q.screen.lt.sm
                                    ? 'text-h6 q-my-md'
                                    : 'text-h5 q-my-xl',
                                },
                                [
                                  e._v(
                                    '\n              FAIRFAX NO MUNDO\n            '
                                  ),
                                ]
                              ),
                              a(
                                'div',
                                {
                                  class: e.$q.screen.xs
                                    ? 'row justify-center items-center text-body2'
                                    : 'row justify-center items-center text-body1',
                                },
                                [
                                  e._v(
                                    '\n              A Fairfax Financial Holdings Limited é uma empresa, que por meio de suas subsidiárias atua nos ramos de\n              seguro, resseguro e administração de investimento operando globalmente em uma ampla gama de produtos.\n              '
                                  ),
                                  a('p'),
                                  e._v(
                                    '\n              Em cada uma de suas subsidiárias existe uma equipe de subscrição experiente com autoridade local e focada\n              na disciplina de underwriting, buscando prover serviços diferenciados aos seus clientes.\n              '
                                  ),
                                  a('p'),
                                  e._v(
                                    '\n              A Fairfax pretende se expandir internacionalmente em regiões com significativo potencial de crescimento e\n              penetração de seguro e resseguro relativamente baixa. Fairfax tem uma forte presença nos crescentes\n              mercados de seguro e resseguro do Sudeste Asiático, Europa Oriental, Oriente Médio e Brasil.\n            '
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      a(
                        'div',
                        {
                          staticClass: 'col-8',
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass: 'row justify-center items-center',
                            },
                            [
                              a('q-img', {
                                attrs: {
                                  src: 'https://central.fairfax.com.br/source/gif/world-map-2-min.gif',
                                  width: '70%',
                                },
                              }),
                            ],
                            1
                          ),
                          a(
                            'div',
                            {
                              staticClass: 'q-my-md',
                            },
                            [
                              a('q-separator', {
                                staticClass: 'bg-white',
                              }),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  a('q-separator', {
                    staticClass: 'q-py-sm',
                    staticStyle: {
                      'background-color': '#f1f1f1',
                    },
                  }),
                  a(
                    'div',
                    {
                      staticClass: 'row justify-center items-center q-pt-xl',
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'col-11 col-md-8 text-center',
                        },
                        [
                          a(
                            'span',
                            {
                              class: e.$q.screen.lt.sm ? 'text-h6' : 'text-h5',
                            },
                            [e._v('LINHA DO TEMPO FAIRFAX')]
                          ),
                        ]
                      ),
                    ]
                  ),
                  a(
                    'div',
                    {
                      staticClass: 'row justify-center items-center',
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'col-11 col-md-8',
                        },
                        [
                          [
                            a('timeline-carousel', {
                              attrs: {
                                themeColor: '#012AFF',
                                timelineNum: e.$q.screen.xs
                                  ? 4.5
                                  : e.$q.screen.sm
                                  ? 5
                                  : e.$q.screen.md
                                  ? 7
                                  : (e.$q.screen.lg, 9),
                                timelineWidth: e.$q.screen.xs
                                  ? 69
                                  : e.$q.screen.sm || e.$q.screen.md
                                  ? 100
                                  : e.$q.screen.lg
                                  ? 82
                                  : 110,
                                autoPlay: !1,
                                loop: !1,
                                timelineList: [
                                  {
                                    id: 1,
                                    text: '1985',
                                  },
                                  {
                                    id: 2,
                                    text: '2010',
                                  },
                                  {
                                    id: 3,
                                    text: '2015',
                                  },
                                  {
                                    id: 4,
                                    text: '2016',
                                  },
                                  {
                                    id: 5,
                                    text: '2017',
                                  },
                                  {
                                    id: 6,
                                    text: '2018',
                                  },
                                  {
                                    id: 7,
                                    text: '2019',
                                  },
                                  {
                                    id: 8,
                                    text: '2020',
                                  },
                                  {
                                    id: 9,
                                    text: '2021',
                                  },
                                  {
                                    id: 10,
                                    text: '...',
                                  },
                                  {
                                    id: 11,
                                    text: '2025',
                                  },
                                ],
                                carouselList: [
                                  {
                                    id: 1,
                                    img: 'https://central.fairfax.com.br/source/img/1985.jpg',
                                    title: 'Em 1985...',
                                    info: 'Fundação da Fairfax Financial Holdings (Canadá).',
                                  },
                                  {
                                    id: 2,
                                    img: 'https://central.fairfax.com.br/source/img/2010.jpg',
                                    title: 'Em 2010...',
                                    info: 'Fundação da Fairfax Brasil Seguros Corporativos S/A.',
                                  },
                                  {
                                    id: 3,
                                    img: 'https://central.fairfax.com.br/source/img/2015.jpg',
                                    title: 'Em 2015...',
                                    info: 'Bruno Camargo CEO FAIRFAX BRASIL.',
                                  },
                                  {
                                    id: 4,
                                    img: 'https://central.fairfax.com.br/source/img/2016.jpg',
                                    title: 'Em 2016...',
                                    info: 'FFB atinge a meta do Índice Combinado abaixo de 100%.',
                                  },
                                  {
                                    id: 5,
                                    img: 'https://central.fairfax.com.br/source/img/2017.jpg',
                                    title: 'Em 2017...',
                                    info: 'Compra das operações da AIG na LATAM.',
                                  },
                                  {
                                    id: 6,
                                    img: 'https://central.fairfax.com.br/source/img/2018.jpg',
                                    title: 'Em 2018...',
                                    info: 'Ampliando o foco para Linhas Financeiras e Agronegócio.',
                                  },
                                  {
                                    id: 7,
                                    img: 'https://central.fairfax.com.br/source/img/2019.jpg',
                                    title: 'Em 2019...',
                                    info: 'Lugar no mercado de garantias e parcerias estratégicas.',
                                  },
                                  {
                                    id: 8,
                                    img: 'https://central.fairfax.com.br/source/img/2020.jpg',
                                    title: 'Em 2020...',
                                    info: 'Posicionando a seguradora como parceira na criação de valor para os segurados.',
                                  },
                                  {
                                    id: 9,
                                    img: 'https://central.fairfax.com.br/source/img/2021.jpg',
                                    title: 'Em 2021...',
                                    info: 'Desenvolvimento da marca FF Seguros e Transformação Digital',
                                  },
                                  {
                                    id: 10,
                                    img: '',
                                    title: '....',
                                    info: '',
                                  },
                                  {
                                    id: 11,
                                    img: 'https://central.fairfax.com.br/source/img/2025_negative.jpg',
                                    title: '...Em 2025',
                                    info: 'Inovações, novos negócios, novos produtos, desenvolvimento operacional e tecnológico',
                                  },
                                ],
                              },
                            }),
                          ],
                        ],
                        2
                      ),
                    ]
                  ),
                  a(
                    'div',
                    {
                      staticClass: 'row justify-center items-center q-mt-md',
                    },
                    [
                      a('div', {
                        staticClass: 'col-8 q-my-md',
                      }),
                    ]
                  ),
                  a(
                    'div',
                    {
                      staticClass:
                        'row justify-center items-center q-mt-md text-center',
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'col-8',
                        },
                        [
                          a(
                            'q-btn',
                            {
                              class: e.$q.screen.xs
                                ? 'clean-link text-h6 text-wight-bolder no-click'
                                : 'clean-link text-h5 text-wight-bolder no-click',
                              attrs: {
                                flat: '',
                              },
                            },
                            [
                              e._v('\n            PROPÓSITO\n            '),
                              a('img', {
                                staticClass: 'q-ml-md',
                                attrs: {
                                  src: 'https://central.fairfax.com.br/source/img/ff-sets.png',
                                  height: '40',
                                },
                              }),
                            ]
                          ),
                        ],
                        1
                      ),
                      a(
                        'div',
                        {
                          class: e.$q.screen.xs
                            ? 'col-8 text-body2'
                            : 'col-8 text-body1',
                        },
                        [
                          e._v(
                            '\n          Somos comprometidos em nossos relacionamentos. Transparência, ética e valorização de pessoas são parte das\n          nossas ações e, por isso, , enaltecemos a lealdade com nossos clientes, colaboradores e parceiros, construindo\n          com pensamento coletivo, entregando performance com sustentabilidade e tecnologia com valores humanos.\n          Queremos ser transformadores, pois acreditamos que a oportunidade é o primeiro passo da mudança. Junto a isso,\n          apoiamos e incentivamos causas que colaboram com a sociedade, cultura, meio ambiente e esportes, destinando\n          parte do nosso lucro no desenvolvimento de projetos e ações que contribuem verdadeiramente com a sociedade.\n          Viemos ressignificar a relação com seguros, garantindo a segurança que você precisa com a tranquilidade de ter\n          um parceiro sólido cuidando de tudo o que você conquistou.\n        '
                          ),
                        ]
                      ),
                    ]
                  ),
                  a(
                    'div',
                    {
                      staticClass: 'row justify-center items-center q-mt-md',
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'col-8 q-my-md',
                        },
                        [a('q-separator')],
                        1
                      ),
                    ]
                  ),
                  a(
                    'div',
                    {
                      staticClass: 'row justify-center items-center q-mt-md',
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'col-8 q-mt-md',
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass: 'row justify-center text-center',
                            },
                            [
                              a(
                                'q-btn',
                                {
                                  class: e.$q.screen.xs
                                    ? 'clean-link text-h6 text-wight-bolder no-click'
                                    : 'clean-link text-h5 text-wight-bolder no-click',
                                  attrs: {
                                    flat: '',
                                    'no-caps': '',
                                  },
                                },
                                [
                                  e._v(
                                    '\n              CAUSAS SOCIAIS E PROJETOS\n              '
                                  ),
                                  a('img', {
                                    staticClass: 'q-ml-md',
                                    attrs: {
                                      src: 'https://central.fairfax.com.br/source/img/ff-sets.png',
                                      height: '60',
                                    },
                                  }),
                                ]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                      a(
                        'div',
                        {
                          staticClass: 'col-8 q-mt-md',
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass: 'row',
                            },
                            e._l(e.acoes, function (s) {
                              return a(
                                'div',
                                {
                                  key: s.id,
                                  staticClass:
                                    'col-md col-sm-12 q-px-md q-mb-md',
                                },
                                [
                                  a(
                                    'q-card',
                                    {
                                      class: 'acoes q-ma-md',
                                      attrs: {
                                        clickable: '',
                                        flat: '',
                                      },
                                      on: {
                                        click: function (a) {
                                          e.$q.screen.lt.sm
                                            ? e.Show(s, 'yes')
                                            : e.Show(s, 'no');
                                        },
                                      },
                                    },
                                    [
                                      a(
                                        'q-img',
                                        {
                                          class: 'cursor-pointer acao-' + s.id,
                                          attrs: {
                                            ratio: 1,
                                          },
                                        },
                                        [
                                          a(
                                            'div',
                                            {
                                              staticClass:
                                                'absolute-full text-subtitle1 text-weight-bolder flex flex-center text-center bg-transparent',
                                            },
                                            [
                                              e._v(
                                                '\n                    ' +
                                                  e._s(s.nome) +
                                                  '\n                    '
                                              ),
                                              a(
                                                'div',
                                                {
                                                  staticClass:
                                                    'absolute-bottom q-mb-md',
                                                },
                                                [
                                                  a(
                                                    'q-btn',
                                                    {
                                                      attrs: {
                                                        rounded: '',
                                                        size: 'sm',
                                                        flat: '',
                                                      },
                                                    },
                                                    [e._v('clique')]
                                                  ),
                                                ],
                                                1
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            0
                          ),
                        ]
                      ),
                    ]
                  ),
                  a(
                    'div',
                    {
                      staticClass: 'row justify-center items-center q-py-lg ',
                      attrs: {
                        id: 'details',
                      },
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'col-8',
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass: 'row justify-center text-center',
                            },
                            [
                              a(
                                'q-btn',
                                {
                                  class: e.$q.screen.xs
                                    ? 'clean-link text-h6 no-click'
                                    : 'clean-link text-h5 no-click',
                                  attrs: {
                                    flat: '',
                                  },
                                },
                                [
                                  e._v(
                                    '\n              ' +
                                      e._s(e.title) +
                                      '\n            '
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                          a(
                            'div',
                            {
                              staticClass: 'row justify-center text-center',
                            },
                            [
                              a(
                                'h6',
                                {
                                  class: e.$q.screen.xs
                                    ? 'q-mx-md text-body2'
                                    : 'q-mx-lg text-body1',
                                },
                                [
                                  a('span', {
                                    domProps: {
                                      innerHTML: e._s(e.message),
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                  a('q-separator'),
                  a(
                    'div',
                    {
                      staticClass:
                        'row justify-center items-center text-center q-my-md',
                    },
                    [
                      a('q-img', {
                        attrs: {
                          width: '40px',
                          src: 'https://central.fairfax.com.br/source/img/ff-logo-header.png',
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              a(
                'q-dialog',
                {
                  model: {
                    value: e.dialogPopUp,
                    callback: function (s) {
                      e.dialogPopUp = s;
                    },
                    expression: 'dialogPopUp',
                  },
                },
                [
                  a(
                    'q-card',
                    {
                      staticClass: 'q-pa-none q-ma-none bg-transparent',
                      attrs: {
                        flat: '',
                      },
                    },
                    [
                      a('q-btn', {
                        directives: [
                          {
                            name: 'close-popup',
                            rawName: 'v-close-popup',
                          },
                        ],
                        staticClass: 'absolute-top-left z-top q-ma-sm',
                        attrs: {
                          flat: '',
                          dense: '',
                          color: 'white',
                          size: 'md',
                          icon: 'close',
                          ripple: !1,
                        },
                      }),
                      a(
                        'q-btn',
                        {
                          attrs: {
                            dense: '',
                            type: 'a',
                            target: '_blank',
                            flat: '',
                            href: 'http://www.fairfax.com.br/pdfs/FFB-Relatorio-Transparencia-Igualdade-Salarial-Mulheres-e-Homens-1Semestre-2024.pdf',
                          },
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass: 'q-pa-none q-ma-none',
                            },
                            [
                              a('q-img', {
                                staticClass: 'rounded-borders',
                                attrs: {
                                  src: 'https://central.fairfax.com.br/source/img/popup-site.png',
                                  width:
                                    'sm' == e.$q.screen.name
                                      ? '360px'
                                      : 'xs' == e.$q.screen.name
                                      ? '82vw'
                                      : e.$q.screen.gt.md
                                      ? '550px'
                                      : '450px',
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
                ],
                1
              ),
            ],
            1
          );
        },
        o = [],
        i = (a('ac1f'), a('2b0e')),
        r = function () {
          var e = this,
            s = e.$createElement,
            a = e._self._c || s;
          return a('z-canvas', {
            attrs: {
              views: e.$options.components,
            },
          });
        },
        n = [],
        c =
          (a('ddb0'),
          {
            components: {
              home: () => a.e(8).then(a.bind(null, 'fcef')),
              empresarial: () => a.e(21).then(a.bind(null, 'f794')),
              agro: () => a.e(19).then(a.bind(null, '22fe')),
              financeiro: () => a.e(22).then(a.bind(null, 'fb71')),
              cargo: () => a.e(20).then(a.bind(null, 'b06a')),
              afinidade: () => a.e(18).then(a.bind(null, 'ed50')),
            },
            mounted() {
              this.$zircle.config({
                mode: 'full',
                style: {
                  theme: 'black',
                  mode: 'dark',
                },
                debug: !0,
              }),
                this.$zircle.getCurrentViewName() &&
                'home--0' !== this.$zircle.getCurrentViewName()
                  ? window.top.location.reload()
                  : this.$zircle.setView('home');
            },
          }),
        l = c,
        d = (a('0a85'), a('2877')),
        m = Object(d['a'])(l, r, n, !1, null, null, null),
        u = m.exports,
        p = i['default'].extend({
          name: 'Index',
          components: {
            zircle: u,
          },
          meta() {
            return {
              title: 'FF Seguros',
            };
          },
          data() {
            return {
              dialogPopUp: !0,
              playing: !1,
              muted: !1,
              cookie: null,
              exec: !0,
              video: {
                label: 'FF Seguros',
                poster:
                  'https://central.fairfax.com.br/source/img/poster-institucional.jpg',
                sources: [
                  {
                    src: 'https://www.youtube.com/embed/52Ah2E3Y08o',
                    type: 'video/mp4',
                  },
                ],
                tracks: [],
              },
              slide: 'slider-1',
              title: '',
              message: '',
              acoes: [
                {
                  id: '2',
                  redirect: !1,
                  link: '',
                  nome: 'RESPONSABILIDADE SOCIOAMBIENTAL',
                  title: 'ONÇAFARI',
                  texto:
                    'A Jaguar Parade® é um movimento com o propósito de arrecadar fundos e conscientizar as pessoas sobre a necessidade urgente de conservar as onças-pintadas. Através de uma exposição, em espaços de grandes circulações, são exibidas dezenas de estátuas de onça-pintadas customizadas por artistas e celebridades, que procuram despertar a atenção do público para a causa ambiental.<br/>A primeira edição, em 2019, foi uma das maiores exposições ao ar livre, alcançando 10 milhões de pessoas em ruas e parques e mais de 100 milhões por meio da mídia. Em 2021 continuaremos juntos, com a exposição em Belo Horizonte. Serão 60 esculturas, sendo 25 delas pintadas ao vivo no Shopping Pátio Savassi. Ao final, as artes serão leiloadas e os recursos beneficiarão a ONG Onçafari. <br/>Um movimento importante de preservação, cujo apoio colabora não só com a espécie, mas também com seu habitat, no Pantanal e Amazônia.',
                },
                {
                  id: '3',
                  redirect: !1,
                  link: '',
                  nome: 'SUPORTE PELA CULTURA',
                  title: 'FAMÍLIA SCHURMANN',
                  texto:
                    'Guiados pelo desejo de navegar, a família Schurmann vem fazendo história cruzando os oceanos, refazendo rotas históricas em grandes expedições que também beneficiam a cultura e o meio ambiente.<br/>Com dois livros já lançados e o terceiro á caminho, o Em Busca do U-513 conta sobre as buscas do submarino alemão, afundado em costa brasileira durante a Segunda Guerra Mundial, por um avião norte-americano. Neste ano deu-se início a Expedição Voz dos Oceanos. Um movimento internacional que combate a poluição plástica nos oceanos que busca conscientizar as pessoas ao redor do mundo sobre a urgência dessa causa para o meio ambiente. <br/><br/>Para saber mais: voiceoftheoceans.com<br/>A FF Seguros apoia as ações em prol da cultura e meio ambiente, pois acredita que movimentos como esses transformam a sociedade.',
                },
                {
                  id: '4',
                  redirect: !1,
                  link: '',
                  nome: 'SUPORTE AOS ESPORTES',
                  title: 'APOIO AOS ESPORTES',
                  texto:
                    'A FF Seguros apóia também o esporte brasileiro junto ao maior Campeão do Rally dos Sertões e Rally Internacional de Automóveis Guiga Spinelli.',
                },
                {
                  id: '5',
                  redirect: !0,
                  link: '#/parceria_doutoresdaalegria',
                  nome: 'DOUTORES DA ALEGRIA',
                  title: '',
                  texto: '',
                },
              ],
            };
          },
          mounted() {
            this.verificaAceitedeCookies();
          },
          methods: {
            verificaAceitedeCookies() {
              setInterval(() => {
                if (this.exec)
                  for (
                    var e = document.cookie.split(';'), s = 0;
                    s < e.length;
                    s++
                  ) {
                    var a = e[s];
                    while (' ' == a.charAt(0)) a = `${a.substring(1)}`;
                    'cookieconsent_status=dismiss' === a &&
                      ((this.exec = !1), (this.cookie = `${a}`));
                  }
              }, 2e3);
            },
            Show(e, s) {
              e.redirect
                ? window.open(e.link, '_self')
                : ((this.title = e.title),
                  (this.message = e.texto),
                  'yes' === s &&
                    document.getElementById('details').scrollIntoView({
                      behavior: 'smooth',
                      block: 'center',
                    }));
            },
            scrollWin(e) {
              (this.playing = !1),
                'bu' === e
                  ? window.scrollTo({
                      top: this.$q.screen.height - 30,
                      behavior: 'smooth',
                    })
                  : 'fairfax' === e
                  ? window.scrollTo({
                      top: 2 * this.$q.screen.height,
                      behavior: 'smooth',
                    })
                  : 'proposito' === e
                  ? window.scrollTo({
                      top: 4.7 * this.$q.screen.height,
                      behavior: 'smooth',
                    })
                  : window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
            },
          },
        }),
        g = p,
        f = a('9989'),
        x = a('4d5a'),
        b = a('880c'),
        v = a('62cd'),
        h = a('a370'),
        q = a('9c40'),
        w = a('eb85'),
        C = a('068f'),
        y = a('f09f'),
        A = a('24e8'),
        S = a('7f67'),
        $ = a('eebe'),
        j = a.n($),
        F = Object(d['a'])(g, t, o, !1, null, null, null);
      s['default'] = F.exports;
      j()(F, 'components', {
        QPage: f['a'],
        QLayout: x['a'],
        QCarousel: b['a'],
        QCarouselSlide: v['a'],
        QCardSection: h['a'],
        QBtn: q['a'],
        QSeparator: w['a'],
        QImg: C['a'],
        QCard: y['a'],
        QDialog: A['a'],
      }),
        j()(F, 'directives', {
          ClosePopup: S['a'],
        });
    },
    cbdc: function (e, s, a) {},
  },
]);
