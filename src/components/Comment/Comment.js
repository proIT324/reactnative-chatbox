import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SubComment from '../SubComment';

import styles from './styles';

class Comment extends Component {
  state = {
    fade: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  onReply() {
    const {
      commentID,
      setParentID,
      setInputFocus,
      setLastParentID,
    } = this.props;
    setParentID(commentID);
    setLastParentID(commentID);
    setInputFocus(true);
  }

  onToggleLike() {
    const { liked, commentID, setLiked } = this.props;
    let payload = {
      commentID,
      value: !liked,
    };
    setLiked(payload);
  }

  renderSubComments() {
    const {
      subComments,
      commentID,
      setParentID,
      setSubCommentLiked,
      setInputFocus,
      setLastParentID,
      maxindex,
    } = this.props;
    let originalList = [];
    for (let i = 0; i < maxindex; i++) {
      if (subComments[i + 1]) originalList.push(subComments[i + 1]);
    }
    let subCommentsList = [];

    originalList.map((item, index) => {
      console.log('subcommentItem--->', item);
      subCommentsList.push(
        <SubComment
          key={index}
          commentID={commentID}
          subCommentID={item.subCommentID}
          poster={item.poster}
          content={item.content}
          liked={item.liked}
          setParentID={setParentID}
          setLastParentID={setLastParentID}
          setSubCommentLiked={setSubCommentLiked}
          setInputFocus={setInputFocus}
        />,
      );
    });
    return subCommentsList;
  }
  render() {
    const {
      container,
      avatar,
      textbox,
      interactions,
      interact,
      text,
      text_active,
      text_white,
      text_black,
      poster_active,
      poster_inactive,
    } = styles;
    const { liked, poster, content } = this.props;
    const gradientLiked = ['#5656ff', '#568eff'];
    const gradeintUnliked = ['#f4f6fa', '#f4f6fa'];
    return (
      <View>
        <View style={container}>
          <Image
            style={avatar}
            source={{
              uri:
                'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
            }}
          />
          <View style={textbox}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0.0, 0.99]}
              colors={liked ? gradientLiked : gradeintUnliked}
              style={liked ? text_active : text}
            >
              <View>
                <Text style={liked ? poster_active : poster_inactive}>
                  {poster}
                </Text>
                <Text style={liked ? text_white : text_black}>{content}</Text>
              </View>
            </LinearGradient>
            <View style={interactions}>
              <Text>15h</Text>
              <TouchableOpacity onPress={() => this.onToggleLike()}>
                <Text style={interact}>{liked ? 'Unlike' : 'Like'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onReply()}>
                <Text style={interact}>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.renderSubComments()}
      </View>
    );
  }
}

export default Comment;
