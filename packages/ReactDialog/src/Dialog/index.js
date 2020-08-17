import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ children = null, ...otherProps }) => (
  <section role="document" className="nu_dialog" {...otherProps}>
    {children}
  </section>
);

Dialog.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,
  /**
   * children
   */
  children: PropTypes.node,
};

export default Dialog;
