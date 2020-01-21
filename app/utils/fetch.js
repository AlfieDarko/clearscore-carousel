"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkStatus = checkStatus;
exports.fetchGraphQL = exports.postJSON = exports.getJSON = exports.fetchUrl = void 0;

var _utils = require("../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function queryParams(params) {
  return Object.keys(params).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
  }).join('&');
}

function checkStatus(response) {
  if (response.status < 200 || response.status >= 500) {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  return response;
}

var jsonOpts = function jsonOpts(method, data) {
  return {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: data && JSON.stringify(data)
  };
};

var graphQLOpts = function graphQLOpts(data, params) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/graphql',
      credentials: 'same-origin'
    },
    body: data,
    params: params
  };
};

var fetchUrl = function fetchUrl(endpoint) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var url = endpoint.indexOf('//') > -1 ? endpoint : "".concat(_utils.localUrl).concat(endpoint);

  if (opts.params) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(opts.params);
  }

  return fetch(url, _objectSpread({}, opts)).then(checkStatus).then(function (response) {
    return response.text();
  }).catch(function (error) {
    throw new Error("request failed ".concat(error));
  });
};

exports.fetchUrl = fetchUrl;

var getJSON = function getJSON(url, options) {
  return fetchUrl(url, jsonOpts('GET', null, options)).then(function (data) {
    return JSON.parse(data);
  });
};

exports.getJSON = getJSON;

var postJSON = function postJSON(url, data, options) {
  return fetchUrl(url, jsonOpts('POST', data, options));
};

exports.postJSON = postJSON;

var fetchGraphQL = function fetchGraphQL(data, variables) {
  return fetchUrl('/graphql', graphQLOpts(data, variables)).then(function (response) {
    return JSON.parse(response);
  });
};

exports.fetchGraphQL = fetchGraphQL;