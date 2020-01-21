"use strict";

// for ie
var Promise = require('promise-polyfill');

if (!window.Promise) {
  window.Promise = Promise;
}