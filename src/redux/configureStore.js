import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import {routerReducer} from "react-router-redux";
//import ThunkMiddleware from "redux-thunk"; //返回函数的异步处理
import promiseMiddleware  from "redux-promise"; //处理返回promise
import rootReducer from "./reducers";
import DevTools from "./DevTools"


const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware), 
    //启用带有monitors(监视显示)的DevTools
    DevTools.instrument()
)(createStore);
const reducer = combineReducers(Object.assign({},rootReducer,{routing:routerReducer}));

export default function configureStore(initialState){
    const store = finalCreateStore(reducer,initialState);
    return store;
}