import React from 'react';

function Mask({ className = '', ...otherProps }) {
  return (
    <button
      type="button"
      title="Mask"
      className={`nu_mask ${className}`}
      {...otherProps}
    />
  );
}

export default Mask;
