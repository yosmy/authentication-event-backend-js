"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StartAuthenticationWithPasswordSuccessEvent = require("./StartAuthenticationWithPasswordSuccessEvent");

var _StartAuthenticationWithPasswordFailEvent = require("./StartAuthenticationWithPasswordFailEvent");

var _FinishAuthenticationWithPasswordSuccessEvent = require("./FinishAuthenticationWithPasswordSuccessEvent");

var _FinishAuthenticationWithPasswordFailEvent = require("./FinishAuthenticationWithPasswordFailEvent");

var _StartAuthenticationWithCodeSuccessEvent = require("./StartAuthenticationWithCodeSuccessEvent");

var _StartAuthenticationWithCodeFailEvent = require("./StartAuthenticationWithCodeFailEvent");

var _FinishAuthenticationWithCodeSuccessEvent = require("./FinishAuthenticationWithCodeSuccessEvent");

var _FinishAuthenticationWithCodeFailEvent = require("./FinishAuthenticationWithCodeFailEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolve = function resolve(labels) {
  if (labels.includes(_StartAuthenticationWithPasswordSuccessEvent.StartAuthenticationWithPasswordSuccessEventType)) {
    return _StartAuthenticationWithPasswordSuccessEvent.StartAuthenticationWithPasswordSuccessEvent;
  } else if (labels.includes(_StartAuthenticationWithPasswordFailEvent.StartAuthenticationWithPasswordFailEventType)) {
    return _StartAuthenticationWithPasswordFailEvent.StartAuthenticationWithPasswordFailEvent;
  } else if (labels.includes(_FinishAuthenticationWithPasswordSuccessEvent.FinishAuthenticationWithPasswordSuccessEventType)) {
    return _FinishAuthenticationWithPasswordSuccessEvent.FinishAuthenticationWithPasswordSuccessEvent;
  } else if (labels.includes(_FinishAuthenticationWithPasswordFailEvent.FinishAuthenticationWithPasswordFailEventType)) {
    return _FinishAuthenticationWithPasswordFailEvent.FinishAuthenticationWithPasswordFailEvent;
  } else if (labels.includes(_StartAuthenticationWithCodeSuccessEvent.StartAuthenticationWithCodeSuccessEventType)) {
    return _StartAuthenticationWithCodeSuccessEvent.StartAuthenticationWithCodeSuccessEvent;
  } else if (labels.includes(_StartAuthenticationWithCodeFailEvent.StartAuthenticationWithCodeFailEventType)) {
    return _StartAuthenticationWithCodeFailEvent.StartAuthenticationWithCodeFailEvent;
  } else if (labels.includes(_FinishAuthenticationWithCodeSuccessEvent.FinishAuthenticationWithCodeSuccessEventType)) {
    return _FinishAuthenticationWithCodeSuccessEvent.FinishAuthenticationWithCodeSuccessEvent;
  } else if (labels.includes(_FinishAuthenticationWithCodeFailEvent.FinishAuthenticationWithCodeFailEventType)) {
    return _FinishAuthenticationWithCodeFailEvent.FinishAuthenticationWithCodeFailEvent;
  }

  return false;
};

var _default = resolve;
exports["default"] = _default;