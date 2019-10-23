import React from 'react';
import CounterC from './counter-context';
import CounterR from './counter-recompose';

const Context = props => (
  <div>
    <h3>use context api (React > 16.3)</h3>
    <CounterC step={3} />
    <h3>use recompose withContext</h3>
    <CounterR step={3} />
  </div>
);

export default Context;
