function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * Button
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly as?: *}> & React.RefAttributes<unknown>>}
 */

var Button = React.forwardRef(function (_ref, ref) {
  var as = _ref.as,
      otherProps = _objectWithoutProperties(_ref, ["as"]);

  var href = otherProps.href,
      role = otherProps.role,
      type = otherProps.type,
      children = otherProps.children,
      title = otherProps.title; // if exist Component use component
  // or ComponentTag rely on href

  var ComponentTag = as ? as : href ? 'a' : 'button'; // only button got button type

  if (ComponentTag === 'button' && !type) {
    otherProps.type = 'button';
  } // Got role attr when ComponentTag is not button


  if (ComponentTag !== 'button' && !role) {
    otherProps.role = 'button';
  } // set the title of button


  if (typeof children === 'string' && !title) {
    otherProps.title = children;
  }

  return /*#__PURE__*/React.createElement(ComponentTag, _extends({
    ref: ref
  }, otherProps));
});
Button.propTypes = {
  /**
   * href for tag a
   */
  href: PropTypes.string,

  /**
   * shell of button
   */
  as: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType])
};
export default Button;