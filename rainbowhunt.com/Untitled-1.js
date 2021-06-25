/*1624517851,,JIT Construction: v1004028416,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {
  (window.FB && !window.FB.__buffer) ||
    (function () {
      var apply = Function.prototype.apply;
      function bindContext(fn, thisArg) {
        return function _sdkBound() {
          return apply.call(fn, thisArg, arguments);
        };
      }
      var global = {
        __type: "JS_SDK_SANDBOX",
        window: window,
        document: window.document,
      };
      var sandboxSafelist = [
        "setTimeout",
        "setInterval",
        "clearTimeout",
        "clearInterval",
      ];
      for (var i = 0; i < sandboxSafelist.length; i++) {
        global[sandboxSafelist[i]] = bindContext(
          window[sandboxSafelist[i]],
          window
        );
      }
      (function () {
        var self = window;
        var __DEV__ = 0;
        function emptyFunction() {}
        var __transform_includes = {};
        var __annotator, __bodyWrapper;
        var __buffer = window.FB && window.FB.__buffer;
        var __w, __t;
        var undefined;
        with (this) {
          (function () {
            var a = {},
              b = function (a, b) {
                if (!a && !b) return null;
                var c = {};
                typeof a !== "undefined" && (c.type = a);
                typeof b !== "undefined" && (c.signature = b);
                return c;
              },
              c = function (a, c) {
                return b(
                  a && /^[A-Z]/.test(a) ? a : void 0,
                  c && ((c.params && c.params.length) || c.returns)
                    ? "function(" +
                        (c.params
                          ? c.params
                              .map(function (a) {
                                return /\?/.test(a)
                                  ? "?" + a.replace("?", "")
                                  : a;
                              })
                              .join(",")
                          : "") +
                        ")" +
                        (c.returns ? ":" + c.returns : "")
                    : void 0
                );
              },
              d = function (a, b, c) {
                return a;
              },
              e = function (a, b, d) {
                "sourcemeta" in __transform_includes && (a.__SMmeta = b);
                if ("typechecks" in __transform_includes) {
                  b = c(b ? b.name : void 0, d);
                  b && __w(a, b);
                }
                return a;
              },
              f = function (a, b, c) {
                return c.apply(a, b);
              },
              g = function (a, b, c, d) {
                d && d.params && __t.apply(a, d.params);
                c = c.apply(a, b);
                d && d.returns && __t([c, d.returns]);
                return c;
              };
            g = function (b, c, d, e, f) {
              if (f) {
                f.callId ||
                  (f.callId =
                    f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                e = f.callId;
                a[e] = (a[e] || 0) + 1;
              }
              return d.apply(b, c);
            };
            typeof __transform_includes === "undefined"
              ? ((__annotator = d), (__bodyWrapper = f))
              : ((__annotator = e),
                "codeusage" in __transform_includes
                  ? ((__annotator = d),
                    (__bodyWrapper = g),
                    (__bodyWrapper.getCodeUsage = function () {
                      return a;
                    }),
                    (__bodyWrapper.clearCodeUsage = function () {
                      a = {};
                    }))
                  : "typechecks" in __transform_includes
                  ? (__bodyWrapper = f)
                  : (__bodyWrapper = f));
          })();
          (__t = function (a) {
            return a[0];
          }),
            (__w = function (a) {
              return a;
            });
          (function (a) {
            var b = {},
              c = [
                "global",
                "require",
                "requireDynamic",
                "requireLazy",
                "module",
                "exports",
              ],
              d = [
                "global",
                "require",
                "importDefault",
                "importNamespace",
                "requireLazy",
                "module",
                "exports",
              ],
              e = 1,
              f = 32,
              g = 64,
              h = {},
              i = Object.prototype.hasOwnProperty;
            function j(e, h) {
              if (!i.call(b, e)) {
                if (h) return null;
                throw new Error("Module " + e + " has not been defined");
              }
              h = b[e];
              if (h.resolved) return h;
              e = h.special;
              var j = h.factory.length,
                n = e & f ? d.concat(h.deps) : c.concat(h.deps),
                o = [],
                p;
              for (var q = 0; q < j; q++) {
                switch (n[q]) {
                  case "module":
                    p = h;
                    break;
                  case "exports":
                    p = h.exports;
                    break;
                  case "global":
                    p = a;
                    break;
                  case "require":
                    p = k;
                    break;
                  case "requireDynamic":
                    p = null;
                    break;
                  case "requireLazy":
                    p = null;
                    break;
                  case "importDefault":
                    p = l;
                    break;
                  case "importNamespace":
                    p = m;
                    break;
                  default:
                    typeof n[q] === "string" && (p = k.call(null, n[q]));
                }
                o.push(p);
              }
              n = h.factory.apply(a, o);
              n && (h.exports = n);
              e & g
                ? h.exports != null &&
                  i.call(h.exports, "default") &&
                  (h.defaultExport = h.exports["default"])
                : (h.defaultExport = h.exports);
              h.resolved = !0;
              return h;
            }
            function k(a, b) {
              a = j(a, b);
              if (a) return a.defaultExport !== h ? a.defaultExport : a.exports;
            }
            function l(a) {
              a = j(a);
              if (a) return a.defaultExport !== h ? a.defaultExport : null;
            }
            function m(a) {
              a = j(a);
              if (a) return a.exports;
            }
            function n(a, c, d, f) {
              typeof d === "function"
                ? ((b[a] = {
                    factory: d,
                    deps: c,
                    defaultExport: h,
                    exports: {},
                    special: f || 0,
                    resolved: !1,
                  }),
                  f != null && f & e && k.call(null, a))
                : (b[a] = { defaultExport: d, exports: d, resolved: !0 });
            }
            a.__d = n;
            a.require = k;
            a.importDefault = l;
            a.importNamespace = m;
            a.$RefreshReg$ = function () {};
            a.$RefreshSig$ = function () {
              return function (a) {
                return a;
              };
            };
          })(this);
          __d(
            "ES5FunctionPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                bind: function (a) {
                  if (typeof this !== "function")
                    throw new TypeError("Bind must be called on a function");
                  var b = this,
                    c = Array.prototype.slice.call(arguments, 1);
                  function d() {
                    return b.apply(
                      a,
                      c.concat(Array.prototype.slice.call(arguments))
                    );
                  }
                  d.displayName = "bound:" + (b.displayName || b.name || "(?)");
                  d.toString = function () {
                    return "bound: " + b;
                  };
                  return d;
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "ES5StringPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                startsWith: function (a) {
                  var b = String(this);
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.startsWith called on null or undefined"
                    );
                  var c = arguments.length > 1 ? Number(arguments[1]) : 0;
                  isNaN(c) && (c = 0);
                  var d = Math.min(Math.max(c, 0), b.length);
                  return b.indexOf(String(a), c) == d;
                },
                endsWith: function (a) {
                  var b = String(this);
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.endsWith called on null or undefined"
                    );
                  var c = b.length,
                    d = String(a),
                    e = arguments.length > 1 ? Number(arguments[1]) : c;
                  isNaN(e) && (e = 0);
                  var f = Math.min(Math.max(e, 0), c),
                    g = f - d.length;
                  return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
                },
                includes: function (a) {
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.contains called on null or undefined"
                    );
                  var b = String(this),
                    c = arguments.length > 1 ? Number(arguments[1]) : 0;
                  isNaN(c) && (c = 0);
                  return b.indexOf(String(a), c) != -1;
                },
                repeat: function (a) {
                  if (this == null)
                    throw new TypeError(
                      "String.prototype.repeat called on null or undefined"
                    );
                  var b = String(this);
                  a = a ? Number(a) : 0;
                  isNaN(a) && (a = 0);
                  if (a < 0 || a === Infinity) throw RangeError();
                  if (a === 1) return b;
                  if (a === 0) return "";
                  var c = "";
                  while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
                  return c;
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "ES6Array",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                from: function (a) {
                  if (a == null)
                    throw new TypeError("Object is null or undefined");
                  var b = arguments[1],
                    c = arguments[2],
                    d = this,
                    e = Object(a),
                    f =
                      typeof Symbol === "function" &&
                      navigator.userAgent.indexOf("Trident/7.0") === -1
                        ? typeof Symbol === "function"
                          ? Symbol.iterator
                          : "@@iterator"
                        : "@@iterator",
                    g = typeof b === "function",
                    h = typeof e[f] === "function",
                    i = 0,
                    j,
                    k;
                  if (h) {
                    j = typeof d === "function" ? new d() : [];
                    var l = e[f](),
                      m;
                    while (!(m = l.next()).done)
                      (k = m.value),
                        g && (k = b.call(c, k, i)),
                        (j[i] = k),
                        (i += 1);
                    j.length = i;
                    return j;
                  }
                  var n = e.length;
                  (isNaN(n) || n < 0) && (n = 0);
                  j = typeof d === "function" ? new d(n) : new Array(n);
                  while (i < n)
                    (k = e[i]),
                      g && (k = b.call(c, k, i)),
                      (j[i] = k),
                      (i += 1);
                  j.length = i;
                  return j;
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "ES6ArrayPrototype",
            [],
            function (a, b, c, d, e, f) {
              var g = {
                find: function (a, b) {
                  if (this == null)
                    throw new TypeError(
                      "Array.prototype.find called on null or undefined"
                    );
                  if (typeof a !== "function")
                    throw new TypeError("predicate must be a function");
                  a = g.findIndex.call(this, a, b);
                  return a === -1 ? void 0 : this[a];
                },
                findIndex: function (a, b) {
                  if (this == null)
                    throw new TypeError(
                      "Array.prototype.findIndex called on null or undefined"
                    );
                  if (typeof a !== "function")
                    throw new TypeError("predicate must be a function");
                  var c = Object(this),
                    d = c.length >>> 0;
                  for (var e = 0; e < d; e++)
                    if (a.call(b, c[e], e, c)) return e;
                  return -1;
                },
                fill: function (a, b, c) {
                  if (this == null)
                    throw new TypeError(
                      "Array.prototype.fill called on null or undefined"
                    );
                  var d = Object(this),
                    e = d.length >>> 0,
                    f = arguments[1],
                    g = f >> 0,
                    h = g < 0 ? Math.max(e + g, 0) : Math.min(g, e),
                    i = arguments[2],
                    j = i === void 0 ? e : i >> 0,
                    k = j < 0 ? Math.max(e + j, 0) : Math.min(j, e);
                  while (h < k) (d[h] = a), h++;
                  return d;
                },
              };
              a = g;
              e.exports = a;
            },
            null
          );
          __d(
            "ES6Number",
            [],
            function (a, b, c, d, e, f) {
              a = Math.pow(2, -52);
              b = Math.pow(2, 53) - 1;
              c = -1 * b;
              d = {
                isFinite: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  return typeof a === "number" && isFinite(a);
                }),
                isNaN: (function (a) {
                  function b(b) {
                    return a.apply(this, arguments);
                  }
                  b.toString = function () {
                    return a.toString();
                  };
                  return b;
                })(function (a) {
                  return typeof a === "number" && isNaN(a);
                }),
                isInteger: function (a) {
                  return this.isFinite(a) && Math.floor(a) === a;
                },
                isSafeInteger: function (a) {
                  return (
                    this.isFinite(a) &&
                    a >= this.MIN_SAFE_INTEGER &&
                    a <= this.MAX_SAFE_INTEGER &&
                    Math.floor(a) === a
                  );
                },
                EPSILON: a,
                MAX_SAFE_INTEGER: b,
                MIN_SAFE_INTEGER: c,
              };
              f = d;
              e.exports = f;
            },
            null
          );
          __d(
            "ES6Object",
            [],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {
                assign: function (a) {
                  if (a == null)
                    throw new TypeError(
                      "Object.assign target cannot be null or undefined"
                    );
                  a = Object(a);
                  for (
                    var b = 0;
                    b < (arguments.length <= 1 ? 0 : arguments.length - 1);
                    b++
                  ) {
                    var c =
                      b + 1 < 1 || arguments.length <= b + 1
                        ? void 0
                        : arguments[b + 1];
                    if (c == null) continue;
                    c = Object(c);
                    for (var d in c) g.call(c, d) && (a[d] = c[d]);
                  }
                  return a;
                },
                is: function (a, b) {
                  if (a === b) return a !== 0 || 1 / a === 1 / b;
                  else return a !== a && b !== b;
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "ES5Array",
            [],
            function (a, b, c, d, e, f) {
              a = {
                isArray: function (a) {
                  return Object.prototype.toString.call(a) == "[object Array]";
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "ES5ArrayPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                indexOf: function (a, b) {
                  b = b;
                  var c = this.length;
                  b |= 0;
                  b < 0 && (b += c);
                  for (; b < c; b++) if (b in this && this[b] === a) return b;
                  return -1;
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "ES7ArrayPrototype",
            ["ES5Array", "ES5ArrayPrototype"],
            function (a, b, c, d, e, f) {
              var g = b("ES5Array").isArray,
                h = b("ES5ArrayPrototype").indexOf;
              function i(a) {
                return Math.min(Math.max(j(a), 0), Number.MAX_SAFE_INTEGER);
              }
              function j(a) {
                a = Number(a);
                return isFinite(a) && a !== 0
                  ? k(a) * Math.floor(Math.abs(a))
                  : a;
              }
              function k(a) {
                return a >= 0 ? 1 : -1;
              }
              a = {
                includes: function (a) {
                  "use strict";
                  if (
                    a !== void 0 &&
                    g(this) &&
                    !(typeof a === "number" && isNaN(a))
                  )
                    return h.apply(this, arguments) !== -1;
                  var b = Object(this),
                    c = b.length ? i(b.length) : 0;
                  if (c === 0) return !1;
                  var d = arguments.length > 1 ? j(arguments[1]) : 0,
                    e = d < 0 ? Math.max(c + d, 0) : d,
                    f = isNaN(a) && typeof a === "number";
                  while (e < c) {
                    var k = b[e];
                    if (k === a || (typeof k === "number" && f && isNaN(k)))
                      return !0;
                    e++;
                  }
                  return !1;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "ES7Object",
            [],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {
                entries: function (a) {
                  if (a == null)
                    throw new TypeError("Object.entries called on non-object");
                  var b = [];
                  for (var c in a) g.call(a, c) && b.push([c, a[c]]);
                  return b;
                },
                values: function (a) {
                  if (a == null)
                    throw new TypeError("Object.values called on non-object");
                  var b = [];
                  for (var c in a) g.call(a, c) && b.push(a[c]);
                  return b;
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "ES7StringPrototype",
            [],
            function (a, b, c, d, e, f) {
              a = {
                trimLeft: function () {
                  return this.replace(/^\s+/, "");
                },
                trimRight: function () {
                  return this.replace(/\s+$/, "");
                },
              };
              b = a;
              e.exports = b;
            },
            null
          );
          /**
           * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
           */
          __d(
            "json3-3.3.2",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {},
                h = { exports: g },
                i;
              function j() {
                (function () {
                  var b = typeof i === "function" && i.amd,
                    c = { function: !0, object: !0 },
                    d = c[typeof g] && g && !g.nodeType && g,
                    e = (c[typeof window] && window) || this,
                    j =
                      d &&
                      c[typeof h] &&
                      h &&
                      !h.nodeType &&
                      typeof a == "object" &&
                      a;
                  j &&
                    (j.global === j || j.window === j || j.self === j) &&
                    (e = j);
                  function k(b, a) {
                    b || (b = e.Object());
                    a || (a = e.Object());
                    var d = b.Number || e.Number,
                      g = b.String || e.String,
                      h = b.Object || e.Object,
                      i = b.Date || e.Date,
                      j = b.SyntaxError || e.SyntaxError,
                      l = b.TypeError || e.TypeError,
                      m = b.Math || e.Math;
                    b = b.JSON || e.JSON;
                    typeof b == "object" &&
                      b &&
                      ((a.stringify = b.stringify), (a.parse = b.parse));
                    b = h.prototype;
                    var n = b.toString,
                      o,
                      p,
                      q,
                      r = new i(-3509827334573292);
                    try {
                      r =
                        r.getUTCFullYear() == -109252 &&
                        r.getUTCMonth() === 0 &&
                        r.getUTCDate() === 1 &&
                        r.getUTCHours() == 10 &&
                        r.getUTCMinutes() == 37 &&
                        r.getUTCSeconds() == 6 &&
                        r.getUTCMilliseconds() == 708;
                    } catch (a) {}
                    function s(b) {
                      if (s[b] !== q) return s[b];
                      var c;
                      if (b == "bug-string-char-index") c = "a"[0] != "a";
                      else if (b == "json")
                        c = s("json-stringify") && s("json-parse");
                      else {
                        var e,
                          f =
                            '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if (b == "json-stringify") {
                          var h = a.stringify,
                            j = typeof h == "function" && r;
                          if (j) {
                            (e = function () {
                              return 1;
                            }).toJSON = e;
                            try {
                              j =
                                h(0) === "0" &&
                                h(new d()) === "0" &&
                                h(new g()) == '""' &&
                                h(n) === q &&
                                h(q) === q &&
                                h() === q &&
                                h(e) === "1" &&
                                h([e]) == "[1]" &&
                                h([q]) == "[null]" &&
                                h(null) == "null" &&
                                h([q, n, null]) == "[null,null,null]" &&
                                h({ a: [e, !0, !1, null, "\0\b\n\f\r\t"] }) ==
                                  f &&
                                h(null, e) === "1" &&
                                h([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
                                h(new i(-864e13)) ==
                                  '"-271821-04-20T00:00:00.000Z"' &&
                                h(new i(864e13)) ==
                                  '"+275760-09-13T00:00:00.000Z"' &&
                                h(new i(-621987552e5)) ==
                                  '"-000001-01-01T00:00:00.000Z"' &&
                                h(new i(-1)) == '"1969-12-31T23:59:59.999Z"';
                            } catch (a) {
                              j = !1;
                            }
                          }
                          c = j;
                        }
                        if (b == "json-parse") {
                          h = a.parse;
                          if (typeof h == "function")
                            try {
                              if (h("0") === 0 && !h(!1)) {
                                e = h(f);
                                var k = e.a.length == 5 && e.a[0] === 1;
                                if (k) {
                                  try {
                                    k = !h('"\t"');
                                  } catch (a) {}
                                  if (k)
                                    try {
                                      k = h("01") !== 1;
                                    } catch (a) {}
                                  if (k)
                                    try {
                                      k = h("1.") !== 1;
                                    } catch (a) {}
                                }
                              }
                            } catch (a) {
                              k = !1;
                            }
                          c = k;
                        }
                      }
                      return (s[b] = !!c);
                    }
                    if (!s("json")) {
                      var t = "[object Function]",
                        u = "[object Date]",
                        v = "[object Number]",
                        w = "[object String]",
                        x = "[object Array]",
                        y = "[object Boolean]",
                        z = s("bug-string-char-index");
                      if (!r)
                        var A = m.floor,
                          B = [
                            0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304,
                            334,
                          ],
                          C = function (a, b) {
                            return (
                              B[b] +
                              365 * (a - 1970) +
                              A((a - 1969 + (b = +(b > 1))) / 4) -
                              A((a - 1901 + b) / 100) +
                              A((a - 1601 + b) / 400)
                            );
                          };
                      (o = b.hasOwnProperty) ||
                        (o = function (a) {
                          var b = {},
                            c;
                          ((b.__proto__ = null),
                          (b.__proto__ = { toString: 1 }),
                          b).toString != n
                            ? (o = function (a) {
                                var b = this.__proto__;
                                a = a in ((this.__proto__ = null), this);
                                this.__proto__ = b;
                                return a;
                              })
                            : ((c = b.constructor),
                              (o = function (a) {
                                var b = (this.constructor || c).prototype;
                                return (
                                  a in this && !(a in b && this[a] === b[a])
                                );
                              }));
                          return o.call(this, a);
                        });
                      p = function (a, b) {
                        var d = 0,
                          e,
                          f;
                        (e = function () {
                          this.valueOf = 0;
                        }).prototype.valueOf = 0;
                        f = new e();
                        for (e in f) o.call(f, e) && d++;
                        f = null;
                        !d
                          ? ((f = [
                              "valueOf",
                              "toString",
                              "toLocaleString",
                              "propertyIsEnumerable",
                              "isPrototypeOf",
                              "hasOwnProperty",
                              "constructor",
                            ]),
                            (p = function (a, b) {
                              var d = n.call(a) == t,
                                e,
                                g =
                                  (!d &&
                                    typeof a.constructor != "function" &&
                                    c[typeof a.hasOwnProperty] &&
                                    a.hasOwnProperty) ||
                                  o;
                              for (e in a)
                                !(d && e == "prototype") &&
                                  g.call(a, e) &&
                                  b(e);
                              for (
                                d = f.length;
                                (e = f[--d]);
                                g.call(a, e) && b(e)
                              );
                            }))
                          : d == 2
                          ? (p = function (a, b) {
                              var c = {},
                                d = n.call(a) == t,
                                e;
                              for (e in a)
                                !(d && e == "prototype") &&
                                  !o.call(c, e) &&
                                  (c[e] = 1) &&
                                  o.call(a, e) &&
                                  b(e);
                            })
                          : (p = function (a, b) {
                              var c = n.call(a) == t,
                                d,
                                e;
                              for (d in a)
                                !(c && d == "prototype") &&
                                  o.call(a, d) &&
                                  !(e = d === "constructor") &&
                                  b(d);
                              (e || o.call(a, (d = "constructor"))) && b(d);
                            });
                        return p(a, b);
                      };
                      if (!s("json-stringify")) {
                        var D = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t",
                          },
                          E = "000000",
                          F = function (a, b) {
                            return (E + (b || 0)).slice(-a);
                          },
                          G = "\\u00",
                          H = function (a) {
                            var b = '"',
                              c = 0,
                              d = a.length,
                              e = !z || d > 10,
                              f = e && (z ? a.split("") : a);
                            for (; c < d; c++) {
                              var g = a.charCodeAt(c);
                              switch (g) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                  b += D[g];
                                  break;
                                default:
                                  if (g < 32) {
                                    b += G + F(2, g.toString(16));
                                    break;
                                  }
                                  b += e ? f[c] : a.charAt(c);
                              }
                            }
                            return b + '"';
                          },
                          I = function (a, b, c, d, e, f, g) {
                            var h, i, j, k, m, r, s, t, z, B;
                            try {
                              h = b[a];
                            } catch (a) {}
                            if (typeof h == "object" && h) {
                              i = n.call(h);
                              if (i == u && !o.call(h, "toJSON"))
                                if (h > -1 / 0 && h < 1 / 0) {
                                  if (C) {
                                    m = A(h / 864e5);
                                    for (
                                      j = A(m / 365.2425) + 1970 - 1;
                                      C(j + 1, 0) <= m;
                                      j++
                                    );
                                    for (
                                      k = A((m - C(j, 0)) / 30.42);
                                      C(j, k + 1) <= m;
                                      k++
                                    );
                                    m = 1 + m - C(j, k);
                                    r = ((h % 864e5) + 864e5) % 864e5;
                                    s = A(r / 36e5) % 24;
                                    t = A(r / 6e4) % 60;
                                    z = A(r / 1e3) % 60;
                                    r = r % 1e3;
                                  } else
                                    (j = h.getUTCFullYear()),
                                      (k = h.getUTCMonth()),
                                      (m = h.getUTCDate()),
                                      (s = h.getUTCHours()),
                                      (t = h.getUTCMinutes()),
                                      (z = h.getUTCSeconds()),
                                      (r = h.getUTCMilliseconds());
                                  h =
                                    (j <= 0 || j >= 1e4
                                      ? (j < 0 ? "-" : "+") +
                                        F(6, j < 0 ? -j : j)
                                      : F(4, j)) +
                                    "-" +
                                    F(2, k + 1) +
                                    "-" +
                                    F(2, m) +
                                    "T" +
                                    F(2, s) +
                                    ":" +
                                    F(2, t) +
                                    ":" +
                                    F(2, z) +
                                    "." +
                                    F(3, r) +
                                    "Z";
                                } else h = null;
                              else
                                typeof h.toJSON == "function" &&
                                  ((i != v && i != w && i != x) ||
                                    o.call(h, "toJSON")) &&
                                  (h = h.toJSON(a));
                            }
                            c && (h = c.call(b, a, h));
                            if (h === null) return "null";
                            i = n.call(h);
                            if (i == y) return "" + h;
                            else if (i == v)
                              return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
                            else if (i == w) return H("" + h);
                            if (typeof h == "object") {
                              for (j = g.length; j--; )
                                if (g[j] === h) throw l();
                              g.push(h);
                              B = [];
                              k = f;
                              f += e;
                              if (i == x) {
                                for (m = 0, j = h.length; m < j; m++)
                                  (s = I(m, h, c, d, e, f, g)),
                                    B.push(s === q ? "null" : s);
                                t = B.length
                                  ? e
                                    ? "[\n" +
                                      f +
                                      B.join(",\n" + f) +
                                      "\n" +
                                      k +
                                      "]"
                                    : "[" + B.join(",") + "]"
                                  : "[]";
                              } else
                                p(d || h, function (a) {
                                  var b = I(a, h, c, d, e, f, g);
                                  b !== q &&
                                    B.push(H(a) + ":" + (e ? " " : "") + b);
                                }),
                                  (t = B.length
                                    ? e
                                      ? "{\n" +
                                        f +
                                        B.join(",\n" + f) +
                                        "\n" +
                                        k +
                                        "}"
                                      : "{" + B.join(",") + "}"
                                    : "{}");
                              g.pop();
                              return t;
                            }
                          };
                        a.stringify = function (a, b, d) {
                          var e, f, g, h;
                          if (c[typeof b] && b)
                            if ((h = n.call(b)) == t) f = b;
                            else if (h == x) {
                              g = {};
                              for (
                                var i = 0, j = b.length, k;
                                i < j;
                                k = b[i++],
                                  ((h = n.call(k)), h == w || h == v) &&
                                    (g[k] = 1)
                              );
                            }
                          if (d)
                            if ((h = n.call(d)) == v) {
                              if ((d -= d % 1) > 0)
                                for (
                                  e = "", d > 10 && (d = 10);
                                  e.length < d;
                                  e += " "
                                );
                            } else
                              h == w &&
                                (e = d.length <= 10 ? d : d.slice(0, 10));
                          return I(
                            "",
                            ((k = {}), (k[""] = a), k),
                            f,
                            g,
                            e,
                            "",
                            []
                          );
                        };
                      }
                      if (!s("json-parse")) {
                        var J = g.fromCharCode,
                          K = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r",
                          },
                          L,
                          M,
                          N = function () {
                            L = M = null;
                            throw j();
                          },
                          O = function () {
                            var a = M,
                              b = a.length,
                              c,
                              d,
                              e,
                              f,
                              g;
                            while (L < b) {
                              g = a.charCodeAt(L);
                              switch (g) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                  L++;
                                  break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                  c = z ? a.charAt(L) : a[L];
                                  L++;
                                  return c;
                                case 34:
                                  for (c = "@", L++; L < b; ) {
                                    g = a.charCodeAt(L);
                                    if (g < 32) N();
                                    else if (g == 92) {
                                      g = a.charCodeAt(++L);
                                      switch (g) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                          c += K[g];
                                          L++;
                                          break;
                                        case 117:
                                          d = ++L;
                                          for (e = L + 4; L < e; L++)
                                            (g = a.charCodeAt(L)),
                                              (g >= 48 && g <= 57) ||
                                                (g >= 97 && g <= 102) ||
                                                (g >= 65 && g <= 70) ||
                                                N();
                                          c += J("0x" + a.slice(d, L));
                                          break;
                                        default:
                                          N();
                                      }
                                    } else {
                                      if (g == 34) break;
                                      g = a.charCodeAt(L);
                                      d = L;
                                      while (g >= 32 && g != 92 && g != 34)
                                        g = a.charCodeAt(++L);
                                      c += a.slice(d, L);
                                    }
                                  }
                                  if (a.charCodeAt(L) == 34) {
                                    L++;
                                    return c;
                                  }
                                  N();
                                default:
                                  d = L;
                                  g == 45 &&
                                    ((f = !0), (g = a.charCodeAt(++L)));
                                  if (g >= 48 && g <= 57) {
                                    g == 48 &&
                                      ((g = a.charCodeAt(L + 1)),
                                      g >= 48 && g <= 57) &&
                                      N();
                                    f = !1;
                                    for (
                                      ;
                                      L < b &&
                                      ((g = a.charCodeAt(L)),
                                      g >= 48 && g <= 57);
                                      L++
                                    );
                                    if (a.charCodeAt(L) == 46) {
                                      e = ++L;
                                      for (
                                        ;
                                        e < b &&
                                        ((g = a.charCodeAt(e)),
                                        g >= 48 && g <= 57);
                                        e++
                                      );
                                      e == L && N();
                                      L = e;
                                    }
                                    g = a.charCodeAt(L);
                                    if (g == 101 || g == 69) {
                                      g = a.charCodeAt(++L);
                                      (g == 43 || g == 45) && L++;
                                      for (
                                        e = L;
                                        e < b &&
                                        ((g = a.charCodeAt(e)),
                                        g >= 48 && g <= 57);
                                        e++
                                      );
                                      e == L && N();
                                      L = e;
                                    }
                                    return +a.slice(d, L);
                                  }
                                  f && N();
                                  if (a.slice(L, L + 4) == "true") {
                                    L += 4;
                                    return !0;
                                  } else if (a.slice(L, L + 5) == "false") {
                                    L += 5;
                                    return !1;
                                  } else if (a.slice(L, L + 4) == "null") {
                                    L += 4;
                                    return null;
                                  }
                                  N();
                              }
                            }
                            return "$";
                          },
                          P = function (a) {
                            var b, c;
                            a == "$" && N();
                            if (typeof a == "string") {
                              if ((z ? a.charAt(0) : a[0]) == "@")
                                return a.slice(1);
                              if (a == "[") {
                                b = [];
                                for (; ; c || (c = !0)) {
                                  a = O();
                                  if (a == "]") break;
                                  c &&
                                    (a == ","
                                      ? ((a = O()), a == "]" && N())
                                      : N());
                                  a == "," && N();
                                  b.push(P(a));
                                }
                                return b;
                              } else if (a == "{") {
                                b = {};
                                for (; ; c || (c = !0)) {
                                  a = O();
                                  if (a == "}") break;
                                  c &&
                                    (a == ","
                                      ? ((a = O()), a == "}" && N())
                                      : N());
                                  (a == "," ||
                                    typeof a != "string" ||
                                    (z ? a.charAt(0) : a[0]) != "@" ||
                                    O() != ":") &&
                                    N();
                                  b[a.slice(1)] = P(O());
                                }
                                return b;
                              }
                              N();
                            }
                            return a;
                          },
                          Q = function (a, b, c) {
                            c = R(a, b, c);
                            c === q ? delete a[b] : (a[b] = c);
                          },
                          R = function (a, b, c) {
                            var d = a[b],
                              e;
                            if (typeof d == "object" && d)
                              if (n.call(d) == x)
                                for (e = d.length; e--; ) Q(d, e, c);
                              else
                                p(d, function (a) {
                                  Q(d, a, c);
                                });
                            return c.call(a, b, d);
                          };
                        a.parse = function (a, b) {
                          var c;
                          L = 0;
                          M = "" + a;
                          a = P(O());
                          O() != "$" && N();
                          L = M = null;
                          return b && n.call(b) == t
                            ? R(((c = {}), (c[""] = a), c), "", b)
                            : a;
                        };
                      }
                    }
                    a.runInContext = k;
                    return a;
                  }
                  if (d && !b) k(e, d);
                  else {
                    var l = e.JSON,
                      m = e.JSON3,
                      n = !1,
                      o = k(
                        e,
                        (e.JSON3 = {
                          noConflict: function () {
                            n ||
                              ((n = !0),
                              (e.JSON = l),
                              (e.JSON3 = m),
                              (l = m = null));
                            return o;
                          },
                        })
                      );
                    e.JSON = { parse: o.parse, stringify: o.stringify };
                  }
                  b &&
                    i(function () {
                      return o;
                    });
                }.call(this));
              }
              var k = !1;
              function l() {
                k || ((k = !0), j());
                return h.exports;
              }
              function b(a) {
                switch (a) {
                  case void 0:
                    return l();
                }
              }
              e.exports = b;
            },
            null
          );
          __d(
            "json3",
            ["json3-3.3.2"],
            function (a, b, c, d, e, f) {
              e.exports = b("json3-3.3.2")();
            },
            null
          );
          __d(
            "ES",
            [
              "ES5FunctionPrototype",
              "ES5StringPrototype",
              "ES6Array",
              "ES6ArrayPrototype",
              "ES6Number",
              "ES6Object",
              "ES7ArrayPrototype",
              "ES7Object",
              "ES7StringPrototype",
              "json3",
            ],
            function (a, b, c, d, e, f) {
              e.exports = c;
              var g = {}.toString,
                h = {
                  "JSON.stringify": b("json3").stringify,
                  "JSON.parse": b("json3").parse,
                };
              d = {
                "Function.prototype": b("ES5FunctionPrototype"),
                "String.prototype": b("ES5StringPrototype"),
              };
              f = {
                Object: b("ES6Object"),
                "Array.prototype": b("ES6ArrayPrototype"),
                Number: b("ES6Number"),
                Array: b("ES6Array"),
              };
              e = {
                Object: b("ES7Object"),
                "String.prototype": b("ES7StringPrototype"),
                "Array.prototype": b("ES7ArrayPrototype"),
              };
              function a(a) {
                for (var b in a) {
                  if (!Object.prototype.hasOwnProperty.call(a, b)) continue;
                  var c = a[b],
                    d = b.split(".");
                  if (d.length === 2) {
                    var e = d[0],
                      f = d[1];
                    if (!e || !f || !window[e] || !window[e][f]) {
                      var g = e ? window[e] : "-",
                        i = e && window[e] && f ? window[e][f] : "-";
                      throw new Error(
                        "Unexpected state (t11975770): " +
                          (e + ", " + f + ", " + g + ", " + i + ", " + b)
                      );
                    }
                  }
                  e = d.length === 2 ? window[d[0]][d[1]] : window[b];
                  for (var j in c) {
                    if (!Object.prototype.hasOwnProperty.call(c, j)) continue;
                    if (typeof c[j] !== "function") {
                      h[b + "." + j] = c[j];
                      continue;
                    }
                    f = e[j];
                    h[b + "." + j] =
                      f && /\{\s+\[native code\]\s\}/.test(f) ? f : c[j];
                  }
                }
              }
              a(d);
              a(f);
              a(e);
              function c(a, b, c) {
                var d = c ? g.call(a).slice(8, -1) + ".prototype" : a,
                  e;
                if (Array.isArray(a))
                  if (typeof d === "string") e = h[d + "." + b];
                  else
                    throw new Error(
                      "Can't polyfill " + b + " directly on an Array."
                    );
                else if (typeof d === "string") e = h[d + "." + b];
                else if (typeof a === "string")
                  throw new Error(
                    "Can't polyfill " + b + " directly on a string."
                  );
                else e = a[b];
                if (typeof e === "function") {
                  for (
                    var f = arguments.length,
                      i = new Array(f > 3 ? f - 3 : 0),
                      j = 3;
                    j < f;
                    j++
                  )
                    i[j - 3] = arguments[j];
                  return e.apply(a, i);
                } else if (e) return e;
                throw new Error(
                  "Polyfill " + d + " does not have implementation of " + b
                );
              }
            },
            null
          );
          __d(
            "ES5Object",
            [],
            function (a, b, c, d, e, f) {
              var g = {}.hasOwnProperty;
              a = {
                create: function (a) {
                  var b = typeof a;
                  if (b != "object" && b != "function")
                    throw new TypeError(
                      "Object prototype may only be a Object or null"
                    );
                  h.prototype = a;
                  return new h();
                },
                keys: function (a) {
                  var b = typeof a;
                  if ((b != "object" && b != "function") || a === null)
                    throw new TypeError("Object.keys called on non-object");
                  b = [];
                  for (var c in a) g.call(a, c) && b.push(c);
                  return b;
                },
                freeze: function (a) {
                  return a;
                },
                isFrozen: function () {
                  return !1;
                },
                seal: function (a) {
                  return a;
                },
              };
              function h() {}
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "sdk.babelHelpers",
            ["ES5FunctionPrototype", "ES5Object", "ES6Object"],
            function (a, b, c, d, e, f) {
              var g = {},
                h = Object.prototype.hasOwnProperty;
              g.inheritsLoose = function (a, c) {
                b("ES6Object").assign(a, c);
                a.prototype = b("ES5Object").create(c && c.prototype);
                a.prototype.constructor = a;
                a.__superConstructor__ = c;
                return c;
              };
              g.inherits = g.inheritsLoose;
              g.wrapNativeSuper = function (a) {
                var b = typeof Map === "function" ? new Map() : void 0;
                g.wrapNativeSuper = function (a) {
                  if (a === null) return null;
                  if (typeof a !== "function")
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  if (b !== void 0) {
                    if (b.has(a)) return b.get(a);
                    b.set(a, c);
                  }
                  g.inheritsLoose(c, a);
                  function c() {
                    a.apply(this, arguments);
                  }
                  return c;
                };
                return g.wrapNativeSuper(a);
              };
              g.assertThisInitialized = function (a) {
                if (a === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return a;
              };
              g._extends = b("ES6Object").assign;
              g["extends"] = g._extends;
              g.construct = function (a, b) {
                var c = [null];
                c.push.apply(c, b);
                return new (Function.prototype.bind.apply(a, c))();
              };
              g.objectWithoutPropertiesLoose = function (a, b) {
                var c = {};
                for (var d in a) {
                  if (!h.call(a, d) || b.indexOf(d) >= 0) continue;
                  c[d] = a[d];
                }
                return c;
              };
              g.objectWithoutProperties = g.objectWithoutPropertiesLoose;
              g.taggedTemplateLiteralLoose = function (a, b) {
                b || (b = a.slice(0));
                a.raw = b;
                return a;
              };
              g.bind = b("ES5FunctionPrototype").bind;
              e.exports = g;
            },
            null
          );
          var ES = require("ES");
          var babelHelpers = require("sdk.babelHelpers");
          (function (a, b) {
            var c = "keys",
              d = "values",
              e = "entries",
              f = (function () {
                var a = h(Array),
                  b;
                a ||
                  (b = (function () {
                    "use strict";
                    function a(a, b) {
                      (this.$1 = a), (this.$2 = b), (this.$3 = 0);
                    }
                    var b = a.prototype;
                    b.next = function () {
                      if (this.$1 == null) return { value: void 0, done: !0 };
                      var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                      if (f >= b) {
                        this.$1 = void 0;
                        return { value: void 0, done: !0 };
                      }
                      this.$3 = f + 1;
                      if (g === c) return { value: f, done: !1 };
                      else if (g === d) return { value: a[f], done: !1 };
                      else if (g === e) return { value: [f, a[f]], done: !1 };
                    };
                    b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ] = function () {
                      return this;
                    };
                    return a;
                  })());
                return {
                  keys: a
                    ? function (a) {
                        return a.keys();
                      }
                    : function (a) {
                        return new b(a, c);
                      },
                  values: a
                    ? function (a) {
                        return a.values();
                      }
                    : function (a) {
                        return new b(a, d);
                      },
                  entries: a
                    ? function (a) {
                        return a.entries();
                      }
                    : function (a) {
                        return new b(a, e);
                      },
                };
              })(),
              g = (function () {
                var a = h(String),
                  b;
                a ||
                  (b = (function () {
                    "use strict";
                    function a(a) {
                      (this.$1 = a), (this.$2 = 0);
                    }
                    var b = a.prototype;
                    b.next = function () {
                      if (this.$1 == null) return { value: void 0, done: !0 };
                      var a = this.$2,
                        b = this.$1,
                        c = b.length;
                      if (a >= c) {
                        this.$1 = void 0;
                        return { value: void 0, done: !0 };
                      }
                      var d = b.charCodeAt(a);
                      if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                      else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343
                          ? (d = b[a])
                          : (d = b[a] + b[a + 1]);
                      }
                      this.$2 = a + d.length;
                      return { value: d, done: !1 };
                    };
                    b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ] = function () {
                      return this;
                    };
                    return a;
                  })());
                return {
                  keys: function () {
                    throw TypeError(
                      "Strings default iterator doesn't implement keys."
                    );
                  },
                  values: a
                    ? function (a) {
                        return a[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]();
                      }
                    : function (a) {
                        return new b(a);
                      },
                  entries: function () {
                    throw TypeError(
                      "Strings default iterator doesn't implement entries."
                    );
                  },
                };
              })();
            function h(a) {
              return (
                typeof a.prototype[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ] === "function" &&
                typeof a.prototype.values === "function" &&
                typeof a.prototype.keys === "function" &&
                typeof a.prototype.entries === "function"
              );
            }
            var i = (function () {
                "use strict";
                function a(a, b) {
                  (this.$1 = a),
                    (this.$2 = b),
                    (this.$3 = Object.keys(a)),
                    (this.$4 = 0);
                }
                var b = a.prototype;
                b.next = function () {
                  var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                  if (b >= a) {
                    this.$1 = void 0;
                    return { value: void 0, done: !0 };
                  }
                  this.$4 = b + 1;
                  if (f === c) return { value: g, done: !1 };
                  else if (f === d) return { value: this.$1[g], done: !1 };
                  else if (f === e) return { value: [g, this.$1[g]], done: !1 };
                };
                b[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ] = function () {
                  return this;
                };
                return a;
              })(),
              j = {
                keys: function (a) {
                  return new i(a, c);
                },
                values: function (a) {
                  return new i(a, d);
                },
                entries: function (a) {
                  return new i(a, e);
                },
              };
            function k(a, b) {
              if (typeof a === "string") return g[b || d](a);
              else if (Array.isArray(a)) return f[b || d](a);
              else if (
                a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
              )
                return a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ]();
              else return j[b || e](a);
            }
            ES("Object", "assign", !1, k, {
              KIND_KEYS: c,
              KIND_VALUES: d,
              KIND_ENTRIES: e,
              keys: function (a) {
                return k(a, c);
              },
              values: function (a) {
                return k(a, d);
              },
              entries: function (a) {
                return k(a, e);
              },
              generic: j.entries,
            });
            a.FB_enumerate = k;
          })(typeof global === "undefined" ? this : global);
          __d("JSSDKCanvasPrefetcherConfig", [], {
            blacklist: [144959615576466, 768691303149786, 320528941393723],
            sampleRate: 500,
          });
          __d("JSSDKConfig", [], {
            features: {
              allow_non_canvas_app_events: false,
              error_handling: { rate: 4 },
              e2e_ping_tracking: { rate: 0.1 },
              xd_timeout: { rate: 1, value: 60000 },
              use_bundle: false,
              should_log_response_error: true,
              popup_blocker_scribe_logging: { rate: 100 },
              https_only_enforce_starting: 2538809200000,
              https_only_learn_more:
                "https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/",
              https_only_scribe_logging: { rate: 1 },
              log_perf: { rate: 0.001 },
              use_x_xd: { rate: 100 },
              cache_auth_response: { rate: 100 },
              oauth_funnel_logger_version: 1,
              force_popup_to_canvas_apps_with_id: [],
              force_popup_to_all_canvas_app: false,
              max_oauth_dialog_retries: { rate: 100, value: 10 },
              plugin_tags_blacklist: [],
            },
          });
          __d("JSSDKCssConfig", [], {
            rules:
              '.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100\u0025;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100\u0025;position:absolute;right:0;top:0;width:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50\u0025 50\u0025;background-repeat:no-repeat;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}\n.fb_mpn_mobile_landing_page_slide_out{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_out_from_left{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out_from_left;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_up{animation-duration:500ms;animation-name:fb_mpn_landing_page_slide_up;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_in{animation-duration:300ms;animation-name:fb_mpn_bounce_in;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out{animation-duration:300ms;animation-name:fb_mpn_bounce_out;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out_v2{animation-duration:300ms;animation-name:fb_mpn_fade_out;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_from_left{animation-duration:300ms;animation-name:fb_bounce_in_from_left;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_from_left{animation-duration:300ms;animation-name:fb_bounce_out_from_left;transition-timing-function:ease-in}.fb_customer_chat_bubble_animated_no_badge{box-shadow:0 3px 12px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_no_badge:hover{box-shadow:0 5px 24px rgba(0, 0, 0, .3)}.fb_customer_chat_bubble_animated_with_badge{box-shadow:-5px 4px 14px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_with_badge:hover{box-shadow:-5px 8px 24px rgba(0, 0, 0, .2)}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_new_ui_mobile_overlay_active{overflow:hidden}\u0040keyframes fb_mpn_landing_page_slide_in{0\u0025{border-radius:50\u0025;margin:0 24px;width:60px}40\u0025{border-radius:18px}100\u0025{margin:0 12px;width:100\u0025 - 24px}}\u0040keyframes fb_mpn_landing_page_slide_in_from_left{0\u0025{border-radius:50\u0025;left:12px;margin:0 24px;width:60px}40\u0025{border-radius:18px}100\u0025{left:12px;margin:0 12px;width:100\u0025 - 24px}}\u0040keyframes fb_mpn_landing_page_slide_out{0\u0025{margin:0 12px;width:100\u0025 - 24px}60\u0025{border-radius:18px}100\u0025{border-radius:50\u0025;margin:0 24px;width:60px}}\u0040keyframes fb_mpn_landing_page_slide_out_from_left{0\u0025{left:12px;width:100\u0025 - 24px}60\u0025{border-radius:18px}100\u0025{border-radius:50\u0025;left:12px;width:60px}}\u0040keyframes fb_mpn_landing_page_slide_up{0\u0025{bottom:0;opacity:0}100\u0025{bottom:24px;opacity:1}}\u0040keyframes fb_mpn_bounce_in{0\u0025{opacity:.5;top:100\u0025}100\u0025{opacity:1;top:0}}\u0040keyframes fb_mpn_fade_out{0\u0025{bottom:30px;opacity:1}100\u0025{bottom:0;opacity:0}}\u0040keyframes fb_mpn_bounce_out{0\u0025{opacity:1;top:0}100\u0025{opacity:.5;top:100\u0025}}\u0040keyframes fb_bounce_in_v2{0\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50\u0025{transform:scale(1.03, 1.03);transform-origin:bottom right}100\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}\u0040keyframes fb_bounce_in_from_left{0\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom left}50\u0025{transform:scale(1.03, 1.03);transform-origin:bottom left}100\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom left}}\u0040keyframes fb_bounce_out_v2{0\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}\u0040keyframes fb_bounce_out_from_left{0\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom left}100\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom left}}\u0040keyframes fb_bounce_out_v2_mobile_chat_started{0\u0025{opacity:1;top:0}100\u0025{opacity:0;top:20px}}\u0040keyframes fb_customer_chat_bubble_bounce_in_animation{0\u0025{bottom:6pt;opacity:0;transform:scale(0, 0);transform-origin:center}70\u0025{bottom:18pt;opacity:1;transform:scale(1.2, 1.2)}100\u0025{transform:scale(1, 1)}}\u0040keyframes slideInFromBottom{0\u0025{opacity:.1;transform:translateY(100\u0025)}100\u0025{opacity:1;transform:translateY(0)}}\u0040keyframes slideInFromBottomDelay{0\u0025{opacity:0;transform:translateY(100\u0025)}97\u0025{opacity:0;transform:translateY(100\u0025)}100\u0025{opacity:1;transform:translateY(0)}}',
            components: [
              "css:fb.css.base",
              "css:fb.css.dialog",
              "css:fb.css.iframewidget",
              "css:fb.css.customer_chat_plugin_iframe",
            ],
          });
          __d("JSSDKRuntimeConfig", [], {
            locale: "en_US",
            revision: "1004028416",
            rtl: false,
            sdkab: null,
            sdkns: "FB",
            sdkurl: "https://connect.facebook.net/en_US/sdk.js",
          });
          __d("JSSDKXDConfig", [], {
            XXdUrl: "/x/connect/xd_arbiter/?version=46",
            useCdn: true,
          });
          __d("UrlMapConfig", [], {
            www: "www.facebook.com",
            m: "m.facebook.com",
            business: "business.facebook.com",
            api: "api.facebook.com",
            api_read: "api-read.facebook.com",
            graph: "graph.facebook.com",
            an: "an.facebook.com",
            fbcdn: "static.xx.fbcdn.net",
            cdn: "staticxx.facebook.com",
            graph_facebook: "graph.facebook.com",
            graph_gaming: "graph.fb.gg",
            graph_instagram: "graph.instagram.com",
            www_instagram: "www.instagram.com",
          });
          __d(
            "DOMWrapper",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              f.setRoot = a;
              f.getRoot = b;
              f.setWindow = c;
              f.getWindow = d;
              var g, h;
              function a(a) {
                g = a;
              }
              function b() {
                return g || document.body;
              }
              function c(a) {
                h = a;
              }
              function d() {
                return h || self;
              }
            },
            null
          );
          __d(
            "dotAccess",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a, b, c) {
                b = b.split(".");
                do {
                  var d = b.shift();
                  a = a[d] || (c && (a[d] = {}));
                } while (b.length && a);
                return a;
              }
            },
            null
          );
          __d(
            "guid",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a() {
                return (
                  "f" +
                  (Math.random() * (1 << 30)).toString(16).replace(".", "")
                );
              }
            },
            null
          );
          __d(
            "wrapFunction",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              var g = {};
              function a(a, b, c) {
                var d = b in g ? g[b](a, c) : a;
                return function () {
                  for (
                    var a = arguments.length, b = new Array(a), c = 0;
                    c < a;
                    c++
                  )
                    b[c] = arguments[c];
                  return d.apply(this, b);
                };
              }
              a.setWrapper = function (a, b) {
                g[b] = a;
              };
            },
            null
          );
          __d(
            "GlobalCallback",
            ["DOMWrapper", "dotAccess", "guid", "wrapFunction"],
            function (a, b, c, d, e, f) {
              f.setPrefix = a;
              f.create = c;
              f.remove = d;
              var g, h;
              function a(a) {
                (g = b("dotAccess")(b("DOMWrapper").getWindow(), a, !0)),
                  (h = a);
              }
              function c(a, c) {
                g || this.setPrefix("__globalCallbacks");
                var d = b("guid")();
                g[d] = b("wrapFunction")(
                  a,
                  "entry",
                  (a = c) != null ? a : "GlobalCallback"
                );
                return h + "." + d;
              }
              function d(a) {
                a = a.substring(h.length + 1);
                delete g[a];
              }
            },
            null
          );
          __d(
            "Log",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              f.setLevel = a;
              var g = -1;
              b = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
              f.Level = b;
              c = function (a, b, c) {
                for (
                  var d = arguments.length,
                    e = new Array(d > 3 ? d - 3 : 0),
                    f = 3;
                  f < d;
                  f++
                )
                  e[f - 3] = arguments[f];
                var h = 0,
                  i = c.replace(/%s/g, function () {
                    return String(e[h++]);
                  }),
                  j = window.console;
                j && g >= b && j[a in j ? a : "log"](i);
              };
              f.log = c;
              function a(a) {
                g = a;
              }
              d = ES(c, "bind", !0, null, "debug", b.DEBUG);
              f.debug = d;
              e = ES(c, "bind", !0, null, "info", b.INFO);
              f.info = e;
              a = ES(c, "bind", !0, null, "warn", b.WARNING);
              f.warn = a;
              d = ES(c, "bind", !0, null, "error", b.ERROR);
              f.error = d;
            },
            null
          );
          __d(
            "sdk.UA",
            [],
            function (a, b, c, d, e, f) {
              a = navigator.userAgent;
              var g = {
                  iphone: /\b(iPhone|iP[ao]d)/.test(a),
                  ipad: /\b(iP[ao]d)/.test(a),
                  android: /Android/i.test(a),
                  nativeApp: /FBAN\/\w+;/i.test(a) && !/FBAN\/mLite;/.test(a),
                  nativeAndroidApp: /FB_IAB\/\w+;/i.test(a),
                  nativeInstagramApp: /Instagram/i.test(a),
                  nativeMessengeriOSApp: /MessengerForiOS/i.test(a),
                  nativeMessengerAndroidApp: /Orca\-Android/i.test(a),
                  ucBrowser: /UCBrowser/i.test(a),
                },
                h = /Mobile/i.test(a),
                i = {
                  ie: NaN,
                  firefox: NaN,
                  chrome: NaN,
                  webkit: NaN,
                  osx: NaN,
                  edge: NaN,
                  operaMini: NaN,
                  ucWeb: NaN,
                };
              b =
                /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
                  a
                );
              if (b) {
                i.ie = b[1] ? parseFloat(b[1]) : b[4] ? parseFloat(b[4]) : NaN;
                i.firefox = b[2] || "";
                i.webkit = b[3] || "";
                if (b[3]) {
                  c = /(?:Chrome\/(\d+\.\d+))/.exec(a);
                  i.chrome = c ? c[1] : "";
                  d = /(?:Edge\/(\d+\.\d+))/.exec(a);
                  i.edge = d ? d[1] : "";
                }
              }
              f = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
              f && (i.osx = f[1]);
              b = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);
              b && (i.operaMini = b[1]);
              c = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);
              c && (i.ucWeb = c[1] || "2.0");
              function j(a) {
                return String(a)
                  .split(".")
                  .map(function (a) {
                    return parseFloat(a);
                  });
              }
              var k = {};
              Object.keys(i).map(function (a) {
                var b = function () {
                  return parseFloat(i[a]);
                };
                b.getVersionParts = function () {
                  return j(i[a]);
                };
                k[a] = b;
              });
              Object.keys(g).map(function (a) {
                k[a] = function () {
                  return g[a];
                };
              });
              k.mobile = function () {
                return g.iphone || g.ipad || g.android || h;
              };
              k.mTouch = function () {
                return g.android || g.iphone || g.ipad;
              };
              k.facebookInAppBrowser = function () {
                return g.nativeApp || g.nativeAndroidApp;
              };
              k.inAppBrowser = function () {
                return (
                  g.nativeApp || g.nativeAndroidApp || g.nativeInstagramApp
                );
              };
              k.mBasic = function () {
                return !!(i.ucWeb || i.operaMini);
              };
              k.instagram = function () {
                return g.nativeInstagramApp;
              };
              k.messenger = function () {
                return g.nativeMessengeriOSApp || g.nativeMessengerAndroidApp;
              };
              k.isSupportedIABVersion = function (a) {
                if (!k.facebookInAppBrowser()) return !1;
                var b = /(?:FBAV\/(\d+(\.\d+)+))/.exec(navigator.userAgent);
                if (b) {
                  b = parseFloat(b[1]);
                  if (b >= a) return !0;
                }
                return !1;
              };
              d = k;
              e.exports = d;
            },
            null
          );
          __d(
            "sdk.domReady",
            [],
            function (a, b, c, d, e, f) {
              e.exports = b;
              var g;
              c =
                "readyState" in document
                  ? /loaded|complete/.test(document.readyState)
                  : !!document.body;
              function a() {
                if (!g) return;
                var a;
                while ((a = g.shift())) a();
                g = null;
              }
              function b(a) {
                if (g) {
                  g.push(a);
                  return;
                } else a();
              }
              c ||
                ((g = []),
                document.addEventListener
                  ? (document.addEventListener("DOMContentLoaded", a, !1),
                    window.addEventListener("load", a, !1))
                  : document.attachEvent &&
                    (document.attachEvent("onreadystatechange", a),
                    window.attachEvent("onload", a)));
            },
            3
          );
          __d(
            "sdk.Content",
            ["Log", "sdk.UA", "sdk.domReady"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.append = i;
              f.appendHidden = j;
              f.submitToTarget = a;
              var g, h;
              function i(a, c) {
                c ||
                  (!g
                    ? ((g = c = document.getElementById("fb-root")),
                      c ||
                        (b("Log").warn(
                          'The "fb-root" div has not been created, auto-creating'
                        ),
                        (g = c = document.createElement("div")),
                        (c.id = "fb-root"),
                        b("sdk.UA").ie() || !document.body
                          ? b("sdk.domReady")(function () {
                              c &&
                                document.body &&
                                document.body.appendChild(c);
                            })
                          : document.body.appendChild(c)),
                      (c.className += " fb_reset"))
                    : (c = g));
                c.appendChild(a);
                return a;
              }
              function j(a) {
                if (!h) {
                  h = document.createElement("div");
                  var b = h.style;
                  b.position = "absolute";
                  b.top = "-10000px";
                  b.width = "0";
                  b.height = "0";
                  h = i(h);
                }
                return i(a, h);
              }
              function a(a, b) {
                var c = document.createElement("form");
                c.action = a.url;
                c.target = a.target;
                c.method = b ? "GET" : "POST";
                j(c);
                for (var d in a.params)
                  if (Object.prototype.hasOwnProperty.call(a.params, d)) {
                    b = a.params[d];
                    if (b !== null && b !== void 0) {
                      var e = document.createElement("input");
                      e.name = d;
                      e.value = b;
                      c.appendChild(e);
                    }
                  }
                c.submit();
                c.parentNode && c.parentNode.removeChild(c);
              }
            },
            null
          );
          __d(
            "sdk.DOM",
            ["guid", "sdk.domReady"],
            function (a, b, c, d, e, f) {
              f.getAttr = i;
              f.getBoolAttr = a;
              f.html = c;
              f.containsCss = j;
              f.addCss = d;
              f.removeCss = e;
              f.getByClass = k;
              f.getStyle = l;
              f.setStyle = m;
              f.updateOrAddCssRule = n;
              f.addCssRules = o;
              f.remove = p;
              f.getViewportInfo = q;
              var g = {},
                h = {};
              function i(a, b) {
                a =
                  a.getAttribute(b) ||
                  a.getAttribute(b.replace(/_/g, "-")) ||
                  a.getAttribute(b.replace(/-/g, "_")) ||
                  a.getAttribute(b.replace(/-/g, "")) ||
                  a.getAttribute(b.replace(/_/g, "")) ||
                  a.getAttribute("data-" + b) ||
                  a.getAttribute("data-" + b.replace(/_/g, "-")) ||
                  a.getAttribute("data-" + b.replace(/-/g, "_")) ||
                  a.getAttribute("data-" + b.replace(/-/g, "")) ||
                  a.getAttribute("data-" + b.replace(/_/g, ""));
                return a != null ? String(a) : null;
              }
              function a(a, b) {
                a = i(a, b);
                return a != null ? /^(true|1|yes|on)$/.test(a) : null;
              }
              function c(a, b) {
                try {
                  a.innerHTML = b;
                } catch (a) {
                  throw new Error("Could not set innerHTML : " + a.message);
                }
              }
              function j(a, b) {
                a = " " + a.className + " ";
                return a.indexOf(" " + b + " ") >= 0;
              }
              function d(a, b) {
                if (a == null) return;
                j(a, b) || (a.className = a.className + " " + b);
              }
              function e(a, b) {
                if (a == null) return;
                b = new RegExp("\\s*" + b, "g");
                a.className = a.className.replace(b, "").trim();
              }
              function k(a, b, c) {
                c === void 0 && (c = "*");
                b = b || document.body;
                if (b == null) return [];
                c = c || "*";
                return ES("Array", "from", !1, b.querySelectorAll(c + "." + a));
              }
              function l(a, b) {
                b = u(b);
                var c = document.defaultView
                  .getComputedStyle(a)
                  .getPropertyValue(b);
                c = a.style.getPropertyValue(b);
                /background-position?/.test(b) &&
                  /top|left/.test(c) &&
                  (c = "0%");
                return c;
              }
              function m(a, b, c) {
                a.style.setProperty(u(b), c);
              }
              function n(a, b, c, d, e) {
                a = a.styleSheets;
                for (var f = 0; f < a.length; f++) {
                  var g;
                  if (
                    a[f].ownerNode instanceof HTMLElement &&
                    a[f].ownerNode.dataset != null &&
                    ((g = a[f].ownerNode.dataset.fbcssmodules) == null
                      ? void 0
                      : g.indexOf(b)) !== -1
                  ) {
                    g = a[f];
                    if (g instanceof CSSStyleSheet) {
                      for (var h = 0; h < g.cssRules.length; h++) {
                        var i = g.cssRules[h];
                        if (i instanceof CSSStyleRule && i.selectorText === c) {
                          i.style.setProperty(u(d), e);
                          return;
                        }
                      }
                      g.insertRule(
                        c + "{" + u(d) + ":" + ((i = e) != null ? i : "") + "}",
                        0
                      );
                    }
                  }
                }
              }
              function o(a, c, d) {
                var e;
                if (d != null && d.nodeType === 11) {
                  var f = d;
                  f.host.id != null && h[f.host.id] != null
                    ? (e = h[f.host.id])
                    : (f.host.id || (f.host.id = b("guid")()),
                      (e = {}),
                      (h[f.host.id] = e));
                } else e = g;
                f = !0;
                for (var i = 0, j; (j = c[i++]); )
                  j in e || ((f = !1), (e[j] = !0));
                if (f) return;
                j = document.createElement("style");
                j.type = "text/css";
                j.textContent = a;
                var k = "";
                c.forEach(function (a) {
                  return (k += a + " ");
                });
                j.setAttribute("data-fbcssmodules", k.trim());
                d == null || d === document
                  ? document.getElementsByTagName("head")[0].appendChild(j)
                  : d.appendChild(j);
              }
              function p(a) {
                if (!a || !a.parentNode) return null;
                else return a.parentNode.removeChild(a);
              }
              function q() {
                var a,
                  b =
                    document.documentElement &&
                    document.compatMode == "CSS1Compat"
                      ? document.documentElement
                      : document.body;
                return {
                  scrollTop:
                    (b == null ? void 0 : b.scrollTop) ||
                    ((a = document.body) == null ? void 0 : a.scrollTop),
                  scrollLeft:
                    (b == null ? void 0 : b.scrollLeft) ||
                    ((a = document.body) == null ? void 0 : a.scrollLeft),
                  width: window.innerWidth
                    ? window.innerWidth
                    : b == null
                    ? void 0
                    : b.clientWidth,
                  height: window.innerHeight
                    ? window.innerHeight
                    : b == null
                    ? void 0
                    : b.clientHeight,
                };
              }
              var r = /[A-Z]/g,
                s = /^\([^-]\)-/,
                t = ["o", "moz", "ms", "webkit"];
              function u(a) {
                a = a.replace(r, "-$&").toLowerCase();
                var b = a.match(s);
                b && t.indexOf(b[1]) !== -1 && (a = "-" + a);
                return a;
              }
              a = b("sdk.domReady");
              f.ready = a;
            },
            null
          );
          __d(
            "ManagedError",
            [],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c) {
                  var d;
                  d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
                  b !== null && b !== void 0
                    ? (d.message = b)
                    : (d.message = "");
                  d.innerError = c;
                  return d;
                }
                return b;
              })(babelHelpers.wrapNativeSuper(Error));
              e.exports = a;
            },
            null
          );
          __d(
            "normalizeError",
            ["sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              function a(a) {
                var c = {
                  line: a.lineNumber || a.line,
                  message: a.message,
                  name: a.name,
                  script: a.fileName || a.sourceURL || a.script,
                  stack: a.stackTrace || a.stack,
                };
                c._originalError = a;
                a = /([\w:\.\/]+\.js):(\d+)/.exec(a.stack);
                b("sdk.UA").chrome() &&
                  a &&
                  ((c.script = a[1]), (c.line = parseInt(a[2], 10)));
                for (var d in c) c[d] == null && delete c[d];
                return c;
              }
            },
            null
          );
          __d(
            "ObservableMixin",
            [],
            function (a, b, c, d, e, f) {
              function a() {
                this.__observableEvents = {};
              }
              a.prototype = {
                inform: function (a) {
                  var b = Array.prototype.slice.call(arguments, 1),
                    c = Array.prototype.slice.call(this.getSubscribers(a));
                  for (var d = 0; d < c.length; d++) {
                    if (c[d] === null) continue;
                    try {
                      c[d].apply(this, b);
                    } catch (a) {
                      window.setTimeout(function () {
                        throw a;
                      }, 0);
                    }
                  }
                  return this;
                },
                getSubscribers: function (a) {
                  return (
                    this.__observableEvents[a] ||
                    (this.__observableEvents[a] = [])
                  );
                },
                clearSubscribers: function (a) {
                  a && (this.__observableEvents[a] = []);
                  return this;
                },
                subscribe: function (a, b) {
                  a = this.getSubscribers(a);
                  a.push(b);
                  return this;
                },
                unsubscribe: function (a, b) {
                  a = this.getSubscribers(a);
                  for (var c = 0; c < a.length; c++)
                    if (a[c] === b) {
                      a.splice(c, 1);
                      break;
                    }
                  return this;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "AssertionError",
            ["ManagedError"],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b) {
                  return a.call(this, b) || this;
                }
                return b;
              })(b("ManagedError"));
              e.exports = a;
            },
            null
          );
          __d(
            "sprintf",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                for (
                  var b = arguments.length,
                    c = new Array(b > 1 ? b - 1 : 0),
                    d = 1;
                  d < b;
                  d++
                )
                  c[d - 1] = arguments[d];
                var e = 0;
                return a.replace(/%s/g, function () {
                  return String(c[e++]);
                });
              }
            },
            null
          );
          __d(
            "Assert",
            ["AssertionError", "sprintf"],
            function (a, b, c, d, e, f) {
              function g(a, c) {
                if (typeof a !== "boolean" || a === !1)
                  throw new (b("AssertionError"))(c);
                return a;
              }
              function h(a, c, d) {
                var e;
                if (c === void 0) e = "undefined";
                else if (c === null) e = "null";
                else {
                  var f = Object.prototype.toString.call(c);
                  f = /\s(\w*)/.exec(f);
                  e = f == null ? typeof f : f[1].toLowerCase();
                }
                g(
                  a.indexOf(e) !== -1,
                  (f = d) != null
                    ? f
                    : b("sprintf")("Expression is of type %s, not %s", e, a)
                );
                return c;
              }
              function a(a, b, c) {
                g(
                  b instanceof a,
                  (a = c) != null ? a : "Expression not instance of type"
                );
                return b;
              }
              function i(a, b) {
                (j["is" + a] = b),
                  (j["maybe" + a] = function (a, c) {
                    return a == null ? a : b(a, c);
                  });
              }
              c = function (a, b) {
                return a;
              };
              var j = {
                isInstanceOf: a,
                isTrue: g,
                isTruthy: function (a, b) {
                  return g(!!a, b);
                },
                isBoolean: c,
                isFunction: c,
                isNumber: c,
                isObject: c,
                isString: c,
                isUndefined: c,
                maybeObject: c,
                maybeNumber: c,
                maybeFunction: c,
              };
              [
                "Boolean",
                "Function",
                "Number",
                "Object",
                "String",
                "Undefined",
              ].forEach(function (a) {
                i(a, ES(h, "bind", !0, null, a.toLowerCase()));
              });
              d = j;
              e.exports = d;
            },
            null
          );
          __d(
            "Type",
            ["Assert"],
            function (a, b, c, d, e, f) {
              function g() {
                var a = this.__mixins;
                if (a)
                  for (var b = 0; b < a.length; b++)
                    a[b].apply(this, arguments);
              }
              function h(a, b) {
                if (b instanceof a) return !0;
                if (b instanceof g)
                  for (var c = 0; c < b.__mixins.length; c++)
                    if (b.__mixins[c] == a) return !0;
                return !1;
              }
              function i(a, b) {
                var c = a.prototype;
                Array.isArray(b) || (b = [b]);
                for (var a = 0; a < b.length; a++) {
                  var d = b[a];
                  typeof d === "function" &&
                    (c.__mixins.push(d), (d = d.prototype));
                  Object.keys(d).forEach(function (a) {
                    c[a] = d[a];
                  });
                }
              }
              function j(a, c, d) {
                var e =
                  c && Object.prototype.hasOwnProperty.call(c, "constructor")
                    ? c.constructor
                    : function () {
                        this.parent.apply(this, arguments);
                      };
                b("Assert").isFunction(e);
                if (a && a.prototype instanceof g === !1)
                  throw new Error("parent type does not inherit from Type");
                a = a || g;
                function f() {}
                f.prototype = a.prototype;
                e.prototype = new f();
                c && ES("Object", "assign", !1, e.prototype, c);
                e.prototype.constructor = e;
                e.parent = a;
                e.prototype.__mixins = a.prototype.__mixins
                  ? Array.prototype.slice.call(a.prototype.__mixins)
                  : [];
                d && i(e, d);
                e.prototype.parent = function () {
                  (this.parent = a.prototype.parent), a.apply(this, arguments);
                };
                e.prototype.parentCall = function (b) {
                  return a.prototype[b].apply(
                    this,
                    Array.prototype.slice.call(arguments, 1)
                  );
                };
                e.extend = function (a, b) {
                  return j(this, a, b);
                };
                return e;
              }
              ES("Object", "assign", !1, g.prototype, {
                instanceOf: function (a) {
                  return h(a, this);
                },
              });
              ES("Object", "assign", !1, g, {
                extend: function (a, b) {
                  return typeof a === "function"
                    ? j.apply(null, arguments)
                    : j(null, a, b);
                },
                instanceOf: h,
              });
              e.exports = g;
            },
            null
          );
          __d(
            "sdk.Model",
            ["ObservableMixin", "Type"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("Type").extend(
                {
                  constructor: function (a) {
                    this.parent();
                    var b = {},
                      c = this;
                    Object.keys(a).forEach(function (d) {
                      (b[d] = a[d]),
                        (c["set" + d] = function (a) {
                          if (a === b[d]) return c;
                          b[d] = a;
                          c.inform(d + ".change", a);
                          return c;
                        }),
                        (c["get" + d] = function () {
                          return b[d];
                        });
                    });
                  },
                },
                b("ObservableMixin")
              );
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.Runtime",
            ["JSSDKRuntimeConfig", "sdk.Model"],
            function (a, b, c, d, e, f) {
              var g = { UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4 },
                h = new (b("sdk.Model"))({
                  AccessToken: "",
                  AutoLogAppEvents: !1,
                  ClientID: "",
                  CookieUserID: "",
                  EnforceHttps: !1,
                  Environment: g.UNKNOWN,
                  FamilyLoginLoaded: !1,
                  GraphDomain: "",
                  Initialized: !1,
                  IsVersioned: !1,
                  KidDirectedSite: void 0,
                  Locale: (a = b("JSSDKRuntimeConfig")).locale,
                  LoggedIntoFacebook: void 0,
                  LoginStatus: void 0,
                  Revision: a.revision,
                  Rtl: a.rtl,
                  Scope: void 0,
                  SDKAB: a.sdkab,
                  SDKUrl: a.sdkurl,
                  SDKNS: a.sdkns,
                  ShouldLoadFamilyLogin: !1,
                  UseCookie: !1,
                  UseLocalStorage: !0,
                  UserID: "",
                  Version: void 0,
                });
              ES("Object", "assign", !1, h, {
                ENVIRONMENTS: g,
                isEnvironment: function (a) {
                  var b = this.getEnvironment();
                  return (a | b) === b;
                },
                isCanvasEnvironment: function () {
                  return (
                    this.isEnvironment(g.CANVAS) ||
                    this.isEnvironment(g.PAGETAB)
                  );
                },
              });
              (function () {
                var a = /app_runner/.test(window.name)
                  ? g.PAGETAB
                  : /iframe_canvas/.test(window.name)
                  ? g.CANVAS
                  : g.UNKNOWN;
                (a | g.PAGETAB) === a && (a |= g.CANVAS);
                h.setEnvironment(a);
              })();
              c = h;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.ErrorHandler",
            ["ManagedError", "normalizeError", "sdk.Runtime", "wrapFunction"],
            function (a, b, c, d, e, f) {
              f.create = a;
              function a(a, c) {
                var d = "";
                function e(a) {
                  var b = a._originalError;
                  delete a._originalError;
                  c(a);
                  throw b;
                }
                function f(c, f) {
                  return function () {
                    if (!a) return c.apply(this, arguments);
                    try {
                      d = f;
                      return c.apply(this, arguments);
                    } catch (a) {
                      if (a instanceof b("ManagedError")) throw a;
                      var g = b("normalizeError")(a);
                      if (!g.script) {
                        var h = /.*\/([^?#]+)/.exec(
                          b("sdk.Runtime").getSDKUrl()
                        );
                        g.script = h !== null ? h[1] : "";
                      }
                      g.entry = f;
                      var i = Array.prototype.slice
                        .call(arguments)
                        .map(function (a) {
                          var b = Object.prototype.toString.call(a);
                          return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(
                            b
                          )
                            ? a
                            : a.toString();
                        });
                      g.args = ES("JSON", "stringify", !1, i).substring(0, 200);
                      e(g);
                    } finally {
                      d = "";
                    }
                  };
                }
                function g(a) {
                  a.__wrapper ||
                    (a.__wrapper = function () {
                      try {
                        return a.apply(this, arguments);
                      } catch (a) {
                        window.setTimeout(function () {
                          throw a;
                        }, 0);
                        return !1;
                      }
                    });
                  return a.__wrapper;
                }
                function h(a) {
                  try {
                    return a && a.callee && a.callee.caller
                      ? a.callee.caller.name
                      : "";
                  } catch (a) {
                    return "";
                  }
                }
                function i(a, c) {
                  return function (e, f) {
                    var g =
                      c +
                      ":" +
                      (d || "[global]") +
                      ":" +
                      (e.name || "[anonymous]" + h(arguments));
                    return a(b("wrapFunction")(e, "entry", g), f);
                  };
                }
                a &&
                  ((setTimeout = i(setTimeout, "setTimeout")),
                  (setInterval = i(setInterval, "setInterval")),
                  b("wrapFunction").setWrapper(f, "entry"));
                return { guard: f, unguard: g };
              }
            },
            null
          );
          __d(
            "QueryString",
            [],
            function (a, b, c, d, e, f) {
              function g(a) {
                var b = [];
                Object.keys(a)
                  .sort()
                  .forEach(function (c) {
                    var d = a[c];
                    if (d === void 0) return;
                    if (d === null) {
                      b.push(c);
                      return;
                    }
                    b.push(
                      encodeURIComponent(c) +
                        "=" +
                        encodeURIComponent(String(d))
                    );
                  });
                return b.join("&");
              }
              function a(a, b) {
                b === void 0 && (b = !1);
                var c = {};
                if (a === "") return c;
                a = a.split("&");
                for (var d = 0; d < a.length; d++) {
                  var e = a[d].split("=", 2),
                    f = decodeURIComponent(e[0]);
                  if (b && Object.prototype.hasOwnProperty.call(c, f))
                    throw new URIError("Duplicate key: " + f);
                  c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
                }
                return c;
              }
              function b(a, b) {
                return (
                  a +
                  (a.indexOf("?") !== -1 ? "&" : "?") +
                  (typeof b === "string" ? b : g(b))
                );
              }
              c = { encode: g, decode: a, appendToUrl: b };
              e.exports = c;
            },
            null
          );
          __d(
            "Env",
            [],
            function (a, b, c, d, e, f) {
              b = {
                ajaxpipe_token: null,
                compat_iframe_token: null,
                iframeKey: "",
                iframeTarget: "",
                iframeToken: "",
                isCQuick: !1,
                start: Date.now(),
                nocatch: !1,
              };
              a.Env && ES("Object", "assign", !1, b, a.Env);
              a.Env = b;
              c = b;
              e.exports = c;
            },
            null
          );
          __d(
            "fb-error-lite",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = {
                PREVIOUS_FILE: 1,
                PREVIOUS_FRAME: 2,
                PREVIOUS_DIR: 3,
                FORCED_KEY: 4,
              };
              function a(a) {
                var b = new Error(a);
                if (b.stack === void 0)
                  try {
                    throw b;
                  } catch (a) {}
                b.messageFormat = a;
                for (
                  var c = arguments.length,
                    d = new Array(c > 1 ? c - 1 : 0),
                    e = 1;
                  e < c;
                  e++
                )
                  d[e - 1] = arguments[e];
                b.messageParams = d.map(function (a) {
                  return String(a);
                });
                b.taalOpcodes = [g.PREVIOUS_FRAME];
                return b;
              }
              b = { err: a, TAALOpcode: g };
              e.exports = b;
            },
            null
          );
          __d(
            "invariant",
            ["Env", "fb-error-lite", "sprintf"],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              var g,
                h = b("fb-error-lite").TAALOpcode;
              function a(a, b) {
                if (!a) {
                  var c = b;
                  for (
                    var d = arguments.length,
                      e = new Array(d > 2 ? d - 2 : 0),
                      f = 2;
                    f < d;
                    f++
                  )
                    e[f - 2] = arguments[f];
                  if (typeof c === "number") {
                    var g = i(c, e),
                      j = g.message,
                      k = g.decoderLink;
                    c = j;
                    e.unshift(k);
                  } else if (c === void 0) {
                    c = "Invariant: ";
                    for (var l = 0; l < e.length; l++) c += "%s,";
                  }
                  var m = c,
                    n = new Error(m);
                  n.name = "Invariant Violation";
                  n.messageFormat = c;
                  n.messageParams = e.map(function (a) {
                    return String(a);
                  });
                  n.taalOpcodes = [h.PREVIOUS_FRAME];
                  n.stack;
                  throw n;
                }
              }
              function i(a, c) {
                var d = "Minified invariant #" + a + "; %s";
                c.length > 0 &&
                  (d +=
                    " Params: " +
                    c
                      .map(function (a) {
                        return "%s";
                      })
                      .join(", "));
                a =
                  (g || (g = b("Env"))).show_invariant_decoder === !0
                    ? "visit " + j(a, c) + " to see the full message."
                    : "";
                return { message: d, decoderLink: a };
              }
              function j(a, b) {
                a = "https://www.internalfb.com/intern/invariant/" + a + "/";
                b.length > 0 &&
                  (a +=
                    "?" +
                    b
                      .map(function (a, b) {
                        return (
                          "args[" + b + "]=" + encodeURIComponent(String(a))
                        );
                      })
                      .join("&"));
                return a;
              }
            },
            null
          );
          __d(
            "UrlMap",
            ["invariant", "UrlMapConfig", "sdk.Runtime"],
            function (a, b, c, d, e, f, g) {
              f.resolve = a;
              function a(a) {
                var c = "https";
                if (a === "graph_domain") {
                  var d = b("sdk.Runtime").getGraphDomain();
                  d ? (a = "graph_".concat(d)) : (a = "graph");
                }
                if (a in b("UrlMapConfig"))
                  return c + "://" + b("UrlMapConfig")[a];
                a in b("UrlMapConfig") || g(0, 2511, a);
                return "";
              }
            },
            null
          );
          __d(
            "sdk.FeatureFunctor",
            [],
            function (a, b, c, d, e, f) {
              f.create = a;
              function g(a, b, c) {
                if (a.features && b in a.features) {
                  a = a.features[b];
                  if (typeof a === "object" && typeof a.rate === "number")
                    if (a.rate && Math.random() * 100 <= a.rate)
                      return a.value || !0;
                    else return a.value ? null : !1;
                  else return a;
                }
                return c;
              }
              function a(a) {
                return function () {
                  for (
                    var b = arguments.length, c = new Array(b), d = 0;
                    d < b;
                    d++
                  )
                    c[d] = arguments[d];
                  if (c.length < 2)
                    throw new Error("Default value is required");
                  var e = c[0],
                    f = c[1];
                  return g(a, e, f);
                };
              }
            },
            null
          );
          __d(
            "sdk.feature",
            ["JSSDKConfig", "sdk.FeatureFunctor"],
            function (a, b, c, d, e, f) {
              a = b("sdk.FeatureFunctor").create(b("JSSDKConfig"));
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Scribe",
            ["QueryString", "UrlMap", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              f.log = a;
              var g = {};
              function a(a, c, d) {
                d === void 0 && (d = !1);
                if (a === "jssdk_error") {
                  var e = ES("JSON", "stringify", !1, c);
                  if (Object.prototype.hasOwnProperty.call(g, e)) return;
                  else g[e] = !0;
                }
                if (c.extra != null && typeof c.extra === "object") {
                  e = c.extra;
                  e.revision = b("sdk.Runtime").getRevision();
                }
                e = new Image();
                var f =
                  b("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
                d || (e.crossOrigin = "anonymous");
                e.src = b("QueryString").appendToUrl(f, {
                  c: a,
                  m: ES("JSON", "stringify", !1, c),
                });
              }
            },
            null
          );
          __d(
            "sdk.ErrorHandling",
            ["sdk.ErrorHandler", "sdk.Runtime", "sdk.Scribe", "sdk.feature"],
            function (a, b, c, d, e, f) {
              a = b("sdk.feature")("error_handling", !1);
              c = b("sdk.ErrorHandler").create(a, function (a) {
                b("sdk.Scribe").log("jssdk_error", {
                  appId: b("sdk.Runtime").getClientID(),
                  error: a.name || a.message,
                  extra: a,
                });
              });
              e.exports = c;
            },
            null
          );
          __d(
            "FB",
            [
              "DOMWrapper",
              "GlobalCallback",
              "JSSDKCssConfig",
              "Log",
              "dotAccess",
              "sdk.Content",
              "sdk.DOM",
              "sdk.ErrorHandling",
              "sdk.domReady",
            ],
            function (a, b, c, d, e, f) {
              var g = (window.FB = {});
              c = {};
              b("Log").setLevel(0);
              b("GlobalCallback").setPrefix("FB.__globalCallbacks");
              var h = document.createElement("div");
              b("DOMWrapper").setRoot(h);
              b("sdk.domReady")(function () {
                b("Log").info("domReady"),
                  b("sdk.Content").appendHidden(h),
                  b("JSSDKCssConfig").rules &&
                    b("sdk.DOM").addCssRules(
                      b("JSSDKCssConfig").rules,
                      b("JSSDKCssConfig").components
                    );
              });
              function i(a, c, d, e) {
                return b("sdk.ErrorHandling").guard(function () {
                  function f(a) {
                    if (Array.isArray(a)) return a.map(f);
                    return a && typeof a === "object" && a.__wrapped
                      ? a.__wrapped
                      : typeof a === "function" &&
                        /^function/.test(a.toString())
                      ? b("sdk.ErrorHandling").unguard(a)
                      : a;
                  }
                  var g = Array.prototype.slice.call(arguments).map(f),
                    h = a.apply(e, g),
                    j,
                    k = !0;
                  if (h && typeof h === "object") {
                    j = Object.create(h);
                    j.__wrapped = h;
                    for (var d in h) {
                      var l = h[d];
                      if (typeof l !== "function" || d === "constructor")
                        continue;
                      k = !1;
                      j[d] = i(l, c + ":" + d, d, h);
                    }
                  }
                  return !k ? j : k ? h : j;
                }, c);
              }
              function a(a, c) {
                var d = a ? b("dotAccess")(g, a, !0) : g;
                Object.keys(c).forEach(function (b) {
                  var e = c[b];
                  if (typeof e === "function") {
                    var f = (a ? a + "." : "") + b;
                    f = i(e, f, b, c);
                    f && (d[b] = f);
                  } else (typeof e === "object" || typeof e === "number") && (d[b] = e);
                });
              }
              ES("Object", "assign", !1, c, { provide: a });
              e.exports = c;
            },
            null
          );
          __d(
            "ArgumentError",
            ["ManagedError"],
            function (a, b, c, d, e, f) {
              a = (function (a) {
                babelHelpers.inheritsLoose(b, a);
                function b(b, c) {
                  return a.call(this, b, c) || this;
                }
                return b;
              })(b("ManagedError"));
              e.exports = a;
            },
            null
          );
          __d(
            "flattenObject",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              function a(a) {
                var b = {};
                for (var c in a)
                  if (Object.prototype.hasOwnProperty.call(a, c)) {
                    var d = a[c];
                    if (null === d || void 0 === d) continue;
                    else
                      typeof d === "string"
                        ? (b[c] = d)
                        : (b[c] = ES("JSON", "stringify", !1, d));
                  }
                return b;
              }
            },
            null
          );
          __d(
            "flattenPHPQueryData",
            ["invariant"],
            function (a, b, c, d, e, f, g) {
              e.exports = a;
              function a(a) {
                return h(a, "", {});
              }
              function h(a, b, c) {
                if (a === null || a === void 0) c[b] = void 0;
                else if (typeof a === "object") {
                  typeof a.appendChild !== "function" || g(0, 2616);
                  for (var d in a)
                    d !== "$$typeof" &&
                      Object.prototype.hasOwnProperty.call(a, d) &&
                      a[d] !== void 0 &&
                      h(a[d], b ? b + "[" + d + "]" : d, c);
                } else c[b] = a;
                return c;
              }
            },
            null
          );
          __d(
            "PHPQuerySerializer",
            ["flattenPHPQueryData"],
            function (a, b, c, d, e, f) {
              function a(a) {
                var c = [];
                a = b("flattenPHPQueryData")(a);
                for (var d in a)
                  if (Object.prototype.hasOwnProperty.call(a, d)) {
                    var e = g(d);
                    a[d] === void 0
                      ? c.push(e)
                      : c.push(e + "=" + g(String(a[d])));
                  }
                return c.join("&");
              }
              function g(a) {
                return encodeURIComponent(a)
                  .replace(/%5D/g, "]")
                  .replace(/%5B/g, "[");
              }
              var h = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
              function i(a) {
                return a === "hasOwnProperty" || a === "__proto__"
                  ? "\ud83d\udf56"
                  : a;
              }
              function c(a) {
                if (!a) return {};
                var b = {};
                a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                a = a.split("&");
                var c = Object.prototype.hasOwnProperty;
                for (var d = 0, e = a.length; d < e; d++) {
                  var f = a[d].match(h);
                  if (!f) {
                    var g = a[d].indexOf("=");
                    if (g === -1) b[j(a[d])] = null;
                    else {
                      var k = a[d].substring(0, g);
                      g = a[d].substring(g + 1);
                      b[j(k)] = j(g);
                    }
                  } else {
                    k = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                    g = f[1];
                    f = j(f[3] || "");
                    k[0] = g;
                    g = b;
                    for (var l = 0; l < k.length - 1; l++) {
                      var m = i(k[l]);
                      if (m) {
                        if (!c.call(g, m)) {
                          var n =
                            k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                          g[m] = n;
                          if (g[m] !== n) return b;
                        }
                        g = g[m];
                      } else
                        k[l + 1] && !k[l + 1].match(/^\d{1,3}$/)
                          ? g.push({})
                          : g.push([]),
                          (g = g[g.length - 1]);
                    }
                    g instanceof Array && k[k.length - 1] === ""
                      ? g.push(f)
                      : (g[i(k[k.length - 1])] = f);
                  }
                }
                return b;
              }
              function j(a) {
                try {
                  return decodeURIComponent(a.replace(/\+/g, " "));
                } catch (b) {
                  return a;
                }
              }
              d = {
                serialize: a,
                encodeComponent: g,
                deserialize: c,
                decodeComponent: j,
              };
              e.exports = d;
            },
            null
          );
          __d(
            "PHPStrictQuerySerializer",
            ["PHPQuerySerializer", "flattenPHPQueryData"],
            function (a, b, c, d, e, f) {
              f.serialize = a;
              f.encodeComponent = h;
              var g;
              function a(a) {
                var c = [];
                a = b("flattenPHPQueryData")(a);
                for (var d in a)
                  if (Object.prototype.hasOwnProperty.call(a, d)) {
                    var e = h(d);
                    a[d] === void 0
                      ? c.push(e)
                      : c.push(e + "=" + h(String(a[d])));
                  }
                return c.join("&");
              }
              function h(a) {
                return encodeURIComponent(a);
              }
              c = (g || (g = b("PHPQuerySerializer"))).deserialize;
              f.deserialize = c;
              d = g.decodeComponent;
              f.decodeComponent = d;
            },
            null
          );
          __d(
            "URIRFC3986",
            [],
            function (a, b, c, d, e, f) {
              f.parse = a;
              var g = new RegExp(
                "^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"
              );
              function a(a) {
                if (a.trim() === "") return null;
                a = a.match(g);
                if (a == null) return null;
                var b = {};
                b.uri = a[0] ? a[0] : null;
                b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
                b.authority = a[2] ? a[2].substr(2) : null;
                b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
                b.host = a[2] ? a[4] : null;
                b.port = a[5]
                  ? a[5].substr(1)
                    ? parseInt(a[5].substr(1), 10)
                    : null
                  : null;
                b.path = a[6] ? a[6] : null;
                b.query = a[7] ? a[7].substr(1) : null;
                b.fragment = a[8] ? a[8].substr(1) : null;
                b.isGenericURI = b.authority === null && !!b.scheme;
                return b;
              }
            },
            null
          );
          __d(
            "createObjectFrom",
            [],
            function (a, b, c, d, e, f) {
              e.exports = g;
              function g(a, b) {
                if (b === void 0) return g(a, !0);
                var c = {};
                if (Array.isArray(b))
                  for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
                else for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
                return c;
              }
            },
            null
          );
          __d(
            "URISchemes",
            ["createObjectFrom"],
            function (a, b, c, d, e, f) {
              f.isAllowed = a;
              var g = b("createObjectFrom")([
                "aidemos",
                "aistudio",
                "blob",
                "cmms",
                "fb",
                "fba",
                "fbatwork",
                "fb-ama",
                "fb-workchat",
                "fb-workchat-secure",
                "fb-messenger",
                "fb-messenger-public",
                "fb-messenger-group-thread",
                "fb-page-messages",
                "fb-pma",
                "fbcf",
                "fbconnect",
                "fbinternal",
                "fbmobilehome",
                "fbrpc",
                "file",
                "ftp",
                "gtalk",
                "http",
                "https",
                "mailto",
                "wss",
                "ms-app",
                "intent",
                "itms",
                "itms-apps",
                "lasso",
                "market",
                "svn+ssh",
                "fbstaging",
                "tel",
                "sms",
                "pebblejs",
                "sftp",
                "whatsapp",
                "moments",
                "flash",
                "fblite",
                "chrome-extension",
                "webcal",
                "fb124024574287414",
                "fb124024574287414rc",
                "fb124024574287414master",
                "fb1576585912599779",
                "fb929757330408142",
                "designpack",
                "fbpixelcloud",
                "fbapi20130214",
                "fb1196383223757595",
                "oculus",
                "oculus.store",
                "oculus.feed",
                "oculusstore",
                "odh",
                "skype",
                "callto",
                "workchat",
                "fb236786383180508",
                "fb1775440806014337",
                "data",
                "fb-mk",
                "munki",
                "kirigami",
                "origami-file",
                "fb-nimble-vrsrecorder",
                "fb-nimble-monohandtrackingvis",
                "together",
                "togetherbl",
                "venues",
                "whatsapp-consumer",
                "whatsapp-smb",
                "fb-ide-opener",
                "spark-studio",
              ]);
              function a(a) {
                return a == null || a === ""
                  ? !0
                  : Object.prototype.hasOwnProperty.call(g, a.toLowerCase());
              }
            },
            null
          );
          __d(
            "setHostSubdomain",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a, b) {
                a = a.split(".");
                a.length < 3 ? a.unshift(b) : (a[0] = b);
                return a.join(".");
              }
            },
            null
          );
          __d(
            "URIAbstractBase",
            [
              "invariant",
              "PHPStrictQuerySerializer",
              "URIRFC3986",
              "URISchemes",
              "setHostSubdomain",
            ],
            function (a, b, c, d, e, f, g) {
              var h,
                i,
                j = new RegExp(
                  "[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
                ),
                k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
                l = [];
              a = (function () {
                "use strict";
                a.parse = function (c, d, e, f) {
                  if (!d) return !0;
                  if (d instanceof a) {
                    c.setProtocol(d.getProtocol());
                    c.setDomain(d.getDomain());
                    c.setPort(d.getPort());
                    c.setPath(d.getPath());
                    c.setQueryData(
                      f.deserialize(f.serialize(d.getQueryData()))
                    );
                    c.setFragment(d.getFragment());
                    c.setIsGeneric(d.getIsGeneric());
                    c.setForceFragmentSeparator(d.getForceFragmentSeparator());
                    c.setOriginalRawQuery(d.getOriginalRawQuery());
                    c.setQueryParamModified(!1);
                    return !0;
                  }
                  d = d.toString().trim();
                  var g = (h || (h = b("URIRFC3986"))).parse(d) || {
                    fragment: null,
                    scheme: null,
                    query: null,
                  };
                  if (!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme))
                    return !1;
                  c.setProtocol(g.scheme || "");
                  if (!e && j.test(g.host || "")) return !1;
                  c.setDomain(g.host || "");
                  c.setPort(g.port || "");
                  c.setPath(g.path || "");
                  if (e) c.setQueryData(f.deserialize(g.query || "") || {});
                  else
                    try {
                      c.setQueryData(f.deserialize(g.query || "") || {});
                    } catch (a) {
                      return !1;
                    }
                  c.setFragment(g.fragment || "");
                  g.fragment === "" && c.setForceFragmentSeparator(!0);
                  c.setIsGeneric(g.isGenericURI || !1);
                  c.setOriginalRawQuery(g.query);
                  c.setQueryParamModified(!1);
                  if (g.userinfo !== null) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (userinfo is not allowed in a URI): " +
                          d
                      );
                    return !1;
                  }
                  if (!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (no domain but multiple back-slashes): " +
                          d
                      );
                    return !1;
                  }
                  if (!c.getProtocol() && k.test(d)) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (unsafe protocol-relative URLs): " +
                          d +
                          "'"
                      );
                    return !1;
                  }
                  if (
                    c.getDomain() &&
                    c.getPath() &&
                    !ES(c.getPath(), "startsWith", !0, "/")
                  ) {
                    if (e)
                      throw new Error(
                        "URI.parse: invalid URI (domain and path where path lacks leading slash): " +
                          d
                      );
                    return !1;
                  }
                  return !0;
                };
                a.tryParse = function (b, c) {
                  var d = new a(null, c);
                  return a.parse(d, b, !1, c) ? d : null;
                };
                a.isValid = function (b, c) {
                  return !!a.tryParse(b, c);
                };
                function a(b, c) {
                  c || g(0, 2966),
                    (this.$9 = c),
                    (this.$7 = ""),
                    (this.$1 = ""),
                    (this.$6 = ""),
                    (this.$5 = ""),
                    (this.$3 = ""),
                    (this.$4 = !1),
                    (this.$8 = {}),
                    (this.$2 = !1),
                    a.parse(this, b, !0, c),
                    (this.$11 = !1);
                }
                var c = a.prototype;
                c.setProtocol = function (a) {
                  (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 11793, a);
                  this.$7 = a;
                  return this;
                };
                c.getProtocol = function () {
                  return (this.$7 || "").toLowerCase();
                };
                c.setSecure = function (a) {
                  return this.setProtocol(a ? "https" : "http");
                };
                c.isSecure = function () {
                  return this.getProtocol() === "https";
                };
                c.setDomain = function (a) {
                  if (j.test(a))
                    throw new Error(
                      "URI.setDomain: unsafe domain specified: " +
                        a +
                        " for url " +
                        this.toString()
                    );
                  this.$1 = a;
                  return this;
                };
                c.getDomain = function () {
                  return this.$1;
                };
                c.setPort = function (a) {
                  this.$6 = a;
                  return this;
                };
                c.getPort = function () {
                  return this.$6;
                };
                c.setPath = function (a) {
                  this.$5 = a;
                  return this;
                };
                c.getPath = function () {
                  return this.$5;
                };
                c.addQueryData = function (a, b) {
                  Object.prototype.toString.call(a) === "[object Object]"
                    ? ES("Object", "assign", !1, this.$8, a)
                    : (this.$8[a] = b);
                  this.$11 = !0;
                  return this;
                };
                c.setQueryData = function (a) {
                  this.$8 = a;
                  this.$11 = !0;
                  return this;
                };
                c.getQueryData = function () {
                  return this.$8;
                };
                c.setQueryString = function (a) {
                  return this.setQueryData(this.$9.deserialize(a));
                };
                c.getQueryString = function (a, b, c) {
                  a === void 0 && (a = !1);
                  b === void 0 &&
                    (b = function () {
                      return !1;
                    });
                  c === void 0 && (c = null);
                  return this.$12(!1, a, b, c);
                };
                c.$12 = function (a, b, c, d) {
                  a === void 0 && (a = !1);
                  b === void 0 && (b = !1);
                  c === void 0 &&
                    (c = function () {
                      return !1;
                    });
                  d === void 0 && (d = null);
                  if (!this.$11 && (b || c(this.getDomain()))) {
                    return (b = this.$10) != null ? b : "";
                  }
                  return (a && d ? d : this.$9).serialize(this.getQueryData());
                };
                c.removeQueryData = function (a) {
                  Array.isArray(a) || (a = [a]);
                  for (var b = 0, c = a.length; b < c; ++b)
                    delete this.$8[a[b]];
                  this.$11 = !0;
                  return this;
                };
                c.setFragment = function (a) {
                  this.$3 = a;
                  this.setForceFragmentSeparator(!1);
                  return this;
                };
                c.getFragment = function () {
                  return this.$3;
                };
                c.setForceFragmentSeparator = function (a) {
                  this.$2 = a;
                  return this;
                };
                c.getForceFragmentSeparator = function () {
                  return this.$2;
                };
                c.setIsGeneric = function (a) {
                  this.$4 = a;
                  return this;
                };
                c.getIsGeneric = function () {
                  return this.$4;
                };
                c.getOriginalRawQuery = function () {
                  return this.$10;
                };
                c.setOriginalRawQuery = function (a) {
                  this.$10 = a;
                  return this;
                };
                c.setQueryParamModified = function (a) {
                  this.$11 = a;
                  return this;
                };
                c.isEmpty = function () {
                  return !(
                    this.getPath() ||
                    this.getProtocol() ||
                    this.getDomain() ||
                    this.getPort() ||
                    Object.keys(this.getQueryData()).length > 0 ||
                    this.getFragment()
                  );
                };
                c.toString = function (a, b) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  b === void 0 && (b = null);
                  return this.$13(!1, !1, a, b);
                };
                c.toStringRawQuery = function (a, b) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  b === void 0 && (b = null);
                  return this.$13(!0, !1, a, b);
                };
                c.toStringPreserveQuery = function (a, b) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  b === void 0 && (b = null);
                  return this.$13(!1, !0, a, b);
                };
                c.toStringStrictQueryEncoding = function (a) {
                  a === void 0 &&
                    (a = function () {
                      return !1;
                    });
                  return this.$13(!0, !1, a, b("PHPStrictQuerySerializer"));
                };
                c.$13 = function (a, b, c, d) {
                  a === void 0 && (a = !1);
                  b === void 0 && (b = !1);
                  c === void 0 &&
                    (c = function () {
                      return !1;
                    });
                  d === void 0 && (d = null);
                  var e = this;
                  for (var f = 0; f < l.length; f++) e = l[f](e);
                  return e.$14(a, b, c, d);
                };
                c.$14 = function (a, b, c, d) {
                  a === void 0 && (a = !1);
                  b === void 0 && (b = !1);
                  c === void 0 &&
                    (c = function () {
                      return !1;
                    });
                  d === void 0 && (d = null);
                  var e = "",
                    f = this.getProtocol();
                  f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
                  f = this.getDomain();
                  f && (e += f);
                  f = this.getPort();
                  f && (e += ":" + f);
                  f = this.getPath();
                  f ? (e += f) : e && (e += "/");
                  f = this.$12(a, b, c, d);
                  f && (e += "?" + f);
                  a = this.getFragment();
                  a
                    ? (e += "#" + a)
                    : this.getForceFragmentSeparator() && (e += "#");
                  return e;
                };
                a.registerFilter = function (a) {
                  l.push(a);
                };
                c.getOrigin = function () {
                  var a = this.getPort();
                  return (
                    this.getProtocol() +
                    "://" +
                    this.getDomain() +
                    (a ? ":" + a : "")
                  );
                };
                c.getQualifiedURIBase = function () {
                  return new a(this, this.$9).qualify();
                };
                c.qualify = function () {
                  if (!this.getDomain()) {
                    var b = new a(window.location.href, this.$9);
                    this.setProtocol(b.getProtocol())
                      .setDomain(b.getDomain())
                      .setPort(b.getPort());
                  }
                  return this;
                };
                c.setSubdomain = function (a) {
                  var c = this.qualify();
                  c = c.getDomain();
                  return this.setDomain(b("setHostSubdomain")(c, a));
                };
                c.getSubdomain = function () {
                  if (!this.getDomain()) return "";
                  var a = this.getDomain().split(".");
                  if (a.length <= 2) return "";
                  else return a[0];
                };
                c.isSubdomainOfDomain = function (b) {
                  var c = this.getDomain();
                  return a.isDomainSubdomainOfDomain(c, b, this.$9);
                };
                a.isDomainSubdomainOfDomain = function (b, c, d) {
                  if (c === "" || b === "") return !1;
                  if (ES(b, "endsWith", !0, c)) {
                    var e = b.length,
                      f = c.length,
                      g = e - f - 1;
                    if (e === f || b[g] === ".") {
                      e = new a(null, d);
                      e.setDomain(c);
                      return a.isValid(e, d);
                    }
                  }
                  return !1;
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.URI",
            ["QueryString", "URIAbstractBase"],
            function (a, b, c, d, e, f) {
              var g = /\.facebook\.com$/,
                h = {
                  serialize: function (a) {
                    return a ? b("QueryString").encode(a) : "";
                  },
                  deserialize: function (a) {
                    return a ? b("QueryString").decode(a) : {};
                  },
                };
              a = (function (a) {
                babelHelpers.inheritsLoose(c, a);
                function c(b) {
                  return a.call(this, b, h) || this;
                }
                var d = c.prototype;
                d.isFacebookURI = function () {
                  return g.test(this.getDomain());
                };
                d.valueOf = function () {
                  return this.toString();
                };
                c.isValidURI = function (a) {
                  return b("URIAbstractBase").isValid(a, h);
                };
                return c;
              })(b("URIAbstractBase"));
              e.exports = a;
            },
            null
          );
          __d(
            "ApiClientUtils",
            [
              "ArgumentError",
              "Assert",
              "Log",
              "flattenObject",
              "sdk.URI",
              "sprintf",
            ],
            function (a, b, c, d, e, f) {
              f.parseCallDataFromArgs = a;
              var g = { get: !0, post: !0, delete: !0, put: !0 };
              function a(a) {
                var c = a.shift();
                b("Assert").isString(c, "Invalid path");
                !/^https?/.test(c) && c.charAt(0) !== "/" && (c = "/" + c);
                var d = {};
                try {
                  c = new (b("sdk.URI"))(c);
                } catch (a) {
                  throw new (b("ArgumentError"))(a.message, a);
                }
                a.forEach(function (a) {
                  return (d[typeof a] = a);
                });
                a = (d.string || "get").toLowerCase();
                b("Assert").isTrue(
                  Object.prototype.hasOwnProperty.call(g, a),
                  b("sprintf")("Invalid method passed to ApiClient: %s", a)
                );
                var e = d["function"];
                e || b("Log").warn("No callback passed to the ApiClient");
                d.object && c.addQueryData(b("flattenObject")(d.object));
                var f = c.getQueryData();
                f.method = a;
                return { uri: c, callback: e, params: f };
              }
            },
            null
          );
          __d(
            "errorCode",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              function a(a) {
                throw new Error(
                  'errorCode("' + a + '"): This should not happen. Oh noes!'
                );
              }
            },
            null
          );
          __d(
            "nullthrows",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a, b) {
                b === void 0 && (b = "Got unexpected null or undefined");
                if (a != null) return a;
                a = new Error(b);
                a.framesToPop = 1;
                throw a;
              }
            },
            null
          );
          __d(
            "sdk.safelyParseResponse",
            ["errorCode", "nullthrows"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              c = function (a, b, c, d) {
                return h;
              };
              function a(a, d, e) {
                d === void 0 && (d = null);
                e === void 0 && (e = null);
                try {
                  return a === null
                    ? h
                    : ES("JSON", "parse", !1, b("nullthrows")(a));
                } catch (b) {
                  return c(b, a, d, e);
                }
              }
              var h = {
                error: {
                  code: 1,
                  error_subcode: 1357046,
                  message: "Received Invalid JSON reply.",
                  type: "http",
                },
              };
              a.ERROR = h;
              a.setErrorHandler = function (a) {
                c = a;
              };
              d = a;
              e.exports = d;
            },
            null
          );
          __d(
            "whitelistObjectKeys",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a, b) {
                var c = {};
                b = Array.isArray(b) ? b : Object.keys(b);
                for (var d = 0; d < b.length; d++)
                  typeof a[b[d]] !== "undefined" && (c[b[d]] = a[b[d]]);
                return c;
              }
            },
            null
          );
          __d(
            "ApiBatcher",
            [
              "invariant",
              "ApiClientUtils",
              "QueryString",
              "sdk.safelyParseResponse",
              "whitelistObjectKeys",
            ],
            function (a, b, c, d, e, f, g) {
              "use strict";
              var h = 50,
                i = 105440539523;
              a = (function () {
                function a(a, b) {
                  (this.$1 = []),
                    (this.$2 = []),
                    (this.$4 = null),
                    (this.executeRequest = a),
                    (this.$3 = b);
                }
                var c = a.prototype;
                c.scheduleBatchCall = function () {
                  var b = this;
                  for (
                    var c = arguments.length, d = new Array(c), e = 0;
                    e < c;
                    e++
                  )
                    d[e] = arguments[e];
                  var f = a.prepareBatchParams(d),
                    g = f.body,
                    i = f.callback,
                    j = f.method,
                    k = f.relative_url,
                    l = { method: j, relative_url: k };
                  g && (l.body = g);
                  this.$1.push(l);
                  this.$2.push(i);
                  this.$1.length == h
                    ? (this.$4 && clearTimeout(this.$4), this.$5())
                    : this.$4 ||
                      (this.$4 = setTimeout(function () {
                        b.$5();
                      }, 0));
                };
                a.prepareBatchParams = function (a, c) {
                  c === void 0 && (c = []);
                  a = b("ApiClientUtils").parseCallDataFromArgs(a);
                  var d = a.uri,
                    e = a.callback;
                  a = a.params.method;
                  var f,
                    g = d.removeQueryData("method").toString();
                  if (a.toLowerCase() == "post") {
                    var h = d.getQueryData();
                    f = b("QueryString").encode(h);
                    h = b("whitelistObjectKeys")(h, c);
                    g = d.setQueryData(h).toString();
                  }
                  return { body: f, callback: e, method: a, relative_url: g };
                };
                c.$5 = function () {
                  this.$1.length > 0 || g(0, 4698);
                  this.$1.length === this.$2.length || g(0, 4699);
                  var a = this.$1,
                    c = this.$2;
                  this.$1 = [];
                  this.$2 = [];
                  this.$4 = null;
                  if (a.length === 1) {
                    var d = a[0],
                      e = c[0],
                      f = d.body ? b("QueryString").decode(d.body) : null;
                    this.executeRequest(d.relative_url, d.method, f, e);
                    return;
                  }
                  this.executeRequest(
                    "/",
                    "POST",
                    {
                      batch: a,
                      include_headers: !1,
                      batch_app_id: this.$3 || i,
                    },
                    function (a) {
                      Array.isArray(a)
                        ? a.forEach(function (a, d) {
                            c[d](b("sdk.safelyParseResponse")(a && a.body));
                          })
                        : c.forEach(function (a) {
                            return a({
                              error: { message: "Fatal: batch call failed." },
                            });
                          });
                    }
                  );
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "RequestConstants",
            ["errorCode"],
            function (a, b, c, d, e, f, g) {
              a = {
                code: 1,
                error_subcode: 1357045,
                message: "unknown error (empty response)",
                type: "http",
                status: 0,
              };
              f.PARSE_ERROR_TEMPLATE = a;
            },
            null
          );
          __d(
            "sdk.Cookie",
            ["QueryString", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              f.setRaw = h;
              f.getRaw = i;
              f.setDomain = a;
              f.getDomain = c;
              f.loadMeta = d;
              f.loadSignedRequest = e;
              f.setSignedRequestCookie = j;
              f.clearSignedRequestCookie = k;
              var g = null;
              function h(a, c, d, e) {
                a = a + b("sdk.Runtime").getClientID();
                e = e ? ";Secure" : "";
                var f = g !== null && g !== ".";
                f &&
                  ((document.cookie =
                    a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT" + e),
                  (document.cookie =
                    a +
                    "=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" +
                    location.hostname +
                    e));
                var h = new Date(d).toUTCString();
                document.cookie =
                  a +
                  "=" +
                  c +
                  (c && d === 0 ? "" : "; expires=" + h) +
                  "; path=/" +
                  (f ? "; domain=" + ((a = g) != null ? a : "") : "") +
                  e;
              }
              function i(a) {
                a = a + b("sdk.Runtime").getClientID();
                a = new RegExp("\\b" + a + "=([^;]*)\\b");
                a = document.cookie.match(a);
                if (a === null || a === void 0) return null;
                else return a[1];
              }
              function a(a) {
                g = a;
                a = b("QueryString").encode({
                  base_domain: g !== null && g !== "." ? g : "",
                });
                var c = new Date();
                c.setFullYear(c.getFullYear() + 1);
                h("fbm_", a, c.getTime(), !0);
              }
              function c() {
                return g;
              }
              function d() {
                var a = i("fbm_");
                if (a !== null && a !== void 0 && g === null) {
                  a = b("QueryString").decode(a);
                  g = a.base_domain;
                  return { base_domain: g };
                }
                return null;
              }
              function e() {
                return i("fbsr_");
              }
              function j(a, b) {
                if (a === "")
                  throw new Error(
                    "Value passed to Cookie.setSignedRequestCookie was empty."
                  );
                h("fbsr_", a, b, !0);
              }
              function k() {
                this.loadMeta(), h("fbsr_", "", 0, !0);
              }
            },
            null
          );
          __d(
            "CORSRequest",
            [
              "Log",
              "QueryString",
              "RequestConstants",
              "sdk.Cookie",
              "sdk.safelyParseResponse",
              "wrapFunction",
            ],
            function (a, b, c, d, e, f) {
              function g(a, c) {
                if (!self.XMLHttpRequest) return null;
                var d = new XMLHttpRequest(),
                  e = function () {};
                if ("withCredentials" in d)
                  d.open(a, c, !0),
                    d.setRequestHeader(
                      "Content-type",
                      "application/x-www-form-urlencoded"
                    );
                else if (self.XDomainRequest) {
                  d = new XDomainRequest();
                  try {
                    d.open(a, c), (d.onprogress = d.ontimeout = e);
                  } catch (a) {
                    return null;
                  }
                } else return null;
                var f = {
                    send: function (a) {
                      d.send(a);
                    },
                  },
                  g = b("wrapFunction")(
                    function () {
                      (g = e), "onload" in f && f.onload(d);
                    },
                    "entry",
                    "XMLHttpRequest:load"
                  ),
                  h = b("wrapFunction")(
                    function () {
                      (h = e), "onerror" in f && f.onerror(d);
                    },
                    "entry",
                    "XMLHttpRequest:error"
                  );
                d.onload = function () {
                  g();
                };
                d.onerror = function () {
                  h();
                };
                d.onreadystatechange = function () {
                  d.readyState == 4 && (d.status == 200 ? g() : h());
                };
                return f;
              }
              function a(a, c, d, e) {
                if (
                  ES(a, "includes", !0, "/../") ||
                  ES(a, "includes", !0, "/..\\") ||
                  ES(a, "includes", !0, "\\../") ||
                  ES(a, "includes", !0, "\\..\\")
                ) {
                  b("Log").error(
                    "CORSRequest.execute(): path traversal is not allowed."
                  );
                  return !1;
                }
                try {
                  if (self.document) {
                    var f = b("sdk.Cookie").getRaw("cppo");
                    f &&
                      (a = b("QueryString").appendToUrl(
                        a,
                        b("QueryString").encode({ __cppo: f })
                      ));
                  }
                } catch (a) {}
                d.suppress_http_code = 1;
                f = b("QueryString").encode(d);
                c != "post" &&
                  ((a = b("QueryString").appendToUrl(a, f)), (f = ""));
                d = g(c, a);
                if (!d) return !1;
                d.onload = function (c) {
                  e(b("sdk.safelyParseResponse")(c.responseText, a, c.status));
                };
                d.onerror = function (c) {
                  c.responseText
                    ? e(
                        b("sdk.safelyParseResponse")(
                          c.responseText,
                          a,
                          c.status
                        )
                      )
                    : e({
                        error: babelHelpers["extends"](
                          {},
                          b("RequestConstants").PARSE_ERROR_TEMPLATE,
                          { status: c.status }
                        ),
                      });
                };
                d.send(f);
                return !0;
              }
              c = { execute: a };
              d = c;
              e.exports = d;
            },
            null
          );
          __d(
            "ApiClient",
            [
              "ApiBatcher",
              "ApiClientUtils",
              "Assert",
              "CORSRequest",
              "Log",
              "ObservableMixin",
              "QueryString",
              "UrlMap",
              "flattenObject",
            ],
            function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j = [],
                k = 2e3,
                l = {
                  fql_query: !0,
                  fql_multiquery: !0,
                  friends_get: !0,
                  notifications_get: !0,
                  stream_get: !0,
                  users_getinfo: !0,
                },
                m = ["cors"],
                n = 0,
                o = [],
                p = 0,
                q = 0,
                r,
                s = b("Log");
              function t(a, c, d, e) {
                var f = p !== 0 && n >= p;
                if (f) {
                  o.push(function () {
                    return t(a, c, d, e);
                  });
                  w.inform("request.queued", a, c, d);
                  return;
                }
                n++;
                var h = babelHelpers["extends"]({}, i, d);
                h.pretty = h.pretty || 0;
                h = b("flattenObject")(h);
                f = { cors: b("CORSRequest") };
                var k = {},
                  l = h.access_token || g;
                l && (k.access_token = l);
                c !== "get" &&
                  j.forEach(function (a) {
                    k[a] = h[a];
                  });
                l = Object.keys(k);
                l.length > 0 &&
                  ((a = b("QueryString").appendToUrl(a, k)),
                  delete h.access_token);
                l = m;
                for (var q = 0; q < l.length; q++) {
                  var r = f[l[q]],
                    s = ES("Object", "assign", !1, {}, h);
                  if (r.execute(a, c, s, e)) return;
                }
                e({
                  error: {
                    type: "no-transport",
                    message: "Could not find a usable transport for request",
                  },
                });
              }
              function u(a, b, c, d, e, f, g, h) {
                if (d.transport && d.transport === "chunked" && h === !1) {
                  a(g, !1);
                  return;
                }
                g &&
                  g.error &&
                  w.inform("request.error", b, c, d, g, Date.now() - e, f);
                w.inform("request.complete", b, c, d, g, Date.now() - e, f);
                n--;
                a && a(g);
                h = o.length > 0 && n < p;
                if (h) {
                  b = o.shift();
                  b();
                }
              }
              function v() {
                for (
                  var a = arguments.length, c = new Array(a), d = 0;
                  d < a;
                  d++
                )
                  c[d] = arguments[d];
                var e = b("ApiClientUtils").parseCallDataFromArgs(c),
                  f = e.uri,
                  g = e.callback,
                  h = e.params,
                  i = h.method;
                x(f, i) && (i = "post");
                var j =
                    f.getProtocol() && f.getDomain()
                      ? f.setQueryData({}).toString()
                      : b("UrlMap").resolve("graph_domain") + f.getPath(),
                  k = q++;
                "_fb_domain" in h && w.setKeptQueryParams(["_fb_domain"]);
                w.inform("request.prepare", j, h, k);
                t(
                  j,
                  i == "get" ? "get" : "post",
                  h,
                  ES(u, "bind", !0, null, g, f.getPath(), i, h, Date.now(), k)
                );
              }
              function a() {
                var a;
                r || (r = new (b("ApiBatcher"))(v, h));
                (a = r).scheduleBatchCall.apply(a, arguments);
              }
              function c(a, c) {
                b("Assert").isObject(a);
                b("Assert").isString(a.method, "method missing");
                c || s.warn("No callback passed to the ApiClient");
                var d = a.method.toLowerCase().replace(".", "_");
                a.format = "json-strings";
                a.api_key = h;
                d = d in l ? "api_read" : "api";
                d = b("UrlMap").resolve(d) + "/restserver.php";
                var e = q++;
                c = ES(
                  u,
                  "bind",
                  !0,
                  null,
                  c,
                  "/restserver.php",
                  "get",
                  a,
                  Date.now(),
                  e
                );
                t(d, "get", a, c);
              }
              function d(a) {
                return b("ApiBatcher").prepareBatchParams(a, j);
              }
              var w = ES("Object", "assign", !1, new (b("ObservableMixin"))(), {
                setAccessToken: function (a) {
                  g &&
                    a &&
                    g !== a &&
                    s.error(
                      "You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings."
                    ),
                    (g = a);
                },
                setAccessTokenForClientID: function (a, b) {
                  g && h && h !== b
                    ? s.error(
                        "Not overriding access token since it was not initialized by your application."
                      )
                    : (g = a);
                },
                getClientID: function () {
                  return h;
                },
                getAccessToken: function () {
                  return g;
                },
                setClientID: function (a) {
                  h &&
                    h !== a &&
                    s.warn(
                      "Warning: Two different applications have attempted to set the client ID. Overriding the previously set client ID."
                    ),
                    (h = a);
                },
                setDefaultParams: function (a) {
                  i = a;
                },
                getDefaultParams: function () {
                  return i;
                },
                setDefaultTransports: function (a) {
                  m = a;
                },
                setLogger: function (a) {
                  s = a;
                },
                setMaxConcurrentRequests: function (a) {
                  p = a;
                },
                setKeptQueryParams: function (a) {
                  j = a;
                },
                getCurrentlyExecutingRequestCount: function () {
                  return n;
                },
                getQueuedRequestCount: function () {
                  return o.length;
                },
                rest: c,
                graph: v,
                scheduleBatchCall: a,
                prepareBatchParams: d,
              });
              function x(a, b) {
                return a.toString().length > k && b === "get";
              }
              f = w;
              e.exports = f;
            },
            null
          );
          __d(
            "performance",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              b = a.performance || a.msPerformance || a.webkitPerformance || {};
              c = b;
              e.exports = c;
            },
            null
          );
          __d(
            "performanceNow",
            ["performance"],
            function (a, b, c, d, e, f) {
              var g;
              if ((g || (g = b("performance"))).now)
                c = function () {
                  return (g || (g = b("performance"))).now();
                };
              else {
                d = a._cstart;
                f = Date.now();
                var h = typeof d === "number" && d < f ? d : f,
                  i = 0;
                c = function () {
                  var a = Date.now(),
                    b = a - h;
                  b < i && ((h -= i - b), (b = a - h));
                  i = b;
                  return b;
                };
              }
              e.exports = c;
            },
            null
          );
          __d(
            "removeFromArray",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a, b) {
                b = a.indexOf(b);
                b !== -1 && a.splice(b, 1);
              }
            },
            null
          );
          __d(
            "fb-error",
            ["performanceNow", "removeFromArray"],
            function (a, b, c, d, e, f) {
              "use strict";
              var g,
                h = {
                  PREVIOUS_FILE: 1,
                  PREVIOUS_FRAME: 2,
                  PREVIOUS_DIR: 3,
                  FORCED_KEY: 4,
                };
              function i(b) {
                var a = new Error(b);
                if (a.stack === void 0)
                  try {
                    throw a;
                  } catch (a) {}
                a.messageFormat = b;
                for (
                  var c = arguments.length,
                    d = new Array(c > 1 ? c - 1 : 0),
                    e = 1;
                  e < c;
                  e++
                )
                  d[e - 1] = arguments[e];
                a.messageParams = d.map(function (a) {
                  return String(a);
                });
                a.taalOpcodes = [h.PREVIOUS_FRAME];
                return a;
              }
              var j = !1,
                k = {
                  errorListener: function (b) {
                    var c = a.console,
                      d = c[b.type] ? b.type : "error";
                    if (b.type === "fatal" || (d === "error" && !j)) {
                      d = b.message;
                      c.error(
                        "ErrorUtils caught an error:\n\n" +
                          d +
                          "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs."
                      );
                      j = !0;
                    }
                  },
                },
                l = { access_token: null },
                m = 6,
                n = 6e4,
                o = 10 * n,
                p = new Map(),
                q = 0;
              function r() {
                var a = (g || (g = b("performanceNow")))();
                if (a > q + n) {
                  var c = a - o;
                  for (
                    var d = p,
                      e = Array.isArray(d),
                      f = 0,
                      d = e
                        ? d
                        : d[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var h;
                    if (e) {
                      if (f >= d.length) break;
                      h = d[f++];
                    } else {
                      f = d.next();
                      if (f.done) break;
                      h = f.value;
                    }
                    h = h;
                    var i = h[0];
                    h = h[1];
                    h.lastAccessed < c && p["delete"](i);
                  }
                  q = a;
                }
              }
              function s(a) {
                r();
                var c = (g || (g = b("performanceNow")))(),
                  d = p.get(a);
                if (d == null) {
                  p.set(a, { dropped: 0, logged: [c], lastAccessed: c });
                  return 1;
                }
                a = d.dropped;
                var e = d.logged;
                d.lastAccessed = c;
                while (e[0] < c - n) e.shift();
                if (e.length < m) {
                  d.dropped = 0;
                  e.push(c);
                  return a + 1;
                } else {
                  d.dropped++;
                  return null;
                }
              }
              var t = {
                shouldLog: function (a) {
                  return s(a.hash);
                },
              };
              function u(a) {
                var b = null;
                a == null || typeof a !== "object"
                  ? (b = i("Non-object thrown: %s", String(a)))
                  : typeof a.message !== "string"
                  ? (b = i(
                      "Non-error thrown: %s, keys: %s",
                      String(a),
                      ES("JSON", "stringify", !1, Object.keys(a).sort())
                    ))
                  : Object.isExtensible &&
                    !Object.isExtensible(a) &&
                    (b = i("Non-extensible thrown: %s", String(a.message)));
                if (b != null) {
                  b.taalOpcodes = b.taalOpcodes || [];
                  b.taalOpcodes.push(h.PREVIOUS_FRAME);
                  return b;
                }
                return a;
              }
              var v =
                  typeof window === "undefined"
                    ? "<self.onerror>"
                    : "<window.onerror>",
                w;
              function aa(a) {
                var b = a.error != null ? u(a.error) : i(a.message || "");
                b.fileName == null &&
                  a.filename != null &&
                  (b.fileName = a.filename);
                b.line == null && a.lineno != null && (b.line = a.lineno);
                b.column == null && a.colno != null && (b.column = a.colno);
                b.guardList = [v];
                b.loggingSource = "ONERROR";
                (a = w) === null || a === void 0 ? void 0 : a.reportError(b);
              }
              var x = {
                  setup: function (b) {
                    if (typeof a.addEventListener !== "function") return;
                    if (w != null) return;
                    w = b;
                    a.addEventListener("error", aa);
                  },
                },
                y = [],
                z = {
                  pushGuard: function (a) {
                    y.unshift(a);
                  },
                  popGuard: function () {
                    y.shift();
                  },
                  inGuard: function () {
                    return y.length !== 0;
                  },
                  cloneGuardList: function () {
                    return y.map(function (a) {
                      return a.name;
                    });
                  },
                  findDeferredSource: function () {
                    for (var a = 0; a < y.length; a++) {
                      var b = y[a];
                      if (b.deferredSource != null) return b.deferredSource;
                    }
                  },
                };
              function ba(a) {
                if (a.type != null) return a.type;
                if (
                  a.loggingSource == "GUARDED" ||
                  a.loggingSource == "ERROR_BOUNDARY"
                )
                  return "fatal";
                a.loggingSource == "ONERROR" &&
                  a.message.indexOf("ResizeObserver loop") >= 0 &&
                  (a.type = "warn");
                a.stack != null &&
                  a.stack.indexOf("chrome-extension://") >= 0 &&
                  (a.type = "warn");
                return "error";
              }
              var A = [],
                B = (function () {
                  function a() {
                    this.metadata = [].concat(A);
                  }
                  var b = a.prototype;
                  b.addEntries = function () {
                    var a;
                    (a = this.metadata).push.apply(a, arguments);
                    return this;
                  };
                  b.addEntry = function (a, b, c) {
                    this.metadata.push([a, b, c]);
                    return this;
                  };
                  b.isEmpty = function () {
                    return this.metadata.length === 0;
                  };
                  b.clearEntries = function () {
                    this.metadata = [];
                  };
                  b.format = function () {
                    var a = [];
                    this.metadata.forEach(function (b) {
                      if (b && b.length) {
                        b = b
                          .map(function (a) {
                            return a != null
                              ? String(a).replace(/:/g, "_")
                              : "";
                          })
                          .join(":");
                        a.push(b);
                      }
                    });
                    return a;
                  };
                  b.getAll = function () {
                    return this.metadata;
                  };
                  a.addGlobalMetadata = function (a, b, c) {
                    A.push([a, b, c]);
                  };
                  a.getGlobalMetadata = function () {
                    return A;
                  };
                  a.unsetGlobalMetadata = function (a, b) {
                    A = A.filter(function (c) {
                      return !(Array.isArray(c) && c[0] === a && c[1] === b);
                    });
                  };
                  return a;
                })(),
                C = { debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
              function c(a, b) {
                if (Object.isFrozen(a)) return;
                b.type &&
                  (!a.type || C[a.type] > C[b.type]) &&
                  (a.type = b.type);
                var c = b.metadata;
                if (c != null) {
                  var d;
                  d = (d = a.metadata) !== null && d !== void 0 ? d : new B();
                  c != null && d.addEntries.apply(d, c.getAll());
                  a.metadata = d;
                }
                b.project != null && (a.project = b.project);
                b.errorName != null && (a.errorName = b.errorName);
                b.componentStack != null &&
                  (a.componentStack = b.componentStack);
                b.deferredSource != null &&
                  (a.deferredSource = b.deferredSource);
                b.blameModule != null && (a.blameModule = b.blameModule);
                b.loggingSource != null && (a.loggingSource = b.loggingSource);
                d =
                  (c = a.messageFormat) !== null && c !== void 0
                    ? c
                    : a.message;
                c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
                if (d !== b.messageFormat && b.messageFormat != null) {
                  var e;
                  d += " [Caught in: " + b.messageFormat + "]";
                  c.push.apply(
                    c,
                    (e = b.messageParams) !== null && e !== void 0 ? e : []
                  );
                }
                a.messageFormat = d;
                a.messageParams = c;
                e = b.forcedKey;
                d = a.forcedKey;
                c =
                  e != null && d != null
                    ? e + "_" + d
                    : e !== null && e !== void 0
                    ? e
                    : d;
                a.forcedKey = c;
              }
              function d(a) {
                var b;
                return ca(
                  (b = a.messageFormat) !== null && b !== void 0
                    ? b
                    : a.message,
                  a.messageParams || []
                );
              }
              function ca(a, b) {
                var c = 0;
                a = a.replace(/%s/g, function () {
                  return c < b.length ? b[c++] : "NOPARAM";
                });
                c < b.length &&
                  (a += " PARAMS" + ES("JSON", "stringify", !1, b.slice(c)));
                return a;
              }
              function f(a) {
                return (a !== null && a !== void 0 ? a : []).map(function (a) {
                  return String(a);
                });
              }
              var D = {
                  aggregateError: c,
                  toReadableMessage: d,
                  toStringParams: f,
                },
                da = 5,
                E = [];
              function F(a) {
                E.push(a), E.length > da && E.shift();
              }
              function G(a) {
                var b = a.getAllResponseHeaders();
                if (b != null && b.indexOf("X-FB-Debug") >= 0) {
                  b = a.getResponseHeader("X-FB-Debug");
                  b && F(b);
                }
              }
              function ea() {
                return E;
              }
              var H = { add: F, addFromXHR: G, getAll: ea },
                fa = "abcdefghijklmnopqrstuvwxyz012345";
              function I() {
                var a = 0;
                for (
                  var b = arguments.length, c = new Array(b), d = 0;
                  d < b;
                  d++
                )
                  c[d] = arguments[d];
                for (var e = 0; e < c.length; e++) {
                  var f = c[e];
                  if (f != null) {
                    var g = f.length;
                    for (var h = 0; h < g; h++)
                      a = (a << 5) - a + f.charCodeAt(h);
                  }
                }
                var i = "";
                for (var j = 0; j < 6; j++)
                  (i = fa.charAt(a & 31) + i), (a >>= 5);
                return i;
              }
              var J = [
                  /\(([^\s\)\()]+):(\d+):(\d+)\)$/,
                  /@([^\s\)\()]+):(\d+):(\d+)$/,
                  /^([^\s\)\()]+):(\d+):(\d+)$/,
                  /^at ([^\s\)\()]+):(\d+):(\d+)$/,
                ],
                ga = /^\w+:\s.*?\n/g;
              Error.stackTraceLimit != null &&
                Error.stackTraceLimit < 80 &&
                (Error.stackTraceLimit = 80);
              function ha(a) {
                var b = a.name,
                  c = a.message;
                a = a.stack;
                if (a == null) return null;
                if (b != null && c != null && c !== "") {
                  var d = b + ": " + c + "\n";
                  if (ES(a, "startsWith", !0, d)) return a.substr(d.length);
                  if (a === b + ": " + c) return null;
                }
                if (b != null) {
                  d = b + "\n";
                  if (ES(a, "startsWith", !0, d)) return a.substr(d.length);
                }
                if (c != null && c !== "") {
                  b = ": " + c + "\n";
                  d = a.indexOf(b);
                  c = a.substring(0, d);
                  if (/^\w+$/.test(c)) return a.substring(d + b.length);
                }
                return a.replace(ga, "");
              }
              function K(a) {
                a = a.trim();
                var b;
                a;
                var c, d, e;
                if (ES(a, "includes", !0, "charset=utf-8;base64,"))
                  b = "<inlined-file>";
                else {
                  var f;
                  for (var g = 0; g < J.length; g++) {
                    var h = J[g];
                    f = a.match(h);
                    if (f != null) break;
                  }
                  f != null && f.length === 4
                    ? ((c = f[1]),
                      (d = parseInt(f[2], 10)),
                      (e = parseInt(f[3], 10)),
                      (b = a.substring(0, a.length - f[0].length)))
                    : (b = a);
                  b = b.replace(/^at /, "").trim();
                }
                h = { identifier: b, script: c, line: d, column: e };
                h.text = L(h);
                return h;
              }
              function ia(a) {
                return a == null || a === ""
                  ? []
                  : a.split(/\n\n/)[0].split("\n").map(K);
              }
              function ja(a) {
                a = ha(a);
                return ia(a);
              }
              function ka(a) {
                if (a == null || a === "") return null;
                a = a.split("\n");
                a.splice(0, 1);
                return a.map(function (a) {
                  return a.trim();
                });
              }
              function L(a) {
                var b = a.identifier,
                  c = a.script,
                  d = a.line;
                a = a.column;
                b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
                c != null &&
                  d != null &&
                  a != null &&
                  (b += " (" + c + ":" + d + ":" + a + ")");
                return b;
              }
              function M(c) {
                var d,
                  e,
                  f,
                  i,
                  j,
                  k,
                  l = ja(c);
                d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
                var m = c.framesToPop;
                if (m != null) {
                  m = Math.min(m, l.length);
                  while (m-- > 0) d.unshift(h.PREVIOUS_FRAME);
                }
                m =
                  (m = c.messageFormat) !== null && m !== void 0
                    ? m
                    : c.message;
                e = (
                  (e = c.messageParams) !== null && e !== void 0 ? e : []
                ).map(function (a) {
                  return String(a);
                });
                var n = ka(c.componentStack),
                  o = n == null ? null : n.map(K),
                  p = c.metadata ? c.metadata.format() : new B().format();
                p.length === 0 && (p = void 0);
                var q = l
                  .map(function (a) {
                    return a.text;
                  })
                  .join("\n");
                f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
                var r = ba(c),
                  s = c.loggingSource,
                  t = c.project;
                i = (i = c.lineNumber) !== null && i !== void 0 ? i : c.line;
                j =
                  (j = c.columnNumber) !== null && j !== void 0 ? j : c.column;
                k = (k = c.fileName) !== null && k !== void 0 ? k : c.sourceURL;
                var u = l.length > 0;
                u && i == null && (i = l[0].line);
                u && j == null && (j = l[0].column);
                u && k == null && (k = l[0].script);
                o = {
                  blameModule: c.blameModule,
                  column: j == null ? null : String(j),
                  clientTime: Math.floor(Date.now() / 1e3),
                  componentStackFrames: o,
                  deferredSource:
                    c.deferredSource != null ? M(c.deferredSource) : null,
                  extra: (u = c.extra) !== null && u !== void 0 ? u : {},
                  fbtrace_id: c.fbtrace_id,
                  guardList:
                    (j = c.guardList) !== null && j !== void 0 ? j : [],
                  hash: I(f, q, r, t, s),
                  isNormalizedError: !0,
                  line: i == null ? null : String(i),
                  loggingSource: s,
                  message: D.toReadableMessage(c),
                  messageFormat: m,
                  messageParams: e,
                  metadata: p,
                  name: f,
                  page_time: Math.floor((g || (g = b("performanceNow")))()),
                  project: t,
                  reactComponentStack: n,
                  script: k,
                  serverHash: c.serverHash,
                  stack: q,
                  stackFrames: l,
                  type: r,
                  xFBDebug: H.getAll(),
                };
                c.forcedKey != null && (o.forcedKey = c.forcedKey);
                d.length > 0 && (o.taalOpcodes = d);
                u = a.location;
                u && (o.windowLocationURL = u.href);
                for (var v in o) o[v] == null && delete o[v];
                return o;
              }
              function la(a) {
                return a != null &&
                  typeof a === "object" &&
                  a.isNormalizedError === !0
                  ? a
                  : null;
              }
              var N = {
                  formatStackFrame: L,
                  normalizeError: M,
                  ifNormalizedError: la,
                },
                ma = "<global.react>",
                O = [],
                P = [],
                Q = 50,
                R = !1,
                S = {
                  history: P,
                  addListener: function (a, b) {
                    b === void 0 && (b = !1),
                      O.push(a),
                      b ||
                        P.forEach(function (b) {
                          return a(
                            b,
                            (b = b.loggingSource) !== null && b !== void 0
                              ? b
                              : "DEPRECATED"
                          );
                        });
                  },
                  unshiftListener: function (a) {
                    O.unshift(a);
                  },
                  removeListener: function (a) {
                    b("removeFromArray")(O, a);
                  },
                  reportError: function (a) {
                    a = N.normalizeError(a);
                    S.reportNormalizedError(a);
                  },
                  reportNormalizedError: function (b) {
                    if (R) return !1;
                    var a = z.cloneGuardList();
                    b.componentStackFrames && a.unshift(ma);
                    a.length > 0 && (b.guardList = a);
                    if (b.deferredSource == null) {
                      a = z.findDeferredSource();
                      a != null && (b.deferredSource = N.normalizeError(a));
                    }
                    P.length > Q && P.splice(Q / 2, 1);
                    P.push(b);
                    R = !0;
                    for (var a = 0; a < O.length; a++)
                      try {
                        var c;
                        O[a](
                          b,
                          (c = b.loggingSource) !== null && c !== void 0
                            ? c
                            : "DEPRECATED"
                        );
                      } catch (a) {}
                    R = !1;
                    return !0;
                  },
                };
              S.addListener(k.errorListener);
              var na = "<anonymous guard>",
                T = !1,
                U = {
                  applyWithGuard: function (a, b, c, d) {
                    z.pushGuard({
                      name:
                        (d === null || d === void 0 ? void 0 : d.name) ||
                        (a.name ? "func_name:" + a.name : null) ||
                        na,
                      deferredSource:
                        d === null || d === void 0 ? void 0 : d.deferredSource,
                    });
                    if (T)
                      try {
                        return a.apply(b, c);
                      } finally {
                        z.popGuard();
                      }
                    try {
                      return Function.prototype.apply.call(a, b, c);
                    } catch (h) {
                      try {
                        b = d !== null && d !== void 0 ? d : {};
                        var e = b.deferredSource,
                          f = b.onError;
                        b = b.onNormalizedError;
                        var g = u(h);
                        e = {
                          deferredSource: e,
                          loggingSource: "GUARDED",
                          project:
                            (e =
                              d === null || d === void 0
                                ? void 0
                                : d.project) !== null && e !== void 0
                              ? e
                              : "ErrorGuard",
                          type:
                            d === null || d === void 0 ? void 0 : d.errorType,
                        };
                        D.aggregateError(g, e);
                        d = N.normalizeError(g);
                        g == null &&
                          a &&
                          ((d.extra[a.toString().substring(0, 100)] =
                            "function"),
                          c != null &&
                            c.length &&
                            (d.extra[
                              ES("Array", "from", !1, c)
                                .toString()
                                .substring(0, 100)
                            ] = "args"));
                        d.guardList = z.cloneGuardList();
                        f && f(g);
                        b && b(d);
                        S.reportNormalizedError(d);
                      } catch (a) {}
                    } finally {
                      z.popGuard();
                    }
                  },
                  guard: function (a, b) {
                    function c() {
                      for (
                        var c = arguments.length, d = new Array(c), e = 0;
                        e < c;
                        e++
                      )
                        d[e] = arguments[e];
                      return U.applyWithGuard(a, this, d, b);
                    }
                    a.__SMmeta && (c.__SMmeta = a.__SMmeta);
                    return c;
                  },
                  inGuard: function () {
                    return z.inGuard();
                  },
                  skipGuardGlobal: function (a) {
                    T = a;
                  },
                },
                V = 1024,
                W = [],
                oa = 0;
              function X(a) {
                return String(a);
              }
              function Y(a) {
                return a == null ? null : String(a);
              }
              function pa(a, b) {
                var c = {};
                b &&
                  b.forEach(function (a) {
                    c[a] = !0;
                  });
                Object.keys(a).forEach(function (b) {
                  a[b] ? (c[b] = !0) : c[b] && delete c[b];
                });
                return Object.keys(c);
              }
              function Z(a) {
                return (a !== null && a !== void 0 ? a : []).map(function (a) {
                  return {
                    column: Y(a.column),
                    identifier: a.identifier,
                    line: Y(a.line),
                    script: a.script,
                  };
                });
              }
              function qa(a) {
                a = String(a);
                return a.length > V ? a.substring(0, V - 3) + "..." : a;
              }
              function ra(a, b) {
                var c;
                c = {
                  appId: Y(b.appId),
                  cavalry_lid: b.cavalry_lid,
                  access_token: l.access_token,
                  ancestor_hash: a.hash,
                  bundle_variant:
                    (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
                  clientTime: X(a.clientTime),
                  column: a.column,
                  componentStackFrames: Z(a.componentStackFrames),
                  events: a.events,
                  extra: pa(a.extra, b.extra),
                  forcedKey: a.forcedKey,
                  frontend_env:
                    (c = b.frontend_env) !== null && c !== void 0 ? c : null,
                  guardList: a.guardList,
                  line: a.line,
                  loggingFramework: b.loggingFramework,
                  messageFormat: qa(a.messageFormat),
                  messageParams: a.messageParams.map(qa),
                  name: a.name,
                  sample_weight: Y(b.sample_weight),
                  script: a.script,
                  site_category: b.site_category,
                  stackFrames: Z(a.stackFrames),
                  type: a.type,
                  page_time: Y(a.page_time),
                  project: a.project,
                  push_phase: b.push_phase,
                  report_source: b.report_source,
                  report_source_ref: b.report_source_ref,
                  rollout_hash:
                    (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
                  script_path: b.script_path,
                  server_revision: Y(b.server_revision),
                  spin: Y(b.spin),
                  svn_rev: String(b.client_revision),
                  additional_client_revisions: ES(
                    "Array",
                    "from",
                    !1,
                    (c = b.additional_client_revisions) !== null && c !== void 0
                      ? c
                      : []
                  ).map(X),
                  taalOpcodes:
                    a.taalOpcodes == null
                      ? null
                      : a.taalOpcodes.map(function (a) {
                          return a;
                        }),
                  web_session_id: b.web_session_id,
                  version: "3",
                  xFBDebug: a.xFBDebug,
                };
                b = a.blameModule;
                var d = a.deferredSource;
                b != null && (c.blameModule = String(b));
                d &&
                  d.stackFrames &&
                  (c.deferredSource = { stackFrames: Z(d.stackFrames) });
                a.metadata && (c.metadata = a.metadata);
                a.loadingUrls && (c.loadingUrls = a.loadingUrls);
                a.serverHash != null && (c.serverHash = a.serverHash);
                a.windowLocationURL != null &&
                  (c.windowLocationURL = a.windowLocationURL);
                a.loggingSource != null && (c.loggingSource = a.loggingSource);
                return c;
              }
              function sa(a, b, c) {
                oa++;
                if (b.sample_weight === 0) return !1;
                var d = t.shouldLog(a);
                if (d == null) return !1;
                b = ra(a, b);
                ES("Object", "assign", !1, b, {
                  ancestors: W.slice(),
                  clientWeight: X(d),
                  page_position: X(oa),
                });
                W.length < 15 && W.push(a.hash);
                c(b);
                return !0;
              }
              var ta = { createErrorPayload: ra, postError: sa },
                $ = null,
                ua = !1;
              function va(a) {
                if (!$) return;
                var b = a.reason,
                  c;
                if (
                  b != null &&
                  typeof b === "object" &&
                  (b.name == null ||
                    b.name === "" ||
                    b.message == null ||
                    b.message === "")
                )
                  try {
                    (c = i(
                      "UnhandledRejection: %s",
                      ES("JSON", "stringify", !1, b)
                    )),
                      (c.loggingSource = "ONUNHANDLEDREJECTION");
                  } catch (a) {
                    (c = i(
                      "UnhandledRejection: (circular) %s",
                      Object.keys(b).join(",")
                    )),
                      (c.loggingSource = "ONUNHANDLEDREJECTION");
                  }
                else
                  (c = u(b)),
                    c.loggingSource ||
                      (c.loggingSource = "ONUNHANDLEDREJECTION");
                $.reportError(c);
                a.preventDefault();
              }
              function wa(b) {
                ($ = b),
                  typeof a.addEventListener === "function" &&
                    !ua &&
                    ((ua = !0), a.addEventListener("unhandledrejection", va));
              }
              var xa = { onunhandledrejection: va, setup: wa };
              c = {
                preSetup: function (a) {
                  (a == null || a.ignoreOnError !== !0) && x.setup(S),
                    (a == null || a.ignoreOnUnahndledRejection !== !0) &&
                      xa.setup(S);
                },
                setup: function (a, b) {
                  S.addListener(function (c) {
                    ta.postError(c, a, b);
                  });
                },
              };
              var ya = (function () {
                function a(a) {
                  (this.project = a),
                    (this.events = []),
                    (this.metadata = new B()),
                    (this.taalOpcodes = []);
                }
                var b = a.prototype;
                b.$1 = function (b, c) {
                  var d = String(c),
                    e = this.events,
                    f = this.project,
                    g = this.metadata,
                    i = this.blameModule,
                    j = this.forcedKey,
                    k = this.error,
                    l;
                  for (
                    var m = arguments.length,
                      n = new Array(m > 2 ? m - 2 : 0),
                      o = 2;
                    o < m;
                    o++
                  )
                    n[o - 2] = arguments[o];
                  if (this.normalizedError) {
                    var p = {
                      message:
                        this.normalizedError.messageFormat +
                        " [Caught in: " +
                        d +
                        "]",
                      params: [].concat(this.normalizedError.messageParams, n),
                      forcedKey: j,
                    };
                    l = ES("Object", "assign", !1, {}, this.normalizedError, {
                      message: p.message,
                      messageFormat: p.message,
                      messageParams: D.toStringParams(p.params),
                      project: f,
                      type: b,
                      loggingSource: "FBLOGGER",
                    });
                  } else if (k)
                    this.taalOpcodes.length > 0 &&
                      new a("fblogger")
                        .blameToPreviousFrame()
                        .blameToPreviousFrame()
                        .warn("Blame helpers do not work with catching"),
                      D.aggregateError(k, {
                        messageFormat: d,
                        messageParams: D.toStringParams(n),
                        errorName: k.name,
                        forcedKey: j,
                        project: f,
                        type: b,
                        loggingSource: "FBLOGGER",
                      }),
                      (l = N.normalizeError(k));
                  else {
                    k = new Error(d);
                    if (k.stack === void 0)
                      try {
                        throw k;
                      } catch (a) {}
                    k.messageFormat = d;
                    k.messageParams = D.toStringParams(n);
                    k.blameModule = i;
                    k.forcedKey = j;
                    k.project = f;
                    k.type = b;
                    k.loggingSource = "FBLOGGER";
                    k.taalOpcodes = [h.PREVIOUS_FRAME, h.PREVIOUS_FRAME].concat(
                      this.taalOpcodes
                    );
                    l = N.normalizeError(k);
                    l.name = "FBLogger";
                  }
                  g.isEmpty() || (l.metadata = g.format());
                  if (e.length > 0)
                    if (l.events != null) {
                      var q;
                      (q = l.events).push.apply(q, e);
                    } else l.events = e;
                  S.reportNormalizedError(l);
                  return k;
                };
                b.fatal = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["fatal", a].concat(c));
                };
                b.mustfix = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["error", a].concat(c));
                };
                b.warn = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["warn", a].concat(c));
                };
                b.info = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  this.$1.apply(this, ["info", a].concat(c));
                };
                b.debug = function (a) {};
                b.mustfixThrow = function (a) {
                  for (
                    var b = arguments.length,
                      c = new Array(b > 1 ? b - 1 : 0),
                      d = 1;
                    d < b;
                    d++
                  )
                    c[d - 1] = arguments[d];
                  var e = this.$1.apply(this, ["error", a].concat(c));
                  e ||
                    ((e = i(
                      "mustfixThrow does not support catchingNormalizedError"
                    )),
                    (e.taalOpcodes = e.taalOpcodes || []),
                    e.taalOpcodes.push(h.PREVIOUS_FRAME));
                  throw e;
                };
                b.catching = function (b) {
                  !(b instanceof Error)
                    ? new a("fblogger")
                        .blameToPreviousFrame()
                        .warn("Catching non-Error object is not supported")
                    : (this.error = b);
                  return this;
                };
                b.catchingNormalizedError = function (a) {
                  this.normalizedError = a;
                  return this;
                };
                b.event = function (a) {
                  this.events.push(a);
                  return this;
                };
                b.blameToModule = function (a) {
                  this.blameModule = a;
                  return this;
                };
                b.blameToPreviousFile = function () {
                  this.taalOpcodes.push(h.PREVIOUS_FILE);
                  return this;
                };
                b.blameToPreviousFrame = function () {
                  this.taalOpcodes.push(h.PREVIOUS_FRAME);
                  return this;
                };
                b.blameToPreviousDirectory = function () {
                  this.taalOpcodes.push(h.PREVIOUS_DIR);
                  return this;
                };
                b.addToCategoryKey = function (a) {
                  this.forcedKey = a;
                  return this;
                };
                b.addMetadata = function (a, b, c) {
                  this.metadata.addEntry(a, b, c);
                  return this;
                };
                return a;
              })();
              d = function (a, b) {
                var c = new ya(a);
                return b != null ? c.event(a + "." + b) : c;
              };
              d.addGlobalMetadata = function (a, b, c) {
                B.addGlobalMetadata(a, b, c);
              };
              f = {
                blameToPreviousFile: function (a) {
                  var b;
                  a.taalOpcodes =
                    (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
                  a.taalOpcodes.push(h.PREVIOUS_FILE);
                  return a;
                },
                blameToPreviousFrame: function (a) {
                  var b;
                  a.taalOpcodes =
                    (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
                  a.taalOpcodes.push(h.PREVIOUS_FRAME);
                  return a;
                },
                blameToPreviousDirectory: function (a) {
                  var b;
                  a.taalOpcodes =
                    (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
                  a.taalOpcodes.push(h.PREVIOUS_DIR);
                  return a;
                },
              };
              G = {
                err: i,
                ErrorBrowserConsole: k,
                ErrorDynamicData: l,
                ErrorFilter: t,
                ErrorGlobalEventHandler: x,
                ErrorGuard: U,
                ErrorGuardState: z,
                ErrorMetadata: B,
                ErrorNormalizeUtils: N,
                ErrorPoster: ta,
                ErrorPubSub: S,
                ErrorSerializer: D,
                ErrorSetup: c,
                ErrorXFBDebug: H,
                FBLogger: d,
                getErrorSafe: u,
                getSimpleHash: I,
                TAAL: f,
                TAALOpcode: h,
              };
              e.exports = G;
            },
            null
          );
          __d(
            "err",
            ["fb-error"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("fb-error").err;
              e.exports = a;
            },
            null
          );
          __d(
            "tryParseJSONMixed",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              function a(a) {
                if (a == null) return null;
                try {
                  a = ES("JSON", "parse", !1, a);
                  return a;
                } catch (a) {
                  return null;
                }
              }
            },
            null
          );
          __d(
            "refine",
            ["err", "tryParseJSONMixed"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.stringifyPath = h;
              f.success = j;
              f.failure = k;
              f.compose = l;
              f.jsonParserEnforced = a;
              f.jsonParser = c;
              f.assertion = d;
              f.coercion = e;
              f.asType = n;
              f.mixed = o;
              f["boolean"] = p;
              f.literal = q;
              f.string = r;
              f.template = s;
              f.number = t;
              f.date = u;
              f.constraint = v;
              f.nullable = w;
              f.or = x;
              f.union = y;
              f.lazy = z;
              f.array = A;
              f.dict = B;
              f.record = C;
              f.writableRecord = D;
              f.writableDict = E;
              f.writableArray = F;
              f.custom = G;
              var g = { parent: null, field: "<root>" };
              f.ROOT_PATH = g;
              function h(a) {
                var b = [];
                a = a;
                while (a != null) {
                  var c = a,
                    d = c.field;
                  c = c.parent;
                  b.push(d);
                  a = c;
                }
                return b.reverse().join(".");
              }
              function i(a, b) {
                return { parent: a, field: b };
              }
              function j(a, b) {
                return { type: "success", value: a, warnings: b };
              }
              function k(a, b) {
                return { type: "failure", message: a, path: b };
              }
              function l(a, b) {
                return function (c, d) {
                  d === void 0 && (d = g);
                  c = a(c, d);
                  if (c.type === "failure") {
                    var e = c.message,
                      f = c.path;
                    return k(e, f);
                  }
                  return b(c, d);
                };
              }
              function m(c, a) {
                if (a != null) {
                  var d = h(a.path);
                  a = a.message;
                  throw b("err")(
                    "[refine.js (path=" + d + ", message=" + a + ")]: " + c
                  );
                }
                throw b("err")("[refine.js (null result)]: " + c);
              }
              function a(a, c) {
                return function (d) {
                  var e;
                  d = a(b("tryParseJSONMixed")((d = d) != null ? d : ""), g);
                  return d.type === "success"
                    ? d.value
                    : m((e = c) != null ? e : "value is invalid", d);
                };
              }
              function c(a) {
                return function (c) {
                  if (c == null) return null;
                  c = a(b("tryParseJSONMixed")(c), g);
                  return c.type === "success" ? c.value : null;
                };
              }
              function d(a) {
                return function (b) {
                  b = a(b);
                  return b.type === "success"
                    ? b.value
                    : m("assertion error", b);
                };
              }
              function e(a, b) {
                return function (c) {
                  c = a(c, g);
                  b != null && b(c);
                  return c.type === "success" ? c.value : null;
                };
              }
              function n(a, b) {
                return l(a, function (a) {
                  var c = a.value;
                  a = a.warnings;
                  return j(b(c), a);
                });
              }
              function o() {
                return function (a) {
                  return j(a, []);
                };
              }
              function p() {
                return function (a, b) {
                  b === void 0 && (b = g);
                  return typeof a === "boolean"
                    ? j(a, [])
                    : k("value is not a boolean", b);
                };
              }
              function q(a) {
                var b = function (a) {
                  return ES("JSON", "stringify", !1, a);
                };
                return function (c, d) {
                  d === void 0 && (d = g);
                  return c === a
                    ? j(a, [])
                    : k(
                        "value is not literal " +
                          ((c = b(a)) != null ? c : "void"),
                        d
                      );
                };
              }
              function r() {
                return function (a, b) {
                  b === void 0 && (b = g);
                  return typeof a === "string"
                    ? j(a, [])
                    : k("value is not a string", b);
                };
              }
              function s(a) {
                return v(r(), function (b) {
                  return a.test(b)
                    ? !0
                    : [!1, "value does not match regex: " + a.toString()];
                });
              }
              function t() {
                return function (a, b) {
                  b === void 0 && (b = g);
                  return typeof a === "number"
                    ? j(a, [])
                    : k("value is not a number", b);
                };
              }
              function u() {
                return function (a, b) {
                  b === void 0 && (b = g);
                  return a instanceof Date
                    ? j(a, [])
                    : k("value is not a date", b);
                };
              }
              function v(a, b) {
                return l(a, function (a, c) {
                  var d = a.value;
                  a = a.warnings;
                  var e = b(d);
                  e =
                    typeof e === "boolean"
                      ? [e, "value failed constraint check"]
                      : e;
                  var f = e[0];
                  e = e[1];
                  return f ? j(d, a) : k(e, c);
                });
              }
              function w(a, b) {
                b = (b = b) != null ? b : {};
                b = b.nullWithWarningWhenInvalid;
                var c = b === void 0 ? !1 : b;
                return function (b, d) {
                  d === void 0 && (d = g);
                  if (b == null) return j(null, []);
                  b = a(b, d);
                  if (b.type === "success") {
                    d = b.value;
                    var e = b.warnings;
                    return j(d, e);
                  }
                  if (c) return j(null, [b]);
                  d = b.message;
                  e = b.path;
                  return k(d, e);
                };
              }
              function x(a, b) {
                return function (c, d) {
                  d === void 0 && (d = g);
                  var e = a(c, d);
                  if (e.type === "success") return j(e.value, e.warnings);
                  e = b(c, d);
                  return e.type === "success"
                    ? j(e.value, e.warnings)
                    : k("value did not match any types in or()", d);
                };
              }
              function y() {
                for (
                  var a = arguments.length, b = new Array(a), c = 0;
                  c < a;
                  c++
                )
                  b[c] = arguments[c];
                return function (a, c) {
                  c === void 0 && (c = g);
                  for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    e = e(a, c);
                    if (e.type === "success") {
                      var f = e.value;
                      e = e.warnings;
                      return j(f, e);
                    }
                  }
                  return k("value did not match any types in union", c);
                };
              }
              function z(a) {
                return function (b, c) {
                  c === void 0 && (c = g);
                  var d = a();
                  return d(b, c);
                };
              }
              function A(a) {
                return function (b, c) {
                  c === void 0 && (c = g);
                  if (!Array.isArray(b)) return k("value is not an array", c);
                  var d = b.length,
                    e = new Array(d),
                    f = [];
                  for (var h = 0; h < d; h++) {
                    var l = b[h];
                    l = a(l, i(c, "[" + h + "]"));
                    if (l.type === "failure") {
                      var m = l.message,
                        n = l.path;
                      return k(m, n);
                    }
                    e[h] = l.value;
                    l.warnings.length !== 0 && f.push.apply(f, l.warnings);
                  }
                  return j(e, f);
                };
              }
              function B(a) {
                return function (b, c) {
                  c === void 0 && (c = g);
                  if (typeof b !== "object" || b === null)
                    return k("value is not an object", c);
                  var d = {},
                    e = [];
                  b = ES("Object", "entries", !1, b);
                  for (var f = 0; f < b.length; f++) {
                    var h = b[f],
                      l = h[0];
                    h = h[1];
                    h = a(h, i(c, l));
                    if (h.type === "failure") {
                      var m = h.message,
                        n = h.path;
                      return k(m, n);
                    }
                    d[l] = h.value;
                    h.warnings.length !== 0 && e.push.apply(e, h.warnings);
                  }
                  return j(d, e);
                };
              }
              function C(a) {
                var b = Object.keys(a);
                return function (c, d) {
                  d === void 0 && (d = g);
                  if (typeof c !== "object" || c === null)
                    return k("value is not an object", d);
                  var e = {},
                    f = [];
                  for (
                    var h = b,
                      l = Array.isArray(h),
                      m = 0,
                      h = l
                        ? h
                        : h[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]();
                    ;

                  ) {
                    var n;
                    if (l) {
                      if (m >= h.length) break;
                      n = h[m++];
                    } else {
                      m = h.next();
                      if (m.done) break;
                      n = m.value;
                    }
                    n = n;
                    var o = a[n],
                      p = Object.prototype.hasOwnProperty.call(c, n)
                        ? c[n]
                        : null;
                    o = o(p, i(d, n));
                    if (o.type === "failure") {
                      p = o.message;
                      var q = o.path;
                      return k(p, q);
                    }
                    e[n] = o.value;
                    o.warnings.length !== 0 && f.push.apply(f, o.warnings);
                  }
                  return j(e, f);
                };
              }
              function D(a) {
                return l(C(a), function (a) {
                  var b = a.value;
                  a = a.warnings;
                  return j(babelHelpers["extends"]({}, b), a);
                });
              }
              function E(a) {
                return l(B(a), function (a) {
                  var b = a.value;
                  a = a.warnings;
                  return j(babelHelpers["extends"]({}, b), a);
                });
              }
              function F(a) {
                return l(A(a), function (a) {
                  var b = a.value;
                  a = a.warnings;
                  return j([].concat(b), a);
                });
              }
              function G(a, b) {
                b === void 0 &&
                  (b = "failed to return non-null from custom checker.");
                return function (c, d) {
                  d === void 0 && (d = g);
                  c = a(c);
                  return c != null ? j(c, []) : k(b, d);
                };
              }
            },
            null
          );
          __d(
            "sdk.PlatformVersioning",
            ["ManagedError", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              f.assertVersionIsSet = a;
              f.assertValidVersion = c;
              var g = /^v\d+\.\d\d?$/;
              f.REGEX = g;
              function a() {
                if (!b("sdk.Runtime").getVersion())
                  throw new (b("ManagedError"))(
                    "init not called with valid version"
                  );
              }
              function c(a) {
                if (!g.test(a))
                  throw new (b("ManagedError"))("invalid version specified");
              }
            },
            null
          );
          __d(
            "sdk.warnInsecure",
            ["Log", "sdk.Runtime", "sdk.Scribe", "sdk.feature"],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              var g = b("sdk.feature")("https_only_learn_more", ""),
                h = {};
              function a(a) {
                window.location.protocol !== "https:" &&
                  (b("Log").log(
                    "error",
                    -1,
                    "The method FB.%s can no longer be called from http pages. %s",
                    a,
                    g
                  ),
                  b("sdk.feature")("https_only_scribe_logging", !0) &&
                    !Object.prototype.hasOwnProperty.call(h, a) &&
                    (b("sdk.Scribe").log("jssdk_error", {
                      appId: b("sdk.Runtime").getClientID(),
                      error: "HttpsOnly",
                      extra: { message: a },
                    }),
                    (h[a] = !0)));
                return !0;
              }
            },
            null
          );
          __d(
            "sdk.api",
            [
              "ApiClient",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.URI",
              "sdk.feature",
              "sdk.warnInsecure",
            ],
            function (a, b, c, d, e, f) {
              var g = b("sdk.feature")("should_log_response_error", !1),
                h;
              b("sdk.Runtime").subscribe("ClientID.change", function (a) {
                return b("ApiClient").setClientID(a);
              });
              b("sdk.Runtime").subscribe("AccessToken.change", function (a) {
                (h = a), b("ApiClient").setAccessToken(a);
              });
              (c = b("ApiClient")).setDefaultParams({ sdk: "joey" });
              c.subscribe("request.complete", function (a, c, d, e) {
                a = !1;
                e &&
                  typeof e === "object" &&
                  (e.error
                    ? (e.error == "invalid_token" ||
                        (e.error.type == "OAuthException" &&
                          e.error.code == 190)) &&
                      (a = !0)
                    : e.error_code && e.error_code == "190" && (a = !0));
                a &&
                  h === b("sdk.Runtime").getAccessToken() &&
                  b("sdk.Runtime").setAccessToken(null);
              });
              c.subscribe("request.complete", function (a, c, d, e) {
                ((a == "/me/permissions" && c === "delete") ||
                  (a == "/restserver.php" &&
                    d.method == "Auth.revokeAuthorization")) &&
                  e === !0 &&
                  b("sdk.Runtime").setAccessToken(null);
              });
              c.subscribe("request.error", function (a, c, d, e) {
                g &&
                  e.error.type === "http" &&
                  b("sdk.Scribe").log("jssdk_error", {
                    appId: b("sdk.Runtime").getClientID(),
                    error: "transport",
                    extra: {
                      name: "transport",
                      message:
                        ES("JSON", "stringify", !1, e.error) +
                        " from " +
                        a +
                        " , " +
                        c,
                    },
                  });
              });
              function a(a) {
                for (
                  var c = arguments.length,
                    d = new Array(c > 1 ? c - 1 : 0),
                    e = 1;
                  e < c;
                  e++
                )
                  d[e - 1] = arguments[e];
                b("sdk.warnInsecure")("api");
                if (typeof a === "string")
                  if (b("sdk.Runtime").getIsVersioned()) {
                    b("sdk.PlatformVersioning").assertVersionIsSet();
                    var f = a;
                    !/https?/.test(f) && f.charAt(0) !== "/" && (f = "/" + f);
                    f = new (b("sdk.URI"))(f)
                      .setDomain("")
                      .setProtocol("")
                      .toString();
                    b("sdk.PlatformVersioning").REGEX.test(
                      f.substring(1, f.indexOf("/", 1))
                    ) || (f = "/" + b("sdk.Runtime").getVersion() + f);
                    var g = [f].concat(
                      Array.prototype.slice.call(arguments, 1)
                    );
                    b("ApiClient").graph.apply(b("ApiClient"), g);
                  } else b("ApiClient").graph.apply(b("ApiClient"), arguments);
                else b("ApiClient").rest.apply(b("ApiClient"), arguments);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "legacy:fb.api",
            ["FB", "sdk.api"],
            function (a, b, c, d, e, f) {
              b("FB").provide("", { api: b("sdk.api") });
            },
            3
          );
          __d(
            "AppUserPropertyAPIBuiltinField",
            [],
            function (a, b, c, d, e, f) {
              e.exports = {
                GENDER: "$gender",
                CITY: "$city",
                STATE: "$state",
                ZIPCODE: "$zipcode",
                COUNTRY: "$country",
                LANGUAGE: "$language",
                CURRENCY: "$currency",
                INSTALL_SOURCE: "$install_source",
                USER_TYPE: "$user_type",
                ACCOUNT_CREATED_TIME: "$account_created_time",
                APP_ID: "$app_id",
              };
            },
            null
          );
          __d(
            "FBEventsParamList",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = "deep",
                h = "shallow";
              a = (function () {
                function a() {
                  this.list = [];
                }
                var b = a.prototype;
                b.append = function (a, b) {
                  this.$1(encodeURIComponent(a), b, g);
                };
                b.each = function (a) {
                  var b = this.list;
                  for (var c = 0, d = b.length; c < d; c++) a(b[c][0], b[c][1]);
                };
                b.toQueryString = function () {
                  var a = [];
                  this.each(function (b, c) {
                    a.push(b + "=" + encodeURIComponent(c));
                  });
                  return a.join("&");
                };
                b.$1 = function (a, b, c) {
                  Object(b) !== b
                    ? this.$2(a, b)
                    : c === g
                    ? this.$3(a, b)
                    : this.$2(a, i(b));
                };
                b.$2 = function (a, b) {
                  b != null && this.list.push([a, b]);
                };
                b.$3 = function (a, b) {
                  for (var c in b)
                    if (Object.prototype.hasOwnProperty.call(b, c)) {
                      var d = a + "[" + encodeURIComponent(c) + "]";
                      this.$1(d, b[c], h);
                    }
                };
                return a;
              })();
              e.exports = a;
              function i(a) {
                if (
                  typeof JSON === "undefined" ||
                  JSON === null ||
                  !ES("JSON", "stringify", !1)
                )
                  return Object.prototype.toString.call(a);
                else return ES("JSON", "stringify", !1, a);
              }
            },
            null
          );
          __d(
            "FBEventsUtils",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              f.listenOnce = a;
              var g = !("addEventListener" in document);
              function a(a, b, c) {
                var d = g ? "on" + b : b;
                b = function b() {
                  g
                    ? a.detachEvent && a.detachEvent(d, b)
                    : a.removeEventListener(d, b, !1),
                    c();
                };
                g
                  ? a.attachEvent && a.attachEvent(d, b)
                  : a.addEventListener(d, b, !1);
              }
            },
            null
          );
          __d(
            "FBPixelEndpoint",
            ["invariant", "FBEventsParamList", "FBEventsUtils"],
            function (a, b, c, d, e, f, g) {
              "use strict";
              f.sendEvent = a;
              var h = "https://www.facebook.com/tr/",
                i = location.href,
                j = window.top !== window,
                k = document.referrer;
              function l(a, c, d, e) {
                e === void 0 && (e = {});
                var f = new (b("FBEventsParamList"))();
                f.append("id", a);
                f.append("ev", c);
                f.append("dl", i);
                f.append("rl", k);
                f.append("if", j);
                f.append("ts", new Date().valueOf());
                f.append("cd", d);
                f.append("sw", window.screen.width);
                f.append("sh", window.screen.height);
                for (var g in e) f.append(g, e[g]);
                return f;
              }
              function a(a, b, c, d) {
                a = l(a, b, c, d);
                b = a.toQueryString();
                2048 > (h + "?" + b).length ? m(h, b) : n(h, a);
              }
              function m(a, b) {
                var c = new Image();
                c.src = a + "?" + b;
              }
              function n(a, c) {
                var d = "fb" + Math.random().toString().replace(".", ""),
                  e = document.createElement("form");
                e.method = "post";
                e.action = a;
                e.target = d;
                e.acceptCharset = "utf-8";
                e.style.display = "none";
                a = !!(window.attachEvent && !window.addEventListener);
                a = a ? '<iframe name="' + d + '">' : "iframe";
                var f = document.createElement(a);
                f instanceof HTMLIFrameElement || g(0, 20659);
                f.src = "javascript:false";
                f.id = d;
                f.name = d;
                e.appendChild(f);
                b("FBEventsUtils").listenOnce(f, "load", function () {
                  c.each(function (a, b) {
                    var c = document.createElement("input");
                    c.name = a;
                    c.value = b;
                    e.appendChild(c);
                  }),
                    b("FBEventsUtils").listenOnce(f, "load", function () {
                      var a;
                      (a = e.parentNode) == null ? void 0 : a.removeChild(e);
                    }),
                    e.submit();
                });
                (a = document.body) == null ? void 0 : a.appendChild(e);
              }
            },
            null
          );
          __d(
            "FBAppEvents",
            ["ApiClient", "FBPixelEndpoint"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.logEvent = a;
              f.updateUserProperties = c;
              function a(a, c, d, e, f) {
                var g = {};
                e != null && (g.vts = e.toString());
                f != null && (g.at = f);
                b("FBPixelEndpoint").sendEvent(a.toString(), c, d, g);
              }
              function c(a, c, d, e) {
                c = "/" + c + "/user_properties";
                a = { data: [{ user_unique_id: a, custom_data: d }] };
                b("ApiClient").graph(c, "post", a, e);
              }
            },
            null
          );
          __d(
            "sdk.Event",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              f.subscribers = a;
              f.subscribe = b;
              f.unsubscribe = c;
              f.monitor = d;
              f.clear = e;
              f.fire = g;
              a = "event.subscribe";
              f.SUBSCRIBE = a;
              b = "event.unsubscribe";
              f.UNSUBSCRIBE = b;
              function a() {
                this._subscribersMap || (this._subscribersMap = {});
                return this._subscribersMap;
              }
              function b(a, b) {
                var c = this.subscribers();
                !c[a] ? (c[a] = [b]) : c[a].indexOf(b) == -1 && c[a].push(b);
                a != this.SUBSCRIBE &&
                  a != this.UNSUBSCRIBE &&
                  this.fire(this.SUBSCRIBE, a, c[a]);
              }
              function c(a, b) {
                var c = this.subscribers()[a];
                c &&
                  c.forEach(function (a, d) {
                    a === b && c.splice(d, 1);
                  });
                a != this.SUBSCRIBE &&
                  a != this.UNSUBSCRIBE &&
                  this.fire(this.UNSUBSCRIBE, a, c);
              }
              function d(a, b) {
                if (!b()) {
                  var c = this,
                    d = function d() {
                      b.apply(b, arguments) && c.unsubscribe(a, d);
                    };
                  this.subscribe(a, d);
                }
              }
              function e(a) {
                delete this.subscribers()[a];
              }
              function g(a) {
                for (
                  var b = arguments.length,
                    c = new Array(b > 1 ? b - 1 : 0),
                    d = 1;
                  d < b;
                  d++
                )
                  c[d - 1] = arguments[d];
                var e = this.subscribers()[a];
                e &&
                  e.forEach(function (a) {
                    a && a.apply(this, c);
                  });
              }
            },
            null
          );
          __d(
            "orEmptyArray",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              function a(a) {
                return (a = a) != null ? a : [];
              }
            },
            null
          );
          __d(
            "Miny",
            ["orEmptyArray"],
            function (a, b, c, d, e, f) {
              var g = "Miny1",
                h = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");
              a = {
                encode: function (a) {
                  if (/^$|[~\\]|__proto__/.test(a)) return a;
                  a = b("orEmptyArray")(a.match(/\w+|\W+/g));
                  var c,
                    d = Object.create(null);
                  for (c = 0; c < a.length; c++) d[a[c]] = (d[a[c]] || 0) + 1;
                  var e = Object.keys(d);
                  e.sort(function (a, b) {
                    return parseInt(d[b], 10) - parseInt(d[a], 10);
                  });
                  for (c = 0; c < e.length; c++) {
                    var f = (c - (c % 32)) / 32;
                    d[e[c]] = f ? f.toString(32) + h[c % 32] : h[c % 32];
                  }
                  f = "";
                  for (c = 0; c < a.length; c++) f += d[a[c]];
                  e.unshift(g, e.length);
                  e.push(f);
                  return e.join("~");
                },
              };
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "getBlankIframeSrc",
            ["sdk.UA"],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a() {
                return b("sdk.UA").ie() < 10
                  ? "javascript:false"
                  : "about:blank";
              }
            },
            null
          );
          __d(
            "insertIframe",
            ["GlobalCallback", "getBlankIframeSrc", "guid"],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                var c = a.id != null ? a.id : b("guid")(),
                  d = a.name != null ? a.name : b("guid")(),
                  e = !1,
                  f = !1,
                  g = function () {
                    e &&
                      !f &&
                      ((f = !0),
                      typeof a.onload === "function" &&
                        a.onload(a.root.firstChild));
                  },
                  h = b("GlobalCallback").create(g);
                if (document.attachEvent) {
                  var i =
                    '<iframe id="' +
                    c +
                    '" name="' +
                    d +
                    '"' +
                    (a.title != null ? ' title="' + a.title + '"' : "") +
                    (a.className != null
                      ? ' class="' + a.className + '"'
                      : "") +
                    ' style="border:none;' +
                    (a.width != null ? "width:" + a.width + "px;" : "") +
                    (a.height != null ? "height:" + a.height + "px;" : "") +
                    '" src="' +
                    b("getBlankIframeSrc")() +
                    '" frameborder="0" scrolling="no" allowtransparency="true" onload="' +
                    h +
                    '()"></iframe>';
                  a.root.innerHTML =
                    '<iframe src="' +
                    b("getBlankIframeSrc")() +
                    '" frameborder="0" scrolling="no" style="height:1px"></iframe>';
                  e = !0;
                  window.setTimeout(function () {
                    (a.root.innerHTML = i),
                      (a.root.firstChild.src = a.url),
                      typeof a.onInsert === "function" &&
                        a.onInsert(a.root.firstChild);
                  }, 0);
                } else {
                  h = document.createElement("iframe");
                  h.id = c;
                  h.name = d;
                  h.onload = g;
                  h.scrolling = "no";
                  h.style.border = "none";
                  h.style.overflow = "hidden";
                  a.title != null && (h.title = a.title);
                  a.className != null && (h.className = a.className);
                  a.height !== void 0 && (h.style.height = a.height + "px");
                  a.width !== void 0 &&
                    (a.width === "100%"
                      ? (h.style.width = a.width)
                      : (h.style.width = a.width + "px"));
                  a.root.appendChild(h);
                  e = !0;
                  h.src = a.url;
                  a.onInsert && a.onInsert(h);
                }
              }
            },
            null
          );
          __d(
            "sdk.Impressions",
            [
              "Miny",
              "QueryString",
              "UrlMap",
              "getBlankIframeSrc",
              "guid",
              "insertIframe",
              "sdk.Content",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f) {
              f.impression = g;
              f.log = a;
              function g(a, c) {
                c === void 0 && (c = !1);
                var d = b("sdk.Runtime").getClientID(),
                  e = b("sdk.Runtime").isEnvironment(
                    b("sdk.Runtime").ENVIRONMENTS.CANVAS
                  );
                d &&
                  (typeof a.api_key !== "string" || a.api_key === "") &&
                  (a.api_key = d);
                a.kid_directed_site = b("sdk.Runtime").getKidDirectedSite();
                d =
                  b("UrlMap").resolve("www") +
                  "/platform/impression.php/" +
                  b("guid")() +
                  "/";
                e &&
                  (d =
                    b("UrlMap").resolve("www") +
                    "/platform/canvas_impression.php/" +
                    b("guid")() +
                    "/");
                var f = b("QueryString").appendToUrl(d, a);
                if (
                  f.length > 2e3 &&
                  a.payload &&
                  typeof a.payload === "string"
                ) {
                  var g = a.payload,
                    j = b("Miny").encode(g);
                  j &&
                    j.length < g.length &&
                    ((a.payload = j), (f = b("QueryString").appendToUrl(d, a)));
                }
                window.fetch ? h(d, f, a, c || e) : i(d, f, a, c || e);
              }
              function h(a, b, c, d) {
                d === void 0 && (d = !1);
                var e = { mode: "no-cors", credentials: "include" };
                d || (e.credentials = "omit");
                if (b.length <= 2e3) window.fetch(b, e);
                else {
                  d = new URLSearchParams();
                  for (var f in c)
                    if (Object.prototype.hasOwnProperty.call(c, f)) {
                      b = c[f];
                      b !== null && b !== void 0 && d.set(f, b);
                    }
                  b = babelHelpers["extends"]({ method: "POST", body: d }, e);
                  window.fetch(a, b);
                }
              }
              function i(a, c, d, e) {
                e === void 0 && (e = !1);
                if (c.length <= 2e3) {
                  var f = new Image();
                  e || (f.crossOrigin = "anonymous");
                  f.src = c;
                } else {
                  if (!e) return;
                  f = b("guid")();
                  var g = b("sdk.Content").appendHidden(
                    document.createElement("div")
                  );
                  b("insertIframe")({
                    url: b("getBlankIframeSrc")(),
                    root: g,
                    name: f,
                    className: "fb_hidden fb_invisible",
                    onload: function () {
                      g.parentNode != null && g.parentNode.removeChild(g);
                    },
                  });
                  b("sdk.Content").submitToTarget({
                    url: a,
                    target: f,
                    params: d,
                  });
                }
              }
              function a(a, b) {
                (typeof b.source !== "string" || b.source === "") &&
                  (b.source = "jssdk"),
                  g({ lid: a, payload: ES("JSON", "stringify", !1, b) });
              }
            },
            null
          );
          __d(
            "sdk.AppEvents",
            [
              "AppUserPropertyAPIBuiltinField",
              "Assert",
              "FBAppEvents",
              "sdk.Event",
              "sdk.Impressions",
              "sdk.Model",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f) {
              f.logEvent = v;
              f.assertValidEventName = w;
              f.logPurchase = a;
              f.activateApp = c;
              f.logPageView = x;
              f.assertValidUserID = y;
              f.setUserID = d;
              f.getUserID = z;
              f.clearUserID = e;
              f.assertValidAppVersion = A;
              f.setAppVersion = B;
              f.getAppVersion = C;
              f.clearAppVersion = D;
              f.assertValidUserProperties = E;
              f.updateUserProperties = F;
              var g = Object.freeze({
                COMPLETED_REGISTRATION: "fb_mobile_complete_registration",
                VIEWED_CONTENT: "fb_mobile_content_view",
                SEARCHED: "fb_mobile_search",
                RATED: "fb_mobile_rate",
                COMPLETED_TUTORIAL: "fb_mobile_tutorial_completion",
                ADDED_TO_CART: "fb_mobile_add_to_cart",
                ADDED_TO_WISHLIST: "fb_mobile_add_to_wishlist",
                INITIATED_CHECKOUT: "fb_mobile_initiated_checkout",
                ADDED_PAYMENT_INFO: "fb_mobile_add_payment_info",
                ACHIEVED_LEVEL: "fb_mobile_level_achieved",
                UNLOCKED_ACHIEVEMENT: "fb_mobile_achievement_unlocked",
                PAGE_VIEW: "fb_page_view",
                SPENT_CREDITS: "fb_mobile_spent_credits",
              });
              f.EventNames = g;
              var h = Object.freeze({
                  ACTIVATED_APP: "fb_mobile_activate_app",
                  PURCHASED: "fb_mobile_purchase",
                }),
                i = Object.freeze({
                  APP_USER_ID: "_app_user_id",
                  APP_VERSION: "_appVersion",
                  CURRENCY: "fb_currency",
                  REGISTRATION_METHOD: "fb_registration_method",
                  CONTENT_TYPE: "fb_content_type",
                  CONTENT_ID: "fb_content_id",
                  SEARCH_STRING: "fb_search_string",
                  SUCCESS: "fb_success",
                  MAX_RATING_VALUE: "fb_max_rating_value",
                  PAYMENT_INFO_AVAILABLE: "fb_payment_info_available",
                  NUM_ITEMS: "fb_num_items",
                  LEVEL: "fb_level",
                  DESCRIPTION: "fb_description",
                });
              f.ParameterNames = i;
              var j = /^[0-9a-zA-Z_][0-9a-zA-Z _-]{0,39}$/,
                k = 40,
                l = j,
                m = k,
                n = 100,
                o = 100,
                p = 100,
                q = 100,
                r = ES(
                  "Object",
                  "values",
                  !1,
                  b("AppUserPropertyAPIBuiltinField")
                ),
                s = new (b("sdk.Model"))({ UserID: "", Version: "" });
              function t(a, c, d, e) {
                c = { ae: 1, ev: c, vts: d, canvas: 1 };
                e && (c.cd = e);
                b("sdk.Impressions").impression({
                  api_key: a,
                  payload: ES("JSON", "stringify", !1, c),
                });
              }
              function u(a, c, d, e) {
                var f = b("sdk.Runtime").getAccessToken();
                b("FBAppEvents").logEvent(a, c, e || {}, d, f);
              }
              function v(a, c, d, e) {
                w(c);
                var f = s.getUserID();
                f !== "" && ((e = e || {}), (e[i.APP_USER_ID] = f));
                f = s.getVersion();
                f !== "" && ((e = e || {}), (e[i.APP_VERSION] = f));
                b("sdk.Runtime").isCanvasEnvironment()
                  ? t(a, c, d, e)
                  : u(a, c, d, e);
              }
              function w(a) {
                b("Assert").isTrue(
                  j.test(a),
                  "Invalid event name: " +
                    a +
                    ". It must be between 1 and " +
                    k +
                    " characters, and must be contain only alphanumerics, _, - or spaces, starting with alphanumeric or _."
                );
              }
              function a(a, b, c, d) {
                var e = {};
                e[i.CURRENCY] = c;
                v(a, h.PURCHASED, b, babelHelpers["extends"]({}, d, e));
              }
              function c(a) {
                v(a, h.ACTIVATED_APP);
              }
              function x(a) {
                v(a, g.PAGE_VIEW);
              }
              function y(a) {
                b("Assert").isTrue(
                  a.length !== 0,
                  "User ID must be set before updateUserProperties can be called."
                ),
                  b("Assert").isTrue(
                    a.length <= n,
                    "Invalid user ID: " +
                      a +
                      ". It must be no longer than " +
                      n +
                      " characters."
                  );
              }
              function d(a) {
                y(a), s.setUserID(a);
              }
              function z() {
                return s.getUserID();
              }
              function e() {
                s.setUserID("");
              }
              function A(a) {
                b("Assert").isTrue(
                  a.length <= o,
                  "Invalid app version: " +
                    a +
                    ". It must be no longer than " +
                    o +
                    " characters."
                );
              }
              function B(a) {
                A(a), s.setVersion(a);
              }
              function C() {
                return s.getVersion();
              }
              function D() {
                s.setVersion("");
              }
              function E(a) {
                b("Assert").isTrue(
                  Object.keys(a).length <= p,
                  "The total number of user properties cannot exceed " + p + "."
                );
                for (var c in a)
                  b("Assert").isTrue(
                    l.test(c) || ES(r, "includes", !0, c),
                    "Invalid user properties key name: " +
                      c +
                      ". It must be between 1 and " +
                      m +
                      " characters, and must contain only alphanumerics, _, - or spaces, starting with alphanumeric or _. Or, it must be a pre-defined user property"
                  ),
                    b("Assert").isTrue(
                      a[c].toString().length <= q,
                      "Invalid user properties value: " +
                        a[c] +
                        ". It must be no longer than " +
                        q +
                        " characters."
                    );
              }
              function F(a, c, d) {
                var e = z();
                y(e);
                Object.keys(c).forEach(function (a) {
                  return c[a] == null && delete c[a];
                });
                E(c);
                b("FBAppEvents").updateUserProperties(e, a, c, d);
              }
              b("sdk.Event").subscribe("init:post", function (a) {
                b("sdk.Runtime").getClientID() &&
                  (a.autoLogAppEvents !== void 0 &&
                    (b("Assert").isBoolean(
                      a.autoLogAppEvents,
                      "Type of property autoLogAppEvents must be boolean"
                    ),
                    b("sdk.Runtime").setAutoLogAppEvents(a.autoLogAppEvents)),
                  b("sdk.Runtime").getAutoLogAppEvents() &&
                    x(b("sdk.Runtime").getClientID()));
              });
            },
            null
          );
          __d(
            "legacy:fb.appevents",
            ["Assert", "FB", "sdk.AppEvents", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              function g() {
                var a = b("sdk.Runtime").getClientID();
                b("Assert").isTrue(
                  a !== null && a.length > 0,
                  "You need to call FB.init() with App ID first."
                );
                return a;
              }
              b("FB").provide("AppEvents", {
                logEvent: function (a, c, d) {
                  b("sdk.AppEvents").logEvent(g(), a, c, d);
                },
                logPurchase: function (a, c, d) {
                  b("sdk.AppEvents").logPurchase(g(), a, c, d);
                },
                activateApp: function () {
                  b("sdk.AppEvents").activateApp(g());
                },
                logPageView: function () {
                  b("sdk.AppEvents").logPageView(g());
                },
                setUserID: function (a) {
                  b("sdk.AppEvents").setUserID(a);
                },
                getUserID: function () {
                  return b("sdk.AppEvents").getUserID();
                },
                clearUserID: function () {
                  b("sdk.AppEvents").clearUserID();
                },
                updateUserProperties: function (a, c) {
                  b("sdk.AppEvents").updateUserProperties(g(), a, c);
                },
                setAppVersion: function (a) {
                  b("sdk.AppEvents").setAppVersion(a);
                },
                getAppVersion: function () {
                  return b("sdk.AppEvents").getAppVersion();
                },
                clearAppVersion: function () {
                  b("sdk.AppEvents").clearAppVersion();
                },
                EventNames: b("sdk.AppEvents").EventNames,
                ParameterNames: b("sdk.AppEvents").ParameterNames,
              });
            },
            3
          );
          __d(
            "sdk.AuthState",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = h();
              function h() {
                var a = {
                  igAuthResponse: null,
                  fbAuthResponse: null,
                  fbLoginStatus: null,
                  igLoginStatus: null,
                };
                return {
                  currentAuthResponse: null,
                  shouldSecondLoginRequestTimeOut: !1,
                  mixedAuthState: a,
                  loadState: null,
                  timer: null,
                };
              }
              function a() {
                return ES("Object", "assign", !1, h(), g);
              }
              function b(a) {
                g = ES("Object", "assign", !1, h(), g, a);
              }
              c = { getState: a, setState: b };
              d = c;
              e.exports = d;
            },
            null
          );
          __d(
            "sdk.Observable",
            [],
            function (a, b, c, d, e, f) {
              a = (function () {
                function a() {
                  (this.$1 = {}),
                    (this.getSubscribers = ES(
                      this.getSubscribers,
                      "bind",
                      !0,
                      this
                    )),
                    (this.clearSubscribers = ES(
                      this.clearSubscribers,
                      "bind",
                      !0,
                      this
                    )),
                    (this.subscribe = ES(this.subscribe, "bind", !0, this)),
                    (this.unsubscribe = ES(this.unsubscribe, "bind", !0, this)),
                    (this.inform = ES(this.inform, "bind", !0, this));
                }
                var b = a.prototype;
                b.getSubscribers = function (a) {
                  return this.$1[a] || (this.$1[a] = []);
                };
                b.clearSubscribers = function (a) {
                  a && (this.$1[a] = []);
                };
                b.subscribe = function (a, b) {
                  a = this.getSubscribers(a);
                  a.push(b);
                };
                b.unsubscribe = function (a, b) {
                  a = this.getSubscribers(a);
                  for (var c = 0; c < a.length; c++)
                    if (a[c] === b) {
                      a.splice(c, 1);
                      break;
                    }
                };
                b.inform = function (a, b) {
                  a = this.getSubscribers(a);
                  for (var c = 0; c < a.length; c++) {
                    if (a[c] === null) continue;
                    try {
                      a[c].call(this, b);
                    } catch (a) {
                      window.setTimeout(function () {
                        throw a;
                      }, 0);
                    }
                  }
                };
                return a;
              })();
              f.Observable = a;
            },
            null
          );
          __d(
            "sdk.AuthUtils",
            ["sdk.AuthState", "sdk.Cookie", "sdk.Observable", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.isInstagramLogin = a;
              f.setBaseDomain = c;
              f.resetFBAndIGLoginStatus = d;
              f.setGraphDomain = e;
              f.setLogoutState = h;
              f.removeLogoutState = i;
              var g = 365 * 24 * 60 * 60 * 1e3;
              function a(a) {
                return a != null && a.graphDomain != null
                  ? a.graphDomain === "instagram"
                  : !1;
              }
              function c(a) {
                b("sdk.Runtime").getUseCookie() &&
                  b("sdk.Cookie").getDomain() == null &&
                  b("sdk.Cookie").setDomain("." + a);
              }
              function d() {
                var a = {
                    fbAuthResponse: null,
                    fbLoginStatus: null,
                    igAuthResponse: null,
                    igLoginStatus: null,
                  },
                  c = !1;
                b("sdk.AuthState").setState({
                  mixedAuthState: a,
                  shouldSecondLoginRequestTimeOut: c,
                });
              }
              function e(a) {
                a != null
                  ? (b("sdk.Runtime").setGraphDomain(a),
                    a == "instagram" && b("sdk.Runtime").setIsVersioned(!1))
                  : b("sdk.Runtime").setGraphDomain("");
              }
              function h() {
                b("sdk.Cookie").setRaw(
                  p.LOGOUT_COOKIE_PREFIX,
                  "y",
                  Date.now() + g,
                  !1
                );
              }
              function i() {
                b("sdk.Cookie").setRaw(p.LOGOUT_COOKIE_PREFIX, "", 0, !1),
                  b("sdk.Cookie").setRaw(p.LOGOUT_COOKIE_PREFIX, "", 0, !0);
              }
              var j = new (b("sdk.Observable").Observable)();
              function k(a, b) {
                j.inform(a, b);
              }
              function l(a, b) {
                j.subscribe(a, b);
              }
              function m(a) {
                j.clearSubscribers(a);
              }
              function n(a, b) {
                j.unsubscribe(a, b);
              }
              function o(a) {
                return j.getSubscribers(a);
              }
              a = {
                inform: k,
                subscribe: l,
                clearSubscribers: m,
                unsubscribe: n,
                getSubscribers: o,
              };
              f.AuthInternalEvent = a;
              var p = {
                LOCAL_STORAGE_TOKEN_PREFIX: "fblst_",
                IG_LOCAL_STORAGE_TOKEN_PREFIX: "iglst_",
                SESSION_STORAGE_LOGIN_STATUS_PREFIX: "fbssls_",
                CONNECTED_REVALIDATE_PERIOD: 60 * 90 * 1e3,
                DEFAULT_REVALIDATE_PERIOD: 60 * 60 * 24 * 1e3,
                LOGOUT_COOKIE_PREFIX: "fblo_",
                CORS_FETCH_COMPLETED_EVENT: "cors_fetch_completed",
                XFOA_FINAL_RESPONSE_EVENT: "xfoa_final_response",
                LOAD_XFOA_SUBSCRIBERS: "load_xfoa_subscribers",
              };
              f.AuthConstants = p;
            },
            null
          );
          __d(
            "sdk.WebStorage",
            ["Log"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.getLocalStorage = a;
              f.getLocalStorageForRead = c;
              f.getSessionStorage = d;
              f.getSessionStorageForRead = e;
              function a() {
                try {
                  return window.localStorage;
                } catch (a) {
                  b("Log").warn("Failed to get local storage");
                }
                return null;
              }
              function c() {
                try {
                  var a = window.localStorage;
                  if (a) {
                    var c = "__test__" + Date.now();
                    a.setItem(c, "");
                    a.removeItem(c);
                  }
                  return a;
                } catch (a) {
                  b("Log").warn("Failed to get local storage");
                }
                return null;
              }
              function d() {
                try {
                  return window.sessionStorage;
                } catch (a) {
                  b("Log").warn("Failed to get session storage");
                }
                return null;
              }
              function e() {
                try {
                  var a = window.sessionStorage;
                  if (a) {
                    var c = "__test__" + Date.now();
                    a.setItem(c, "");
                    a.removeItem(c);
                  }
                  return a;
                } catch (a) {
                  b("Log").warn("Failed to get session storage");
                }
                return null;
              }
            },
            null
          );
          __d(
            "sdk.AuthStorageUtils",
            ["sdk.AuthUtils", "sdk.Runtime", "sdk.WebStorage", "sdk.feature"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.setLocalStorageToken = a;
              f.removeLocalStorageToken = c;
              f.setSessionStorage = d;
              f.getLocalStorageTokens = e;
              f.getCachedResponse = h;
              function a(a, c) {
                if (g() && c != null && c !== "") {
                  var d = b("sdk.WebStorage").getLocalStorage();
                  if (d) {
                    a = b("sdk.AuthUtils").isInstagramLogin(a)
                      ? b("sdk.AuthUtils").AuthConstants
                          .IG_LOCAL_STORAGE_TOKEN_PREFIX
                      : b("sdk.AuthUtils").AuthConstants
                          .LOCAL_STORAGE_TOKEN_PREFIX;
                    d.setItem(a + b("sdk.Runtime").getClientID(), c);
                  }
                }
              }
              function c(a) {
                var c = b("sdk.WebStorage").getLocalStorage();
                c &&
                  (a === "instagram"
                    ? c.removeItem(
                        b("sdk.AuthUtils").AuthConstants
                          .IG_LOCAL_STORAGE_TOKEN_PREFIX +
                          b("sdk.Runtime").getClientID()
                      )
                    : c.removeItem(
                        b("sdk.AuthUtils").AuthConstants
                          .LOCAL_STORAGE_TOKEN_PREFIX +
                          b("sdk.Runtime").getClientID()
                      ));
              }
              function d(a, c) {
                if (!g()) return;
                var d = b("sdk.WebStorage").getSessionStorage();
                d &&
                  d.setItem(
                    b("sdk.AuthUtils").AuthConstants
                      .SESSION_STORAGE_LOGIN_STATUS_PREFIX +
                      b("sdk.Runtime").getClientID(),
                    ES("JSON", "stringify", !1, {
                      authResponse: a,
                      status: c,
                      expiresAt:
                        a != null && a.expiresIn && a.expiresIn !== 0
                          ? Date.now() +
                            Math.min(
                              a.expiresIn * 0.75 * 1e3,
                              b("sdk.AuthUtils").AuthConstants
                                .CONNECTED_REVALIDATE_PERIOD
                            )
                          : Date.now() +
                            b("sdk.AuthUtils").AuthConstants
                              .DEFAULT_REVALIDATE_PERIOD,
                    })
                  );
              }
              function g() {
                return (
                  b("sdk.feature")("cache_auth_response", !1) &&
                  b("sdk.Runtime").getUseLocalStorage() &&
                  location.protocol === "https:"
                );
              }
              function e() {
                var a = null,
                  c = null;
                if (b("sdk.Runtime").getUseLocalStorage()) {
                  var d = b("sdk.WebStorage").getLocalStorageForRead();
                  d &&
                    ((a = d.getItem(
                      b("sdk.AuthUtils").AuthConstants
                        .LOCAL_STORAGE_TOKEN_PREFIX +
                        b("sdk.Runtime").getClientID()
                    )),
                    (c = d.getItem(
                      b("sdk.AuthUtils").AuthConstants
                        .IG_LOCAL_STORAGE_TOKEN_PREFIX +
                        b("sdk.Runtime").getClientID()
                    )));
                }
                return { fbToken: a, igToken: c };
              }
              function h() {
                if (!g()) return null;
                var a = b("sdk.WebStorage").getSessionStorageForRead();
                if (a) {
                  a = a.getItem(
                    b("sdk.AuthUtils").AuthConstants
                      .SESSION_STORAGE_LOGIN_STATUS_PREFIX +
                      b("sdk.Runtime").getClientID()
                  );
                  if (a != null)
                    try {
                      a = ES("JSON", "parse", !1, a);
                      if (
                        a != null &&
                        a.expiresAt != null &&
                        a.expiresAt > Date.now()
                      )
                        return a;
                    } catch (a) {
                      return null;
                    }
                }
                return null;
              }
            },
            null
          );
          __d(
            "Base64",
            [],
            function (a, b, c, d, e, f) {
              var g =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
              function h(a) {
                a =
                  (a.charCodeAt(0) << 16) |
                  (a.charCodeAt(1) << 8) |
                  a.charCodeAt(2);
                return String.fromCharCode(
                  g.charCodeAt(a >>> 18),
                  g.charCodeAt((a >>> 12) & 63),
                  g.charCodeAt((a >>> 6) & 63),
                  g.charCodeAt(a & 63)
                );
              }
              var i =
                ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
              function j(a) {
                a =
                  (i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
                  (i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
                  (i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
                  i.charCodeAt(a.charCodeAt(3) - 43);
                return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
              }
              var k = {
                encode: function (a) {
                  a = unescape(encodeURI(a));
                  var b = (a.length + 2) % 3;
                  a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
                  return a.slice(0, a.length + b - 2) + "==".slice(b);
                },
                decode: function (a) {
                  a = a.replace(/[^A-Za-z0-9+\/]/g, "");
                  var b = (a.length + 3) & 3;
                  a = (a + "AAA".slice(b)).replace(/..../g, j);
                  a = a.slice(0, a.length + b - 3);
                  try {
                    return decodeURIComponent(escape(a));
                  } catch (a) {
                    throw new Error("Not valid UTF-8");
                  }
                },
                encodeObject: function (a) {
                  return k.encode(ES("JSON", "stringify", !1, a));
                },
                decodeObject: function (a) {
                  return ES("JSON", "parse", !1, k.decode(a));
                },
                encodeNums: function (a) {
                  return String.fromCharCode.apply(
                    String,
                    a.map(function (a) {
                      return g.charCodeAt(
                        (a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63
                      );
                    })
                  );
                },
              };
              a = k;
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.SignedRequest",
            ["Base64"],
            function (a, b, c, d, e, f) {
              f.parse = a;
              function a(a) {
                if (a == null || a === "") return null;
                a = a.split(".", 2)[1].replace(/\-/g, "+").replace(/\_/g, "/");
                return b("Base64").decodeObject(a);
              }
            },
            null
          );
          __d(
            "sdk.getContextType",
            ["sdk.Runtime", "sdk.UA"],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a() {
                if (b("sdk.UA").nativeApp()) return 3;
                if (b("sdk.UA").mobile()) return 2;
                return b("sdk.Runtime").isEnvironment(
                  b("sdk.Runtime").ENVIRONMENTS.CANVAS
                )
                  ? 5
                  : 1;
              }
            },
            null
          );
          __d(
            "sdk.statusCORS",
            [
              "Log",
              "UrlMap",
              "sdk.AuthState",
              "sdk.AuthStorageUtils",
              "sdk.AuthUtils",
              "sdk.Impressions",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.URI",
              "sdk.feature",
              "sdk.getContextType",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = 6e4,
                h = 114;
              function a(a, c, d, e) {
                e === void 0 && (e = "facebook");
                var f = l(c),
                  k = Date.now();
                function o() {
                  var c = new XMLHttpRequest();
                  c &&
                    (c.open("GET", f.toString(), !0),
                    (c.withCredentials = !0),
                    (c.onreadystatechange = function () {
                      if (c.readyState === 4) {
                        if (b("sdk.feature")("e2e_ping_tracking", !0)) {
                          var f = {
                            init: k,
                            close: Date.now(),
                            method: "cors",
                          };
                          b("Log").debug(
                            "e2e: %s",
                            ES("JSON", "stringify", !1, f)
                          );
                          b("sdk.Impressions").log(h, { payload: f });
                        }
                        if (c.status === 200) {
                          i(
                            a,
                            (f = c.getResponseHeader("fb-s")) != null
                              ? f
                              : "unknown",
                            (f = c.getResponseHeader("fb-ar")) != null
                              ? f
                              : "{}",
                            e
                          );
                        } else j(a, c.status, d, e);
                      }
                    }),
                    c.send());
                }
                function p() {
                  m(e) ||
                    window.setTimeout(function () {
                      n(e === "facebook" ? "instagram" : "facebook"),
                        b("sdk.AuthState").setState({
                          shouldSecondLoginRequestTimeOut: !0,
                        });
                    }, g);
                }
                function q() {
                  window
                    .fetch(f.toString(), {
                      referrer: "/",
                      mode: "cors",
                      credentials: "include",
                    })
                    .then(function (c) {
                      if (
                        b("sdk.AuthState").getState()
                          .shouldSecondLoginRequestTimeOut
                      ) {
                        b("sdk.AuthState").setState({
                          shouldSecondLoginRequestTimeOut: !1,
                        });
                        return;
                      }
                      p();
                      if (c.status === 200) {
                        var f;
                        i(
                          a,
                          (f = c.headers.get("fb-s")) != null ? f : "unknown",
                          (f = c.headers.get("fb-ar")) != null ? f : "{}",
                          e
                        );
                      } else j(a, c.status, d, e);
                    })
                    ["catch"](function (c) {
                      if (
                        b("sdk.AuthState").getState()
                          .shouldSecondLoginRequestTimeOut
                      ) {
                        b("sdk.AuthState").setState({
                          shouldSecondLoginRequestTimeOut: !1,
                        });
                        return;
                      }
                      p();
                      j(a, 0, d, e);
                    });
                }
                typeof window.fetch === "function" ? q() : o();
              }
              function i(a, c, d, e) {
                e === void 0 && (e = "facebook");
                switch (c) {
                  case "connected":
                    d = ES("JSON", "parse", !1, d);
                    var f = {
                      accessToken: d.access_token,
                      userID: d.user_id,
                      expiresIn: Number(d.expires_in),
                      signedRequest: d.signed_request,
                      graphDomain: d.graph_domain,
                    };
                    d.enforce_https != null &&
                      b("sdk.Runtime").setEnforceHttps(!0);
                    d.data_access_expiration_time != null &&
                      (f.data_access_expiration_time = Number(
                        d.data_access_expiration_time
                      ));
                    d.base_domain != null &&
                      b("sdk.AuthUtils").setBaseDomain(d.base_domain);
                    b("sdk.AuthUtils").setGraphDomain(d.graph_domain);
                    b("sdk.AuthStorageUtils").setLocalStorageToken(
                      f,
                      d.long_lived_token
                    );
                    b("sdk.AuthUtils").removeLogoutState();
                    d = { authResponse: f, status: c, loginSource: e, cb: a };
                    b("sdk.AuthUtils").AuthInternalEvent.inform(
                      b("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      d
                    );
                    break;
                  case "not_authorized":
                  case "unknown":
                  default:
                    f = {
                      authResponse: null,
                      status: c,
                      loginSource: e,
                      cb: a,
                    };
                    b("sdk.AuthUtils").AuthInternalEvent.inform(
                      b("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      f
                    );
                }
              }
              function j(a, c, d, e) {
                e === void 0 && (e = "facebook");
                c === 0
                  ? (b("sdk.feature")(
                      "cors_status_fetch_cancel_tracking",
                      !1
                    ) &&
                      b("sdk.Scribe").log("jssdk_error", {
                        appId: b("sdk.Runtime").getClientID(),
                        error: "CORS_STATUS_FETCH_CANCELLED",
                        extra: { message: "Status 0 returned." },
                      }),
                    b("Log").error(
                      "Error retrieving login status, fetch cancelled."
                    ))
                  : (b("sdk.Scribe").log("jssdk_error", {
                      appId: b("sdk.Runtime").getClientID(),
                      error: "CORS_STATUS_FETCH",
                      extra: { message: "HTTP Status Code " + c },
                    }),
                    b("Log").error(
                      "Error retrieving login status, HTTP status code: " + c
                    ));
                c = k();
                if (c && c === e) {
                  c = {
                    authResponse: d,
                    status: b("sdk.Runtime").getLoginStatus(),
                    loginSource: e,
                    cb: a,
                    shouldSetAuthResponse: !1,
                  };
                  b("sdk.AuthUtils").AuthInternalEvent.inform(
                    b("sdk.AuthUtils").AuthConstants.CORS_FETCH_COMPLETED_EVENT,
                    c
                  );
                } else {
                  d = {
                    authResponse: null,
                    status: "unknown",
                    loginSource: e,
                    cb: a,
                    shouldSetAuthResponse: !1,
                  };
                  b("sdk.AuthUtils").AuthInternalEvent.inform(
                    b("sdk.AuthUtils").AuthConstants.CORS_FETCH_COMPLETED_EVENT,
                    d
                  );
                }
              }
              function k() {
                var a = b("sdk.AuthState").getState().currentAuthResponse;
                return a
                  ? b("sdk.AuthUtils").isInstagramLogin(a)
                    ? "instagram"
                    : "facebook"
                  : null;
              }
              function l(a) {
                a = new (b("sdk.URI"))(
                  b("UrlMap").resolve("www").replace("web.", "www.") +
                    "/x/oauth/status"
                )
                  .addQueryData("client_id", b("sdk.Runtime").getClientID())
                  .addQueryData("input_token", a)
                  .addQueryData("redirect_uri", window.location.href)
                  .addQueryData("origin", b("sdk.getContextType")())
                  .addQueryData("sdk", "joey")
                  .addQueryData(
                    "wants_cookie_data",
                    b("sdk.Runtime").getUseCookie()
                  );
                if (window.location.ancestorOrigins) {
                  var c = window.location.ancestorOrigins;
                  if (c.length > 0) {
                    var d = "";
                    for (var e = 0; e < c.length; e++) (d += c[e]), (d += ",");
                    a.addQueryData("ancestor_origins", d.slice(0, -1));
                  }
                }
                return a;
              }
              function m(a) {
                var c = b("sdk.AuthState").getState().mixedAuthState;
                switch (a) {
                  case "facebook":
                    return (
                      (c == null ? void 0 : c.fbLoginStatus) === null &&
                      (c == null ? void 0 : c.igLoginStatus) !== null
                    );
                  case "instagram":
                    return (
                      (c == null ? void 0 : c.igLoginStatus) === null &&
                      (c == null ? void 0 : c.fbLoginStatus) !== null
                    );
                  default:
                    return !1;
                }
              }
              function n(a) {
                var c = b("sdk.AuthState").getState().mixedAuthState;
                if (
                  (c == null ? void 0 : c.fbLoginStatus) != null &&
                  (c == null ? void 0 : c.igLoginStatus) != null
                )
                  return;
                c = { authResponse: null, status: "unknown", loginSource: a };
                b("sdk.AuthUtils").AuthInternalEvent.inform(
                  "xFoAFetchCompleted",
                  c
                );
              }
              c = { getLoginStatusCORS: a };
              d = c;
              e.exports = d;
            },
            null
          );
          __d(
            "sdk.Auth",
            [
              "Log",
              "QueryString",
              "UrlMap",
              "sdk.AuthState",
              "sdk.AuthStorageUtils",
              "sdk.AuthUtils",
              "sdk.Cookie",
              "sdk.Frictionless",
              "sdk.Impressions",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.SignedRequest",
              "sdk.UA",
              "sdk.URI",
              "sdk.feature",
              "sdk.statusCORS",
            ],
            function (a, b, c, d, e, f) {
              b("sdk.Frictionless");
              var g = 5 * 1e3,
                h = 117,
                i = /^https?:\/\/([\w\.]+)?\.facebook\.com\/?/;
              b("sdk.Runtime").subscribe("AccessToken.change", function (a) {
                !a &&
                  b("sdk.Runtime").getLoginStatus() === "connected" &&
                  x.getLoginStatus(null, !0);
              });
              function j(a) {
                switch (a) {
                  case "connected":
                    return "connected";
                  case "not_authorized":
                    return "not_authorized";
                  default:
                    return "unknown";
                }
              }
              function k(a) {
                (a == null ? void 0 : a.shouldSetAuthResponse) !== !1 &&
                  ((a == null ? void 0 : a.status) === "connected" && w(),
                  l(
                    a == null ? void 0 : a.authResponse,
                    j(a == null ? void 0 : a.status),
                    a == null ? void 0 : a.loginSource
                  ));
                var c = a == null ? void 0 : a.cb;
                if (c != null) {
                  a = {
                    authResponse: a == null ? void 0 : a.authResponse,
                    status: j(a == null ? void 0 : a.status),
                    loginSource: a == null ? void 0 : a.loginSource,
                  };
                  c(a);
                }
                b("sdk.AuthUtils").AuthInternalEvent.clearSubscribers(
                  b("sdk.AuthUtils").AuthConstants.CORS_FETCH_COMPLETED_EVENT
                );
                b("sdk.AuthUtils").AuthInternalEvent.clearSubscribers(
                  b("sdk.AuthUtils").AuthConstants.XFOA_FINAL_RESPONSE_EVENT
                );
              }
              function l(a, c, d, e) {
                d === void 0 && (d = "facebook");
                e === void 0 && (e = !1);
                var f = b("sdk.Runtime").getUserID(),
                  g = b("sdk.Runtime").getLoginStatus(),
                  h = "";
                if (a != null) {
                  b("sdk.AuthState").setState({ loadState: "loaded" });
                  if (a.userID != null && a.userID !== "") h = a.userID;
                  else if (a.signedRequest != null && a.signedRequest !== "") {
                    var i = b("sdk.SignedRequest").parse(a.signedRequest);
                    i != null &&
                      i !== "" &&
                      i.user_id != null &&
                      i.user_id !== "" &&
                      (h = i.user_id);
                  }
                  if (b("sdk.Runtime").getUseCookie()) {
                    i = a.expiresIn === 0 ? 0 : Date.now() + a.expiresIn * 1e3;
                    b("sdk.Cookie").setSignedRequestCookie(a.signedRequest, i);
                  }
                } else {
                  b("sdk.Runtime").getUseCookie() &&
                    b("sdk.Cookie").clearSignedRequestCookie();
                  if (b("sdk.Runtime").getUseLocalStorage()) {
                    b("sdk.AuthStorageUtils").removeLocalStorageToken(
                      (i = d) != null ? i : "facebook"
                    );
                  }
                }
                i =
                  (g === "unknown" && a != null) ||
                  (b("sdk.Runtime").getUseCookie() &&
                    b("sdk.Runtime").getCookieUserID() !== h);
                var j = f != null && f !== "" && a == null;
                f = a != null && f != null && f !== "" && f != h;
                var k = a != b("sdk.AuthState").getState().currentAuthResponse;
                g = c != g;
                b("sdk.Runtime").setLoginStatus(c);
                b("sdk.Runtime").setAccessToken((a && a.accessToken) || null);
                b("sdk.Runtime").setUserID(h);
                b("sdk.Runtime").setGraphDomain((a && a.graphDomain) || "");
                b("sdk.AuthState").setState({ currentAuthResponse: a });
                h = { authResponse: a, status: c, loginSource: d };
                (j || f) &&
                  b("sdk.AuthUtils").AuthInternalEvent.inform("logout", h);
                (i || f) &&
                  b("sdk.AuthUtils").AuthInternalEvent.inform("login", h);
                k &&
                  b("sdk.AuthUtils").AuthInternalEvent.inform(
                    "authresponse.change",
                    h
                  );
                g &&
                  b("sdk.AuthUtils").AuthInternalEvent.inform(
                    "status.change",
                    h
                  );
                e || b("sdk.AuthStorageUtils").setSessionStorage(a, c);
                return h;
              }
              function m() {
                return b("sdk.AuthState").getState().currentAuthResponse;
              }
              function a(a) {
                var c = m(),
                  d = b("sdk.AuthUtils").isInstagramLogin(c)
                    ? "instagram"
                    : "facebook";
                l(null, "unknown", d);
                b("sdk.AuthUtils").setLogoutState();
                if (c != null && c.accessToken != null) {
                  d = new (b("sdk.URI"))(
                    b("UrlMap").resolve("www").replace("web.", "www.") +
                      "/x/oauth/logout"
                  ).addQueryData("access_token", c.accessToken);
                  var e = new XMLHttpRequest();
                  e &&
                    (e.open("GET", d.toString(), !0),
                    (e.withCredentials = !0),
                    a &&
                      (e.onreadystatechange = function () {
                        e.readyState >= 2 &&
                          a({
                            authResponse: m(),
                            status: b("sdk.Runtime").getLoginStatus(),
                          });
                      }),
                    e.send());
                }
                b("sdk.Scribe").log("jssdk_error", {
                  appId: b("sdk.Runtime").getClientID(),
                  error: "PLATFORM_AUTH_LOGOUT",
                  extra: { args: { fblo: !0 } },
                });
              }
              function c(a, c, d, e) {
                return function (d) {
                  if (d && d.access_token) {
                    var f = b("sdk.SignedRequest").parse(d.signed_request);
                    f =
                      f != null ? (f.user_id != null ? f.user_id : null) : null;
                    c = {
                      accessToken: d.access_token,
                      userID: f,
                      expiresIn: Number(d.expires_in),
                      signedRequest: d.signed_request,
                      graphDomain: d.graph_domain,
                    };
                    d.asset_scopes &&
                      (c = babelHelpers["extends"]({}, c, {
                        asset_scopes: ES("JSON", "parse", !1, d.asset_scopes),
                      }));
                    c = o(c, d);
                    b("sdk.AuthUtils").removeLogoutState();
                    f = "connected";
                    l(c, f);
                    n(e);
                  } else if (d && d.asset_scopes)
                    (c = {
                      asset_scopes: ES("JSON", "parse", !1, d.asset_scopes),
                    }),
                      (c = o(c, d)),
                      b("sdk.AuthUtils").removeLogoutState(),
                      (f = "connected"),
                      l(c, f),
                      n(e);
                  else if (
                    d &&
                    (d.error ||
                      d.error_message ||
                      d.error_description ||
                      d.error_code ||
                      d.error_reason ||
                      (d.result && d.result.closeWindow))
                  ) {
                    b("sdk.AuthUtils").setLogoutState();
                    f = "unknown";
                    l(null, f);
                    var g = d.error_message || d.error_description;
                    f = { authResponse: m(), status: f, message: g };
                    d.error === "access_denied" ||
                    (d.result && d.result.closeWindow)
                      ? b("sdk.AuthUtils").AuthInternalEvent.inform(
                          "loginDenied",
                          f
                        )
                      : b("sdk.AuthUtils").AuthInternalEvent.inform(
                          "loginError",
                          f
                        );
                  } else
                    d &&
                      d.result &&
                      (b("sdk.AuthUtils").removeLogoutState(),
                      (c = d.result.authResponse));
                  if (a) {
                    g = {
                      authResponse: c,
                      status: b("sdk.Runtime").getLoginStatus(),
                    };
                    a(g);
                  }
                  return c;
                };
              }
              function n(a) {
                var c = a && a.logger_id ? a.logger_id : null,
                  d = a && a.cbt ? a.cbt : 0,
                  e = {
                    action: "client_login_end",
                    logger_id: c,
                    client_funnel_version: b("sdk.feature")(
                      "oauth_funnel_logger_version",
                      1
                    ),
                    cbt_delta: Date.now() - d,
                  };
                if (a && a.tp && a.tp !== "unspecified") return;
                b("sdk.Impressions").log(h, { payload: e });
                window.setTimeout(function () {
                  var a = {
                    action: "client_login_complete_heartbeat",
                    logger_id: c,
                    client_funnel_version: b("sdk.feature")(
                      "oauth_funnel_logger_version",
                      1
                    ),
                    cbt_delta: Date.now() - d,
                  };
                  b("sdk.Impressions").log(h, { payload: a });
                }, g);
              }
              function o(a, c) {
                c.granted_scopes &&
                  (a = babelHelpers["extends"]({}, a, {
                    grantedScopes: c.granted_scopes,
                  }));
                c.data_access_expiration_time &&
                  (a = babelHelpers["extends"]({}, a, {
                    data_access_expiration_time: Number(
                      c.data_access_expiration_time
                    ),
                  }));
                c.base_domain != null &&
                  b("sdk.AuthUtils").setBaseDomain(c.base_domain);
                b("sdk.AuthUtils").setGraphDomain(c.graph_domain);
                c.enforce_https && b("sdk.Runtime").setEnforceHttps(!0);
                c.referred &&
                  (a = babelHelpers["extends"]({}, a, {
                    referred: c.referred,
                  }));
                b("sdk.AuthStorageUtils").setLocalStorageToken(
                  a,
                  c.long_lived_token
                );
                return a;
              }
              function p(a) {
                var b = "unknown";
                l(null, b, null);
                b = { authResponse: null, status: b, loginSource: null };
                a && a(b);
              }
              function q(a, c) {
                c = ES("JSON", "parse", !1, c);
                c["iab-s"] == null && (c["iab-s"] = "unknown");
                switch (c["iab-s"]) {
                  case "connected":
                    l(c["iab-ar"], "connected");
                    break;
                  case "not_authorized":
                  case "unknown":
                  default:
                    l(null, c["iab-s"]);
                }
                if (a) {
                  c = {
                    authResponse: m(),
                    status: b("sdk.Runtime").getLoginStatus(),
                  };
                  a(c);
                }
                window.removeEventListener(
                  "fbNativeLoginResponse",
                  function (b) {
                    return q(a, b.response);
                  }
                );
              }
              function r(a) {
                var c = null,
                  d = !1;
                if (
                  b("sdk.Runtime").getLoginStatus() !== "connected" &&
                  (document.referrer === "" || i.test(document.referrer))
                ) {
                  var e = location.hash.substr(1);
                  if (e !== "") {
                    var f = b("QueryString").decode(e, !0);
                    c = f.access_token;
                    var g = f.signed_request;
                    c != null && b("sdk.AuthUtils").removeLogoutState();
                    if (window == top && c != null) {
                      var h = a;
                      a = function (a) {
                        var d;
                        a != null &&
                          a.status === "connected" &&
                          ((d = a.authResponse) == null
                            ? void 0
                            : d.accessToken) === c &&
                          (delete f.access_token,
                          delete f.code,
                          delete f.signed_request,
                          (location.hash = b("QueryString").encode(f)),
                          g != null &&
                            a.authResponse != null &&
                            (a.authResponse.signedRequest = g));
                        h != null && h(a);
                      };
                    }
                  }
                  e = b("QueryString").decode(location.search);
                  e.error === "access_denied" && (d = !0);
                }
                return { access_token: c, redirect_cancelled: d };
              }
              function s() {
                return (
                  b("sdk.UA").isSupportedIABVersion(
                    parseFloat(
                      b("sdk.feature")(
                        "iab_login_android_support_version",
                        "999.0"
                      )
                    )
                  ) &&
                  window.FBLogin &&
                  typeof window.FBLogin.showFBLoginBottomSheetInIAB ===
                    "function" &&
                  b("sdk.feature")("iab_login_status", !1)
                );
              }
              function t(a, c, d) {
                b("sdk.AuthState").getState().currentAuthResponse;
                window.addEventListener("fbNativeLoginResponse", function (b) {
                  return q(a, b.response);
                });
                window.addEventListener(
                  "fbNativeLoginFallbackResponse",
                  function (b) {
                    v(c, d, a);
                  }
                );
                var e = b("sdk.Runtime").getClientID();
                window.FBLogin.showFBLoginBottomSheetInIAB(e);
              }
              function u(a) {
                window.location.protocol !== "https:" && p(a);
                var c = b("sdk.AuthState").getState().timer;
                c &&
                  (window.clearTimeout(c),
                  b("sdk.AuthState").setState({ timer: null }));
                b("sdk.AuthUtils").resetFBAndIGLoginStatus();
                c =
                  b("sdk.Cookie").getRaw(
                    b("sdk.AuthUtils").AuthConstants.LOGOUT_COOKIE_PREFIX
                  ) === "y";
                var d = r(a),
                  e = d.access_token;
                d = d.redirect_cancelled;
                if (c || d) {
                  p(a);
                  return;
                }
                c = b("sdk.AuthStorageUtils").getLocalStorageTokens();
                d = c.fbToken;
                c = c.igToken;
                e != null &&
                  (ES(e, "startsWith", !0, "IG") ? (c = e) : (d = e));
                !b("sdk.Runtime").getShouldLoadFamilyLogin()
                  ? b("sdk.AuthUtils").AuthInternalEvent.subscribe(
                      b("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      k
                    )
                  : b("sdk.Runtime").getFamilyLoginLoaded()
                  ? b("sdk.AuthUtils").AuthInternalEvent.inform(
                      b("sdk.AuthUtils").AuthConstants.LOAD_XFOA_SUBSCRIBERS
                    )
                  : b("sdk.Runtime").subscribe(
                      "FamilyLoginLoaded.change",
                      function (a) {
                        a &&
                          b("sdk.AuthUtils").AuthInternalEvent.inform(
                            b("sdk.AuthUtils").AuthConstants
                              .LOAD_XFOA_SUBSCRIBERS
                          );
                      }
                    );
                s() ? t(a, d) : v(d, c, a);
              }
              function v(a, c, d) {
                b("sdk.statusCORS").getLoginStatusCORS(
                  d,
                  a,
                  b("sdk.AuthState").getState().currentAuthResponse,
                  "facebook"
                );
                if (b("sdk.Runtime").getShouldLoadFamilyLogin())
                  if (c != null)
                    b("sdk.statusCORS").getLoginStatusCORS(
                      d,
                      c,
                      b("sdk.AuthState").getState().currentAuthResponse,
                      "instagram"
                    );
                  else {
                    a = {
                      authResponse: null,
                      status: "unknown",
                      loginSource: "instagram",
                      cb: d,
                    };
                    b("sdk.AuthUtils").AuthInternalEvent.inform(
                      b("sdk.AuthUtils").AuthConstants
                        .CORS_FETCH_COMPLETED_EVENT,
                      a
                    );
                  }
              }
              function w(a) {
                a === void 0 &&
                  (a =
                    b("sdk.AuthUtils").AuthConstants
                      .CONNECTED_REVALIDATE_PERIOD);
                var c = b("sdk.AuthState").getState().timer;
                c && window.clearTimeout(c);
                c = window.setTimeout(function () {
                  u(function () {});
                }, a);
                b("sdk.AuthState").setState({ timer: c });
              }
              function d(a, c) {
                c === void 0 && (c = !1);
                var d = b("sdk.Runtime").getClientID();
                if (d == null || d === "") {
                  b("Log").warn(
                    "FB.getLoginStatus() called before calling FB.init()."
                  );
                  p(a);
                  return;
                }
                if (
                  !(typeof d === "number" || typeof d === "string") ||
                  d === 0 ||
                  (typeof d === "string" && (d === "0" || !/^\d+$/.test(d)))
                ) {
                  b("Log").warn(
                    "FB.getLoginStatus() not checked for an invalid client ID " +
                      d
                  );
                  p(a);
                  return;
                }
                d =
                  b("sdk.Runtime").getLoginStatus() !== "connected" &&
                  i.test(document.referrer) &&
                  location.hash.indexOf("cb=") > -1;
                if (!d && !c) {
                  d = b("sdk.AuthStorageUtils").getCachedResponse();
                  if (d != null) {
                    var e;
                    b("sdk.AuthState").setState({ loadState: "loaded" });
                    l(
                      d.authResponse,
                      (e = d.status) != null ? e : "unknown",
                      "facebook",
                      !0
                    );
                    w(
                      d.status === "connected"
                        ? b("sdk.AuthUtils").AuthConstants
                            .CONNECTED_REVALIDATE_PERIOD
                        : b("sdk.AuthUtils").AuthConstants
                            .DEFAULT_REVALIDATE_PERIOD
                    );
                  }
                }
                if (!c)
                  if (b("sdk.AuthState").getState().loadState === "loaded") {
                    if (a) {
                      e = {
                        authResponse: m(),
                        status: b("sdk.Runtime").getLoginStatus(),
                      };
                      a(e);
                    }
                    return;
                  } else if (
                    b("sdk.AuthState").getState().loadState === "loading"
                  ) {
                    a &&
                      b("sdk.AuthUtils").AuthInternalEvent.subscribe(
                        "FB.loginStatus",
                        a
                      );
                    return;
                  }
                a &&
                  b("sdk.AuthUtils").AuthInternalEvent.subscribe(
                    "FB.loginStatus",
                    a
                  );
                b("sdk.AuthState").setState({ loadState: "loading" });
                d = function (a) {
                  b("sdk.AuthState").setState({ loadState: "loaded" }),
                    b("sdk.AuthUtils").AuthInternalEvent.inform(
                      "FB.loginStatus",
                      a
                    ),
                    b("sdk.AuthUtils").AuthInternalEvent.clearSubscribers(
                      "FB.loginStatus"
                    );
                };
                u(d);
              }
              var x = {
                getLoginStatus: d,
                fetchLoginStatus: u,
                setFinalAuthResponse: k,
                logout: a,
                setAuthResponse: l,
                getAuthResponse: m,
                parseSignedRequest: b("sdk.SignedRequest").parse,
                xdResponseWrapper: c,
                subscribe: b("sdk.AuthUtils").AuthInternalEvent.subscribe,
                unsubscribe: b("sdk.AuthUtils").AuthInternalEvent.unsubscribe,
              };
              f = x;
              e.exports = f;
            },
            null
          );
          __d(
            "dedupString",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              function a(a) {
                var b;
                return Object.keys(((b = {}), (b[a] = 0), b))[0];
              }
            },
            null
          );
          __d(
            "emptyFunction",
            [],
            function (a, b, c, d, e, f) {
              function a(a) {
                return function () {
                  return a;
                };
              }
              b = function () {};
              b.thatReturns = a;
              b.thatReturnsFalse = a(!1);
              b.thatReturnsTrue = a(!0);
              b.thatReturnsNull = a(null);
              b.thatReturnsThis = function () {
                return this;
              };
              b.thatReturnsArgument = function (a) {
                return a;
              };
              c = b;
              e.exports = c;
            },
            null
          );
          __d(
            "DOMEventListener",
            ["invariant", "dedupString", "emptyFunction", "wrapFunction"],
            function (a, b, c, d, e, f, g) {
              var h = !1;
              try {
                a = Object.defineProperty({}, "passive", {
                  get: function () {
                    h = !0;
                  },
                });
                window.addEventListener("test", null, a);
              } catch (a) {}
              var i, j;
              window.addEventListener
                ? ((i = function (a, c, d, e) {
                    e === void 0 && (e = !1),
                      (d.wrapper = b("wrapFunction")(
                        d,
                        "entry",
                        b("dedupString")("DOMEventListener.add " + c)
                      )),
                      a.addEventListener(c, d.wrapper, h ? e : !1);
                  }),
                  (j = function (a, b, c, d) {
                    d === void 0 && (d = !1),
                      a.removeEventListener(b, c.wrapper, h ? d : !1);
                  }))
                : window.attachEvent
                ? ((i = function (a, c, d, e) {
                    e === void 0,
                      (d.wrapper = b("wrapFunction")(
                        d,
                        "entry",
                        "DOMEventListener.add " + c
                      )),
                      a.attachEvent || g(0, 2798),
                      a.attachEvent("on" + c, d.wrapper);
                  }),
                  (j = function (a, b, c, d) {
                    d === void 0,
                      a.detachEvent || g(0, 2799),
                      a.detachEvent("on" + b, c.wrapper);
                  }))
                : (j = i = b("emptyFunction"));
              c = {
                add: function (a, b, c, d) {
                  d === void 0 && (d = !1);
                  i(a, b, c, d);
                  return {
                    remove: function () {
                      j(a, b, c, d);
                    },
                  };
                },
                remove: j,
              };
              e.exports = c;
            },
            null
          );
          __d(
            "JSONRPC",
            ["Log"],
            function (a, b, c, d, e, f) {
              a = (function () {
                "use strict";
                function a(a) {
                  var b = this;
                  this.$1 = 0;
                  this.$2 = {};
                  this.remote = function (a) {
                    b.$3 = a;
                    return b.remote;
                  };
                  this.local = {};
                  this.$4 = a;
                }
                var c = a.prototype;
                c.stub = function (a) {
                  var b = this;
                  this.remote[a] = function () {
                    var c = { jsonrpc: "2.0", method: a };
                    for (
                      var d = arguments.length, e = new Array(d), f = 0;
                      f < d;
                      f++
                    )
                      e[f] = arguments[f];
                    typeof e[e.length - 1] === "function" &&
                      ((c.id = ++b.$1), (b.$2[c.id] = e.pop()));
                    c.params = e;
                    b.$4(ES("JSON", "stringify", !1, c), b.$3 || { method: a });
                  };
                };
                c.read = function (a, c) {
                  a = ES("JSON", "parse", !1, a);
                  var d = a.id;
                  if (!a.method) {
                    if (!this.$2[d]) {
                      b("Log").warn("Could not find callback %s", d);
                      return;
                    }
                    var e = this.$2[d];
                    delete this.$2[d];
                    delete a.id;
                    delete a.jsonrpc;
                    e(a);
                    return;
                  }
                  var f = this;
                  e = this.local[a.method];
                  var g;
                  d
                    ? (g = function (a, b) {
                        var e = { jsonrpc: "2.0", id: d };
                        e[a] = b;
                        window.setTimeout(function () {
                          f.$4(ES("JSON", "stringify", !1, e), c);
                        }, 0);
                      })
                    : (g = function () {});
                  if (!e) {
                    b("Log").error(
                      'Method "%s" has not been defined',
                      a.method
                    );
                    g("error", {
                      code: -32601,
                      message: "Method not found",
                      data: a.method,
                    });
                    return;
                  }
                  a.params.push(ES(g, "bind", !0, null, "result"));
                  a.params.push(ES(g, "bind", !0, null, "error"));
                  try {
                    e = e.apply(c || null, a.params);
                    typeof e !== "undefined" && g("result", e);
                  } catch (c) {
                    b("Log").error(
                      "Invokation of RPC method %s resulted in the error: %s",
                      a.method,
                      c.message
                    ),
                      g("error", {
                        code: -32603,
                        message: "Internal error",
                        data: c.message,
                      });
                  }
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "Queue",
            [],
            function (a, b, c, d, e, f) {
              var g = {};
              a = (function () {
                function a(a) {
                  (this._timeout = null),
                    (this._interval = (a == null ? void 0 : a.interval) || 0),
                    (this._processor = a == null ? void 0 : a.processor),
                    (this._queue = []),
                    (this._stopped = !0);
                }
                var b = a.prototype;
                b._dispatch = function (a) {
                  var b = this;
                  a === void 0;
                  if (this._stopped || this._queue.length === 0) return;
                  a = this._processor;
                  if (a == null) {
                    this._stopped = !0;
                    throw new Error("No processor available");
                  }
                  var c = this._interval;
                  if (c != null)
                    a.call(this, this._queue.shift()),
                      (this._timeout = setTimeout(function () {
                        return b._dispatch();
                      }, c));
                  else
                    while (this._queue.length)
                      a.call(this, this._queue.shift());
                };
                b.enqueue = function (a) {
                  this._processor && !this._stopped
                    ? this._processor(a)
                    : this._queue.push(a);
                  return this;
                };
                b.start = function (a) {
                  a && (this._processor = a);
                  this._stopped = !1;
                  this._dispatch();
                  return this;
                };
                b.isStarted = function () {
                  return !this._stopped;
                };
                b.dispatch = function () {
                  this._dispatch(!0);
                };
                b.stop = function (a) {
                  this._stopped = !0;
                  a && this._timeout != null && clearTimeout(this._timeout);
                  return this;
                };
                b.merge = function (a, b) {
                  if (b) {
                    (b = this._queue).unshift.apply(b, a._queue);
                  } else {
                    (b = this._queue).push.apply(b, a._queue);
                  }
                  a._queue = [];
                  this._dispatch();
                  return this;
                };
                b.getLength = function () {
                  return this._queue.length;
                };
                a.get = function (b, c) {
                  var d;
                  b in g ? (d = g[b]) : (d = g[b] = new a(c));
                  return d;
                };
                a.exists = function (a) {
                  return a in g;
                };
                a.remove = function (a) {
                  return delete g[a];
                };
                return a;
              })();
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.RPC",
            ["Assert", "JSONRPC", "Queue"],
            function (a, b, c, d, e, f) {
              var g = new (b("Queue"))(),
                h = new (b("JSONRPC"))(function (a) {
                  g.enqueue(a);
                });
              a = {
                local: h.local,
                remote: h.remote,
                stub: ES(h.stub, "bind", !0, h),
                setInQueue: function (a) {
                  b("Assert").isInstanceOf(b("Queue"), a),
                    a.start(function (a) {
                      h.read(a);
                    });
                },
                getOutQueue: function () {
                  return g;
                },
              };
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Canvas.Environment",
            ["sdk.RPC"],
            function (a, b, c, d, e, f) {
              function a(a) {
                b("sdk.RPC").remote.getPageInfo(function (b) {
                  a(b.result);
                });
              }
              function c(a, c) {
                b("sdk.RPC").remote.scrollTo({ x: a || 0, y: c || 0 });
              }
              b("sdk.RPC").stub("getPageInfo");
              b("sdk.RPC").stub("scrollTo");
              d = { getPageInfo: a, scrollTo: c };
              e.exports = d;
            },
            null
          );
          __d(
            "sdk.DialogUtils",
            ["DOMEventListener", "sdk.Content", "sdk.DOM", "sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.isOrientationPotrait = a;
              f.addDoubleClickAction = c;
              f.addIdleDesktopAction = d;
              f.addMobileOrientationChangeAction = e;
              f.applyScreenDimensions = j;
              f.setDialogPositionToCenter = k;
              f.setDialogPositionToTop = l;
              f.setupNewDarkOverlay = m;
              f.setupNewDialog = n;
              f.onDialogHideCleanup = o;
              var g = 590,
                h = 240,
                i = 575;
              function a() {
                return window.innerWidth < window.innerHeight;
              }
              function c(a, c, d) {
                var e = null;
                return b("DOMEventListener").add(a, "click", function () {
                  e !== null && (window.clearTimeout(e), (e = null), c()),
                    (e = window.setTimeout(function () {
                      e = null;
                    }, d));
                });
              }
              function d(a, c, d) {
                var e,
                  f,
                  g = function () {
                    e = window.setTimeout(c, d);
                  };
                g();
                return b("DOMEventListener").add(a, "mouseenter", function () {
                  window.clearTimeout(e),
                    f ||
                      (f = b("DOMEventListener").add(
                        a,
                        "mouseleave",
                        function () {
                          g();
                        }
                      ));
                });
              }
              function e(a) {
                if (!b("sdk.UA").mobile()) return null;
                var c =
                    "onorientationchange" in window
                      ? "orientationchange"
                      : "resize",
                  d = function (b) {
                    return window.setTimeout(function (b) {
                      return a(b);
                    }, 50);
                  };
                return b("DOMEventListener").add(window, c, d);
              }
              function j(a) {
                if (a == null) return;
                var c = b("sdk.DOM").getViewportInfo();
                a.style.minHeight = c.height ? c.height + "px" : "";
                a.style.top = c.scrollTop ? c.scrollTop + "px" : "";
              }
              function k(a, c, d) {
                var e,
                  f,
                  j,
                  k = function (a) {
                    return typeof a === "number" ? a : parseInt(a, 10);
                  },
                  l = b("sdk.DOM").getViewportInfo(),
                  m = k(a.offsetWidth);
                k = k(a.offsetHeight);
                e =
                  (e = l.scrollLeft) != null
                    ? e
                    : 0 + ((e = l.width) != null ? e : i - m) / 2;
                m = ((m = l.height) != null ? m : h - k) / 2.5;
                e < m && (m = e);
                f = (f = l.height) != null ? f : h - k - m;
                j = ((j = l.height) != null ? j : h - k) / 2;
                d && (j = d.scrollTop - d.offsetTop + (d.clientHeight - k) / 2);
                j < m ? (j = m) : j > f && (j = f);
                j += (d = l.scrollTop) != null ? d : 0;
                if (b("sdk.UA").mobile()) {
                  m = 100;
                  if (c) {
                    m += ((f = l.height) != null ? f : g - k) / 2;
                    b("sdk.DOM").addCss(document.body, "fb_reposition");
                  } else
                    b("sdk.DOM").addCss(document.body, "fb_hidden"),
                      (document.body.style.width = "auto"),
                      (j = 1e4);
                  d = b("sdk.DOM").getByClass("fb_dialog_padding", a);
                  d.length && (d[0].style.height = m + "px");
                }
                a.style.left = (e > 0 ? e : 0) + "px";
                a.style.top = (j > 0 ? j : 0) + "px";
              }
              function l(a, c, d) {
                this.setDialogPositionToCenter(a, c, d);
                c = b("sdk.DOM").getViewportInfo();
                c =
                  (d = c.scrollTop) != null
                    ? d
                    : 0 +
                      ((d = c.height) != null ? d : g - a.offsetHeight) * 0.05;
                b("sdk.DOM").setStyle(a, "top", c + "px");
              }
              function m() {
                var a = document.createElement("div");
                a.setAttribute("id", "fb_dialog_ipad_overlay");
                this.applyScreenDimensions(a);
                return a;
              }
              function n(a) {
                a = a || {};
                var c = document.createElement("div"),
                  d = a;
                d = d.onClose;
                if (a.closeIcon && d) {
                  var e = document.createElement("a");
                  e.className = "fb_dialog_close_icon";
                  b("DOMEventListener").add(e, "click", d);
                  c.appendChild(e);
                }
                d = "fb_dialog";
                d += " " + (a.classes || "");
                d += b("sdk.UA").mobile()
                  ? " fb_dialog_mobile"
                  : " fb_dialog_advanced";
                c.className = d;
                if (a.width) {
                  e = parseInt(a.width, 10);
                  isNaN(e) || (c.style.width = e + "px");
                }
                d = document.createElement("div");
                a.content && b("sdk.Content").append(a.content, d);
                d.className = "fb_dialog_content";
                c.appendChild(d);
                if (b("sdk.UA").mobile()) {
                  e = document.createElement("div");
                  e.className = "fb_dialog_padding";
                  c.appendChild(e);
                }
                return { dialogElement: c, contentRoot: d };
              }
              function o(a) {
                var c = document.body;
                a
                  ? b("sdk.DOM").removeCss(c, "fb_reposition")
                  : b("sdk.DOM").removeCss(c, "fb_hidden");
              }
            },
            null
          );
          __d(
            "sdk.fbt",
            [],
            function (a, b, c, d, e, f) {
              a = function () {};
              a._ = function (a) {
                var b = typeof a === "string" ? a : a[0];
                b == null &&
                  typeof a === "object" &&
                  a !== null &&
                  !Array.isArray(a) &&
                  "*" in a &&
                  (b = a["*"]);
                return b;
              };
              b = a;
              e.exports = b;
            },
            null
          );
          __d(
            "sdk.Dialog",
            [
              "DOMEventListener",
              "ObservableMixin",
              "Type",
              "sdk.Canvas.Environment",
              "sdk.Content",
              "sdk.DOM",
              "sdk.DialogUtils",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.fbt",
            ],
            function (a, b, c, d, e, f) {
              var g = 30,
                h = 590,
                i = 500,
                j = 240,
                k = 575;
              function l() {
                var a = b("sdk.DOM").getViewportInfo(),
                  c = a.height;
                a = a.width;
                return c != null && a != null
                  ? { width: Math.min(a, i), height: Math.min(c, h) }
                  : null;
              }
              var m = b("Type").extend(
                  {
                    constructor: function (a, b) {
                      this.parent(),
                        (this.id = a),
                        (this.display = b),
                        (this._e2e = {}),
                        n._dialogs ||
                          ((n._dialogs = {}), n._addOrientationHandler()),
                        (n._dialogs[a] = this),
                        this.trackEvent("init");
                    },
                    trackEvent: function (a, b) {
                      if (this._e2e[a]) return this;
                      this._e2e[a] = b || Date.now();
                      a == "close" && this.inform("e2e:end", this._e2e);
                      return this;
                    },
                    trackEvents: function (a) {
                      typeof a === "string" && (a = ES("JSON", "parse", !1, a));
                      for (var b in a)
                        Object.prototype.hasOwnProperty.call(a, b) &&
                          this.trackEvent(b, a[b]);
                      return this;
                    },
                  },
                  b("ObservableMixin")
                ),
                n = {
                  newInstance: function (a, b) {
                    return new m(a, b);
                  },
                  _dialogs: null,
                  _lastYOffset: 0,
                  _availScreenWidth: null,
                  _overlayListeners: [],
                  _loaderEl: null,
                  _overlayEl: null,
                  _stack: [],
                  _active: null,
                  get: function (a) {
                    return n._dialogs[a];
                  },
                  _findRoot: function (a) {
                    a = a;
                    while (a) {
                      if (b("sdk.DOM").containsCss(a, "fb_dialog")) return a;
                      a.parentElement instanceof HTMLElement &&
                        (a = a.parentElement);
                    }
                  },
                  _createWWWLoader: function (a) {
                    a = a ? a : "460";
                    var b = document.createElement("div");
                    b.innerHTML =
                      '<div class="dialog_title">  <a id="fb_dialog_loader_close">    <div class="fb_dialog_close_icon"></div>  </a>  <span>Facebook</span>  <div style="clear:both;"></div></div><div class="dialog_content"></div><div class="dialog_footer"></div>';
                    return n.create({ content: b, width: a });
                  },
                  _createMobileLoader: function () {
                    var a = document.createElement("div");
                    b("sdk.UA").nativeApp()
                      ? (a.innerHTML = '<div class="dialog_header"></div>')
                      : n.isTabletStyle()
                      ? (a.innerHTML =
                          '<div class="overlayLoader"><div id="fb_dialog_loader_spinner"></div><a id="fb_dialog_loader_close" href="#">' +
                          b("sdk.fbt")._("Cancel") +
                          "</a></div>")
                      : (a.innerHTML =
                          '<div class="dialog_header"><table>  <tbody>    <tr>      <td class="header_left">        <label class="touchable_button">          <input type="submit" value="' +
                          b("sdk.fbt")._("Cancel") +
                          '"            id="fb_dialog_loader_close"/>        </label>      </td>      <td class="header_center">        <div>         ' +
                          b("sdk.fbt")._("Loading...") +
                          '        </div>      </td>      <td class="header_right">      </td>    </tr>  </tbody></table></div>');
                    return n.create({
                      classes:
                        "loading" + (n.isTabletStyle() ? " centered" : ""),
                      content: a,
                    });
                  },
                  _setDialogOverlayStyle: function () {
                    n._overlayEl != null &&
                      b("sdk.DialogUtils").applyScreenDimensions(n._overlayEl);
                  },
                  _showTabletOverlay: function (a) {
                    if (!n.isTabletStyle()) return;
                    if (n._overlayEl == null) {
                      a = b("sdk.DialogUtils").setupNewDarkOverlay();
                      a.className = "";
                      n._overlayEl = a;
                      b("sdk.Content").append(n._overlayEl, null);
                    } else n._overlayEl.className = "";
                  },
                  _hideTabletOverlay: function () {
                    n.isTabletStyle() &&
                      (n._overlayEl != null &&
                        (n._overlayEl.className = "hidden"),
                      n._overlayListeners.forEach(function (a) {
                        return a.remove();
                      }),
                      (n._overlayListeners = []));
                  },
                  showLoader: function (a, c) {
                    a || (a = function () {});
                    var d = function () {
                      n._hideLoader(),
                        b("sdk.DialogUtils").onDialogHideCleanup(
                          n.isTabletStyle()
                        ),
                        n._hideTabletOverlay(),
                        a != null && a();
                    };
                    n._showTabletOverlay(d);
                    n._loaderEl ||
                      (n._loaderEl = n._findRoot(
                        b("sdk.UA").mobile()
                          ? n._createMobileLoader()
                          : n._createWWWLoader(c)
                      ));
                    c = document.getElementById("fb_dialog_loader_close");
                    if (c) {
                      b("sdk.DOM").removeCss(c, "fb_hidden");
                      c = b("DOMEventListener").add(c, "click", d);
                      n._overlayListeners.push(c);
                    }
                    n._loaderEl != null && n._makeActive(n._loaderEl);
                  },
                  _hideLoader: function () {
                    n._loaderEl &&
                      n._loaderEl == n._active &&
                      (n._loaderEl.style.top = "-10000px");
                  },
                  _makeActive: function (a) {
                    n._setDialogSizes(),
                      n._lowerActive(),
                      (n._active = a),
                      b("sdk.Runtime").isEnvironment(
                        b("sdk.Runtime").ENVIRONMENTS.CANVAS
                      ) &&
                        b("sdk.Canvas.Environment").getPageInfo(function (a) {
                          n._centerActive(a);
                        }),
                      n._centerActive();
                  },
                  _lowerActive: function () {
                    if (!n._active) return;
                    n._active.style.top = "-10000px";
                    n._active = null;
                  },
                  _removeStacked: function (a) {
                    n._stack = n._stack.filter(function (b) {
                      return b != a;
                    });
                  },
                  _centerActive: function (a) {
                    var c = n._active;
                    if (!c) return;
                    b("sdk.DialogUtils").setDialogPositionToCenter(
                      c,
                      n.isTabletStyle(),
                      a
                    );
                  },
                  _setDialogSizes: function (a) {
                    a === void 0 && (a = !1);
                    if (!b("sdk.UA").mobile()) return;
                    for (var c in n._dialogs)
                      if (Object.prototype.hasOwnProperty.call(n._dialogs, c)) {
                        var d = document.getElementById(c);
                        d &&
                          ((d.style.width = n.getDefaultSize().width + "px"),
                          a ||
                            (d.style.height =
                              n.getDefaultSize().height + "px"));
                      }
                  },
                  getDefaultSize: function () {
                    if (b("sdk.UA").mobile()) {
                      var a = l();
                      if (a) {
                        var c;
                        if (
                          (c =
                            (c = b("sdk.DOM").getViewportInfo()) == null
                              ? void 0
                              : c.width) != null
                            ? c
                            : i <= a.width
                        ) {
                          a.width =
                            (c =
                              (c = b("sdk.DOM").getViewportInfo()) == null
                                ? void 0
                                : c.width) != null
                              ? c
                              : i - g;
                        }
                        if (
                          (c =
                            (c = b("sdk.DOM").getViewportInfo()) == null
                              ? void 0
                              : c.height) != null
                            ? c
                            : h <= a.height
                        ) {
                          a.height =
                            (c =
                              (c = b("sdk.DOM").getViewportInfo()) == null
                                ? void 0
                                : c.height) != null
                              ? c
                              : h - g;
                        }
                        return a;
                      }
                      if (b("sdk.UA").ipad()) return { width: i, height: h };
                      if (b("sdk.UA").android())
                        return {
                          width: screen.availWidth,
                          height: screen.availHeight,
                        };
                      else {
                        c = window.innerWidth;
                        a = window.innerHeight;
                        var d = c / a > 1.2;
                        return {
                          width: c,
                          height: Math.max(a, d ? screen.width : screen.height),
                        };
                      }
                    }
                    return { width: k, height: j };
                  },
                  _handleOrientationChange: function () {
                    var a;
                    n._availScreenWidth =
                      (a =
                        (a = b("sdk.DOM").getViewportInfo()) == null
                          ? void 0
                          : a.width) != null
                        ? a
                        : i;
                    if (n.isTabletStyle())
                      n._setDialogSizes(!0),
                        n._centerActive(),
                        n._setDialogOverlayStyle();
                    else {
                      a = n.getDefaultSize().width;
                      for (var c in n._dialogs)
                        if (
                          Object.prototype.hasOwnProperty.call(n._dialogs, c)
                        ) {
                          var d = document.getElementById(c);
                          d && (d.style.width = a + "px");
                        }
                    }
                  },
                  _addOrientationHandler: function () {
                    var a;
                    if (!b("sdk.UA").mobile()) return;
                    n._availScreenWidth =
                      (a =
                        (a = b("sdk.DOM").getViewportInfo()) == null
                          ? void 0
                          : a.width) != null
                        ? a
                        : i;
                    b("sdk.DialogUtils").addMobileOrientationChangeAction(
                      n._handleOrientationChange
                    );
                  },
                  create: function (a) {
                    var c = b("sdk.DialogUtils").setupNewDialog(a);
                    b("sdk.Content").append(c.dialogElement);
                    a.visible && n.show(c.dialogElement);
                    typeof a.styles === "object" &&
                      ES(
                        "Object",
                        "assign",
                        !1,
                        c.dialogElement.style,
                        a.styles
                      );
                    return c.contentRoot;
                  },
                  show: function (a) {
                    var b = n._findRoot(a);
                    b != null &&
                      (n._removeStacked(b),
                      n._hideLoader(),
                      n._makeActive(b),
                      n._stack.push(b),
                      "fbCallID" in a &&
                        n
                          .get(a.fbCallID)
                          .inform("iframe_show")
                          .trackEvent("show"));
                  },
                  hide: function (a) {
                    var c = n._findRoot(a);
                    n._hideLoader();
                    c == n._active &&
                      (n._lowerActive(),
                      b("sdk.DialogUtils").onDialogHideCleanup(
                        n.isTabletStyle()
                      ),
                      n._hideTabletOverlay(),
                      "fbCallID" in a &&
                        n
                          .get(a.fbCallID)
                          .inform("iframe_hide")
                          .trackEvent("hide"));
                  },
                  remove: function (a) {
                    var c = n._findRoot(a);
                    if (c) {
                      a = n._active == c;
                      n._removeStacked(c);
                      a
                        ? (n._hideLoader(),
                          n._stack.length > 0
                            ? n.show(n._stack.pop())
                            : (n._lowerActive(),
                              b("sdk.DialogUtils").onDialogHideCleanup(
                                n.isTabletStyle()
                              ),
                              n._hideTabletOverlay()))
                        : n._active === null &&
                          n._stack.length > 0 &&
                          n.show(n._stack.pop());
                      window.setTimeout(function () {
                        var a;
                        (a = c.parentNode) == null ? void 0 : a.removeChild(c);
                      }, 3e3);
                    }
                  },
                  isActive: function (a) {
                    a = n._findRoot(a);
                    return a != null && a === n._active;
                  },
                  isTabletStyle: function () {
                    if (!b("sdk.UA").mobile()) return !1;
                    var a = l();
                    return a != null && (a.height >= h || a.width >= i);
                  },
                };
              a = n;
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.Frictionless",
            ["sdk.Auth", "sdk.Dialog", "sdk.Event", "sdk.api"],
            function (a, b, c, d, e, f) {
              var g = {
                _allowedRecipients: {},
                _useFrictionless: !1,
                _updateRecipients: function () {
                  (g._allowedRecipients = {}),
                    b("sdk.api")(
                      "/me/apprequestformerrecipients",
                      function (a) {
                        if (!a || a.error) return;
                        a.data.forEach(function (a) {
                          g._allowedRecipients[a.recipient_id] = !0;
                        });
                      }
                    );
                },
                init: function () {
                  (g._useFrictionless = !0),
                    b("sdk.Auth").getLoginStatus(function (a) {
                      a.status == "connected" && g._updateRecipients();
                    }),
                    b("sdk.Event").subscribe("auth.login", function (a) {
                      a.authResponse && g._updateRecipients();
                    });
                },
                _processRequestResponse: function (a, c) {
                  return function (d) {
                    var e = d && d.updated_frictionless;
                    g._useFrictionless && e && g._updateRecipients();
                    d &&
                      (!c &&
                        d.frictionless &&
                        (b("sdk.Dialog")._hideLoader(),
                        b("sdk.Dialog")._restoreBodyPosition(),
                        b("sdk.Dialog")._hideIPadOverlay()),
                      delete d.frictionless,
                      delete d.updated_frictionless);
                    a && a(d);
                  };
                },
                isAllowed: function (a) {
                  if (!a) return !1;
                  if (typeof a === "number") return a in g._allowedRecipients;
                  typeof a === "string" && (a = a.split(","));
                  a = a.map(function (a) {
                    return String(a).trim();
                  });
                  var b = !0,
                    c = !1;
                  a.forEach(function (a) {
                    (b = b && a in g._allowedRecipients), (c = !0);
                  });
                  return b && c;
                },
              };
              b("sdk.Event").subscribe("init:post", function (a) {
                a.frictionlessRequests && g.init();
              });
              e.exports = g;
            },
            null
          );
          __d(
            "resolveURI",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                if (a == null || a === "") return window.location.href;
                var b = document.createElement("a");
                b.href = a;
                return b.href;
              }
            },
            null
          );
          __d(
            "sdk.NativeExtensions",
            ["DOMEventListener", "Log", "sdk.UA"],
            function (a, b, c, d, e, f) {
              f.onReady = a;
              var g = "fbNativeExtensionsReady";
              function h() {
                return window._FBSdkExtensions &&
                  window._FBSdkExtensions.jsonRPC &&
                  window._FBSdkExtensions.initializeCallbackHandler &&
                  window._FBSdkExtensions.supportsDialog
                  ? window._FBSdkExtensions
                  : null;
              }
              function a(a) {
                if (!b("sdk.UA").facebookInAppBrowser()) {
                  b("Log").error(
                    "FB.NativeExtensions.onReady only works when the page is rendered in a WebView of the native Facebook app."
                  );
                  return;
                }
                var c = h();
                if (c) {
                  a(c);
                  return;
                }
                var d = !1;
                c = function c() {
                  var e = h();
                  if (d || !e) return;
                  d = !0;
                  a(e);
                  b("DOMEventListener").remove(window, g, c);
                };
                b("DOMEventListener").add(window, g, c);
              }
            },
            null
          );
          __d(
            "sdk.Extensions",
            ["JSONRPC", "Queue", "sdk.NativeExtensions", "sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.supportsDialog = a;
              var g = new (b("Queue"))(),
                h = new (b("JSONRPC"))(function (a) {
                  g.enqueue(a);
                }),
                i = new (b("Queue"))();
              i.start(function (a) {
                h.read(a);
              });
              var j = null;
              b("sdk.UA").facebookInAppBrowser() &&
                b("sdk.NativeExtensions").onReady(function (a) {
                  (j = a),
                    (window._FBBrowserCallbackHandler = function (a) {
                      i.enqueue(ES("JSON", "stringify", !1, a));
                    }),
                    a.initializeCallbackHandler(
                      ES("JSON", "stringify", !1, {
                        name: "_FBBrowserCallbackHandler",
                      })
                    ),
                    g.start(function (b) {
                      a.jsonRPC(b);
                    });
                });
              c = h.local;
              f.local = c;
              d = h.remote;
              f.remote = d;
              e = ES(h.stub, "bind", !0, h);
              f.stub = e;
              function a(a) {
                return !!j && j.supportsDialog(a);
              }
            },
            null
          );
          __d(
            "sdk.Native",
            ["Log", "sdk.UA"],
            function (a, b, c, d, e, f) {
              var g = "fbNativeReady";
              a = {
                onready: function (a) {
                  if (!b("sdk.UA").nativeApp()) {
                    b("Log").error(
                      "FB.Native.onready only works when the page is rendered in a WebView of the native Facebook app. Test if this is the case calling FB.UA.nativeApp()"
                    );
                    return;
                  }
                  window.__fbNative &&
                    !this.nativeReady &&
                    ES("Object", "assign", !1, this, window.__fbNative);
                  if (this.nativeReady) a();
                  else {
                    var c = function b() {
                      window.removeEventListener(g, b), this.onready(a);
                    };
                    window.addEventListener(g, c, !1);
                  }
                },
              };
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.Popup",
            [
              "sdk.Content",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.UA",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              f.popup = a;
              function a(a, c) {
                var d = g({
                    name: a.name,
                    height: a.size.height,
                    width: a.size.width,
                    isOAuth: c,
                  }),
                  e;
                a.post
                  ? ((e = window.open("about:blank", a.id, d)),
                    e &&
                      b("sdk.Content").submitToTarget({
                        url: a.url,
                        target: a.id,
                        params: a.params,
                      }))
                  : (e = window.open(a.url, a.id, d));
                if (
                  !e &&
                  b("sdk.feature")("popup_blocker_scribe_logging", !0)
                ) {
                  d = c ? "POPUP_MAYBE_BLOCKED_OAUTH" : "POPUP_MAYBE_BLOCKED";
                  b("sdk.Scribe").log("jssdk_error", {
                    appId: b("sdk.Runtime").getClientID(),
                    error: d,
                    extra: { call: a.name },
                  });
                }
                return e;
              }
              function g(a) {
                var c = window.screenX,
                  d = window.screenY,
                  e = window.outerWidth,
                  f = window.outerHeight,
                  g = b("sdk.UA").mobile() ? 0 : a.width,
                  h = b("sdk.UA").mobile() ? 0 : a.height;
                c = c < 0 ? window.screen.width + c : c;
                c = c + (e - g) / 2;
                e = d + (f - h) / 2.5;
                d = [];
                g !== null && d.push("width=" + g);
                h !== null && d.push("height=" + h);
                d.push("left=" + c);
                d.push("top=" + e);
                d.push("scrollbars=1");
                a.isOAuth &&
                  (d.push("toolbar=0"),
                  (!b("sdk.UA").chrome() || b("sdk.UA").chrome() < 59) &&
                    d.push("location=1"));
                return d.join(",");
              }
            },
            null
          );
          __d(
            "isFacebookURI",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              var g = null,
                h = ["http", "https"];
              function a(a) {
                g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
                if (a.isEmpty() && a.toString() !== "#") return !1;
                return !a.getDomain() && !a.getProtocol()
                  ? !0
                  : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain());
              }
              a.setRegex = function (a) {
                g = a;
              };
            },
            null
          );
          __d(
            "isInstagramURI",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              var g = null;
              function a(a) {
                if (a.isEmpty() && a.toString() !== "#") return !1;
                if (!a.getDomain() && !a.getProtocol()) return !1;
                if (a.getProtocol() !== "https") return !1;
                g || (g = new RegExp("(^|\\.)instagram\\.com$", "i"));
                return g.test(a.getDomain());
              }
            },
            null
          );
          __d(
            "resolveWindow",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                if (a == null) return null;
                var b = window;
                a = a.split(".");
                try {
                  for (var c = 0; c < a.length; c++) {
                    var d = a[c],
                      e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                    if (e) b = b.frames[e[1]];
                    else if (d === "opener" || d === "parent" || d === "top")
                      b = b[d];
                    else return null;
                  }
                } catch (a) {
                  return null;
                }
                return b;
              }
            },
            null
          );
          __d(
            "sdk.XD",
            [
              "JSSDKXDConfig",
              "Log",
              "QueryString",
              "Queue",
              "UrlMap",
              "guid",
              "isFacebookURI",
              "isInstagramURI",
              "resolveWindow",
              "sdk.Event",
              "sdk.RPC",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.URI",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f) {
              var g = new (b("Queue"))(),
                h = "parent",
                i = null,
                j = /^https:\/\/.*\.(facebook|instagram)\.com$/;
              a = b("JSSDKXDConfig").useCdn ? "cdn" : "www";
              var k = b("UrlMap").resolve(a) + b("JSSDKXDConfig").XXdUrl;
              c = function () {
                if ("origin" in location)
                  if (location.origin && location.origin != "null")
                    return location.origin;
                  else if (window !== window.parent)
                    try {
                      var a = parent.location.origin;
                      if (a && a != "null") return a;
                    } catch (a) {}
                return location.protocol + "//" + location.host;
              };
              var l = b("guid")(),
                m = c(),
                n = !1,
                o = new (b("Queue"))();
              b("sdk.RPC").setInQueue(o);
              function p(a) {
                b("Log").info("Remote XD can talk to facebook.com (%s)", a),
                  b("sdk.Runtime").setEnvironment(
                    a === "canvas"
                      ? b("sdk.Runtime").ENVIRONMENTS.CANVAS
                      : b("sdk.Runtime").ENVIRONMENTS.PAGETAB
                  );
              }
              function q(a, c) {
                if (!c) {
                  b("Log").error("No senderOrigin");
                  throw new Error();
                }
                switch (a.xd_action) {
                  case "plugin_ready":
                    if (typeof a.name === "string") {
                      var d = a.name;
                      b("Log").info("Plugin %s ready from %s", d, c);
                      if (j.test(c)) {
                        var e = b("Queue").get(d, {});
                        e.start(function (a) {
                          if (a == null) {
                            b("Log").warn(
                              "Discarding null message from %s to %s on %s",
                              c,
                              d,
                              m
                            );
                            return;
                          }
                          window.frames[d] != null
                            ? window.frames[d].postMessage(
                                {
                                  xdArbiterHandleMessage: !0,
                                  message: a,
                                  origin: m,
                                },
                                c
                              )
                            : b("Log").info(
                                "Message discarded for plugin at window.frames[%s] which may have been removed by a new XFBML.parse() call.",
                                d
                              );
                        });
                      } else {
                        b("Log").error(
                          "Plugin attempted to register from non-Facebook domain %s",
                          c
                        );
                        return;
                      }
                    } else
                      b("Log").error(
                        "plugin_ready message received without a name"
                      );
                    break;
                }
                a.data != null &&
                  (typeof a.data === "object" || typeof a.data === "string") &&
                  r(a.data, c);
              }
              function r(a, c) {
                if (
                  c != null &&
                  c !== "native" &&
                  !b("isFacebookURI")(new (b("sdk.URI"))(c)) &&
                  !b("isInstagramURI")(new (b("sdk.URI"))(c))
                )
                  return;
                if (typeof a === "string") {
                  if (/^FB_RPC:/.test(a)) {
                    o.enqueue(a.substring(7));
                    return;
                  }
                  if (a.substring(0, 1) == "{")
                    try {
                      a = ES("JSON", "parse", !1, a);
                    } catch (c) {
                      b("Log").warn("Failed to decode %s as JSON", a);
                      return;
                    }
                  else a = b("QueryString").decode(a);
                }
                a = a;
                if (a.xd_action) {
                  q(a, c);
                  return;
                }
                if (typeof a.cb === "string") {
                  c = v._callbacks[a.cb];
                  v._forever[a.cb] || delete v._callbacks[a.cb];
                  c && c(a);
                }
              }
              function s(a, c) {
                a == "facebook"
                  ? ((c.relation = h),
                    g.enqueue(c),
                    !b("sdk.Runtime").isCanvasEnvironment() &&
                      !g.isStarted() &&
                      u(i))
                  : b("Queue").get(a, {}).enqueue(c);
              }
              b("sdk.RPC")
                .getOutQueue()
                .start(function (a) {
                  g.enqueue("FB_RPC:" + a);
                });
              function t(a) {
                if (n) return;
                n = !0;
                window.addEventListener("message", function (a) {
                  var c = a.data,
                    d = a.origin || "native";
                  if (!/^(https?:\/\/|native$)/.test(d)) {
                    b("Log").debug(
                      "Received message from invalid origin type: %s",
                      d
                    );
                    return;
                  }
                  if (!j.test(d)) return;
                  if (typeof c === "string") r(c, d);
                  else {
                    if (
                      a.source == parent &&
                      a.data.xdArbiterRegisterAck &&
                      j.test(d)
                    ) {
                      typeof a.data.xdArbiterRegisterAck === "string" &&
                        a.data.xdArbiterRegisterAck !== "" &&
                        p(a.data.xdArbiterRegisterAck);
                      g.isStarted() ||
                        g.start(function (a) {
                          if (a == null) {
                            b("Log").warn(
                              "Discarding null message from %s to %s",
                              m,
                              d
                            );
                            return;
                          }
                          var c = parent;
                          typeof a === "object" &&
                            typeof a.relation === "string" &&
                            (c = b("resolveWindow")(a.relation));
                          ((c = c) != null ? c : parent).postMessage(
                            {
                              xdArbiterHandleMessage: !0,
                              message: a,
                              origin: m,
                            },
                            d
                          );
                        });
                      return;
                    }
                    b("Log").warn(
                      "Received message of type %s from %s, expected a string. %s",
                      typeof c,
                      m,
                      ES("JSON", "stringify", !1, c)
                    );
                    return;
                  }
                });
                b("sdk.Runtime").isCanvasEnvironment() && u(a);
              }
              function u(a) {
                var c;
                n || t();
                if (window.parent != top) {
                  b("Log").warn(
                    "cannot deliver messages to facebook unless window.parent is top and facebook.com."
                  );
                  return;
                }
                var d =
                  (c = b("sdk.feature")("xd_timeout", 6e4)) != null ? c : 6e4;
                c = 200;
                var e = 0,
                  f = d / c,
                  h = function () {
                    return parent.postMessage(
                      { xdArbiterRegister: !0, xdProxyName: a, origin: m },
                      "*"
                    );
                  };
                e = window.setInterval(function () {
                  if (!g.isStarted() && f > 0)
                    f--, b("Log").debug("resending xdArbiterRegister"), h();
                  else {
                    window.clearInterval(e);
                    if (f === 0) {
                      b("sdk.Scribe").log("jssdk_error", {
                        appId: b("sdk.Runtime").getClientID(),
                        error: "XD_FB_QUEUE_INITIALIZATION",
                        extra: {
                          message: "Failed to initialize in " + d + "ms",
                        },
                      });
                      b("Log").error("xdAbiterRegisterAck not received");
                      return;
                    }
                  }
                }, c);
              }
              var v = {
                rpc: b("sdk.RPC"),
                _callbacks: {},
                _forever: {},
                _channel: l,
                _origin: m,
                onMessage: r,
                init: t,
                sendToFacebook: s,
                inform: function (a, b, c, d) {
                  s("facebook", {
                    method: a,
                    params: ES("JSON", "stringify", !1, b || {}),
                    behavior: d || "p",
                    relation: c,
                  });
                },
                handler: function (a, c, d, e) {
                  a =
                    "#" +
                    b("QueryString").encode({
                      cb: v.registerCallback(a, d, e),
                      origin: m + "/" + l,
                      domain: location.hostname,
                      relation: c || "opener",
                    });
                  return k + a;
                },
                registerCallback: function (a, c, d) {
                  d = d || b("guid")();
                  c && (v._forever[d] = !0);
                  v._callbacks[d] = a;
                  return d;
                },
              };
              b("sdk.Event").subscribe("init:post", function (a) {
                (i = a.xdProxyName), t(a.xdProxyName);
              });
              e.exports = v;
            },
            null
          );
          __d(
            "sdk.modFeatureCheck",
            ["JSSDKConfig"],
            function (a, b, c, d, e, f) {
              f.forIDs = a;
              function a(a, c, d) {
                d === void 0 && (d = !1);
                if (
                  b("JSSDKConfig").features &&
                  a in b("JSSDKConfig").features
                ) {
                  var e = b("JSSDKConfig").features[a];
                  if (typeof e === "object" && Array.isArray(e))
                    return c.some(function (a) {
                      return e.some(function (b) {
                        return a % b === 0;
                      });
                    });
                }
                return d;
              }
            },
            null
          );
          __d(
            "sdk.openMessenger",
            ["sdk.UA"],
            function (a, b, c, d, e, f) {
              "use strict";
              e.exports = a;
              var g = "https://itunes.apple.com/us/app/messenger/id454638411",
                h =
                  "https://play.google.com/store/apps/details?id=com.facebook.orca",
                i = 3e3;
              function a(a) {
                var c,
                  d,
                  e = a.link;
                a = a.app_id;
                b("sdk.UA").android()
                  ? ((c =
                      "intent://share/#Intent;package=com.facebook.orca;scheme=fb-messenger;S.android.intent.extra.TEXT=" +
                      encodeURIComponent(e) +
                      ";S.trigger=send_plugin;"),
                    a &&
                      (c += "S.platform_app_id=" + encodeURIComponent(a) + ";"),
                    (c += "end"),
                    (d = h))
                  : ((c = "fb-messenger://share?link=" + encodeURIComponent(e)),
                    a && (c += "&app_id=" + encodeURIComponent(a)),
                    (d = g));
                setTimeout(function () {
                  window.location.href = d;
                }, i);
                window.location.href = c;
              }
            },
            null
          );
          __d(
            "sdk.UIServer",
            [
              "Log",
              "QueryString",
              "UrlMap",
              "createObjectFrom",
              "flattenObject",
              "guid",
              "insertIframe",
              "resolveURI",
              "sdk.Auth",
              "sdk.Content",
              "sdk.DOM",
              "sdk.Dialog",
              "sdk.Event",
              "sdk.Extensions",
              "sdk.Frictionless",
              "sdk.Impressions",
              "sdk.Native",
              "sdk.Popup",
              "sdk.RPC",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.XD",
              "sdk.api",
              "sdk.fbt",
              "sdk.feature",
              "sdk.getContextType",
              "sdk.modFeatureCheck",
              "sdk.openMessenger",
            ],
            function (a, b, c, d, e, f) {
              var g = {
                transform: function (a) {
                  if (
                    a.params.display === "touch" &&
                    o.canIframe(a.params) &&
                    window.postMessage
                  ) {
                    a.params.channel = o._xdChannelHandler(a.id, "parent");
                    b("sdk.UA").nativeApp() || (a.params.in_iframe = 1);
                    return a;
                  } else return o.genericTransform(a);
                },
                getXdRelation: function (a) {
                  var b = a.display;
                  return b === "touch" && window.postMessage && a.in_iframe
                    ? "parent"
                    : o.getXdRelation(a);
                },
              };
              function h(a) {
                return (
                  o.isOAuth(a) && b("sdk.Extensions").supportsDialog("oauth")
                );
              }
              function i(a) {
                return (
                  o.isOAuth(a) &&
                  (a.is_account_link === !0 || a.is_account_link === "true") &&
                  b("sdk.Extensions").supportsDialog("accountLink")
                );
              }
              function j(a) {
                if (!b("sdk.Runtime").getClientID()) {
                  b("Log").error("FB.login() called before FB.init().");
                  return;
                }
                if (
                  b("sdk.Auth").getAuthResponse() &&
                  !a.params.scope &&
                  !a.params.asset_scope &&
                  !a.params.auth_type
                ) {
                  a.params.plugin_prepare ||
                    (b("Log").error(
                      "FB.login() called when user is already connected."
                    ),
                    a.cb &&
                      a.cb({
                        status: b("sdk.Runtime").getLoginStatus(),
                        authResponse: b("sdk.Auth").getAuthResponse(),
                      }));
                  return;
                }
                var c = a.cb,
                  d = a.id;
                delete a.cb;
                a &&
                  a.params &&
                  !a.params.logger_id &&
                  (a.params.logger_id = b("guid")());
                a && a.params && !a.params.cbt && (a.params.cbt = Date.now());
                a.params.fx_app === "instagram" &&
                  !a.params.scope &&
                  (a.params.scope = "public_profile");
                var e = a.params.auth_type;
                e = e && ES(e, "includes", !0, "reauthenticate");
                var f = { token: !0, signed_request: !0, graph_domain: !0 };
                f = Object.keys(
                  ES(
                    "Object",
                    "assign",
                    !1,
                    a.params.response_type
                      ? b("createObjectFrom")(a.params.response_type.split(","))
                      : {},
                    f
                  )
                ).join(",");
                a.params.display === "async"
                  ? (ES("Object", "assign", !1, a.params, {
                      client_id: b("sdk.Runtime").getClientID(),
                      origin: b("sdk.getContextType")(),
                      response_type: f,
                      domain: location.hostname,
                    }),
                    (a.cb = b("sdk.Auth").xdResponseWrapper(
                      c,
                      b("sdk.Auth").getAuthResponse(),
                      "permissions.oauth",
                      a.params
                    )))
                  : (e &&
                      o._xdNextHandler(
                        function (a) {
                          c({ authResponse: null, status: "not_authorized" });
                        },
                        d,
                        a.params.plugin_prepare ? "opener.parent" : "opener",
                        !0
                      ),
                    ES("Object", "assign", !1, a.params, {
                      client_id: b("sdk.Runtime").getClientID(),
                      redirect_uri: b("resolveURI")(
                        o.xdHandler(
                          c,
                          d,
                          a.params.plugin_prepare ? "opener.parent" : "opener",
                          b("sdk.Auth").getAuthResponse(),
                          "permissions.oauth",
                          !e,
                          a.params
                        )
                      ),
                      origin: b("sdk.getContextType")(),
                      response_type: f,
                      domain: location.hostname,
                    }));
                d = {
                  logger_id: a.params.logger_id,
                  action: "client_login_start",
                  client_funnel_version: b("sdk.feature")(
                    "oauth_funnel_logger_version",
                    1
                  ),
                  cbt_delta: 0,
                };
                e = a.params && a.params.tp && a.params.tp !== "unspecified";
                !a.params.plugin_prepare &&
                  !e &&
                  b("sdk.Impressions").log(117, { payload: d });
                return a;
              }
              a = {
                "stream.share": {
                  size: { width: 670, height: 340 },
                  url: "sharer.php",
                  transform: function (a) {
                    a.params.u || (a.params.u = window.location.toString());
                    a.params.display = "popup";
                    return a;
                  },
                },
                gaming_friendfinder: {
                  url: "gaming/me/friendfinder/",
                  transform: function (a) {
                    if (!b("sdk.Runtime").getClientID()) {
                      b("Log").error("FriendFinder called before FB.init().");
                      return;
                    }
                    a.url += b("sdk.Runtime").getClientID();
                    a.size = { width: 400, height: 800 };
                    return a;
                  },
                },
                gaming_media_library: {
                  url: "gaming/me/media_asset/",
                  transform: function (a) {
                    a.url += a.params.media_id;
                    a.size = { width: 400, height: 800 };
                    return a;
                  },
                },
                apprequests: {
                  transform: function (a) {
                    a = g.transform(a);
                    a.params.frictionless =
                      b("sdk.Frictionless") &&
                      b("sdk.Frictionless")._useFrictionless;
                    a.params.frictionless &&
                      (b("sdk.Frictionless").isAllowed(a.params.to) &&
                        ((a.params.display = "iframe"),
                        (a.params.in_iframe = !0),
                        (a.hideLoader = !0)),
                      (a.cb = b("sdk.Frictionless")._processRequestResponse(
                        a.cb,
                        a.hideLoader
                      )));
                    a.closeIcon = !1;
                    return a;
                  },
                  getXdRelation: g.getXdRelation,
                },
                "permissions.oauth": {
                  url: "dialog/oauth",
                  size: {
                    width: b("sdk.UA").mobile() ? null : 600,
                    height: b("sdk.UA").mobile() ? null : 679,
                  },
                  transform: function (a) {
                    return j(a);
                  },
                },
                "permissions.ig_oauth": {
                  url: "oauth/authorize",
                  size: {
                    width: b("sdk.UA").mobile() ? null : 600,
                    height: b("sdk.UA").mobile() ? null : 679,
                  },
                  transform: function (a) {
                    return j(a);
                  },
                },
                "auth.logout": {
                  transform: function (a) {
                    !b("sdk.Runtime").getClientID()
                      ? b("Log").error(
                          "FB.logout() called before calling FB.init()."
                        )
                      : !b("sdk.Auth").getAuthResponse()
                      ? b("Log").error(
                          "FB.logout() called without an access token."
                        )
                      : b("sdk.Auth").logout(a.cb);
                  },
                },
                "login.status": {
                  transform: function (a) {
                    b("sdk.Auth").getLoginStatus(a.cb);
                  },
                },
                pay: {
                  size: { width: 555, height: 120 },
                  connectDisplay: "popup",
                },
                live_broadcast: {
                  transform: function (a) {
                    a.params.phase === "create" &&
                      (a.size = { width: 480, height: 280 });
                    a.params.phase === "publish" &&
                      (a.size = { width: 772, height: 540 });
                    return a;
                  },
                  require_access_token: !0,
                },
                boost: {
                  transform: function (a) {
                    a.size = { width: 960, height: 760 };
                    a.params.display = "popup";
                    return a;
                  },
                },
                share_referral: { size: { width: 482, height: 725 } },
              };
              var k = {},
                l = 0;
              function m(a, b) {
                k[b] = !0;
                return function (c) {
                  delete k[b], a(c);
                };
              }
              function n(a) {
                var b = a.method.toLowerCase();
                return b === "pay" && a.display === "async" ? !0 : !1;
              }
              var o = {
                Methods: a,
                _oauthMethodNameSet: new Set([
                  "permissions.oauth",
                  "permissions.request",
                  "permissions.ig_oauth",
                ]),
                _loadedNodes: {},
                _defaultCb: {},
                _resultToken: '"xxRESULTTOKENxx"',
                genericTransform: function (a) {
                  (a.params.display == "dialog" ||
                    a.params.display == "iframe") &&
                    ES(
                      "Object",
                      "assign",
                      !1,
                      a.params,
                      {
                        display: "iframe",
                        channel: o._xdChannelHandler(a.id, "parent.parent"),
                      },
                      !0
                    );
                  return a;
                },
                isOAuth: function (a) {
                  return (
                    o._oauthMethodNameSet.has(a.method) || a.method == "oauth"
                  );
                },
                checkOauthDisplay: function (a) {
                  var c = a.scope || a.perms || b("sdk.Runtime").getScope();
                  return !c ? a.display : "popup";
                },
                prepareCall: function (a, c) {
                  var d = a.method.toLowerCase(),
                    e = Object.prototype.hasOwnProperty.call(o.Methods, d)
                      ? ES("Object", "assign", !1, {}, o.Methods[d])
                      : {},
                    f = a.id || b("guid")(),
                    g = !0;
                  ES("Object", "assign", !1, a, {
                    app_id: b("sdk.Runtime").getClientID(),
                    locale: b("sdk.Runtime").getLocale(),
                    sdk: "joey",
                    access_token:
                      (g && b("sdk.Runtime").getAccessToken()) || void 0,
                  });
                  a.display = o.getDisplayMode(e, a);
                  e.url || (e.url = "dialog/" + d);
                  (e.url == "dialog/oauth" ||
                    e.url == "dialog/permissions.request") &&
                    (a.display == "iframe" ||
                      (a.display == "touch" && a.in_iframe)) &&
                    (a.display = o.checkOauthDisplay(a));
                  if (e.url == "dialog/oauth") {
                    if (
                      l >=
                      ((g = b("sdk.feature")(
                        "max_oauth_dialog_retries",
                        100
                      )) != null
                        ? g
                        : 100)
                    ) {
                      b("Log").error(
                        "Your request to oauth has exceeded the rate limit, please try again later"
                      );
                      return;
                    }
                    l++;
                  }
                  a.display == "popup" &&
                    !e.require_access_token &&
                    delete a.access_token;
                  if (
                    b("sdk.Runtime").getIsVersioned() &&
                    e.url.substring(0, 7) === "dialog/"
                  ) {
                    g = a.version || b("sdk.Runtime").getVersion();
                    g != null &&
                      g !== "" &&
                      g !== "null" &&
                      (e.url = g + "/" + e.url);
                  }
                  if (n(a)) {
                    if (k[d]) {
                      g = 'Dialog "' + d + '" is trying to run more than once.';
                      b("Log").warn(g);
                      c({ error_code: -100, error_message: g });
                      return;
                    }
                    c = m(c, d);
                  }
                  a.fx_app || (a.fx_app = "facebook");
                  g = {
                    cb: c,
                    id: f,
                    size: e.size || o.getDefaultSize(),
                    url:
                      b("UrlMap").resolve(
                        a.fx_app === "instagram"
                          ? "www_instagram"
                          : a.display == "touch"
                          ? "m"
                          : "www"
                      ) +
                      "/" +
                      e.url,
                    params: a,
                    name: d,
                    dialog: b("sdk.Dialog").newInstance(f, a.display),
                  };
                  c = e.transform ? e.transform : o.genericTransform;
                  if (c) {
                    g = c(g);
                    if (!g) return;
                  }
                  a.display === "touch" &&
                    a.in_iframe &&
                    (g.params.parent_height = window.innerHeight);
                  d = e.getXdRelation || o.getXdRelation;
                  c = d(g.params);
                  !(g.id in o._defaultCb) &&
                    !("next" in g.params) &&
                    !("redirect_uri" in g.params) &&
                    (g.params.next = o._xdResult(g.cb, g.id, c, !0));
                  (c === "parent" || c === "opener") &&
                    ES(
                      "Object",
                      "assign",
                      !1,
                      g.params,
                      {
                        channel_url: o._xdChannelHandler(
                          f,
                          c === "parent" ? "parent.parent" : "opener"
                        ),
                      },
                      !0
                    );
                  g = o.prepareParams(g);
                  return g;
                },
                prepareParams: function (a) {
                  a.params.display !== "async" && delete a.params.method;
                  a.params.kid_directed_site =
                    b("sdk.Runtime").getKidDirectedSite() ||
                    a.params.kid_directed_site;
                  a.params = b("flattenObject")(a.params);
                  var c = b("QueryString").encode(a.params);
                  !b("sdk.UA").nativeApp() && o.urlTooLongForIE(a.url + "?" + c)
                    ? (a.post = !0)
                    : c && (a.url += "?" + c);
                  return a;
                },
                urlTooLongForIE: function (a) {
                  return (
                    b("sdk.UA").ie() && b("sdk.UA").ie() <= 8 && a.length > 2048
                  );
                },
                getDisplayMode: function (a, c) {
                  if (
                    c.display === "hidden" ||
                    c.display === "none" ||
                    c.display === "native"
                  )
                    return c.display;
                  var d =
                    b("sdk.Runtime").isEnvironment(
                      b("sdk.Runtime").ENVIRONMENTS.CANVAS
                    ) ||
                    b("sdk.Runtime").isEnvironment(
                      b("sdk.Runtime").ENVIRONMENTS.PAGETAB
                    );
                  if (
                    d &&
                    (b("sdk.modFeatureCheck").forIDs(
                      "force_popup_to_canvas_apps_with_id",
                      [b("sdk.Runtime").getClientID()]
                    ) ||
                      b("sdk.feature")("force_popup_to_all_canvas_app", !1))
                  )
                    return "popup";
                  if (d && !c.display) return "async";
                  if (h(c) || i(c)) return "async";
                  if (b("sdk.UA").mobile() || c.display === "touch")
                    return "touch";
                  if (
                    (c.display == "iframe" || c.display == "dialog") &&
                    !o.canIframe(c)
                  ) {
                    b("Log").error(
                      '"dialog" mode can only be used when the user is connected.'
                    );
                    return "popup";
                  }
                  return a.connectDisplay && !d
                    ? a.connectDisplay
                    : c.display || (o.canIframe(c) ? "dialog" : "popup");
                },
                canIframe: function (a) {
                  return b("sdk.Runtime").getAccessToken();
                },
                getXdRelation: function (a) {
                  a = a.display;
                  if (a === "popup" || a === "touch") return "opener";
                  if (
                    a === "dialog" ||
                    a === "iframe" ||
                    a === "hidden" ||
                    a === "none"
                  )
                    return "parent";
                  return a === "async"
                    ? "parent.frames[" + window.name + "]"
                    : "";
                },
                popup: function (a) {
                  var c = b("sdk.Popup").popup(
                    a,
                    o.isOAuth({ method: a.name })
                  );
                  c &&
                    (o.setLoadedNode(a, c, "popup"),
                    a.id in o._defaultCb && o._popupMonitor());
                },
                setLoadedNode: function (a, b, c) {
                  c === "iframe" && (b.fbCallID = a.id),
                    (b = {
                      node: b,
                      type: c,
                      fbCallID: a.id,
                      method: a.name,
                      params: a.params,
                    }),
                    (o._loadedNodes[a.id] = b);
                },
                getLoadedNode: function (a) {
                  a = typeof a === "object" ? a.id : a;
                  a = o._loadedNodes[a];
                  return a ? a.node : null;
                },
                hidden: function (a) {
                  (a.className = "FB_UI_Hidden"),
                    (a.root = b("sdk.Content").appendHidden(
                      document.createElement("div")
                    )),
                    o._insertIframe(a);
                },
                iframe: function (a) {
                  a.className = "FB_UI_Dialog";
                  var c = function () {
                      var c = ES("JSON", "stringify", !1, {
                        error_code: 4201,
                        error_message: b("sdk.fbt")._(
                          "User canceled the Dialog flow"
                        ),
                      });
                      o._triggerDefault(a.id, c);
                    },
                    d = {
                      onClose: c,
                      closeIcon: a.closeIcon === void 0 ? !0 : a.closeIcon,
                      classes: b("sdk.Dialog").isTabletStyle()
                        ? "centered"
                        : "",
                    };
                  a.root = b("sdk.Dialog").create(d);
                  a.hideLoader || b("sdk.Dialog").showLoader(c, a.size.width);
                  b("sdk.DOM").addCss(a.root, "fb_dialog_iframe");
                  o._insertIframe(a);
                },
                touch: function (a) {
                  a.params && a.params.in_iframe
                    ? a.ui_created
                      ? b("sdk.Dialog").showLoader(function () {
                          o._triggerDefault(a.id, null);
                        }, 0)
                      : o.iframe(a)
                    : b("sdk.UA").nativeApp() && !a.ui_created
                    ? ((a.frame = a.id),
                      b("sdk.Native").onready(function () {
                        o.setLoadedNode(
                          a,
                          b("sdk.Native").open(a.url + "#cb=" + a.frameName),
                          "native"
                        );
                      }),
                      o._popupMonitor())
                    : a.ui_created || o.popup(a);
                },
                async: function (a) {
                  a.params.redirect_uri =
                    location.protocol +
                    "//" +
                    location.host +
                    location.pathname;
                  delete a.params.access_token;
                  var c = function (c) {
                    c = c.result;
                    if (c && c.e2e) {
                      var d = b("sdk.Dialog").get(a.id);
                      d.trackEvents(c.e2e);
                      d.trackEvent("close");
                      delete c.e2e;
                    }
                    a.cb(c);
                  };
                  h(a.params) || i(a.params)
                    ? ((a.params.method = "oauth"),
                      (a.params.redirect_uri = a.params.next),
                      b("sdk.Extensions").remote.showDialog(a.params, c))
                    : b("sdk.RPC").remote.showDialog(a.params, c);
                },
                native: function (a) {
                  b("sdk.openMessenger")(a.params);
                },
                getDefaultSize: function () {
                  return b("sdk.Dialog").getDefaultSize();
                },
                _insertIframe: function (a) {
                  o._loadedNodes[a.id] = !1;
                  var c = function (b) {
                    a.id in o._loadedNodes && o.setLoadedNode(a, b, "iframe");
                  };
                  a.post
                    ? b("insertIframe")({
                        url: "about:blank",
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        onInsert: c,
                        onload: function (c) {
                          b("sdk.Content").submitToTarget({
                            url: a.url,
                            target: c.name,
                            params: a.params,
                          });
                        },
                      })
                    : b("insertIframe")({
                        url: a.url,
                        root: a.root,
                        className: a.className,
                        width: a.size.width,
                        height: a.size.height,
                        id: a.id,
                        name: a.frameName,
                        onInsert: c,
                      });
                },
                _handleResizeMessage: function (a, c) {
                  a = o.getLoadedNode(a);
                  if (!a) return;
                  c.height && (a.style.height = c.height + "px");
                  c.width && c.width != 0 && (a.style.width = c.width + "px");
                  b("sdk.XD").inform(
                    "resize.ack",
                    c || {},
                    "parent.frames[" + a.name + "]"
                  );
                  !b("sdk.Dialog").isActive(a)
                    ? b("sdk.Dialog").show(a)
                    : b("sdk.Dialog")._centerActive();
                },
                _triggerDefault: function (a, b) {
                  var c = { frame: a };
                  b && (c.result = b);
                  o._xdRecv(c, o._defaultCb[a] || function () {});
                },
                _popupMonitor: function () {
                  var a;
                  for (var c in o._loadedNodes)
                    if (
                      Object.prototype.hasOwnProperty.call(o._loadedNodes, c) &&
                      c in o._defaultCb
                    ) {
                      var d = (function () {
                        var d = o._loadedNodes[c];
                        if (d.type != "popup" && d.type != "native")
                          return "continue";
                        var e = d.node;
                        try {
                          e.closed
                            ? o.isOAuth(d)
                              ? b("sdk.Auth").getLoginStatus(function (a) {
                                  a.status === "connected" &&
                                  d.params != null &&
                                  d.params.return_scopes
                                    ? b("sdk.api")(
                                        "/me/permissions",
                                        function (b) {
                                          (!b || b.error) &&
                                            o._triggerDefault(c, a);
                                          var d = "";
                                          for (
                                            var e = 0;
                                            e < b.data.length;
                                            e++
                                          )
                                            b.data[e].status === "granted" &&
                                              (d !== "" && (d += ","),
                                              (d += b.data[e].permission));
                                          a.authResponse.grantedScopes = d;
                                          o._triggerDefault(c, a);
                                        }
                                      )
                                    : (a.status !== "connected" &&
                                        (a.closeWindow = !0),
                                      o._triggerDefault(c, a));
                                }, !0)
                              : o._triggerDefault(c, null)
                            : (a = !0);
                        } catch (a) {}
                      })();
                      if (d === "continue") continue;
                    }
                  a && !o._popupInterval
                    ? (o._popupInterval = window.setInterval(
                        o._popupMonitor,
                        100
                      ))
                    : !a &&
                      o._popupInterval &&
                      (window.clearInterval(o._popupInterval),
                      (o._popupInterval = null));
                },
                _xdChannelHandler: function (a, c) {
                  return b("sdk.XD").handler(
                    function (c) {
                      var d = o.getLoadedNode(a);
                      if (!d) return;
                      if (c.type == "resize") o._handleResizeMessage(a, c);
                      else if (c.type == "hide") b("sdk.Dialog").hide(d);
                      else if (c.type == "rendered") {
                        d = b("sdk.Dialog")._findRoot(d);
                        b("sdk.Dialog").show(d);
                      } else
                        c.type == "fireevent" &&
                          b("sdk.Event").fire(c.event, c);
                    },
                    c,
                    !0,
                    null
                  );
                },
                _xdNextHandler: function (a, c, d, e) {
                  e && (o._defaultCb[c] = a);
                  return (
                    b("sdk.XD").handler(function (b) {
                      o._xdRecv(b, a);
                    }, d) +
                    "&frame=" +
                    c
                  );
                },
                _xdRecv: function (a, c) {
                  var d = o.getLoadedNode(a.frame);
                  if (d)
                    if (d.close)
                      try {
                        d.close(),
                          /iPhone.*Version\/(5|6)/.test(navigator.userAgent) &&
                            RegExp.$1 !== "5" &&
                            window.focus(),
                          o._popupCount--;
                      } catch (a) {}
                    else
                      b("sdk.DOM").containsCss(d, "FB_UI_Hidden")
                        ? window.setTimeout(function () {
                            d.parentNode.parentNode.removeChild(d.parentNode);
                          }, 3e3)
                        : b("sdk.DOM").containsCss(d, "FB_UI_Dialog") &&
                          b("sdk.Dialog").remove(d);
                  delete o._loadedNodes[a.frame];
                  delete o._defaultCb[a.frame];
                  if (a.e2e) {
                    var e = b("sdk.Dialog").get(a.frame);
                    e.trackEvents(a.e2e);
                    e.trackEvent("close");
                    delete a.e2e;
                  }
                  c(a);
                },
                _xdResult: function (a, b, c, d) {
                  return (
                    o._xdNextHandler(
                      function (b) {
                        a &&
                          a(
                            b.result &&
                              b.result != o._resultToken &&
                              ES("JSON", "parse", !1, b.result)
                          );
                      },
                      b,
                      c,
                      d
                    ) +
                    "&result=" +
                    encodeURIComponent(o._resultToken)
                  );
                },
                xdHandler: function (a, c, d, e, f, g, h) {
                  return o._xdNextHandler(
                    b("sdk.Auth").xdResponseWrapper(a, e, f, h),
                    c,
                    d,
                    g
                  );
                },
              };
              b("sdk.Extensions").stub("showDialog");
              b("sdk.RPC").stub("showDialog");
              e.exports = o;
            },
            null
          );
          __d(
            "sdk.ui",
            [
              "Assert",
              "Log",
              "sdk.Impressions",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.UIServer",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f) {
              function a(a, c) {
                b("Assert").isObject(a);
                b("Assert").maybeFunction(c);
                b("sdk.Runtime").getIsVersioned() &&
                  (b("sdk.PlatformVersioning").assertVersionIsSet(),
                  a.version
                    ? b("sdk.PlatformVersioning").assertValidVersion(a.version)
                    : (a.version = b("sdk.Runtime").getVersion()));
                a = ES("Object", "assign", !1, {}, a);
                if (!a.method) {
                  b("Log").error(
                    '"method" is a required parameter for FB.ui().'
                  );
                  return null;
                }
                a.method == "pay.prompt" && (a.method = "pay");
                var d = a.method;
                a.redirect_uri &&
                  (b("Log").warn(
                    "When using FB.ui, you should not specify a redirect_uri."
                  ),
                  delete a.redirect_uri);
                a.fallback_redirect_uri ||
                  (a.fallback_redirect_uri = document.location.href);
                b("sdk.UIServer").isOAuth(d) &&
                  (a.display == "iframe" || a.display == "dialog") &&
                  (a.display = b("sdk.UIServer").checkOauthDisplay(a));
                if (a.display === "native" && d !== "send") {
                  b("Log").error('display type "native" not supported');
                  return null;
                }
                var e = b("sdk.feature")("e2e_tracking", !0);
                e && (a.e2e = {});
                a = b("sdk.UIServer").prepareCall(a, c || function () {});
                if (!a) return null;
                var f = a.params.display;
                f === "dialog"
                  ? (f = "iframe")
                  : f === "none" && (f = "hidden");
                c = b("sdk.UIServer")[f];
                if (!c) {
                  b("Log").error(
                    '"display" must be one of "popup", "dialog", "iframe", "touch", "async", "hidden", or "none"'
                  );
                  return null;
                }
                e &&
                  a.dialog.subscribe("e2e:end", function (a) {
                    (a.method = d),
                      (a.display = f),
                      b("Log").debug("e2e: %s", ES("JSON", "stringify", !1, a)),
                      b("sdk.Impressions").log(114, { payload: a });
                  });
                c(a);
                return a.dialog;
              }
              e.exports = a;
            },
            null
          );
          __d(
            "legacy:fb.auth",
            [
              "FB",
              "Log",
              "sdk.Auth",
              "sdk.Cookie",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.SignedRequest",
              "sdk.ui",
              "sdk.warnInsecure",
            ],
            function (a, b, c, d, e, f) {
              b("FB").provide("", {
                getLoginStatus: function () {
                  b("sdk.warnInsecure")("getLoginStatus");
                  return b("sdk.Auth").getLoginStatus.apply(
                    b("sdk.Auth"),
                    arguments
                  );
                },
                getAuthResponse: function () {
                  b("sdk.warnInsecure")("getAuthResponse");
                  return b("sdk.Auth").getAuthResponse();
                },
                getAccessToken: function () {
                  b("sdk.warnInsecure")("getAccessToken");
                  return b("sdk.Runtime").getAccessToken() || null;
                },
                getUserID: function () {
                  b("sdk.warnInsecure")("getUserID");
                  return (
                    b("sdk.Runtime").getUserID() ||
                    b("sdk.Runtime").getCookieUserID()
                  );
                },
                login: function (a, c) {
                  b("sdk.warnInsecure")("login");
                  c &&
                    c.perms &&
                    !c.scope &&
                    ((c.scope = c.perms),
                    delete c.perms,
                    b("Log").warn(
                      "OAuth2 specification states that 'perms' should now be called 'scope'.  Please update."
                    ));
                  var d =
                    b("sdk.Runtime").isEnvironment(
                      b("sdk.Runtime").ENVIRONMENTS.CANVAS
                    ) ||
                    b("sdk.Runtime").isEnvironment(
                      b("sdk.Runtime").ENVIRONMENTS.PAGETAB
                    );
                  b("sdk.ui")(
                    babelHelpers["extends"](
                      {
                        method: "permissions.oauth",
                        display: d ? "async" : "popup",
                        domain: location.hostname,
                      },
                      c || {}
                    ),
                    a
                  );
                },
                logout: function (a) {
                  b("sdk.ui")({ method: "auth.logout", display: "hidden" }, a);
                },
              });
              (a = b("sdk.Auth")).subscribe(
                "logout",
                ES((c = b("sdk.Event")).fire, "bind", !0, c, "auth.logout")
              );
              a.subscribe("login", ES(c.fire, "bind", !0, c, "auth.login"));
              a.subscribe(
                "authresponse.change",
                ES(c.fire, "bind", !0, c, "auth.authResponseChange")
              );
              a.subscribe(
                "status.change",
                ES(c.fire, "bind", !0, c, "auth.statusChange")
              );
              a.subscribe(
                "loginDenied",
                ES(c.fire, "bind", !0, c, "auth.denied")
              );
              a.subscribe(
                "loginError",
                ES(c.fire, "bind", !0, c, "auth.error")
              );
              c.subscribe("init:post", function (a) {
                a.status && b("sdk.Auth").getLoginStatus();
                if (
                  b("sdk.Runtime").getClientID() &&
                  b("sdk.Runtime").getUseCookie()
                ) {
                  a = b("sdk.Cookie").loadSignedRequest();
                  if (a) {
                    try {
                      a = b("sdk.SignedRequest").parse(a);
                    } catch (a) {
                      b("sdk.Cookie").clearSignedRequestCookie();
                    }
                    a != null &&
                      a.user_id != null &&
                      b("sdk.Runtime").setCookieUserID(a.user_id);
                  }
                }
              });
            },
            3
          );
          __d(
            "sdk.Canvas.IframeHandling",
            ["DOMWrapper", "sdk.RPC"],
            function (a, b, c, d, e, f) {
              var g = null,
                h;
              function i() {
                var a = b("DOMWrapper").getWindow().document,
                  c = a.body;
                a = a.documentElement;
                var d = Math.max(c.offsetTop, 0),
                  e = Math.max(a.offsetTop, 0),
                  f = c.scrollHeight + d;
                c = c.offsetHeight + d;
                d = a.scrollHeight + e;
                a = a.offsetHeight + e;
                return Math.max(f, c, d, a);
              }
              function j(a) {
                typeof a !== "object" && (a = {});
                var c = 0,
                  d = 0;
                a.height || ((a.height = i()), (c = 16), (d = 4));
                a.frame || (a.frame = window.name || "iframe_canvas");
                if (h) {
                  var e = h.height;
                  e = a.height - e;
                  if (e <= d && e >= -c) return !1;
                }
                h = a;
                b("sdk.RPC").remote.setSize(a);
                return !0;
              }
              function a(a, b) {
                b === void 0 && typeof a === "number" && ((b = a), (a = !0)),
                  a || a === void 0
                    ? (g === null &&
                        (g = setInterval(function () {
                          j();
                        }, b || 100)),
                      j())
                    : g !== null && (clearInterval(g), (g = null));
              }
              b("sdk.RPC").stub("setSize");
              c = { setSize: j, setAutoGrow: a };
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.Canvas.Navigation",
            ["sdk.RPC"],
            function (a, b, c, d, e, f) {
              function a(a) {
                (b("sdk.RPC").local.navigate = function (b) {
                  a({ path: b });
                }),
                  b("sdk.RPC").remote.setNavigationEnabled(!0);
              }
              b("sdk.RPC").stub("setNavigationEnabled");
              c = { setUrlHandler: a };
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.Canvas.Plugin",
            ["Log", "sdk.RPC", "sdk.Runtime", "sdk.UA", "sdk.api"],
            function (a, b, c, d, e, f) {
              var g = "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
                h = "CLSID:444785F1-DE89-4295-863A-D46C3A781394",
                i = null;
              d = b("sdk.UA").osx() && b("sdk.UA").osx.getVersionParts();
              var j = !(
                d &&
                d[0] > 10 &&
                d[1] > 10 &&
                (b("sdk.UA").chrome() >= 31 ||
                  b("sdk.UA").webkit() >= 537.71 ||
                  b("sdk.UA").firefox() >= 25)
              );
              function k(a) {
                (a._hideunity_savedstyle = {}),
                  (a._hideunity_savedstyle.left = a.style.left),
                  (a._hideunity_savedstyle.position = a.style.position),
                  (a._hideunity_savedstyle.width = a.style.width),
                  (a._hideunity_savedstyle.height = a.style.height),
                  (a.style.left = "-10000px"),
                  (a.style.position = "absolute"),
                  (a.style.width = "1px"),
                  (a.style.height = "1px");
              }
              function l(a) {
                a._hideunity_savedstyle &&
                  ((a.style.left = a._hideunity_savedstyle.left),
                  (a.style.position = a._hideunity_savedstyle.position),
                  (a.style.width = a._hideunity_savedstyle.width),
                  (a.style.height = a._hideunity_savedstyle.height));
              }
              function m(a) {
                (a._old_visibility = a.style.visibility),
                  (a.style.visibility = "hidden");
              }
              function n(a) {
                (a.style.visibility = a._old_visibility || ""),
                  delete a._old_visibility;
              }
              function o(a) {
                var b = a.type ? a.type.toLowerCase() : null;
                b =
                  b === "application/x-shockwave-flash" ||
                  (a.classid && a.classid.toUpperCase() == g);
                if (!b) return !1;
                b = /opaque|transparent/i;
                if (b.test(a.getAttribute("wmode"))) return !1;
                for (var c = 0; c < a.childNodes.length; c++) {
                  var d = a.childNodes[c];
                  if (
                    /param/i.test(d.nodeName) &&
                    /wmode/i.test(d.name) &&
                    b.test(d.value)
                  )
                    return !1;
                }
                return !0;
              }
              function p(a) {
                var b = a.type ? a.type.toLowerCase() : null;
                return (
                  b === "application/vnd.unity" ||
                  (a.classid && a.classid.toUpperCase() == h)
                );
              }
              function q(a) {
                var c = ES(
                  "Array",
                  "from",
                  !1,
                  window.document.getElementsByTagName("object")
                );
                c = c.concat(
                  ES(
                    "Array",
                    "from",
                    !1,
                    window.document.getElementsByTagName("embed")
                  )
                );
                var d = !1,
                  e = !1;
                c.forEach(function (c) {
                  var f = o(c),
                    g = j && p(c);
                  if (!f && !g) return;
                  d = d || f;
                  e = e || g;
                  g = function () {
                    a.state === "opened" ? (f ? m(c) : k(c)) : f ? n(c) : l(c);
                  };
                  if (i) {
                    b("Log").info("Calling developer specified callback");
                    var h = { state: a.state, elem: c };
                    i(h);
                    setTimeout(g, 200);
                  } else g();
                });
                if (Math.random() <= 1 / 1e3) {
                  c = { unity: e, flash: d };
                  b("sdk.api")(
                    b("sdk.Runtime").getClientID() + "/occludespopups",
                    "post",
                    c
                  );
                }
              }
              b("sdk.RPC").local.hidePluginObjects = function () {
                b("Log").info("hidePluginObjects called"),
                  q({ state: "opened" });
              };
              b("sdk.RPC").local.showPluginObjects = function () {
                b("Log").info("showPluginObjects called"),
                  q({ state: "closed" });
              };
              b("sdk.RPC").local.showFlashObjects =
                b("sdk.RPC").local.showPluginObjects;
              b("sdk.RPC").local.hideFlashObjects =
                b("sdk.RPC").local.hidePluginObjects;
              function a() {
                m(), k();
              }
              function c() {
                n(), l();
              }
              f = {
                _setHidePluginCallback: function (a) {
                  i = a;
                },
                hidePluginElement: a,
                showPluginElement: c,
              };
              e.exports = f;
            },
            null
          );
          __d(
            "sdk.Canvas.Tti",
            ["sdk.RPC", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              function g(a, c) {
                c = {
                  appId: b("sdk.Runtime").getClientID(),
                  time: Date.now(),
                  name: c,
                };
                c = [c];
                a &&
                  c.push(function (b) {
                    a(b.result);
                  });
                b("sdk.RPC").remote.logTtiMessage.apply(null, c);
              }
              function a() {
                g(null, "StartIframeAppTtiTimer");
              }
              function c(a) {
                g(a, "StopIframeAppTtiTimer");
              }
              function d(a) {
                g(a, "RecordIframeAppTti");
              }
              b("sdk.RPC").stub("logTtiMessage");
              f = { setDoneLoading: d, startTimer: a, stopTimer: c };
              e.exports = f;
            },
            null
          );
          __d(
            "legacy:fb.canvas",
            [
              "Assert",
              "FB",
              "sdk.Canvas.Environment",
              "sdk.Canvas.IframeHandling",
              "sdk.Canvas.Navigation",
              "sdk.Canvas.Plugin",
              "sdk.Canvas.Tti",
              "sdk.Event",
              "sdk.RPC",
              "sdk.Runtime",
            ],
            function (a, b, c, d, e, f) {
              b("FB").provide("Canvas", {
                setSize: function (a) {
                  b("Assert").maybeObject(a, "Invalid argument");
                  return b("sdk.Canvas.IframeHandling").setSize.apply(
                    null,
                    arguments
                  );
                },
                setAutoGrow: function () {
                  return b("sdk.Canvas.IframeHandling").setAutoGrow.apply(
                    null,
                    arguments
                  );
                },
                getPageInfo: function (a) {
                  b("Assert").isFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Environment").getPageInfo.apply(
                    null,
                    arguments
                  );
                },
                scrollTo: function (a, c) {
                  b("Assert").maybeNumber(a, "Invalid argument");
                  b("Assert").maybeNumber(c, "Invalid argument");
                  return b("sdk.Canvas.Environment").scrollTo.apply(
                    null,
                    arguments
                  );
                },
                setDoneLoading: function (a) {
                  b("Assert").maybeFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Tti").setDoneLoading.apply(
                    null,
                    arguments
                  );
                },
                startTimer: function () {
                  return b("sdk.Canvas.Tti").startTimer.apply(null, arguments);
                },
                stopTimer: function (a) {
                  b("Assert").maybeFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Tti").stopTimer.apply(null, arguments);
                },
                getHash: function (a) {
                  b("Assert").isFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Navigation").getHash.apply(
                    null,
                    arguments
                  );
                },
                setHash: function (a) {
                  b("Assert").isString(a, "Invalid argument");
                  return b("sdk.Canvas.Navigation").setHash.apply(
                    null,
                    arguments
                  );
                },
                setUrlHandler: function (a) {
                  b("Assert").isFunction(a, "Invalid argument");
                  return b("sdk.Canvas.Navigation").setUrlHandler.apply(
                    null,
                    arguments
                  );
                },
              }),
                (b("sdk.RPC").local.fireEvent = ES(
                  b("sdk.Event").fire,
                  "bind",
                  !0,
                  b("sdk.Event")
                )),
                b("sdk.Event").subscribe("init:post", function (a) {
                  b("sdk.Runtime").isEnvironment(
                    b("sdk.Runtime").ENVIRONMENTS.CANVAS
                  ) &&
                    (b("Assert").isTrue(
                      !a.hideFlashCallback || !a.hidePluginCallback,
                      "cannot specify deprecated hideFlashCallback and new hidePluginCallback"
                    ),
                    b("sdk.Canvas.Plugin")._setHidePluginCallback(
                      a.hidePluginCallback || a.hideFlashCallback
                    ));
                });
            },
            3
          );
          __d(
            "legacy:fb.canvas.plugin",
            ["FB", "sdk.Canvas.Plugin"],
            function (a, b, c, d, e, f) {
              b("FB").provide("Canvas.Plugin", b("sdk.Canvas.Plugin"));
            },
            3
          );
          __d(
            "sdk.Canvas.Prefetcher",
            ["JSSDKCanvasPrefetcherConfig", "sdk.Runtime", "sdk.api"],
            function (a, b, c, d, e, f) {
              var g = { AUTOMATIC: 0, MANUAL: 1 },
                h = b("JSSDKCanvasPrefetcherConfig").sampleRate,
                i = b("JSSDKCanvasPrefetcherConfig").blacklist,
                j = g.AUTOMATIC,
                k = [];
              function l() {
                var a = { object: "data", link: "href", script: "src" };
                j == g.AUTOMATIC &&
                  Object.keys(a).forEach(function (b) {
                    var c = a[b];
                    ES(
                      "Array",
                      "from",
                      !1,
                      document.getElementsByTagName(b)
                    ).forEach(function (a) {
                      a[c] && k.push(a[c]);
                    });
                  });
                if (k.length === 0) return;
                b("sdk.api")(
                  b("sdk.Runtime").getClientID() + "/staticresources",
                  "post",
                  {
                    urls: ES("JSON", "stringify", !1, k),
                    is_https: location.protocol === "https:",
                  }
                );
                k = [];
              }
              function a() {
                if (
                  !b("sdk.Runtime").isEnvironment(
                    b("sdk.Runtime").ENVIRONMENTS.CANVAS
                  ) ||
                  !b("sdk.Runtime").getClientID() ||
                  !h
                )
                  return;
                if (
                  Math.random() >= 1 / h ||
                  i == "*" ||
                  ~i.indexOf(b("sdk.Runtime").getClientID())
                )
                  return;
                setTimeout(l, 3e4);
              }
              function c(a) {
                j = a;
              }
              function d(a) {
                k.push(a);
              }
              f = {
                COLLECT_AUTOMATIC: g.AUTOMATIC,
                COLLECT_MANUAL: g.MANUAL,
                addStaticResource: d,
                setCollectionMode: c,
                _maybeSample: a,
              };
              e.exports = f;
            },
            null
          );
          __d(
            "legacy:fb.canvas.prefetcher",
            ["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"],
            function (a, b, c, d, e, f) {
              b("FB").provide("Canvas.Prefetcher", b("sdk.Canvas.Prefetcher")),
                b("sdk.Event").subscribe("init:post", function (a) {
                  b("sdk.Runtime").isEnvironment(
                    b("sdk.Runtime").ENVIRONMENTS.CANVAS
                  ) && b("sdk.Canvas.Prefetcher")._maybeSample();
                });
            },
            3
          );
          __d(
            "legacy:fb.canvas.presence",
            ["sdk.Event", "sdk.RPC"],
            function (a, b, c, d, e, f) {
              (d = b("sdk.Event")).subscribe(d.SUBSCRIBE, a);
              d.subscribe(d.UNSUBSCRIBE, c);
              b("sdk.RPC").stub("useFriendsOnline");
              function a(a, c) {
                if (a != "canvas.friendsOnlineUpdated") return;
                c.length === 1 && b("sdk.RPC").remote.useFriendsOnline(!0);
              }
              function c(a, c) {
                if (a != "canvas.friendsOnlineUpdated") return;
                c.length === 0 && b("sdk.RPC").remote.useFriendsOnline(!1);
              }
            },
            3
          );
          __d(
            "legacy:fb.event",
            ["FB", "Log", "sdk.Event"],
            function (a, b, c, d, e, f) {
              a = function (a) {
                return b("Log").error(
                  "FB.Event." + a + "() has been deprecated"
                );
              };
              b("FB").provide("Event", {
                subscribe: function (a, c) {
                  return b("sdk.Event").subscribe(a, c);
                },
                unsubscribe: ES(
                  b("sdk.Event").unsubscribe,
                  "bind",
                  !0,
                  b("sdk.Event")
                ),
                clear: ES(a, "bind", !0, null, "clear"),
                fire: ES(a, "bind", !0, null, "fire"),
              });
            },
            3
          );
          __d(
            "legacy:fb.frictionless",
            ["FB", "sdk.Frictionless"],
            function (a, b, c, d, e, f) {
              b("FB").provide("Frictionless", b("sdk.Frictionless"));
            },
            3
          );
          __d(
            "sdk.GamingServices",
            ["sdk.api", "sdk.ui"],
            function (a, b, c, d, e, f) {
              f.friendFinder = a;
              f.uploadImageToMediaLibrary = c;
              function a(a) {
                b("sdk.ui")(
                  { display: "touch", method: "gaming_friendfinder" },
                  a
                );
              }
              function c(a, c, d, e) {
                b("sdk.api")(
                  "me/photos",
                  "POST",
                  { caption: c, url: a },
                  function (a) {
                    if (d === !1 || !a || a.error) e !== null && e(a);
                    else {
                      var c = a.id;
                      b("sdk.ui")(
                        {
                          display: "touch",
                          method: "gaming_media_library",
                          media_id: c,
                        },
                        function (b) {
                          e !== null && e(a);
                        }
                      );
                    }
                  }
                );
              }
            },
            null
          );
          __d(
            "legacy:fb.gamingservices",
            ["FB", "sdk.GamingServices"],
            function (a, b, c, d, e, f) {
              b("FB").provide("", { gamingservices: b("sdk.GamingServices") });
            },
            3
          );
          __d(
            "sdk.MBasicInitializer",
            [
              "UrlMap",
              "sdk.DOM",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.fbt",
            ],
            function (a, b, c, d, e, f) {
              f.init = a;
              var g = function () {
                function a(a) {
                  if (!a) return;
                  var c = a.parentNode;
                  if (!c) return;
                  var d =
                      b("sdk.DOM").getAttr(a, "href") || window.location.href,
                    e = new (b("sdk.URI"))(b("UrlMap").resolve("m"));
                  e.setPath("/dialog/share");
                  e.addQueryData("href", encodeURI(d));
                  e.addQueryData("app_id", b("sdk.Runtime").getClientID());
                  e.addQueryData("mbasic_link", 1);
                  d = document.createElement("a");
                  d.style = "display:inline-block; zoom:1;";
                  d.textContent = b("sdk.fbt")._("Share to Facebook");
                  d.setAttribute("href", e.toString());
                  d.setAttribute("target", "_blank");
                  c.insertBefore(d, a);
                  c.removeChild(a);
                }
                ES(
                  "Array",
                  "from",
                  !1,
                  document.getElementsByTagName("fb:share-button")
                ).forEach(function (b) {
                  return a(b);
                });
                ES(
                  "Array",
                  "from",
                  !1,
                  document.getElementsByClassName("fb-share-button")
                ).forEach(function (b) {
                  return a(b);
                });
              };
              function a() {
                if (!b("sdk.UA").mBasic()) return;
                g();
              }
            },
            null
          );
          __d(
            "sdk.init",
            [
              "Log",
              "ManagedError",
              "QueryString",
              "sdk.AppEvents",
              "sdk.Cookie",
              "sdk.ErrorHandling",
              "sdk.Event",
              "sdk.Frictionless",
              "sdk.MBasicInitializer",
              "sdk.PlatformVersioning",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f) {
              b("sdk.XD");
              b("sdk.AppEvents");
              b("sdk.Frictionless");
              function g(a) {
                var c =
                  (typeof a === "number" && a > 0) ||
                  (typeof a === "string" &&
                    /^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(a));
                if (c) return a.toString();
                b("Log").warn(
                  "Invalid App Id: Must be a number or numeric string representing the application id."
                );
                return null;
              }
              function h(a) {
                b("sdk.Runtime").getInitialized() &&
                  b("Log").warn(
                    "FB.init has already been called - this could indicate a problem"
                  );
                if (b("sdk.Runtime").getIsVersioned()) {
                  if (Object.prototype.toString.call(a) !== "[object Object]")
                    throw new (b("ManagedError"))("Invalid argument");
                  if (a.authResponse)
                    throw new (b("ManagedError"))(
                      "Setting authResponse is not supported"
                    );
                  a.version ||
                    (a.version = new (b("sdk.URI"))(
                      location.href
                    ).getQueryData().sdk_version);
                  b("sdk.PlatformVersioning").assertValidVersion(a.version);
                  b("sdk.Runtime").setVersion(a.version);
                } else
                  /number|string/.test(typeof a) &&
                    (b("Log").warn("FB.init called with invalid parameters"),
                    (a = { apiKey: a })),
                    (a = ES("Object", "assign", !1, { status: !0 }, a || {}));
                var c = g(a.appId || a.apiKey);
                c !== null && b("sdk.Runtime").setClientID(c);
                "scope" in a && b("sdk.Runtime").setScope(a.scope);
                a.cookie &&
                  (b("sdk.Runtime").setUseCookie(!0),
                  typeof a.cookie === "string" &&
                    b("sdk.Cookie").setDomain(a.cookie));
                (a.localStorage === !1 || a.localStorage === "false") &&
                  b("sdk.Runtime").setUseLocalStorage(!1);
                a.kidDirectedSite && b("sdk.Runtime").setKidDirectedSite(!0);
                a.useFamilyLogin &&
                  b("sdk.Runtime").setShouldLoadFamilyLogin(!0);
                (a.autoLogAppEvents === "1" || a.autoLogAppEvents === "true") &&
                  (a.autoLogAppEvents = !0);
                a.ab && b("sdk.Runtime").setSDKAB(a.ab);
                b("sdk.Runtime").setInitialized(!0);
                b("sdk.UA").mBasic() && b("sdk.MBasicInitializer").init();
                b("sdk.Event").fire("init:post", a);
              }
              window.setTimeout(function () {
                var a =
                  /(connect\.facebook\.net|\.facebook\.com\/assets.php|\.facebook\.net\/assets.php).*?#(.*)/;
                ES(
                  "Array",
                  "from",
                  !1,
                  window.document.getElementsByTagName("script")
                ).forEach(function (c) {
                  if (c.src) {
                    c = a.exec(c.src);
                    if (c) {
                      var d = {};
                      c = b("QueryString").decode(c[2]);
                      for (var e in c)
                        if (Object.prototype.hasOwnProperty.call(c, e)) {
                          var f = c[e];
                          f === "0" ? (d[e] = 0) : (d[e] = f);
                        }
                      h(d);
                    }
                  }
                });
                window.fbAsyncInit &&
                  !window.fbAsyncInit.hasRun &&
                  (b("sdk.Event").fire("init:asyncstart"),
                  (window.fbAsyncInit.hasRun = !0),
                  b("sdk.ErrorHandling").unguard(window.fbAsyncInit)());
              }, 0);
              e.exports = h;
            },
            null
          );
          __d(
            "legacy:fb.init",
            ["FB", "sdk.Event", "sdk.init"],
            function (a, b, c, d, e, f) {
              "use strict";
              b("FB").provide("", { init: b("sdk.init") }),
                b("sdk.Event").subscribe("init:post", function () {
                  __buffer && __buffer.replay();
                }),
                window.setTimeout(function () {
                  __buffer && __buffer.opts && b("sdk.init")(__buffer.opts);
                }, 0);
            },
            3
          );
          __d(
            "runOnce",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                var b = !1,
                  c;
                return function () {
                  b || ((b = !0), (c = a()));
                  return c;
                };
              }
            },
            null
          );
          __d(
            "sdk.Time",
            ["Log", "sdk.Impressions", "sdk.Runtime", "sdk.feature"],
            function (a, b, c, d, e, f) {
              "use strict";
              f.log = a;
              var g = window.performance,
                h = g && "now" in g && "getEntriesByName" in g,
                i,
                j = {};
              if (h) {
                var k = b("sdk.Runtime").getSDKUrl();
                c = null;
                d = g.getEntriesByType("resource").filter(function (a) {
                  return ES(a.name, "startsWith", !0, k);
                });
                if (d.length > 1)
                  if (d > 2) d = null;
                  else {
                    e = ES(d, "findIndex", !0, function (a) {
                      return ES(a.name, "startsWith", !0, k + "?hash=");
                    });
                    !e ? (d = null) : ((c = d.splice(e)[0]), (d = d[0]));
                  }
                else if (d.length === 1) {
                  f = document.getElementById("facebook-jssdk-iframe");
                  f &&
                    f instanceof HTMLIFrameElement &&
                    (c = f.contentWindow.performance
                      .getEntriesByType("resource")
                      .find(function (a) {
                        return ES(a.name, "startsWith", !0, k);
                      }));
                  d = d[0];
                } else d = null;
                d &&
                  ((j.fetchTime = Math.round(d.duration)),
                  c && (j.fetchTime += Math.round(c.duration)),
                  "transferSize" in d &&
                    ((j.transferSize = d.transferSize),
                    c && (j.transferSize += c.transferSize)),
                  b("Log").debug(
                    "sdkperf: it took %s ms and %s bytes to load %s",
                    j.fetchTime,
                    j.transferSize,
                    k
                  ),
                  (i = d.startTime),
                  (j.ns = b("sdk.Runtime").getSDKNS()),
                  i &&
                    window.setTimeout(function () {
                      var a = b("sdk.feature")("log_perf", !1),
                        c = b("sdk.Runtime").getSDKAB();
                      c && ((j.ab = c), (a = !0));
                      a && b("sdk.Impressions").log(116, j);
                    }, 1e4));
              }
              function a(a) {
                if (!h || !i) return;
                j[a] = Math.round(g.now() - i);
                b("Log").debug("sdkperf: %s logged after %s ms", a, j[a]);
              }
            },
            null
          );
          __d(
            "legacy:fb.time",
            ["runOnce", "sdk.Event", "sdk.Time"],
            function (a, b, c, d, e, f) {
              "use strict";
              (a = b("sdk.Event")).subscribe("init:post", function () {
                b("sdk.Time").log("init");
              });
              a.subscribe("init:asyncstart", function () {
                b("sdk.Time").log("asyncstart");
              });
              a.subscribe(
                "iframeplugin:create",
                b("runOnce")(function () {
                  return b("sdk.Time").log("pluginframe");
                })
              );
              a.subscribe(
                "iframeplugin:onload",
                b("runOnce")(function () {
                  return b("sdk.Time").log("ttfp");
                })
              );
            },
            3
          );
          __d(
            "legacy:fb.ui",
            ["FB", "sdk.ui"],
            function (a, b, c, d, e, f) {
              b("FB").provide("", { ui: b("sdk.ui") });
            },
            3
          );
          __d(
            "legacy:fb.versioned-sdk",
            ["sdk.Runtime"],
            function (a, b, c, d, e, f) {
              b("sdk.Runtime").setIsVersioned(!0);
            },
            3
          );
          __d(
            "XFBML",
            ["Assert", "Log", "runOnce", "sdk.Observable"],
            function (a, b, c, d, e, f) {
              var g = {},
                h = {},
                i = 0,
                j = new (b("sdk.Observable").Observable)();
              function k(a, b) {
                return (a[b] + "").trim();
              }
              function l(a) {
                return g[k(a, "nodeName").toLowerCase()];
              }
              function m(a) {
                var b = k(a, "className")
                  .split(/\s+/)
                  .filter(function (a) {
                    return Object.prototype.hasOwnProperty.call(h, a);
                  });
                if (b.length === 0) return void 0;
                if (
                  a.getAttribute("fb-xfbml-state") ||
                  !a.childNodes ||
                  a.childNodes.length === 0 ||
                  (a.childNodes.length === 1 &&
                    a.childNodes[0].nodeType === 3) ||
                  (a.children.length === 1 &&
                    k(a.children[0], "className") === "fb-xfbml-parse-ignore")
                )
                  return h[b[0]];
              }
              function n(a) {
                var b = {};
                ES("Array", "from", !1, a.attributes).forEach(function (a) {
                  b[k(a, "name")] = k(a, "value");
                });
                return b;
              }
              function o(a, c, d) {
                b("Assert").isTrue(
                  a &&
                    a.nodeType &&
                    a.nodeType === 1 &&
                    !!a.getElementsByTagName,
                  "Invalid DOM node passed to FB.XFBML.parse()"
                );
                b("Assert").isFunction(
                  c,
                  "Invalid callback passed to FB.XFBML.parse()"
                );
                if (a == null) return;
                var e = ++i;
                b("Log").info("XFBML Parsing Start %s", e);
                var f = 1,
                  g = 0,
                  h = function () {
                    f--,
                      f === 0 &&
                        (b("Log").info(
                          "XFBML Parsing Finish %s, %s tags found",
                          e,
                          g
                        ),
                        c != null && c(),
                        j.inform("render", [e, g])),
                      b("Assert").isTrue(
                        f >= 0,
                        "onrender() has been called too many times"
                      );
                  };
                ES("Array", "from", !1, a.getElementsByTagName("*")).forEach(
                  function (a) {
                    if (d !== !0 && a.getAttribute("fb-xfbml-state")) return;
                    if (a.nodeType !== 1) return;
                    var c = l(a) || m(a);
                    if (c == null) return;
                    f++;
                    g++;
                    var e = new c.ctor(a, c.xmlns, c.localName, n(a));
                    e.subscribe(
                      "render",
                      b("runOnce")(function () {
                        a.setAttribute("fb-xfbml-state", "rendered"), h();
                      })
                    );
                    c = function b() {
                      a.getAttribute("fb-xfbml-state") == "parsed"
                        ? j.subscribe("render.queue", b)
                        : (a.setAttribute("fb-xfbml-state", "parsed"),
                          e.process());
                    };
                    c();
                  }
                );
                j.inform("parse", [e, g]);
                var k = 3e4;
                window.setTimeout(function () {
                  f > 0 &&
                    b("Log").warn("%s tags failed to render in %s ms", f, k);
                }, k);
                h();
              }
              j.subscribe("render", function () {
                var a = j.getSubscribers("render.queue");
                j.clearSubscribers("render.queue");
                a.forEach(function (a) {
                  a([]);
                });
              });
              a = {
                registerTag: function (a) {
                  var c = a.xmlns + ":" + a.localName;
                  if (c === "fb:customerchat" && g[c] != null) return;
                  b("Assert").isUndefined(g[c], c + " already registered");
                  g[c] = a;
                  h[a.xmlns + "-" + a.localName] = a;
                },
                parse: function (a, b) {
                  o(
                    (a = a) != null ? a : document.body,
                    (a = b) != null ? a : function () {},
                    !0
                  );
                },
                parseNew: function () {
                  o(document.body, function () {}, !1);
                },
                subscribe: j.subscribe,
                unsubscribe: j.unsubscribe,
              };
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "legacy:fb.xfbml",
            [
              "AssertionError",
              "FB",
              "XFBML",
              "sdk.Event",
              "sdk.domReady",
              "wrapFunction",
            ],
            function (a, b, c, d, e, f) {
              b("FB").provide("XFBML", {
                parse: function (a) {
                  if (
                    a != null &&
                    !(
                      (a.nodeType === 1 || a.nodeType === 9) &&
                      typeof a.nodeName === "string"
                    )
                  )
                    throw new (b("AssertionError"))("Invalid argument");
                  a && a.nodeType === 9 && a.body;
                  return b("XFBML").parse.apply(null, arguments);
                },
              });
              b("XFBML").subscribe("parse", function (a) {
                return b("sdk.Event").fire("xfbml.parse", a[0], a[1]);
              });
              b("XFBML").subscribe("render", function (a) {
                return b("sdk.Event").fire("xfbml.render", a[0], a[1]);
              });
              b("sdk.Event").subscribe("init:post", function (a) {
                a.xfbml &&
                  setTimeout(
                    b("wrapFunction")(
                      ES(b("sdk.domReady"), "bind", !0, null, b("XFBML").parse),
                      "entry",
                      "init:post:xfbml.parse"
                    ),
                    0
                  );
              });
              try {
                document.namespaces &&
                  !document.namespaces.item.fb &&
                  document.namespaces.add("fb");
              } catch (a) {}
            },
            3
          );
          __d(
            "$InternalEnum",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = Object.prototype.hasOwnProperty,
                h = typeof WeakMap === "function" ? new WeakMap() : new Map();
              function i(a) {
                var b = h.get(a);
                if (b !== void 0) return b;
                var c = new Map();
                Object.getOwnPropertyNames(a).forEach(function (b) {
                  c.set(a[b], b);
                });
                h.set(a, c);
                return c;
              }
              var j = Object.freeze(
                Object.defineProperties(Object.create(null), {
                  isValid: {
                    value: function (a) {
                      return i(this).has(a);
                    },
                  },
                  cast: {
                    value: function (a) {
                      return this.isValid(a) ? a : void 0;
                    },
                  },
                  members: {
                    value: function () {
                      return i(this).keys();
                    },
                  },
                  getName: {
                    value: function (a) {
                      return i(this).get(a);
                    },
                  },
                })
              );
              function a(a) {
                var b = Object.create(j);
                for (var c in a)
                  g.call(a, c) && Object.defineProperty(b, c, { value: a[c] });
                return Object.freeze(b);
              }
              var k = Object.freeze(
                Object.defineProperties(Object.create(null), {
                  isValid: {
                    value: function (a) {
                      return typeof a === "string" ? g.call(this, a) : !1;
                    },
                  },
                  cast: { value: j.cast },
                  members: {
                    value: function () {
                      return Object.getOwnPropertyNames(this);
                    },
                  },
                  getName: {
                    value: function (a) {
                      return a;
                    },
                  },
                })
              );
              a.Mirrored = function (a) {
                var b = Object.create(k);
                for (var c = 0, d = a.length; c < d; ++c)
                  Object.defineProperty(b, a[c], { value: a[c] });
                return Object.freeze(b);
              };
              Object.freeze(a.Mirrored);
              e.exports = Object.freeze(a);
            },
            null
          );
          __d(
            "MPNConstants",
            ["$InternalEnum"],
            function (a, b, c, d, e, f) {
              "use strict";
              c = (a = b("$InternalEnum"))({
                NEW_GUEST_SESSION: "new_guest_sess",
                ITP_CONTINUE_SESSION: "ipt_continue_sess",
                FB_LOG_IN: "fb_log_in",
                GUEST_UPGRADE: "guest_upgrade",
                GUEST_UPGRADE_SWITCH_ACCOUNT: "guest_upgrade_switch_account",
              });
              f.MPNRedirect = c;
              d = a({
                NOT_SHOWN: "not_shown",
                ATTACHMENT_UPSELL: "attachment_upsell",
                DONT_WAIT_FOR_REPLY_UPSELL: "dont_wait_for_reply_upsell",
                CONTINUE_IN_MESSENGER: "continue_in_messenger",
                OPEN_THREAD: "open_thread",
                BACK_AND_FORTH: "back_and_forth",
                END_CHAT: "end_chat",
              });
              f.MPNUpgradePrompt = d;
              e = a({ HIDDEN: "hidden", NOT_HIDDEN: "not-hidden" });
              f.MPNVisibility = e;
              b = a.Mirrored(["LARGE", "MEDIUM"]);
              f.MPNGreenDotSize = b;
              c = a.Mirrored(["HORIZONTAL", "VERTICAL"]);
              f.MPNQuickReplyLayout = c;
              d = a({
                TEXT: "text",
                USER_EMAIL: "user_email",
                USER_PHONE_NUMBER: "user_phone_number",
                USER_STATE: "user_state",
                USER_ZIP_CODE: "user_zip_code",
              });
              f.MPNQuickReplyContentType = d;
            },
            null
          );
          __d(
            "MPNLocalState",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = {
                LANDING_BANNER: 1,
                WELCOME_PAGE: 2,
                ITP_CONTINUE: 3,
                THREAD_VIEW: 4,
                BUBBLE: 5,
              };
              f.MPNLocalStatePath = a;
              b = {
                CHAT_NOT_STARTED: 1,
                LOGGED_IN_CHAT_STARTED: 2,
                GUEST_CHAT_STARTED: 3,
              };
              f.MPNChatState = b;
              c = "__fb_chat_plugin";
              f.LOCAL_STATE_KEY = c;
            },
            null
          );
          __d(
            "sdk.PluginUtils",
            ["resolveURI", "sdk.Event"],
            function (a, b, c, d, e, f) {
              f.getVal = h;
              f.validate = a;
              f.resize = i;
              f.resizeBubbler = c;
              f.parse = d;
              f.collapseIframe = e;
              var g = {
                string: function (a) {
                  return a;
                },
                bool: function (a) {
                  return a != null ? /^(?:true|1|yes|on)$/i.test(a) : void 0;
                },
                url: function (a) {
                  return b("resolveURI")(a);
                },
                url_maybe: function (a) {
                  return a != null && a !== "" ? b("resolveURI")(a) : void 0;
                },
                hostname: function (a) {
                  return a != null && a !== "" ? a : "window.location.hostname";
                },
                px: function (a) {
                  if (typeof a === "string") {
                    var b = a.match(/^(\d+)(?:px)?$/);
                    return b != null ? parseInt(b[0], 10) : void 0;
                  } else if (typeof a === "number") return a;
                  else return void 0;
                },
                text: function (a) {
                  return a;
                },
              };
              function h(a, b) {
                var c;
                a =
                  (c =
                    (c =
                      (c =
                        (c =
                          (c =
                            (c = a[b]) != null ? c : a[b.replace(/_/g, "-")]) !=
                          null
                            ? c
                            : a[b.replace(/_/g, "")]) != null
                          ? c
                          : a["data-" + b]) != null
                        ? c
                        : a["data-" + b.replace(/_/g, "-")]) != null
                      ? c
                      : a["data-" + b.replace(/_/g, "")]) != null
                    ? c
                    : void 0;
                return a;
              }
              function a(a, b, c, d) {
                Object.keys(a).forEach(function (e) {
                  if (a[e] === "text" && !c[e]) {
                    var f;
                    c[e] =
                      (f = (f = b.textContent) != null ? f : b.innerText) !=
                      null
                        ? f
                        : void 0;
                    b.setAttribute(e, c[e]);
                  }
                  d[e] = g[a[e]](h(c, e));
                });
              }
              function i(a, b, c) {
                b === "100%"
                  ? (a.style.width = "100%")
                  : b != null && b !== "" && (a.style.width = b + "px"),
                  ((c != null && c !== "") || c === 0) &&
                    (a.style.height = c + "px");
              }
              function c(a) {
                return function (c) {
                  c = { width: c.width, height: c.height, pluginID: a };
                  b("sdk.Event").fire("xfbml.resize", c);
                };
              }
              function d(a) {
                return a === "100%"
                  ? "100%"
                  : a != null
                  ? parseInt(a, 10)
                  : void 0;
              }
              function e(a) {
                a != null && i(a, 0, 0);
              }
              a = {
                skin: "string",
                font: "string",
                width: "string",
                height: "px",
                ref: "string",
                lazy: "bool",
                color_scheme: "string",
              };
              f.baseParams = a;
            },
            null
          );
          __d(
            "isNumberLike",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                return !isNaN(parseFloat(a)) && isFinite(a);
              }
            },
            null
          );
          __d(
            "sdk.createIframe",
            ["DOMEventListener", "getBlankIframeSrc", "guid", "isNumberLike"],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                var c = ES("Object", "assign", !1, {}, a),
                  d,
                  e = c.name || b("guid")(),
                  f = c.root,
                  g = c.style || { border: "none" },
                  h = c.url,
                  i = c.onload,
                  j = c.onerror;
                d = document.createElement("iframe");
                d.name = e;
                delete c.style;
                delete c.name;
                delete c.url;
                delete c.root;
                delete c.onload;
                delete c.onerror;
                delete c.height;
                delete c.width;
                c.frameBorder === void 0 && (c.frameBorder = 0);
                c.allowTransparency === void 0 && (c.allowTransparency = !0);
                c.allowFullscreen === void 0 && (c.allowFullscreen = !0);
                c.scrolling === void 0 && (c.scrolling = "no");
                c.allow === void 0 && (c.allow = "encrypted-media");
                c.lazy &&
                  ((c.loading = "lazy"), g.visibility && delete g.visibility);
                delete c.lazy;
                a.width != null &&
                  b("isNumberLike")(a.width) &&
                  (d.width = a.width + "px");
                a.height != null &&
                  b("isNumberLike")(a.height) &&
                  (d.height = a.height + "px");
                c.testid &&
                  d.dataset != null &&
                  ((d.dataset.testid = c.testid), delete c.testid);
                for (var k in c)
                  Object.prototype.hasOwnProperty.call(c, k) &&
                    d.setAttribute(k, c[k]);
                ES("Object", "assign", !1, d.style, g);
                d.src = b("getBlankIframeSrc")();
                f != null && f.appendChild(d);
                if (i)
                  var l = b("DOMEventListener").add(d, "load", function () {
                    l.remove(), i();
                  });
                if (j)
                  var m = b("DOMEventListener").add(d, "error", function () {
                    m.remove(), j();
                  });
                d.src = h;
                return d;
              }
            },
            null
          );
          __d(
            "IframePlugin",
            [
              "Log",
              "MPNLocalState",
              "ObservableMixin",
              "QueryString",
              "Type",
              "UrlMap",
              "guid",
              "sdk.Auth",
              "sdk.AuthUtils",
              "sdk.DOM",
              "sdk.Event",
              "sdk.PlatformVersioning",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.WebStorage",
              "sdk.XD",
              "sdk.createIframe",
            ],
            function (a, b, c, d, e, f) {
              var g = b("Type").extend(
                {
                  constructor: function (a, c, d, e) {
                    var f = this,
                      g;
                    this.parent();
                    d = d.replace(/-/g, "_");
                    var h = (g = b("sdk.PluginUtils")).getVal(e, "plugin_id");
                    this.subscribe("xd.resize", g.resizeBubbler(h));
                    this.subscribe("xd.resize.flow", g.resizeBubbler(h));
                    this.subscribe("xd.resize.flow", function (a) {
                      ES("Object", "assign", !1, f._iframeOptions.root.style, {
                        verticalAlign: "bottom",
                        overflow: "",
                      }),
                        b("sdk.PluginUtils").resize(
                          f._iframeOptions.root,
                          b("sdk.PluginUtils").parse(a.width),
                          b("sdk.PluginUtils").parse(a.height)
                        ),
                        f.updateLift(),
                        window.clearTimeout(f._timeoutID);
                    });
                    this.subscribe("xd.resize", function (c) {
                      var a;
                      ES("Object", "assign", !1, f._iframeOptions.root.style, {
                        verticalAlign: "bottom",
                        overflow: "",
                      });
                      (a = b("sdk.PluginUtils")).resize(
                        f._iframeOptions.root,
                        a.parse(c.width),
                        a.parse(c.height)
                      );
                      a.resize(f._iframe, a.parse(c.width), a.parse(c.height));
                      f._isIframeResized = !0;
                      f.updateLift();
                      window.clearTimeout(f._timeoutID);
                    });
                    this.subscribe("xd.resize.iframe", function (a) {
                      b("sdk.PluginUtils").resize(
                        f._iframe,
                        b("sdk.PluginUtils").parse(a.width),
                        b("sdk.PluginUtils").parse(a.height)
                      ),
                        (f._isIframeResized = !0),
                        f.updateLift(),
                        window.clearTimeout(f._timeoutID);
                    });
                    this.subscribe("xd.sdk_event", function (c) {
                      var d = ES("JSON", "parse", !1, c.data);
                      d.pluginID = h;
                      b("sdk.Event").fire(c.event, d, a);
                    });
                    var i =
                        b("UrlMap").resolve("www") + "/plugins/" + d + ".php?",
                      j = {};
                    g.validate(this.getParams(), a, e, j);
                    g.validate(g.baseParams, a, e, j);
                    ES("Object", "assign", !1, j, {
                      app_id: b("sdk.Runtime").getClientID(),
                      locale: b("sdk.Runtime").getLocale(),
                      sdk: "joey",
                      kid_directed_site: b("sdk.Runtime").getKidDirectedSite(),
                      channel: b("sdk.XD").handler(
                        function (a) {
                          a != null && f.inform("xd." + a.type, a);
                        },
                        "parent.parent",
                        !0
                      ),
                    });
                    if (d == "customerchat") {
                      g = b("sdk.WebStorage").getLocalStorage();
                      e = null;
                      if (g != null)
                        try {
                          e = g.getItem(b("MPNLocalState").LOCAL_STATE_KEY);
                        } catch (a) {
                          b("Log").warn("Failed to access localStorage");
                        }
                      e != null &&
                        ES("Object", "assign", !1, j, { local_state: e });
                      g = Date.now();
                      ES("Object", "assign", !1, j, { request_time: g });
                    }
                    this.shouldIgnoreWidth() && (j.width = void 0);
                    j.container_width = a.offsetWidth;
                    b("sdk.DOM").addCss(a, "fb_iframe_widget");
                    var k = b("guid")();
                    this.subscribe("xd.verify", function (a) {
                      b("sdk.XD").sendToFacebook(k, {
                        method: "xd/verify",
                        params: ES("JSON", "stringify", !1, a.token),
                      });
                    });
                    this.subscribe("xd.refreshLoginStatus", function () {
                      b("sdk.AuthUtils").removeLogoutState(),
                        b("sdk.Auth").getLoginStatus(
                          ES(f.inform, "bind", !0, f, "login.status"),
                          !0
                        );
                    });
                    e = document.createElement("span");
                    ES("Object", "assign", !1, e.style, {
                      verticalAlign: "top",
                      width: j.lazy ? "1px" : "0px",
                      height: j.lazy ? "1px" : "0px",
                      overflow: "hidden",
                    });
                    this._element = a;
                    this._ns = c;
                    this._tag = d;
                    this._params = j;
                    this._config = this.getConfig();
                    this._iframeOptions = {
                      root: e,
                      url: i + b("QueryString").encode(j),
                      name: k,
                      width:
                        this._config.mobile_fullsize && b("sdk.UA").mobile()
                          ? void 0
                          : j.width || 1e3,
                      height: j.height || 1e3,
                      style: { border: "none", visibility: "hidden" },
                      title:
                        this._ns + ":" + this._tag + " Facebook Social Plugin",
                      testid:
                        this._ns + ":" + this._tag + " Facebook Social Plugin",
                      onload: function () {
                        return f.inform("render");
                      },
                      onerror: function () {
                        return b("sdk.PluginUtils").collapseIframe(f._iframe);
                      },
                      lazy: j.lazy,
                    };
                    this.isFluid() &&
                      j.width !== "auto" &&
                      (b("sdk.DOM").addCss(
                        this._element,
                        "fb_iframe_widget_fluid_desktop"
                      ),
                      !j.width &&
                        this._config.full_width &&
                        ((this._element.style.width = "100%"),
                        (this._iframeOptions.root.style.width = "100%"),
                        (this._iframeOptions.style.width = "100%"),
                        (this._params.container_width =
                          this._element.offsetWidth),
                        (this._iframeOptions.url =
                          i + b("QueryString").encode(this._params))));
                  },
                  shouldIgnoreWidth: function () {
                    return (
                      b("sdk.UA").mobile() && this.getConfig().mobile_fullsize
                    );
                  },
                  useInlineHeightForMobile: function () {
                    return !0;
                  },
                  process: function () {
                    var a = this;
                    if (b("sdk.Runtime").getIsVersioned()) {
                      b("sdk.PlatformVersioning").assertVersionIsSet();
                      var c = new (b("sdk.URI"))(this._iframeOptions.url);
                      this._iframeOptions.url = c
                        .setPath(
                          "/" + b("sdk.Runtime").getVersion() + c.getPath()
                        )
                        .toString();
                    }
                    c = ES("Object", "assign", !1, {}, this._params);
                    delete c.channel;
                    var d = b("QueryString").encode(c);
                    if (
                      this._element.getAttribute("fb-iframe-plugin-query") == d
                    ) {
                      b("Log").info(
                        "Skipping render: %s:%s %s",
                        this._ns,
                        this._tag,
                        d
                      );
                      this.inform("render");
                      return;
                    }
                    this._element.setAttribute("fb-iframe-plugin-query", d);
                    this.subscribe("render", function () {
                      b("sdk.Event").fire("iframeplugin:onload"),
                        (a._iframe.style.visibility = "visible"),
                        a._isIframeResized ||
                          b("sdk.PluginUtils").collapseIframe(a._iframe);
                    });
                    while (this._element.firstChild)
                      this._element.removeChild(this._element.firstChild);
                    this._element.appendChild(this._iframeOptions.root);
                    var e = b("sdk.UA").mobile() ? 120 : 45;
                    this._timeoutID = window.setTimeout(function () {
                      b("sdk.PluginUtils").collapseIframe(a._iframe),
                        b("Log").warn(
                          "%s:%s failed to resize in %ss",
                          a._ns,
                          a._tag,
                          e
                        );
                    }, e * 1e3);
                    this._iframe = b("sdk.createIframe")(this._iframeOptions);
                    b("sdk.Event").fire("iframeplugin:create");
                    if (b("sdk.UA").mobile() || c.width === "auto") {
                      this.useInlineHeightForMobile() &&
                        b("sdk.DOM").addCss(
                          this._element,
                          "fb_iframe_widget_fluid"
                        );
                      if (!this._iframeOptions.width) {
                        ES("Object", "assign", !1, this._element.style, {
                          display: "block",
                          width: "100%",
                          height: "auto",
                        });
                        ES(
                          "Object",
                          "assign",
                          !1,
                          this._iframeOptions.root.style,
                          { width: "100%", height: "auto" }
                        );
                        d = {
                          height: "auto",
                          position: "static",
                          width: "100%",
                        };
                        (b("sdk.UA").iphone() || b("sdk.UA").ipad()) &&
                          ES("Object", "assign", !1, d, {
                            width: "220px",
                            "min-width": "100%",
                          });
                        ES("Object", "assign", !1, this._iframe.style, d);
                      }
                    }
                  },
                  getConfig: function () {
                    return {};
                  },
                  isFluid: function () {
                    var a = this.getConfig();
                    return a.fluid;
                  },
                  updateLift: function () {
                    var a =
                      this._iframe.style.width ===
                        this._iframeOptions.root.style.width &&
                      this._iframe.style.height ===
                        this._iframeOptions.root.style.height;
                    b("sdk.DOM")[a ? "removeCss" : "addCss"](
                      this._iframe,
                      "fb_iframe_widget_lift"
                    );
                  },
                },
                b("ObservableMixin")
              );
              g.withParams = function (a, b) {
                return g.extend({
                  getParams: function () {
                    return a;
                  },
                  getConfig: function () {
                    return b ? b : {};
                  },
                });
              };
              a = g;
              e.exports = a;
            },
            null
          );
          __d(
            "PluginConfig",
            ["sdk.feature"],
            function (a, b, c, d, e, f) {
              a = { mobile_fullsize: !0 };
              f.comment_embed = a;
              c = { mobile_fullsize: !0 };
              f.messengerpreconfirmation = c;
              d = { mobile_fullsize: !0 };
              f.messengeraccountconfirmation = d;
              e = { mobile_fullsize: !0 };
              f.messengerbusinesslink = e;
              a = { mobile_fullsize: !0 };
              f.messengertoggle = a;
              c = { mobile_fullsize: !0 };
              f.messengermessageus = c;
              d = {
                fluid: b("sdk.feature")("fluid_embed", !1),
                mobile_fullsize: !0,
              };
              f.post = d;
              e = { mobile_fullsize: !0 };
              f.send_to_messenger = e;
            },
            null
          );
          __d(
            "PluginAttrTypes",
            [],
            function (a, b, c, d, e, f) {
              "use strict";
              a = "string";
              f.string = a;
              b = "bool";
              f.bool = b;
              c = "url";
              f.url = c;
            },
            null
          );
          __d(
            "PluginTags",
            ["PluginAttrTypes"],
            function (a, b, c, d, e, f) {
              var g = {
                  ad_library_spend_tracker: {
                    country: (a = b("PluginAttrTypes")).string,
                    time_preset: a.string,
                    custom_start_date: a.string,
                    custom_end_date: a.string,
                    race_type: a.string,
                    state: a.string,
                    district: a.string,
                    page_ids: a.string,
                    include_vps: a.bool,
                  },
                  comment_embed: { href: a.url, include_parent: a.bool },
                  composer: {
                    action_type: a.string,
                    action_properties: a.string,
                  },
                  create_event_button: {},
                  group: {
                    href: a.url,
                    show_social_context: a.bool,
                    show_group_info: a.bool,
                    show_metadata: a.bool,
                  },
                  like: {
                    href: a.url,
                    layout: a.string,
                    show_faces: a.bool,
                    share: a.bool,
                    action: a.string,
                    send: a.bool,
                    size: a.string,
                  },
                  like_box: {
                    href: a.string,
                    show_faces: a.bool,
                    header: a.bool,
                    stream: a.bool,
                    force_wall: a.bool,
                    show_border: a.bool,
                    id: a.string,
                    connections: a.string,
                    profile_id: a.string,
                    name: a.string,
                  },
                  page: {
                    href: a.string,
                    hide_cta: a.bool,
                    hide_cover: a.bool,
                    small_header: a.bool,
                    adapt_container_width: a.bool,
                    show_facepile: a.bool,
                    show_posts: a.bool,
                    tabs: a.string,
                  },
                  messenger_checkbox: {
                    messenger_app_id: a.string,
                    page_id: a.string,
                    pixel_id: a.string,
                    prechecked: a.bool,
                    allow_login: a.bool,
                    size: a.string,
                    origin: a.string,
                    user_ref: a.string,
                    identity_match: a.string,
                    center_align: a.bool,
                  },
                  messengermessageus: {
                    messenger_app_id: a.string,
                    page_id: a.string,
                    color: a.string,
                    size: a.string,
                  },
                  send_to_messenger: {
                    messenger_app_id: a.string,
                    page_id: a.string,
                    color: a.string,
                    size: a.string,
                    enforce_login: a.bool,
                    identity_match: a.string,
                    origin: a.string,
                    cta_text: a.string,
                  },
                  page_events: { href: a.url },
                  post: { href: a.url, show_text: a.bool },
                  profile_pic: {
                    uid: a.string,
                    linked: a.bool,
                    href: a.string,
                    size: a.string,
                    facebook_logo: a.bool,
                  },
                  send_to_mobile: {
                    max_rows: a.string,
                    show_faces: a.bool,
                    size: a.string,
                  },
                },
                h = { fan: "like_box", likebox: "like_box" };
              Object.keys(h).forEach(function (a) {
                g[a] = g[h[a]];
              });
              c = g;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.XFBML.Comments",
            [
              "IframePlugin",
              "QueryString",
              "UrlMap",
              "sdk.DOM",
              "sdk.Event",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
            ],
            function (a, b, c, d, e, f) {
              var g = 320,
                h = ES(
                  "Object",
                  "assign",
                  !1,
                  {
                    numposts: "string",
                    href: "url",
                    permalink: "bool",
                    order_by: "string",
                    mobile: "bool",
                    version: "string",
                    hide_post_profile: "bool",
                    limit: "string",
                    offset: "string",
                    view: "string",
                    fb_comment_id: "string",
                    from_mod_tool: "bool",
                    migrated: "string",
                    xid: "string",
                    title: "string",
                    url: "string",
                    quiet: "string",
                    reverse: "string",
                    simple: "string",
                    css: "string",
                    notify: "string",
                    count: "bool",
                    skin: "string",
                    font: "string",
                    width: "string",
                    height: "px",
                    ref: "string",
                    lazy: "bool",
                    color_scheme: "string",
                  },
                  b("sdk.PluginUtils").baseParams
                );
              function i(a, c) {
                Object.keys(h).forEach(function (d) {
                  var e = b("sdk.DOM").getAttr(a, d);
                  e !== null && (c[d] = e);
                });
                Object.keys(c).forEach(function (a) {
                  ES(a, "startsWith", !0, "data-") && delete c[a];
                });
                b("sdk.UA").mobile() && c.mobile !== !1 && (c.mobile = !0);
                c.skin || (c.skin = c.colorscheme);
                if (!c.href) {
                  c.title = c.title || document.title;
                  c.url = c.url || document.URL;
                  if (!c.xid) {
                    var d = document.URL.indexOf("#");
                    d > 0
                      ? (c.xid = encodeURIComponent(
                          document.URL.substring(0, d)
                        ))
                      : (c.xid = encodeURIComponent(document.URL));
                  }
                  c.migrated &&
                    (c.href =
                      b("UrlMap").resolve("www") +
                      "/plugins/comments_v1.php?app_id=" +
                      b("sdk.Runtime").getClientID() +
                      "&xid=" +
                      encodeURIComponent(c.xid) +
                      "&url=" +
                      encodeURIComponent(c.url));
                } else {
                  d = c.fb_comment_id;
                  d ||
                    ((d = b("QueryString").decode(
                      document.URL.substring(document.URL.indexOf("?") + 1)
                    ).fb_comment_id),
                    d &&
                      d.indexOf("#") > 0 &&
                      (d = d.substring(0, d.indexOf("#"))));
                  d && (c.fb_comment_id = d);
                }
                c.version || (c.version = b("sdk.Runtime").getVersion());
                c.permalink ||
                  ((c.width =
                    c.mobile || c.width === "auto" || c.width === "100%"
                      ? ""
                      : c.width
                      ? Math.max(c.width, g)
                      : 550),
                  (c.height = 100));
                if (c.href != null) {
                  d = new (b("sdk.URI"))(c.href);
                  d.getProtocol() ||
                    (c.href = d.setProtocol("http").toString());
                }
                return c;
              }
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  (e = i(a, e)),
                    this.parent(a, c, d, e),
                    this.subscribe("xd.sdk_event", function (a) {
                      b("sdk.Event").fire(
                        a.event,
                        ES("JSON", "parse", !1, a.data)
                      );
                    });
                },
                getConfig: function () {
                  return { fluid: !0, full_width: !0 };
                },
                getParams: function () {
                  return h;
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.XFBML.CommentsCount",
            ["sdk.DOM", "sdk.XFBML.Comments", "sprintf"],
            function (a, b, c, d, e, f) {
              a = b("sdk.XFBML.Comments").extend({
                constructor: function (a, c, d, e) {
                  b("sdk.DOM").addCss(a, "fb_comments_count_zero"),
                    (e.count = 1),
                    this.parent(a, c, "comments", e),
                    this.subscribe("xd.comment_count", function (c) {
                      c = ES("JSON", "parse", !1, c.data);
                      b("sdk.DOM").html(
                        a,
                        b("sprintf")(
                          '<span class="fb_comments_count">%s</span>',
                          c.count
                        )
                      );
                      c.count > 0 &&
                        b("sdk.DOM").removeCss(a, "fb_comments_count_zero");
                      b("sdk.DOM").removeCss(a, "fb_iframe_widget");
                    });
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "getFacebookOriginForTarget",
            ["Log"],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a, c) {
                c === void 0 && (c = top);
                var d = 0,
                  e = !1,
                  f = 200;
                window.addEventListener(
                  "message",
                  function (d) {
                    d.source === c &&
                      d.data.xdArbiterAck &&
                      (/\.facebook\.com$/.test(d.origin) &&
                      /^https:/.test(d.origin)
                        ? e === !1 &&
                          ((e = !0),
                          b("Log").debug(
                            "initXdArbiter got xdArbiterAck from " + d.origin
                          ),
                          a(d.origin))
                        : b("Log").error(
                            "xdAbiterAck was not from Facebook: ",
                            d.origin
                          ));
                  },
                  !1
                );
                c.postMessage({ xdArbiterSyn: !0 }, "*");
                d = window.setInterval(function () {
                  !e && f > 0
                    ? (f--,
                      b("Log").debug("resending xdArbiterSyn"),
                      c.postMessage({ xdArbiterSyn: !0 }, "*"))
                    : window.clearInterval(d);
                }, 200);
              }
            },
            null
          );
          __d(
            "sdk.DocumentTitle",
            [],
            function (a, b, c, d, e, f) {
              f.get = a;
              f.set = o;
              f.blink = b;
              var g = document.title,
                h = null,
                i = 1500,
                j = null,
                k = !1;
              function l() {
                h ? (!k ? m(h) : n()) : (clearInterval(j), (j = null), n());
              }
              function m(a) {
                (document.title = a), (k = !0);
              }
              function n() {
                o(g), (k = !1);
              }
              function a() {
                return g;
              }
              function o(a) {
                document.title = a;
              }
              function b(a) {
                h = a;
                j === null && (j = setInterval(l, i));
                return {
                  stop: function () {
                    h = null;
                  },
                };
              }
            },
            null
          );
          __d(
            "sdk.XFBML.CustomerChat",
            [
              "DOMEventListener",
              "IframePlugin",
              "MPNLocalState",
              "UrlMap",
              "getFacebookOriginForTarget",
              "sdk.Content",
              "sdk.DOM",
              "sdk.DialogUtils",
              "sdk.DocumentTitle",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.URI",
              "sdk.WebStorage",
              "sdk.XD",
              "sdk.createIframe",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = [
                  "animationend",
                  "mozAnimationEnd",
                  "MSAnimationEnd",
                  "oAnimationEnd",
                  "webkitAnimationEnd",
                ],
                h = "anchor_left",
                i = "anchor_right",
                j = null,
                k = null,
                l = null,
                m = null,
                n = !1,
                o = null,
                p = null,
                q = "",
                r = null,
                s = "",
                t = "",
                u = null,
                v = "/",
                w = "/welcome",
                x = "/bubble",
                y = "/itpcontinue",
                z = v,
                A = !1,
                B = !1,
                C = !1,
                D = !1,
                E = b("IframePlugin").extend({
                  constructor: function (a, c, d, e) {
                    b("sdk.DOM").addCss(a, "fb_invisible_flow"),
                      b("sdk.DOM").remove(a),
                      b("sdk.Content").append(a),
                      this.parent(a, c, d, e),
                      (this._iframeOptions.title = ""),
                      b("sdk.Event").fire("customerchat.load"),
                      this._setUpSubscriptions();
                  },
                  _setUpSubscriptions: function () {
                    var a = this;
                    this.subscribe(
                      "xd.liveChatPluginResizeIframeVariableHeight",
                      function (b) {
                        b.setBoxShadow
                          ? a._handleSetIframeBoxShadow()
                          : a._handleUnsetIframeBoxShadow(),
                          a._handleResizeIframe(b);
                      }
                    );
                    this.subscribe(
                      "xd.liveChatPluginUpdateShadow",
                      function (b) {
                        a._handleShadowUpdate(b);
                      }
                    );
                    this.subscribe(
                      "xd.liveChatPluginUpdatePageTitle",
                      function (b) {
                        a._handleUpdatePageTitle(b);
                      }
                    );
                    b("sdk.UA").iphone() &&
                      this.subscribe(
                        "xd.liveChatPluginBlurComposer",
                        function (b) {
                          a._handleBlurComposer();
                        }
                      );
                    this.subscribe("xd.mpn.resizeIframe", function (b) {
                      a._handleResizeIframe(b);
                    });
                    this.subscribe("xd.mpn.setAppearance", function (b) {
                      a._handleSetAppearance(b);
                    });
                    this.subscribe("xd.mpn.prepareIframe", function (b) {
                      a._handlePrepareIframe(b);
                    });
                    this.subscribe("xd.mpn.prepareIconIframe", function (b) {
                      a._handlePrepareIconIframe(b);
                    });
                    this.subscribe("xd.mpn.storeState", function (b) {
                      a._storeStateInfo(b.state);
                    });
                    this.subscribe("xd.mpn.getState", function (b) {
                      b = a._getStateInfo();
                      b = {
                        name: "mpnDidFetchState",
                        params: ES("JSON", "stringify", !1, b || {}),
                      };
                      H(b);
                      G(b);
                    });
                    this.subscribe("xd.mpn.reload", function (c) {
                      var d = a._iframe.src,
                        e = b("sdk.WebStorage").getLocalStorage(),
                        f = null;
                      if (e != null)
                        try {
                          f = e.getItem(b("MPNLocalState").LOCAL_STATE_KEY);
                        } catch (a) {}
                      e = new (b("sdk.URI"))(d);
                      d = e.getQueryData();
                      d.local_state = f;
                      d.request_time = Date.now();
                      c.hasExplicitInteraction &&
                        (d.has_explicit_interaction = "1");
                      e.setQueryData(d);
                      a._iframe.src = e.valueOf();
                    });
                  },
                  _handleSetAppearance: function (a) {
                    a.isReparse == "true" && (u = null);
                    if (a.shouldSetHidden == "true") {
                      var b = a.alignment,
                        c = a.chatStarted,
                        d = a.isMobile,
                        e = a.hidden,
                        f = a.mobilePath;
                      z = f;
                      C = e == "true";
                      e == "true"
                        ? (this._iframe.style.removeProperty("animation"),
                          this._handleHideDialogIframe({
                            chatStarted: c,
                            isMobile: d,
                            alignment: b,
                          }))
                        : this._handleShowDialogIframe({
                            chatStarted: c,
                            isMobile: d,
                            alignment: b,
                          });
                    }
                    a.shadow != null &&
                      this._handleShadowUpdate({ resetShadow: a.shadow });
                  },
                  _handlePrepareIframe: function (a) {
                    u = null;
                    this._iframe &&
                      (this._iframe.setAttribute(
                        "data-testid",
                        "dialog_iframe"
                      ),
                      (this._iframe.style.cssText = a.cssText));
                    p = this._iframe;
                    q = this._iframe.name;
                    z = a.path;
                    b("sdk.DOM").removeCss(p, h);
                    b("sdk.DOM").removeCss(p, i);
                    a.alignment != null &&
                      b("sdk.DOM").addCss(p, a.alignment == "right" ? i : h);
                    if (a.isMobile === "true" && !C && z == v) {
                      var c = L(a.isMobile === "true", "right");
                      c != null && b("sdk.DOM").addCss(p, c);
                    }
                    a.isMobile === "true" && !C && z != v && z != x && J();
                    D && E.hide();
                  },
                  _handlePrepareIconIframe: function (a) {
                    var c = this;
                    o && b("sdk.DOM").remove(o);
                    var d = document.createElement("div"),
                      e = b("sdk.DialogUtils").setupNewDialog();
                    q = this._iframeOptions.name;
                    s = "blank_" + a.frameName;
                    var f = ES("JSON", "parse", !1, a.cssText);
                    l = b("sdk.createIframe")({
                      url: this._getBubbleFrameURL(),
                      name: s,
                      root: e.contentRoot,
                      tabindex: -1,
                      width: 60,
                      style: f,
                      "data-testid": "bubble_iframe",
                      onload: function () {
                        (A = !0),
                          c._notifyDialogFrame(),
                          window.setTimeout(function () {
                            b("sdk.DOM").remove(d);
                          }, 100);
                      },
                    });
                    this._bubbleDialog = e.dialogElement;
                    o = this._bubbleDialog;
                    m = this._bubbleDialog;
                    b("sdk.DOM").setStyle(
                      this._bubbleDialog,
                      "overflow",
                      "visible"
                    );
                    b("sdk.DOM").setStyle(
                      this._bubbleDialog,
                      "z-index",
                      f.zIndex
                    );
                    a.uiPolishEnabled === "true" &&
                      b("sdk.DOM").addCss(l, "fb_customer_chat_icon");
                    b("sdk.Content").append(this._bubbleDialog);
                    a.iconSVG != null &&
                      (b("sdk.DOM").html(d, a.iconSVG),
                      ES("Object", "assign", !1, d.style, f),
                      (d.style.boxShadow = ""),
                      b("sdk.DOM").setStyle(d, "z-index", "1"),
                      b("sdk.Content").append(d, e.contentRoot));
                    t = "unread_" + a.frameName;
                    k = b("sdk.createIframe")({
                      url: this._getBubbleFrameURL(),
                      name: t,
                      root: e.contentRoot,
                      tabindex: -1,
                      style: ES("JSON", "parse", !1, a.unreadCountCssText),
                      "data-testid": "unread_iframe",
                      onload: function () {
                        (B = !0), c._notifyDialogFrame();
                      },
                    });
                    b("sdk.Content").append(k, e.contentRoot);
                  },
                  _handleResizeIframe: function (a) {
                    this._iframe &&
                      b("sdk.DOM").setStyle(
                        this._iframe,
                        "height",
                        ES("JSON", "parse", !1, a.height) + "px"
                      );
                  },
                  _handleSetIframeBoxShadow: function () {
                    this._iframe &&
                      (b("sdk.DOM").setStyle(
                        this._iframe,
                        "boxShadow",
                        "0 1pt 12pt grey"
                      ),
                      b("sdk.DOM").setStyle(this._iframe, "margin", "12px"));
                  },
                  _handleUnsetIframeBoxShadow: function () {
                    this._iframe &&
                      (b("sdk.DOM").setStyle(this._iframe, "boxShadow", "none"),
                      b("sdk.DOM").setStyle(
                        this._iframe,
                        "margin",
                        "0px 12px"
                      ));
                  },
                  _handleShowDialogIframe: function (a) {
                    N(
                      this._iframe,
                      ES("JSON", "parse", !1, a.chatStarted),
                      ES("JSON", "parse", !1, a.isMobile),
                      !0,
                      a.alignment
                    );
                  },
                  _handleHideDialogIframe: function (a) {
                    O(
                      this._iframe,
                      ES("JSON", "parse", !1, a.chatStarted),
                      ES("JSON", "parse", !1, a.isMobile),
                      !0,
                      a.alignment
                    );
                  },
                  _handleShadowUpdate: function (a) {
                    ES("JSON", "parse", !1, a.resetShadow) && this._bubbleDialog
                      ? (b("sdk.DOM").setStyle(
                          this._bubbleDialog,
                          "borderRadius",
                          "50%"
                        ),
                        b("sdk.DOM").addCss(
                          this._bubbleDialog,
                          "fb_customer_chat_bubble_animated_no_badge"
                        ))
                      : ES("JSON", "parse", !1, a.resetShadow) ||
                        this._setBubbleBadgeStyle();
                  },
                  _handleUpdatePageTitle: function (a) {
                    var c = this;
                    !j && a.titleText
                      ? ((j = b("sdk.DocumentTitle").blink(a.titleText)),
                        b("DOMEventListener").add(
                          window,
                          "focus",
                          function (a) {
                            c._stopBlinking();
                          }
                        ))
                      : j && !a.titleText && this._stopBlinking();
                  },
                  _handleBlurComposer: function () {
                    b("sdk.DOM").setStyle(this._iframe, "maxHeight", "100%");
                  },
                  _notifyDialogFrame: function () {
                    var a;
                    H({
                      name: "bubbleFrameLoaded",
                      frameName: A ? s : null,
                      unreadCountFrameName: B ? t : null,
                      iconSrc: (a = l) == null ? void 0 : a.src,
                      unreadSrc: (a = k) == null ? void 0 : a.src,
                    });
                  },
                  _getBubbleFrameURL: function () {
                    return b("sdk.Runtime").getIsVersioned()
                      ? b("UrlMap").resolve("www") +
                          "/" +
                          b("sdk.Runtime").getVersion() +
                          "/plugins/customer_chat/bubble"
                      : "";
                  },
                  _setBubbleBadgeStyle: function () {
                    this._bubbleDialog &&
                      (b("sdk.DOM").setStyle(
                        this._bubbleDialog,
                        "borderRadius",
                        "50% 0% 50% 50%"
                      ),
                      b("sdk.DOM").removeCss(
                        this._bubbleDialog,
                        "fb_customer_chat_bubble_animated_no_badge"
                      ),
                      b("sdk.DOM").addCss(
                        this._bubbleDialog,
                        "fb_customer_chat_bubble_animated_with_badge"
                      ));
                  },
                  _stopBlinking: function () {
                    j && (j.stop(), (j = null));
                  },
                  _storeStateInfo: function (a) {
                    var c = b("sdk.WebStorage").getLocalStorageForRead();
                    if (!c) return;
                    try {
                      if (a == null)
                        c.removeItem(b("MPNLocalState").LOCAL_STATE_KEY);
                      else {
                        var d = c.getItem(b("MPNLocalState").LOCAL_STATE_KEY);
                        if (d == null)
                          c.setItem(
                            b("MPNLocalState").LOCAL_STATE_KEY,
                            ES(
                              "JSON",
                              "stringify",
                              !1,
                              ES("JSON", "parse", !1, a)
                            )
                          );
                        else {
                          d = ES("JSON", "parse", !1, d);
                          a = ES("JSON", "parse", !1, a);
                          c.setItem(
                            b("MPNLocalState").LOCAL_STATE_KEY,
                            ES(
                              "JSON",
                              "stringify",
                              !1,
                              babelHelpers["extends"]({}, d, a)
                            )
                          );
                        }
                      }
                    } catch (a) {
                      return;
                    }
                  },
                  _getStateInfo: function () {
                    var a = b("sdk.WebStorage").getLocalStorageForRead();
                    if (!a) return;
                    a = a.getItem(b("MPNLocalState").LOCAL_STATE_KEY);
                    return !a ? null : ES("JSON", "parse", !1, a);
                  },
                  getParams: function () {
                    return {
                      allow_guests: "bool",
                      attribution: "string",
                      greeting_dialog_display: "string",
                      greeting_dialog_delay: "string",
                      logged_in_greeting: "string",
                      logged_out_greeting: "string",
                      minimized: "bool",
                      page_id: "string",
                      theme_color: "string",
                      override: "string",
                      attribution_version: "string",
                    };
                  },
                });
              function F(a, c) {
                var d = function (b) {
                  var d;
                  (d = window.frames[a]) == null
                    ? void 0
                    : d.postMessage(babelHelpers["extends"]({}, c), b);
                };
                r === null
                  ? b("getFacebookOriginForTarget")(function (a) {
                      (r = a), d(r);
                    }, window.frames[a])
                  : d(r);
              }
              function G(a) {
                F(s, a);
              }
              function H(a) {
                F(q, a);
              }
              function I(a) {
                H({ name: "CustomerChat.SDK.Called", event: a });
              }
              function J() {
                var a = "fb_new_ui_mobile_overlay_active";
                b("sdk.DOM").addCss(document.body, a);
              }
              function K() {
                var a = "fb_new_ui_mobile_overlay_active";
                b("sdk.DOM").removeCss(document.body, a);
              }
              function L(a, b) {
                var c;
                if (a)
                  switch (z) {
                    case v:
                      return "fb_mpn_mobile_landing_page_slide_up";
                    case w:
                    case x:
                    case y:
                      return null;
                    default:
                      return "fb_mpn_mobile_bounce_in";
                  }
                else
                  switch (b) {
                    case "left":
                      c = "fb_customer_chat_bounce_in_from_left";
                      break;
                    case "right":
                    default:
                      c = "fb_customer_chat_bounce_in_v2";
                  }
                return c;
              }
              function M(a, b) {
                var c;
                if (a)
                  switch (z) {
                    case v:
                      return b === "left"
                        ? "fb_mpn_mobile_landing_page_slide_out_from_left"
                        : "fb_mpn_mobile_landing_page_slide_out";
                    case x:
                      return "fb_mpn_mobile_bounce_out_v2";
                    default:
                      return "fb_mpn_mobile_bounce_out";
                  }
                else
                  switch (b) {
                    case "left":
                      c = "fb_customer_chat_bounce_out_from_left";
                      break;
                    case "right":
                    default:
                      c = "fb_customer_chat_bounce_out_v2";
                  }
                return c;
              }
              function N(a, c, d, e, f) {
                e === void 0 && (e = !0);
                if (!a) return;
                f == null &&
                  (b("sdk.DOM").containsCss(a, h)
                    ? (f = "left")
                    : (f = "right"));
                if (u === null || u === !1) {
                  d && (c || (z !== v && z !== x)) && J();
                  c = L(d, f);
                  f = M(d, f);
                  b("sdk.DOM").removeCss(a, f);
                  c != null && b("sdk.DOM").addCss(a, c);
                  d
                    ? (b("sdk.DOM").setStyle(a, "maxHeight", "100%"),
                      b("sdk.DOM").setStyle(a, "width", "100%"))
                    : (b("sdk.DOM").setStyle(
                        a,
                        "maxHeight",
                        "calc(100% - 80px)"
                      ),
                      b("sdk.DOM").setStyle(a, "minHeight", "360px"));
                  H({
                    name: "CustomerChat.isDialogHidden",
                    params: { is_dialog_hidden: !1 },
                  });
                  G({
                    name: "CustomerChat.isDialogHidden",
                    params: { is_dialog_hidden: !1 },
                  });
                  u = !0;
                }
                e && b("sdk.Event").fire("customerchat.dialogShow");
              }
              function O(a, c, d, e, f) {
                e === void 0 && (e = !0);
                var i = a;
                if (!i) return;
                f == null &&
                  (b("sdk.DOM").containsCss(i, h)
                    ? (f = "left")
                    : (f = "right"));
                if (u === null || u === !0) {
                  d && (c || z !== v) && K();
                  var j = function a(c) {
                    C &&
                      (b("sdk.DOM").setStyle(i, "maxHeight", "0"),
                      b("sdk.DOM").setStyle(i, "minHeight", "0"),
                      g.forEach(function (c) {
                        b("DOMEventListener").remove(i, c, a);
                      }),
                      (u = !1));
                  };
                  a = L(d, f);
                  c = M(d, f);
                  a != null && b("sdk.DOM").removeCss(i, a);
                  b("sdk.DOM").addCss(i, c);
                  g.forEach(function (a) {
                    b("DOMEventListener").add(i, a, j);
                  });
                  H({
                    name: "CustomerChat.isDialogHidden",
                    params: { is_dialog_hidden: !0 },
                  });
                  G({
                    name: "CustomerChat.isDialogHidden",
                    params: { is_dialog_hidden: !0 },
                  });
                }
                e && b("sdk.Event").fire("customerchat.dialogHide");
              }
              E.show = function (a) {
                a === void 0 && (a = !0),
                  (D = !1),
                  m != null && b("sdk.DOM").setStyle(m, "display", "inline"),
                  a && ((C = !1), N(p, n, b("sdk.UA").mobile(), !1)),
                  b("sdk.Event").fire("customerchat.show"),
                  I("show");
              };
              E.hide = function () {
                (D = !0),
                  m != null && b("sdk.DOM").setStyle(m, "display", "none"),
                  (C = !0),
                  O(p, n, b("sdk.UA").mobile(), !1),
                  b("sdk.Event").fire("customerchat.hide"),
                  I("hide");
              };
              E.showDialog = function () {
                m != null && b("sdk.DOM").setStyle(m, "display", "inline"),
                  (C = !1),
                  N(p, n, b("sdk.UA").mobile()),
                  I("showDialog");
              };
              E.hideDialog = function () {
                (C = !0), O(p, n, b("sdk.UA").mobile()), I("hideDialog");
              };
              E.update = function (a) {
                b("sdk.XD").sendToFacebook(q, {
                  method: "updateCustomerChat",
                  params: ES("JSON", "stringify", !1, a || {}),
                }),
                  I("update");
              };
              a = E;
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.LWIAdsCreation",
            ["IframePlugin", "sdk.createIframe"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("IframePlugin").extend({
                constructor: function (a, b, c, d) {
                  this.parent(a, b, c, d), this._setUpSubscriptions();
                },
                getParams: function () {
                  return {
                    fbe_extras: "string",
                    fbe_redirect_uri: "string",
                    fbe_scopes: "string",
                    fbe_state: "string",
                    hide_manage_button: "bool",
                  };
                },
                _setUpSubscriptions: function () {
                  var a = this;
                  this.subscribe("xd.lwiadscreation.load", function (b) {
                    a._createIframe(b);
                  });
                },
                _createIframe: function (a) {
                  b("sdk.createIframe")({
                    url: a.iframeURL,
                    name: "LWIAdsCreationRootIframe",
                    root: document.body,
                    height: 300,
                    width: 950,
                  });
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.XFBML.LWIAdsInsights",
            ["IframePlugin", "sdk.createIframe"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("IframePlugin").extend({
                constructor: function (a, b, c, d) {
                  this.parent(a, b, c, d), this._setUpSubscriptions();
                },
                getParams: function () {
                  return {
                    fbe_extras: "string",
                    fbe_redirect_uri: "string",
                    fbe_scopes: "string",
                    fbe_state: "string",
                  };
                },
                _setUpSubscriptions: function () {
                  var a = this;
                  this.subscribe("xd.lwiadsinsights.load", function (b) {
                    a._createIframe(b);
                  });
                },
                _createIframe: function (a) {
                  b("sdk.createIframe")({
                    url: a.iframeURL,
                    name: "LWIAdsInsightsRootIframe",
                    root: document.body,
                    height: 800,
                    width: 1050,
                  });
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "safeEval",
            [],
            function (a, b, c, d, e, f) {
              function a(a, b) {
                if (a === null || typeof a === "undefined") return;
                if (typeof a !== "string") return a;
                return /^\w+$/.test(a) && typeof window[a] === "function"
                  ? window[a].apply(null, b || [])
                  : Function(
                      'return eval("' + a.replace(/\"/g, '\\"') + '");'
                    ).apply(null, b || []);
              }
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.LoginButton",
            [
              "IframePlugin",
              "Log",
              "guid",
              "safeEval",
              "sdk.Auth",
              "sdk.Dialog",
              "sdk.ErrorHandling",
              "sdk.Impressions",
              "sdk.PluginUtils",
              "sdk.Runtime",
              "sdk.Scribe",
              "sdk.UIServer",
              "sdk.XD",
              "sdk.feature",
              "sdk.getContextType",
              "sdk.ui",
            ],
            function (a, b, c, d, e, f) {
              var g = b("sdk.feature")("https_only_learn_more", "");
              function h(a, c, d) {
                a &&
                  (typeof a === "string"
                    ? b("sdk.ErrorHandling").unguard(b("safeEval"))(a, d)
                    : a.apply &&
                      b("sdk.ErrorHandling")
                        .unguard(a)
                        .apply(c, d || []));
              }
              function i(a, c, d) {
                a.id = b("guid")();
                a.plugin_prepare = !0;
                a.origin = b("sdk.getContextType")();
                a.domain = location.hostname;
                a.fallback_redirect_uri = document.location.href;
                var e = b("sdk.feature")("e2e_tracking", !0);
                e && (a.e2e = {});
                e = function (a) {
                  f != null &&
                    b("sdk.XD").sendToFacebook(c, {
                      method: "loginComplete",
                      params: ES("JSON", "stringify", !1, {
                        frame_name: f.id,
                        status: b("sdk.Runtime").getLoginStatus(),
                      }),
                    }),
                    d(a);
                };
                var f = b("sdk.UIServer").prepareCall(a, e);
                f != null &&
                  ((f.dims = {}),
                  (f.dims.screenX = window.screenX),
                  (f.dims.screenY = window.screenY),
                  (f.dims.outerWidth = window.outerWidth),
                  (f.dims.outerHeight = window.outerHeight),
                  (f.dims.screenWidth = window.screen.width));
                b("sdk.XD").sendToFacebook(c, {
                  method: "loginButtonStateInit",
                  params: ES("JSON", "stringify", !1, { call: f }),
                });
              }
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  if (location.protocol !== "https:") {
                    var f =
                      "The Login Button plugin no longer works on http pages. Please update your site to use https for Facebook Login. %s";
                    b("Log").log("error", -1, f, g);
                    b("sdk.feature")("https_only_scribe_logging", !0) &&
                      b("sdk.Scribe").log("jssdk_error", {
                        appId: b("sdk.Runtime").getClientID(),
                        error: "HttpsOnly",
                        extra: { message: "LoginButton" },
                      });
                  }
                  this.parent(a, c, d, e);
                  var j = b("sdk.PluginUtils").getVal(e, "on_login"),
                    k = null,
                    l = this._iframeOptions.name;
                  j &&
                    ((k = function (a) {
                      if (a.error_code) {
                        b("Log").debug(
                          "Plugin Return Error (%s): %s",
                          a.error_code,
                          a.error_message || a.error_description
                        );
                        return;
                      }
                      h(j, null, [a]);
                    }),
                    this.subscribe("login.status", k));
                  var m = function (a) {
                    h(k, null, [a]),
                      b("sdk.XD").sendToFacebook(l, {
                        method: "loginReload",
                        params: ES("JSON", "stringify", !1, a),
                      });
                  };
                  this.subscribe("xd.login_button_dialog_open", function (a) {
                    b("sdk.ui")(
                      ES("JSON", "parse", !1, a.params),
                      function (a) {
                        b("sdk.XD").sendToFacebook(l, {
                          method: "loginComplete",
                          params: "{}",
                        }),
                          m(a);
                      }
                    );
                  });
                  this.subscribe("xd.login_button_prepare_call", function (a) {
                    var c = ES("JSON", "parse", !1, a.params),
                      d = a.params;
                    i(c, l, m);
                    b("sdk.Auth").subscribe("status.change", function (a) {
                      var c = ES("JSON", "parse", !1, d);
                      c.logger_id = b("guid")();
                      a != null &&
                        a.status != null &&
                        a.status !== "connected" &&
                        i(c, l, m);
                    });
                  });
                  this.subscribe("xd.login_button_click", function (a) {
                    var c = ES("JSON", "parse", !1, a.params);
                    if (c.popup) {
                      if (b("sdk.feature")("e2e_tracking", !0)) {
                        a = b("sdk.Dialog").get(c.call.id);
                        a.subscribe("e2e:end", function (a) {
                          (a.method = c.call.params.method),
                            (a.display = c.call.params.display),
                            b("Log").debug(
                              "e2e: %s",
                              ES("JSON", "stringify", !1, a)
                            ),
                            b("sdk.Impressions").log(114, { payload: a });
                        });
                      }
                    } else
                      b("sdk.feature")("popup_blocker_scribe_logging", !0) &&
                        b("sdk.Scribe").log("jssdk_error", {
                          appId: b("sdk.Runtime").getClientID(),
                          error: "POPUP_MAYBE_BLOCKED_NEW",
                          extra: { call: c.call.name },
                        });
                  });
                  var n = function () {
                    h(k, null, [
                      {
                        status: b("sdk.Runtime").getLoginStatus(),
                        authResponse: b("sdk.Auth").getAuthResponse(),
                      },
                    ]);
                  };
                  this.subscribe("xd.login_button_connected", n);
                  this.subscribe("xd.login_button_popup_closed", function () {
                    b("sdk.Auth").getLoginStatus(n, !0);
                  });
                },
                shouldIgnoreWidth: function () {
                  return !1;
                },
                getParams: function () {
                  return {
                    scope: "string",
                    asset_scope: "string",
                    perms: "string",
                    size: "string",
                    login_text: "text",
                    show_faces: "bool",
                    max_rows: "string",
                    show_login_face: "bool",
                    show_login_numbers: "bool",
                    registration_url: "url_maybe",
                    auto_logout_link: "bool",
                    one_click: "bool",
                    show_banner: "bool",
                    auth_type: "string",
                    default_audience: "string",
                    use_continue_as: "bool",
                    layout: "string",
                    button_type: "string",
                    width: "px",
                    height: "px",
                    force_confirmation: "bool",
                    messenger_page_id: "string",
                    reset_messenger_state: "bool",
                  };
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "isNode",
            [],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                var b;
                b =
                  a != null
                    ? (b = a.ownerDocument) != null
                      ? b
                      : a
                    : document;
                b = (b = b.defaultView) != null ? b : window;
                return !!(
                  a != null &&
                  (typeof b.Node === "function"
                    ? a instanceof b.Node
                    : typeof a === "object" &&
                      typeof a.nodeType === "number" &&
                      typeof a.nodeName === "string")
                );
              }
            },
            null
          );
          __d(
            "isTextNode",
            ["isNode"],
            function (a, b, c, d, e, f) {
              e.exports = a;
              function a(a) {
                return b("isNode")(a) && a.nodeType == 3;
              }
            },
            null
          );
          __d(
            "containsNode",
            ["isTextNode"],
            function (a, b, c, d, e, f) {
              e.exports = g;
              function g(a, c) {
                if (!a || !c) return !1;
                else if (a === c) return !0;
                else if (b("isTextNode")(a)) return !1;
                else if (b("isTextNode")(c)) return g(a, c.parentNode);
                else if ("contains" in a) return a.contains(c);
                else if (a.compareDocumentPosition)
                  return !!(a.compareDocumentPosition(c) & 16);
                else return !1;
              }
            },
            null
          );
          __d(
            "sdk.XFBML.Quote",
            [
              "DOMEventListener",
              "IframePlugin",
              "containsNode",
              "sdk.DOM",
              "sdk.UA",
              "sdk.XD",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g = "fb-quotable",
                h = 155,
                i = 70,
                j = "",
                k = null,
                l = [],
                m = !1,
                n = null,
                o = b("sdk.UA").mobile();
              function p(a) {
                a = a.getRangeAt(0);
                a = a.startContainer;
                return a.nodeType === 3 ? a.parentNode : a;
              }
              function q(a) {
                if (!document.getSelection || o) return;
                a = document.getSelection();
                if (a.rangeCount === 0) {
                  s();
                  return;
                }
                var c = l.length;
                s();
                if (c) {
                  var d = !1;
                  for (var e = 0; e < c; e++)
                    if (b("containsNode")(l[e], a.focusNode)) {
                      d = !0;
                      break;
                    }
                  if (!d) return;
                }
                j = a.toString();
                if (j === "") {
                  s();
                  return;
                }
                j = j.toString().replace(/\s+/g, " ").trim();
                c = Number(b("sdk.feature")("sharequotelimit", 500));
                if ([].concat(j).length > c) {
                  e = [].concat(j);
                  e.length = c - 3;
                  j = e.join("") + "...";
                }
                if (!m && n) {
                  p(a).appendChild(n);
                  d = r(a);
                  n.style.left = d.x + "px";
                  n.style.top = d.y + "px";
                }
              }
              function r(a) {
                var b = n && n.offsetWidth,
                  c = b ? n.offsetHeight : i;
                b = b ? n.offsetWidth : h;
                a = a.getRangeAt(0);
                var d = document.createElement("span"),
                  e = document.createElement("span"),
                  f = document.createRange();
                f.setStart(a.startContainer, a.startOffset);
                f.insertNode(d);
                f = document.createRange();
                f.setStart(a.endContainer, a.endOffset);
                f.insertNode(e);
                a = d.offsetTop - c;
                f = d.offsetLeft + (e.offsetLeft - d.offsetLeft) / 2 - b / 2;
                d.parentNode.removeChild(d);
                e.parentNode.removeChild(e);
                return { x: f, y: a };
              }
              function s() {
                (j = ""), !m && n && (n.style.left = "-9999px");
              }
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  var f = this;
                  if (k) return k;
                  this.parent(a, c, d, e);
                  m = b("sdk.DOM").getAttr(a, "layout") === "button";
                  n = a;
                  n.style.position = "absolute";
                  n.style.display = "";
                  b("DOMEventListener").add(document, "keyup", q);
                  b("DOMEventListener").add(document, "mouseup", q);
                  this.subscribe("xd.getTextSelection", function () {
                    b("sdk.XD").sendToFacebook(f._iframeOptions.name, {
                      method: "setTextSelection",
                      params: ES("JSON", "stringify", !1, { text: j }),
                    }),
                      s();
                  });
                  l = ES(
                    "Array",
                    "from",
                    !1,
                    document.getElementsByTagName("*")
                  ).filter(function (a) {
                    return (
                      a.nodeName.toLowerCase() === "article" ||
                      b("sdk.DOM").containsCss(a, g)
                    );
                  });
                  s();
                  k = this;
                  return k;
                },
                getParams: function () {
                  return { href: "url", layout: "string" };
                },
              });
              e.exports = a;
            },
            null
          );
          __d(
            "sdk.XFBML.Save",
            [
              "IframePlugin",
              "UrlMap",
              "sdk.Content",
              "sdk.DOM",
              "sdk.DialogUtils",
              "sdk.Event",
              "sdk.Runtime",
              "sdk.UA",
              "sdk.XD",
              "sdk.createIframe",
            ],
            function (a, b, c, d, e, f) {
              "use strict";
              var g;
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  var f = this;
                  this.parent(a, c, d, e);
                  var h = b("sdk.UA").mobile();
                  this.subscribe("xd.savePluginGetBlankIframe", function (a) {
                    var c,
                      d = function (a) {
                        a && b("sdk.DOM").removeCss(a, "fb_invisible");
                      },
                      e = function (a) {
                        a && b("sdk.DOM").addCss(a, "fb_invisible");
                      };
                    h &&
                      ((c = b("sdk.DialogUtils").setupNewDarkOverlay()),
                      e(c),
                      b("sdk.Content").append(c),
                      b("sdk.DialogUtils").addDoubleClickAction(
                        c,
                        function () {
                          return j.forEach(e);
                        },
                        5e3
                      ));
                    var i = f.setupNewIframeDialog(
                      ES("JSON", "parse", !1, a.data),
                      a.fromIframe
                    );
                    e(i);
                    b("sdk.Content").append(i);
                    var j = [i, c],
                      k = function () {
                        j.forEach(e),
                          b("sdk.DialogUtils").onDialogHideCleanup(h),
                          window.clearInterval(g);
                      },
                      l;
                    f.subscribe("xd.savePluginShowIframe", function () {
                      b("sdk.Event").fire("savePlugin:hideDialog"),
                        j.forEach(d),
                        f.positionOnScreen(i, c),
                        !h &&
                          !l &&
                          (l = b("sdk.DialogUtils").addIdleDesktopAction(
                            i,
                            k,
                            7e3
                          ));
                    });
                    f.subscribe("xd.savePluginHideIframe", function () {
                      return k();
                    });
                    b("sdk.Event").subscribe(
                      "savePlugin:hideDialog",
                      function () {
                        return k();
                      }
                    );
                    var m = window.setInterval(function () {
                      var b = document.getElementsByName(a.fromIframe);
                      b.length === 0 &&
                        (window.clearInterval(m),
                        k(),
                        j.forEach(function (a) {
                          a && a.parentNode.removeChild(a);
                        }));
                    }, 500);
                  });
                },
                positionOnScreen: function (a, c) {
                  var d = b("sdk.UA").mobile();
                  if (d) {
                    var e = function (a, c) {
                      c != null &&
                        b("sdk.DialogUtils").setDialogPositionToCenter(c, d),
                        b("sdk.DialogUtils").setDialogPositionToCenter(a, d);
                    };
                    e(a, c);
                    b("sdk.DialogUtils").addMobileOrientationChangeAction(
                      function (b) {
                        e(a, c);
                      }
                    );
                    g = window.setInterval(function () {
                      return e(a, c);
                    }, 100);
                  } else
                    b("sdk.DOM").setStyle(a, "position", "fixed"),
                      b("sdk.DOM").setStyle(a, "top", "20px"),
                      b("sdk.DOM").setStyle(a, "right", "20px");
                },
                getOverlayIFrameURL: function () {
                  return (
                    b("UrlMap").resolve("www") +
                    (b("sdk.Runtime").getIsVersioned()
                      ? "/" + b("sdk.Runtime").getVersion()
                      : "") +
                    "/plugins/save/overlay?app_id=" +
                    b("sdk.Runtime").getClientID()
                  );
                },
                setupNewIframeDialog: function (a, c) {
                  var d = this,
                    e = b("sdk.DialogUtils").setupNewDialog(),
                    f = function () {
                      b("sdk.XD").sendToFacebook(c, {
                        method: "saveOverlayIFrameAck",
                        params: ES("JSON", "stringify", !1, {
                          name: "overlay_" + d._iframeOptions.name,
                        }),
                      });
                    };
                  b("sdk.createIframe")({
                    url: this.getOverlayIFrameURL(),
                    name: "overlay_" + this._iframeOptions.name,
                    root: e.contentRoot,
                    tabindex: -1,
                    onload: ES(f, "bind", !0, this),
                  });
                  b("sdk.DOM").addCss(e.contentRoot, "fb_dialog_iframe");
                  ES(
                    "Object",
                    "assign",
                    !1,
                    e.dialogElement.style,
                    a.style || {}
                  );
                  b("sdk.DOM").setStyle(
                    e.dialogElement,
                    "width",
                    a.width + "px"
                  );
                  b("sdk.DOM").setStyle(
                    e.dialogElement,
                    "height",
                    a.height + "px"
                  );
                  a.classList.forEach(function (a) {
                    return b("sdk.DOM").addCss(e.dialogElement, a);
                  });
                  b("sdk.DOM").removeCss(e.dialogElement, "fb_dialog_advanced");
                  return e.dialogElement;
                },
                getParams: function () {
                  return { uri: "url", url_category: "string", size: "string" };
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.XFBML.ShareButton",
            ["IframePlugin"],
            function (a, b, c, d, e, f) {
              "use strict";
              a = b("IframePlugin").extend({
                constructor: function (a, b, c, d) {
                  this.parent(a, b, c, d);
                },
                getParams: function () {
                  return {
                    href: "url",
                    layout: "string",
                    mobile_iframe: "bool",
                    type: "string",
                    size: "string",
                  };
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "sdk.XFBML.Video",
            [
              "Assert",
              "IframePlugin",
              "ObservableMixin",
              "sdk.Event",
              "sdk.XD",
            ],
            function (a, b, c, d, e, f) {
              var g = (function () {
                  function a(a) {
                    (this.$1 = a.isMuted),
                      (this.$2 = a.volume),
                      (this.$3 = a.timePosition),
                      (this.$4 = a.duration);
                  }
                  var b = a.prototype;
                  b.update = function (a) {
                    a.isMuted !== void 0 && (this.$1 = a.isMuted),
                      a.volume !== void 0 && (this.$2 = a.volume),
                      a.timePosition !== void 0 && (this.$3 = a.timePosition),
                      a.duration !== void 0 && (this.$4 = a.duration);
                  };
                  b.isMuted = function () {
                    return this.$1;
                  };
                  b.getVolume = function () {
                    return this.$1 ? 0 : this.$2;
                  };
                  b.getCurrentPosition = function () {
                    return this.$3;
                  };
                  b.getDuration = function () {
                    return this.$4;
                  };
                  return a;
                })(),
                h = (function () {
                  function a(a, b, c) {
                    (this.$1 = a), (this.$2 = b), (this.$3 = c);
                  }
                  var c = a.prototype;
                  c.play = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "play",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.pause = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "pause",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.seek = function (a) {
                    b("Assert").isNumber(a, "Invalid argument"),
                      b("sdk.XD").sendToFacebook(this.$1, {
                        method: "seek",
                        params: ES("JSON", "stringify", !1, { target: a }),
                      });
                  };
                  c.mute = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "mute",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.unmute = function () {
                    b("sdk.XD").sendToFacebook(this.$1, {
                      method: "unmute",
                      params: ES("JSON", "stringify", !1, {}),
                    });
                  };
                  c.setVolume = function (a) {
                    b("Assert").isNumber(a, "Invalid argument"),
                      b("sdk.XD").sendToFacebook(this.$1, {
                        method: "setVolume",
                        params: ES("JSON", "stringify", !1, { volume: a }),
                      });
                  };
                  c.isMuted = function () {
                    return this.$3.isMuted();
                  };
                  c.getVolume = function () {
                    return this.$3.getVolume();
                  };
                  c.getCurrentPosition = function () {
                    return this.$3.getCurrentPosition();
                  };
                  c.getDuration = function () {
                    return this.$3.getDuration();
                  };
                  c.subscribe = function (a, c) {
                    var d = this;
                    b("Assert").isString(a, "Invalid argument");
                    b("Assert").isFunction(c, "Invalid argument");
                    this.$2.subscribe(a, c);
                    return {
                      release: function () {
                        d.$2.unsubscribe(a, c);
                      },
                    };
                  };
                  return a;
                })();
              a = b("IframePlugin").extend({
                constructor: function (a, c, d, e) {
                  this.parent(a, c, d, e),
                    (this._videoController = null),
                    (this._sharedObservable = null),
                    (this._sharedVideoCache = null),
                    this.subscribe("xd.onVideoAPIReady", function (a) {
                      (this._sharedObservable = new (b("ObservableMixin"))()),
                        (this._sharedVideoCache = new g(
                          ES("JSON", "parse", !1, a.data)
                        )),
                        (this._videoController = new h(
                          this._iframeOptions.name,
                          this._sharedObservable,
                          this._sharedVideoCache
                        )),
                        b("sdk.Event").fire("xfbml.ready", {
                          type: "video",
                          id: e.id,
                          instance: this._videoController,
                        });
                    }),
                    this.subscribe("xd.stateChange", function (a) {
                      this._sharedObservable.inform(a.state);
                    }),
                    this.subscribe("xd.cachedStateUpdateRequest", function (a) {
                      this._sharedVideoCache.update(
                        ES("JSON", "parse", !1, a.data)
                      );
                    });
                },
                getParams: function () {
                  return {
                    allowfullscreen: "bool",
                    autoplay: "bool",
                    controls: "bool",
                    href: "url",
                    show_captions: "bool",
                    show_text: "bool",
                  };
                },
                getConfig: function () {
                  return { fluid: !0, full_width: !0 };
                },
              });
              c = a;
              e.exports = c;
            },
            null
          );
          __d(
            "legacy:fb.xfbml.plugins",
            [
              "IframePlugin",
              "PluginConfig",
              "PluginTags",
              "XFBML",
              "sdk.XFBML.Comments",
              "sdk.XFBML.CommentsCount",
              "sdk.XFBML.CustomerChat",
              "sdk.XFBML.LWIAdsCreation",
              "sdk.XFBML.LWIAdsInsights",
              "sdk.XFBML.LoginButton",
              "sdk.XFBML.Quote",
              "sdk.XFBML.Save",
              "sdk.XFBML.ShareButton",
              "sdk.XFBML.Video",
              "sdk.feature",
            ],
            function (a, b, c, d, e, f) {
              var g = {
                  comments: b("sdk.XFBML.Comments"),
                  comments_count: b("sdk.XFBML.CommentsCount"),
                  login_button: b("sdk.XFBML.LoginButton"),
                  customerchat: b("sdk.XFBML.CustomerChat"),
                  lwi_ads_creation: b("sdk.XFBML.LWIAdsCreation"),
                  lwi_ads_insights: b("sdk.XFBML.LWIAdsInsights"),
                  quote: b("sdk.XFBML.Quote"),
                  save: b("sdk.XFBML.Save"),
                  share_button: b("sdk.XFBML.ShareButton"),
                  video: b("sdk.XFBML.Video"),
                },
                h = b("sdk.feature")("plugin_tags_blacklist", []);
              Object.keys(b("PluginTags")).forEach(function (a) {
                if (h.indexOf(a) !== -1) return;
                b("XFBML").registerTag({
                  xmlns: "fb",
                  localName: a.replace(/_/g, "-"),
                  ctor: b("IframePlugin").withParams(
                    b("PluginTags")[a],
                    b("PluginConfig")[a]
                  ),
                });
              });
              Object.keys(g).forEach(function (a) {
                if (h.indexOf(a) !== -1) return;
                b("XFBML").registerTag({
                  xmlns: "fb",
                  localName: a.replace(/_/g, "-"),
                  ctor: g[a],
                });
              });
            },
            3
          );
        }
      }.call(global));
    })();
} catch (e) {
  var i = new Image();
  i.crossOrigin = "anonymous";
  i.dataset.testid = "fbSDKErrorReport";
  i.src =
    "https://www.facebook.com/platform/scribe_endpoint.php/?c=jssdk_error&m=" +
    encodeURIComponent(
      '{"error":"LOAD", "extra": {"name":"' +
        e.name +
        '","line":"' +
        (e.lineNumber || e.line) +
        '","script":"' +
        (e.fileName || e.sourceURL || e.script || "sdk.js") +
        '","stack":"' +
        (e.stackTrace || e.stack) +
        '","revision":"1004028416","namespace":"FB","message":"' +
        e.message +
        '"}}'
    );
  document.body.appendChild(i);
}
