import React, { Component } from 'react';
import Comment from './Comment'
class CommentList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     comments: [
  //       {username: 'AAA', content: 'Hello'},
  //       {username: 'BBB', content: 'World'},
  //       {username: 'CCC', content: 'Javascript'}
  //     ]
  //   }
  // }
  static defaultProps = {
    comments: []
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map((comment, i) => {
            return (
              <div>
                <Comment
                  key={i}
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