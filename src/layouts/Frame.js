import React , {Component} from "react";
import {Route} from "react-router-dom";
import Nav from "./Nav";

import Home from "../views/Home";
import Detail from "../views/Detail";

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
				<Route path='/' component={Home} exact={true} />
				<Route path='/detail' component={Detail} />
			</section>
		</div>;
	}
}

export default Frame;