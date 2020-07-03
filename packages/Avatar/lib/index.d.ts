import * as React from 'react';

interface DefaultClass {
  component?: string;
  ph?: string;
  img?: string;
}

export interface ComponentProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder'> {
  Component?: JSX.Element | string | null;
  before?: JSX.Element | string | null;
  size?: Number | string;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => boolean;
  imgDefaultSize?: Number | string;
  placeholder?: JSX.Element | string | null;
  defaultClassNames?: () => DefaultClass | DefaultClass;
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
