import React from 'react';
import PropTypes from 'prop-types';

const Close = ({
  className = '',
  children = <>&times;</>,
  title = 'Close',
  ...otherProps
}) => (
  <button
    aria-label={title}
    type="button"
    className={`nu_dialog_close ${className}`}
    title={title}
    tabIndex={0}
    {...otherProps}
  >
    {children}
  </button>
);

Close.propTypes = {
  /**
   * css class
   */
  className: PropTypes.string,
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * children
   */
  children: PropTypes.node,
};

export default Close;
