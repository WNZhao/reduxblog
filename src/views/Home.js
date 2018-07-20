import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import PreviewList from "../components/Home/PreviewList";
import {listActions} from "./HomeRedux";

class Home extends Component{
	render(){
		return (<div>
			<h1>Home</h1>
			<PreviewList
			  {...this.props.list}
			
			  getDataNew = {this.props.getDataNew}
			/>
		</div>);

	}
}


export default connect(state=>{
	return {
		list:state.home.list,
	}
},(dispatch)=>{
	
	return {
		//listActions:bindActionCreators(listActions,dispatch) //use redux-thunk
		//getData:()=>dispatch(listActions.getData()) //use redux-promise type1
	/* 	getDataNew:()=>{
			console.log(listActions.getDataNew())
			dispatch(listActions.getDataNew())
		} */
	}
})(withRouter(Home));