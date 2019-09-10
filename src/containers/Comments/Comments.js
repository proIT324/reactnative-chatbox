/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  commentChanged,
  sendComment,
  setParentID,
  setLiked,
  setSubCommentLiked,
  setLastComment,
  setInputFocus,
  setLastParentID,
} from '../../actions';

import { CommentsPage } from '../../pages';

class Comments extends Component {
  getCommentsArray() {
    const { lastParentID, comments, maxindex } = this.props;
    let originalList = [];
    for (let i = 0; i < maxindex; i++) {
      if (comments[i + 1]) originalList.push(comments[i + 1]);
    }
    let resultList = [];
    if (lastParentID) {
      for (let item of originalList) {
        resultList.push(item);
        if (item.comment.commentID === lastParentID) {
          break;
        }
      }
    } else {
      resultList = originalList;
    }

    return resultList;
  }
  render() {
    const {
      tempComment,
      authUser,
      toWhom,
      lastCommentFlag,
      lastParentID,
      inputFocus,
      commentChanged,
      sendComment,
      setParentID,
      setLiked,
      setSubCommentLiked,
      setLastComment,
      setLastParentID,
      setInputFocus,
      maxindex,
    } = this.props;
    return (
      <CommentsPage
        authUser={authUser}
        comments={this.getCommentsArray()}
        maxindex={maxindex}
        commentChanged={commentChanged}
        tempComment={tempComment}
        toWhom={toWhom}
        inputFocus={inputFocus}
        lastCommentFlag={lastCommentFlag}
        lastParentID={lastParentID}
        sendComment={sendComment}
        setParentID={setParentID}
        setLiked={setLiked}
        setSubCommentLiked={setSubCommentLiked}
        setLastComment={setLastComment}
        setInputFocus={setInputFocus}
        setLastParentID={setLastParentID}
      />
    );
  }
}

const mapStateToProps = state => ({
  maxindex: state.comments.indexVal,
  comments: state.comments,
  tempComment: state.temp.comment,
  toWhom: state.temp.toWhom,
  inputFocus: state.temp.inputFocus,
  authUser: state.auth.authUser,
  lastCommentFlag: state.temp.lastCommentFlag,
  lastParentID: state.temp.lastParentID,
});

const mapDispatchToProps = {
  commentChanged,
  sendComment,
  setParentID,
  setLiked,
  setSubCommentLiked,
  setLastComment,
  setInputFocus,
  setLastParentID,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
