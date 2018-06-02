import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Comment extends Component {

  static propTypes = {
    comment: PropTypes.object
  }

  constructor(){
    super();
    this.state = {
      timeString: ''
    }
  }
  componentWillMount() {
    this._updateTimestring();
    this.timer = setInterval(this._updateTimestring.bind(this), 5000)
  }
  componentWillReceiveProps(nextProps) {
    console.log('comment rceive props')
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  _updateTimestring(){
    const {createdTime = +new Date()} = this.props.comment;
    let duration = (+new Date() - createdTime)/1000;
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration/60)}分钟前`
        : `${Math.round(Math.max(duration, 1))}秒前`
    })
  }

  handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render() {
    console.log('comment item render');
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username}</span>：
        </div>
        <p>{this.props.comment.content}</p>
        <span className='comment-: +new Date()'>
          {this.state.timeString}
        </span>
        <span
          onClick={this.handleDeleteComment.bind(this)}
          className='comment-delete'>
          删除
        </span>
      </div>
    );
  }
}

export default Comment;