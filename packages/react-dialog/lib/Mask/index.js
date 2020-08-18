"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NuMask = function NuMask(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'nu_mask' : _ref$className,
      _ref$onAfterClick = _ref.onAfterClick,
      onAfterClick = _ref$onAfterClick === void 0 ? function () {} : _ref$onAfterClick,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Mask' : _ref$title,
      otherProps = _objectWithoutProperties(_ref, ["className", "onAfterClick", "onClick", "title"]);

  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (typeof onClick === 'function' && onClick(e) !== false && typeof onAfterClick === 'function') {
      onAfterClick();
    }
  };

  return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: className,
    type: "button",
    title: title,
    "aria-label": title,
    onClick: handleClick
  }, otherProps));
};

NuMask.propTypes = {
  className: _propTypes.default.string,
  onAfterClick: _propTypes.default.func,
  onClick: _propTypes.default.func,
  title: _propTypes.default.string
};
NuMask.defaultProps = {
  className: 'nu_mask',
  onAfterClick: function onAfterClick() {},
  onClick: function onClick() {},
  title: 'Mask'
};
var _default = NuMask;
exports.default = _default;