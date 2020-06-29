"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _useLockScroll = _interopRequireDefault(require("./components/useLockScroll"));

var _Portal = _interopRequireDefault(require("./components/Portal"));

var _Root = _interopRequireDefault(require("./components/Root"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * All the dialog element will append in this node
 */
var nodeDialogRoot = new _Root.default();

var Dialog = _react.default.forwardRef(function (_ref, ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? true : _ref$active,
      _ref$lockScroll = _ref.lockScroll,
      lockScroll = _ref$lockScroll === void 0 ? true : _ref$lockScroll,
      _ref$maskTitle = _ref.maskTitle,
      maskTitle = _ref$maskTitle === void 0 ? 'Mask' : _ref$maskTitle,
      _ref$removeTime = _ref.removeTime,
      removeTime = _ref$removeTime === void 0 ? 200 : _ref$removeTime,
      _ref$disabledPortal = _ref.disabledPortal,
      disabledPortal = _ref$disabledPortal === void 0 ? false : _ref$disabledPortal,
      _ref$disableEsc = _ref.disableEsc,
      disableEsc = _ref$disableEsc === void 0 ? false : _ref$disableEsc,
      _ref$closeTitle = _ref.closeTitle,
      closeTitle = _ref$closeTitle === void 0 ? 'Close' : _ref$closeTitle,
      _ref$closeChildren = _ref.closeChildren,
      closeChildren = _ref$closeChildren === void 0 ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, "\xD7") : _ref$closeChildren,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$onClickMask = _ref.onClickMask,
      onClickMask = _ref$onClickMask === void 0 ? function () {} : _ref$onClickMask,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "open", "active", "lockScroll", "maskTitle", "removeTime", "disabledPortal", "disableEsc", "closeTitle", "closeChildren", "onClose", "onClickMask"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      exit = _useState2[0],
      setExit = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      hide = _useState4[0],
      setHide = _useState4[1];

  (0, _react.useEffect)(function () {
    var removeTimer;

    if (open) {
      setExit(true);
      /**
       *  After exit and add attr `open` to dialog
       *  Fot the css transition
       */

      setTimeout(function () {
        setHide(false);
      }, 16);
    } else {
      setHide(true); // remove dialog by removeTime

      if (removeTime > 0) {
        // hide dialog and remove dialog after removeTime
        removeTimer = setTimeout(function () {
          setExit(false);
        }, removeTime);
      } else if (removeTime === 0) {
        // remove dialog immediately
        setExit(false);
      } else {// keep exit after hide
      }
    }

    return function () {
      removeTimer && clearTimeout(removeTimer);
    };
  }, [open]);
  /**
   * if `true` lock the scroll when open
   */

  (0, _useLockScroll.default)(lockScroll && open);
  /**
   * is not exit remote the dom
   */

  if (!exit) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_Portal.default, {
    disabled: disabledPortal,
    container: nodeDialogRoot
  }, /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, {
    active: open && !hide && active,
    focusTrapOptions: {
      onDeactivate: onClose,
      escapeDeactivates: !disableEsc,
      returnFocusOnDeactivate: true
    }
  }, /*#__PURE__*/_react.default.createElement("dialog", _extends({
    ref: ref,
    open: !hide,
    role: "dialog",
    tabIndex: -1,
    className: "nu_dialog_wrap ".concat(className)
  }, otherProps), !!maskTitle && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "nu_dialog_mask",
    title: maskTitle,
    onClick: function onClick(e) {
      return onClickMask(e) !== false && onClose();
    }
  }), /*#__PURE__*/_react.default.createElement("section", {
    role: "document",
    className: "nu_dialog"
  }, !!closeTitle && /*#__PURE__*/_react.default.createElement("button", {
    "aria-label": closeTitle,
    type: "button",
    className: "nu_dialog_close",
    title: closeTitle,
    onClick: onClose,
    tabIndex: 0
  }, closeChildren), children))));
});

Dialog.propTypes = {
  /**
   * css class
   */
  className: _propTypes.default.string,

  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes.default.node,

  /**
   * if `> 0`, hide dialog and remove dialog after removeTime
   * else if `0`, remove dialog immediately
   * else, keep exit after hide
   */
  removeTime: _propTypes.default.number,

  /**
   * If `true`, the dialog go through the enter, entring, enterd.
   * If `false`, the dialog go through the exitring, exitred.
   */
  open: _propTypes.default.bool,

  /**
   * If `true`, the dialog can focusable
   * If `false`, the dialog blur
   */
  active: _propTypes.default.bool,

  /**
   * Callback fired when dialog close.
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the `Mask` is clicked.
   * if return `false`, no longer trigger onclick
   * else trigger the onClose
   */
  onClickMask: _propTypes.default.func,

  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: _propTypes.default.bool,

  /**
   * If `true`, the dialog will render where it is defined
   */
  disabledPortal: _propTypes.default.bool,

  /**
   * If `true`, the dialog will not close when click esc
   */
  disableEsc: _propTypes.default.bool,

  /**
   * title of the `Close`.
   * If empty string, the `Close` do not render
   */
  closeTitle: _propTypes.default.string,

  /**
   * title of the mask element.
   * If empty string, the mask do not render
   */
  maskTitle: _propTypes.default.string,

  /**
   * Close children
   */
  closeChildren: _propTypes.default.node
};
var _default = Dialog;
exports.default = _default;