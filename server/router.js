"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRoutes = setRoutes;
exports.router = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _debug = _interopRequireDefault(require("debug"));

var _SSRReactApp = _interopRequireDefault(require("./middleware/SSR-react-app"));

var _paths = require("../config/paths");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug.default)('cs:router');
var router = new _koaRouter.default();
exports.router = router;
var staticRoute = (0, _koaStatic.default)(_paths.DIST);
staticRoute._name = 'koaStatic /dist'; // eslint-disable-line no-underscore-dangle

function setRoutes(assets) {
  log('adding react routes');
  router.use(staticRoute).get('/(.*)', (0, _SSRReactApp.default)(assets));
}