
const initialState = {
    loading: true,
    error: false,
    articleList: []
};

//const for thunk
const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

//const for promise
const GET_DATA = "GET_DATA";

//通过redux-thunk来实现异步
export function loadArticles() {
   //处理异步请求 方式一 redux-chunk return 函数
   return function(dispatch){
    const success = (response) => {
        console.log(JSON.parse(response.data));
        dispatch({
            type: 'LOAD_ARTICLES_SUCCESS',
            payload: {articleList:JSON.parse(response.data)}
        })
    }

    const fail = (err) => {
        dispatch({
            type: 'LOAD_ARTICLES_ERROR',
            payload:err
        })
    }

    fetch('./api/articles.json')
    .then(response => response.json())
    .then(json =>{
        console.log(json)
        dispatch({
            type: 'LOAD_ARTICLES_SUCCESS',
            payload: {articleList:json}}
        )
    });
  };
 
}

//通过redux-promise来处理 action for getData 中间件使得方法可以接受Promise对象作为参数：
//这时有两种写法 1.直接返回一个promise对象，2.返回的对象的payload属性是一个promise对象，这时需要
export const getData = function(dispatch,arg1){
    console.log(arguments)
    debugger;
    
   return (dispatch)=>new Promise((resolve,reject)=>{
        dispatch({type:LOAD_ARTICLES});
        fetch('./api/articles.json')
        .then(response => response.json())
        .then(json =>{
            console.log(json)
            resolve(json)
            dispatch({
                type: 'LOAD_ARTICLES_SUCCESS',
                payload: {articleList:json}}
            )
        })
        .catch((e)=>{
            reject('get data error');
            dispatch({
                type: 'LOAD_ARTICLES_ERROR',
                payload:e
            })
        })
   })
}




//todo

function previewList(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES:
            return Object.assign({},state,{
                loading: true,
                error: false
            })
        case LOAD_ARTICLES_SUCCESS:
            return  Object.assign({},state,{
                loading: false,
                error: false,
                articleList:action.payload.articleList,
            });
        case LOAD_ARTICLES_ERROR:
            return  Object.assign({},state,{
                loading: false,
                error: true,
            });

        default:
            return state;
    }
}

export default previewList