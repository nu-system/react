"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// class name
var STYLES = {
  img: 'nu_img',
  box: "nu_img_box",
  circle: "_circle",
  stage: "nu_img_stage",
  placeholder: "nu_img_placeholder"
};

var classNames = function classNames(classList) {
  return classList.filter(function (item) {
    return !!item;
  }).join(' ');
};

var getErrorBg = function getErrorBg(errorBg) {
  var DEFAULT_BG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjQAMAABAAAbSqgB8AAAAASUVORK5CYII=';

  if (errorBg === true) {
    return DEFAULT_BG;
  }

  if (errorBg.indexOf('data:image/') === 0) {
    return errorBg;
  }

  return "data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='100%25' height='100%25' style='fill:".concat(encodeURIComponent(errorBg), ";'/%3E%3C/svg%3E");
};

var Img = function Img(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$errorBg = _ref.errorBg,
      errorBg = _ref$errorBg === void 0 ? false : _ref$errorBg,
      _ref$circle = _ref.circle,
      circle = _ref$circle === void 0 ? false : _ref$circle,
      otherProps = _objectWithoutProperties(_ref, ["className", "errorBg", "circle"]);

  if (errorBg && !otherProps.onError) {
    otherProps.onError = function (event) {
      var newErrorBg = getErrorBg(errorBg);

      if (event.target.src !== newErrorBg) {
        event.target.src = newErrorBg;
      }
    };
  }

  return /*#__PURE__*/_react.default.createElement("img", _extends({
    className: classNames([className, STYLES.img, circle ? STYLES.circle : ''])
  }, otherProps));
};

var NuImg = function NuImg(_ref2) {
  var _ref2$responsive = _ref2.responsive,
      responsive = _ref2$responsive === void 0 ? false : _ref2$responsive,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? null : _ref2$children,
      otherProps = _objectWithoutProperties(_ref2, ["responsive", "children"]);

  if (!responsive && !children) {
    return /*#__PURE__*/_react.default.createElement(Img, otherProps);
  }

  var style = otherProps.style,
      circle = otherProps.circle,
      _otherProps$className = otherProps.className,
      className = _otherProps$className === void 0 ? '' : _otherProps$className,
      leftProps = _objectWithoutProperties(otherProps, ["style", "circle", "className"]);

  return /*#__PURE__*/_react.default.createElement("nu-img", _extends({
    "data-responsive": responsive,
    class: classNames([className, STYLES.box, circle ? STYLES.circle : ''])
  }, {
    style: style
  }), /*#__PURE__*/_react.default.createElement(Img, leftProps), /*#__PURE__*/_react.default.createElement("span", {
    className: STYLES.placeholder,
    "aria-hidden": "true",
    style: {
      paddingTop: leftProps.height / leftProps.width * 100 + '%'
    }
  }), children ? /*#__PURE__*/_react.default.createElement("span", {
    className: STYLES.stage
  }, children) : null);
};

NuImg.propTypes = {
  defaultSrc: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  src: _propTypes.default.string,
  alt: _propTypes.default.string.isRequired,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
  responsive: _propTypes.default.oneOf([false, true, 'x', 'y']),
  circle: _propTypes.default.bool
};
var _default = NuImg;
exports.default = _default;