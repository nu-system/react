var _excluded = ["ComponentWrap", "className", "classNameDefault", "children", "disabled"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * array class name to string
 * remove empty and repeat class
 * @param {*} strings
 */

function classNames(strings) {
  var newClass = '';
  strings.forEach(function (element) {
    if (element && element.length) {
      var arrClass = typeof element.split === 'function' ? element.split(' ') : element;
      arrClass.forEach(function (item) {
        if (!!item && newClass.indexOf(item) === -1) {
          newClass = !newClass ? item : "".concat(newClass, " ").concat(item);
        }
      });
    }
  });
  return newClass;
}

var Select = function Select(_ref) {
  var _ref$ComponentWrap = _ref.ComponentWrap,
      ComponentWrap = _ref$ComponentWrap === void 0 ? 'label' : _ref$ComponentWrap,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$classNameDefault = _ref.classNameDefault,
      classNameDefault = _ref$classNameDefault === void 0 ? '' : _ref$classNameDefault,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? null : _ref$children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var Wrap = ComponentWrap;
  var classNameString = classNames(['nu_select', classNameDefault, className]);
  return /*#__PURE__*/React.createElement(Wrap, {
    className: classNameString
  }, /*#__PURE__*/React.createElement("select", otherProps, children));
};

Select.propTypes = {
  /**
   * just className
   */
  className: PropTypes.string,

  /**
   * default className will conbine with classname
   */
  classNameDefault: PropTypes.string,

  /**
   * children of component
   */
  children: PropTypes.node,

  /**
   * wrap of button
   */
  ComponentWrap: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * status of disabled
   */
  disabled: PropTypes.bool
};
Select.defaultProps = {};
export default Select;