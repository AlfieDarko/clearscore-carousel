"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Router = void 0;

var _react = _interopRequireDefault(require("react"));

var _BrowserRouter = _interopRequireDefault(require("react-router-dom/BrowserRouter"));

var _StaticRouter = _interopRequireDefault(require("react-router-dom/StaticRouter"));

var _routes = require("./routes");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// exported to be used in tests
var Router = _utils.isBrowser ? _BrowserRouter.default : _StaticRouter.default;
exports.Router = Router;

var _default = function _default(props) {
  return _react.default.createElement(Router, props, (0, _routes.makeRoutes)());
};

exports.default = _default;