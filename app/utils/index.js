"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "fetchUrl", {
  enumerable: true,
  get: function get() {
    return _fetch.fetchUrl;
  }
});
Object.defineProperty(exports, "getJSON", {
  enumerable: true,
  get: function get() {
    return _fetch.getJSON;
  }
});
Object.defineProperty(exports, "postJSON", {
  enumerable: true,
  get: function get() {
    return _fetch.postJSON;
  }
});
Object.defineProperty(exports, "fetchGraphQL", {
  enumerable: true,
  get: function get() {
    return _fetch.fetchGraphQL;
  }
});
exports.localUrl = exports.isBrowser = exports.hasWindow = void 0;

var _fetch = require("./fetch");

var navigator = global.navigator && global.navigator.userAgent; // hasWindow = true for tests + client

var hasWindow = typeof window !== 'undefined'; // isBrowser = true for client only

exports.hasWindow = hasWindow;
var isBrowser = typeof navigator !== 'undefined' && navigator.indexOf('jsdom/') === -1 && navigator.indexOf('Node.js') === -1;
exports.isBrowser = isBrowser;

var getLocalUrl = function getLocalUrl() {
  if (isBrowser) {
    var _window = window,
        location = _window.location;
    return location.origin;
  }

  return "http://localhost:".concat(process.env.PORT);
};

var localUrl = getLocalUrl();
exports.localUrl = localUrl;