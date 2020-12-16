import React from 'react';

/**
 * 错误图片对象
 * @param errorBg
 * @param imgProps
 * @returns {null|*}
 * @constructor
 */
const Placeholder = ({ placeholder, ...otherProps }) => {
  if (!placeholder) {
    return null;
  }

  /* placeholder 是字符串则加载新的图片 */
  if (typeof placeholder === 'string') {
    return <img src={placeholder} {...otherProps} alt="error" aria-hidden />;
  }

  /* placeholder 是个 function 直接执行  */
  if (typeof placeholder === 'function') {
    return placeholder({
      ...otherProps,
    });
  }

  return placeholder;
};

export default Placeholder;
