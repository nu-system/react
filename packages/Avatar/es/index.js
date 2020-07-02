function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
/**
 * 错误图片对象
 * @param errorBg
 * @param imgProps
 * @returns {null|*}
 * @constructor
 */

var ErrorImg = function ErrorImg(_ref) {
  var placeholder = _ref.placeholder,
      imgProps = _objectWithoutProperties(_ref, ["placeholder"]);

  if (!placeholder) {
    return null;
  }
  /* placeholder 是字符串则加载新的图片 */


  if (typeof placeholder === 'string') {
    return /*#__PURE__*/React.createElement("img", _extends({}, imgProps, {
      alt: "error",
      "aria-hidden": true
    }));
  }
  /* placeholder 是个 function 直接执行  */


  if (typeof placeholder === 'function') {
    return placeholder({
      className: imgProps.className
    });
  }

  return placeholder;
};

var NuAvatar = React.forwardRef(function NuAvatar(_ref2, ref) {
  var className = _ref2.className,
      children = _ref2.children,
      size = _ref2.size,
      imgDefaultSize = _ref2.imgDefaultSize,
      placeholder = _ref2.placeholder,
      src = _ref2.src,
      alt = _ref2.alt,
      onError = _ref2.onError,
      otherProps = _objectWithoutProperties(_ref2, ["className", "children", "size", "imgDefaultSize", "placeholder", "src", "alt", "onError"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      imgLoadError = _useState2[0],
      setImgLoadError = _useState2[1]; // 当元素没有指定大小的时候
  // 容器撑满元素


  var strClass = classNames('pr br100p', size ? 'dib vam' : 'db', // 当元素没有指定大小的时候， 容器撑满元素
  _defineProperty({}, "_".concat(size), !!size), className);
  /**
   * 图片加载失败
   */

  var onImgLoadError = function onImgLoadError() {
    setImgLoadError(true);
    typeof onError === 'function' && onError();
  };
  /**
   * ImgProps
   * @type {{width: *, className: string, height: *}}
   */


  var imgProps = {
    className: 'pa t0 l0 w100p h100p br100p',
    width: size || imgDefaultSize,
    height: size || imgDefaultSize
  };
  return /*#__PURE__*/React.createElement("nu-avatar", {
    class: strClass
  }, /*#__PURE__*/React.createElement("nu-avatar-ph", {
    class: "db pt100p br100p"
  }), !src || imgLoadError ? /*#__PURE__*/React.createElement(ErrorImg, _extends({
    placeholder: placeholder
  }, imgProps)) : /*#__PURE__*/React.createElement("img", _extends({
    ref: ref,
    alt: alt,
    src: src
  }, imgProps, otherProps, {
    onError: onImgLoadError
  })), children);
});
NuAvatar.defaultProps = {
  size: 40,
  imgDefaultSize: 40
};
NuAvatar.propTypes = {
  /** Img src */
  src: PropTypes.string,

  /** Img alt */
  alt: PropTypes.string,

  /** 当没有 size 的时候会变成自适应 */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** 当没有指定 size 的时候，img 的 width 和 height 会等于 imgDefaultSize */
  imgDefaultSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * 图片加载失败的占位符号
   * 如果是 string 则会新添加一个img
   * 如果是 object 或者 function 会直接输出
   * */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /**
   * 图片加载失败执行
   */
  onError: PropTypes.func
};
export default NuAvatar;