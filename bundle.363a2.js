!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,o,i){for(var u,c,a=0,l=[];a<e.length;a++)c=e[a],r[c]&&l.push(r[c][0]),r[c]=0;for(u in o)Object.prototype.hasOwnProperty.call(o,u)&&(t[u]=o[u]);for(n&&n(e,o,i);l.length;)l.shift()()};var o={},r={5:0};e.e=function(t){function n(){c.onerror=c.onload=null,clearTimeout(a);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}var o=r[t];if(0===o)return new Promise(function(t){t()});if(o)return o[2];var i=new Promise(function(e,n){o=r[t]=[e,n]});o[2]=i;var u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,e.nc&&c.setAttribute("nonce",e.nc),c.src=e.p+""+({0:"route-projects",1:"route-experience",2:"route-contact",3:"route-blog",4:"route-article"}[t]||t)+".chunk."+{0:"39758",1:"6df89",2:"c230d",3:"641fb",4:"24b05"}[t]+".js";var a=setTimeout(n,12e4);return c.onerror=c.onload=n,u.appendChild(c),i},e.m=t,e.c=o,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t},e(e.s="pwNi")}({"7N8r":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){function e(){var e=this;o.Component.call(this);var n=function(t){e.setState({child:t&&t.default||t})},r=t(n);r&&r.then&&r.then(n)}return e.prototype=new o.Component,e.prototype.constructor=e,e.prototype.render=function(t,e){return(0,o.h)(e.child,t)},e};var o=n("KM04")},D9cU:function(t,e,n){"use strict";var o=n("KM04"),r=(n.n(o),n("oe76")),i=n.n(r),u={contact:["/","Framp"],experience:["/experience","Experience"],blog:["/blog","Blog"],projects:["/projects","Projects"]};e.a=function(t,e){return Object(o.h)("div",{class:i.a.menu+" "+i.a[e]},t.map(function(t){return Object(o.h)("a",{class:i.a[t],href:u[t][0]},u[t][1])}))}},EbM4:function(){},JkW7:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e,n){var o,r=/(?:\?([^#]*))?(#.*)?$/,i=t.match(r),u={};if(i&&i[1])for(var a=i[1].split("&"),l=0;l<a.length;l++){var p=a[l].split("=");u[decodeURIComponent(p[0])]=decodeURIComponent(p.slice(1).join("="))}t=c(t.replace(r,"")),e=c(e||"");for(var s=Math.max(t.length,e.length),f=0;f<s;f++)if(e[f]&&":"===e[f].charAt(0)){var d=e[f].replace(/(^\:|[+*?]+$)/g,""),h=(e[f].match(/[+*?]+$/)||E)[0]||"",_=~h.indexOf("+"),v=~h.indexOf("*"),m=t[f]||"";if(!m&&!v&&(h.indexOf("?")<0||_)){o=!1;break}if(u[d]=decodeURIComponent(m),_||v){u[d]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){o=!1;break}return(!0===n.default||!1!==o)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=p(t),t.attributes}function c(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function a(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function l(t){return c(t).map(a).join("")}function p(t){return t.attributes.default?0:l(t.attributes.path)}function s(t){return null!=t.__preactattr_||"undefined"!=typeof Symbol&&null!=t[Symbol.for("preactattr")]}function f(t,e){void 0===e&&(e="push"),P&&P[e]?P[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}function d(){var t;return t=P&&P.location?P.location:P&&P.getCurrentLocation?P.getCurrentLocation():"undefined"!=typeof location?location:R,""+(t.pathname||"")+(t.search||"")}function h(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),_(t)&&f(t,e?"replace":"push"),v(t)}function _(t){for(var e=S.length;e--;)if(S[e].canRoute(t))return!0;return!1}function v(t){for(var e=!1,n=0;n<S.length;n++)!0===S[n].routeTo(t)&&(e=!0);for(var o=T.length;o--;)T[o](t);return e}function m(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return h(e)}}function b(t){if(0==t.button)return m(t.currentTarget||t.target||this),y(t)}function y(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function g(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")&&s(e)){if(e.hasAttribute("native"))return;if(m(e))return y(t)}}while(e=e.parentNode)}}function x(){L||("function"==typeof addEventListener&&(P||addEventListener("popstate",function(){v(d())}),addEventListener("click",g)),L=!0)}function C(t){n.e(2).then(function(){t(n("lrl3"))}.bind(null,n)).catch(n.oe)}function w(t){n.e(1).then(function(){t(n("Zb9S"))}.bind(null,n)).catch(n.oe)}function j(t){n.e(3).then(function(){t(n("qP16"))}.bind(null,n)).catch(n.oe)}function k(t){n.e(4).then(function(){t(n("Of6y"))}.bind(null,n)).catch(n.oe)}function N(t){n.e(0).then(function(){t(n("pREj"))}.bind(null,n)).catch(n.oe)}function O(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function U(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var M=(n("EbM4"),n("KM04")),E={},P=null,S=[],T=[],R={},L=!1,A=function(t){function e(e){t.call(this,e),e.history&&(P=e.history),this.state={url:e.url||d()},x()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){return this.getMatchingChildren(this.props.children,t,!1).length>0},e.prototype.routeTo=function(t){return this._didRoute=!1,this.setState({url:t}),this.updating?this.canRoute(t):(this.forceUpdate(),this._didRoute)},e.prototype.componentWillMount=function(){S.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;P&&(this.unlisten=P.listen(function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))})),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),S.splice(S.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map(function(t){var i=r(e,t.attributes.path,t.attributes);if(i){if(!1!==n){var u={url:e,matches:i};return o(u,i),delete u.ref,delete u.key,Object(M.cloneElement)(t,u)}return t}}).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,r=e.url,i=this.getMatchingChildren(n,r,!0),u=i[0]||null;this._didRoute=!!u;var c=this.previousUrl;return r!==c&&(this.previousUrl=r,"function"==typeof o&&o({router:this,url:r,previous:c,active:i,current:u})),u},e}(M.Component),W=function(t){return Object(M.h)("a",o({onClick:b},t))},K=function(t){return Object(M.h)(t.component,t)};A.subscribers=T,A.getCurrentUrl=d,A.route=h,A.Router=A,A.Route=K,A.Link=W;var D=n("7N8r"),I=n.n(D),$=I()(C),V=I()(w),B=I()(j),H=I()(k),J=I()(N),G=Object(M.h)($,{path:"/"}),q=Object(M.h)(V,{path:"/experience"}),Y=Object(M.h)(J,{path:"/projects"}),z=Object(M.h)(B,{path:"/blog"}),F=Object(M.h)(H,{path:"/blog/:article"}),Z=function(t){function e(){for(var e,n,o,r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return e=n=O(this,t.call.apply(t,[this].concat(i))),n.handleRoute=function(t){n.currentUrl=t.url},o=e,O(n,o)}return U(e,t),e.prototype.render=function(){return Object(M.h)("div",{id:"app"},Object(M.h)(A,{onChange:this.handleRoute},G,q,Y,z,F))},e}(M.Component);e.default=Z},KM04:function(t){!function(){"use strict";function e(){}function n(t,n){var o,r,i,u,c=T;for(u=arguments.length;u-- >2;)S.push(arguments[u]);for(n&&null!=n.children&&(S.length||S.push(n.children),delete n.children);S.length;)if((r=S.pop())&&void 0!==r.pop)for(u=r.length;u--;)S.push(r[u]);else"boolean"==typeof r&&(r=null),(i="function"!=typeof t)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(i=!1)),i&&o?c[c.length-1]+=r:c===T?c=[r]:c.push(r),o=i;var a=new e;return a.nodeName=t,a.children=c,a.attributes=null==n?void 0:n,a.key=null==n?void 0:n.key,void 0!==P.vnode&&P.vnode(a),a}function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t,e){return n(t.nodeName,o(o({},t.attributes),e),arguments.length>2?[].slice.call(arguments,2):t.children)}function i(t){!t.__d&&(t.__d=!0)&&1==A.push(t)&&(P.debounceRendering||R)(u)}function u(){var t,e=A;for(A=[];t=e.pop();)t.__d&&N(t)}function c(t,e,n){return"string"==typeof e||"number"==typeof e?void 0!==t.splitText:"string"==typeof e.nodeName?!t._componentConstructor&&a(t,e.nodeName):n||t._componentConstructor===e.nodeName}function a(t,e){return t.__n===e||t.nodeName.toLowerCase()===e.toLowerCase()}function l(t){var e=o({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}function p(t,e){var n=e?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t);return n.__n=t,n}function s(t){var e=t.parentNode;e&&e.removeChild(t)}function f(t,e,n,o,r){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)n&&n(null),o&&o(t);else if("class"!==e||r)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"==typeof o[i]&&!1===L.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var u=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,h,u):t.removeEventListener(e,h,u),(t.__l||(t.__l={}))[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t)d(t,e,null==o?"":o),null!=o&&!1!==o||t.removeAttribute(e);else{var c=r&&e!==(e=e.replace(/^xlink\:?/,""));null==o||!1===o?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function d(t,e,n){try{t[e]=n}catch(t){}}function h(t){return this.__l[t.type](P.event&&P.event(t)||t)}function _(){for(var t;t=W.pop();)P.afterMount&&P.afterMount(t),t.componentDidMount&&t.componentDidMount()}function v(t,e,n,o,r,i){K++||(D=null!=r&&void 0!==r.ownerSVGElement,I=null!=t&&!("__preactattr_"in t));var u=m(t,e,n,o,i);return r&&u.parentNode!==r&&r.appendChild(u),--K||(I=!1,i||_()),u}function m(t,e,n,o,r){var i=t,u=D;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),y(t,!0))),i.__preactattr_=!0,i;var c=e.nodeName;if("function"==typeof c)return O(t,e,n,o);if(D="svg"===c||"foreignObject"!==c&&D,c+="",(!t||!a(t,c))&&(i=p(c,D),t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),y(t,!0)}var l=i.firstChild,s=i.__preactattr_,f=e.children;if(null==s){s=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)s[d[h].name]=d[h].value}return!I&&f&&1===f.length&&"string"==typeof f[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=f[0]&&(l.nodeValue=f[0]):(f&&f.length||null!=l)&&b(i,f,n,o,I||null!=s.dangerouslySetInnerHTML),x(i,e.attributes,s),D=u,i}function b(t,e,n,o,r){var i,u,a,l,p,f=t.childNodes,d=[],h={},_=0,v=0,b=f.length,g=0,x=e?e.length:0;if(0!==b)for(var C=0;C<b;C++){var w=f[C],j=w.__preactattr_,k=x&&j?w._component?w._component.__k:j.key:null;null!=k?(_++,h[k]=w):(j||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(d[g++]=w)}if(0!==x)for(var C=0;C<x;C++){l=e[C],p=null;var k=l.key;if(null!=k)_&&void 0!==h[k]&&(p=h[k],h[k]=void 0,_--);else if(!p&&v<g)for(i=v;i<g;i++)if(void 0!==d[i]&&c(u=d[i],l,r)){p=u,d[i]=void 0,i===g-1&&g--,i===v&&v++;break}p=m(p,l,n,o),a=f[C],p&&p!==t&&p!==a&&(null==a?t.appendChild(p):p===a.nextSibling?s(a):t.insertBefore(p,a))}if(_)for(var C in h)void 0!==h[C]&&y(h[C],!1);for(;v<=g;)void 0!==(p=d[g--])&&y(p,!1)}function y(t,e){var n=t._component;n?U(n):(null!=t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),!1!==e&&null!=t.__preactattr_||s(t),g(t))}function g(t){for(t=t.lastChild;t;){var e=t.previousSibling;y(t,!0),t=e}}function x(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||f(t,o,n[o],n[o]=void 0,D);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||f(t,o,n[o],n[o]=e[o],D)}function C(t){var e=t.constructor.name;($[e]||($[e]=[])).push(t)}function w(t,e,n){var o,r=$[t.name];if(t.prototype&&t.prototype.render?(o=new t(e,n),M.call(o,e,n)):(o=new M(e,n),o.constructor=t,o.render=j),r)for(var i=r.length;i--;)if(r[i].constructor===t){o.__b=r[i].__b,r.splice(i,1);break}return o}function j(t,e,n){return this.constructor(t,n)}function k(t,e,n,o,r){t.__x||(t.__x=!0,(t.__r=e.ref)&&delete e.ref,(t.__k=e.key)&&delete e.key,!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o),o&&o!==t.context&&(t.__c||(t.__c=t.context),t.context=o),t.__p||(t.__p=t.props),t.props=e,t.__x=!1,0!==n&&(1!==n&&!1===P.syncComponentUpdates&&t.base?i(t):N(t,1,r)),t.__r&&t.__r(t))}function N(t,e,n,r){if(!t.__x){var i,u,c,a=t.props,p=t.state,s=t.context,f=t.__p||a,d=t.__s||p,h=t.__c||s,m=t.base,b=t.__b,g=m||b,x=t._component,C=!1;if(m&&(t.props=f,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(a,p,s)?C=!0:t.componentWillUpdate&&t.componentWillUpdate(a,p,s),t.props=a,t.state=p,t.context=s),t.__p=t.__s=t.__c=t.__b=null,t.__d=!1,!C){i=t.render(a,p,s),t.getChildContext&&(s=o(o({},s),t.getChildContext()));var j,O,M=i&&i.nodeName;if("function"==typeof M){var E=l(i);u=x,u&&u.constructor===M&&E.key==u.__k?k(u,E,1,s,!1):(j=u,t._component=u=w(M,E,s),u.__b=u.__b||b,u.__u=t,k(u,E,0,s,!1),N(u,1,n,!0)),O=u.base}else c=g,j=x,j&&(c=t._component=null),(g||1===e)&&(c&&(c._component=null),O=v(c,i,s,n||!m,g&&g.parentNode,!0));if(g&&O!==g&&u!==x){var S=g.parentNode;S&&O!==S&&(S.replaceChild(O,g),j||(g._component=null,y(g,!1)))}if(j&&U(j),t.base=O,O&&!r){for(var T=t,R=t;R=R.__u;)(T=R).base=O;O._component=T,O._componentConstructor=T.constructor}}if(!m||n?W.unshift(t):C||(t.componentDidUpdate&&t.componentDidUpdate(f,d,h),P.afterUpdate&&P.afterUpdate(t)),null!=t.__h)for(;t.__h.length;)t.__h.pop().call(t);K||r||_()}}function O(t,e,n,o){for(var r=t&&t._component,i=r,u=t,c=r&&t._componentConstructor===e.nodeName,a=c,p=l(e);r&&!a&&(r=r.__u);)a=r.constructor===e.nodeName;return r&&a&&(!o||r._component)?(k(r,p,3,n,o),t=r.base):(i&&!c&&(U(i),t=u=null),r=w(e.nodeName,p,n),t&&!r.__b&&(r.__b=t,u=null),k(r,p,1,n,o),t=r.base,u&&t!==u&&(u._component=null,y(u,!1))),t}function U(t){P.beforeUnmount&&P.beforeUnmount(t);var e=t.base;t.__x=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?U(n):e&&(e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),t.__b=e,s(e),C(t),g(e)),t.__r&&t.__r(null)}function M(t,e){this.__d=!0,this.context=e,this.props=t,this.state=this.state||{}}function E(t,e,n){return v(n,t,{},!1,e,!1)}var P={},S=[],T=[],R="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,L=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,A=[],W=[],K=0,D=!1,I=!1,$={};o(M.prototype,{setState:function(t,e){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof t?t(n,this.props):t),e&&(this.__h=this.__h||[]).push(e),i(this)},forceUpdate:function(t){t&&(this.__h=this.__h||[]).push(t),N(this,2)},render:function(){}});var V={h:n,createElement:n,cloneElement:r,Component:M,render:E,rerender:u,options:P};t.exports=V}()},oe76:function(t){t.exports={menu:"menu__2G6rj",active:"active__1qs-H",contact:"contact__GYBx3",experience:"experience__2Ya07",blog:"blog__1jSNT",projects:"projects__2kU72"}},pwNi:function(t,e,n){"use strict";var o=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(t){return t&&t.default?t.default:t};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,u=function(){var t=r(n("JkW7"));i=(0,o.render)((0,o.h)(t),document.body,i)};u()}}});
//# sourceMappingURL=bundle.363a2.js.map