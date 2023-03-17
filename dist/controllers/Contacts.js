'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerContact = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _contact = _interopRequireDefault(require("../schemas/contact"));

var _utils = require("../helpers/utils");

var registerContact = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var Contact, newContact, ContactExist, contactCreted;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            Contact = {
              name: req.body.name,
              email: req.body.email,
              message: req.body.message
            };
            newContact = new _contact["default"](Contact);
            _context.next = 5;
            return _contact["default"].findOne({
              message: newContact.message
            });

          case 5:
            ContactExist = _context.sent;

            if (!ContactExist) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", next((0, _utils.setError)(409, 'El mensaje ya existe')));

          case 8:
            _context.next = 10;
            return newContact.save();

          case 10:
            contactCreted = _context.sent;
            return _context.abrupt("return", res.status(201).json(contactCreted));

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", next((0, _utils.setError)(500, 'FAIL TO REGISTER')));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function registerContact(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.registerContact = registerContact;