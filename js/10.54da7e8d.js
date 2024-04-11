// layout/index.vue (parent page / layout)

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
              s('q-page-container', [s('router-view')], 1),
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
