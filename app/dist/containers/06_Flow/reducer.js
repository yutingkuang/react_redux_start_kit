/**
 * @flow
 */
import { FLOW_INSERT, FLOW_REMOVE, FLOW_UPDATE } from './constant';
import type { Action, Store } from './type';

export default (state: Store = [], action: Action): Store => {
  switch (action.type) {
    /* 新增資料 */
    case FLOW_INSERT:
      // state.push(action.payload)
      return [...state, action.payload];

    /* 移除資料 */
    case FLOW_REMOVE:
      const { uid } = action.payload;
      return [...state].filter(member => member.uid !== uid);

    /* 更新資料 */
    case FLOW_UPDATE:
      const _findIdxById = (state, uid) => state.findIndex(s => s.uid === uid);
      const idx = _findIdxById(state, action.payload.uid);
      const newState = [...state];
      newState[idx] = action.payload;
      return newState;

    default:
      return state;
  }
};
