"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _Html = _interopRequireDefault(require("../templates/Html"));

var _Error = _interopRequireDefault(require("../templates/Error500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function renderPage(page) {
  return "<!doctype html>".concat((0, _server.renderToString)(page));
}

var render = function render(_ref) {
  var error = _ref.error,
      props = _objectWithoutProperties(_ref, ["error"]);

  return error ? renderPage(_react.default.createElement(_Error.default, {
    error: error
  })) : renderPage(_react.default.createElement(_Html.default, props));
};

var _default = render;
exports.default = _default;
module.exports = exports["default"];