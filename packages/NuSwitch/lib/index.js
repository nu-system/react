"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * 渲染图标
 * @param Icon
 * @param props
 * @returns {*|null|React.DetailedReactHTMLElement<*, HTMLElement>}
 * @constructor
 */
var RenderIcon = function RenderIcon(_ref) {
  var Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["Icon"]);

  if (!Icon) {
    return null;
  }

  return _typeof(Icon) === 'object' ? _react.default.cloneElement(Icon, props) : /*#__PURE__*/_react.default.createElement(Icon, props);
};
/**
 * On Off
 * @param {node} Component
 * @param {func | node} Icon
 * @param {string} type
 * @param {node} children
 * @param {string} className
 * @param {object} defaultClass
 * @param otherProps
 * @param ref
 * @returns {*}
 * @constructor
 */


var NuSwitch = _react.default.forwardRef(function NuSwitch(_ref2, ref) {
  var Component = _ref2.Component,
      Icon = _ref2.Icon,
      type = _ref2.type,
      children = _ref2.children,
      className = _ref2.className,
      classNameInput = _ref2.classNameInput,
      defaultClass = _ref2.defaultClass,
      otherProps = _objectWithoutProperties(_ref2, ["Component", "Icon", "type", "children", "className", "classNameInput", "defaultClass"]);

  return /*#__PURE__*/_react.default.createElement(Component, {
    className: (0, _classnames.default)(defaultClass.component, className)
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    className: (0, _classnames.default)(defaultClass.input, classNameInput),
    ref: ref,
    type: type
  }, otherProps)), /*#__PURE__*/_react.default.createElement(RenderIcon, {
    Icon: Icon,
    checked: otherProps.checked,
    disabeld: otherProps.disabeld
  }), children);
});

NuSwitch.defaultProps = {
  defaultClass: {
    component: 'nu_switch',
    input: '_input'
  },
  Component: 'label',
  Icon: /*#__PURE__*/_react.default.createElement("i", {
    className: "_icon"
  }),
  type: 'checkbox',
  children: null,
  className: '',
  classNameInput: ''
};
NuSwitch.propTypes = {
  /** 默认class */
  defaultClass: _propTypes.default.shape({
    component: _propTypes.default.string,
    input: _propTypes.default.string
  }),

  /** default class of input */
  classNameInput: _propTypes.default.string,

  /** input types */
  type: _propTypes.default.oneOf(['checkbox', 'radio']),

  /** 子元素 */
  children: _propTypes.default.node,

  /** 容器组件，默认为 label */
  Component: _propTypes.default.node,

  /** 图标 */
  Icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};
var _default = NuSwitch;
exports.default = _default;