/* 
  纯渲染无状态组件
*/

import React,{Component} from "react";
import "./Preview.css";

export default class Preview extends Comment{
    static propTypes = {
        title:React.propTypes.string,
        link:React.propTypes.string
    };

    render(){
        return <article className="article-preview-item">
            <h1 className="title">{this.props.title}</h1>
            <span className="date">{this.props.date}</span>
            <p className="desc">{this.props.description}</p>
        </article>
    }
}