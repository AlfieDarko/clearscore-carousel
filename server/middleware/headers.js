"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = headers;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function headers() {
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
                _context.next = 2;
                return next();

              case 2:
                if (ctx.body && ctx.response.status === 200) {
                  ctx.set('Cache-Control', 'no-cache, no-store, must-revalidate');
                  ctx.set('Pragma', 'no-cache');
                  ctx.set('Expires', 0);

                  if (typeof ctx.body === 'string') {
                    ctx.set('Content-Length', ctx.body.length);
                    ctx.set('etag', _crypto.default.createHash('md5').update(ctx.body).digest('hex'));
                  }
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}

module.exports = exports["default"];