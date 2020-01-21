"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderApp;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _server = require("react-dom/server");

var _StaticRouter = _interopRequireDefault(require("react-router-dom/StaticRouter"));

var _matchPath = _interopRequireDefault(require("react-router-dom/matchPath"));

var _routes = require("../../app/routes");

var _render = _interopRequireDefault(require("../utils/render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function getMatch(routesArray, url) {
  return routesArray.find(function (route) {
    return (0, _matchPath.default)(url, {
      path: route.path,
      exact: route.exact,
      strict: false
    });
  });
}

var Markup = function Markup(_ref) {
  var url = _ref.url,
      context = _ref.context;
  return _react.default.createElement(_StaticRouter.default, {
    location: url,
    context: context
  }, (0, _routes.makeRoutes)());
};

Markup.propTypes = {
  url: _propTypes.default.string.isRequired,
  context: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};

function renderApp(_ref2) {
  var js = _ref2.js,
      css = _ref2.css;
  var routesArray = (0, _routes.getRoutesConfig)();
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx, next) {
        var routerContext, markup, match;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                routerContext = {};
                _context.next = 3;
                return next();

              case 3:
                try {
                  markup = (0, _server.renderToString)(Markup({
                    url: ctx.request.url,
                    context: routerContext
                  }));
                  match = getMatch(routesArray, ctx.request.url);

                  if (routerContext.url) {
                    ctx.status = 301;
                    ctx.redirect(routerContext.location.pathname + routerContext.location.search);
                  } else {
                    ctx.status = match ? 200 : 404;
                  }

                  ctx.body = (0, _render.default)({
                    css: css,
                    js: js,
                    markup: markup
                  });
                } catch (error) {
                  ctx.status = 500;
                  ctx.body = (0, _render.default)({
                    error: error
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}

module.exports = exports["default"];