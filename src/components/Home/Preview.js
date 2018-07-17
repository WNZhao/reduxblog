/* 
  纯渲染无状态组件
*/

import React,{Component} from "react";
import PropTypes from 'prop-types'; //see https://reactjs.org/docs/typechecking-with-proptypes.html  has moved into a different package since React v15.5. Please use the prop-types library instead.
import "./Preview.css";


class Preview extends Comment{
    render(){
        return <article className="article-preview-item">
            <h1 className="title">{this.props.title}</h1>
            <span className="date">{this.props.date}</span>
            <p className="desc">{this.props.description}</p>
        </article>
    }
}

Preview.defaultProps = {
    title:'',
    date:'',
    description:''
};
Preview.propTypes = {
    title:PropTypes.string,
    date:PropTypes.string,
    description:PropTypes.string
}


export default Preview