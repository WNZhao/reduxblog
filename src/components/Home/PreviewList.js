import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';


class PreviewList extends Component {

  componentDidMount(){
      //this.props.loadArticles(); //redux-chunk
      this.props.getData(); //redux-promise type1
  }
  
  render() {
    const {loading,error,articleList} = this.props;
    if(error){
        return <div className="message">Oops, something is wrong</div>
    }  
    if(loading){
        return <div className="message">Loading....</div>
    } 
    return (this.props.articleList.map(item=>(<Preview key={item.id} {...item} />)))
  }
}

PreviewList.defaultProps = {
    loading:false,
    error:false,
    loadArticles:()=>{},
    articleList:[]
}

PreviewList.propTypes={
    loading:PropTypes.bool,
    error:PropTypes.bool,
    loadArticles:PropTypes.func,
    articleList:PropTypes.arrayOf(PropTypes.object)
}

export default PreviewList
