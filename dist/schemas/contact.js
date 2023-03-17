'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var schema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  message: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true
});
module.exports = _mongoose["default"].model('contacts', schema);