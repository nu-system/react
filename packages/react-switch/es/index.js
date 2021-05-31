var _excluded = ["Icon"],
    _excluded2 = ["Component", "Icon", "type", "children", "className", "classNameInput", "defaultClass", "componentProps"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Author: ziven27
 * Date: 7/6/2020
 * Desc: 开关的母版组件, radio，checkbox，switch 应该都基于这个组件
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
/**
 * 渲染图标
 * @param Icon
 * @param props
 * @returns {*|null|React.DetailedReactHTMLElement<*, HTMLElement>}
 * @constructor
 */
// eslint-disable-next-line react/prop-types

var RenderIcon = function RenderIcon(_ref) {
  var Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, _excluded);

  if (!Icon) {
    return null;
  }

  return _typeof(Icon) === 'object' ? /*#__PURE__*/React.cloneElement(Icon, props) : /*#__PURE__*/React.createElement(Icon, props);
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


var NuSwitch = /*#__PURE__*/React.forwardRef(function NuSwitch(_ref2, ref) {
  var Component = _ref2.Component,
      Icon = _ref2.Icon,
      type = _ref2.type,
      children = _ref2.children,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      classNameInput = _ref2.classNameInput,
      defaultClass = _ref2.defaultClass,
      componentProps = _ref2.componentProps,
      otherProps = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: classNames(defaultClass.component, className)
  }, componentProps), /*#__PURE__*/React.createElement("input", _extends({
    className: classNames(defaultClass.input, classNameInput),
    ref: ref,
    type: type
  }, otherProps)), /*#__PURE__*/React.createElement(RenderIcon, {
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
  Icon: /*#__PURE__*/React.createElement("i", {
    className: "_icon"
  }),
  type: 'checkbox',
  children: null,
  classNameInput: '',
  componentProps: {}
};
NuSwitch.propTypes = {
  /** 默认class */
  defaultClass: PropTypes.shape({
    component: PropTypes.string,
    input: PropTypes.string
  }),

  /** default class of input */
  classNameInput: PropTypes.string,

  /** input types */
  type: PropTypes.oneOf(['checkbox', 'radio']),

  /** 子元素 */
  children: PropTypes.node,

  /** 容器组件，默认为 label */
  Component: PropTypes.node,

  /** 容器组件的 props */
  componentProps: PropTypes.object,

  /** 图标 */
  Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
export default NuSwitch;