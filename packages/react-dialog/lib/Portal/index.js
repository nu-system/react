"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _getElementById = _interopRequireDefault(require("./getElementById"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React from 'react';
function NuPortal(_ref) {
  var _ref$root = _ref.root,
      root = _ref$root === void 0 ? document ? document.body : null : _ref$root,
      children = _ref.children;

  if (!root || typeof document === 'undefined') {
    return children;
  }

  var container = (0, _getElementById.default)(root) || document.body;
  return /*#__PURE__*/_reactDom.default.createPortal(children, container);
}

NuPortal.propTypes = {
  root: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element, _propTypes.default.oneOf([false])]),
  children: _propTypes.default.node
};
var _default = NuPortal;
exports.default = _default;