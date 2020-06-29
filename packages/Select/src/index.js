import React from 'react';
import PropTypes from 'prop-types';

/**
 * array class name to string
 * remove empty and repeat class
 * @param {*} strings
 */
function classNames(strings) {
  let newClass = '';
  strings.forEach((element) => {
    if (element && element.length) {
      const arrClass = typeof element.split === 'function' ? element.split(' ') : element;
      arrClass.forEach((item) => {
        if (!!item && newClass.indexOf(item) === -1) {
          newClass = !newClass ? item : `${newClass} ${item}`;
        }
      });
    }
  });
  return newClass;
}

const Select = ({
  ComponentWrap = 'label',
  className = '',
  classNameDefault = '',
  children = null,
  // eslint-disable-next-line no-unused-vars
  disabled = false,
  ...otherProps
}) => {
  const Wrap = ComponentWrap;
  const classNameString = classNames([
    'nu_select',
    classNameDefault,
    className,
  ]);
  return (
    <Wrap className={classNameString}>
      <select {...otherProps}>{children}</select>
    </Wrap>
  );
};

Select.propTypes = {
  /**
   * just className
   */
  className: PropTypes.string,
  /**
   * default className will conbine with classname
   */
  classNameDefault: PropTypes.string,
  /**
   * children of component
   */
  children: PropTypes.node,
  /**
   * wrap of button
   */
  ComponentWrap: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * status of disabled
   */
  disabled: PropTypes.bool,
};
Select.defaultProps = {};
export default Select;
