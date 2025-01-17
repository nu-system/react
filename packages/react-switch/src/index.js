/**
 * Author: ziven27
 * Date: 7/6/2020
 * Desc: 开关的母版组件, radio，checkbox，switch 应该都基于这个组件
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * 渲染图标
 * @param Icon
 * @param props
 * @returns {*|null|React.DetailedReactHTMLElement<*, HTMLElement>}
 * @constructor
 */
// eslint-disable-next-line react/prop-types
const RenderIcon = ({ Icon, ...props }) => {
  if (!Icon) {
    return null;
  }
  return typeof Icon === 'object' ? (
    React.cloneElement(Icon, props)
  ) : (
    <Icon {...props} />
  );
};

/**
 * On Off
 * @param {node} Component
 * @param {func | node} Icon
 * @param {string} type
 * @param {node} children
 * @param {string} className
 * @param {object} defaultClass
 * @param otherProps
 * @param ref
 * @returns {*}
 * @constructor
 */
const NuSwitch = React.forwardRef(function NuSwitch(
  {
    Component,
    Icon,
    type,
    children,
    // eslint-disable-next-line react/prop-types
    className = '',
    classNameInput,
    defaultClass,
    componentProps,
    ...otherProps
  },
  ref,
) {
  return (
    <Component
      className={classNames(defaultClass.component, className)}
      {...componentProps}
    >
      <input
        className={classNames(defaultClass.input, classNameInput)}
        ref={ref}
        type={type}
        {...otherProps}
      />
      <RenderIcon
        Icon={Icon}
        checked={otherProps.checked}
        disabeld={otherProps.disabeld}
      />
      {children}
    </Component>
  );
});

NuSwitch.defaultProps = {
  defaultClass: {
    component: 'nu_switch',
    input: '_input',
  },
  Component: 'label',
  Icon: <i className="_icon" />,
  type: 'checkbox',
  children: null,
  classNameInput: '',
  componentProps: {},
};

NuSwitch.propTypes = {
  /** 默认class */
  defaultClass: PropTypes.shape({
    component: PropTypes.string,
    input: PropTypes.string,
  }),
  /** default class of input */
  classNameInput: PropTypes.string,
  /** input types */
  type: PropTypes.oneOf(['checkbox', 'radio']),
  /** 子元素 */
  children: PropTypes.node,
  /** 容器组件，默认为 label */
  Component: PropTypes.node,
  /** 容器组件的 props */
  componentProps: PropTypes.object,
  /** 图标 */
  Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

export default NuSwitch;
