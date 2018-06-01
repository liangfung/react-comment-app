import React, { Component } from 'react';
import Comment from './Comment'
class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  constructor(props) {
    super(props);
    this.state = {
      content: '子组件'
    }
  }

  handleClick() {
    this.setState({content: '更新了'})
  }

  render() {
    console.log('commenglist render')
    return (
      <div>
        {
          this.props.comments.map((comment, i) => {
            return (
              <div key={i}>
                <button onClick={this.handleClick.bind(this)}>一级子组件{this.state.content}</button>
                <Comment
                  comment={comment}
                />
                
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CommentList;