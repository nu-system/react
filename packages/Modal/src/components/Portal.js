// import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import getElementById from './getElementById';

function Portal({ root = document ? document.body : null, children }) {
  if (!root || !document) {
    return children;
  }

  const container = getElementById(root) || document.body;

  return ReactDOM.createPortal(children, container);
}

Portal.propTypes = {
  root: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.oneOf([false]),
  ]),
  children: PropTypes.node,
};

export default Portal;
