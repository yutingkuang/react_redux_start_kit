/**
 * @flow
 */
import React from 'react';
import BaseView, { applyStyles, connect } from '~/core/baseView';
import { STORE_KEY } from '../constant';
import { add, edit } from '../action';
import MemberClass from '../class';
import type { State, Props } from './type';

/**
 * Form 元件只負責處理表單操作
 */
@applyStyles()
class Form extends BaseView<void, Props, State> {
  //資料序號
  uidIndex: number;
  //記錄新增欄位內容
  state: State;
  //紀錄編輯項目uid, 若無為-1
  //nowIndex: number;

  constructor(props: Props, context: any) {
    super(props, context);
    this.uidIndex = 1;
    this.state = this.initializeState();
  }

  initializeState = (): State => {
    return {
      uid: this.uidIndex,
      name: '',
      gender: 'male',
      married: false
    };
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.nowIndex != -1) {
      const memberStore: Array<MemberClass> = nextProps.response;
      const _findIdxById = (arr, uid) => arr.findIndex(a => a.uid === uid);
      const idx = _findIdxById(memberStore, nextProps.nowIndex);
      if (idx != -1) {
        this.setState(memberStore[idx]);
      }
    }
  }

  changeIndexHandler = (uid: number) => {
    this.props.callbackParent(uid);
  };

  changeHandler = (stateKey: string): ((e: Event) => void) => (e: Event) => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      //根據欄位更新 state
      this.setState({
        [stateKey]:
          stateKey === 'married' ? target.value === 'true' : target.value
      });
    }
  };

  validate = (): boolean => {
    //檢查有沒有輸入 name
    const { name } = this.state;
    if (!name) return false;
    return true;
  };

  submit = (e: Event): void => {
    e.preventDefault();
    if (this.state && this.validate()) {
      const { nowIndex } = this.props;
      if (nowIndex == -1) {
        //執行新增 action
        this.dispatch(add(Object.assign(new MemberClass(), this.state)));
        //新增增加 uid 序號
        this.uidIndex += 1;
      } else {
        // 編輯
        this.dispatch(edit(Object.assign(new MemberClass(), this.state)));
        this.changeIndexHandler(-1);
      }
      //初始化表單
      this.setState(this.initializeState());
    }
  };

  render() {
    const { nowIndex } = this.props;
    const { name, married, gender } = this.state;
    return (
      <form>
        <div styleName="form-group">
          <label>Name (*)</label>
          <input
            type="type"
            value={name}
            onChange={this.changeHandler('name')}
            styleName="form-control"
          />
        </div>
        <div styleName="form-group">
          <label>Marital status</label>
          <br />
          <label styleName="radio-inline">
            <input
              type="radio"
              onChange={this.changeHandler('married')}
              name="marry"
              value="false"
              checked={!married}
            />
            Unmarried
          </label>
          <label styleName="radio-inline">
            <input
              type="radio"
              onChange={this.changeHandler('married')}
              name="marry"
              value="true"
              checked={married}
            />
            Married
          </label>
        </div>
        <div styleName="form-group">
          <label>Gender</label>
          <br />
          <label styleName="radio-inline">
            <input
              type="radio"
              onChange={this.changeHandler('gender')}
              name="gender"
              value="male"
              checked={gender === 'male'}
            />
            Male
          </label>
          <label styleName="radio-inline">
            <input
              type="radio"
              onChange={this.changeHandler('gender')}
              name="gender"
              checked={gender === 'female'}
              value="female"
            />
            Female
          </label>
        </div>
        <button styleName="btn btn-primary" onClick={this.submit}>
          submit
        </button>
      </form>
    );
  }
}

export default connect(STORE_KEY)(Form);
