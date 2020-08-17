"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      otherProps = _objectWithoutProperties(_ref, ["ComponentWrap", "className", "classNameDefault", "children", "disabled"]);

  var Wrap = ComponentWrap;
  var classNameString = classNames(['nu_select', classNameDefault, className]);
  return /*#__PURE__*/_react.default.createElement(Wrap, {
    className: classNameString
  }, /*#__PURE__*/_react.default.createElement("select", otherProps, children));
};

Select.propTypes = {
  /**
   * just className
   */
  className: _propTypes.default.string,

  /**
   * default className will conbine with classname
   */
  classNameDefault: _propTypes.default.string,

  /**
   * children of component
   */
  children: _propTypes.default.node,

  /**
   * wrap of button
   */
  ComponentWrap: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * status of disabled
   */
  disabled: _propTypes.default.bool
};
Select.defaultProps = {};
var _default = Select;
exports.default = _default;