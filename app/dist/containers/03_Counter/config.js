import View from './view';
import Reducer from './reducer';

export default {
  reducers: {
    counter: Reducer
  },
  router: {
    path: '/counter',
    component: View
  }
};

/**
 * Config.js 除了 router 設定，也包含了 state 與 Reducer 綁定
 * 參數名稱為 reducers 內容必須為 Object{ [state 名稱] : [Reducer function] }
 * 意思為：Reducer 處理結果儲存進 Store 中的 state
 * 
 * state 與 View 的綁定則使用 connect 函式
 * 參閱：03_Counter/View.jsx
 * 
 * counterStore是reducers的名稱（Data的key），必須在整個專案中為唯一值
 */
