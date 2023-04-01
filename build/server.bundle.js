(() => {
  "use strict";
  var e = {
    n: (t) => {
      var r = t && t.__esModule ? () => t.default : () => t;
      return e.d(r, { a: r }), r;
    },
    d: (t, r) => {
      for (var n in r)
        e.o(r, n) &&
          !e.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: r[n] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  const t = require("express");
  var r = e.n(t);
  const n = require("react");
  var l = e.n(n);
  const i = require("react-dom/server");
  var o = e.n(i);
  const c = require("jquery");
  var s = e.n(c);
  require("flexslider");
  const a = require("@babel/runtime/helpers/classCallCheck");
  var u = e.n(a);
  const p = require("@babel/runtime/helpers/createClass");
  var d = e.n(p);
  const m = require("@babel/runtime/helpers/inherits");
  var f = e.n(m);
  const v = require("@babel/runtime/helpers/possibleConstructorReturn");
  var h = e.n(v);
  const b = require("@babel/runtime/helpers/getPrototypeOf");
  var y = e.n(b);
  const g = (function (e) {
      f()(i, e);
      var t,
        r,
        n =
          ((t = i),
          (r = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              n = y()(t);
            if (r) {
              var l = y()(this).constructor;
              e = Reflect.construct(n, arguments, l);
            } else e = n.apply(this, arguments);
            return h()(this, e);
          });
      function i() {
        return u()(this, i), n.apply(this, arguments);
      }
      return (
        d()(i, [
          {
            key: "componentDidMount",
            value: function () {
              s()(this.refs.slider).flexslider({
                animation: "slide",
                slideshowSpeed: 3e3,
                controlNav: !1,
                directionNav: !0,
                prevText: "",
                nextText: "",
              });
            },
          },
          {
            key: "render",
            value: function () {
              return l().createElement(
                "div",
                { className: "flexslider", ref: "slider" },
                l().createElement(
                  "ul",
                  { className: "slides" },
                  l().createElement(
                    "li",
                    null,
                    l().createElement("img", {
                      src: "http://example.com/slide1.jpg",
                      alt: "Slide 1",
                    })
                  ),
                  l().createElement(
                    "li",
                    null,
                    l().createElement("img", {
                      src: "http://example.com/slide2.jpg",
                      alt: "Slide 2",
                    })
                  ),
                  l().createElement(
                    "li",
                    null,
                    l().createElement("img", {
                      src: "http://example.com/slide3.jpg",
                      alt: "Slide 3",
                    })
                  )
                )
              );
            },
          },
        ]),
        i
      );
    })(n.Component),
    E = function (e) {
      var t = e.Router,
        r = e.routerProps;
      return (
        (0, n.useEffect)(function () {}, []),
        l().createElement(t, r, l().createElement(g, null))
      );
    },
    q = require("react-router-dom/server");
  var x = r()();
  x.get("/", function (e, t) {
    var r = o().renderToString(
      l().createElement(E, {
        Router: q.StaticRouter,
        routerProps: { location: e.originalUrl },
      })
    );
    t.send(
      '\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>My SSR App</title>\n      </head>\n      <body>\n        <div id="root">'.concat(
        r,
        '</div>\n        <script src="/client.bundle.js"></script>\n      </body>\n    </html>\n  '
      )
    );
  }),
    x.use(r().static("public")),
    x.listen(3e3, function () {
      console.log("Server is listening on port 3000");
    });
})();
