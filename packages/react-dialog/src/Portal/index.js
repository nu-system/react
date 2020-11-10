// import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import getElementById from './getElementById';

function NuPortal({ root = document ? document.body : null, children }) {
  if (!root || typeof document === 'undefined') {
    return children;
  }

  const container = getElementById(root) || document.body;

  return ReactDOM.createPortal(children, container);
}

NuPortal.propTypes = {
  root: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.oneOf([false]),
  ]),
  children: PropTypes.node,
};

export default NuPortal;
