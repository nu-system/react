import React from 'react';
import NuButton from '../../../src';
import '@_nu/css-button';
import '@_nu/css-button/css/skins/bootstrap.css';
import '@_nu/css-button/css/skins/loading.css';
import '@_nu/css-button/css/skins/webnovel.css';
import './style.css';
const Button = React.forwardRef(function Button(props, ref) {
  return <NuButton ref={ref} {...props} />;
});
export default Button;
