var _jsxFileName = "/Users/ziven27/Pro/@_nu/react/packages/Toast/src/index.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

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
      otherProps = _objectWithoutPropertiesLoose(_ref, ["children", "className", "open", "status", "showTime", "appear", "unmountOnExit", "timeout", "classNames"]);

  var _useState = useState(!!open),
      exist = _useState[0],
      setExist = _useState[1];

  useEffect(function () {
    if (showTime) {
      setTimeout(function () {
        setExist(false);
      }, showTime);
    }
  }, [showTime]);
  var statusClass = status ? "_" + status : '';
  return ReactDOM.createPortal( /*#__PURE__*/React.createElement(CSSTransition, _extends({
    "in": exist,
    className: "nu_toast " + className + " " + statusClass,
    classNames: classNames,
    timeout: timeout
  }, {
    appear: appear,
    unmountOnExit: unmountOnExit
  }, otherProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nu_toast_in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, children))), document.body);
}

function NuToastRenderToDom(_ref2) {
  var children = _ref2.children,
      otherProps = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  var container = document.createElement('div');
  document.body.appendChild(container); // I don't known why not can i use ReactDOM.createPortal here

  ReactDOM.render( /*#__PURE__*/React.createElement(NuToast, _extends({}, otherProps, {
    open: true,
    appear: true,
    unmountOnExit: true,
    onExited: function onExited() {
      document.body.removeChild(container);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }), children), container);
}

NuToast.propTypes = process.env.NODE_ENV !== "production" ? {
  /** dom 元素 */
  children: PropTypes.node,

  /** className */
  className: PropTypes.string,

  /** 是否显示弹窗 */
  open: PropTypes.bool,

  /** toast状态 */
  status: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** 弹窗显示时间 */
  showTime: PropTypes.number
} : {};

NuToast.setDefault = function (_ref3) {
  var _ref3$status = _ref3.status,
      status = _ref3$status === void 0 ? ['danger', 'warning', 'success'] : _ref3$status,
      defaultProps = _objectWithoutPropertiesLoose(_ref3, ["status"]);

  // you can use like this NuToast('hello!');
  var api = function api(text) {
    NuToastRenderToDom(_extends(_extends({}, defaultProps), {}, {
      children: text
    }));
  }; // you can use like this NuToast.danger('hello!');


  status.map(function (item) {
    api[item] = function (text) {
      NuToastRenderToDom(_extends(_extends({}, defaultProps), {}, {
        children: text,
        status: item
      }));
    };

    return item;
  });
  return api;
};

export default NuToast;