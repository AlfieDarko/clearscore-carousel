"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _debug = _interopRequireDefault(require("debug"));

var _koa = _interopRequireDefault(require("koa"));

var _koaCompress = _interopRequireDefault(require("koa-compress"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _koaProxy = _interopRequireDefault(require("koa-proxy"));

var _handleError = _interopRequireDefault(require("./middleware/handle-error"));

var _headers = _interopRequireDefault(require("./middleware/headers"));

var _router = require("./router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _koa.default();
var log = (0, _debug.default)('cs:server.js');
log('starting');
server.use((0, _koaStatic.default)('./src/server/assets'));

if (process.env.NODE_ENV === 'development') {
  server.use((0, _koaProxy.default)({
    host: 'http://localhost:8080',
    // point to webpack dev server
    match: /^\/static\//
  }));
}

server.use((0, _handleError.default)());
server.use((0, _koaCompress.default)({
  threshold: 2048
}));
server.use((0, _headers.default)());

var _default = function _default(assets) {
  (0, _router.setRoutes)(assets);
  server.use(_router.router.routes());
  return server;
};

exports.default = _default;
module.exports = exports["default"];