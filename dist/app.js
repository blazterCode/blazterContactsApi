"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _utils = require("./helpers/utils");

var _database = require("./database.js");

var _Contacts = _interopRequireDefault(require("./routes/Contacts"));

var app = (0, _express["default"])();
(0, _database.connectDB)();
app.set('port', process.env.PORT || 3001);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json({
  limit: '1mb'
}));
app.use(_express["default"].urlencoded({
  extended: true,
  limit: '1mb'
}));
app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use((0, _cors["default"])({
  origin: function origin(_origin, calback) {
    return calback(null, true);
  },
  credentials: true
}));
app.use(_Contacts["default"]);
app.use('*', function (_req, _res, next) {
  return next((0, _utils.setError)(404, 'Route not found'));
});
app.use(function (error, _req, res, _next) {
  return res.status(error.code || 500).json(error.message || 'Unexpected error');
});
app.disable('x-powered-by');
var _default = app;
exports["default"] = _default;