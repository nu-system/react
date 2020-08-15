import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
function Portal({ children, container = document.body, disabled = false }) {
  return !disabled ? ReactDOM.createPortal(children, container) : children;
}

Portal.propTypes = {
  children: PropTypes.node,
  container: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Portal;
