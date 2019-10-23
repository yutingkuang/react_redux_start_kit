/* @flow */
import React from 'react';
import CounterDisplay from './display';
import CounterIncBtn from './inc-btn';
import CounterDecBtn from './dec-btn';
import { withStyle } from '@core/container';
import styles from './counter.scss';

const CounterCard = withStyle(styles)(() => (
  <div styleName="card">
    <CounterDisplay />
    <div styleName="card__btn-list">
      <CounterDecBtn />
      <CounterIncBtn />
    </div>
  </div>
));

export default CounterCard;
