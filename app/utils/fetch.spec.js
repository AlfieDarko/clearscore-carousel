"use strict";

var _chance = _interopRequireDefault(require("chance"));

var _environment = _interopRequireDefault(require("../../config/environment"));

var _fetch = require("./fetch");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stubUrl;
var stubOptions;
var chance = new _chance.default();
describe('fetch', function () {
  describe(' URL ', function () {
    var mockFetch = jest.fn();
    beforeEach(function () {
      global.fetch = mockFetch.mockImplementation(function (url, options) {
        stubUrl = url;
        stubOptions = options;
        return Promise.resolve({
          status: 200,
          text: jest.fn()
        });
      });
    });
    afterEach(function () {
      mockFetch.mockRestore();
    });
    it('should return url with localhost by default', function (done) {
      var endpoint = "/".concat(chance.word());
      (0, _fetch.fetchUrl)(endpoint).then(function () {
        expect(stubUrl).toEqual("http://localhost:".concat(_environment.default.PORT).concat(endpoint));
        done();
      }).catch(function (e) {
        done(e);
      });
    });
    it('should return given url if it contains double-slash', function (done) {
      var endpoint = "//".concat(chance.word());
      (0, _fetch.fetchUrl)(endpoint).then(function () {
        expect(stubUrl).toEqual(endpoint);
        done();
      }).catch(function (e) {
        done(e);
      });
    });
    it('should return request options with data', function (done) {
      var endpoint = chance.word();
      var data = chance.sentence();
      (0, _fetch.fetchUrl)(endpoint, {
        data: data
      }).then(function () {
        expect(stubOptions.data).toEqual(data);
        done();
      }).catch(function (e) {
        done(e);
      });
    });
  });
  describe(' graphQL ', function () {
    var mockFetch = jest.fn();
    var mockData;
    beforeEach(function () {
      mockData = "{\"data\": \"".concat(chance.word(), "\"}");
      global.fetch = mockFetch.mockImplementation(function (url, options) {
        stubUrl = url;
        stubOptions = options;
        return Promise.resolve({
          status: 200,
          text: jest.fn().mockReturnValue(mockData)
        });
      });
    });
    afterEach(function () {
      mockFetch.mockRestore();
    });
    it('should return request options', function (done) {
      var data = chance.sentence();
      (0, _fetch.fetchGraphQL)(data).then(function () {
        expect(stubOptions.method).toEqual('POST');
        expect(stubOptions.headers['Content-Type']).toEqual('application/graphql');
        done();
      }).catch(function (e) {
        done(e);
      });
    });
    it('should return request options with data', function (done) {
      var data = chance.sentence();
      (0, _fetch.fetchGraphQL)(data).then(function () {
        expect(stubOptions.body).toEqual(data);
        done();
      }).catch(function (e) {
        done(e);
      });
    });
    it('should return graphQL request options with params', function (done) {
      var data = chance.sentence();
      var params = chance.sentence();
      (0, _fetch.fetchGraphQL)(data, params).then(function () {
        expect(stubOptions.params).toEqual(params);
        done();
      }).catch(function (e) {
        done(e);
      });
    });
  });
});