import {
  COMMENT_CHANGED,
  SEND_COMMENT,
  SET_PARENT_ID,
  SET_SUBCOMMENT_ID,
  SET_LIKED,
  SET_SUBCOMMENT_LIKED,
  SET_LAST_COMMENT,
  SET_INPUT_FOCUS,
  SET_LAST_PARENT_ID,
} from './types';

export const commentChanged = text => ({
  type: COMMENT_CHANGED,
  payload: text,
});

export const sendComment = payload => ({
  type: SEND_COMMENT,
  payload,
});

export const setLiked = payload => ({
  type: SET_LIKED,
  payload,
});

export const setSubCommentLiked = payload => ({
  type: SET_SUBCOMMENT_LIKED,
  payload,
});

export const setParentID = payload => ({
  type: SET_PARENT_ID,
  payload,
});

export const setSubCommentID = payload => ({
  type: SET_SUBCOMMENT_ID,
  payload,
});

export const setLastComment = payload => ({
  type: SET_LAST_COMMENT,
  payload,
});

export const setLastParentID = payload => ({
  type: SET_LAST_PARENT_ID,
  payload,
});

export const setInputFocus = payload => ({
  type: SET_INPUT_FOCUS,
  payload,
});
