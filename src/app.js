/* 
   整个应用程序的入口
*/

import ReactDOM from "react-dom";
import React from "react";
import configureStore from "./redux/configureStore";
import {Provider} from "react-redux";
import {syncHistoryWithStore} from "react-router-redux";
//import {hashHistory} from "react-router"; react-router 4.0 no loanger use it 
import {createBrowserHistory,createHashHistory,createMemoryHistory} from "history";
import routes from "./routes/";

const store = configureStore();
const history = createBrowserHistory();//syncHistoryWithStore(,store);

ReactDOM.render(<Provider store={store}>{routes(history)}</Provider>
    ,document.getElementById("root"));