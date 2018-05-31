import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput'

class ComponentApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

export default ComponentApp;