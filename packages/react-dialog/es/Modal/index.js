var _excluded = ["className", "children", "open", "lockScroll", "removeTime", "root", "Component", "forceRender"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Author: ziven27
 * Date: 8/15/2020
 * Desc: 弹窗组件
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useLockScroll from './useLockScroll';
import NuPortal from '../Portal';
/**
 * 弹层组件
 * @param className
 * @param children
 * @param open
 * @param lockScroll
 * @param removeTime
 * @param root
 * @param onClose
 * @param Component
 * @param otherProps
 * @param ref
 * @returns {JSX.Element|null}
 * @constructor
 */

var NuModal = /*#__PURE__*/React.forwardRef(function NuModal(_ref, ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'nu_modal' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      _ref$lockScroll = _ref.lockScroll,
      lockScroll = _ref$lockScroll === void 0 ? true : _ref$lockScroll,
      _ref$removeTime = _ref.removeTime,
      removeTime = _ref$removeTime === void 0 ? 200 : _ref$removeTime,
      _ref$root = _ref.root,
      root = _ref$root === void 0 ? 'nuModal' : _ref$root,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'dialog' : _ref$Component,
      _ref$forceRender = _ref.forceRender,
      forceRender = _ref$forceRender === void 0 ? false : _ref$forceRender,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  // is render in dom
  var _useState = useState(forceRender),
      _useState2 = _slicedToArray(_useState, 2),
      exit = _useState2[0],
      setExit = _useState2[1]; // is visible


  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  useEffect(function () {
    var removeTimer;

    if (open) {
      setExit(true);
      /**
       *  After exit and add attr `open` to dialog
       *  Fot the css transition
       */

      setTimeout(function () {
        setShow(true);
      }, 16);
    } else {
      setShow(null); // remove dialog by removeTime

      if (removeTime > 0) {
        // hide dialog and remove dialog after removeTime
        removeTimer = setTimeout(function () {
          !forceRender && setExit(false);
        }, removeTime);
      } else if (removeTime === 0) {
        // remove dialog immediately
        !forceRender && setExit(false);
      } else {// keep exit after hide
      }
    }

    return function () {
      // eslint-disable-next-line no-unused-expressions
      removeTimer && clearTimeout(removeTimer);
    };
  }, [open, removeTime, forceRender]);
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

  return /*#__PURE__*/React.createElement(NuPortal, {
    root: root
  }, /*#__PURE__*/React.createElement(Component, _extends({
    ref: ref,
    open: show,
    tabIndex: "0",
    role: "dialog",
    className: className
  }, otherProps), children));
});
NuModal.defaultProps = {};
NuModal.propTypes = {
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
   * If `true`, when dialog scroll into bottom the body will scroll
   */
  lockScroll: PropTypes.bool,

  /**
   * All the modal will render into this dom
   * If `false`, modal will not use portal
   */
  root: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.oneOf([false])]),

  /**
   * Components of modal
   */
  Component: PropTypes.node,

  /**
   * If `true`, the dialog will render when mount
   */
  forceRender: PropTypes.bool
};
export default NuModal;