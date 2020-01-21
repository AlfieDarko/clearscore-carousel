"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = new _debug.default('cs: Error500');

var _default = function _default(_ref) {
  var error = _ref.error;
  return log(error) || _react.default.createElement("html", {
    lang: "en"
  }, _react.default.createElement("head", null, _react.default.createElement("title", null, "Error 500 - Man down!")), _react.default.createElement("body", {
    id: "error-app"
  }, _react.default.createElement("div", {
    className: "layout__main"
  }, _react.default.createElement("h1", null, "Error 500"), _react.default.createElement("p", null, "Man Down"), _react.default.createElement("hr", null), _react.default.createElement("p", null, error.toString()))));
};

exports.default = _default;
module.exports = exports["default"];