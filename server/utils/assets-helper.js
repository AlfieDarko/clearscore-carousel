"use strict";

var hook = require('node-hook');

var SvgLoader = require('svg-inline-loader');

hook.hook('.scss', function () {
  return {};
});
hook.hook('.svg', function (source) {
  var markup = SvgLoader.getExtractedSVG(source, {
    removeSVGTagAttrs: false
  });
  return "module.exports =  ".concat(JSON.stringify(markup));
});