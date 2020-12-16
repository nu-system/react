import React from 'react';

const Container = ({
  Component = 'i',
  acss = 'db pr',
  acssWhenSize = 'dib vam pr',
  className = '',
  size,
  ...otherProps
}) => (
  <Component
    className={`${size ? acssWhenSize : acss} ${className}`}
    size={size}
    {...otherProps}
  />
);

export default Container;
