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

  componentWillMount() {
    this._loadComments()
  }

  handleSubmitContent(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    let arr = [...this.state.comments, comment];
    this._saveComments(arr);
    this.setState({
      comments: arr
    });

  }

  _saveComments(comments){
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  _loadComments(){
    let comments = localStorage.getItem('comments');
    if (comments) {
      comments = JSON.parse(comments);
      if (comments && comments.length) {
        this.setState({comments})
      }
    }
  }

  handleDeleteComment(index){
    const arr = [...this.state.comments];
    arr.splice(index, 1);
    this._saveComments(arr);
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
          onDeleteComment={this.handleDeleteComment.bind(this)}
        />
      </div>
    )
  }
}

export default ComponentApp;