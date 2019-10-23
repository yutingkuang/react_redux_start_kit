/* @flow */
import React from 'react';
import CounterCard from './card';
import { Provider } from './context';
import { compose, withStateHandlers } from 'recompose';

const handler = withStateHandlers(
  {
    count: 0
  },
  {
    inc: ({ count }, { step = 1 }) => () => ({
      count: count + step
    }),
    dec: ({ count }, { step = 1 }) => () => ({
      count: count - step
    })
  }
);

const Counter = handler(({ count, inc, dec }: any) => (
  <Provider value={{ count, inc, dec }}>
    <CounterCard />
  </Provider>
));

export default Counter;
