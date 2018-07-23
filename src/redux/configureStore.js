import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import {routerReducer} from "react-router-redux";
//import ThunkMiddleware from "redux-thunk"; //返回函数的异步处理
// import promiseMiddleware  from "redux-promise"; //处理返回promise
// import promiseMiddleware from "redux-promise-middleware"; //利用redux-promise-middle来实现
import createSagaMiddleware from "redux-saga"
import rootReducer,{listActions} from "./reducers";
//import saga
import {sagaGetData} from "../components/Home/PreviewListRedux"
import DevTools from "./DevTools"

debugger;
console.log()

const sagaMiddleware = createSagaMiddleware();

const finalCreateStore = compose(
    //applyMiddleware(promiseMiddleware()), 
    applyMiddleware(sagaMiddleware),
    //启用带有monitors(监视显示)的DevTools
    DevTools.instrument()
)(createStore);

const reducer = combineReducers(Object.assign({},rootReducer,{routing:routerReducer}));

export default function configureStore(initialState){
    const store = finalCreateStore(reducer,initialState);
    sagaMiddleware.run(sagaGetData)
    return store;
}