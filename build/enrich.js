"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _StartAuthenticationWithPasswordSuccessEvent = require("./StartAuthenticationWithPasswordSuccessEvent");

var _StartAuthenticationWithPasswordFailEvent = require("./StartAuthenticationWithPasswordFailEvent");

var _FinishAuthenticationWithPasswordSuccessEvent = require("./FinishAuthenticationWithPasswordSuccessEvent");

var _FinishAuthenticationWithPasswordFailEvent = require("./FinishAuthenticationWithPasswordFailEvent");

var _StartAuthenticationWithCodeSuccessEvent = require("./StartAuthenticationWithCodeSuccessEvent");

var _StartAuthenticationWithCodeFailEvent = require("./StartAuthenticationWithCodeFailEvent");

var _FinishAuthenticationWithCodeSuccessEvent = require("./FinishAuthenticationWithCodeSuccessEvent");

var _FinishAuthenticationWithCodeFailEvent = require("./FinishAuthenticationWithCodeFailEvent");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var enrich = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(events, api) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _StartAuthenticationWithPasswordSuccessEvent.enrichStartAuthenticationWithPasswordSuccessEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 2:
            events = _context.sent;
            _context.next = 5;
            return (0, _StartAuthenticationWithPasswordFailEvent.enrichStartAuthenticationWithPasswordFailEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 5:
            events = _context.sent;
            _context.next = 8;
            return (0, _FinishAuthenticationWithPasswordSuccessEvent.enrichFinishAuthenticationWithPasswordSuccessEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 8:
            events = _context.sent;
            _context.next = 11;
            return (0, _FinishAuthenticationWithPasswordFailEvent.enrichFinishAuthenticationWithPasswordFailEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 11:
            events = _context.sent;
            _context.next = 14;
            return (0, _StartAuthenticationWithCodeSuccessEvent.enrichStartAuthenticationWithCodeSuccessEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 14:
            events = _context.sent;
            _context.next = 17;
            return (0, _StartAuthenticationWithCodeFailEvent.enrichStartAuthenticationWithCodeFailEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 17:
            events = _context.sent;
            _context.next = 20;
            return (0, _FinishAuthenticationWithCodeSuccessEvent.enrichFinishAuthenticationWithCodeSuccessEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 20:
            events = _context.sent;
            _context.next = 23;
            return (0, _FinishAuthenticationWithCodeFailEvent.enrichFinishAuthenticationWithCodeFailEvent)(events, {
              collectDevices: api.collectDevices
            });

          case 23:
            events = _context.sent;
            return _context.abrupt("return", events);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function enrich(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = enrich;
exports["default"] = _default;