"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return _react.default.createElement("section", {
    id: "not-found"
  }, _react.default.createElement("h2", null, "How did you end up here?"), _react.default.createElement("p", null, 'The page you\'re looking for doesn\'t exist.'), _react.default.createElement("aside", null, _react.default.createElement("p", null, "A couple of things you can try:"), _react.default.createElement("ul", null, _react.default.createElement("li", null, "Did you type in a web address to get here? Check you typed it in correctly."), _react.default.createElement("li", null, "Try to find the page you were looking for by clicking My Account."))));
};

exports.default = _default;
module.exports = exports["default"];