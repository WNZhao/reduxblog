import React from "react";
//import {Router,Route,IndexRoute,hashHistory} from "react-router-dom";
import { HashRouter, Route, hashHistory, Switch } from 'react-router-dom';

import Home from "../views/Home";
import Detail from "../views/Detail";

const routes = (<HashRouter history={hashHistory}><Switch>
	<Route exact path='/' component={Home} />
	<Route path="/detail" component={Detail}/>
</Switch></HashRouter>);



export default routes;