"use strict";

function toClass() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (typeof classes === 'string') {
    return (prefix + classes).trim();
  }

  var arrClasses = Array.isArray(classes) ? classes : Object.keys(classes).filter(function (className) {
    return classes[className];
  });
  return arrClasses.reduce(function (prev, currClass) {
    return "".concat(prev ? "".concat(prev, " ") : '').concat(prefix + currClass);
  }, '');
}

var bem = function bem(_ref) {
  var _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix,
      block = _ref.block,
      _ref$elementPrefix = _ref.elementPrefix,
      elementPrefix = _ref$elementPrefix === void 0 ? '__' : _ref$elementPrefix,
      _ref$modifierPrefix = _ref.modifierPrefix,
      modifierPrefix = _ref$modifierPrefix === void 0 ? '--' : _ref$modifierPrefix;
  return function () {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var utils = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var blockClass = "".concat(prefix).concat(block);
    var elementClass = element ? toClass(element, blockClass + elementPrefix) : '';
    var blockModifier = modifier && !elementClass ? " ".concat(toClass(modifier, blockClass + modifierPrefix)) : '';
    var elementModifier = modifier && elementClass ? " ".concat(toClass(modifier, elementClass + modifierPrefix)) : '';
    var utilsClass = utils ? " ".concat(toClass(utils)) : '';
    var bemClasses = element ? elementClass + elementModifier : blockClass + blockModifier;
    return (bemClasses + utilsClass).trim();
  };
};

module.exports = bem;