function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * 遮罩
 * @param className
 * @param otherProps
 * @returns {JSX.Element}
 * @constructor
 */

var NuMask = function NuMask(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$onAfterClick = _ref.onAfterClick,
      onAfterClick = _ref$onAfterClick === void 0 ? function () {} : _ref$onAfterClick,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      otherProps = _objectWithoutProperties(_ref, ["className", "onAfterClick", "onClick"]);

  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (typeof onClick === 'function' && onClick(e) !== false && typeof onAfterClick === 'function') {
      onAfterClick();
    }
  };

  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    title: "Mask",
    onClick: handleClick,
    className: "nu_mask ".concat(className)
  }, otherProps));
};

NuMask.propTypes = {
  onAfterClick: PropTypes.func,
  onClick: PropTypes.func
};
export default NuMask;