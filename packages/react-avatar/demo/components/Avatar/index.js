import React from 'react';
import { NuContainer, NuImg, NuSkeleton } from '../../../src/index';
import '@_nu/css-acss';
import './index.css';

const Avatar = ({
  className = '',
  src,
  size,
  placeholder,
  children = null,
}) => {
  return (
    <NuContainer size={size} className={className}>
      <NuSkeleton />
      <NuImg src={src} size={size} placeholder={placeholder} />
      {children}
    </NuContainer>
  );
};

export default Avatar;
