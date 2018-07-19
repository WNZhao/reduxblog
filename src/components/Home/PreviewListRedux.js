
const initialState = {
    loading: true,
    error: false,
    articleList: []
};

const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

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