import { ContainerProps, ImgProps, SkeletonProps } from '../../../src/index';
import * as React from 'react';

export interface ComponentProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: ImgProps.size;
  placeholder?: ImgProps.placeholder;
  children?: React.ReactNode;
}

declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
