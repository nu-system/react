import React from 'react';

const Skeleton = ({
  Component = 'span',
  acss = 'db pt100%',
  className = '',
  ...otherProps
}) => (
  <Component
    className={`${acss} ${className}`}
    aria-hidden="true"
    {...otherProps}
  />
);
export default Skeleton;
