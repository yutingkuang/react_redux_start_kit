import { BUTTON_CLICK, BUTTON_RESET } from './constant';

class BtnClass {
  constructor() {
    this.primary = false;
    this.success = false;
    this.warning = false;
    this.danger = false;
  }
}

/**
 * 可以使用類別(class)作為 state 內容
 */

export default (state = new BtnClass(), { type, payload }) => {
  // console.log(state,type, payload);
  switch (type) {
    case BUTTON_CLICK:
      const { btnStyle } = payload;
      state[btnStyle] = !state[btnStyle];
      return Object.assign(new BtnClass(), state);
    case BUTTON_RESET:
      return new BtnClass();
    default:
      return state;
  }
};
