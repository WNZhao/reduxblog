/* 
  组件里将显示所有导航链接。
*/

import React,{Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component{
	render(){
		return <nav>
			<Link to="/">Home</Link> 
			<Link to="/detail">Detail</Link>
		</nav>;
	}
}

export default Nav;