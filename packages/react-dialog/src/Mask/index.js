import React from 'react';
import PropTypes from 'prop-types';

/**
 * 遮罩组件
 * @param className
 * @param title
 * @param otherProps
 * @returns {JSX.Element}
 * @constructor
 */
const NuMask = ({ className = 'nu_mask', title = 'Mask', ...otherProps }) => (
  <button
    className={className}
    type="button"
    title={title}
    aria-label={title}
    {...otherProps}
  />
);
NuMask.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};
export default NuMask;
