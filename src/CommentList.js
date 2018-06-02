import React, { Component } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'
class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }

  handleDeleteComment(index) {
    this.props.onDeleteComment(index)
  }

  render() {
    console.log('commenglist render')
    return (
      <div>
        {
          this.props.comments.map((comment, i) => {
            return (
              <div key={i}>
                <Comment
                  comment={comment}
                  key={i}
                  index={i}
                  onDeleteComment={this.handleDeleteComment.bind(this)}
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