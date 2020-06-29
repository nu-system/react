function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
export default function Close(props) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    title: "close",
    className: "nu_dialog_close"
  }, props), "\xD7");
}