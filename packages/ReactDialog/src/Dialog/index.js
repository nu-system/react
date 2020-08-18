import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({
  className = 'nu_dialog',
  role = 'document',
  ...otherProps
}) => <section role={role} className={className} {...otherProps} />;

Dialog.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * role of dialog
   */
  role: PropTypes.string,
};

export default Dialog;
