
import {put,call} from 'redux-saga/effects';
//redux-saga用法
export function* sagaGetData(){
    yield put({type:"LOAD_ARTICLES"})
    try{
      const list = yield fetch('./api/articles.json')
      .then(response => response.json());
      console.log(list,"@@@@@")
     yield put({type:"LOAD_ARTICLES_SUCCESS",payload:{articleList: list}})
    }catch(err){
      yield  put({type:"LOAD_ARTICLES_ERROR",err})
    }
}