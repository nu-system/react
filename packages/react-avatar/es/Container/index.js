function _extends() {
  _extends =
    Object.assign ||
    function(target) {
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

var Container = function Container(_ref) {
  var _ref$Component = _ref.Component,
    Component = _ref$Component === void 0 ? 'i' : _ref$Component,
    _ref$acss = _ref.acss,
    acss = _ref$acss === void 0 ? 'db pr oh' : _ref$acss,
    _ref$acssWhenSize = _ref.acssWhenSize,
    acssWhenSize =
      _ref$acssWhenSize === void 0 ? 'dib vam pr' : _ref$acssWhenSize,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    size = _ref.size,
    otherProps = _objectWithoutProperties(_ref, [
      'Component',
      'acss',
      'acssWhenSize',
      'className',
      'size',
    ]);

  return /*#__PURE__*/ React.createElement(
    Component,
    _extends(
      {
        className: ''.concat(size ? acssWhenSize : acss, ' ').concat(className),
        size: size,
      },
      otherProps,
    ),
  );
};

export default Container;
