import {createStore,combineReducers,compose,applyMiddleware} from "redux";
import {routerReducer} from "react-router-redux";
import ThunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import DevTools from "./DevTools"


const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware),
    //启用带有monitors(监视显示)的DevTools
    DevTools.instrument()
)(createStore);
const reducer = combineReducers(Object.assign({},rootReducer,{routing:routerReducer}));



export default function configureStore(initialState){
    const store = finalCreateStore(reducer,initialState);
    return store;
}