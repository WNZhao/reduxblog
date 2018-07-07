import React , {Component} from "react";
import {Route} from "react-router-dom";
import Nav from "./Nav";

import Home from "../views/Home";
import Detail from "../views/Detail";

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