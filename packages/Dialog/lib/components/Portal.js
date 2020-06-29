"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Portal(_ref) {
  var children = _ref.children,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? document.body : _ref$container,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return !disabled ? _reactDom["default"].createPortal(children, container) : children;
}

Portal.propTypes = {
  children: _propTypes["default"].node,
  container: _propTypes["default"].object,
  disabled: _propTypes["default"].bool
};
var _default = Portal;
exports["default"] = _default;
module.exports = exports.default;