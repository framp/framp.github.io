module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/iSb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "45Iz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"contact":"contact__1INyY","avatar":"avatar__1Rpr8","loaded":"loaded__2hTce","no-js":"no-js__14O-q","fadeIn":"fadeIn__2I9bl","social":"social__1bWFE","title":"title__1sHLG","subtitle":"subtitle__e4UUq","location":"location__AHAAZ","striked":"striked__3Zf5W","invisible":"invisible__2-dkv","slideDown":"slideDown__ylBtS","slideUp":"slideUp__N6TkU"};

/***/ }),

/***/ "69U8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"blog":"blog__DOVcl","container":"container__1mWk4"};

/***/ }),

/***/ "EbM4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.less
var style = __webpack_require__("EbM4");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["h"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["h"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ./routes/contact/style.less
var contact_style = __webpack_require__("45Iz");
var contact_style_default = /*#__PURE__*/__webpack_require__.n(contact_style);

// EXTERNAL MODULE: ./components/menu/style.less
var menu_style = __webpack_require__("oe76");
var menu_style_default = /*#__PURE__*/__webpack_require__.n(menu_style);

// CONCATENATED MODULE: ./components/menu/index.js




var pages = {
  contact: ["/", "Framp"],
  experience: ["/experience", "Experience"],
  blog: ["/blog", "Blog"],
  projects: ["/projects", "Projects"]
};

/* harmony default export */ var menu = (function (entries, active) {
  return Object(preact_min["h"])(
    "div",
    { "class": menu_style_default.a.menu + " " + menu_style_default.a[active] },
    entries.map(function (entry) {
      return Object(preact_min["h"])(
        "a",
        { "class": menu_style_default.a[entry], href: pages[entry][0] },
        pages[entry][1]
      );
    })
  );
});
// CONCATENATED MODULE: ./components/social/index.js

var github = Object(preact_min["h"])(
  "svg",
  {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48"
  },
  Object(preact_min["h"])("rect", { fill: "#111", height: "512", rx: "15%", width: "512" }),
  Object(preact_min["h"])("path", {
    d: "m119 255c17 30 49 48 102 53-8 6-17 17-18 30-10 6-29 8-44 3-21-7-29-48-61-42-7 1-6 6 0 10 10 6 21 16 26 30 12 31 37 39 77 33v45c0 14-20 18-20 25 0 3 7 3 12 3 10 0 32-9 32-23 0-12 0-52 1-59 0-15 8-20 8-20s1 82-2 92c-4 13-10 11-10 17 0 9 26 2 35-17 7-15 4-95 3-94h7s0 37 1 53c0 17-1 39 9 50 7 7 29 19 29 8 0-6-12-12-12-29v-79c10 0 8 26 8 26l1 48s-2 18 19 25c8 3 24 3 25-1s-20-11-20-25v-49c0-36-5-49-22-60 53-5 86-18 102-53 10-20 12-44 12-62 0-50-24-67-29-76 7-38-1-55-5-60-14-5-48 12-66 24-30-9-94-8-118 2-44-31-67-26-67-26s-15 27-4 66c-15 18-25 31-26 65 0 27 3 44 15 67z",
    fill: "#fff"
  })
);
var linkedin = Object(preact_min["h"])(
  "svg",
  {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "#fff"
  },
  Object(preact_min["h"])("rect", { width: "512", height: "512", rx: "15%", fill: "#111" }),
  Object(preact_min["h"])("circle", { cx: "104", cy: "104", r: "48" }),
  Object(preact_min["h"])("path", { d: "m237 178v259m-133-259v259", stroke: "#fff", "stroke-width": "86" }),
  Object(preact_min["h"])("path", { d: "m279 293c0-26 18-53 48-53 31 0 43 24 43 59v138h86v-148c0-80-42-116-99-116-45 0-67 25-78 42" })
);
var mail = Object(preact_min["h"])(
  "svg",
  {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "#111"
  },
  Object(preact_min["h"])("rect", { width: "512", height: "512", rx: "15%" }),
  Object(preact_min["h"])("rect", { x: "56", y: "111", width: "400", height: "290", rx: "44", fill: "#fff" }),
  Object(preact_min["h"])("path", { d: "m89 148h334v216h-334" }),
  Object(preact_min["h"])("path", {
    d: "m437 158-157 136c-16 14-32 14-48 0l-157-136m349 206-105-105m-231 105 107-107",
    fill: "none",
    stroke: "#fff",
    "stroke-width": "24"
  })
);
var phone = Object(preact_min["h"])(
  "svg",
  {
    viewBox: "0 0 32 32",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48",
    fill: "none",
    stroke: "#fff",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2"
  },
  Object(preact_min["h"])("path", { d: "M21 2 L11 2 C10 2 9 3 9 4 L9 28 C9 29 10 30 11 30 L21 30 C22 30 23 29 23 28 L23 4 C23 3 22 2 21 2 Z M9 5 L23 5 M9 27 L23 27" })
);
// CONCATENATED MODULE: ./routes/contact/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var contact_PreloadedAvatar = function (_Component) {
  _inherits(PreloadedAvatar, _Component);

  function PreloadedAvatar() {
    _classCallCheck(this, PreloadedAvatar);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  PreloadedAvatar.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var img = new Image();
    img.src = "https://gravatar.com/avatar/21fc27a2ac6cd9094a423997f0344a0b?s=280";
    img.onload = function () {
      _this2.setState({ loaded: true });
    };
  };

  PreloadedAvatar.prototype.render = function render() {
    return Object(preact_min["h"])("div", { "class": contact_style_default.a.avatar + " " + (this.state.loaded ? contact_style_default.a.loaded : "") });
  };

  return PreloadedAvatar;
}(preact_min["Component"]);

var contact__ref = Object(preact_min["h"])(contact_PreloadedAvatar, null);

var _ref2 = Object(preact_min["h"])("br", null);

var _ref3 = Object(preact_min["h"])(
  "a",
  { href: "mailto:hi@framp.me?Subject=Hi+Framp" },
  mail
);

var _ref4 = Object(preact_min["h"])(
  "a",
  { href: "https://github.com/framp" },
  github
);

var _ref5 = Object(preact_min["h"])(
  "a",
  { href: "https://uk.linkedin.com/in/framp" },
  linkedin
);

var _ref6 = Object(preact_min["h"])(
  "a",
  { href: "tel:+35794041560" },
  phone
);

/* harmony default export */ var contact = (function () {
  return Object(preact_min["h"])(
    "section",
    { "class": contact_style_default.a.contact },
    Object(preact_min["h"])(
      "div",
      { "class": contact_style_default.a.container },
      contact__ref,
      Object(preact_min["h"])(
        "h1",
        { "class": contact_style_default.a.title },
        "FRAMP"
      ),
      Object(preact_min["h"])(
        "h2",
        { "class": contact_style_default.a.subtitle },
        Object(preact_min["h"])(
          "span",
          { "class": contact_style_default.a.location + " " + contact_style_default.a.invisible },
          "LONDON"
        ),
        " ",
        "Federico Rampazzo ",
        Object(preact_min["h"])(
          "span",
          { "class": contact_style_default.a.location },
          Object(preact_min["h"])(
            "span",
            { "class": contact_style_default.a.striked },
            "LONDON"
          ),
          _ref2,
          "PAPHOS"
        )
      ),
      Object(preact_min["h"])(
        "div",
        { "class": contact_style_default.a.social },
        _ref3,
        _ref4,
        _ref5,
        _ref6
      )
    ),
    menu(["projects"], "contact")
  );
});
// EXTERNAL MODULE: ./routes/experience/style.less
var experience_style = __webpack_require__("raki");
var experience_style_default = /*#__PURE__*/__webpack_require__.n(experience_style);

// CONCATENATED MODULE: ./routes/experience/index.js





var experience__ref = Object(preact_min["h"])(
  "h2",
  null,
  "work in progress ",
  Object(preact_min["h"])(
    "i",
    null,
    "noun"
  )
);

var experience__ref2 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "i",
    null,
    "noun"
  ),
  ": work in progress;"
);

var experience__ref3 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "i",
    null,
    "plural noun"
  ),
  ": works in progress"
);

var experience__ref4 = Object(preact_min["h"])(
  "ul",
  null,
  Object(preact_min["h"])(
    "li",
    null,
    "an unfinished project that is still being added to or developed.",
    Object(preact_min["h"])(
      "quote",
      null,
      "\"the book itself is still a work in progress\""
    )
  ),
  Object(preact_min["h"])(
    "li",
    null,
    "(in accounting) the total value of the materials and labour for unfinished projects.",
    Object(preact_min["h"])(
      "quote",
      null,
      "\"the board had estimated the value of its work in progress as \xA36,145\""
    )
  )
);

/* harmony default export */ var experience = (function () {
  return Object(preact_min["h"])(
    "section",
    { "class": experience_style_default.a.experience },
    Object(preact_min["h"])(
      "div",
      { "class": experience_style_default.a.container },
      experience__ref,
      experience__ref2,
      experience__ref3,
      experience__ref4
    ),
    menu(["contact"], "experience")
  );
});
// EXTERNAL MODULE: ./routes/blog/style.less
var blog_style = __webpack_require__("69U8");
var blog_style_default = /*#__PURE__*/__webpack_require__.n(blog_style);

// CONCATENATED MODULE: ./routes/blog/index.js





var blog__ref = Object(preact_min["h"])(
  "h2",
  null,
  "work in progress ",
  Object(preact_min["h"])(
    "i",
    null,
    "noun"
  )
);

var blog__ref2 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "i",
    null,
    "noun"
  ),
  ": work in progress;"
);

var blog__ref3 = Object(preact_min["h"])(
  "p",
  null,
  Object(preact_min["h"])(
    "i",
    null,
    "plural noun"
  ),
  ": works in progress"
);

var blog__ref4 = Object(preact_min["h"])(
  "ul",
  null,
  Object(preact_min["h"])(
    "li",
    null,
    "an unfinished project that is still being added to or developed.",
    Object(preact_min["h"])(
      "quote",
      null,
      "\"the book itself is still a work in progress\""
    )
  ),
  Object(preact_min["h"])(
    "li",
    null,
    "(in accounting) the total value of the materials and labour for unfinished projects.",
    Object(preact_min["h"])(
      "quote",
      null,
      "\"the board had estimated the value of its work in progress as \xA36,145\""
    )
  )
);

/* harmony default export */ var blog = (function () {
  return Object(preact_min["h"])(
    "section",
    { "class": blog_style_default.a.blog },
    Object(preact_min["h"])(
      "div",
      { "class": blog_style_default.a.container },
      blog__ref,
      blog__ref2,
      blog__ref3,
      blog__ref4
    ),
    menu(["contact"], "blog")
  );
});
// EXTERNAL MODULE: ./routes/article/style.less
var article_style = __webpack_require__("/iSb");
var article_style_default = /*#__PURE__*/__webpack_require__.n(article_style);

// CONCATENATED MODULE: ./routes/article/index.js




/* harmony default export */ var routes_article = (function (_ref) {
  var article = _ref.article;
  return Object(preact_min["h"])("section", { "class": article_style_default.a.article });
});
// EXTERNAL MODULE: ./routes/projects/style.less
var projects_style = __webpack_require__("qVY2");
var projects_style_default = /*#__PURE__*/__webpack_require__.n(projects_style);

// CONCATENATED MODULE: ./components/furniture/index.js


var furniture__ref = Object(preact_min["h"])("path", {
  d: "M129.714 150.125c.438-.288.86-.626 1.248-1.015 3.015-3.013 3.015-7.902 0-10.912-.847-.85-1.846-1.45-2.905-1.822 1.29-4.332 3.668-15.944-1.047-32.707 2.89-.494 5.093-3.002 5.093-6.035 0-1.844-.816-3.494-2.103-4.618 2.963-2.21 5-6.78 5-12.065 0-5.283-2.037-9.852-5-12.062 1.287-1.124 2.103-2.773 2.103-4.616 0-3.03-2.2-5.54-5.093-6.033 4.18-14.865 2.79-25.677 1.52-30.957.884-.374 1.713-.916 2.435-1.638 3.015-3.015 3.015-7.902 0-10.916-.387-.39-.81-.728-1.25-1.016.687-.324 1.338-.773 1.92-1.352 2.42-2.418 2.636-6.124.485-8.274-2.15-2.152-5.855-1.935-8.274.483-.576.58-1.025 1.233-1.35 1.92-.29-.444-.628-.864-1.015-1.252-3.01-3.013-7.902-3.013-10.913 0-.553.55-.993 1.165-1.344 1.818-3.14-1.12-9.88-2.678-19.35-.306-.907-2.257-3.105-3.853-5.686-3.853-1.846 0-3.49.812-4.62 2.1C77.354 2.034 72.786 0 67.5 0c-5.284 0-9.85 2.035-12.063 4.996-1.122-1.285-2.775-2.098-4.616-2.098-2.578 0-4.782 1.597-5.685 3.854-9.475-2.37-16.212-.815-19.35.306-.35-.653-.795-1.268-1.345-1.82-3.015-3.012-7.9-3.012-10.916 0-.388.39-.727.81-1.013 1.253-.323-.686-.775-1.34-1.35-1.918-2.42-2.42-6.123-2.634-8.275-.482-2.15 2.152-1.93 5.856.486 8.273.577.58 1.233 1.028 1.92 1.352-.446.29-.865.627-1.255 1.017-3.012 3.013-3.012 7.9 0 10.916.722.72 1.55 1.267 2.436 1.64-1.268 5.283-2.662 16.093 1.52 30.957-2.89.493-5.093 3.003-5.093 6.032 0 1.843.812 3.493 2.1 4.616C2.033 71.103 0 75.673 0 80.953c0 5.285 2.035 9.853 4.998 12.064-1.285 1.122-2.1 2.774-2.1 4.618 0 3.03 2.2 5.54 5.092 6.034-4.718 16.765-2.34 28.374-1.05 32.71-1.058.37-2.057.973-2.905 1.818-3.012 3.013-3.012 7.902 0 10.915.388.386.81.724 1.25 1.016-.685.32-1.338.773-1.917 1.35-2.418 2.418-2.636 6.12-.486 8.27 2.152 2.154 5.856 1.936 8.275-.483.576-.575 1.027-1.23 1.35-1.917.29.44.627.86 1.016 1.248 3.013 3.015 7.9 3.015 10.915 0 1.012-1.01 1.676-2.233 2.006-3.528 3.373 1.086 9.835 2.3 18.69.084.903 2.26 3.105 3.855 5.685 3.855 1.84 0 3.492-.813 4.615-2.1 2.212 2.964 6.78 4.997 12.063 4.997 5.284 0 9.852-2.033 12.063-4.996 1.123 1.288 2.775 2.1 4.617 2.1 2.583 0 4.785-1.592 5.688-3.854 8.856 2.216 15.318 1.002 18.69-.083.33 1.294.995 2.518 2.007 3.527 3.01 3.016 7.9 3.016 10.91 0 .39-.386.728-.807 1.016-1.25.325.688.775 1.342 1.35 1.92 2.42 2.42 6.125 2.637 8.275.484 2.152-2.15 1.933-5.85-.486-8.27-.576-.588-1.225-1.036-1.913-1.36zm-15.845-9.348H21.346V21.49h92.522v119.287z",
  fill: "#7c2929"
});

var furniture__ref2 = Object(preact_min["h"])("path", {
  d: "M129.714 150.125c.438-.288.86-.626 1.248-1.015 3.015-3.013 3.015-7.902 0-10.912-.847-.85-1.846-1.45-2.905-1.822 1.29-4.332 3.668-15.944-1.047-32.707 2.89-.494 5.093-3.002 5.093-6.035 0-1.844-.816-3.494-2.103-4.618 2.963-2.21 5-6.78 5-12.065 0-5.283-2.037-9.852-5-12.062 1.287-1.124 2.103-2.773 2.103-4.616 0-3.03-2.2-5.54-5.093-6.033 4.18-14.865 2.79-25.677 1.52-30.957.884-.374 1.713-.916 2.435-1.638 3.015-3.015 3.015-7.902 0-10.916-.387-.39-.81-.728-1.25-1.016.687-.324 1.338-.773 1.92-1.352 2.42-2.418 2.636-6.124.485-8.274-2.15-2.152-5.855-1.935-8.274.483-.576.58-1.025 1.233-1.35 1.92-.29-.444-.628-.864-1.015-1.252-3.01-3.013-7.902-3.013-10.913 0-.553.55-.993 1.165-1.344 1.818-3.14-1.12-9.88-2.678-19.35-.306-.907-2.257-3.105-3.853-5.686-3.853-1.846 0-3.49.812-4.62 2.1C77.354 2.034 72.786 0 67.5 0c-5.284 0-9.85 2.035-12.063 4.996-1.122-1.285-2.775-2.098-4.616-2.098-2.578 0-4.782 1.597-5.685 3.854-9.475-2.37-16.212-.815-19.35.306-.35-.653-.795-1.268-1.345-1.82-3.015-3.012-7.9-3.012-10.916 0-.388.39-.727.81-1.013 1.253-.323-.686-.775-1.34-1.35-1.918-2.42-2.42-6.123-2.634-8.275-.482-2.15 2.152-1.93 5.856.486 8.273.577.58 1.233 1.028 1.92 1.352-.446.29-.865.627-1.255 1.017-3.012 3.013-3.012 7.9 0 10.916.722.72 1.55 1.267 2.436 1.64-1.268 5.283-2.662 16.093 1.52 30.957-2.89.493-5.093 3.003-5.093 6.032 0 1.843.812 3.493 2.1 4.616C2.033 71.103 0 75.673 0 80.953c0 5.285 2.035 9.853 4.998 12.064-1.285 1.122-2.1 2.774-2.1 4.618 0 3.03 2.2 5.54 5.092 6.034-4.718 16.765-2.34 28.374-1.05 32.71-1.058.37-2.057.973-2.905 1.818-3.012 3.013-3.012 7.902 0 10.915.388.386.81.724 1.25 1.016-.685.32-1.338.773-1.917 1.35-2.418 2.418-2.636 6.12-.486 8.27 2.152 2.154 5.856 1.936 8.275-.483.576-.575 1.027-1.23 1.35-1.917.29.44.627.86 1.016 1.248 3.013 3.015 7.9 3.015 10.915 0 1.012-1.01 1.676-2.233 2.006-3.528 3.373 1.086 9.835 2.3 18.69.084.903 2.26 3.105 3.855 5.685 3.855 1.84 0 3.492-.813 4.615-2.1 2.212 2.964 6.78 4.997 12.063 4.997 5.284 0 9.852-2.033 12.063-4.996 1.123 1.288 2.775 2.1 4.617 2.1 2.583 0 4.785-1.592 5.688-3.854 8.856 2.216 15.318 1.002 18.69-.083.33 1.294.995 2.518 2.007 3.527 3.01 3.016 7.9 3.016 10.91 0 .39-.386.728-.807 1.016-1.25.325.688.775 1.342 1.35 1.92 2.42 2.42 6.125 2.637 8.275.484 2.152-2.15 1.933-5.85-.486-8.27-.576-.588-1.225-1.036-1.913-1.36zm-15.845-9.348H21.346V21.49h92.522v119.287z",
  fill: "#7c2929"
});

var furniture_artwork = function artwork(image) {
  return Object(preact_min["h"])(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "135",
      height: "161.907",
      viewBox: "0 0 135 161.90741"
    },
    image,
    furniture__ref,
    furniture__ref2
  );
};
var lamp = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "101.187",
    height: "287.562",
    viewBox: "0 0 101.187 287.56201"
  },
  Object(preact_min["h"])(
    "g",
    { fill: "#7c2929" },
    Object(preact_min["h"])("path", { d: "M50.49 164.59h.192c-.33 0-.666-.004-1-.01.277.01.547.01.808.01zM47.562 261.81c-1.137 1.67-6.456 2.544-6.684 4.548-.312 2.724 4.662 5.058 9.717 5.058 5.055 0 10.03-2.33 9.714-5.058-.23-2.004-5.548-2.877-6.685-4.548v-1.794h-6.063v1.794z" }),
    Object(preact_min["h"])("path", { d: "M56.15 102.288V77.475s37.807-.957 45.037-10.38L84.963 6.573C83.445 1.543 59.187 0 50.595 0c-8.592 0-32.853 1.542-34.368 6.573L0 67.093c7.23 9.422 45.04 10.38 45.04 10.38v24.812c.88.888 2.525.82 2.525.82s-7.512 4.967-6.066 10.616c1.808 7.06 6.065 12.13 6.065 12.13v134.166h6.063V125.853s4.254-5.073 6.063-12.13c1.45-5.645-6.062-10.616-6.062-10.616s1.638.07 2.523-.82zm-13.472 9.12c.474-2.367 5.07-6.966 5.07-6.966s-2.985 4.81-3.363 7.3c-.378 2.51 4.407 13.74 3.81 13.457-1.45-.694-5.988-11.425-5.517-13.792zm7.917 16.062c-1.644 0-2.4-.606-2.4-.606h4.93c-.004.003-.89.606-2.53.606zm0-23.41c-1.644 0-2.4-.602-2.4-.602h4.93c-.004 0-.89.603-2.53.603zm0-24.338c-2.145 0-4.728-1.51-4.728-1.51l4.734.244 4.72-.243s-1.575 1.51-4.725 1.51zM60.31 266.358c.31 2.724-4.663 5.058-9.715 5.058-5.055 0-10.03-2.33-9.717-5.058.228-2.004 5.547-2.877 6.684-4.548v-1.794s-22.746 4.548-27.294 11.397c-4.05 6.1.756 9.828 3.033 11.346 2.275 1.517 19.966 4.802 27.295 4.802 8.844 0 21.747-2.604 24.687-4.296 3.867-2.226 8.166-5.307 3.867-12.132-3.004-4.77-25.525-11.118-25.525-11.118v1.794c1.137 1.67 6.456 2.544 6.684 4.548zm19.283 9.327v1.986s-18.858 3.322-28.932 3.322c-10.067 0-30.773-3.32-30.773-3.32v-1.987s22.584 3.23 30.774 3.23c8.194.004 28.933-3.23 28.933-3.23z" })
  )
);
var gramophone = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "135",
    height: "202.238",
    viewBox: "0 0 135 202.23845"
  },
  Object(preact_min["h"])(
    "g",
    { transform: "scale(3)", fill: "#7c2929" },
    Object(preact_min["h"])("path", { d: "M3.072 40.27s-.758 13.17 5.176 13.17h.294v4.714s-5.555-.1-6.606-10.745c0 0-.295-2.68-.422-7.267 0 0 .226-.785.814-.785.59 0 .744.912.744.912zM21.602 46.515h.785v.477h-.785z" }),
    Object(preact_min["h"])("path", { d: "M36.752 48.223h-.003l-.014-.946H7.294v.99c-.11.17-.577.82-1.402 1.11v2.132h32.206v-2.132s-.954-.426-1.346-1.155zM8.92 46.174h26.205v.17H8.92zM21.977 45.163c-.204 0-.38.164-.38.368 0 .007.004.012.004.017v.455h.786v-.477c0-.202-.206-.362-.41-.362zM38.434 62.475c-14.417.065-18.733.09-32.206 0l-1.122 2.133v2.805h34.45v-2.805zM35.572 62.027v-10.1H9.09v10.1c21.61.057 5.646 0 26.482 0z" }),
    Object(preact_min["h"])("path", { d: "M22.64 63.247c-15.094 2.777-7.547 1.39 0 0z" }),
    Object(preact_min["h"])("circle", {
      transform: "matrix(.748 0 0 .748 -14.646 -4.017)",
      r: "1.35",
      cy: "91.681",
      cx: "49.292"
    }),
    Object(preact_min["h"])("path", { d: "M0 39.79h8.627v2.894H0z" }),
    Object(preact_min["h"])("path", { d: "M.8 40.31h7.447v1.853H.8zM21.068 44.127l1.515.898 1.235.422-.898-.815-1.562-.96M16.98 43.614c-.11-.014-.22-.04-.33-.06.288.732.856 1.27 1.542 1.413-.535-.276-.966-.76-1.213-1.353zM18.21 39.974c-.763.152-1.384.792-1.64 1.646.09-.026.198-.054.336-.084.23-.695.702-1.256 1.305-1.562zM19.23 44.817c1.17 0 2.12-1.05 2.12-2.346 0-1.294-.95-2.344-2.12-2.344-.84 0-1.56.547-1.903 1.334.35-.05.775-.082 1.244-.055 1.246.076 2.106.168 2.106 1.066 0 .62-.845.87-.845.87s-1.073.393-2.42.314c.37.693 1.043 1.163 1.82 1.163z" }),
    Object(preact_min["h"])("path", { d: "M5.386 44.772c.8.59 4.335-.125 4.335-.125l6.565-1.39c1.726.337 3.324-.126 3.324-.126s.785-.237.785-.575c0-.673-.617-.812-1.824-.87-1.224-.055-2.327.31-2.327.31s-2.356.42-5.64 1.05c-2.4.463-3.02.047-3.182-.21-.058-.093-.057-.167-.057-.167H4.418l.003.054c.046.894.183 1.474.966 2.05zM4.32 35.093v4.658h3.31V37.06M7.827 36.566l6.537-3.604-3.255-4.097-6.313 5.767M11.614 28.36l1.01-.84 3.423 4.43-1.18.618M13.13 27.077l.988-1.01 3.787 4.924-1.305.61M14.53 25.61l.394.618s8.64-9.23 8.052-23.285c0 0-1.515-4.124-2.61-2.61 0 0 .955 18.574-5.835 25.278z" }),
    Object(preact_min["h"])("path", { d: "M15.19 26.51l.548.756s9.132-6.522 13.046-17.59c0 0-1.178-4.124-3.45-5.64 0 0-.673-.504-1.936-1.008 0 0 1.556 11.782-8.207 23.48zM18.515 30.746l-.428-.492s10.896-6.413 24.482-2.762c0 0 3.692 2.38 1.975 3.116 0 0-18.003-5.02-26.03.138z" }),
    Object(preact_min["h"])("path", { d: "M17.872 29.933l-.62-.7s8.164-7.1 19.666-9.064c0 0 4.118 2.234 5.1 4.783 0 0 .344.767.56 2.11.003 0-11.154-4.098-24.706 2.87z" }),
    Object(preact_min["h"])("path", { d: "M16.075 27.603l.84 1.18s9.736-8.053 19.555-9.288c0 0-1.29-3.675-3.31-6.03-2.02-2.358-3.956-3.368-3.956-3.368s-2.02 8.67-13.13 17.506z" })
  )
);
var sofa = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "390",
    height: "163.762",
    viewBox: "0 0 390 163.76207"
  },
  Object(preact_min["h"])(
    "switch",
    { transform: "matrix(4.708 0 0 4.708 -18.834 -138.38)", fill: "#7c2929" },
    Object(preact_min["h"])("foreignObject", {
      requiredExtensions: "http://ns.adobe.com/AdobeIllustrator/10.0/",
      x: "0",
      y: "0",
      width: "1",
      height: "1"
    }),
    Object(preact_min["h"])(
      "g",
      null,
      Object(preact_min["h"])("path", { d: "M73.246 29.56c-.047-.076-.146-.23-1.473-.23-1.42 0-3.636.192-4.36.44-.647.22-7.422.32-13.443.32-2.264 0-3.58-.016-3.707-.03-.218-.028-.868-.124-1.557-.226-.994-.146-2.124-.313-2.37-.333-.066 0-.124.028-.17.08-.19.215-.12.923-.01 1.828.03.24.055.447.056.54 0 .067.014.254.036.563.118 1.64.43 5.994-.053 8.015-.584 2.453.546 3.877.595 3.936l.037.046 23.567-.23.01-.113c.006-.07.528-6.844.72-7.872.196-1.034 1.58-4.05 1.8-4.482.222-.445.593-1.824.322-2.25zM84.187 37.484c-.104-.064-.204-.127-.296-.186-1.19-.762-5.228-.876-5.4-.88l-.005.247c.01 0 .278.008.69.03l3.368.753c-3.365.127-4.354 2.23-4.95 3.516-.067.146-.132.283-.195.408-.685 1.374-1.2 7.38-1.222 7.646v12.13h3.755c.942 0 1.066-.564 1.07-.61.006-.12.366-12.183.537-13.697.15-1.315.943-2.225 1.118-2.41h1.153c.025-.003 2.412-.367 2.95-2.78.5-2.254-1.348-3.404-2.57-4.166zM74.346 45.96l-.117-.108c-1.046-.958-3.71-1.1-5.203-1.1-.565 0-.95.02-.947.02l-18.327.143s-2.938.14-3.23.157c-.28.015-.353.273-.473.703-.063.224-.14.5-.266.84-.152.405-.162.71-.03.896.12.176.316.19.372.19l14.8-.02c.058 0 5.81.02 9.896.02 2.404 0 3.774-.007 4.07-.02.377-.018.623-.063.688-.243.094-.26-.268-.592-1.234-1.477zm-28.22 1.617zM75.49 48.26l-.124.002-29.46-.15h-.247v4.718c-.038.095-.064.26.033.418.156.257.568.386 1.225.386h28.614l-.04-5.373zM76.17 61.643h3.523v2.536H76.17z" }),
      Object(preact_min["h"])("path", { d: "M81.64 32.957c-.08-.11-.24-.335-5.013-.335-1.95 0-3.77.04-3.79.04l-.085.002-1.285 3.772-.3 7.92-.004.11.106.017c1.314.215 2.76.504 2.902.613l.378.43.013-.31c.118-3.185.698-4.43 1.162-5.43.156-.335.302-.65.42-1.006.45-1.342 3.507-3.784 4.496-4.222.803-.357.883-.78.95-1.154.022-.104.04-.2.07-.3.02-.05.01-.104-.02-.147zM17.597 29.56c.047-.076.146-.23 1.473-.23 1.42 0 3.635.192 4.36.44.647.22 7.42.32 13.442.32 2.264 0 3.58-.016 3.708-.03.215-.028.866-.124 1.555-.226.996-.146 2.124-.313 2.373-.333.064 0 .123.028.167.08.19.215.122.923.01 1.828-.028.24-.054.447-.055.54 0 .067-.014.254-.035.563-.117 1.64-.43 5.994.052 8.015.583 2.453-.546 3.877-.594 3.936l-.037.046-23.568-.23-.01-.113c-.004-.07-.528-6.844-.72-7.872-.196-1.034-1.582-4.05-1.8-4.482-.223-.445-.593-1.824-.32-2.25zM6.657 37.484c.104-.064.202-.127.295-.186 1.193-.762 5.23-.876 5.4-.88l.005.247c-.01 0-.28.008-.69.03l-3.367.753c3.366.127 4.354 2.23 4.95 3.516.068.146.132.283.194.408.687 1.374 1.202 7.38 1.224 7.646v12.13h-3.755c-.94 0-1.065-.564-1.073-.61-.003-.12-.36-12.183-.534-13.697-.15-1.315-.944-2.225-1.117-2.41H7.034c-.024-.003-2.414-.367-2.95-2.78-.502-2.254 1.348-3.404 2.572-4.166zM15.264 47.438c.065.18.312.226.688.242.298.014 1.667.02 4.07.02 4.09 0 9.838-.02 9.896-.02l14.8.02c.057 0 .252-.014.374-.188.13-.188.12-.49-.03-.896-.126-.34-.204-.616-.267-.84-.12-.43-.193-.688-.47-.703-.295-.016-3.234-.157-3.234-.157l-18.326-.143c.002 0-.38-.02-.948-.02-1.494 0-4.155.142-5.2 1.1l-.118.108c-.968.885-1.33 1.217-1.234 1.478zm29.453.14zM15.352 48.26l.123.002 29.46-.15h.248v4.718c.037.095.063.26-.034.418-.157.257-.57.386-1.226.386H15.31l.042-5.373zM11.15 61.643h3.522v2.536H11.15zM9.204 32.957c.078-.11.24-.335 5.014-.335 1.95 0 3.77.04 3.787.04l.086.002 1.287 3.772.3 7.92.004.11-.106.017c-1.315.215-2.762.504-2.904.613l-.376.43-.012-.31c-.12-3.185-.698-4.43-1.164-5.43-.156-.335-.303-.65-.422-1.006-.447-1.342-3.508-3.784-4.494-4.222-.803-.357-.882-.78-.952-1.154-.02-.104-.038-.2-.07-.3-.016-.05-.01-.104.024-.147zM15.31 54.272h60.283v5.43H15.31z" })
    )
  )
);
var table = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "138.5",
    height: "105.882",
    viewBox: "0 0 138.50001 105.88187"
  },
  Object(preact_min["h"])(
    "g",
    { fill: "#7c2929" },
    Object(preact_min["h"])("path", { d: "M1.353 7.64H137.14c0 .002 2.148.002 1.045-3.46l-.23-.722S136.856 0 134.71 0H3.633S1.488 0 .438 3.515l-.18.61S-.006 4.998 0 5.876v.006C.006 6.76.28 7.64 1.353 7.64zM133.697 81.518h-7.81V84.1c9.71 6.098 2.674 21.782 2.674 21.782h3.155c9.364-19.166 1.982-24.364 1.982-24.364zM12.208 84.1v-2.582H4.396s-7.385 5.198 1.985 24.364h3.15S2.494 90.202 12.21 84.1zM125.898 10.918h7.68V68.1h-7.68zM15.134 81.49v2.327c1.29 2.41 7.348 3.825 15.2 3.825 3.58 0 9.99-1.046 16.055-1.81 7.127-.712 11.8 1.708 13.397 2.027 2.452.59 5.665 1.496 9.375 1.496 3.707 0 6.926-.91 9.374-1.497 1.597-.32 6.273-2.745 13.398-2.027 6.064.763 12.476 1.81 16.057 1.81 7.852 0 13.91-1.417 15.2-3.826V81.49H15.134zM132.596 70.96H5.733c-2.12 0-3.84 1.716-3.84 3.84 0 2.123 1.72 3.84 3.84 3.84h126.863c2.12 0 3.835-1.717 3.835-3.84 0-2.124-1.72-3.84-3.834-3.84zM123.193 40.964H15.133V68.1h108.06V40.965zM76.75 58.677c-2.406 0-5.077-1.612-7.588-3.332-2.514 1.717-5.21 3.332-7.59 3.332-2.964 0-5.45-1.984-5.45-4.708 0-.423.082-.903.24-1.43l.794.21c-.105.396-.184.818-.184 1.22 0 2.246 2.116 3.91 4.603 3.91 2.116 0 4.572-1.4 6.9-3.012l-.74-.555c-2.246-1.563-4.44-3.117-5.842-3.117-1.188 0-2.09.928-2.09 2.09 0 1.186.928 2.114 2.09 2.114v.797c-1.64 0-2.934-1.297-2.934-2.91 0-1.583 1.268-2.883 2.933-2.883 1.693 0 3.887 1.562 6.32 3.28l.95.712.953-.686c2.433-1.72 4.65-3.31 6.347-3.31 1.664 0 2.907 1.296 2.907 2.885 0 1.61-1.27 2.907-2.907 2.907v-.797c1.16 0 2.06-.925 2.06-2.118 0-1.16-.87-2.09-2.06-2.09-1.43 0-3.597 1.537-5.87 3.15l-.713.526c2.328 1.586 4.758 3.01 6.874 3.01 2.485 0 4.603-1.665 4.603-3.938 0-.425-.055-.818-.16-1.187l.792-.215c.156.503.208.956.208 1.402 0 2.758-2.485 4.742-5.447 4.742zM4.75 10.918h7.678V68.1H4.75zM123.193 10.98H15.133v27.135h108.06V10.98zM76.75 28.688c-2.406 0-5.077-1.612-7.588-3.332-2.514 1.72-5.21 3.332-7.59 3.332-2.964 0-5.45-1.987-5.45-4.71 0-.426.082-.9.24-1.43l.794.215c-.105.396-.184.818-.184 1.214 0 2.247 2.116 3.914 4.603 3.914 2.116 0 4.572-1.4 6.9-3.01l-.74-.554c-2.246-1.563-4.44-3.122-5.842-3.122-1.188 0-2.09.925-2.09 2.09 0 1.19.928 2.12 2.09 2.12v.79c-1.64 0-2.934-1.296-2.934-2.91 0-1.585 1.268-2.882 2.933-2.882 1.693 0 3.887 1.562 6.32 3.277l.95.712.953-.687c2.433-1.72 4.65-3.306 6.347-3.306 1.664 0 2.907 1.294 2.907 2.883 0 1.612-1.27 2.907-2.907 2.907v-.79c1.16 0 2.06-.927 2.06-2.12 0-1.164-.87-2.09-2.06-2.09-1.43 0-3.597 1.534-5.87 3.15l-.713.526c2.328 1.586 4.758 3.015 6.874 3.015 2.485 0 4.603-1.666 4.603-3.94 0-.424-.055-.817-.16-1.19l.792-.214c.156.503.208.954.208 1.402 0 2.753-2.485 4.74-5.447 4.74z" })
  )
);
// CONCATENATED MODULE: ./components/pictures/index.js

var book = [Object(preact_min["h"])(
  "symbol",
  { id: "book", viewBox: "0 0 1024 1024" },
  Object(preact_min["h"])("path", { d: "M742.4 921.6h-512c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h512c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M844.8 153.6c-14.139 0-25.6 11.462-25.6 25.6v768c0 14.115-11.485 25.6-25.6 25.6h-563.2c-42.347 0-76.8-34.453-76.8-76.8s34.453-76.8 76.8-76.8h460.8c42.349 0 76.8-34.451 76.8-76.8v-614.4c0-42.347-34.451-76.8-76.8-76.8h-512c-42.347 0-76.8 34.453-76.8 76.8v768c0 70.579 57.421 128 128 128h563.2c42.349 0 76.8-34.451 76.8-76.8v-768c0-14.138-11.461-25.6-25.6-25.6zM179.2 102.4h512c14.115 0 25.6 11.485 25.6 25.6v614.4c0 14.115-11.485 25.6-25.6 25.6h-460.8c-28.794 0-55.392 9.563-76.8 25.67v-665.67c0-14.115 11.485-25.6 25.6-25.6z" })
), Object(preact_min["h"])("use", { xlinkHref: "#book", x: "38", y: "50", width: "60", height: "60", fill: "#6f2525" })];

var calendar = [Object(preact_min["h"])(
  "symbol",
  { id: "calendar", viewBox: "0 0 1024 1024" },
  Object(preact_min["h"])("path", { d: "M947.2 102.4h-128v-25.6c0-14.138-11.461-25.6-25.6-25.6s-25.6 11.462-25.6 25.6v25.6h-512v-25.6c0-14.138-11.462-25.6-25.6-25.6s-25.6 11.462-25.6 25.6v25.6h-128c-42.347 0-76.8 34.453-76.8 76.8v716.8c0 42.349 34.453 76.8 76.8 76.8h870.4c42.349 0 76.8-34.451 76.8-76.8v-716.8c0-42.347-34.451-76.8-76.8-76.8zM76.8 153.6h128v76.8c0 14.138 11.462 25.6 25.6 25.6s25.6-11.462 25.6-25.6v-76.8h512v76.8c0 14.138 11.461 25.6 25.6 25.6s25.6-11.462 25.6-25.6v-76.8h128c14.115 0 25.6 11.485 25.6 25.6v128h-921.6v-128c0-14.115 11.485-25.6 25.6-25.6zM947.2 921.6h-870.4c-14.115 0-25.6-11.485-25.6-25.6v-537.6h921.6v537.6c0 14.115-11.485 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M384 512h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M537.6 512h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M691.2 512h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M844.8 512h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M230.4 614.4h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M384 614.4h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M537.6 614.4h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M691.2 614.4h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M844.8 614.4h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M230.4 716.8h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M384 716.8h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M537.6 716.8h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M691.2 716.8h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M844.8 716.8h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M230.4 819.2h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M384 819.2h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.138 0 25.6 11.461 25.6 25.6s-11.462 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M537.6 819.2h-51.2c-14.138 0-25.6-11.461-25.6-25.6s11.462-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M691.2 819.2h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" }),
  Object(preact_min["h"])("path", { d: "M844.8 819.2h-51.2c-14.139 0-25.6-11.461-25.6-25.6s11.461-25.6 25.6-25.6h51.2c14.139 0 25.6 11.461 25.6 25.6s-11.461 25.6-25.6 25.6z" })
), Object(preact_min["h"])("use", {
  xlinkHref: "#calendar",
  x: "38",
  y: "50",
  width: "60",
  height: "60",
  fill: "#6f2525"
})];

var database = [Object(preact_min["h"])(
  "symbol",
  { id: "database", viewBox: "0 0 1024 1024" },
  Object(preact_min["h"])("path", { d: "M925.040 82.379c-25.429-16.701-61.077-31.488-105.955-43.955-89.2-24.778-207.35-38.424-332.685-38.424s-243.485 13.646-332.686 38.424c-44.877 12.467-80.526 27.254-105.955 43.955-31.69 20.813-47.758 44.774-47.758 71.221v614.4c0 26.446 16.069 50.41 47.758 71.222 25.429 16.701 61.077 31.488 105.955 43.954 89.202 24.779 207.352 38.424 332.686 38.424s243.485-13.645 332.686-38.426c44.878-12.466 80.526-27.253 105.955-43.954 31.69-20.811 47.758-44.774 47.758-71.221v-614.4c0-26.446-16.069-50.408-47.76-71.221zM167.418 87.757c84.864-23.574 198.149-36.557 318.982-36.557s234.117 12.982 318.982 36.557c91.928 25.536 116.218 54.235 116.218 65.843s-24.29 40.307-116.218 65.843c-84.866 23.574-198.149 36.557-318.982 36.557s-234.118-12.982-318.982-36.557c-91.928-25.536-116.218-54.235-116.218-65.843s24.29-40.307 116.218-65.843zM805.382 833.843c-84.866 23.574-198.149 36.557-318.982 36.557s-234.117-12.982-318.982-36.557c-91.928-25.536-116.218-54.235-116.218-65.843v-131.389c25.168 15.803 59.611 29.846 102.514 41.765 89.202 24.779 207.352 38.424 332.686 38.424s243.485-13.645 332.686-38.426c42.902-11.917 77.347-25.962 102.514-41.765v131.39c0 11.608-24.29 40.307-116.218 65.843zM805.382 629.043c-84.866 23.574-198.149 36.557-318.982 36.557s-234.117-12.982-318.982-36.557c-91.928-25.536-116.218-54.235-116.218-65.843v-131.39c25.168 15.803 59.611 29.848 102.514 41.766 89.202 24.778 207.352 38.424 332.686 38.424s243.485-13.646 332.686-38.424c42.902-11.918 77.347-25.963 102.514-41.766v131.39c0 11.608-24.29 40.307-116.218 65.843zM805.382 424.243c-84.866 23.574-198.149 36.557-318.982 36.557s-234.117-12.982-318.982-36.557c-91.928-25.536-116.218-54.235-116.218-65.843v-131.39c25.168 15.803 59.611 29.848 102.514 41.766 89.202 24.778 207.352 38.424 332.686 38.424s243.485-13.646 332.686-38.424c42.902-11.918 77.347-25.963 102.514-41.766v131.39c0 11.608-24.29 40.307-116.218 65.843z" })
), Object(preact_min["h"])("use", {
  xlinkHref: "#database",
  x: "38",
  y: "50",
  width: "60",
  height: "60",
  fill: "#6f2525"
})];

var code = [Object(preact_min["h"])(
  "symbol",
  { id: "code", viewBox: "0 0 1024 1024" },
  Object(preact_min["h"])("path", { d: "M256 768c-6.552 0-13.102-2.499-18.101-7.499l-204.8-204.8c-9.998-9.997-9.998-26.206 0-36.203l204.8-204.8c9.997-9.997 26.206-9.997 36.203 0 9.998 9.997 9.998 26.206 0 36.203l-186.699 186.699 186.698 186.699c9.998 9.997 9.998 26.206 0 36.203-4.998 4.998-11.549 7.498-18.101 7.498z" }),
  Object(preact_min["h"])("path", { d: "M768 768c-6.552 0-13.102-2.499-18.101-7.499-9.998-9.997-9.998-26.206 0-36.203l186.698-186.698-186.698-186.699c-9.998-9.997-9.998-26.206 0-36.203 9.997-9.997 26.206-9.997 36.203 0l204.8 204.8c9.998 9.997 9.998 26.206 0 36.203l-204.8 204.8c-5 5-11.55 7.499-18.102 7.499z" }),
  Object(preact_min["h"])("path", { d: "M383.976 768.003c-4.634 0-9.325-1.258-13.544-3.894-11.989-7.494-15.634-23.288-8.141-35.278l256-409.6c7.493-11.984 23.283-15.634 35.278-8.141 11.989 7.494 15.634 23.288 8.141 35.278l-256 409.6c-4.858 7.77-13.202 12.035-21.734 12.035z" })
), Object(preact_min["h"])("use", { xlinkHref: "#code", x: "38", y: "50", width: "60", height: "60", fill: "#6f2525" })];

var bubble = [Object(preact_min["h"])(
  "symbol",
  { id: "bubble", viewBox: "0 0 1024 1024" },
  Object(preact_min["h"])("path", { d: "M25.6 972.8c-11.507 0-21.6-7.677-24.67-18.766s1.634-22.864 11.501-28.784c86.57-51.942 122.485-127.414 135.218-162.755-94.088-72.048-147.648-171.746-147.648-276.094 0-52.704 13.23-103.755 39.323-151.736 24.902-45.794 60.406-86.806 105.526-121.899 91.504-71.17 212.802-110.365 341.55-110.365s250.046 39.195 341.552 110.366c45.118 35.093 80.624 76.104 105.526 121.899 26.091 47.979 39.322 99.030 39.322 151.734 0 52.702-13.23 103.755-39.322 151.736-24.902 45.794-60.408 86.806-105.526 121.899-91.506 71.17-212.803 110.365-341.552 110.365-52.907 0-104.8-6.627-154.437-19.707-21.974 14.637-63.040 40.605-112.086 65.005-76.163 37.89-141.528 57.102-194.277 57.102zM486.4 153.6c-239.97 0-435.2 149.294-435.2 332.8 0 92.946 51.432 182.379 141.107 245.368 8.797 6.178 12.795 17.194 10.013 27.576-5.984 22.325-26.363 83.597-80.878 142.734 66.659-23.341 138.424-63.832 191.434-100.286 6.296-4.328 14.197-5.621 21.544-3.52 48.558 13.888 99.691 20.928 151.981 20.928 239.97 0 435.2-149.294 435.2-332.8s-195.23-332.8-435.2-332.8z" })
), Object(preact_min["h"])("use", {
  xlinkHref: "#bubble",
  x: "38",
  y: "50",
  width: "60",
  height: "60",
  fill: "#6f2525"
})];

var fontina = [Object(preact_min["h"])(
  "symbol",
  { id: "fontina", viewBox: "0 0 512 512" },
  Object(preact_min["h"])("path", { d: "M205.187,266.206c-21.597,0-39.167,17.571-39.167,39.167c0,21.596,17.57,39.167,39.167,39.167 s39.167-17.571,39.167-39.167C244.354,283.777,226.784,266.206,205.187,266.206z M205.187,324.14 c-10.349,0-18.769-8.419-18.769-18.769c0-10.349,8.419-18.769,18.769-18.769s18.769,8.419,18.769,18.769 C223.956,315.721,215.536,324.14,205.187,324.14z" }),
  Object(preact_min["h"])("path", { d: "M509.013,312.88L263.213,67.079c-3.984-3.981-10.441-3.981-14.425,0L2.987,312.88c-3.983,3.984-3.983,10.442,0,14.425 l26.974,26.974C90.338,414.655,170.614,447.907,256,447.907c85.387,0,165.662-33.25,226.04-93.628l26.974-26.974 C512.996,323.321,512.996,316.863,509.013,312.88z M467.613,339.855c-56.523,56.524-131.677,87.653-211.614,87.653 s-155.09-31.128-211.614-87.653l-19.762-19.762L256,88.717l231.375,231.376L467.613,339.855z" }),
  Object(preact_min["h"])("path", { d: "M381.634,307.918c14.381,0,26.08-11.701,26.08-26.08c0-14.38-11.701-26.08-26.08-26.08s-26.08,11.701-26.08,26.08 C355.553,296.218,367.253,307.918,381.634,307.918z M381.634,276.156c3.133,0,5.682,2.549,5.682,5.682 c0,3.133-2.549,5.682-5.682,5.682s-5.682-2.549-5.682-5.682C375.952,278.705,378.5,276.156,381.634,276.156z" }),
  Object(preact_min["h"])("path", { d: "M232.504,184.752c0,16.359,13.31,29.669,29.67,29.669s29.669-13.31,29.669-29.669c0-16.36-13.31-29.669-29.669-29.669 C245.814,155.082,232.504,168.392,232.504,184.752z M262.173,175.481c5.112,0,9.271,4.159,9.271,9.271 c0,5.112-4.159,9.271-9.271,9.271s-9.271-4.159-9.271-9.271C252.902,179.64,257.062,175.481,262.173,175.481z" })
), Object(preact_min["h"])("use", {
  xlinkHref: "#fontina",
  x: "38",
  y: "50",
  width: "60",
  height: "60",
  fill: "#6f2525"
})];

var sudoku = [Object(preact_min["h"])(
  "symbol",
  { id: "sudoku", viewBox: "0 0 463 463" },
  Object(preact_min["h"])(
    "g",
    { transform: "translate(0 -540.36)" },
    Object(preact_min["h"])("path", { d: "M57.2,605.16H92l-28.3,37.8c-2.5,3.3-1.8,8,1.5,10.5c1.4,1,2.9,1.5,4.5,1.5c2.3,0,4.5-1.1,6-3l37.3-49.8 c1.7-2.3,2-5.4,0.7-7.9s-3.9-4.1-6.7-4.1H57.2c-4.1,0-7.5,3.4-7.5,7.5S53.1,605.16,57.2,605.16z" }),
    Object(preact_min["h"])("path", { d: "M350.6,652.76c1.5,1.5,3.4,2.2,5.3,2.2c1.9,0,3.8-0.7,5.3-2.2l19.6-19.6l19.6,19.6c1.5,1.5,3.4,2.2,5.3,2.2 c1.9,0,3.8-0.7,5.3-2.2c2.9-2.9,2.9-7.7,0-10.6l-19.6-19.6h0l19.6-19.6c2.9-2.9,2.9-7.7,0-10.6c-2.9-2.9-7.7-2.9-10.6,0 l-19.6,19.6l-19.6-19.6c-2.9-2.9-7.7-2.9-10.6,0c-2.9,2.9-2.9,7.7,0,10.6l19.6,19.6l-19.6,19.6 C347.7,645.06,347.7,649.86,350.6,652.76z" }),
    Object(preact_min["h"])("path", { d: "M350.6,951.36c1.5,1.5,3.4,2.2,5.3,2.2c1.9,0,3.8-0.7,5.3-2.2l19.6-19.6l19.6,19.6c1.5,1.5,3.4,2.2,5.3,2.2 c1.9,0,3.8-0.7,5.3-2.2c2.9-2.9,2.9-7.7,0-10.6l-19.6-19.6h0l19.6-19.6c2.9-2.9,2.9-7.7,0-10.6c-2.9-2.9-7.7-2.9-10.6,0 l-19.6,19.6l-19.6-19.6c-2.9-2.9-7.7-2.9-10.6,0c-2.9,2.9-2.9,7.7,0,10.6l19.6,19.6l-19.6,19.6 C347.7,943.66,347.7,948.46,350.6,951.36z" }),
    Object(preact_min["h"])("path", { d: "M82.8,961.66c12.8,0,23.7-10.8,23.7-23.7c0-6.2-2.6-12-6.7-16.3c4.1-4.4,6.7-10.5,6.7-17.3v0c0-12.8-10.8-23.7-23.7-23.7 c-13.7,0-24.9,10.6-24.9,23.7c0,6.9,2.5,13,6.8,17.4c-4.2,4.2-6.8,9.9-6.8,16.2C57.9,951.06,69.1,961.66,82.8,961.66z M82.8,895.66c4.5,0,8.7,4.1,8.7,8.7c0,5.5-3.9,9.9-8.7,9.9c-5.9,0.1-9.9-4-9.9-9.9C72.9,899.56,77.4,895.66,82.8,895.66z M82.8,929.26c4.5,0,8.7,4.1,8.7,8.7c0,4.6-4.2,8.7-8.7,8.7c-5.5,0-9.9-3.9-9.9-8.7S77.4,929.26,82.8,929.26z" }),
    Object(preact_min["h"])("path", { d: "M57.3,796.16h29.8v8.7c0,4.1,3.4,7.5,7.5,7.5c4.2,0,7.5-3.4,7.5-7.5v-8.7h4.9c4.1,0,7.5-3.4,7.5-7.5s-3.4-7.5-7.5-7.5 h-4.9v-42.3c0-3.2-2-6.1-5.1-7.1c-3.1-1-6.5,0-8.4,2.6l-37.3,49.8c-1.7,2.3-2,5.4-0.7,7.9C51.9,794.56,54.5,796.16,57.3,796.16z M87.1,761.36v19.8H72.3L87.1,761.36z" }),
    Object(preact_min["h"])("path", { d: "M201.3,802.06c1.5,1.5,3.4,2.2,5.3,2.2c1.9,0,3.8-0.7,5.3-2.2l19.6-19.6l19.6,19.6c1.5,1.5,3.4,2.2,5.3,2.2 c1.9,0,3.8-0.7,5.3-2.2c2.9-2.9,2.9-7.7,0-10.6l-19.6-19.6h0l19.6-19.6c2.9-2.9,2.9-7.7,0-10.6c-2.9-2.9-7.7-2.9-10.6,0 l-19.6,19.6l-19.6-19.6c-2.9-2.9-7.7-2.9-10.6,0c-2.9,2.9-2.9,7.7,0,10.6l19.6,19.6l-19.6,19.6 C198.4,794.36,198.4,799.16,201.3,802.06z" }),
    Object(preact_min["h"])("path", { d: "M231.5,654.96c4.1,0,7.5-3.4,7.5-7.5v-49.8c0-4.1-3.4-7.5-7.5-7.5c-4.1,0-7.5,3.4-7.5,7.5v49.8 C224,651.56,227.4,654.96,231.5,654.96z" }),
    Object(preact_min["h"])("path", { d: "M455.5,540.36L455.5,540.36H306.2H156.9H7.5c-4.1,0-7.5,3.4-7.5,7.5v149.3v149.3v149.4c0,4.1,3.4,7.5,7.5,7.5h149.3 h149.3h149.4c4.1,0,7.5-3.4,7.5-7.5v-149.3v-149.3v-149.4C463,543.76,459.6,540.36,455.5,540.36z M149.3,988.36H15v-134.3h134.3 V988.36z M149.3,838.96H15v-134.3h134.3V838.96z M149.3,689.66H15v-134.3h134.3V689.66z M298.7,988.36H164.4v-134.3h134.3V988.36 z M298.7,839.06H164.4v-134.3h134.3V839.06z M298.7,689.66H164.4v-134.3h134.3V689.66z M448,988.36H313.7v-134.3H448V988.36z M448,839.06H313.7v-134.3H448V839.06z M448,689.66H313.7v-134.3H448V689.66z" })
  )
), Object(preact_min["h"])("use", {
  xlinkHref: "#sudoku",
  x: "38",
  y: "50",
  width: "60",
  height: "60",
  fill: "#6f2525"
})];

var frappe = [Object(preact_min["h"])(
  "symbol",
  { id: "frappe", viewBox: "0 0 470 470" },
  Object(preact_min["h"])(
    "g",
    null,
    Object(preact_min["h"])("path", { d: "m157.677,259.237c7.171,0 10.388,2.405 14.839,5.733 5.195,3.885 11.662,8.719 23.82,8.719 12.158,0 18.625-4.834 23.82-8.719 4.451-3.328 7.667-5.733 14.838-5.733 7.172,0 10.389,2.405 14.841,5.733 5.196,3.885 11.663,8.719 23.822,8.719 12.16,0 18.626-4.834 23.823-8.719 4.452-3.328 7.669-5.733 14.841-5.733 4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-12.16,0-18.626,4.834-23.823,8.719-4.452,3.328-7.669,5.733-14.841,5.733s-10.389-2.405-14.841-5.733c-5.196-3.885-11.663-8.719-23.823-8.719-12.159,0-18.625,4.834-23.821,8.719-4.451,3.328-7.667,5.733-14.838,5.733s-10.387-2.405-14.838-5.733c-5.196-3.885-11.663-8.719-23.821-8.719-4.142,0-7.5,3.358-7.5,7.5s3.36,7.5 7.502,7.5z" }),
    Object(preact_min["h"])("path", { d: "m362.5,154.237h-8.73c-2.823-45.961-31.459-86.142-74.568-103.684-0.898-0.365-1.858-0.553-2.827-0.553h-34.875v-27.5c0-4.136 3.364-7.5 7.5-7.5h45c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-45c-12.407,0-22.5,10.093-22.5,22.5v27.5h-34.875c-0.969,0-1.929,0.188-2.827,0.553-43.108,17.542-71.745,57.723-74.568,103.684h-6.73c-4.142,0-7.5,3.358-7.5,7.5v30c0,4.142 3.358,7.5 7.5,7.5h8.107l18.932,224.024c0.001,0.008 3.369,39.87 3.369,39.87 0.328,3.884 3.576,6.869 7.473,6.869h179.237c3.897,0 7.145-2.985 7.473-6.869l22.301-263.894h8.107c4.142,0 7.5-3.358 7.5-7.5v-30c0.001-4.142-3.357-7.5-7.499-7.5zm-169.382-89.237h33.382v22.375c-16.063,2.727-29.561,14.053-34.97,29.466-20.877,1.409-37.884,17.125-41.301,37.397h-20.966c2.766-39.351 27.169-73.731 63.855-89.238zm40.882,36.737c14.251,0 26.621,10.125 29.413,24.075 0.74,3.699 4.115,6.272 7.876,6.01 0.829-0.058 1.502-0.085 2.12-0.085 13.953,0 25.712,9.575 29.051,22.5h-136.92c3.339-12.925 15.097-22.5 29.051-22.5 0.618,0 1.292,0.027 2.12,0.085 3.759,0.261 7.137-2.312 7.876-6.01 2.792-13.95 15.162-24.075 29.413-24.075zm83.726,353.263h-165.452l-2.113-25h147.837c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-149.104l-18.234-215.763h208.68l-21.614,255.763zm37.274-270.763h-7.629c-0.013,2.84217e-14-232.371,2.84217e-14-232.371,2.84217e-14v-15h201.5c4.142,0 7.5-3.358 7.5-7.5 0-3.701-2.683-6.768-6.209-7.381-3.37-20.329-20.404-36.104-41.322-37.516-5.408-15.413-18.907-26.739-34.97-29.466v-22.374h33.382c39,16.485 64.118,54.298 64.118,96.737 0,4.142 3.358,7.5 7.5,7.5h8.5v15z" })
  )
), Object(preact_min["h"])("use", {
  xlinkHref: "#frappe",
  x: "28",
  y: "41",
  width: "80",
  height: "80",
  fill: "#6f2525"
})];

var lock = [Object(preact_min["h"])(
  "symbol",
  { id: "lock", viewBox: "0 0 512 512" },
  Object(preact_min["h"])(
    "g",
    null,
    Object(preact_min["h"])("path", { d: "M256 114c-36 0-65 31-65 69v41h-6c-14 0-26 11-26 26v121c0 15 12 27 26 27h142c14 0 26-12 26-27V250c0-15-12-26-26-26h-6v-41c0-38-29-69-65-69zm0 30c20 0 37 18 37 39v41h-74v-41c0-21 17-39 37-39zm44 115l19 20-48 48-15 15-8 8-40-41 23-23 21 21 48-48z" })
  )
), Object(preact_min["h"])("use", { xlinkHref: "#lock", x: "28", y: "41", width: "80", height: "80", fill: "#6f2525" })];

var brainBookshelf = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 250 160",
    style: "width:250px"
  },
  Object(preact_min["h"])(
    "defs",
    null,
    Object(preact_min["h"])(
      "clipPath",
      { id: "a" },
      Object(preact_min["h"])("path", { d: "M110.2-.4h991.7v675.7H110.2z" })
    )
  ),
  Object(preact_min["h"])(
    "g",
    { transform: "translate(0 -137)", fill: "#7c2929" },
    Object(preact_min["h"])("rect", {
      width: "250",
      height: "10",
      y: "-297",
      rx: "5",
      ry: "5",
      transform: "scale(1 -1)"
    }),
    Object(preact_min["h"])("rect", { width: "150", height: "10", y: "207", rx: "5", ry: "5" }),
    Object(preact_min["h"])("path", { d: "M9.1 148.1h19.8v57.7H9.1zM29.4 155.6h5.3v50.2h-5.3zM35.3 141.5h12.3v64.4H35.3zM48.1 148.1h12.3v57.7H48.1zM60.9 143.9h15v62h-15zM76.2 153l11.1-5.3 24.4 52.3-11.1 5.2z" }),
    Object(preact_min["h"])("path", {
      "fill-rule": "evenodd",
      d: "M804.7 421c-12.4 2.8-31.3 4-37.4 17.6-15.5 24.7-51.1 114.3-8 126.2 14.2-12 25.4-27.7 42.5-37.1H877.7c17.1 9.4 28.3 25 42.4 37 43.2-11.8 7.6-101.4-7.9-126.1-6-13.6-25-14.8-37.4-17.5l-8 5.6h-54.2zm86.8 23c3.6 0 6.5 3 6.5 6.8s-3 6.8-6.5 6.8c-3.6 0-6.5-3-6.5-6.8 0-3.7 2.9-6.8 6.5-6.8zm-103.2 10.6c5.2 0 9.4 4.4 9.4 9.8s-4.2 9.8-9.4 9.8a9.6 9.6 0 0 1-9.4-9.8c0-5.4 4.2-9.8 9.4-9.8zm89.5 3.4c3.6 0 6.5 3 6.5 6.8 0 3.7-2.9 6.8-6.5 6.8s-6.5-3-6.5-6.8 3-6.8 6.5-6.8zm28.2 0c3.5 0 6.5 3 6.5 6.8 0 3.7-3 6.8-6.5 6.8-3.6 0-6.5-3-6.5-6.8s2.9-6.8 6.5-6.8zm-80.5 3.4c1.8 0 3.3 1.5 3.3 3.4 0 1.8-1.5 3.4-3.3 3.4a3.3 3.3 0 0 1-3.2-3.4c0-2 1.4-3.4 3.2-3.4zm29 0c1.8 0 3.2 1.5 3.2 3.4 0 1.8-1.4 3.4-3.2 3.4a3.3 3.3 0 0 1-3.3-3.4c0-2 1.5-3.4 3.3-3.4zm37 10.2c3.6 0 6.5 3 6.5 6.7 0 3.8-3 6.8-6.5 6.8-3.6 0-6.5-3-6.5-6.8 0-3.7 2.9-6.7 6.5-6.7zM810.9 486h6v9.4h8.9v6.2h-9v9.3H811v-9.3h-9v-6.2h9zm55.1 1c5.2 0 9.4 4.4 9.4 9.8s-4.2 9.8-9.4 9.8a9.6 9.6 0 0 1-9.4-9.8c0-5.4 4.2-9.8 9.4-9.8z",
      "clip-path": "url(#a)",
      transform: "matrix(.26458 0 0 .26458 -192.9 136.2)"
    }),
    Object(preact_min["h"])("path", { d: "M58.1 244h4v42h-4zM62.5 244h4v42h-4zM67 244h4v42h-4zM71.4 244h4v42h-4zM76 244h4v42h-4zM80.4 244h4v42h-4zM84.9 244h4v42h-4zM89.3 244h4v42h-4zM93.8 244h4v42h-4zM98.2 244h4v42h-4zM103.2 238.9h4V286h-4zM107.6 234.3h10.1v51.6h-10.1zM118.3 238.9h6.7V286h-6.7zM125.5 238.9h6.7V286h-6.7zM132.7 236.2h15.2V286h-15.2z" }),
    Object(preact_min["h"])("path", {
      "fill-rule": "evenodd",
      d: "M199.2 159.7a172 172 0 0 0-27.7 2.3c-1.9.4-3.8.8-5.5 1.6l-2.2 1.1c-.6.4-1 .9-1 1.5-.1.5-.6 1-.3 1.5v.2c-.4.9-.3 1.7 0 2.5-.9 1.2-.9 1.5 0 2.7-.3.4-1 .7-1 1.4-.1.6.6.9 1 1.3-.9.9-.8 1.7 0 2.6l-.6.6c-.5.5-.6 1-.3 1.4l1 1 1.5.9-.4 1c-.6 1-1.4 2-2.2 3l-3.3 3.3a31.8 31.8 0 0 0-3.4 4c-1 1.5-1.4 3-1.4 4.7v66.2c0 2.2.5 4.2 1.6 6.1a33 33 0 0 0 17 13.4c2.8 1.2 5.9 1.7 9.1 1.6h34.7c3 0 5.8-.4 8.5-1.4a33.4 33.4 0 0 0 17.2-13.2c1.2-2 1.8-4.1 1.8-6.4v-66.5c0-1.4-.4-2.8-1.2-4-.8-1.4-1.8-2.6-3-3.8l-3.7-3.9a15 15 0 0 1-2.4-3.3l-.4-1 1-.5 1-.9c.7-.7.6-1.2-.1-1.8l-.6-.5c1-1 1-1.8 0-2.6 1.5-1.2 1.5-1.2 0-2.7 1-1.2 1-1.5.2-2.6l.1-1.3c.2-.7-.2-1.3-.1-2 0-.3-.2-.6-.3-.8 0-.7-.4-1.2-1-1.6l-1.6-1a79.4 79.4 0 0 0-16-3.4 160.2 160.2 0 0 0-16-.7zm29 9.6l1.6.1.7.2c-.3.4-.7.4-1 .5l-4.5.6a202 202 0 0 1-17 1l-10.5-.3h-2.4l-.5-.3h1.4c2.1-.2 4.2-.2 6.4-.3l9.5-.6 9-.6 7.4-.3zm-60.2 1l2.4.4 10.3 1.4 7.5.6 6.8.3c.1 0 .3 0 .4.2h-.4c-4.7.2-9.5.2-14.2-.3-2.5-.3-5-.7-7.3-1.2-1.6-.2-3.2-.6-4.7-1-.3 0-.6 0-.8-.2v-.1zm61.8 3.8h1.8l-.4.3-1.6.5a100 100 0 0 1-25 1.5c-2.6-.1-5.1-.4-7.6-.6l-1.4-.1v-.1h1.7a106 106 0 0 0 19.1-.4l13-1.1h.4zm-61.2 1l.8.2 6.1 1.6c4.2 1 8.5 1.7 12.8 2l4.6.3h.6v.2h-.9c-2 0-4.1 0-6.1-.2-2.3-.2-4.5-.3-6.7-.8a88.6 88.6 0 0 1-11.2-3.2zm63.8 1h.4c-.3.3-.6.4-1 .5l-4.4 1.2c-5 1-10 2-15.2 2.5a55.7 55.7 0 0 1-15.4-.4l-.7-.3v-.1l1-.3 5.4-.3h5.9c5-.1 9.8-.6 14.7-1.3l8.4-1.5h1zm-1.5 2.8h.2c-.2.2-.4.2-.7.3-2.9.9-5.8 1.5-8.8 2a1251.8 1251.8 0 0 0-7.7 1.6l-.6.3c.2.4.5.3.8.3 1 0 1.9-.1 2.8-.3l13.5-2.4 1.2-.2h.7l-1 .5-5.4 1.5a134.7 134.7 0 0 1-28.8 2.7c-9-.2-17.7-1-26.4-2.7l-5.2-1.3-1-.3.1-.1 1.1.2 4.9 1.1c4 .8 8 1.3 12 1.6H185.7c-.2-.4-.5-.4-.8-.5l-3.6-.8-12-2.3-2.1-.4-.7-.2v-.2l1.4.1 7.1 1.3a136.5 136.5 0 0 0 27.6 2.2c4.8-.3 9.4-.8 14-1.5A301.4 301.4 0 0 0 231 179zm2 2.9l-1 .9-.9.5.4.9c.6 1.2 1.4 2.2 2.4 3.3l3.5 3.7 2.9 3.7a7.6 7.6 0 0 1 1.1 4 45219.6 45219.6 0 0 0-.2 67.4l-.3 1.3a12 12 0 0 1-1.3 2.6 28.9 28.9 0 0 1-5.8 6.7v.3h-.4a32.1 32.1 0 0 1-10.2 5.8c-1 .4-2 .8-3.2 1h-.5c-1.4.3-2.9.5-4.4.5h-33.1c-3.1 0-6-.5-8.8-1.6-3.8-1.5-7-3.4-9.8-5.7h-.3v-.2a28 28 0 0 1-6-7.2c-.5-.7-.8-1.4-1-2l-.1-.3-.2-.6h-.1v-.7c-.2-.7-.3-1.6-.3-2.4V199a8 8 0 0 1 1.4-4.6c1-1.4 2-2.7 3.3-4l3-3.3a14 14 0 0 0 2.2-2.9l.4-.9c8-.3 38.4 7.2 67.4-1.5zm-2.8 95.3v0z",
      "clip-rule": "evenodd"
    }),
    Object(preact_min["h"])("path", { d: "M193.7 189.3c-.8 0-1.6.2-2.4.4-1 .7-2.5 1-2.9 2.9-1.4.1-2.8.7-4.2.7-1.4 0-2.8.4-4 1.2l-4 3.7c-1.3.7-1 3.4-2.7 3a6.7 6.7 0 0 0-3.3 3c-.5 1.9-1.6 2.5-2.7 3.5-1 1.4-2.7 2.7-1.8 5-.3 1.8-2 2.7-2.2 4.8.8 2.2-1.6 1.8-1.4 4 .2 1.8-.3 3.3-1 4.8.4 1.6 0 2.9-.9 4-.7 1.8.8 3.9 0 5.4-.4 2-.3 4.1-.1 6.1.6 1.8.9 3.8 1.4 5.7.6 1.8 1.3 3.6 2.9 4.2.4 1.7 2 2.3 3.3 1.7 1.6-1 .3 1.8.5 2.8a19 19 0 0 0 1.2 4.9c.8 1.2 1.7 2.4 2.6 3.4 1 1.3 2.7 1.5 3.4 3.2.8 1.6 2.8.6 3.3 2.1 1 1.8 2.6.7 3.8 1.6 1.3 1.2 2.7-.2 4 .6 1.2.8 2.6.7 3.9.3 1-.8 1.3 0 1.1 1.3.2 1.7-.2 3.5 0 5.1-.2 2 .6 3.6 2.1 3.7 1.2 0 2.6-.3 3-1.9.4-2 .4-4.2.7-6.3.4-2 .5-3.9 1.6-5.4 1.2-2.2 2.9-4.7 2.5-7.7.7-1 2.3-1.8 2.7-3.6 1.2-1.9 1.8-4.3 2.9-6.2 1.3.6 2.7 1.4 4.1 1.2 1.3-.3 2.7-.9 3.9-1.7.5-2 2.2-1 3.4-2 1.6-.5 2.5-2.4 3.4-4 .7-1.5 1.9-3 2-4.9.3-2 .4-4.2 0-6.2-.7-1.6.4-1.2 1.2-1.2 1.5 0 3-.2 4.5-.4 1-.8 2.6.2 3.5-1.4 1.1-.6 2.5-.7 3.3-2.2 1.8-.5 2.6-2.9 3.2-5 .6-1.8.9-3.8 1-5.9-.3-1.7-.1-4-1.3-5.3 0-2.6-1-5.1-2.6-6.7-.4-1.9-1.5-3.6-2.9-4.3-.4-1.7-2.6-.5-2.3-2.2a8.5 8.5 0 0 0-3-3.6c-1.1-.7-2.6 0-3.5-.9-1.2-1.3-2.7-1.5-4.1-1.9-1.3 0-2.6-.8-3.7-.9-1-.7-2.5-1.8-3.4-.3-.9-.3-2.1-2-3.5-1.5-1.5.3-3-.7-4.4-.5-1.2-.6-2.6 1.3-3.5.7-1.4-.5-3.1-.6-4.5 0-1.3-.6-2.7-.9-4-.9zm0 .6l1.7.2c.3 1.2-2 1.2-2.7 1.8-.5.2-1 .1-1.4.2-1 .4-1.4-1-.3-1.3.8-.6 1.8-.9 2.7-.9zm13.4.4c.5 0 1 0 1.7.3 1-.1.7.6 0 1-1.1.2-2.6-.4-3.9-.2-1 .4-2-.7-.5-.9l2.7-.2zm-8.2.3c.6 0 1.3.4 1.5 1 .1 1.4.7 1 1.4.6 2.2.4 4.3 0 6.4.4 1.5.4-.5 1.1 0 2 1 .2 1.6.9 1.5 2.3 1 1.2.6-1.7.9-2.4.7-1.4-.2-2-1.2-1.6-.8-1.1 1.7-2.4 2.2-1.4.6 1.3.5 3.1 1.2 4.4-.7.7-.3 2-1 2.8-1.6 1.6.6 2.6 1.3 3.4 0 1.1-3.3-.3-2.2 1.4 1.5.2 1.6 2.1 1.9 3.7 1.4.8.3-3 1.7-3.5 1 .6.6 3.2.4 4.5 1 1.4.7-1.9 1.9-1.8 1.3-1 2.3 3 .5 2.6-1.7 1.1.6 1.4 1 2.5.5-1.2 1.6-.8 1.6.6.1 1.7-.8 2.6-1.6 3.8-.3.5-.7.4-1 .2-1.7-.2-2.2-2.3-1.9-4.1-1.6-.8 0 2.4-.7 3.3-.5 1.8-1.3-1.6-1-2.5 1.6-1.4-1.4-2.3-1-4.3-1-.6-1.9-2.6-2.7-4-1-1.3.8-1.4.1-2.6a7.7 7.7 0 0 1-2.3-4.7 7.8 7.8 0 0 0-2.9-3.5 7.7 7.7 0 0 0-3.8-.2c-1 .3-2.8-.2-3-1.8-.4-.8.2-1.1.8-1.1zm15.6 1.4c.6 0 .8.5.9 1.1-.3.3-.6.2-.8 0-.7-.6-.4-1 0-1.1zm-19.9.2c.7 0 1.3.7.6 1.8-.6 1.4 1.3 2 .6.4 1-2 2.7.2 4 .2 1.6.1 2.9 3.2 1 4h-.1c-1.2-.2-2.5.1-3.6-.7-1.5-.4-2.6-.9-4-1.5-1.8-.8-.4-3.2.7-4l.8-.2zm-4.4 1.4c.6 0 2 2.8.1 2.7-1.2-.4-2.9 1.6-3.6.1-.9 1.2-2.7.5-3.7 2-1 .8-.3 2.2.7 1.3.8 1.3-.8 2.8-1.8 3 0 .2-.3.2-.4.1-1.8-1.5.4-4 1.3-5.3.6-1.7 2-2.3 3.2-3.2 1-.8 2.3-.8 3.3.1.6 1.2 1.8.4.7-.6 0-.2.2-.2.2-.2zm33 .5h.2c1.2 0 1.9 2.2 1.6 3.5-.7.5-1.1-.2-1.7-.6-.1-.5-1-2.8-.2-3zm-41.9.7c.2 0 .5.1.7.3.7 1.3-.8 3.5-1.8 4-1.2 1-2.7.8-4 1.8-.2.4-.3-.6-.2-.7 0-1.9 1.5-2.5 2.5-3.1.8-.8 1.8-2.3 2.8-2.3zm37.6.4h.2c1.2.9.7 2.4-.5 2.8-1.4 0-1-2.7.2-2.8zm-3.8 0l.2.1c1.3.7 1.3 3.3.8 4.8-.5.6-1.2 0-1.4-.6-.6-1-.8-4.2.4-4.2zm-10.8.1c.5 0 1 .3 1.3 1.1 1.5 2.6-2.2 1.7-1.8 4.1 1.2 0 2 .8 3 1.8-.2 1.7-1.8 2.4-2.3 4-1 1.6-.6 3.6-1.6 5.1-1 .7-2 1.5-3 2-.5.5-1.2.7-1.8.3-1.6 0 1-3-.6-2.2-.8 2-2.3.4-2.7-1 .3-1.8.6-3.7 1.5-5.2 1-1.3 1.6-3 2.1-4.6.2-2 .7.2 1.4 0 1-.4.5 1.1 1.3 1.3.3 1.6.1 4-1.1 4.8-1 .4-2 3-.3 2.7 1.2.2.4-1 1-1.9 1.1-1.3 1.2-3.6 1-5.6-.3-2 1.5-3 1.7-5 0-1 .4-1.6 1-1.7zm23.2.8l.6.3c1 1.2 1 3 1 4.6.7-.1 1.4 1.5 1.5 0 .7.2 1.6-.6 2.3.1.7.1 1 1.9 0 1.1-1.4-.7.4 1.8-.3 2.6-.5 1.5-1-1.4-1.5-1.5-.8-.7-1.7-2.4-2.4-1.9-.4.2-.8 0-1.2-.9-1-.8-1.3-4.4 0-4.4zm-35.4 1c1.1 0 2 1 3.3 1 1.6 0 3.1 2.3 1.6 4-.5 2.4-2.5 1.7-3.8 2.6-1.2.4-.3 1.3.3 1.5 1.6.9.2 3.2-.7 3.9-.4 1.4-1.4 2.7-2.6 2.9-.7.2-2.4.5-2.5-.9.2-.9 0-2.3-.8-1-1 .8-2.9 1.6-2.5-.9 0-1.5-.1-3.9 1.3-4.2.8-1-.2-2-.7-.7-.9.3-1.1-3.3.1-3.5 1.4-.2.4-1.4 0-2-.8-2.3 1.5-1.7 1.7 0 1 1.6-.5 3.8.2 5.1 1-.4 0-3.5 1.7-3.8 0-2 1-3.5 2.6-3.8l.8-.1zm30.8.3c.2 0 .3 1 .2 1.6-.4 1.9-1 3.4-1.2 5.4-.4 1.8.8.4 1-.4.6-2.2 2.7-2.5 4.1-1.8.8-.1 1.8 2.9 1.8 1-.6-1.6.3-.6 1-.2.6 1.4.7 3.3-.1 4.6-.3.7-1 .2-1.3-.3-1.7-.3 0-3.9-1.6-3.4-.9-.1-1.8.4-1.1 1.7-1 1.5-2.8 1.8-4 1.3-1-1.4-3.3-2.7-2-4.8.4-1.9 2.1-2.3 2.8-4 .2-.5.3-.8.4-.7zm-5.5 2.8c.9 0 1.3 1.3.3 2-.3.4-.6 1-1 1-1.8-.4.1-1.8.2-2.8.2-.2.4-.2.5-.2zm-24.7.8c-.7 0-1.8 1-2.2 1.5-.5-.5-1.6-.5-1.3.8 1.4 2.4-1.7 3.3-1.6 5.2.8.4 1.1-1.8 2.1-1.3 1.6 1.2.4-1.4.8-2.3 0-2 1.4-3.5 2.9-3.1 0-.7-.3-.9-.7-.8zm-14.5 0c.5 0 1 .2 1.2.4 1.5 1.3 0 4.1-1.1 4.5-1.2.6-1.8-1.4-2.2-2.4-.3-1.6.8-2.4 2-2.4h.1zm-3.3.7c.6.1 0 1.2-.5 1.7-1 1.2-1.5 3-2.9 3.7v.2c-.8.1-1.5-2.6-.7-3 1-1 2.2-2.2 3.5-2.4l.6-.2zm59.4 1c.7 0 2 3 .5 2.6-1 .6-2.1-2-.7-2.3 0-.2.1-.3.2-.3zm-52.2 1.4c1.2 0 2 2.4 1.1 3.8-.9 2-2.3.6-3.5 1-.5 0-1 .5-1-.6 0-2 1.5-3.1 2.7-4a1.3 1.3 0 0 1 .7-.2zm-7.7.5h.4c1.6.3 2.3 3.2 1.6 5 0 1.9-1.8 2.7-2.7 3.8-.5.1-1 .2-1.4-.2-1.2.1-1.4-2.5-.4-3.3.7-2 2.1-.3 2.3 1.2 1.5 1.4.3-2.5-.3-3-1-.8-.6-3.4.5-3.5zm59.4 2l.4.1c1.6.5 1.4 3.4 1.6 5.1-.1.9-.7-.5-.5-.7-.4-.7-1.2-1.8-1-3.2-1 .2-1.1-1.3-.5-1.4zm-27.8.1c.3 0 .7.3.8 1 1.2.5 2 2.3 3.2 2.9 1.3.2 2 2.2 2 3.8-.5 1.7-1.8 2.5-3.1 2.8l-.7.3c-2 .3-.4-2.4.1-3.5 1.1-1 .2-2.1-.7-1.2-.5 1.3-1.4 2.4-2.7 2.8-1.2 1.2-3.6-1.3-1.7-2.3 0-2 1.3-3.5 2.2-5-.5-1 0-1.6.6-1.6zm-37 .6c.3 0 .6.1.8.4-.3 1.5-1 2.8-1.6 4.2-.3.5-.7 1.5-1.1.6-1.9.2-1.3-2.7-.2-3.5.6-.8 1.3-1.7 2-1.7zm57.5.1c.8 0 1.5.2 2.1.7.2 2.7-2.2.7-3.2 2-1.2.1-1 3.2-.2 1.1.8-.4 1.6-.2 2.6-.4 1.9-.4 2.8 1.8 2.2 3.9 0 1.5-.2 4.7-1.9 4.2-.6-1.5 0-3.6 0-5.3-.5-2.6-1.2.7-2.3.3-1.3-1.4-2 .8-1.4 2.3 1 1.2.5 3.3-.8 3.5-1.2.5 0 3 .4 1.2.9-1.5 2.6 1.3 2 2.8 0 2.1-1.6 1.8-2.3.4-.1-2.2-.9-.2-1.2.7-.6.6-1.3.7-1.9.3.2-.4-1.2-1.6-.8-2.6.3-.9.8.5 1.6 0 1-.8-1-.8.2-2 .4-1.9 0-4 1.2-5.6-.5-1-1.4-2-1.2-3.5-.3-2.3 1.4-3 2.7-3.4.7-.3 1.5-.6 2.2-.6zm10.3.2c1 .4 1.4 2.7 1.6 4-1 .9-.4 3-1 4.6-1.2.5-.6-3.3-.2-4.1.4-1.6-1-2.8-.4-4.5zm-5.3 1c.4 0 .9.3 1.2 1 .7 1.2 1 3 0 4.1-1.2.3-2-1.5-2.1-2.8-.4-1.3.2-2.3.9-2.3zm-60.3.2c.1 0 .3 0 .4.2-.6 1.6-1.7 3.4-1.2 5.3-.4 1.5-1.3 3.1-1.7 4.8-.7 1.1-1.5-.4-1.5-1.3-.1-2 1-3.7 1.3-5.7.4-1.3 1.6-3.2 2.7-3.3zm9.7.7h.4c0 1.4 1.9 0 2 1.5.3 2.5-2 2.5-3.2 2.4-1.5-1.9-.8 1.5-1.5 2.3-.4 1.8-2.3 2.5-2 4.2 1 0 1-2.6 2.3-2.8 1-1.2 3.4-2 3.8.3-.3 2-2 2.9-3 4.1-1.1.7-1.8 2.3-2.8 3.2-1.3 1.3-2.8 2.1-4.4 2-.3.4-.8 0-1-.3-.4-2.7 2.2-2.4 3-4 1 .2 1-2.5 0-1.3-.7 2.3-2.7-.4-1.4-1.9.7-1.2.8-3.2 1.5-4.5.8-1.5 1.7-2.5 3-2.6 1.1-.7 1.8-2.6 3.1-2.6h.2zm5 3.3c.8 0 1.8.3 1.4 1-1-1.7-2.1 1.5-.5 1.2 1-.4 3.4-1 3 1.4-.5 1.6-2 2.3-3.1 2.7 0 .3-.3.2-.4.1-1.3 0-1.5-1.2-1.8-2.5-.5-1.4-.6-3.6.8-3.8h.7zm7 1c1.2.5 2 1.4 3.2 2.1 1.2.2 1.5 3.2 2.7 1.7 1.1-.9 2.6.6 3.8 1 1.3.2.3 1.8.9 2.4.6-1.7 2.5-1.4 3.6-.8 1.3.4 2.8 1.2 3.4 3 0 2.2-1-.9-1.8-.8-1 .3-1-.8-1.8-1-2-.9-1.4 1.5-.5 2.5.2 1.5-.6 3.7-2 3.9h-.6c-.8-.3-2.1-1.9-2-3.2.2-1.2 1.8-2.4.7-3.4-.6.8-1.5 1-2 0-2.1-.6 1.3 2.1 0 3 .1 1.4-1 1.6-1.4 2.6-1.3.3-4-.3-3-2.7.2-.6 1.7-2.9.3-2.1-.6 1.2-2.7 2.3-3.5.7-.9-2.2 2.9-2.2 1.7-3.7-.8.8-1.9 1.4-2.8 2.1-1 1-2.6 1-3.3 2.6-1.6-.5.4-2.5 1.3-2.7.5-1.7 1.8-1.8 3-2.4.3-1.2-1.5-.9-1.6-2.3-.8-1.2.8-2.2 1.7-2.5zm-26.8 0c.2 0 .4.3.7 1-1 .9-.5 3.4-1.8 4.4-1.3.7-1-2-.7-3 .8-.2 1.2-2.3 1.8-2.3zm67.5.2h.4c1.5 1.5 0 3.2-.8 4.1-.7.8-2.6.6-2-1.1.1-1.6 1.2-2.9 2.4-3zm-61.7 0c.5 0 1 .4 1.2 1.2-.3 1.7-.9 5-2.7 4.8-1.5-1-.4-3.3.4-4.7 0-.8.6-1.2 1-1.2zm39.2 3.6c.3 0 .7.3.8 1-.2 2.1 2.4 1 1.7 3.2-.8.6-2.2-1-3-1.7-1.2-.9-.3-2.5.5-2.5zm25.4.5c.4 0 .8.3.5 1.2-.2.9-.7.6-1 .2a.9.9 0 0 1 .5-1.4zm-18 .6l.5.1c1.5 1.6-1.3 2.7-2 3.3-.4.9-1.1-.9-.9-1.4.4-1 1.3-1.9 2.3-2h.1zm12 .9c.2 0 .3.2.3.4-.8.3-.6-.3-.3-.4zm-47 .3c.6 0 1.1.4 1.5 1.3 1 1.4 2 3.5.9 5.2-.4 2 1 0 1.5-.4.6-1.9 2.6-1.3 3.9-.8 1.4.3 2.4 1.5 3.5 2.8-.1 1.4 1.1 1.2 1.6 2.2.5-2.5 1.3 1.5 2.1.7-.2.6.5 2 0 2.6-1.6.4-3.3.2-4.9.3-1.4.3-2.9.6-4.3 0-1.1.5-3.3.4-3-1.8.7-1 1.9-1.7 2.8-2.4.9 1 1.6-1.3.5-1-1.3.3-2.3 1.4-3.6 1.4-1.4-.4-2.7-1.9-4.2-.8-1.5 0-2.7 1.4-4.1 1.7-.2 2 1.8.4 2.6.5 1.2 0 2.9-.2 3.5 1.2 1.6 0 1.5 3.4-.1 3.3-1.4.2-2.7-1-4-1.4-1 1.3 1 .9 1.4 1.9 1 1.1.2 3-.2 4.3-1.6 1.4-3.2 2.6-4.9 3.7-1.6.8-3.1 1.9-4.6 3 0 0-1.4.8-.8.1-.6-.4-2.8-.2-2.7-2.3.5-1.5 1.2-3.2 1-5-.9.3-1.5 2.3-2.8 2-.4-2 .8-4 2.1-4.5 1.3.1 2.1 2.3 2.7 3.2.9 1.7-.2 3.6-.9 5 .1 2 1.6-.4 2.4-.6 1.4-.9 2.5-2.3 3.6-3.7.6-1.6 3.2-1.6 3-3.5-1.4.2-2-1-1.3-2.6.8-.4 1-2.2 0-1.6-1 1.5-1.6 3-2.1 4.7-.7 1.5-3.3 2.8-2.9 0 .4-2 1.5-3.5 2.2-5.3.3-1.2 2.7-1.1 1.8-2.4-2-.2-.7-3.3 0-4.5 1.1-1.2 2.7-1.5 4-1.3a2 2 0 0 1 2 1c1.2.5.2-2.3-.8-1.7-1.8.6-1.6-2.2-.5-3.2.5-.8 1.2-1.2 1.9-1.3h.2zm15 .1h-.4c-.5.1-.8.5-.7 1.3.3.4.6 0 .8-.2.8-.7.6-1 .2-1.1zm-34.9 0l.5.1c1.9.2.8 3.6 1 5.2.3 2.3-1.6 2.3-2.7 3-1.4.5-.8-1.4-.7-2.3.1-1.8 2.2-.5.7.5.3 2.1 1.1-.7 1.5-1.3-.1-.5.6-3-.5-2.4.2 2-1 1.5-.9-.2-.3-1.3.1-2.5 1.1-2.5zm65.2.2c1.6 0 .8 3-.4 3.3-2.3.8-1-2.7 0-3.3h.4zm6 0c.5 0 1 .4 1.3 1.2.2 1.8-.4 3.7-1 5.3-.4.4-1 .6-1.5.1-.5-1.4-1-3.2-.3-4.8.2-1.1.9-1.8 1.5-1.8zm-3.7.1c.8 0 1.3.6 1.4 1.5-.7 1.4-.5 2.3-1.7 3.3-.3.5-.8.1-.8-.4-.4-1.7 1.4-3 1.1-4.4zm-63.9.3c.8 0 1.7 1 2.5 1.2 1 1 .2 3.1-.5 4.1-.3.4-1 1.2-1.3.4-1.7-.3-2.5-3.3-1.6-5.2.2-.3.5-.4.7-.5h.2zm71.6.6c.8 0 .5 3.4-.3 3.2.6-1.5-1.6-1.3-.8-2.4.3-.5.6-.7.8-.8h.3zm-27 2c.2 0 .4.1.6.4 1.3.7 1 3-.3 3.5-.3.5-1 1.4-.9 0 .1-.9 0-3.9.7-3.9zm-2.9.5c1.1 0 1.5 3.2 1 4.3l-.3.7c0-1-1-1.8-1-3-.6-.6.3-1.6 0-1.9h.3zm20.7 1.9c.1 0 .3.2.2.8-1 0-.6-.8-.2-.8zm1.6.7h.2c1.6.5 1 3 0 4-.5.5-1.3 0-1.7-.6-.1-1.3-.9-1-1 0-1.3.2-1.3-2.7.2-2.6.5 2.8 1.3-.7 2.3-.8zm-64.2 1.2c.5 0 1 .3 1.2 1 1.1 1.2 1 3.2.8 5 1 0 .3-3.6 1.3-4.4.7-2 2.3-.9 3.3 0a6 6 0 0 1-.3 5.2c-.9 1-1.2 2-1.5 3.4l-.4.3c-1.7.4-2-2.1-1.2-3.6-.1-2-.8.5-1.7.2-2 .8-3.4-1.7-3.2-4.2-.4-1.5.7-2.9 1.7-2.9zm33.2.4c.6 0 1.3.2 1.7.6 1.2 1.3 1.1 3.8 2 5.3 1 1.5.5-.7.2-1.4-.7-1.5.1-3 1.3-3.1 1.4-.8 2.7.6 3.3 2.3.2.9.5 4 1.1 1.8-.8-1.1 0-2.1 1-1.2 1.5-.1.6 3.9 1.7 2.6.9 1.6.7 3.7.3 5.6-.2 2.4-2 2.1-3.3 3-2 .7-1.5-2.6-.6-3.8.6-.4 1-4.2.2-2.7-.5 1.4-1.6 2.2-2.4 3.2-1.4 0-.7 2.1-1.8 2.6-1 1.3-2.9.5-4 1.6-.8.1-2-.5-3-.1-1.3-.8-2.9-.2-4.4-.5-2.2-1 .5-3 1.7-2.4 1.4 0 2.6-.2 4-.3 1.4 0 2.8-.8 4 .7.5 1.8 2.6-.5 1-.8-1.2-1.6.3-3.8.8-5.3-1.3-1.4-.9 2.1-2.2 2.4-1.2.9-2.6 1.9-4 1.9-1.8.1-2.8-2.1-2.2-4.2.7-1.4 2.6-.7 3.4-2.2-.6-1.3-1-3.3-1.3-4.7.4-.6 1-1 1.5-1zm-36.1.7c.5 0-.4 1.2-.3 1.7 1.5.2-.1 2.9-.2 4.1-1.3 1.2-.9 3.3-2 4.8-1.2.6-1.6 0-1.3-1.6.2-2 1.6-2.8 2.5-4 .3-.5 1.3-2.5.5-2.3-.5 1.6-2.1 3.1-2.4.5-.4-2.2 1.6-2.9 2.8-3.1h.4zm54.2.7c.7.6.4 1.9 0 2.6-1.2.5-.9 2.2-1.8 3.1 1 1 2.5-1 3.6 0 .7 1.2 1.8 3 1.3 5 .7 1.9-.8 2.5-1.7 3.2 0 1.4 1.7-.5 1.2.5-.4 2-1.7 3.3-3 4.4-.6.2-1.3-.2-2-.5-.6-1 1.6-1.6 2-2.5 1-1.1 1.4-2.7 2.1-4 1.1-1.9-2.4-2.8-2-.6.8.9.3 1.7-.5 2.6-.9.7-1.7 1.7-2.5 1.7.1 0-.8 1.1-.7.3.6-1.6.6-3.9 2-4.6 1 .2 1.6-2.5.3-2.6-1.3-.5-1.4 1.9-2.2 3-1.5 1.4 0-1.7-.2-2.6 0-1.7.2-3.5.5-5.3.6-1.8 1.9-2.3 3-3.1.3-.4.4-.6.6-.6zm-24 .4c-.7 0-1.8.4-2.3.6-.7-.1-2.8.3-2 1.4.4 0 .7.2 1 0 1.5 0 2.6-1.7 4-.8.3-.9 0-1.1-.7-1.2zm-4.5 5c2.7.3 3.2.5 4.7 1.2 1 1 .7 3.1-.5 4-1.3.5-2.7 2.1-4.1 1.4-1.5-2-2.8.9-4.5.5-3 1.6-6.2 2.9-9.2 4.8-1.1.8-2.4 1-3.5 2-.3.3-.6.6-1 .7-1-.7 1.4-1.6 1.8-2.2 3.5-2.3 6.7-5.1 10.2-7.4 1.6-.4 3.2.4 4.9 0 1.2-.5 2.3-.3 3.5-1 1-1.5-1.3 0-.8-.7-.5-.7-2.5.5-3.5-.7-1.6-1.6 1-2.5 2-2.6zm-23.6.7h.6c2 .1-.3 2.7-.9 3.5-1.1 1.4-.3 3.5-1.3 4.7-1 .6-.3 4.1 0 1.7.4-2.2 2.4-1.3 2.1.9-.2 1.3 0 3.6 1.5 2.7.2-1.2.8-.6 1.6-.5-1 1-1.9 1-2.8 1.7-.4.6-1-.4-1.3-.8.1-1 .8-2.2.5-3.6-.7.5-1.6 2.1-2.6 2.7-.6-1.4 0-3.3-.2-4.7-.7-1.7-1-4 0-5.7.3-1.7 1.5-2.6 2.8-2.6zM162 243c.6 0 .4 1.9.2 2.6-.4 1.6-.7-2.2-.5-2.5l.3-.1zm44.2.8c.5 0 .9.2 1.2.8 1.6 2.2-1.3 2-2.1 1.9-1.1.2-2.5-.7-3.7-1-.3-.6 1.6-1 2.1-1.3.7 0 1.5-.4 2.3-.4h.2zm-22.3.5c.4 0 0 .6-.7.7-.9.5-1.8.8-2.6 1.5-1.2.4-2.4 1.4-3.6 1.7-1.3.6-2.5 1.4-3.7 2.1-1.2.5-2.3 1-3.3 2l-.7.3c.2-1 1.6-1.1 2.1-1.8 1.5-.6 2.8-1.7 4.2-2.3 1.4-.4 2.5-1.5 3.8-1.8a33 33 0 0 1 4.5-2.4zm1.5.4h.8c1 .1 2 .2 2.9.5 0 0 1.3.5 1.5 1-.3.2-1-.4-1.6-.7a11 11 0 0 0-1.7-.4H186l-1-.2c0-.2.2-.2.4-.2zm4.6.3c.2 0 .8.3 1 .6.5.2.7.7 1.1 1.6-.3.2-.6-.7-.8-.8-.4-.6-1.3-1.1-1.3-1.4zm-6.1.4h1.3l2 .3c1.1.3 3.4.7 3.7 1.5-.4.2-1.6-.9-2.1-.8-.3-.1-1.9-.3-2.2-.5l-2-.2c-.4 0-.8 0-.8-.3zm-.4.8h.6c1.4 0 4.3.6 5.1.8.8.3 2.1.9 2.4 1.2-.5.4-2.8-1.1-3-1-.4-.1-1.6-.3-1.7-.2-1.7-.6-5-.3-5-.6.3-.2 1-.2 1.6-.2zm8.6 0s.5.2.5.5c.3.2.5.7.5 1-.2.3-.5-.5-.6-.5-.2-.3-.5-.8-.4-1zm1 .4c.2 0 .4.3.6.4.1.3.3.9.2 1l-.8-1.4zm-10.8.3h.5c.9 0 2.2.4 3 .3.8.1 1.9.2 2.9.5s1.8.7 1.9 1l-1.8-.4c-.5-.3-1.8-.7-2.4-.6-.9-.1-3.4-.1-4-.4-.7.2-1.8 0-1.9 0 .1-.3 1.2-.4 1.8-.4zm29.2.1l.5.1c1.2-.2 3.1.6 2.7 2.5-1.4 0-2.6-1.4-4-.6-1.5 1.3 1.4.7 1.4 1.6-.7.3-3.5.3-2.7-1.5.3-1.2 1.1-2 2-2h.1zm-28.9.9h.5c1 0 2 .3 3 .2 1.4.4 3 .6 3.3 1-.2.2-.6 0-.6 0l-4-.7c-.2 0-.5.2-1 0-1.3-.3-5.1.4-5.3 0a11.7 11.7 0 0 1 4.1-.5zm-.3 1h1.2c1.3 0 3.4-.4 3.9.6l-1.6-.2h-2.5c-1.4 0-2.9.3-4.2.4h-1c-.5-.1-1.1-.1-1.2-.3.2-.4 1.3 0 1.8-.2l3.6-.3zm-.3.8h1l1.2.1c-.1.3-1.2.3-1.7.2-.7 0-1.2.3-1.9.5-1 .2-1.9-.2-3 0-.6-.4-1-.5-1-.8l2 .3c1.3.4 2.6-.2 3.4-.3zm7 .1l.2.1-6 2.6c-1.4.8-2.9 1.3-4.5 2.2-2.3 1.7-4.7 3-6.8 5.2-1.4 1.7.1-1.2.8-1.4a19 19 0 0 1 3.7-2.8c1.4-1 2.6-2 4-2.4 1.4-.7 2.8-1.5 4.2-2 1-.6 2.3-.9 3.3-1.2l1-.3zm-13.4 0l.6.3c.8.9 2.8.5 3 1-1.1.3-2.4.1-3.5-.7-.8-.1-.5-.5-.1-.5zm20.7.5l.1.9v2.3c0 .3 0 .9-.2.9v-2-2.1zm-21.6 0c.2 0 .8.4 1.2.7 0 0 .7.4 1.6.5.5.1 1 .1 1.1.3-.1.2-.8.2-1.4.2l-1.7-.6c-.3-.3-1-.7-.9-1zm16.3.2c.1 0 .2 0 .3.2-.6.3-1.9.5-2.6 1-1.2.7-2.2 1.7-3.4 2.3-1 .5-2 1-3 1.7-.6-.2 1.3-1.2 1.6-1.5l3.8-2.3c1-.6 1.9-1.2 3-1.3h.3zm-8.6.2h.2c-.3.4-1.8 1.2-2.5 1.4l-4 2.3c-.2-.5 1.8-1.7 2.6-2.1.8-.5 2.3-1.3 3.1-1.4l.6-.2zm9.4.2c.3 0 .1.1.1.3-.6.1-1.3.3-1.9.7l-1.7 1c-1.3 1-2.5 1.9-3.9 2.6l-3 1.6-3 1.6c-1.5 1-3 2.8-3.9 4.8-.6.8.6-1.9.9-2 .8-1.6 2-2.5 3.3-3.4.8-.6 1.7-1.1 2.6-1.5l4.2-2.2c1.3-1 2.7-1.8 4-2.7l2.3-.8zm-18.2 0c1.3.2 2.4 1.2 3.6 1.5-.7.4-1.5.1-2-.3-.6-.3-3.4-1-1.6-1.2zm14 0c.2.4-.4.6-.7.7l-3.7 1.6c-1.3.7-2.5 1.6-3.8 2.1l-3.2 2.2c-1.2 1-2.4 2-3.2 3.7-1 1.2 0-.8.3-1.1.7-1 1.2-1.9 2-2.4 1-1 2.3-1.7 3.4-2.6 1.4-.8 2.7-1.2 4-2 1.5-.7 2.9-1.6 4.4-2l.6-.1zm-4.4.3c-.2.5-1.7 1.1-2.4 1.4-1.7.7-3.2 1.9-4.8 2.6-1.2 1-.4-.6.4-.6 2.2-1.3 4.4-2.7 6.8-3.4zm-11 .3c.3 0 .5.2.6.3.5 0 1.5.5 2.3.9-.4.6-1.8-.1-2.4-.5 0 0-.6-.3-.6-.5s.1-.2.2-.2zm20.5.6c.1.4-2.4 2-3.2 3l-3.4 3.4c-1.8 2-3.6 4-5.2 6.3-.7 1.3-1.6 2.2-2 3.8-.1.7-.3-.3-.2-.5.5-1.5 1.3-2.8 2-4.1.9-1.1 1.5-2.1 2.5-3.1s2-2.5 3-3.4l2.8-2.7 1.9-1.4c.5-.5 1.5-1.4 1.8-1.3zm-21.4.4c.6 0 1.4.3 1.4.8-.4.4-1-.3-1.5-.3-.9-.3-.5-.5 0-.5zm14.4 0v.1c0 .3-2.8 1.6-4.2 2.4l-3.4 2c-1.5 1.3-3.5 2.9-4.8 5-.6.8-.5.2-.2-.5.4-.7 1.1-1.5 1.3-1.6 1-1 2.2-2.4 3.3-3 1.5-1 3-1.7 4.4-2.7 1-.4 2-1.1 3-1.4l.6-.2zm7.4.1c.3 0-.9 1.2-1.3 1.4l-2.7 2.4-3 3c-.8 1.1-2 2.1-2.9 3.4-.9 1.4-2.1 2.7-2.8 4.3l-.2.3c-.5-.8 1.2-2.3 1.7-3.4 1-1.5 2.2-2.8 3.4-4.2l3.3-3.4 3.5-3 1-.8zm-3.6.2h.1c.1.4-.7.6-1 .8-1.1.6-2 1.5-3 2-1.2.7-2.3 1.4-3.4 1.8-1.2.9-2.6 1.2-3.7 2.3-1.3 1-2.7 2.2-3.5 3.9 0 .1-.2.8-.3.4.3-1.6 1.5-2.5 2.3-3.6 1-.8 2-2 3.1-2.3l3.3-1.6c1.1-.8 2.3-1.3 3.4-2.1.8-.5 2-1.5 2.7-1.6zm1.3 0c0 .4-1 1-1.3 1.3-.3 0-2 1.5-2.4 2.1-1.1 1.3-2.3 2.4-3.4 3.8-1 .7-1.8 2-2.6 3a17 17 0 0 0-2.4 4.3l-.2.2c-.2-.7.9-2.6 1.4-3.6l3.2-4 2.8-3.2c1.3-1.3 4.3-3.8 4.9-3.8zm-13.7.1c-1 .8-2 1-3 1.2-1.4.3-2.7.9-4 1.5 0 1-1.6-.4-1-.5 1.1.4 2-.8 3.2-1 1.6-.5 3.2-1 4.8-1.2zm17.2 0c.1.2.2 1 0 1.4-.5 1-1.1 2.1-1.8 3l-1.2 1.4c-.6.8-1.2 1.3-1.6 2.2-.8 1.1-1.2 2.5-2 3.6-.4 1.1-1.1 2-1.7 3l-.6 1c-.2.1-.2 0-.2 0l1.1-2c.8-1.4 1.4-2.9 2.3-4.2.8-1.5 1.5-3 2.6-4a45 45 0 0 0 2.5-3.5c.4-.7.5-1.7.6-1.8zm1.5.1c.2.4 0 1.4 0 2 0 .7 0 1.4-.2 2 0 .8-.2 1.4-.3 2.1l-.4 1.4c0 .4-.3.8-.4 1.2-.3.5-.3 1-.6.8l.5-1.4c.2-.5.3-1.1.6-1.6l.4-2.6.2-2.4.2-1.5zm-2.5.2c.2 0-.7 1.2-1 1.3-1.1 1.3-2.4 2.3-3.5 3.5-1 1-2.1 2-3.1 3.2-1 1.2-2.1 2.3-3 3.7-.9 1-1.3 1.8-2 3l-.3.8-.3.5c-.3-.6 1.2-2.7 1.6-3.6.7-1.2 1.5-2 2.2-3 .8-.9 1.7-2 2.6-2.8l3.1-3.2c1-1.1 2.2-2 3.3-3l.4-.4zm-22.9.3c.4 0 .8.1 1 .4-.2.3-.6.1-.9 0-1.1-.1-.7-.4-.1-.4zm-.6.7c.2 0 .4 0 .5.3 0 .2-.2.1-.3.2-1 .2-.7-.5-.2-.5zm23.3 0c0 .3-1.3 1.5-1.5 1.8a6 6 0 0 1-1 1.2c-.7.5-1.2 1.3-1.9 1.8s-1.2 1.4-1.8 2c-1.2 1.4-3.3 3.6-3.5 4.3l-.5.3c-.4-.4 1.4-2 1.8-2.7 1-1 1.8-2.1 2.8-3l.8-1 1.6-1.5.8-.8c.3-.3 2.3-2.4 2.4-2.3zm-18.8.6c.2 0 .2 0 0 .2-1.3.3-2.5 1.4-3.8 1.4l-.7.5c-.4-1 1.9-1.3 2.6-1.7l2-.4zm18.9 0c0 .6-1 1.6-1.5 2.3-.2.5-1.7 2-2 2.6-.7 1.2-1.5 2.4-2 3.6a33 33 0 0 1-2.7 4.4c-.2.3-1 1.2-.4.1 1-1.2 1.6-2.8 2.4-4.2.6-1 1.1-2.3 1.8-3l1-1.6 1.6-1.9c.3-.3 1.4-2.2 1.8-2.2zm-11.4.5c0 .5-2.2 1.6-3.2 2.3l-.7.5c-1.2 1-1.8 1.3-2.7 2.7l-.7 1.1c-.2.4-.5 1-.8 1.2-.3-.7 1-2.3 1.2-2.6.9-1.3 2.3-2.4 2.9-2.8 1.3-.9 3.6-2.4 4-2.4zm15 .1c.2.2.2.7.1 1v1.4c0 .8-.2 1.6-.4 2.5a33.6 33.6 0 0 1-1.5 4.8l-.8 1.2c-.7 1.1-1.6 1.9-2.4 2.9l-.6.4-1.5 1.1c-.2.1-.1-.2 0-.4.7-.4 1.2-1 1.8-1.4l1.6-1.8c.5-.6 1.2-1.3 1.2-1.6.5-.8 1.4-2.2 1.4-3l.5-2 .4-2.1.2-3zm-23.1.5h.1c0 .5-.8.5-1.2.7-1.2.6-1.3.6-2 1.1-.2.2-.5.3-.8.2 0-.6 1.9-1.3 2.4-1.5a3 3 0 0 1 1.5-.5zm20.3.7c.1.3-.2 1-.4 1.3a15 15 0 0 1-2.2 3.7c-.2.4-.8 1.2-1 1.2-.1-.3.5-1 .8-1.5l2-3 .8-1.7zm8 0v.5c-.8.8-.3-.4-.1-.4zm-28.7.2c-.2.6-.7.6-1.2.8l-1.5 1c-.4.6-.6 0-.2-.3 1-.7 2.4-1.6 2.9-1.5zm21.4 0c0 .2-.5 1.7-1.3 3.2l-2 3c-.5.4-1.6 1.8-2 2h-.3c0-.2.5-.7 1.3-1.5.5-.1 1.9-2.4 2.4-3.2.2-.1.3-.4.4-.6.5-1 1-2.6 1.5-2.9zm7.7.5c.1 0-.4 1.6-1 1.8l-.3.2c-1 .3-.5-.5-.2-1 .5-1.7.3.5 1-.3.2-.5.5-.7.5-.7zm-17.9.4c0 .4-.5.6-1 1.2-.6.7-1 1.3-1.3 1.3 0-.4.5-.9 1.1-1.5.5-.6 1-1 1.2-1zm-11.8 0v.1c0 .3-.4.6-.8.8-.5.5-1 1-1.3.7.5-.8 1.7-1.5 2.1-1.5zm10.7.4c-.1.4-1 1-1.3 1.5l-2.2 2.2c-1 .7-2.5 3.4-2.7 3.2 0-.3.5-.8.6-1.1.8-1.2 1.6-2.4 2.6-3.2.9-.7 2.5-2.6 3-2.6zm12.7.2c.2.3 0 1 0 1.4l-.5 2.1c-.1.5-.3 1.5-.6 1.5 0-.5.7-3.3 1-4.2 0 0-.1-.5.1-.8zm-14.7.2c.1 0-.1.2-.7.5-.5.2-1 .6-1.4 1-.8.7-1.5 1.1-2.2 2.1l-.3.4-.8.7c0-.9 2-2.4 2.5-2.9l1-.9 1.9-1zm-7.6 0c.5.4-1.3 1.7-1.6 2.3-.3.2-.3.7-.7.8.1-1.1 1.5-2.2 2.3-3zm17.7.7c.2.2-.4.7-.6 1l-.5.9a32 32 0 0 0-2.2 4l-.5.8c-.3-.5 1.2-2.5 1.5-3.4.7-1.2 2.2-3.4 2.3-3.3zm-10.5.3c0 .3-1 .9-1.9 2-1 1-2 2.5-2.1 3-.1.4-.6 1.6-.5.3.4-.8 1.3-2.5 2.4-3.7.7-.6 1.7-1.5 2-1.6zm12.8.5c.1.3-1.4 2.9-1.7 3.3-.8 1.4-2 2.3-3 3.3-1 .3 0-.7.2-.8 1.4-1 2.4-2.6 3.4-4.2l1-1.6zm-5.3 0v.3l-.6.8-1 1.7-.2.4c-.3.8-2 3.4-2.5 4.4-.3.7-1 1-.3 0 .7-1.5 1.5-2.8 2.3-4.2l1.2-2 .4-.6.7-.8zm12.5 1.4c.3 2-.7 3.9-1.5 5.5-.5 1.7-2.3 2.8-2 4.8a83 83 0 0 0-1 7.8c0 .3-.2.5-.5.5-1-.4.3-3-.4-4.2-.9-1-.4-3.1-.4-4.6.4-2.6.7.8.6 1.7 0 2.6.8-.2.8-1.2.3-2.6 2-4.2 3.1-6 .7-1.1 1-3.4 1.3-4.3zm-14.5 1l-1.2 2c-.2.5-1 2-1.3 2.3l-.3.6c-.1.1-.6.8-.8.8 0-.3 1.2-1.8 1.6-2.9l.7-1c.1-.2 1-2 1.3-1.9zm4.1 4.2c0 .3-.4.6-.7.7a4 4 0 0 1-1.4 1.2l-1.3.9h-.3s0-.2.2-.2c.4-.2.9-1 1.4-1.2.7-.4 2-1.5 2.1-1.4zm-.4 1.3v.3l-.7.6c-.3.2-.4 0-.4 0l1.1-1z" })
  )
);
var robotBookshelf = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 250 160",
    style: "width:250px"
  },
  Object(preact_min["h"])(
    "g",
    { transform: "translate(0 -137)", fill: "#7c2929" },
    Object(preact_min["h"])("rect", {
      width: "250",
      height: "10",
      y: "-297",
      rx: "5",
      ry: "5",
      transform: "scale(1 -1)"
    }),
    Object(preact_min["h"])("path", { d: "M70 207a5 5 0 1 0 0 10h88.7v-10zm98 0v10h77a5 5 0 1 0 0-10zM73.2 225.7h14v60.1h-14zM88.2 228.8h8.3v57.1h-8.3zM97.6 220.4h8.3v65.4h-8.3zM106.4 237.8h8.3v48h-8.3zM115.3 233.7h8.3v52.2h-8.3zM124.1 226.5h16.6v59.3h-16.6zM71.5 146.6h16.6v59.3H71.5zM176.7 155.3h9.8v50.6h-9.8zM212.5 248h-3.7c-.6 0-1 .5-1 1v2.4H206V249c0-.6-.4-1.1-1-1.1H201v-2.3h4.1c.6 0 1-.5 1-1.1v-17.7c0-2.7-2-4.8-4.4-4.8h-8.3v-2.8c0-.6-.5-1-1-1-.6 0-1 .4-1 1v2.8h-8.4c-2.4 0-4.4 2.1-4.4 4.8v17.7c0 .6.4 1.1 1 1.1h4.2v2.3h-4.2c-.6 0-1 .5-1 1v2.4h-1.7V249c0-.6-.5-1.1-1-1.1H172c-.6 0-1 .5-1 1v22.4c0 .6.4 1 1 1h3.8c.5 0 1-.4 1-1V258h1.7v9c0 .6.4 1.1 1 1.1h1.8v10H180c-.5 0-1 .5-1 1.1v5.2c0 .6.5 1.1 1 1.1h8.5c.6 0 1-.5 1-1v-5.3c0-.6-.4-1.1-1-1.1h-1.2v-10h10v10H196c-.5 0-1 .5-1 1.1v5.2c0 .6.5 1.1 1 1.1h8.5c.6 0 1-.5 1-1v-5.3c0-.6-.4-1.1-1-1.1h-1.3v-10h1.8c.6 0 1-.5 1-1v-9h1.8v13.2c0 .6.4 1 1 1h3.7c.6 0 1-.4 1-1V249c0-.6-.4-1.1-1-1.1zm-37.7 22.3H173v-20.1h1.8zm3.7-14.4h-1.7v-2.3h1.7zm2-12.4v-16.6c0-1.4 1-2.6 2.4-2.6h18.7c1.4 0 2.4 1.2 2.4 2.6v16.6zm18.3 2.2v2.3h-13.1v-2.3zm-11.3 34.7v3H181v-3zm-4.2-2.2v-10h2v10zm20.2 2.2v3H197v-3zm-4.2-2.2v-10h2v10zM204 266h-23.5v-15.8H204V266zm3.8-10H206v-2.4h1.8zm3.7 14.3h-1.7v-20.1h1.7z" }),
    Object(preact_min["h"])("path", { d: "M186 229.4c-2.5 0-4.5 2.2-4.5 5 0 2.7 2 5 4.5 5s4.6-2.3 4.6-5c0-2.8-2-5-4.6-5zm0 7.7c-1.3 0-2.5-1.2-2.5-2.8 0-1.5 1.2-2.7 2.5-2.7 1.4 0 2.6 1.2 2.6 2.7 0 1.6-1.2 2.8-2.6 2.8zM198.5 229.4c-2.5 0-4.5 2.2-4.5 5 0 2.7 2 5 4.5 5s4.5-2.3 4.5-5c0-2.8-2-5-4.5-5zm0 7.7c-1.4 0-2.5-1.2-2.5-2.8 0-1.5 1.1-2.7 2.5-2.7s2.5 1.2 2.5 2.7c0 1.6-1.1 2.8-2.5 2.8zM192.3 253.9c-3.7 0-6.6 3.2-6.6 7.2 0 .6.4 1.1 1 1.1h11.2c.5 0 1-.5 1-1 0-4-3-7.3-6.6-7.3zm-4.5 6.1c.4-2.2 2.3-3.9 4.5-3.9s4 1.7 4.5 4z" }),
    Object(preact_min["h"])("circle", {
      cx: "326.7",
      cy: "267.2",
      r: "8.4",
      transform: "matrix(.12033 0 0 .1317 161.5 218.2)"
    }),
    Object(preact_min["h"])("circle", {
      cx: "185.3",
      cy: "267.2",
      r: "8.4",
      transform: "matrix(.12033 0 0 .1317 161.5 218.2)"
    }),
    Object(preact_min["h"])(
      "g",
      null,
      Object(preact_min["h"])("path", { d: "M131.5 168.4h-3.8c-.5 0-1 .5-1 1v2.4H125v-2.3c0-.6-.4-1.1-1-1.1h-4.2V166h4.2c.6 0 1-.5 1-1.1v-17.7c0-2.7-2-4.8-4.4-4.8h-8.4v-2.8c0-.6-.4-1.1-1-1.1-.5 0-1 .5-1 1.1v2.8H102c-2.5 0-4.4 2.1-4.4 4.8V165c0 .6.4 1 1 1h4.2v2.4h-4.2c-.6 0-1 .5-1 1v2.4h-1.8v-2.3c0-.6-.4-1.1-1-1.1H91c-.6 0-1 .5-1 1v22.3c0 .6.4 1.1 1 1.1h3.7c.6 0 1-.5 1-1v-13.3h1.8v9c0 .6.4 1.1 1 1.1h1.8v10H99c-.6 0-1 .5-1 1v5.3c0 .6.4 1.1 1 1.1h8.5c.6 0 1-.5 1-1v-5.3c0-.6-.4-1.1-1-1.1h-1.3v-10h10v10H115c-.6 0-1 .5-1 1v5.3c0 .6.4 1.1 1 1.1h8.5c.5 0 1-.5 1-1v-5.3c0-.6-.5-1.1-1-1.1h-1.3v-10h1.8c.6 0 1-.5 1-1v-9h1.7v13.1c0 .6.5 1.1 1 1.1h3.8c.6 0 1-.5 1-1v-22.3c0-.6-.4-1.1-1-1.1zm-37.8 22.2H92v-20h1.7zm3.8-14.3h-1.8V174h1.8zm2-12.4v-16.6c0-1.5 1-2.6 2.4-2.6h18.7c1.3 0 2.4 1.1 2.4 2.6v16.6zm18.3 2.2v2.3h-13.1V166zm-11.3 34.7v3H100v-3zm-4.2-2.2v-10h2v10zm20.2 2.2v3H116v-3zm-4.2-2.2v-10h1.9v10zm4.7-12.2H99.5v-15.8H123v15.8zm3.7-10H125V174h1.7zm3.8 14.2h-1.7v-20h1.7z" }),
      Object(preact_min["h"])("path", { d: "M105 149.8c-2.5 0-4.5 2.2-4.5 5 0 2.7 2 4.9 4.5 4.9s4.5-2.2 4.5-5c0-2.7-2-5-4.5-5zm0 7.7c-1.4 0-2.5-1.3-2.5-2.8 0-1.5 1.1-2.7 2.5-2.7s2.5 1.2 2.5 2.7c0 1.5-1.1 2.8-2.5 2.8zM117.5 149.8c-2.5 0-4.6 2.2-4.6 5 0 2.7 2 4.9 4.6 4.9 2.5 0 4.5-2.2 4.5-5 0-2.7-2-5-4.5-5zm0 7.7c-1.4 0-2.6-1.3-2.6-2.8 0-1.5 1.2-2.7 2.6-2.7 1.4 0 2.5 1.2 2.5 2.7 0 1.5-1.1 2.8-2.5 2.8zM111.2 174.3c-3.6 0-6.6 3.2-6.6 7.2 0 .6.5 1.1 1 1.1h11.2c.6 0 1-.5 1-1 0-4-3-7.3-6.6-7.3zm-4.4 6.1c.4-2.2 2.3-4 4.4-4 2.2 0 4 1.8 4.5 4z" }),
      Object(preact_min["h"])("circle", {
        cx: "326.7",
        cy: "267.2",
        r: "8.4",
        transform: "matrix(.12033 0 0 .1317 80.4 138.6)"
      }),
      Object(preact_min["h"])("circle", {
        cx: "185.3",
        cy: "267.2",
        r: "8.4",
        transform: "matrix(.12033 0 0 .1317 80.4 138.6)"
      })
    ),
    Object(preact_min["h"])("path", { d: "M187.1 143.2h24.6v62.7h-24.6zM212.2 153.7h8.3v52.2h-8.3zM221 153.7h8.3v52.2H221zM229.9 150.7h11.3v55.2h-11.3z" }),
    Object(preact_min["h"])(
      "g",
      null,
      Object(preact_min["h"])("path", { d: "M153.2 182c0 5.6-2.5 10.2-5.5 10.2s-5.5-4.6-5.5-10.2c0-5.7 2.4-10.3 5.5-10.3 3 0 5.5 4.6 5.5 10.3zm-1.6 0c0-2.1-.4-4-1.2-5.3-.7 1.3-1.2 3.3-1.2 5.3s.5 3.9 1.2 5.3c.8-1.4 1.2-3.2 1.2-5.3zm-8 0c0 4 1.9 7.4 4 7.4.6 0 1-.2 1.5-.5-.9-1.9-1.4-4.3-1.4-7 0-2.5.5-5 1.4-6.8-.4-.3-1-.5-1.4-.5-2.2 0-4 3.3-4 7.4z" }),
      Object(preact_min["h"])("path", { d: "M149.3 248.6l-1.6 3.1-1.7-3.1-3 3.8V226c0-4.8 2-8.8 4.7-8.8h7.9c1.2 0 2.3 1 3.1 2.3v-14.9c-1 .5-2 .8-3.1.8h-8.7c-6.6-.8-11.9-11-11.9-23.5s5.3-22.7 11.9-23.5h8.7c7 0 12.6 10.5 12.6 23.5v47c0 5-2.1 8.9-4.7 8.9h-8c-1.2 0-2.3-1-3.1-2.3v16.8zM136.6 182c0 11.4 5 20.6 11 20.6 6.2 0 11.1-9.2 11.1-20.6 0-11.4-5-20.7-11-20.7-6.1 0-11.1 9.3-11.1 20.7zm17.1 20.6h1.9c1 0 2.1-.3 3.1-.8v-8.6c-1.1 4-2.9 7.3-5 9.4zm9.8 32.4c1.7 0 3.1-2.7 3.1-6v-47c0-11.4-5-20.7-11-20.7h-1.9c4 4 6.6 11.8 6.6 20.7v47c0 2.4-.5 4.4-1.3 6zm-4.8-6v-2.9c0-3.2-1.4-5.9-3.1-5.9H151c.8 1.6 1.3 3.6 1.3 6v2.9c0 3.2 1.4 5.9 3.2 5.9 1.7 0 3.1-2.7 3.1-6zm-7.9 18v-20.9c0-3.2-1.4-5.9-3.1-5.9-1.8 0-3.2 2.7-3.2 6V247l1.7-2.1 1.5 2.8 1.4-2.8z" })
    ),
    Object(preact_min["h"])("path", { d: "M36.3 179c-11.6 0-21 1.8-21 4 0 0 2.8 6.1 6.6 6.1 0 0 .9 3.3 1.5 7.3-2.6-4.2-7.2-9.3-12.2-4.8 0 0-5.5 4.5-1.7 19.7a73.2 73.2 0 0 0 .5 8.8S2.2 232 13.5 259c0 0 7.4 16.3 12.2 19.5 0 0 .2.9 0 2.3a8 8 0 0 0-2.3 5.4h26a8 8 0 0 0-2.2-5.5c-.2-1.3 0-2.2 0-2.2 4.7-3.2 12.2-19.5 12.2-19.5 11.3-27 3.5-38.8 3.5-38.8l-.2-.4c0-4 .6-8.4.6-8.4 3.9-15.2-1.7-19.7-1.7-19.7-5-4.6-9.5.6-12.1 4.8.6-4 1.5-7.3 1.5-7.3 3.8 0 6.6-6.2 6.6-6.2 0-2.1-9.4-3.9-21-3.9h-.2zm21.4 14.7h.3c4.6 2 1.3 15.2-.3 20.6a29 29 0 0 0-6.1-3.5c0-.8-.9-1.9-1.2-2.3.5-14 6-14.8 7.3-14.8zm-42.5 0c1.3 0 6.7.8 7.3 14.8-.4.4-1.3 1.5-1.3 2.3 0 0-3 1.2-6 3.5-1.6-5.4-5-18.5-.3-20.5h.3z" })
  )
);
var fpBookshelf = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 135 160",
    style: "width:135px"
  },
  Object(preact_min["h"])(
    "g",
    { transform: "translate(0 -137)", fill: "#7c2929" },
    Object(preact_min["h"])("rect", {
      width: "135",
      height: "10",
      y: "-297",
      rx: "5",
      ry: "5",
      transform: "scale(1 -1)"
    }),
    Object(preact_min["h"])("rect", { width: "135", height: "10", y: "207", rx: "5", ry: "5" }),
    Object(preact_min["h"])("path", { d: "M3.7 145.2H16v60.4H3.7zM16.6 149.5h12.3v56.1H16.6zM29.4 145.7h20.8v59.9H29.4zM50.8 169.8H62v35.8H50.8zM72.2 146.8h15.5v58.3H72.2z" }),
    Object(preact_min["h"])("path", { d: "M79.1 146.8h41.7v18.7H79.1zM81.2 172.9h17.6v18.7H81.2zM9.5 226.6H25v58.3H9.5z" }),
    Object(preact_min["h"])("path", { d: "M16.5 226.6h41.7v18.7H16.5zM18.6 252.7h39.6v18.7H18.6z" }),
    Object(preact_min["h"])("path", { d: "M42.7 226.6h15.5v40.6H42.7zM69 225.9h14.4v59.3H69zM94.1 229.8l14.2 2.5-9.5 53.7-14.1-2.5zM108.5 223.2h20.3v62h-20.3z" })
  )
);
var catBookshelf = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 135 160",
    style: "width:135px"
  },
  Object(preact_min["h"])(
    "g",
    { transform: "translate(0 -137)", fill: "#7c2929" },
    Object(preact_min["h"])("rect", {
      width: "135",
      height: "10",
      y: "-297",
      rx: "5",
      ry: "5",
      transform: "scale(1 -1)"
    }),
    Object(preact_min["h"])("path", { d: "M45.7 138.6c-.8.2-1.4.5-2 1a7 7 0 0 0-2.3 4v1.2c.2.7.4 1 .8 1.5.2.3.3.4.2.6l-.3.8c-.4.6-1.8 2.1-2 2l-.1-.8c-.2-.8-.3-1.4-.5-1.5-.1 0-.1-.1.2-.7.5-1.1.6-1.6.5-2.1-.2-1-.9-1.6-2-1.8-.6-.2-3.2-.4-3.3-.3-.1 0-.5.8-.6 1.3-.3.9-.2 1.7.2 2.6.4.9 2 2.2 2.6 2.2.4 0 1.2-.3 1.5-.6.2 0 .3-.2.4-.1.2 0 .4.5.4 1 0 .6 0 .6-.1.5a6 6 0 0 0-4.8.4c-.9.6-1.5 1.4-1.8 2.4-.2 1-.1 1.5.3 2 .1.1.1.2 0 .4-.1.3-.2 1.3-.1 1.7l.3.5c.2.3.3.3.1.5 0 .2-.2.3-.8.4-1 .2-1.4.4-1.8.7l-.3.3-.2-.7c0-.8-.3-1.4-.6-1.7l-.2-.3.4-.4.8-1.6c.1-.5-.2-1.8-.5-2.5-.3-.6-.8-1.3-1.4-1.6-.6-.5-2-.9-3-1h-.5l-.4.6c-1 1.5-1.2 2.9-.5 4.3.3.7 1 1.6 1.5 2 .5.3 1.4.5 2.3.6.9 0 .9 0 1 .2.2.1.3.4.4.6.2.5.3 2.3.2 2.4 0 0-.4 0-1-.3a4 4 0 0 0-1.3-.5h-.5l-.3-.5c-.4-.8-1-1.4-1.6-1.6-1.2-.4-2.5 0-4.2 1.2-1.6 1.2-2 1.4-2.5 1.6-.6.2-1 .5-1.6 1.1l-.6.5-.1-.8c-.3-1.5-.3-1.9-.6-2.3-.8-1.4-3.3-1.5-4.5 0-.5.5-.7.8-.7 1.5s.2 1.4.8 2.3l.4.8-1-.4a13 13 0 0 0-4-1.5c-.5 0-1.1.2-1.4.5-.4.4-.6.7-.6 1.2 0 .7.3 1.3 1 2 .8.8 2.2 1.4 3.6 1.5l1 .2-1.1.4c-1 .3-2.2.9-3 1.3-.3.2-.7.6-.7 1 0 .3.2.9.6 1.2.7.6 2 1 3.2 1a5 5 0 0 0 3-.9l.6-.3v.9c-.2.4-.3 1-.3 1.4l.1 1.1c.3.7 1.2 1.2 2.2 1.2.9 0 1.5-.2 2.3-.7.2-.2.1-.3 1 1l1.2 1.6a63.3 63.3 0 0 0 8.8 8.4c2.4 2 3.3 3 3.2 3L30 187l-2.2-1.4a39.4 39.4 0 0 0-14.1-6.2 21.6 21.6 0 0 0-4.4-.1 14.3 14.3 0 0 0-6.4 2c-.2.3-.2.3 0 .4h1.3l4.7.4a46 46 0 0 1 18.7 5.7c1 .6 1.4.9 1.3 1l-1 .5c-1.8.8-3 1.3-3.2 1.6-.4.3-.3.5 1 1.9a8.2 8.2 0 0 1 2 3.9c.4 1.1.5 2.3.4 3.8a42 42 0 0 1-1.6 9 38.8 38.8 0 0 0-1.7 10.2 13.2 13.2 0 0 0 3.1 9c.8 1 .7 1.1-.2 1.7a7.2 7.2 0 0 0-3 3.3c-.5 1-.4 1.7.2 2h29.7l.6-.4c.3-.3.3-.7 0-1.3a7.7 7.7 0 0 0-2.8-3.3l-1-.7c-.4-.3-.4-.6.1-1.4a14 14 0 0 0 2.2-8.6 39 39 0 0 0-1.8-9.9c-1.4-5.6-1.6-6.9-1.6-9.4a9.9 9.9 0 0 1 3.3-8l1.2-1.3c.2-.4 0-.6-1.4-1.2a45.6 45.6 0 0 0-5-2c0-.4 3.7-3.4 5.9-4.9 2.4-1.6 5-2.7 7.3-3.1 1-.2 2.6-.3 3.2-.3 2 .2 2.3.2 2.3 0-.1-.3-2.6-1.3-3.7-1.5-2.9-.5-5.9.3-9 2.6-1.5 1-2.7 2.1-5.1 4.5-2 2-2.5 2.3-2.7 2.2l.7-2a159 159 0 0 0 4-9.2c.2-.6.3-.7.7-1 1-.7 1.4-1.4 1.5-2.5 0-.7 0-.7.5-1.4l.9-1c.3-.3.3-.3.4-.2v1c-.2.7 0 .8 1.2.5.7-.3.9-.3 1.5 0h.4v1c0 1 0 1.2.3 1.2.1 0 .7-.3 1.3-.8l1.4-.7.6.7c.7 1 1 1.3 1.4.9.3-.3.9-1.5 1.1-2.2l.4-.7 1 .5c1.6 1 2.5 1.4 2.6 1 .2-.2 0-1.5-.3-2.5-.2-.6 0-.6 1.3-.2 2 .5 2.9.6 3 .4.2-.2-.2-.9-1-1.8l-.5-.7c-.3-.3-.3-.3.5-.3a17 17 0 0 0 3.4-.3c.3-.2-.4-.8-2.1-1.6l-1.2-.6c0-.2.1-.2 1-.5 1.4-.5 2.1-1 2-1.2-.2-.2-1.2-.5-2.8-.9l-1-.3c-.1 0 0-.2.4-.5l1.6-1.8v-.2c-.2-.2-.9-.3-2-.2h-1l-.3-.3-.3-.4.3-.8.3-1.2v-.6h-.3a7 7 0 0 0-2.4.9c-1.2.6-1.2.6-1.4-.2a7.8 7.8 0 0 0-.6-2l1-.5c2-1 3.2-2.2 3.8-3.5.4-1 .6-3 .3-3.1l-1-.2c-1.9-.2-4 .4-5.7 1.7-.8.5-2.1 1.8-2.4 2.3-.5.8-.6 1.9-.4 2.7v.6l-.2.2-.3-.3c-.7-.6-1-.4-1.5 1-.2.5-.3.5-.6.6l-.4.2-.4-.2c-.5-.2-.5-.3-.3-1 .2-.5.2-1 .1-1.2 0 0 0-.2.4-.4a8 8 0 0 0 2-2c.2-.5.3-1.4 0-1.8-.3-.8-1-1.3-3-2.3l-1.4-.7-.5.4c-.5.3-1.2 1-1.6 1.5-.5.9-.7 2-.5 3a5 5 0 0 0 1 2.1c.3.4.4.4 1 .5.5.1 1.2.1 1.6 0h.3c.2.3 0 1.3-.3 1.3l-.3-.1-.5-.2c-.3 0-.4.3-.1 1v.9c0 .1-2 .9-2.4.9-.4 0-.4 0-.5.4l-.7.7a23.4 23.4 0 0 0-2.3 1.8l-.6-.3a11 11 0 0 0-2.7-1.8l-1-.6c-.2-.1.2-.2 1.4-.2 2-.1 3.8-.5 4.4-.9.5-.4 1.1-1.6 1.2-2.4.2-1.5-.9-3-2.5-3.7l-.4-.1.6-.3 1-.7c.5-.4 1.4-1.2 1.6-1.6.2-.2.2-.2 0-.4-1.1-1.5-3.6-1.7-6.1-.5-.9.3-1.8 1.4-2 2.1 0 .3-.3.5-1.1.5-.5 0-2-.1-2.3-.3l1-1.4a4.7 4.7 0 0 0 1.2-2.1l1.7-.5a6.8 6.8 0 0 0 3-4c.2-1.1 0-2.2-.7-3.4-.3-.6-.4-.6-1.3-.2zm-1.2 12.2l.6.5.5.3-.5.3c-.6.4-1.7 1.5-2.3 2.4l-1 1.2-.2-1.5c0-1.2-.2-2-.5-3v-.1h1.1l1.6-.1c.5-.2.5-.2.7 0zm18 4.6h1.4c0 .2-1.7 1.7-1.7 1.7l-.8-.8-.5-.6.2-.2c.2-.3.2-.3.5-.2l.9.1zm-26 1.4v.6h-2.7l.5-.2c.6 0 1.2-.2 1.6-.4.4-.2.5-.2.6 0zm1.3.6l-.2.1c-.2 0-.3-.1-.1-.2l.3.1zm18 1.3c0 .2 0 .2-.2.2h-.4v-.3c.3-.1.6-.1.6.1zm-27.4 1c1.2.6 1.2.5 1.2 1.3s.2 1.4.6 2l.4.5c.1.3 0 .3-.8.6-.8.2-1.6.6-2.3 1.1l-.6.4-.4-.4c-.3-.6-.8-1-1.6-1.4-1-.4-1.6-.6-2.7-.6h-.8l.8-.8.8-.6.7-.1c1.6-.2 2.1-.4 2.6-.9l.6-1.2.1-.2c.2-.1.8 0 1.4.3zm25.1 1c.5.5.6.6.4.7l-1 .2a27.7 27.7 0 0 0-2.1.3 7.6 7.6 0 0 1 2.1-1.8l.6.6zm-12.9 2.6c.2.9.6 1.9.9 2.2.4.5 1.6 1 2.6 1.1.3 0 .5 0 .5.2l-.7.9-.4.4-.7 1-1-.2c-.5-.1-.8-.1-.8 0l.5.5c.4.2.6.4.6.5 0 .2-3 3.7-3.2 3.7a48 48 0 0 1 1.3-12.6l.2-.3v1l.2 1.6zm-1.8-1.3l-.2 1a31.6 31.6 0 0 0-1.1 5.9 112.3 112.3 0 0 1-4.4-4.1h1.3c.5 0 .6 0 1.1-.3 1-.5 1.8-1.1 2.5-1.9.7-.7.8-.8.8-.6zm11.7.5c.2.3 1 .8 1.8 1.2l.8.4s-.4.3-.9.4c-.9.3-2.8 1.2-3 1.4 0 .1 0 .3.3.4.5.1 1.7.3 2.8.3.7 0 1.2.2 1.3.2.2.2-1.8.5-3 .3-1 0-1.6 0-3.8.3l-1.4.2s.1-.3.4-.5c.3-.4.5-.5 1.2-.9a4 4 0 0 0 2.4-2.8l.4-.8c.4-.3.5-.3.7-.1zm-19 1.8l-.2.1h-.1c0-.2.2-.2.2 0zm4 4.1c1.1 1.1 2 2.1 1.7 2.1l-1.3.4c-1.7.4-2.6.5-3.6.5-1.1 0-1.4 0-1.5-.2l.3-1c.3-.5.4-.7.4-1l.1-.3c.8-.3 1.3-1.2 1.4-2.3v-.6l1 .8a51 51 0 0 1 1.5 1.6zm-12.8-.6v.4l-.8-.4-.9-.5h1.6zm30.3-.3l-.2.2c-.2.1-.3.1-.4 0-.4-.1-.3-.2.4-.2h.2zm-2.2.2c.1.2 0 .4-.2 1.2-.4.7-.4 1-.3 1.4l.1.3s-.2 0-.3.2a4 4 0 0 0-.7.4c-.5.4-.8 1.3-.8 2.1s.2 1.2 1 1.8l.4.5-.3.7a150.8 150.8 0 0 0-2 4l.2-1.5c.9-4.6-.2-7.5-3.3-9-.7-.4-.7-.3-.2-1 .4-.6.4-.6 2-.9 1.7-.3 2.2-.4 3.2-.3l1.2.1zm1.1.5h.2l-.3.4c-.5.7-.3.8 1.2.8h1l-1.3 1.6-.5-.2a3 3 0 0 0-1-.3c-.3 0-.4-.1-.5-.3v-.6a5 5 0 0 1 .9-1.6s.2 0 .3.2zm-20.8.8c.1.1 0 .7-.2 1l-.2.5v-.4l-.1-.8v-.4h.2l.3.1zm-12.8 1.3l3 2.3a2.8 2.8 0 0 0 2.3.2l-.2.6-.2.5.2.1c.6.3 1.2.5 2 .4h.8l.3.8c.7 1.5 2 4.2 4 7.5l2 3.7c-.2 0-1.6-1-6.2-5A35.7 35.7 0 0 1 19 174c-.9-1.3-1-1.4-1-2.3l-.3-1.8c-.1-.3 0-.2.6.4zm6.5-.3c.3.1.3.2.4.5 0 .5 0 .6-.2.7l-.3.2v-.4l-.2-.8c-.1-.3 0-.4.3-.2zm18.7 1.1a9 9 0 0 1 2 4.8l-.1 4.2a70.6 70.6 0 0 1-1.8 7.2 25 25 0 0 0-3.1-.2c-.6 0-.7-.1-.8-.5-.1-.9-.9-10.3-.8-10.6l.5-.8a85.5 85.5 0 0 0 3.6-4.5l.5.4zm-6 2.2A102.6 102.6 0 0 0 38 186c0 1 0 1-.7 1l-1 .2c-.6 0-.8-.1-1.4-1.6a57.6 57.6 0 0 1-4.2-13.6c0-.2 0-.2.3-.2h1.3c.9 0 1.2 0 2.7-.3l1.8-.4H37.5zM87.2 151.1c0 .7.7 2.7 1.2 3 .2.1.2.1-.1.3-.4.2-.4.2.1.1.3 0 .4 0 .3.1 0 .2 0 .2.2.2.1 0 .2 0 .1.2 0 0 0 .2.2.2.1 0 .2.1.2.3 0 0 0 .2.2.2l.1.3.2.3c.3.3.4.6.2.6l.1.2c.2.2.2.2 0 .6 0 .4 0 .4.5.9.4.4.5.5.3.6v.2c.2.2.1.2 0 .2-.2 0-.3 0-.3.2v.3c-.1 0-.2 0-.3.2 0 .2 0 .3.2.4.3 0 .3 0 0 0-.2 0-.3.2-.4.3l-.2.2c-.2 0-.2 0-.2.2l-.1.2c-.2 0-.2 0 0 .3l-.1.3c-.2.2-.2.2 0 .3.1.2 0 .7-.1.6-.2 0-.2 0 0 .2 0 .4 0 .5-.1.3l-.2.1-.1.2v.3c0 .6-.2.2-1.2-1.8l-1-1.8.6 1.1c.7 1.5 1.3 2.8 1.3 3.2 0 .4 0 .4-.3.1-.2-.1-.2-.1-.1 0v.5c-.2.2-.2.2-1.3-1l-2.5-2 1.4 1.3c1.7 1.4 3 3 1.5 1.8a14.5 14.5 0 0 0-.9-.6c1.2 1 1.4 1.3 1.4 1.4-.1.1-.2.1-.4 0-.2 0-.3 0-.2.1v.1l-1.2-.4.5.3c.6.3.6.3.6.8v.4H86l.7.1c.7.1.9.2.7.4-.2 0 0 .3.2.3l.6.3c.3.2.3.3.3 1.6l-.1 1.5c-.2 0-.1.6 0 1 .3.4.2.8-.4 2.4-.2.7-.2 1-.1 1v.3c0 .2.4 1 .7 1.2.4.2 1 1 .9 1v.2l.6.2c.3.2.5.3 1 .3.4 0 .6 0 .8.2a4 4 0 0 0 1.3.8l.2.2H95l-.2-.4-.2-.4.4.4c.3.5.3.5.8.3.3 0 .6-.2.8-.3l.3-.2-.4-.2c-.1-.2-.6-.5-1-.7a3 3 0 0 1-.7-.5l1.8 1 .6.4c.2 0 .6-.4.5-.6l.4.2.5.4.1.2c-.3-.2-1.2-.4-1.2-.2s-.4.6-.5.5h-.1v.1l-.5.1-.5.2c-.3 0-.4.3 0 .8.3.7.2.6-.2 0l-.4-.6h-.9l-1-.1c-.8-.4-1.1-.5-1.4-.8-.2-.2-.4-.3-.7-.3-.3 0-.3.1-.3.3l.1 1 .4 2.1c.2 1.5.2 2 0 1.5a55.1 55.1 0 0 1-.9-4.8s0 .3-.2.5l-.1.4v-.5c0-.5 0-.5-.3-.7-.1-.2-.3-.3-.2-.4l-.2-.1c-.4 0-.5.2-.2.2h.2l-.1.4-.4.2c-.3 0-.3 0 0 .2.1.1.1.1-.2.1-.2 0-.3.1-.4.3l-.4.4c-.2 0-.3.1-.3.2 0 .2-1 1-1.5 1.3l-.7.4c-.2.2-.2.2 0 .3l-.3.3-.6.4-.6.4c-.3.1-.4.3-.3.3.3 0 .2.2-.1.4-.2 0-.3.2-.3.3l-.1.2c-.1.1-.2.2-.1.3l-.4.4c-.4.4-.8 1-.7 1.2 0 0 0 .2-.2.3-.3.1-.3.2-.3.4l-.1.3c-.2 0-.4 0-.5.2-.2.2-.2.2 0 .2l.2.1-.2.1-.3.1v.1c.2 0 .1.2-.2.6l-.3.4s0 .2-.2.3l-.1.3-.1.2c-.2 0-.3.2-.3.4 0 .1 0 .3-.2.3-.2.1-.3.2-.3.5 0 .1 0 .4-.3.6l-.4.6-.1.3-.3.5-.2.7a4 4 0 0 0-.4 1.5l-.2.5-.1.3v.5c-.2.3-.2.4 0 .6v.2c-.2 0-.4.5-.4.7 0 .5 0 1-.3 1l-.1.4-.3.4c-.2.3-.2.3 0 .5.1 0 .1.1-.2.5l-.4.5c0 .1 0 .4-.2.6v1.7l-.1 1c0 .2 0 .6-.2.8l-.2.6c0 .4-.2 1-.5 1.6l-.2.7c.1.2-.2 1-.7 2l-.2.7-.2.8c-.1.3-.2.4 0 .5v.5c-.2.2-.2.3 0 .3v.2l-.2.4-.2.4c-.1.1-.1.2 0 .2v.3c-.3.2-.3.2 0 .3.5 0 .6.2.4.6-.1.1-.1.3 0 .4v1.5l.1 1c.1 0 .1 0 0 0 0 .1 0 .2.2.3v.2c-.2.1-.2.3-.1.5v2.7c0 .1 0 .4-.2.5-.2.2-.2.3 0 .3l-.1.2c-.3.2-.5.7-.3.9l-.1.5c-.2.3-.2.3 0 .3l-.1.3c-.1.1-.3.3-.3.5l-.3.3-.2.3s0 .2-.2.2l-.5.6c-.3.6-.5.7-1 .7-.3 0-.4.1-.4.3 0 .2-.2.3-.2.3-.2 0-.5.4-.3.6.1.2.2.1-.7.8a4 4 0 0 0-1.2 2.5l-.1.6v.2c.2 0 .3.2.3.5l.2.4.2.3c.1.1 0 .2-.1.4l-.2.3h.2c.2.1.3.2.4.6l.3.6v1l.1.4c0 .3.2.5.6 1 .4.3.6.7.8 1 0 .3.2.5.2.5.1 0 .2.1.2.3v.3c.1 0 .2 0 .3.2 0 0 0 .2.2.2l.2.2s.1.1.2 0c.1 0 .2 0 .2.3 0 .6.3 1 .6.6 0-.1.1-.2.2-.1l.2.3c.2.3.3.3.3.2 0-.2.2-.1.6.2l.7.5c.2 0 .5.3.8.8l.4.4h.3c.1.2.1.2 0 0 0-.4.1-.3.5 0l.4.4.8.5 1.3.7c.5.3 1.7.5 1.7.3h.3l.3-.1c0-.2 0-.2.2-.2.2.1.9-.2.9-.4h.4l.2-.1.1-.2v-.4c-.2 0-.1-.8 0-.9v-.3c-.3-.2-.3-.3 0-.3l-.3-.4-.3-.6s0-.2-.2-.3v-.3l-.5-.7c-.5-.4-.5-.5-.2-.3h.3c0-.2-.3-.5-.7-.6-.3-.1-.4-.3-.5-.5l-.3-.3a3 3 0 0 1-.7-.4l-.8-.4-.5-.4c-.1-.1-.1-.2 0-.1.2.1.1 0-.1-.4-.3-.3-.3-.4 0-.4l-.2-.3c-.2-.2-.3-.2-.1-.2l.2-.2h.3c.2 0 .2 0 0-.2l-.1-.1-.2-.3c-.2-.2-.2-.3 0-.4.2-.2.3-.6.1-.9v-.3h.3l.6.1.6.1h.4l.3.1c0 .2.3.2 1.7.2a14.6 14.6 0 0 0 2.5-.2l1.3-.2 1.6-.2 1.7-.1a67 67 0 0 1 8.3 0l3 .1 3.6.1c.6 0 .7 0 1-.4.4-.4.5-.6.6-1.3.2-.8.1-.9 0-1-.8-.6-.8-.7 0-.2l.6.3-.1.9c0 .4 0 .8-.2.8v.2l-.4.5-.3.3h.6c1.4 0 1.7-.1 2.4-.8l.7-1.1c.2-1-.1-1.5-.8-2l-1-.5a6 6 0 0 1 2 1c.1.3.2.8 0 1.5 0 .3 0 .4.1.3l.2-.3.1-.5c.2-.1.1-1 0-1.1l-.2-.3-.5-.4-.6-.5a2 2 0 0 0-.6-.3l-.5-.3c0-.1-.3-.3-.7-.4l-.5-.4h-.2-1.1c-.8-.1-1-.1-.8-.2a6 6 0 0 1 2.4 0l1.1.5.3.2c.3.3.7.3.6 0v-.3l-.3.1c-.2.3-.3.2-.1-.2v-.3c-.1 0 .2-1 .4-1.1.2-.1.2-.1.1 0-.2.6-.2.7 0 .3.3-.3.4-.4.3-.1v.5l.1.3.3-.3c.3-.3.4-.3.2 0l-.2.9c0 .5 0 .5.2.3l.2-.3.1.4c0 .3.1.4.1.2s.3-.2.3 0c.1 0 .2.2.2.5v.5l.2-.4.2-.3.2.7c0 .7 0 .7.2.5.1-.2.2-.1 0 .2l.1.8v.6l.3-.4c.1-.2.1-.2.2-.1 0 .1 0 .2.1.1v.3c-.1.2-.1.2 0 .1.2-.1.3-.1.2.2v.2l.2.1.3.4c.2.1.2.3.2.4v.1l.2-.1.2.2.3.5s2.3.4 2.9.3c1.4 0 1.6-.1 1.5-.5l-.1-.6-.1-.6-.2-.3-.4-.6-.5-.5.5.3c.5.3 1 1 1 1.3v.6c.1.2.2.5.1.6 0 .3 0 .3.7.3 1 0 1.3 0 1.5-.2H120.4c.5-.2.8-.3.8-.5l.1-.2v-.5c-.1-.4 0-.6.1-.2l.2.3v-.3c.1-.4.1-.4.2-.2 0 .3.1.3.4.2.5-.1.7-.3.9-.7l.2-.6c.2-.3.1-1.7 0-2.1l-.7-.8c-.4-.3-.5-.4-1.7-.8l-.6-.3-.2-.7a16.9 16.9 0 0 1-.6-6.7 14.4 14.4 0 0 0 .2-1.3v-.7c0-.5 0-.6.2-.7v-.3c0-.1 0-.2.2-.2s.2 0 0-.1l-.2-.2.9-.5c.3 0 .3 0-.4-.2l.2-.2c.3 0 .3 0 0-.1s-.2-.2.4-.4l.5-.2h-.4c-.3 0-.3-.1-.2-.2l.2-.1v-.2c.3-.2.3-.2 0-.2 0 0-.2 0-.3-.2-.2-.1-.2-.2 0-.3.4-.3.4-.3 0-.8-.3-.2-.3-.2-.1-.2l.3-.2.6-.3.4-.1c-.4 0-1-.3-1-.4-.3 0 0-.3.3-.5.4-.1.5-.2.3-.2s-.1-.1.3-.2c.6 0 .7-.3 0-.3-.4 0-.5 0-.4-.3.1 0 .1-.1 0-.1v-.1l.1-.1c.2 0 .3-.1.3-.2l.3-.1c.3 0 .4 0 .4-.2h-.7l.1-.3c.2-.4.3-.4-.5-.1-.1 0-.1 0 0-.1.2-.2.2-.4 0-.3l.2-.2c.4-.3.4-.3.2-.5-.1-.2-.2-.3-.1-.4l.8-.1.8-.2-.5-.3c-.5-.2-.7-.3-.7-.5l-.3-.3-.3-.2h.3c.5-.1.6-.2.3-.4-.2-.2-.2-.2 0-.3l.5-.1-.1-.1a2 2 0 0 1-.6-.1c-.2 0-.2-.1.1-.2l.5-.2-.1-.3c-.2-.2-.2-.2 0-.2l.3-.3c.9-.2 1.1-.2 1-.3l-.1-.1c-.3 0-.9 0-.8-.1l.7-.2c.8 0 1.3-.3.9-.3h-.3c0-.1-.3-.2-.7-.2-1 0-1.3-.3-.6-.3h.5l-.2-.2c-.3-.2-.2-.4 0-.4l.4-.1c0-.1.1-.2.3-.2.1-.1 0-.2-.5-.3-1.2-.2-1.2-.3 0-.3 1 .1 1.2 0 .4-.2h-.4.4c.5 0 .3-.2-.3-.4l-.5-.1.5-.1c.7-.1.7-.3.2-.4l-.5-.1h.6c.5 0 .5 0 .3-.1a2 2 0 0 0-.5-.2l-.2-.2h.2c.4 0 .1-.2-.3-.4l-.4-.2h.5c.5-.1.8-.2.4-.2a1 1 0 0 1-.4-.2h.2l.6-.2c.2 0 .2 0-.1-.2-.7-.2-.7-.2-.5-.3.2 0 .2 0 0-.1l.4-.1c.3 0 .4 0 .2-.1-.4 0-.4-.3 0-.3.3 0 .3-.1 0-.2s-.3-.4 0-.4c.2 0 .2 0-.1-.2l-.3-.2h.2c.5 0 .5-.2 0-.4l-.5-.3.7-.1h.6l-.7-.3c-.7-.2-.7-.2-.3-.3.2 0 .3-.1.2-.2-.1-.2 0-.3.5-.3.2 0 0 0-.3-.2-.4-.2-.4-.3-.2-.3 0 0 .1-.1 0-.1l.3-.2c.4-.1.4-.2.2-.2l-.5-.2c-.2-.1-.2-.1.1-.2h.4l-.5-.2c-.6-.3-.3-.3.4 0 .7.2.8 0 .2-.2l-.5-.3.3-.1c.5-.3.6-.4.3-.4l-.3-.1.3-.1c.2 0 .3 0 .2-.1l-.3-.1-.3-.1v-.1c.1 0 .2-.1.1-.2 0-.1 0-.2.2-.2.1 0 .2-.1 0-.2v-.3l-.2-.3c-.2 0 0-.3.2-.3.5 0 .5-.2.2-.6-.3-.3-.3-.4-.2-.4.2 0 .2-.2 0-.3-.1-.1-.1-.2 0-.2v-.2l.2-.4v-.2c0-.1 0-.2.2-.2l-.1-.2-.3-.3h.4l.5.2c.3 0 .1-.1-.4-.4-.5-.2-.6-.4-.7-1 0-.6 0-.6.5-.6h.4-.3c-.4-.3-.3-.7.1-.7.3 0 .3 0 0-.1-.5-.4-.7-.8-.4-.8h.1c0-.1 0-.2.2-.3l-.2-.3c-.4-.2-.4-.3-.2-.3v-.2c-.3-.1-.3-.2 0-.2h.4v-.2c.1 0 .1-.1 0-.2l.2-.1h.4l-.5-.2c-.5-.2-.7-.5-.3-.5.3 0 .3 0 0-.3l-.2-.3.2-.1c.3 0 .3-.2 0-.3-.4 0-.4-.3-.2-.3s.2 0 0-.2l-.2-.3c-.1-.1 0-.2.5-.3l.6-.2-.4-.1c-.8-.1-1-.5-.5-.7.3 0 .4-.2.1-.3 0 0-.1 0 0-.2 0-.1 0-.2-.3-.2-.4 0-.6-.1-.3-.2.2 0 .2-.1 0-.2-.2 0-.2-.1 0-.2v-.2c-.2 0-.1-.1.2-.2.5 0 .7-.3.1-.2a1 1 0 0 1-.4 0c-.3-.2-.5-.7-.5-1 0-.1 0-.2-.2-.3-.2-.1-.2-.1.1-.2l.3-.1-.2-.2c-.2-.1-.2-.2-.1-.3.1 0 .1-.2 0-.2-.2 0-.2 0-.1-.2v-.3c-.2-.3-.2-.7 0-.9.2-.1.2-.2-.3-.3l.2-.2c.4-.2.3-.2-.3-.4-.2 0-.3 0-.2-.1.1 0 .1-.2-.1-.4-.2-.1-.3-.3-.3-.4v-.2l-.2-.1-.1-.2c-.2 0-.2 0 0-.1.3-.2.3-.4 0-.5-.3 0-.4-.2-.2-.4 0-.2 0-.2-.2-.1-.2 0-.2 0 0-.1.2-.2.2-.2-.2-.2-.3 0-.3 0-.2-.2.3-.2.2-.3-.2-.3-.3 0-.3 0 0-.1.3 0 .4-.1.4-.2l-.8-.2c-.3 0-.3 0-.3-.6l-.1-.2c-.2 0-.2-.1-.2-.3h-.1l-.1-.1h-.2c-.2.1-.3.1-.1-.1l-.1-.2c-.2.1-.2 0 .3-.5l.2-.4-.4.3c-.7.4-.8.3-.3-.2l.2-.3c-.7.4-.7.5-.7.3.1-.2.1-.2-.1 0-.4.2-.5.2-.3 0v-.3c-.2 0-.2 0-.2-.2 0 0 0-.1-.1 0-.2 0-.2 0-.1-.2 0-.2 0-.2-.3 0-.1.1-.1 0 0-.4l-.4-.1c-.4 0-.5 0-.5-.2s0-.2-.3-.2c-.2 0-.3 0-.3-.2l.1-.1c.2 0 .1-.4-.2-.4-.2 0-.2-.1-.1-.2.1-.2 0-.3-.5-.3-.3 0-.4-.2-.1-.3.2 0 .2-.5 0-.5v-.1c.3-.2.3-.2 0-.2-.5 0-.4-.2 0-.3l.5-.1h-.4c-.4 0-.5 0-.4-.2 0-.2 0-.3-.5-.3s-.6-.1-.5-.3l.5-.2c.5-.1.2-.3-.5-.3-.5 0-.5 0-.3-.2l.3-.1h-.3c-.3-.1-.4-.2-.3-.3 0 0 0-.2-.2-.3v-.3l-.3-.1c-.5 0-.7-.1-.6-.3.1-.1.1-.2 0-.2v-.2l-.1-.2-.2-.1-.4-.2c-.3 0-.6-.2-.4-.2.2 0 .1-.2-.1-.3-.2 0-.3-.1-.3-.2l-.4-.3c-.6-.2-.6-.2-.4-.4.2-.1.2-.1 0-.1-.4 0-.9-.3-.8-.4 0-.1 0-.2-.3-.2a58.5 58.5 0 0 1-1.1-.4l-.3-.1-.4-.1c0-.2-.3-.3-.6-.1-.4 0-1 0-.9-.2 0-.2 0-.2-.4-.2a2 2 0 0 1-.6 0c-.4-.2-.4 0-.2.4l.3.6.1.3.2.7v.9l-.3.4v.2c0 .1 0 .1 0 0-.2 0-.2-.2 0-.4.3-.8 0-2-.9-3.1a4 4 0 0 0-.6-.7l-.3-.3-.4-.3-.6-.2c-1-.5-2.3-.9-3-.9-.7 0-.9 0-1.3.4-.3.1-.5.4-.6.5-.2.4-.1 2.2 0 3 .1.1.1.2 0 .1l-.4-2.2c0-.4-.2-.5-.8-.5l-.4-.1-.7-.3-.7-.3a1 1 0 0 0-.5-.2l-.3-.2-.3-.2-.6-.3h-.2s0 .1-.1 0h-.5l-.7-.2c-.8-.4-3.2-1.2-3.5-1.2l-.1.4zm17.7 7.5v.1h-.2l.1-.2.1.1zm-1 .5c0 .2-.1.3-.1.1v-.5.4zM93.5 169l.1.6c.2.4.7 1 .9 1v-.2a1 1 0 0 1-.4-.5l-.1-.5c-.2-.3-.2-.4.2-.4.3 0 .4 0 .5.3v.3l.2-.3c0-.2.2-.4.5-.5h.4l-.7 1.4c0 .1 0 .3-.4.6s-.4.4-1.3.4l-.8-.1.1-.5c.2-.5.2-.5 0-.4-.1 0-.2 0 0 0v-.7c0-.3.2-.5.4-.6.4-.4.4-.4.4 0zm8.4 7.4c1 .2 4.1 1.4 4.1 1.6l-.7-.2a26 26 0 0 0-4.8-1.6c.4 0 1 0 1.4.2zm-12.3.1c.2.1.2.2 0 0a2 2 0 0 0-.5 0H89c.1-.2.4-.2.7 0zm.8.4l-.2.2c-.1 0-.3 0-.4.2-.2.3-.3.3-.4.2-.3-.2-.2-.4.1-.4.4 0 .6-.2.5-.3 0-.1 0-.2.2-.2.3 0 .3 0 .2.3zm7.9.7c2.5.6 4 1.3 6.2 2.7 1 .7 3 2.2 3.3 2.6.3.4.2.3-1-.7-2.4-2-5.2-3.5-6.2-3.6-.7 0-.6 0-.5-.1.2 0 .1-.1 0-.2a34.1 34.1 0 0 0-3.3-.7v-.2c-.3 0-.3-.1 0-.1l1.5.3zm2.2 0a25.7 25.7 0 0 1 9.7 4.5c.4.4.2.3-1.3-.6-3-2-4.6-2.6-8.7-3.7-2.1-.5-2-.6.3-.1zm-4 0H96.3h.2zm-.7.8l1.2.7a36.6 36.6 0 0 1-1.2-.7zm-5.8 0l.1.2-.3-.2-.1-.2s.2 0 .3.2zm8.9 0l1.3.5 1.5.7c1.3.6 2.7 1.4 4.1 2.5a32.7 32.7 0 0 0 2 1.4l-.4-.1-1.4-.8 1 .8 1.2 1.2c.5.4.5.4-.2-.1a29.2 29.2 0 0 0-8.7-4.9l1.2.7c1.3.8 3 2 4 3 .8.8.7.7-.9-.6-2.1-1.7-4.4-3.1-4.9-3l-.3-.1c0-.1-.3-.4-.6-.5-.4-.2-.7-.3-.6-.4l2.6 1c1 .3 1 .2 0-.3-.8-.4-1-.5-.6-.4a58 58 0 0 1 5.3 2.4c-1.5-1-2.8-1.6-3.9-2l-1-.5-1-.4c-1-.4-1-.4.3 0zm9.8 5.4v.1l-.2-.1v-.1l.2.1zm-16.3 17.3c0 .1.1.2.3.1l.3.1.1.2c.3-.1 1 .1 1.2.3 0 .2.1.1.2 0 .2-.3.3-.3.4 0 0 .2.1.2.2.1l.2.1v.2l.2.2.1.1.2.1c0 .2 0 .2.2.1.1 0 .1 0 0 .1-.1.2 0 .3.4.3l.2.1c0 .1 0 .1.2 0 .2-.2.2-.2.1.2l-.4.5-.3.1-.3-.1-.4-.1c.1-.2-.1-.5-.3-.5l-.3-.3c0-.2-.2-.3-.3-.3l-.2-.1c-.1-.3-.1-.3-.3 0h-.3c0-.2-.3-.3-.5-.3H93l-.2-.1-.2-.1-.3-.1c-.1 0-.3 0-.4-.2l-.2-.3v.3c0 .2 0 .2-.3.2a1 1 0 0 0-.5 0h-.3c0-.2-.1-.2-.3 0H90v.2c0 .2-.2.2-.4 0h-.2c0 .2-.1.2-.3 0-.2 0-.2-.5 0-.4l.2-.1h.2l.4-.1c0-.1 0-.1.2 0 .2.2.3.1.2 0l.1-.2.2-.1c0-.2.4-.2.5 0h.9l.1-.2c0-.2.2-.2.3 0zm-3.6 1.2v.1c-.2 0-.3 0-.3.2l-.3.2-.6.3-.7.3h-.3l-.2.1-.3.1c0 .1-.1.2-.3.1-.2 0-.2 0-.1.1 0 .2 0 .2-.1 0-.3-.1-.3-.4 0-.3 0 0 .1 0 0-.1 0-.2 0-.2.2-.1h.2l.1-.2h.3c0-.1.2-.2.3-.1h.2l.4-.3c.2 0 .6-.1.8-.3.3-.3.7-.3.7 0zm-3.5 1.6c.1.2 0 .2 0 .2H85l-.9.1-1 .2-.8.3c-.4.1-.5.1-.4 0l.4-.3.3-.2h.2l.2-.1.2-.1.3-.1c.1-.1.5-.2 1.2-.2.4 0 .5 0 .6.2zm11.9 0v.1c.2.2.3.2.7 0l.5-.1-.3.2c-.2.1-.2.2-.1.2.2 0-.4.5-.7.6-.3 0-.7-.1-.6-.3h-.3c-.3 0-.3 0-.1-.2l.2-.3s0-.2.2-.2c.3-.1.6-.2.5 0zm2 1l-.3.1c-.5.1-.6.3-.1.3h.3l-.3.2a1 1 0 0 1-.5.2c-.4 0-1-.3-.9-.4 0 0 .1 0 0-.1 0-.3.5-.4 1.1-.4l.7.1zm-17.7.2l-.3.1.1-.2c.3-.2.5-.2.2 0zm30 .3s.2 0 .2.2h-.3l-.4-.4h.1l.3.2zm-12.7.5c.2 0 .2.1.2.2v.2h.1l.1.2.1.2c0 .2.4.5.8.4h.2l-.5.3c-.5 0-.7.3-.3.3h.3c.2 0 .2 0 0 0-.1.1-.4.2-.6.1-.3 0-.4 0-.3-.3 0-.1 0-.3-.2-.4-.1 0-.2-.2-.1-.3 0 0 0-.1-.1 0-.1 0-.2 0-.2-.2v-.3c.3 0 .2-.3 0-.3H98c.3-.2.4-.2.7-.1zm12.8.5l.3.3-.3-.1-.5-.3c0-.2.2-.2.5.1zm-31.3 0v.2l-.1-.1v-.1h.1zm21.7.2h-.4c-.3 0-.3 0 0 0 .2-.1.4-.1.4 0zm.5.3c-.4.3-1.2.4-1.1.3l.5-.2.6-.2h.3l-.3.1zm9 0c0 .1-.1 0-.2 0l-.2-.2h.2l.1.2zm-9.5.6h-.3c-.2 0-.2 0 0 0l.3-.1h.3zm9.8 0c-.2.2-.3.2-.4 0h.3c.3 0 .3 0 0 0zm-11 .5l-.7.5-.3.1h-.4v-.2c-.4 0-.2-.2.2-.3l.8-.2.6-.1.3-.1-.5.3zm1.1-.2h-.2c.3-.2.3-.2.2 0zm10.3.2l-.2.1h-.4c-.2-.2-.2-.2.1-.2h.5zm-9.7 0l-.6.3c-.4 0-.4 0-.2-.1l.6-.2h.2zm9.6.7v.1c-.2 0-.3-.3-.1-.3l.1.2zm-11.1.4c.1 0 .1 0 0 .1v.2l.2.1-.3.1-.5.2c-.2.2-.3.2-.3 0h-.2c-.2 0-.2-.6 0-.8h1.1zm1.5 0v.1h-.2l.1-.1h.1zm10.2.3c.2.3.2.3 0 0-.2 0-.3-.2-.3-.2 0-.2.2 0 .3.2zm-.7.4h-.2l-.1-.2h.1l.2.2zm-.1.2v.2l.4.3.4.4-.5-.1c-.4-.2-1.1-1-1-1 .2-.2.5 0 .7.2zm-10.6 0c0 .1-.8.2-.8 0l.6-.1h.2zm1.5.4c.3.3.3.4 0 .4-.5 0-.7-.1-.5-.2l-.1-.1c-.4 0-.3-.2.1-.3h.3l.2.2zm-1.6 0c0 .1-.2.2-.5.2l-.4-.1.4-.1h.5zm11.5.8h-.1c-.1 0-.2.1-.1.2 0 .3-.2.2-.5 0v-.3l-.2-.2-.2-.2.5.2c.3 0 .5.2.6.3zm-11.6-.3v.3l.2.2-.2.1c0 .2.4.2.8 0l.8.1.3.2c-.1 0-.1 0 0 .2v.1s-.1.1 0 .2c0 .2-.1.3-.4.4h-.5c.2-.1.2-.1 0-.3l-.6-.1c-.2 0-.2 0 0 0 .1-.2 0-.2-.2-.1-.2 0-.1.3 0 .5.2 0 .2.1 0 .2-.1 0 .1.3.4.3.3 0 1.2.4 1.1.5 0 0 .1.2.3.2.3.1.2.1-.2.2l-.8-.1-.4-.4c0-.2 0-.2 0 0-.2 0-.2 0-.1.2s0 .2-.2.1c-.4 0-.5-.2-.5-.5 0-.2 0-.4-.2-.4l.1-.1.2-.2-.1-.3c-.2 0-.2-.3 0-.3l-.1-.1c-.2-.1-.2-.2-.2-.3v-.1l-.1-.1.2-.1.2-.1-.3-.2c-.3 0-.2-.1.2-.2h.3zm2 .2c0 .1-.1.1 0 .1v.2l-1-.1c-.1-.1.2-.3.7-.3.4 0 .5 0 .3.1zm10 1.7l-.2.2c-.3 0-.4-.2-.3-.5 0-.2 0-.2.3 0 .2.1.3.2.2.3zm-11.3 1.4l.4.1c.6.1.6.1.3.3l-.2.1.4.3c.6.3.6.4.2.3-.3 0-.3 0-.2.2 0 .2 0 .2-.2 0l-.7-.1c-.2 0-.5 0-.6-.2l.1-.1c.2 0 .2 0 0-.2l-.2-.5c0-.3 0-.3.2-.3l.5.1zm11.7.2c-.1 0-.2 0-.1.2 0 .1-.3.2-.6 0v-.2l.5-.1h.2zm-11.3 1.3c0 .2 0 .3.2.3.3 0 .3.4 0 .4-.1 0-.1.1.1.2l.4.3v.2l.3.1c.7 0 .7.2 0 .3-.4.2-.5.1-.9-.1-.5-.3-.5-.5-.2-.4.2 0 .2 0 0-.1a2 2 0 0 0-.3-.3v-.2c0-.1 0-.2-.2-.2l-.3-.1.3-.1c.3 0 .4-.3.2-.3 0 0-.1 0 0-.1 0-.2.5 0 .4.1zm1 1l.3.2-.4-.2c-.3-.1-.4-.2-.2-.2 0 0 .2 0 .3.2zm10.6.7l-.2.2-.1.2v-.7h.2c.3.1.3.2 0 .3zm-11 .4c.2.2 0 .1-.3 0l-.2-.2.2.1.4.1zm1.3 0h-.7c.2-.2.8-.2.7 0zm10.2.3c.3.2.2.3-.2.1l-.3-.2c0-.2.2-.2.5 0zm-10.1 0h-.6l.4-.1h.2zm-1.9.4l.4.2c.1.1.3.3.5.3.2.2 1 .2 1 0h-.4c-.3 0-.2-.2 0-.3.2 0 .2-.1.2-.2H104.3c-.2.2-.2.2.2.3h.1l-.3.2h.4c.4 0 .4.4 0 .6h-.3l.4.2c.4 0 .4.2 0 .2-.3 0-1-.3-1-.5l-.3-.2c-1-.3-1-.2-.5.3l.2.4.1.2.1.2-.2.1s-.3 0-.5-.3c-.5-.5-.6-.6-.3-.5h.2c0-.1 0-.3-.2-.3l-.2-.3-.3-.5-.4-.3.3.1.5.1zm11.7.3c.2.1.2.3 0 .2-.2 0-.3-.1-.3-.2h.3zm.1.8H113.8l.2-.1.1.1zm-9.3.7l.1.2.3.2h-.2c-.3.1-.3.1-.2.4l.2.1c.4 0 .4.2.1.4-.3.1-.3.3 0 .3h.2c-.2.2-.9.1-1 0h-.8l.4.2c.2.2.4.3.6.2.3 0 .3 0 0 .1l-.3.3-1-.5c-.4-.3-.4-.4-.1-.3.3.1.2 0-.1-.4-.2-.2-.3-.6-.1-.6v-.2c-.3-.3 0 0 .5.3.5.5.5.6.2.5h-.1c.1.2.5.1.5 0s0-.2.2-.2c.3 0 .2-.2-.2-.2h-.3l.3-.2c.4-.2.4-.3 0-.4l-.1-.1v-.1c-.2-.1-.2-.2 0-.2 0-.2.7 0 .9.2zm9.5 0v.2l-.2-.1v-.1h.2zm.2 1.2l.1.1c0 .3.3.8.4 1 .2.2 0 .2-.4 0l-.2-.2-.3-.5-.3-.2h.3c.4 0 .4 0 .2-.2s0-.2.2 0zm-10.6 1.3c.3.2.1.2-.2 0l-.2-.3.4.3zm2 0h-1.4c.1-.2 1-.2 1.3 0zm9.4 1c-.1 0-.4-.3-.4-.6-.1-.3 0-.2.2 0l.2.5zm-9.5-.5h-.4c-.2 0-.3 0-.1-.1h.5zm-2 .2l.4.3c0 .1-1-.2-1.2-.4-.3-.3 0-.3.7 0zm-1 0h-.2v-.2l.2.1zm3.6.2l-.2.2h.6l-.2.3c-.2 0-.3.2-.2.2l-.4.2c-.2 0-.7-.4-.6-.5.3 0 .2-.2 0-.3h-.3l.3-.2h1.3zm-3.2.6l.4.3-.5-.2c-.5-.3-.7-.5-.4-.5l.5.4zm12 0h-.1v-.2l.1.1zm-12.4.5c.9.4 1.1.7.3.3-.6-.2-1.2-.6-1.2-.7l1 .4zm3.9 0l.2.2-1.2.6.4-.7c.2-.2.3-.2.6 0zm.5.6c-.5.7-.5.7.1.5l.6-.1-.3.2-.6.3-.4.4h.3l.4.2s.1 0 0 0l.1.2-.2.4c-.4.5-.4.5 0 .2l.4-.2v.3c-.1.5-.4 1-.6 1.2-.2.2-.2.2-.3 0v-1l-.1.4c-.3.4-.4.4-.3 0 .2-.3.2-.4 0-.3-.1 0-.2 0 0-.1v-.6l.1-.3-.3.2c-.4.3-.5.2 0-.2.2-.3.4-.5.1-.4v-.3a1 1 0 0 1-.5 0c-.2-.2-.1-.2.2-.5a4 4 0 0 1 1.6-.9s0 .2-.3.4zm-4.7 0c.7.4.8.7.2.3-.5-.2-1-.6-.8-.6l.6.3zm13.2.2l.3.7.4.6v.6l-.2-.2-.3-.5-.2-.5a6 6 0 0 1-.3-.8v-.3c.2 0 .3.2.3.4zm-14.2 1l-.6-.6c0-.2 0 0 .3.2l.3.4zm1.7 0c.2.3 0 .2-.4-.1l-.3-.3.3.2c.2 0 .4.2.4.3zm-3 .2v.2l-.2-.2v-.2l.2.2zm.4.6c.1.2.1.2 0 0l-.2-.2.2.2zm1.2 1l1.1.3h-.9c-1 0-1.8-.4-2-.9-.3-.6-.2-.6.3-.1.3.3.6.5 1.5.7zm15.6.4c0 .2.1.3 0 .4-.1.1-.7-.4-.8-.8l-.1-.5c-.1-.3.6.4.9.9zm-14 .4H102c-.1-.1.1-.1.7-.2.8 0 1 0 .8.2zm14.4.5l.5.3.3.2h.5c.3 0 .5.1.5.2l.4.3a331.2 331.2 0 0 0 1.1 1.5c0 .2 0 .2.2.3.2 0 .5.4.6 1 0 .3 0 .3-.4-.2 0-.2-.3-.3-.4-.3l-.1-.2-.1-.2s-.1 0 0 0l-.3-.5-.5-.6c-.3-.4-.5-.5-1-.5a1 1 0 0 1-.5-.2.8.8 0 0 0-.3-.1c-.4 0-.8-.5-.8-.9s0-.4.3-.1zm2.2 4l-.3-.2c-.2-.3-.2-.3 0-.1.2 0 .3.2.3.2zm.2.6c.3.2 0 1.4-.2 1.4s-.2-.2 0-.5c.1-.4.1-.4 0-.8-.1-.2-.2-.4-.1-.5l.1.1.2.3zm1.1-.4v.1h-.2v-.2l.2.1z" }),
    Object(preact_min["h"])("path", { d: "M101.6 211.9v.1c.1 0 .2 0 .1-.1l-.1-.1v.1zM101.6 214.5l.3.1c.1 0 .1 0 0 0l-.3-.2c-.2 0-.2 0 0 .1zM86.4 159.6l.1.3c.2.2.2.2 0 0 0-.4-.1-.5-.1-.3zM86.8 160.3v.1c.1 0 0-.1 0-.2 0 0-.1 0 0 0zM82.4 161.2l.7.3-.7-.4zM84 162l.2.2c.1.2.2.1 0 0l-.2-.2zM85.7 164.3l.2.2c.2.1.2.1 0 0 0-.2-.2-.3-.2-.2zM83.7 165c0 .2 2 1 2 .9l-.8-.4c-.8-.4-1.3-.5-1.2-.4zM107.7 230.5c0 .2.3.5.4.4v-.5h-.4zM108.4 231c0 .2.3.4.4.3v-.2c-.1-.3-.4-.3-.4 0zM5 237a5 5 0 1 0 0 10h71.4l-1.1-.4-.8-.5-.4-.3c-.4-.4-.5-.5-.4-.1 0 .2 0 .2-.1 0h-.3l-.4-.4c-.3-.5-.6-.8-.8-.8l-.7-.5c-.4-.3-.5-.4-.6-.2l-.3-.2-.2-.3-.2.1c-.3.4-.6 0-.6-.6 0-.2 0-.3-.2-.2l-.2-.1-.2-.2-.2-.2-.2-.2-.1-.3c0-.2 0-.3-.2-.3 0 0-.2-.2-.2-.5-.1-.3-.3-.7-.8-1-.4-.5-.5-.7-.5-1 0-.1 0-.3-.2-.4v-.5-.5l-.2-.4zm73.3 0l.1.3.2.3.2.1c.2.1.2.1 0 .1l-.4.1c0 .1 0 .2-.2.2l.2.2c.2.2.2.3.1.3-.2 0-.2 0 0 .4.3.3.3.5.1.4v.1l.6.4.7.4.7.4c.3 0 .4.2.4.3 0 .2.2.4.5.5.4.1.6.4.6.6H82c-.4-.2-.4-.1.2.3l.4.7.1.3c.1 0 .2.2.1.3l.4.6.2.4c-.3 0-.3 0 0 .3v1.8H83l-.2.1h-.2v.1H130a5 5 0 1 0 0-10zM4.5 251.6h12.9V286H4.5zM17.9 256.7h11V286h-11zM29.4 250.3h13.4v35.8H29.4zM43.3 250.3h7.3v35.8h-7.3zM51.1 256.7h16.4V286H51.1zM76.9 251.3h11.2v34.3H76.9zM88.6 248.7h11.2v36.9H88.6zM104.5 251.3h7.8v34.3h-7.8zM112.8 254.7h7v30.8h-7zM120.4 251.6h7.8v34.3h-7.8z" })
  )
);
var monsterBookshelf = Object(preact_min["h"])(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 135 160",
    style: "width:135px"
  },
  Object(preact_min["h"])(
    "g",
    { transform: "translate(0 -137)", fill: "#7c2929" },
    Object(preact_min["h"])("rect", {
      width: "135",
      height: "10",
      y: "-297",
      rx: "5",
      ry: "5",
      transform: "scale(1 -1)"
    }),
    Object(preact_min["h"])("rect", { width: "135", height: "10", y: "182", rx: "5", ry: "5" }),
    Object(preact_min["h"])("path", { d: "M109.8 195.4l-1.2.3c-2.7 1.1-4.5 4-3.9 6.3 0 .3.3.8.4 1 .4.7.4.7.4 1.5 0 2.3-1 4.5-3 6.4a9.2 9.2 0 0 1-4.7 2.8c-3.4.6-6.2 2.8-9 6.6a14.6 14.6 0 0 0-2.1 3.8c-.5 1.7-.7 3.7-.6 5.7.1 1.8.3 2.6 1.3 7.6l.6 3.6-.3 2.2c-.5 3.4-.7 4.6-1.2 5.9-.3.7-.8 1.5-1.3 1.9-.3.3-1.1.7-1.3.6-.2 0-.4-1.7-.4-4.2a12 12 0 0 0-.4-3.8 5 5 0 0 0-2.3-3c-1.4-1-2.1-1.1-6-1.7-2.7-.4-4-1-5.2-2.1-.6-.6-1.8-2.4-2.3-3.5-1.6-3-1.8-6.2-.7-8.7.1-.4.2-.5 1-1a39.3 39.3 0 0 1 9.3-4.8c1.1-.4 1.8-.8 2.5-1.6a5.9 5.9 0 0 0 1.3-5.4 5.6 5.6 0 0 0-2.8-3.5l-.5-.4c.5-1.1.7-1.9.8-3 .2-1.7-.2-3.4-1.1-4.5-.4-.6-1.2-1.1-1.9-1.3a12 12 0 0 0-5.1-.2c-2.3.6-3.5 2.3-3.4 4.5.2 3.2 3 5.1 8.5 5.8 1 .1 1 .1 1.5.5 1.5 1 2.3 2 2.3 3.3 0 1.4-1 2.8-3 4.1-1.2.9-3 1.6-4.8 2a8 8 0 0 0-1.8.7c-3 1.6-5.2 4-5.6 6.6v2.4l.2 1.8c.3 3.2 2 6.3 4.2 8 1.4 1.2 2.3 1.6 5 2.2l2.8.8c3 1 4.6 2.5 5.1 4.5l.2 1.5.2 1.5c0 1.4-.5 2.5-1.7 3.2l-1.8 1-1.6.9-.4.2h-1c-1-.2-2.9-.1-4 0-2.8.5-4.8 1.7-6.2 3.7-1.2 1.8-4.7 4-7.3 4.5h-3c-1-.3-1.9-.7-3-1.8-2.4-2-3.7-4.7-4.9-9l-.3-1.5c0-.8.5-2.6 1.1-4.5l1.8-5.6a16.1 16.1 0 0 0-4-14.9l-.6-.6.3-.8c.7-1.5 1-2.8 1-4 0-2.2-.9-3.4-3.1-4.3-3.3-1.4-7.4 1.3-7.6 5a4 4 0 0 0 1.2 3.3c.9.9 1.8 1.4 4.2 2.5 2.4 1 3.4 1.7 4.2 2.5a7 7 0 0 1 1.6 3l.4 1.2c.4 1 .5 2 .4 3.3 0 1.7-.2 2.6-1.3 6a32 32 0 0 0-1.3 6c-.5 2.8-.4 5.4.4 7.7a9.9 9.9 0 0 0 2.4 3.7c.4.5.9 1 1 1.3 2 3 6 4.1 10.9 2.9 1.1-.3 1.6-.5 2.6-1.1 1.9-1.2 3.2-2.3 4.8-4.2 1.6-2 2-2.2 4.5-2.4 1.3-.1 1.7-.1 2 .1.4.4.2.9-1.1 2.7a8.5 8.5 0 0 0-2 4.4c-1 4-1.1 5.2-1.1 7.3 0 2 .2 3.1.9 4.6.3.6.4.7.9 1 2.1 1.3 1 1.8-2.7 1.3a5 5 0 0 1-1.5-.5c-.3-.1-1.1-.2-1.6 0-1.7.3-4.6 2.5-4.6 3.4v.2h.4l.8-.3c.3 0 .5-.2.5-.2l-.3.5c-.5.5-.8 1.1-.7 1.4.1.3.7.3 1.6-.1l.7-.2-.5 1c-.5 1.1-.8 1.9-.6 2l.2.2c.2 0 .7-.3 1.2-.7.6-.4 1-.5 3.9-.5 6 .1 6.7 0 8.3-.4.7-.2.8-.3 1.3-.8.8-.7 1.5-1.1 2.3-1.4 1.2-.4 2.4-.4 4.6.3 2.2.5 2.7.6 6.2.8l3.4.2c1.6.2 2.8.6 3.8 1.2l.5.3.9-.1h5.7a47.2 47.2 0 0 1 7.5 1.5c.1 0 0-.3-.6-1-.7-1-.7-1.2 0-1 .1 0 .7 0 1.1.2l.8.3-.3-.3c-.9-1-1.3-1.6-1.2-1.9 0-.2.5 0 1.4.4.8.4.9.4.9 0 0-1-2.1-2.3-4.7-2.9-1-.2-2.1-.2-2.8 0h-1.4c-1-.2-1.5-.3-1.6-.5-.1-.3-.1-1 0-1.6l.8-2c.7-1.9.8-2.4 1-4 .4-3.8 1.3-6.3 3.3-8.2.5-.5.7-.6 1.5-1 1.9-1 3.5-1.3 7.7-1.6 5.1-.3 6.7-.8 9.6-2.5 2.6-1.6 4.8-4.2 5.7-6.9.4-1.2.5-1.7.5-3.4 0-1.5 0-1.6-.2-2-.4-.9-.6-1.3-1.8-2.9l-1.3-2c-.6-1.1-.5-2 .2-3 .4-.7.5-1.2.5-2.1 0-1.2-.4-2.2-1.3-3.1a6.7 6.7 0 0 0-7-1.3 9 9 0 0 0-2.2 1.5c-1.4 1.3-1.6 3.4-.6 5.4 1 2.3 3.4 3.6 5.7 3 1.4-.3 2-.3 2.9.2 1.3.6 2.4 2.2 3 4.4l.1 2.2v1.8l-.7 1.2a16.1 16.1 0 0 1-6.1 5.8c-1.9 1-3.2 1.2-7.8 1.6-4.2.3-5.7.6-7.6 1.6-.7.3-1 .5-1.6 1.1-1 1-1.4 1.2-1.9 1-.2-.2-.5-.7-.8-2a6.7 6.7 0 0 0-1.5-2.9 4 4 0 0 0-.5-.5c-.2 0-.3-.9-.3-1.4.2-1.2.6-2 1.9-4.3a13.7 13.7 0 0 0 2.3-6c.3-.9.3-2.9.1-4.6-.2-2-.2-4 0-4.8.2-1.4.8-2.4 1.7-3a497 497 0 0 1 3.6-2.9c2.8-2 3.8-3 4.7-4.3l1-2c0-.2.1-.2.3 0 .8.3 2.4.4 3.4.2a7 7 0 0 0 3.5-2.2c.7-1 1-2 1-3 0-2.2-1.2-3.9-3.1-4.4H122c-1.6 0-3 .4-4.2 1.4-1.1.9-2 2.7-1.8 3.4.3.6.4 1.4.4 2.3-.1 1.8-1 3.6-3 5.5-1 1-2 1.8-2.7 2.1-2.3 1-4.1 2.7-5 4.6-.4.9-.5 1.5-.5 2.6 0 1 0 1.4.4 2.5.3.7.4 2 .4 3-.3 3.7-1.7 7-5.3 11.7l-1 1.3-.6-.2a52.7 52.7 0 0 0-10.1-3.2s0-.4.2-.7l1-3c.3-1.6.3-2.2.3-4.8 0-3-.1-5-.4-6.2a27.6 27.6 0 0 1-.2-12.6 11 11 0 0 1 5.9-6.8c1.3-.7 2.6-1.2 4.6-1.7 1.6-.4 2.3-.8 3.5-2 .7-.7.8-.9 1.3-1.9a26 26 0 0 0 1.7-4.2l.6-1.6 2.5-.8c2-.5 2.9-.9 3.6-1.6.6-.5.8-.8 1.1-1.7.2-.4.3-.7.3-1.4 0-1.4-.4-2.4-1.4-3.4-1-1.2-2.1-1.5-3.8-1.1zm1.8 1.5c1.4.5 2 2.5 1.5 4.2-.5 1.2-1.4 2-2.8 2.4-.9.2-2 .2-2.5-.1l-.6-.4c-.3-.3-.7-1-.8-1.6a4 4 0 0 1 1.6-3.7c1.2-1 2.5-1.2 3.6-.8zm-36.9 3.4a4 4 0 0 1 1.8 5.6c-.3.4-1 1-1.5 1.3-.3.2-.4.2-1.8.2-1.2 0-1.5 0-2-.2-1.9-.6-3-2.5-2.5-4.5a3.3 3.3 0 0 1 2.6-2.3l.9-.2.5-.1h.9c.5 0 .7 0 1.1.2zm48 15.2c1.5.7 2.4 2.3 2.2 3.7-.2 1.1-1 2-2.7 2.7a4 4 0 0 1-1.3.3c-1.7.1-3.4-1.3-3.5-3 0-.7.1-1.2.7-2 .8-1 1.3-1.5 2.1-1.8.4-.2.6-.2 1.2-.2.7 0 .8 0 1.4.3zm-82 .2h-.2.2zm1.7 1.5a4 4 0 0 1 1.9 2.7c.4 1.8-.3 3.5-1.8 4.2-1.4.7-2.7.6-3.8 0a6.3 6.3 0 0 1-1.5-1.9c-.2-.4-.3-1.1-.2-1.7.2-1 1.1-2.3 2-3 1-.7 2.4-.8 3.4-.3zm-6.5 3.9v-.2-.2.4zm28.4 7.4c0 .1 0 0 0 0v-.3.3zM126 233c1.8.6 3 2.2 3 3.7-.1 1-.7 1.7-2 2.4-.5.3-.6.4-1.3.4-.9 0-1.5-.2-2.3-.8-1.8-1.2-2-3-.7-4.8.7-1 2-1.3 3.3-.9zm-41.5 31.6c2 .7 2.6 1 2.6 1.7 0 .4-.3.8-1 1.3a3 3 0 0 0-.6.6c0 .2-.3.4-.4.4-.4 0-.7-.4-1.1-2l-.8-2.4 1.3.4zm5.7.8h2.3c.2 0 .2.4 0 .7 0 .2-.5.8-1 1.5l-1.2 1.4c-.2.3-.2.3-.3.1a7 7 0 0 1-1.1-1.8c-.7-1.7-.2-2.4 1.3-1.9zM79.6 267c.2.3.5 1.8.6 2.6v.4H80l-1.3.1c-2 0-2.1-.3-1-1.5l.7-.9c.3-.8.7-1.3 1-1.1l.2.4zm14.8 2.8l.4.6.6 2.1c0 .1 0 .4.2.6.2.3.2.4 0 .5 0 .1-.5.1-1-.1l-.9-.3-.7-.5c-.5-.5-.5-.8-.2-1.1l.4-.7c.2-.8.5-1.3.8-1.3.1 0 .3 0 .4.2zm-31.8 9.6l.2.2-1.1.3-.5.1.2-.3c.5-.5 1-.6 1.2-.3zm.6 1.3l-.3.4c-.2.3-.4.4-.7.5h-.5c0-.1.4-.5 1-.8.3-.2.5-.2.5-.1zm49.3.2l.6.4.1.2h-.4c-.4 0-1-.3-1-.5-.2-.4.2-.4.7 0zm-1 1.6c.2 0 .4.2.4.3.1.1.1.1-.1.1l-1.4-.3c-.2-.2 0-.4.4-.4l.7.3zm-47.5.9c.1 0-.2.3-.6.5h-.5c0-.1 0-.3.3-.5.2 0 .7-.1.8 0zm46 .3c.6.3.8.5.8.7 0 .3-.2.3-.5.2-.3-.1-1-.9-1-1 0-.2.2-.1.6 0z" }),
    Object(preact_min["h"])("path", { d: "M109.5 198a5 5 0 0 0-1.7.7 2 2 0 0 0-.8 1.5c0 .7.3 1.2 1 1.7.3.3.4.3.8.3.8 0 2-.3 2.4-.8.4-.4.7-1.8.5-2.5-.2-.8-1-1.2-2.2-1zm0 1.3l-.1.4c-.1.2-.2.2-.4.2-.4 0-.5-.1-.3-.4.4-.4.7-.5.7-.2zm-.2 1.8c-.3.2-.5 0-.3-.3h.3v.3zM71.6 201.4c-1 .3-2.1 1.5-2.1 2.5 0 .5.1 1 .6 1.4.5.5 1.4.9 2 .9 1.2 0 2.3-.8 2.5-1.7a4 4 0 0 0-.3-1.8c-.4-1.2-1.5-1.7-2.7-1.3zm0 1.5c.2 0 .2.3 0 .7l-.4.2c-.3-.1-.6-.4-.6-.5l.4-.4h.7zm.9 1.4c-.2.2-.6.3-.6.2 0-.1.3-.3.5-.3s.2 0 0 .1zM121.7 216.4a4 4 0 0 0-2.4 1.4c-.8 1.2-.5 2.3 1 3 1.5.7 3.4 0 3.8-1.6.1-.3 0-1.2-.2-1.8-.4-.8-1.2-1.2-2.2-1zm.4 1c.1.2.1.2-.1.8l-.3.4-.5.1c-1 0-1.3-.2-.7-.8.6-.5 1.3-.8 1.6-.5zM40 218.2a4 4 0 0 0-2.5 2.8c-.2 1.3.5 2.4 2 2.9 2.6.8 5-1.7 3.8-4-.3-.8-1-1.5-1.6-1.7a3 3 0 0 0-1.7 0zm-.5 2.2v.4c0 .3 0 .4-.3.5-.4.2-.6.2-.6 0s.4-.8.6-1h.3zm1.4 1c0 .4-.2.6-.5.7-.5.1-.5-.2 0-.6.3-.3.5-.4.5 0zM123.9 233.9c-.7 0-.9.4-1 1.8v1l.3.3c.4.5 1.2 1.2 1.7 1.4.5.3 1 .3 1.6 0 .6-.4 1.2-.8 1.3-1.1.2-.3.2-1.2 0-1.6a5 5 0 0 0-1.5-1.7c-.4-.2-.4-.2-1.2-.2h-1.2zM124.7 212.4l.1.2c.2 0 .2 0 0-.1 0-.2-.2-.2-.1 0zM4.8 196.3h11.8v89.5H4.8zM17.6 196.3h11.8v89.5H17.6zM41.3 142.8h13.3V181H41.3zM56.7 142.8H70V181H56.7zM25.9 142.8h13.3V181H25.9z" }),
    Object(preact_min["h"])(
      "g",
      null,
      Object(preact_min["h"])("path", { d: "M84.3 141.2c-.4.4-.7 1-.9 1.6a10.6 10.6 0 0 0-.4 2.2l-.4.5a23 23 0 0 0-1.9 1.8l-.3.6c0 .2-.3.6-.6 1l-.5.6-.5.7a8 8 0 0 0-1.4 2.3c-.2.6-.2 1-.2 1.6v.8l.6.7c.5.3 1.1.4 1.8.3.5 0 .8-.1 1.2-.4.7-.4 1.6-.8 2.1-.9a2.5 2.5 0 0 0 2.1-1.4c.1-.2.2-.2.3-.2.2 0 .2 0 .6.6.8 1.3 1.7 3.2 2.4 5.5l1 3.6-2.2 4-.4.5c-.7 1.1-1.8 2.5-3 3.9l-.4.5-.4-.2-1.3-.9-1-.7-.4.6-1 1.7.6.5c2.6 1.7 5.7 3.5 8.4 4.7a35.1 35.1 0 0 0 15 3.3 27 27 0 0 0 19.3-8.2l.3-.3-.6-.6-1.2-1.4-.2-.3-.5.4-2.1 2-.9-1.4c-1-1.9-1.8-3.8-2.3-5.7v-1c0-.3.3-.6.6-1 .6-.6 1-1 1.2-1.4a7 7 0 0 0 1-6.2 9 9 0 0 0-1.3-2.7l1-.5a4 4 0 0 1 2.2-.2c1.1.3 1.8 1.4 2.1 3.3v1.7c0 2.6 0 3.3.2 4.3a8 8 0 0 0 1 3c.4.6 1 1 1.7 1.2a4.1 4.1 0 0 0 1.5 0l-.1-.2c-.2-.2-.4-1-.5-1.5-.3-1.3-.2-2.6.2-4.3.2-1 .2-1.4.2-2.5a10.4 10.4 0 0 0-1.1-4.9c-1.1-2.2-2.3-3.2-3.9-3.6h-1.6a9 9 0 0 0-4.2 2.4l-.2.2-.2-.1-1.7-.8c-.8-.2-2-.2-2.8 0-1.3.2-2 .5-3.5 1.3l-2.6 1.3c-2.7 1-5.5.9-7.3-.1-.7-.4-1.1-.8-1.5-1.3a16.4 16.4 0 0 0-8.7-5.8l-.1-.8a6.7 6.7 0 0 0-.7-2.8 3 3 0 0 0-.7-.9l-.7-.2-.2.2zm24.4 23a9 9 0 0 1 1.8 1.9 64.5 64.5 0 0 1 5 8 28.3 28.3 0 0 1-6 2.6l-.7.2a24 24 0 0 1-5 .6c-5.1.3-10.9-1-16.6-3.8l-.6-.3.2-.4.5-.8a43.6 43.6 0 0 1 3.8-4.8l1.1-1.4.8-1 .4.2c1.8.7 3.6 1.1 5.8 1.3a15.3 15.3 0 0 0 8.8-2.3h.7z" })
    ),
    Object(preact_min["h"])("path", { d: "M6.8 139.4c-.6 1.4-2.4 7.9-2.9 10.3-.4 2.4-.1 4.8.7 6.8a12 12 0 0 0 6.2 5.8l1.5.9c.5.5.8 1.4 1 3v7.8c-.2 2-.6 3-1.3 3.7-.7.7-1.7 1.2-3.3 1.8-1.9.7-2.4 1-2.4 1.3v.1h15.8v-.1c.1-.3-.5-.7-2.4-1.3-2.6-1-3.8-2-4.2-3.5-.2-1-.4-3-.4-6 0-4.6.3-6.2 1.2-7l1.4-.7c1.7-.8 2.9-1.6 4-2.7a9.8 9.8 0 0 0 2.7-4.7c.4-1.8.5-3.5 0-5.5-.4-2.5-2.1-8.6-2.7-10l-.2-.4H7zm14.6 0c.3.4 2.3 7.4 2.8 10 .4 2 .4 3.6 0 5.2-.8 3.3-3.1 5.9-7 7.6l-1 .6c-1 .8-1.3 2.3-1.3 7.2 0 4.2.2 5.8.7 7 .6 1.1 1.7 1.9 4.1 2.7l2 .9h-.1a726.7 726.7 0 0 1-14.8 0c0-.1.8-.5 2-.9 2.6-1 3.8-1.8 4.3-3.3.3-1 .4-2.2.5-5.2 0-3.6-.1-5.9-.4-7-.4-1-.6-1.3-2.3-2a12.5 12.5 0 0 1-5.5-4.8 10.8 10.8 0 0 1-1.3-7.1 86.3 86.3 0 0 1 3-10.8v-.1h14.3z" }),
    Object(preact_min["h"])("path", { d: "M20.4 145a1907 1907 0 0 1-14.3.4h-.7v.8a205.7 205.7 0 0 1 0 5.5c-.2.6-.3 1.1-.3 2l.1 1.4c.5 2 2 3.6 4.1 4.6 4 1.9 9 1.3 12-1.5 1-.8 1.5-1.8 1.9-3 .1-.4.2-.5.2-1.4 0-1 0-1-.2-1.6a8 8 0 0 0-.4-1l-.2-.4v-1.9l-.2-2.9v-1h-2z" })
  )
);
// CONCATENATED MODULE: ./routes/projects/index.js







var projects = [{
  name: "Frappe",
  type: "code",
  description: "A library for defining UI components based on time and events",
  image: frappe,
  link: "http://framp.me/frappe"
}, {
  name: "Paillier in set ZKP",
  type: "code",
  description: "Generates a Zero Knowledge Proof that an encrypted value is in a set of known values",
  image: lock,
  link: "https://github.com/framp/paillier-in-set-zkp"
}, {
  name: "Zero Knowledge Proofs in node.js",
  type: "presentation",
  description: "A presentation on Zero Knowledge Proofs with a focus on node.js",
  image: robotBookshelf,
  link: "https://framp.me/zero-knowledge-node/"
}, {
  name: "Sudoku",
  type: "code",
  description: "A sudoku UI written in elm",
  image: sudoku,
  link: "http://framp.me/sudoku"
}, {
  name: "Storry",
  type: "code",
  image: database,
  description: "A state management library, almost drop-in replacement for redux's boilerplate",
  link: "https://github.com/framp/storry"
}, {
  name: "Use your coworkers' brain",
  type: "presentation",
  description: "A presentation about leadership and pushing responsibility down",
  image: brainBookshelf,
  link: "https://framp.me/use-your-coworkers-brain/#/0?presenter&timer"
}, {
  name: "Joi Tester",
  type: "code",
  description: "A tool to validate Joi schemas online written in vue.js",
  image: code,
  link: "http://framp.me/joi-tester"
}, {
  name: "Timetabling",
  type: "code",
  description: "A genetic algorithm to solve one of the timetabling problem",
  image: calendar,
  link: "https://github.com/framp/timetabling-solver"
}, {
  name: "FP Workshop",
  type: "presentation",
  description: "A workshop about Functional Programming",
  image: fpBookshelf,
  link: "https://github.com/framp/fp-workshop"
}, {
  name: "Fontina",
  type: "code",
  description: "An old module to generate @font-face ready fonts",
  image: fontina,
  link: "http://framp.me/fontina"
}, {
  name: "Profunctors",
  type: "presentation",
  description: "A presentation about profunctors",
  image: catBookshelf,
  link: "https://github.com/framp/profunctors"
}, {
  name: "Portfolio",
  type: "code",
  description: "An old jQuery-based 3d book with flippable pages",
  image: book,
  link: "http://framp.me/portfolio"
}, {
  name: "Monads",
  type: "presentation",
  description: "A presentation about monads",
  image: monsterBookshelf,
  link: "https://github.com/framp/monads"
}, {
  name: "Say Something",
  type: "code",
  description: "A serverless desktop-only tool to create and share powerful messages",
  image: bubble,
  link: "http://framp.me/say-something"
}];

var objects = {
  code: furniture_artwork,
  presentation: function presentation(image) {
    return image;
  }
};

/* harmony default export */ var routes_projects = (function () {
  return Object(preact_min["h"])(
    "section",
    { "class": projects_style_default.a.projects },
    Object(preact_min["h"])(
      "div",
      { "class": projects_style_default.a.wall },
      Object(preact_min["h"])(
        "div",
        { "class": projects_style_default.a.container },
        Object(preact_min["h"])(
          "h1",
          null,
          "Projects",
          Object(preact_min["h"])(
            "span",
            { "class": projects_style_default.a.mobileHidden },
            " & Talks"
          )
        ),
        Object(preact_min["h"])(
          "div",
          { "class": projects_style_default.a.artworks },
          projects.map(function (project) {
            return Object(preact_min["h"])(
              "a",
              { href: project.link, target: "_blank" },
              objects[project.type](project.image),
              Object(preact_min["h"])(
                "h3",
                null,
                project.name
              ),
              Object(preact_min["h"])(
                "p",
                null,
                project.description
              )
            );
          })
        )
      ),
      gramophone,
      sofa,
      table,
      lamp
    ),
    menu(["contact"], "projects")
  );
});
// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var app__ref = Object(preact_min["h"])(contact, { path: "/" });

var app__ref2 = Object(preact_min["h"])(experience, { path: "/experience" });

var app__ref3 = Object(preact_min["h"])(routes_projects, { path: "/projects" });

var app__ref4 = Object(preact_min["h"])(blog, { path: "/blog" });

var app__ref5 = Object(preact_min["h"])(routes_article, { path: "/blog/:article" });

var app_App = function (_Component) {
  app__inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    app__classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
      _this.currentUrl = e.url;
    }, _temp), app__possibleConstructorReturn(_this, _ret);
  }
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */


  App.prototype.render = function render() {
    return Object(preact_min["h"])(
      "div",
      { id: "app" },
      Object(preact_min["h"])(
        preact_router_es_Router,
        { onChange: this.handleRoute },
        app__ref,
        app__ref2,
        app__ref3,
        app__ref4,
        app__ref5
      )
    );
  };

  return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "oe76":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"menu":"menu__2G6rj","active":"active__1qs-H","contact":"contact__GYBx3","experience":"experience__2Ya07","blog":"blog__1jSNT","projects":"projects__2kU72"};

/***/ }),

/***/ "qVY2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"projects":"projects__32N92","wall":"wall__3rymF","container":"container__1NrWH","slideDown":"slideDown__13FjM","artworks":"artworks__vcndR","fadeIn":"fadeIn__2rl98","slideUp":"slideUp__KfpW9","mobileHidden":"mobileHidden__3fjOT"};

/***/ }),

/***/ "raki":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"experience":"experience__2U2Q7","container":"container__3w-Eu"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map