/* 
  汇总整个应用的所有的reducer,汇总也很简单，因为我们在views文件夹中已经对各个路由需要的reducer做过一次整理聚合所以直接引用views/*Redux.js的默认导出即可
*/

import home from "../views/HomeRedux";


export default {
    home
}