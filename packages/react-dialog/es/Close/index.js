var _excluded = ["className", "children", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var Close = function Close(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, "\xD7") : _ref$children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Close' : _ref$title,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": title,
    type: "button",
    className: "nu_dialog_close ".concat(className),
    title: title,
    tabIndex: 0
  }, otherProps), children);
};

Close.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,

  /**
   * title
   */
  title: PropTypes.string,

  /**
   * children
   */
  children: PropTypes.node
};
export default Close;