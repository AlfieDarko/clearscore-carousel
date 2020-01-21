"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _debug = _interopRequireDefault(require("debug"));

require("./config/environment");

var _Root = _interopRequireDefault(require("./app/Root"));

require("./styles/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = (0, _debug.default)('cs:client-entry');

try {
  _reactDom.default.render(_react.default.createElement(_Root.default, null), document.getElementById('html'));
} catch (err) {
  log('Render error', err);
}