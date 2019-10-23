/* @flow */
import React from 'react';
import { withCounter } from './context';
import { compose, withStyle } from '@core/container';
import styles from './counter.scss';

const DecBtn = ({ ctxData: { dec } }) => (
  <button type="button" styleName="card__btn" onClick={dec}>
    -
  </button>
);
const CounterDecBtn = compose(
  withCounter,
  withStyle(styles)
)(DecBtn);

export default CounterDecBtn;
