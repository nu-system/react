import * as React from 'react';

export interface AvatarProps {
  className?: string;
  alt?: string;
  src?: string;
  size?: string | number;
  errorBg?: string | (() => React.ReactNode);
  children?: React.ReactNode;
}

declare interface Avatar<P extends AvatarProps> {
  props: P;
}

export default Avatar;
