/**
 * Author: <%= e2.authorName %>
 * Date: <%= e2.date %>
 * Desc: 这是什么？
 */
import React from "react";
import PropTypes from "prop-types";
// import _style from "./style.module.scss";

/**
 * On Off
 * @param {node} Component
 * @param {node} children
 * @param {string} className
 * @param {object} otherProps
 * @param ref
 * @returns {*}
 * @constructor
 */
const Nu<%= e2.ttc(e2.componentName) %>= React.forwardRef(function NuS<%= e2.ttc(e2.componentName) %>(
  {
    className = '',
    Component = 'div',
    children=null,
    ...otherProps
  },
  ref
){
  return (
    <Component className={`${className}`} ref={ref} {...otherProps}>
      {children}
    </Component>
  );
}

Nu<%= e2.ttc(e2.componentName) %>.defaultProps = {
  children: null,
  className: ""
};

Nu<%= e2.ttc(e2.componentName) %>.propTypes = {
  /** 子元素 */
  children: PropTypes.node,
  /** 容器组件，默认为 label */
  Component: PropTypes.node,
  /** css class */
  className: PropTypes.string
};

export default Nu<%= e2.ttc(e2.componentName) %>;
