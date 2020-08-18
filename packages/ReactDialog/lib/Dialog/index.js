"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dialog = function Dialog(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'nu_dialog' : _ref$className,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'document' : _ref$role,
      otherProps = _objectWithoutProperties(_ref, ["className", "role"]);

  return /*#__PURE__*/_react.default.createElement("section", _extends({
    role: role,
    className: className
  }, otherProps));
};

Dialog.propTypes = {
  /**
   * css class
   */
  className: _propTypes.default.string,

  /**
   * children
   */
  children: _propTypes.default.node,

  /**
   * role of dialog
   */
  role: _propTypes.default.string
};
var _default = Dialog;
exports.default = _default;