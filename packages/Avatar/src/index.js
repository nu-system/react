import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Avatar = React.forwardRef(
  (
    {
      //
      size = 40,
      errorBg,
      className,
      src,
      alt,
      children,
      ...otherProps
    },
    ref,
  ) => {
    const [imgLoadError, setImgLoadError] = useState(false);
    let strClass = 'pr br100p';

    if (className) {
      strClass += ` ${className}`;
    }

    // 当元素没有指定大小的时候
    // 容器撑满元素
    strClass += size ? ' dib vam' : ' db';

    // 图片加载失败
    const onError = () => setImgLoadError(true);

    const imgProps = {
      className: 'pa t0 l0 w100p h100p br100p',
      width: size || 40,
      height: size || 40,
    };

    /**
     * 错误图片对象
     * @returns {null|*}
     * @constructor
     */
    const ErrorImg = () => {
      if (!errorBg) {
        return null;
      }
      if (typeof errorBg === 'string') {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <img {...imgProps} alt="error" aria-hidden />;
      }

      if (typeof errorBg === 'function') {
        return errorBg({
          className: imgProps.className,
        });
      }
      return null;
    };

    return (
      <nu-avatar data-size={size || null} class={strClass} {...otherProps}>
        <nu-avatar-ph class="db pt100p br100p" />
        {!src || imgLoadError ? (
          <ErrorImg />
        ) : (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img ref={ref} alt={alt} src={src} {...imgProps} onError={onError} />
        )}
        {children}
      </nu-avatar>
    );
  },
);

Avatar.propTypes = {
  // eslint-disable-next-line no-undef
  className: PropTypes.string,
  // eslint-disable-next-line no-undef
  children: PropTypes.node,
  // eslint-disable-next-line no-undef
  src: PropTypes.string,
  // eslint-disable-next-line no-undef
  alt: PropTypes.string.isRequired,
  /** 当没有 size 的时候会变成自适应 */
  // eslint-disable-next-line no-undef
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 图片加载失败的占位符号
   * 如果是 string 则会新添加一个img
   * 如果是 object 或者 function 会直接输出
   * */
  // eslint-disable-next-line no-undef
  errorBg: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

Avatar.defaultProps = {
  size: 40,
};

export default Avatar;
