import React, { Component } from 'react';
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import uuid from 'uuid';
import Icons from '../../assets/icons';
import styles from './styles';

class InputBox extends Component {
  setFocus() {
    const { inputFocus } = this.props;
    if (inputFocus) {
      this.input.focus();
    }
  }
  onChangeText(text) {
    const { commentChanged } = this.props;
    commentChanged(text);
  }
  onSendComment() {
    const {
      sendComment,
      authUser,
      tempComment,
      toWhom,
      setParentID,
      commentChanged,
      setLastComment,
      setLastParentID,
    } = this.props;

    const payload = {
      parentID: toWhom,
      poster: authUser,
      content: tempComment,
    };

    sendComment(payload);
    setParentID(null);
    setLastComment(uuid.v4());
    commentChanged('');
    if (!toWhom) {
      setLastParentID(null);
    }
  }

  onBlurInput() {
    const { setInputFocus, setLastParentID } = this.props;
    setInputFocus(false);
    setLastParentID(null);
  }
  render() {
    const { container, textinput, sender } = styles;
    const { tempComment } = this.props;
    this.setFocus();
    return (
      <View style={container}>
        <TextInput
          onChangeText={this.onChangeText.bind(this)}
          style={textinput}
          value={tempComment}
          placeholder={'Write a comment...'}
          onBlur={() => this.onBlurInput()}
          ref={x => (this.input = x)}
        />
        <TouchableOpacity onPress={() => this.onSendComment()}>
          <Image source={Icons.Sender} style={sender} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default InputBox;
