/* 
  Home页面所有相关组件的reducer和actionCreator的汇聚
*/
import {combineReducers} from 'redux';
import list from '../components/Home/PreviewListRedux';

export default combineReducers({
    list
});
export * as listAction from '../components/Home/PreviewListRedux';