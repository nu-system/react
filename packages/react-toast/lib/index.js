"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTransitionGroup = require("react-transition-group");

var _excluded = ["children", "className", "open", "status", "showTime", "appear", "unmountOnExit", "timeout", "classNames"],
    _excluded2 = ["children"],
    _excluded3 = ["status"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NuToast(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      open = _ref.open,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? false : _ref$status,
      _ref$showTime = _ref.showTime,
      showTime = _ref$showTime === void 0 ? 3000 : _ref$showTime,
      _ref$appear = _ref.appear,
      appear = _ref$appear === void 0 ? true : _ref$appear,
      _ref$unmountOnExit = _ref.unmountOnExit,
      unmountOnExit = _ref$unmountOnExit === void 0 ? true : _ref$unmountOnExit,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? {
    appearActive: '_open',
    appearDone: '_open',
    enter: '_open',
    enterActive: '_open',
    enterDone: '_open'
  } : _ref$classNames,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(!!open),
      _useState2 = _slicedToArray(_useState, 2),
      exist = _useState2[0],
      setExist = _useState2[1];

  (0, _react.useEffect)(function () {
    if (showTime) {
      setTimeout(function () {
        setExist(false);
      }, showTime);
    }
  }, [showTime]);
  var statusClass = status ? "_".concat(status) : '';
  return /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement(_reactTransitionGroup.CSSTransition, _extends({
    in: exist,
    className: "nu_toast ".concat(className, " ").concat(statusClass),
    classNames: classNames,
    timeout: timeout,
    appear: appear,
    unmountOnExit: unmountOnExit
  }, otherProps), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "nu_toast_in"
  }, children))), document.body);
}

function NuToastRenderToDom(_ref2) {
  var children = _ref2.children,
      otherProps = _objectWithoutProperties(_ref2, _excluded2);

  var container = document.createElement('div');
  document.body.appendChild(container); // I don't known why not can i use ReactDOM.createPortal here

  _reactDom.default.render( /*#__PURE__*/_react.default.createElement(NuToast, _extends({}, otherProps, {
    open: true,
    appear: true,
    unmountOnExit: true,
    onExited: function onExited() {
      document.body.removeChild(container);
    }
  }), children), container);
}

NuToast.propTypes = {
  /** dom 元素 */
  children: _propTypes.default.node,

  /** className */
  className: _propTypes.default.string,

  /** 是否显示弹窗 */
  open: _propTypes.default.bool,

  /** toast状态 */
  status: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /** 弹窗显示时间 */
  showTime: _propTypes.default.number
};

NuToast.setDefault = function (_ref3) {
  var _ref3$status = _ref3.status,
      status = _ref3$status === void 0 ? ['danger', 'warning', 'success'] : _ref3$status,
      defaultProps = _objectWithoutProperties(_ref3, _excluded3);

  // you can use like this NuToast('hello!');
  var api = function api(text) {
    NuToastRenderToDom(_objectSpread(_objectSpread({}, defaultProps), {}, {
      children: text
    }));
  }; // you can use like this NuToast.danger('hello!');


  status.map(function (item) {
    api[item] = function (text) {
      NuToastRenderToDom(_objectSpread(_objectSpread({}, defaultProps), {}, {
        children: text,
        status: item
      }));
    };

    return item;
  });
  return api;
};

var _default = NuToast;
exports.default = _default;