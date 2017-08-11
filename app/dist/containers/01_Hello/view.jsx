import React from 'react';
import { SayHello } from '../02_Input/view';

export default class Hello extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        Hello World!<SayHello name="test" test="hahaha" />
      </div>
    );
  }
}

/**
 * Class 在 ES6 中被引入，相較於 ES5 更貼近傳統語言的寫法，
 * 底下必須添加 constructor 作為類別默認方法
 * 
 * 將類別 extends 自 React.Component，透過 React 底下 render 方法渲染畫面
 * 即可建構一個基本的 React 元件
 *
 * ES6 的 Class 以及 import 使用請參閱：http://es6.ruanyifeng.com/#docs/module
 */
