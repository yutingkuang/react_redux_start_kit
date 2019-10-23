/* @flow */
import React from 'react';
import { withCounter } from './context';
import { compose, withStyle } from '@core/container';
import styles from './counter.scss';

const IncBtn = ({ ctxData: { inc } }) => (
  <button type="button" styleName="card__btn" onClick={inc}>
    +
  </button>
);
const CounterIncBtn = compose(
  withCounter,
  withStyle(styles)
)(IncBtn);

export default CounterIncBtn;
