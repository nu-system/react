import React from 'react';
import NuAvatar from '../../../src/index';
import '@_nu/css-acss';
import './index.css';

NuAvatar.defaultProps.defaultClassNames = {
  component: 'avatar',
  ph: 'ph',
  img: 'img',
};

export default NuAvatar;
