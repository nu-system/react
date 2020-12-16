import React, { useState } from 'react';
import Placeholder from './Placeholder';

const Img = ({
  className = '',
  placeholder = null,
  onError,
  size,
  src = '',
  acss = 'pa t0 l0 w100p h100p',
  ...otherProps
}) => {
  const [imgLoadError, setImgLoadError] = useState(false);

  /**
   * 图片加载失败
   */
  const onImgLoadError = () => {
    setImgLoadError(true);
    typeof onError === 'function' && onError();
  };

  const newClass = `${acss} ${className}`;

  /** 如果图片加载失败 */
  if (!src || imgLoadError) {
    return (
      <Placeholder
        placeholder={placeholder}
        className={newClass}
        {...otherProps}
      />
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      className={newClass}
      src={src}
      width={size}
      height={size}
      onError={onImgLoadError}
      {...otherProps}
    />
  );
};

export default Img;
