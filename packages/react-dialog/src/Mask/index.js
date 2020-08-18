import React from 'react';
import PropTypes from 'prop-types';

const NuMask = ({
  className = 'nu_mask',
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
      className={className}
      type="button"
      title={title}
      aria-label={title}
      onClick={handleClick}
      {...otherProps}
    />
  );
};
NuMask.propTypes = {
  className: PropTypes.string,
  onAfterClick: PropTypes.func,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

NuMask.defaultProps = {
  className: 'nu_mask',
  onAfterClick: () => {},
  onClick: () => {},
  title: 'Mask',
};
export default NuMask;
