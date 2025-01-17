var _excluded = ["Component", "acss", "className"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';

var Skeleton = function Skeleton(_ref) {
  var _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'span' : _ref$Component,
      _ref$acss = _ref.acss,
      acss = _ref$acss === void 0 ? 'db pt100%' : _ref$acss,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Component, _extends({
    className: "".concat(acss, " ").concat(className),
    "aria-hidden": "true"
  }, otherProps));
};

export default Skeleton;