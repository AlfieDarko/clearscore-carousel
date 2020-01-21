"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapWebpackAssets;

function mapWebpackAssets(assetsObj) {
  var assets = {
    js: [],
    css: []
  };
  Object.keys(assetsObj).forEach(function (key) {
    var _assetsObj$key = assetsObj[key],
        js = _assetsObj$key.js,
        css = _assetsObj$key.css;

    if (js && key === 'polyfills') {
      assets.js.unshift("\n        <script>\n        // synchronously polyfill stuff needed for the app in old browsers\n        if (!window.location.origin || !window.Promise || !Array.prototype.find) {\n          let js = document.createElement('script');\n          js.src = '".concat(js, "'\n          document.body.appendChild(js);\n        }\n        </script>\n      "));
    } else if (js && key === 'vendor') {
      assets.js.unshift("<script src=\"".concat(js, "\"></script>"));
    } else if (js) {
      assets.js.push("<script src=\"".concat(js, "\"></script>"));
    }

    if (css) assets.css.push("<link href=\"".concat(css, "\" rel=\"stylesheet\" />"));
  });
  return assets;
}

module.exports = exports["default"];