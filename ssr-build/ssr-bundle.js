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
module.exports = {"contact":"contact__1INyY","social":"social__1bWFE","title":"title__1sHLG","subtitle":"subtitle__e4UUq","location":"location__AHAAZ","invisible":"invisible__2-dkv","slideDown":"slideDown__ylBtS","slideUp":"slideUp__N6TkU","fadeIn":"fadeIn__2I9bl"};

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
var twitter = Object(preact_min["h"])(
  "svg",
  {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48"
  },
  Object(preact_min["h"])("rect", { fill: "#111", height: "512", rx: "15%", width: "512" }),
  Object(preact_min["h"])("path", {
    d: "m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z",
    fill: "#fff"
  })
);
var whatsapp = Object(preact_min["h"])(
  "svg",
  {
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg",
    width: "48",
    height: "48"
  },
  Object(preact_min["h"])("rect", { fill: "#111", height: "512", rx: "15%", width: "512" }),
  Object(preact_min["h"])("path", {
    d: "m456 251a196 196 0 0 1 -291 170l-109 35 35-105a196 196 0 0 1 168-295c109 0 197 87 197 195zm-196-164c-91 0-165 74-165 164 0 36 11 69 31 96l-21 61 64-20a165 165 0 0 0 256-137c0-90-74-164-165-164zm99 209c-1-2-5-3-9-6l-33-15c-5-2-8-3-11 2l-15 19c-3 3-6 3-11 1s-20-8-39-24c-14-12-24-28-26-33-3-5-1-7 2-10l7-8 5-8c1-3 1-6-1-8l-14-36c-4-9-8-8-11-8h-9c-4 0-9 1-13 6-5 5-17 16-17 40 0 23 17 46 19 49 3 3 34 53 83 72s49 13 57 12c9-1 29-11 33-23 4-11 4-20 3-22z",
    fill: "#fff",
    "fill-rule": "evenodd"
  })
);
// CONCATENATED MODULE: ./routes/contact/index.js






var _ref = Object(preact_min["h"])(
  "a",
  { href: "mailto:hi@framp.me?Subject=Hi+Framp" },
  mail
);

var _ref2 = Object(preact_min["h"])(
  "a",
  { href: "https://github.com/framp" },
  github
);

var _ref3 = Object(preact_min["h"])(
  "a",
  { href: "https://uk.linkedin.com/in/framp" },
  linkedin
);

var _ref4 = Object(preact_min["h"])(
  "a",
  { href: "https://twitter.com/framp" },
  twitter
);

var _ref5 = Object(preact_min["h"])(
  "a",
  { href: "https://api.whatsapp.com/send?phone=447821814477" },
  whatsapp
);

/* harmony default export */ var contact = (function () {
  return Object(preact_min["h"])(
    "section",
    { "class": contact_style_default.a.contact },
    Object(preact_min["h"])(
      "div",
      { "class": contact_style_default.a.container },
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
          "LONDON"
        )
      ),
      Object(preact_min["h"])(
        "div",
        { "class": contact_style_default.a.social },
        _ref,
        _ref2,
        _ref3,
        _ref4,
        _ref5
      )
    ),
    menu(["blog", "experience", "projects"], "contact")
  );
});
// EXTERNAL MODULE: ./routes/experience/style.less
var experience_style = __webpack_require__("raki");
var experience_style_default = /*#__PURE__*/__webpack_require__.n(experience_style);

// CONCATENATED MODULE: ./routes/experience/index.js




/* import {
  mail,
  github,
  linkedin,
  twitter,
  whatsapp
} from '../../components/social'
*/

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




/* harmony default export */ var article = (function () {
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
// CONCATENATED MODULE: ./routes/projects/index.js







var projects = [{
  name: "Sudoku",
  description: "A sudoku UI written in elm",
  image: sudoku,
  link: "http://framp.me/sudoku"
}, {
  name: "Storry",
  image: database,
  description: "A state management library, almost drop-in replacement for redux's boilerplate",
  link: "https://github.com/framp/storry"
}, {
  name: "Joi Tester",
  description: "A tool to validate Joi schemas online written in vue.js",
  image: code,
  link: "http://framp.me/joi-tester"
}, {
  name: "Timetabling",
  description: "A genetic algorithm to solve one of the timetabling problem",
  image: calendar,
  link: "https://github.com/framp/timetabling-solver"
}, {
  name: "Fontina",
  description: "An old module to generate @font-face ready fonts",
  image: fontina,
  link: "http://framp.me/fontina"
}, {
  name: "Porfolio",
  description: "An old jQuery-based 3d book with flippable pages",
  image: book,
  link: "http://framp.me/portfolio"
}, {
  name: "Say Something",
  description: "A serverless desktop-only tool to create and share powerful messages",
  image: bubble,
  link: "http://framp.me/say-something"
}];

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
          "div",
          { "class": projects_style_default.a.artworks },
          projects.map(function (project) {
            return Object(preact_min["h"])(
              "a",
              { href: project.link, target: "_blank" },
              furniture_artwork(project.image),
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var app__ref = Object(preact_min["h"])(contact, { path: "/" });

var app__ref2 = Object(preact_min["h"])(experience, { path: "/experience" });

var app__ref3 = Object(preact_min["h"])(routes_projects, { path: "/projects" });

var app__ref4 = Object(preact_min["h"])(blog, { path: "/blog" });

var app__ref5 = Object(preact_min["h"])(article, { path: "/blog/:article" });

var app_App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
      _this.currentUrl = e.url;
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
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
module.exports = {"projects":"projects__32N92","wall":"wall__3rymF","container":"container__1NrWH","artworks":"artworks__vcndR","slideDown":"slideDown__13FjM","fadeIn":"fadeIn__2rl98","slideUp":"slideUp__KfpW9"};

/***/ }),

/***/ "raki":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"experience":"experience__2U2Q7","container":"container__3w-Eu"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map