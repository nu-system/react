import React from 'react';
import PropTypes from 'prop-types';
/**
 * 遮罩
 * @param className
 * @param otherProps
 * @returns {JSX.Element}
 * @constructor
 */
const NuMask = ({
  // eslint-disable-next-line react/prop-types
  className = '',
  onAfterClick = () => {},
  onClick = () => {},
  title = 'Mask',
  ...otherProps
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (
      typeof onClick === 'function' &&
      onClick(e) !== false &&
      typeof onAfterClick === 'function'
    ) {
      onAfterClick();
    }
  };
  return (
    <button
      type="button"
      title={title}
      onClick={handleClick}
      aria-label={title}
      className={`nu_mask ${className}`}
      {...otherProps}
    />
  );
};

NuMask.propTypes = {
  onAfterClick: PropTypes.func,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default NuMask;
