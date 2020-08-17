import * as React from 'react';
export interface ComponentProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  Component?: React.ReactNode | React.Component;
  children?: React.ReactNode;
  classNames?: string;
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
