'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setError = void 0;

var setError = function setError(code, message) {
  var error = new Error();
  error.code = code;
  error.message = message;
  return error;
};

exports.setError = setError;