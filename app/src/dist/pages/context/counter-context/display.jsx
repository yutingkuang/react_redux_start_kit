/* @flow */
import React from 'react';
import { withCounter } from './context';
import { compose, withStyle } from '@core/container';
import styles from './counter.scss';

const Display = ({ ctxData: { count } }) => (
  <h5 styleName="card__title">{count}</h5>
);

const CounterDisplay = compose(
  withCounter,
  withStyle(styles)
)(Display);

export default CounterDisplay;
