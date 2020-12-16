import React from 'react';

const Container = ({
  Component = 'i',
  acss = 'db pr oh br100p',
  acssWhenSize = 'dib vam pr oh br100p',
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
