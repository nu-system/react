function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

import React from 'react';
import PropTypes from 'prop-types';

var NuDialog = function NuDialog(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? 'nu_dialog' : _ref$className,
    _ref$role = _ref.role,
    role = _ref$role === void 0 ? 'document' : _ref$role,
    otherProps = _objectWithoutProperties(_ref, ['className', 'role']);

  return /*#__PURE__*/ React.createElement(
    'section',
    _extends(
      {
        role: role,
        className: className,
      },
      otherProps,
    ),
  );
};

NuDialog.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,

  /**
   * children
   */
  children: PropTypes.node,

  /**
   * role of dialog
   */
  role: PropTypes.string,
};
export default NuDialog;
