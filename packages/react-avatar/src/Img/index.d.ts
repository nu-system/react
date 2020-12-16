import * as React from 'react';

export interface ComponentProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder'> {
  acss?: string;
  size?: string | Number;
  Component?: React.ReactNode;
  placeholder?: React.ReactNode;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
