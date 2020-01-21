"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRoutes = makeRoutes;
exports.getRoutesConfig = void 0;

var _react = _interopRequireDefault(require("react"));

var _Route = _interopRequireDefault(require("react-router-dom/Route"));

var _Switch = _interopRequireDefault(require("react-router-dom/Switch"));

var _reactDocumentMeta = _interopRequireDefault(require("react-document-meta"));

var _MainLayout = _interopRequireDefault(require("./Layouts/MainLayout"));

var _Dashboard = _interopRequireDefault(require("./components/Dashboard/Dashboard"));

var _NotFound = _interopRequireDefault(require("./components/NotFound/NotFound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

var getRoutesConfig = function getRoutesConfig() {
  return [{
    name: 'dashboard',
    exact: true,
    path: '/',
    meta: {
      description: 'ClearScore : Assessment to mimic the dashboard',
      meta: {
        charSet: 'utf-8',
        name: {
          keywords: 'react,example'
        }
      },
      title: 'ClearScore Assessment - Dashboard'
    },
    label: 'Dashboard',
    component: _Dashboard.default
  }];
};

exports.getRoutesConfig = getRoutesConfig;

function makeRoutes() {
  return _react.default.createElement(_MainLayout.default, null, _react.default.createElement(_Switch.default, null, getRoutesConfig().map(function (_ref) {
    var Component = _ref.component,
        meta = _ref.meta,
        props = _objectWithoutProperties(_ref, ["component", "meta"]);

    return _react.default.createElement(_Route.default, _extends({}, props, {
      key: props.name,
      render: function render(matchProps) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactDocumentMeta.default, meta), _react.default.createElement(Component, matchProps));
      }
    }));
  }), _react.default.createElement(_Route.default, {
    title: "Page Not Found",
    component: _NotFound.default
  })));
}