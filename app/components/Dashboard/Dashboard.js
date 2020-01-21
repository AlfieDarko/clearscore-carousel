"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CreditScore = require("../SlideContent/CreditScore/CreditScore");

var _LongTermDebt = require("../SlideContent/LongTermDebt");

var _Carousesl = require("../Carousel/Carousesl");

require("./dashboard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return (// TODO: Fetch calls from the dashboard
    _react.default.createElement("div", null, _react.default.createElement(_Carousesl.Carousel, null, _react.default.createElement(_CreditScore.CreditScoreSlide, {
      score: 800,
      title: "Credit Score"
    }), _react.default.createElement(_LongTermDebt.LongTermDebtSlide, {
      title: "Long Term Debt",
      longTermDebt: 500,
      changeInLongTermDebt: 300
    })))
  );
};

exports.default = _default;
module.exports = exports["default"];