"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enrichFinishAuthenticationWithPasswordSuccessEvent = exports.FinishAuthenticationWithPasswordSuccessEventType = exports.FinishAuthenticationWithPasswordSuccessEvent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var _event = require("@yosmy/event");

var _device = require("@yosmy/device");

var _CommonEvent = require("./CommonEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var type = "yosmy.finish_authentication_with_password_success";
exports.FinishAuthenticationWithPasswordSuccessEventType = type;

var FinishAuthenticationWithPasswordSuccessEvent = function FinishAuthenticationWithPasswordSuccessEvent(_ref) {
  var ui = _ref.ui,
      involved = _ref.involved,
      extra = _ref.extra,
      date = _ref.date,
      hide = _ref.hide,
      onSelectInvolved = _ref.onSelectInvolved;
  return /*#__PURE__*/_react["default"].createElement(ui.layout, {
    label: /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Final exitoso de autenticaci\xF3n con pin"),
    involved: [!hide.device && /*#__PURE__*/_react["default"].createElement(_event.EventInvolved, {
      label: "Dispositivo"
    }, typeof involved.device === "string" ? /*#__PURE__*/_react["default"].createElement(_device.DevicePlaceholder, null) : /*#__PURE__*/_react["default"].createElement(_device.Device, {
      data: involved.device.data,
      onClick: function onClick() {
        onSelectInvolved("device", involved.device);
      }
    })), /*#__PURE__*/_react["default"].createElement(_event.EventInvolved, {
      label: "Tel\xE9fono"
    }, /*#__PURE__*/_react["default"].createElement(_ui.Json, null, {
      country: involved.country,
      prefix: involved.prefix,
      number: involved.number
    }))],
    extra: /*#__PURE__*/_react["default"].createElement(_ui.Json, null, extra),
    date: date
  });
};

exports.FinishAuthenticationWithPasswordSuccessEvent = FinishAuthenticationWithPasswordSuccessEvent;
FinishAuthenticationWithPasswordSuccessEvent.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired
  }).isRequired,
  involved: _propTypes["default"].shape({
    device: _device.enrich.DeviceProp
  }).isRequired,
  hide: _propTypes["default"].shape({
    device: _propTypes["default"].bool
  }).isRequired
};
FinishAuthenticationWithPasswordSuccessEvent.defaultProps = {
  hide: {
    device: false
  }
};

var enrichFinishAuthenticationWithPasswordSuccessEvent = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(events, api) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _CommonEvent.enrichDevices)(events, api, type);

          case 2:
            events = _context.sent;
            return _context.abrupt("return", events);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function enrichFinishAuthenticationWithPasswordSuccessEvent(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.enrichFinishAuthenticationWithPasswordSuccessEvent = enrichFinishAuthenticationWithPasswordSuccessEvent;