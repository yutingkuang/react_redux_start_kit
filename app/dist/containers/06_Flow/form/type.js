/* @flow */

/**state 內置資料 當資料（state）改變會重新渲染UI */
export type State = {
  uid: number,
  name: string,
  gender: 'female' | 'male',
  married: boolean
};

/**props 取得輸入的資料 */
export type Props = {
  nowIndex: number,
  callbackParent: (index: number) => void
};
