/*! framp.me 05-09-2013 02:09:19 */
function getGlobal() {
    return function() {
        return this.dust;
    }.call(null);
}

var dust = {};

(function(dust) {
    function Context(a, b, c) {
        this.stack = a, this.global = b, this.blocks = c;
    }
    function Stack(a, b, c, d) {
        this.tail = b, this.isObject = !dust.isArray(a) && a && "object" == typeof a, this.head = a, 
        this.index = c, this.of = d;
    }
    function Stub(a) {
        this.head = new Chunk(this), this.callback = a, this.out = "";
    }
    function Stream() {
        this.head = new Chunk(this);
    }
    function Chunk(a, b, c) {
        this.root = a, this.next = b, this.data = [], this.flushable = !1, this.taps = c;
    }
    function Tap(a, b) {
        this.head = a, this.tail = b;
    }
    dust.helpers = {}, dust.cache = {}, dust.register = function(a, b) {
        a && (dust.cache[a] = b);
    }, dust.render = function(a, b, c) {
        var d = new Stub(c).head;
        dust.load(a, d, Context.wrap(b, a)).end();
    }, dust.stream = function(a, b) {
        var c = new Stream();
        return dust.nextTick(function() {
            dust.load(a, c.head, Context.wrap(b, a)).end();
        }), c;
    }, dust.renderSource = function(a, b, c) {
        return dust.compileFn(a)(b, c);
    }, dust.compileFn = function(a, b) {
        var c = dust.loadSource(dust.compile(a, b));
        return function(a, d) {
            var e = d ? new Stub(d) : new Stream();
            return dust.nextTick(function() {
                c(e.head, Context.wrap(a, b)).end();
            }), e;
        };
    }, dust.load = function(a, b, c) {
        var d = dust.cache[a];
        return d ? d(b, c) : dust.onLoad ? b.map(function(b) {
            dust.onLoad(a, function(d, e) {
                return d ? b.setError(d) : (dust.cache[a] || dust.loadSource(dust.compile(e, a)), 
                dust.cache[a](b, c).end(), void 0);
            });
        }) : b.setError(new Error("Template Not Found: " + a));
    }, dust.loadSource = function(source, path) {
        return eval(source);
    }, dust.isArray = Array.isArray ? Array.isArray : function(a) {
        return "[object Array]" == Object.prototype.toString.call(a);
    }, dust.nextTick = function() {
        return "undefined" != typeof process ? process.nextTick : function(a) {
            setTimeout(a, 0);
        };
    }(), dust.isEmpty = function(a) {
        return dust.isArray(a) && !a.length ? !0 : 0 === a ? !1 : !a;
    }, dust.filter = function(a, b, c) {
        if (c) for (var d = 0, e = c.length; e > d; d++) {
            var f = c[d];
            "s" === f ? b = null : "function" == typeof dust.filters[f] && (a = dust.filters[f](a));
        }
        return b && (a = dust.filters[b](a)), a;
    }, dust.filters = {
        h: function(a) {
            return dust.escapeHtml(a);
        },
        j: function(a) {
            return dust.escapeJs(a);
        },
        u: encodeURI,
        uc: encodeURIComponent,
        js: function(a) {
            return JSON ? JSON.stringify(a) : a;
        },
        jp: function(a) {
            return JSON ? JSON.parse(a) : a;
        }
    }, dust.makeBase = function(a) {
        return new Context(new Stack(), a);
    }, Context.wrap = function(a, b) {
        if (a instanceof Context) return a;
        var c = {};
        return c.__templates__ = [], c.__templates__.push(b), new Context(new Stack(a), c);
    }, Context.prototype.get = function(a) {
        for (var b, c = this.stack; c; ) {
            if (c.isObject && (b = c.head[a], void 0 !== b)) return b;
            c = c.tail;
        }
        return this.global ? this.global[a] : void 0;
    }, Context.prototype.getPath = function(a, b) {
        var c, d = this.stack, e = b.length, f = a ? void 0 : this.stack.tail;
        if (a && 0 === e) return d.head;
        d = d.head;
        for (var g = 0; d && e > g; ) for (c = d, d = d[b[g]], g++; !d && !a; ) {
            if (g > 1) return d;
            f ? (d = f.head, f = f.tail, g = 0) : a || (d = this.global, a = !0, g = 0);
        }
        return "function" == typeof d ? function() {
            return d.apply(c, arguments);
        } : d;
    }, Context.prototype.push = function(a, b, c) {
        return new Context(new Stack(a, this.stack, b, c), this.global, this.blocks);
    }, Context.prototype.rebase = function(a) {
        return new Context(new Stack(a), this.global, this.blocks);
    }, Context.prototype.current = function() {
        return this.stack.head;
    }, Context.prototype.getBlock = function(a, b, c) {
        "function" == typeof a && (a = a(b, c).data.join(""), b.data = []);
        var d = this.blocks;
        if (d) for (var e, f = d.length; f--; ) if (e = d[f][a]) return e;
    }, Context.prototype.shiftBlocks = function(a) {
        var b, c = this.blocks;
        return a ? (b = c ? c.concat([ a ]) : [ a ], new Context(this.stack, this.global, b)) : this;
    }, Stub.prototype.flush = function() {
        for (var a = this.head; a; ) {
            if (!a.flushable) return a.error ? (this.callback(a.error), this.flush = function() {}, 
            void 0) : void 0;
            this.out += a.data.join(""), a = a.next, this.head = a;
        }
        this.callback(null, this.out);
    }, Stream.prototype.flush = function() {
        for (var a = this.head; a; ) {
            if (!a.flushable) return a.error ? (this.emit("error", a.error), this.flush = function() {}, 
            void 0) : void 0;
            this.emit("data", a.data.join("")), a = a.next, this.head = a;
        }
        this.emit("end");
    }, Stream.prototype.emit = function(a, b) {
        if (!this.events) return !1;
        var c = this.events[a];
        if (!c) return !1;
        if ("function" == typeof c) c(b); else for (var d = c.slice(0), e = 0, f = d.length; f > e; e++) d[e](b);
    }, Stream.prototype.on = function(a, b) {
        return this.events || (this.events = {}), this.events[a] ? "function" == typeof this.events[a] ? this.events[a] = [ this.events[a], b ] : this.events[a].push(b) : this.events[a] = b, 
        this;
    }, Stream.prototype.pipe = function(a) {
        return this.on("data", function(b) {
            a.write(b, "utf8");
        }).on("end", function() {
            a.end();
        }).on("error", function(b) {
            a.error(b);
        }), this;
    }, Chunk.prototype.write = function(a) {
        var b = this.taps;
        return b && (a = b.go(a)), this.data.push(a), this;
    }, Chunk.prototype.end = function(a) {
        return a && this.write(a), this.flushable = !0, this.root.flush(), this;
    }, Chunk.prototype.map = function(a) {
        var b = new Chunk(this.root, this.next, this.taps), c = new Chunk(this.root, b, this.taps);
        return this.next = c, this.flushable = !0, a(c), b;
    }, Chunk.prototype.tap = function(a) {
        var b = this.taps;
        return this.taps = b ? b.push(a) : new Tap(a), this;
    }, Chunk.prototype.untap = function() {
        return this.taps = this.taps.tail, this;
    }, Chunk.prototype.render = function(a, b) {
        return a(this, b);
    }, Chunk.prototype.reference = function(a, b, c, d) {
        return "function" == typeof a && (a.isFunction = !0, a = a.apply(b.current(), [ this, b, null, {
            auto: c,
            filters: d
        } ]), a instanceof Chunk) ? a : dust.isEmpty(a) ? this : this.write(dust.filter(a, c, d));
    }, Chunk.prototype.section = function(a, b, c, d) {
        if ("function" == typeof a && (a = a.apply(b.current(), [ this, b, c, d ]), a instanceof Chunk)) return a;
        var e = c.block, f = c["else"];
        if (d && (b = b.push(d)), dust.isArray(a)) {
            if (e) {
                var g = a.length, h = this;
                if (g > 0) {
                    b.stack.head && (b.stack.head.$len = g);
                    for (var i = 0; g > i; i++) b.stack.head && (b.stack.head.$idx = i), h = e(h, b.push(a[i], i, g));
                    return b.stack.head && (b.stack.head.$idx = void 0, b.stack.head.$len = void 0), 
                    h;
                }
                if (f) return f(this, b);
            }
        } else if (a === !0) {
            if (e) return e(this, b);
        } else if (a || 0 === a) {
            if (e) return e(this, b.push(a));
        } else if (f) return f(this, b);
        return this;
    }, Chunk.prototype.exists = function(a, b, c) {
        var d = c.block, e = c["else"];
        if (dust.isEmpty(a)) {
            if (e) return e(this, b);
        } else if (d) return d(this, b);
        return this;
    }, Chunk.prototype.notexists = function(a, b, c) {
        var d = c.block, e = c["else"];
        if (dust.isEmpty(a)) {
            if (d) return d(this, b);
        } else if (e) return e(this, b);
        return this;
    }, Chunk.prototype.block = function(a, b, c) {
        var d = c.block;
        return a && (d = a), d ? d(this, b) : this;
    }, Chunk.prototype.partial = function(a, b, c) {
        var d;
        b.global && b.global.__templates__ && b.global.__templates__.push(a), c ? (d = dust.makeBase(b.global), 
        d.blocks = b.blocks, b.stack && b.stack.tail && (d.stack = b.stack.tail), d = d.push(c), 
        d = d.push(b.stack.head)) : d = b;
        var e;
        return e = "function" == typeof a ? this.capture(a, d, function(a, b) {
            dust.load(a, b, d).end();
        }) : dust.load(a, this, d), b.global && b.global.__templates__ && b.global.__templates__.pop(), 
        e;
    }, Chunk.prototype.helper = function(a, b, c, d) {
        return dust.helpers[a] ? dust.helpers[a](this, b, c, d) : this;
    }, Chunk.prototype.capture = function(a, b, c) {
        return this.map(function(d) {
            var e = new Stub(function(a, b) {
                a ? d.setError(a) : c(b, d);
            });
            a(e.head, b).end();
        });
    }, Chunk.prototype.setError = function(a) {
        return this.error = a, this.root.flush(), this;
    }, Tap.prototype.push = function(a) {
        return new Tap(a, this);
    }, Tap.prototype.go = function(a) {
        for (var b = this; b; ) a = b.head(a), b = b.tail;
        return a;
    };
    var HCHARS = new RegExp(/[&<>\"\']/), AMP = /&/g, LT = /</g, GT = />/g, QUOT = /\"/g, SQUOT = /\'/g;
    dust.escapeHtml = function(a) {
        return "string" == typeof a ? HCHARS.test(a) ? a.replace(AMP, "&amp;").replace(LT, "&lt;").replace(GT, "&gt;").replace(QUOT, "&quot;").replace(SQUOT, "&#39;") : a : a;
    };
    var BS = /\\/g, FS = /\//g, CR = /\r/g, LS = /\u2028/g, PS = /\u2029/g, NL = /\n/g, LF = /\f/g, SQ = /'/g, DQ = /"/g, TB = /\t/g;
    dust.escapeJs = function(a) {
        return "string" == typeof a ? a.replace(BS, "\\\\").replace(FS, "\\/").replace(DQ, '\\"').replace(SQ, "\\'").replace(CR, "\\r").replace(LS, "\\u2028").replace(PS, "\\u2029").replace(NL, "\\n").replace(LF, "\\f").replace(TB, "\\t") : a;
    };
})(dust), "undefined" != typeof exports && ("undefined" != typeof process && require("./server")(dust), 
module.exports = dust), function() {
    function a(a, b) {
        return b = b.shiftBlocks(c), a.partial("layout", b, null);
    }
    function b(a, b) {
        return b = b.shiftBlocks(c), a.write('<div id="tab-hello"><div class="wrapper-vertical"><div class="wrapper-horizontal"><div id="avatar"></div><div id="hello"><div id="title">').reference(b.get("title"), b, "h").write('</div><pre id="description">').reference(b.get("description"), b, "h").write('</pre><div id="social"><a href="mailto:').reference(b.get("email"), b, "h").write('?Subject=Hi%20Framp" class="icon-envelope-alt" target="_blank"></a><a href="').reference(b.get("github"), b, "h").write('" class="icon-github" target="_blank"></a><a href="').reference(b.get("bitbucket"), b, "h").write('" class="icon-bitbucket" target="_blank"></a><a href="').reference(b.get("facebook"), b, "h").write('" class="icon-facebook-sign" target="_blank"></a><a href="').reference(b.get("plus"), b, "h").write('" class="icon-google-plus" target="_blank"></a><a href="').reference(b.get("twitter"), b, "h").write('" class="icon-twitter" target="_blank"></a><a href="').reference(b.get("linkedin"), b, "h").write('" class="icon-linkedin" target="_blank"></a></div></div><div class="clear"></div></div></div></div>');
    }
    dust.register("index", a);
    var c = {
        main: b
    };
    return a;
}(), function() {
    function a(a, c) {
        return a.exists(c.get("skipLayout"), c, {
            "else": b,
            block: d
        }, null);
    }
    function b(a, b) {
        return a.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width"/><title>').reference(b.get("title"), b, "h").write('</title><script src="http://code.jquery.com/jquery-1.9.1.min.js"></script><script src="/js/main.js"></script><link rel="stylesheet" type="text/css" href="/css/main.css"/></head><body>').block(b.getBlock("main"), b, {
            block: c
        }, null).write("</body></html>");
    }
    function c(a) {
        return a;
    }
    function d(a, b) {
        return a.block(b.getBlock("main"), b, {
            block: e
        }, null);
    }
    function e(a) {
        return a;
    }
    return dust.register("layout", a), a;
}();