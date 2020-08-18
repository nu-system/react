import * as React from 'react';

export interface defaultClassT {
  component?: string;
  input?: string;
}

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  Component?: React.ReactNode | React.Component;
  Icon?: React.ReactNode | React.Component | any;
  children?: React.ReactNode;
  defaultClass?: defaultClassT;
  classNameInput?: string;
  type?: 'checkbox' | 'radio';
}
declare const _default: (props?: ComponentProps) => JSX.Element;
export default _default;
