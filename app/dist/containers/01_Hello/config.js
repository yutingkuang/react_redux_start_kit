import View from './view';
import View2 from './view2';

export default {
  router: [
    {
      path: '/welcome',
      component: View
    },
    {
      path: '/welcome2/:idd/:pwd',
      component: View2
    }
  ]
};

/**
 * Config.js 是 Container 的設定檔，在此設定該 Container 的路徑以及對應檔案
 * 專案建置時系統會掃描所有 Containers 的 Config.js 進行合併 (阿熊自己寫的script)
 *
 * router 
 * @param path [路徑，需以 / 為開頭]
 * @param component [畫面]
 * 
 * 當頁面為多筆時，使用陣列格式
 * ex.
 * router: [{
 *   path: '/demo',
 *   component: Demo
 * }, {
 *   path: '/demo/:id',
 *   component: DemoSub
 * }]
 *  
 *  //在view 裡面取得/path裡面的參數 如下
 *  console.log(this.props.match.params);  // {id:"xx"}
 */
