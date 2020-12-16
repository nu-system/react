import * as React from 'react';

export interface ComponentProps
  extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  acssWhenSize?: string;
  size?: string | Number;
  Component?: React.ReactNode;
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
