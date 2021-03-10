"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StartAuthenticationWithPasswordSuccessEvent = require("./StartAuthenticationWithPasswordSuccessEvent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var resolve = function resolve(labels) {
  if (labels.includes(_StartAuthenticationWithPasswordSuccessEvent.StartAuthenticationWithPasswordSuccessEventType)) {
    return _StartAuthenticationWithPasswordSuccessEvent.StartAuthenticationWithPasswordSuccessEvent;
  }

  return false;
};

var _default = resolve;
exports["default"] = _default;