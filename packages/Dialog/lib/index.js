"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _useLockScroll = _interopRequireDefault(require("./components/useLockScroll"));

var _Portal = _interopRequireDefault(require("./components/Portal"));

var _Root = _interopRequireDefault(require("./components/Root"));

var _this = void 0,
    _jsxFileName = "/Users/ziven27/Pro/@_nu/react/packages/Dialog/src/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * All the dialog element will append in this node
 */
var nodeDialogRoot = new _Root["default"]();

var Dialog = _react["default"].forwardRef(function (_ref, ref) {
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
      closeChildren = _ref$closeChildren === void 0 ? /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 23
    }
  }, "\xD7") : _ref$closeChildren,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$onClickMask = _ref.onClickMask,
      onClickMask = _ref$onClickMask === void 0 ? function () {} : _ref$onClickMask,
      otherProps = _objectWithoutPropertiesLoose(_ref, ["className", "children", "open", "active", "lockScroll", "maskTitle", "removeTime", "disabledPortal", "disableEsc", "closeTitle", "closeChildren", "onClose", "onClickMask"]);

  var _useState = (0, _react.useState)(false),
      exit = _useState[0],
      setExit = _useState[1];

  var _useState2 = (0, _react.useState)(true),
      hide = _useState2[0],
      setHide = _useState2[1];

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

  (0, _useLockScroll["default"])(lockScroll && open);
  /**
   * is not exit remote the dom
   */

  if (!exit) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(_Portal["default"], {
    disabled: disabledPortal,
    container: nodeDialogRoot,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_focusTrapReact["default"], {
    active: open && !hide && active,
    focusTrapOptions: {
      onDeactivate: onClose,
      escapeDeactivates: !disableEsc,
      returnFocusOnDeactivate: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement("dialog", _extends({
    ref: ref,
    open: !hide,
    role: "dialog",
    tabIndex: -1,
    className: "nu_dialog_wrap " + className
  }, otherProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), !!maskTitle && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "nu_dialog_mask",
    title: maskTitle,
    onClick: function onClick(e) {
      return onClickMask(e) !== false && onClose();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }), /*#__PURE__*/_react["default"].createElement("section", {
    role: "document",
    className: "nu_dialog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, !!closeTitle && /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": closeTitle,
    type: "button",
    className: "nu_dialog_close",
    title: closeTitle,
    onClick: onClose,
    tabIndex: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, closeChildren), children))));
});

Dialog.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * css class
   */
  className: _propTypes["default"].string,

  /**
   * Dialog children, usually the included sub-components.
   */
  children: _propTypes["default"].node,

  /**
   * if `> 0`, hide dialog and remove dialog after removeTime
   * else if `0`, remove dialog immediately
   * else, keep exit after hide
   */
  removeTime: _propTypes["default"].number,

  /**
   * If `true`, the dialog go through the enter, entring, enterd.
   * If `false`, the dialog go through the exitring, exitred.
   */
  open: _propTypes["default"].bool,

  /**
   * If `true`, the dialog can focusable
   * If `false`, the dialog blur
   */
  active: _propTypes["default"].bool,

  /**
   * Callback fired when dialog close.
   */
  onClose: _propTypes["default"].func,

  /**
   * Callback fired when the `Mask` is clicked.
   * if return `false`, no longer trigger onclick
   * else trigger the onClose
   */
  onClickMask: _propTypes["default"].func,

  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: _propTypes["default"].bool,

  /**
   * If `true`, the dialog will render where it is defined
   */
  disabledPortal: _propTypes["default"].bool,

  /**
   * If `true`, the dialog will not close when click esc
   */
  disableEsc: _propTypes["default"].bool,

  /**
   * title of the `Close`.
   * If empty string, the `Close` do not render
   */
  closeTitle: _propTypes["default"].string,

  /**
   * title of the mask element.
   * If empty string, the mask do not render
   */
  maskTitle: _propTypes["default"].string,

  /**
   * Close children
   */
  closeChildren: _propTypes["default"].node
} : {};
var _default = Dialog;
exports["default"] = _default;
module.exports = exports.default;