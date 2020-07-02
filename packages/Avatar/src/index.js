import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * 错误图片对象
 * @param errorBg
 * @param imgProps
 * @returns {null|*}
 * @constructor
 */
const ErrorImg = ({ placeholder, ...imgProps }) => {
  if (!placeholder) {
    return null;
  }

  /* placeholder 是字符串则加载新的图片 */
  if (typeof placeholder === 'string') {
    return <img {...imgProps} alt="error" aria-hidden />;
  }

  /* placeholder 是个 function 直接执行  */
  if (typeof placeholder === 'function') {
    return placeholder({
      className: imgProps.className,
    });
  }

  return placeholder;
};

const NuAvatar = React.forwardRef(function NuAvatar(
  {
    className,
    children,
    size,
    imgDefaultSize,
    placeholder,
    src,
    alt,
    onError,
    ...otherProps
  },
  ref,
) {
  const [imgLoadError, setImgLoadError] = useState(false);
  // 当元素没有指定大小的时候
  // 容器撑满元素
  const strClass = classNames(
    'pr br100p',
    size ? 'dib vam' : 'db', // 当元素没有指定大小的时候， 容器撑满元素
    {
      [`_${size}`]: !!size,
    },
    className,
  );

  /**
   * 图片加载失败
   */
  const onImgLoadError = () => {
    setImgLoadError(true);
    typeof onError === 'function' && onError();
  };

  /**
   * ImgProps
   * @type {{width: *, className: string, height: *}}
   */
  const imgProps = {
    className: 'pa t0 l0 w100p h100p br100p',
    width: size || imgDefaultSize,
    height: size || imgDefaultSize,
  };

  return (
    <nu-avatar class={strClass}>
      <nu-avatar-ph aria-hidden class="db pt100p br100p" />
      {!src || imgLoadError ? (
        <ErrorImg placeholder={placeholder} {...imgProps} />
      ) : (
        <img
          ref={ref}
          alt={alt}
          src={src}
          {...imgProps}
          {...otherProps}
          onError={onImgLoadError}
        />
      )}
      {children}
    </nu-avatar>
  );
});

NuAvatar.defaultProps = {
  size: 40,
  imgDefaultSize: 40,
};

NuAvatar.propTypes = {
  /** Img src */
  src: PropTypes.string,
  /** Img alt */
  alt: PropTypes.string,
  /** 当没有 size 的时候会变成自适应 */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** 当没有指定 size 的时候，img 的 width 和 height 会等于 imgDefaultSize */
  imgDefaultSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 图片加载失败的占位符号
   * 如果是 string 则会新添加一个img
   * 如果是 object 或者 function 会直接输出
   * */
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * 图片加载失败执行
   */
  onError: PropTypes.func,
};

export default NuAvatar;
