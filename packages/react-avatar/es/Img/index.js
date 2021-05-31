var _excluded = ["className", "placeholder", "onError", "size", "src", "acss"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from 'react';
import Placeholder from './Placeholder';

var Img = function Img(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? null : _ref$placeholder,
      onError = _ref.onError,
      size = _ref.size,
      _ref$src = _ref.src,
      src = _ref$src === void 0 ? '' : _ref$src,
      _ref$acss = _ref.acss,
      acss = _ref$acss === void 0 ? 'pa t0 l0 w100% h100% br100%' : _ref$acss,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      imgLoadError = _useState2[0],
      setImgLoadError = _useState2[1];
  /**
   * 图片加载失败
   */


  var onImgLoadError = function onImgLoadError() {
    setImgLoadError(true);
    typeof onError === 'function' && onError();
  };

  var newClass = "".concat(acss, " ").concat(className);
  /** 如果图片加载失败 */

  if (!src || imgLoadError) {
    return /*#__PURE__*/React.createElement(Placeholder, _extends({
      placeholder: placeholder,
      className: newClass
    }, otherProps));
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/alt-text
    React.createElement("img", _extends({
      className: newClass,
      src: src,
      width: size,
      height: size,
      onError: onImgLoadError
    }, otherProps))
  );
};

export default Img;