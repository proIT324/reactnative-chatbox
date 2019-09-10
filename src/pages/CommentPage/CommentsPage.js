import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
} from 'react-native';
import { Comment, InputBox } from '../../components';
import Icons from '../../assets/icons';

import styles from './styles';

class CommentsPage extends Component {
  state = {
    fade: new Animated.Value(0),
  };

  componentDidUpdate(prevProps) {
    if (prevProps.lastCommentFlag !== this.props.lastCommentFlag) {
      this.state.fade.setValue(0);
      Animated.timing(this.state.fade, {
        toValue: 1,
        duration: 2000,
      }).start();
    }
  }

  renderComments() {
    const {
      comments,
      setParentID,
      setLastParentID,
      setLiked,
      setSubCommentLiked,
      commentChanged,
      setInputFocus,
      maxindex,
    } = this.props;
    let commentsList = [];
    comments.map(item => {
      commentsList.push(
        <Comment
          key={item.comment.commentID}
          commentID={item.comment.commentID}
          poster={item.poster}
          content={item.comment.content}
          liked={item.comment.liked}
          subComments={item.comment.subComments}
          setParentID={setParentID}
          setLastParentID={setLastParentID}
          setLiked={setLiked}
          setSubCommentLiked={setSubCommentLiked}
          commentChanged={commentChanged}
          setInputFocus={setInputFocus}
          maxindex={maxindex}
        />,
      );
    });
    return commentsList;
  }

  render() {
    const {
      container,
      commentContainer,
      headerContainer,
      rightIcon,
      leftIcon,
      headerTitle,
      commentList,
      contentbox,
    } = styles;
    let { fade } = this.state;
    const translateYInterpolate = fade.interpolate({
      inputRange: [0, 1],
      outputRange: [80, 0],
    });
    let animatedStyle = {
      transform: [{ translateY: translateYInterpolate }],
    };
    const {
      commentChanged,
      tempComment,
      sendComment,
      authUser,
      toWhom,
      inputFocus,
      setParentID,
      setLastComment,
      comments,
      setLiked,
      setSubCommentLiked,
      setInputFocus,
      setLastParentID,
    } = this.props;
    return (
      <KeyboardAvoidingView behavior="position">
        <View style={container}>
          <View style={headerContainer}>
            <Image source={Icons.BackIcon} style={leftIcon} />
            <Text style={headerTitle}>Comments</Text>
            <Image source={Icons.BackIcon} style={rightIcon} />
          </View>
          <View style={contentbox}>
            <View style={commentContainer}>
              <ScrollView
                ref={ref => (this.scrollView = ref)}
                onContentSizeChange={() => {
                  this.scrollView.scrollToEnd({ animated: false });
                }}
              >
                <Animated.View style={animatedStyle}>
                  <View style={commentList}>{this.renderComments()}</View>
                </Animated.View>
              </ScrollView>
              <InputBox
                tempComment={tempComment}
                authUser={authUser}
                toWhom={toWhom}
                commentChanged={commentChanged}
                sendComment={sendComment}
                setParentID={setParentID}
                setLastParentID={setLastParentID}
                setLastComment={setLastComment}
                inputFocus={inputFocus}
                setInputFocus={setInputFocus}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default CommentsPage;
