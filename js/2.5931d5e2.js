// page/home.vue

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2],
  {
    '0a85': function (e, s, a) { },
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
                      staticClass: 'busss',
                      attrs: {
                        id: 'bus',
                      },
                    },
                    [
                      a(
                        'div',
                        {
                          style: 'height:' + e.$q.screen.height + 'px',
                        },
                        [a('zircle')],
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
  },
]);
