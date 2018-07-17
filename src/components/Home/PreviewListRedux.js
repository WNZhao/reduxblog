
const initialState = {
    loading: true,
    error: false,
    articleList: []
};

const LOAD_ARTICLES = "LOAD_ARTICLES";
const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
const LOAD_ARTICLES_ERROR = "LOAD_ARTICLES_ERROR";

export function loadArticles() {
    return {
        //types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        type:LOAD_ARTICLES,
        url: '/api/articles.json'
    }
}

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