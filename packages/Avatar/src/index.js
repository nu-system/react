import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * 错误图片对象
 * @param errorBg
 * @param imgProps
 * @returns {null|*}
 * @constructor
 */
const AvatarPlaceholder = ({ placeholder, ...imgProps }) => {
  if (!placeholder) {
    return null;
  }

  /* placeholder 是字符串则加载新的图片 */
  if (typeof placeholder === 'string') {
    return <img src={placeholder} {...imgProps} alt="error" aria-hidden />;
  }

  /* placeholder 是个 function 直接执行  */
  if (typeof placeholder === 'function') {
    return placeholder({
      className: imgProps.className,
    });
  }

  return placeholder;
};

/**
 * NuAvatar
 * @param {string} className
 * @param {node}  children
 * @param {string |number } size
 * @param {string |number } imgDefaultSize
 * @param {string | node | function } placeholder
 * @param {function} onError
 * @param { object }otherProps
 * @param ref
 * @returns {*}
 * @constructor
 */
const NuAvatar = React.forwardRef(function NuAvatar(
  {
    Component = 'i',
    before,
    children,
    size = 40,
    imgDefaultSize = 40,
    placeholder,
    onError,
    className,
    defaultClassNames = {
      component: 'nu_avatar',
      ph: 'nu_avatar_ph',
      img: 'nu_avatar_img',
    },
    ...otherProps
  },
  ref,
) {
  const [imgLoadError, setImgLoadError] = useState(false);

  const classNameDefault =
    typeof defaultClassNames === 'function'
      ? defaultClassNames({ size, ...otherProps })
      : defaultClassNames;
  /**
   * 图片加载失败
   */
  const onImgLoadError = () => {
    setImgLoadError(true);
    typeof onError === 'function' && onError();
  };

  const imgProps = {
    className: classNameDefault.img,
    width: size || imgDefaultSize,
    height: size || imgDefaultSize,
  };

  const componentClassName = classNames(classNameDefault.component, className, {
    [`_${size}`]: !!size,
  });
  return (
    <Component className={componentClassName}>
      {classNameDefault.ph ? <span aria-hidden="true" className={classNameDefault.ph} /> : null}
      {!otherProps.src || imgLoadError ? (
        <AvatarPlaceholder placeholder={placeholder} {...imgProps} />
      ) : (
        <img ref={ref} {...imgProps} {...otherProps} onError={onImgLoadError} />
      )}
      {children}
    </Component>
  );
});
NuAvatar.defaultProps = {};
NuAvatar.propTypes = {
  /** 容器元素 */
  Component: PropTypes.node,
  /** 子元素 */
  children: PropTypes.node,
  /** 当没有 size 的时候会变成自适应 */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** 图片加载失败执行 */
  onError: PropTypes.func,
  /** 获取默认的 className 需要返回 { component{ string }, ph{ string }, img{ string }} */
  defaultClassNames: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /** 当没有指定 size 的时候，img 的 width 和 height 会等于 imgDefaultSize */
  imgDefaultSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * 图片加载失败的占位符号
   * 如果是 string 则会新添加一个img
   * 如果是 object 或者 function 会直接输出
   * */
  placeholder: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};

export default NuAvatar;
