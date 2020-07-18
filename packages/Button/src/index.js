import React from 'react';
import PropTypes from 'prop-types';

/**
 * 按钮组件
 * @param Component
 * @param classNames
 * @param className
 * @param otherProps
 * @param ref
 * @returns {*}
 * @constructor
 */
const NuButton = React.forwardRef(function NuButton(
  { Component, classNames, className, ...otherProps },
  ref,
) {
  // if exist Component use component
  // or ComponentTag rely on href
  const ComponentTag = Component ? Component : otherProps.href ? 'a' : 'button';

  // only button got button type
  if (ComponentTag === 'button' && !otherProps.type) {
    otherProps.type = 'button';
  }

  // Got role attr when ComponentTag is not button
  if (ComponentTag !== 'button' && !otherProps.role) {
    otherProps.role = 'button';
  }

  const classNameNew =
    [classNames, className].filter((item) => !!item).join(' ') || null;

  return <ComponentTag className={classNameNew} ref={ref} {...otherProps} />;
});

NuButton.defaultProps = {
  classNames: 'nu_btn',
};

NuButton.propTypes = {
  /** core className */
  classNames: PropTypes.string,
  /** href for tag a */
  href: PropTypes.string,
  /** shell of button */
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
};

export default NuButton;
