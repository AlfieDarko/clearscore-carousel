"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = errorHandler;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _debug = _interopRequireDefault(require("debug"));

var _render = _interopRequireDefault(require("../utils/render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var log = (0, _debug.default)('cs:handleError.js');

function errorHandler(renderer) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(ctx, next) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return next();

              case 3:
                _context.next = 11;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);

                if (process.env.NODE_ENV === 'production') {
                  log(_context.t0); // send to real logging system
                } else {
                  log(_context.t0);
                }

                ctx.response.status = _context.t0.status || 500;

                if (renderer) {
                  ctx.type = 'html';
                  ctx.body = (0, _render.default)({
                    error: _context.t0
                  });
                } else if (_context.t0.status === 401 || _context.t0.status === 403) {
                  ctx.status = _context.t0.status;
                  ctx.body = {
                    message: 'Protected resource, you are unauthorized',
                    error: _context.t0
                  };
                } else {
                  ctx.type = 'json';
                  ctx.body = {
                    error: _context.t0
                  };
                }

                ctx.app.emit('error', _context.t0, ctx);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

module.exports = exports["default"];