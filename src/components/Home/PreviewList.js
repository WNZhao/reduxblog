import React, { Component } from 'react';
import Preview from './Preview';

export default class PreviewList extends Component {
  static propTypes={
      articleList:React.PropTypes.arrayOf(React.Proptypes.object)
  }  
  render() {
    return (this.props.articleList.map(item=>(<Preview {...item} key={item.id} />)))
  }
}
