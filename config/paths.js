"use strict";

var path = require('path');

var ROOT = path.join(process.cwd());
var SRC = path.join(ROOT, 'src');
var SERVER = path.join(SRC, 'server');
var COMPILED = path.join(ROOT, 'compiled');
var DIST = path.join(COMPILED, 'dist');
var APP = path.join(SRC, 'app');
var ICONS = path.join(SRC, 'icons');
var STYLES = path.join(SRC, 'styles');
var TESTS = path.join(ROOT, 'tests');
var ASSET_FILE = path.join(SERVER, 'webpack-assets.json');
module.exports = {
  ROOT: ROOT,
  SRC: SRC,
  DIST: DIST,
  COMPILED: COMPILED,
  APP: APP,
  ICONS: ICONS,
  STYLES: STYLES,
  TESTS: TESTS,
  SERVER: SERVER,
  ASSET_FILE: ASSET_FILE
};