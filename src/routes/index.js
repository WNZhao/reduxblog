import React from "react";
//import {Router,Route,IndexRoute,hashHistory} from "react-router-dom";
import { HashRouter, Route, hashHistory, Switch,IndexRoute} from "react-router-dom";

import Home from "../views/Home";
import Detail from "../views/Detail";
import Frame from "../layouts/Frame";

const routes = (<HashRouter history={hashHistory}><Switch>
	<Route path='/' component={Frame}>
		<IndexRoute component={Home}></IndexRoute>
		<Route path="/detail" component={Detail}/>
	</Route>
</Switch></HashRouter>);



export default routes;