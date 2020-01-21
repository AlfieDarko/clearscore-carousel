"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bem = _interopRequireDefault(require("../utils/bem"));

require("./mainLayout.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = (0, _bem.default)({
  block: 'layout'
});

var MainLayout = function MainLayout(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", {
    className: cn(null, 'main')
  }, _react.default.createElement("nav", {
    className: cn('nav')
  }, "ClearScore"), _react.default.createElement("main", {
    className: cn('content')
  }, children), _react.default.createElement("footer", {
    className: cn('footer')
  }, "Footer"));
};

MainLayout.propTypes = {
  children: _propTypes.default.element.isRequired
};
var _default = MainLayout;
exports.default = _default;
module.exports = exports["default"];