/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import { compose, withStateHandlers, withContext, getContext } from 'recompose';
import { withStyle } from '@core/container';
import styles from './counter.scss';

const handler = compose(
  withStateHandlers(
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
  ),
  withContext(
    { count: PropTypes.number, dec: PropTypes.func, inc: PropTypes.func },
    ({ count, dec, inc }) => ({
      count,
      dec,
      inc
    })
  ),
  withStyle(styles)
);

const Counter = handler(() => (
  <div styleName="card">
    <Display />
    <div styleName="card__btn-list">
      <DecBtn />
      <IncBtn />
    </div>
  </div>
));

const Display = compose(
  getContext({ count: PropTypes.number }),
  withStyle(styles)
)(({ count }) => <h5 styleName="card__title">{count}</h5>);

const DecBtn = compose(
  getContext({ dec: PropTypes.func }),
  withStyle(styles)
)(({ dec }) => (
  <button type="button" styleName="card__btn" onClick={dec}>
    -
  </button>
));

const IncBtn = compose(
  getContext({ inc: PropTypes.func }),
  withStyle(styles)
)(({ inc }) => (
  <button type="button" styleName="card__btn" onClick={inc}>
    +
  </button>
));

export default Counter;
