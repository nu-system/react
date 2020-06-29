import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

function Portal(_ref) {
  var children = _ref.children,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? document.body : _ref$container,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return !disabled ? ReactDOM.createPortal(children, container) : children;
}

Portal.propTypes = {
  children: PropTypes.node,
  container: PropTypes.object,
  disabled: PropTypes.bool
};
export default Portal;