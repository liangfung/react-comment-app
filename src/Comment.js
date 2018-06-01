import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'comment'
    }
  }
  handleClick() {
    this.setState({content: 'update'})
  }
  componentWillReceiveProps(nextProps) {
    console.log('comment rceive props')
  }
  render() {
    console.log('comment item render');
    return (
      <div className='comment'>
        <div className='comment-user'>
          {/* <span>{this.props.comment.username}</span>： */}
          <span>no nextProps</span>
        </div>
        {/* <p>{this.props.comment.content}</p> */}
        <button onClick={this.handleClick.bind(this)}>二级子组件--{this.state.content}</button>
      </div>
    );
  }
}

export default Comment;