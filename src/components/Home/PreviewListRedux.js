import axios from "axios";

const initialState = {
    loading: true,
    error: false,
    articleList: []
};

const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

export function loadArticles() {

    const success = (articleList) => {
        dispatch({
            type: 'LOAD_ARTICLES_SUCCESS',
            payload: {articleList:articleList.data}
        })
        return result
    }

    const fail = (err) => {
        dispatch({
            type: 'LOAD_ARTICLES_ERROR',
            payload:err
        })
        return err
    }
    //两种模式， Async\Await 的更加直观和简洁，是未来的趋势。但是目前，还需要利用babel的 transform-async-to-module-method 插件来转换其成为浏览器支持的语法，虽然没有性能的提升，但对于代码编写体验要更好
    return dispatch => {
        return axios.get('./api/articles.json')
        .then(success)
        .catch(fail)
    }
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