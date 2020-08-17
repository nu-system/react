// import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import getElementById from './getElementById';

function NuPortal(_ref) {
  var _ref$root = _ref.root,
      root = _ref$root === void 0 ? document ? document.body : null : _ref$root,
      children = _ref.children;

  if (!root || !document) {
    return children;
  }

  var container = getElementById(root) || document.body;
  return ReactDOM.createPortal(children, container);
}

NuPortal.propTypes = {
  root: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.oneOf([false])]),
  children: PropTypes.node
};
export default NuPortal;