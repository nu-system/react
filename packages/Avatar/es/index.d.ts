import * as React from 'react';

interface DefaultClass {
  component?: string;
  ph?: string;
  img?: string;
}

export interface ComponentProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder'> {
  Component?: React.ReactNode;
  children?: React.ReactNode;
  placeholder?: React.ReactNode;
  size?: Number | string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
  imgDefaultSize?: Number | string;
  defaultClassNames?: () => DefaultClass | DefaultClass;
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
