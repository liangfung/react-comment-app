import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput'

class ComponentApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []  // comments放在父组件，状态提升
    }
  }

  handleSubmitContent(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    let arr = [...this.state.comments, comment];
    this.setState({
      comments: arr
    })
  }

  render() {
    console.log('commentapp render')
    return (
      <div className='wrapper'>
        <CommentInput
          onSubmit={this.handleSubmitContent.bind(this)}
        />
        <CommentList
          comments={this.state.comments}
        />
      </div>
    )
  }
}

export default ComponentApp;