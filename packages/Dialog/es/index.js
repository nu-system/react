function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import useLockScroll from './components/useLockScroll';
import Portal from './components/Portal';
import Root from './components/Root';
/**
 * All the dialog element will append in this node
 */

var nodeDialogRoot = new Root();
var Dialog = React.forwardRef(function (_ref, ref) {
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
      closeChildren = _ref$closeChildren === void 0 ? /*#__PURE__*/React.createElement(Fragment, null, "\xD7") : _ref$closeChildren,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$onClickMask = _ref.onClickMask,
      onClickMask = _ref$onClickMask === void 0 ? function () {} : _ref$onClickMask,
      otherProps = _objectWithoutProperties(_ref, ["className", "children", "open", "active", "lockScroll", "maskTitle", "removeTime", "disabledPortal", "disableEsc", "closeTitle", "closeChildren", "onClose", "onClickMask"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      exit = _useState2[0],
      setExit = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      hide = _useState4[0],
      setHide = _useState4[1];

  useEffect(function () {
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

  useLockScroll(lockScroll && open);
  /**
   * is not exit remote the dom
   */

  if (!exit) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Portal, {
    disabled: disabledPortal,
    container: nodeDialogRoot
  }, /*#__PURE__*/React.createElement(FocusTrap, {
    active: open && !hide && active,
    focusTrapOptions: {
      onDeactivate: onClose,
      escapeDeactivates: !disableEsc,
      returnFocusOnDeactivate: true
    }
  }, /*#__PURE__*/React.createElement("dialog", _extends({
    ref: ref,
    open: !hide,
    role: "dialog",
    tabIndex: -1,
    className: "nu_dialog_wrap ".concat(className)
  }, otherProps), !!maskTitle && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nu_dialog_mask",
    title: maskTitle,
    onClick: function onClick(e) {
      return onClickMask(e) !== false && onClose();
    }
  }), /*#__PURE__*/React.createElement("section", {
    role: "document",
    className: "nu_dialog"
  }, !!closeTitle && /*#__PURE__*/React.createElement("button", {
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
  className: PropTypes.string,

  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node,

  /**
   * if `> 0`, hide dialog and remove dialog after removeTime
   * else if `0`, remove dialog immediately
   * else, keep exit after hide
   */
  removeTime: PropTypes.number,

  /**
   * If `true`, the dialog go through the enter, entring, enterd.
   * If `false`, the dialog go through the exitring, exitred.
   */
  open: PropTypes.bool,

  /**
   * If `true`, the dialog can focusable
   * If `false`, the dialog blur
   */
  active: PropTypes.bool,

  /**
   * Callback fired when dialog close.
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the `Mask` is clicked.
   * if return `false`, no longer trigger onclick
   * else trigger the onClose
   */
  onClickMask: PropTypes.func,

  /**
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: PropTypes.bool,

  /**
   * If `true`, the dialog will render where it is defined
   */
  disabledPortal: PropTypes.bool,

  /**
   * If `true`, the dialog will not close when click esc
   */
  disableEsc: PropTypes.bool,

  /**
   * title of the `Close`.
   * If empty string, the `Close` do not render
   */
  closeTitle: PropTypes.string,

  /**
   * title of the mask element.
   * If empty string, the mask do not render
   */
  maskTitle: PropTypes.string,

  /**
   * Close children
   */
  closeChildren: PropTypes.node
};
export default Dialog;