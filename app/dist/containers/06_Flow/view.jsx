/**
 * @flow
 */
import React from 'react';
import TableView from './table/view';
import FormView from './form/view';
import { applyStyles } from '~/core/baseView';

/**
 *  flow type declare
 *  React.Component<DefaultProps, Props, State>
 */

type State = {
  nowIndex: number
};

@applyStyles()
export default class Flow extends React.Component<void, void, State> {
  state: State;

  constructor(props: void, context: any) {
    super(props, context);
    //console.log('Flow constructor',this);
    this.state = {
      nowIndex: -1
    };
  }

  onChildChanged = (newIndex: number) => {
    this.setState({
      nowIndex: newIndex
    });
  };

  render() {
    /**
     * 當結構複雜時可將內容切分並獨立成子元件，易於維護也增加可讀性
     */
    return (
      <div>
        <p>Personnel Data Sheet</p>
        <FormView
          nowIndex={this.state.nowIndex}
          callbackParent={this.onChildChanged}
        />
        <hr />
        <TableView
          nowIndex={this.state.nowIndex}
          title="Table Title"
          callbackParent={this.onChildChanged}
        />
      </div>
    );
  }
}
