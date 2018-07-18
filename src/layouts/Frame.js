import React , {Component} from "react";
import {Route,Switch} from "react-router-dom";
import Nav from "./Nav";

import Home from "../views/Home";
import Detail from "../views/Detail";

//查看redux状态
import DevTools from "../redux/DevTools";

/* 

react-router 4.0 与之前的3.0 参看文档

*/

class Frame extends Component{
	render(){
		return <div className="frame">
			<section className="header">
				<Nav />
			</section>
			<section className="container">
			   <div>
				<Route path='/' component={Home} exact={true} />
				<Route path='/detail' component={Detail} />
			  </div>
			</section>
			<DevTools />
		</div>;
	}
}

export default Frame;