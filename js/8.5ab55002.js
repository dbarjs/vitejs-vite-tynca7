// bus/home.vue

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8],
  {
    abab: function (e, s, t) {},
    f701: function (e, s, t) {
      'use strict';
      t('abab');
    },
    fcef: function (e, s, t) {
      'use strict';
      t.r(s);
      var a = function () {
          var e = this,
            s = e.$createElement,
            t = e._self._c || s;
          return t(
            'z-view',
            [
              t('z-spot', {
                staticClass: 'bg-ff-logo-central',
                attrs: {
                  angle: 0,
                  size: e.$q.screen.xs || e.$q.screen.sm ? 'm' : 'l',
                  distance: 0,
                  label: 'FAIRFAX BRASIL',
                  'label-pos': 'bottom',
                },
                nativeOn: {
                  click: function (s) {
                    return e.Scroll();
                  },
                },
              }),
              t(
                'div',
                {
                  attrs: {
                    slot: 'extension',
                  },
                  slot: 'extension',
                },
                [
                  t('z-spot', {
                    ref: 'empresarial',
                    staticClass: 'bg-ff-empresarial',
                    attrs: {
                      angle: 270,
                      size: 'l',
                      distance: e.$q.screen.xs || e.$q.screen.sm ? 100 : 120,
                      'to-view': 'empresarial',
                    },
                  }),
                  t('z-spot', {
                    ref: 'agro',
                    staticClass: 'bg-ff-agro',
                    attrs: {
                      angle: 345,
                      size: 'l',
                      distance: e.$q.screen.xs || e.$q.screen.sm ? 100 : 120,
                      'to-view': 'agro',
                    },
                  }),
                  t('z-spot', {
                    ref: 'financeiro',
                    staticClass: 'bg-ff-financials',
                    attrs: {
                      angle: 130,
                      size: 'l',
                      distance: e.$q.screen.xs || e.$q.screen.sm ? 100 : 120,
                      'to-view': 'financeiro',
                    },
                  }),
                  t('z-spot', {
                    ref: 'cargo',
                    staticClass: 'bg-ff-cargo',
                    attrs: {
                      angle: 50,
                      size: 'l',
                      distance: e.$q.screen.xs || e.$q.screen.sm ? 100 : 120,
                      'to-view': 'cargo',
                    },
                  }),
                  t('z-spot', {
                    ref: 'afinidade',
                    staticClass: 'bg-ff-affinity',
                    attrs: {
                      angle: 195,
                      size: 'l',
                      distance: e.$q.screen.xs || e.$q.screen.sm ? 100 : 120,
                      'to-view': 'afinidade',
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [],
        i = {
          data() {
            return {};
          },
          methods: {
            Scroll() {
              window.scrollTo({
                top: 2 * this.$q.screen.height,
                behavior: 'smooth',
              });
            },
          },
        },
        r = i,
        c = (t('f701'), t('2877')),
        o = Object(c['a'])(r, a, n, !1, null, null, null);
      s['default'] = o.exports;
    },
  },
]);
