"use strict";

var _chance = _interopRequireDefault(require("chance"));

var _bem = _interopRequireDefault(require("./bem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var chance = new _chance.default();
var block;
var prefix;
var element;
var modifier;
var modifiers;
var classObj;
var util;
var utils;
var bem;
describe('bem test', function () {
  beforeEach(function () {
    element = chance.word();
    util = chance.word();
    utils = [chance.word(), chance.word()];
    modifier = chance.word();
    modifiers = [chance.word(), chance.word()];
    classObj = {
      'valid-class': true,
      'invalid-class': false
    };
    block = chance.word();
    prefix = "".concat(chance.word(), "-");
  });
  describe('block class', function () {
    beforeEach(function () {
      bem = (0, _bem.default)({
        block: block
      });
    });
    it('default', function () {
      expect(bem()).toEqual(block);
    });
    it('with element', function () {
      expect(bem(element)).toEqual("".concat(block, "__").concat(element));
    });
    it('with single string modifier', function () {
      expect(bem(null, modifier)).toEqual("".concat(block, " ").concat(block, "--").concat(modifier));
    });
    it('with array of string modifiers', function () {
      expect(bem(null, modifiers)).toEqual("".concat(block, " ").concat(block, "--").concat(modifiers[0], " ").concat(block, "--").concat(modifiers[1]));
    });
    it('with object of modifiers', function () {
      expect(bem(null, classObj)).toEqual("".concat(block, " ").concat(block, "--valid-class"));
    });
    it('with single string util', function () {
      expect(bem(null, null, util)).toEqual("".concat(block, " ").concat(util));
    });
    it('with array of string utils', function () {
      expect(bem(null, null, utils)).toEqual("".concat(block, " ").concat(utils[0], " ").concat(utils[1]));
    });
    it('with object of utils', function () {
      expect(bem(null, null, classObj)).toEqual("".concat(block, " valid-class"));
    });
    it('with element & single string modifier', function () {
      expect(bem(element, modifier)).toEqual("".concat(block, "__").concat(element, " ").concat(block, "__").concat(element, "--").concat(modifier));
    });
    it('with element & single string util', function () {
      expect(bem(element, null, util)).toEqual("".concat(block, "__").concat(element, " ").concat(util));
    });
    it('with single string modifier & single string util', function () {
      expect(bem(null, modifier, util)).toEqual("".concat(block, " ").concat(block, "--").concat(modifier, " ").concat(util));
    });
    it('with element & single string modifier & single string util', function () {
      expect(bem(element, modifier, util)).toEqual("".concat(block, "__").concat(element, " ").concat(block, "__").concat(element, "--").concat(modifier, " ").concat(util));
    });
    it('should handle a dynamic keys/complex structures', function () {
      var cn = (0, _bem.default)({
        block: 'accordion'
      });
      var expand = 'xs';
      var wasExpanded = true;
      var expanded = false;
      var className = cn(null, _defineProperty({
        visible: wasExpanded && expanded,
        hidden: wasExpanded && !expanded
      }, "visible-".concat(expand), !!expand));
      expect(className).toEqual('accordion accordion--hidden accordion--visible-xs');
    });
    it('should handle modifiers that are all false without returning an extra space', function () {
      var cn = (0, _bem.default)({
        block: 'accordion'
      });
      var className = cn(null, {
        visible: false
      });
      expect(className).toEqual('accordion');
    });
  });
  describe('block with prefix', function () {
    beforeEach(function () {
      bem = (0, _bem.default)({
        block: block,
        prefix: prefix
      });
    });
    it('default', function () {
      expect(bem()).toEqual("".concat(prefix).concat(block));
    });
    it('with element', function () {
      expect(bem(element)).toEqual("".concat(prefix).concat(block, "__").concat(element));
    });
    it('with single string modifier', function () {
      expect(bem(null, modifier)).toEqual("".concat(prefix).concat(block, " ").concat(prefix).concat(block, "--").concat(modifier));
    });
    it('with array of string modifiers', function () {
      expect(bem(null, modifiers)).toEqual("".concat(prefix).concat(block, " ").concat(prefix).concat(block, "--").concat(modifiers[0], " ").concat(prefix).concat(block, "--").concat(modifiers[1]));
    });
    it('with object of modifiers', function () {
      expect(bem(null, classObj)).toEqual("".concat(prefix).concat(block, " ").concat(prefix).concat(block, "--valid-class"));
    });
    it('with single string util', function () {
      expect(bem(null, null, util)).toEqual("".concat(prefix).concat(block, " ").concat(util));
    });
    it('with array of string utils', function () {
      expect(bem(null, null, utils)).toEqual("".concat(prefix).concat(block, " ").concat(utils[0], " ").concat(utils[1]));
    });
    it('with object of utils', function () {
      expect(bem(null, null, classObj)).toEqual("".concat(prefix).concat(block, " valid-class"));
    });
    it('with element & single string modifier', function () {
      expect(bem(element, modifier)).toEqual("".concat(prefix).concat(block, "__").concat(element, " ").concat(prefix).concat(block, "__").concat(element, "--").concat(modifier));
    });
    it('with element & single string util', function () {
      expect(bem(element, null, util)).toEqual("".concat(prefix).concat(block, "__").concat(element, " ").concat(util));
    });
    it('with single string modifier & single string util', function () {
      expect(bem(null, modifier, util)).toEqual("".concat(prefix).concat(block, " ").concat(prefix).concat(block, "--").concat(modifier, " ").concat(util));
    });
    it('with element & single string modifier & single string util', function () {
      expect(bem(element, modifier, util)).toEqual("".concat(prefix).concat(block, "__").concat(element, " ").concat(prefix).concat(block, "__").concat(element, "--").concat(modifier, " ").concat(util));
    });
    it('should handle a dynamic keys/complex structures', function () {
      var cn = (0, _bem.default)({
        prefix: 'ac-',
        block: 'accordion'
      });
      var expand = 'xs';
      var wasExpanded = true;
      var expanded = false;
      var className = cn(null, _defineProperty({
        visible: wasExpanded && expanded,
        hidden: wasExpanded && !expanded
      }, "visible-".concat(expand), !!expand));
      expect(className).toEqual('ac-accordion ac-accordion--hidden ac-accordion--visible-xs');
    });
    it('should handle modifiers that are all false without returning an extra space', function () {
      var cn = (0, _bem.default)({
        prefix: 'ac-',
        block: 'accordion'
      });
      var className = cn(null, {
        visible: false
      });
      expect(className).toEqual('ac-accordion');
    });
  });
});