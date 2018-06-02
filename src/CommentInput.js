import React, { Component } from 'react';
import PropTypes from 'prop-types'
class CommentInput extends Component {
  
  static propTypes = {
    onSubmit: PropTypes.func,
    
  }
  
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: ''
    }
  }

  componentWillMount() {
    this._loadUsername()
  }
  componentDidMount() {
    this.textarea.focus()
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleUsernameBlur(e) {
    this._saveUsername(e.target.value);
  }

  _saveUsername(value) {
    localStorage.setItem('username', value);
    
  }
  _loadUsername(){
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({username})
    };
  }

  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit() {
    if (this.props.onSubmit) {
      const {username, content} = this.state;
      this.props.onSubmit({
        username,
        content,
        createdTime: +new Date()
      })
    }
    this.textarea.focus()
    this.setState({content: ''})
    
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
              onBlur={this.handleUsernameBlur.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>内容评论：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
              ref={textarea=>{this.textarea = textarea}}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;