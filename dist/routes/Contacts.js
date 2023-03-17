"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Contacts = require("../controllers/Contacts");

var router = (0, _express.Router)();
router.post('/createContact', _Contacts.registerContact);
var _default = router;
exports["default"] = _default;