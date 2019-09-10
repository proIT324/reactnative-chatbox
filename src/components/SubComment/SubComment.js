import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

class SubComment extends Component {
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
    const { liked, commentID, subCommentID, setSubCommentLiked } = this.props;
    let payload = {
      parentCommentID: commentID,
      subCommentID,
      subliked: !liked,
    };
    setSubCommentLiked(payload);
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
    console.log('subcomment RenderLiked-->', liked);
    const gradientLiked = ['#5656ff', '#568eff'];
    const gradeintUnliked = ['#f4f6fa', '#f4f6fa'];
    return (
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
    );
  }
}

export default SubComment;
