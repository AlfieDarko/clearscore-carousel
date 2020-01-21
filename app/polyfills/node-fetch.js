"use strict";

var _this = void 0;

var realFetch = require('node-fetch');

module.exports = function (url, options) {
  var secureUrl = /^\/\//.test(url) ? "https:".concat(url) : url;
  return realFetch.call(_this, secureUrl, options);
};

if (!global.fetch) {
  global.fetch = module.exports;
  global.Response = realFetch.Response;
  global.Headers = realFetch.Headers;
  global.Request = realFetch.Request;
}