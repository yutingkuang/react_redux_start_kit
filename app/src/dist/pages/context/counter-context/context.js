/* @flow */
import React from 'react';

const ctx: any = React.createContext();

export const { Provider, Consumer } = ctx;

export const withCounter = (Component: any) => (props: Object) => (
  <Consumer>{value => <Component {...props} ctxData={value} />}</Consumer>
);

export default ctx;
