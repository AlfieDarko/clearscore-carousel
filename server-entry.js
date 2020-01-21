"use strict";

require('./config/environment');

require('./app/polyfills/node-fetch');

require('./server/utils/assets-helper');

function getAssets() {
  return process.env.NODE_ENV === 'production' ? require('../compiled/webpack-assets.json') : {
    app: {
      js: '/static/app.js',
      css: '/static/app.css'
    },
    polyfills: {
      js: '/static/polyfills.js'
    }
  };
}

var webpackAssets = getAssets();

var mapWebpackAssets = require('./server/utils/mapWebpackAssets');

var assets = mapWebpackAssets(webpackAssets);

var createServer = require('./server/server');

createServer(assets).listen(process.env.PORT, function () {
  console.log("listening at http://localhost:".concat(process.env.PORT));
});