function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
var Avatar = React.forwardRef(function (_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 40 : _ref$size,
      errorBg = _ref.errorBg,
      className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["size", "errorBg", "className", "src", "alt", "children"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      imgLoadError = _useState2[0],
      setImgLoadError = _useState2[1];

  var strClass = 'pr br100p';

  if (className) {
    strClass += " ".concat(className);
  } // 当元素没有指定大小的时候
  // 容器撑满元素


  strClass += size ? ' dib vam' : ' db'; // 图片加载失败

  var onError = function onError() {
    return setImgLoadError(true);
  };

  var imgProps = {
    className: 'pa t0 l0 w100p h100p br100p',
    width: size || 40,
    height: size || 40
  };
  /**
   * 错误图片对象
   * @returns {null|*}
   * @constructor
   */

  var ErrorImg = function ErrorImg() {
    if (!errorBg) {
      return null;
    }

    if (typeof errorBg === 'string') {
      // eslint-disable-next-line jsx-a11y/alt-text
      return /*#__PURE__*/React.createElement("img", _extends({}, imgProps, {
        alt: "error",
        "aria-hidden": true
      }));
    }

    if (typeof errorBg === 'function') {
      return errorBg({
        className: imgProps.className
      });
    }

    return null;
  };

  return /*#__PURE__*/React.createElement("nu-avatar", _extends({
    "data-size": size || null,
    class: strClass
  }, otherProps), /*#__PURE__*/React.createElement("nu-avatar-ph", {
    class: "db pt100p br100p"
  }), !src || imgLoadError ? /*#__PURE__*/React.createElement(ErrorImg, null) :
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/alt-text
  React.createElement("img", _extends({
    ref: ref,
    alt: alt,
    src: src
  }, imgProps, {
    onError: onError
  })), children);
});
Avatar.propTypes = {
  // eslint-disable-next-line no-undef
  className: PropTypes.string,
  // eslint-disable-next-line no-undef
  children: PropTypes.node,
  // eslint-disable-next-line no-undef
  src: PropTypes.string,
  // eslint-disable-next-line no-undef
  alt: PropTypes.string.isRequired,

  /** 当没有 size 的时候会变成自适应 */
  // eslint-disable-next-line no-undef
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 图片加载失败的占位符号
   * 如果是 string 则会新添加一个img
   * 如果是 object 或者 function 会直接输出
   * */
  // eslint-disable-next-line no-undef
  errorBg: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};
Avatar.defaultProps = {
  size: 40
};
export default Avatar;