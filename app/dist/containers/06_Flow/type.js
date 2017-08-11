/* @flow */
import MemberClass from './class';

/**
 * constant type
 */
export type INSERT = 'FLOW_INSERT';
export type REMOVE = 'FLOW_REMOVE';
export type UPDATE = 'FLOW_UPDATE';

/**
 * 個別設定 action 回傳
 * 讓 action 與 reducer 使用，進行語法檢查
 */
export type Action = InsertAction | RemoveAction | UpdateAction;
export type InsertAction = { type: INSERT, payload: MemberClass };
export type RemoveAction = {
  type: REMOVE,
  payload: { uid: number }
};
export type UpdateAction = { type: UPDATE, payload: MemberClass };

/**
 * reducer 回傳值
 */
export type Store = Array<MemberClass>;
export type NowState = {
  uid: number
};
