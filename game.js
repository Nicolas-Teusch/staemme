/**** polyfill/Array.js ****/
Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
    value: function(r) {
        if (null == this)
            throw new TypeError("this is null or not defined");
        for (var t = Object(this), e = t.length >>> 0, n = arguments[1] >> 0, i = n < 0 ? Math.max(e + n, 0) : Math.min(n, e), o = arguments[2], a = void 0 === o ? e : o >> 0, f = a < 0 ? Math.max(e + a, 0) : Math.min(a, e); i < f; )
            t[i] = r,
            i++;
        return t
    }
}),
Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function(r) {
        if (null == this)
            throw new TypeError('"this" is null or not defined');
        var t = Object(this)
          , e = t.length >>> 0;
        if ("function" != typeof r)
            throw new TypeError("predicate must be a function");
        for (var n = arguments[1], i = 0; i < e; ) {
            var o = t[i];
            if (r.call(n, o, i, t))
                return o;
            i++
        }
    },
    configurable: !0,
    writable: !0
}),
Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function(r, t) {
        if (null == this)
            throw new TypeError('"this" is null or not defined');
        var e = Object(this)
          , n = e.length >>> 0;
        if (0 === n)
            return !1;
        var i, o, a = 0 | t, f = Math.max(a >= 0 ? a : n - Math.abs(a), 0);
        for (; f < n; ) {
            if ((i = e[f]) === (o = r) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o))
                return !0;
            f++
        }
        return !1
    }
});

;/**** polyfill/String.js ****/
String.prototype.repeat || (String.prototype.repeat = function(t) {
    "use strict";
    if (null == this)
        throw new TypeError("can't convert " + this + " to object");
    var r = "" + this;
    if ((t = +t) != t && (t = 0),
    t < 0)
        throw new RangeError("repeat count must be non-negative");
    if (t == 1 / 0)
        throw new RangeError("repeat count must be less than infinity");
    if (t = Math.floor(t),
    0 == r.length || 0 == t)
        return "";
    if (r.length * t >= 1 << 28)
        throw new RangeError("repeat count must not overflow maximum string size");
    for (var e = "", n = 0; n < t; n++)
        e += r;
    return e
}
),
String.prototype.padStart || (String.prototype.padStart = function(t, r) {
    return t >>= 0,
    r = String(void 0 !== r ? r : " "),
    this.length > t ? String(this) : ((t -= this.length) > r.length && (r += r.repeat(t / r.length)),
    r.slice(0, t) + String(this))
}
);

;/**** jquery/jquery-3.5.1.js ****/
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = Object.getPrototypeOf
      , i = n.slice
      , o = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , a = n.push
      , s = n.indexOf
      , u = {}
      , l = u.toString
      , c = u.hasOwnProperty
      , f = c.toString
      , p = f.call(Object)
      , d = {}
      , h = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , v = e.document
      , y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e,
        t)
            for (r in y)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var b = function(e, t) {
        return new b.fn.init(e,t)
    };
    function w(e) {
        var t = !!e && "length"in e && e.length
          , n = x(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    b.fn = b.prototype = {
        jquery: "3.5.1",
        constructor: b,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = b.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return b.each(this, e)
        },
        map: function(e) {
            return this.pushStack(b.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(b.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(b.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    b.extend = b.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || h(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (b.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || b.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = b.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    b.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (w(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (w(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, a = 0, s = [];
            if (w(e))
                for (r = e.length; a < r; a++)
                    null != (i = t(e[a], a, n)) && s.push(i);
            else
                for (a in e)
                    null != (i = t(e[a], a, n)) && s.push(i);
            return o(s)
        },
        guid: 1,
        support: d
    }),
    "function" == typeof Symbol && (b.fn[Symbol.iterator] = n[Symbol.iterator]),
    b.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var T = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ue(), S = ue(), k = ue(), A = ue(), N = function(e, t) {
            return e === t && (f = !0),
            0
        }, D = {}.hasOwnProperty, j = [], q = j.pop, L = j.push, H = j.push, O = j.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            p()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(j = O.call(w.childNodes), w.childNodes),
            j[w.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: j.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, r, i) {
            var o, s, l, c, f, h, y, m = t && t.ownerDocument, w = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                return r;
            if (!i && (p(t),
            t = t || d,
            g)) {
                if (11 !== w && (f = Z.exec(e)))
                    if (o = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return H.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return H.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (y = e,
                    m = t,
                    1 === w && (U.test(e) || z.test(e))) {
                        for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)),
                        s = (h = a(e)).length; s--; )
                            h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                        y = h.join(",")
                    }
                    try {
                        return H.apply(r, m.querySelectorAll(y)),
                        r
                    } catch (t) {
                        A(e, !0)
                    } finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace($, "$1"), t, r, i)
        }
        function ue() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
        }
        function le(e) {
            return e[b] = !0,
            e
        }
        function ce(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ge(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function ve(e) {
            return le(function(t) {
                return t = +t,
                le(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = se.support = {},
        o = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        p = se.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement,
            g = !o(d),
            w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
            n.scope = ce(function(e) {
                return h.appendChild(e).appendChild(d.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            n.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ce(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = K.test(d.getElementsByClassName),
            n.getById = ce(function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            y = [],
            v = [],
            (n.qsa = K.test(d.querySelectorAll)) && (ce(function(e) {
                var t;
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                (t = d.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function(e) {
                n.disconnectedMatch = m.call(e, "*"),
                m.call(e, "[s!='']:x"),
                y.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            y = y.length && new RegExp(y.join("|")),
            t = K.test(h.compareDocumentPosition),
            x = t || K.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                if (i === o)
                    return pe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (p(e),
            n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
                try {
                    var r = m.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {
                    A(t, !0)
                }
            return se(t, d, null, [e]).length > 0
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != d && p(e),
            x(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(N),
            f) {
                for (; t = e[o++]; )
                    t === e[o] && (i = r.push(o));
                for (; i--; )
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = se.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += i(t);
            return n
        }
        ,
        (r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = se.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, y = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                        if (v) {
                            if (o) {
                                for (; g; ) {
                                    for (p = t; p = p[g]; )
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && m) {
                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t)); )
                                    ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; )
                            e[r = P(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: le(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace($, "$1"));
                    return r[b] ? le(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: le(function(e) {
                    return function(t) {
                        return se(e, t).length > 0
                    }
                }),
                contains: le(function(e) {
                    return e = e.replace(te, ne),
                    function(t) {
                        return (t.textContent || i(t)).indexOf(e) > -1
                    }
                }),
                lang: le(function(e) {
                    return V.test(e || "") || se.error("unsupported lang: " + e),
                    e = e.replace(te, ne).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = de(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = he(t);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function we(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(e, t, n, r, i, o) {
            return r && !r[b] && (r = Ce(r)),
            i && !i[b] && (i = Ce(i, o)),
            le(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), v = !e || !o && t ? g : Te(g, p, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, y, s, u),
                r)
                    for (l = Te(y, d),
                    r(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [],
                            c = y.length; c--; )
                                (f = y[c]) && l.push(v[c] = f);
                            i(null, y = [], l, u)
                        }
                        for (c = y.length; c--; )
                            (f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    y = Te(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, u) : H.apply(a, y)
            })
        }
        function Ee(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function(e) {
                return e === t
            }, s, !0), f = be(function(e) {
                return P(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [be(we(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                            ;
                        return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                    }
                    p.push(n)
                }
            return we(p)
        }
        return me.prototype = r.filters = r.pseudos,
        r.setFilters = new me,
        a = se.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = S[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = r.preFilter; s; ) {
                for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = z.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace($, " ")
                }),
                s = s.slice(n.length)),
                r.filter)
                    !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
        }
        ,
        s = se.compile = function(e, t) {
            var n, i = [], o = [], s = k[e + " "];
            if (!s) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                (s = k(e, function(e, t) {
                    var n = t.length > 0
                      , i = e.length > 0
                      , o = function(o, a, s, u, c) {
                        var f, h, v, y = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, S = C.length;
                        for (c && (l = a == d || a || c); m !== S && null != (f = C[m]); m++) {
                            if (i && f) {
                                for (h = 0,
                                a || f.ownerDocument == d || (p(f),
                                s = !g); v = e[h++]; )
                                    if (v(f, a || d, s)) {
                                        u.push(f);
                                        break
                                    }
                                c && (T = E)
                            }
                            n && ((f = !v && f) && y--,
                            o && x.push(f))
                        }
                        if (y += m,
                        n && m !== y) {
                            for (h = 0; v = t[h++]; )
                                v(x, b, a, s);
                            if (o) {
                                if (y > 0)
                                    for (; m--; )
                                        x[m] || b[m] || (b[m] = q.call(u));
                                b = Te(b)
                            }
                            H.apply(u, b),
                            c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                        }
                        return c && (T = E,
                        l = w),
                        x
                    };
                    return n ? le(o) : o
                }(o, i))).selector = e
            }
            return s
        }
        ,
        u = se.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o],
                !r.relative[c = l.type]); )
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && xe(u)))
                            return H.apply(n, i),
                            n;
                        break
                    }
            }
            return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(N).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(e);
    b.find = T,
    b.expr = T.selectors,
    b.expr[":"] = b.expr.pseudos,
    b.uniqueSort = b.unique = T.uniqueSort,
    b.text = T.getText,
    b.isXMLDoc = T.isXML,
    b.contains = T.contains,
    b.escapeSelector = T.escape;
    var C = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && b(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , E = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , S = b.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function N(e, t, n) {
        return h(t) ? b.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? b.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? b.grep(e, function(e) {
            return s.call(t, e) > -1 !== n
        }) : b.filter(t, e, n)
    }
    b.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? b.find.matchesSelector(r, e) ? [r] : [] : b.find.matches(e, b.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    b.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(b(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (b.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                b.find(e, i[t], n);
            return r > 1 ? b.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(N(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(N(this, e || [], !0))
        },
        is: function(e) {
            return !!N(this, "string" == typeof e && S.test(e) ? b(e) : e || [], !1).length
        }
    });
    var D, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (b.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : j.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof b ? t[0] : t,
                b.merge(this, b.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                A.test(r[1]) && b.isPlainObject(t))
                    for (r in t)
                        h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(b) : b.makeArray(e, this)
    }
    ).prototype = b.fn,
    D = b(v);
    var q = /^(?:parents|prev(?:Until|All))/
      , L = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function H(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    b.fn.extend({
        has: function(e) {
            var t = b(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (b.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && b(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && b.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? b.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(b(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(b.uniqueSort(b.merge(this.get(), b(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    b.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return C(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return C(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return C(e, "nextSibling")
        },
        prevAll: function(e) {
            return C(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return C(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return C(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e),
            b.merge([], e.childNodes))
        }
    }, function(e, t) {
        b.fn[e] = function(n, r) {
            var i = b.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = b.filter(r, i)),
            this.length > 1 && (L[e] || b.uniqueSort(i),
            q.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var O = /[^\x20\t\r\n\f]+/g;
    function P(e) {
        return e
    }
    function R(e) {
        throw e
    }
    function M(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    b.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return b.each(e.match(O) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }(e) : b.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    b.each(n, function(n, r) {
                        h(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return b.each(arguments, function(e, t) {
                    for (var n; (n = b.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? b.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    b.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", b.Callbacks("memory"), b.Callbacks("memory"), 2], ["resolve", "done", b.Callbacks("once memory"), b.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", b.Callbacks("once memory"), b.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return b.Deferred(function(t) {
                        b.each(n, function(n, r) {
                            var i = h(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    h(l) ? i ? l.call(e, a(o, n, P, i), a(o, n, R, i)) : (o++,
                                    l.call(e, a(o, n, P, i), a(o, n, R, i), a(o, n, P, n.notifyWith))) : (r !== P && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    b.Deferred.exceptionHook && b.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== R && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (b.Deferred.getStackHook && (c.stackTrace = b.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return b.Deferred(function(e) {
                        n[0][3].add(a(0, e, h(i) ? i : P, e.notifyWith)),
                        n[1][3].add(a(0, e, h(t) ? t : P)),
                        n[2][3].add(a(0, e, h(r) ? r : R))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? b.extend(e, i) : i
                }
            }
              , o = {};
            return b.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = i.call(arguments)
              , a = b.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    o[e] = arguments.length > 1 ? i.call(arguments) : n,
                    --t || a.resolveWith(r, o)
                }
            };
            if (t <= 1 && (M(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || h(o[n] && o[n].then)))
                return a.then();
            for (; n--; )
                M(o[n], s(n), a.reject);
            return a.promise()
        }
    });
    var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    b.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && I.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    b.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var W = b.Deferred();
    function F() {
        v.removeEventListener("DOMContentLoaded", F),
        e.removeEventListener("load", F),
        b.ready()
    }
    b.fn.ready = function(e) {
        return W.then(e).catch(function(e) {
            b.readyException(e)
        }),
        this
    }
    ,
    b.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --b.readyWait : b.isReady) || (b.isReady = !0,
            !0 !== e && --b.readyWait > 0 || W.resolveWith(v, [b]))
        }
    }),
    b.ready.then = W.then,
    "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? e.setTimeout(b.ready) : (v.addEventListener("DOMContentLoaded", F),
    e.addEventListener("load", F));
    var B = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === x(n))
            for (s in i = !0,
            n)
                B(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        h(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(b(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , $ = /^-ms-/
      , _ = /-([a-z])/g;
    function z(e, t) {
        return t.toUpperCase()
    }
    function U(e) {
        return e.replace($, "ms-").replace(_, z)
    }
    var X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function V() {
        this.expando = b.expando + V.uid++
    }
    V.uid = 1,
    V.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[U(t)] = n;
            else
                for (r in t)
                    i[U(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t))in r ? [t] : t.match(O) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || b.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !b.isEmptyObject(t)
        }
    };
    var G = new V
      , Y = new V
      , Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , J = /[A-Z]/g;
    function K(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(J, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Y.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    b.extend({
        hasData: function(e) {
            return Y.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        removeData: function(e, t) {
            Y.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }),
    b.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Y.get(o),
                1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = U(r.slice(5)),
                        K(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Y.set(this, e)
            }) : B(this, function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = Y.get(o, e)) ? n : void 0 !== (n = K(o, e)) ? n : void 0;
                this.each(function() {
                    Y.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Y.remove(this, e)
            })
        }
    }),
    b.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = G.get(e, t),
                n && (!r || Array.isArray(n) ? r = G.access(e, t, b.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = b.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = b._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                b.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: b.Callbacks("once memory").add(function() {
                    G.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    b.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? b.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = b.queue(this, e, t);
                b._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && b.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                b.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = b.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = G.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$","i")
      , te = ["Top", "Right", "Bottom", "Left"]
      , ne = v.documentElement
      , re = function(e) {
        return b.contains(e.ownerDocument, e)
    }
      , ie = {
        composed: !0
    };
    ne.getRootNode && (re = function(e) {
        return b.contains(e.ownerDocument, e) || e.getRootNode(ie) === e.ownerDocument
    }
    );
    var oe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === b.css(e, "display")
    };
    function ae(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return b.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (b.cssNumber[t] ? "" : "px"), c = e.nodeType && (b.cssNumber[t] || "px" !== l && +u) && ee.exec(b.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; a--; )
                b.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            b.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var se = {};
    function ue(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = se[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = b.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        se[r] = i,
        i)
    }
    function le(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = G.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && oe(r) && (i[o] = ue(r))) : "none" !== n && (i[o] = "none",
            G.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    b.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                oe(this) ? b(this).show() : b(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = v.createDocumentFragment().appendChild(v.createElement("div")),
    (fe = v.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    d.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    d.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    d.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && k(e, t) ? b.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    d.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o))
                    b.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + b.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    b.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && b.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = re(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n)
                for (c = 0; o = a[c++]; )
                    he.test(o.type || "") && n.push(o);
        return f
    }
    var be = /^key/
      , we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return v.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return b().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = b.guid++)),
        e.each(function() {
            b.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, t, n) {
        n ? (G.set(e, t, !1),
        b.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, o, a = G.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (a.length)
                        (b.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (a = i.call(arguments),
                    G.set(this, t, a),
                    r = n(this, t),
                    this[t](),
                    a !== (o = G.get(this, t)) || r ? G.set(this, t, !1) : o = {},
                    a !== o)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        o.value
                } else
                    a.length && (G.set(this, t, {
                        value: b.event.trigger(b.extend(a[0], b.Event.prototype), a.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, t) && b.event.add(e, t, Ce)
    }
    b.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = G.get(e);
            if (X(e))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && b.find.matchesSelector(ne, i),
                n.guid || (n.guid = b.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(t) {
                    return void 0 !== b && b.event.triggered !== t.type ? b.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(O) || [""]).length; l--; )
                    d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = b.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = b.event.special[d] || {},
                    c = b.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && b.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    b.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = G.hasData(e) && G.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(O) || [""]).length; l--; )
                    if (d = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = b.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || b.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            b.event.remove(e, d + t[l], n, r, !0);
                b.isEmptyObject(u) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = b.event.fix(e), l = (G.get(this, "events") || Object.create(null))[u.type] || [], c = b.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = b.event.handlers.call(this, u, l),
                t = 0; (i = a[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((b.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? b(i, this).index(l) > -1 : b.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(b.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[b.expando] ? e : new b.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && k(t, "input") && Ae(t, "click", Ce),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && k(t, "input") && Ae(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && k(t, "input") && G.get(t, "click") || k(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    b.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    b.Event = function(e, t) {
        if (!(this instanceof b.Event))
            return new b.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && b.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[b.expando] = !0
    }
    ,
    b.Event.prototype = {
        constructor: b.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    b.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, b.event.addProp),
    b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        b.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se),
                !1
            },
            trigger: function() {
                return Ae(this, e),
                !0
            },
            delegateType: t
        }
    }),
    b.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        b.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, i = e.handleObj;
                return r && (r === this || b.contains(this, r)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    b.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                b(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ee),
            this.each(function() {
                b.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i
      , De = /checked\s*(?:[^=]|=\s*.checked.)/i
      , je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && b(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (s = G.get(e).events))
                for (i in G.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        b.event.add(t, i, s[i][n]);
            Y.hasData(e) && (o = Y.access(e),
            a = b.extend({}, o),
            Y.set(t, a))
        }
    }
    function Pe(e, t, n, r) {
        t = o(t);
        var i, a, s, u, l, c, f = 0, p = e.length, g = p - 1, v = t[0], y = h(v);
        if (y || p > 1 && "string" == typeof v && !d.checkClone && De.test(v))
            return e.each(function(i) {
                var o = e.eq(i);
                y && (t[0] = v.call(this, i, o.html())),
                Pe(o, t, n, r)
            });
        if (p && (a = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === i.childNodes.length && (i = a),
        a || r)) {
            for (u = (s = b.map(ve(i, "script"), Le)).length; f < p; f++)
                l = i,
                f !== g && (l = b.clone(l, !0, !0),
                u && b.merge(s, ve(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                b.map(s, He),
                f = 0; f < u; f++)
                    l = s[f],
                    he.test(l.type || "") && !G.access(l, "globalEval") && b.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? b._evalUrl && !l.noModule && b._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : m(l.textContent.replace(je, ""), l, c))
        }
        return e
    }
    function Re(e, t, n) {
        for (var r, i = t ? b.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || b.cleanData(ve(r)),
            r.parentNode && (n && re(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    b.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = re(e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return (a = ve(c, "script")).length > 0 && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = b.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (X(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? b.event.remove(n, r) : b.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[Y.expando] && (n[Y.expando] = void 0)
                }
        }
    }),
    b.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? b.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (b.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return b.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = b.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (b.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Pe(this, arguments, function(t) {
                var n = this.parentNode;
                b.inArray(this, e) < 0 && (b.cleanData(ve(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    b.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        b.fn[e] = function(e) {
            for (var n, r = [], i = b(e), o = i.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                b(i[s])[t](n),
                a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Me = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i")
      , Ie = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , We = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Fe = new RegExp(te.join("|"),"i");
    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = b.style(e, t)),
        !d.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ne.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                a = 36 === n(t.right),
                i = 36 === n(t.width),
                c.style.position = "absolute",
                o = 12 === n(c.offsetWidth / 3),
                ne.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, a, s, u, l = v.createElement("div"), c = v.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        d.clearCloneStyle = "content-box" === c.style.backgroundClip,
        b.extend(d, {
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelBoxStyles: function() {
                return t(),
                a
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == s && (t = v.createElement("table"),
                n = v.createElement("tr"),
                r = v.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px",
                n.style.height = "1px",
                r.style.height = "9px",
                ne.appendChild(t).appendChild(n).appendChild(r),
                i = e.getComputedStyle(n),
                s = parseInt(i.height) > 3,
                ne.removeChild(t)),
                s
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , ze = v.createElement("div").style
      , Ue = {};
    function Xe(e) {
        var t = b.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--; )
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/
      , Ge = /^--/
      , Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += b.css(e, n + te[a], !0, i)),
            r ? ("content" === n && (u -= b.css(e, "padding" + te[a], !0, i)),
            "margin" !== n && (u -= b.css(e, "border" + te[a] + "Width", !0, i))) : (u += b.css(e, "padding" + te[a], !0, i),
            "padding" !== n ? u += b.css(e, "border" + te[a] + "Width", !0, i) : s += b.css(e, "border" + te[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Ze(e, t, n) {
        var r = Ie(e)
          , i = (!d.boxSizingReliable() || n) && "border-box" === b.css(e, "boxSizing", !1, r)
          , o = i
          , a = Be(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!d.boxSizingReliable() && i || !d.reliableTrDimensions() && k(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === b.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === b.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e,t,n,r,i)
    }
    b.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = U(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = b.cssHooks[t] || b.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ee.exec(n)) && i[1] && (n = ae(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (b.cssNumber[s] ? "" : "px")),
                d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = U(t);
            return Ge.test(t) || (t = Xe(s)),
            (a = b.cssHooks[t] || b.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Be(e, t, r)),
            "normal" === i && t in Qe && (i = Qe[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    b.each(["height", "width"], function(e, t) {
        b.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !Ve.test(b.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, t, r) : We(e, Ye, function() {
                        return Ze(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = Ie(e), a = !d.scrollboxSize() && "absolute" === o.position, s = (a || r) && "border-box" === b.css(e, "boxSizing", !1, o), u = r ? Ke(e, t, r, s, o) : 0;
                return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ke(e, t, "border", !1, o) - .5)),
                u && (i = ee.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = b.css(e, t)),
                Je(0, n, u)
            }
        }
    }),
    b.cssHooks.marginLeft = $e(d.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    b.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        b.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (b.cssHooks[e + t].set = Je)
    }),
    b.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = b.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? b.style(e, t, n) : b.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    b.Tween = et,
    et.prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || b.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (b.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : et.propHooks._default.set(this),
            this
        }
    },
    et.prototype.init.prototype = et.prototype,
    et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = b.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                b.fx.step[e.prop] ? b.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !b.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : b.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    et.propHooks.scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    b.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    b.fx = et.prototype.init,
    b.fx.step = {};
    var tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
    function ot() {
        nt && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, b.fx.interval),
        b.fx.tick())
    }
    function at() {
        return e.setTimeout(function() {
            tt = void 0
        }),
        tt = Date.now()
    }
    function st(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = te[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function lt(e, t, n) {
        var r, i, o = 0, a = lt.prefilters.length, s = b.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = tt || at(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: b.extend({}, t),
            opts: b.extend(!0, {
                specialEasing: {},
                easing: b.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: tt || at(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = U(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = b.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); o < a; o++)
            if (r = lt.prefilters[o].call(l, e, c, l.opts))
                return h(r.stop) && (b._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return b.map(c, ut, l),
        h(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        b.fx.timer(b.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    b.Animation = b.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, ee.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(O);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                lt.tweeners[n] = lt.tweeners[n] || [],
                lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && oe(e), v = G.get(e, "fxshow");
            for (r in n.queue || (null == (a = b._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    b.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                rt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || b.style(e, r)
                }
            if ((u = !b.isEmptyObject(t)) || !b.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = G.get(e, "display")),
                "none" === (c = b.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = b.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === b.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = G.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        G.remove(e, "fxshow"),
                        d)
                            b.style(e, r, d[r])
                    })),
                    u = ut(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }),
    b.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? b.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return b.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in b.fx.speeds ? r.duration = b.fx.speeds[r.duration] : r.duration = b.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            h(r.old) && r.old.call(this),
            r.queue && b.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    b.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = b.isEmptyObject(e)
              , o = b.speed(t, n, r)
              , a = function() {
                var t = lt(this, b.extend({}, e), o);
                (i || G.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = b.timers
                  , a = G.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && it.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || b.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = G.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = b.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                b.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    b.each(["toggle", "show", "hide"], function(e, t) {
        var n = b.fn[t];
        b.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, i)
        }
    }),
    b.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        b.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    b.timers = [],
    b.fx.tick = function() {
        var e, t = 0, n = b.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || b.fx.stop(),
        tt = void 0
    }
    ,
    b.fx.timer = function(e) {
        b.timers.push(e),
        b.fx.start()
    }
    ,
    b.fx.interval = 13,
    b.fx.start = function() {
        nt || (nt = !0,
        ot())
    }
    ,
    b.fx.stop = function() {
        nt = null
    }
    ,
    b.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    b.fn.delay = function(t, n) {
        return t = b.fx && b.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = v.createElement("input")
          , t = v.createElement("select").appendChild(v.createElement("option"));
        e.type = "checkbox",
        d.checkOn = "" !== e.value,
        d.optSelected = t.selected,
        (e = v.createElement("input")).value = "t",
        e.type = "radio",
        d.radioValue = "t" === e.value
    }();
    var ct, ft = b.expr.attrHandle;
    b.fn.extend({
        attr: function(e, t) {
            return B(this, b.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                b.removeAttr(this, e)
            })
        }
    }),
    b.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? b.prop(e, t, n) : (1 === o && b.isXMLDoc(e) || (i = b.attrHooks[t.toLowerCase()] || (b.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void b.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = b.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && k(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(O);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? b.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    b.each(b.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ft[t] || b.find.attr;
        ft[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ft[a],
            ft[a] = i,
            i = null != n(e, t, r) ? a : null,
            ft[a] = o),
            i
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i
      , dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(O) || []).join(" ")
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || []
    }
    b.fn.extend({
        prop: function(e, t) {
            return B(this, b.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[b.propFix[e] || e]
            })
        }
    }),
    b.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && b.isXMLDoc(e) || (t = b.propFix[t] || t,
                i = b.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = b.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    d.optSelected || (b.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    b.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        b.propFix[this.toLowerCase()] = this
    }),
    b.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e))
                return this.each(function(t) {
                    b(this).addClass(e.call(this, t, gt(this)))
                });
            if ((t = vt(e)).length)
                for (; n = this[u++]; )
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (h(e))
                return this.each(function(t) {
                    b(this).removeClass(e.call(this, t, gt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = vt(e)).length)
                for (; n = this[u++]; )
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : h(e) ? this.each(function(n) {
                b(this).toggleClass(e.call(this, n, gt(this), t), t)
            }) : this.each(function() {
                var t, i, o, a;
                if (r)
                    for (i = 0,
                    o = b(this),
                    a = vt(e); t = a[i++]; )
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = gt(this)) && G.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + ht(gt(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    b.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, b(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = b.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = b.valHooks[i.type] || b.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
        }
    }),
    b.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = b.find.attr(e, "value");
                    return null != t ? t : ht(b.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                            if (t = b(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = b.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = b.inArray(b.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    b.each(["radio", "checkbox"], function() {
        b.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = b.inArray(b(e).val(), t) > -1
            }
        },
        d.checkOn || (b.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    d.focusin = "onfocusin"in e;
    var mt = /^(?:focusinfocus|focusoutblur)$/
      , xt = function(e) {
        e.stopPropagation()
    };
    b.extend(b.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, f, p, d, y = [r || v], m = c.call(t, "type") ? t.type : t, x = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = d = s = r = r || v,
            3 !== r.nodeType && 8 !== r.nodeType && !mt.test(m + b.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(),
            x.sort()),
            l = m.indexOf(":") < 0 && "on" + m,
            (t = t[b.expando] ? t : new b.Event(m,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = x.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : b.makeArray(n, [t]),
            p = b.event.special[m] || {},
            i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!i && !p.noBubble && !g(r)) {
                    for (u = p.delegateType || m,
                    mt.test(u + m) || (a = a.parentNode); a; a = a.parentNode)
                        y.push(a),
                        s = a;
                    s === (r.ownerDocument || v) && y.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = y[o++]) && !t.isPropagationStopped(); )
                    d = a,
                    t.type = o > 1 ? u : p.bindType || m,
                    (f = (G.get(a, "events") || Object.create(null))[t.type] && G.get(a, "handle")) && f.apply(a, n),
                    (f = l && a[l]) && f.apply && X(a) && (t.result = f.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !X(r) || l && h(r[m]) && !g(r) && ((s = r[l]) && (r[l] = null),
                b.event.triggered = m,
                t.isPropagationStopped() && d.addEventListener(m, xt),
                r[m](),
                t.isPropagationStopped() && d.removeEventListener(m, xt),
                b.event.triggered = void 0,
                s && (r[l] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = b.extend(new b.Event, n, {
                type: e,
                isSimulated: !0
            });
            b.event.trigger(r, null, t)
        }
    }),
    b.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                b.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return b.event.trigger(e, t, n, !0)
        }
    }),
    d.focusin || b.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            b.event.simulate(t, e.target, b.event.fix(e))
        };
        b.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this
                  , i = G.access(r, t);
                i || r.addEventListener(e, n, !0),
                G.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this
                  , i = G.access(r, t) - 1;
                i ? G.access(r, t, i) : (r.removeEventListener(e, n, !0),
                G.remove(r, t))
            }
        }
    });
    var bt = e.location
      , wt = {
        guid: Date.now()
    }
      , Tt = /\?/;
    b.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + t),
        n
    }
    ;
    var Ct = /\[\]$/
      , Et = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function At(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            b.each(t, function(t, i) {
                n || Ct.test(e) ? r(e, i) : At(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x(t))
            r(e, t);
        else
            for (i in t)
                At(e + "[" + i + "]", t[i], n, r)
    }
    b.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = h(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !b.isPlainObject(e))
            b.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, i);
        return r.join("&")
    }
    ,
    b.fn.extend({
        serialize: function() {
            return b.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = b.prop(this, "elements");
                return e ? b.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !b(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = b(this).val();
                return null == n ? null : Array.isArray(n) ? b.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g
      , Dt = /#.*$/
      , jt = /([?&])_=[^&]*/
      , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Ht = /^\/\//
      , Ot = {}
      , Pt = {}
      , Rt = "*/".concat("*")
      , Mt = v.createElement("a");
    function It(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(O) || [];
            if (h(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Wt(e, t, n, r) {
        var i = {}
          , o = e === Pt;
        function a(s) {
            var u;
            return i[s] = !0,
            b.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function Ft(e, t) {
        var n, r, i = b.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && b.extend(!0, e, r),
        e
    }
    Mt.href = bt.href,
    b.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": b.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, b.ajaxSettings), t) : Ft(b.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, i, o, a, s, u, l, c, f, p, d = b.ajaxSetup({}, n), h = d.context || d, g = d.context && (h.nodeType || h.jquery) ? b(h) : b.event, y = b.Deferred(), m = b.Callbacks("once memory"), x = d.statusCode || {}, w = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (l) {
                        if (!a)
                            for (a = {}; t = qt.exec(o); )
                                a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = a[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return l ? o : null
                },
                setRequestHeader: function(e, t) {
                    return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == l && (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (l)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return r && r.abort(t),
                    S(0, t),
                    this
                }
            };
            if (y.promise(E),
            d.url = ((t || d.url || bt.href) + "").replace(Ht, bt.protocol + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = (d.dataType || "*").toLowerCase().match(O) || [""],
            null == d.crossDomain) {
                u = v.createElement("a");
                try {
                    u.href = d.url,
                    u.href = u.href,
                    d.crossDomain = Mt.protocol + "//" + Mt.host != u.protocol + "//" + u.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = b.param(d.data, d.traditional)),
            Wt(Ot, d, n, E),
            l)
                return E;
            for (f in (c = b.event && d.global) && 0 == b.active++ && b.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Lt.test(d.type),
            i = d.url.replace(Dt, ""),
            d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Nt, "+")) : (p = d.url.slice(i.length),
            d.data && (d.processData || "string" == typeof d.data) && (i += (Tt.test(i) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (i = i.replace(jt, "$1"),
            p = (Tt.test(i) ? "&" : "?") + "_=" + wt.guid++ + p),
            d.url = i + p),
            d.ifModified && (b.lastModified[i] && E.setRequestHeader("If-Modified-Since", b.lastModified[i]),
            b.etag[i] && E.setRequestHeader("If-None-Match", b.etag[i])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && E.setRequestHeader("Content-Type", d.contentType),
            E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : d.accepts["*"]),
            d.headers)
                E.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || l))
                return E.abort();
            if (C = "abort",
            m.add(d.complete),
            E.done(d.success),
            E.fail(d.error),
            r = Wt(Pt, d, n, E)) {
                if (E.readyState = 1,
                c && g.trigger("ajaxSend", [E, d]),
                l)
                    return E;
                d.async && d.timeout > 0 && (s = e.setTimeout(function() {
                    E.abort("timeout")
                }, d.timeout));
                try {
                    l = !1,
                    r.send(w, S)
                } catch (e) {
                    if (l)
                        throw e;
                    S(-1, e)
                }
            } else
                S(-1, "No Transport");
            function S(t, n, a, u) {
                var f, p, v, w, T, C = n;
                l || (l = !0,
                s && e.clearTimeout(s),
                r = void 0,
                o = u || "",
                E.readyState = t > 0 ? 4 : 0,
                f = t >= 200 && t < 300 || 304 === t,
                a && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(d, E, a)),
                !f && b.inArray("script", d.dataTypes) > -1 && (d.converters["text script"] = function() {}
                ),
                w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, w, E, f),
                f ? (d.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (b.lastModified[i] = T),
                (T = E.getResponseHeader("etag")) && (b.etag[i] = T)),
                204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state,
                p = w.data,
                f = !(v = w.error))) : (v = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                f ? y.resolveWith(h, [p, C, E]) : y.rejectWith(h, [E, C, v]),
                E.statusCode(x),
                x = void 0,
                c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? p : v]),
                m.fireWith(h, [E, C]),
                c && (g.trigger("ajaxComplete", [E, d]),
                --b.active || b.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return b.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return b.get(e, void 0, t, "script")
        }
    }),
    b.each(["get", "post"], function(e, t) {
        b[t] = function(e, n, r, i) {
            return h(n) && (i = i || r,
            r = n,
            n = void 0),
            b.ajax(b.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, b.isPlainObject(e) && e))
        }
    }),
    b.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    b._evalUrl = function(e, t, n) {
        return b.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                b.globalEval(e, t, n)
            }
        })
    }
    ,
    b.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = b(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each(function(t) {
                b(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = b(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h(e);
            return this.each(function(n) {
                b(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                b(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    b.expr.pseudos.hidden = function(e) {
        return !b.expr.pseudos.visible(e)
    }
    ,
    b.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    b.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
      , $t = b.ajaxSettings.xhr();
    d.cors = !!$t && "withCredentials"in $t,
    d.ajax = $t = !!$t,
    b.ajaxTransport(function(t) {
        var n, r;
        if (d.cors || $t && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = s.ontimeout = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    b.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    b.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return b.globalEval(e),
                e
            }
        }
    }),
    b.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    b.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, i) {
                    t = b("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    v.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    b.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || b.expando + "_" + wt.guid++;
            return this[e] = !0,
            e
        }
    }),
    b.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Ut, "$1" + i) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || b.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? b(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                zt.push(i)),
                a && h(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    d.createHTMLDocument = ((_t = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === _t.childNodes.length),
    b.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (d.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
        t.head.appendChild(r)) : t = v),
        i = A.exec(e),
        o = !n && [],
        i ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && b(o).remove(),
        b.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    b.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = ht(e.slice(s)),
        e = e.slice(0, s)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && b.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? b("<div>").append(b.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    b.expr.pseudos.animated = function(e) {
        return b.grep(b.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    b.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = b.css(e, "position"), c = b(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = b.css(e, "top"),
            u = b.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            h(t) && (t = t.call(e, n, b.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"),
            "number" == typeof f.left && (f.left += "px"),
            c.css(f))
        }
    },
    b.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    b.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === b.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === b.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = b(e).offset()).top += b.css(e, "borderTopWidth", !0),
                    i.left += b.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - b.css(r, "marginTop", !0),
                    left: t.left - i.left - b.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === b.css(e, "position"); )
                    e = e.offsetParent;
                return e || ne
            })
        }
    }),
    b.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        b.fn[e] = function(r) {
            return B(this, function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    b.each(["top", "left"], function(e, t) {
        b.cssHooks[t] = $e(d.pixelPosition, function(e, n) {
            if (n)
                return n = Be(e, t),
                Me.test(n) ? b(e).position()[t] + "px" : n
        })
    }),
    b.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        b.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            b.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return B(this, function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? b.css(t, n, s) : b.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        b.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    b.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    b.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        b.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    b.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return r = i.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            }
            ).guid = e.guid = e.guid || b.guid++,
            o
    }
    ,
    b.holdReady = function(e) {
        e ? b.readyWait++ : b.ready(!0)
    }
    ,
    b.isArray = Array.isArray,
    b.parseJSON = JSON.parse,
    b.nodeName = k,
    b.isFunction = h,
    b.isWindow = g,
    b.camelCase = U,
    b.type = x,
    b.now = Date.now,
    b.isNumeric = function(e) {
        var t = b.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    b.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return b
    });
    var Vt = e.jQuery
      , Gt = e.$;
    return b.noConflict = function(t) {
        return e.$ === b && (e.$ = Gt),
        t && e.jQuery === b && (e.jQuery = Vt),
        b
    }
    ,
    void 0 === t && (e.jQuery = e.$ = b),
    b
});

;/**** jquery/jquery-ui-1.12.1.custom.min.js ****/
/*! jQuery UI - v1.12.1 - 2020-01-13
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, keycode.js, scroll-parent.js, unique-id.js, widgets/draggable.js, widgets/resizable.js, widgets/sortable.js, widgets/autocomplete.js, widgets/menu.js, widgets/mouse.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}
)(function(t) {
    t.ui = t.ui || {},
    t.ui.version = "1.12.1";
    var e = 0
      , i = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var s, n, o;
            for (o = 0; null != (n = i[o]); o++)
                try {
                    s = t._data(n, "events"),
                    s && s.remove && t(n).triggerHandler("remove")
                } catch (a) {}
            e(i)
        }
    }(t.cleanData),
    t.widget = function(e, i, s) {
        var n, o, a, r = {}, l = e.split(".")[0];
        e = e.split(".")[1];
        var h = l + "-" + e;
        return s || (s = i,
        i = t.Widget),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        t.expr[":"][h.toLowerCase()] = function(e) {
            return !!t.data(e, h)
        }
        ,
        t[l] = t[l] || {},
        n = t[l][e],
        o = t[l][e] = function(t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e),
            void 0) : new o(t,e)
        }
        ,
        t.extend(o, n, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }),
        a = new i,
        a.options = t.widget.extend({}, a.options),
        t.each(s, function(e, s) {
            return t.isFunction(s) ? (r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }
                function n(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t,
                    this._superApply = n,
                    e = s.apply(this, arguments),
                    this._super = i,
                    this._superApply = o,
                    e
                }
            }(),
            void 0) : (r[e] = s,
            void 0)
        }),
        o.prototype = t.widget.extend(a, {
            widgetEventPrefix: n ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }),
        n ? (t.each(n._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }),
        delete n._childConstructors) : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
    }
    ,
    t.widget.extend = function(e) {
        for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
            for (s in o[a])
                n = o[a][s],
                o[a].hasOwnProperty(s) && void 0 !== n && (e[s] = t.isPlainObject(n) ? t.isPlainObject(e[s]) ? t.widget.extend({}, e[s], n) : t.widget.extend({}, n) : n);
        return e
    }
    ,
    t.widget.bridge = function(e, s) {
        var n = s.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var a = "string" == typeof o
              , r = i.call(arguments, 1)
              , l = this;
            return a ? this.length || "instance" !== o ? this.each(function() {
                var i, s = t.data(this, n);
                return "instance" === o ? (l = s,
                !1) : s ? t.isFunction(s[o]) && "_" !== o.charAt(0) ? (i = s[o].apply(s, r),
                i !== s && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i,
                !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + o + "'")
            }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
            this.each(function() {
                var e = t.data(this, n);
                e ? (e.option(o || {}),
                e._init && e._init()) : t.data(this, n, new s(o,this))
            })),
            l
        }
    }
    ,
    t.Widget = function() {}
    ,
    t.Widget._childConstructors = [],
    t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(i, s) {
            s = t(s || this.defaultElement || this)[0],
            this.element = t(s),
            this.uuid = e++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = t(),
            this.hoverable = t(),
            this.focusable = t(),
            this.classesElementLookup = {},
            s !== this && (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }),
            this.document = t(s.style ? s.ownerDocument : s.document || s),
            this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(),
            t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var s, n, o, a = e;
            if (0 === arguments.length)
                return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {},
                s = e.split("."),
                e = s.shift(),
                s.length) {
                    for (n = a[e] = t.widget.extend({}, this.options[e]),
                    o = 0; s.length - 1 > o; o++)
                        n[s[o]] = n[s[o]] || {},
                        n = n[s[o]];
                    if (e = s.pop(),
                    1 === arguments.length)
                        return void 0 === n[e] ? null : n[e];
                    n[e] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a),
            this
        },
        _setOptions: function(t) {
            var e;
            for (e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(e) {
            var i, s, n;
            for (i in e)
                n = this.classesElementLookup[i],
                e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()),
                this._removeClass(n, i),
                s.addClass(this._classes({
                    element: s,
                    keys: i,
                    classes: e,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; i.length > r; r++)
                    a = n.classesElementLookup[i[r]] || t(),
                    a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()),
                    n.classesElementLookup[i[r]] = a,
                    s.push(i[r]),
                    o && e.classes[i[r]] && s.push(e.classes[i[r]])
            }
            var s = []
              , n = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e),
            this._on(e.element, {
                remove: "_untrackClassesElement"
            }),
            e.keys && i(e.keys.match(/\S+/g) || [], !0),
            e.extra && i(e.extra.match(/\S+/g) || []),
            s.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t
              , o = {
                extra: n ? e : i,
                keys: n ? t : e,
                element: n ? this.element : t,
                add: s
            };
            return o.element.toggleClass(this._classes(o), s),
            this
        },
        _on: function(e, i, s) {
            var n, o = this;
            "boolean" != typeof e && (s = i,
            i = e,
            e = !1),
            s ? (i = n = t(i),
            this.bindings = this.bindings.add(i)) : (s = i,
            i = this.element,
            n = this.widget()),
            t.each(s, function(s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/)
                  , h = l[1] + o.eventNamespace
                  , c = l[2];
                c ? n.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            e.off(i).off(i),
            this.bindings = t(this.bindings.not(e).get()),
            this.focusable = t(this.focusable.not(e).get()),
            this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e),
            this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e),
            this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {},
            i = t.Event(i),
            i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
            i.target = this.element[0],
            o = i.originalEvent)
                for (n in o)
                    n in i || (i[n] = o[n]);
            return this.element.trigger(i, s),
            !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    },
    t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {},
            "number" == typeof n && (n = {
                duration: n
            }),
            a = !t.isEmptyObject(n),
            n.complete = o,
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](),
                o && o.call(s[0]),
                i()
            })
        }
    }),
    t.widget,
    function() {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        function s(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            }
        }
        var n, o = Math.max, a = Math.abs, r = /left|center|right/, l = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, u = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== n)
                    return n;
                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = s.children()[0];
                return t("body").append(s),
                e = o.offsetWidth,
                s.css("overflow", "scroll"),
                i = o.offsetWidth,
                e === i && (i = s[0].clientWidth),
                s.remove(),
                n = e - i
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
                  , s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
                  , n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth
                  , o = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: o ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window)
                  , s = t.isWindow(i[0])
                  , n = !!i[0] && 9 === i[0].nodeType
                  , o = !s && !n;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: o ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        },
        t.fn.position = function(n) {
            if (!n || !n.of)
                return d.apply(this, arguments);
            n = t.extend({}, n);
            var u, p, f, g, m, _, v = t(n.of), b = t.position.getWithinInfo(n.within), y = t.position.getScrollInfo(b), w = (n.collision || "flip").split(" "), k = {};
            return _ = s(v),
            v[0].preventDefault && (n.at = "left top"),
            p = _.width,
            f = _.height,
            g = _.offset,
            m = t.extend({}, g),
            t.each(["my", "at"], function() {
                var t, e, i = (n[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                i[0] = r.test(i[0]) ? i[0] : "center",
                i[1] = l.test(i[1]) ? i[1] : "center",
                t = h.exec(i[0]),
                e = h.exec(i[1]),
                k[this] = [t ? t[0] : 0, e ? e[0] : 0],
                n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }),
            1 === w.length && (w[1] = w[0]),
            "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2),
            "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2),
            u = e(k.at, p, f),
            m.left += u[0],
            m.top += u[1],
            this.each(function() {
                var s, r, l = t(this), h = l.outerWidth(), c = l.outerHeight(), d = i(this, "marginLeft"), _ = i(this, "marginTop"), x = h + d + i(this, "marginRight") + y.width, C = c + _ + i(this, "marginBottom") + y.height, D = t.extend({}, m), I = e(k.my, l.outerWidth(), l.outerHeight());
                "right" === n.my[0] ? D.left -= h : "center" === n.my[0] && (D.left -= h / 2),
                "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2),
                D.left += I[0],
                D.top += I[1],
                s = {
                    marginLeft: d,
                    marginTop: _
                },
                t.each(["left", "top"], function(e, i) {
                    t.ui.position[w[e]] && t.ui.position[w[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: h,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [u[0] + I[0], u[1] + I[1]],
                        my: n.my,
                        at: n.at,
                        within: b,
                        elem: l
                    })
                }),
                n.using && (r = function(t) {
                    var e = g.left - D.left
                      , i = e + p - h
                      , s = g.top - D.top
                      , r = s + f - c
                      , u = {
                        target: {
                            element: v,
                            left: g.left,
                            top: g.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: l,
                            left: D.left,
                            top: D.top,
                            width: h,
                            height: c
                        },
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    h > p && p > a(e + i) && (u.horizontal = "center"),
                    c > f && f > a(s + r) && (u.vertical = "middle"),
                    u.important = o(a(e), a(i)) > o(a(s), a(r)) ? "horizontal" : "vertical",
                    n.using.call(this, t, u)
                }
                ),
                l.offset(t.extend(D, {
                    using: r
                }))
            })
        }
        ,
        t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width, r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n,
                    t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n,
                    t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, r = n.width, l = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, c = h - l, u = h + e.collisionWidth - r - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - r - o,
                    (0 > i || a(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l,
                    (s > 0 || u > a(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, r = n.height, l = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, c = h - l, u = h + e.collisionHeight - r - l, d = "top" === e.my[1], p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, g = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + g + e.collisionHeight - r - o,
                    (0 > s || a(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l,
                    (i > 0 || u > a(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments),
                    t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments),
                    t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(),
    t.ui.position,
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        }
    }),
    t.fn.extend({
        disableSelection: function() {
            var t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    }),
    t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    t.fn.scrollParent = function(e) {
        var i = this.css("position")
          , s = "absolute" === i
          , n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , o = this.parents().filter(function() {
            var e = t(this);
            return s && "static" === e.css("position") ? !1 : n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
        }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }
    ,
    t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }),
    t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var s = !1;
    t(document).on("mouseup", function() {
        s = !1
    }),
    t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                i.stopImmediatePropagation(),
                !1) : void 0
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!s) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(e),
                this._mouseDownEvent = e;
                var i = this
                  , n = 1 === e.which
                  , o = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                return n && !o && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1,
                !this._mouseStarted) ? (e.preventDefault(),
                !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                e.preventDefault(),
                s = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button)
                    return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(e),
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1,
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
            !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(e)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            s = !1,
            e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    t.ui.plugin = {
        add: function(e, i, s) {
            var n, o = t.ui[e].prototype;
            for (n in s)
                o.plugins[n] = o.plugins[n] || [],
                o.plugins[n].push([i, s[n]])
        },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; o.length > n; n++)
                    t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    },
    t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body),
        e.nodeName || (e = t.body),
        e
    }
    ,
    t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }
    ,
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this._addClass("ui-draggable"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0,
            void 0) : (this._removeHandleClassName(),
            this._mouseDestroy(),
            void 0)
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e),
            this.handle ? (this._blurActiveElement(e),
            this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix),
            !0) : !1)
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0])
              , s = t(e.target);
            s.closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            t.ui.ddmanager && (t.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position")
            }).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(e),
            this.originalPosition = this.position = this._generatePosition(e, !1),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", e) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this._mouseDrag(e, !0),
            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
            !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(e, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1)
                    return this._mouseUp(new t.Event("mouseup",e)),
                    !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            !1
        },
        _mouseStop: function(e) {
            var i = this
              , s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
            this.dropped && (s = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(),
            !1
        },
        _mouseUp: function(e) {
            return this._unblockFrames(),
            t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
            this.handleElement.is(e.target) && this.element.trigger("focus"),
            t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper)
              , n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
            s && n[0] === this.element[0] && this._setPositionRelative(),
            n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"),
            n
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset()
              , i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var t = this.element.position()
              , e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options, o = this.document[0];
            return this.relativeContainer = null,
            n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
            void 0) : "document" === n.containment ? (this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
            void 0) : n.containment.constructor === Array ? (this.containment = n.containment,
            void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
            i = t(n.containment),
            s = i[0],
            s && (e = /(scroll|auto)/.test(i.css("overflow")),
            this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = i),
            void 0) : (this.containment = null,
            void 0)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1
              , s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)),
            a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY,
            h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n,
            o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX,
            l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o),
            "y" === a.axis && (l = this.originalPageX),
            "x" === a.axis && (h = this.originalPageY)),
            {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(),
            t.ui.plugin.call(this, e, [i, s, this], !0),
            /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"),
            s.offset = this.positionAbs),
            t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.sortables = [],
            t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", e, n))
            })
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, {
                item: s.element
            });
            s.cancelHelperRemoval = !1,
            t.each(s.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0,
                s.cancelHelperRemoval = !0,
                t.cancelHelperRemoval = !1,
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                },
                t._mouseStop(e),
                t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0,
                t._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i, s) {
            t.each(s.sortables, function() {
                var n = !1
                  , o = this;
                o.positionAbs = s.positionAbs,
                o.helperProportions = s.helperProportions,
                o.offset.click = s.offset.click,
                o._intersectsWith(o.containerCache) && (n = !0,
                t.each(s.sortables, function() {
                    return this.positionAbs = s.positionAbs,
                    this.helperProportions = s.helperProportions,
                    this.offset.click = s.offset.click,
                    this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1),
                    n
                })),
                n ? (o.isOver || (o.isOver = 1,
                s._parent = i.helper.parent(),
                o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0),
                o.options._helper = o.options.helper,
                o.options.helper = function() {
                    return i.helper[0]
                }
                ,
                e.target = o.currentItem[0],
                o._mouseCapture(e, !0),
                o._mouseStart(e, !0, !0),
                o.offset.click.top = s.offset.click.top,
                o.offset.click.left = s.offset.click.left,
                o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left,
                o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top,
                s._trigger("toSortable", e),
                s.dropped = o.element,
                t.each(s.sortables, function() {
                    this.refreshPositions()
                }),
                s.currentItem = s.element,
                o.fromOutside = s),
                o.currentItem && (o._mouseDrag(e),
                i.position = o.position)) : o.isOver && (o.isOver = 0,
                o.cancelHelperRemoval = !0,
                o.options._revert = o.options.revert,
                o.options.revert = !1,
                o._trigger("out", e, o._uiHash(o)),
                o._mouseStop(e, !0),
                o.options.revert = o.options._revert,
                o.options.helper = o.options._helper,
                o.placeholder && o.placeholder.remove(),
                i.helper.appendTo(s._parent),
                s._refreshOffsets(e),
                i.position = s._generatePosition(e, !0),
                s._trigger("fromSortable", e),
                s.dropped = !1,
                t.each(s.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }),
    t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body")
              , o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")),
            n.css("cursor", o.cursor)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }),
    t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper)
              , o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")),
            n.css("opacity", o.opacity)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }),
    t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(e, i, s) {
            var n = s.options
              , o = !1
              , a = s.scrollParentNotHidden[0]
              , r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)),
            n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))),
            n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))),
            o !== !1 && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }),
    t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [],
            t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var e = t(this)
                  , i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(e, i, s) {
            var n, o, a, r, l, h, c, u, d, p, f = s.options, g = f.snapTolerance, m = i.offset.left, _ = m + s.helperProportions.width, v = i.offset.top, b = v + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--)
                l = s.snapElements[d].left - s.margins.left,
                h = l + s.snapElements[d].width,
                c = s.snapElements[d].top - s.margins.top,
                u = c + s.snapElements[d].height,
                l - g > _ || m > h + g || c - g > b || v > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })),
                s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = g >= Math.abs(c - b),
                o = g >= Math.abs(u - v),
                a = g >= Math.abs(l - _),
                r = g >= Math.abs(h - m),
                n && (i.position.top = s._convertPositionTo("relative", {
                    top: c - s.helperProportions.height,
                    left: 0
                }).top),
                o && (i.position.top = s._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top),
                a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l - s.helperProportions.width
                }).left),
                r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)),
                p = n || o || a || r,
                "outer" !== f.snapMode && (n = g >= Math.abs(c - v),
                o = g >= Math.abs(u - b),
                a = g >= Math.abs(l - m),
                r = g >= Math.abs(h - _),
                n && (i.position.top = s._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top),
                o && (i.position.top = s._convertPositionTo("relative", {
                    top: u - s.helperProportions.height,
                    left: 0
                }).top),
                a && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left),
                r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h - s.helperProportions.width
                }).left)),
                !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[d].item
                })),
                s.snapElements[d].snapping = n || o || a || r || p)
        }
    }),
    t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options, a = t.makeArray(t(o.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0,
            t(a).each(function(e) {
                t(this).css("zIndex", n + e)
            }),
            this.css("zIndex", n + a.length))
        }
    }),
    t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper)
              , o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")),
            n.css("zIndex", o.zIndex)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    }),
    t.ui.draggable,
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow"))
                return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop"
              , n = !1;
            return e[s] > 0 ? !0 : (e[s] = 1,
            n = e[s] > 0,
            e[s] = 0,
            n)
        },
        _create: function() {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"),
            t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(e),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(e),
            this._proportionallyResize()),
            this._setupHandles(),
            i.autoHide && t(this.element).on("mouseenter", function() {
                i.disabled || (s._removeClass("ui-resizable-autohide"),
                s._handles.show())
            }).on("mouseleave", function() {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"),
                s._handles.hide())
            }),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            e = this.element,
            this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e),
            e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _setOption: function(t, e) {
            switch (this._super(t, e),
            t) {
            case "handles":
                this._removeHandles(),
                this._setupHandles();
                break;
            default:
            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = t(),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                s = this.handles.split(","),
                this.handles = {},
                i = 0; s.length > i; i++)
                    e = t.trim(s[i]),
                    n = "ui-resizable-" + e,
                    o = t("<div>"),
                    this._addClass(o, "ui-resizable-handle " + n),
                    o.css({
                        zIndex: a.zIndex
                    }),
                    this.handles[e] = ".ui-resizable-" + e,
                    this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]),
                    this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element),
                    o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(),
                    n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    e.css(n, o),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[i])
            }
            ,
            this._renderAxis(this.element),
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
            this._handles.disableSelection(),
            this._handles.on("mouseover", function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                r.axis = o && o[1] ? o[1] : "se")
            }),
            a.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles)
                s = t(this.handles[i])[0],
                (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(e) {
            var i, s, n, o = this.options, a = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            i = this._num(this.helper.css("left")),
            s = this._num(this.helper.css("top")),
            o.containment && (i += t(o.containment).scrollLeft() || 0,
            s += t(o.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: i,
                top: s
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            },
            this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            },
            this.originalPosition = {
                left: i,
                top: s
            },
            this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            },
            this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            n = t(".ui-resizable-" + this.axis).css("cursor"),
            t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition, o = this.axis, a = e.pageX - n.left || 0, r = e.pageY - n.top || 0, l = this._change[o];
            return this._updatePrevProperties(),
            l ? (i = l.apply(this, [e, a, r]),
            this._updateVirtualBoundaries(e.shiftKey),
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
            i = this._respectSize(i, e),
            this._updateCache(i),
            this._propagate("resize", e),
            s = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            t.isEmptyObject(s) || (this._updatePrevProperties(),
            this._trigger("resize", e, this.ui()),
            this._applyChanges()),
            !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, o, a, r, l, h = this.options, c = this;
            return this._helper && (i = this._proportionallyResizeElements,
            s = i.length && /textarea/i.test(i[0].nodeName),
            n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height,
            o = s ? 0 : c.sizeDiff.width,
            a = {
                width: c.helper.width() - o,
                height: c.helper.height() - n
            },
            r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null,
            l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null,
            h.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })),
            c.helper.height(c.size.height),
            c.helper.width(c.size.width),
            this._helper && !h.animate && this._proportionallyResize()),
            t("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", e),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            },
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            },
            (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio,
            s = o.minWidth / this.aspectRatio,
            i = o.maxHeight * this.aspectRatio,
            n = o.maxWidth / this.aspectRatio,
            e > o.minWidth && (o.minWidth = e),
            s > o.minHeight && (o.minHeight = s),
            o.maxWidth > i && (o.maxWidth = i),
            o.maxHeight > n && (o.maxHeight = n)),
            this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position
              , i = this.size
              , s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === s && (t.left = e.left + (i.width - t.width),
            t.top = null),
            "nw" === s && (t.top = e.top + (i.height - t.height),
            t.left = e.left + (i.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries
              , i = this.axis
              , s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width
              , n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height
              , o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width
              , a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height
              , r = this.originalPosition.left + this.originalSize.width
              , l = this.originalPosition.top + this.originalSize.height
              , h = /sw|nw|w/.test(i)
              , c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            s && (t.width = e.maxWidth),
            n && (t.height = e.maxHeight),
            o && h && (t.left = r - e.minWidth),
            s && h && (t.left = r - e.maxWidth),
            a && c && (t.top = l - e.minHeight),
            n && c && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++)
                i[e] = parseFloat(s[e]) || 0,
                i[e] += parseFloat(n[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++)
                    t = this._proportionallyResizeElements[e],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                    t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var e = this.element
              , i = this.options;
            this.elementOffset = e.offset(),
            this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize
                  , s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize
                  , n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]),
            "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance")
              , s = i.options
              , n = i._proportionallyResizeElements
              , o = n.length && /textarea/i.test(n[0].nodeName)
              , a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
              , r = o ? 0 : i.sizeDiff.width
              , l = {
                width: i.size.width - r,
                height: i.size.height - a
            }
              , h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }),
                    i._updateCache(s),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, a, r, l = t(this).resizable("instance"), h = l.options, c = l.element, u = h.containment, d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (l.containerElement = t(d),
            /document/.test(u) || u === document ? (l.containerOffset = {
                left: 0,
                top: 0
            },
            l.containerPosition = {
                left: 0,
                top: 0
            },
            l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d),
            i = [],
            t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                i[t] = l._num(e.css("padding" + s))
            }),
            l.containerOffset = e.offset(),
            l.containerPosition = e.position(),
            l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            },
            s = l.containerOffset,
            n = l.containerSize.height,
            o = l.containerSize.width,
            a = l._hasScroll(d, "left") ? d.scrollWidth : o,
            r = l._hasScroll(d) ? d.scrollHeight : n,
            l.parentData = {
                element: d,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }))
        },
        resize: function(e) {
            var i, s, n, o, a = t(this).resizable("instance"), r = a.options, l = a.containerOffset, h = a.position, c = a._aspectRatio || e.shiftKey, u = {
                top: 0,
                left: 0
            }, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l),
            h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left),
            c && (a.size.height = a.size.width / a.aspectRatio,
            p = !1),
            a.position.left = r.helper ? l.left : 0),
            h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top),
            c && (a.size.width = a.size.height * a.aspectRatio,
            p = !1),
            a.position.top = a._helper ? l.top : 0),
            n = a.containerElement.get(0) === a.element.parent().get(0),
            o = /relative|absolute/.test(a.containerElement.css("position")),
            n && o ? (a.offset.left = a.parentData.left + a.position.left,
            a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left,
            a.offset.top = a.element.offset().top),
            i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)),
            s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)),
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i,
            c && (a.size.height = a.size.width / a.aspectRatio,
            p = !1)),
            s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s,
            c && (a.size.width = a.size.height * a.aspectRatio,
            p = !1)),
            p || (a.position.left = a.prevPosition.left,
            a.position.top = a.prevPosition.top,
            a.size.width = a.prevSize.width,
            a.size.height = a.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance")
              , i = e.options
              , s = e.containerOffset
              , n = e.containerPosition
              , o = e.containerElement
              , a = t(e.helper)
              , r = a.offset()
              , l = a.outerWidth() - e.sizeDiff.width
              , h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            }),
            e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: l,
                height: h
            })
        }
    }),
    t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance")
              , i = e.options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            })
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance")
              , n = s.options
              , o = s.originalSize
              , a = s.originalPosition
              , r = {
                height: s.size.height - o.height || 0,
                width: s.size.width - o.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            };
            t(n.alsoResize).each(function() {
                var e = t(this)
                  , s = t(this).data("ui-resizable-alsoresize")
                  , n = {}
                  , o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }),
                e.css(n)
            })
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }),
    t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance")
              , i = e.size;
            e.ghost = e.originalElement.clone(),
            e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }),
            e._addClass(e.ghost, "ui-resizable-ghost"),
            t.uiBackCompat !== !1 && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost),
            e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }),
    t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"), s = i.options, n = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid, h = l[0] || 1, c = l[1] || 1, u = Math.round((n.width - o.width) / h) * h, d = Math.round((n.height - o.height) / c) * c, p = o.width + u, f = o.height + d, g = s.maxWidth && p > s.maxWidth, m = s.maxHeight && f > s.maxHeight, _ = s.minWidth && s.minWidth > p, v = s.minHeight && s.minHeight > f;
            s.grid = l,
            _ && (p += h),
            v && (f += c),
            g && (p -= h),
            m && (f -= c),
            /^(se|s|e)$/.test(r) ? (i.size.width = p,
            i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p,
            i.size.height = f,
            i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)),
            f - c > 0 ? (i.size.height = f,
            i.position.top = a.top - d) : (f = c - e.height,
            i.size.height = f,
            i.position.top = a.top + o.height - f),
            p - h > 0 ? (i.size.width = p,
            i.position.left = a.left - u) : (p = h - e.width,
            i.size.width = p,
            i.position.left = a.left + o.width - p))
        }
    }),
    t.ui.resizable,
    t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {},
            this._addClass("ui-sortable"),
            this.refresh(),
            this.offset = this.element.offset(),
            this._mouseInit(),
            this._setHandleClassName(),
            this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"),
            t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--)
                this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, i) {
            var s = null
              , n = !1
              , o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e),
            t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this),
                !1) : void 0
            }),
            t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)),
            s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }),
            n) ? (this.currentItem = s,
            this._removeCurrentsFromItems(),
            !0) : !1 : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(e),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(e),
            this.originalPageX = e.pageX,
            this.originalPageY = e.pageY,
            a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            a.containment && this._setContainment(),
            a.cursor && "auto" !== a.cursor && (o = this.document.find("body"),
            this.storedCursor = o.css("cursor"),
            o.css("cursor", a.cursor),
            this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)),
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", a.opacity)),
            a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", a.zIndex)),
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", e, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !s)
                for (n = this.containers.length - 1; n >= 0; n--)
                    this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this),
            t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(e),
            !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)),
            e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))),
            r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i],
                n = s.item[0],
                o = this._intersectsWithPointer(s),
                o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
                        break;
                    this._rearrange(e, s),
                    this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e),
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
            this._trigger("sort", e, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e),
                this.options.revert) {
                    var s = this
                      , n = this.placeholder.offset()
                      , o = this.options.axis
                      , a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)),
                    o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)),
                    this.reverting = !0,
                    t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else
                    this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup",{
                    target: null
                })),
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--)
                    this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)),
                    this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }),
            !s.length && e.key && s.push(e.key + "="),
            s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected)
              , s = [];
            return e = e || {},
            i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }),
            s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left
              , i = e + this.helperProportions.width
              , s = this.positionAbs.top
              , n = s + this.helperProportions.height
              , o = t.left
              , a = o + t.width
              , r = t.top
              , l = r + t.height
              , h = this.offset.click.top
              , c = this.offset.click.left
              , u = "x" === this.options.axis || s + h > r && l > s + h
              , d = "y" === this.options.axis || e + c > o && a > e + c
              , p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = s && n;
            return o ? (e = this._getDragVerticalDirection(),
            i = this._getDragHorizontalDirection(),
            this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height)
              , i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width)
              , s = this._getDragVerticalDirection()
              , n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [], l = [], h = this._connectWith();
            if (h && e)
                for (s = h.length - 1; s >= 0; s--)
                    for (o = t(h[s], this.document[0]),
                    n = o.length - 1; n >= 0; n--)
                        a = t.data(o[n], this.widgetFullName),
                        a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            s = l.length - 1; s >= 0; s--)
                l[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [],
            this.containers = [this];
            var i, s, n, o, a, r, l, h, c = this.items, u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this]], d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i], this.document[0]),
                    s = n.length - 1; s >= 0; s--)
                        o = t.data(n[s], this.widgetFullName),
                        o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]),
                        this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1],
                r = u[i][0],
                s = 0,
                h = r.length; h > s; s++)
                    l = t(r[s]),
                    l.data(this.widgetName + "-item", a),
                    c.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(e) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1,
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--)
                s = this.items[i],
                s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item,
                e || (s.width = n.outerWidth(),
                s.height = n.outerHeight()),
                o = n.offset(),
                s.left = o.left,
                s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    o = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = o.left,
                    this.containers[i].containerCache.top = o.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder,
            s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase()
                      , n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"),
                    "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")),
                    i || n.css("visibility", "hidden"),
                    n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)),
                    n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }),
            e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
            e.currentItem.after(e.placeholder),
            s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(e) {
            var i, s, n, o, a, r, l, h, c, u, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0]))
                            continue;
                        d = this.containers[i],
                        p = i
                    } else
                        this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)),
                        this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length)
                    this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1);
                else {
                    for (n = 1e4,
                    o = null,
                    c = d.floating || this._isFloating(this.currentItem),
                    a = c ? "left" : "top",
                    r = c ? "width" : "height",
                    u = c ? "pageX" : "pageY",
                    s = this.items.length - 1; s >= 0; s--)
                        t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[a],
                        h = !1,
                        e[u] - l > this.items[s][r] / 2 && (h = !0),
                        n > Math.abs(e[u] - l) && (n = Math.abs(e[u] - l),
                        o = this.items[s],
                        this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[p])
                        return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()),
                        this.currentContainer.containerCache.over = 1),
                        void 0;
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0),
                    this._trigger("change", e, this._uiHash()),
                    this.containers[p]._trigger("change", e, this._uiHash(this)),
                    this.currentContainer = this.containers[p],
                    this.options.placeholder.update(this.currentContainer, this.placeholder),
                    this.containers[p]._trigger("over", e, this._uiHash(this)),
                    this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options
              , s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
            s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
            (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
            s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")),
            t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }),
            "left"in e && (this.offset.click.left = e.left + this.margins.left),
            "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
            "top"in e && (this.offset.click.top = e.top + this.margins.top),
            "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
            e.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }),
            {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode),
            ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
            /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0],
            i = t(n.containment).offset(),
            s = "hidden" !== t(e).css("overflow"),
            this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1
              , n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left),
            e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top),
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left),
            e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)),
            n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1],
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i,
            s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0],
            o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)),
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
            this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)
                    ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                this._trigger("update", t, this._uiHash())
            }),
            this !== this.currentContainer && (e || (n.push(function(t) {
                this._trigger("remove", t, this._uiHash())
            }),
            n.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            n.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            s = this.containers.length - 1; s >= 0; s--)
                e || n.push(i("deactivate", this, this.containers[s])),
                this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])),
                this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            e || this._trigger("beforeStop", t, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !e) {
                for (s = 0; n.length > s; s++)
                    n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }),
    t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target)
                      , s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e),
                    e.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item")
                          , s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"),
                        this.focus(e, s))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        var i = !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t),
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled")
              , i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, s, n, o, a = !0;
            switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case t.ui.keyCode.UP:
                this.previous(e);
                break;
            case t.ui.keyCode.DOWN:
                this.next(e);
                break;
            case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                a = !1,
                s = this.previousFilter || "",
                o = !1,
                n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode),
                clearTimeout(this.filterTimer),
                n === s ? o = !0 : n = s + n,
                i = this._filterMenuItems(n),
                i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i,
                i.length || (n = String.fromCharCode(e.keyCode),
                i = this._filterMenuItems(n)),
                i.length ? (this.focus(e, i),
                this.previousFilter = n,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i, s, n, o, a = this, r = this.options.icons.submenu, l = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            s = l.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this)
                  , i = e.prev()
                  , s = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(s, "ui-menu-icon", "ui-icon " + r),
                i.attr("aria-haspopup", "true").prepend(s),
                e.attr("aria-labelledby", i.attr("id"))
            }),
            this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"),
            e = l.add(this.element),
            i = e.find(this.options.items),
            i.not(".ui-menu-item").each(function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
            }),
            n = i.not(".ui-menu-item, .ui-menu-divider"),
            o = n.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"),
            i.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t + ""),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            s = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(s, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", s.attr("id")),
            n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(n, null, "ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            i = e.children(".ui-menu"),
            i.length && t && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0,
            n = e.offset().top - this.activeMenu.offset().top - i - s,
            o = this.activeMenu.scrollTop(),
            a = this.activeMenu.height(),
            r = e.outerHeight(),
            0 > n ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element),
                this._close(s),
                this.blur(e),
                this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element),
            t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()),
            this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)),
            s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()),
            this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this),
                0 > i.offset().top - s - n
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())),
            void 0) : (this.next(e),
            void 0)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top,
            n = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this),
                i.offset().top - s + n > 0
            }),
            this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())),
            void 0) : (this.next(e),
            void 0)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0),
            this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }),
    t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(), o = "textarea" === n, a = "input" === n;
            this.isMultiLine = o || !a && this._isContentEditable(this.element),
            this.valueMethod = this.element[o || a ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly"))
                        return e = !0,
                        s = !0,
                        i = !0,
                        void 0;
                    e = !1,
                    s = !1,
                    i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                    case o.PAGE_UP:
                        e = !0,
                        this._move("previousPage", n);
                        break;
                    case o.PAGE_DOWN:
                        e = !0,
                        this._move("nextPage", n);
                        break;
                    case o.UP:
                        e = !0,
                        this._keyEvent("previous", n);
                        break;
                    case o.DOWN:
                        e = !0,
                        this._keyEvent("next", n);
                        break;
                    case o.ENTER:
                        this.menu.active && (e = !0,
                        n.preventDefault(),
                        this.menu.select(n));
                        break;
                    case o.TAB:
                        this.menu.active && this.menu.select(n);
                        break;
                    case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(n),
                        n.preventDefault());
                        break;
                    default:
                        i = !0,
                        this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e)
                        return e = !1,
                        (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(),
                        void 0;
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                        case n.PAGE_UP:
                            this._move("previousPage", s);
                            break;
                        case n.PAGE_DOWN:
                            this._move("nextPage", s);
                            break;
                        case n.UP:
                            this._keyEvent("previous", s);
                            break;
                        case n.DOWN:
                            this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) {
                    return s ? (s = !1,
                    t.preventDefault(),
                    void 0) : (this._searchTimeout(t),
                    void 0)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(t) {
                    return this.cancelBlur ? (delete this.cancelBlur,
                    void 0) : (clearTimeout(this.searching),
                    this.close(t),
                    this._change(t),
                    void 0)
                }
            }),
            this._initSource(),
            this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(),
                    this.cancelBlur = !0,
                    this._delay(function() {
                        delete this.cancelBlur,
                        this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(e, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1,
                    e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(),
                    this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent)
                    }),
                    void 0) : (n = i.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value),
                    s = i.item.attr("aria-label") || n.value,
                    s && t.trim(s).length && (this.liveRegion.children().hide(),
                    t("<div>").text(s).appendTo(this.liveRegion)),
                    void 0)
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item")
                      , n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = n,
                    this._delay(function() {
                        this.previous = n,
                        this.selectedItem = s
                    })),
                    !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value),
                    this.term = this._value(),
                    this.close(e),
                    this.selectedItem = s
                }
            }),
            this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
            e && e[0] || (e = this.element.closest(".ui-front, dialog")),
            e.length || (e = this.document[0].body),
            e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source,
            this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }
            ) : "string" == typeof this.options.source ? (i = this.options.source,
            this.source = function(e, n) {
                s.xhr && s.xhr.abort(),
                s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                var e = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null,
                this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
            this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e),
            this.isNewMenu = !0,
            this.menu.refresh(),
            i.show(),
            this._resizeMenu(),
            i.position(t.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
            this.menu.blur(),
            void 0) : (this.menu[t](e),
            void 0) : (this.search(null, e),
            void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e),
            e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length)
                return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }),
    t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }),
    t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            t("<div>").text(i).appendTo(this.liveRegion))
        }
    }),
    t.ui.autocomplete
});
;/**** jquery/jquery.browser.js ****/
jQuery.uaMatch = function(e) {
    e = e.toLowerCase();
    var r = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
    return {
        browser: r[1] || "",
        version: r[2] || "0"
    }
}
,
jQuery.browser || (matched = jQuery.uaMatch(navigator.userAgent),
browser = {},
matched.browser && (browser[matched.browser] = !0,
browser.version = matched.version),
browser.chrome ? browser.webkit = !0 : browser.webkit && (browser.safari = !0),
jQuery.browser = browser);

;/**** jquery/jquery.ds.tooltip.js ****/
!function(t) {
    var e, i, o, s = {}, a = t.browser.msie && /MSIE\s(5\.5|6\.)/.test(navigator.userAgent), n = !1;
    function r(e) {
        return t.data(e, "tooltip")
    }
    function l() {
        this.title && (this.tooltipText = this.title,
        t(this).removeAttr("title"),
        e === this && h.call(this, {}, !0))
    }
    function d() {
        e === this && h.call(this, {}, !0)
    }
    function h(a, l) {
        var d = "object" == typeof a.originalEvent;
        if ((!d || !a.originalEvent.triggered_ds_tooltip) && !t.tooltip.blocked && (this !== e || l) && (this.tooltipText || r(this).bodyHandler)) {
            if (e = this,
            i = this.tooltipText,
            r(this).bodyHandler) {
                s.title.hide();
                var h = r(this).bodyHandler.call(this);
                h.nodeType || h.jquery ? s.body.empty().append(h) : s.body.html(h),
                s.body.show()
            } else if (r(this).showBody) {
                var c = i.split(r(this).showBody);
                s.title.html(c.shift()).show(),
                s.body.empty();
                for (var u, m = 0; u = c[m]; m++)
                    m > 0 && s.body.append("<br/>"),
                    s.body.append(u);
                s.body.hideWhenEmpty()
            } else
                s.title.html(i).show(),
                s.body.hide();
            r(this).showURL && t(this).url() ? s.url.html(t(this).url().replace("http://", "")).show() : s.url.hide(),
            r(this).fixPNG && s.parent.fixPNG(),
            function(e) {
                r(this).delay ? o = setTimeout(p, r(this).delay) : p(),
                n = !!r(this).track,
                t(document.body).bind("mousemove", f),
                f(e)
            }
            .apply(this, arguments),
            d && (a.originalEvent.triggered_ds_tooltip = !0)
        }
    }
    function p() {
        o = null,
        a && t.fn.bgiframe || !r(e).fade ? s.parent.show() : s.parent.is(":animated") ? s.parent.stop().show().fadeTo(r(e).fade, e.tOpacity) : s.parent.is(":visible") ? s.parent.fadeTo(r(e).fade, e.tOpacity) : s.parent.fadeIn(r(e).fade),
        s.parent.addClass(r(e).extraClass),
        f()
    }
    function f(i) {
        if (!(t.tooltip.blocked || i && i.target && "OPTION" == i.target.tagName))
            if (!n && s.parent.is(":visible") && t(document.body).unbind("mousemove", f),
            null != e) {
                if (!t.contains(document.documentElement, e))
                    return t(document.body).unbind("mousemove", f),
                    void s.parent.hide().css("opacity", "");
                s.parent.removeClass("viewport-right").removeClass("viewport-bottom");
                var o = s.parent[0].offsetLeft
                  , a = s.parent[0].offsetTop;
                if (i) {
                    o = i.pageX + r(e).left,
                    a = i.pageY + r(e).top;
                    var l = "auto";
                    r(e).positionLeft && (l = t(window).width() - o,
                    o = "auto"),
                    s.parent.css({
                        left: o,
                        right: l,
                        top: a
                    })
                }
                var d = {
                    x: t(window).scrollLeft(),
                    y: t(window).scrollTop(),
                    cx: t(window).width(),
                    cy: t(window).height()
                }
                  , h = s.parent[0];
                d.x + d.cx < h.offsetLeft + h.offsetWidth && (o -= h.offsetWidth + 20 + r(e).left,
                s.parent.css({
                    left: o + "px"
                }).addClass("viewport-right")),
                d.y + d.cy < h.offsetTop + h.offsetHeight && (a -= h.offsetHeight + 20 + r(e).top,
                s.parent.css({
                    top: a + "px"
                }).addClass("viewport-bottom"))
            } else
                t(document.body).unbind("mousemove", f)
    }
    function c(i) {
        if (!t.tooltip.blocked) {
            o && clearTimeout(o),
            e = null;
            var n = r(this);
            void 0 != n && (a && t.fn.bgiframe || !n.fade ? l() : s.parent.is(":animated") ? s.parent.stop().fadeTo(n.fade, 0, l) : s.parent.stop().fadeOut(n.fade, l),
            r(this).fixPNG && s.parent.unfixPNG())
        }
        function l() {
            s.parent.removeClass(n.extraClass).hide().css("opacity", "")
        }
    }
    t.tooltip = {
        blocked: !1,
        defaults: {
            delay: 200,
            fade: !1,
            showURL: !0,
            extraClass: "",
            top: 15,
            left: 15,
            id: "tooltip"
        },
        block: function() {
            t.tooltip.blocked = !t.tooltip.blocked
        }
    },
    t.fn.extend({
        tooltip: function(e) {
            return function(e) {
                if (s.parent)
                    return;
                s.parent = t('<div id="' + e.id + '"><h3></h3><div class="body"></div><div class="url"></div></div>').appendTo(document.body).hide(),
                t.fn.bgiframe && s.parent.bgiframe();
                s.title = t("h3", s.parent),
                s.body = t("div.body", s.parent),
                s.url = t("div.url", s.parent)
            }(e = t.extend({}, t.tooltip.defaults, e)),
            this.each(function() {
                t.data(this, "tooltip", e),
                this.tOpacity = s.parent.css("opacity"),
                "" != t(this).attr("data-title") && void 0 != t(this).attr("data-title") ? this.tooltipText = t(this).attr("data-title") : (this.tooltipText = this.title,
                t(this).attr("data-title", this.title))
            }).mouseover(h).mouseout(c).on("tooltip_content_change", d).on("tooltip_change", l).click(c).removeClass("tooltip").removeAttr("alt").removeAttr("title")
        },
        removeTooltip: function() {
            this.each(function() {
                this.tooltipText = "",
                e === this && (h.call(this, {}, !0),
                c.call(this))
            })
        },
        fixPNG: a ? function() {
            return this.each(function() {
                var e = t(this).css("backgroundImage");
                e.match(/^url\(["']?(.*\.png)["']?\)$/i) && (e = RegExp.$1,
                t(this).css({
                    backgroundImage: "none",
                    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + e + "')"
                }).each(function() {
                    var e = t(this).css("position");
                    "absolute" != e && "relative" != e && t(this).css("position", "relative")
                }))
            })
        }
        : function() {
            return this
        }
        ,
        unfixPNG: a ? function() {
            return this.each(function() {
                t(this).css({
                    filter: "",
                    backgroundImage: ""
                })
            })
        }
        : function() {
            return this
        }
        ,
        hideWhenEmpty: function() {
            return this.each(function() {
                t(this)[t(this).html() ? "show" : "hide"]()
            })
        },
        url: function() {
            return this.attr("href") || this.attr("src")
        }
    })
}(jQuery);

;/**** jquery/jquery.quickedit.js_ ****/
!function(t, e, i, n) {
    var a = "QuickEdit"
      , s = {};
    function o(e, i) {
        this.element = e,
        this.settings = t.extend({
            url: "",
            show_icons: !0,
            label_element: !1,
            save_success_callback: null
        }, s, i),
        this._defaults = s,
        this._name = a,
        this.init()
    }
    o.prototype = {
        init: function() {
            t(this.element).find(".rename-icon").on("click", t.proxy(this.beginEdit, this))
        },
        beginEdit: function() {
            var e = (a = t(this.element)).find(".quickedit-label")
              , i = Math.max(80, e.width());
            if (e.data("text"))
                n = e.data("text");
            else
                var n = t.trim(a.find(".quickedit-label").text());
            a.find(".quickedit-content").hide();
            var a = t('<span class="quickedit-edit"></span>')
              , s = t('<input type="text" />').val(n).css("width", i + "px").appendTo(a).on("keydown", t.proxy(function(t) {
                if (13 == t.keyCode)
                    return this.beginSave(),
                    !1
            }, this))
              , o = parseInt(t(this.element).data("length"));
            void 0 !== o && !isNaN(o) && o > 3 && s.prop("size", o).prop("maxlength", o);
            t('<input type="button" class="btn" />').val(_("904a8304056d77e4547744781b7ceb50")).appendTo(a).on("click", t.proxy(this.beginSave, this));
            return a.appendTo(t(this.element)),
            s.select(),
            !1
        },
        beginSave: function() {
            var e = t(this.element)
              , i = e.find("input[type=text]").prop("disabled", !0).val();
            e.find(".btn").remove(),
            e.find(".quickedit-edit").append(UI.Image("loading2.gif", {
                style: "vertical-align: middle"
            }));
            var n = this.settings.url.replace("__ID__", e.data("id"))
              , a = this;
            TribalWars.post(n, {}, {
                text: i
            }, function(i) {
                var n = a.settings.label_element ? t(a.settings.label_element) : e.find(".quickedit-label");
                if (n.text(i.text),
                i.raw && n.data("text", i.raw),
                i.icon && a.settings.show_icons) {
                    var s = e.find(".quickedit-content");
                    s.find("img, .commandicon-ally").remove();
                    var o = e.find(".icon-container");
                    o.length ? o.empty() : o = s,
                    t.each(i.icon, function(t, e) {
                        if (i.command)
                            o.prepend(UI.CommandIcon(e, i.command));
                        else {
                            var n = e.tooltip ? {
                                class: "tooltip",
                                title: e.tooltip
                            } : {};
                            o.prepend(UI.Image(e.img, n))
                        }
                        o.prepend(" ")
                    }),
                    UI.ToolTip(s.find(".tooltip"))
                }
                a.revert(),
                "function" == typeof a.settings.save_success_callback && a.settings.save_success_callback(i)
            }, function() {
                a.revert()
            })
        },
        revert: function() {
            var e = t(this.element);
            e.find(".quickedit-edit").remove(),
            e.find(".quickedit-content").show()
        }
    },
    t.fn[a] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new o(this,e))
        }),
        this
    }
}(jQuery, window, document);

;/**** jquery/jquery-cookie.js ****/
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
}(function(e) {
    var n = /\+/g;
    function o(e) {
        return r.raw ? e : encodeURIComponent(e)
    }
    function i(o, i) {
        var t = r.raw ? o : function(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(n, " ")),
                r.json ? JSON.parse(e) : e
            } catch (e) {}
        }(o);
        return e.isFunction(i) ? i(t) : t
    }
    var r = e.cookie = function(n, t, c) {
        if (void 0 !== t && !e.isFunction(t)) {
            if ("number" == typeof (c = e.extend({}, r.defaults, c)).expires) {
                var u = c.expires
                  , a = c.expires = new Date;
                a.setTime(+a + 864e5 * u)
            }
            return document.cookie = [o(n), "=", function(e) {
                return o(r.json ? JSON.stringify(e) : String(e))
            }(t), c.expires ? "; expires=" + c.expires.toUTCString() : "", c.path ? "; path=" + c.path : "", c.domain ? "; domain=" + c.domain : "", c.secure ? "; secure" : ""].join("")
        }
        for (var d, f = n ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], s = 0, m = p.length; s < m; s++) {
            var v = p[s].split("=")
              , x = (d = v.shift(),
            r.raw ? d : decodeURIComponent(d))
              , k = v.join("=");
            if (n && n === x) {
                f = i(k, t);
                break
            }
            n || void 0 === (k = i(k)) || (f[x] = k)
        }
        return f
    }
    ;
    r.defaults = {},
    e.removeCookie = function(n, o) {
        return void 0 !== e.cookie(n) && (e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })),
        !e.cookie(n))
    }
});

;/**** jquery/jquery.hotkeys.js ****/
!function(t) {
    function e(e) {
        if ("string" == typeof e.data && (e.data = {
            keys: e.data
        }),
        e.data && e.data.keys && "string" == typeof e.data.keys) {
            var a = e.handler
              , s = e.data.keys.toLowerCase().split(" ");
            e.handler = function(e) {
                if (this === e.target || !(t.hotkeys.options.filterInputAcceptingElements && t.hotkeys.textInputTypes.test(e.target.nodeName) || t.hotkeys.options.filterContentEditable && t(e.target).attr("contenteditable") || t.hotkeys.options.filterTextInputs && t.inArray(e.target.type, t.hotkeys.textAcceptingInputTypes) > -1)) {
                    var n = "keypress" !== e.type && t.hotkeys.specialKeys[e.which]
                      , i = String.fromCharCode(e.which).toLowerCase()
                      , r = ""
                      , o = {};
                    t.each(["alt", "ctrl", "shift"], function(t, a) {
                        e[a + "Key"] && n !== a && (r += a + "+")
                    }),
                    e.metaKey && !e.ctrlKey && "meta" !== n && (r += "meta+"),
                    e.metaKey && "meta" !== n && r.indexOf("alt+ctrl+shift+") > -1 && (r = r.replace("alt+ctrl+shift+", "hyper+")),
                    n ? o[r + n] = !0 : (o[r + i] = !0,
                    o[r + t.hotkeys.shiftNums[i]] = !0,
                    "shift+" === r && (o[t.hotkeys.shiftNums[i]] = !0));
                    for (var p = 0, l = s.length; p < l; p++)
                        if (o[s[p]])
                            return a.apply(this, arguments)
                }
            }
        }
    }
    t.hotkeys = {
        version: "0.2.0",
        specialKeys: {
            8: "backspace",
            9: "tab",
            10: "return",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            59: ";",
            61: "=",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            173: "-",
            186: ";",
            187: "=",
            188: ",",
            189: "-",
            190: ".",
            191: "/",
            192: "`",
            219: "[",
            220: "\\",
            221: "]",
            222: "'"
        },
        shiftNums: {
            "`": "~",
            1: "!",
            2: "@",
            3: "#",
            4: "$",
            5: "%",
            6: "^",
            7: "&",
            8: "*",
            9: "(",
            0: ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        },
        textAcceptingInputTypes: ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color", "tel"],
        textInputTypes: /textarea|input|select/i,
        options: {
            filterInputAcceptingElements: !0,
            filterTextInputs: !0,
            filterContentEditable: !0
        }
    },
    t.each(["keydown", "keyup", "keypress"], function() {
        t.event.special[this] = {
            add: e
        }
    })
}(jQuery || this.jQuery || window.jQuery);

;/**** jquery/jtoggler.js ****/
var JToggler = {
    init: function(e) {
        JToggler.elements = $(e + ":not(.selectAll):not(.ignore_jtoggler)"),
        JToggler.elements.unbind("mousedown", JToggler.down).bind("mousedown", JToggler.down),
        JToggler.elements.unbind("click", JToggler.click).bind("click", JToggler.click),
        $("body").unbind("mouseup", JToggler.up).bind("mouseup", JToggler.up)
    },
    click: function(e) {
        if (JToggler.first && (JToggler.first.checked = JToggler.checked),
        e.shiftKey && JToggler.first) {
            var g, o = JToggler.elements.index(JToggler.first), r = JToggler.elements.index(e.target);
            for (o > r ? (g = r,
            r = o) : g = o; g < r; g++)
                JToggler.elements[g].checked = JToggler.checked
        }
    },
    down: function(e) {
        e.shiftKey || JToggler.started || (JToggler.started = !0,
        JToggler.first = e.target,
        JToggler.checked = e.target.checked = !e.target.checked,
        JToggler.elements.mouseover(JToggler.over))
    },
    over: function(e) {
        e.target.checked != JToggler.checked && (e.target.checked = JToggler.checked)
    },
    up: function(e) {
        JToggler.started && (JToggler.started = !1,
        JToggler.elements.unbind("mouseover", JToggler.over))
    }
};

;/**** libs/socket.io.js ****/
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.io = e() : t.io = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return t[r].call(o.exports, o, o.exports, e),
            o.loaded = !0,
            o.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.p = "",
        e(0)
    }([function(t, e, n) {
        "use strict";
        function r(t, e) {
            "object" === (void 0 === t ? "undefined" : o(t)) && (e = t,
            t = void 0),
            e = e || {};
            var n, r = i(t), s = r.source, u = r.id, h = r.path, f = p[u] && h in p[u].nsps;
            return e.forceNew || e["force new connection"] || !1 === e.multiplex || f ? (c("ignoring socket cache for %s", s),
            n = a(s, e)) : (p[u] || (c("new io instance for %s", s),
            p[u] = a(s, e)),
            n = p[u]),
            r.query && !e.query && (e.query = r.query),
            n.socket(r.path, e)
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = n(1)
          , s = n(7)
          , a = n(12)
          , c = n(3)("socket.io-client");
        t.exports = e = r;
        var p = e.managers = {};
        e.protocol = s.protocol,
        e.connect = r,
        e.Manager = n(12),
        e.Socket = n(36)
    }
    , function(t, e, n) {
        "use strict";
        var r = n(2)
          , o = n(3)("socket.io-client:url");
        t.exports = function(t, e) {
            var n = t;
            e = e || "undefined" != typeof location && location,
            null == t && (t = e.protocol + "//" + e.host),
            "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t),
            /^(https?|wss?):\/\//.test(t) || (o("protocol-less url %s", t),
            t = void 0 !== e ? e.protocol + "//" + t : "https://" + t),
            o("parse %s", t),
            n = r(t)),
            n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
            n.path = n.path || "/";
            var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
            return n.id = n.protocol + "://" + i + ":" + n.port,
            n.href = n.protocol + "://" + i + (e && e.port === n.port ? "" : ":" + n.port),
            n
        }
    }
    , function(t, e) {
        var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
          , r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        t.exports = function(t) {
            var e = t
              , o = t.indexOf("[")
              , i = t.indexOf("]");
            -1 != o && -1 != i && (t = t.substring(0, o) + t.substring(o, i).replace(/:/g, ";") + t.substring(i, t.length));
            for (var s = n.exec(t || ""), a = {}, c = 14; c--; )
                a[r[c]] = s[c] || "";
            return -1 != o && -1 != i && (a.source = e,
            a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"),
            a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
            a.ipv6uri = !0),
            a
        }
    }
    , function(t, e, n) {
        (function(r) {
            function o() {
                var t;
                try {
                    t = e.storage.debug
                } catch (t) {}
                return !t && void 0 !== r && "env"in r && (t = r.env.DEBUG),
                t
            }
            (e = t.exports = n(5)).log = function() {
                return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            ,
            e.formatArgs = function(t) {
                var n = this.useColors;
                if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff),
                n) {
                    var r = "color: " + this.color;
                    t.splice(1, 0, r, "color: inherit");
                    var o = 0
                      , i = 0;
                    t[0].replace(/%[a-zA-Z%]/g, function(t) {
                        "%%" !== t && "%c" === t && (i = ++o)
                    }),
                    t.splice(i, 0, r)
                }
            }
            ,
            e.save = function(t) {
                try {
                    null == t ? e.storage.removeItem("debug") : e.storage.debug = t
                } catch (t) {}
            }
            ,
            e.load = o,
            e.useColors = function() {
                return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }
            ,
            e.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
                try {
                    return window.localStorage
                } catch (t) {}
            }(),
            e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"],
            e.formatters.j = function(t) {
                try {
                    return JSON.stringify(t)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
            ,
            e.enable(o())
        }
        ).call(e, n(4))
    }
    , function(t, e) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(t) {
            if (p === setTimeout)
                return setTimeout(t, 0);
            if ((p === n || !p) && setTimeout)
                return p = setTimeout,
                setTimeout(t, 0);
            try {
                return p(t, 0)
            } catch (e) {
                try {
                    return p.call(null, t, 0)
                } catch (e) {
                    return p.call(this, t, 0)
                }
            }
        }
        function i() {
            d && f && (d = !1,
            f.length ? l = f.concat(l) : y = -1,
            l.length && s())
        }
        function s() {
            if (!d) {
                var t = o(i);
                d = !0;
                for (var e = l.length; e; ) {
                    for (f = l,
                    l = []; ++y < e; )
                        f && f[y].run();
                    y = -1,
                    e = l.length
                }
                f = null,
                d = !1,
                function(t) {
                    if (u === clearTimeout)
                        return clearTimeout(t);
                    if ((u === r || !u) && clearTimeout)
                        return u = clearTimeout,
                        clearTimeout(t);
                    try {
                        u(t)
                    } catch (e) {
                        try {
                            return u.call(null, t)
                        } catch (e) {
                            return u.call(this, t)
                        }
                    }
                }(t)
            }
        }
        function a(t, e) {
            this.fun = t,
            this.array = e
        }
        function c() {}
        var p, u, h = t.exports = {};
        !function() {
            try {
                p = "function" == typeof setTimeout ? setTimeout : n
            } catch (t) {
                p = n
            }
            try {
                u = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (t) {
                u = r
            }
        }();
        var f, l = [], d = !1, y = -1;
        h.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            l.push(new a(t,e)),
            1 !== l.length || d || o(s)
        }
        ,
        a.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        h.title = "browser",
        h.browser = !0,
        h.env = {},
        h.argv = [],
        h.version = "",
        h.versions = {},
        h.on = c,
        h.addListener = c,
        h.once = c,
        h.off = c,
        h.removeListener = c,
        h.removeAllListeners = c,
        h.emit = c,
        h.prependListener = c,
        h.prependOnceListener = c,
        h.listeners = function(t) {
            return []
        }
        ,
        h.binding = function(t) {
            throw new Error("process.binding is not supported")
        }
        ,
        h.cwd = function() {
            return "/"
        }
        ,
        h.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }
        ,
        h.umask = function() {
            return 0
        }
    }
    , function(t, e, n) {
        function r(t) {
            function n() {
                if (n.enabled) {
                    var t = n
                      , o = +new Date
                      , i = o - (r || o);
                    t.diff = i,
                    t.prev = r,
                    t.curr = o,
                    r = o;
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
                        s[a] = arguments[a];
                    s[0] = e.coerce(s[0]),
                    "string" != typeof s[0] && s.unshift("%O");
                    var c = 0;
                    s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if ("%%" === n)
                            return n;
                        c++;
                        var o = e.formatters[r];
                        if ("function" == typeof o) {
                            var i = s[c];
                            n = o.call(t, i),
                            s.splice(c, 1),
                            c--
                        }
                        return n
                    }),
                    e.formatArgs.call(t, s),
                    (n.log || e.log || console.log.bind(console)).apply(t, s)
                }
            }
            var r;
            return n.namespace = t,
            n.enabled = e.enabled(t),
            n.useColors = e.useColors(),
            n.color = function(t) {
                var n, r = 0;
                for (n in t)
                    r = (r << 5) - r + t.charCodeAt(n),
                    r |= 0;
                return e.colors[Math.abs(r) % e.colors.length]
            }(t),
            n.destroy = o,
            "function" == typeof e.init && e.init(n),
            e.instances.push(n),
            n
        }
        function o() {
            var t = e.instances.indexOf(this);
            return -1 !== t && (e.instances.splice(t, 1),
            !0)
        }
        (e = t.exports = r.debug = r.default = r).coerce = function(t) {
            return t instanceof Error ? t.stack || t.message : t
        }
        ,
        e.disable = function() {
            e.enable("")
        }
        ,
        e.enable = function(t) {
            e.save(t),
            e.names = [],
            e.skips = [];
            var n, r = ("string" == typeof t ? t : "").split(/[\s,]+/), o = r.length;
            for (n = 0; n < o; n++)
                r[n] && ("-" === (t = r[n].replace(/\*/g, ".*?"))[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));
            for (n = 0; n < e.instances.length; n++) {
                var i = e.instances[n];
                i.enabled = e.enabled(i.namespace)
            }
        }
        ,
        e.enabled = function(t) {
            if ("*" === t[t.length - 1])
                return !0;
            var n, r;
            for (n = 0,
            r = e.skips.length; n < r; n++)
                if (e.skips[n].test(t))
                    return !1;
            for (n = 0,
            r = e.names.length; n < r; n++)
                if (e.names[n].test(t))
                    return !0;
            return !1
        }
        ,
        e.humanize = n(6),
        e.instances = [],
        e.names = [],
        e.skips = [],
        e.formatters = {}
    }
    , function(t, e) {
        function n(t) {
            return r(t, a, "day") || r(t, s, "hour") || r(t, i, "minute") || r(t, o, "second") || t + " ms"
        }
        function r(t, e, n) {
            if (!(t < e))
                return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s"
        }
        var o = 1e3
          , i = 60 * o
          , s = 60 * i
          , a = 24 * s
          , c = 365.25 * a;
        t.exports = function(t, e) {
            e = e || {};
            var r = typeof t;
            if ("string" === r && t.length > 0)
                return function(t) {
                    if (!((t = String(t)).length > 100)) {
                        var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);
                        if (e) {
                            var n = parseFloat(e[1]);
                            switch ((e[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * c;
                            case "days":
                            case "day":
                            case "d":
                                return n * a;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * s;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * i;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * o;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n;
                            default:
                                return
                            }
                        }
                    }
                }(t);
            if ("number" === r && !1 === isNaN(t))
                return e.long ? n(t) : function(t) {
                    return t >= a ? Math.round(t / a) + "d" : t >= s ? Math.round(t / s) + "h" : t >= i ? Math.round(t / i) + "m" : t >= o ? Math.round(t / o) + "s" : t + "ms"
                }(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
        }
    }
    , function(t, e, n) {
        function r() {}
        function o(t) {
            var n = "" + t.type;
            if (e.BINARY_EVENT !== t.type && e.BINARY_ACK !== t.type || (n += t.attachments + "-"),
            t.nsp && "/" !== t.nsp && (n += t.nsp + ","),
            null != t.id && (n += t.id),
            null != t.data) {
                var r = function(t) {
                    try {
                        return JSON.stringify(t)
                    } catch (t) {
                        return !1
                    }
                }(t.data);
                if (!1 === r)
                    return d;
                n += r
            }
            return p("encoded %j as %s", t, n),
            n
        }
        function i() {
            this.reconstructor = null
        }
        function s(t) {
            var n = 0
              , r = {
                type: Number(t.charAt(0))
            };
            if (null == e.types[r.type])
                return c("unknown packet type " + r.type);
            if (e.BINARY_EVENT === r.type || e.BINARY_ACK === r.type) {
                for (var o = ""; "-" !== t.charAt(++n) && (o += t.charAt(n),
                n != t.length); )
                    ;
                if (o != Number(o) || "-" !== t.charAt(n))
                    throw new Error("Illegal attachments");
                r.attachments = Number(o)
            }
            if ("/" === t.charAt(n + 1))
                for (r.nsp = ""; ++n; ) {
                    if ("," === (s = t.charAt(n)))
                        break;
                    if (r.nsp += s,
                    n === t.length)
                        break
                }
            else
                r.nsp = "/";
            var i = t.charAt(n + 1);
            if ("" !== i && Number(i) == i) {
                for (r.id = ""; ++n; ) {
                    var s;
                    if (null == (s = t.charAt(n)) || Number(s) != s) {
                        --n;
                        break
                    }
                    if (r.id += t.charAt(n),
                    n === t.length)
                        break
                }
                r.id = Number(r.id)
            }
            if (t.charAt(++n)) {
                var a = function(t) {
                    try {
                        return JSON.parse(t)
                    } catch (t) {
                        return !1
                    }
                }(t.substr(n));
                if (!(!1 !== a && (r.type === e.ERROR || f(a))))
                    return c("invalid payload");
                r.data = a
            }
            return p("decoded %s as %j", t, r),
            r
        }
        function a(t) {
            this.reconPack = t,
            this.buffers = []
        }
        function c(t) {
            return {
                type: e.ERROR,
                data: "parser error: " + t
            }
        }
        var p = n(3)("socket.io-parser")
          , u = n(8)
          , h = n(9)
          , f = n(10)
          , l = n(11);
        e.protocol = 4,
        e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
        e.CONNECT = 0,
        e.DISCONNECT = 1,
        e.EVENT = 2,
        e.ACK = 3,
        e.ERROR = 4,
        e.BINARY_EVENT = 5,
        e.BINARY_ACK = 6,
        e.Encoder = r,
        e.Decoder = i;
        var d = e.ERROR + '"encode error"';
        r.prototype.encode = function(t, n) {
            (p("encoding packet %j", t),
            e.BINARY_EVENT === t.type || e.BINARY_ACK === t.type) ? function(t, e) {
                h.removeBlobs(t, function(t) {
                    var n = h.deconstructPacket(t)
                      , r = o(n.packet)
                      , i = n.buffers;
                    i.unshift(r),
                    e(i)
                })
            }(t, n) : n([o(t)])
        }
        ,
        u(i.prototype),
        i.prototype.add = function(t) {
            var n;
            if ("string" == typeof t)
                n = s(t),
                e.BINARY_EVENT === n.type || e.BINARY_ACK === n.type ? (this.reconstructor = new a(n),
                0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
            else {
                if (!l(t) && !t.base64)
                    throw new Error("Unknown type: " + t);
                if (!this.reconstructor)
                    throw new Error("got binary data when not reconstructing a packet");
                (n = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null,
                this.emit("decoded", n))
            }
        }
        ,
        i.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }
        ,
        a.prototype.takeBinaryData = function(t) {
            if (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments) {
                var e = h.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(),
                e
            }
            return null
        }
        ,
        a.prototype.finishedReconstruction = function() {
            this.reconPack = null,
            this.buffers = []
        }
    }
    , function(t, e, n) {
        function r(t) {
            if (t)
                return function(t) {
                    for (var e in r.prototype)
                        t[e] = r.prototype[e];
                    return t
                }(t)
        }
        t.exports = r,
        r.prototype.on = r.prototype.addEventListener = function(t, e) {
            return this._callbacks = this._callbacks || {},
            (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e),
            this
        }
        ,
        r.prototype.once = function(t, e) {
            function n() {
                this.off(t, n),
                e.apply(this, arguments)
            }
            return n.fn = e,
            this.on(t, n),
            this
        }
        ,
        r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(t, e) {
            if (this._callbacks = this._callbacks || {},
            0 == arguments.length)
                return this._callbacks = {},
                this;
            var n = this._callbacks["$" + t];
            if (!n)
                return this;
            if (1 == arguments.length)
                return delete this._callbacks["$" + t],
                this;
            for (var r, o = 0; o < n.length; o++)
                if ((r = n[o]) === e || r.fn === e) {
                    n.splice(o, 1);
                    break
                }
            return this
        }
        ,
        r.prototype.emit = function(t) {
            this._callbacks = this._callbacks || {};
            var e = [].slice.call(arguments, 1)
              , n = this._callbacks["$" + t];
            if (n)
                for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r)
                    n[r].apply(this, e);
            return this
        }
        ,
        r.prototype.listeners = function(t) {
            return this._callbacks = this._callbacks || {},
            this._callbacks["$" + t] || []
        }
        ,
        r.prototype.hasListeners = function(t) {
            return !!this.listeners(t).length
        }
    }
    , function(t, e, n) {
        var r = n(10)
          , o = n(11)
          , i = Object.prototype.toString
          , s = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob)
          , a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
        e.deconstructPacket = function(t) {
            var e = []
              , n = t.data
              , i = t;
            return i.data = function t(e, n) {
                if (!e)
                    return e;
                if (o(e)) {
                    var i = {
                        _placeholder: !0,
                        num: n.length
                    };
                    return n.push(e),
                    i
                }
                if (r(e)) {
                    for (var s = new Array(e.length), a = 0; a < e.length; a++)
                        s[a] = t(e[a], n);
                    return s
                }
                if ("object" == typeof e && !(e instanceof Date)) {
                    for (var c in s = {},
                    e)
                        s[c] = t(e[c], n);
                    return s
                }
                return e
            }(n, e),
            i.attachments = e.length,
            {
                packet: i,
                buffers: e
            }
        }
        ,
        e.reconstructPacket = function(t, e) {
            return t.data = function t(e, n) {
                if (!e)
                    return e;
                if (e && e._placeholder)
                    return n[e.num];
                if (r(e))
                    for (var o = 0; o < e.length; o++)
                        e[o] = t(e[o], n);
                else if ("object" == typeof e)
                    for (var i in e)
                        e[i] = t(e[i], n);
                return e
            }(t.data, e),
            t.attachments = void 0,
            t
        }
        ,
        e.removeBlobs = function(t, e) {
            var n = 0
              , i = t;
            (function t(c, p, u) {
                if (!c)
                    return c;
                if (s && c instanceof Blob || a && c instanceof File) {
                    n++;
                    var h = new FileReader;
                    h.onload = function() {
                        u ? u[p] = this.result : i = this.result,
                        --n || e(i)
                    }
                    ,
                    h.readAsArrayBuffer(c)
                } else if (r(c))
                    for (var f = 0; f < c.length; f++)
                        t(c[f], f, c);
                else if ("object" == typeof c && !o(c))
                    for (var l in c)
                        t(c[l], l, c)
            }
            )(i),
            n || e(i)
        }
    }
    , function(t, e) {
        var n = {}.toString;
        t.exports = Array.isArray || function(t) {
            return "[object Array]" == n.call(t)
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            return n && Buffer.isBuffer(t) || r && (t instanceof ArrayBuffer || o(t))
        }
        ;
        var n = "function" == typeof Buffer && "function" == typeof Buffer.isBuffer
          , r = "function" == typeof ArrayBuffer
          , o = function(t) {
            return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(this instanceof r))
                return new r(t,e);
            t && "object" === (void 0 === t ? "undefined" : o(t)) && (e = t,
            t = void 0),
            (e = e || {}).path = e.path || "/socket.io",
            this.nsps = {},
            this.subs = [],
            this.opts = e,
            this.reconnection(!1 !== e.reconnection),
            this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(e.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),
            this.randomizationFactor(e.randomizationFactor || .5),
            this.backoff = new l({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor()
            }),
            this.timeout(null == e.timeout ? 2e4 : e.timeout),
            this.readyState = "closed",
            this.uri = t,
            this.connecting = [],
            this.lastPing = null,
            this.encoding = !1,
            this.packetBuffer = [];
            var n = e.parser || c;
            this.encoder = new n.Encoder,
            this.decoder = new n.Decoder,
            this.autoConnect = !1 !== e.autoConnect,
            this.autoConnect && this.open()
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = n(13)
          , s = n(36)
          , a = n(8)
          , c = n(7)
          , p = n(38)
          , u = n(39)
          , h = n(3)("socket.io-client:manager")
          , f = n(35)
          , l = n(40)
          , d = Object.prototype.hasOwnProperty;
        t.exports = r,
        r.prototype.emitAll = function() {
            for (var t in this.emit.apply(this, arguments),
            this.nsps)
                d.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments)
        }
        ,
        r.prototype.updateSocketIds = function() {
            for (var t in this.nsps)
                d.call(this.nsps, t) && (this.nsps[t].id = this.generateId(t))
        }
        ,
        r.prototype.generateId = function(t) {
            return ("/" === t ? "" : t + "#") + this.engine.id
        }
        ,
        a(r.prototype),
        r.prototype.reconnection = function(t) {
            return arguments.length ? (this._reconnection = !!t,
            this) : this._reconnection
        }
        ,
        r.prototype.reconnectionAttempts = function(t) {
            return arguments.length ? (this._reconnectionAttempts = t,
            this) : this._reconnectionAttempts
        }
        ,
        r.prototype.reconnectionDelay = function(t) {
            return arguments.length ? (this._reconnectionDelay = t,
            this.backoff && this.backoff.setMin(t),
            this) : this._reconnectionDelay
        }
        ,
        r.prototype.randomizationFactor = function(t) {
            return arguments.length ? (this._randomizationFactor = t,
            this.backoff && this.backoff.setJitter(t),
            this) : this._randomizationFactor
        }
        ,
        r.prototype.reconnectionDelayMax = function(t) {
            return arguments.length ? (this._reconnectionDelayMax = t,
            this.backoff && this.backoff.setMax(t),
            this) : this._reconnectionDelayMax
        }
        ,
        r.prototype.timeout = function(t) {
            return arguments.length ? (this._timeout = t,
            this) : this._timeout
        }
        ,
        r.prototype.maybeReconnectOnOpen = function() {
            !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
        }
        ,
        r.prototype.open = r.prototype.connect = function(t, e) {
            if (h("readyState %s", this.readyState),
            ~this.readyState.indexOf("open"))
                return this;
            h("opening %s", this.uri),
            this.engine = i(this.uri, this.opts);
            var n = this.engine
              , r = this;
            this.readyState = "opening",
            this.skipReconnect = !1;
            var o = p(n, "open", function() {
                r.onopen(),
                t && t()
            })
              , s = p(n, "error", function(e) {
                if (h("connect_error"),
                r.cleanup(),
                r.readyState = "closed",
                r.emitAll("connect_error", e),
                t) {
                    var n = new Error("Connection error");
                    n.data = e,
                    t(n)
                } else
                    r.maybeReconnectOnOpen()
            });
            if (!1 !== this._timeout) {
                var a = this._timeout;
                h("connect attempt will timeout after %d", a);
                var c = setTimeout(function() {
                    h("connect attempt timed out after %d", a),
                    o.destroy(),
                    n.close(),
                    n.emit("error", "timeout"),
                    r.emitAll("connect_timeout", a)
                }, a);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(c)
                    }
                })
            }
            return this.subs.push(o),
            this.subs.push(s),
            this
        }
        ,
        r.prototype.onopen = function() {
            h("open"),
            this.cleanup(),
            this.readyState = "open",
            this.emit("open");
            var t = this.engine;
            this.subs.push(p(t, "data", u(this, "ondata"))),
            this.subs.push(p(t, "ping", u(this, "onping"))),
            this.subs.push(p(t, "pong", u(this, "onpong"))),
            this.subs.push(p(t, "error", u(this, "onerror"))),
            this.subs.push(p(t, "close", u(this, "onclose"))),
            this.subs.push(p(this.decoder, "decoded", u(this, "ondecoded")))
        }
        ,
        r.prototype.onping = function() {
            this.lastPing = new Date,
            this.emitAll("ping")
        }
        ,
        r.prototype.onpong = function() {
            this.emitAll("pong", new Date - this.lastPing)
        }
        ,
        r.prototype.ondata = function(t) {
            this.decoder.add(t)
        }
        ,
        r.prototype.ondecoded = function(t) {
            this.emit("packet", t)
        }
        ,
        r.prototype.onerror = function(t) {
            h("error", t),
            this.emitAll("error", t)
        }
        ,
        r.prototype.socket = function(t, e) {
            function n() {
                ~f(o.connecting, r) || o.connecting.push(r)
            }
            var r = this.nsps[t];
            if (!r) {
                r = new s(this,t,e),
                this.nsps[t] = r;
                var o = this;
                r.on("connecting", n),
                r.on("connect", function() {
                    r.id = o.generateId(t)
                }),
                this.autoConnect && n()
            }
            return r
        }
        ,
        r.prototype.destroy = function(t) {
            var e = f(this.connecting, t);
            ~e && this.connecting.splice(e, 1),
            this.connecting.length || this.close()
        }
        ,
        r.prototype.packet = function(t) {
            h("writing packet %j", t);
            var e = this;
            t.query && 0 === t.type && (t.nsp += "?" + t.query),
            e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0,
            this.encoder.encode(t, function(n) {
                for (var r = 0; r < n.length; r++)
                    e.engine.write(n[r], t.options);
                e.encoding = !1,
                e.processPacketQueue()
            }))
        }
        ,
        r.prototype.processPacketQueue = function() {
            if (this.packetBuffer.length > 0 && !this.encoding) {
                var t = this.packetBuffer.shift();
                this.packet(t)
            }
        }
        ,
        r.prototype.cleanup = function() {
            h("cleanup");
            for (var t = this.subs.length, e = 0; e < t; e++) {
                this.subs.shift().destroy()
            }
            this.packetBuffer = [],
            this.encoding = !1,
            this.lastPing = null,
            this.decoder.destroy()
        }
        ,
        r.prototype.close = r.prototype.disconnect = function() {
            h("disconnect"),
            this.skipReconnect = !0,
            this.reconnecting = !1,
            "opening" === this.readyState && this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.engine && this.engine.close()
        }
        ,
        r.prototype.onclose = function(t) {
            h("onclose"),
            this.cleanup(),
            this.backoff.reset(),
            this.readyState = "closed",
            this.emit("close", t),
            this._reconnection && !this.skipReconnect && this.reconnect()
        }
        ,
        r.prototype.reconnect = function() {
            if (this.reconnecting || this.skipReconnect)
                return this;
            var t = this;
            if (this.backoff.attempts >= this._reconnectionAttempts)
                h("reconnect failed"),
                this.backoff.reset(),
                this.emitAll("reconnect_failed"),
                this.reconnecting = !1;
            else {
                var e = this.backoff.duration();
                h("will wait %dms before reconnect attempt", e),
                this.reconnecting = !0;
                var n = setTimeout(function() {
                    t.skipReconnect || (h("attempting reconnect"),
                    t.emitAll("reconnect_attempt", t.backoff.attempts),
                    t.emitAll("reconnecting", t.backoff.attempts),
                    t.skipReconnect || t.open(function(e) {
                        e ? (h("reconnect attempt error"),
                        t.reconnecting = !1,
                        t.reconnect(),
                        t.emitAll("reconnect_error", e.data)) : (h("reconnect success"),
                        t.onreconnect())
                    }))
                }, e);
                this.subs.push({
                    destroy: function() {
                        clearTimeout(n)
                    }
                })
            }
        }
        ,
        r.prototype.onreconnect = function() {
            var t = this.backoff.attempts;
            this.reconnecting = !1,
            this.backoff.reset(),
            this.updateSocketIds(),
            this.emitAll("reconnect", t)
        }
    }
    , function(t, e, n) {
        t.exports = n(14),
        t.exports.parser = n(21)
    }
    , function(t, e, n) {
        function r(t, e) {
            return this instanceof r ? (e = e || {},
            t && "object" == typeof t && (e = t,
            t = null),
            t ? (t = p(t),
            e.hostname = t.host,
            e.secure = "https" === t.protocol || "wss" === t.protocol,
            e.port = t.port,
            t.query && (e.query = t.query)) : e.host && (e.hostname = p(e.host).host),
            this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol,
            e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
            this.agent = e.agent || !1,
            this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost"),
            this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80),
            this.query = e.query || {},
            "string" == typeof this.query && (this.query = u.decode(this.query)),
            this.upgrade = !1 !== e.upgrade,
            this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/",
            this.forceJSONP = !!e.forceJSONP,
            this.jsonp = !1 !== e.jsonp,
            this.forceBase64 = !!e.forceBase64,
            this.enablesXDR = !!e.enablesXDR,
            this.timestampParam = e.timestampParam || "t",
            this.timestampRequests = e.timestampRequests,
            this.transports = e.transports || ["polling", "websocket"],
            this.transportOptions = e.transportOptions || {},
            this.readyState = "",
            this.writeBuffer = [],
            this.prevBufferLen = 0,
            this.policyPort = e.policyPort || 843,
            this.rememberUpgrade = e.rememberUpgrade || !1,
            this.binaryType = null,
            this.onlyBinaryUpgrades = e.onlyBinaryUpgrades,
            this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}),
            !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
            this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024),
            this.pfx = e.pfx || null,
            this.key = e.key || null,
            this.passphrase = e.passphrase || null,
            this.cert = e.cert || null,
            this.ca = e.ca || null,
            this.ciphers = e.ciphers || null,
            this.rejectUnauthorized = void 0 === e.rejectUnauthorized || e.rejectUnauthorized,
            this.forceNode = !!e.forceNode,
            this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(),
            ("undefined" == typeof self || this.isReactNative) && (e.extraHeaders && Object.keys(e.extraHeaders).length > 0 && (this.extraHeaders = e.extraHeaders),
            e.localAddress && (this.localAddress = e.localAddress)),
            this.id = null,
            this.upgrades = null,
            this.pingInterval = null,
            this.pingTimeout = null,
            this.pingIntervalTimer = null,
            this.pingTimeoutTimer = null,
            void this.open()) : new r(t,e)
        }
        var o = n(15)
          , i = n(8)
          , s = n(3)("engine.io-client:socket")
          , a = n(35)
          , c = n(21)
          , p = n(2)
          , u = n(29);
        t.exports = r,
        r.priorWebsocketSuccess = !1,
        i(r.prototype),
        r.protocol = c.protocol,
        r.Socket = r,
        r.Transport = n(20),
        r.transports = n(15),
        r.parser = n(21),
        r.prototype.createTransport = function(t) {
            s('creating transport "%s"', t);
            var e = function(t) {
                var e = {};
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }(this.query);
            e.EIO = c.protocol,
            e.transport = t;
            var n = this.transportOptions[t] || {};
            return this.id && (e.sid = this.id),
            new o[t]({
                query: e,
                socket: this,
                agent: n.agent || this.agent,
                hostname: n.hostname || this.hostname,
                port: n.port || this.port,
                secure: n.secure || this.secure,
                path: n.path || this.path,
                forceJSONP: n.forceJSONP || this.forceJSONP,
                jsonp: n.jsonp || this.jsonp,
                forceBase64: n.forceBase64 || this.forceBase64,
                enablesXDR: n.enablesXDR || this.enablesXDR,
                timestampRequests: n.timestampRequests || this.timestampRequests,
                timestampParam: n.timestampParam || this.timestampParam,
                policyPort: n.policyPort || this.policyPort,
                pfx: n.pfx || this.pfx,
                key: n.key || this.key,
                passphrase: n.passphrase || this.passphrase,
                cert: n.cert || this.cert,
                ca: n.ca || this.ca,
                ciphers: n.ciphers || this.ciphers,
                rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
                perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
                extraHeaders: n.extraHeaders || this.extraHeaders,
                forceNode: n.forceNode || this.forceNode,
                localAddress: n.localAddress || this.localAddress,
                requestTimeout: n.requestTimeout || this.requestTimeout,
                protocols: n.protocols || void 0,
                isReactNative: this.isReactNative
            })
        }
        ,
        r.prototype.open = function() {
            var t;
            if (this.rememberUpgrade && r.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
                t = "websocket";
            else {
                if (0 === this.transports.length) {
                    var e = this;
                    return void setTimeout(function() {
                        e.emit("error", "No transports available")
                    }, 0)
                }
                t = this.transports[0]
            }
            this.readyState = "opening";
            try {
                t = this.createTransport(t)
            } catch (t) {
                return this.transports.shift(),
                void this.open()
            }
            t.open(),
            this.setTransport(t)
        }
        ,
        r.prototype.setTransport = function(t) {
            s("setting transport %s", t.name);
            var e = this;
            this.transport && (s("clearing existing transport %s", this.transport.name),
            this.transport.removeAllListeners()),
            this.transport = t,
            t.on("drain", function() {
                e.onDrain()
            }).on("packet", function(t) {
                e.onPacket(t)
            }).on("error", function(t) {
                e.onError(t)
            }).on("close", function() {
                e.onClose("transport close")
            })
        }
        ,
        r.prototype.probe = function(t) {
            function e() {
                if (f.onlyBinaryUpgrades) {
                    var e = !this.supportsBinary && f.transport.supportsBinary;
                    h = h || e
                }
                h || (s('probe transport "%s" opened', t),
                u.send([{
                    type: "ping",
                    data: "probe"
                }]),
                u.once("packet", function(e) {
                    if (!h)
                        if ("pong" === e.type && "probe" === e.data) {
                            if (s('probe transport "%s" pong', t),
                            f.upgrading = !0,
                            f.emit("upgrading", u),
                            !u)
                                return;
                            r.priorWebsocketSuccess = "websocket" === u.name,
                            s('pausing current transport "%s"', f.transport.name),
                            f.transport.pause(function() {
                                h || "closed" !== f.readyState && (s("changing transport and sending upgrade packet"),
                                p(),
                                f.setTransport(u),
                                u.send([{
                                    type: "upgrade"
                                }]),
                                f.emit("upgrade", u),
                                u = null,
                                f.upgrading = !1,
                                f.flush())
                            })
                        } else {
                            s('probe transport "%s" failed', t);
                            var n = new Error("probe error");
                            n.transport = u.name,
                            f.emit("upgradeError", n)
                        }
                }))
            }
            function n() {
                h || (h = !0,
                p(),
                u.close(),
                u = null)
            }
            function o(e) {
                var r = new Error("probe error: " + e);
                r.transport = u.name,
                n(),
                s('probe transport "%s" failed because of error: %s', t, e),
                f.emit("upgradeError", r)
            }
            function i() {
                o("transport closed")
            }
            function a() {
                o("socket closed")
            }
            function c(t) {
                u && t.name !== u.name && (s('"%s" works - aborting "%s"', t.name, u.name),
                n())
            }
            function p() {
                u.removeListener("open", e),
                u.removeListener("error", o),
                u.removeListener("close", i),
                f.removeListener("close", a),
                f.removeListener("upgrading", c)
            }
            s('probing transport "%s"', t);
            var u = this.createTransport(t, {
                probe: 1
            })
              , h = !1
              , f = this;
            r.priorWebsocketSuccess = !1,
            u.once("open", e),
            u.once("error", o),
            u.once("close", i),
            this.once("close", a),
            this.once("upgrading", c),
            u.open()
        }
        ,
        r.prototype.onOpen = function() {
            if (s("socket open"),
            this.readyState = "open",
            r.priorWebsocketSuccess = "websocket" === this.transport.name,
            this.emit("open"),
            this.flush(),
            "open" === this.readyState && this.upgrade && this.transport.pause) {
                s("starting upgrade probes");
                for (var t = 0, e = this.upgrades.length; t < e; t++)
                    this.probe(this.upgrades[t])
            }
        }
        ,
        r.prototype.onPacket = function(t) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
                switch (s('socket receive: type "%s", data "%s"', t.type, t.data),
                this.emit("packet", t),
                this.emit("heartbeat"),
                t.type) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "pong":
                    this.setPing(),
                    this.emit("pong");
                    break;
                case "error":
                    var e = new Error("server error");
                    e.code = t.data,
                    this.onError(e);
                    break;
                case "message":
                    this.emit("data", t.data),
                    this.emit("message", t.data)
                }
            else
                s('packet received with socket readyState "%s"', this.readyState)
        }
        ,
        r.prototype.onHandshake = function(t) {
            this.emit("handshake", t),
            this.id = t.sid,
            this.transport.query.sid = t.sid,
            this.upgrades = this.filterUpgrades(t.upgrades),
            this.pingInterval = t.pingInterval,
            this.pingTimeout = t.pingTimeout,
            this.onOpen(),
            "closed" !== this.readyState && (this.setPing(),
            this.removeListener("heartbeat", this.onHeartbeat),
            this.on("heartbeat", this.onHeartbeat))
        }
        ,
        r.prototype.onHeartbeat = function(t) {
            clearTimeout(this.pingTimeoutTimer);
            var e = this;
            e.pingTimeoutTimer = setTimeout(function() {
                "closed" !== e.readyState && e.onClose("ping timeout")
            }, t || e.pingInterval + e.pingTimeout)
        }
        ,
        r.prototype.setPing = function() {
            var t = this;
            clearTimeout(t.pingIntervalTimer),
            t.pingIntervalTimer = setTimeout(function() {
                s("writing ping packet - expecting pong within %sms", t.pingTimeout),
                t.ping(),
                t.onHeartbeat(t.pingTimeout)
            }, t.pingInterval)
        }
        ,
        r.prototype.ping = function() {
            var t = this;
            this.sendPacket("ping", function() {
                t.emit("ping")
            })
        }
        ,
        r.prototype.onDrain = function() {
            this.writeBuffer.splice(0, this.prevBufferLen),
            this.prevBufferLen = 0,
            0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
        }
        ,
        r.prototype.flush = function() {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (s("flushing %d packets in socket", this.writeBuffer.length),
            this.transport.send(this.writeBuffer),
            this.prevBufferLen = this.writeBuffer.length,
            this.emit("flush"))
        }
        ,
        r.prototype.write = r.prototype.send = function(t, e, n) {
            return this.sendPacket("message", t, e, n),
            this
        }
        ,
        r.prototype.sendPacket = function(t, e, n, r) {
            if ("function" == typeof e && (r = e,
            e = void 0),
            "function" == typeof n && (r = n,
            n = null),
            "closing" !== this.readyState && "closed" !== this.readyState) {
                (n = n || {}).compress = !1 !== n.compress;
                var o = {
                    type: t,
                    data: e,
                    options: n
                };
                this.emit("packetCreate", o),
                this.writeBuffer.push(o),
                r && this.once("flush", r),
                this.flush()
            }
        }
        ,
        r.prototype.close = function() {
            function t() {
                r.onClose("forced close"),
                s("socket closing - telling transport to close"),
                r.transport.close()
            }
            function e() {
                r.removeListener("upgrade", e),
                r.removeListener("upgradeError", e),
                t()
            }
            function n() {
                r.once("upgrade", e),
                r.once("upgradeError", e)
            }
            if ("opening" === this.readyState || "open" === this.readyState) {
                this.readyState = "closing";
                var r = this;
                this.writeBuffer.length ? this.once("drain", function() {
                    this.upgrading ? n() : t()
                }) : this.upgrading ? n() : t()
            }
            return this
        }
        ,
        r.prototype.onError = function(t) {
            s("socket error %j", t),
            r.priorWebsocketSuccess = !1,
            this.emit("error", t),
            this.onClose("transport error", t)
        }
        ,
        r.prototype.onClose = function(t, e) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                s('socket close with reason: "%s"', t);
                clearTimeout(this.pingIntervalTimer),
                clearTimeout(this.pingTimeoutTimer),
                this.transport.removeAllListeners("close"),
                this.transport.close(),
                this.transport.removeAllListeners(),
                this.readyState = "closed",
                this.id = null,
                this.emit("close", t, e),
                this.writeBuffer = [],
                this.prevBufferLen = 0
            }
        }
        ,
        r.prototype.filterUpgrades = function(t) {
            for (var e = [], n = 0, r = t.length; n < r; n++)
                ~a(this.transports, t[n]) && e.push(t[n]);
            return e
        }
    }
    , function(t, e, n) {
        var r = n(16)
          , o = n(18)
          , i = n(32)
          , s = n(33);
        e.polling = function(t) {
            var e = !1
              , n = !1
              , s = !1 !== t.jsonp;
            if ("undefined" != typeof location) {
                var a = "https:" === location.protocol
                  , c = location.port;
                c || (c = a ? 443 : 80),
                e = t.hostname !== location.hostname || c !== t.port,
                n = t.secure !== a
            }
            if (t.xdomain = e,
            t.xscheme = n,
            "open"in new r(t) && !t.forceJSONP)
                return new o(t);
            if (!s)
                throw new Error("JSONP disabled");
            return new i(t)
        }
        ,
        e.websocket = s
    }
    , function(t, e, n) {
        var r = n(17);
        t.exports = function(t) {
            var e = t.xdomain
              , n = t.xscheme
              , o = t.enablesXDR;
            try {
                if ("undefined" != typeof XMLHttpRequest && (!e || r))
                    return new XMLHttpRequest
            } catch (t) {}
            try {
                if ("undefined" != typeof XDomainRequest && !n && o)
                    return new XDomainRequest
            } catch (t) {}
            if (!e)
                try {
                    return new (self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (t) {}
        }
    }
    , function(t, e) {
        try {
            t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials"in new XMLHttpRequest
        } catch (e) {
            t.exports = !1
        }
    }
    , function(t, e, n) {
        function r() {}
        function o(t) {
            if (c.call(this, t),
            this.requestTimeout = t.requestTimeout,
            this.extraHeaders = t.extraHeaders,
            "undefined" != typeof location) {
                var e = "https:" === location.protocol
                  , n = location.port;
                n || (n = e ? 443 : 80),
                this.xd = "undefined" != typeof location && t.hostname !== location.hostname || n !== t.port,
                this.xs = t.secure !== e
            }
        }
        function i(t) {
            this.method = t.method || "GET",
            this.uri = t.uri,
            this.xd = !!t.xd,
            this.xs = !!t.xs,
            this.async = !1 !== t.async,
            this.data = void 0 !== t.data ? t.data : null,
            this.agent = t.agent,
            this.isBinary = t.isBinary,
            this.supportsBinary = t.supportsBinary,
            this.enablesXDR = t.enablesXDR,
            this.requestTimeout = t.requestTimeout,
            this.pfx = t.pfx,
            this.key = t.key,
            this.passphrase = t.passphrase,
            this.cert = t.cert,
            this.ca = t.ca,
            this.ciphers = t.ciphers,
            this.rejectUnauthorized = t.rejectUnauthorized,
            this.extraHeaders = t.extraHeaders,
            this.create()
        }
        function s() {
            for (var t in i.requests)
                i.requests.hasOwnProperty(t) && i.requests[t].abort()
        }
        var a = n(16)
          , c = n(19)
          , p = n(8)
          , u = n(30)
          , h = n(3)("engine.io-client:polling-xhr");
        if (t.exports = o,
        t.exports.Request = i,
        u(o, c),
        o.prototype.supportsBinary = !0,
        o.prototype.request = function(t) {
            return (t = t || {}).uri = this.uri(),
            t.xd = this.xd,
            t.xs = this.xs,
            t.agent = this.agent || !1,
            t.supportsBinary = this.supportsBinary,
            t.enablesXDR = this.enablesXDR,
            t.pfx = this.pfx,
            t.key = this.key,
            t.passphrase = this.passphrase,
            t.cert = this.cert,
            t.ca = this.ca,
            t.ciphers = this.ciphers,
            t.rejectUnauthorized = this.rejectUnauthorized,
            t.requestTimeout = this.requestTimeout,
            t.extraHeaders = this.extraHeaders,
            new i(t)
        }
        ,
        o.prototype.doWrite = function(t, e) {
            var n = "string" != typeof t && void 0 !== t
              , r = this.request({
                method: "POST",
                data: t,
                isBinary: n
            })
              , o = this;
            r.on("success", e),
            r.on("error", function(t) {
                o.onError("xhr post error", t)
            }),
            this.sendXhr = r
        }
        ,
        o.prototype.doPoll = function() {
            h("xhr poll");
            var t = this.request()
              , e = this;
            t.on("data", function(t) {
                e.onData(t)
            }),
            t.on("error", function(t) {
                e.onError("xhr poll error", t)
            }),
            this.pollXhr = t
        }
        ,
        p(i.prototype),
        i.prototype.create = function() {
            var t = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            t.pfx = this.pfx,
            t.key = this.key,
            t.passphrase = this.passphrase,
            t.cert = this.cert,
            t.ca = this.ca,
            t.ciphers = this.ciphers,
            t.rejectUnauthorized = this.rejectUnauthorized;
            var e = this.xhr = new a(t)
              , n = this;
            try {
                h("xhr open %s: %s", this.method, this.uri),
                e.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var r in e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0),
                        this.extraHeaders)
                            this.extraHeaders.hasOwnProperty(r) && e.setRequestHeader(r, this.extraHeaders[r])
                } catch (t) {}
                if ("POST" === this.method)
                    try {
                        this.isBinary ? e.setRequestHeader("Content-type", "application/octet-stream") : e.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } catch (t) {}
                try {
                    e.setRequestHeader("Accept", "*/*")
                } catch (t) {}
                "withCredentials"in e && (e.withCredentials = !0),
                this.requestTimeout && (e.timeout = this.requestTimeout),
                this.hasXDR() ? (e.onload = function() {
                    n.onLoad()
                }
                ,
                e.onerror = function() {
                    n.onError(e.responseText)
                }
                ) : e.onreadystatechange = function() {
                    if (2 === e.readyState)
                        try {
                            var t = e.getResponseHeader("Content-Type");
                            n.supportsBinary && "application/octet-stream" === t && (e.responseType = "arraybuffer")
                        } catch (t) {}
                    4 === e.readyState && (200 === e.status || 1223 === e.status ? n.onLoad() : setTimeout(function() {
                        n.onError(e.status)
                    }, 0))
                }
                ,
                h("xhr data %s", this.data),
                e.send(this.data)
            } catch (t) {
                return void setTimeout(function() {
                    n.onError(t)
                }, 0)
            }
            "undefined" != typeof document && (this.index = i.requestsCount++,
            i.requests[this.index] = this)
        }
        ,
        i.prototype.onSuccess = function() {
            this.emit("success"),
            this.cleanup()
        }
        ,
        i.prototype.onData = function(t) {
            this.emit("data", t),
            this.onSuccess()
        }
        ,
        i.prototype.onError = function(t) {
            this.emit("error", t),
            this.cleanup(!0)
        }
        ,
        i.prototype.cleanup = function(t) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = r : this.xhr.onreadystatechange = r,
                t)
                    try {
                        this.xhr.abort()
                    } catch (t) {}
                "undefined" != typeof document && delete i.requests[this.index],
                this.xhr = null
            }
        }
        ,
        i.prototype.onLoad = function() {
            var t;
            try {
                var e;
                try {
                    e = this.xhr.getResponseHeader("Content-Type")
                } catch (t) {}
                t = "application/octet-stream" === e && this.xhr.response || this.xhr.responseText
            } catch (t) {
                this.onError(t)
            }
            null != t && this.onData(t)
        }
        ,
        i.prototype.hasXDR = function() {
            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
        }
        ,
        i.prototype.abort = function() {
            this.cleanup()
        }
        ,
        i.requestsCount = 0,
        i.requests = {},
        "undefined" != typeof document)
            if ("function" == typeof attachEvent)
                attachEvent("onunload", s);
            else if ("function" == typeof addEventListener) {
                var f = "onpagehide"in self ? "pagehide" : "unload";
                addEventListener(f, s, !1)
            }
    }
    , function(t, e, n) {
        function r(t) {
            var e = t && t.forceBase64;
            u && !e || (this.supportsBinary = !1),
            o.call(this, t)
        }
        var o = n(20)
          , i = n(29)
          , s = n(21)
          , a = n(30)
          , c = n(31)
          , p = n(3)("engine.io-client:polling");
        t.exports = r;
        var u = null != new (n(16))({
            xdomain: !1
        }).responseType;
        a(r, o),
        r.prototype.name = "polling",
        r.prototype.doOpen = function() {
            this.poll()
        }
        ,
        r.prototype.pause = function(t) {
            function e() {
                p("paused"),
                n.readyState = "paused",
                t()
            }
            var n = this;
            if (this.readyState = "pausing",
            this.polling || !this.writable) {
                var r = 0;
                this.polling && (p("we are currently polling - waiting to pause"),
                r++,
                this.once("pollComplete", function() {
                    p("pre-pause polling complete"),
                    --r || e()
                })),
                this.writable || (p("we are currently writing - waiting to pause"),
                r++,
                this.once("drain", function() {
                    p("pre-pause writing complete"),
                    --r || e()
                }))
            } else
                e()
        }
        ,
        r.prototype.poll = function() {
            p("polling"),
            this.polling = !0,
            this.doPoll(),
            this.emit("poll")
        }
        ,
        r.prototype.onData = function(t) {
            var e = this;
            p("polling got data %s", t);
            s.decodePayload(t, this.socket.binaryType, function(t, n, r) {
                return "opening" === e.readyState && e.onOpen(),
                "close" === t.type ? (e.onClose(),
                !1) : void e.onPacket(t)
            }),
            "closed" !== this.readyState && (this.polling = !1,
            this.emit("pollComplete"),
            "open" === this.readyState ? this.poll() : p('ignoring poll - transport state "%s"', this.readyState))
        }
        ,
        r.prototype.doClose = function() {
            function t() {
                p("writing close packet"),
                e.write([{
                    type: "close"
                }])
            }
            var e = this;
            "open" === this.readyState ? (p("transport open - closing"),
            t()) : (p("transport not open - deferring close"),
            this.once("open", t))
        }
        ,
        r.prototype.write = function(t) {
            var e = this;
            this.writable = !1;
            var n = function() {
                e.writable = !0,
                e.emit("drain")
            };
            s.encodePayload(t, this.supportsBinary, function(t) {
                e.doWrite(t, n)
            })
        }
        ,
        r.prototype.uri = function() {
            var t = this.query || {}
              , e = this.secure ? "https" : "http"
              , n = "";
            return !1 !== this.timestampRequests && (t[this.timestampParam] = c()),
            this.supportsBinary || t.sid || (t.b64 = 1),
            t = i.encode(t),
            this.port && ("https" === e && 443 !== Number(this.port) || "http" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
            t.length && (t = "?" + t),
            e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
        }
    }
    , function(t, e, n) {
        function r(t) {
            this.path = t.path,
            this.hostname = t.hostname,
            this.port = t.port,
            this.secure = t.secure,
            this.query = t.query,
            this.timestampParam = t.timestampParam,
            this.timestampRequests = t.timestampRequests,
            this.readyState = "",
            this.agent = t.agent || !1,
            this.socket = t.socket,
            this.enablesXDR = t.enablesXDR,
            this.pfx = t.pfx,
            this.key = t.key,
            this.passphrase = t.passphrase,
            this.cert = t.cert,
            this.ca = t.ca,
            this.ciphers = t.ciphers,
            this.rejectUnauthorized = t.rejectUnauthorized,
            this.forceNode = t.forceNode,
            this.isReactNative = t.isReactNative,
            this.extraHeaders = t.extraHeaders,
            this.localAddress = t.localAddress
        }
        var o = n(21)
          , i = n(8);
        t.exports = r,
        i(r.prototype),
        r.prototype.onError = function(t, e) {
            var n = new Error(t);
            return n.type = "TransportError",
            n.description = e,
            this.emit("error", n),
            this
        }
        ,
        r.prototype.open = function() {
            return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening",
            this.doOpen()),
            this
        }
        ,
        r.prototype.close = function() {
            return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(),
            this.onClose()),
            this
        }
        ,
        r.prototype.send = function(t) {
            if ("open" !== this.readyState)
                throw new Error("Transport not open");
            this.write(t)
        }
        ,
        r.prototype.onOpen = function() {
            this.readyState = "open",
            this.writable = !0,
            this.emit("open")
        }
        ,
        r.prototype.onData = function(t) {
            var e = o.decodePacket(t, this.socket.binaryType);
            this.onPacket(e)
        }
        ,
        r.prototype.onPacket = function(t) {
            this.emit("packet", t)
        }
        ,
        r.prototype.onClose = function() {
            this.readyState = "closed",
            this.emit("close")
        }
    }
    , function(t, e, n) {
        function r(t, n) {
            return n("b" + e.packets[t.type] + t.data.data)
        }
        function o(t, n, r) {
            if (!n)
                return e.encodeBase64Packet(t, r);
            var o = t.data
              , i = new Uint8Array(o)
              , s = new Uint8Array(1 + o.byteLength);
            s[0] = m[t.type];
            for (var a = 0; a < i.length; a++)
                s[a + 1] = i[a];
            return r(s.buffer)
        }
        function i(t, n, r) {
            if (!n)
                return e.encodeBase64Packet(t, r);
            if (y)
                return function(t, n, r) {
                    if (!n)
                        return e.encodeBase64Packet(t, r);
                    var o = new FileReader;
                    return o.onload = function() {
                        e.encodePacket({
                            type: t.type,
                            data: o.result
                        }, n, !0, r)
                    }
                    ,
                    o.readAsArrayBuffer(t.data)
                }(t, n, r);
            var o = new Uint8Array(1);
            return o[0] = m[t.type],
            r(new b([o.buffer, t.data]))
        }
        function s(t, e, n) {
            for (var r = new Array(t.length), o = h(t.length, n), i = function(t, n, o) {
                e(n, function(e, n) {
                    r[t] = n,
                    o(e, r)
                })
            }, s = 0; s < t.length; s++)
                i(s, t[s], o)
        }
        var a, c = n(22), p = n(23), u = n(24), h = n(25), f = n(26);
        "undefined" != typeof ArrayBuffer && (a = n(27));
        var l = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent)
          , d = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent)
          , y = l || d;
        e.protocol = 3;
        var m = e.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        }
          , g = c(m)
          , v = {
            type: "error",
            data: "parser error"
        }
          , b = n(28);
        e.encodePacket = function(t, e, n, s) {
            "function" == typeof e && (s = e,
            e = !1),
            "function" == typeof n && (s = n,
            n = null);
            var a = void 0 === t.data ? void 0 : t.data.buffer || t.data;
            if ("undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer)
                return o(t, e, s);
            if (void 0 !== b && a instanceof b)
                return i(t, e, s);
            if (a && a.base64)
                return r(t, s);
            var c = m[t.type];
            return void 0 !== t.data && (c += n ? f.encode(String(t.data), {
                strict: !1
            }) : String(t.data)),
            s("" + c)
        }
        ,
        e.encodeBase64Packet = function(t, n) {
            var r, o = "b" + e.packets[t.type];
            if (void 0 !== b && t.data instanceof b) {
                var i = new FileReader;
                return i.onload = function() {
                    var t = i.result.split(",")[1];
                    n(o + t)
                }
                ,
                i.readAsDataURL(t.data)
            }
            try {
                r = String.fromCharCode.apply(null, new Uint8Array(t.data))
            } catch (e) {
                for (var s = new Uint8Array(t.data), a = new Array(s.length), c = 0; c < s.length; c++)
                    a[c] = s[c];
                r = String.fromCharCode.apply(null, a)
            }
            return o += btoa(r),
            n(o)
        }
        ,
        e.decodePacket = function(t, n, r) {
            if (void 0 === t)
                return v;
            if ("string" == typeof t) {
                if ("b" === t.charAt(0))
                    return e.decodeBase64Packet(t.substr(1), n);
                if (r && !1 === (t = function(t) {
                    try {
                        t = f.decode(t, {
                            strict: !1
                        })
                    } catch (t) {
                        return !1
                    }
                    return t
                }(t)))
                    return v;
                var o = t.charAt(0);
                return Number(o) == o && g[o] ? t.length > 1 ? {
                    type: g[o],
                    data: t.substring(1)
                } : {
                    type: g[o]
                } : v
            }
            o = new Uint8Array(t)[0];
            var i = u(t, 1);
            return b && "blob" === n && (i = new b([i])),
            {
                type: g[o],
                data: i
            }
        }
        ,
        e.decodeBase64Packet = function(t, e) {
            var n = g[t.charAt(0)];
            if (!a)
                return {
                    type: n,
                    data: {
                        base64: !0,
                        data: t.substr(1)
                    }
                };
            var r = a.decode(t.substr(1));
            return "blob" === e && b && (r = new b([r])),
            {
                type: n,
                data: r
            }
        }
        ,
        e.encodePayload = function(t, n, r) {
            "function" == typeof n && (r = n,
            n = null);
            var o = p(t);
            return n && o ? b && !y ? e.encodePayloadAsBlob(t, r) : e.encodePayloadAsArrayBuffer(t, r) : t.length ? void s(t, function(t, r) {
                e.encodePacket(t, !!o && n, !1, function(t) {
                    r(null, function(t) {
                        return t.length + ":" + t
                    }(t))
                })
            }, function(t, e) {
                return r(e.join(""))
            }) : r("0:")
        }
        ,
        e.decodePayload = function(t, n, r) {
            if ("string" != typeof t)
                return e.decodePayloadAsBinary(t, n, r);
            var o;
            if ("function" == typeof n && (r = n,
            n = null),
            "" === t)
                return r(v, 0, 1);
            for (var i, s, a = "", c = 0, p = t.length; c < p; c++) {
                var u = t.charAt(c);
                if (":" === u) {
                    if ("" === a || a != (i = Number(a)))
                        return r(v, 0, 1);
                    if (a != (s = t.substr(c + 1, i)).length)
                        return r(v, 0, 1);
                    if (s.length) {
                        if (o = e.decodePacket(s, n, !1),
                        v.type === o.type && v.data === o.data)
                            return r(v, 0, 1);
                        if (!1 === r(o, c + i, p))
                            return
                    }
                    c += i,
                    a = ""
                } else
                    a += u
            }
            return "" !== a ? r(v, 0, 1) : void 0
        }
        ,
        e.encodePayloadAsArrayBuffer = function(t, n) {
            return t.length ? void s(t, function(t, n) {
                e.encodePacket(t, !0, !0, function(t) {
                    return n(null, t)
                })
            }, function(t, e) {
                var r = e.reduce(function(t, e) {
                    var n;
                    return t + (n = "string" == typeof e ? e.length : e.byteLength).toString().length + n + 2
                }, 0)
                  , o = new Uint8Array(r)
                  , i = 0;
                return e.forEach(function(t) {
                    var e = "string" == typeof t
                      , n = t;
                    if (e) {
                        for (var r = new Uint8Array(t.length), s = 0; s < t.length; s++)
                            r[s] = t.charCodeAt(s);
                        n = r.buffer
                    }
                    o[i++] = e ? 0 : 1;
                    var a = n.byteLength.toString();
                    for (s = 0; s < a.length; s++)
                        o[i++] = parseInt(a[s]);
                    o[i++] = 255;
                    for (r = new Uint8Array(n),
                    s = 0; s < r.length; s++)
                        o[i++] = r[s]
                }),
                n(o.buffer)
            }) : n(new ArrayBuffer(0))
        }
        ,
        e.encodePayloadAsBlob = function(t, n) {
            s(t, function(t, n) {
                e.encodePacket(t, !0, !0, function(t) {
                    var e = new Uint8Array(1);
                    if (e[0] = 1,
                    "string" == typeof t) {
                        for (var r = new Uint8Array(t.length), o = 0; o < t.length; o++)
                            r[o] = t.charCodeAt(o);
                        t = r.buffer,
                        e[0] = 0
                    }
                    var i = (t instanceof ArrayBuffer ? t.byteLength : t.size).toString()
                      , s = new Uint8Array(i.length + 1);
                    for (o = 0; o < i.length; o++)
                        s[o] = parseInt(i[o]);
                    if (s[i.length] = 255,
                    b) {
                        var a = new b([e.buffer, s.buffer, t]);
                        n(null, a)
                    }
                })
            }, function(t, e) {
                return n(new b(e))
            })
        }
        ,
        e.decodePayloadAsBinary = function(t, n, r) {
            "function" == typeof n && (r = n,
            n = null);
            for (var o = t, i = []; o.byteLength > 0; ) {
                for (var s = new Uint8Array(o), a = 0 === s[0], c = "", p = 1; 255 !== s[p]; p++) {
                    if (c.length > 310)
                        return r(v, 0, 1);
                    c += s[p]
                }
                o = u(o, 2 + c.length),
                c = parseInt(c);
                var h = u(o, 0, c);
                if (a)
                    try {
                        h = String.fromCharCode.apply(null, new Uint8Array(h))
                    } catch (t) {
                        var f = new Uint8Array(h);
                        h = "";
                        for (p = 0; p < f.length; p++)
                            h += String.fromCharCode(f[p])
                    }
                i.push(h),
                o = u(o, c)
            }
            var l = i.length;
            i.forEach(function(t, o) {
                r(e.decodePacket(t, n, !0), o, l)
            })
        }
    }
    , function(t, e) {
        t.exports = Object.keys || function(t) {
            var e = []
              , n = Object.prototype.hasOwnProperty;
            for (var r in t)
                n.call(t, r) && e.push(r);
            return e
        }
    }
    , function(t, e, n) {
        var r = n(10)
          , o = Object.prototype.toString
          , i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob)
          , s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
        t.exports = function t(e) {
            if (!e || "object" != typeof e)
                return !1;
            if (r(e)) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (t(e[n]))
                        return !0;
                return !1
            }
            if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || i && e instanceof Blob || s && e instanceof File)
                return !0;
            if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length)
                return t(e.toJSON(), !0);
            for (var a in e)
                if (Object.prototype.hasOwnProperty.call(e, a) && t(e[a]))
                    return !0;
            return !1
        }
    }
    , function(t, e) {
        t.exports = function(t, e, n) {
            var r = t.byteLength;
            if (e = e || 0,
            n = n || r,
            t.slice)
                return t.slice(e, n);
            if (e < 0 && (e += r),
            n < 0 && (n += r),
            n > r && (n = r),
            e >= r || e >= n || 0 === r)
                return new ArrayBuffer(0);
            for (var o = new Uint8Array(t), i = new Uint8Array(n - e), s = e, a = 0; s < n; s++,
            a++)
                i[a] = o[s];
            return i.buffer
        }
    }
    , function(t, e) {
        function n() {}
        t.exports = function(t, e, r) {
            function o(t, n) {
                if (o.count <= 0)
                    throw new Error("after called too many times");
                --o.count,
                t ? (i = !0,
                e(t),
                e = r) : 0 !== o.count || i || e(null, n)
            }
            var i = !1;
            return r = r || n,
            o.count = t,
            0 === t ? e() : o
        }
    }
    , function(t, e) {
        function n(t) {
            for (var e, n, r = [], o = 0, i = t.length; o < i; )
                (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < i ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? r.push(((1023 & e) << 10) + (1023 & n) + 65536) : (r.push(e),
                o--) : r.push(e);
            return r
        }
        function r(t, e) {
            if (t >= 55296 && t <= 57343) {
                if (e)
                    throw Error("Lone surrogate U+" + t.toString(16).toUpperCase() + " is not a scalar value");
                return !1
            }
            return !0
        }
        function o(t, e) {
            return h(t >> e & 63 | 128)
        }
        function i(t, e) {
            if (0 == (4294967168 & t))
                return h(t);
            var n = "";
            return 0 == (4294965248 & t) ? n = h(t >> 6 & 31 | 192) : 0 == (4294901760 & t) ? (r(t, e) || (t = 65533),
            n = h(t >> 12 & 15 | 224),
            n += o(t, 6)) : 0 == (4292870144 & t) && (n = h(t >> 18 & 7 | 240),
            n += o(t, 12),
            n += o(t, 6)),
            n + h(63 & t | 128)
        }
        function s() {
            if (u >= p)
                throw Error("Invalid byte index");
            var t = 255 & c[u];
            if (u++,
            128 == (192 & t))
                return 63 & t;
            throw Error("Invalid continuation byte")
        }
        function a(t) {
            var e, n;
            if (u > p)
                throw Error("Invalid byte index");
            if (u == p)
                return !1;
            if (e = 255 & c[u],
            u++,
            0 == (128 & e))
                return e;
            if (192 == (224 & e)) {
                if ((n = (31 & e) << 6 | s()) >= 128)
                    return n;
                throw Error("Invalid continuation byte")
            }
            if (224 == (240 & e)) {
                if ((n = (15 & e) << 12 | s() << 6 | s()) >= 2048)
                    return r(n, t) ? n : 65533;
                throw Error("Invalid continuation byte")
            }
            if (240 == (248 & e) && ((n = (7 & e) << 18 | s() << 12 | s() << 6 | s()) >= 65536 && n <= 1114111))
                return n;
            throw Error("Invalid UTF-8 detected")
        }
        var c, p, u, h = String.fromCharCode;
        t.exports = {
            version: "2.1.2",
            encode: function(t, e) {
                for (var r = !1 !== (e = e || {}).strict, o = n(t), s = o.length, a = -1, c = ""; ++a < s; )
                    c += i(o[a], r);
                return c
            },
            decode: function(t, e) {
                var r = !1 !== (e = e || {}).strict;
                c = n(t),
                p = c.length,
                u = 0;
                for (var o, i = []; !1 !== (o = a(r)); )
                    i.push(o);
                return function(t) {
                    for (var e, n = t.length, r = -1, o = ""; ++r < n; )
                        (e = t[r]) > 65535 && (o += h((e -= 65536) >>> 10 & 1023 | 55296),
                        e = 56320 | 1023 & e),
                        o += h(e);
                    return o
                }(i)
            }
        }
    }
    , function(t, e) {
        !function() {
            "use strict";
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < t.length; r++)
                n[t.charCodeAt(r)] = r;
            e.encode = function(e) {
                var n, r = new Uint8Array(e), o = r.length, i = "";
                for (n = 0; n < o; n += 3)
                    i += t[r[n] >> 2],
                    i += t[(3 & r[n]) << 4 | r[n + 1] >> 4],
                    i += t[(15 & r[n + 1]) << 2 | r[n + 2] >> 6],
                    i += t[63 & r[n + 2]];
                return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
                i
            }
            ,
            e.decode = function(t) {
                var e, r, o, i, s, a = .75 * t.length, c = t.length, p = 0;
                "=" === t[t.length - 1] && (a--,
                "=" === t[t.length - 2] && a--);
                var u = new ArrayBuffer(a)
                  , h = new Uint8Array(u);
                for (e = 0; e < c; e += 4)
                    r = n[t.charCodeAt(e)],
                    o = n[t.charCodeAt(e + 1)],
                    i = n[t.charCodeAt(e + 2)],
                    s = n[t.charCodeAt(e + 3)],
                    h[p++] = r << 2 | o >> 4,
                    h[p++] = (15 & o) << 4 | i >> 2,
                    h[p++] = (3 & i) << 6 | 63 & s;
                return u
            }
        }()
    }
    , function(t, e) {
        function n(t) {
            return t.map(function(t) {
                if (t.buffer instanceof ArrayBuffer) {
                    var e = t.buffer;
                    if (t.byteLength !== e.byteLength) {
                        var n = new Uint8Array(t.byteLength);
                        n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),
                        e = n.buffer
                    }
                    return e
                }
                return t
            })
        }
        function r(t, e) {
            e = e || {};
            var r = new i;
            return n(t).forEach(function(t) {
                r.append(t)
            }),
            e.type ? r.getBlob(e.type) : r.getBlob()
        }
        function o(t, e) {
            return new Blob(n(t),e || {})
        }
        var i = void 0 !== i ? i : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder
          , s = function() {
            try {
                return 2 === new Blob(["hi"]).size
            } catch (t) {
                return !1
            }
        }()
          , a = s && function() {
            try {
                return 2 === new Blob([new Uint8Array([1, 2])]).size
            } catch (t) {
                return !1
            }
        }()
          , c = i && i.prototype.append && i.prototype.getBlob;
        "undefined" != typeof Blob && (r.prototype = Blob.prototype,
        o.prototype = Blob.prototype),
        t.exports = s ? a ? Blob : o : c ? r : void 0
    }
    , function(t, e) {
        e.encode = function(t) {
            var e = "";
            for (var n in t)
                t.hasOwnProperty(n) && (e.length && (e += "&"),
                e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
            return e
        }
        ,
        e.decode = function(t) {
            for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {
                var i = n[r].split("=");
                e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
            }
            return e
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            var n = function() {};
            n.prototype = e.prototype,
            t.prototype = new n,
            t.prototype.constructor = t
        }
    }
    , function(t, e) {
        "use strict";
        function n(t) {
            var e = "";
            do {
                e = i[t % s] + e,
                t = Math.floor(t / s)
            } while (t > 0);
            return e
        }
        function r() {
            var t = n(+new Date);
            return t !== o ? (c = 0,
            o = t) : t + "." + n(c++)
        }
        for (var o, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), s = 64, a = {}, c = 0, p = 0; p < s; p++)
            a[i[p]] = p;
        r.encode = n,
        r.decode = function(t) {
            var e = 0;
            for (p = 0; p < t.length; p++)
                e = e * s + a[t.charAt(p)];
            return e
        }
        ,
        t.exports = r
    }
    , function(t, e, n) {
        (function(e) {
            function r() {}
            function o() {
                return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : {}
            }
            function i(t) {
                if (s.call(this, t),
                this.query = this.query || {},
                !c) {
                    var e = o();
                    c = e.___eio = e.___eio || []
                }
                this.index = c.length;
                var n = this;
                c.push(function(t) {
                    n.onData(t)
                }),
                this.query.j = this.index,
                "function" == typeof addEventListener && addEventListener("beforeunload", function() {
                    n.script && (n.script.onerror = r)
                }, !1)
            }
            var s = n(19)
              , a = n(30);
            t.exports = i;
            var c, p = /\n/g, u = /\\n/g;
            a(i, s),
            i.prototype.supportsBinary = !1,
            i.prototype.doClose = function() {
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                this.form && (this.form.parentNode.removeChild(this.form),
                this.form = null,
                this.iframe = null),
                s.prototype.doClose.call(this)
            }
            ,
            i.prototype.doPoll = function() {
                var t = this
                  , e = document.createElement("script");
                this.script && (this.script.parentNode.removeChild(this.script),
                this.script = null),
                e.async = !0,
                e.src = this.uri(),
                e.onerror = function(e) {
                    t.onError("jsonp poll error", e)
                }
                ;
                var n = document.getElementsByTagName("script")[0];
                n ? n.parentNode.insertBefore(e, n) : (document.head || document.body).appendChild(e),
                this.script = e,
                "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                    var t = document.createElement("iframe");
                    document.body.appendChild(t),
                    document.body.removeChild(t)
                }, 100)
            }
            ,
            i.prototype.doWrite = function(t, e) {
                function n() {
                    r(),
                    e()
                }
                function r() {
                    if (o.iframe)
                        try {
                            o.form.removeChild(o.iframe)
                        } catch (t) {
                            o.onError("jsonp polling iframe removal error", t)
                        }
                    try {
                        var t = '<iframe src="javascript:0" name="' + o.iframeId + '">';
                        i = document.createElement(t)
                    } catch (t) {
                        (i = document.createElement("iframe")).name = o.iframeId,
                        i.src = "javascript:0"
                    }
                    i.id = o.iframeId,
                    o.form.appendChild(i),
                    o.iframe = i
                }
                var o = this;
                if (!this.form) {
                    var i, s = document.createElement("form"), a = document.createElement("textarea"), c = this.iframeId = "eio_iframe_" + this.index;
                    s.className = "socketio",
                    s.style.position = "absolute",
                    s.style.top = "-1000px",
                    s.style.left = "-1000px",
                    s.target = c,
                    s.method = "POST",
                    s.setAttribute("accept-charset", "utf-8"),
                    a.name = "d",
                    s.appendChild(a),
                    document.body.appendChild(s),
                    this.form = s,
                    this.area = a
                }
                this.form.action = this.uri(),
                r(),
                t = t.replace(u, "\\\n"),
                this.area.value = t.replace(p, "\\n");
                try {
                    this.form.submit()
                } catch (t) {}
                this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                    "complete" === o.iframe.readyState && n()
                }
                : this.iframe.onload = n
            }
        }
        ).call(e, function() {
            return this
        }())
    }
    , function(t, e, n) {
        function r(t) {
            t && t.forceBase64 && (this.supportsBinary = !1),
            this.perMessageDeflate = t.perMessageDeflate,
            this.usingBrowserWebSocket = o && !t.forceNode,
            this.protocols = t.protocols,
            this.usingBrowserWebSocket || (f = i),
            s.call(this, t)
        }
        var o, i, s = n(20), a = n(21), c = n(29), p = n(30), u = n(31), h = n(3)("engine.io-client:websocket");
        if ("undefined" == typeof self)
            try {
                i = n(34)
            } catch (t) {}
        else
            o = self.WebSocket || self.MozWebSocket;
        var f = o || i;
        t.exports = r,
        p(r, s),
        r.prototype.name = "websocket",
        r.prototype.supportsBinary = !0,
        r.prototype.doOpen = function() {
            if (this.check()) {
                var t = this.uri()
                  , e = this.protocols
                  , n = {
                    agent: this.agent,
                    perMessageDeflate: this.perMessageDeflate
                };
                n.pfx = this.pfx,
                n.key = this.key,
                n.passphrase = this.passphrase,
                n.cert = this.cert,
                n.ca = this.ca,
                n.ciphers = this.ciphers,
                n.rejectUnauthorized = this.rejectUnauthorized,
                this.extraHeaders && (n.headers = this.extraHeaders),
                this.localAddress && (n.localAddress = this.localAddress);
                try {
                    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new f(t,e) : new f(t) : new f(t,e,n)
                } catch (t) {
                    return this.emit("error", t)
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1),
                this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0,
                this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer",
                this.addEventListeners()
            }
        }
        ,
        r.prototype.addEventListeners = function() {
            var t = this;
            this.ws.onopen = function() {
                t.onOpen()
            }
            ,
            this.ws.onclose = function() {
                t.onClose()
            }
            ,
            this.ws.onmessage = function(e) {
                t.onData(e.data)
            }
            ,
            this.ws.onerror = function(e) {
                t.onError("websocket error", e)
            }
        }
        ,
        r.prototype.write = function(t) {
            var e = this;
            this.writable = !1;
            for (var n = t.length, r = 0, o = n; r < o; r++)
                !function(t) {
                    a.encodePacket(t, e.supportsBinary, function(r) {
                        if (!e.usingBrowserWebSocket) {
                            var o = {};
                            if (t.options && (o.compress = t.options.compress),
                            e.perMessageDeflate)
                                ("string" == typeof r ? Buffer.byteLength(r) : r.length) < e.perMessageDeflate.threshold && (o.compress = !1)
                        }
                        try {
                            e.usingBrowserWebSocket ? e.ws.send(r) : e.ws.send(r, o)
                        } catch (t) {
                            h("websocket closed before onclose event")
                        }
                        --n || (e.emit("flush"),
                        setTimeout(function() {
                            e.writable = !0,
                            e.emit("drain")
                        }, 0))
                    })
                }(t[r])
        }
        ,
        r.prototype.onClose = function() {
            s.prototype.onClose.call(this)
        }
        ,
        r.prototype.doClose = function() {
            void 0 !== this.ws && this.ws.close()
        }
        ,
        r.prototype.uri = function() {
            var t = this.query || {}
              , e = this.secure ? "wss" : "ws"
              , n = "";
            return this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port),
            this.timestampRequests && (t[this.timestampParam] = u()),
            this.supportsBinary || (t.b64 = 1),
            (t = c.encode(t)).length && (t = "?" + t),
            e + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t
        }
        ,
        r.prototype.check = function() {
            return !(!f || "__initialize"in f && this.name === r.prototype.name)
        }
    }
    , function(t, e) {}
    , function(t, e) {
        var n = [].indexOf;
        t.exports = function(t, e) {
            if (n)
                return t.indexOf(e);
            for (var r = 0; r < t.length; ++r)
                if (t[r] === e)
                    return r;
            return -1
        }
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e, n) {
            this.io = t,
            this.nsp = e,
            this.json = this,
            this.ids = 0,
            this.acks = {},
            this.receiveBuffer = [],
            this.sendBuffer = [],
            this.connected = !1,
            this.disconnected = !0,
            this.flags = {},
            n && n.query && (this.query = n.query),
            this.io.autoConnect && this.open()
        }
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , i = n(7)
          , s = n(8)
          , a = n(37)
          , c = n(38)
          , p = n(39)
          , u = n(3)("socket.io-client:socket")
          , h = n(29)
          , f = n(23);
        t.exports = r;
        var l = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        }
          , d = s.prototype.emit;
        s(r.prototype),
        r.prototype.subEvents = function() {
            if (!this.subs) {
                var t = this.io;
                this.subs = [c(t, "open", p(this, "onopen")), c(t, "packet", p(this, "onpacket")), c(t, "close", p(this, "onclose"))]
            }
        }
        ,
        r.prototype.open = r.prototype.connect = function() {
            return this.connected ? this : (this.subEvents(),
            this.io.open(),
            "open" === this.io.readyState && this.onopen(),
            this.emit("connecting"),
            this)
        }
        ,
        r.prototype.send = function() {
            var t = a(arguments);
            return t.unshift("message"),
            this.emit.apply(this, t),
            this
        }
        ,
        r.prototype.emit = function(t) {
            if (l.hasOwnProperty(t))
                return d.apply(this, arguments),
                this;
            var e = a(arguments)
              , n = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : f(e)) ? i.BINARY_EVENT : i.EVENT,
                data: e,
                options: {}
            };
            return n.options.compress = !this.flags || !1 !== this.flags.compress,
            "function" == typeof e[e.length - 1] && (u("emitting packet with ack id %d", this.ids),
            this.acks[this.ids] = e.pop(),
            n.id = this.ids++),
            this.connected ? this.packet(n) : this.sendBuffer.push(n),
            this.flags = {},
            this
        }
        ,
        r.prototype.packet = function(t) {
            t.nsp = this.nsp,
            this.io.packet(t)
        }
        ,
        r.prototype.onopen = function() {
            if (u("transport is open - connecting"),
            "/" !== this.nsp)
                if (this.query) {
                    var t = "object" === o(this.query) ? h.encode(this.query) : this.query;
                    u("sending connect packet with query %s", t),
                    this.packet({
                        type: i.CONNECT,
                        query: t
                    })
                } else
                    this.packet({
                        type: i.CONNECT
                    })
        }
        ,
        r.prototype.onclose = function(t) {
            u("close (%s)", t),
            this.connected = !1,
            this.disconnected = !0,
            delete this.id,
            this.emit("disconnect", t)
        }
        ,
        r.prototype.onpacket = function(t) {
            var e = t.nsp === this.nsp
              , n = t.type === i.ERROR && "/" === t.nsp;
            if (e || n)
                switch (t.type) {
                case i.CONNECT:
                    this.onconnect();
                    break;
                case i.EVENT:
                case i.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case i.ACK:
                case i.BINARY_ACK:
                    this.onack(t);
                    break;
                case i.DISCONNECT:
                    this.ondisconnect();
                    break;
                case i.ERROR:
                    this.emit("error", t.data)
                }
        }
        ,
        r.prototype.onevent = function(t) {
            var e = t.data || [];
            u("emitting event %j", e),
            null != t.id && (u("attaching ack callback to event"),
            e.push(this.ack(t.id))),
            this.connected ? d.apply(this, e) : this.receiveBuffer.push(e)
        }
        ,
        r.prototype.ack = function(t) {
            var e = this
              , n = !1;
            return function() {
                if (!n) {
                    n = !0;
                    var r = a(arguments);
                    u("sending ack %j", r),
                    e.packet({
                        type: f(r) ? i.BINARY_ACK : i.ACK,
                        id: t,
                        data: r
                    })
                }
            }
        }
        ,
        r.prototype.onack = function(t) {
            var e = this.acks[t.id];
            "function" == typeof e ? (u("calling ack %s with %j", t.id, t.data),
            e.apply(this, t.data),
            delete this.acks[t.id]) : u("bad ack %s", t.id)
        }
        ,
        r.prototype.onconnect = function() {
            this.connected = !0,
            this.disconnected = !1,
            this.emit("connect"),
            this.emitBuffered()
        }
        ,
        r.prototype.emitBuffered = function() {
            var t;
            for (t = 0; t < this.receiveBuffer.length; t++)
                d.apply(this, this.receiveBuffer[t]);
            for (this.receiveBuffer = [],
            t = 0; t < this.sendBuffer.length; t++)
                this.packet(this.sendBuffer[t]);
            this.sendBuffer = []
        }
        ,
        r.prototype.ondisconnect = function() {
            u("server disconnect (%s)", this.nsp),
            this.destroy(),
            this.onclose("io server disconnect")
        }
        ,
        r.prototype.destroy = function() {
            if (this.subs) {
                for (var t = 0; t < this.subs.length; t++)
                    this.subs[t].destroy();
                this.subs = null
            }
            this.io.destroy(this)
        }
        ,
        r.prototype.close = r.prototype.disconnect = function() {
            return this.connected && (u("performing disconnect (%s)", this.nsp),
            this.packet({
                type: i.DISCONNECT
            })),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        }
        ,
        r.prototype.compress = function(t) {
            return this.flags.compress = t,
            this
        }
        ,
        r.prototype.binary = function(t) {
            return this.flags.binary = t,
            this
        }
    }
    , function(t, e) {
        t.exports = function(t, e) {
            for (var n = [], r = (e = e || 0) || 0; r < t.length; r++)
                n[r - e] = t[r];
            return n
        }
    }
    , function(t, e) {
        "use strict";
        t.exports = function(t, e, n) {
            return t.on(e, n),
            {
                destroy: function() {
                    t.removeListener(e, n)
                }
            }
        }
    }
    , function(t, e) {
        var n = [].slice;
        t.exports = function(t, e) {
            if ("string" == typeof e && (e = t[e]),
            "function" != typeof e)
                throw new Error("bind() requires a function");
            var r = n.call(arguments, 2);
            return function() {
                return e.apply(t, r.concat(n.call(arguments)))
            }
        }
    }
    , function(t, e) {
        function n(t) {
            t = t || {},
            this.ms = t.min || 100,
            this.max = t.max || 1e4,
            this.factor = t.factor || 2,
            this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0,
            this.attempts = 0
        }
        t.exports = n,
        n.prototype.duration = function() {
            var t = this.ms * Math.pow(this.factor, this.attempts++);
            if (this.jitter) {
                var e = Math.random()
                  , n = Math.floor(e * this.jitter * t);
                t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
            }
            return 0 | Math.min(t, this.max)
        }
        ,
        n.prototype.reset = function() {
            this.attempts = 0
        }
        ,
        n.prototype.setMin = function(t) {
            this.ms = t
        }
        ,
        n.prototype.setMax = function(t) {
            this.max = t
        }
        ,
        n.prototype.setJitter = function(t) {
            this.jitter = t
        }
    }
    ])
});

;/**** game/lib/jquery.slimscroll.min.js ****/
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function(e) {
    e.fn.extend({
        slimScroll: function(g) {
            var a = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, g);
            this.each(function() {
                function v(d) {
                    if (r) {
                        d = d || window.event;
                        var c = 0;
                        d.wheelDelta && (c = -d.wheelDelta / 120);
                        d.detail && (c = d.detail / 3);
                        e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && m(c, !0);
                        d.preventDefault && !k && d.preventDefault();
                        k || (d.returnValue = !1)
                    }
                }
                function m(d, e, g) {
                    k = !1;
                    var f = d
                      , h = b.outerHeight() - c.outerHeight();
                    e && (f = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(),
                    f = Math.min(Math.max(f, 0), h),
                    f = 0 < d ? Math.ceil(f) : Math.floor(f),
                    c.css({
                        top: f + "px"
                    }));
                    l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
                    f = l * (b[0].scrollHeight - b.outerHeight());
                    g && (f = d,
                    d = f / b[0].scrollHeight * b.outerHeight(),
                    d = Math.min(Math.max(d, 0), h),
                    c.css({
                        top: d + "px"
                    }));
                    b.scrollTop(f);
                    b.trigger("slimscrolling", ~~f);
                    w();
                    p()
                }
                function x() {
                    u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
                    c.css({
                        height: u + "px"
                    });
                    var a = u == b.outerHeight() ? "none" : "block";
                    c.css({
                        display: a
                    })
                }
                function w() {
                    x();
                    clearTimeout(B);
                    l == ~~l ? (k = a.allowPageScroll,
                    C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
                    C = l;
                    u >= b.outerHeight() ? k = !0 : (c.stop(!0, !0).fadeIn("fast"),
                    a.railVisible && h.stop(!0, !0).fadeIn("fast"))
                }
                function p() {
                    a.alwaysVisible || (B = setTimeout(function() {
                        a.disableFadeOut && r || y || z || (c.fadeOut("slow"),
                        h.fadeOut("slow"))
                    }, 1E3))
                }
                var r, y, z, B, A, u, l, C, k = !1, b = e(this);
                if (b.parent().hasClass(a.wrapperClass)) {
                    var n = b.scrollTop()
                      , c = b.closest("." + a.barClass)
                      , h = b.closest("." + a.railClass);
                    x();
                    if (e.isPlainObject(g)) {
                        if ("height"in g && "auto" == g.height) {
                            b.parent().css("height", "auto");
                            b.css("height", "auto");
                            var q = b.parent().parent().height();
                            b.parent().css("height", q);
                            b.css("height", q)
                        }
                        if ("scrollTo"in g)
                            n = parseInt(a.scrollTo);
                        else if ("scrollBy"in g)
                            n += parseInt(a.scrollBy);
                        else if ("destroy"in g) {
                            c.remove();
                            h.remove();
                            b.unwrap();
                            return
                        }
                        m(n, !1, !0)
                    }
                } else if (!(e.isPlainObject(g) && "destroy"in g)) {
                    a.height = "auto" == a.height ? b.parent().height() : a.height;
                    n = e("<div></div>").addClass(a.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    b.css({
                        overflow: "hidden",
                        width: a.width,
                        height: a.height
                    });
                    var h = e("<div></div>").addClass(a.railClass).css({
                        width: a.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: a.alwaysVisible && a.railVisible ? "block" : "none",
                        "border-radius": a.railBorderRadius,
                        background: a.railColor,
                        opacity: a.railOpacity,
                        zIndex: 90
                    })
                      , c = e("<div></div>").addClass(a.barClass).css({
                        background: a.color,
                        width: a.size,
                        position: "absolute",
                        top: 0,
                        opacity: a.opacity,
                        display: a.alwaysVisible ? "block" : "none",
                        "border-radius": a.borderRadius,
                        BorderRadius: a.borderRadius,
                        MozBorderRadius: a.borderRadius,
                        WebkitBorderRadius: a.borderRadius,
                        zIndex: 99
                    })
                      , q = "right" == a.position ? {
                        right: a.distance
                    } : {
                        left: a.distance
                    };
                    h.css(q);
                    c.css(q);
                    b.wrap(n);
                    b.parent().append(c);
                    b.parent().append(h);
                    a.railDraggable && c.bind("mousedown", function(a) {
                        var b = e(document);
                        z = !0;
                        t = parseFloat(c.css("top"));
                        pageY = a.pageY;
                        b.bind("mousemove.slimscroll", function(a) {
                            currTop = t + a.pageY - pageY;
                            c.css("top", currTop);
                            m(0, c.position().top, !1)
                        });
                        b.bind("mouseup.slimscroll", function(a) {
                            z = !1;
                            p();
                            b.unbind(".slimscroll")
                        });
                        return !1
                    }).bind("selectstart.slimscroll", function(a) {
                        a.stopPropagation();
                        a.preventDefault();
                        return !1
                    });
                    h.hover(function() {
                        w()
                    }, function() {
                        p()
                    });
                    c.hover(function() {
                        y = !0
                    }, function() {
                        y = !1
                    });
                    b.hover(function() {
                        r = !0;
                        w();
                        p()
                    }, function() {
                        r = !1;
                        p()
                    });
                    b.bind("touchstart", function(a, b) {
                        a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY)
                    });
                    b.bind("touchmove", function(b) {
                        k || b.originalEvent.preventDefault();
                        b.originalEvent.touches.length && (m((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0),
                        A = b.originalEvent.touches[0].pageY)
                    });
                    x();
                    "bottom" === a.start ? (c.css({
                        top: b.outerHeight() - c.outerHeight()
                    }),
                    m(0, !0)) : "top" !== a.start && (m(e(a.start).position().top, null, !0),
                    a.alwaysVisible || c.hide());
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1),
                    this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v)
                }
            });
            return this
        }
    });
    e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
}
)(jQuery);
;/**** libs/zebra_datepicker.min.js ****/
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function(Nt) {
    "use strict";
    Nt.Zebra_DatePicker = function(t, M) {
        function e(t) {
            var e, s, n, a, i = {
                days: ["d", "j", "D"],
                months: ["F", "m", "M", "n", "t"],
                years: ["o", "Y", "y"],
                hours: ["G", "g", "H", "h"],
                minutes: ["i"],
                seconds: ["s"],
                ampm: ["A", "a"]
            }, r = null, o = !1;
            for (n = 0; n < 3; n++)
                yt += Math.floor(65536 * (1 + Math.random())).toString(16);
            if (L = [],
            T = [],
            !t)
                for (e in kt.settings = Nt.extend({}, ut, Nt.fn.Zebra_DatePicker.defaults, M),
                ft.readonly = Dt.attr("readonly"),
                ft.style = Dt.attr("style"),
                ft.padding_left = parseInt(Dt.css("paddingLeft"), 10) || 0,
                ft.padding_right = parseInt(Dt.css("paddingRight"), 10) || 0,
                Dt.data())
                    0 === e.indexOf("zdp_") && (e = e.replace(/^zdp\_/, ""),
                    void 0 !== ut[e] && (kt.settings[e] = "pair" === e ? Nt(Dt.data("zdp_" + e)) : Dt.data("zdp_" + e)));
            for (kt.settings.readonly_element ? Dt.attr("readonly", "readonly") : Dt.removeAttr("readonly"),
            lt = !1,
            ht = []; !o; ) {
                for (r in i)
                    Nt.each(i[r], function(t, e) {
                        var s, n;
                        if (-1 < kt.settings.format.indexOf(e))
                            if ("days" === r)
                                ht.push("days");
                            else if ("months" === r)
                                ht.push("months");
                            else if ("years" === r)
                                ht.push("years");
                            else if (("hours" === r || "minutes" === r || "seconds" === r || "ampm" === r) && !kt.settings.disable_time_picker)
                                if (lt || (lt = {
                                    is12hour: !1
                                },
                                ht.push("time")),
                                "hours" === r)
                                    for ("g" === (lt.hour_format = e) || "h" === e ? (n = 12,
                                    lt.is12hour = !0) : n = 24,
                                    lt.hours = [],
                                    Nt.isArray(kt.settings.enabled_hours) && (kt.settings.enabled_hour = kt.settings.enabled_hours.map(function(t) {
                                        return parseInt(t, 10)
                                    })),
                                    s = 12 === n ? 1 : 0; s < (12 === n ? 13 : n); s++)
                                        (!Nt.isArray(kt.settings.enabled_hours) || -1 < Nt.inArray(s, kt.settings.enabled_hours)) && lt.hours.push(s);
                                else if ("minutes" === r)
                                    for (lt.minutes = [],
                                    Nt.isArray(kt.settings.enabled_minutes) && (kt.settings.enabled_minutes = kt.settings.enabled_minutes.map(function(t) {
                                        return parseInt(t, 10)
                                    })),
                                    s = 0; s < 60; s++)
                                        (!Nt.isArray(kt.settings.enabled_minutes) || -1 < Nt.inArray(s, kt.settings.enabled_minutes)) && lt.minutes.push(s);
                                else if ("seconds" === r)
                                    for (lt.seconds = [],
                                    Nt.isArray(kt.settings.enabled_seconds) && (kt.settings.enabled_seconds = kt.settings.enabled_seconds.map(function(t) {
                                        return parseInt(t, 10)
                                    })),
                                    s = 0; s < 60; s++)
                                        (!Nt.isArray(kt.settings.enabled_seconds) || -1 < Nt.inArray(s, kt.settings.enabled_seconds)) && lt.seconds.push(s);
                                else
                                    lt.ampm_case = e,
                                    Nt.isArray(kt.settings.enabled_ampm) && Nt.grep(kt.settings.enabled_ampm, function(t) {
                                        return -1 < Nt.inArray(t.toLowerCase(), ["am", "pm"])
                                    }).length ? lt.ampm = kt.settings.enabled_ampm : lt.ampm = ["am", "pm"]
                    });
                lt.hour_format && lt.ampm && !1 === lt.is12hour ? kt.settings.format = kt.settings.format.replace(lt.hour_format, lt.hour_format.toLowerCase()) : o = !0
            }
            for (n in 0 === ht.length && (ht = ["years", "months", "days"]),
            -1 === Nt.inArray(kt.settings.view, ht) && (kt.settings.view = ht[ht.length - 1]),
            I = [],
            kt.settings.custom_classes)
                kt.settings.custom_classes.hasOwnProperty(n) && -1 === I.indexOf(n) && I.push(n);
            for (a = 0; a < 2 + I.length; a++)
                s = 0 === a ? kt.settings.disabled_dates : 1 === a ? kt.settings.enabled_dates : kt.settings.custom_classes[I[a - 2]],
                Nt.isArray(s) && 0 < s.length && Nt.each(s, function() {
                    var t, e, s, n, i = this.split(" ");
                    for (t = 0; t < 4; t++) {
                        for (i[t] || (i[t] = "*"),
                        i[t] = -1 < i[t].indexOf(",") ? i[t].split(",") : new Array(i[t]),
                        e = 0; e < i[t].length; e++)
                            if (-1 < i[t][e].indexOf("-") && null !== (n = i[t][e].match(/^([0-9]+)\-([0-9]+)/))) {
                                for (s = It(n[1]); s <= It(n[2]); s++)
                                    -1 === Nt.inArray(s, i[t]) && i[t].push(s + "");
                                i[t].splice(e, 1)
                            }
                        for (e = 0; e < i[t].length; e++)
                            i[t][e] = isNaN(It(i[t][e])) ? i[t][e] : It(i[t][e])
                    }
                    0 === a ? L.push(i) : 1 === a ? T.push(i) : (void 0 === mt[I[a - 2]] && (mt[I[a - 2]] = []),
                    mt[I[a - 2]].push(i))
                });
            var d, c, l = !1 !== kt.settings.current_date ? new Date(kt.settings.current_date) : new Date, g = kt.settings.reference_date ? kt.settings.reference_date : Dt.data("zdp_reference_date") && void 0 !== Dt.data("zdp_reference_date") ? Dt.data("zdp_reference_date") : l;
            if (R = ot = void 0,
            B = g.getMonth(),
            x = l.getMonth(),
            E = g.getFullYear(),
            Y = l.getFullYear(),
            W = g.getDate(),
            S = l.getDate(),
            !0 === kt.settings.direction)
                ot = g;
            else if (!1 === kt.settings.direction)
                V = (R = g).getMonth(),
                $ = R.getFullYear(),
                U = R.getDate();
            else if (!Nt.isArray(kt.settings.direction) && Ft(kt.settings.direction) && 0 < It(kt.settings.direction) || Nt.isArray(kt.settings.direction) && ((d = At(kt.settings.direction[0])) || !0 === kt.settings.direction[0] || Ft(kt.settings.direction[0]) && 0 < kt.settings.direction[0]) && ((c = At(kt.settings.direction[1])) || !1 === kt.settings.direction[1] || Ft(kt.settings.direction[1]) && 0 <= kt.settings.direction[1]))
                ot = d || new Date(E,B,W + (Nt.isArray(kt.settings.direction) ? It(!0 === kt.settings.direction[0] ? 0 : kt.settings.direction[0]) : It(kt.settings.direction))),
                B = ot.getMonth(),
                E = ot.getFullYear(),
                W = ot.getDate(),
                c && +ot <= +c ? R = c : !c && !1 !== kt.settings.direction[1] && Nt.isArray(kt.settings.direction) && (R = new Date(E,B,W + It(kt.settings.direction[1]))),
                R && (V = R.getMonth(),
                $ = R.getFullYear(),
                U = R.getDate());
            else if (!Nt.isArray(kt.settings.direction) && Ft(kt.settings.direction) && It(kt.settings.direction) < 0 || Nt.isArray(kt.settings.direction) && (!1 === kt.settings.direction[0] || Ft(kt.settings.direction[0]) && kt.settings.direction[0] < 0) && ((d = At(kt.settings.direction[1])) || Ft(kt.settings.direction[1]) && 0 <= kt.settings.direction[1]))
                R = new Date(E,B,W + (Nt.isArray(kt.settings.direction) ? It(!1 === kt.settings.direction[0] ? 0 : kt.settings.direction[0]) : It(kt.settings.direction))),
                V = R.getMonth(),
                $ = R.getFullYear(),
                U = R.getDate(),
                d && +d < +R ? ot = d : !d && Nt.isArray(kt.settings.direction) && (ot = new Date($,V,U - It(kt.settings.direction[1]))),
                ot && (B = ot.getMonth(),
                E = ot.getFullYear(),
                W = ot.getDate());
            else if (Nt.isArray(kt.settings.disabled_dates) && 0 < kt.settings.disabled_dates.length)
                for (var _ in L)
                    if (-1 < Nt.inArray("*", L[_][0]) && -1 < Nt.inArray("*", L[_][1]) && -1 < Nt.inArray("*", L[_][2]) && -1 < Nt.inArray("*", L[_][3])) {
                        var h = [];
                        if (Nt.each(T, function() {
                            var t = this;
                            "*" !== t[2][0] && h.push(parseInt(t[2][0] + ("*" === t[1][0] ? "12" : Yt(t[1][0], 2)) + ("*" === t[0][0] ? "*" === t[1][0] ? "31" : new Date(t[2][0],t[1][0],0).getDate() : Yt(t[0][0], 2)), 10))
                        }),
                        h.sort(),
                        0 < h.length) {
                            var p = (h[0] + "").match(/([0-9]{4})([0-9]{2})([0-9]{2})/);
                            E = parseInt(p[1], 10),
                            B = parseInt(p[2], 10) - 1,
                            W = parseInt(p[3], 10)
                        }
                        break
                    }
            if (Pt(E, B, W)) {
                for (; Pt(E); )
                    W = (B = ot ? (E++,
                    0) : (E--,
                    11),
                    1);
                for (; Pt(E, B); )
                    W = ot ? (B++,
                    1) : (B--,
                    new Date(E,B + 1,0).getDate()),
                    11 < B ? (E++,
                    B = 0,
                    W = 1) : B < 0 && (E--,
                    B = 11,
                    W = new Date(E,B + 1,0).getDate());
                for (; Pt(E, B, W); )
                    ot ? W++ : W--,
                    l = new Date(E,B,W),
                    E = l.getFullYear(),
                    B = l.getMonth(),
                    W = l.getDate();
                l = new Date(E,B,W),
                E = l.getFullYear(),
                B = l.getMonth(),
                W = l.getDate()
            }
            kt.settings.start_date && "object" == typeof kt.settings.start_date && kt.settings.start_date instanceof Date && (kt.settings.start_date = Mt(kt.settings.start_date));
            var u = At(Dt.val() || (kt.settings.start_date ? kt.settings.start_date : ""));
            if (u && kt.settings.strict && Pt(u.getFullYear(), u.getMonth(), u.getDate()) && Dt.val(""),
            t || void 0 === ot && void 0 === u || jt(void 0 !== u ? u : ot),
            !(kt.settings.always_visible instanceof jQuery)) {
                if (!t) {
                    if (kt.settings.show_icon) {
                        "firefox" === zt.name && Dt.is('input[type="text"]') && "inline" === Dt.css("display") && Dt.css("display", "inline-block");
                        var m = parseInt(Dt.css("marginTop"), 10) || 0
                          , f = parseInt(Dt.css("marginRight"), 10) || 0
                          , b = parseInt(Dt.css("marginBottom"), 10) || 0
                          , y = parseInt(Dt.css("marginLeft"), 10) || 0
                          , v = Nt('<span class="Zebra_DatePicker_Icon_Wrapper"></span>').css({
                            display: Dt.css("display"),
                            position: "static" === Dt.css("position") ? "relative" : Dt.css("position"),
                            "float": Dt.css("float"),
                            top: Dt.css("top"),
                            right: Dt.css("right"),
                            bottom: Dt.css("bottom"),
                            left: Dt.css("left"),
                            marginTop: m < 0 ? m : 0,
                            marginRight: f < 0 ? f : 0,
                            marginBottom: b < 0 ? b : 0,
                            marginLeft: y < 0 ? y : 0,
                            paddingTop: m,
                            paddingRight: f,
                            paddingBottom: b,
                            paddingLeft: y
                        });
                        "block" === Dt.css("display") && v.css("width", Dt.outerWidth(!0)),
                        Dt.wrap(v).css({
                            position: "relative",
                            "float": "none",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0
                        }),
                        G = Nt('<button type="button" class="Zebra_DatePicker_Icon' + ("disabled" === Dt.attr("disabled") ? " Zebra_DatePicker_Icon_Disabled" : "") + '">Pick a date</button>'),
                        kt.icon = G,
                        F = kt.settings.open_icon_only ? G : G.add(Dt)
                    } else
                        F = Dt;
                    F.on("click.Zebra_DatePicker_" + yt + (kt.settings.open_on_focus ? " focus.Zebra_DatePicker_" + yt : ""), function() {
                        j.hasClass("dp_hidden") && !Dt.attr("disabled") && (!vt || kt.settings.readonly_element ? kt.show() : (clearTimeout(dt),
                        dt = setTimeout(function() {
                            kt.show()
                        }, 600)))
                    }),
                    F.on("keydown.Zebra_DatePicker_" + yt, function(t) {
                        9 !== t.keyCode || j.hasClass("dp_hidden") || kt.hide()
                    }),
                    !kt.settings.readonly_element && kt.settings.pair && Dt.on("blur.Zebra_DatePicker_" + yt, function() {
                        var t;
                        (t = At(Nt(this).val())) && !Pt(t.getFullYear(), t.getMonth(), t.getDate()) && jt(t)
                    }),
                    void 0 !== G && G.insertAfter(Dt)
                }
                if (void 0 !== G) {
                    G.attr("style", "");
                    var w = Dt.outerWidth()
                      , k = Dt.outerHeight()
                      , D = G.outerWidth()
                      , A = G.outerHeight();
                    G.css("top", (k - A) / 2),
                    kt.settings.inside ? "right" === kt.settings.icon_position ? (G.css("right", !1 !== kt.settings.icon_margin ? kt.settings.icon_margin : ft.padding_right),
                    Dt.css("paddingRight", 2 * (!1 !== kt.settings.icon_margin ? kt.settings.icon_margin : ft.padding_right) + D)) : (G.css("left", !1 !== kt.settings.icon_margin ? kt.settings.icon_margin : ft.padding_left),
                    Dt.css("paddingLeft", 2 * (!1 !== kt.settings.icon_margin ? kt.settings.icon_margin : ft.padding_left) + D)) : G.css("left", w + (!1 !== kt.settings.icon_margin ? kt.settings.icon_margin : ft.padding_left)),
                    G.removeClass("Zebra_DatePicker_Icon_Disabled"),
                    "disabled" === Dt.attr("disabled") && G.addClass("Zebra_DatePicker_Icon_Disabled")
                }
            }
            if (rt = !1 !== kt.settings.show_select_today && -1 < Nt.inArray("days", ht) && !Pt(Y, x, S) && kt.settings.show_select_today,
            t)
                return Nt(".dp_previous", j).html(kt.settings.navigation[0]),
                Nt(".dp_next", j).html(kt.settings.navigation[1]),
                Nt(".dp_time_controls_increase .dp_time_control", j).html(kt.settings.navigation[2]),
                Nt(".dp_time_controls_decrease .dp_time_control", j).html(kt.settings.navigation[3]),
                Nt(".dp_clear", j).html(kt.settings.lang_clear_date),
                Nt(".dp_today", j).html(kt.settings.show_select_today),
                j.is(":visible") && (n = kt.settings.view,
                kt.settings.view = _t,
                kt.show(!1),
                kt.settings.view = n),
                void (j.parent() !== kt.settings.container && kt.settings.container.append(j.detach()));
            Nt(window).on("resize.Zebra_DatePicker_" + yt + ", orientationchange.Zebra_DatePicker_" + yt, function() {
                kt.hide()
            });
            var C = '<div class="Zebra_DatePicker"><table class="dp_header dp_actions"><tr><td class="dp_previous">' + kt.settings.navigation[0] + (wt ? "&#xFE0E;" : "") + '</td><td class="dp_caption"></td><td class="dp_next">' + kt.settings.navigation[1] + (wt ? "&#xFE0E;" : "") + '</td></tr></table><table class="dp_daypicker' + (kt.settings.show_week_number ? " dp_week_numbers" : "") + ' dp_body"></table><table class="dp_monthpicker dp_body"></table><table class="dp_yearpicker dp_body"></table><table class="dp_timepicker dp_body"></table><table class="dp_footer dp_actions"><tr><td class="dp_today">' + rt + '</td><td class="dp_clear">' + kt.settings.lang_clear_date + '</td><td class="dp_view_toggler dp_icon">&nbsp;&nbsp;&nbsp;&nbsp;</td><td class="dp_confirm dp_icon"></td></tr></table></div>';
            j = Nt(C),
            J = Nt("table.dp_header", j),
            z = Nt("table.dp_daypicker", j),
            q = Nt("table.dp_monthpicker", j),
            gt = Nt("table.dp_yearpicker", j),
            ct = Nt("table.dp_timepicker", j),
            Q = Nt("table.dp_footer", j),
            at = Nt("td.dp_today", Q),
            P = Nt("td.dp_clear", Q),
            st = Nt("td.dp_view_toggler", Q),
            Z = Nt("td.dp_confirm", Q),
            kt.settings.always_visible instanceof jQuery ? Dt.attr("disabled") || (kt.settings.always_visible.append(j),
            kt.show()) : kt.settings.container.append(j),
            j.on("mouseover", "td:not(.dp_disabled)", function() {
                Nt(this).addClass("dp_hover")
            }).on("mouseout", "td:not(.dp_disabled)", function() {
                Nt(this).removeClass("dp_hover")
            }),
            Ct(j),
            Nt(kt.settings.rtl ? ".dp_next" : ".dp_previous", J).on("click", function() {
                "months" === _t ? it-- : "years" === _t ? it -= 12 : --nt < 0 && (nt = 11,
                it--),
                Zt()
            }),
            kt.settings.fast_navigation && Nt(".dp_caption", J).on("click", function() {
                _t = "days" === _t ? -1 < Nt.inArray("months", ht) ? "months" : -1 < Nt.inArray("years", ht) ? "years" : "days" : "months" === _t ? -1 < Nt.inArray("years", ht) ? "years" : -1 < Nt.inArray("days", ht) ? "days" : "months" : -1 < Nt.inArray("days", ht) ? "days" : -1 < Nt.inArray("months", ht) ? "months" : "years",
                Zt()
            }),
            Nt(kt.settings.rtl ? ".dp_previous" : ".dp_next", J).on("click", function() {
                "months" === _t ? it++ : "years" === _t ? it += 12 : 12 == ++nt && (nt = 0,
                it++),
                Zt()
            }),
            z.on("click", "td:not(.dp_disabled)", function() {
                var t;
                kt.settings.select_other_months && Nt(this).attr("class") && null !== (t = Nt(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/)) ? xt(t[1], t[2] - 1, t[3], "days", Nt(this)) : xt(it, nt, It(Nt(this).html()), "days", Nt(this))
            }),
            q.on("click", "td:not(.dp_disabled)", function() {
                var t = Nt(this).attr("class").match(/dp\_month\_([0-9]+)/);
                nt = It(t[1]),
                -1 === Nt.inArray("days", ht) ? xt(it, nt, 1, "months", Nt(this)) : (_t = "days",
                kt.settings.always_visible && Dt.val(""),
                Zt())
            }),
            gt.on("click", "td:not(.dp_disabled)", function() {
                it = It(Nt(this).html()),
                -1 === Nt.inArray("months", ht) ? xt(it, 0, 1, "years", Nt(this)) : (_t = "months",
                kt.settings.always_visible && Dt.val(""),
                Zt())
            }),
            at.on("click", function(t) {
                var e = !1 !== kt.settings.current_date ? new Date(kt.settings.current_date) : new Date;
                t.preventDefault(),
                xt(e.getFullYear(), e.getMonth(), e.getDate(), "days", Nt(".dp_current", z))
            }),
            P.on("click", function(t) {
                t.preventDefault(),
                Dt.val(""),
                O = H = N = null,
                kt.settings.always_visible ? Nt("td.dp_selected", j).removeClass("dp_selected") : it = nt = null,
                Dt.focus(),
                kt.hide(),
                kt.settings.onClear && "function" == typeof kt.settings.onClear && kt.settings.onClear.call(Dt)
            }),
            st.on("click", function() {
                "time" !== _t ? (_t = "time",
                Zt()) : Nt(".dp_caption", J).trigger("click")
            }),
            Z.on("click", function() {
                if (Nt(".dp_time_controls_increase td", ct).first().trigger("mousedown"),
                clearInterval(pt),
                Nt(".dp_time_controls_decrease td", ct).first().trigger("mousedown"),
                clearInterval(pt),
                kt.settings.onSelect && "function" == typeof kt.settings.onSelect) {
                    var t = new Date(it,nt,N,lt && lt.hours ? X + (lt.ampm && ("pm" === et && X < 12 || "am" === et && 12 === X) ? 12 : 0) : 0,lt && lt.minutes ? K : 0,lt && lt.seconds ? tt : 0);
                    kt.settings.onSelect.call(Dt, Mt(t), it + "-" + Yt(nt + 1, 2) + "-" + Yt(N, 2) + (lt ? " " + Yt(t.getHours(), 2) + ":" + Yt(t.getMinutes(), 2) + ":" + Yt(t.getSeconds(), 2) : ""), t)
                }
                kt.hide()
            }),
            j.on("mousedown", ".dp_time_controls_increase td, .dp_time_controls_decrease td", function() {
                var t = this
                  , e = 0;
                St(t),
                pt = setInterval(function() {
                    St(t),
                    5 < ++e && (clearInterval(pt),
                    pt = setInterval(function() {
                        St(t),
                        10 < ++e && (clearInterval(pt),
                        pt = setInterval(function() {
                            St(t)
                        }, 100, t))
                    }, 200, t))
                }, 400, t)
            }),
            j.on("mouseup mouseleave", ".dp_time_controls_increase td, .dp_time_controls_decrease td", function() {
                clearInterval(pt)
            }),
            kt.settings.always_visible instanceof jQuery || (Nt(document).on("touchmove.Zebra_DatePicker_" + yt, function() {
                bt = !0
            }),
            Nt(document).on("mousedown.Zebra_DatePicker_" + yt + " touchend.Zebra_DatePicker_" + yt, function(t) {
                if ("touchend" === t.type && bt)
                    return bt = !(vt = !0);
                bt = !1,
                j.hasClass("dp_hidden") || (!kt.settings.open_icon_only || !kt.icon || Nt(t.target).get(0) === kt.icon.get(0)) && (kt.settings.open_icon_only || Nt(t.target).get(0) === Dt.get(0) || kt.icon && Nt(t.target).get(0) === kt.icon.get(0)) || 0 !== Nt(t.target).closest(".Zebra_DatePicker").length || Nt(t.target).hasClass("dp_time_control") || kt.hide(!0)
            }),
            Nt(document).on("keyup.Zebra_DatePicker_" + yt, function(t) {
                j.hasClass("dp_hidden") || 27 !== t.which || kt.hide()
            })),
            Zt()
        }
        function a() {
            var t, e, s, n, i, a, r, o, d, c, l, g, _ = new Date(it,nt + 1,0).getDate(), h = new Date(it,nt,1).getDay(), p = new Date(it,nt,0).getDate(), u = h - kt.settings.first_day_of_week;
            for (u = u < 0 ? 7 + u : u,
            y(kt.settings.header_captions.days),
            e = "<tr>",
            kt.settings.show_week_number && (e += "<th>" + kt.settings.show_week_number + "</th>"),
            t = 0; t < 7; t++)
                s = (kt.settings.first_day_of_week + (kt.settings.rtl ? 6 - t : t)) % 7,
                e += "<th>" + (Nt.isArray(kt.settings.days_abbr) && void 0 !== kt.settings.days_abbr[s] ? kt.settings.days_abbr[s] : kt.settings.days[s].substr(0, 2)) + "</th>";
            for (e += "</tr><tr>",
            t = 0; t < 42; t++)
                g = kt.settings.rtl ? 6 - t % 7 * 2 : 0,
                0 < t && t % 7 == 0 && (e += "</tr><tr>"),
                t % 7 == 0 && kt.settings.show_week_number && (e += "<th>" + b(new Date(it,nt,t - u + 1)) + "</th>"),
                s = t - u + 1 + g,
                kt.settings.select_other_months && (t < u || _ < s) && (i = (n = new Date(it,nt,s)).getFullYear(),
                a = n.getMonth(),
                r = n.getDate(),
                n = i + Yt(a + 1, 2) + Yt(r, 2)),
                o = (kt.settings.first_day_of_week + t) % 7,
                l = -1 < Nt.inArray(o, kt.settings.weekend_days),
                kt.settings.rtl && s < 1 || !kt.settings.rtl && t < u ? e += '<td class="dp_not_in_month ' + (l ? "dp_weekend " : "") + (kt.settings.select_other_months && !Pt(i, a, r) ? "date_" + n : "dp_disabled") + '">' + (kt.settings.select_other_months || kt.settings.show_other_months ? Yt(g + p - u + t + 1, kt.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>" : _ < s ? e += '<td class="dp_not_in_month ' + (l ? "dp_weekend " : "") + (kt.settings.select_other_months && !Pt(i, a, r) ? "date_" + n : "dp_disabled") + '">' + (kt.settings.select_other_months || kt.settings.show_other_months ? Yt(s - _, kt.settings.zero_pad ? 2 : 0) : "&nbsp;") + "</td>" : (d = "",
                c = f(it, nt, s),
                l && (d = " dp_weekend"),
                nt === x && it === Y && S === s && (d += " dp_current"),
                "" !== c && (d += " " + c),
                nt === H && it === O && N === s && (d += " dp_selected"),
                Pt(it, nt, s) && (d += " dp_disabled"),
                e += "<td" + ("" !== d ? ' class="' + Nt.trim(d) + '"' : "") + ">" + ((kt.settings.zero_pad ? Yt(s, 2) : s) || "&nbsp;") + "</td>");
            e += "</tr>",
            z.html(Nt(e)),
            kt.settings.always_visible && (m = Nt("td:not(.dp_disabled)", z)),
            z.show()
        }
        function g(t) {
            var e, s;
            if ("explorer" === zt.name && 6 === zt.version)
                switch (n || (e = It(j.css("zIndex")) - 1,
                n = Nt("<iframe>", {
                    src: 'javascript:document.write("")',
                    scrolling: "no",
                    frameborder: 0,
                    css: {
                        zIndex: e,
                        position: "absolute",
                        top: -1e3,
                        left: -1e3,
                        width: j.outerWidth(),
                        height: j.outerHeight(),
                        filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)",
                        display: "none"
                    }
                }),
                Nt("body").append(n)),
                t) {
                case "hide":
                    n.hide();
                    break;
                default:
                    s = j.offset(),
                    n.css({
                        top: s.top,
                        left: s.left,
                        display: "block"
                    })
                }
        }
        var P, F, Z, S, x, Y, I, j, z, m, N, H, O, L, T, R, W, B, E, Q, J, G, U, V, $, q, d, X, K, tt, et, st, nt, it, at, n, rt, ot, dt, ct, lt, gt, c, _t, ht, pt, ut = {
            always_visible: !(this.version = "1.9.18"),
            container: Nt("body"),
            current_date: !1,
            custom_classes: !1,
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            days_abbr: !1,
            default_position: "above",
            direction: 0,
            disable_time_picker: !1,
            disabled_dates: !1,
            enabled_ampm: !1,
            enabled_dates: !1,
            enabled_hours: !1,
            enabled_minutes: !1,
            enabled_seconds: !1,
            fast_navigation: !0,
            first_day_of_week: 1,
            format: "Y-m-d",
            header_captions: {
                days: "F, Y",
                months: "Y",
                years: "Y1 - Y2"
            },
            icon_margin: !1,
            icon_position: "right",
            inside: !0,
            lang_clear_date: "Clear date",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            months_abbr: !1,
            navigation: ["&#9664;", "&#9654;", "&#9650;", "&#9660;"],
            offset: [5, -5],
            open_icon_only: !1,
            open_on_focus: !1,
            pair: !1,
            readonly_element: !0,
            rtl: !1,
            select_other_months: !1,
            show_clear_date: 0,
            show_icon: !0,
            show_other_months: !0,
            show_select_today: "Today",
            show_week_number: !1,
            start_date: !1,
            strict: !1,
            view: "days",
            weekend_days: [0, 6],
            zero_pad: !1,
            onChange: null,
            onClear: null,
            onOpen: null,
            onClose: null,
            onSelect: null
        }, mt = {}, ft = {}, bt = !1, yt = "", vt = !1, wt = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform), kt = this, Dt = Nt(t), At = function(t) {
            if (t += "",
            "" !== Nt.trim(t)) {
                var e, s, n = w(kt.settings.format), i = ["d", "D", "j", "l", "N", "S", "w", "F", "m", "M", "n", "Y", "y", "G", "g", "H", "h", "i", "s", "a", "A"], a = [], r = [], o = null, d = null;
                for (s = 0; s < i.length; s++)
                    -1 < (o = n.indexOf(i[s])) && a.push({
                        character: i[s],
                        position: o
                    });
                if (a.sort(function(t, e) {
                    return t.position - e.position
                }),
                Nt.each(a, function(t, e) {
                    switch (e.character) {
                    case "d":
                        r.push("0[1-9]|[12][0-9]|3[01]");
                        break;
                    case "D":
                        r.push(kt.settings.days_abbr ? kt.settings.days_abbr.map(function(t) {
                            return w(t)
                        }).join("|") : "[a-zÀ-ɏ]{3}");
                        break;
                    case "j":
                        r.push("[1-9]|[12][0-9]|3[01]");
                        break;
                    case "l":
                        r.push(kt.settings.days ? kt.settings.days.map(function(t) {
                            return w(t)
                        }).join("|") : "[a-zÀ-ɏ]+");
                        break;
                    case "N":
                        r.push("[1-7]");
                        break;
                    case "S":
                        r.push("st|nd|rd|th");
                        break;
                    case "w":
                        r.push("[0-6]");
                        break;
                    case "F":
                        r.push(kt.settings.months ? kt.settings.months.map(function(t) {
                            return w(t)
                        }).join("|") : "[a-zÀ-ɏ]+");
                        break;
                    case "m":
                        r.push("0[1-9]|1[012]");
                        break;
                    case "M":
                        r.push(kt.settings.months_abbr ? kt.settings.months_abbr.map(function(t) {
                            return w(t)
                        }).join("|") : "[a-zÀ-ɏ]{3}");
                        break;
                    case "n":
                        r.push("[1-9]|1[012]");
                        break;
                    case "Y":
                        r.push("[0-9]{4}");
                        break;
                    case "y":
                        r.push("[0-9]{2}");
                        break;
                    case "G":
                        r.push("[1-9]|1[0-9]|2[0123]");
                        break;
                    case "g":
                        r.push("[0-9]|1[012]");
                        break;
                    case "H":
                        r.push("0[0-9]|1[0-9]|2[0123]");
                        break;
                    case "h":
                        r.push("0[0-9]|1[012]");
                        break;
                    case "i":
                    case "s":
                        r.push("0[0-9]|[12345][0-9]");
                        break;
                    case "a":
                        r.push("am|pm");
                        break;
                    case "A":
                        r.push("AM|PM")
                    }
                }),
                r.length && (a.reverse(),
                Nt.each(a, function(t, e) {
                    n = n.replace(e.character, "(" + r[r.length - t - 1] + ")")
                }),
                r = new RegExp("^" + n + "$","ig"),
                d = r.exec(t))) {
                    var c, l, g = new Date, _ = 1, h = g.getMonth() + 1, p = g.getFullYear(), u = g.getHours(), m = g.getMinutes(), f = g.getSeconds(), b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], y = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], v = !0;
                    if (a.reverse(),
                    Nt.each(a, function(s, n) {
                        if (!v)
                            return !0;
                        switch (n.character) {
                        case "m":
                        case "n":
                            h = It(d[s + 1]);
                            break;
                        case "d":
                        case "j":
                            _ = It(d[s + 1]);
                            break;
                        case "D":
                        case "l":
                        case "F":
                        case "M":
                            l = "D" === n.character ? kt.settings.days_abbr || kt.settings.days : "l" === n.character ? kt.settings.days : "M" === n.character && kt.settings.months_abbr || kt.settings.months,
                            v = !1,
                            Nt.each(l, function(t, e) {
                                if (v)
                                    return !0;
                                if (d[s + 1].toLowerCase() === e.substring(0, "D" === n.character && !kt.settings.days_abbr || "M" === n.character && !kt.settings.months_abbr ? 3 : e.length).toLowerCase()) {
                                    switch (n.character) {
                                    case "D":
                                        d[s + 1] = b[t].substring(0, 3);
                                        break;
                                    case "l":
                                        d[s + 1] = b[t];
                                        break;
                                    case "F":
                                        d[s + 1] = y[t],
                                        h = t + 1;
                                        break;
                                    case "M":
                                        d[s + 1] = y[t].substring(0, 3),
                                        h = t + 1
                                    }
                                    v = !0
                                }
                            });
                            break;
                        case "Y":
                            p = It(d[s + 1]);
                            break;
                        case "y":
                            p = It("20" + It(d[s + 1]));
                            break;
                        case "G":
                        case "H":
                        case "g":
                        case "h":
                            u = It(d[s + 1]);
                            break;
                        case "i":
                            m = It(d[s + 1]);
                            break;
                        case "s":
                            f = It(d[s + 1]);
                            break;
                        case "a":
                        case "A":
                            c = d[s + 1].toLowerCase()
                        }
                    }),
                    v && (e = new Date(p,(h || 1) - 1,_ || 1,u + ("pm" === c && 12 !== u ? 12 : "am" === c && 12 === u ? -12 : 0),m,f)).getFullYear() === p && e.getDate() === (_ || 1) && e.getMonth() === (h || 1) - 1)
                        return e
                }
                return !1
            }
        }, Ct = function(t) {
            "firefox" === zt.name ? t.css("MozUserSelect", "none") : "explorer" === zt.name ? Nt(document).on("selectstart", t, function() {
                return !1
            }) : t.mousedown(function() {
                return !1
            })
        }, w = function(t) {
            return t.replace(/([-.,*+?^${}()|[\]\/\\])/g, "\\$1")
        }, Mt = function(t) {
            var e, s, n = "", i = t.getDate(), a = t.getDay(), r = kt.settings.days[a], o = t.getMonth() + 1, d = kt.settings.months[o - 1], c = t.getFullYear() + "", l = t.getHours(), g = l % 12 == 0 ? 12 : l % 12, _ = t.getMinutes(), h = t.getSeconds(), p = 12 <= l ? "pm" : "am";
            for (e = 0; e < kt.settings.format.length; e++)
                switch (s = kt.settings.format.charAt(e)) {
                case "y":
                    c = c.substr(2);
                case "Y":
                    n += c;
                    break;
                case "m":
                    o = Yt(o, 2);
                case "n":
                    n += o;
                    break;
                case "M":
                    d = Nt.isArray(kt.settings.months_abbr) && void 0 !== kt.settings.months_abbr[o - 1] ? kt.settings.months_abbr[o - 1] : kt.settings.months[o - 1].substr(0, 3);
                case "F":
                    n += d;
                    break;
                case "d":
                    i = Yt(i, 2);
                case "j":
                    n += i;
                    break;
                case "D":
                    r = Nt.isArray(kt.settings.days_abbr) && void 0 !== kt.settings.days_abbr[a] ? kt.settings.days_abbr[a] : kt.settings.days[a].substr(0, 3);
                case "l":
                    n += r;
                    break;
                case "N":
                    a++;
                case "w":
                    n += a;
                    break;
                case "S":
                    n += i % 10 == 1 && 11 !== i ? "st" : i % 10 == 2 && 12 !== i ? "nd" : i % 10 == 3 && 13 !== i ? "rd" : "th";
                    break;
                case "g":
                    n += g;
                    break;
                case "h":
                    n += Yt(g, 2);
                    break;
                case "G":
                    n += l;
                    break;
                case "H":
                    n += Yt(l, 2);
                    break;
                case "i":
                    n += Yt(_, 2);
                    break;
                case "s":
                    n += Yt(h, 2);
                    break;
                case "a":
                    n += p;
                    break;
                case "A":
                    n += p.toUpperCase();
                    break;
                default:
                    n += s
                }
            return n
        }, f = function(s, n, i) {
            var a, t, r;
            for (t in void 0 !== n && (n += 1),
            I)
                if (a = I[t],
                r = !1,
                Nt.isArray(mt[a]) && Nt.each(mt[a], function() {
                    if (!r) {
                        var t, e = this;
                        if ((-1 < Nt.inArray(s, e[2]) || -1 < Nt.inArray("*", e[2])) && (void 0 !== n && -1 < Nt.inArray(n, e[1]) || -1 < Nt.inArray("*", e[1])) && (void 0 !== i && -1 < Nt.inArray(i, e[0]) || -1 < Nt.inArray("*", e[0]))) {
                            if (-1 < Nt.inArray("*", e[3]))
                                return r = a;
                            if (t = new Date(s,n - 1,i).getDay(),
                            -1 < Nt.inArray(t, e[3]))
                                return r = a
                        }
                    }
                }),
                r)
                    return r;
            return r || ""
        }, b = function(t) {
            var e, s, n, i, a, r, o, d = t.getFullYear(), c = t.getMonth() + 1, l = t.getDate();
            return (o = (a = c < 3 ? (n = (s = ((e = d - 1) / 4 | 0) - (e / 100 | 0) + (e / 400 | 0)) - (((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0)),
            i = 0,
            l - 1 + 31 * (c - 1)) : (i = (n = (s = ((e = d) / 4 | 0) - (e / 100 | 0) + (e / 400 | 0)) - (((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0))) + 1,
            l + ((153 * (c - 3) + 2) / 5 | 0) + 58 + n)) + 3 - (l = (a + (r = (e + s) % 7) - i) % 7)) < 0 ? 53 - ((r - n) / 5 | 0) : 364 + n < o ? 1 : 1 + (o / 7 | 0)
        }, Pt = function(s, n, i) {
            var t, e, a, r;
            if (!(void 0 !== s && !isNaN(s) || void 0 !== n && !isNaN(n) || void 0 !== i && !isNaN(i)))
                return !1;
            if (s < 1e3)
                return !0;
            if (Nt.isArray(kt.settings.direction) || 0 !== It(kt.settings.direction)) {
                if (8 === (e = ((t = It(o(s, void 0 !== n ? Yt(n, 2) : "", void 0 !== i ? Yt(i, 2) : ""))) + "").length) && (void 0 !== ot && t < It(o(E, Yt(B, 2), Yt(W, 2))) || void 0 !== R && t > It(o($, Yt(V, 2), Yt(U, 2)))))
                    return !0;
                if (6 === e && (void 0 !== ot && t < It(o(E, Yt(B, 2))) || void 0 !== R && t > It(o($, Yt(V, 2)))))
                    return !0;
                if (4 === e && (void 0 !== ot && t < E || void 0 !== R && $ < t))
                    return !0
            }
            return void 0 !== n && (n += 1),
            r = a = !1,
            Nt.isArray(L) && L.length && Nt.each(L, function() {
                if (!a) {
                    var t, e = this;
                    if ((-1 < Nt.inArray(s, e[2]) || -1 < Nt.inArray("*", e[2])) && (void 0 !== n && -1 < Nt.inArray(n, e[1]) || -1 < Nt.inArray("*", e[1])) && (void 0 !== i && -1 < Nt.inArray(i, e[0]) || -1 < Nt.inArray("*", e[0]))) {
                        if (-1 < Nt.inArray("*", e[3]))
                            return a = !0;
                        if (t = new Date(s,n - 1,i).getDay(),
                        -1 < Nt.inArray(t, e[3]))
                            return a = !0
                    }
                }
            }),
            T && Nt.each(T, function() {
                if (!r) {
                    var t, e = this;
                    if ((-1 < Nt.inArray(s, e[2]) || -1 < Nt.inArray("*", e[2])) && (r = !0,
                    void 0 !== n))
                        if (r = !0,
                        -1 < Nt.inArray(n, e[1]) || -1 < Nt.inArray("*", e[1])) {
                            if (void 0 !== i)
                                if (r = !0,
                                -1 < Nt.inArray(i, e[0]) || -1 < Nt.inArray("*", e[0])) {
                                    if (-1 < Nt.inArray("*", e[3]))
                                        return r = !0;
                                    if (t = new Date(s,n - 1,i).getDay(),
                                    -1 < Nt.inArray(t, e[3]))
                                        return r = !0;
                                    r = !1
                                } else
                                    r = !1
                        } else
                            r = !1
                }
            }),
            (!T || !r) && !(!L || !a)
        }, Ft = function(t) {
            return (t + "").match(/^\-?[0-9]+$/)
        }, y = function(t) {
            !isNaN(parseFloat(nt)) && isFinite(nt) && (t = t.replace(/\bm\b|\bn\b|\bF\b|\bM\b/, function(t) {
                switch (t) {
                case "m":
                    return Yt(nt + 1, 2);
                case "n":
                    return nt + 1;
                case "F":
                    return kt.settings.months[nt];
                case "M":
                    return Nt.isArray(kt.settings.months_abbr) && void 0 !== kt.settings.months_abbr[nt] ? kt.settings.months_abbr[nt] : kt.settings.months[nt].substr(0, 3);
                default:
                    return t
                }
            })),
            !isNaN(parseFloat(it)) && isFinite(it) && (t = t.replace(/\bY\b/, it).replace(/\by\b/, (it + "").substr(2)).replace(/\bY1\b/i, it - 7).replace(/\bY2\b/i, it + 4)),
            Nt(".dp_caption", J).html(t)
        }, Zt = function(t) {
            var e, s, n, i;
            "" === z.text() || "days" === _t ? ("" === z.text() ? (kt.settings.always_visible instanceof jQuery || j.css("left", -1e3),
            j.removeClass("hidden"),
            a(),
            e = void 0 !== z[0].getBoundingClientRect && void 0 !== z[0].getBoundingClientRect().height ? z[0].getBoundingClientRect().height : z.outerHeight(!0),
            q.css("height", e),
            gt.css("height", e),
            ct.css("height", e + J.outerHeight(!0)),
            j.css("width", j.outerWidth()),
            j.addClass("dp_hidden")) : a(),
            J.show(),
            q.hide(),
            gt.hide(),
            ct.hide(),
            st.hide(),
            Z.hide(),
            lt && st.show().removeClass("dp_calendar")) : "months" === _t ? (function() {
                y(kt.settings.header_captions.months);
                var t, e, s, n = "<tr>";
                for (t = 0; t < 12; t++)
                    0 < t && t % 3 == 0 && (n += "</tr><tr>"),
                    e = "dp_month_" + (s = kt.settings.rtl ? 2 + t - t % 3 * 2 : t),
                    Pt(it, s) ? e += " dp_disabled" : !1 !== H && H === s && it === O ? e += " dp_selected" : x === s && Y === it && (e += " dp_current"),
                    n += '<td class="' + Nt.trim(e) + '">' + (Nt.isArray(kt.settings.months_abbr) && void 0 !== kt.settings.months_abbr[s] ? kt.settings.months_abbr[s] : kt.settings.months[s].substr(0, 3)) + "</td>";
                n += "</tr>",
                q.html(Nt(n)),
                kt.settings.always_visible && (d = Nt("td:not(.dp_disabled)", q)),
                q.show()
            }(),
            z.hide(),
            gt.hide(),
            ct.hide(),
            st.hide(),
            Z.hide()) : "years" === _t ? (function() {
                y(kt.settings.header_captions.years);
                var t, e, s, n = "<tr>";
                for (t = 0; t < 12; t++)
                    0 < t && t % 3 == 0 && (n += "</tr><tr>"),
                    s = kt.settings.rtl ? 2 + t - t % 3 * 2 : t,
                    e = "",
                    Pt(it - 7 + s) ? e += " dp_disabled" : O && O === it - 7 + s ? e += " dp_selected" : Y === it - 7 + s && (e += " dp_current"),
                    n += "<td" + ("" !== Nt.trim(e) ? ' class="' + Nt.trim(e) + '"' : "") + ">" + (it - 7 + s) + "</td>";
                n += "</tr>",
                gt.html(Nt(n)),
                kt.settings.always_visible && (c = Nt("td:not(.dp_disabled)", gt)),
                gt.show()
            }(),
            z.hide(),
            q.hide(),
            ct.hide(),
            st.hide(),
            Z.hide()) : "time" === _t && (i = lt.hours && lt.minutes && lt.seconds && lt.ampm,
            n = '<tr class="dp_time_controls_increase' + (i ? " dp_time_controls_condensed" : "") + '">' + (kt.settings.rtl && lt.ampm ? '<td class="dp_time_ampm dp_time_control">' + kt.settings.navigation[2] + "</td>" : "") + (lt.hours ? '<td class="dp_time_hour dp_time_control">' + kt.settings.navigation[2] + "</td>" : "") + (lt.minutes ? '<td class="dp_time_minute dp_time_control">' + kt.settings.navigation[2] + "</td>" : "") + (lt.seconds ? '<td class="dp_time_second dp_time_control">' + kt.settings.navigation[2] + "</td>" : "") + (!kt.settings.rtl && lt.ampm ? '<td class="dp_time_ampm dp_time_control">' + kt.settings.navigation[2] + "</td>" : "") + "</tr>",
            n += '<tr class="dp_time_segments' + (i ? " dp_time_controls_condensed" : "") + '">',
            kt.settings.rtl && lt.ampm && (n += '<td class="dp_time_ampm dp_disabled' + (lt.hours || lt.minutes || lt.seconds ? " dp_time_separator" : "") + '"><div>' + ("A" === lt.ampm_case ? et.toUpperCase() : et) + "</div></td>"),
            lt.hours && (n += '<td class="dp_time_hours dp_disabled' + (lt.minutes || lt.seconds || !kt.settings.rtl && lt.ampm ? " dp_time_separator" : "") + '"><div>' + ("h" === lt.hour_format || "H" === lt.hour_format ? Yt(X, 2) : X) + "</div></td>"),
            lt.minutes && (n += '<td class="dp_time_minutes dp_disabled' + (lt.seconds || !kt.settings.rtl && lt.ampm ? " dp_time_separator" : "") + '"><div>' + Yt(K, 2) + "</div></td>"),
            lt.seconds && (n += '<td class="dp_time_seconds dp_disabled' + (!kt.settings.rtl && lt.ampm ? " dp_time_separator" : "") + '"><div>' + Yt(tt, 2) + "</div></td>"),
            !kt.settings.rtl && lt.ampm && (n += '<td class="dp_time_ampm dp_disabled">' + ("A" === lt.ampm_case ? et.toUpperCase() : et) + "</td>"),
            n += "</tr>",
            n += '<tr class="dp_time_controls_decrease' + (i ? " dp_time_controls_condensed" : "") + '">' + (kt.settings.rtl && lt.ampm ? '<td class="dp_time_ampm dp_time_control">' + kt.settings.navigation[3] + "</td>" : "") + (lt.hours ? '<td class="dp_time_hour dp_time_control">' + kt.settings.navigation[3] + "</td>" : "") + (lt.minutes ? '<td class="dp_time_minute dp_time_control">' + kt.settings.navigation[3] + "</td>" : "") + (lt.seconds ? '<td class="dp_time_second dp_time_control">' + kt.settings.navigation[3] + "</td>" : "") + (!kt.settings.rtl && lt.ampm ? '<td class="dp_time_ampm dp_time_control">' + kt.settings.navigation[3] + "</td>" : "") + "</tr>",
            ct.html(Nt(n)),
            ct.show(),
            1 === ht.length ? (st.hide(),
            Z.show()) : (st.show().addClass("dp_calendar"),
            "" === Dt.val() ? Z.hide() : Z.show()),
            J.hide(),
            z.hide(),
            q.hide(),
            gt.hide()),
            !1 !== t && kt.settings.onChange && "function" == typeof kt.settings.onChange && void 0 !== _t && ((s = "days" === _t ? z.find("td:not(.dp_disabled)") : "months" === _t ? q.find("td:not(.dp_disabled)") : "years" === _t ? gt.find("td:not(.dp_disabled)") : ct.find(".dp_time_segments td")).each(function() {
                var t;
                "days" === _t ? Nt(this).hasClass("dp_not_in_month") && !Nt(this).hasClass("dp_disabled") ? (t = Nt(this).attr("class").match(/date\_([0-9]{4})(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])/),
                Nt(this).data("date", t[1] + "-" + t[2] + "-" + t[3])) : Nt(this).data("date", it + "-" + Yt(nt + 1, 2) + "-" + Yt(It(Nt(this).text()), 2)) : "months" === _t ? (t = Nt(this).attr("class").match(/dp\_month\_([0-9]+)/),
                Nt(this).data("date", it + "-" + Yt(It(t[1]) + 1, 2))) : "years" === _t && Nt(this).data("date", It(Nt(this).text()))
            }),
            kt.settings.onChange.call(Dt, _t, s)),
            Q.show(),
            "time" === _t && 1 < ht.length ? (at.hide(),
            P.hide(),
            st.css("width", "" === Dt.val() ? "100%" : "50%")) : (at.show(),
            P.show(),
            !0 === kt.settings.show_clear_date || 0 === kt.settings.show_clear_date && "" !== Dt.val() || kt.settings.always_visible && !1 !== kt.settings.show_clear_date ? rt ? (at.css("width", "50%"),
            P.css("width", "50%")) : (at.hide(),
            P.css("width", -1 < Nt.inArray(ht, "time") ? "50%" : "100%")) : (P.hide(),
            rt ? at.css("width", "100%") : (at.hide(),
            lt && ("time" === _t || "days" === _t) || Q.hide())))
        }, St = function(t) {
            var e, s = 0 < Nt(t).parent(".dp_time_controls_increase").length, n = Nt(t).attr("class").match(/dp\_time\_([^\s]+)/i), i = Nt(".dp_time_segments .dp_time_" + n[1] + ("ampm" !== n[1] ? "s" : ""), ct), a = i.text().toLowerCase(), r = lt[n[1] + ("ampm" !== n[1] ? "s" : "")], o = Nt.inArray("ampm" !== n[1] ? parseInt(a, 10) : a, r), d = -1 === o ? 0 : s ? o + 1 >= r.length ? 0 : o + 1 : o - 1 < 0 ? r.length - 1 : o - 1;
            "hour" === n[1] ? X = r[d] : "minute" === n[1] ? K = r[d] : "second" === n[1] ? tt = r[d] : et = r[d],
            !N && kt.settings.start_date && (e = At(kt.settings.start_date)) && (N = e.getDate()),
            N = N || W,
            i.text(Yt(r[d], 2).toUpperCase()),
            xt(it, nt, N)
        }, xt = function(t, e, s, n, i) {
            var a = new Date(t,e,s,lt && lt.hours ? X + (lt.ampm ? "pm" === et && 12 !== X ? 12 : "am" === et && 12 === X ? -12 : 0 : 0) : 12,lt && lt.minutes ? K : 0,lt && lt.seconds ? tt : 0)
              , r = "days" === n ? m : "months" === n ? d : c
              , o = Mt(a);
            Dt.val(o),
            (kt.settings.always_visible || lt) && (H = a.getMonth(),
            nt = a.getMonth(),
            O = a.getFullYear(),
            it = a.getFullYear(),
            N = a.getDate(),
            i && r && (r.removeClass("dp_selected"),
            i.addClass("dp_selected"),
            "days" === n && i.hasClass("dp_not_in_month") && !i.hasClass("dp_disabled") && kt.show())),
            lt ? (_t = "time",
            Zt()) : (Dt.focus(),
            kt.hide()),
            jt(a),
            !lt && kt.settings.onSelect && "function" == typeof kt.settings.onSelect && kt.settings.onSelect.call(Dt, o, t + "-" + Yt(e + 1, 2) + "-" + Yt(s, 2), a)
        }, o = function() {
            var t, e = "";
            for (t = 0; t < arguments.length; t++)
                e += arguments[t] + "";
            return e
        }, Yt = function(t, e) {
            for (t += ""; t.length < e; )
                t = "0" + t;
            return t
        }, It = function(t) {
            return parseInt(t, 10)
        }, jt = function(s) {
            kt.settings.pair && Nt.each(kt.settings.pair, function() {
                var t, e = Nt(this);
                e.data && e.data("Zebra_DatePicker") ? ((t = e.data("Zebra_DatePicker")).update({
                    reference_date: s,
                    direction: 0 === t.settings.direction ? 1 : t.settings.direction
                }),
                t.settings.always_visible && t.show()) : e.data("zdp_reference_date", s)
            })
        }, zt = {
            init: function() {
                this.name = this.searchString(this.dataBrowser) || "",
                this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || ""
            },
            searchString: function(t) {
                var e, s, n;
                for (e = 0; e < t.length; e++)
                    if (s = t[e].string,
                    n = t[e].prop,
                    this.versionSearchString = t[e].versionSearch || t[e].identity,
                    s) {
                        if (-1 !== s.indexOf(t[e].subString))
                            return t[e].identity
                    } else if (n)
                        return t[e].identity
            },
            searchVersion: function(t) {
                var e = t.indexOf(this.versionSearchString);
                if (-1 !== e)
                    return parseFloat(t.substring(e + this.versionSearchString.length + 1))
            },
            dataBrowser: [{
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "firefox"
            }, {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "explorer",
                versionSearch: "MSIE"
            }]
        };
        kt.settings = {},
        kt.clear_date = function() {
            Nt(P).trigger("click")
        }
        ,
        kt.destroy = function() {
            void 0 !== kt.icon && (kt.icon.off("click.Zebra_DatePicker_" + yt),
            kt.icon.off("focus.Zebra_DatePicker_" + yt),
            kt.icon.off("keydown.Zebra_DatePicker_" + yt),
            kt.icon.remove()),
            j.off(),
            j.remove(),
            !kt.settings.show_icon || kt.settings.always_visible instanceof jQuery || Dt.unwrap(),
            Dt.off("blur.Zebra_DatePicker_" + yt),
            Dt.off("click.Zebra_DatePicker_" + yt),
            Dt.off("focus.Zebra_DatePicker_" + yt),
            Dt.off("keydown.Zebra_DatePicker_" + yt),
            Dt.off("mousedown.Zebra_DatePicker_" + yt),
            Nt(document).off("keyup.Zebra_DatePicker_" + yt),
            Nt(document).off("mousedown.Zebra_DatePicker_" + yt),
            Nt(document).off("touchend.Zebra_DatePicker_" + yt),
            Nt(window).off("resize.Zebra_DatePicker_" + yt),
            Nt(window).off("orientationchange.Zebra_DatePicker_" + yt),
            Dt.removeData("Zebra_DatePicker"),
            Dt.attr("readonly", ft.readonly),
            Dt.attr("style", ft.style ? ft.style : ""),
            Dt.css("paddingLeft", ft.padding_left),
            Dt.css("paddingRight", ft.padding_right)
        }
        ,
        kt.hide = function(t) {
            j.hasClass("dp_hidden") || kt.settings.always_visible && !t || (g("hide"),
            j.addClass("dp_hidden"),
            kt.settings.onClose && "function" == typeof kt.settings.onClose && kt.settings.onClose.call(Dt))
        }
        ,
        kt.set_date = function(t) {
            var e;
            "object" == typeof t && t instanceof Date && (t = Mt(t)),
            (e = At(t)) && !Pt(e.getFullYear(), e.getMonth(), e.getDate()) && (Dt.val(t),
            jt(e))
        }
        ,
        kt.show = function(t) {
            _t = kt.settings.view;
            var e, s = At(Dt.val() || (kt.settings.start_date ? kt.settings.start_date : ""));
            if (s ? (H = s.getMonth(),
            nt = s.getMonth(),
            O = s.getFullYear(),
            it = s.getFullYear(),
            N = s.getDate(),
            Pt(O, H, N) && (kt.settings.strict && Dt.val(""),
            nt = B,
            it = E)) : (nt = B,
            it = E),
            lt && (e = s || new Date,
            X = e.getHours(),
            K = e.getMinutes(),
            tt = e.getSeconds(),
            et = 12 <= X ? "pm" : "am",
            lt.is12hour && (X = X % 12 == 0 ? 12 : X % 12),
            Nt.isArray(kt.settings.enabled_hours) && -1 === Nt.inArray(X, kt.settings.enabled_hours) && (X = kt.settings.enabled_hours[0]),
            Nt.isArray(kt.settings.enabled_minutes) && -1 === Nt.inArray(K, kt.settings.enabled_minutes) && (K = kt.settings.enabled_minutes[0]),
            Nt.isArray(kt.settings.enabled_seconds) && -1 === Nt.inArray(tt, kt.settings.enabled_seconds) && (tt = kt.settings.enabled_seconds[0]),
            Nt.isArray(kt.settings.enabled_ampm) && -1 === Nt.inArray(et, kt.settings.enabled_ampm) && (et = kt.settings.enabled_ampm[0])),
            Zt(t),
            kt.settings.always_visible instanceof jQuery)
                j.removeClass("dp_hidden");
            else {
                if (kt.settings.container.is("body")) {
                    var n = j.outerWidth()
                      , i = j.outerHeight()
                      , a = (void 0 !== G ? G.offset().left + G.outerWidth(!0) : Dt.offset().left + Dt.outerWidth(!0)) + kt.settings.offset[0]
                      , r = (void 0 !== G ? G.offset().top : Dt.offset().top) - i + kt.settings.offset[1]
                      , o = Nt(window).width()
                      , d = Nt(window).height()
                      , c = Nt(window).scrollTop()
                      , l = Nt(window).scrollLeft();
                    "below" === kt.settings.default_position && (r = (void 0 !== G ? G.offset().top : Dt.offset().top) + kt.settings.offset[1]),
                    l + o < a + n && (a = l + o - n),
                    a < l && (a = l),
                    c + d < r + i && (r = c + d - i),
                    r < c && (r = c),
                    j.css({
                        left: a,
                        top: r
                    })
                } else
                    j.css({
                        left: 0,
                        top: 0
                    });
                j.removeClass("dp_hidden"),
                g()
            }
            !1 !== t && kt.settings.onOpen && "function" == typeof kt.settings.onOpen && kt.settings.onOpen.call(Dt)
        }
        ,
        kt.update = function(t) {
            kt.original_direction && (kt.original_direction = kt.direction),
            kt.settings = Nt.extend(kt.settings, t),
            e(!0)
        }
        ,
        zt.init(),
        e()
    }
    ,
    Nt.fn.Zebra_DatePicker = function(e) {
        return this.each(function() {
            void 0 !== Nt(this).data("Zebra_DatePicker") && Nt(this).data("Zebra_DatePicker").destroy();
            var t = new Nt.Zebra_DatePicker(this,e);
            Nt(this).data("Zebra_DatePicker", t)
        })
    }
    ,
    Nt.fn.Zebra_DatePicker.defaults = {}
});
;/**** libs/require.js ****/
var requirejs, require, define;
!function(global, setTimeout) {
    function commentReplace(e, t) {
        return t || ""
    }
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }
    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }
    function each(e, t) {
        var i;
        if (e)
            for (i = 0; i < e.length && (!e[i] || !t(e[i], i, e)); i += 1)
                ;
    }
    function eachReverse(e, t) {
        var i;
        if (e)
            for (i = e.length - 1; i > -1 && (!e[i] || !t(e[i], i, e)); i -= 1)
                ;
    }
    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }
    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }
    function eachProp(e, t) {
        var i;
        for (i in e)
            if (hasProp(e, i) && t(e[i], i))
                break
    }
    function mixin(e, t, i, r) {
        return t && eachProp(t, function(t, n) {
            !i && hasProp(e, n) || (!r || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[n] = t : (e[n] || (e[n] = {}),
            mixin(e[n], t, i, r)))
        }),
        e
    }
    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function defaultOnError(e) {
        throw e
    }
    function getGlobal(e) {
        if (!e)
            return e;
        var t = global;
        return each(e.split("."), function(e) {
            t = t[e]
        }),
        t
    }
    function makeError(e, t, i, r) {
        var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return n.requireType = e,
        n.requireModules = r,
        i && (n.originalError = i),
        n
    }
    function newContext(e) {
        function t(e, t, i) {
            var r, n, o, a, s, u, c, d, p, f, l = t && t.split("/"), h = E.map, m = h && h["*"];
            if (e && (u = (e = e.split("/")).length - 1,
            E.nodeIdCompat && jsSuffixRegExp.test(e[u]) && (e[u] = e[u].replace(jsSuffixRegExp, "")),
            "." === e[0].charAt(0) && l && (e = l.slice(0, l.length - 1).concat(e)),
            function(e) {
                var t, i;
                for (t = 0; t < e.length; t++)
                    if ("." === (i = e[t]))
                        e.splice(t, 1),
                        t -= 1;
                    else if (".." === i) {
                        if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1])
                            continue;
                        t > 0 && (e.splice(t - 1, 2),
                        t -= 2)
                    }
            }(e),
            e = e.join("/")),
            i && h && (l || m)) {
                n = e.split("/");
                e: for (o = n.length; o > 0; o -= 1) {
                    if (s = n.slice(0, o).join("/"),
                    l)
                        for (a = l.length; a > 0; a -= 1)
                            if ((r = getOwn(h, l.slice(0, a).join("/"))) && (r = getOwn(r, s))) {
                                c = r,
                                d = o;
                                break e
                            }
                    !p && m && getOwn(m, s) && (p = getOwn(m, s),
                    f = o)
                }
                !c && p && (c = p,
                d = f),
                c && (n.splice(0, d, c),
                e = n.join("/"))
            }
            return getOwn(E.pkgs, e) || e
        }
        function i(e) {
            isBrowser && each(scripts(), function(t) {
                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName)
                    return t.parentNode.removeChild(t),
                    !0
            })
        }
        function r(e) {
            var t = getOwn(E.paths, e);
            if (t && isArray(t) && t.length > 1)
                return t.shift(),
                x.require.undef(e),
                x.makeRequire(null, {
                    skipMap: !0
                })([e]),
                !0
        }
        function n(e) {
            var t, i = e ? e.indexOf("!") : -1;
            return i > -1 && (t = e.substring(0, i),
            e = e.substring(i + 1, e.length)),
            [t, e]
        }
        function o(e, i, r, o) {
            var a, s, u, c, d = null, p = i ? i.name : null, f = e, l = !0, h = "";
            return e || (l = !1,
            e = "_@r" + (P += 1)),
            d = (c = n(e))[0],
            e = c[1],
            d && (d = t(d, p, o),
            s = getOwn(M, d)),
            e && (d ? h = r ? e : s && s.normalize ? s.normalize(e, function(e) {
                return t(e, p, o)
            }) : -1 === e.indexOf("!") ? t(e, p, o) : e : (d = (c = n(h = t(e, p, o)))[0],
            h = c[1],
            r = !0,
            a = x.nameToUrl(h))),
            {
                prefix: d,
                name: h,
                parentMap: i,
                unnormalized: !!(u = !d || s || r ? "" : "_unnormalized" + (R += 1)),
                url: a,
                originalName: f,
                isDefine: l,
                id: (d ? d + "!" + h : h) + u
            }
        }
        function a(e) {
            var t = e.id
              , i = getOwn(w, t);
            return i || (i = w[t] = new x.Module(e)),
            i
        }
        function s(e, t, i) {
            var r = e.id
              , n = getOwn(w, r);
            !hasProp(M, r) || n && !n.defineEmitComplete ? (n = a(e)).error && "error" === t ? i(n.error) : n.on(t, i) : "defined" === t && i(M[r])
        }
        function u(e, t) {
            var i = e.requireModules
              , r = !1;
            t ? t(e) : (each(i, function(t) {
                var i = getOwn(w, t);
                i && (i.error = e,
                i.events.error && (r = !0,
                i.emit("error", e)))
            }),
            r || req.onError(e))
        }
        function c() {
            globalDefQueue.length && (each(globalDefQueue, function(e) {
                var t = e[0];
                "string" == typeof t && (x.defQueueMap[t] = !0),
                k.push(e)
            }),
            globalDefQueue = [])
        }
        function d(e) {
            delete w[e],
            delete y[e]
        }
        function p() {
            var e, t, n = 1e3 * E.waitSeconds, o = n && x.startTime + n < (new Date).getTime(), a = [], s = [], c = !1, d = !0;
            if (!g) {
                if (g = !0,
                eachProp(y, function(e) {
                    var n = e.map
                      , u = n.id;
                    if (e.enabled && (n.isDefine || s.push(e),
                    !e.error))
                        if (!e.inited && o)
                            r(u) ? (t = !0,
                            c = !0) : (a.push(u),
                            i(u));
                        else if (!e.inited && e.fetched && n.isDefine && (c = !0,
                        !n.prefix))
                            return d = !1
                }),
                o && a.length)
                    return (e = makeError("timeout", "Load timeout for modules: " + a, null, a)).contextName = x.contextName,
                    u(e);
                d && each(s, function(e) {
                    !function e(t, i, r) {
                        var n = t.map.id;
                        t.error ? t.emit("error", t.error) : (i[n] = !0,
                        each(t.depMaps, function(n, o) {
                            var a = n.id
                              , s = getOwn(w, a);
                            !s || t.depMatched[o] || r[a] || (getOwn(i, a) ? (t.defineDep(o, M[a]),
                            t.check()) : e(s, i, r))
                        }),
                        r[n] = !0)
                    }(e, {}, {})
                }),
                o && !t || !c || !isBrowser && !isWebWorker || q || (q = setTimeout(function() {
                    q = 0,
                    p()
                }, 50)),
                g = !1
            }
        }
        function f(e) {
            hasProp(M, e[0]) || a(o(e[0], null, !0)).init(e[1], e[2])
        }
        function l(e, t, i, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
        }
        function h(e) {
            var t = e.currentTarget || e.srcElement;
            return l(t, x.onScriptLoad, "load", "onreadystatechange"),
            l(t, x.onScriptError, "error"),
            {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }
        function m() {
            var e;
            for (c(); k.length; ) {
                if (null === (e = k.shift())[0])
                    return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                f(e)
            }
            x.defQueueMap = {}
        }
        var g, v, x, b, q, E = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        }, w = {}, y = {}, S = {}, k = [], M = {}, O = {}, j = {}, P = 1, R = 1;
        return b = {
            require: function(e) {
                return e.require ? e.require : e.require = x.makeRequire(e.map)
            },
            exports: function(e) {
                if (e.usingExports = !0,
                e.map.isDefine)
                    return e.exports ? M[e.map.id] = e.exports : e.exports = M[e.map.id] = {}
            },
            module: function(e) {
                return e.module ? e.module : e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(E.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        },
        (v = function(e) {
            this.events = getOwn(S, e.id) || {},
            this.map = e,
            this.shim = getOwn(E.shim, e.id),
            this.depExports = [],
            this.depMaps = [],
            this.depMatched = [],
            this.pluginMaps = {},
            this.depCount = 0
        }
        ).prototype = {
            init: function(e, t, i, r) {
                r = r || {},
                this.inited || (this.factory = t,
                i ? this.on("error", i) : this.events.error && (i = bind(this, function(e) {
                    this.emit("error", e)
                })),
                this.depMaps = e && e.slice(0),
                this.errback = i,
                this.inited = !0,
                this.ignore = r.ignore,
                r.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0,
                this.depCount -= 1,
                this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0,
                    x.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? void x.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                O[e] || (O[e] = !0,
                x.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, i = this.map.id, r = this.depExports, n = this.exports, o = this.factory;
                    if (this.inited) {
                        if (this.error)
                            this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0,
                            this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)
                                        try {
                                            n = x.execCb(i, o, r, n)
                                        } catch (t) {
                                            e = t
                                        }
                                    else
                                        n = x.execCb(i, o, r, n);
                                    if (this.map.isDefine && void 0 === n && ((t = this.module) ? n = t.exports : this.usingExports && (n = this.exports)),
                                    e)
                                        return e.requireMap = this.map,
                                        e.requireModules = this.map.isDefine ? [this.map.id] : null,
                                        e.requireType = this.map.isDefine ? "define" : "require",
                                        u(this.error = e)
                                } else
                                    n = o;
                                if (this.exports = n,
                                this.map.isDefine && !this.ignore && (M[i] = n,
                                req.onResourceLoad)) {
                                    var a = [];
                                    each(this.depMaps, function(e) {
                                        a.push(e.normalizedMap || e)
                                    }),
                                    req.onResourceLoad(x, this.map, a)
                                }
                                d(i),
                                this.defined = !0
                            }
                            this.defining = !1,
                            this.defined && !this.defineEmitted && (this.defineEmitted = !0,
                            this.emit("defined", this.exports),
                            this.defineEmitComplete = !0)
                        }
                    } else
                        hasProp(x.defQueueMap, i) || this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map
                  , i = e.id
                  , r = o(e.prefix);
                this.depMaps.push(r),
                s(r, "defined", bind(this, function(r) {
                    var n, c, p, f = getOwn(j, this.map.id), l = this.map.name, h = this.map.parentMap ? this.map.parentMap.name : null, m = x.makeRequire(e.parentMap, {
                        enableBuildCallback: !0
                    });
                    return this.map.unnormalized ? (r.normalize && (l = r.normalize(l, function(e) {
                        return t(e, h, !0)
                    }) || ""),
                    s(c = o(e.prefix + "!" + l, this.map.parentMap, !0), "defined", bind(this, function(e) {
                        this.map.normalizedMap = c,
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })),
                    void ((p = getOwn(w, c.id)) && (this.depMaps.push(c),
                    this.events.error && p.on("error", bind(this, function(e) {
                        this.emit("error", e)
                    })),
                    p.enable()))) : f ? (this.map.url = x.nameToUrl(f),
                    void this.load()) : ((n = bind(this, function(e) {
                        this.init([], function() {
                            return e
                        }, null, {
                            enabled: !0
                        })
                    })).error = bind(this, function(e) {
                        this.inited = !0,
                        this.error = e,
                        e.requireModules = [i],
                        eachProp(w, function(e) {
                            0 === e.map.id.indexOf(i + "_unnormalized") && d(e.map.id)
                        }),
                        u(e)
                    }),
                    n.fromText = bind(this, function(t, r) {
                        var s = e.name
                          , c = o(s)
                          , d = useInteractive;
                        r && (t = r),
                        d && (useInteractive = !1),
                        a(c),
                        hasProp(E.config, i) && (E.config[s] = E.config[i]);
                        try {
                            req.exec(t)
                        } catch (e) {
                            return u(makeError("fromtexteval", "fromText eval for " + i + " failed: " + e, e, [i]))
                        }
                        d && (useInteractive = !0),
                        this.depMaps.push(c),
                        x.completeLoad(s),
                        m([s], n)
                    }),
                    void r.load(e.name, m, n, E))
                })),
                x.enable(r, this),
                this.pluginMaps[r.id] = r
            },
            enable: function() {
                y[this.map.id] = this,
                this.enabled = !0,
                this.enabling = !0,
                each(this.depMaps, bind(this, function(e, t) {
                    var i, r, n;
                    if ("string" == typeof e) {
                        if (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap),
                        this.depMaps[t] = e,
                        n = getOwn(b, e.id))
                            return void (this.depExports[t] = n(this));
                        this.depCount += 1,
                        s(e, "defined", bind(this, function(e) {
                            this.undefed || (this.defineDep(t, e),
                            this.check())
                        })),
                        this.errback ? s(e, "error", bind(this, this.errback)) : this.events.error && s(e, "error", bind(this, function(e) {
                            this.emit("error", e)
                        }))
                    }
                    i = e.id,
                    r = w[i],
                    hasProp(b, i) || !r || r.enabled || x.enable(e, this)
                })),
                eachProp(this.pluginMaps, bind(this, function(e) {
                    var t = getOwn(w, e.id);
                    t && !t.enabled && x.enable(e, this)
                })),
                this.enabling = !1,
                this.check()
            },
            on: function(e, t) {
                var i = this.events[e];
                i || (i = this.events[e] = []),
                i.push(t)
            },
            emit: function(e, t) {
                each(this.events[e], function(e) {
                    e(t)
                }),
                "error" === e && delete this.events[e]
            }
        },
        (x = {
            config: E,
            contextName: e,
            registry: w,
            defined: M,
            urlFetched: O,
            defQueue: k,
            defQueueMap: {},
            Module: v,
            makeModuleMap: o,
            nextTick: req.nextTick,
            onError: u,
            configure: function(e) {
                if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"),
                "string" == typeof e.urlArgs) {
                    var t = e.urlArgs;
                    e.urlArgs = function(e, i) {
                        return (-1 === i.indexOf("?") ? "?" : "&") + t
                    }
                }
                var i = E.shim
                  , r = {
                    paths: !0,
                    bundles: !0,
                    config: !0,
                    map: !0
                };
                eachProp(e, function(e, t) {
                    r[t] ? (E[t] || (E[t] = {}),
                    mixin(E[t], e, !0, !0)) : E[t] = e
                }),
                e.bundles && eachProp(e.bundles, function(e, t) {
                    each(e, function(e) {
                        e !== t && (j[e] = t)
                    })
                }),
                e.shim && (eachProp(e.shim, function(e, t) {
                    isArray(e) && (e = {
                        deps: e
                    }),
                    !e.exports && !e.init || e.exportsFn || (e.exportsFn = x.makeShimExports(e)),
                    i[t] = e
                }),
                E.shim = i),
                e.packages && each(e.packages, function(e) {
                    var t;
                    t = (e = "string" == typeof e ? {
                        name: e
                    } : e).name,
                    e.location && (E.paths[t] = e.location),
                    E.pkgs[t] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }),
                eachProp(w, function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = o(t, null, !0))
                }),
                (e.deps || e.callback) && x.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                return function() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)),
                    t || e.exports && getGlobal(e.exports)
                }
            },
            makeRequire: function(r, n) {
                function s(t, i, c) {
                    var d, f;
                    return n.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0),
                    "string" == typeof t ? isFunction(i) ? u(makeError("requireargs", "Invalid require call"), c) : r && hasProp(b, t) ? b[t](w[r.id]) : req.get ? req.get(x, t, r, s) : (d = o(t, r, !1, !0).id,
                    hasProp(M, d) ? M[d] : u(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e + (r ? "" : ". Use require([])")))) : (m(),
                    x.nextTick(function() {
                        m(),
                        (f = a(o(null, r))).skipMap = n.skipMap,
                        f.init(t, i, c, {
                            enabled: !0
                        }),
                        p()
                    }),
                    s)
                }
                return n = n || {},
                mixin(s, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var i, n = e.lastIndexOf("."), o = e.split("/")[0];
                        return -1 !== n && (!("." === o || ".." === o) || n > 1) && (i = e.substring(n, e.length),
                        e = e.substring(0, n)),
                        x.nameToUrl(t(e, r && r.id, !0), i, !0)
                    },
                    defined: function(e) {
                        return hasProp(M, o(e, r, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = o(e, r, !1, !0).id,
                        hasProp(M, e) || hasProp(w, e)
                    }
                }),
                r || (s.undef = function(e) {
                    c();
                    var t = o(e, r, !0)
                      , n = getOwn(w, e);
                    n.undefed = !0,
                    i(e),
                    delete M[e],
                    delete O[t.url],
                    delete S[e],
                    eachReverse(k, function(t, i) {
                        t[0] === e && k.splice(i, 1)
                    }),
                    delete x.defQueueMap[e],
                    n && (n.events.defined && (S[e] = n.events),
                    d(e))
                }
                ),
                s
            },
            enable: function(e) {
                getOwn(w, e.id) && a(e).enable()
            },
            completeLoad: function(e) {
                var t, i, n, o = getOwn(E.shim, e) || {}, a = o.exports;
                for (c(); k.length; ) {
                    if (null === (i = k.shift())[0]) {
                        if (i[0] = e,
                        t)
                            break;
                        t = !0
                    } else
                        i[0] === e && (t = !0);
                    f(i)
                }
                if (x.defQueueMap = {},
                n = getOwn(w, e),
                !t && !hasProp(M, e) && n && !n.inited) {
                    if (!(!E.enforceDefine || a && getGlobal(a)))
                        return r(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
                    f([e, o.deps || [], o.exportsFn])
                }
                p()
            },
            nameToUrl: function(e, t, i) {
                var r, n, o, a, s, u, c = getOwn(E.pkgs, e);
                if (c && (e = c),
                u = getOwn(j, e))
                    return x.nameToUrl(u, t, i);
                if (req.jsExtRegExp.test(e))
                    a = e + (t || "");
                else {
                    for (r = E.paths,
                    o = (n = e.split("/")).length; o > 0; o -= 1)
                        if (s = getOwn(r, n.slice(0, o).join("/"))) {
                            isArray(s) && (s = s[0]),
                            n.splice(0, o, s);
                            break
                        }
                    a = n.join("/"),
                    a = ("/" === (a += t || (/^data\:|^blob\:|\?/.test(a) || i ? "" : ".js")).charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : E.baseUrl) + a
                }
                return E.urlArgs && !/^blob\:/.test(a) ? a + E.urlArgs(e, a) : a
            },
            load: function(e, t) {
                req.load(x, e, t)
            },
            execCb: function(e, t, i, r) {
                return t.apply(r, i)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = h(e);
                    x.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = h(e);
                if (!r(t.id)) {
                    var i = [];
                    return eachProp(w, function(e, r) {
                        0 !== r.indexOf("_@r") && each(e.depMaps, function(e) {
                            if (e.id === t.id)
                                return i.push(r),
                                !0
                        })
                    }),
                    u(makeError("scripterror", 'Script error for "' + t.id + (i.length ? '", needed by: ' + i.join(", ") : '"'), e, [t.id]))
                }
            }
        }).require = x.makeRequire(),
        x
    }
    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
            if ("interactive" === e.readyState)
                return interactiveScript = e
        }),
        interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.3", commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document), isWebWorker = !isBrowser && "undefined" != typeof importScripts, readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(), contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1;
    if (void 0 === define) {
        if (void 0 !== requirejs) {
            if (isFunction(requirejs))
                return;
            cfg = requirejs,
            requirejs = void 0
        }
        void 0 === require || isFunction(require) || (cfg = require,
        require = void 0),
        req = requirejs = function(e, t, i, r) {
            var n, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e,
            isArray(t) ? (e = t,
            t = i,
            i = r) : e = []),
            o && o.context && (a = o.context),
            (n = getOwn(contexts, a)) || (n = contexts[a] = req.s.newContext(a)),
            o && n.configure(o),
            n.require(e, t, i)
        }
        ,
        req.config = function(e) {
            return req(e)
        }
        ,
        req.nextTick = void 0 !== setTimeout ? function(e) {
            setTimeout(e, 4)
        }
        : function(e) {
            e()
        }
        ,
        require || (require = req),
        req.version = version,
        req.jsExtRegExp = /^\/|:|\?|\.js$/,
        req.isBrowser = isBrowser,
        s = req.s = {
            contexts: contexts,
            newContext: newContext
        },
        req({}),
        each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }),
        isBrowser && (head = s.head = document.getElementsByTagName("head")[0],
        baseElement = document.getElementsByTagName("base")[0],
        baseElement && (head = s.head = baseElement.parentNode)),
        req.onError = defaultOnError,
        req.createNode = function(e, t, i) {
            var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return r.type = e.scriptType || "text/javascript",
            r.charset = "utf-8",
            r.async = !0,
            r
        }
        ,
        req.load = function(e, t, i) {
            var r, n = e && e.config || {};
            if (isBrowser)
                return (r = req.createNode(n, t, i)).setAttribute("data-requirecontext", e.contextName),
                r.setAttribute("data-requiremodule", t),
                !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1),
                r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0,
                r.attachEvent("onreadystatechange", e.onScriptLoad)),
                r.src = i,
                n.onNodeCreated && n.onNodeCreated(r, n, t, i),
                currentlyAddingScript = r,
                baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r),
                currentlyAddingScript = null,
                r;
            if (isWebWorker)
                try {
                    setTimeout(function() {}, 0),
                    importScripts(i),
                    e.completeLoad(t)
                } catch (r) {
                    e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + i, r, [t]))
                }
        }
        ,
        isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
            if (head || (head = e.parentNode),
            dataMain = e.getAttribute("data-main"))
                return mainScript = dataMain,
                cfg.baseUrl || -1 !== mainScript.indexOf("!") || (src = mainScript.split("/"),
                mainScript = src.pop(),
                subPath = src.length ? src.join("/") + "/" : "./",
                cfg.baseUrl = subPath),
                mainScript = mainScript.replace(jsSuffixRegExp, ""),
                req.jsExtRegExp.test(mainScript) && (mainScript = dataMain),
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript],
                !0
        }),
        define = function(e, t, i) {
            var r, n;
            "string" != typeof e && (i = t,
            t = e,
            e = null),
            isArray(t) || (i = t,
            t = null),
            !t && isFunction(i) && (t = [],
            i.length && (i.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, i) {
                t.push(i)
            }),
            t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t))),
            useInteractive && ((r = currentlyAddingScript || getInteractiveScript()) && (e || (e = r.getAttribute("data-requiremodule")),
            n = contexts[r.getAttribute("data-requirecontext")])),
            n ? (n.defQueue.push([e, t, i]),
            n.defQueueMap[e] = !0) : globalDefQueue.push([e, t, i])
        }
        ,
        define.amd = {
            jQuery: !0
        },
        req.exec = function(text) {
            return eval(text)
        }
        ,
        req(cfg)
    }
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout);

;/**** game/Modernizr.js ****/
window.Modernizr = function(e, t, n) {
    function r(e) {
        h.cssText = e
    }
    function o(e, t) {
        return typeof e === t
    }
    function i(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function a(e, t) {
        for (var r in e) {
            var o = e[r];
            if (!i(o, "-") && h[o] !== n)
                return "pfx" != t || o
        }
        return !1
    }
    function c(e, t, r) {
        for (var i in e) {
            var a = t[e[i]];
            if (a !== n)
                return !1 === r ? e[i] : o(a, "function") ? a.bind(r || t) : a
        }
        return !1
    }
    function l(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1)
          , i = (e + " " + g.join(r + " ") + r).split(" ");
        return o(t, "string") || o(t, "undefined") ? a(i, t) : c(i = (e + " " + y.join(r + " ") + r).split(" "), t, n)
    }
    var s, u, f = {}, d = t.documentElement, p = "modernizr", m = t.createElement(p), h = m.style, v = "Webkit Moz O ms", g = v.split(" "), y = v.toLowerCase().split(" "), b = {}, E = [], w = E.slice, S = function() {
        var e = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(r, i) {
            i = i || t.createElement(e[r] || "div");
            var a = (r = "on" + r)in i;
            return a || (i.setAttribute || (i = t.createElement("div")),
            i.setAttribute && i.removeAttribute && (i.setAttribute(r, ""),
            a = o(i[r], "function"),
            o(i[r], "undefined") || (i[r] = n),
            i.removeAttribute(r))),
            i = null,
            a
        }
    }(), x = {}.hasOwnProperty;
    for (var j in u = o(x, "undefined") || o(x.call, "undefined") ? function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    }
    : function(e, t) {
        return x.call(e, t)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = w.call(arguments, 1)
          , r = function() {
            if (this instanceof r) {
                var o = function() {};
                o.prototype = t.prototype;
                var i = new o
                  , a = t.apply(i, n.concat(w.call(arguments)));
                return Object(a) === a ? a : i
            }
            return t.apply(e, n.concat(w.call(arguments)))
        };
        return r
    }
    ),
    b.flexbox = function() {
        return l("flexWrap")
    }
    ,
    b.history = function() {
        return !!e.history && !!history.pushState
    }
    ,
    b.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }
    ,
    b.borderimage = function() {
        return l("borderImage")
    }
    ,
    b.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }
    ,
    b.cssanimations = function() {
        return l("animationName")
    }
    ,
    b.localstorage = function() {
        try {
            return localStorage.setItem(p, p),
            localStorage.removeItem(p),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    b.sessionstorage = function() {
        try {
            return sessionStorage.setItem(p, p),
            sessionStorage.removeItem(p),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    b)
        u(b, j) && (s = j.toLowerCase(),
        f[s] = b[j](),
        E.push((f[s] ? "" : "no-") + s));
    return f.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var r in e)
                u(e, r) && f.addTest(r, e[r]);
        else {
            if (e = e.toLowerCase(),
            f[e] !== n)
                return f;
            t = "function" == typeof t ? t() : t,
            d.className += " " + (t ? "" : "no-") + e,
            f[e] = t
        }
        return f
    }
    ,
    r(""),
    m = null,
    function(e, t) {
        function n() {
            var e = m.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function r(e) {
            var t = p[e[f]];
            return t || (t = {},
            d++,
            e[f] = d,
            p[d] = t),
            t
        }
        function o(e, n, o) {
            return n || (n = t),
            c ? n.createElement(e) : (o || (o = r(n)),
            !(i = o.cache[e] ? o.cache[e].cloneNode() : u.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e)).canHaveChildren || s.test(e) || i.tagUrn ? i : o.frag.appendChild(i));
            var i
        }
        function i(e) {
            e || (e = t);
            var i = r(e);
            return m.shivCSS && !a && !i.hasCSS && (i.hasCSS = !!function(e, t) {
                var n = e.createElement("p")
                  , r = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>",
                r.insertBefore(n.lastChild, r.firstChild)
            }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            c || function(e, t) {
                t.cache || (t.cache = {},
                t.createElem = e.createElement,
                t.createFrag = e.createDocumentFragment,
                t.frag = t.createFrag()),
                e.createElement = function(n) {
                    return m.shivMethods ? o(n, e, t) : t.createElem(n)
                }
                ,
                e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(e) {
                    return t.createElem(e),
                    t.frag.createElement(e),
                    'c("' + e + '")'
                }) + ");return n}")(m, t.frag)
            }(e, i),
            e
        }
        var a, c, l = e.html5 || {}, s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, u = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f = "_html5shiv", d = 0, p = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                a = "hidden"in e,
                c = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                a = !0,
                c = !0
            }
        }();
        var m = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== l.shivCSS,
            supportsUnknownElements: c,
            shivMethods: !1 !== l.shivMethods,
            type: "default",
            shivDocument: i,
            createElement: o,
            createDocumentFragment: function(e, o) {
                if (e || (e = t),
                c)
                    return e.createDocumentFragment();
                for (var i = (o = o || r(e)).frag.cloneNode(), a = 0, l = n(), s = l.length; a < s; a++)
                    i.createElement(l[a]);
                return i
            }
        };
        e.html5 = m,
        i(t)
    }(this, t),
    f._version = "2.8.3",
    f._domPrefixes = y,
    f._cssomPrefixes = g,
    f.hasEvent = S,
    f.testProp = function(e) {
        return a([e])
    }
    ,
    f.testAllProps = l,
    f.prefixed = function(e, t, n) {
        return t ? l(e, t, n) : l(e, "pfx")
    }
    ,
    d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + E.join(" "),
    f
}(this, this.document),
function(e, t, n) {
    function r(e) {
        return "[object Function]" == v.call(e)
    }
    function o(e) {
        return "string" == typeof e
    }
    function i() {}
    function a(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function c() {
        var e = g.shift();
        y = 1,
        e ? e.t ? m(function() {
            ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(),
        c()) : y = 0
    }
    function l(e, n, r, o, i, l, s) {
        function u(t) {
            if (!p && a(f.readyState) && (b.r = p = 1,
            !y && c(),
            f.onload = f.onreadystatechange = null,
            t))
                for (var r in "img" != e && m(function() {
                    w.removeChild(f)
                }, 50),
                F[n])
                    F[n].hasOwnProperty(r) && F[n][r].onload()
        }
        s = s || d.errorTimeout;
        var f = t.createElement(e)
          , p = 0
          , v = 0
          , b = {
            t: r,
            s: n,
            e: i,
            a: l,
            x: s
        };
        1 === F[n] && (v = 1,
        F[n] = []),
        "object" == e ? f.data = n : (f.src = n,
        f.type = e),
        f.width = f.height = "0",
        f.onerror = f.onload = f.onreadystatechange = function() {
            u.call(this, v)
        }
        ,
        g.splice(o, 0, b),
        "img" != e && (v || 2 === F[n] ? (w.insertBefore(f, E ? null : h),
        m(u, s)) : F[n].push(f))
    }
    function s(e, t, n, r, i) {
        return y = 0,
        t = t || "j",
        o(e) ? l("c" == t ? x : S, e, t, this.i++, n, r, i) : (g.splice(this.i++, 0, e),
        1 == g.length && c()),
        this
    }
    function u() {
        var e = d;
        return e.loader = {
            load: s,
            i: 0
        },
        e
    }
    var f, d, p = t.documentElement, m = e.setTimeout, h = t.getElementsByTagName("script")[0], v = {}.toString, g = [], y = 0, b = "MozAppearance"in p.style, E = b && !!t.createRange().compareNode, w = E ? p : h.parentNode, S = (p = e.opera && "[object Opera]" == v.call(e.opera),
    p = !!t.attachEvent && !p,
    b ? "object" : p ? "script" : "img"), x = p ? "script" : S, j = Array.isArray || function(e) {
        return "[object Array]" == v.call(e)
    }
    , C = [], F = {}, N = {
        timeout: function(e, t) {
            return t.length && (e.timeout = t[0]),
            e
        }
    };
    (d = function(e) {
        function t(e, t, o, i, a) {
            var c = function(e) {
                e = e.split("!");
                var t, n, r, o = C.length, i = e.pop(), a = e.length;
                for (i = {
                    url: i,
                    origUrl: i,
                    prefixes: e
                },
                n = 0; n < a; n++)
                    r = e[n].split("="),
                    (t = N[r.shift()]) && (i = t(i, r));
                for (n = 0; n < o; n++)
                    i = C[n](i);
                return i
            }(e)
              , l = c.autoCallback;
            c.url.split(".").pop().split("?").shift(),
            c.bypass || (t && (t = r(t) ? t : t[e] || t[i] || t[e.split("/").pop().split("?")[0]]),
            c.instead ? c.instead(e, t, o, i, a) : (F[c.url] ? c.noexec = !0 : F[c.url] = 1,
            o.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout),
            (r(t) || r(l)) && o.load(function() {
                u(),
                t && t(c.origUrl, a, i),
                l && l(c.origUrl, a, i),
                F[c.url] = 2
            })))
        }
        function a(e, n) {
            function a(e, i) {
                if (e) {
                    if (o(e))
                        i || (f = function() {
                            var e = [].slice.call(arguments);
                            d.apply(this, e),
                            p()
                        }
                        ),
                        t(e, f, n, 0, s);
                    else if (Object(e) === e)
                        for (l in c = function() {
                            var t, n = 0;
                            for (t in e)
                                e.hasOwnProperty(t) && n++;
                            return n
                        }(),
                        e)
                            e.hasOwnProperty(l) && (!i && !--c && (r(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                d.apply(this, e),
                                p()
                            }
                            : f[l] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t),
                                    p()
                                }
                            }(d[l])),
                            t(e[l], f, n, l, s))
                } else
                    !i && p()
            }
            var c, l, s = !!e.test, u = e.load || e.both, f = e.callback || i, d = f, p = e.complete || i;
            a(s ? e.yep : e.nope, !!u),
            u && a(u)
        }
        var c, l, s = this.yepnope.loader;
        if (o(e))
            t(e, 0, s, 0);
        else if (j(e))
            for (c = 0; c < e.length; c++)
                o(l = e[c]) ? t(l, 0, s, 0) : j(l) ? d(l) : Object(l) === l && a(l, s);
        else
            Object(e) === e && a(e, s)
    }
    ).addPrefix = function(e, t) {
        N[e] = t
    }
    ,
    d.addFilter = function(e) {
        C.push(e)
    }
    ,
    d.errorTimeout = 1e4,
    null == t.readyState && t.addEventListener && (t.readyState = "loading",
    t.addEventListener("DOMContentLoaded", f = function() {
        t.removeEventListener("DOMContentLoaded", f, 0),
        t.readyState = "complete"
    }
    , 0)),
    e.yepnope = u(),
    e.yepnope.executeStack = c,
    e.yepnope.injectJs = function(e, n, r, o, l, s) {
        var u, f, p = t.createElement("script");
        o = o || d.errorTimeout;
        for (f in p.src = e,
        r)
            p.setAttribute(f, r[f]);
        n = s ? c : n || i,
        p.onreadystatechange = p.onload = function() {
            !u && a(p.readyState) && (u = 1,
            n(),
            p.onload = p.onreadystatechange = null)
        }
        ,
        m(function() {
            u || (u = 1,
            n(1))
        }, o),
        l ? p.onload() : h.parentNode.insertBefore(p, h)
    }
    ,
    e.yepnope.injectCss = function(e, n, r, o, a, l) {
        var s;
        o = t.createElement("link"),
        n = l ? c : n || i;
        for (s in o.href = e,
        o.rel = "stylesheet",
        o.type = "text/css",
        r)
            o.setAttribute(s, r[s]);
        a || (h.parentNode.insertBefore(o, h),
        m(n, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
,
Modernizr.addTest("filereader", function() {
    return !!(window.File && window.FileList && window.FileReader)
}),
Modernizr.addTest("json", !!window.JSON && !!JSON.parse),
Modernizr.addTest("performance", !!Modernizr.prefixed("performance", window));

;/**** game/script.js_ ****/
var mx = 0
  , my = 0;
function setImageTitles() {
    $("img").each(function() {
        var e = $(this).attr("alt");
        $(this).attr("title") || "" == e || $(this).attr("title", e)
    })
}
function getTime(e) {
    if (i = e.data("seconds"))
        return i;
    if (!e.html() || 0 == e.html().length)
        return -1;
    if (-1 != e.html().indexOf("<a "))
        return -1;
    for (var t, n, a = e.html().split(":"), o = 1; o < 3; o++)
        "0" == a[o].charAt(0) && (a[o] = a[o].substring(1, a[o].length));
    if (isNaN(a[0])) {
        var l = a[0].split(/[a-z\s]+/i);
        t = parseInt(l[1], 10),
        n = parseInt(l[0], 10)
    } else
        t = parseInt(a[0], 10),
        n = 0;
    var r = parseInt(a[1], 10)
      , i = parseInt(a[2], 10);
    return 3600 * n * 24 + 60 * t * 60 + 60 * r + i
}
function getLocalTimeAsFloat() {
    return (new Date).getTime() / 1e3
}
function startTimer() {
    Timing.resetTickHandlers()
}
function setRes(e, t) {
    game_data.village[e] = t,
    game_data.village[e + "_float"] = t,
    Timing.resetTickHandlers()
}
function changeResStyle(e, t) {
    e.hasClass(t) || e.removeClass("res").removeClass("warn").removeClass("warn_90").addClass(t)
}
function number_format(e, t) {
    var n = e < 0
      , a = Math.abs(e).toString();
    if (a.length <= 3)
        return e;
    var o = [];
    do {
        var l = a.length - 3;
        o.push(a.slice(l, a.length)),
        a = a.substring(0, l)
    } while (a.length > 3);
    for (l in o.reverse(),
    o)
        o.hasOwnProperty(l) && (a += t + o[l]);
    return n ? "-" + a : a
}
function getTimeString(e, t, n) {
    e = Math.floor(e);
    var a = Math.floor(e / 3600);
    return t && (a %= 24),
    n && (a = a.toString().padStart(2, "0")),
    a + ":" + (Math.floor(e / 60) % 60).toString().padStart(2, "0") + ":" + (e % 60).toString().padStart(2, "0")
}
function formatTime(e, t, n) {
    var a = getTimeString(t, n);
    $(e).html(a)
}
function partialReload(e, t) {
    if (!$(".captcha").length) {
        $(document).trigger("partial_reload_start");
        var n = document.location.href.replace(/action=\w*/, "").replace(/#.*$/, "") + "&_partial";
        TribalWars.fetch(n, e, t)
    }
}
function selectAll(e, t, n) {
    for (var a = 0; a < e.length; a++)
        if ("checkbox" == e.elements[a].type && !e.elements[a].disabled) {
            if (void 0 !== n && n != e.elements[a].className)
                continue;
            e.elements[a].checked = t
        }
}
function changeBunches(e) {
    for (var t = 0, n = 0; n < e.length; n++) {
        var a = e.elements[n];
        "select_all" != a.className && (null != a.selectedIndex && (t += parseInt(a.value, 10)))
    }
    $("#selectedBunches_bottom").text(t),
    $("#selectedBunches_top").text(t)
}
function delete_village_group(e, t) {
    var n = [{
        text: _("70d9be9b139893aa6c69b5e77e614311"),
        callback: function() {
            window.location.href = t
        },
        confirm: !0
    }];
    UI.ConfirmationBox(e, n)
}
function insertCoord(e, t, n) {
    var a = t.value.split("|");
    if (2 == a.length) {
        var o = parseInt(a[0], 10)
          , l = parseInt(a[1], 10);
        e[(n = n || "") + "x"].value = o,
        e[n + "y"].value = l;
        var r = $(e).find(".target-input input[type=text]");
        r && r.val(o + "|" + l)
    }
}
function insertUnit(e, t, n) {
    (e = $(e)).is(":disabled") || (t != e.val() || n ? e.val(t) : e.val(""))
}
function insertBBcode(e, t, n) {
    return BBCodes.insert(t, n),
    !1
}
function selectTarget(e, t, n) {
    n = n || "";
    var a = $('form[name="units"], form[name="market"], form[name="secret"], form[name="support"]')[0];
    a[n + "x"].value = e,
    a[n + "y"].value = t,
    $(a[n + "x"]).trigger("coordsUpdated"),
    $("#closelink_village_targets").click(),
    $("div[id$='_cont']").hide()
}
function editGroup(e) {
    var t = window.opener.location.href;
    t = (t = t.replace(/&action=edit_group&edit_group=\d+&h=([a-z0-9]+)/, "")).replace(/&edit_group=\d+/, ""),
    overview = window.opener.document.getElementById("overview"),
    overview && -1 != overview.value.search(/(combined|prod|units|buildings|tech)/) && (window.opener.location.href = encodeURI(t + "&edit_group=" + e)),
    window.close()
}
function escape_id(e) {
    return "#" + e.replace("^#", "").replace("[", "\\[").replace("]", "\\]")
}
function editToggle(e, t) {
    $(escape_id(t)).toggle(),
    $(escape_id(e)).toggle(),
    $(escape_id(t)).find("input").each(function() {
        var e = $(this)
          , t = e.attr("type");
        (void 0 === t || "text" == t) && (e.focus(),
        e.select())
    })
}
function toggle_element(e) {
    "#" !== e.substring(0, 1) && (e = "#" + e),
    $(e).toggle()
}
function unescapeHtml(e) {
    return (e = String(e)).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
}
function renameAttack(e, t, n) {
    var a = $("#" + e).val();
    a.length > 0 && ($("#" + t).html(escapeHtml(a)),
    $("#" + n).val(a))
}
function bb_color_picker_gencaller(e, t) {
    return function() {
        e(t)
    }
}
function bb_color_set_color(e) {
    var t = $("#bb_color_picker_preview")
      , n = $("#bb_color_picker_tx");
    t.css("color", "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")");
    var a = e[0].toString(16)
      , o = e[1].toString(16)
      , l = e[2].toString(16);
    a = a.length < 2 ? "0" + a : a,
    o = o.length < 2 ? "0" + o : o,
    l = l.length < 2 ? "0" + l : l,
    n.val("#" + a + o + l)
}
function bb_color_pick_color(e) {
    for (var t = e.data("rgb"), n = 0; n < 6; n++)
        for (var a = 1; a < 6; a++) {
            var o = $("#bb_color_picker_" + a + n);
            o || alert("bb_color_picker_" + a + n);
            var l = n / 3
              , r = a / 4.5;
            r = Math.pow(r, .5);
            var i = Math.max(0, 255 * l - 255)
              , c = Math.floor(Math.max(0, Math.min(255, t[0] * l * r + 255 * (1 - r) + i)))
              , s = Math.floor(Math.max(0, Math.min(255, t[1] * l * r + 255 * (1 - r) + i)))
              , u = Math.floor(Math.max(0, Math.min(255, t[2] * l * r + 255 * (1 - r) + i)));
            o.css("background-color", "rgb(" + c + "," + s + "," + u + ")"),
            o.data("rgb", [c, s, u]),
            o.unbind("click").click(function() {
                bb_color_picker_gencaller(bb_color_set_color, $(this).data("rgb"))
            })
        }
}
function bb_color_picker_textchange() {
    var e = $("#bb_color_picker_tx")
      , t = $("#bb_color_picker_preview");
    try {
        t.css("color", e.val())
    } catch (e) {}
}
function igm_to_show(e) {
    $.get(e, function(e) {
        var t = $("#igm_to_content");
        t.html(e),
        UI.Draggable(t.parent(), {
            savepos: !1
        })
    }),
    $("#igm_to").css("display", "inline")
}
function igm_to_hide() {
    $("#igm_to").hide()
}
function igm_to_insert_adresses(e) {
    $("#to").val($("#to").val() + e)
}
function igm_to_addresses_clear() {
    $("#to").val("")
}
function xProcess(e, t) {
    e = $("#" + e),
    t = $("#" + t);
    var n, a, o = e.val(), l = t.val();
    if (-1 != o.indexOf("|")) {
        var r = o.split("|");
        return n = parseInt(r[0], 10),
        0 !== r[1].length && (a = parseInt(r[1], 10)),
        e.val(n),
        void t.val(a).focus()
    }
    3 === o.length && 0 === l.length ? t.focus() : o.length > 3 && (n = o.substr(0, 3),
    a = o.substring(3),
    e.val(n),
    t.val(a).focus())
}
function textCounter(e, t, n) {
    e.value.length > n && (e.value = e.value.substring(0, n));
    try {
        document.getElementById(t).innerHTML = "%1/%2".replace(/%2/, n).replace(/%1/, e.value.length)
    } catch (e) {}
}
function selectAllUnits(e) {
    $(".unitsInput").each(function(t, n) {
        var a = $(this).next("a").html();
        insertUnit(n, (a = a.substr(1).substr(0, a.length - 2)) > 0 && e ? a : "", e)
    })
}
function toggle_spoiler(e) {
    var t = e.parentNode.getElementsByTagName("div")[0].getElementsByTagName("span")[0].style.display;
    e.parentNode.getElementsByTagName("div")[0].getElementsByTagName("span")[0].style.display = "none" == t ? "block" : "none"
}
function s(e) {
    if (arguments.length > 1 && "object" == typeof arguments[1] && null != arguments[1])
        return s.apply(s, [arguments[0]].concat(arguments[1]));
    for (var t = 1; t < arguments.length; t++)
        e = e.split("%" + t).join(arguments[t]);
    return e
}
function autoresize_textarea(e, t) {
    var n = $(e);
    if (n.length) {
        t = t || 40;
        var a = n[0].rows;
        n.keydown(function() {
            for (var e = this.value.split("\n"), o = e.length, l = 0; l < e.length; l++)
                e[l].length >= n[0].cols && (o += Math.floor(e[l].length / n[0].cols));
            o += 2,
            (o = Math.min(o, t)) > a && (this.rows = o)
        })
    }
}
function load_into(e, t) {
    void 0 === t && (t = document.body),
    $.ajax({
        url: e,
        success: function(e) {
            e.error ? UI.ErrorMessage(e.error) : $(t).html(e).show()
        }
    })
}
var villageDock = {
    saveLink: !1,
    loadLink: null,
    docked: null,
    bindClose: function() {
        $("#closelink_group_popup").click(function() {
            villageDock.saveDockMode(0)
        })
    },
    saveDockMode: function(e) {
        if (villageDock.saveLink) {
            var t = {
                dock: e
            };
            ajaxSimple(villageDock.saveLink, null, t),
            villageDock.docked = e
        }
    },
    open: function(e) {
        return 0 == villageDock.docked && villageDock.saveDockMode(1),
        UI.AjaxPopup(e, "group_popup", villageDock.loadLink, _("49f8eff5b37c62212f0b7870b07af7bb"), villageDock.callback, null, 320, 380, null, null, ["#open_groups", "#close_groups"]),
        $("#close_groups, #open_groups").toggle(),
        !1
    },
    close: function(e) {
        return 1 == villageDock.docked && villageDock.saveDockMode(0),
        $("#close_groups, #open_groups").toggle(),
        $("#group_popup").toggle(),
        !1
    },
    callback: function(e, t) {
        VillageGroups.villageSelect.handleGroupMenuData(e, t),
        villageDock.saveLink && villageDock.bindClose()
    }
};
function ajaxSimple(e, t, n, a) {
    $.ajax({
        url: e,
        data: n,
        dataType: "html",
        success: function(e) {
            0 == e.length && (e = a),
            $("#" + t).html(e)
        }
    })
}

;/**** game/util.js ****/
function escapeHtml(e, r) {
    return e = (e = String(e)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    r && (e = e.replace(/"/g, "&quot;")),
    e
}

;/**** game/I18N.js ****/
function _(n) {
    return window.lang.hasOwnProperty(n) ? window.lang[n] : n
}

;/**** game/Decorate.js ****/
var Decorate;
!function() {
    "use strict";
    Decorate = {
        FiresEvents: function(n) {
            var o = {};
            n.on = function(n, t) {
                void 0 === o[n] && (o[n] = []),
                o[n].push(t)
            }
            ,
            n.off = function(n) {
                o[n] = []
            }
            ,
            n.trigger = function(n, t) {
                void 0 !== o[n] && o[n].forEach(function(n) {
                    n(t)
                })
            }
        }
    }
}();

;/**** game/UI.js_ ****/
var UI;
!function() {
    "use strict";
    UI = {
        init: function() {
            if ("undefined" != typeof game_data) {
                var e = this;
                this.initUIElements(),
                this.initDialogs(),
                $(".evt-confirm").on("click", UI.getConfirmHandler()),
                $(".error_box").on("click", function() {
                    window.getSelection().toString() || $(this).fadeOut(500, function() {
                        $(this).remove()
                    })
                }),
                this.InitProgressBars(),
                $.widget("ui.autocomplete", $.ui.autocomplete, UI.AutoComplete.extension_targeted_suggestions),
                "undefined" == typeof mobile || mobile || $(".autocomplete").autocomplete({
                    minLength: 2,
                    source: UI.AutoComplete.source,
                    focus: UI.AutoComplete.handleFocus,
                    delay: 0
                }),
                UI.ToolTip("[title]"),
                UI.ToolTip(".tooltip-delayed", {
                    delay: 400
                }),
                window.mobile && $(".mds-tooltip").on("click", function() {
                    return Dialog.show("tooltip", $(this).attr("title")),
                    !1
                }),
                UI.checkForMessages(),
                UI.FormAbandon.init(),
                UI.FormAllowOneSubmission.init(),
                UI.Help.init(),
                UI.initHintToggle(),
                UI.ConfirmationSkipping.supported() && void 0 !== game_data.player.confirmation_skipping_hash && UI.ConfirmationSkipping.init(game_data.player.confirmation_skipping_hash),
                UI.fixupCSRFInUrl(),
                require(["Ig/TribalWars/Modules/UI/FormSubmit"], function(e) {
                    new e
                }),
                game_data.two_factor && !this.two_factor && require(["Ig/TribalWars/Modules/TwoFactor"], function(t) {
                    e.two_factor = new t
                })
            }
        },
        fixupCSRFInUrl: function() {
            $('form[action*="&h="]').each(function() {
                var e = $(this)
                  , t = e.attr("action")
                  , i = t.match(/&h=([a-f0-9]+)/)[1];
                0 === e.find("input[name=h]").length && e.append('<input type="hidden" name="h" value="' + i + '" />'),
                e.attr("action", t.replace(/&h=([a-f0-9]+)/, ""))
            })
        },
        initHintToggle: function() {
            $(".hint-toggle").off("click.hints").on("click.hints", function() {
                var e = $(this);
                e.closest(".info_box").fadeOut(),
                e.closest(".mobileNotification").fadeOut(),
                e.data("setting") ? TribalWars.setSetting(e.data("setting"), 0) : TribalWars.suppressHint(e.data("hint"))
            })
        },
        AutoComplete: {
            url: null,
            source: function(e, t) {
                var i = this.element.data("type");
                -1 !== e.term.indexOf(";") && t([]),
                $.post(UI.AutoComplete.url, {
                    type: i,
                    text: e.term
                }, function(e) {
                    t(e)
                }, "json")
            },
            handleFocus: function(e, t) {
                UI.AutoComplete.highlightMenuItem(t.item.label)
            },
            highlightMenuItem: function(e) {
                var t = $(".ui-autocomplete.ui-menu > li > a");
                $.each(t, function(t, i) {
                    var n = $(i);
                    n.html() == e ? n.addClass("selected") : n.removeClass("selected")
                })
            },
            extension_targeted_suggestions: {
                _renderMenu: function(e, t) {
                    var i = this
                      , n = t[0];
                    if (i.element.data("ignore-single-exact-match") && n.targeted.length + n.common.length === 1 && (n.targeted.length ? n.targeted[0] : n.common[0]).label.toUpperCase() === i.element.val().toUpperCase())
                        return void e.addClass("no-suggestions");
                    if (!n.targeted.length && !n.common.length) {
                        var o = this.element.data("no-suggestions-hint");
                        return o ? void e.append("<li>" + o + "</li>") : void e.addClass("no-suggestions")
                    }
                    e.removeClass("no-suggestions"),
                    n.targeted.length && $.each(n.targeted, function(t, n) {
                        i._renderItemData(e, n)
                    }),
                    n.targeted.length && n.common.length && e.append("<li><hr/></li>"),
                    $.each(n.common, function(t, n) {
                        i._renderItemData(e, n)
                    })
                }
            }
        },
        Throbber: $('<img alt="' + _("8524de963f07201e5c086830d370797f") + '" title="' + _("8524de963f07201e5c086830d370797f") + '" />').attr("src", "/graphic/throbber.gif"),
        initDialogs: function() {
            $(".dialog-opener").off("click.dialog").on("click.dialog", function() {
                var e = $(this)
                  , t = e.data("name")
                  , i = e.data("screen")
                  , n = e.data("ajax")
                  , o = e.data("params");
                return Dialog.fetch(t, i, $.extend({
                    ajax: n
                }, o)),
                !1
            })
        },
        initUIElements: function() {
            $("#premium_points_buy, .premium-buy").off("click").click(function(e) {
                mobile || (Premium.buy(),
                e.preventDefault())
            }),
            Premium.initChecks()
        },
        InitProgressBars: function() {
            $(".progress-bar:not(.progress-bar-alive)").each(function() {
                UI.initProgressBar($(this))
            })
        },
        initProgressBar: function(e) {
            var t = e.children(":first").html()
              , i = (e.data("prefix") || "") + " "
              , n = " " + (e.data("suffix") || "")
              , o = e.find("div");
            "100%" === o[0].style.width && o.addClass("full");
            var a = $("<span>" + (i + t + n).trim() + "</span>").addClass("label").css("width", e.width() + "px");
            UI.onResizeEnd(e, function() {
                a.css("width", e.width() + "px")
            }),
            o.first().append(a),
            e.addClass("progress-bar-alive")
        },
        updateProgressBar: function(e, t, i) {
            var n = t / i * 100
              , o = (e.data("prefix") || "") + " "
              , a = " " + (e.data("suffix") || "")
              , s = e.find("div");
            s.css("width", n + "%"),
            100 == n && s.addClass("full"),
            e.find(".label").html((o + Format.number(t) + " / " + Format.number(i) + a).trim())
        },
        checkForMessages: function() {
            var e = $.cookie("success_message");
            e && UI.SuccessMessage(e.replace(/\+/g, " ")),
            $.removeCookie("success_message")
        },
        Image: function(e, t) {
            var i = {
                src: image_base + e
            };
            return $.extend(i, t),
            $('<img alt="" />').attr(i)
        },
        CommandIcon: function(e, t) {
            var i = $("<span>").attr("data-command-id", t.unit);
            e.class && i.addClass(e.class);
            var n = e.tooltip || "";
            return t.own_command || t.is_shared ? (i.addClass("command_hover_details"),
            i.attr("data-icon-hint", escapeHtml(n, !0)),
            i.attr("data-command-type", t.type),
            Command.initHoverDetails(i)) : (i.addClass("tooltip"),
            i.attr("title", escapeHtml(n, !0))),
            i.append(UI.Image(e.img, {})),
            i
        },
        ToolTip: function(e, t) {
            if (!mobile) {
                $(e).tooltip($.extend({
                    showURL: !1,
                    track: !0,
                    fade: 0,
                    delay: 0,
                    showBody: " :: ",
                    extraClass: "tooltip-style"
                }, t))
            }
        },
        Draggable: function(e, t) {
            var i = {
                savepos: !0,
                cursor: "move",
                handle: $(e).find("div:first"),
                appendTo: "body",
                containment: [0, 60]
            }
              , n = $.extend(i, t);
            $(e).draggable(n),
            n.savepos && $(e).bind("dragstop", function() {
                var t = $(document)
                  , i = $(e).offset().left - t.scrollLeft()
                  , n = $(e).offset().top - t.scrollTop();
                $.cookie("popup_pos_" + $(e).attr("id"), i + "x" + n)
            })
        },
        Sortable: function(e, t) {
            var i = {
                cursor: "move",
                handle: $(e).find("div:first"),
                opacity: .6,
                helper: function(e, t) {
                    return t.children().each(function() {
                        $(this).width($(this).width())
                    }),
                    t
                }
            };
            $(e).sortable($.extend(i, t))
        },
        SlimScroll: function(e, t) {
            var i = $(e);
            t.maxHeight && (i.css({
                height: "",
                "max-height": t.maxHeight
            }),
            t.height = "auto"),
            i.parent(".slimScrollDiv").length > 0 && i.parent().replaceWith(i),
            i.slimScroll(t),
            i.css("height", i.height() - (i.innerHeight() - i.height()))
        },
        ErrorMessage: function(e, t, i, n) {
            return UI.InfoMessage(e, t, "error", i, n)
        },
        SuccessMessage: function(e, t, i, n) {
            return UI.InfoMessage(e, t, "success", i, n)
        },
        InfoMessage: function(e, t, i, n, o) {
            $(".autoHideBox").remove(),
            t = t || 2e3;
            var a = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
            function s(e) {
                e.remove(),
                "function" == typeof o.onRemoved && o.onRemoved()
            }
            n = n || a || $("body"),
            o = o || {},
            !0 === i && (i = "error");
            var r = o.hasOwnProperty("is_html") && o.is_html ? e : "<p>" + e + "</p>";
            $("<div/>", {
                class: i ? "autoHideBox " + i : "autoHideBox",
                click: function() {
                    s($(this))
                },
                html: r
            }).appendTo(n).delay(t).fadeOut("slow", function() {
                s($(this))
            })
        },
        OmgMessage: function(e, t, i, n, o) {
            i = i || "",
            o = o || $("#ds_body");
            var a = e.offset().left - o.offset().left + e.width() / 2
              , s = e.offset().top - o.offset().top
              , r = s + e.height() / 2
              , c = s + e.height() - 5
              , d = $('<div class="omg-message-container">').css({
                top: Math.min(r - 10, c - 20),
                left: a - 150
            }).appendTo(o)
              , l = $('<span class="omg-message ' + i + '"></span>').text(t);
            "object" == typeof n && null !== n && l.css(n),
            l.appendTo(d),
            setTimeout(function() {
                d.remove()
            }, 2e3)
        },
        BanneredRewardMessage: function(e, t) {
            var i = s('<div class="bannered-reward"><div class="bannered-reward-message">' + e + "</div></div>")
              , n = $(i).appendTo("body");
            t = t || 1800,
            setTimeout(function() {
                n.fadeOut(300, function() {
                    n.remove()
                })
            }, t)
        },
        ConfirmationBox: function(e, t, i, n, o, a) {
            var r;
            if (i = i || "confirmation-box",
            n = n || !1,
            o = o || !1,
            a = a && UI.ConfirmationSkipping.supported(),
            $("#fader").remove(),
            a && UI.ConfirmationSkipping.shouldSkip(i))
                return $.each(t, function(e, t) {
                    !0 === t.confirm && (r = t.callback)
                }),
                void r();
            if (0 === $("#" + i).length) {
                !0 !== n && t.push({
                    text: _("ea4788705e6873b424c65e91c2846b19"),
                    callback: function() {},
                    cancel: !0
                });
                var c = o ? "div" : "p";
                $("<div id='fader'><div class='confirmation-box' id='" + i + "' role='dialog' aria-labelledby='confirmation-msg'><div class='confirmation-box-content-pane'><div class='confirmation-box-content'>" + s("<%1 id='confirmation-msg' class='confirmation-msg'>%2</%3>", c, e, c) + (a ? '<div class="skip-container"><label><input type="checkbox" id="confirmation-skip"/>' + _("7019f1ebdfd76051fdae9fc39cd668f4") + "</label></div>" : "") + "<div class='confirmation-buttons'></div></div></div></div></div>").appendTo("body").css("z-index", "14999");
                var d = $("#" + i);
                d.outerWidth() % 2 == 1 && d.css("width", d.outerWidth() + 1 + "px");
                var l = d.find(".confirmation-buttons");
                $("#mNotifyContainer").hide();
                var f = function(e, t) {
                    return function(n) {
                        return $("#fader > .confirmation-box").parent().hide(),
                        $("#mNotifyContainer").show(),
                        $(document).off("keydown.confirmbox"),
                        a && t && $("#confirmation-skip").is(":checked") ? UI.ConfirmationSkipping.setShouldSkip(i, !0, function() {
                            e(n)
                        }) : e(n),
                        !1
                    }
                };
                $(t).each(function(e, t) {
                    var i = $("<button class='btn' aria-label'" + t.text + "'>" + t.text + "</button>").bind("click", f(t.callback, !0 === t.confirm)).appendTo(l);
                    0 === e && i.focus(),
                    !0 === t.confirm && i.addClass("evt-confirm-btn").addClass("btn-confirm-yes"),
                    !0 === t.cancel && (i.addClass("evt-cancel-btn").addClass("btn-confirm-no"),
                    $(document).on("keydown.confirmbox", null, "esc", f(t.callback)))
                });
                var u = d.find(".confirmation-box-content-pane")
                  , m = window.innerHeight;
                if ("ios" === window.game_data.device) {
                    m -= 50
                }
                u.css({
                    "max-height": m - 60 + "px"
                });
                var p = u.find(".confirmation-box-content");
                p.outerHeight() > u.height() && UI.SlimScroll(p, {
                    height: "auto",
                    alwaysVisible: !0
                })
            }
        },
        ConfirmationSkipping: {
            STORAGE_KEY: "confirmation_skipping_preferences",
            STORAGE_HASH_KEY: "confirmation_skipping_preferences_hash",
            preferences: {},
            preferences_hash: "",
            supported: function() {
                return Modernizr.localstorage
            },
            init: function(e) {
                this.loadFromClientStorage(),
                this.preferences_hash !== e && this.fetchPreferences()
            },
            shouldSkip: function(e) {
                return 1 === this.preferences[e]
            },
            setShouldSkip: function(e, t, i) {
                var n = {
                    confirmation_box_id: e,
                    should_skip: t
                }
                  , o = this;
                TribalWars.post("api", {
                    ajaxaction: "skip_confirmation"
                }, n, function(e) {
                    o.updateFromServerData(e.preferences, e.preferences_hash),
                    "function" == typeof i && i()
                })
            },
            fetchPreferences: function() {
                var e = this;
                TribalWars.get("api", {
                    ajax: "skip_confirmation_preferences"
                }, function(t) {
                    e.updateFromServerData(t.preferences, t.preferences_hash)
                })
            },
            updateFromServerData: function(e, t) {
                this.preferences = e,
                this.preferences_hash = t,
                this.updateClientStorage(e, t)
            },
            updateClientStorage: function(e, t) {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(e)),
                localStorage.setItem(this.STORAGE_HASH_KEY, t)
            },
            loadFromClientStorage: function() {
                var e = localStorage.getItem(this.STORAGE_KEY);
                null !== e && "undefined" !== e && (this.preferences = JSON.parse(e),
                this.preferences_hash = localStorage.getItem(this.STORAGE_HASH_KEY))
            }
        },
        getConfirmHandler: function(e) {
            return function(t) {
                t.preventDefault();
                var i = $(t.target);
                i.hasClass("evt-confirm") || (i = i.parents(".evt-confirm"));
                var n = e || i.data("confirm-msg");
                return i.is("input, button") && UI.confirmSubmit(t, n),
                i.is("a") && UI.confirmLink(t, n),
                !1
            }
        },
        confirmLink: function(e, t) {
            UI.addConfirmBox(t, function() {
                var t = $(e.target).attr("href");
                void 0 === t && (t = $(e.target).closest("a").attr("href")),
                window.location = t
            })
        },
        confirmSubmit: function(e, t) {
            var i = $(e.target)
              , n = i.attr("name")
              , o = i.attr("value");
            n && o && ($("#submit-value-container").remove(),
            i.before("<input id='submit-value-container' type='hidden' name='" + n + "' value='" + o + "' />"));
            UI.addConfirmBox(t, function() {
                $(e.target).closest("form").submit()
            })
        },
        addConfirmBox: function(e, t) {
            var i = [{
                text: _("70d9be9b139893aa6c69b5e77e614311"),
                callback: t,
                confirm: !0
            }];
            UI.ConfirmationBox(e, i)
        },
        AjaxPopup: function(e, t, i, n, o, a, s, r, c, d, l) {
            var f = $(".top_bar").height()
              , u = $.extend({
                dataType: "json",
                saveDragPosition: !0,
                container: "#ds_body"
            }, a);
            if (u.reload || 0 === $("#" + t).length) {
                var m = null;
                if (e && (!c || !d)) {
                    m = e.srcElement ? e.srcElement : e.target;
                    var p = $(m).offset();
                    c || (c = p.left),
                    d || (d = p.top + $(m).height() + 1)
                }
                r || (r = "auto"),
                s || (s = "auto");
                var h, g = "#" + t;
                if (void 0 !== l)
                    if (l.length > 0)
                        for (h in l)
                            l.hasOwnProperty(h) && (g = g + ", " + l[h]);
                var v = function(e) {
                    var i = null;
                    if (0 === $("#" + t).length) {
                        i = $("<div>").attr("id", t).addClass("popup_style").css({
                            width: s,
                            position: "fixed"
                        });
                        var a = $("<div>").attr("id", t + "_menu").addClass("popup_menu").html(n + '<a id="closelink_' + t + '" href="#">X</a>')
                          , l = $("<div>").attr("id", t + "_content").addClass("popup_content").css("height", r).css("overflow-y", "auto");
                        i.append(a).append(l),
                        UI.Draggable(i, {
                            savepos: u.saveDragPosition
                        }),
                        i.bind("dragstart", function() {
                            document.onselectstart = function(e) {
                                e.preventDefault()
                            }
                        }),
                        i.bind("dragstop", function() {
                            document.onselectstart = function(e) {
                                $(e.target).trigger("select")
                            }
                        }),
                        $(u.container).append($('<div class="popup_helper"></div>').append(i)),
                        $("#closelink_" + t).click(function(e) {
                            e.preventDefault(),
                            $(g).toggle()
                        })
                    } else
                        i = $("#" + t);
                    if (o ? o.call(this, e, $("#" + t + "_content")) : $("#" + t + "_content").html(e),
                    $.cookie("popup_pos_" + t)) {
                        var m = $.cookie("popup_pos_" + t).split("x");
                        c = parseInt(m[0], 10),
                        d = parseInt(m[1], 10)
                    } else
                        u.saveDragPosition && $.cookie("popup_pos_" + t, c + "x" + d);
                    var p = i.outerHeight()
                      , h = i.outerWidth()
                      , v = $(window).width()
                      , b = $(window).height();
                    d + p > b && (d = b - p),
                    c + h > v && (c = v - h),
                    c < 0 && (c = 0),
                    d < f && (d = f),
                    i.css("top", d).css("left", c);
                    var _ = function(e, t) {
                        var i = $(document).height() - $(e).outerHeight()
                          , n = [0, t, $(document).width() - $(e).outerWidth(), i];
                        e.draggable("option", "containment", n)
                    };
                    _(i, f),
                    $(window).resize(function() {
                        _(i, f)
                    }),
                    i.show(),
                    UI.init()
                };
                "json" === u.dataType ? TribalWars.get(i, {}, v) : "prerendered" === u.dataType ? v(i) : $.ajax({
                    url: i,
                    dataType: u.dataType,
                    success: v
                })
            } else
                $("#" + t).show()
        },
        Notification: {
            SHOW_TIME: 6e3,
            _queue: [],
            _displayed_notifications: 0,
            show: function(e, t, i, n) {
                if (!window.mobile) {
                    var o = $("#side-notification-container");
                    if (o.length || (o = $('<div id="side-notification-container"></div>').appendTo("body")),
                    o.position().top > 100 || this._displayed_notifications < 1) {
                        var a = $('<div class="side-notification"><div class="img-container"><img src="' + e + '" alt="" /></div><div class="content"><strong>' + t + "</strong><p>" + i + "</p></div></div>");
                        a.on("click", n).prependTo(o).addClass("side-notification-visible"),
                        this._displayed_notifications++;
                        var s = this;
                        setTimeout(function() {
                            s.removeNotification(a)
                        }, this.SHOW_TIME)
                    } else
                        this._queue.push({
                            img: e,
                            title: t,
                            content: i,
                            callback: n
                        })
                }
            },
            showNext: function() {
                if (!(this._queue.length < 1)) {
                    var e = this._queue.shift();
                    this.show(e.img, e.title, e.content, e.callback)
                }
            },
            removeNotification: function(e) {
                var t = this
                  , i = function() {
                    e.remove(),
                    t._displayed_notifications--,
                    t.showNext()
                };
                Modernizr.cssanimations ? (e.removeClass("side-notification-visible").addClass("side-notification-hide"),
                e.on("transitionend webkitTransitionEnd", function(t) {
                    e.off(t).addClass("side-notification-shrink").on("transitionend webkitTransitionEnd", function() {
                        i()
                    })
                })) : i()
            },
            debug: function() {
                this.show("/user_image.php?award=award1&level=4", "Achievement unlocked!", "Demolisher (Gold - Level 4) - Destroy 10.000 building levels using catapults")
            }
        },
        FormAbandon: {
            active: !1,
            verify: function(e) {
                if (UI.FormAbandon.active)
                    return e.stopImmediatePropagation(),
                    _("a8658061929ca8148ce4bf95935e72c6")
            },
            init: function() {
                if ("steam" !== window.game_data.device) {
                    $(window).on("beforeunload", UI.FormAbandon.verify);
                    var e = $(".confirm_abandonment");
                    e.change(function() {
                        UI.FormAbandon.active = !0
                    }),
                    e.submit(function() {
                        UI.FormAbandon.active = !1
                    })
                }
            }
        },
        FormAllowOneSubmission: {
            init: function() {
                $(".submit-once").each(function() {
                    UI.FormAllowOneSubmission.registerForm(this)
                })
            },
            registerForm: function(e) {
                var t = $(e);
                t.submit(function(e) {
                    t.data("lock-submission") ? e.preventDefault() : UI.FormAllowOneSubmission.lockForm(t)
                }),
                t.removeClass("submit-once")
            },
            lockForm: function(e) {
                e.data("lock-submission", 1),
                e.find("input[type=submit]").addClass("btn-disabled")
            }
        },
        onResizeEnd: function(e, t) {
            UI.Resize.end_handlers.push(t),
            $(e).on("resize.end", function(e) {
                clearTimeout(UI.Resize.timeout),
                UI.Resize.timeout = setTimeout(function() {
                    UI.Resize.callEndHandlers(e)
                }, 50)
            })
        },
        Resize: {
            timeout: null,
            end_handlers: [],
            callEndHandlers: function(e) {
                for (var t = 0; t < this.end_handlers.length; t++)
                    this.end_handlers[t](e)
            }
        },
        Help: {
            init: function() {
                $(".help_link").off("click").click(function(e) {
                    e.preventDefault();
                    var t = $(this);
                    UI.Help.open(t.data("topic"), t.data("section"))
                })
            },
            open: function(e, t) {
                Dialog.fetch("ingame_help", "api", {
                    ajax: "help",
                    topic: e,
                    section: t
                })
            }
        }
    }
}(),
$(document).ready(function() {
    UI.init()
});

;/**** game/BBCodes.js_ ****/
var BBCodes = {
    target: null,
    ajax_unit_url: null,
    ajax_building_url: null,
    init: function(t) {
        BBCodes.target = $(t.target),
        BBCodes.ajax_unit_url = t.ajax_unit_url,
        BBCodes.ajax_building_url = t.ajax_building_url
    },
    insert: function(t, o, e) {
        var r = BBCodes.target[0];
        if (r.focus(),
        void 0 !== document.selection) {
            var i = document.selection.createRange()
              , a = i.text;
            i.text = t + a + o,
            i = document.selection.createRange(),
            a.length > 0 || 1 == e ? i.moveStart("character", t.length + a.length + o.length) : i.move("character", -o.length),
            i.select()
        } else if (void 0 !== r.selectionStart) {
            var c = r.selectionStart
              , l = r.selectionEnd
              , n = (a = r.value.substring(c, l),
            r.scrollTop);
            r.value = r.value.substr(0, c) + t + a + o + r.value.substr(l),
            a.length > 0 || !0 === e ? c + t.length + a.length + o.length : c + t.length,
            r.setSelectionRange(c + t.length, l + t.length),
            r.scrollTop = n
        }
        return !1
    },
    colorPickerToggle: function(t) {
        var o = $("#bb_color_picker_tx").first();
        if (o.unbind("keyup").keyup(function() {
            var t = $("#bb_color_picker_tx").first()
              , o = $("#bb_color_picker_preview").first();
            try {
                o.css("color", t.val())
            } catch (t) {}
        }),
        t)
            return BBCodes.insert("[color=" + $(o).val() + "]", "[/color]"),
            $("#bb_color_picker").toggle(),
            !1;
        var e = [$("#bb_color_picker_c0").first(), $("#bb_color_picker_c1").first(), $("#bb_color_picker_c2").first(), $("#bb_color_picker_c3").first(), $("#bb_color_picker_c4").first(), $("#bb_color_picker_c5").first()];
        e[0].data("rgb", [255, 0, 0]),
        e[1].data("rgb", [255, 255, 0]),
        e[2].data("rgb", [0, 255, 0]),
        e[3].data("rgb", [0, 255, 255]),
        e[4].data("rgb", [0, 0, 255]),
        e[5].data("rgb", [255, 0, 255]);
        for (var r = 0; r <= 5; r++)
            e[r].unbind("click").click(function() {
                BBCodes.colorPickColor($(this).data("rgb"))
            });
        return BBCodes.colorPickColor(e[0].data("rgb")),
        $("#bb_color_picker").toggle(),
        !1
    },
    colorPickColor: function(t) {
        for (var o = 0; o < 6; o++)
            for (var e = 1; e < 6; e++) {
                var r = $("#bb_color_picker_" + e + o).first();
                r || alert("bb_color_picker_" + e + o);
                var i = o / 3
                  , a = e / 4.5;
                a = Math.pow(a, .5);
                var c = Math.max(0, 255 * i - 255)
                  , l = Math.floor(Math.max(0, Math.min(255, t[0] * i * a + 255 * (1 - a) + c)))
                  , n = Math.floor(Math.max(0, Math.min(255, t[1] * i * a + 255 * (1 - a) + c)))
                  , b = Math.floor(Math.max(0, Math.min(255, t[2] * i * a + 255 * (1 - a) + c)));
                r.css("background-color", "rgb(" + l + "," + n + "," + b + ")"),
                r.data("rgb", [l, n, b]),
                r.unbind("click").click(function() {
                    BBCodes.colorSetColor($(this).data("rgb"))
                })
            }
    },
    colorSetColor: function(t) {
        var o = $("#bb_color_picker_preview").first()
          , e = $("#bb_color_picker_tx").first();
        o.css("color", "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")");
        var r = t[0].toString(16)
          , i = t[1].toString(16)
          , a = t[2].toString(16);
        r = r.length < 2 ? "0" + r : r,
        i = i.length < 2 ? "0" + i : i,
        a = a.length < 2 ? "0" + a : a,
        e.val("#" + r + i + a)
    },
    placePopups: function() {
        var t = $("#bb_button_size > span")
          , o = $("#bb_button_color > span")
          , e = $("#bb_button_tagging > span")
          , r = $("#bb_sizes")
          , i = $("#bb_color_picker")
          , a = $("#bb_tagging")
          , c = $(document).width();
        if (c || (c = document.body.clientWidth),
        t.length > 0 && r.offset({
            left: t.offset().left,
            top: t.offset().top + t.height() + 2
        }),
        o.length > 0) {
            var l = o.offset().left + o.width() - i.width();
            /MSIE 7/.test(navigator.userAgent) && (l -= 200),
            i.offset({
                left: l,
                top: o.offset().top + o.height() + 2
            })
        }
        e.length > 0 && a.offset({
            left: e.offset().left,
            top: e.offset().top + e.height() + 2
        })
    },
    closePopups: function() {
        $("#bb_sizes").hide(),
        $("#bb_color_picker").hide(),
        $("#bb_tagging").hide()
    },
    setTarget: function(t) {
        BBCodes.target = t,
        $("#bb_popup_container").children().hide();
        var o = $("#bb_popup_container").detach();
        $(".bb_popup_container").remove(),
        t.before(o)
    },
    ajaxPopupToggle: function(t, o, e, r) {
        var i = $("#" + o);
        i && i.is(":visible") ? i.hide() : UI.AjaxPopup(t, o, e, r, null, {
            container: "#bb_popup_container"
        }, 200)
    },
    unitPickerToggle: function(t) {
        BBCodes.ajaxPopupToggle(t, "unit_picker", BBCodes.ajax_unit_url, _("e5771a362d88a71a657bfcd21ca54b3f"))
    },
    buildingPickerToggle: function(t) {
        BBCodes.ajaxPopupToggle(t, "building_picker", BBCodes.ajax_building_url, _("9fdd5aad7ea528df6738692b788cee0a"))
    },
    emojiToggle: function(t) {
        $("#bb_popup_container").off("click.emoji").on("click.emoji", ".emoji-selectable", function() {
            var t = $(this).data("title");
            t || (t = $(this).attr("title")),
            BBCodes.insert(":" + t + ":", "")
        }),
        BBCodes.ajaxPopupToggle(t, "emoji_picker", TribalWars.buildURL("GET", "api", {
            ajax: "emoji",
            bbcode: 1
        }), _("68305e25f5788db069d06c54924af087"))
    }
};

;/**** game/ScriptAPI.js_ ****/
var ScriptAPI = {
    active: [],
    url: "",
    version: null,
    register: function(r, t, i, e) {
        var a = function(r, t) {
            if (!t)
                throw "ScriptAPI: parameter ('" + r + "') requires a value."
        };
        if ("" !== ScriptAPI.url) {
            a("scriptname", r),
            a("author", i),
            a("email", e),
            "8.20" != t && "8.21" != t || (t = !0),
            "object" != typeof t || -1 == $.inArray(8.2, t) && -1 == $.inArray(8.21, t) || (t = !0),
            t = !0 === t;
            var c = {
                scriptname: r,
                version: 0,
                author: i,
                email: e,
                broken: !1
            }
              , n = !1;
            for (var p in ScriptAPI.active)
                ScriptAPI.active[p].scriptname == r && (n = !0,
                c = ScriptAPI.active[p]);
            if (n || (ScriptAPI.active.push(c),
            ScriptAPI.save(c)),
            !c.broken && !t)
                throw c.broken = !0,
                ScriptAPI.notify(c),
                "Version incompatible!"
        }
    },
    notify: function(r) {
        var t = $("<li>").text(escapeHtml(r.scriptname) + " ");
        t.append($("<a>").attr("href", escapeHtml("mailto:" + r.email)).text("(" + _("91401f053501b716b4a695b048c9b827") + " " + escapeHtml(r.author) + ")")),
        $("#script_list").append(t),
        $("#script_warning").show()
    },
    save: function(r) {
        $.post(ScriptAPI.url, r)
    }
};

;/**** game/Premium.js_ ****/
var Premium;
!function() {
    "use strict";
    Premium = {
        PromptBeforeSpendPreference: {
            UNSPECIFIED: null,
            NO: 0,
            YES: 1
        },
        initChecks: function() {
            $(".evt-check-pp").on("click", function() {
                var e = $(this);
                if (e.attr("disabled"))
                    return !1;
                var a = e.data("feature")
                  , t = e.data("cost");
                return e.addClass("btn-disabled"),
                Premium.check(a, t, function() {
                    document.location = "#" != e.attr("href") ? e.attr("href") : e.data("url")
                }),
                !1
            }).removeClass("evt-check-pp")
        },
        check: function(e, a, t, i, r, n) {
            if (a) {
                void 0 === i && (i = 0),
                void 0 === r && (r = 0),
                n = $.extend({
                    createContentHtml: function(e) {
                        return e
                    }
                }, n);
                var o = {
                    feature: e,
                    costs: a,
                    days: i,
                    save: r,
                    ajax: "check_premium"
                };
                TribalWars.get("api", o, function(a) {
                    a.insufficient_pp ? Dialog.show("pp", a.insufficient_pp) : a.prompt ? Premium.openConfirmationPrompt({
                        feature: e,
                        content: n.createContentHtml(a.prompt),
                        okayCallback: t,
                        always_prompt: a.always_prompt,
                        prompt_preference: a.prompt_preference,
                        id: n.id || null
                    }) : t()
                })
            } else
                t()
        },
        openConfirmationPrompt: function(e) {
            var a = e.content;
            e.always_prompt || (a += "<br/></br>",
            a += this.createPromptPreferenceHtml(e.prompt_preference));
            var t = [{
                text: _("70d9be9b139893aa6c69b5e77e614311"),
                callback: function() {
                    (function() {
                        var a = $("#pp_prompt");
                        if (!a.length)
                            return !1;
                        var t = e.prompt_preference
                          , i = a.is(":checked") ? Premium.PromptBeforeSpendPreference.NO : Premium.PromptBeforeSpendPreference.YES;
                        return i !== t && (Premium.setPromptPreference(e.feature, i, e.okayCallback),
                        !0)
                    }
                    )() || e.okayCallback()
                },
                confirm: !0
            }];
            UI.ConfirmationBox(a, t, e.id, !1, !0)
        },
        createPromptPreferenceHtml: function(e) {
            return '<label><input type="checkbox" id="pp_prompt" ' + (e === Premium.PromptBeforeSpendPreference.UNSPECIFIED ? 'checked="checked"' : "") + "/>" + _("7019f1ebdfd76051fdae9fc39cd668f4") + "</label>"
        },
        setPromptPreference: function(e, a, t) {
            var i = {
                ajaxaction: "set_premium_prompt",
                feature: e,
                preference: a
            };
            TribalWars.post("api", i, {}, function() {
                t()
            })
        },
        buy: function(e) {
            if (mobile)
                TribalWars.redirect("premium", {
                    mode: "premium"
                });
            else {
                Dialog.close();
                var a = $.extend({
                    ajax: "buy_premium"
                }, e);
                TribalWars.get("api", a, function(e) {
                    $(document.body).append(e.popup),
                    window.innerHeight < 800 && $("#payment_box").css("top", "calc(50% - (" + $("#pay_frame").height() + "px / 2))")
                }),
                $(window).off("message", Premium.handleMessage).on("message", Premium.handleMessage)
            }
        },
        showEasyPay: function(e) {
            if (!$("#pay_frame").length) {
                var a, t = $('<iframe id="pay_frame" style="position: absolute; width: 244px; height: 530px" frameborder="0" src="' + e + '" />'), i = $("#main_layout").offset().left, r = $("#topContainer").height() + 10;
                a = i > 244 ? i - 244 : $("#premium_points_buy").offset().left - 122,
                t.css({
                    zIndex: 1e3,
                    top: r + "px",
                    left: a + "px"
                }),
                t.on("load", function() {
                    TribalWars.hideLoadingIndicator()
                }),
                TribalWars.showLoadingIndicator(),
                $("body").append(t),
                $(window).off("message", Premium.handleMessage).on("message", Premium.handleMessage)
            }
        },
        handleMessage: function(e) {
            "close_easypay_window" === e.originalEvent.data ? Premium.closeBuy() : "open_payment_window" === e.originalEvent.data ? (Premium.closeBuy(),
            Premium.buy({
                force: "full"
            })) : "payment_window_transaction_success" === e.originalEvent.data && (Premium.closeBuy(),
            Premium.showTransactionCompleteMessage()),
            "CloseCashshop" === e.originalEvent.data && Premium.closeBuy();
            var a = Premium.extractEventData(e.originalEvent.data);
            a && "Shop/close" === a.name && Premium.closeBuy()
        },
        extractEventData: function(e) {
            var a = new RegExp("^([^/]+)/([^:]+)(?::(.+))?$");
            if ("string" != typeof e)
                return !1;
            var t = e.match(a);
            if (null === t || 4 !== t.length)
                return !1;
            var i = {};
            if (void 0 !== t[3])
                try {
                    i = JSON.parse(t[3])
                } catch (e) {
                    return !1
                }
            return {
                context: t[1],
                method: t[2],
                name: t[1] + "/" + t[2],
                data: i
            }
        },
        showTransactionCompleteMessage: function() {
            var e = '<div style="max-width: 450px" class="popup_box_header"><h2>' + _("6d8c88550a438c916fae3407e6bc18aa") + "</h2>";
            e += '<img src="' + window.image_base + 'premium/coinbag_large.png" class="float_right" style="margin: 0 5px" />',
            e += "<p>" + _("2bbb8a9cd3ad3b17611172920f72c532") + "</p>",
            e += "<p>" + _("8e37a4c59b3c791bac050f7e7b58973b") + "</p>",
            e += "</div>",
            Dialog.show("payment_success", e)
        },
        showFeatureTrialNotification: function() {
            Dialog.fetch("feature_trial", "premium", {
                ajax: "trial_dialog"
            })
        },
        closeBuy: function() {
            $("#fader,#payment_box").remove(),
            TribalWars.track("pay_window_close", [])
        },
        features: {
            init: function() {
                $(".premium-offer").on("change", this.updatePrices),
                this.updatePrices();
                var e = $(".premium-sub");
                e.find("button").on("click", function() {
                    var e = $(this).attr("name");
                    $(this).parents("form").data("intent", e)
                }),
                e.on("submit", function() {
                    var e = $(this);
                    if (!e.data("confirmed")) {
                        var a = e.data("cost")
                          , t = e.data("feature")
                          , i = e.data("days")
                          , r = "gift" === e.data("intent") ? 1 : 0
                          , n = e.find("input[name=intent]");
                        n.length || (n = $('<input type="hidden" name="intent" />').appendTo(e)),
                        n.val(e.data("intent"));
                        return Premium.check(t, a, function() {
                            e.data("confirmed", !0),
                            e.submit()
                        }, i, r),
                        !1
                    }
                })
            },
            updatePrices: function() {
                $(".premium-offer, input[name=offer]").each(function() {
                    var e = $(this).find("option:selected")
                      , a = $(this).parents("form");
                    e.length || (e = $(this));
                    var t = e.data("feature")
                      , i = e.data("costs")
                      , r = e.data("days");
                    a.data("cost", i),
                    a.data("days", r),
                    a.data("feature", t),
                    $("#premium-cost-" + t).text(s(_("b200717de770e245641700fd15a1beaa"), i))
                })
            },
            toggleAutoExtend: function(e) {
                TribalWars.post("premium", {
                    ajaxaction: "auto_renew",
                    feature: e.value,
                    active: e.checked ? 1 : 0
                }, null, function(e) {
                    var a;
                    a = e.active ? _("bb9e8c9104f8b9774720ead1131053b6") : _("152f3ed78e900e646348d6118807acd7"),
                    e.extended_now ? (a += _("bfcb588125f265c36b977867e7bc845c"),
                    document.location.reload(),
                    $.cookie("success_message", a)) : UI.SuccessMessage(a)
                })
            }
        },
        directBuy: {
            init: function() {
                $(".premium_direct_buy").click(function() {
                    return Premium.directBuy.beginBuy($(this).data("feature")),
                    !1
                })
            },
            beginGift: function(e, a) {
                Dialog.fetch("sub_gift", "premium", {
                    ajax: "direct_gift_dialog",
                    feature: a,
                    player_id: e
                }, function() {
                    Premium.features.init(),
                    $(".direct-buy-form").on("submit", Premium.directBuy.finishBuy)
                }, {
                    class_name: "noborder"
                })
            },
            beginBuy: function(e) {
                "ios" !== window.game_data.device ? Dialog.fetch("sub_buy", "premium", {
                    ajax: "direct_buy_dialog",
                    feature: e
                }, function() {
                    Premium.features.init(),
                    $(".direct-buy-form").on("submit", Premium.directBuy.finishBuy)
                }, {
                    class_name: "noborder"
                }) : TribalWars.redirect("premium")
            },
            finishBuy: function() {
                var e = $(".direct-buy-form");
                if (!e.data("confirmed"))
                    return !1;
                var a = e.serializeArray();
                return TribalWars.post("premium", {
                    ajaxaction: "accept"
                }, a, function(e) {
                    e.hasOwnProperty("feature_was_activated") ? window.location.reload() : e.hasOwnProperty("redirect") ? window.location = e.redirect : (UI.SuccessMessage(e.success),
                    Dialog.close())
                }),
                !1
            }
        },
        showBlocked: function() {
            Dialog.fetch("blocked_points", "premium", {
                ajax: "blocked_points"
            })
        },
        showSalePromotion: function() {
            Dialog.fetch("premium_sale", "premium", {
                ajax: "sale_dialog"
            })
        }
    }
}(),
$(function() {
    Premium.directBuy.init()
});

;/**** game/Quests.js_ ****/
var Quests;
!function() {
    "use strict";
    Quests = {
        quests: {},
        open_quest_id: null,
        handlers: {
            quest_completed: []
        },
        setQuestData: function(e, t) {
            if ("app" !== window.game_data.device) {
                var s = !1;
                $.each(e, function(e, t) {
                    Quests.hasQuest(e) ? Quests.getQuest(e).updateData(t) : "completed" !== t.state && Quests.addQuest(t),
                    0 == t.opened && (s = !0)
                }),
                !0 === t && $.each(Quests.quests, function(e, t) {
                    Quests.quests.hasOwnProperty(e) || t.destroy()
                }),
                game_data.quest.use_questlines && Questlines.setNewLabel(s),
                "undefined" != typeof QuestArrows && QuestArrows.init()
            }
        },
        getAll: function() {
            return Quests.quests
        },
        hasQuest: function(e) {
            return Quests.quests.hasOwnProperty(e)
        },
        getQuest: function(e) {
            return Quests.quests[e]
        },
        addQuest: function(e) {
            Quests.quests[e.id] = new Quest(e)
        },
        removeQuest: function(e) {
            delete Quests.quests[e]
        },
        handleButton: function(e) {
            return "guest_register" === e && GuestRegister.showDialog(),
            !1
        },
        onQuestCompleted: function(e) {
            this.handlers.quest_completed.push(e)
        },
        notifyQuestCompleted: function(e) {
            this.handlers.quest_completed.forEach(function(t) {
                t(e)
            })
        }
    }
}();

;/**** game/Quest.js_ ****/
var Quest;
!function() {
    "use strict";
    Quest = function(e) {
        var s, t, i = this;
        this.init = function(e) {
            i.updateData(e),
            s.on("click", i.open)
        }
        ,
        this.getData = function() {
            return t
        }
        ,
        this.updateData = function(e) {
            "completed" !== e.state ? (t = e,
            i.render(e),
            game_data.quest.use_questlines && e.finished && !e.opened && !game_data.admin ? mobile || Questlines.showDialog(e.id, "main-tab") : !e.finished || game_data.admin || e.opened || 0 !== $("#popup_box_quest").length || i.open()) : i.destroy()
        }
        ,
        this.render = function() {
            var e = !1;
            s || (s = $('<div class="quest" id="quest_' + t.id + '"><div class="quest_progress"></div><div class="quest_new ' + game_data.market + '">' + _("d6d01ab10ebf52d8f696db8a2f3097c3") + "</div></div>"),
            e = !0),
            t.opened ? s.addClass("opened") : s.removeClass("opened"),
            t.finished ? s.addClass("finished") : s.removeClass("finished"),
            s.css("background-image", "url(" + window.image_base + t.icon + ")"),
            i.renderProgress(),
            e && (s.appendTo("#questlog"),
            s.attr("title", t.title),
            UI.ToolTip(s, {
                delay: 400
            })),
            t.hide && s.hide()
        }
        ,
        this.renderProgress = function() {
            var e = i.numberOfSetBits(t.goals_completed)
              , n = i.numberOfSetBits(t.goals_total);
            e && s.find(".quest_progress").css("width", Math.min(100, e / n * 100) + "%")
        }
        ,
        this.open = function() {
            window.mobile || s.addClass("spin"),
            t.opened = !0,
            i.render(),
            s.addClass("opened"),
            TribalWars.get("api", {
                ajax: "quest_show",
                quest: t.id
            }, function(e) {
                s.removeClass("spin"),
                mobile ? ($("#quest-container").html(e).show(),
                $("#quest-close").show(),
                $("#mobileQuests").show(),
                document.location.replace("#mobileQuests")) : (Dialog.show("quest", e),
                UI.init(),
                Quests.open_quest_id = t.id),
                $(".quest-objective-cut").length && $(".quest-objective-full").hide(),
                $(".quest-objective-expand").on("click", function(e) {
                    e.preventDefault(),
                    $(".quest-objective-cut").hide(),
                    $(".quest-objective-full").show()
                }),
                "undefined" != typeof QuestArrows && QuestArrows.init()
            }, function() {
                s.removeClass("spin")
            })
        }
        ,
        this.complete = function(e, s) {
            void 0 === e && (e = !1),
            Dialog.close();
            var n = t.id;
            TribalWars.post("api", {
                ajaxaction: "quest_complete",
                quest: n,
                skip: e
            }, null, function(e) {
                if (e.reward ? UI.SuccessMessage(_("b6d49ae1eaf9aada42e9a800556eca8a") + "<br /><br />" + e.reward, 3e3) : UI.SuccessMessage(_("0bfb250526c8e5118112b06f9dedb0a1"), 3e3),
                i.destroy(),
                mobile)
                    $("#quest-container").hide();
                else {
                    var t = e.detailed;
                    $.each(t, function(e, s) {
                        s.hasOwnProperty("resources") && $.each(s.resources, function(e, s) {
                            TribalWars.showResourceIncrease(e, s)
                        })
                    })
                }
                Quests.notifyQuestCompleted(n),
                null != s && setTimeout(function() {
                    s(e)
                }, 2500)
            })
        }
        ,
        this.getArrowState = function() {
            var e = "active";
            return t.finished ? e = "finished" : t.opened || (e = "new"),
            5 === t.quest_system && (e += "_nqs"),
            e
        }
        ,
        this.skip = function() {
            this.complete(!0, null)
        }
        ,
        this.destroy = function() {
            s.fadeOut(500, function() {
                s.remove(),
                Quests.removeQuest(t.id),
                "undefined" != typeof QuestArrows && QuestArrows.init()
            }),
            Quests.open_quest_id === t.id && $("#popup_box_quest").length > 0 && Dialog.close()
        }
        ,
        this.getGoalsCompleted = function() {
            return t.goals_completed
        }
        ,
        this.numberOfSetBits = function(e) {
            return 16843009 * ((e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135) >> 24
        }
        ,
        this.init(e)
    }
}();

;/**** game/QuestArrows.js ****/
var QuestArrows = {
    firstInit: !0,
    arrows: {
        1000: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_wood_1",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1005: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_stone_1",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_iron_1",
                    remember: "click",
                    goal: 2
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant2",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1010: {
            new: {
                arrow: "left",
                target: "#quest_1010"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: {
                    arrow: "down",
                    target: "#main_buildlink_wood_1",
                    remember: "click"
                },
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            },
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_wood_2",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_stone_2",
                    remember: "click",
                    goal: 2
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant2",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1015: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_main_2",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1020: {
            new: {
                arrow: "left",
                target: "#quest_1020"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_stone_1",
                    remember: "click"
                }, {
                    arrow: "down",
                    target: "#main_buildlink_iron_1",
                    remember: "click"
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            },
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_wood_3",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_stone_3",
                    remember: "click",
                    goal: 2
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant2",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1025: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_main_3",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_barracks_1",
                    remember: "click",
                    goal: 2
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant2",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1030: {
            new: {
                arrow: "left",
                target: "#quest_1030"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_wood_2",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_stone_2",
                    remember: "click",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            },
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_farm_2",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_storage_2",
                    remember: "click",
                    goal: 2
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant2",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1040: {
            new: {
                arrow: "left",
                target: "#quest_1040"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: {
                    arrow: "down",
                    target: "#main_buildlink_main_2",
                    remember: "click"
                },
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1050: {
            new: {
                arrow: "left",
                target: "#quest_1050"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_main_3",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_barracks_1",
                    remember: "click",
                    goal: 2
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1060: {
            new: {
                arrow: "left",
                target: "#quest_1060"
            },
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_wood_3",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }, {
                    arrow: "down",
                    target: "#main_buildlink_stone_3",
                    remember: "click",
                    goal: 2
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant2",
                    goal: 2
                }, {
                    arrow: "down",
                    target: "#main_buildlink_barracks_2",
                    remember: "click",
                    goal: 4
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1070: {
            active: {
                main: {
                    arrow: "down",
                    target: "#main_buildlink_storage_2",
                    remember: "click"
                }
            }
        },
        1090: {
            active: {
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_iron_2",
                    remember: "click"
                }, {
                    arrow: "down",
                    target: "#main_buildlink_storage_3",
                    remember: "click"
                }]
            }
        },
        1115: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                default: [{
                    arrow: "down",
                    target: '[data-tab="reward-tab"]',
                    remember: "click",
                    remember_id: "rewardtab",
                    zindex: 14e3
                }, {
                    arrow: "down",
                    target: ".reward-system-claim-button",
                    remember: "click",
                    remember_id: "reward",
                    zindex: 14e3
                }]
            }
        },
        1140: {
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_barracks, .visual-building-barracks1"
                },
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                },
                barracks: [{
                    arrow: "left",
                    target: "#spear_0",
                    remember: "keyup"
                }, {
                    arrow: "right",
                    target: ".btn-recruit",
                    remember: "click",
                    remember_id: "recruit"
                }]
            }
        },
        1150: {
            active: {
                barracks: [{
                    arrow: "left",
                    target: "#spear_0",
                    remember: "keyup",
                    goal: 1
                }, {
                    arrow: "right",
                    target: ".btn-recruit",
                    remember: "click",
                    remember_id: "recruit",
                    goal: 1
                }, {
                    arrow: "left",
                    target: "#quest_1150",
                    remember: "click"
                }],
                main: {
                    arrow: "down",
                    target: "#main_buildlink_barracks_3",
                    remember: "click"
                }
            }
        },
        1200: {
            new_nqs: {
                default: [{
                    arrow: "left",
                    target: "#new_quest",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#questline-header-2",
                    remember: "click",
                    zindex: 14e3
                }, {
                    arrow: "left",
                    target: '.quest-link[data-quest-id="1200"]',
                    zindex: 14e3
                }]
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_barracks_2",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1205: {
            new_nqs: {
                default: [{
                    arrow: "left",
                    target: "#new_quest",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#questline-header-2",
                    remember: "click",
                    zindex: 14e3
                }, {
                    arrow: "left",
                    target: '.quest-link[data-quest-id="1205"]',
                    zindex: 14e3
                }]
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-barracks1"
                },
                barracks: [{
                    arrow: "left",
                    target: "#spear_0",
                    remember: "keyup"
                }, {
                    arrow: "right",
                    target: ".btn-recruit",
                    remember: "click",
                    remember_id: "recruit"
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1215: {
            new_nqs: {
                default: [{
                    arrow: "left",
                    target: "#new_quest",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#questline-header-2",
                    remember: "click",
                    zindex: 14e3
                }, {
                    arrow: "left",
                    target: '.quest-link[data-quest-id="1215"]',
                    zindex: 14e3
                }]
            },
            active_nqs: {
                default: {
                    arrow: "up",
                    target: "#header_menu_link_map"
                },
                map: [{
                    arrow: "left",
                    target: "#units_entry_all_spear",
                    remember: "click",
                    zindex: 14e3
                }, {
                    arrow: "left",
                    target: "#units_entry_all_sword",
                    remember: "click",
                    zindex: 14e3
                }, {
                    arrow: "up",
                    target: "#target_attack",
                    remember: "click",
                    zindex: 14e3
                }, {
                    arrow: "up",
                    target: "#troop_confirm_submit",
                    zindex: 14e3
                }]
            }
        },
        1255: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                arrow: "up",
                target: "#manager_icon_farm",
                remember: "click"
            }
        },
        1300: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-market1"
                },
                market: [{
                    arrow: "down",
                    target: "#main_buildlink_barracks_2",
                    remember: "click"
                }, {
                    arrow: "right",
                    target: "#id_own_offer",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#res_sell_amount",
                    remember: "keyup"
                }, {
                    arrow: "left",
                    target: "#res_sell_selection",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#res_buy_amount",
                    remember: "keyup"
                }, {
                    arrow: "left",
                    target: "#res_buy_selection",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#submit_offer",
                    remember: "click"
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        1810: {
            active: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: {
                    arrow: "down",
                    target: "#main_buildlink_statue_1",
                    remember: "click"
                }
            }
        },
        1820: {
            active: {
                default: {
                    arrow: "up",
                    target: "#header_menu_link_map"
                },
                map: [{
                    arrow: "left",
                    target: "#units_entry_all_spear",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#units_entry_all_sword",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#target_attack",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#troop_confirm_submit"
                }]
            }
        },
        1821: {
            active: {
                default: {
                    arrow: "up",
                    target: "#header_menu_link_map"
                },
                map: [{
                    arrow: "left",
                    target: "#units_entry_all_spear",
                    remember: "click"
                }, {
                    arrow: "left",
                    target: "#units_entry_all_sword",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#target_attack",
                    remember: "click"
                }, {
                    arrow: "up",
                    target: "#troop_confirm_submit"
                }]
            }
        },
        1900: {
            active: {
                arrow: "up",
                target: "quest1900",
                remember: "click"
            }
        },
        7000: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-main1"
                },
                main: [{
                    arrow: "down",
                    target: "#main_buildlink_statue_1",
                    remember: "click",
                    goal: 1
                }, {
                    arrow: "up",
                    target: ".btn-instant-free",
                    remember: "click",
                    remember_id: "instant",
                    goal: 1
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village"
                }
            }
        },
        7005: {
            new_nqs: {
                arrow: "left",
                target: "#new_quest"
            },
            active_nqs: {
                overview: {
                    arrow: "down",
                    target: "img.p_main, .visual-building-statue1",
                    remember: "click",
                    remember_target: 'area[data-building="statue"]',
                    remember_id: "statue"
                },
                statue: [{
                    arrow: "right",
                    target: ".btn-recruit",
                    remember: "click",
                    remember_id: "recruit"
                }],
                default: {
                    arrow: "left",
                    target: "#menu_row2_village",
                    remember: "click"
                }
            }
        }
    },
    sizes: {
        left: [67, 71],
        right: [67, 71],
        down: [70, 68],
        up: [70, 68]
    },
    custom_priority: {
        1115: 2,
        1020: 1
    },
    init: function() {
        if (!window.mobile && !TribalWars.getSetting("disable_quest_arrows")) {
            var e = Quests.getAll()
              , r = !1;
            $(".quest_arrow").remove(),
            $(".quest-arrow-target").removeClass("quest-arrow-target");
            var t = Object.keys(e);
            t.sort(function(e, r) {
                return QuestArrows.custom_priority.hasOwnProperty(e) && QuestArrows.custom_priority.hasOwnProperty(r) ? QuestArrows.custom_priority[r] - QuestArrows.custom_priority[e] : 0
            }),
            t.forEach(function(t) {
                var a = e[t].getArrowState();
                QuestArrows.arrows.hasOwnProperty(t) && QuestArrows.arrows[t].hasOwnProperty(a) && !r && (r = QuestArrows.showArrow(t, QuestArrows.arrows[t][a]))
            }),
            this.firstInit && (this.firstInit = !1,
            UI.onResizeEnd(window, this.onResize))
        }
    },
    onResize: function() {
        $(".quest_arrow").length && QuestArrows.init()
    },
    getTarget: function(e) {
        return this.callbacks.hasOwnProperty(e) ? $target = this.callbacks[e]() : $target = $(e),
        $target
    },
    checkArrowEligibility: function(e, r) {
        if (r.hasOwnProperty("remember")) {
            var t = r.hasOwnProperty("remember_id") ? r.remember_id : QuestArrows.getTarget(r.target).attr("id");
            if (!t)
                return !1;
            if (QuestArrows.isRemembered(e, t))
                return !1
        }
        return !(r.hasOwnProperty("goal") && r.goal & Quests.getQuest(e).getGoalsCompleted())
    },
    showArrow: function(e, r) {
        if (!r.hasOwnProperty("arrow")) {
            var t = r.hasOwnProperty(game_data.screen) ? r[game_data.screen] : r.default;
            if (!t)
                return !1;
            if (t.hasOwnProperty("arrow"))
                r = t;
            else {
                var a = !1;
                if ($.each(t, function(t, i) {
                    if (QuestArrows.checkArrowEligibility(e, i))
                        return r = i,
                        a = !0,
                        !1
                }),
                !a)
                    return !1
            }
        }
        var i, n, o, m, l, w = r.arrow, s = this.sizes[w];
        if (!(i = this.callbacks.hasOwnProperty(r.target) ? this.callbacks[r.target]() : $(r.target)) || !i.length || i.is(":hidden"))
            return !1;
        if (r.hasOwnProperty("remember") && QuestArrows.isRemembered(e, r.hasOwnProperty("remember_id") ? r.remember_id : QuestArrows.getTarget(r.target).attr("id")))
            return !1;
        i.data("arrow") && (w = i.data("arrow"));
        var _ = $('<img class="quest_arrow quest_arrow_' + w + '" src="/graphic/quests/ar_' + w + '.png" alt="" />');
        _.css({
            width: s[0] + "px",
            height: s[1] + "px"
        }),
        r.hasOwnProperty("zindex") && _.css({
            "z-index": r.zindex
        }),
        $("body").append(_);
        var g = i.offset();
        n = g.left,
        o = g.top - window.scrollY,
        m = i.outerWidth(),
        l = i.outerHeight();
        var u = !1;
        if (i.parents().each(function() {
            u = u || "fixed" === $(this).css("position")
        }),
        this.positionArrow(_, n, o, m, l, w, i.css("z-index") + 1, u),
        i.addClass("quest-arrow-target"),
        r.hasOwnProperty("remember")) {
            var c = i;
            r.hasOwnProperty("remember_target") && ((c = $(r.remember_target)) && c.length && !c.is(":hidden") || (c = i)),
            c.on(r.remember, function() {
                var t = r.hasOwnProperty("remember_id") ? r.remember_id : i.attr("id");
                QuestArrows.remember(e, t),
                QuestArrows.init()
            })
        }
        return !0
    },
    remember: function(e, r) {
        window.sessionStorage.setItem(game_data.world + "_questprogress_" + e + "_" + r, !0)
    },
    isRemembered: function(e, r) {
        return null !== window.sessionStorage.getItem(game_data.world + "_questprogress_" + e + "_" + r)
    },
    positionArrow: function(e, r, t, a, i, n, o, m) {
        var l = this.sizes[n][0]
          , w = this.sizes[n][1]
          , s = 0
          , _ = 0;
        switch (n) {
        case "left":
            s = r + a + 5,
            _ = t + i / 2 - w / 2;
            break;
        case "right":
            s = r - l - 5,
            _ = t + i / 2 - w / 2;
            break;
        case "down":
            s = r + a / 2 - l / 2,
            _ = t - w - 5;
            break;
        case "up":
            s = r + a / 2 - l / 2,
            _ = t + i / 2 + 5
        }
        e.css({
            left: s + "px",
            top: _ + "px",
            "z-index": o,
            position: m ? "fixed" : "absolute"
        })
    },
    callbacks: {
        quest1900: function() {
            return !("am_farm" === game_data.screen || parseInt(game_data.player.points) >= 500) && $("#manager_icon_farm")
        }
    }
};

;/**** game/VillageContext.js_ ****/
var VillageContext = {
    claim_enabled: !1,
    igm_enabled: !1,
    send_troops_enabled: !1,
    send_attack_disabled: !1,
    _button_order: {
        pa_own: ["info", "recruit", "map", "overview", "", "market", "place"],
        pa_other: ["info", "claim", "map", "", "fav", "market", "place"],
        free_own: ["info", "", "map", "overview", "", "market", "place"],
        free_other: ["info", "", "map", "", "", "market", "place"]
    },
    _circlePos: [[-12, -12], [-12, -49], [20, -30], [20, 6], [-11, 25], [-44, 6], [-44, -30], [20, -30], [20, 6]],
    _requires_extra: ["claim", "fav"],
    _buttons_created: [],
    _open: !1,
    _urls: {},
    _current_anchor: null,
    _titles: {
        info: _("f653a99b8cea306156b098ddba529800"),
        recruit: _("e1de43dd18d19451febfc1584ab33767"),
        map: _("b1522965c99b35ddbeacc9e7d61f4aea"),
        overview: _("abc78b929c795754af1ecd600e410ffb"),
        market: _("6354ccce785ae0a81233559b352600a5"),
        place: _("d79cca039b901d8ef0b137cf9f4dfe41"),
        claim: _("d4edb6698d9b8cd53de81c1453f4de09"),
        unclaim: "",
        fav: _("910885435dbc44a22b68cb45c79e4a7e"),
        unfav: _("6566f1e3ba3eca29eeeccd5eb86e93d9")
    },
    init: function(e) {
        "undefined" != typeof mobile && mobile || (e ? e.find(".village_anchor:not(.contexted)").each(VillageContext.enableContext) : $(".village_anchor:not(.contexted)").each(VillageContext.enableContext))
    },
    enableContext: function() {
        var e = $('<a class="ctx" href="#"></a>');
        $(this).append(e).addClass("contexted"),
        e.click(VillageContext.toggleForVillage)
    },
    toggleForVillage: function() {
        var e = $(this).parent()
          , a = e.data("id")
          , t = e.data("player");
        return VillageContext.beginShow($(this), a, t),
        !1
    },
    hide: function() {
        VillageContext._current_anchor && (VillageContext._current_anchor.removeClass("spin"),
        VillageContext._current_anchor = null),
        $(".village_ctx").hide(),
        $("body").unbind("click", VillageContext.hide),
        VillageContext._open = !1
    },
    beginShow: function(e, a, t) {
        var r;
        this._open && this.hide(),
        VillageContext._current_anchor = e;
        var i = this;
        r = premium ? t == game_data.player.id ? this._button_order.pa_own : this._button_order.pa_other : t == game_data.player.id ? this._button_order.free_own : this._button_order.free_other;
        var n = !1;
        $.each(this._requires_extra, function(e, a) {
            (n || -1 != $.inArray(a, r)) && (n = !0)
        });
        var c = e.parent().data("z-index");
        n ? (VillageContext._current_anchor.addClass("spin"),
        TribalWars.get("api", {
            ajax: "village_context",
            id: a
        }, function(e) {
            e.error ? UI.ErrorMessage(e.error) : i.show(a, t, r, e, c)
        })) : (this.show(a, t, r, null, c),
        UI.ToolTip("[title]"))
    },
    show: function(e, a, t, r, i) {
        var n = this
          , c = this._circlePos
          , o = n._current_anchor
          , l = o.offsetParent()
          , s = o.offset()
          , _ = [s.left - l.offset().left + o.width() / 2 - parseInt(l.css("border-left-width")), s.top - l.offset().top + o.height() / 2 - parseInt(l.css("border-top-width"))]
          , d = o.data("offset-x")
          , f = o.data("offset-y");
        d && (_[0] += d),
        f && (_[1] += f),
        $(t).each(function(t, o) {
            if ("" != o && ("market" != o && "place" != o || e != game_data.village.id) && ("claim" !== o || game_data.player.ally && VillageContext.claim_enabled) && (VillageContext.igm_enabled || "msg" !== o) && ("place" != o || VillageContext.send_troops_enabled)) {
                "fav" == o && r.fav && (o = "unfav"),
                "claim" == o && r.claim && (o = "unclaim"),
                "unclaim" == o && (n._titles[o] = r.unclaim_title);
                var s, d = n._titles[o], f = n._urls[o].replace(/__village__/, e).replace(/__owner__/, a).replace(/__source__/, game_data.village.id);
                -1 == $.inArray(o, n._buttons_created) ? (s = $('<a class="village_ctx" id="ctx_' + o + '" title="' + d + '" href=""></a>'),
                n._buttons_created.push(o)) : s = $("#ctx_" + o),
                f.match(/json/) ? n.ajaxRegister(s, o, f) : s.attr("href", f),
                i && s.css("z-index", i),
                s.attr("title", d),
                s.appendTo(l).css("left", _[0] + c[t][0] + "px").css("top", _[1] + c[t][1] + "px").stop().css("opacity", 0).show().fadeTo(120, 1)
            }
        }),
        VillageContext._current_anchor.removeClass("spin"),
        $("body").bind("click", VillageContext.hide),
        this._open = !0
    },
    ajaxRegister: function(e, a, t) {
        e.unbind("click").click(function(e) {
            e.preventDefault();
            var r = (new Date).getTime();
            if (!(this._last && r - this._last < 900))
                return this._last = r,
                $.ajax({
                    url: t,
                    dataType: "json",
                    success: function(e) {
                        VillageContext.ajaxDone(a, e)
                    }
                }),
                !1
        })
    },
    ajaxDone: function(e, a) {
        switch (this.hide(),
        e) {
        case "claim":
        case "unclaim":
            if (!a.code) {
                UI.ErrorMessage(a.error);
                break
            }
            var t;
            a.notice && UI.InfoMessage(a.notice),
            "delete" == a.type ? (UI.SuccessMessage(_("4f922ce9065cf34bed61379b6ff46789")),
            a.id && ($("#reservation_" + a.id).fadeOut(),
            "info_player" == game_data.screen && $("#reservation_" + a.village).hide())) : (UI.SuccessMessage(_("c1144d4424af216a7cf917edaca7e6c6")),
            "info_player" == game_data.screen && ((t = $("#reservation_" + a.village)).attr("src", Format.image_src("map/reserved_player.png")),
            t.attr("title", " :: " + _("51ead50e222e2f4550f2e0d104bb3854")),
            UI.ToolTip(t),
            t.show()));
            break;
        case "fav":
        case "unfav":
            if (!a.code) {
                UI.ErrorMessage(a.error, null, message_container);
                break
            }
            "fav" == e ? UI.SuccessMessage(_("0313820c71668f1d90687f4763d945a2")) : UI.SuccessMessage(_("a4259c24bdcc98ffcd5fb2dad8daa1f2"))
        }
    }
};

;/**** game/Favicon.js ****/
var Favicon = {
    update: function() {
        var e, t = document.createElement("canvas"), n = document.createElement("img"), a = document.getElementById("favicon").cloneNode(!0), i = Number(game_data.player.incomings);
        if ("function" !== (t.getContext,
        !1) && "function" !== (t.fillText,
        !1)) {
            var o = "";
            o = i < 100 ? i.toString() : i < 1e3 ? "99+" : i < 1e4 ? i.toString().substring(0, 1) + "k" : ": O",
            t.getContext && (n.onload = function() {
                if (t.height = t.width = 16,
                e = t.getContext("2d"),
                0 !== i) {
                    var n = 8
                      , d = 2.5
                      , c = 11;
                    1 === o.length ? (n = 12,
                    d = 4.5,
                    c = 12.3) : 2 === o.length && (n = 10,
                    d = 1.5,
                    c = 11),
                    e.drawImage(this, 0, 0),
                    e.font = "bold " + n + 'px "helvetica", sans-serif',
                    e.fillStyle = "#333333",
                    e.fillText(o, d, c),
                    a.href = t.toDataURL("image/png")
                } else
                    a.href = image_base + "favicon.png";
                var l = document.getElementById("favicon");
                l.parentNode.removeChild(l),
                document.head.appendChild(a)
            }
            ,
            n.src = "/graphic/favicon_lit.png")
        }
    }
};
$(function() {
    !document.getElementById("favicon") || "undefined" == typeof game_data || "undefined" != typeof mobile && mobile || 0 === game_data.player.incomings || Favicon.update()
});

;/**** game/WorldSwitch.js ****/
var WorldSwitch = {
    worldsURL: "",
    loaded: !1,
    init: function() {
        $(".evt-world-selection-toggle").click(function() {
            "none" == $("#world_selection_popup").css("display") ? WorldSwitch.show() : WorldSwitch.hide()
        })
    },
    hide: function() {
        $("#world_selection_clicktrap").hide(),
        $("#world_selection_popup").hide()
    },
    show: function() {
        var e = function() {
            $("#world_selection_clicktrap").show(),
            $("#world_selection_popup").show(),
            $("#world_selection_popup").css("left", $("#footer .evt-world-selection-toggle").offset().left - 10 + "px")
        };
        WorldSwitch.loaded ? e() : $.getJSON(WorldSwitch.worldsURL, function(t) {
            $("#servers-list-block").html(t.html),
            e(),
            WorldSwitch.loaded = !0
        })
    },
    submit_login: function(e) {
        return $server_select_list = $("#server_select_list"),
        $server_select_list.attr("action", $server_select_list.attr("action") + "&" + e),
        $server_select_list.submit(),
        !1
    }
};

;/**** game/general.js ****/
function selectVillage(e, l, o) {
    var a = window.location.href;
    -1 != a.search(/village=\w*/) ? a = a.replace(/village=\w*/, "village=" + e) : a += "&village=" + e,
    -1 != (a = a.replace(/action=\w*/, "")).search(/group=\w*/) ? a = a.replace(/group=\w*/, "group=" + l) : a += "&group=" + l,
    o ? window.open(encodeURI(a), "_blank") : window.location.href = encodeURI(a)
}

;/**** game/TribalWars.js_ ****/
var TribalWars;
!function() {
    "use strict";
    TribalWars = {
        _script: "/game.php",
        _loadedJS: [],
        _onLoadHandler: null,
        _inputCache: {},
        _previousData: {},
        _data_update_stamps: {},
        _settings: {
            sound: !1
        },
        _tabID: null,
        _tabActive: !0,
        _tabTimeout: !1,
        _lastActivity: null,
        _lastSound: 0,
        _chat: null,
        _ah: {},
        constants: {},
        fetch: function(a, e, t) {
            this.registerOnLoadHandler(null),
            this.cacheInputVars(),
            e || this.showLoadingIndicator(),
            $.getJSON(a, function(a) {
                TribalWars.hideLoadingIndicator(),
                TribalWars.handleResponse(a),
                UI.init(),
                UnitPopup.initLinks(),
                "function" == typeof t && t()
            })
        },
        get: function(a, e, t, r, i) {
            var n = this.buildURL("GET", a, e);
            this.request("GET", n, {}, t, r, i)
        },
        post: function(a, e, t, r, i, n) {
            var s = this.buildURL("POST", a, e)
              , o = s.match(/&h=([a-z0-9]+)/);
            o && "string" != typeof t && (s = s.replace(/&h=([a-z0-9]+)/, ""),
            "object" == typeof t && null != t ? t.hasOwnProperty("0") ? t.push({
                name: "h",
                value: o[1]
            }) : t.h = o[1] : t = {
                h: o[1]
            }),
            this.request("POST", s, t, r, i, n)
        },
        request: function(a, e, t, r, i, n) {
            !0 !== n && this.showLoadingIndicator();
            var s = {
                "TribalWars-Ajax": 1
            };
            Object.keys(TribalWars._ah).length && (s = $.extend(TribalWars._ah, s),
            TribalWars._ah = {}),
            $.ajax({
                url: e,
                data: t,
                type: a,
                dataType: "json",
                headers: s,
                success: function(a) {
                    TribalWars.hideLoadingIndicator(),
                    TribalWars.handleResponse(a, r, i)
                },
                error: function(a, e) {
                    TribalWars.hideLoadingIndicator(),
                    0 !== a.readyState && (429 !== a.status ? 503 !== a.status ? (UI.ErrorMessage(_("ba628a2fb8acbf8ab7c4c24c9714d893")),
                    "function" == typeof i && i(a)) : UI.ErrorMessage(_("b51a6b34f8d967218773e5ec33bf8a10")) : UI.ErrorMessage(_("f1ac6646f49d65cbe50901b805abfbf8"), 3e3))
                },
                complete: function() {
                    UI.ToolTip("[title]")
                }
            })
        },
        redirect: function(a, e) {
            var t = TribalWars.buildURL("GET", a, e);
            window.location.href = t
        },
        buildURL: function(a, e, t) {
            var r = "";
            return "string" == typeof e && ("/" === e.charAt() ? (r = e,
            "object" == typeof t && (e = t)) : e = $.extend({
                screen: e
            }, t)),
            "" === r && ("object" == typeof e && null !== e && void 0 !== e.village ? (r = TribalWars._script + "?village=" + e.village,
            delete e.village) : r = game_data.hasOwnProperty("village") ? TribalWars._script + "?village=" + game_data.village.id : TribalWars._script + "?village="),
            "object" == typeof e && null !== e && (r += "&" + $.param(e)),
            ("POST" === a || "object" == typeof e && null !== e && e.hasOwnProperty("action")) && -1 === r.indexOf("&h=") && (r += "&h=" + window.csrf_token),
            game_data.player.sitter > 0 && (r += "&t=" + game_data.player.id),
            r
        },
        handleResponse: function(a, e, t) {
            if (TribalWars._previousData = $.extend(!0, {}, window.game_data),
            a.hasOwnProperty("redirect")) {
                var r = String(document.location)
                  , i = r.indexOf(a.redirect);
                if (-1 === i || r.substring(i) !== a.redirect)
                    return void (document.location = a.redirect)
            }
            if (a.hasOwnProperty("error") || a.hasOwnProperty("response") || a.hasOwnProperty("content")) {
                var n;
                if (a.error)
                    return "object" == typeof a.error && (a.error = Object.values(a.error)),
                    n = Array.isArray(a.error) && a.error.length > 1 ? '<ul style="list-style-type: none">' + a.error.map(function(a) {
                        return "<li>" + a + "</li>"
                    }).join("") + "</ul>" : Array.isArray(a.error) ? a.error[0] : a.error,
                    UI.ErrorMessage(n),
                    void ("function" == typeof t && t(n));
                if (a.bot_protect && BotProtect.isForced(a.bot_protect))
                    return BotProtect.show(a.bot_protect),
                    void ("function" == typeof t && t());
                if (a.content && $("#content_value").html(a.content),
                a.content && (UI.ToolTip(".tooltip"),
                TribalWars.contentLoaded()),
                a.game_data) {
                    var s = window.game_data.screen;
                    TribalWars.updateGameData(a.game_data),
                    window.game_data.screen = s,
                    setTimeout(function() {
                        Timing.resetTickHandlers()
                    }, 10)
                }
                a.quest_data && Quests.setQuestData(a.quest_data, !0),
                "partial_reload" === a.response ? $(document).trigger("partial_reload_end") : null !== a.response && "function" == typeof e && e(a.response),
                mobile ? TribalWars.updateHeaderOnMobile() : TribalWars.updateHeader(),
                a.bot_protect && BotProtect.show(a.bot_protect)
            } else
                UI.ErrorMessage(_("ba628a2fb8acbf8ab7c4c24c9714d893"))
        },
        updateGameData: function(a) {
            void 0 === window.game_data ? window.game_data = a : (TribalWars._previousData = $.extend(!0, {}, window.game_data),
            $.each(a, function(e, t) {
                "village" === e && t.id !== window.game_data.village.id || TribalWars.mergeGameDataProperty(e, t, a.time_generated, window.game_data, TribalWars._data_update_stamps)
            })),
            void 0 !== window.game_data.village && (Village.isPrototypeOf(window.game_data.village) || (window.game_data.village = $.extend(!0, Object.create(Village), window.game_data.village)))
        },
        mergeGameDataProperty: function(a, e, t, r, i) {
            "object" == typeof e && null !== e ? ("object" != typeof i[a] && (i[a] = {}),
            r[a] || (r[a] = {}),
            $.each(e, function(e, n) {
                TribalWars.mergeGameDataProperty(e, n, t, r[a], i[a])
            })) : (!i.hasOwnProperty(a) || i[a] < t) && (r[a] = e,
            i[a] = t)
        },
        handleGameData: function(a) {
            TribalWars.updateGameData(a),
            mobile ? TribalWars.updateHeaderOnMobile() : TribalWars.updateHeader(),
            a.hasOwnProperty("village") && Timing.resetTickHandlers()
        },
        showLoadingIndicator: function() {
            $("#loading_content").show()
        },
        hideLoadingIndicator: function() {
            $("#loading_content").hide()
        },
        updateHeader: function() {
            if (window.game_data.hasOwnProperty("village")) {
                $("#storage").text(game_data.village.storage_max);
                var a = $("#pop_current_label");
                if (a.text(game_data.village.pop),
                changeResStyle(a, Format.get_warn_pop_class(game_data.village.pop, game_data.village.pop_max, game_data.village.is_farm_upgradable)),
                $("#pop_max_label").text(game_data.village.pop_max),
                parseInt(this._previousData.player.rank) !== parseInt(game_data.player.rank)) {
                    var e = $("#rank_rank").html(game_data.player.rank_formatted);
                    this._previousData.player.rank > game_data.player.rank && (e.addClass("increased"),
                    setTimeout(function() {
                        e.removeClass("increased")
                    }, 100))
                }
                if (parseInt(this._previousData.player.points) !== parseInt(game_data.player.points)) {
                    var t = $("#rank_points").html(game_data.player.points_formatted);
                    this._previousData.player.points < game_data.player.points && (t.addClass("increased"),
                    setTimeout(function() {
                        t.removeClass("increased")
                    }, 100))
                }
            }
            $("#premium_points").text(game_data.player.pp);
            var r = $("#new_mail")
              , i = r.hasClass("new_mail_faded")
              , n = parseInt(game_data.player.new_igm);
            n > 0 && i ? r.removeClass("new_mail_faded").addClass("new_mail") : 0 !== n || i || r.hide(),
            $(".badge-mail").text(n ? " (" + n + ")" : "");
            var s = $("#new_report")
              , o = s.hasClass("new_report_faded")
              , l = parseInt(game_data.player.new_report);
            l > 0 && o ? s.removeClass("new_report_faded").addClass("new_report") : 0 !== l || o || s.hide(),
            $(".badge-report").text(l ? " (" + l + ")" : "");
            var d = parseInt(game_data.player.new_post_notification)
              , p = parseInt(game_data.player.new_forum_post)
              , c = parseInt(game_data.player.new_ally_invite)
              , u = parseInt(game_data.player.new_ally_application)
              , g = p + c + u
              , m = $("#tribe_forum_indicator");
            m.removeClass("new_post no_new_post new_notification"),
            d ? m.addClass("new_notification").attr("title", _("e55d740659fcbd1e45213ffc5a872da6")) : p ? m.addClass("new_post").attr("title", _("3d17b7d7c59f2578040822fd6c08eee8")) : p || m.addClass("no_new_post").attr("title", _("fd41237025d00c9823b661d8691a3694")),
            $(".badge-ally-forum-post").text(p ? " (" + p + ")" : ""),
            $(".badge-ally-application").text(u ? " (" + u + ")" : ""),
            $(".badge-ally-invite").text(c ? " (" + c + ")" : ""),
            $("#menu_counter_ally").text(g ? " (" + g + ")" : "");
            var b = parseInt(game_data.player.sitter) ? 0 : parseInt(game_data.player.new_buddy_request)
              , f = parseInt(game_data.player.sitter) ? 0 : parseInt(game_data.player.new_daily_bonus)
              , y = parseInt(game_data.player.new_items)
              , h = b + y + f;
            $(".badge-buddy").text(b ? " (" + b + ")" : ""),
            $(".badge-daily-bonus").text(f ? " (" + f + ")" : ""),
            $(".badge-inventory").text(y ? " (" + y + ")" : ""),
            $("#menu_counter_profile").text(h ? " (" + h + ")" : "");
            var v = $("#header_commands");
            game_data.player.incomings !== this._previousData.player.incomings && (!v.hasClass("has_incomings") && parseInt(game_data.player.incomings) > 0 ? v.addClass("has_incomings") : v.hasClass("has_incomings") && 0 === parseInt(game_data.player.incomings) && v.removeClass("has_incomings"),
            $("#incomings_amount").text(game_data.player.incomings),
            Favicon.update()),
            window.premium && parseInt(game_data.player.supports) !== parseInt(this._previousData.player.supports) && (!v.hasClass("has_supports") && parseInt(game_data.player.supports) > 0 ? v.addClass("has_supports") : v.hasClass("has_supports") && 0 === parseInt(game_data.player.supports) && v.removeClass("has_supports"),
            $("#supports_amount").text(game_data.player.supports))
        },
        updateHeaderOnMobile: function() {
            $("#storage").text(game_data.village.storage_max),
            $("#pop_current_label").text(game_data.village.pop),
            $("#pop_max_label").text(game_data.village.pop_max);
            var a = $("#notify_mail");
            "none" === a.css("display") && 1 === parseInt(game_data.player.new_igm) ? a.show() : "none" !== a.css("display") && 0 === parseInt(game_data.player.new_igm) && a.hide();
            var e = $("#notify_report");
            "none" === e.css("display") && 1 === parseInt(game_data.player.new_report) ? e.show() : "none" !== e.css("display") && 0 === parseInt(game_data.player.new_report) && e.hide();
            var t = $("#notify_forum");
            1 === parseInt(game_data.player.new_forum_post) ? t.show() : t.hide();
            var r = $("#notify_incomings");
            parseInt(game_data.player.incomings) > 0 ? r.show() : r.hide(),
            r.find(".mNotifyNumber").last().text(game_data.player.incomings);
            var i = $("#notify_supports");
            parseInt(game_data.player.supports) > 0 ? i.show() : i.hide(),
            i.find(".mNotifyNumber").last().text(game_data.player.supports)
        },
        cacheInputVars: function() {
            this._inputCache = {};
            var a = 0;
            $("#content_value, .popup_box").find("input[type=text]:visible").each(function() {
                var e = $(this);
                if (e.attr("id")) {
                    if (++a > 20)
                        return !1;
                    TribalWars._inputCache["#" + e.attr("id")] = e.val()
                } else if (e.attr("name")) {
                    if (++a > 20)
                        return !1;
                    TribalWars._inputCache["input[name=" + e.attr("name").replace("[", "\\[").replace("]", "\\]") + "]"] = e.val()
                }
            })
        },
        restoreInputVars: function() {
            $.each(this._inputCache, function(a, e) {
                $(a).val(e)
            })
        },
        contentLoaded: function() {
            this._onLoadHandler && this._onLoadHandler(),
            TribalWars.restoreInputVars()
        },
        registerOnLoadHandler: function(a) {
            this._onLoadHandler = a
        },
        shouldPartialLoad: function() {
            return !0
        },
        showResourceIncrease: function(a, e) {
            var t = $("#" + a).offset()
              , r = $('<span id="' + a + '_gain"></span>').text("+" + e);
            r.css({
                top: t.top - 8 + "px",
                left: t.left - 3 + "px"
            }),
            r.appendTo($("body")),
            r.animate({
                top: t.top - 20 + "px"
            }, 1600, "linear", function() {
                $(this).delay(500).fadeOut().remove()
            })
        },
        dev: function() {
            TribalWars.get("dev", {
                ajax: "options"
            }, function(a) {
                $(a.options).insertAfter(".server_info")
            })
        },
        playAttackSound: function() {
            TribalWars._settings.sound && ((new Date).getTime() - TribalWars._lastSound < 6e4 || (TribalWars.playSound("attack"),
            TribalWars._lastSound = (new Date).getTime()))
        },
        playSound: function(a, e, t) {
            e = e || 1500;
            var r = '<audio autoplay><source src="' + image_base + "/sound/" + a + '.ogg" type="audio/ogg" /><source src="' + image_base + "/sound/" + a + '.mp3" type="audio/mpeg" /></audio>'
              , i = $(r).appendTo("body");
            setTimeout(function() {
                i.remove(),
                "function" == typeof t && t()
            }, e)
        },
        setSetting: function(a, e, t) {
            TribalWars.post("settings", {
                ajaxaction: "toggle_setting"
            }, {
                setting: a,
                value: e ? 1 : 0
            }, function(a) {
                TribalWars._settings = $.extend(TribalWars._settings, a),
                t && t()
            })
        },
        suppressHint: function(a, e) {
            TribalWars.post("settings", {
                ajaxaction: "suppress_hint"
            }, {
                hint: a
            }, function(a) {
                e && e()
            })
        },
        getSetting: function(a) {
            return TribalWars._settings[a]
        },
        initTab: function(a) {
            QuickBar.init(),
            Modernizr.localstorage && (this._tabID = a,
            TribalWars.setActivityHappened(),
            $("body").on("click keydown mouseenter", function() {
                TribalWars.setActivityHappened(),
                TribalWars._tabTimeout && (TribalWars.setActiveTab(),
                TribalWars._tabTimeout = !1)
            }),
            document.hidden || TribalWars.setActiveTab(),
            $(document).on("visibilitychange", function() {
                TribalWars.setActivityHappened(),
                document.hidden ? TribalWars.setInactiveTab() : TribalWars.setActiveTab()
            }),
            STracking.init(),
            "undefined" == typeof Chat || !0 !== Boolean(TribalWars.getSetting("chat_enabled")) || Number(window.game_data.player.sitter) || (this._chat = new Chat))
        },
        setActiveTab: function() {
            localStorage.setItem("activetab", JSON.stringify([this._tabID, (new Date).getTime()])),
            localStorage.setItem("lastactivetab", this._tabID),
            TribalWars._tabActive = !0,
            TribalWars._tabTimer = setTimeout(function() {
                TribalWars.getIdleTime() < 18e4 ? TribalWars.setActiveTab() : TribalWars._tabTimeout = !0
            }, 1e3)
        },
        setInactiveTab: function() {
            TribalWars._tabTimer && clearInterval(TribalWars._tabTimer),
            localStorage.setItem("activetab", JSON.stringify(!1)),
            TribalWars._tabActive = !1
        },
        isTabActive: function() {
            return !document.hidden
        },
        isAnyTabActive: function() {
            if (!this._tabID)
                return !0;
            var a = JSON.parse(localStorage.getItem("activetab"));
            return a && (new Date).getTime() - a[1] < 2500 && this.getIdleTime() < 18e4
        },
        wasLastActiveTab: function() {
            return this._tabID == localStorage.getItem("lastactivetab")
        },
        setActivityHappened: function() {
            TribalWars._lastActivity = (new Date).getTime()
        },
        getIdleTime: function() {
            return (new Date).getTime() - TribalWars._lastActivity
        },
        track: function(a, e) {
            TribalWars.post("tracking", {
                ajaxaction: "track"
            }, {
                event: a,
                params: e
            }, null, null, !0)
        },
        getGameData: function() {
            return window.game_data
        }
    }
}();

;/**** game/Village.js_ ****/
var Village;
!function() {
    "use strict";
    Village = {
        id: null,
        points: null,
        name: null,
        player_id: null,
        x: null,
        y: null,
        pop: null,
        pop_max: null,
        storage_max: null,
        wood: null,
        stone: null,
        iron: null,
        wood_float: null,
        stone_float: null,
        iron_float: null,
        wood_prod: null,
        stone_prod: null,
        iron_prod: null,
        last_res_tick: null,
        buildings: null,
        canAfford: function(l) {
            return new Resources(this.wood,this.stone,this.iron).hasEnough(l)
        },
        updateRes: function() {
            var l = this
              , n = Timing.getCurrentServerTime()
              , o = (n - l.last_res_tick) / 1e3
              , t = parseInt(l.storage_max);
            ["wood", "stone", "iron"].forEach(function(n) {
                var r = parseFloat(l[n + "_float"])
                  , a = parseFloat(l[n + "_prod"])
                  , u = Math.min(t, r + a * o);
                l[n + "_float"] = u,
                l[n] = Math.floor(u)
            }),
            l.last_res_tick = n
        }
    }
}();

;/**** game/Resources.js_ ****/
var Resources, ResourcesForecast, ResourcesForecaster;
!function() {
    var e = function(e, t, o) {
        if (!t || e[0] > o)
            return null;
        for (var s = 0, r = t - 1, n = r; n > 1; ) {
            var a = s + (n >> 1);
            e[a] > o ? r = a - 1 : s = a,
            n = r - s
        }
        return e[r] > o ? e[s] : e[r]
    }
      , t = function() {};
    t.prototype = {
        schedules: {
            wood: {},
            stone: {},
            iron: {}
        },
        items_count: {
            wood: 0,
            stone: 0,
            iron: 0
        },
        timestamps: {
            wood: [],
            stone: [],
            iron: []
        },
        getMostRecentItem: function(t, o) {
            var s = e(this.timestamps[t], this.items_count[t], o);
            return null === s ? null : new r(s,this.schedules[t][s])
        }
    };
    var o = function() {};
    o.prototype = $.extend(Object.create(t.prototype), {
        values: {
            wood: [],
            stone: [],
            iron: []
        },
        next_timestamps: {
            wood: {},
            stone: {},
            iron: {}
        },
        schedules_flipped: {
            wood: {},
            stone: {},
            iron: {}
        },
        getNextItem: function(e, t) {
            if (void 0 === this.next_timestamps[e][t])
                return null;
            var o = this.next_timestamps[e][t];
            return new r(o,this.schedules[e][o])
        },
        getItemAlmostAtValue: function(t, o) {
            var s = e(this.values[t], this.items_count[t], o);
            return null === s ? null : new r(this.schedules_flipped[t][s.toString()],s)
        }
    });
    var r = function(e, t) {
        this.time = e,
        this.value = t
    };
    (Resources = function(e, t, o) {
        this.wood = e,
        this.stone = t,
        this.iron = o
    }
    ).prototype = {
        hasEnough: function(e) {
            return this.wood >= e.wood && this.stone >= e.stone && this.iron >= e.iron
        },
        maxAffordableUnits: function(e) {
            var t = e.wood ? this.wood / e.wood : 0
              , o = e.stone ? this.stone / e.stone : 0
              , s = e.iron ? this.iron / e.iron : 0;
            return Math.floor(Math.min(t, o, s))
        }
    },
    Resources.types = ["wood", "stone", "iron"],
    Resources.names = {
        wood: _("6e4dd7ce4ea3c1d4a90edb289e22da98"),
        stone: _("ed5eace1bd098cdced7685864b09c291"),
        iron: _("cefa8a9606819ed409dc761ca6080887")
    },
    (ResourcesForecast = function(e, t) {
        this.available = e,
        this.when = t
    }
    ).AVAILABLE_NEVER = "never",
    ResourcesForecast.AVAILABLE_NOW = "now",
    ResourcesForecast.AVAILABLE_FUTURE = "future",
    ResourcesForecast.prototype = {
        toHTML: function(e, t) {
            if (e || (e = _("c131ac6751200713be7ad27065413f89")),
            this.available === ResourcesForecast.AVAILABLE_NEVER)
                return _("1228deb87af18530e809c8cf4534e814");
            if (this.available === ResourcesForecast.AVAILABLE_NOW)
                return e;
            var o = this.when - Timing.getCurrentServerTime() / 1e3;
            if (o <= 120) {
                if (t)
                    return s(_("1b3358ab233b3c3df7d47af2c2ea115e"), getTimeString(Math.round(o)));
                var r = '<span class="timer_replace">' + getTimeString(Math.round(o)) + "</span>";
                return "<span>" + s(_("1b3358ab233b3c3df7d47af2c2ea115e"), r) + "</span>" + ('<span style="display:none">' + e + "</span>")
            }
            return s(_("75b113c1ba03c76292b56a170fa00b28"), Format.date(getLocalTimeAsFloat() + o))
        },
        toString: function() {
            return this.toHTML("", !0)
        }
    },
    ResourcesForecaster = {
        getForecast: function(e, t, o, s) {
            return function(e, t, o, s, r, n, a) {
                if (Math.max(e.wood, e.stone, e.iron) > r)
                    return new ResourcesForecast(ResourcesForecast.AVAILABLE_NEVER);
                if (t.hasEnough(e))
                    return new ResourcesForecast(ResourcesForecast.AVAILABLE_NOW,s);
                s = Math.ceil(s);
                var i = {};
                Resources.types.forEach(function(r) {
                    var c = e[r];
                    if (t[r] >= c)
                        i[r] = s;
                    else {
                        var u = a.getMostRecentItem(r, s)
                          , d = Number(u.value) + o[r] * (s - u.time)
                          , l = Number(t[r]) - d
                          , f = a.getItemAlmostAtValue(r, c - l)
                          , h = Number(f.value) + l
                          , m = f.time;
                        if (h < c) {
                            var R;
                            R = m <= s ? o[r] : n.getMostRecentItem(r, m).value;
                            var _ = c - h
                              , p = m + Math.ceil(_ / R)
                              , v = a.getNextItem(r, m);
                            null !== v && (p = Math.min(p, v.time)),
                            m = p
                        }
                        i[r] = m
                    }
                });
                var c = Math.max(i.wood, i.stone, i.iron);
                return new ResourcesForecast(ResourcesForecast.AVAILABLE_FUTURE,c)
            }(e, new Resources(t.wood_float,t.stone_float,t.iron_float), new Resources(t.wood_prod,t.stone_prod,t.iron_prod), Timing.getCurrentServerTime() / 1e3, t.storage_max, o, s)
        },
        fetchSchedules: function(e, t) {
            TribalWars.get("api", {
                ajax: "resources_schedule",
                id: e
            }, function(e) {
                void 0 === e.invalid_village && "function" == typeof t && t({
                    time_generated: e.time_generated,
                    rates: ResourcesForecaster.Factory.createResourcesSchedule(e.rates),
                    amounts: ResourcesForecaster.Factory.createResourcesInVillageSchedule(e.amounts)
                })
            })
        },
        Factory: {
            createResourcesSchedule: function(e) {
                return $.extend(new t, e)
            },
            createResourcesInVillageSchedule: function(e) {
                return $.extend(new o, e)
            }
        }
    }
}();

;/**** game/Format.js_ ****/
var Format;
!function() {
    "use strict";
    Format = {
        month_names: [_("f0eadcecffbb5f66bf549645d20bd0cd"), _("b8a8de82dd0387e97241d76edb64c78e"), _("99d26c335ff06a1f4f32e1b78ccc0855"), _("2d0ea4e2a5d29e1321ae6d9ff1861052"), _("c0a48f32c11d4e56173d7bb151154236"), _("00a5cf879180a196bf1720187b4a29ba"), _("23176c991f48ba3a17942b82cc7787b2"), _("19c1b76c51e0eb5d5c92221e6e891bad"), _("1f17626a373b6a69f8287ed8781e1e0a"), _("4caa55b7c609d00fb95f03cd1ceafeab"), _("b575d8d37fffa782cfa3592d1cfc65da"), _("a0bccd9315fa3e38aef93f34cd116aa9")],
        date: function(e, a, r, t, n) {
            r = void 0 !== r && r,
            t = void 0 !== t && t,
            n = void 0 === n || n;
            var o, i = 60 * (new Date).getTimezoneOffset(), c = e + i + window.server_utc_diff, d = new Date(1e3 * c), f = d.getFullYear(), u = d.getMonth() + 1, b = d.getDate(), m = d.getHours(), g = d.getMinutes(), p = d.getSeconds(), l = d.getMilliseconds(), h = function(e, a) {
                a = a || 2,
                e = "" + e;
                var r = Math.max(0, a - e.length);
                return new Array(r).fill("0").join("") + e
            };
            o = "us" === game_data.market ? h(u) + "." + h(b) + "." : h(b) + "." + h(u) + ".",
            r && (o += f);
            var v = h(m) + ":" + h(g) + (!0 === a ? ":" + h(p) : "");
            t && (v += s(':<span class="grey small">%1</span>', h(l, 3)));
            var w = new Date((new Date).getTime() + 1e3 * i + 1e3 * window.server_utc_diff)
              , F = new Date(w);
            return F.setDate(w.getDate() + 1),
            w.toDateString() === d.toDateString() ? _("aea2b0aa9ae1534226518faaefffdaad").replace("%s", v) : F.toDateString() === d.toDateString() ? _("57d28d1b211fddbb7a499ead5bf23079").replace("%s", v) : n ? _("0cb274c906d622fa8ce524bcfbb7552d").replace("%1", o).replace("%2", v) : _("850731037a4693bf4338a0e8b06bd2e4").replace("%1", o).replace("%2", v)
        },
        time: function(e, a) {
            var r = new Date(e)
              , t = "";
            return t += Format.padLead(r.getHours(), 2),
            t += ":" + Format.padLead(r.getMinutes(), 2),
            a && (t += ":" + Format.padLead(r.getSeconds(), 2)),
            t
        },
        timeSpan: function(e, a) {
            var r, t, n = "";
            a ? (n += (t = Math.floor(e / 24 / 60 / 60 / 1e3)) > 0 ? t + ":" : "",
            r = Math.floor(e / 60 / 60 / 1e3) % 24) : r = Math.floor(e / 60 / 60 / 1e3),
            n += t > 0 ? Format.padLead(r, 2) : r;
            var o = Math.floor(e / 60 / 1e3) % 60;
            n += ":" + Format.padLead(o, 2);
            var i = Math.floor(e / 1e3) % 60;
            return n += ":" + Format.padLead(i, 2)
        },
        padLead: function(e, a) {
            for (var r = e.toString(), t = r.length; t < a; t++)
                r = "0" + r;
            return r
        },
        number: function(e) {
            return number_format(e, '<span class="grey">.</span>')
        },
        shorten_number: function(e) {
            return e >= 1e7 ? (e /= 1e6,
            Math.round(e) + _("381f749a338b826aa1af08395d8a3b8e")) : e >= 1e4 ? (e /= 1e3,
            Math.round(e) + _("49327b55a12f22d2c1abbbee4c9e071b")) : e
        },
        get_warn_pop_class: function(e, a, r) {
            return r && e >= a ? "warn" : r && e / a >= .9 ? "warn_90" : ""
        },
        image_src: function(e) {
            return window.image_base + e
        },
        image_tag: function(e, a, r) {
            var t = e.src
              , n = "";
            return e.has_retina && (t = t.replace(/\.(png)/, "@2x.$1"),
            n = s('style="width: %1px; height: %2px;"', e.width, e.height)),
            a = a || "",
            r = r || [],
            '<img src="' + Format.image_src(t) + '" title="' + a + '" alt="" class="' + r.join(" ") + '" ' + n + "/>"
        },
        imageTexture: function(e, a, r, t, n) {
            Array.isArray(t) || (t = []),
            "string" != typeof n && (n = "span");
            var o = a / e.width
              , i = r / e.height
              , c = e.atlas_width * o
              , s = e.atlas_height * i
              , d = -e.position_x * o
              , f = -e.position_y * i
              , u = ["width:" + a + "px", "height:" + r + "px", "background-image: url(" + Format.image_src(e.atlas_src) + ")", "background-size:" + c + "px " + s + "px", "background-position:" + d + "px " + f + "px"];
            return t.push("sprite"),
            "<" + n + ' class="' + t.join(" ") + '" style="' + u.join(";") + '"></' + n + ">"
        },
        playerAnchor: function(e, a, r) {
            var t = TribalWars.buildURL("GET", "info_player", {
                id: e
            })
              , n = "";
            return void 0 !== r && (n = Format.userImageThumb(r) + " "),
            '<a href="' + t + '">' + n + escapeHtml(a) + "</a>"
        },
        userImageThumb: function(e) {
            return '<img class="userimage-tiny" src="' + Format.userImageThumbURL(e) + '">'
        },
        userImageThumbURL: function(e) {
            if (!e || 0 === parseInt(e))
                return image_base + "coa_unknown.png";
            return e < 1e3 ? image_base + "avatar/thumb/" + e + ".jpg" : image_base + "userimage/" + e + "_thumb"
        },
        overdueAnchor: function() {
            return "<a href=\"#\" onclick=\"UI.Help.open('misc', 'overdues'); return false\">" + _("38e7b1eb7d0cc1978dbd368eaf05f9f9") + "</a>"
        },
        ppCostTooltip: function(e) {
            var a = _("50705527ef25ef5a96b42447e257edd5");
            return mobile ? s(a, s(_("aef108da881016d949f09d923a76cc76"), e)) : s(a, s('<span class="coinbag solo"></span> %1', e))
        },
        lifeColor: function(e) {
            var a = 0
              , r = 0;
            e < .5 ? (a = 255,
            r = e <= 0 ? 0 : e / .5 * 255) : (r = 255,
            a = e >= 1 ? 0 : (1 - e) / .5 * 255);
            var t = function(e) {
                return Math.min(255, Math.floor(e))
            };
            return s("rgb(%1, %2, %3)", t(a), t(r), t(0))
        },
        resChange: function(e, a) {
            return ["wood", "stone", "iron"].map(function(r) {
                return '<strike><span class="icon header ' + r + '"></span>' + Format.number(e[r]) + '</strike> <span class="icon header ' + r + '"></span>' + Format.number(a[r]) + "<br/>"
            }).join("")
        },
        toPercent: function(e, a) {
            return ((100 * e).toFixed(a = a || 6) + "%").replace(/(?:(\.[0-9]*[1-9])|.)?0*%$/, "$1%")
        }
    }
}();

;/**** game/Dialog.js_ ****/
var Dialog;
!function() {
    "use strict";
    var e = function(e, t) {
        this.priority = e,
        this.closeCallback = t
    };
    e.prototype = {
        is_completely_shown: !1,
        after_completely_shown_queue: [],
        triggerAfterCompletelyShownHooks: function() {
            for (var e = this.after_completely_shown_queue; e.length; ) {
                e.shift()()
            }
        }
    },
    Dialog = {
        MAX_WIDTH: 821,
        PRIORITY_NONE: 0,
        PRIORITY_IMPORTANT: 1,
        active_id: null,
        instances: {},
        show: function(t, o, i, n) {
            if (!this.isContentValid(o))
                throw "invalid dialog content";
            if (n = $.extend({
                class_name: "",
                close_from_fader: !0,
                allow_close: !0,
                priority: Dialog.PRIORITY_NONE
            }, n),
            this.active_id && this.active_id !== t) {
                if (this.getActiveInstance().priority > n.priority)
                    return !1;
                Dialog.close()
            }
            this.active_id = t;
            var l = new e(n.priority,i);
            this.instances[t] = l;
            var s, a, c = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || "body", r = $(".popup_box_container"), p = !1;
            switch (r.length ? (s = r.find(".popup_box"),
            a = r.find(".popup_box_content"),
            s.css("width", "auto")) : (p = !0,
            r = $('<div class="popup_box_container" />'),
            s = $('<div class="popup_box" />').attr("id", "popup_box_" + t).addClass(n.class_name).data("name", t).appendTo(r),
            $('<div class="fader" />').appendTo(r),
            a = $('<div class="popup_box_content" />').appendTo(s),
            r.appendTo($(c))),
            typeof o) {
            case "string":
                a.html(o);
                break;
            case "object":
                a.html("").append(o);
                break;
            case "function":
                a.html(""),
                o(a);
                break;
            default:
                throw "invalid dialog content"
            }
            var d;
            ($(window).width() < 500 || $(window).height() < a.height() + 125) && s.addClass("mobile"),
            a.find("img").on("load", function() {
                ($(window).width() < 500 || $(window).height() < a.height() + 125) && s.addClass("mobile")
            }),
            d = "function" == typeof window.getComputedStyle ? parseInt(getComputedStyle(s[0], null).borderLeftWidth) : parseInt(s.css("border-left-width"));
            var u = Math.ceil(Math.min(this.MAX_WIDTH, a.width(), $(window).width() - d));
            if (u < 250 && (u = 250),
            Modernizr.borderimage || (u += 20),
            u % 2 == 1 && u++,
            s.css("width", u + "px"),
            n.allow_close) {
                var f = mobile || mobiledevice || !HotKeys.enabled ? "" : " :: " + _("28926ff7e8e5f5e52b3e35f5cc7ad99b") + " <b>Esc</b>"
                  , h = mobile || mobiledevice ? "" : "tooltip-delayed"
                  , w = $('<a class="popup_box_close ' + h + '" title="' + _("d3d2e617335f08df83599665eef8a418") + f + '" href="#">&nbsp;</a>').prependTo(s);
                UI.ToolTip(w, {
                    delay: 400
                });
                var g = n.close_from_fader ? ".fader, .popup_box_close, .popup_closer" : ".popup_box_close, .popup_closer";
                r.on("click", g, function(e) {
                    e.preventDefault(),
                    Dialog.close(!0)
                })
            }
            return p ? setTimeout(function() {
                s.addClass("show"),
                l.is_completely_shown = !0,
                l.triggerAfterCompletelyShownHooks()
            }, 50) : (l.is_completely_shown = !0,
            l.triggerAfterCompletelyShownHooks()),
            UI.init(),
            UnitPopup.initLinks(),
            VillageContext.init(r),
            setTimeout(QuestArrows.init, 500),
            !0
        },
        isContentValid: function(e) {
            return "string" == typeof e || "object" == typeof e && $.prototype.isPrototypeOf(e) || "function" == typeof e && 1 === e.length
        },
        close: function(e) {
            if (!this.active_id)
                return !1;
            $(".popup_box_container").remove();
            var t = this.getActiveInstance();
            return t.closeCallback && t.closeCallback(e),
            delete this.instances[this.active_id],
            this.active_id = null,
            QuestArrows.init(),
            VillageContext.hide(),
            e && DialogQueue.consume(),
            !1
        },
        fetch: function(e, t, o, i, n, l, s) {
            TribalWars.get(t, o, function(t) {
                Dialog.show(e, t.dialog, l, n),
                i && i()
            }, s)
        },
        openWidget: function(e, t, o, i) {
            var n = function() {
                t.update(Timing.getCurrentServerTime())
            }
              , l = Dialog.show(e, function(e) {
                t.init(e),
                $(TribalWars).on("global_tick", n)
            }, function() {
                $(TribalWars).off("global_tick", n),
                t.destruct(),
                "function" == typeof o && o()
            }, i);
            return l || t.destruct(),
            l
        },
        queueCallWhenShown: function(e) {
            var t = this.getActiveInstance();
            t.is_completely_shown ? e() : t.after_completely_shown_queue.push(e)
        },
        getActiveInstance: function() {
            return this.instances[this.active_id]
        }
    }
}();

;/**** game/DialogQueue.js ****/
var DialogQueue;
!function() {
    "use strict";
    DialogQueue = function() {
        var u = [];
        return {
            add: function(n) {
                u.push(n)
            },
            consume: function() {
                u.length > 0 && u.shift()()
            }
        }
    }()
}();

;/**** game/VillageGroups.js_ ****/
var VillageGroups = {
    loadGroups: function(e, t, a, r) {
        TribalWars.get("groups", {
            ajax: "load_groups",
            village_id: e
        }, function(e) {
            VillageGroups.showGroups(e, t, a, r)
        })
    },
    loadGroupsToggle: function(e, t, a) {
        var r = $("#" + t);
        r.toggle(),
        r.is(":visible") && VillageGroups.loadGroups(e, t, a)
    },
    showGroups: function(e, t, a, r) {
        r = void 0 !== r ? r : function() {}
        ,
        $("#" + t).empty();
        var n, p = $("<table>").attr("id", "group_table").attr("width", "100%").addClass("vis"), o = $("<tbody>");
        p.append(o),
        $("#group_assiggment > tr").not("#header").remove(),
        o.append($("<img>").attr("src", "graphic/throbber.gif").attr("alt", "Loading...").attr("id", "throbber")),
        a && (n = $("<form>").attr("id", "reassign_village_to_groups_form_" + t).attr("action", $("#group_assign_action").val()).attr("method", "POST"));
        for (var l = 0; l < e.result.length; l++)
            if (a || e.result[l].in_group) {
                var i = $("<tr>")
                  , u = $("<td>")
                  , s = e.result[l].name
                  , d = null;
                if (a) {
                    var g = $("<input>").attr("type", "checkbox").attr("id", "checkbox_" + s).attr("name", "groups[]").attr("value", e.result[l].group_id).addClass("check");
                    e.result[l].in_group && g.attr("checked", "checked"),
                    d = $("<label>" + escapeHtml(s) + "</label>").prepend(g),
                    u.append(d)
                }
                var c = $("<p>").addClass("p_groups");
                d ? c.append(d) : c.html(escapeHtml(s)),
                u.append(c),
                i.append(u),
                o.append(i)
            }
        if (a ? (p.appendTo(n),
        n.append($("<input>").attr("name", "village_id").attr("type", "hidden").val(e.village_id)),
        n.append($("<input>").attr("name", "mode").attr("type", "hidden").val("village")),
        n.append($("<input>").attr("type", "submit").attr("class", "btn").val($("#group_submit_text").val())),
        $("#" + t).append(n)) : $("#" + t).append(p),
        $("#throbber").remove(),
        a)
            n.unbind().on("submit", function() {
                return TribalWars.post(n.attr("action"), {}, n.serialize(), function(e) {
                    VillageGroups.showGroups(e, t, !1, r),
                    r && r(e, t)
                }),
                !1
            });
        else {
            var m, v = "overview" === game_data.screen;
            if (e.player_has_static_groups)
                m = $("<a>").attr("href", "#").html($("#group_edit_village").val()).on("click", function() {
                    return VillageGroups.loadGroups(e.village_id, "group_assignment", !0, r),
                    !1
                });
            else {
                if (!v)
                    return !1;
                if (parseInt($("#village_has_dynamic_membership").val()))
                    return !1;
                m = $("<i>" + _("1ccabc4df5f8a94cd7cf7c669ed03c0e") + "</i>")
            }
            var f = $("<tbody>")
              , h = $("<table>").attr("width", "100%").addClass("vis").css("margin-top", "-2px").append(f)
              , b = $("<tr>")
              , G = $("<td>");
            G.append(m),
            b.append(G),
            f.append(b),
            $("#" + t).append(h)
        }
    },
    handleSaveFromOverview: function(e, t) {
        var a = ""
          , r = 0;
        if (null != e.result && e.result.length > 0) {
            for (var n = 0; n < e.result.length; n++)
                e.result[n].in_group && (a += escapeHtml(e.result[n].name) + "; ",
                r++);
            a = a.substring(0, a.lastIndexOf(";")),
            $("#assigned_groups_" + e.village_id + "_names").html(a)
        } else {
            $("#assigned_groups_" + e.village_id + "_names").empty();
            var p = $('<span class="grey" style="font-style:italic"></span>');
            p.html($("#group_undefined").val()),
            $("#assigned_groups_" + e.village_id + "_names").append(p)
        }
        $("#assigned_groups_" + e.village_id + "_count").html(r),
        mobile ? $("#group_edit_div_" + e.village_id).hide() : $("#group_edit_tr_" + e.village_id).hide()
    },
    initOverviews: function() {
        $("#add_group_form").on("submit", function() {
            return VillageGroups.createGroup($(this).find("#add_new_group_name").val()),
            !1
        })
    },
    displayGroupInfo: function(e, t, a) {
        $("#" + t).empty();
        var r = $("<img>").attr("src", "/graphic/throbber.gif");
        $("#" + t).append(r);
        var n = $("<table>").addClass("vis").attr("id", "group_table").width("100%")
          , p = $("<tbody>");
        n.append(p);
        var o = $("<tr>");
        p.append(o);
        var l = $("<th>").width("100%").html($("#group_config_headline").val());
        o.append(l);
        for (var i = new Array, u = 0; u < e.result.length; u++) {
            if (!a && 5 == u) {
                var d = e.result.length - 5
                  , g = $('<tr><td><a href="#" /></td></tr>')
                  , c = g.find("a");
                1 == d ? c.text(_("721f3f08e94a23bad2f5b02d9575ff5f")) : c.text(s(_("759b1416a977d5c9d468450c1c3df687"), d)),
                c.on("click", function() {
                    VillageGroups.displayGroupInfo(e, t, !0)
                }),
                p.append(g);
                break
            }
            var m = e.result[u].group_id
              , v = e.result[u].name
              , f = $("<tr>").attr("id", "tr_group" + m)
              , h = $("<td>").attr("id", "show_group" + m)
              , b = $("<a>").attr("href", e.result[u].link).html(escapeHtml(v));
            null != e.last_selected && m == e.last_selected && h.addClass("selected"),
            h.append(b),
            f.append(h);
            var G = $("<td>").attr("id", "rename_group" + m).css("display", "none")
              , y = $("<form>").attr("id", "rename_group_form" + m).attr("class", "rename_group_form").attr("action", $("#rename_group_link").val() + "&old_name=" + v).attr("method", "post")
              , w = $("<input>").attr("type", "hidden").attr("name", "group_id").attr("value", m);
            if (y.append(w),
            w = $("<input>").attr("type", "hidden").attr("name", "mode").attr("value", $("#group_mode").val()),
            y.append(w),
            w = $("<input>").attr("type", "text").attr("name", "group_name").attr("value", v),
            y.append(w),
            w = $("<input>").attr("type", "submit").attr("class", "btn").attr("value", $("#group_submit_text").val()),
            y.append(w),
            G.append(y),
            f.append(G),
            0 != m) {
                var x = $("<a>").attr("href", "#").addClass("float_right").data("group-name", v);
                k = $("<img>").attr("src", "/graphic/delete_14.png").attr("title", $("#group_title_delete").val()),
                x.append(k),
                h.append(x),
                x.click(function(e) {
                    var t = s($("#group_msg_confirm_delete").val(), escapeHtml($(this).data("group-name")))
                      , a = [{
                        text: _("70d9be9b139893aa6c69b5e77e614311"),
                        callback: function() {
                            VillageGroups.deleteGroup(VillageGroups.getGroupID(e))
                        },
                        confirm: !0
                    }];
                    return UI.ConfirmationBox(t, a),
                    !1
                });
                var V = $("<a>").attr("href", "#").css("margin", "0 5px")
                  , k = $("<img>").attr("src", "/graphic/rename.png").attr("title", $("#group_title_rename").val());
                V.append(k),
                h.append(V),
                V.click(function(e) {
                    var t = VillageGroups.getGroupID(e);
                    return toggle_element("#show_group" + t),
                    toggle_element("#rename_group" + t),
                    !1
                }),
                i[u] = new Array,
                i[u].group_id = m
            }
            p.append(f)
        }
        $("#" + t).empty().append(n).show(),
        $(".rename_group_form").on("submit", function() {
            var e = $(this).find("input[name=group_id]").val()
              , t = $(this).find("input[name=group_name]").val();
            return VillageGroups.renameGroup(e, t),
            !1
        })
    },
    reloadOverviewPage: function() {
        var e = location.href.match(/group=[0-9]*/)
          , t = $("#start_edit_group_link").val().replace("group=0", e);
        $.ajax({
            url: t,
            dataType: "html",
            success: function(e) {
                $("#group_management_content").length > 0 ? $("#group_management_content").html(e) : $("#paged_view_content").html(e),
                "undefined" != typeof MDS && MDS.initToggleMenus(),
                VillageGroups.initOverviews(),
                VillageGroupMenu.Nav.init()
            }
        })
    },
    createGroup: function(e) {
        TribalWars.post("groups", {
            ajaxaction: "create_group"
        }, {
            group_name: e
        }, function(e) {
            $("#add_new_group_name").val(""),
            VillageGroups.reloadOverviewPage()
        })
    },
    deleteGroup: function(e) {
        TribalWars.post("groups", {
            ajaxaction: "delete_group"
        }, {
            group_id: e
        }, function(e) {
            VillageGroups.reloadOverviewPage()
        })
    },
    renameGroup: function(e, t) {
        TribalWars.post("groups", {
            ajaxaction: "rename_group"
        }, {
            group_name: t,
            group_id: e
        }, function(e) {
            VillageGroups.reloadOverviewPage()
        })
    },
    getGroupID: function(e) {
        var t = null;
        t = e.srcElement ? e.srcElement : e.target;
        var a = $(t).parents("tr").first().attr("id");
        return parseInt(a.substr(8))
    },
    villageSelect: {
        init: function(e) {
            TribalWars.get("groups", {
                ajax: "load_group_menu"
            }, function(t) {
                VillageGroups.villageSelect.handleGroupMenuData(t, e)
            })
        },
        handleGroupMenuData: function(e, t) {
            var a = e;
            "object" != typeof t && (t = $("#" + t));
            var r = $("<form>").attr("id", "select_group_box").attr("action", $("#show_groups_villages_link").val()).attr("method", "POST")
              , n = $("<p>").attr("style", "margin: 0 0 10px 0; font-weight: bold;").html($("#group_popup_select_title").val())
              , p = $("<select>").attr("id", "group_id").attr("name", "group_id").css("margin-left", "3px")
              , o = $("<input>").attr("type", "hidden").attr("name", "mode").attr("value", $("#group_popup_mode").val());
            r.append(o);
            for (var l = !1, i = 0; i < a.result.length; i++) {
                var u = a.result[i]
                  , s = "separator" === u.type
                  , d = "";
                s && !l ? (d = "<option disabled></option>",
                l = !0) : s || (d = $("<option>").attr("value", u.group_id).html(escapeHtml(u.name)),
                a.group_id && u.group_id === a.group_id && (d.attr("selected", !0),
                !0),
                l = !1),
                p.append(d)
            }
            var g = $("<div>").attr("id", "group_list_content").css("overflow", "auto");
            mobile || g.css("height", "340px"),
            n.append(p),
            r.append(n),
            t.empty(),
            t.append(r).append(g),
            r.on("submit", function() {
                return TribalWars.post("groups", {
                    ajax: "load_villages_from_group"
                }, {
                    group_id: $("#group_id").val()
                }, function(e) {
                    VillageGroups.villageSelect.showVillages(e.html, "group_list_content")
                }),
                !1
            }),
            r.submit(),
            $("#group_id").change(function() {
                $("#group_list_content").html(UI.Throbber),
                r.submit()
            })
        },
        showVillages: function(e, t) {
            $("#" + t).html(e),
            $("th.group_label").html($("#group_popup_villages_select").val());
            var a = $("#selected_popup_village");
            if (a.length) {
                var r = a.position().top;
                $("#group_list_content").scrollTop(r - 60)
            }
        }
    }
};

;/**** game/VillageGroupMenu.js_ ****/
var VillageGroupMenu;
!function() {
    "use strict";
    VillageGroupMenu = {
        Nav: {
            village_counts: {},
            pending_village_counts: {},
            type_labels: {
                all: "",
                static: _("06dd230334ea28e78a3cf0f107ff3326"),
                dynamic: _("f7bff9446c4fed89e213ac495395dc7b")
            },
            init: function() {
                mobile || this.initHoverCounts(".group-menu-item")
            },
            initHoverCounts: function(e) {
                var o = {
                    bodyHandler: VillageGroupMenu.Nav.getTooltipContent
                };
                UI.ToolTip(e, o)
            },
            getTooltipContent: function() {
                var e = $(this)
                  , o = e.data("group-id")
                  , t = void 0 !== VillageGroupMenu.Nav.village_counts[o]
                  , a = Boolean(VillageGroupMenu.Nav.pending_village_counts[o]);
                t || a || (VillageGroupMenu.Nav.loadDataForTooltip(e, o),
                a = !0);
                var r = e.data("group-type")
                  , i = "";
                if (VillageGroupMenu.Nav.type_labels[r] && (i = "<strong>" + VillageGroupMenu.Nav.type_labels[r] + "</strong><br/>"),
                a)
                    return i + '<div style="text-align:center; margin:5px;">' + ('<img alt="" src="' + image_base + 'loading2.gif">') + "</div>";
                var n = VillageGroupMenu.Nav.village_counts[o];
                return i + _("0f827c5ff05ea68c64cfc782882adb27") + " <strong>" + n + "</strong>"
            },
            loadDataForTooltip: function(e, o) {
                VillageGroupMenu.Nav.pending_village_counts[o] = !0,
                TribalWars.get("api", {
                    ajax: "count_villages_in_group",
                    id: o
                }, function(t) {
                    VillageGroupMenu.Nav.village_counts[o] = t,
                    VillageGroupMenu.Nav.pending_village_counts[o] = !1,
                    e.trigger("tooltip_content_change")
                }, null, !0)
            }
        },
        Editor: {
            init: function() {
                $("#add_separator").click(function() {
                    return VillageGroupMenu.Editor.createSeparator(),
                    !1
                }),
                $(".remove_separator").click(function() {
                    return VillageGroupMenu.Editor.removeSeparator($(this).data("id")),
                    !1
                }),
                $(".order_up").click(function() {
                    return VillageGroupMenu.Editor.moveUp($(this).closest("tr")),
                    !1
                }),
                $(".order_down").click(function() {
                    return VillageGroupMenu.Editor.moveDown($(this).closest("tr")),
                    !1
                }),
                this.updateOrderButtons(),
                $("#menu_items").sortable({
                    axis: "y",
                    handle: ".bqhandle",
                    helper: "clone",
                    stop: VillageGroupMenu.Editor.saveOrder
                })
            },
            saveOrder: function(e, o) {
                TribalWars.post("overview_villages", {
                    mode: "groups",
                    ajaxaction: "order_menu"
                }, $("#menu_items").sortable("serialize"), function() {})
            },
            createSeparator: function() {
                TribalWars.post("overview_villages", {
                    mode: "groups",
                    ajaxaction: "create_menu_separator"
                }, null, function() {
                    partialReload()
                })
            },
            removeSeparator: function(e) {
                TribalWars.post("overview_villages", {
                    mode: "groups",
                    ajaxaction: "remove_menu_separator"
                }, {
                    item_id: e
                }, function() {
                    partialReload()
                })
            },
            moveUp: function(e) {
                e.prev().before(e.detach()),
                this.saveOrder(),
                this.updateOrderButtons()
            },
            moveDown: function(e) {
                e.next().after(e.detach()),
                this.saveOrder(),
                this.updateOrderButtons()
            },
            updateOrderButtons: function() {
                $(".order_up, .order_down").show(),
                $(".order_up").first().hide(),
                $(".order_down").last().hide()
            }
        }
    }
}();

;/**** game/OrderProgress.js_ ****/
var OrderProgress = {
    didInitTicker: !1,
    initProgress: function() {
        $(".order-progress").each(function() {
            var e = $(this)
              , r = e.data("progress")
              , t = [];
            $.each(r.progress, function(r, s) {
                var a = s[0]
                  , o = s[1]
                  , d = $("<div />").css({
                    width: 100 * o + "%"
                });
                d.data("seconds_worked", a),
                d.data("percentage_complete", o),
                e.append(d),
                t.push(o / a)
            });
            var s = $('<div class="anim" />');
            e.append(s),
            e.data("slot_speeds", t)
        }),
        UI.ToolTip($(".order-progress").find("div"), {
            bodyHandler: OrderProgress.getTooltipBody
        }),
        OrderProgress.updateProgress(!0),
        setTimeout(function() {
            OrderProgress.updateProgress(),
            OrderProgress.didInitTicker || (OrderProgress.didInitTicker = !0,
            $(window.TribalWars).on("global_tick", function() {
                OrderProgress.updateProgress()
            }))
        }, 100)
    },
    updateProgress: function(e) {
        $(".order-progress").each(function() {
            var r = $(this)
              , t = r.data("progress")
              , s = r.data("slot_speeds");
            if (s) {
                s = s.slice(0);
                var a = Math.min(Timing.getCurrentServerTime() / 1e3 - t.slot_start, t.slot_time);
                e || a++;
                var o = (a = Math.round(a)) / t.slot_time * (1 - t.percentage_complete);
                if (s.push(o / a),
                !(o > 1)) {
                    var d = Math.max.apply(Math, s)
                      , i = Math.min.apply(Math, s)
                      , n = r.find("div");
                    n.each(function(e) {
                        var r, t, c = $(this);
                        e == n.length - 1 ? (r = (o / a - i) / (d - i),
                        c.css("width", 100 * o + "%"),
                        c.data("percentage_complete", o),
                        c.data("seconds_worked", a + 1)) : r = (c.data("percentage_complete") / c.data("seconds_worked") - i) / (d - i),
                        1 == s.length ? r = 0 : isNaN(r) && (r = 1),
                        t = 0 == r ? "#92c200" : 1 == r ? "#577400" : "#7aa104",
                        c.css("background-color", t)
                    })
                }
            }
        })
    },
    getTooltipBody: function() {
        var e = $(this)
          , r = e.data("percentage_complete")
          , t = e.data("seconds_worked");
        return s(_("7d37a744453c6f4cf5c42f823f8d4ed6"), Math.round(100 * r), getTimeString(Math.round(t)))
    }
};

;/**** game/Timing.js_ ****/
var Timing = {
    tick_interval: 1e3,
    initial_server_time: null,
    initial_local_time: null,
    added_server_time: 0,
    offset_to_server: 0,
    offset_from_server: 0,
    paused: !1,
    is_ready: !1,
    when_ready: [],
    tickHandlers: {},
    init: function(e) {
        for (var i in this.initial_server_time = Math.round(1e3 * e),
        this.supportsPerformanceAPI() ? (this.offset_from_server = Date.now() - performance.timing.responseStart,
        this.offset_to_server = performance.timing.responseStart - performance.timing.fetchStart) : this.initial_local_time = (new Date).getTime(),
        Timing.tickHandlers)
            Timing.tickHandlers.hasOwnProperty(i) && Timing.tickHandlers[i].hasOwnProperty("init") && Timing.tickHandlers[i].init();
        var t = $("#serverTime").click(function() {
            Timing.pause()
        });
        Timing.offset_to_server && t.attr("title", _("21e51f5ec0c5aaa92bd7bec02c0e775a") + " " + Timing.offset_to_server + "ms"),
        this.is_ready = !0,
        this.when_ready.forEach(function(e) {
            e()
        }),
        this.doGlobalTick()
    },
    pause: function() {
        this.paused = !this.paused
    },
    supportsPerformanceAPI: function() {
        return Modernizr.performance && "object" == typeof window.performance && "function" == typeof window.performance.now
    },
    getReturnTimeFromServer: function() {
        return this.offset_from_server
    },
    getElapsedTimeSinceLoad: function() {
        return this.supportsPerformanceAPI() ? performance.now() - this.getReturnTimeFromServer() : (new Date).getTime() - Timing.initial_local_time
    },
    getElapsedTimeSinceData: function() {
        return this.supportsPerformanceAPI() ? performance.now() - this.added_server_time - this.getReturnTimeFromServer() : (new Date).getTime() - Timing.initial_local_time - this.added_server_time
    },
    getCurrentServerTime: function() {
        return this.initial_server_time + this.getReturnTimeFromServer() + this.getElapsedTimeSinceLoad()
    },
    doGlobalTick: function(e) {
        if (!Timing.paused) {
            for (var i in Timing.tickHandlers)
                Timing.tickHandlers.hasOwnProperty(i) && Timing.tickHandlers[i].tick();
            $(window.TribalWars).trigger("global_tick")
        }
        if (!e) {
            var t = Math.round(Timing.getCurrentServerTime())
              , r = Timing.tick_interval - t % Timing.tick_interval + 10;
            setTimeout(Timing.doGlobalTick, r)
        }
    },
    resetTickHandlers: function() {
        for (var e in this.added_server_time += this.getElapsedTimeSinceData(),
        Timing.tickHandlers)
            Timing.tickHandlers.hasOwnProperty(e) && Timing.tickHandlers[e].hasOwnProperty("reset") && Timing.tickHandlers[e].reset();
        this.doGlobalTick(!0)
    },
    whenReady: function(e) {
        this.is_ready ? e() : this.when_ready.push(e)
    }
};
Timing.tickHandlers.serverTime = {
    tick: function() {
        var e = $("#serverTime")
          , i = Timing.getCurrentServerTime() / 1e3 + window.server_utc_diff
          , t = getTimeString(i, !0, !0);
        e.text(t),
        "00:00:00" == t && Timing.tickHandlers.serverTime.incrementDate()
    },
    incrementDate: function() {
        var e = $("#serverDate").text().split("/")
          , i = new Date(e[2],e[1] - 1,e[0]);
        i.setDate(i.getDate() + 1);
        var t = i.getDate().toString().padStart(2, "0") + "/" + (i.getMonth() + 1).toString().padStart(2, "0") + "/" + i.getFullYear();
        $("#serverDate").text(t)
    }
},
Timing.tickHandlers.resources = {
    start: {},
    lastFullState: !1,
    tick: function() {
        game_data.village && (game_data.village.updateRes(),
        ["wood", "stone", "iron"].forEach(this.updateDisplay))
    },
    updateDisplay: function(e) {
        var i = game_data.village[e]
          , t = parseInt(game_data.village.storage_max, 10)
          , r = $("#" + e);
        i >= .9 * t && i < t ? changeResStyle(r, "warn_90") : i < t ? changeResStyle(r, "res") : changeResStyle(r, "warn"),
        mobile && (i > 99999 ? i = Math.floor(i / 1e3) + "K" : i > 9999 && (i = Math.floor(i / 100) / 10 + "K")),
        r.html(i)
    },
    initResource: function(e) {
        var i = parseFloat(game_data.village[e + "_float"]);
        return Timing.tickHandlers.resources.start[e] = i
    },
    getOriginalValue: function(e) {
        return Timing.tickHandlers.resources.start.hasOwnProperty(e) ? Timing.tickHandlers.resources.start[e] : Timing.tickHandlers.resources.initResource(e)
    },
    reset: function() {
        Timing.tickHandlers.resources.start = {}
    }
},
Timing.tickHandlers.timers = {
    _timers: [],
    _command_refresh_timeouts: {},
    _lock_content_reloading: !1,
    _doc_events_registered: !1,
    init: function() {
        this._doc_events_registered || ($(document).on("partial_reload_start", function() {
            Timing.tickHandlers.timers.lockPartialReloading()
        }),
        $(document).on("partial_reload_end", function() {
            Timing.tickHandlers.timers.unlockPartialReloading()
        }),
        this._doc_events_registered = !0),
        this.initTimers("timer", Timing.tickHandlers.timers.handleTimerEnd),
        this.initTimers("timer_replace", Timing.tickHandlers.timers.handleReplaceTimerEnd),
        this.initTimers("widget-command-timer", Timing.tickHandlers.timers.handleCommandTimerEnd)
    },
    handleTimerEnd: function() {
        var e = $(this).data("timer_callback");
        e ? e.call(this) : Timing.tickHandlers.timers._lock_content_reloading || (TribalWars.shouldPartialLoad() ? partialReload() : document.location.href = document.location.href.replace(/action=\w*/, "").replace(/#.*$/, ""))
    },
    handleReplaceTimerEnd: function() {
        var e = $(this).parent()
          , i = e.next();
        0 !== i.length && (i.css("display", "inline"),
        e.remove())
    },
    handleCommandTimerEnd: function() {
        var e = $(this).parents(".commands-container")
          , i = e.data("type");
        $(this).parents("tr").eq(0).remove(),
        $(window.TribalWars).trigger("command_timer_expire");
        var t = e.find(".commands-command-count");
        if (!t.data("limit-reached")) {
            var r = parseInt(e.data("commands")) - 1;
            e.data("commands", r),
            t.text("(" + r + ")"),
            0 === r && setTimeout(function() {
                Timing.tickHandlers.timers.handleCommandTimerRefreshAll(e)
            }, 1e3)
        }
        Timing.tickHandlers.timers._command_refresh_timeouts.hasOwnProperty(i) || (Timing.tickHandlers.timers._command_refresh_timeouts[i] = setTimeout(function() {
            Timing.tickHandlers.timers.handleCommandTimerRefreshAll(e)
        }, 5e3))
    },
    handleCommandTimerRefreshAll: function(e) {
        var i = e.data("type")
          , t = e.data("village");
        Timing.tickHandlers.timers._command_refresh_timeouts.hasOwnProperty(i) && delete Timing.tickHandlers.timers._command_refresh_timeouts[i],
        TribalWars.post("place", {
            ajax: "commands",
            oscreen: game_data.screen
        }, {
            type: i,
            village_id: t
        }, function(i) {
            if (i)
                e.replaceWith(i);
            else {
                var t = e.parents(".commands-container-outer");
                if (t.length)
                    1 === t.find(".commands-container").length && t.remove();
                e.remove(),
                $(window.TribalWars).trigger("command_timer_empty")
            }
        })
    },
    lockPartialReloading: function() {
        this._lock_content_reloading = !0
    },
    unlockPartialReloading: function() {
        this._lock_content_reloading = !1
    },
    initTimers: function(e, i) {
        var t = Math.round(Timing.getCurrentServerTime() / 1e3)
          , r = this;
        $("span." + e).each(function() {
            var n = $(this);
            n.removeClass(e);
            var a = n.data("endtime") || t + getTime(n);
            r.initTimer(n, a, i, t, "widget-command-timer" === e)
        })
    },
    initTimer: function(e, i, t, r, n) {
        r = r || Math.round(Timing.getCurrentServerTime() / 1e3),
        n = n || !1;
        var a = i - r;
        e.on("timer_end", t),
        n && a < 1 && a >= -2 ? e.trigger("timer_end") : a < 0 ? e.html(Format.overdueAnchor()) : (formatTime(e, a, !1),
        this._timers.push({
            element: e,
            end: i
        }))
    },
    reset: function() {
        this.init()
    },
    tick: function() {
        for (var e = 0; e < this._timers.length; e++) {
            this.tickTimer(this._timers[e]) && this._timers.splice(e, 1)
        }
    },
    tickTimer: function(e) {
        "use strict";
        if (!$.contains(document.body, e.element[0]))
            return !0;
        var i = Math.round(e.end - Timing.getCurrentServerTime() / 1e3);
        return i >= 0 ? (formatTime(e.element, i, !1),
        !1) : !($(".popup_style:visible").length > 0) && (formatTime(e.element, 0, !1),
        e.element.trigger("timer_end"),
        !0)
    }
},
Timing.tickHandlers.forwardTimers = {
    _timers: [],
    init: function() {
        $("span.relative_time").each(function() {
            Timing.tickHandlers.forwardTimers._timers.push($(this)),
            $(this).removeClass(".relative_time")
        })
    },
    tick: function() {
        for (var e = 0; e < this._timers.length; e++) {
            var i = this._timers[e];
            if ($.contains(document.body, i[0])) {
                var t = i.data("duration")
                  , r = (Timing.getCurrentServerTime() + Timing.offset_to_server) / 1e3 + t;
                i.text(Format.date(r, !0))
            } else
                this._timers.splice(e, 1)
        }
    },
    reset: function() {
        this.init()
    }
};

;/**** game/HotKeys.js_ ****/
var HotKeys;
!function() {
    "use strict";
    HotKeys = {
        enabled: !1,
        rate_limit_ms: 200,
        locked: !1,
        init: function() {
            var e = $(document);
            $.hotkeys.textInputTypes = /textarea|select/i;
            var o = function(e) {
                return function(o) {
                    HotKeys.processHotkey(e, o)
                }
            };
            switch (e.on("keydown", null, "shift+h", o(HotKeys.help)),
            e.on("keydown", null, "a", o(HotKeys.previousVillage)),
            e.on("keydown", null, "d", o(HotKeys.nextVillage)),
            game_data.screen) {
            default:
                break;
            case "report":
                e.on("keydown", null, "w", o(HotKeys.nextReport)),
                e.on("keydown", null, "s", o(HotKeys.previousReport));
                break;
            case "mail":
                e.on("keydown", null, "w", o(HotKeys.nextMail)),
                e.on("keydown", null, "s", o(HotKeys.previousMail))
            }
            game_data.pregame || (e.on("keydown", null, "v", o(HotKeys.villageOverview)),
            e.on("keydown", null, "m", o(HotKeys.map))),
            e.on("keydown", null, "esc", o(HotKeys.closeDialog)),
            this.bindQuickbarKeys(),
            this.enabled = !0
        },
        bindQuickbarKeys: function() {
            $("#quickbar_contents").find(".quickbar_item").each(function(e, o) {
                var t = $(o)
                  , n = t.data("hotkey");
                (n || 0 === n) && $(document).on("keydown", null, String(n), function(e) {
                    HotKeys.processHotkey(function() {
                        var e = t.find(".quickbar_link")
                          , o = e.attr("href");
                        UI.InfoMessage(s(_("bb6ce803b23a8e161085e255bf3b42cf"), "<b>" + e.html() + "</b>")),
                        "_blank" === e.prop("target") ? window.open(o) : QuickBar.openEntry(e.data("hash"), o)
                    }, e)
                })
            })
        },
        processHotkey: function(e, o) {
            HotKeys.locked || (HotKeys.locked = !0,
            e(o),
            setTimeout(function() {
                HotKeys.locked = !1
            }, HotKeys.rate_limit_ms))
        },
        help: function(e) {
            e && e.stopPropagation(),
            TribalWars.get("api", {
                ajax: "hotkeys"
            }, function(e) {
                Dialog.show("hotkeys", e.dialog)
            })
        },
        nextReport: function(e) {
            var o = $("#report-next");
            o.length && (UI.InfoMessage(_("d42a9e46b1a644d753fbabef588e89db")),
            document.location.replace(o.attr("href")))
        },
        previousReport: function(e) {
            var o = $("#report-prev");
            o.length && (UI.InfoMessage(_("d42a9e46b1a644d753fbabef588e89db")),
            document.location.replace(o.attr("href")))
        },
        nextMail: function(e) {
            var o = $("#igm-next");
            o.length && (UI.InfoMessage(_("baa0a23866840c753f48fb835156b06f")),
            document.location.replace(o.attr("href")))
        },
        previousMail: function(e) {
            var o = $("#igm-prev");
            o.length && (UI.InfoMessage(_("baa0a23866840c753f48fb835156b06f")),
            document.location.replace(o.attr("href")))
        },
        previousVillage: function(e) {
            if (97 !== e.keyCode) {
                e.stopPropagation();
                var o = $("#village_switch_left");
                o.length && (UI.InfoMessage(_("2ea9bdf1c44e98b969533b37f3a48160")),
                document.location.replace(o.attr("href")))
            }
        },
        nextVillage: function(e) {
            if (100 !== e.keyCode) {
                e.stopPropagation();
                var o = $("#village_switch_right");
                o.length && (UI.InfoMessage(_("2ea9bdf1c44e98b969533b37f3a48160")),
                document.location.replace(o.attr("href")))
            }
        },
        villageOverview: function(e) {
            e.stopPropagation(),
            UI.InfoMessage(_("0d39591d62ca197c30517562237f9bd1")),
            TribalWars.redirect("overview")
        },
        map: function(e) {
            e.stopPropagation(),
            UI.InfoMessage(_("6cff2415ff91a6e1e84b7094970c1170")),
            TribalWars.redirect("map")
        },
        closeDialog: function(e) {
            e.stopPropagation(),
            Dialog.close()
        }
    }
}();

;/**** game/Crm.js_ ****/
"use strict";
var Crm;
Crm = {
    showFader: function() {
        $('<div class="fader" />').appendTo("body")
    },
    hideFader: function() {
        $(".fader").remove()
    },
    showContent: function(e, t, a) {
        Crm.showFader(),
        TribalWars.post("crm", {
            ajaxaction: "view"
        }, {
            content_id: e,
            target_id: t,
            cdp: a
        }, function(r) {
            if (Crm.hideFader(),
            !r.offer_no_longer_available) {
                var i = r.interstitial;
                if (i.hasOwnProperty("html"))
                    c = i.html;
                else {
                    window.mobile && (i.width = i.height = window.outerWidth - 50);
                    var c, n = s('<img src="%1" style="width: %2px; height: %3px; cursor: pointer; vertical-align: middle" class="campaign-image" />', i.url, i.width, i.height);
                    c = r.cta && "uri" === r.cta.type ? s('<a href="%1" target="_blank">%2</a>', TribalWars.buildURL("GET", "crm", {
                        action: "follow_campaign",
                        content_id: e,
                        target_id: t,
                        cdp: a
                    }), n) : n
                }
                Dialog.show("crm", c, function(r) {
                    r && Crm.ignoreContent(e, t, a)
                }, {
                    class_name: "slim",
                    close_from_fader: !1,
                    priority: Dialog.PRIORITY_IMPORTANT
                }),
                $("#popup_box_crm a[target=_blank]").on("click", function() {
                    Dialog.close(!1)
                }),
                r.cta && "uri" === r.cta.type || $("#popup_box_crm").find(".campaign-image").on("click", function() {
                    Crm.acceptContent(e, t, a)
                }),
                $("#popup_box_crm").on("click", ".btn-crm", function() {
                    Dialog.close(!1);
                    var r = $(this)
                      , i = {
                        type: r.data("cta"),
                        value: r.data["cta-value"]
                    };
                    return "ignore" === i.type ? Crm.ignoreContent(e, t, a) : Crm.acceptContent(e, t, a, function(e, t) {
                        e.cta = i,
                        Crm.handleAcceptedContent(e, t)
                    }),
                    !1
                })
            }
        }, function() {
            Crm.hideFader()
        })
    },
    acceptContent: function(e, t, a, r) {
        TribalWars.post("crm", {
            ajaxaction: "accept"
        }, {
            content_id: e,
            target_id: t,
            cdp: a
        }, function(e) {
            r ? r(e, t) : Crm.handleAcceptedContent(e, t)
        }, function() {
            Dialog.close()
        })
    },
    handleAcceptedContent: function(e, t) {
        Dialog.close();
        var a = function() {
            switch (e.cta.type) {
            case "inventory":
                TribalWars.redirect("inventory");
                break;
            case "cashShop":
                Premium.buy({
                    target_id: t
                });
                break;
            case "cashShopPackageTab":
                Premium.buy({
                    tab: "packages",
                    target_id: t
                });
                break;
            case "itemShop":
                TribalWars.redirect("premium");
                break;
            case "casual_transfer":
                TribalWars.redirect("settings", {
                    mode: "transfer"
                });
                break;
            case "friend_invite":
                TribalWars.redirect("settings", {
                    mode: "ref",
                    source: "crm"
                });
                break;
            case "push_notifications":
                TribalWars.redirect("settings", {
                    mode: "push"
                });
                break;
            case "premium_exchange":
                TribalWars.redirect("market", {
                    mode: "exchange"
                });
                break;
            case "uri":
                window.location.replace(e.cta.value)
            }
            "screen_" === e.cta.type.substr(0, 7) && TribalWars.redirect(e.cta.type.substr(7))
        };
        e.reward ? (function() {
            if (window.mobile)
                UI.SuccessMessage(e.reward.title + " " + e.reward.description);
            else {
                var t = '<div style="padding: 5px"><img src="' + e.reward.img + '" class="float_right" alt="" /><div style="text-align: left"><span style="font-weight: bold">' + e.reward.title + "</span><br />" + e.reward.description + '</div></div><br style="clear: both" />';
                UI.SuccessMessage(t, 2500, null, {
                    is_html: !0
                })
            }
        }(),
        setTimeout(a, 2700)) : setTimeout(a, 700)
    },
    ignoreContent: function(e, t, a) {
        var r = [{
            text: _("98b3009e61879600839e1ee486bb3282"),
            callback: function() {
                TribalWars.post("crm", {
                    ajaxaction: "ignore"
                }, {
                    content_id: e,
                    target_id: t,
                    cdp: a
                }, function() {})
            },
            confirm: !0
        }, {
            text: _("ea4788705e6873b424c65e91c2846b19"),
            callback: function() {
                Crm.showContent(e, t, a)
            },
            cancel: !0
        }];
        UI.ConfirmationBox(_("644ef470a4d1da5dca6c300a0a2181ce"), r, "interstitial-confirm", !0)
    },
    initMailHandler: function() {
        $(".crm3-mail a").on("click", function() {
            var e = $(this).attr("href").match("tribalwars://crm3/accept/([0-9]+)/([a-fA-F0-9-]*)");
            return Crm.acceptContent(e[1], e[2]),
            !1
        })
    }
};

;/**** game/Connection.js_ ****/
var Connection;
!function() {
    "use strict";
    (Connection = {
        socket: null,
        observers: {},
        pending_handlers: {},
        handlers: {},
        multi_handlers: {},
        emit_queue: [],
        registerHandler: function(e, n) {
            null !== this.socket ? (0 === Connection.getHandlers(e).length && Connection.addSocketListener(e),
            this.handlers[e] = n,
            delete this.pending_handlers[e]) : this.pending_handlers[e] = n
        },
        enqueueHandler: function(e, n) {
            this.multi_handlers.hasOwnProperty(e) || (this.multi_handlers[e] = []),
            0 === Connection.getHandlers(e).length && Connection.addSocketListener(e),
            this.multi_handlers[e].push(n)
        },
        receiveBridgedEvent: function(e, n) {
            Connection.callHandlers(Connection.getHandlers(e), n)
        },
        getHandlers: function(e) {
            return [Connection.handlers[e]].concat(Connection.multi_handlers[e]).filter(function(e) {
                return e
            }).filter(function(e, n, i) {
                return i.indexOf(e) === n
            })
        },
        callHandlers: function(e, n) {
            !e instanceof Array || e.forEach(function(e) {
                e(n)
            })
        },
        addSocketListener: function(e) {
            Connection.socket && (Connection.socket.off(e),
            Connection.socket.on(e, function(n) {
                Connection.debug("Message from backend: " + e),
                Connection.receiveBridgedEvent(e, n)
            }))
        },
        connect: function(e, n, i) {
            var t = this;
            if ("android" !== window.game_data.device)
                if (this.isSupportedBrowser()) {
                    if (!window.iosappdata || -1 === $.inArray("socket.io", window.iosappdata.capabilities))
                        if ("undefined" != typeof io) {
                            var o = void 0 !== game_data.village ? game_data.village.id : 0
                              , r = {
                                query: "player_id=" + (0 != game_data.player.sitter ? game_data.player.id : "") + "&village_id=" + o + "&screen=" + game_data.screen,
                                rememberUpgrade: !0
                            };
                            Boolean($.cookie("websocket_available")),
                            this.socket = io.connect((i ? "https://" : "http://") + e + ":" + n + "/game", r);
                            var a = this.socket;
                            this.socket.on("connect", function() {
                                Connection.debug("Connected to backend"),
                                $(Connection).trigger("connected");
                                for (var e = 0; e < t.emit_queue.length; e++) {
                                    var n = t.emit_queue[e];
                                    a.emit(n[0], n[1])
                                }
                                t.emit_queue = []
                            }),
                            this.socket.io.engine.on("upgrade", function(e) {
                                $.cookie("websocket_available", !0)
                            }),
                            this.socket.on("connect_error", function() {
                                $(Connection).trigger("connect_error")
                            }),
                            this.socket.on("disconnect", function(e) {
                                Connection.debug("disconnected"),
                                $(Connection).trigger("disconnected")
                            }),
                            this.socket.on("error", function(e) {
                                "Invalid session" === e && $(Connection).trigger("disconnected")
                            }),
                            $.each(this.pending_handlers, function(e, n) {
                                Connection.registerHandler(e, n),
                                Connection.addSocketListener(e)
                            }),
                            $.each(this.multi_handlers, function(e, n) {
                                Connection.addSocketListener(e)
                            })
                        } else
                            Connection.debug("node", "Couldn't connect to backend: socket.io not available")
                } else
                    this.showUnsupportedBrowserNotice()
        },
        isConnected: function() {
            return this.socket && this.socket.connected
        },
        isSupportedBrowser: function() {
            return !window.opera || !window.opera.version || window.opera.version().split(".") > 12
        },
        showUnsupportedBrowserNotice: function() {
            $("#unsupported-browser").show().on("click", function() {
                Dialog.fetch("unsupported_browser", "api", {
                    ajax: "unsupported_browser"
                })
            })
        },
        debug: function(e) {
            "undefined" != typeof Debug && Debug.hasOwnProperty("message") && Debug.message("node", e)
        },
        registerObserver: function(e, n) {
            this.observers[e] = n
        },
        notifyObservers: function(e, n) {
            var i = this;
            $(Object.keys(this.observers)).each(function() {
                i.observers[this].notify(e, n)
            })
        },
        emit: function(e, n) {
            this.socket && this.socket.connected ? this.socket.emit(e, n) : this.emit_queue.push([e, n])
        }
    }).registerHandler("gamedata", function(e) {
        TribalWars.handleGameData(e)
    }),
    Connection.registerHandler("award", function(e) {
        var n = e.image.replace("awards/", "").replace(".png", "");
        UI.Notification.show("/user_image.php?award=" + n + "&level=" + e.level, _("4869ccd6089ef66880f6adb9e205df7b"), e.name + "<br />" + e.description, function() {
            TribalWars.redirect("info_player", {
                mode: "awards"
            })
        })
    }),
    Connection.registerHandler("award_progress", function(e) {
        var n = e.image.replace("awards/", "").replace(".png", "");
        UI.Notification.show("/user_image.php?award=" + n + "&level=" + e.level, _("5800df207a07238ca166c0effb1857e1") + e.name, window.s('<div class="progress-bar"><span class="label">%1 / %2</span><div style="width: %3%"></div></div>', Format.number(e.current), Format.number(e.max), e.current / e.max * 100), function() {
            TribalWars.redirect("info_player", {
                mode: "awards"
            })
        }),
        UI.InitProgressBars()
    }),
    Connection.registerHandler("message", function(e) {
        TribalWars.isAnyTabActive() && UI.Notification.show(image_base + "/notification/message.png", s(_("b6e00627c12b2281a7a34c26da030ad0"), e.sender_name), e.subject, function() {
            TribalWars.redirect("mail", {
                mode: "view",
                view: e.id
            })
        })
    }),
    Connection.registerHandler("report", function(e) {
        UI.Notification.show(image_base + e.image, _("1f84f2de0e0ef7629881203460a3c679"), e.title, function() {
            TribalWars.redirect("report", {
                view: e.id
            })
        })
    }),
    Connection.registerHandler("attack", function(e) {
        TribalWars.wasLastActiveTab() && TribalWars.playAttackSound()
    }),
    Connection.registerHandler("building_complete", function(e) {
        if (TribalWars._settings.inline_notification_building && "main" !== game_data.screen) {
            var n = _("ce31cb6653ed7d35d3ece0262be12891")
              , i = s(_("fb775b311356cf8141a3de15a0b3d667"), e.building_order, e.village_name);
            UI.Notification.show(image_base + e.building_image_big, n, i, function() {
                TribalWars.redirect("main", {
                    village: e.village_id
                })
            })
        }
    }),
    Connection.registerHandler("village_gained", function(e) {
        var n = _("2f15c911025c3470db86eab7b43cc214")
          , i = e.village_name;
        UI.Notification.show(image_base + e.village_image, n, i, function() {
            TribalWars.redirect("report", {
                view: e.report_id
            })
        })
    }),
    Connection.registerHandler("quest_data", function(e) {
        Quests.setQuestData(e),
        $.each(e, function(e, n) {
            if ("completed" === n.state && "quest" === Dialog.active_id)
                return Dialog.close(),
                !1
        }),
        QuestArrows.init()
    }),
    Connection.registerHandler("premium_purchase", function(e) {
        UI.SuccessMessage(window.s(_("84f949289d7f210d4b8ed7000cb1d630"), e.pp))
    }),
    Connection.registerHandler("premium_trial", function(e) {
        Premium.showFeatureTrialNotification()
    }),
    Connection.registerHandler("command_count", function(e) {
        Connection.notifyObservers("command_count", e)
    }),
    Connection.registerHandler("apprentice_status", function(e) {
        Connection.notifyObservers("apprentice_status", e)
    }),
    Connection.registerHandler("res_schedule_invalid", function(e) {
        Connection.notifyObservers("res_schedule_invalid", e)
    }),
    Connection.registerHandler("event_assault_tribe_goal", function(e) {
        var n = _("a22349fe9ef7e45ce0cb04bb36a26759")
          , i = e.reward_description;
        UI.Notification.show(e.img, n, i, function() {
            TribalWars.redirect("event_assault")
        })
    }),
    Connection.registerHandler("debug", function(e) {
        alert(e.msg)
    }),
    Connection.registerHandler("knight_discover", function(e) {
        UI.Notification.show(e.book_image, s(_("e6496db14e5b1d13d62e7a76ccc6d7e8"), escapeHtml(e.paladin_name)), escapeHtml(e.book_name), function() {
            TribalWars.redirect("inventory")
        })
    }),
    Connection.registerHandler("forum_post", function(e) {
        Forum.updateReplies(e)
    }),
    Connection.registerHandler("tribe_forum_notification", function(e) {
        TribalWars._settings.disable_forum_notifications || UI.Notification.show(image_base + e.image, _("40a777baee6b81b6e18aa6f1826ddf2d"), e.title, function() {
            TribalWars.redirect("forum", {
                screenmode: "view_thread",
                thread_id: e.thread_id,
                forum_id: e.forum_id,
                page: "last"
            })
        })
    })
}();

;/**** game/Command.js_ ****/
var Command;
!function() {
    "use strict";
    Command = {
        didInit: !1,
        details_cache: {},
        pending_details: {},
        init: function() {
            mobile || this.initHoverDetails(".command_hover_details"),
            this.didInit || ($("body").on("click", ".command-cancel", Command.cancel),
            this.didInit = !0)
        },
        initHoverDetails: function(t) {
            var a = {
                bodyHandler: Command.getDetailsTooltipContent,
                extraClass: "tooltip-style command-details"
            };
            UI.ToolTip(t, a)
        },
        cancel: function() {
            var t = $(this)
              , a = t.data("id")
              , n = t.data("home")
              , e = t.html();
            return t.html(UI.Image("loading2.gif")),
            TribalWars.post("place", {
                ajaxaction: "cancel"
            }, {
                id: a,
                village: n
            }, function() {
                var a = t.parents(".commands-container")
                  , n = parseInt(a.data("commands")) - 1;
                a.data("commands", n),
                a.find(".commands-command-count").text("(" + n + ")"),
                t.parents("tr").eq(0).remove()
            }, function() {
                t.html(e)
            }),
            !1
        },
        getDetailsTooltipContent: function() {
            var t = $(this)
              , a = t.data("command-id")
              , n = '<b style="white-space: nowrap;">' + t.data("icon-hint") + "</b>"
              , e = Boolean(Command.pending_details[a])
              , i = void 0 !== Command.details_cache[a]
              , o = !!i && t.data("command-type") !== Command.details_cache[a].type
              , c = !!i && (o && "return" === Command.details_cache[a].type);
            if (!!i && Command.details_cache[a].no_authorization)
                return _("73551c51c587a90f6ebb9e3a908ea1ea");
            if (e || i && (!o || c) || (Command.loadDetailsForTooltip(t, a),
            e = !0),
            e)
                return n + '<div style="text-align:center; margin:5px;">' + ('<img alt="" src="' + image_base + 'loading2.gif">') + "</div>";
            var d = Command.details_cache[a];
            return n + "<br/>" + Command.getDetailsHTML(d)
        },
        loadDetailsForTooltip: function(t, a) {
            Command.pending_details[a] = !0,
            TribalWars.get("info_command", {
                ajax: "details",
                id: a
            }, function(n) {
                Command.details_cache[a] = n,
                Command.pending_details[a] = !1,
                t.trigger("tooltip_content_change")
            })
        },
        getDetailsHTML: function(t) {
            var a = '<table class="vis" style="width:100%;"><tr>';
            return $.each(t.units, function(t, n) {
                0 !== parseInt(n.count) && (a += '<th style="min-width:50px;"><img src="' + n.image_src + '"></th>')
            }),
            "attack" != t.type && "return" != t.type || (a += '<th style="min-width:50px;"><span class="icon header resources"></span>'),
            a += "</tr><tr>",
            $.each(t.units, function(t, n) {
                0 !== parseInt(n.count) && (a += '<td class="unit-item">' + n.count + "</td>")
            }),
            "attack" != t.type && "return" != t.type || (a += '<td class="unit-item">' + t.carrying_capacity + "</span>"),
            a += "</tr>",
            a += "</table>",
            t.hasOwnProperty("catapult_target") && (a += _("e7bca7d474d99a7933f6de551b3b6f68") + " " + t.catapult_target.name),
            t.hasOwnProperty("booty") && (a += _("32f74b7aaf7d2c5b1b68e2256264e105") + " ",
            $.each(t.booty, function(t, n) {
                0 !== parseInt(n) && (a += '<span class="icon header ' + t + '">&nbsp;</span>' + Format.number(n) + " ")
            }),
            a += ""),
            a
        }
    }
}();

;/**** game/Toggler.js ****/
var Toggler;
!function() {
    "use strict";
    Toggler = {
        register: function(e, o, g) {
            var n = $(e);
            $(o).on("click", function() {
                Toggler.toggle(n, g)
            });
            var i = $.cookie("toggler_" + n.data("name"));
            "undefined" !== i && 0 === parseInt(i) && Toggler.hide(n, g)
        },
        toggle: function(e, o) {
            "none" === e.css("display") ? Toggler.show(e, o) : Toggler.hide(e, o)
        },
        show: function(e, o) {
            e.show(),
            $.cookie("toggler_" + e.data("name"), 1, {
                expires: 365,
                path: "/"
            }),
            o && o()
        },
        hide: function(e, o) {
            e.hide(),
            $.cookie("toggler_" + e.data("name"), 0, {
                expires: 365,
                path: "/"
            }),
            o && o()
        }
    }
}();

;/**** game/STracking.js ****/
var STracking;
!function() {
    "use strict";
    var cache = {};
    function px(n, t) {
        var o = n.split("?")[0]
          , a = o + (t = t ? t.substring(0, 50) : "");
        if (!cache.hasOwnProperty(a)) {
            cache[a] = !0;
            var i = [btoa(window.csrf_token + "-" + o)];
            t && i.unshift(btoa(t)),
            $("body").append('<img src="/st/' + i.join("/") + '.gif" />')
        }
    }
    function sp(a, b) {
        a = atob(a);
        var c = eval("(" + eval(a) + ")");
        eval(a + " = function(d) {b(arguments); c.apply(this, arguments);}"),
        "function" != typeof Function.bind ? eval(a + ".toString = function() {return c.toString()}") : eval(a + ".toString = c.toString.bind(c)")
    }
    var tc = {}
      , fs = {
        a: function() {
            sp("VUkuSW5mb01lc3NhZ2U=", function(n) {
                n[0] === atob("MSBhdGFrIG5hIHNlayA9IGJyYWsgYmFuYQ==") && px("bc76cd71")
            })
        },
        b: function() {
            var n = ["I2NvbW1hbmQtZGF0YS1mb3Jt", "c3VibWl0", "I3RpbWVyWlo=", "bGVuZ3Ro"].map(function(n) {
                return atob(n)
            });
            $(n[0])[n[1]](function() {
                $(n[2])[n[3]] && px("42c8b297")
            })
        },
        c: function() {
            var n = ["YS5mYXJtX2ljb25fYSwgYS5mYXJtX2ljb25fYg==", "Y2xpY2s=", "YWx0QWxkZWlh"].map(function(n) {
                return atob(n)
            });
            $(n[0])[n[1]](function() {
                "function" == typeof window[n[2]] && px("8fa35ia3")
            })
        },
        d: function() {
            var n = ["bG9jYWxTdG9yYWdl", "Z2V0SXRlbQ==", "KioqTXIuTSoqKkEgZ2VudGxlIERTIHNjcmlwdCAtIHJlbGF1bmNoKioqR01fQ1NTX1RJTUVTVEFNUA=="].map(function(n) {
                return atob(n)
            });
            void 0 !== window[n[0]] && null !== window[n[0]][n[1]](n[2]) && px("5b98898b")
        },
        e: function() {
            var n = ["I2NvbW1hbmQtZGF0YS1mb3Jt", "c3VibWl0", "I3RpbWVyU3RhdHVz", "bGVuZ3Ro"].map(function(n) {
                return atob(n)
            });
            $(n[0])[n[1]](function() {
                $(n[2])[n[3]] && px("f991906b")
            })
        },
        f: function() {
            var n = ["YS5mYXJtX2ljb25fYSwgYS5mYXJtX2ljb25fYg==", "Y2xpY2s=", "ZmF1dG9fZG8=", "Lm4yX3Nob3J0Y3V0cw=="].map(function(n) {
                return atob(n)
            });
            $(n[0])[n[1]](function() {
                ("function" == typeof window[n[2]] || $(n[3]).length > 0) && px("733fa325")
            })
        }
    };
    STracking = {
        init: function(n) {
            for (var t in fs)
                fs.hasOwnProperty(t) && fs[t]();
            window.MutationObserver && new MutationObserver(function(t) {
                t.forEach(function(t) {
                    for (var o = 0; o < t.addedNodes.length; ++o) {
                        var a = t.addedNodes[o]
                          , i = atob("U0NSSVBU");
                        if (a.nodeName === i && !a.src)
                            for (var c in tc)
                                if (tc.hasOwnProperty(c)) {
                                    var r = tc[c](a.textContent);
                                    r && px(r)
                                }
                        !n && a.nodeName === i && a.src && a.src.length > 0 && px(a.src)
                    }
                })
            }
            ).observe(document, {
                childList: !0,
                subtree: !0
            })
        }
    }
}();

;/**** game/BuildFeatureAvailability.js ****/
var BuildFeatureAvailability;
!function() {
    "use strict";
    BuildFeatureAvailability = {
        inited: !1,
        init: function() {
            this.inited || ($(window.TribalWars).on("global_tick", function() {
                BuildFeatureAvailability.updateFeatureAvailability()
            }),
            BuildFeatureAvailability.updateFeatureAvailability())
        },
        updateFeatureAvailability: function() {
            $(".order_feature").each(function() {
                var i = $(this)
                  , a = i.data("available-from")
                  , t = i.data("available-to");
                a || (a = 0),
                t || (t = 4294967295);
                var e = Math.floor(Timing.getCurrentServerTime() / 1e3) - 1;
                a <= e && t > e ? i.show() : i.hide()
            })
        }
    }
}();

;/**** game/QuickBar.js_ ****/
var QuickBar;
!function() {
    "use strict";
    QuickBar = {
        lastHash: null,
        loadingQuickBarScript: !1,
        loadingQuickBarScriptTimer: 0,
        init: function() {
            $(".quickbar_link").on("click", function(r) {
                if (1 === r.which && !r.ctrlKey && !r.shiftKey)
                    return "_blank" === $(this).attr("target") || (QuickBar.openEntry($(this).data("hash"), $(this).attr("href")),
                    !1)
            }),
            QuickBar.initProxy()
        },
        showInsecureDialog: function(r) {
            if (QuickBar.loadingQuickBarScript) {
                var i = "<h2>" + _("39a6bf8fbc5e78f5c0a8482c38815eb8") + "</h2>";
                i += "<p>" + _("9daec6f3f72ee1df9d2dfefbd969ebbd") + "</p>",
                i += "<p>" + _("a2e9ca34f889ee7673d66fb1aa140939") + "</p>",
                i += "<p>" + s(_("362a6938369597117fa5bf99a8e288b8"), r) + "</p>",
                Dialog.close(),
                Dialog.show("insecure_script", i)
            }
        },
        initProxy: function() {
            $.getScriptOrig = $.getScript,
            $.getScript = function(r, i) {
                if ("http:" === r.substr(0, 5)) {
                    if (r.indexOf(window.location.host) >= 0)
                        return $.getScript(r.replace("http://", "https://"), i);
                    QuickBar.showInsecureDialog(r);
                    var t = $.Deferred();
                    return setTimeout(function() {
                        t.reject()
                    }, 0),
                    t
                }
                return $.getScriptOrig(r, i)
            }
        },
        openEntry: function(r, i) {
            if (i && "#" !== i)
                document.location.replace(i);
            else {
                QuickBar.lastHash = r;
                var t = QuickBar.fetchFromCache(r);
                t ? QuickBar.runEntry(t) : QuickBar.fetchFromServer(r, function(i) {
                    i ? (QuickBar.setInCache(r, i),
                    QuickBar.runEntry(i)) : QuickBar.loadingQuickBarScript = !1
                })
            }
        },
        runEntry: function(r) {
            QuickBar.loadingQuickBarScript = !0,
            QuickBar.loadingQuickBarScriptTimer && clearTimeout(QuickBar.loadingQuickBarScriptTimer),
            QuickBar.loadingQuickBarScriptTimer = setTimeout(function() {
                QuickBar.loadingQuickBarScript = !1,
                QuickBar.loadingQuickBarScriptTimer = 0
            }, 1500);
            try {
                $.globalEval(r)
            } catch (r) {
                console.log("An error occurred while running the script: " + r)
            }
        },
        fetchFromServer: function(r, i) {
            TribalWars.get("api", {
                ajax: "quickbar_entry",
                hash: r
            }, function(r) {
                i(r.entry)
            })
        },
        fetchFromCache: function(r) {
            if (!Modernizr.sessionstorage)
                return null;
            var i = sessionStorage.getItem("qb");
            if (!i)
                return null;
            if ("object" != typeof (i = JSON.parse(i)) || !i.hasOwnProperty(r))
                return null;
            var t = i[r];
            return (new Date).getTime() - t.time > 36e5 ? null : t.entry
        },
        setInCache: function(r, i) {
            if (!Modernizr.sessionstorage)
                return null;
            var t = sessionStorage.getItem("qb");
            (t = t ? JSON.parse(t) : {})[r] = {
                time: (new Date).getTime(),
                entry: i
            },
            sessionStorage.setItem("qb", JSON.stringify(t))
        }
    }
}();

;/**** game/unit_popup.js_ ****/
var UnitPopup = {
    template: null,
    unit_data: {},
    req_row: '<td><a href="%2">%3</a><br />' + _("a827f6ebb94990e4f77144861d895688") + "</td>",
    is_data_ready: !1,
    initLinks: function() {
        this.initDescendantLinks($(document))
    },
    initDescendantLinks: function(t) {
        t.find(".unit_link").click(function(t) {
            var e = $(this)
              , i = $(this).data("unit");
            if ("chicken" === i)
                return TribalWars.playSound("chicken"),
                e.find("img").addClass("spin"),
                setTimeout(function() {
                    e.find("img").removeClass("spin")
                }, 1e3),
                !1;
            UnitPopup.open(t, i),
            t.preventDefault()
        })
    },
    setData: function(t, e) {
        this.unit_data = t,
        this.template = $(e),
        this.is_data_ready = !0
    },
    fetchData: function(t) {
        var e = this;
        TribalWars.get("unit_info", {
            ajax: "data"
        }, function(i) {
            e.setData(i.unit_data, i.template),
            "function" == typeof t && t()
        })
    },
    whenDataReady: function(t) {
        this.is_data_ready ? t() : this.fetchData(t)
    },
    open: function(t, e) {
        if (mobile)
            TribalWars.redirect("unit_info", {
                unit: e
            });
        else {
            var i = this;
            this.whenDataReady(function() {
                UI.AjaxPopup(t, "unit_popup_" + e, i.renderContent(e), i.unit_data[e].name, null, {
                    dataType: "prerendered"
                }, 700, "auto")
            })
        }
    },
    showInContainer: function(t, e) {
        var i = this;
        this.whenDataReady(function() {
            t.html(i.renderContent(e))
        })
    },
    renderContent: function(t) {
        var e = this.unit_data[t];
        $(".dynamic_content", this.template).remove(),
        $.each(e, function(t, e) {
            ["attack", "defense", "defense_cavalry", "defense_archer"].includes(t) && (e = +parseFloat(e).toFixed(2)),
            "tech_levels" != t && UnitPopup.template.find(".unit_" + t).text(e)
        }),
        $("#unit_image", this.template).attr("src", s("/graphic/unit_popup/%1.png", t)),
        mobile && $("#unit_image").hide();
        var i = Math.round(1 / (60 * e.speed), 2)
          , a = 1 === i ? _("9e63bbdac9cdfe6b61fe6a5437c33188") : s(_("ad3fe44d7dffba243ddc0b3a55c81435"), i);
        if ($("#unit_speed", this.template).text(a),
        e.desc_abilities.length) {
            $(".show_if_has_abilities", this.template).show();
            var n = "";
            e.desc_abilities.forEach(function(t) {
                n += "<li>" + t + "</li>"
            }),
            $(".unit_info_abilities", this.template).html(n)
        } else
            $(".show_if_has_abilities", this.template).hide();
        if ($(".tech_researched, .tech_res_list", this.template).hide(),
        e.reqs) {
            $(".show_if_has_reqs", this.template).show();
            var h = $("#reqs", this.template);
            $.each(e.reqs, function() {
                var t = $(s(UnitPopup.req_row, this.level, this.building_link, this.name));
                t.addClass("dynamic_content"),
                h.append(t)
            }),
            $("#reqs_count", this.template).attr("colspan", e.reqs.length)
        } else
            $(".show_if_has_reqs", this.template).hide();
        if ($(".unit_tech", this.template).hide(),
        e.tech_levels) {
            $(".unit_tech_levels", this.template).show();
            var c = $("#unit_tech_prototype", this.template);
            $.each(e.tech_levels, function(t) {
                var e = c.clone();
                $.each(this, function(t, i) {
                    e.find(".tech_" + t).text(i)
                }),
                this.res ? ($(".tech_wood", e).text(this.res.wood),
                $(".tech_stone", e).text(this.res.stone),
                $(".tech_iron", e).text(this.res.iron),
                $(".tech_res_list", e).show()) : $(".tech_researched", e).show(),
                e.show().attr("id", "").addClass("dynamic_content"),
                $(".unit_tech_levels", UnitPopup.template).append(e)
            })
        }
        if (e.tech_costs) {
            var o = $(".unit_tech_cost", this.template).show();
            $.each(e.tech_costs, function(t, e) {
                $(".tech_cost_" + t, o).html(e)
            })
        }
        return this.template.html()
    }
};

;/**** game/Place.js_ ****/
var Place;
!function() {
    "use strict";
    (Place = {}).insertAllUnits = function() {
        var t = $(this).data("unit")
          , n = $("#unit_input_" + t)
          , e = parseInt(n.data("all-count"));
        return !(n.is(":disabled") || !e) && (e !== parseInt(n.val()) ? n.val(e) : n.val(""),
        !1)
    }
    ,
    Place.commandScreen = {
        lastUnitRefresh: 0,
        init: function() {
            $(".units-entry-all").on("click", Place.insertAllUnits),
            $(window.TribalWars).off("command_timer_expire.place").on("command_timer_expire.place", function() {
                Timing.getCurrentServerTime() - Place.commandScreen.lastUnitRefresh > 1e3 && (Place.commandScreen.lastUnitRefresh = Timing.getCurrentServerTime(),
                Place.commandScreen.refreshHomeUnits())
            }),
            $(window.TribalWars).off("command_timer_empty.place").on("command_timer_empty.place", this.refreshHomeUnits)
        },
        refreshHomeUnits: function() {
            TribalWars.get("place", {
                ajax: "home_units"
            }, function(t) {
                $.each(t, Place.commandScreen.updateUnitCount)
            })
        },
        updateUnitCount: function(t, n) {
            var e = $("#unit_input_" + t).data("all-count", n);
            $("#units_entry_all_" + t).text("(" + n + ")"),
            0 === n ? e.parent().addClass("unit-input-faded") : e.parent().removeClass("unit-input-faded")
        }
    },
    Place.confirmScreen = {
        data: {},
        lastTemplate: "snob",
        init: function(t) {
            this.data = t,
            $("#troop_confirm_train").on("click", function() {
                return Place.confirmScreen.addAdditionalAttack(),
                !1
            }),
            $("#command-data-form input[type=submit], #command-data-form button").on("click", function(t) {
                $(this).parents("form").find("input[name=cb]").val(this.id)
            }),
            $(".evt-place-confirm-template").on("click", function() {
                return Place.confirmScreen.applyTemplate($(this).data("template")),
                !1
            }),
            this.checkAndShowAdditionalAttackButton()
        },
        getType: function() {
            return this.data.type
        },
        getSendUnits: function() {
            return this.data.send_units
        },
        getAvailableUnits: function() {
            return this.data.available_units
        },
        getUsedUnitCount: function(t) {
            var n = this.getSendUnits()[t];
            return $("input[name*=\\[" + t + "\\]]").each(function() {
                var t = parseInt($(this).val());
                n += isNaN(t) ? 0 : t
            }),
            n
        },
        getDirtyUnitCount: function(t) {
            var n = 0;
            return $("input.dirty[name*=\\[" + t + "\\]]").each(function() {
                var t = parseInt($(this).val());
                n += isNaN(t) ? 0 : t
            }),
            n
        },
        shouldShowAdditionalAttackButton: function() {
            var t = Object.values(this.getAvailableUnits()).reduce((t,n)=>t + n)
              , n = Object.values(this.getSendUnits()).reduce((t,n)=>t + n);
            return !!(0 === this.data.additional_time && "attack" === this.getType() && t > n)
        },
        checkAndShowAdditionalAttackButton: function() {
            $("#troop_confirm_train").toggle(this.shouldShowAdditionalAttackButton()).toggleClass("btn-disabled", this.getNumberOfAttacks() >= 5)
        },
        shouldShowCatapultTargetSelection: function() {
            return this.getUsedUnitCount("catapult") > 0
        },
        checkAndShowCatapultTargetSelection: function() {
            $("#place_confirm_catapult_target").toggle(this.shouldShowCatapultTargetSelection())
        },
        getNumberOfAttacks: function() {
            return $("#place_confirm_units").find(".units-row").length
        },
        generateNewAttackElement: function(t) {
            var n = "";
            if (window.mobile) {
                n += '<table class="vis small units-row">',
                n += '<tr class="red"><th colspan="6" class="train-name">' + s(_("8f1ca110ec346ea1d0f6d813e6246b40"), t) + "</th></td></tr>",
                n += "<tr>";
                var e = 0;
                for ($.each(this.data.units, function(a, i) {
                    n += '<td style="width: 35px" align="center"><img src="' + Format.image_src("unit/unit_" + i + ".png") + '" /></td>',
                    n += '<td><input type="number" data-unit="' + i + '" name="train[' + t + "][" + i + ']" style="width: 40px" /></td>',
                    ++e > 0 && e % 3 == 0 && (n += "</tr><tr>")
                }); e % 3 != 0; )
                    n += '<td colspan="2"></td>',
                    e++;
                n += "</tr>",
                n += "</table>"
            } else
                n += '<tr class="units-row"><th class="train-name"><span>' + s(_("8f1ca110ec346ea1d0f6d813e6246b40"), t) + "</span></th>",
                $.each(this.data.units, function(e, a) {
                    n += '<td><input type="number" data-unit="' + a + '" name="train[' + t + "][" + a + ']" style="width: 40px" value=""/></td>'
                });
            return $(n)
        },
        addAdditionalAttack: function() {
            $(".train-ui").show().eq(1);
            var t = $("#place_confirm_units");
            window.mobile && t.find(".train-name").eq(0).text(s(_("8f1ca110ec346ea1d0f6d813e6246b40"), 1));
            var n = this.getNumberOfAttacks() + 1;
            if (!(n > 5)) {
                var e = this.generateNewAttackElement(n);
                e.insertBefore(t.find(".units-sum")),
                e.find("input").on("change", function() {
                    $(this).addClass("dirty");
                    var t = Place.confirmScreen.checkForInvalidInput($(this));
                    Place.confirmScreen.updateUnitsSum(t),
                    Place.confirmScreen.checkForUnprotectedSnobs(),
                    Place.confirmScreen.checkAndShowCatapultTargetSelection()
                });
                var a = UI.Image("delete_14.png", {
                    class: "float_right",
                    style: "cursor: pointer"
                });
                a.on("click", function() {
                    Place.confirmScreen.deleteAdditionalAttack(e)
                }),
                e.find(".train-name").append(a),
                window.mobile && $("body").animate({
                    scrollTop: e.offset().top - $(window).height() + e.height()
                }, 200),
                this.applyTemplate(this.lastTemplate),
                this.checkAndShowAdditionalAttackButton()
            }
        },
        deleteAdditionalAttack: function(t) {
            t.remove(),
            $("#place_confirm_units").find(".units-row").each(function(t, n) {
                $(n).find("input").each(function() {
                    var n = $(this);
                    n.attr("name", "train[" + t + "][" + n.data("unit") + "]")
                }),
                $(n).find(".train-name span").text(s(_("8f1ca110ec346ea1d0f6d813e6246b40"), t + 1))
            }),
            this.updateUnitsSum(),
            this.checkAndShowAdditionalAttackButton(),
            this.checkAndShowCatapultTargetSelection()
        },
        updateUnitsSum: function(t) {
            t || (t = 0),
            $.each(this.data.units, function(n, e) {
                var a = $(".units-sum .unit-item-" + e)
                  , i = Place.confirmScreen.getUsedUnitCount(e);
                i > Place.confirmScreen.getAvailableUnits()[e] ? (a.addClass("warn"),
                t++) : a.removeClass("warn"),
                0 === i ? (a.addClass("hidden"),
                window.mobile && a.prev().find("img").eq(0).addClass("faded")) : (a.removeClass("hidden"),
                window.mobile && a.prev().find("img").eq(0).removeClass("faded")),
                a.text(Place.confirmScreen.getUsedUnitCount(e))
            }),
            $(".units-row:not(:first)").each(function() {
                var n = 0;
                $(this).find("input[type=number]").each(function() {
                    var t = parseInt($(this).val());
                    n += isNaN(t) ? 0 : t
                }),
                0 === n && t++
            }),
            t ? $(".troop_confirm_go").attr("disabled", "disabled") : $(".troop_confirm_go").removeAttr("disabled"),
            this.checkForUnprotectedSnobs()
        },
        checkForInvalidInput: function(t) {
            var n = t.val()
              , e = 0;
            return isNaN(n) || Math.floor(n) !== Number(n) || n < 0 ? (e++,
            t.addClass("warn")) : t.removeClass("warn"),
            e
        },
        checkForUnprotectedSnobs: function() {
            var t = 0;
            $("#place_confirm_units").find(".units-row").each(function(n) {
                if (0 !== n) {
                    var e = 0
                      , a = 0;
                    $(this).find("input[type=text], input[type=number]").each(function() {
                        if ("snob" !== $(this).data("unit")) {
                            var t = parseInt($(this).val());
                            e += isNaN(t) ? 0 : t
                        } else {
                            t = parseInt($(this).val());
                            a += isNaN(t) ? 0 : t
                        }
                    }),
                    0 === e && a > 0 && t++
                }
            }),
            $("#train_noble_warning").toggle(t > 0)
        },
        applyTemplate: function(t) {
            this.templates[t](),
            this.lastTemplate = t
        },
        templates: {
            snob: function() {
                $("#place_confirm_units input[type=number]").val(""),
                $("input[data-unit=snob]").val(1),
                Place.confirmScreen.autoBalance(),
                Place.confirmScreen.checkAndShowCatapultTargetSelection()
            },
            fake: function() {
                $("#place_confirm_units input[type=number]").val("");
                var t = Place.confirmScreen.getAvailableUnits()
                  , n = Place.confirmScreen.getSendUnits()
                  , e = {
                    ram: 0,
                    catapult: 0
                }
                  , a = ["ram", "catapult"];
                $(".units-row:not(:first)").each(function() {
                    var i = $(this)
                      , c = !1;
                    $.each(a, function(a, r) {
                        if (t[r] - n[r] - e[r] > 0)
                            return i.find("input[data-unit=" + r + "]").val(1),
                            e[r]++,
                            c = !0,
                            !1
                    }),
                    c || i.find("input[data-unit=ram]").val(1)
                }),
                Place.confirmScreen.updateUnitsSum(),
                Place.confirmScreen.checkAndShowCatapultTargetSelection()
            }
        },
        autoBalance: function() {
            var t = Place.confirmScreen.getSendUnits()
              , n = Place.confirmScreen.getAvailableUnits();
            $.each(["axe", "light"], function(e, a) {
                var i = n[a] - t[a] - Place.confirmScreen.getDirtyUnitCount(a)
                  , c = 0
                  , r = $("#place_confirm_units").find("input[name*=\\[" + a + "\\]]:not(.dirty)");
                r.each(function(t) {
                    var n = t === r.length - 1 ? i - c : Math.floor(i / r.length);
                    $(this).val(n > 0 ? n : ""),
                    c += n
                })
            }),
            this.updateUnitsSum()
        }
    },
    Place.backScreen = {
        init: function() {
            $(".units-entry-all").on("click", Place.insertAllUnits)
        }
    }
}();

;/**** game/GuestRegister.js ****/
var GuestRegister;
!function() {
    "use strict";
    GuestRegister = {
        showDialog: function() {
            Dialog.fetch("register", "api", {
                ajax: "guest_register_dialog"
            }, function() {
                $("#guest_register_form").on("submit", GuestRegister.doRegister)
            })
        },
        doRegister: function() {
            var e = {
                username: $("input[name=username]").val(),
                password: $("input[name=password]").val(),
                email: $("input[name=email]").val()
            };
            return TribalWars.post("api", {
                ajaxaction: "guest_register"
            }, e, function() {
                TribalWars.redirect("overview")
            }),
            !1
        }
    }
}();

;/**** game/Football.js_ ****/
!function() {
    "use strict";
    $(function() {
        $(".football-close").on("click", function() {
            $.cookie("ignore_football", 1, {
                path: "/",
                expires: 1
            }),
            $("#football_scores").hide()
        })
    })
}();

;/**** game/BotProtect.js_ ****/
var BotProtect;
function botProtectLoaded() {
    BotProtect.libraryLoaded()
}
!function() {
    "use strict";
    BotProtect = {
        key: "b413369f-bb15-4015-bacd-dd180021827c",
        load_callback: null,
        forced: !1,
        loading: !1,
        getLibrary: function() {
            var o = "https://hcaptcha.com/1/api.js?onload=botProtectLoaded&render=explicit";
            return o += "&hl="
        },
        ensureLibraryLoaded: function(o) {
            if (!this.loading)
                return "undefined" == typeof grecaptcha ? (this.loading = !0,
                this.load_callback = o,
                void $.getScript(this.getLibrary())) : void o()
        },
        libraryLoaded: function() {
            this.loading = !1,
            this.load_callback && (this.load_callback(),
            this.load_callback = null)
        },
        show: function(o) {
            this.forced = this.isForced(o),
            this.ensureLibraryLoaded(function() {
                "forced_dialog" === o ? BotProtect.showDialog() : BotProtect.showPending()
            })
        },
        isForced: function(o) {
            return "pending" !== o
        },
        showPending: function() {
            var o = $("#content_value")
              , t = o.find("#bot_check");
            t.length || ((t = $('<div id="bot_check" />').prependTo(o)).append("<h2>" + _("7ea8e5ac9c30746ad4a82f3cf3fd8f78") + '</h2><div class="captcha"></div>'),
            this.render())
        },
        showDialog: function() {
            if (!$("#popup_box_bot_protection").length) {
                var o = $(".captcha");
                if (Dialog.close(!1),
                o.length)
                    $(document).scrollTop(o.offset().top - 100);
                else {
                    var t = "<h2>" + _("7ea8e5ac9c30746ad4a82f3cf3fd8f78") + "</h2>";
                    t += '<div class="captcha"></div>',
                    Dialog.show("bot_protection", t, null, {
                        close_from_fader: !1,
                        allow_close: !1
                    }),
                    BotProtect.render()
                }
            }
        },
        render: function() {
            grecaptcha.render($(".captcha")[0], {
                callback: BotProtect.check,
                sitekey: BotProtect.key
            })
        },
        check: function(o) {
            TribalWars.post("botcheck", {
                ajaxaction: "verify"
            }, {
                response: o
            }, function(o) {
                o.success ? BotProtect.forced ? window.location.reload() : $("#bot_check").remove() : (UI.ErrorMessage(_("82e50c727674f251464fc7520f5bde26")),
                grecaptcha.reset())
            })
        }
    }
}(),
$(function() {
    var o = $("body").data("bot-protect");
    o && BotProtect.show(o)
});

;/**** game/DailyBonus.js_ ****/
var DailyBonus;
!function() {
    "use strict";
    DailyBonus = {
        SCREEN_LOCATION_LOGIN: "login",
        SCREEN_LOCATION_PROFILE: "profile",
        screen_location: "profile",
        cycle: null,
        chest_unlocker: null,
        day_today: -1,
        last_day: -1,
        showDialog: function() {
            this.screen_location = DailyBonus.SCREEN_LOCATION_LOGIN;
            Dialog.fetch("daily_bonus", "daily_bonus", {
                ajax: "widget"
            }, null, {}, function() {
                DailyBonus.reportClosed()
            })
        },
        init: function(e, t, i) {
            this.chest_unlocker = t,
            this.day_today = i,
            this.last_day = Math.max.apply(Math, Object.getOwnPropertyNames(e.chests)),
            Timing.tickHandlers.timers.initTimers("daily_bonus_reset_timer", function() {
                DailyBonus.screen_location == DailyBonus.SCREEN_LOCATION_LOGIN ? (Dialog.close(),
                setTimeout(function() {
                    DailyBonus.showDialog()
                }, 200)) : partialReload()
            }),
            this.update(e),
            mobile && this.MobileView.init(),
            this.reportViewed()
        },
        update: function(e) {
            this.cycle = e,
            this.updateButtons(),
            this.updateChestGraphics(),
            this.updateRewardInfo(),
            UI.init()
        },
        updateButtons: function() {
            var e = $("#daily_bonus_content")
              , t = this.chest_unlocker.pp_unlock.costs[this.cycle.pp_count_unlocked] || -1
              , i = _("c1b724a1a661ac1204a050ebbe26c2a3") + "<br/><br/>" + _("55f5a6a54d53630b22197e1776182f54") + ' <span class="icon header premium"></span>' + t;
            $.each(this.cycle.chests, function(n, a) {
                var o, c = e.find(".day_" + n).find(".actions");
                c.html(""),
                DailyBonus.canOpenChest(n) ? ((o = $('<a href="#" class="btn btn-default">' + _("09f7c6efa8718ddc3a4864b388ca912e") + "</a>")).on("click", function(e) {
                    e.preventDefault(),
                    DailyBonus.openChest(n)
                }),
                c.append(o)) : DailyBonus.canBuyChest(n) && ((o = $('<a href="#" class="btn btn-default tooltip" title=" :: ' + escapeHtml(i, !0) + '">' + s(_("7a942e75c87e5ae7e67136a050d63cf7"), '<span class="icon header premium"></span>' + t) + "</a>")).on("click", function(e) {
                    e.preventDefault(),
                    Premium.check(DailyBonus.chest_unlocker.pp_unlock.feature, t, function() {
                        DailyBonus.openLockedChest(n)
                    })
                }),
                c.append(o))
            })
        },
        updateChestGraphics: function() {
            $.each(this.cycle.chests, function(e, t) {
                var i = $("#daily_bonus_content").find(".day_" + e);
                i.find(".chest_container").addClass("skin-" + t.reward.skin);
                var n = i.find(".db-chest");
                t.is_collected ? n.addClass("opened") : DailyBonus.canOpenChest(e) && n.addClass("unlocked")
            })
        },
        updateRewardInfo: function() {
            $.each(this.cycle.chests, function(e, t) {
                var i = "";
                if (t.reward.label && (i += '<div class="daily-bonus-reward-label">' + t.reward.label + "</div>"),
                i += ItemUIFactory.createDetailHtml(t.reward.item),
                t.is_collected ? i += '<div class="center" style="font-weight:bold;">' + _("2a49135973b12ae164535b5342521ab8") + "</div>" : DailyBonus.willChestUnlockTomorrow(e) && (i += '<div class="center" style="font-weight:bold;">' + _("b6190eb655911794a7ce832a8128e0be") + "</div>"),
                mobile) {
                    $("#daily_bonus_content").find(".day_" + e).find(".reward_info").html(i)
                } else {
                    var n = $("#daily_bonus_content").find(".day_" + e).find(".db-chest");
                    n.addClass("tooltip"),
                    n.prop("title", " :: " + i)
                }
            })
        },
        canOpenChest: function(e) {
            return !this.cycle.chests[e].is_locked && !this.cycle.chests[e].is_collected
        },
        canBuyChest: function(e) {
            return this.chest_unlocker.pp_unlock.enabled && this.day_today == this.last_day && e >= 1 && e <= this.last_day && this.cycle.chests[e].is_locked && !this.cycle.chests[e - 1].is_locked
        },
        willChestUnlockTomorrow: function(e) {
            return this.day_today !== this.last_day && e == this.cycle.reward_count_unlocked + 1
        },
        areAllUnlockedChestsOpen: function() {
            var e = !1;
            return $.each(this.cycle.chests, function(t, i) {
                i.is_locked || i.is_collected || (e = !0)
            }),
            !e
        },
        handleChestOpened: function(e, t) {
            DailyBonus.update(e),
            UI.SuccessMessage(_("38f70a61b9446cecf25cfcf2b81ce984"));
            var i = this.day_today === this.last_day;
            mobile && this.canBuyChest(this.cycle.reward_count_unlocked + 1) && this.MobileView.switchToDay(this.cycle.reward_count_unlocked + 1),
            this.screen_location !== this.SCREEN_LOCATION_LOGIN || !this.areAllUnlockedChestsOpen() || i && this.cycle.reward_count_unlocked !== this.last_day || Dialog.close()
        },
        openChest: function(e) {
            TribalWars.post("daily_bonus", {
                ajaxaction: "open"
            }, {
                day: e,
                from_screen: this.screen_location
            }, function(t) {
                DailyBonus.handleChestOpened(t.cycle, e)
            })
        },
        openLockedChest: function(e) {
            TribalWars.post("daily_bonus", {
                ajaxaction: "unlock"
            }, {
                day: e,
                from_screen: this.screen_location
            }, function(t) {
                DailyBonus.handleChestOpened(t.cycle, e)
            })
        },
        reportViewed: function() {
            TribalWars.post("daily_bonus", {
                ajax: "viewed"
            }, {
                from_screen: this.screen_location
            }, null, null, !0)
        },
        reportClosed: function() {
            this.areAllUnlockedChestsOpen() || TribalWars.post("daily_bonus", {
                ajax: "canceled"
            }, {
                from_screen: this.screen_location
            }, null, null, !0)
        },
        MobileView: {
            SWIPE_THRESHOLD_PX: 50,
            pane_width: 280,
            displayed_day: 1,
            $content: null,
            $rewards_pane: null,
            $left_arrow: null,
            $right_arrow: null,
            init: function() {
                this.$content = $("#daily_bonus_content"),
                this.$rewards_pane = this.$content.find(".rewards_pane"),
                this.$left_arrow = this.$content.find(".arrow.left"),
                this.$right_arrow = this.$content.find(".arrow.right"),
                this.resize(),
                UI.onResizeEnd(window, function() {
                    DailyBonus.MobileView.resize()
                }),
                this.$content.find(".arrow.left").on("click", function() {
                    DailyBonus.MobileView.switchPrevDay()
                }),
                this.$content.find(".arrow.right").on("click", function() {
                    DailyBonus.MobileView.switchNextDay()
                }),
                this.switchToDay(DailyBonus.cycle.reward_count_unlocked, !1),
                this.initSwiping()
            },
            resize: function() {
                this.pane_width = this.$content.width(),
                this.$rewards_pane.css({
                    width: this.pane_width
                }),
                this.$content.find(".rewards_sheet").css({
                    width: this.pane_width * DailyBonus.last_day
                }),
                this.$content.find(".reward").css({
                    width: this.pane_width
                })
            },
            switchPrevDay: function() {
                this.switchToDay(this.displayed_day - 1, !0)
            },
            switchNextDay: function() {
                this.switchToDay(this.displayed_day + 1, !0)
            },
            switchToDay: function(e, t) {
                if (!(e < 1 || e > DailyBonus.last_day)) {
                    var i = (e - 1) * this.pane_width;
                    t ? this.$rewards_pane.animate({
                        scrollLeft: i
                    }, 200) : this.$rewards_pane.scrollLeft(i),
                    this.displayed_day = e,
                    1 == e ? this.$left_arrow.hide() : this.$left_arrow.show(),
                    e == DailyBonus.last_day ? this.$right_arrow.hide() : this.$right_arrow.show()
                }
            },
            initSwiping: function() {
                var e = !1
                  , t = {
                    pageX: null,
                    scrollLeft: null
                }
                  , i = {
                    pageX: null
                }
                  , n = this.$rewards_pane
                  , s = function(n) {
                    if (e) {
                        var s = i.pageX - t.pageX;
                        Math.abs(s) >= DailyBonus.MobileView.SWIPE_THRESHOLD_PX ? s > 0 ? DailyBonus.MobileView.switchPrevDay() : DailyBonus.MobileView.switchNextDay() : DailyBonus.MobileView.switchToDay(DailyBonus.MobileView.displayed_day, !0)
                    }
                    e = !1
                };
                this.$rewards_pane.on({
                    touchstart: function(i) {
                        e = !0,
                        t = {
                            pageX: i.originalEvent.touches[0].pageX,
                            scrollLeft: n.scrollLeft()
                        }
                    },
                    touchmove: function(s) {
                        var a, o;
                        e && (i = s.originalEvent.touches[0],
                        a = i.pageX - t.pageX,
                        o = DailyBonus.MobileView.pane_width,
                        a = Math.max(Math.min(a, o), -o),
                        n.scrollLeft(t.scrollLeft - a))
                    },
                    touchend: s,
                    touchcancel: s
                })
            }
        }
    }
}();

;/**** game/ItemUIFactory.js_ ****/
var ItemUIFactory;
!function() {
    "use strict";
    ItemUIFactory = {
        createDetailHtml: function(t) {
            return '<div class="item_details"><div class="identity"><img src="' + t.image + '"><div class="texts"><div class="name">' + t.name + '</div><div class="type">' + TribalWars.constants.item_types[t.type] + '</div><div class="category">' + TribalWars.constants.item_categories[t.category] + '</div></div></div><div class="descriptions">' + t.descriptions.map(function(t) {
                return ItemUIFactory.createDescriptionHtml(t)
            }).join("") + "</div></div>"
        },
        createDescriptionHtml: function(t) {
            var i = "";
            t.color && (i += "color: " + t.color + ";");
            var e = "";
            return t.image && (e = '<img src="' + t.image + '" style="vertical-align: -4px"/> '),
            '<p style="' + i + '">' + e + t.text + "</p>"
        }
    }
}();

;/**** game/Visual.js ****/
var Visual;
!function() {
    "use strict";
    Visual = function(i, n) {
        var e = $(".visual")
          , a = {
            style: "reverse",
            pause: .3
        }
          , s = {
            "anim-building-barracks-0": a,
            "anim-building-snob-0": a,
            "anim-building-stable-0": a,
            "anim-building-wall-0": a,
            "anim-building-smith-0": a,
            "anim-building-place-0": a,
            "anim-building-market-0": a,
            "anim-building-wood-0": a,
            "anim-building-stone-0": a,
            "anim-building-iron-0": a,
            "anim-building-church-0": a,
            "anim-building-garage-0": a,
            "anim-building-garage-prod": {
                style: "reverse",
                pause: .3
            },
            "anim-building-garage-prod2": {
                style: "reverse",
                pause: .3
            },
            "anim-building-main-1": {
                fps: 12
            },
            "anim-building-main-2": {
                fps: 12
            },
            "anim-building-main-3": {
                fps: 12
            },
            "anim-building-farm-2": {
                fps: 18
            },
            "anim-building-farm-3": {
                fps: 18
            },
            "anim-building-wood-prod": {
                style: "reverse",
                fps: 6,
                pause: 1
            },
            "anim-building-iron-prod": {
                style: "reverse",
                fps: 16,
                timing: {
                    22: 2
                },
                pause: 2
            },
            "anim-building-stone-prod": {
                style: "reverse",
                pause: 1.5
            },
            "anim-building-farm-prod": {
                style: "reverse",
                pause: .3
            },
            "anim-building-main-prod": {
                style: "reverse",
                fps: 12
            },
            "anim-building-stable-prod": {
                style: "reverse",
                pause: .6,
                fps: 15
            },
            "anim-building-smith-prod": {
                style: "reverse",
                pause: .5
            },
            "anim-building-barracks-prod": {
                style: "reverse",
                pause: .5
            },
            "anim-joker": {
                fps: 20
            },
            "anim-guard": {
                fps: 20,
                style: "reverse",
                pause: 2
            },
            "anim-convo": {
                fps: 20
            }
        }
          , r = []
          , t = (new Date).getTime()
          , u = 0
          , m = this;
        this.init = function() {
            $.each(i, function(i, n) {
                s.hasOwnProperty(n) && r.push(new VisualAnim(m,n,s[n]))
            }),
            this.tick()
        }
        ,
        this.getRoot = function() {
            return e
        }
        ,
        this.tick = function() {
            $.contains(document.documentElement, e.get(0)) && (u = ((new Date).getTime() - t) / 1e3,
            $.each(r, function(i, n) {
                n.update(u)
            }),
            window.requestAnimationFrame(m.tick))
        }
        ,
        this.getAssetFolder = function() {
            return "night" === n ? "visual_night" : "visual"
        }
        ,
        this.generateFrameTimingsFromTimings = function(i, n, e) {
            for (var a = [], s = 0, r = 0; r < n; r++) {
                var t = i.hasOwnProperty(r) ? i[r] : 1 / e;
                a.push(t),
                s += t
            }
            return {
                timing: a,
                total: s
            }
        }
        ,
        this.init()
    }
}();

;/**** game/VisualAnim.js ****/
var VisualAnim;
!function() {
    "use strict";
    VisualAnim = function(t, e, i) {
        var a = document.createElement("canvas");
        a.className = "visual-anim " + e,
        t.getRoot().append(a);
        var n, r, s = 0, h = 0, d = 0, o = 0, l = i.fps || 10, u = 0, g = 0, m = a.getContext("2d"), f = ((r = new Image).src = Format.image_src(t.getAssetFolder() + "/2016/" + e + ".png"),
        r), c = i.style || "default", w = i.pause || 0, v = !1, p = !1;
        return this.init = function() {
            if (0 !== a.offsetWidth) {
                if (a.width = Math.round(parseFloat(window.getComputedStyle(a).width)),
                a.height = Math.round(parseFloat(window.getComputedStyle(a).height)),
                p = !0,
                o = f.naturalWidth / a.width,
                u = "reverse" === c ? 2 * o - 2 : o,
                i.timing) {
                    var e = t.generateFrameTimingsFromTimings(i.timing, u, l);
                    n = e.total,
                    v = e.timing
                } else
                    n = u / l;
                g = n + w
            }
        }
        ,
        this.update = function(t) {
            if (this.ready()) {
                var e = t % g
                  , i = 0;
                if (e > n)
                    i = 0,
                    h = 0,
                    d = 0;
                else {
                    var a = 0;
                    if (v) {
                        var r = d;
                        for (a = h; a < u; a++)
                            if (e < (r += v[a])) {
                                d = r - v[a],
                                h = a;
                                break
                            }
                    } else
                        a = Math.floor(e / n * u);
                    i = a,
                    "reverse" === c && (i = a < o ? i : u - a)
                }
                i !== s && (s = i,
                this.render(i))
            } else
                this.init()
        }
        ,
        this.render = function(t) {
            m.clearRect(0, 0, a.width, a.height),
            m.drawImage(f, a.width * t, 0, a.width, a.height, 0, 0, a.width, a.height)
        }
        ,
        this.ready = function() {
            return p
        }
        ,
        f.addEventListener("load", this.init),
        this
    }
}();

;/**** game/Modules/TimedCommandQueue.js ****/
define("Ig/TribalWars/Modules/TimedCommandQueue", function() {
    "use strict";
    var t = function() {
        this.command_queue = [],
        this.lock_expiry = 0
    };
    return t.prototype = {
        isBusy: function() {
            return this.lock_expiry >= Date.now()
        },
        pushCommand: function(t, n) {
            this.command_queue.push({
                run: t,
                duration: n
            }),
            this.isBusy() || this.runNextCommand()
        },
        runNextCommand: function() {
            var t = this;
            if (0 !== this.command_queue.length) {
                var n = Date.now()
                  , i = this.command_queue.shift();
                this.lock_expiry = n + i.duration,
                i.run();
                var u = Math.max(0, this.lock_expiry - Date.now());
                setTimeout(function() {
                    t.runNextCommand()
                }, u)
            }
        }
    },
    t
});

;/**** game/CasualTransferForm.js_ ****/
var CasualTransferForm;
!function() {
    "use strict";
    CasualTransferForm = {
        $el: null,
        $button: null,
        $hint_missing_choices: null,
        required_choices: ["premium", "items"],
        init: function(i) {
            this.$el = i,
            this.$button = i.find(".btn"),
            this.$button_container = i.find(".button-container"),
            this.$hint_missing_choices = i.find(".hint-missing-choices"),
            this.initButtonClickHandler(),
            this.presentSubmissionDisabledUntilRequiredChoicesMade(),
            this.preventButtonFromJumping()
        },
        initButtonClickHandler: function() {
            var i = this;
            this.$button.on("click", function(n) {
                n.preventDefault(),
                i.areAllRequiredChoicesMade() ? i.promptConfirmTransfer() : i.flashUnmadeChoices()
            })
        },
        presentSubmissionDisabledUntilRequiredChoicesMade: function() {
            var i = this;
            this.$button.addClass("btn-disabled"),
            this.$el.find("input[type=radio]").on("change", function() {
                var n = !i.areAllRequiredChoicesMade();
                i.$button.toggleClass("btn-disabled", n),
                i.$hint_missing_choices.toggle(n)
            })
        },
        areAllRequiredChoicesMade: function() {
            return 0 === this.findUnmadeChoices().length
        },
        findUnmadeChoices: function() {
            var i = this;
            return this.required_choices.filter(function(n) {
                return !i.isAnOptionSelected(n)
            })
        },
        isAnOptionSelected: function(i) {
            return void 0 !== this.$el.find("input[name=" + i + "]:checked").val()
        },
        preventButtonFromJumping: function() {
            this.$button_container.css({
                height: this.$button_container.height()
            })
        },
        flashUnmadeChoices: function() {
            var i = this.$el;
            this.findUnmadeChoices().forEach(function(n) {
                var t = i.find(".section-label-" + n).addClass("warn");
                setTimeout(function() {
                    t.removeClass("warn")
                }, 500)
            })
        },
        promptConfirmTransfer: function() {
            var i = this.$el
              , n = _("79b6981051a085c10d6e2a5b8d315bbc")
              , t = [{
                text: _("70d9be9b139893aa6c69b5e77e614311"),
                callback: function() {
                    i.submit()
                },
                confirm: !0
            }];
            UI.ConfirmationBox(n, t)
        }
    }
}();

;/**** game/Questlines.js_ ****/
var Questlines;
!function() {
    "use strict";
    Questlines = {
        opening_dialog: !1,
        data: [],
        goal_progress: {},
        selected_quest: {
            "main-tab": 0,
            "tribe-tab": 0,
            "event-tab": 0,
            "mentor-tab": 0
        },
        tab_loaded: {
            "main-tab": !1,
            "tribe-tab": !1,
            "event-tab": !1,
            "mentor-tab": !1
        },
        selected_tab: "main-tab",
        transparent_image: "/graphic/transparent.png",
        messages: {},
        init: function() {
            this.selected_quest = {
                "main-tab": 0,
                "tribe-tab": 0,
                "event-tab": 0,
                "mentor-tab": 0
            },
            Questlines.tab_loaded = {
                "main-tab": !1,
                "tribe-tab": !1,
                "event-tab": !1,
                "mentor-tab": !1
            },
            this.registerEvents()
        },
        getById: function(e) {
            if (null == e)
                return {};
            for (var t = 0; t < this.data.length; t++)
                if (e === this.data[t].id)
                    return this.data[t];
            return {}
        },
        showDialog: function(e, t) {
            if (!Questlines.opening_dialog) {
                Questlines.opening_dialog = !0;
                var s = Questlines._getTabIdByQuestId(e);
                Dialog.fetch("quest", "new_quests", {
                    ajax: "quest_popup",
                    tab: s,
                    quest: e
                }, function(t) {
                    Questlines.opening_dialog = !1,
                    Questlines.init(),
                    Questlines.selectTabById(s, e)
                }, {
                    class_name: "slim",
                    priority: -1
                }),
                QuestArrows.init()
            }
        },
        registerEvents: function() {
            $(".questline-header").on("click", this.accordion),
            $(".questline-list").on("click", ".quest-link", this.selectQuest),
            $(".tab-link").on("click", this.tab),
            $(".complete-btn-container").on("click", ".quest-complete-btn", function() {
                Questlines.completeQuest(!1, null)
            }),
            $(".complete-btn-container").on("click", ".skip-btn", function() {
                Questlines.skipQuest(!1, null)
            })
        },
        setQuests: function(e, t) {
            Questlines.data = e,
            Questlines.goal_progress = t
        },
        accordion: function(e) {
            e.preventDefault();
            var t = e.currentTarget;
            t.scrollIntoView(),
            $(t).next().toggleClass("opened"),
            $(t).toggleClass("header-opened"),
            QuestArrows.init()
        },
        tab: function(e) {
            var t = $(e.currentTarget).data("tab");
            Questlines.selectTabById(t, 0)
        },
        selectQuest: function(e) {
            if (!$(this).hasClass("selected")) {
                var t = $(this).data("quest-id");
                Questlines.selectQuestById(t)
            }
        },
        completeQuest: function(e, t) {
            e ? (Quests.getQuest(t).complete(!1, function(e) {
                Questlines._questlineComplete(t)
            }),
            $(".btn-confirm-yes").remove()) : (t = Questlines._getSelectedQuestId(),
            Quests.getQuest(t).complete(!1, function(e) {
                Questlines._questlineComplete(t)
            }),
            Dialog.close())
        },
        skipQuest: function(e, t) {
            e ? (Quests.getQuest(t).complete(!0, function(e) {
                Questlines._questlineComplete(t)
            }),
            $(".btn-skip-quest").remove()) : (t = Questlines._getSelectedQuestId(),
            Quests.getQuest(t).complete(!0, function(e) {
                Questlines._questlineComplete(t)
            }),
            Dialog.close())
        },
        selectTabById: function(e, t) {
            var s = [];
            $(".tab-link").each(function() {
                s.push($(this).data("tab"))
            }),
            s.includes(e) || (e = s[0]),
            e == Questlines.selected_tab && Questlines.tab_loaded[e] || (null == e && (e = Questlines.selected_tab),
            $(".tab.active-tab").removeClass("active-tab"),
            $("li.selected-tab").removeClass("selected-tab"),
            $('.tab-link[data-tab="' + e + '"]').parent().addClass("selected-tab"),
            $("#" + e).addClass("active-tab"),
            Questlines.selected_tab = e,
            Questlines.tab_loaded[e] || ("reward-tab" != e && (t <= 0 && (t = $(".active-tab .quest-link:first-child").data("quest-id")),
            this.selectQuestById(t)),
            Questlines.tab_loaded[e] = !0),
            QuestArrows.init())
        },
        selectQuestById: function(e) {
            for (var t = Quests.getQuest(e).getData(), s = 0; s < t.goals_html.length; s++)
                void 0 != Questlines.goal_progress[e][s] && (t.goals_html[s].progress = Questlines.goal_progress[e][s].progress,
                t.goals_html[s].completed = Questlines.goal_progress[e][s].completed);
            t.opened || Questlines.markOpened(e),
            $(".active-tab a.quest-link.selected").removeClass("selected");
            var a = $('.active-tab a.quest-link[data-quest-id="' + e + '"]');
            a.addClass("selected"),
            a.parent().parent().addClass("opened"),
            a.parent().parent().prev().addClass("header-opened"),
            Questlines.selected_quest[Questlines.selected_tab] = e,
            Questlines._updateQuestUI(t)
        },
        setNewLabel: function(e) {
            e ? $("#new_quest").html('<div class="quest_new ' + game_data.market + '">' + _("d6d01ab10ebf52d8f696db8a2f3097c3") + "</div>") : $("#new_quest").html("")
        },
        markOpened: function(e) {
            TribalWars.post("new_quests", {
                ajax: "mark_opened"
            }, {
                quest_id: e
            }, null, null, !0)
        },
        _updateQuestUI: function(e) {
            var t = Questlines.data.find(function(t) {
                return t.id == e.questline
            })
              , s = $(".active-tab > .quest-popup-content");
            if (void 0 !== t) {
                s.find("header.quest-title > h1").text(t.name);
                var a = t.reward;
                s.find("header.quest-title > .reward").html(a.image);
                var n = ItemUIFactory.createDetailHtml(a.item);
                n += "<strong>" + _("410ecc82af07c0bf5dfd3594b3b4215c") + "</strong>",
                s.find("header.quest-title > .reward > img").prop("title", " :: " + n),
                UI.ToolTip(s.find("header.quest-title > .reward > img"))
            }
            s.find("header.quest-title > p").text(e.title),
            s.find(".quest-description").html(e.objective.replace(/\n/g, "</p><p>")),
            s.find(".skip-btn").toggleClass("hidden", !e.can_be_skipped || "completed" == e.state),
            s.find(".quest-body > .quest-goals-container > .complete-btn-container > div.status-btn").toggleClass("quest-complete-btn", e.finished).toggleClass("hidden", "completed" == e.state || !e.finished),
            this._updateRewardsHtml(e.rewards_html),
            this._updateGoalsHtml(e.goals_html),
            this._contentToggle(!0)
        },
        _updateGoalsHtml: function(e) {
            var t = $(".active-tab > .quest-popup-content");
            t.find(".quest-goals").html(""),
            e.forEach(function(e) {
                t.find(".quest-goals").append(Questlines._getGoalHtml(e))
            }),
            UI.InitProgressBars()
        },
        _updateRewardsHtml: function(e) {
            var t = $(".active-tab > .quest-popup-content > .quest-body > .quest-goals-container > .quest-reward-summary")
              , s = t.find(".quest-reward-image")
              , a = t.find(".quest-reward-text > .quest-reward-description");
            if (e.length > 0) {
                if (this._rewardHasNoImage(e[0]))
                    s.addClass("hidden");
                else {
                    var n = $('<img src="' + e[0].image + '">');
                    e[0].small_image && $(n).addClass("small-image"),
                    s.html(""),
                    s.append($(n)),
                    s.removeClass("hidden")
                }
                for (var i = [], l = 0; l < e.length; l++)
                    i.push(e[l].text);
                a.html(i.join("<br>"))
            }
            t.toggleClass("hidden", 0 == e.length)
        },
        _getGoalHtml: function(e) {
            var t = e.completed ? '<img style="position:absolute;right:0;bottom:0;" src="/graphic/quests/completed.png">' : ""
              , s = '<div class="goal">    <div class="goal-left" style="position:relative;">        <h5>' + e.summary + "</h5>        <p>" + e.description + '</p>    </div>    <div class="goal-image" style="background-image: url(' + e.image + ')"></div></div>'
              , a = $(s);
            if (void 0 != e.progress) {
                var n = e.progress.current / e.progress.target * 100
                  , i = '<div class="progress-bar">  <span class="label">' + e.progress.current + "/" + e.progress.target + '</span>  <div style="width: ' + n + '%;"></div> </div>';
                a.find(".goal-left").append(i)
            }
            return a.find(".goal-left").append(t),
            a[0].outerHTML
        },
        _getSelectedQuestId: function() {
            return Questlines.selected_quest[Questlines.selected_tab]
        },
        _contentToggle: function(e) {
            $(".active-tab > .quest-popup-content").toggleClass("invisible", !e)
        },
        _getTabIdByQuestId: function(e) {
            return e > 9999 ? "event-tab" : 100 == e ? "mentor-tab" : 101 == e ? "tribe-tab" : "main-tab"
        },
        _questlineComplete: function(e) {
            for (var t = Questlines.data, s = 0; s < t.length; s++)
                for (var a = 0; a < t[s].quests.length; a++)
                    if (t[s].quests[a].id == e) {
                        var n = t[s].id;
                        TribalWars.post("new_quests", {
                            ajax: "questline_complete",
                            id: n
                        }, null, function(e) {
                            e.status ? e.reward ? UI.SuccessMessage(_("27c9bfd8edc82b7189b0e342b8e8edf2") + "<br /><br />" + e.reward.image, 3e3) : UI.SuccessMessage(_("14c1518ea41748d3680f91304dfb2766"), 3e3) : UI.ErrorMessage(e.message, 3e3)
                        })
                    }
        },
        _rewardHasNoImage: function(e) {
            return "" == e.image || e.image == this.transparent_image
        }
    }
}();

;/**** game/RewardSystem.js_ ****/
var RewardSystem;
!function() {
    "use strict";
    RewardSystem = function() {
        var a = []
          , e = []
          , d = []
          , n = []
          , t = 0;
        function r() {
            var r, i, l;
            r = $("#reward-system-rewards"),
            i = $("#action-column"),
            r.html(""),
            a.length > 0 ? (i.removeClass("hidden"),
            a.forEach(function(a) {
                var n = '<tr><td class="building-info" title="' + d[a.id].name + '"><a href="' + d[a.id].game_link + '">' + d[a.id].image + '</a><a class="building-name" href="' + d[a.id].game_link + '">' + d[a.id].name + "</a></td><td><strong>" + a.building_level + '</strong></td><td><span class="icon header wood"></span>' + a.reward.wood + '</td><td><span class="icon header stone"></span>' + a.reward.stone + '</td><td><span class="icon header iron"></span>' + a.reward.iron + "</td>";
                n += '<td><a href="#" class="btn btn-confirm-yes reward-system-claim-button" data-reward-id="' + a.id + '">' + _("15b77ddab59789684f3da336d5373aae") + "</a>",
                (game_data.village.wood + a.reward.wood > game_data.village.storage_max || game_data.village.stone + a.reward.stone > game_data.village.storage_max || game_data.village.iron + a.reward.iron > game_data.village.storage_max) && (n += '<br /><span class="small warn">' + _("1cc53eb25a72241343a31a244a75b756") + "</span>"),
                e[a.building].count > 1 ? (n += '<td><a href="#" class="btn btn-confirm-yes reward-system-claim-all-button" data-reward-building="' + a.building + '">' + _("8a34ecf1be7cd8ebe77782eadfe3580f") + "</a>",
                (game_data.village.wood + e[a.building].wood > game_data.village.storage_max || game_data.village.stone + e[a.building].stone > game_data.village.storage_max || game_data.village.iron + e[a.building].iron > game_data.village.storage_max) && (n += '<br /><span class="small warn">' + _("1cc53eb25a72241343a31a244a75b756") + "</span>")) : n += '<td><a href="#" class="btn btn-confirm-yes" disabled>' + _("8a34ecf1be7cd8ebe77782eadfe3580f") + "</a>",
                n += "</td></tr>",
                r.append(n)
            })) : (i.addClass("hidden"),
            $(".btn-col").remove(),
            r.append('<tr><td colspan="7" class="inactive">' + _("86600c524788efeb00d09c9f29210224") + "</td></tr>")),
            function() {
                var a = $("#reward-system-unlockable-rewards");
                if (a.html(""),
                n.length > 0) {
                    var e = 0
                      , d = "";
                    n.forEach(function(a) {
                        e % 2 == 0 && (d += "<tr>"),
                        d += '<td class="building-info" title="' + a.name + '"><a href="' + a.game_link + '">' + a.image + '</a><a class="building-name" href="' + a.game_link + '">' + a.name + "</a></td><td><strong>" + a.building_level + "</strong></td>",
                        e % 2 == 1 && (d += "</tr>"),
                        e % 2 == 0 && e == n.length - 1 && (d += '<td colspan="2"></td></tr>'),
                        e++
                    }),
                    a.html(d)
                } else
                    a.html('<tr><td colspan="4" class="inactive">' + _("7e551969baf9049bfb64ddbcf60c3650") + "</td></tr>")
            }(),
            (l = $("#reward-system-badge")).html(""),
            t > 0 && l.html(" (" + t + ")"),
            $(".reward-system-claim-button").click(function(a) {
                var e;
                e = $(this).data("reward-id"),
                TribalWars.post("new_quests", {
                    ajax: "claim_reward"
                }, {
                    reward_id: e
                }, function(a) {
                    s(a)
                })
            }),
            $(".reward-system-claim-all-button").click(function(a) {
                var e;
                e = $(this).data("reward-building"),
                TribalWars.post("new_quests", {
                    ajax: "claim_rewards_all"
                }, {
                    building: e
                }, function(a) {
                    s(a)
                })
            })
        }
        function s(a) {
            if (a.claimed) {
                var e = _("b725603eb1fd7186ef4f5756087dc3ee") + '<br /><br /><span class="icon header wood"></span>' + a.claimed.reward.wood + '&nbsp;<span class="icon header stone"></span>' + a.claimed.reward.stone + '&nbsp;<span class="icon header iron"></span>' + a.claimed.reward.iron;
                UI.SuccessMessage(e, 3e3)
            }
            i(a.rewards, a.rewards_all, a.rewards_html, a.unlocked_rewards_count),
            l(a.unlockable_rewards),
            r()
        }
        function i(n, r, s, i) {
            a = n,
            e = r,
            d = s,
            t = i
        }
        function l(a) {
            n = a
        }
        return {
            init: r,
            setRewards: i,
            setUnlockableRewards: l
        }
    }()
}();

;/**** game/ImageBasedAnimation.js_ ****/
"use strict";
var ImageBasedAnimation;
ImageBasedAnimation = function(t, e) {
    if (!e.frame_count && !e.frame_width)
        throw new Error("One of the options frame_count or frame_width must be specified and none-zero");
    var n = e.loop
      , i = document.createElement("canvas")
      , a = i.getContext("2d")
      , r = new Image;
    r.src = Format.image_src(t);
    var o = {};
    this.addEventListener = function(t, e) {
        o.hasOwnProperty(t) ? o[t] = o[t].append(e) : o[t] = [e]
    }
    ,
    this.removeEventListener = function(t, e) {
        if (o.hasOwnProperty(t) && o[t].indexOf(e) > -1) {
            var n = o[t].indexOf(e);
            o[t].splice(n, 1)
        }
    }
    ;
    var s = function(t) {
        var e = new function(t) {
            var e = !1
              , n = this;
            this.isPropagationStopped = function() {
                return e
            }
            ,
            this.stopPropagation = function() {
                t.stopPropagation(),
                e = !0
            }
            ,
            this.preventDefault = function() {
                t.preventDefault()
            }
            ,
            ["bubbles", "cancelBubble", "cancelable", "composed", "currentTarget", "deepPath", "defaultPrevented", "eventPhase", "returnValue", "target", "timeStamp", "type", "isTrusted"].forEach(function(e) {
                Object.defineProperty(n, e, {
                    get: function() {
                        return t[e]
                    },
                    set: function(n) {
                        t[e] = n
                    }
                }),
                n[e] = t[e]
            })
        }
        (t);
        if (o.hasOwnProperty(e.type))
            for (var n = o[e.type], i = 0; i < n.length && !e.isPropagationStopped(); i++)
                n[i](e)
    };
    this.dispatchEvent = s;
    var h, c = e.frame_count || 0, u = e.frame_width || 0, d = e.frame_rate || 30, f = 0, p = function(t) {
        a.clearRect(0, 0, i.width, i.height),
        a.drawImage(r, u * t, 0, r.height, u, 0, 0, i.width, i.height),
        f = t
    };
    r.addEventListener("load", function(t) {
        u || (u = r.width / c),
        c || (c = Math.min(r.width / u)),
        s(t),
        i.height = r.height,
        i.width = u,
        p(0)
    });
    var m = 1e3 / d
      , w = 0
      , v = function(t) {
        f >= c - 1 ? !0 === n ? (p(0),
        h = window.requestAnimationFrame(v.bind(this))) : (s(new Event("play_ended")),
        this.stop()) : (t - w > m && (p(f + 1),
        w = t),
        h = window.requestAnimationFrame(v.bind(this)))
    };
    this.play = function() {
        h = window.requestAnimationFrame(v.bind(this))
    }
    ,
    this.pause = function() {
        window.cancelAnimationFrame(h)
    }
    ,
    this.stop = function() {
        this.pause(),
        p(0)
    }
    ,
    this.seekToTime = function(t) {
        p(Math.floor(t / d))
    }
    ,
    this.getCanvas = function() {
        return i
    }
}
;

;/**** game/Modules/TwoFactor.js ****/
define("Ig/TribalWars/Modules/TwoFactor", function() {
    "use strict";
    var o = function() {
        this.show()
    };
    return o.prototype = {
        show: function() {
            var o = this;
            Dialog.fetch("two_factor", "api", {
                ajax: "two_factor"
            }, function() {
                $("#two_factor_form").on("submit", function() {
                    var t = $("#two_factor_form input[name=code]").val();
                    return o.confirm(t),
                    !1
                })
            }, {}, function() {
                o.completed || TribalWars.redirect("overview")
            })
        },
        confirm: function(o) {
            $("#two_factor_form input[type=submit]").prop("disabled", !0);
            var t = this;
            TribalWars.post("api", {
                ajaxaction: "two_factor"
            }, {
                code: o
            }, function() {
                $("#two_factor_form input[type=submit]").prop("disabled", !1),
                t.completed = !0,
                Dialog.close(),
                UI.SuccessMessage(_("9154e256b98593684452602f9c5e0652"))
            }, function() {
                $("#two_factor_form input[type=submit]").prop("disabled", !1)
            })
        }
    },
    o
});

;/**** game/Chat.js_ ****/
var Chat;
!function() {
    "use strict";
    Chat = function() {
        var e, t, n, a, i = this, o = {}, r = [], s = {}, c = {}, d = {}, h = {}, u = {}, l = {}, v = 0, f = !0;
        this.HISTORY_CACHE_TIME = 300,
        this.init = function() {
            if (this.isSupported() && !(window.game_data.player.sitter > 0)) {
                -1 !== window.location.href.indexOf("intro") && this.cleanCache(),
                this.storage = new ChatStorage,
                e = document.title,
                a = $("#chat-wrapper"),
                v = Math.floor($(document).width() / 245),
                !1 === i.storage.get("last_connection_state") && this.connectionUnavailable(!0),
                this.contacts = new ChatContacts(this),
                this.addWindow(this.contacts),
                this.initConversations(),
                this.initWindowState(),
                this.updateSoundStatus(),
                this.updateBlockedPlayers(),
                this.storage.addObserver("conversations", this.syncConversations),
                this.storage.addObserver("window_state", this.syncWindowState),
                Connection.registerHandler("chat/playername", this.receivedPlayerName),
                Connection.registerHandler("chat/messages", this.receivedChatMessages),
                Connection.registerHandler("chat/read", this.receivedChatRead),
                Connection.registerHandler("chat/typing", this.receivedTypingIndication),
                Connection.registerHandler("chat/error", this.handleError),
                Connection.registerHandler("chat/playerconversation", this.receivedNewConversationData),
                Connection.registerHandler("chat/conversation", this.receivedConversationData),
                $(Connection).on("disconnected", this.connectionUnavailable),
                $(Connection).on("connected", this.connectionAvailable);
                var t = function() {
                    i.connectionUnavailable(),
                    $(Connection).off("connect_error", t)
                };
                $(Connection).on("connect_error", t),
                Math.random() < .01 && i.cleanCache()
            }
        }
        ,
        this.isPlayerBlocked = function(e) {
            return -1 !== $.inArray(e, l)
        }
        ,
        this.updateBlockedPlayers = function() {
            var e = window.sessionStorage
              , t = "chat_blocked_players"
              , n = -1 !== window.location.href.indexOf("mode=block")
              , a = !1;
            e.hasOwnProperty(t) && (l = JSON.parse(e.getItem(t)),
            a = !0),
            a && !n || TribalWars.get("api", {
                ajax: "blocked_players"
            }, function(n) {
                l = n,
                e.setItem(t, JSON.stringify(l))
            })
        }
        ,
        this.cleanCache = function() {
            Object.keys(localStorage).forEach(function(e) {
                var t = e.match(/(\d+)_chat_/);
                if (t && (parseInt(t[1]) !== parseInt(window.game_data.player.id) && localStorage.removeItem(e),
                /history/.test(e))) {
                    var n = JSON.parse(localStorage.getItem(e));
                    Timing.getCurrentServerTime() - n.timestamp > 1e3 * i.HISTORY_CACHE_TIME && localStorage.removeItem(e)
                }
            })
        }
        ,
        this.connectionAvailable = function() {
            a.removeClass("chat-disconnected"),
            f = !0,
            i.storage.set("last_connection_state", !0),
            $(".chat-header").off("click", i.showConnectionError),
            t && (clearTimeout(t),
            t = 0)
        }
        ,
        this.connectionUnavailable = function(e) {
            if (!t) {
                var n = function() {
                    a.addClass("chat-disconnected"),
                    f = !1,
                    i.storage.set("last_connection_state", !1),
                    $(".chat-header").on("click", i.showConnectionError)
                };
                !0 !== e ? t = setTimeout(n, 3e3) : n()
            }
        }
        ,
        this.isConnected = function() {
            return f
        }
        ,
        this.showConnectionError = function(e) {
            return e.stopImmediatePropagation(),
            e.preventDefault(),
            UI.ErrorMessage(ChatLang.error.unavailable),
            !1
        }
        ,
        this.isSupported = function() {
            return Connection.isSupportedBrowser() && Modernizr.json && Modernizr.localstorage && "function" == typeof window.addEventListener
        }
        ,
        this.handleError = function(e) {
            if ("err_unknown" === e.message ? UI.ErrorMessage(ChatLang.error.unknown) : "err_spam" === e.message ? UI.ErrorMessage(_("d015ac2902d2feed0ccd3efa93a4a851")) : UI.ErrorMessage(e.message),
            "message" === e.type) {
                var t = e.metadata.head_id
                  , n = i.getWindow("conversation_" + t);
                n && n.setBusy(!1)
            }
        }
        ,
        this.updateSoundStatus = function() {
            TribalWars.getSetting("chat_sound_enabled") ? a.addClass("chat-sound-enabled") : a.removeClass("chat-sound-enabled")
        }
        ,
        this.addWindow = function(e) {
            a.append(e.getWindow()),
            o[e.getID()] = e,
            setTimeout(function() {
                e.getWindow().removeClass("chat-new-block")
            }, 200)
        }
        ,
        this.removeWindow = function(e) {
            delete o[e.getID()],
            e.getWindow().remove()
        }
        ,
        this.getWindow = function(e) {
            return o.hasOwnProperty(e) ? o[e] : null
        }
        ,
        this.requestConversationWithPlayer = function(e) {
            e !== parseInt(window.game_data.player.id) ? Connection.emit("chat/playerconversation", e) : UI.ErrorMessage(ChatLang.error.insanity)
        }
        ,
        this.receivedNewConversationData = function(e) {
            1 === e.players.length ? i.newConversation(e.head_id, e.players[0].player_id, !1, !0) : i.newConversation(e.head_id, 0, !1, !0)
        }
        ,
        this.getConversationData = function(e, t) {
            d.hasOwnProperty(e) ? t(d[e]) : (h[e] = t,
            Connection.emit("chat/conversation", e))
        }
        ,
        this.receivedConversationData = function(e) {
            d[e.head_id] = e,
            h.hasOwnProperty(e.head_id) && (h[e.head_id](e),
            delete h[e.head_id])
        }
        ,
        this.newConversation = function(e, t, n, a) {
            if (e = parseInt(e),
            t = parseInt(t),
            !(Object.keys(o).length >= v)) {
                var r = i.getWindow("conversation_" + e);
                if (r)
                    return r.maximize(),
                    r.setRead(),
                    r.focus(),
                    r;
                var s = new ChatConversation(i,e,t);
                return i.addWindow(s),
                i.conversationsChanged(n),
                u.hasOwnProperty(e) && s.updateUnreadCount(u[e]),
                a && (i.windowStateChanged(),
                s.setRead(),
                s.focus()),
                s
            }
            a && UI.ErrorMessage(ChatLang.error.windows)
        }
        ,
        this.removeConversation = function(e, t) {
            var n = "conversation_" + e
              , a = i.getWindow(n);
            a && (i.removeWindow(a),
            i.conversationsChanged(t))
        }
        ,
        this.conversationsChanged = function(e) {
            var t = [];
            $.each(o, function(e, n) {
                n instanceof ChatConversation && t.push(n.getConversationKey())
            }),
            r = t,
            !0 !== e && i.storage.set("conversationsv2", t)
        }
        ,
        this.syncConversations = function(e, t) {
            r.forEach(function(e) {
                -1 === $.inArray(e, t) && i.removeConversation(e.split("_")[0], !0)
            }),
            t.forEach(function(e) {
                if (-1 === $.inArray(e, r)) {
                    var t = e.split("_");
                    i.newConversation(t[0], t[1], !0)
                }
            })
        }
        ,
        this.initConversations = function() {
            var e = i.storage.get("conversationsv2");
            e && e.forEach(function(e) {
                var t = e.split("_");
                i.newConversation(t[0], t[1], !0)
            })
        }
        ,
        this.addPlayerName = function(e, t) {
            s[e] = t,
            c.hasOwnProperty(e) && (c[e](t),
            delete c[e])
        }
        ,
        this.getPlayerName = function(e, t) {
            s.hasOwnProperty(e) ? t(s[e]) : (c[e] = t,
            i.requestPlayerName(e))
        }
        ,
        this.requestPlayerName = function(e) {
            Connection.emit("chat/playername", e)
        }
        ,
        this.receivedPlayerName = function(e) {
            i.addPlayerName(e.id, e.name)
        }
        ,
        this.initWindowState = function() {
            var e = i.storage.get("window_state");
            e ? (this.syncWindowState(null, e),
            i.updateUIBufferStatus()) : parseInt(window.game_data.player.points) < 100 && i.contacts.minimize()
        }
        ,
        this.windowStateChanged = function() {
            var e = {};
            $.each(o, function(t, n) {
                e[t] = n.isMinimized() ? 0 : 1
            }),
            i.window_state = e,
            i.storage.set("window_state", e),
            i.updateUIBufferStatus()
        }
        ,
        this.updateUIBufferStatus = function() {
            $("#chat-wrapper").find(".chat-window:not(.chat-window-minimized)").length > 0 ? $(".chat-open-buffer").show() : $(".chat-open-buffer").hide()
        }
        ,
        this.syncWindowState = function(e, t) {
            $.each(t, function(e, t) {
                var n = i.getWindow(e);
                n && ((n.isMinimized() ? 0 : 1) !== t && (1 === t ? n.maximize(!0) : n.minimize(!0)))
            })
        }
        ,
        this.requestChatHistory = function(e, t) {
            var n = {
                head_id: e,
                before: t
            };
            Connection.emit("chat/history", n)
        }
        ,
        this.receivedChatMessages = function(e) {
            var t = i.getWindow("conversation_" + e.head_id);
            if (!t)
                return (t = i.newConversation(e.head_id, e.player_id)).playSound(),
                void i.requestContacts();
            t.receivedMessages(e)
        }
        ,
        this.requestContacts = function() {
            Connection.emit("chat/contacts", {})
        }
        ,
        this.updateConversationName = function(e, t, n) {
            var a = i.getWindow("conversation_" + e);
            a && a.updateSubject(n),
            i.contacts && i.contacts.setConversationName(e, t, n)
        }
        ,
        this.setUnreadMessageCount = function(t, n) {
            u[t] = n;
            var a = i.getWindow("conversation_" + t);
            if (a && a.updateUnreadCount(n),
            i.contacts) {
                i.contacts.setUnreadCount(t, n);
                var o = 0;
                $.each(u, function(e, t) {
                    o += t
                }),
                i.contacts.setTotalUnreadCount(o),
                document.title = 0 === o ? e : "(" + o + ") " + e
            }
        }
        ,
        this.receivedChatRead = function(e) {
            i.setUnreadMessageCount(e, 0)
        }
        ,
        this.receivedTypingIndication = function(e) {
            var t = i.getWindow("conversation_" + e);
            t && t.receivedPartnerTypingNotice()
        }
        ,
        this.getEmojiSelector = function(e) {
            n ? e(n) : TribalWars.get("api", {
                ajax: "emoji"
            }, function(t) {
                e(n = t)
            })
        }
        ,
        this.init()
    }
}();

;/**** game/ChatLang.js_ ****/
var ChatLang;
!function() {
    "use strict";
    ChatLang = {
        general: {
            title: _("55dcdf017b51fc96f7b5f9d63013b95d"),
            close: _("0640197b0649207363d62dcce2e38e5b"),
            close_confirm: _("10432614703bfbf7b8da5060e7a6f32e"),
            authorship: _("0d961daef529b138a2a3330d25a6711d"),
            new_messages: _("a461f7807e591a76a8e6034997dae87d")
        },
        buttons: {
            close: _("d3d2e617335f08df83599665eef8a418"),
            minimize: _("d27532d90ecd513e97ab811c0f34dbfd"),
            maximize: _("1e8260f82515d3f84ec17a0de4bd4c5b"),
            other: _("dae8ace18bdcbcc6ae5aece263e14fe8"),
            "sound-on": _("66248805079469767a84505ae9b8c74e"),
            "sound-off": _("3cf621fb5bb2cb12ccc1bafb8f409bc3"),
            "group-chat": _("ec499421c57ec1bd00174636874446d0")
        },
        contacts: {
            recent: _("5e522eb5b45d399cfc289b8849a8a579"),
            group: _("31da17063d67c2cb279347de2a222f79"),
            ally: _("ffec4c2ee3a32c04e074fca3b29c5275"),
            buddy: _("3d594614f445f6b00014e9b77730b833"),
            none: _("ef4f6f9c0e487eb829dbb3c0ea2c3b98"),
            find_ally: _("f05d455c2d9f45fa2cffd700b671b4ca"),
            enter_name: _("8db61ba8bc85fde639110b3098e827bb"),
            does_not_exist: _("97285eceb8fdd1beafd94efa7f6b6774")
        },
        error: {
            windows: _("e286f60f604f843bc73defc79b090661"),
            unknown: _("06cc19fbc54421ae5a409a52470f75d8"),
            insanity: _("4b82a423b890525503cc83e97a767925"),
            unavailable: _("fef01d88899a64110142b48e0f78e9ab")
        },
        online: {
            online: _("cca55f4df33af29814ea569e9933a001"),
            offline: _("a7e6d2927eb5729e9e70786cac2b3af7"),
            unknown: _("27b2316e1a4e774581ae7523430ce273")
        },
        menu: {
            report: _("16db075c33c61875fbb85d0721fd6c8e"),
            block: _("bef53cf190abf4e127ce1a6ee37060f4")
        }
    }
}();

;/**** game/ChatStorage.js ****/
var ChatStorage;
!function() {
    "use strict";
    ChatStorage = function() {
        var t = {}
          , e = window.game_data.player.id + "_chat_";
        this.init = function() {
            "function" == typeof window.addEventListener && window.addEventListener("storage", this.storageChange, !1)
        }
        ,
        this.storageChange = function(n) {
            n.key.substr(0, e.length) === e && (t.hasOwnProperty(n.key) && (0,
            t[n.key])(!!n.oldValue && JSON.parse(n.oldValue), !!n.newValue && JSON.parse(n.newValue)))
        }
        ,
        this.get = function(t) {
            return JSON.parse(window.localStorage.getItem(e + t))
        }
        ,
        this.set = function(t, n) {
            window.localStorage.setItem(e + t, JSON.stringify(n))
        }
        ,
        this.remove = function(t) {
            window.localStorage.removeItem(e + t)
        }
        ,
        this.addObserver = function(n, a) {
            t[e + n] = a
        }
        ,
        this.init()
    }
}();

;/**** game/ChatWindow.js ****/
var ChatWindow;
!function() {
    "use strict";
    ChatWindow = function(i) {
        var t = this;
        this.$block = null,
        this.buildWindow = function(i) {
            var n = '<div class="chat-block chat-new-block"><div class="chat-window ' + i + '"><div class="chat-header"><h4 class="chat-title"></h4><div class="chat-buttons"></div></div><div class="chat-body"></div><div class="chat-footer"></div></div></div>';
            t.$block = $(n),
            t.$block.find(".chat-header").click(function(i) {
                if ("A" === i.target.tagName || "INPUT" === i.target.tagName)
                    return !0;
                t.isMinimized() ? t.maximize() : t.minimize()
            })
        }
        ,
        this.getWindow = function() {
            return t.$block
        }
        ,
        this.closeMenu = function() {
            t.getWindow().find(".chat-menu").remove()
        }
        ,
        this.setTitle = function(i) {
            t.$block.find("h4").html(i)
        }
        ,
        this.addButton = function(i, n) {
            var a = $('<a href="#" class="chat-button chat-button-' + i + '"></a>').attr("title", ChatLang.buttons[i]);
            t.$block.find(".chat-buttons").append(a),
            a.on("click", n)
        }
        ,
        this.minimize = function(n) {
            return !!i.isConnected() && (t.$block.find(".chat-window").addClass("chat-window-minimized"),
            !0 !== n && i.windowStateChanged(),
            t.hasOwnProperty("didMinimize") && t.didMinimize(),
            !1)
        }
        ,
        this.maximize = function(n) {
            return !!i.isConnected() && (t.$block.find(".chat-window").removeClass("chat-window-minimized"),
            !0 !== n && i.windowStateChanged(),
            t.hasOwnProperty("didMaximize") && t.didMaximize(),
            !1)
        }
        ,
        this.isMinimized = function() {
            return t.$block.find(".chat-window").hasClass("chat-window-minimized")
        }
    }
}();

;/**** game/ChatContacts.js_ ****/
var ChatContacts;
!function() {
    "use strict";
    (ChatContacts = function(t) {
        ChatWindow.call(this, t);
        var a = this
          , n = {}
          , e = {}
          , o = {}
          , i = {}
          , c = {};
        this.init = function() {
            this.buildWindow("chat-contacts"),
            this.setTitle(ChatLang.general.title + ' <span class="chat-total-unread"></span>'),
            this.addButton("close", this.close),
            this.addButton("minimize", this.minimize),
            this.addButton("maximize", this.maximize),
            this.addButton("sound-off", this.toggleSound),
            this.addButton("sound-on", this.toggleSound),
            this.addButton("group-chat", GroupChat.openCreateWindow),
            this.buildFooter(),
            this.loadGroupState(),
            this.renderContactsFromCache(),
            this.getWindow().on("click", ".chat-contact", this.clickContact),
            Connection.registerHandler("chat/contacts", this.receivedContacts),
            Connection.registerHandler("chat/playerdata", this.receivedNewPlayerData),
            t.storage.addObserver("group_state", this.remoteGroupStateChanged)
        }
        ,
        this.getID = function() {
            return "contacts"
        }
        ,
        this.didMinimize = function() {
            a.getWindow().addClass("chat-mini-block")
        }
        ,
        this.didMaximize = function() {
            a.getWindow().removeClass("chat-mini-block")
        }
        ,
        this.toggleSound = function() {
            var a = TribalWars.getSetting("chat_sound_enabled");
            return TribalWars.setSetting("chat_sound_enabled", !a, function() {
                t.updateSoundStatus()
            }),
            !1
        }
        ,
        this.close = function() {
            var t = [{
                text: ChatLang.general.close_confirm,
                callback: function() {
                    TribalWars.setSetting("chat_enabled", 0, function() {
                        window.location.reload()
                    })
                },
                confirm: !0
            }];
            UI.ConfirmationBox(ChatLang.general.close, t)
        }
        ,
        this.clickContact = function() {
            var a = $(this).data("player_id")
              , n = $(this).data("head_id");
            return n ? t.newConversation(n, a, !1, !0) : t.requestConversationWithPlayer(a),
            !1
        }
        ,
        this.sortContactsByName = function(t, a) {
            return t.name.localeCompare(a.name)
        }
        ,
        this.sortContactsByLastPost = function(t, a) {
            return t.last_post > a.last_post
        }
        ,
        this.renderContactsFromCache = function() {
            var e = t.storage.get("contacts");
            e && (n = e,
            a.renderContacts())
        }
        ,
        this.renderContacts = function() {
            var r = a.getWindow().find(".chat-body");
            i = {},
            0 === Object.keys(n).length && 0 === r.find(".chat-no-contacts").length ? (r.append('<div class="chat-no-contacts"><p>' + ChatLang.contacts.none + "</p><p>" + s(ChatLang.contacts.find_ally, TribalWars.buildURL("GET", "ally")) + "</p></div>"),
            r.find(".chat-contact-group").remove()) : Object.keys(n).length > 0 && r.find(".chat-no-contacts").remove(),
            $.each(n, function(n, s) {
                s = "recent" === n || "group" === n ? s.sort(a.sortContactsByLastPost) : s.sort(a.sortContactsByName);
                var d, h = r.find("#chat-contact-group-" + n);
                if (h.length)
                    d = h.find(".chat-contact-group-contacts");
                else {
                    o.hasOwnProperty(n) || (o[n] = 1),
                    h = $('<div class="chat-contact-group chat-contact-group-open" id="chat-contact-group-' + n + '"/>').appendTo(r);
                    var u = $('<div class="chat-contact-group-header"><span>' + ChatLang.contacts[n] + "</span></div>").appendTo(h);
                    u.data("group", n),
                    u.on("click", a.toggleGroup),
                    d = $('<div class="chat-contact-group-contacts" />').appendTo(h),
                    0 === o[n] && a.hideGroup(n)
                }
                e.hasOwnProperty(n) || (e[n] = {});
                var l, p = e[n], g = {}, f = {};
                $.each(s, function(a, e) {
                    if (!e.player_id || !f.hasOwnProperty(e.player_id)) {
                        var o, s = e.head_id + "_" + e.player_id;
                        e.player_id ? t.addPlayerName(e.player_id, e.name) : t.receivedConversationData({
                            head_id: e.head_id,
                            subject: e.name,
                            group_creator: e.group_creator
                        }),
                        p.hasOwnProperty(s) || (o = $('<a class="chat-contact chat-status chat-status-' + e.player_id + '" data-head_id="' + e.head_id + '" data-player_id="' + e.player_id + '" id="chat-contact-' + s + '" href="#"><span class="chat-contact-name">' + escapeHtml(e.name) + '</span> <span class="chat-contact-count"></span></a>').data("online", -2),
                        l ? l.after(o) : "recent" === n ? d.prepend(o) : d.append(o)),
                        t.setUnreadMessageCount(e.head_id, e.new_count),
                        c.hasOwnProperty(s) || (c[s] = e.name),
                        e.name !== c[s] && t.updateConversationName(e.head_id, e.player_id, e.name),
                        i.hasOwnProperty[e.player_id] && -1 === e.online || (i[e.player_id] = e.online),
                        g[s] = !0,
                        f[e.player_id] = !0,
                        l = o
                    }
                }),
                $.each(p, function(t) {
                    g.hasOwnProperty(t) || r.find("#chat-contact-" + t).remove()
                }),
                e[n] = g
            }),
            a.renderOnlineState()
        }
        ,
        this.renderOnlineState = function() {
            $.each(i, function(t, n) {
                a.getWindow().parent().find(".chat-status-" + t).each(function() {
                    var t = $(this);
                    parseInt(t.data("online")) !== n && (1 === n ? t.removeClass("chat-status-offline").addClass("chat-status-online").attr("title", ChatLang.online.online) : 0 === n ? t.removeClass("chat-status-online").addClass("chat-status-offline").attr("title", ChatLang.online.offline) : t.removeClass("chat-status-online chat-status-offline").attr("title", ChatLang.online.unknown),
                    t.data("online", n))
                })
            })
        }
        ,
        this.getOnlineState = function(t) {
            return i.hasOwnProperty(t) ? i[t] : -1
        }
        ,
        this.loadGroupState = function() {
            var a = t.storage.get("group_state");
            a && (o = a)
        }
        ,
        this.toggleGroup = function() {
            var t = $(this).data("group");
            $(this).parent().hasClass("chat-contact-group-open") ? a.hideGroup(t) : a.showGroup(t)
        }
        ,
        this.showGroup = function(t) {
            a.getWindow().find("#chat-contact-group-" + t).addClass("chat-contact-group-open"),
            a.setLocalGroupState(t, 1)
        }
        ,
        this.hideGroup = function(t) {
            a.getWindow().find("#chat-contact-group-" + t).removeClass("chat-contact-group-open"),
            a.setLocalGroupState(t, 0)
        }
        ,
        this.setLocalGroupState = function(a, n) {
            o[a] = n,
            t.storage.set("group_state", o)
        }
        ,
        this.remoteGroupStateChanged = function(t, n) {
            $.each(n, function(t, n) {
                n !== o[t] && (n ? a.showGroup(t) : a.hideGroup(t))
            })
        }
        ,
        this.buildFooter = function() {
            var t = $('<input class="chat-input chat-search" type="text" placeholder="' + ChatLang.contacts.enter_name + '" />').appendTo(a.getWindow().find(".chat-footer"));
            t.on("keyup", function(n) {
                if (13 === n.keyCode)
                    return a.newChatWithUnknownPlayer(t.val()),
                    t.val(""),
                    !1
            })
        }
        ,
        this.newChatWithUnknownPlayer = function(t) {
            Connection.emit("chat/playerdata", t)
        }
        ,
        this.receivedNewPlayerData = function(a) {
            !1 === a.status ? UI.ErrorMessage(ChatLang.contacts.does_not_exist) : (t.addPlayerName(a.result.id, a.result.name),
            t.requestConversationWithPlayer(a.result.id))
        }
        ,
        this.receivedContacts = function(e) {
            n = e,
            t.storage.set("contacts", n),
            a.renderContacts()
        }
        ,
        this.setUnreadCount = function(t, n) {
            a.getWindow().find(".chat-contact[data-head_id=" + t + "]").find(".chat-contact-count").text(n > 0 ? "(" + n + ")" : "")
        }
        ,
        this.setConversationName = function(t, n, e) {
            c[t + "_" + n] = e,
            a.getWindow().find(".chat-contact[data-head_id=" + t + "]").find(".chat-contact-name").text(e)
        }
        ,
        this.setTotalUnreadCount = function(t) {
            this.getWindow().find(".chat-total-unread").text(t > 0 ? "(" + t + ")" : "")
        }
        ,
        this.init()
    }
    ).prototype = new ChatWindow
}();

;/**** game/ChatConversation.js_ ****/
var ChatConversation;
!function() {
    "use strict";
    (ChatConversation = function(e, t, a) {
        ChatWindow.call(this, e);
        var n, i, s, o = this, r = 0, c = !1, d = !1, l = 0, h = 0, p = 0, u = {
            timestamp: 0,
            human: ""
        }, g = 0, m = !1;
        this.init = function() {
            o.buildWindow("chat-conversation"),
            s = o.getWindow().find(".chat-body"),
            o.addButton("close", o.close),
            o.addButton("minimize", o.minimize),
            o.addButton("maximize", o.maximize),
            o.buildUI(),
            o.initDragDrop(),
            s.on("scroll", o.didScroll),
            s.on("click", o.setRead),
            a ? e.getPlayerName(a, function(e) {
                o.updateSubject(e),
                o.addButton("other", o.clickOther)
            }) : e.getConversationData(t, function(e) {
                o.conversation_data = e,
                o.updateSubject(),
                o.conversation_data.group_creator && o.addButton("other", o.clickOther)
            }),
            o.requestHistory()
        }
        ,
        this.updateSubject = function(t) {
            if (a) {
                var n = TribalWars.buildURL("GET", "info_player", {
                    id: a
                });
                t;
                var i = ""
                  , s = e.contacts.getOnlineState(a);
                1 === s ? i = "chat-status-online" : 0 === s && (i = "chat-status-offline"),
                o.getWindow().find(".chat-status").data("online", s),
                o.setTitle('<a class="constrained chat-status chat-status-' + a + " " + i + '" href="' + n + '">' + escapeHtml(t) + '</a> <span class="chat-unread-count"></span><span class="chat-typing-indicator"></span>')
            } else
                t && (o.conversation_data.subject = t),
                o.setTitle('<span class="constrained">' + escapeHtml(o.conversation_data.subject) + '</span> <span class="chat-unread-count"></span>')
        }
        ,
        this.getID = function() {
            return "conversation_" + t
        }
        ,
        this.getHeadID = function() {
            return t
        }
        ,
        this.getPlayerID = function() {
            return a
        }
        ,
        this.getConversationKey = function() {
            return t + "_" + a
        }
        ,
        this.didMaximize = function() {
            o.scrollToBottom()
        }
        ,
        this.didMinimize = function() {
            o.getWindow().find(".chat-popover").hide()
        }
        ,
        this.beginRename = function() {
            var e = '<a href="#" class="confirm-rename"><img src="' + Format.image_src("quests/check.png") + '" /></a>';
            o.setTitle('<input type="text" name="subject" value="' + escapeHtml(this.conversation_data.subject) + '" />' + e),
            o.getWindow().find(".confirm-rename").on("click", o.endRename),
            o.getWindow().find("input[name=subject]").focus().select().on("keyup", function(e) {
                "Enter" === e.key && o.endRename(e)
            })
        }
        ,
        this.endRename = function(n) {
            n.stopPropagation();
            var i = o.getWindow().find("input[name=subject]").val()
              , s = {
                head_id: o.conversation_data.head_id,
                subject: i
            };
            TribalWars.post("chat", {
                ajaxaction: "rename_thread"
            }, s, function(n) {
                e.updateConversationName(t, a, i)
            })
        }
        ,
        this.clickOther = function() {
            var e = o.getWindow().find(".chat-menu");
            if (e.length)
                e.remove();
            else {
                var t = $('<div class="chat-menu" />');
                a ? $('<a href="#" class="chat-menu-option">' + ChatLang.menu.block + "</div>").on("click", function() {
                    return o.close(),
                    TribalWars.redirect("info_player", {
                        mode: "block",
                        block_id: o.getPlayerID()
                    }),
                    !1
                }).appendTo(t) : o.conversation_data.group_creator && ($('<a href="#" class="chat-menu-option">' + _("ef53538ae41a651c7f72ab6cb1135d8c") + "</div>").on("click", function() {
                    return GroupChat.openGroupMembers(o.conversation_data.head_id),
                    o.closeMenu(),
                    !1
                }).appendTo(t),
                o.conversation_data.group_creator === game_data.player.id ? ($('<a href="#" class="chat-menu-option">' + _("904a8304056d77e4547744781b7ceb50") + "</div>").on("click", function() {
                    return o.beginRename(),
                    o.closeMenu(),
                    !1
                }).appendTo(t),
                $('<a href="#" class="chat-menu-option">' + _("f2a6c498fb90ee345d997f888fce3b18") + "</div>").on("click", function() {
                    return GroupChat.deleteGroup(o.conversation_data.head_id),
                    o.closeMenu(),
                    !1
                }).appendTo(t)) : $('<a href="#" class="chat-menu-option">' + _("a52945dbe283de2f7e9d63ca3417f36a") + "</div>").on("click", function() {
                    return GroupChat.leaveGroup(o.conversation_data.head_id),
                    o.closeMenu(),
                    !1
                }).appendTo(t)),
                t.appendTo(s.parent())
            }
        }
        ,
        this.close = function() {
            return o.setRead(),
            e.removeConversation(t),
            !1
        }
        ,
        this.scrollToBottom = function() {
            s.scrollTop(s[0].scrollHeight)
        }
        ,
        this.buildUI = function() {
            o.buildFooter();
            var e = $('<a class="chat-new-message-notification" href="#">' + ChatLang.general.new_messages + "</div>");
            e.on("click", function() {
                return e.hide(),
                o.scrollToBottom(),
                o.setRead(),
                !1
            }),
            e.appendTo(s)
        }
        ,
        this.buildFooter = function() {
            var e = o.getWindow().find(".chat-footer")
              , t = $('<textarea class="chat-input" maxlength="500"></textarea>').appendTo(e);
            n = t.height(),
            t.on("input", function() {
                o.adjustInputSize(),
                o.broadcastTyping()
            }),
            t.on("keydown", function(e) {
                if (13 === e.keyCode)
                    return e.ctrlKey ? (t.val(t.val() + "\n"),
                    o.adjustInputSize()) : (o.sendMessage(t.val()),
                    t.val(""),
                    o.adjustInputSize()),
                    !1
            }),
            t.on("click", o.setRead),
            t.on("focus", function() {
                m = !0
            }),
            t.on("blur", function() {
                m = !1
            }),
            e.append(UI.Image("loading2.gif", {
                class: "chat-busy-indicator"
            }));
            var a = UI.Image("emoji/select.png", {
                class: "chat-smileys"
            });
            e.append(a),
            a.on("click", this.toggleSmileys)
        }
        ,
        this.toggleSmileys = function(t) {
            t && t.stopPropagation();
            var a = o.getWindow().find(".chat-popover-smileys").parents(".chat-popover");
            a.length ? "none" === a.css("display") ? a.show() : a.hide() : (o.setBusy(!0),
            e.getEmojiSelector(function(e) {
                var t = $('<div class="chat-popover" />')
                  , a = $('<div class="chat-popover-smileys" />').appendTo(t);
                a.html(e),
                a.slimScroll({
                    height: "200px"
                }),
                a.on("click", ".emoji", function() {
                    var e = $(this).data("title");
                    e || (e = $(this).attr("title"));
                    var t = ":" + e + ":"
                      , a = o.getWindow().find(".chat-input")
                      , n = a.prop("selectionStart")
                      , i = a.val()
                      , s = i.substring(0, n)
                      , r = i.substring(n, i.length);
                    a.val(s + t + r),
                    a.focus(),
                    a[0].setSelectionRange(s.length + t.length, s.length + t.length),
                    o.adjustInputSize()
                }),
                o.getWindow().on("click", function(e) {
                    var t = $(e.target);
                    t.hasClass("chat-popover-smileys") || 0 !== t.parents(".chat-popover-smileys").length || "none" !== o.getWindow().find(".chat-popover-smileys").parents(".chat-popover").css("display") && o.toggleSmileys()
                }),
                o.getWindow().append(t),
                o.setBusy(!1)
            }))
        }
        ,
        this.adjustInputSize = function() {
            var e = o.getWindow().find("textarea");
            n || (n = e.height(),
            i = o.getWindow().find(".chat-body").height()),
            e[0].style.height = 0,
            e[0].style.height = Math.max(n, e[0].scrollHeight) + "px",
            o.getWindow().find(".chat-body").height(i + n - e.parent().height() + "px")
        }
        ,
        this.setBusy = function(e) {
            e ? o.getWindow().addClass("chat-busy") : o.getWindow().removeClass("chat-busy")
        }
        ,
        this.broadcastTyping = function() {
            if (a) {
                var e = (new Date).getTime();
                e - h > 3500 && (h = e,
                Connection.emit("chat/typing", {
                    head_id: o.getHeadID(),
                    player_id: o.getPlayerID()
                }))
            }
        }
        ,
        this.sendMessage = function(e) {
            Connection.emit("chat/send", {
                head_id: t,
                body: e
            }),
            o.setBusy(!0),
            h = 0
        }
        ,
        this.fixBB = function(e) {
            var t = TribalWars._script + "?";
            return window.game_data.hasOwnProperty("village") && (t += "village=" + window.game_data.village.id + "&"),
            e.replace(/\/guest.php\?/g, t)
        }
        ,
        this.addMessage = function(t, n, i) {
            var c = s.scrollTop()
              , d = $('<div class="chat-row" />')
              , h = t.body;
            e.isPlayerBlocked(t.player_id) && (d.addClass("blocked"),
            h = _("63a4fdedf50ddf4514669402c6856ff2"));
            var p = 0;
            if (0 === t.player_id)
                d.append($('<div class="chat-system" />').html(h).attr("title", t.datetime));
            else {
                var f = window.s(ChatLang.general.authorship, t.datetime, parseInt(t.player_id) === parseInt(window.game_data.player.id) ? window.game_data.player.name : "other_person")
                  , v = $('<div class="chat-message" />').html('<span class="chat-author">' + f + "\n</span>" + o.fixBB(h)).attr("title", t.datetime).appendTo(d);
                if (t.player_id !== parseInt(game_data.player.id)) {
                    v.addClass("chat-message-other");
                    var y = TribalWars.buildURL("GET", "info_player", {
                        id: t.player_id
                    })
                      , w = $('<a href="' + y + '" title="' + escapeHtml(t.player_name) + '"><img src="' + t.player_avatar + '" class="userimage" /></a>');
                    d.prepend(w),
                    d.addClass("has-avatar"),
                    UI.ToolTip(w),
                    d.addClass("reportable");
                    var T = TribalWars.buildURL("GET", "affront", {
                        mode: "affront",
                        type: "post",
                        id: t.id
                    })
                      , b = Format.image_src("error.png")
                      , C = $('<a href="' + T + '" title="' + _("2cc9fd012f0f2759931a152895b42f81") + '" class="chat-report"><img src="' + b + '" /></a>');
                    d.append(C),
                    UI.ToolTip(C),
                    a || d.prepend('<span class="chat-author-line">' + escapeHtml(t.player_name) + "</span>")
                }
            }
            var W = function(e) {
                var a = $('<div class="chat-row"><span class="chat-time">' + (i ? t.datetime : u.human) + "</span></div>");
                "new" === n ? a.appendTo(s) : a.prependTo(s),
                p += a.outerHeight()
            };
            "new" === n ? (0 !== g && (new Date).getTime() / 1e3 - g > 3600 && W(t.human),
            g = t.timestamp,
            s.append(d),
            d.hide().fadeIn(200),
            t.player_id !== parseInt(window.game_data.player.id) ? (e.setUnreadMessageCount(o.getHeadID(), l + 1),
            m ? o.setRead() : o.playSound(),
            o.setPartnerSilent(),
            o.isMinimized() || s[0].scrollHeight - s.height() === s.scrollTop() || s.find(".chat-new-message-notification").show()) : o.setBusy(!1)) : (i && s.prepend(d),
            0 === g && (g = t.timestamp),
            0 === u.timestamp ? u = {
                timestamp: t.timestamp,
                human: t.datetime
            } : u.timestamp - t.timestamp > 3600 || i ? (W(i ? t.datetime : u.human),
            u = {
                timestamp: t.timestamp,
                human: t.datetime
            }) : u.human = t.datetime,
            i || s.prepend(d)),
            t.player_id !== parseInt(game_data.player.id) && !0,
            (0 === r || r > t.id) && (r = t.id),
            o.isMinimized() || s.scrollTop(c + d.outerHeight() + p)
        }
        ,
        this.requestHistory = function(a) {
            if (!c) {
                if (a || (a = 0),
                0 === a) {
                    var n = o.getCachedHistory();
                    if (n)
                        return void setTimeout(function() {
                            o.receivedMessages({
                                type: "history",
                                messages: n
                            })
                        }, 0)
                }
                c = !0,
                e.requestChatHistory(t, a)
            }
        }
        ,
        this.getCachedHistory = function() {
            var a = e.storage.get("history_" + t);
            return !!a && (Timing.getCurrentServerTime() - a.timestamp < 1e3 * e.HISTORY_CACHE_TIME && a.messages)
        }
        ,
        this.receivedMessages = function(t) {
            c = !1;
            var a = t.messages
              , n = !1;
            21 !== a.length ? n = !0 : a = a.slice(0, 20),
            t.messages.forEach(function(e, i) {
                o.addMessage(e, t.type, n && i === a.length - 1)
            }),
            "history" === t.type && t.hasOwnProperty("fresh") && !0 === t.fresh ? e.storage.set("history_" + t.head_id, {
                timestamp: Timing.getCurrentServerTime(),
                messages: t.messages
            }) : "new" === t.type && e.storage.remove("history_" + t.head_id),
            0 === t.messages.length && (d = !0)
        }
        ,
        this.playSound = function() {
            TribalWars.getSetting("chat_sound_enabled") && TribalWars.playSound("chat")
        }
        ,
        this.didScroll = function(e) {
            var t = s[0].scrollHeight - s.height();
            $(this).scrollTop() < t / 3 && !c && !d && o.requestHistory(r),
            s[0].scrollHeight - s.height() === s.scrollTop() && s.find(".chat-new-message-notification").hide()
        }
        ,
        this.updateUnreadCount = function(e) {
            l = parseInt(e);
            var t = o.getWindow().find(".chat-unread-count");
            l > 0 ? t.show().text("(" + e + ")") : 0 === l && "none" !== t.css("display") && t.fadeOut()
        }
        ,
        this.setRead = function() {
            0 !== l && (e.setUnreadMessageCount(t, 0),
            Connection.emit("chat/read", t),
            a && TribalWars.track("chat", ["read", o.getPlayerID(), 1]))
        }
        ,
        this.receivedPartnerTypingNotice = function() {
            p && clearTimeout(p),
            o.setPartnerTyping(),
            p = setTimeout(o.setPartnerSilent, 5e3)
        }
        ,
        this.setPartnerTyping = function() {
            o.getWindow().addClass("is-typing")
        }
        ,
        this.setPartnerSilent = function() {
            p && clearTimeout(p),
            o.getWindow().removeClass("is-typing")
        }
        ,
        this.focus = function() {
            o.getWindow().find("textarea").focus()
        }
        ,
        this.initDragDrop = function() {
            var e = o.getWindow()
              , t = 0;
            e.on("dragenter", function(e) {
                1 === ++t && s.addClass("lit")
            }),
            e.on("dragleave", function(e) {
                0 === --t && s.removeClass("lit")
            }),
            e.on("dragover", function(e) {
                e.preventDefault()
            }),
            e.on("dragstop", function(e) {
                t = 0,
                s.removeClass("lit")
            }),
            e.on("drop", function(e) {
                var a = e.originalEvent.dataTransfer.getData("Text");
                if (!a)
                    return !0;
                if ("http" !== a.substr(0, 4))
                    return !0;
                var n, i = a.match(/id=([0-9]+)/);
                if (i && a.match(/screen=info_village/))
                    n = "[village]#" + i[1] + "[/village]";
                else if (a.match(/screen=overview/) && !a.match(/screen=overview_/)) {
                    var r = a.match(/village=(\d+)/);
                    r && (n = "[village]#" + r[1] + "[/village]")
                } else
                    n = i && a.match(/screen=info_player/) ? "[player]#" + i[1] + "[/player]" : i && a.match(/screen=info_ally/) ? "[ally]#" + i[1] + "[/ally]" : "[url]" + a + "[/url]";
                n && (o.sendMessage(n),
                o.getWindow().find("textarea").focus(),
                e.preventDefault()),
                t = 0,
                s.removeClass("lit")
            })
        }
        ,
        this.init()
    }
    ).prototype = new ChatWindow
}();

;/**** game/GroupChat.js_ ****/
var GroupChat;
!function() {
    "use strict";
    GroupChat = {
        MAX_GROUP_CHAT_PARTICIPANTS: 20,
        openCreateWindow: function() {
            var e = "<h2>" + _("ec499421c57ec1bd00174636874446d0") + "</h2>";
            e += '<p class="error" style="display: none"></p>',
            e += "<form>",
            e += '<section class="chat-group-players">',
            e += '<label class="chat-group-player">' + _("86eaf6742dd45d73c45f3f65306701e1") + ' <input type="text" class="input-nicer" disabled value="' + game_data.player.name + '" /></label>',
            e += "</section>",
            e += '<input type="submit" class="btn" value="' + _("686e697538050e4664636337cc3b834f") + '" /></form>',
            Dialog.show("create_group_chat", e),
            $(".chat-group-players").append([GroupChat.createPlayerInputField()]),
            $("#popup_box_create_group_chat").on("input", "input[type=text]", GroupChat.handleCreateWindowPlayerInput),
            $("#popup_box_create_group_chat input[type=text]:not(:disabled)").first().focus(),
            $("#popup_box_create_group_chat form").on("submit", GroupChat.handleSubmit)
        },
        createPlayerInputField: function(e) {
            var a = $('<label class="chat-group-player">' + _("86eaf6742dd45d73c45f3f65306701e1") + ' <input type="text" name="group_player[]" class="input-nicer" /></label>');
            return e && a.find("input").val(e),
            a
        },
        handleCreateWindowPlayerInput: function() {
            var e = $(this)
              , a = $(".chat-group-players");
            if (e.val().includes(";") && 1 === e.parent().index()) {
                var t = e.val().split(";", GroupChat.MAX_GROUP_CHAT_PARTICIPANTS).map(GroupChat.createPlayerInputField);
                t.length < GroupChat.MAX_GROUP_CHAT_PARTICIPANTS && t.push(GroupChat.createPlayerInputField()),
                a.find("label").not(":first-child").remove(),
                a.append(t)
            } else {
                var r = 0 === e.val().length;
                r && "" === e.parent().next().find("input").val() && e.parent().siblings().length > 1 ? e.parent().next().remove() : !r && !e.parent().next().length && e.parent().siblings().length < GroupChat.MAX_GROUP_CHAT_PARTICIPANTS - 1 && $(".chat-group-players").append(GroupChat.createPlayerInputField())
            }
        },
        handleSubmit: function(e) {
            e.preventDefault();
            var a = $("#popup_box_create_group_chat input[type=text]:not(:disabled)").map(function() {
                return $(this).val()
            }).get().filter(function(e) {
                return "" !== e
            });
            0 === a.length ? UI.ErrorMessage(_("019db0ce40809d276ba6ff2f9523b686")) : 1 === a.length ? (window.TribalWars._chat.contacts.newChatWithUnknownPlayer(a[0]),
            Dialog.close()) : GroupChat.createGroupChat(a)
        },
        createGroupChat: function(e) {
            TribalWars.post("chat", {
                ajaxaction: "create_group_chat"
            }, {
                player_names: e
            }, function(e) {
                e.hasOwnProperty("problems") ? $("#popup_box_create_group_chat .error").html(e.problems).show() : (TribalWars._chat.requestContacts(),
                TribalWars._chat.newConversation(e.head_id, 0, !1, !0),
                Dialog.close())
            })
        },
        openGroupMembers: function(e) {
            Dialog.fetch("thread_members", "chat", {
                ajax: "thread_members",
                head_id: e
            }, function() {
                $(".evt-delete-group-member").on("click", function() {
                    return GroupChat.removeGroupMember(e, $(this).data("playerId")),
                    !1
                }),
                $("#group_chat_add_player").on("submit", function() {
                    return GroupChat.addGroupMember(e, $("#group_chat_add_player").find("input[type=text]").val()),
                    !1
                })
            })
        },
        addGroupMember: function(e, a) {
            TribalWars.post("chat", {
                ajaxaction: "thread_add_member"
            }, {
                head_id: e,
                player_name: a
            }, function() {
                UI.SuccessMessage(_("0d0cec22698e3d28ded47e7748563cfe")),
                Dialog.close(),
                GroupChat.openGroupMembers(e)
            })
        },
        removeGroupMember: function(e, a) {
            var t = [{
                text: _("1063e38cb53d94d386f21227fcd84717"),
                callback: function() {
                    TribalWars.post("chat", {
                        ajaxaction: "thread_remove_member"
                    }, {
                        head_id: e,
                        player_id: a
                    }, function() {
                        UI.SuccessMessage(_("f0946c8625b7d7bb68ca3e160b2b893d")),
                        Dialog.close(),
                        GroupChat.openGroupMembers(e)
                    })
                },
                confirm: !0
            }];
            UI.ConfirmationBox(_("b715c6f5ffc6e8b26e3577bc7e2aee47"), t)
        },
        leaveGroup: function(e) {
            var a = [{
                text: _("129b9e34ea8ab880950928c8a1281745"),
                callback: function() {
                    TribalWars.post("chat", {
                        ajaxaction: "thread_leave"
                    }, {
                        head_id: e
                    }, function() {
                        Dialog.close(),
                        TribalWars._chat.removeConversation(e, !1),
                        TribalWars._chat.requestContacts()
                    })
                },
                confirm: !0
            }];
            UI.ConfirmationBox(_("7378400845bc99fa30897b22a1af80fb"), a)
        },
        deleteGroup: function(e) {
            var a = [{
                text: _("f2a6c498fb90ee345d997f888fce3b18"),
                callback: function() {
                    TribalWars.post("chat", {
                        ajaxaction: "thread_delete"
                    }, {
                        head_id: e
                    }, function() {
                        Dialog.close(),
                        TribalWars._chat.removeConversation(e, !1),
                        TribalWars._chat.requestContacts()
                    })
                },
                confirm: !0
            }];
            UI.ConfirmationBox(_("c97e197e536a45f2c2f05bbde1468db0"), a)
        }
    }
}();

;/**** game/Modules/Common/Command/Commands/CommandAnimateIntChange.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandAnimateIntChange", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(t) {
    "use strict";
    function n(t, n, i, o) {
        this.duration_ms = o || 500,
        this.$el = t,
        this.from_int = n,
        this.to_int = i
    }
    return n.prototype = Object.create(t.prototype),
    $.extend(n.prototype, {
        describe: function() {
            return "animate int change from " + this.from_int + " to " + this.to_int + " with duration " + this.duration_ms + "ms"
        },
        run: function(t, n) {
            var i = this
              , o = Timing.getElapsedTimeSinceLoad();
            !function n() {
                var e = Timing.getElapsedTimeSinceLoad() - o
                  , m = Math.min(1, e / i.duration_ms)
                  , a = i.from_int + Math.floor((i.to_int - i.from_int) * m);
                i.$el.html(a),
                e < i.duration_ms ? window.requestAnimationFrame && requestAnimationFrame(n) || setTimeout(n, 16) : t()
            }()
        }
    }),
    n
});

;/**** game/Modules/Common/Command/Commands/CommandAsyncAll.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandAsyncAll", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(n) {
    "use strict";
    function o(n) {
        this.commands = n
    }
    return o.prototype = Object.create(n.prototype),
    $.extend(o.prototype, {
        describe: function() {
            return "do multiple commands asynchronously and resolve when all are done"
        },
        run: function(n, o) {
            var t = this.commands
              , e = !1
              , r = 0
              , a = function() {
                e || ++r !== t.length || n()
            }
              , m = function(n) {
                e || (e = !0,
                o(n))
            };
            try {
                t.forEach(function(n) {
                    n.run(a, m)
                })
            } catch (n) {
                throw e = !0,
                n
            }
        }
    }),
    o
});

;/**** game/Modules/Common/Command/Commands/CommandCallFunction.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandCallFunction", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(n) {
    "use strict";
    function t(n) {
        this.func = n
    }
    return t.prototype = Object.create(n.prototype),
    $.extend(t.prototype, {
        describe: function() {
            return "Call a function: " + this.func.toString()
        },
        run: function(n, t) {
            this.func(),
            n()
        }
    }),
    t
});

;/**** game/Modules/Common/Command/Commands/CommandDebugLogToConsole.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandDebugLogToConsole", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(o) {
    "use strict";
    function e(o) {
        this.message = o
    }
    return e.prototype = Object.create(o.prototype),
    $.extend(e.prototype, {
        describe: function() {
            return "Log a message to the console: " + this.message
        },
        run: function(o, e) {
            console.log(this.message),
            o()
        }
    }),
    e
});

;/**** game/Modules/Common/Command/Commands/CommandDebugNop.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandDebugNop", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(o) {
    "use strict";
    function e() {}
    return e.prototype = Object.create(o.prototype),
    $.extend(e.prototype, {
        describe: function() {
            return "no operation"
        }
    }),
    e
});

;/**** game/Modules/Common/Command/Commands/CommandDebugReject.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandDebugReject", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(e) {
    "use strict";
    function t(e) {
        this.error = e
    }
    return t.prototype = Object.create(e.prototype),
    $.extend(t.prototype, {
        describe: function() {
            return "immediately reject"
        },
        run: function(e, t) {
            t("Rejected because that's the only thing I can do.")
        }
    }),
    t
});

;/**** game/Modules/Common/Command/Commands/CommandDebugThrowError.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandDebugThrowError", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(r) {
    "use strict";
    function o(r) {
        this.error = r
    }
    return o.prototype = Object.create(r.prototype),
    $.extend(o.prototype, {
        describe: function() {
            return "Throw an error: " + JSON.stringify(this.error)
        },
        run: function(r, o) {
            throw this.error
        }
    }),
    o
});

;/**** game/Modules/Common/Command/Commands/CommandSequence.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandSequence", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand", "Ig/TribalWars/Modules/Common/Command/CommandThread"], function(n, o) {
    "use strict";
    function e(n) {
        this.commands = n
    }
    return e.prototype = Object.create(n.prototype),
    $.extend(e.prototype, {
        describe: function() {
            return "do multiple commands in sequence and resolve when all are done"
        },
        push: function(n) {
            this.commands.push(n)
        },
        run: function(n, e) {
            var r = this.commands
              , t = !1
              , a = 0;
            try {
                var m = new o;
                m.on(o.EVENT_COMMAND_RESOLVED, function(o) {
                    t || ++a !== r.length || n()
                }),
                m.on(o.EVENT_COMMAND_REJECTED, function(n) {
                    var o;
                    o = n.error,
                    t || (t = !0,
                    e(o))
                }),
                r.forEach(function(n) {
                    m.runWhenReady(n)
                })
            } catch (n) {
                throw t = !0,
                n
            }
        }
    }),
    e
});

;/**** game/Modules/Common/Command/Commands/CommandSoundPlaythrough.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandSoundPlaythrough", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(n) {
    "use strict";
    function e(n) {
        this.filename = n
    }
    return e.prototype = Object.create(n.prototype),
    $.extend(e.prototype, {
        describe: function() {
            return 'Play the "' + this.filename + '" sound and resolve when done'
        },
        run: function(n, e) {
            TribalWars.playSound(this.filename, 1500, n)
        }
    }),
    e
});

;/**** game/Modules/Common/Command/Commands/CommandSoundStart.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandSoundStart", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(e) {
    "use strict";
    function n(e) {
        this.filename = e
    }
    return n.prototype = Object.create(e.prototype),
    $.extend(n.prototype, {
        describe: function() {
            return 'Start playing the "' + this.filename + '" sound and immediately resolve'
        },
        run: function(e, n) {
            TribalWars.playSound(this.filename),
            e()
        }
    }),
    n
});

;/**** game/Modules/Common/Command/Commands/CommandWait.js ****/
define("Ig/TribalWars/Modules/Common/Command/Commands/CommandWait", ["Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(t) {
    "use strict";
    function o(t) {
        this.duration_ms = t
    }
    return o.prototype = Object.create(t.prototype),
    $.extend(o.prototype, {
        describe: function() {
            return "Wait for " + this.duration_ms + " milliseconds"
        },
        run: function(t, o) {
            setTimeout(t, this.duration_ms)
        }
    }),
    o
});

;/**** game/Modules/Common/Command/AbstractCommand.js ****/
define("Ig/TribalWars/Modules/Common/Command/AbstractCommand", function() {
    "use strict";
    function n() {}
    return n.prototype = {
        describe: function() {
            return "Proto command"
        },
        validate: function() {},
        run: function(n, o) {
            n()
        }
    },
    n
});

;/**** game/Modules/Common/Command/CommandLogger.js ****/
define("Ig/TribalWars/Modules/Common/Command/CommandLogger", ["Ig/TribalWars/Modules/Common/Command/CommandThread"], function(n) {
    "use strict";
    function e() {}
    return e.prototype = {
        watchThread: function(e) {
            var o = this;
            e.on(n.EVENT_COMMAND_STARTED, function(n) {
                o.logCommandStarted(n.command)
            }),
            e.on(n.EVENT_COMMAND_RESOLVED, function(n) {
                o.logCommandResolved(n.command)
            }),
            e.on(n.EVENT_COMMAND_REJECTED, function(n) {
                o.logCommandRejected(n.command, n.error)
            })
        },
        logCommandStarted: function(n) {
            console.info("[" + this._currentTimeString() + "] start: " + n.describe())
        },
        logCommandResolved: function(n) {
            console.info("[" + this._currentTimeString() + "] resolved: " + n.describe())
        },
        logCommandRejected: function(n, e) {
            console.error("[" + this._currentTimeString() + "] failed: " + n.describe() + "\n\trejected because: " + JSON.stringify(e))
        },
        _currentTimeString: function() {
            var n = (new Date).getTime() / 1e3;
            return Format.date(n, !0, !0, !0, !1)
        }
    },
    e
});

;/**** game/Modules/Common/Command/CommandThread.js ****/
define("Ig/TribalWars/Modules/Common/Command/CommandThread", ["module", "Ig/TribalWars/Modules/Common/Event/FiresEventsTrait", "Ig/TribalWars/Modules/Common/Command/AbstractCommand"], function(n, e, t) {
    "use strict";
    function i() {
        (new e).mixinTo(this),
        this._queue = []
    }
    return i.EVENT_COMMAND_STARTED = n.id + "/COMMAND_STARTED",
    i.EVENT_COMMAND_RESOLVED = n.id + "/COMMAND_RESOLVED",
    i.EVENT_COMMAND_REJECTED = n.id + "/COMMAND_REJECTED",
    i.prototype = {
        _running: !1,
        runWhenReady: function(n) {
            if (n instanceof t)
                this._queue.push(n);
            else {
                if (!Array.isArray(n))
                    throw "invalid command";
                this._runSequenceWhenReady(n)
            }
            return this._running || this._scheduleNextRun(),
            this
        },
        _runSequenceWhenReady: function(n) {
            var e = this;
            n.forEach(function(n) {
                e.runWhenReady(n)
            })
        },
        _scheduleNextRun: function() {
            this._running = !0,
            setTimeout(this._runNextCommand.bind(this), 0)
        },
        _runNextCommand: function() {
            var n = this._queue.shift();
            this._runCommand(n)
        },
        _runCommand: function(n) {
            var e = this;
            e._running = !0,
            e._handleCommandStarted(n);
            var t = !1
              , i = function(i) {
                t || (e._handleCommandRejected(n, i),
                e._endCommand(),
                t = !0)
            };
            try {
                n.validate(),
                n.run(function() {
                    t || (e._handleCommandResolved(n),
                    e._endCommand(),
                    t = !0)
                }, i)
            } catch (n) {
                console.error("rejected command because error was thrown:", n),
                i(n)
            }
        },
        _endCommand: function() {
            this._running = !1,
            this._queue.length > 0 && this._scheduleNextRun()
        },
        _handleCommandStarted: function(n) {
            this.trigger(i.EVENT_COMMAND_STARTED, {
                command: n
            })
        },
        _handleCommandResolved: function(n) {
            this.trigger(i.EVENT_COMMAND_RESOLVED, {
                command: n
            })
        },
        _handleCommandRejected: function(n, e) {
            this.trigger(i.EVENT_COMMAND_RESOLVED, {
                command: n,
                error: e
            })
        }
    },
    i
});

;/**** game/Modules/Common/Event/Messages/MessageServerPublishedMessage.js ****/
define("Ig/TribalWars/Modules/Common/Event/Messages/MessageServerPublishedMessage", ["module"], function(e) {
    "use strict";
    function s(e) {
        this.type = s.TYPE,
        this.server_message_dto = e
    }
    return s.TYPE = e.id + "_SERVER_PUBLISHED_MESSAGE",
    s
});

;/**** game/Modules/Common/Event/EventDispatcher.js ****/
define("Ig/TribalWars/Modules/Common/Event/EventDispatcher", ["Ig/TribalWars/Modules/Common/Event/HandlerHandle", "Ig/TribalWars/Modules/Common/Event/SubscriberHandle"], function(e, n) {
    "use strict";
    function s() {
        this._handlers_by_name = {},
        this._subscribers = {},
        this._next_key = 1
    }
    return s.prototype = {
        dispatch: function(e, n) {
            this._callHandlers(e, n),
            this._notifySubscribers(e, n)
        },
        registerHandler: function(n, s) {
            void 0 === this._handlers_by_name[n] && (this._handlers_by_name[n] = {});
            var r = this._nextKey();
            return this._handlers_by_name[n][r] = s,
            new e(this,n,r)
        },
        removeHandler: function(e) {
            delete this._handlers_by_name[e.event_name][e.key]
        },
        removeHandlers: function(e) {
            this._handlers_by_name[e] = {}
        },
        removeAllHandlers: function() {
            for (var e = Object.keys(this._handlers_by_name), n = 0; n < e.length; n++)
                this._handlers_by_name[e[n]] = {}
        },
        _callHandlers: function(e, n) {
            void 0 !== this._handlers_by_name[e] && $.each(this._handlers_by_name[e], function(e, s) {
                s(n)
            })
        },
        registerSubscriber: function(e) {
            var s = this._nextKey();
            return this._subscribers[s] = e,
            new n(this,s)
        },
        removeSubscriber: function(e) {
            delete this._subscribers[e.key]
        },
        removeAllSubscribers: function() {
            this._subscribers = {}
        },
        _notifySubscribers: function(e, n) {
            $.each(this._subscribers, function(s, r) {
                r.notify(e, n)
            })
        },
        _nextKey: function() {
            return this._next_key++
        },
        destruct: function() {
            this.removeAllHandlers(),
            this.removeAllSubscribers()
        }
    },
    s
});

;/**** game/Modules/Common/Event/FiresEventsTrait.js ****/
define("Ig/TribalWars/Modules/Common/Event/FiresEventsTrait", ["module", "Ig/TribalWars/Modules/Common/Trait/Trait", "Ig/TribalWars/Modules/Common/Event/EventDispatcher"], function(t, e, n) {
    "use strict";
    function i() {
        e.apply(this);
        var t = new n
          , i = [];
        this.addMixinMethod("on", function(e, n) {
            return t.registerHandler(e, n)
        });
        this.addMixinMethod("trigger", function(e, n) {
            t.dispatch(e, n)
        });
        this.addMixinMethod("bubbles", function(e, n) {
            n.forEach(function(n) {
                var o = e.on(n, function(e) {
                    t.dispatch(n, e)
                });
                i.push(o)
            })
        });
        this.setDestructor(function() {
            i.forEach(function(t) {
                t.destruct()
            }),
            t.destruct(),
            i = []
        })
    }
    return i.prototype = Object.create(e.prototype),
    $.extend(i.prototype, {
        name: t.id
    }),
    i
});

;/**** game/Modules/Common/Event/HandlerHandle.js ****/
define("Ig/TribalWars/Modules/Common/Event/HandlerHandle", function() {
    "use strict";
    function e(e, t, n) {
        this.dispatcher = e,
        this.event_name = t,
        this.key = n
    }
    return e.prototype = {
        destruct: function() {
            this.dispatcher.removeHandler(this)
        }
    },
    e
});

;/**** game/Modules/Common/Event/MessageFactory.js ****/
define("Ig/TribalWars/Modules/Common/Event/MessageFactory", function() {
    "use strict";
    function e() {
        this._factories = {}
    }
    return e.prototype = {
        registerMessageFactory: function(t) {
            if (!(t instanceof e))
                throw "registerMessageFactory expects message_factory to be an instance of MessageFactory";
            var r = this;
            return t.getSupportedServerMessageTypes().forEach(function(e) {
                r._factories[e] = t
            }),
            this
        },
        registerMessageFactoryFunction: function(e, t) {
            if ("function" != typeof t)
                throw "registerMessageFactoryFunction expects message_factory_function to be a function";
            return this._factories[e] = t,
            this
        },
        getSupportedServerMessageTypes: function() {
            return Object.keys(this._factories)
        },
        supportsServerMessageType: function(e) {
            return void 0 !== this._factories[e]
        },
        createFromServerMessage: function(t) {
            var r = this._factories[t.type];
            if ("function" == typeof r)
                return r(t);
            if (r instanceof e)
                return r.createFromServerMessage(t);
            throw s("unsupported server message type: %1", t.type)
        }
    },
    e
});

;/**** game/Modules/Common/Event/ServerMessageConverter.js ****/
define("Ig/TribalWars/Modules/Common/Event/ServerMessageConverter", ["Ig/TribalWars/Modules/Common/Event/MessageFactory", "Ig/TribalWars/Modules/Common/Event/Messages/MessageServerPublishedMessage"], function(e, s) {
    "use strict";
    function t(s) {
        this._message_factory = new e,
        this._event_dispatcher = s,
        this._event_dispatcher.registerSubscriber(this)
    }
    return t.prototype = {
        registerMessageFactory: function(e) {
            this._message_factory.registerMessageFactory(e)
        },
        notify: function(e, t) {
            t instanceof s && this._message_factory.supportsServerMessageType(t.server_message_dto.type) && this.publishClientCounterpart(t.server_message_dto)
        },
        publishClientCounterpart: function(e) {
            var s = this._message_factory.createFromServerMessage(e);
            this._event_dispatcher.dispatch(s.type, s)
        }
    },
    t
});

;/**** game/Modules/Common/Event/SubscriberHandle.js ****/
define("Ig/TribalWars/Modules/Common/Event/SubscriberHandle", function() {
    "use strict";
    function t(t, e) {
        this.dispatcher = t,
        this.key = e
    }
    return t.prototype = {
        destruct: function() {
            this.dispatcher.removeSubscriber(this)
        }
    },
    t
});

;/**** game/Modules/Common/Trait/Trait.js ****/
define("Ig/TribalWars/Modules/Common/Trait/Trait", ["module", "Ig/TribalWars/Modules/Common/Trait/TraitCollection"], function(t, i) {
    "use strict";
    function n() {
        this._mixin_methods = [],
        this._destructor = null
    }
    return n.prototype = {
        name: t.name,
        mixinTo: function(t) {
            void 0 === t._traits && (t._traits = new i),
            t._traits.addTrait(this);
            for (var n = 0; n < this._mixin_methods.length; n++)
                this._mixinMethod(t, this._mixin_methods[n])
        },
        addMixinMethod: function(t, i) {
            this._mixin_methods.push({
                name: t,
                definition: i
            })
        },
        _mixinMethod: function(t, i) {
            t[i.name] = i.definition
        },
        setDestructor: function(t) {
            this._destructor = t
        },
        destruct: function() {
            "function" == typeof this._destructor && this._destructor()
        }
    },
    n
});

;/**** game/Modules/Common/Trait/TraitCollection.js ****/
define("Ig/TribalWars/Modules/Common/Trait/TraitCollection", function() {
    "use strict";
    function t() {
        this._traits = []
    }
    return t.prototype = {
        addTrait: function(t) {
            this._traits.push(t)
        },
        destruct: function() {
            this._traits.forEach(function(t) {
                t.destruct()
            })
        }
    },
    t
});

;/**** game/Modules/Common/Widget/CodeGeneration/CodeTemplateController.js ****/
define("__NAMESPACE__/__NAMEPREFIX__Controller", ["Ig/TribalWars/Modules/Common/Widget/AbstractController"], function(t) {
    "use strict";
    function e() {
        t.apply(this)
    }
    return e.prototype = Object.create(t.prototype),
    $.extend(e.prototype, {
        _watchModels: function() {},
        _watchView: function() {},
        _watchSubWidgets: function() {},
        _eventNamesToAlwaysBubble: function() {
            return []
        }
    }),
    e
});

;/**** game/Modules/Common/Widget/CodeGeneration/CodeTemplateStateReducer.js ****/
define("__NAMESPACE__/__NAMEPREFIX__StateReducer", ["Ig/TribalWars/Modules/Common/Widget/AbstractStateReducer"], function(t) {
    "use strict";
    function e() {
        t.apply(this)
    }
    return e.prototype = Object.create(t.prototype),
    $.extend(e.prototype, {
        newStateFromNothing: function() {
            throw "not implemented"
        },
        newStateFromModels: function(t, e, o) {
            throw "not implemented"
        },
        _action_reducers: {}
    }),
    e
});

;/**** game/Modules/Common/Widget/CodeGeneration/CodeTemplateView.js ****/
define("__NAMESPACE__/__NAMEPREFIX__View", ["Ig/TribalWars/Modules/Common/Widget/AbstractView"], function(t) {
    "use strict";
    function e() {
        t.apply(this)
    }
    return e.prototype = Object.create(t.prototype),
    $.extend(e.prototype, {
        _initStructure: function(t) {
            throw "not implemented"
        },
        _initEventPublishing: function() {},
        _render: function(t, e) {
            throw "not implemented"
        }
    }),
    e
});

;/**** game/Modules/Common/Widget/CodeGeneration/CodeTemplateWidget.js ****/
define("__NAMESPACE__/__NAMEPREFIX__Widget", ["Ig/TribalWars/Modules/Common/Widget/AbstractWidget", "__NAMESPACE__/__NAMEPREFIX__View", "__NAMESPACE__/__NAMEPREFIX__Controller", "__NAMESPACE__/__NAMEPREFIX__StateReducer"], function(_, e, t, i) {
    "use strict";
    function r() {
        _.apply(this),
        this._models = {},
        this._services = {},
        this._view = new e,
        this._controller = new t,
        this._state_reducer = new i
    }
    return r.prototype = Object.create(_.prototype),
    $.extend(r.prototype, {
        _getObsoleteSubWidgetKeys: function(_, e) {
            return []
        },
        _initSubWidgets: function(_, e, t) {}
    }),
    r
});

;/**** game/Modules/Common/Widget/AbstractController.js ****/
define("Ig/TribalWars/Modules/Common/Widget/AbstractController", function() {
    "use strict";
    function t() {
        this._handler_handles = [],
        this._sub_widget_handlers = []
    }
    return t.prototype = {
        _models: null,
        _services: null,
        _view: null,
        _widget: null,
        init: function(t, e, n, i) {
            this._models = t,
            this._services = e,
            this._view = n,
            this._widget = i,
            this._watchModels(),
            this._watchView(),
            this._initViewBubbling(),
            this._watchSubWidgets()
        },
        _watchModels: function() {},
        _watchModelForEvent: function(t, e, n) {
            var i = t.on(e, n);
            this._grabHandlerHandle(i)
        },
        _watchView: function() {},
        _watchViewForEvent: function(t, e) {
            var n = this._view.on(t, e);
            this._grabHandlerHandle(n)
        },
        _watchSubWidgets: function() {},
        _watchSubWidgetsForEvent: function(t, e) {
            this._sub_widget_handlers.push({
                event_name: t,
                handler: e
            })
        },
        watchSubWidgetForEvents: function(t) {
            for (var e = 0; e < this._sub_widget_handlers.length; e++) {
                var n = this._sub_widget_handlers[e];
                this._watchSubWidgetForEvent(t, n.event_name, n.handler)
            }
        },
        _watchSubWidgetForEvent: function(t, e, n) {
            var i = t.on(e, n);
            this._grabHandlerHandle(i)
        },
        _eventNamesToAlwaysBubble: function() {
            return []
        },
        _initViewBubbling: function() {
            this._widget.bubbles(this._view, this._eventNamesToAlwaysBubble())
        },
        initSubWidgetBubbling: function(t) {
            this._widget.bubbles(t, this._eventNamesToAlwaysBubble())
        },
        _grabHandlerHandle: function(t) {
            this._handler_handles.push(t)
        },
        destruct: function() {
            delete this._widget,
            this._handler_handles.forEach(function(t) {
                t.destruct()
            })
        }
    },
    t
});

;/**** game/Modules/Common/Widget/AbstractStateReducer.js ****/
define("Ig/TribalWars/Modules/Common/Widget/AbstractStateReducer", ["module"], function(t) {
    "use strict";
    function e() {}
    return e.prototype = {
        newStateFromNothing: function() {
            throw "not implemented"
        },
        newStateFromModels: function(t, e, n) {
            throw "not implemented"
        },
        newStateFromAction: function(t, e, n, o) {
            return "function" == typeof this._action_reducers[e] ? this._action_reducers[e](t, n, o) : t
        },
        _action_reducers: {}
    },
    e
});

;/**** game/Modules/Common/Widget/AbstractView.js ****/
define("Ig/TribalWars/Modules/Common/Widget/AbstractView", ["Ig/TribalWars/Modules/Common/Event/FiresEventsTrait"], function(t) {
    "use strict";
    function e() {
        (new t).mixinTo(this)
    }
    return e.prototype = {
        state: null,
        _$root: null,
        _$replaced_target: null,
        init: function(t, e, i) {
            if (this._initStructure(i),
            null === this._$root)
                throw "Expected _initStructure to _setRootElement, but it didn't";
            if (this._initEventPublishing(),
            !t)
                throw "Target for widget is empty";
            (e = e || !1) ? this._$replaced_target = t.replaceWith(this._$root) : this._$root.appendTo(t),
            this._render(null, i),
            this.state = i
        },
        _initStructure: function(t) {
            throw "not implemented"
        },
        _setRootElement: function(t) {
            this._$root = t
        },
        _initEventPublishing: function() {},
        update: function(t) {
            this._render(this.state, t),
            this.state = t
        },
        _render: function(t, e) {
            throw "not implemented"
        },
        destruct: function() {
            this._traits.destruct(),
            null !== this._$replaced_target ? this._$root.replaceWith(this._$replaced_target) : this._$root.html("")
        }
    },
    e
});

;/**** game/Modules/Common/Widget/AbstractWidget.js ****/
define("Ig/TribalWars/Modules/Common/Widget/AbstractWidget", ["Ig/TribalWars/Modules/Common/Event/FiresEventsTrait"], function(t) {
    "use strict";
    function e() {
        (new t).mixinTo(this),
        this._sub_widgets = {}
    }
    return e.propertiesExpectedToBeSetByConstructor = ["_models", "_services", "_view", "_controller", "_state_reducer"],
    e.prototype = {
        _models: null,
        _services: null,
        _view: null,
        _controller: null,
        _state_reducer: null,
        _state: null,
        _sub_widgets: null,
        init: function(t, e, i) {
            i = i || Timing.getCurrentServerTime(),
            this._validateConstruction();
            var s = this._createInitialState(i);
            this._view.init(t, e, s),
            this._controller.init(this._models, this._services, this._view, this),
            this._initSubWidgets(null, s, i),
            this._state = s
        },
        _validateConstruction: function() {
            for (var t = e.propertiesExpectedToBeSetByConstructor, i = 0; i < t.length; i++) {
                var n = t[i];
                if (null === this[n])
                    throw s("this.%1 should be set by the class's constructor!", n)
            }
        },
        _createInitialState: function(t) {
            return this._state_reducer.newStateFromModels(this._state_reducer.newStateFromNothing(), this._models, t)
        },
        update: function(t, e) {
            var i = this.getNextState(t);
            e || this._removeObsoleteSubWidgets(this._state, i),
            this._view.update(i),
            e || (this._initSubWidgets(this._state, i, t),
            this._updateSubWidgets(t)),
            this._state = i
        },
        getNextState: function(t) {
            return this._state_reducer.newStateFromModels(this._state, this._models, t)
        },
        applyActionToState: function(t, e, i) {
            this._state = this._state_reducer.newStateFromAction(this._state, t, e, i)
        },
        _removeObsoleteSubWidgets: function(t, e) {
            var i = this;
            this._getObsoleteSubWidgetKeys(t, e).forEach(function(t) {
                i._removeSubWidget(t)
            })
        },
        _getObsoleteSubWidgetKeys: function(t, e) {
            return []
        },
        _removeSubWidget: function(t) {
            void 0 !== this._sub_widgets[t] && (this._sub_widgets[t].destruct(),
            delete this._sub_widgets[t])
        },
        _initSubWidgets: function(t, e, i) {},
        _addSubWidget: function(t, e, i, n, r) {
            if (void 0 !== this._sub_widgets[t])
                throw s('there is already a subwidget with the key "%1"', t);
            e.init(i, n, r),
            this._controller.watchSubWidgetForEvents(e),
            this._controller.initSubWidgetBubbling(e),
            this._sub_widgets[t] = e
        },
        _updateSubWidgets: function(t) {
            $.each(this._sub_widgets, function(e, i) {
                null !== i && i.update(t)
            })
        },
        destruct: function() {
            var t = this;
            this._controller.destruct(),
            this._traits.destruct(),
            $.each(this._sub_widgets, function(e, i) {
                t._removeSubWidget(e)
            }),
            this._view.destruct()
        }
    },
    e
});

;/**** game/Modules/Common/Widget/NullController.js ****/
define("Ig/TribalWars/Modules/Common/Widget/NullController", ["Ig/TribalWars/Modules/Common/Widget/AbstractController"], function(t) {
    "use strict";
    function e() {
        t.apply(this)
    }
    return e.prototype = Object.create(t.prototype),
    $.extend(e.prototype, {
        _watchModels: function() {},
        _watchView: function() {},
        _watchSubWidgets: function() {},
        _eventNamesToAlwaysBubble: function() {
            return []
        }
    }),
    e
});

;/**** game/Modules/UI/AlternatingRows.js ****/
define("Ig/TribalWars/Modules/UI/AlternatingRows", function() {
    "use strict";
    return function() {
        var n = -1;
        this.nextClassName = function() {
            return ++n % 2 ? "row_a" : "row_b"
        }
        ,
        this.reset = function() {
            n = -1
        }
    }
});

;/**** game/Modules/UI/AnimationUtil.js ****/
define("Ig/TribalWars/Modules/UI/AnimationUtil", function() {
    "use strict";
    return {
        animationend_event_name: {
            WebkitAnimation: "webkitAnimationEnd",
            animation: "animationend"
        }[Modernizr.prefixed("animation")],
        animate: function(n, i, e, t) {
            t = t || i,
            this.doOnceAnimationEnded(n, t, function() {
                n.removeClass("animation-" + i),
                "function" == typeof e && e()
            }),
            n.addClass("animation-" + i)
        },
        doOnceAnimationEnded: function(n, i, e) {
            var t = this
              , a = function(o) {
                o.originalEvent.animationName === i && (n.off(t.animationend_event_name, a),
                e())
            };
            n.on(this.animationend_event_name, a)
        },
        playSprite: function(n, i, e) {
            var t = Timing.getElapsedTimeSinceLoad();
            n.css({
                "background-image": "url(" + i.src + ")",
                width: e.display_width,
                height: e.display_height,
                "background-size": e.display_width * i.steps + "px " + e.display_height + "px"
            });
            var a = e.duration_ms / i.steps;
            !function o() {
                var d = Timing.getElapsedTimeSinceLoad() - t
                  , s = Math.min(Math.floor(d / a), i.steps - 1);
                n.css("background-position", e.display_width * -s),
                d < e.duration_ms ? window.requestAnimationFrame && requestAnimationFrame(o) || setTimeout(o, 16) : "function" == typeof e.whenDone && e.whenDone()
            }()
        }
    }
});

;/**** game/Modules/UI/FeatureLinkReplacer.js ****/
define("Ig/TribalWars/Modules/UI/FeatureLinkReplacer", function() {
    return function(e, a, t) {
        "use strict";
        $(e).filter("[data-feature]").each(function() {
            var e = $(this)
              , r = e.clone();
            r.removeClass("evt-check-pp");
            var c = r.attr("href").replace(/([&?])action=/, "$1ajaxaction=");
            r.on("click", function(e) {
                e.preventDefault();
                var n = r.data("feature")
                  , i = r.data("cost");
                Premium.check(n, i, function() {
                    TribalWars.get(c, {}, a, t)
                })
            }),
            e.after(r),
            e.remove()
        })
    }
});

;/**** game/Modules/UI/FormSubmit.js ****/
!function() {
    "use strict";
    var t = "Ig/TribalWars/Modules/UI/FormSubmit";
    define(t, [], function() {
        var i = function() {
            $("body").on("keyup", ".easy-submit", function(t) {
                if (t.ctrlKey && 13 === t.keyCode) {
                    var i = $(this).data("submit-button");
                    i ? $(this).parents("form").find("input[name=" + i + "]").click() : $(this).parents("form").first().submit()
                }
            })
        };
        return i.prototype = {
            class_name: t
        },
        i
    })
}();

;/**** game/Modules/UI/PositionUtil.js ****/
define("Ig/TribalWars/Modules/UI/PositionUtil", function() {
    "use strict";
    return {
        calcCenterPoint: function(t) {
            return {
                x: this.calcCenterX(t),
                y: this.calcCenterY(t)
            }
        },
        calcCenterX: function(t) {
            var n = t[0].getBoundingClientRect()
              , e = (n.right - n.left) / 2;
            return Math.floor(window.pageXOffset + n.left + e)
        },
        calcCenterY: function(t) {
            var n = t[0].getBoundingClientRect()
              , e = (n.bottom - n.top) / 2;
            return Math.floor(window.pageYOffset + n.top + e)
        },
        calcTopY: function(t) {
            var n = t[0].getBoundingClientRect();
            return window.scrollY + n.top
        }
    }
});

;/**** game/Modules/UI/WebPushWorld.js ****/
define("Ig/TribalWars/Modules/UI/WebPushWorld", function() {
    "use strict";
    function t() {
        this.addEventHandlers();
        var t = this;
        window.addEventListener("message", function(e) {
            "push_changed" === e.data && ("settings" !== window.game_data.screen ? TribalWars.redirect("settings", {
                mode: "push"
            }) : partialReload(!1, function() {
                t.addEventHandlers()
            }))
        })
    }
    return t.prototype = {
        addEventHandlers: function() {
            var t = this;
            $(".evt-open-webpush").on("click", function() {
                return t.openMaster(),
                !1
            })
        },
        suppressPrompts: function() {
            TribalWars.setSetting("pn_suppress_prompt", 1)
        },
        showPrompt: function() {
            if (!(parseInt(window.game_data.player.sitter) > 0 || "desktop" !== window.game_data.device || TribalWars.getSetting("pn_suppress_prompt") || !("serviceWorker"in navigator) || !1 in Window)) {
                var t = this;
                TribalWars.get("settings", {
                    ajax: "push_notification_prompt"
                }, function(e) {
                    Dialog.show("push_notification_prompt", e.dialog, t.suppressPrompts()),
                    t.addEventHandlers()
                })
            }
        },
        openMaster: function() {
            return TribalWars.get("settings", {
                ajax: "webpush_url"
            }, function(t) {
                window.open(t.url, "_blank", "width=700,height=500,left=200,top=100")
            }),
            !1
        }
    },
    t
});

;/**** initialize constants ****/
TribalWars.constants = {
    "item_types": {
        "1": "Feature",
        "2": "Verbrauchbar",
        "3": "Passiv"
    },
    "item_categories": {
        "5": "Dorfgegenstand",
        "3": "Event-Gegenstand",
        "4": "Gegenstand f\u00fcr Einheiten",
        "1": "Premium",
        "6": "Rekrutierungsgegenstand",
        "2": "Rohstoffpaket"
    },
    "item_tags": {
        "rarity": ["Keine", "H\u00e4ufig", "Selten", "Rar", "Legend\u00e4r"],
        "use_type": ["Keine", "Verbrauchbar", "Verschenkbar"]
    }
};
