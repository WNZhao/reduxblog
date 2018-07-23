
import {put,call} from 'redux-saga/effects';
//redux-saga用法
export function* sagaGetData(){
    yield put({type:LOAD_ARTICLES})
    try{
      const list = yield fetch('./api/articles.json')
      .then(response => response.json());
      put({type:LOAD_ARTICLES_SUCCESS,payload:{articleList: json}})
    }catch(err){
        put({type:LOAD_ARTICLES_ERROR,err})
    }
}