/* 
  使用react router 4.0 

*/

import React from "react";
import { HashRouter, Route, hashHistory, Switch} from "react-router-dom";
import Frame from "../layouts/Frame";

const routes = (<HashRouter history={hashHistory}><Switch>
	<Route path='/' component={Frame}></Route>
</Switch></HashRouter>);



export default routes;