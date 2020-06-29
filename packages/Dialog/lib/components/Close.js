"use strict";

exports.__esModule = true;
exports["default"] = Close;

var _react = _interopRequireDefault(require("react"));

var _jsxFileName = "/Users/ziven27/Pro/@_nu/react/packages/Dialog/src/components/Close.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Close(props) {
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    title: "close",
    className: "nu_dialog_close"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), "\xD7");
}

module.exports = exports.default;