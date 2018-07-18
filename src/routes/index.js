/* 
  使用react router 4.0 

*/

import React from "react";
import {Router, Route} from "react-router-dom"; //BrowserRouter 使用createBrowserHistory 
import Frame from "../layouts/Frame";

const routes = (history)=>(<Router history={history}>
  <Route path='/' component={Frame}></Route>
</Router>);



export default routes;