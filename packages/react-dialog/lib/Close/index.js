"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["className", "children", "title"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Close = function Close(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "\xD7") : _ref$children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Close' : _ref$title,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    "aria-label": title,
    type: "button",
    className: "nu_dialog_close ".concat(className),
    title: title,
    tabIndex: 0
  }, otherProps), children);
};

Close.propTypes = {
  /**
   * css class
   */
  className: _propTypes.default.string,

  /**
   * title
   */
  title: _propTypes.default.string,

  /**
   * children
   */
  children: _propTypes.default.node
};
var _default = Close;
exports.default = _default;