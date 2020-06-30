import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly component?: *}> & React.RefAttributes<unknown>>}
 */
const Index = React.forwardRef(({ component, ...otherProps }, ref) => {
  const { href, role, type, children, title } = otherProps;

  // if exist Component use component
  // or ComponentTag rely on href
  const ComponentTag = component ? component : href ? 'a' : 'button';

  // only button got button type
  if (ComponentTag === 'button' && !type) {
    otherProps.type = 'button';
  }

  // Got role attr when ComponentTag is not button
  if (ComponentTag !== 'button' && !role) {
    otherProps.role = 'button';
  }

  // set the title of button
  if (typeof children === 'string' && !title) {
    otherProps.title = children;
  }

  return <ComponentTag ref={ref} {...otherProps} />;
});

Index.propTypes = {
  /** href for tag a */
  href: PropTypes.string,
  /** shell of button */
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
};

export default Index;
