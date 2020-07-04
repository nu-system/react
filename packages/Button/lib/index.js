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
 * Button
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly component?: *}> & React.RefAttributes<unknown>>}
 */
var NuButton = _react.default.forwardRef(function NuButton(_ref, ref) {
  var Component = _ref.Component,
      onBeforeReturn = _ref.onBeforeReturn,
      otherProps = _objectWithoutProperties(_ref, ["Component", "onBeforeReturn"]);

  var href = otherProps.href,
      role = otherProps.role,
      type = otherProps.type,
      children = otherProps.children,
      title = otherProps.title; // if exist Component use component
  // or ComponentTag rely on href

  var ComponentTag = Component ? Component : href ? 'a' : 'button'; // only button got button type

  if (ComponentTag === 'button' && !type) {
    otherProps.type = 'button';
  } // Got role attr when ComponentTag is not button


  if (ComponentTag !== 'button' && !role) {
    otherProps.role = 'button';
  } // set the title of button


  if (typeof children === 'string' && !title) {
    otherProps.title = children;
  } // on before component return


  var renderProps = onBeforeReturn(otherProps);
  return /*#__PURE__*/_react.default.createElement(ComponentTag, _extends({
    ref: ref
  }, renderProps));
});

NuButton.defaultProps = {
  /** on before component return */
  onBeforeReturn: function onBeforeReturn(props) {
    return props;
  }
};
NuButton.propTypes = {
  /** on before component return */
  onBeforeReturn: _propTypes.default.func,

  /** href for tag a */
  href: _propTypes.default.string,

  /** shell of button */
  Component: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.elementType])
};
var _default = NuButton;
exports.default = _default;