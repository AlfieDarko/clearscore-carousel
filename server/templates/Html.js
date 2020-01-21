"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDocumentMeta = _interopRequireDefault(require("react-document-meta"));

var _utils = require("../../app/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
var Html = function Html(_ref) {
  var js = _ref.js,
      css = _ref.css,
      markup = _ref.markup;
  return _react.default.createElement("html", {
    lang: "en"
  }, _react.default.createElement("head", null, _react.default.createElement("meta", {
    charSet: "utf-8"
  }), _utils.hasWindow ? null : _reactDocumentMeta.default.renderAsReact(), _react.default.createElement("meta", {
    httpEquiv: "x-dns-prefetch-control",
    content: "on"
  }), _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1.0"
  })), _react.default.createElement("body", null, _react.default.createElement("div", {
    id: "stylesheets",
    dangerouslySetInnerHTML: {
      __html: css.join('')
    }
  }), _react.default.createElement("div", {
    id: "html",
    dangerouslySetInnerHTML: {
      __html: markup
    }
  }), _react.default.createElement("div", {
    id: "scripts",
    dangerouslySetInnerHTML: {
      __html: js.join('')
    }
  })));
};

Html.propTypes = {
  markup: _propTypes.default.string.isRequired,
  js: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  css: _propTypes.default.arrayOf(_propTypes.default.string).isRequired
};
var _default = Html;
exports.default = _default;
module.exports = exports["default"];