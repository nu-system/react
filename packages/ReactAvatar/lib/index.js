"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/**
 * 错误图片对象
 * @param errorBg
 * @param imgProps
 * @returns {null|*}
 * @constructor
 */
var AvatarPlaceholder = function AvatarPlaceholder(_ref) {
  var placeholder = _ref.placeholder,
      imgProps = _objectWithoutProperties(_ref, ["placeholder"]);

  if (!placeholder) {
    return null;
  }
  /* placeholder 是字符串则加载新的图片 */


  if (typeof placeholder === 'string') {
    return /*#__PURE__*/_react.default.createElement("img", _extends({
      src: placeholder
    }, imgProps, {
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
/**
 * NuAvatar
 * @param {string} className
 * @param {node}  children
 * @param {string |number } size
 * @param {string |number } imgDefaultSize
 * @param {string | node | function } placeholder
 * @param {function} onError
 * @param { object }otherProps
 * @param ref
 * @returns {*}
 * @constructor
 */


var NuAvatar = _react.default.forwardRef(function NuAvatar(_ref2, ref) {
  var _ref2$Component = _ref2.Component,
      Component = _ref2$Component === void 0 ? 'i' : _ref2$Component,
      before = _ref2.before,
      children = _ref2.children,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 40 : _ref2$size,
      _ref2$imgDefaultSize = _ref2.imgDefaultSize,
      imgDefaultSize = _ref2$imgDefaultSize === void 0 ? 40 : _ref2$imgDefaultSize,
      placeholder = _ref2.placeholder,
      onError = _ref2.onError,
      className = _ref2.className,
      _ref2$defaultClassNam = _ref2.defaultClassNames,
      defaultClassNames = _ref2$defaultClassNam === void 0 ? {
    component: 'nu_avatar',
    ph: 'nu_avatar_ph',
    img: 'nu_avatar_img'
  } : _ref2$defaultClassNam,
      otherProps = _objectWithoutProperties(_ref2, ["Component", "before", "children", "size", "imgDefaultSize", "placeholder", "onError", "className", "defaultClassNames"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      imgLoadError = _useState2[0],
      setImgLoadError = _useState2[1];

  var classNameDefault = typeof defaultClassNames === 'function' ? defaultClassNames(_objectSpread({
    size: size
  }, otherProps)) : defaultClassNames;
  /**
   * 图片加载失败
   */

  var onImgLoadError = function onImgLoadError() {
    setImgLoadError(true);
    typeof onError === 'function' && onError();
  };

  var imgProps = {
    className: classNameDefault.img,
    width: size || imgDefaultSize,
    height: size || imgDefaultSize
  };
  var componentClassName = (0, _classnames.default)(classNameDefault.component, className, _defineProperty({}, "_".concat(size), !!size));
  return /*#__PURE__*/_react.default.createElement(Component, {
    className: componentClassName
  }, classNameDefault.ph ? /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true",
    className: classNameDefault.ph
  }) : null, !otherProps.src || imgLoadError ? /*#__PURE__*/_react.default.createElement(AvatarPlaceholder, _extends({
    placeholder: placeholder
  }, imgProps)) : /*#__PURE__*/_react.default.createElement("img", _extends({
    ref: ref
  }, imgProps, otherProps, {
    onError: onImgLoadError
  })), children);
});

NuAvatar.defaultProps = {};
NuAvatar.propTypes = {
  /** 容器元素 */
  Component: _propTypes.default.node,

  /** 子元素 */
  children: _propTypes.default.node,

  /** 当没有 size 的时候会变成自适应 */
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** 图片加载失败执行 */
  onError: _propTypes.default.func,

  /** 获取默认的 className 需要返回 { component{ string }, ph{ string }, img{ string }} */
  defaultClassNames: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /** 当没有指定 size 的时候，img 的 width 和 height 会等于 imgDefaultSize */
  imgDefaultSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * 图片加载失败的占位符号
   * 如果是 string 则会新添加一个img
   * 如果是 object 或者 function 会直接输出
   * */
  placeholder: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node])
};
var _default = NuAvatar;
exports.default = _default;