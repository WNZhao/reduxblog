/* 
  Home页面所有相关组件的reducer和actionCreator的汇聚
  它默认导出的是当前路由需要的所有reducer的集合。
*/
import {combineReducers} from 'redux';
import list from '../components/Home/PreviewListRedux';
import * as lsActions from '../components/Home/PreviewListRedux'

export default combineReducers({
    list
});

export let listActions = lsActions;