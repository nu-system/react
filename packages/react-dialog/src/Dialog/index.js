import React from 'react';
import PropTypes from 'prop-types';

const NuDialog = ({
  className = 'nu_dialog',
  role = 'document',
  ...otherProps
}) => <section role={role} className={className} {...otherProps} />;

NuDialog.propTypes = {
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

export default NuDialog;
