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

/**
 * 按钮组件
 * @param Component
 * @param classNames
 * @param className
 * @param otherProps
 * @param ref
 * @returns {*}
 * @constructor
 */
var NuButton = _react.default.forwardRef(function NuButton(_ref, ref) {
  var Component = _ref.Component,
      classNames = _ref.classNames,
      className = _ref.className,
      otherProps = _objectWithoutProperties(_ref, ["Component", "classNames", "className"]);

  // if exist Component use component
  // or ComponentTag rely on href
  var ComponentTag = Component ? Component : otherProps.href ? 'a' : 'button'; // only button got button type

  if (ComponentTag === 'button' && !otherProps.type) {
    otherProps.type = 'button';
  } // Got role attr when ComponentTag is not button


  if (ComponentTag !== 'button' && !otherProps.role) {
    otherProps.role = 'button';
  }

  var classNameNew = [classNames, className].filter(function (item) {
    return !!item;
  }).join(' ') || null;
  return /*#__PURE__*/_react.default.createElement(ComponentTag, _extends({
    className: classNameNew,
    ref: ref
  }, otherProps));
});

NuButton.defaultProps = {
  classNames: 'nu_btn'
};
NuButton.propTypes = {
  /** core className */
  classNames: _propTypes.default.string,

  /** href for tag a */
  href: _propTypes.default.string,

  /** shell of button */
  Component: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.elementType])
};
var _default = NuButton;
exports.default = _default;