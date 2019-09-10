import {
  COMMENT_CHANGED,
  SET_PARENT_ID,
  SET_SUBCOMMENT_ID,
  SET_LAST_COMMENT,
  SET_INPUT_FOCUS,
  SET_LAST_PARENT_ID,
} from '../actions/types';

const INITIAL_STATE = {
  comment: '',
  toWhom: null,
  subCommentID: null,
  lastCommentFlag: null,
  inputFocus: false,
  lastParentID: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMMENT_CHANGED:
      return {
        ...state,
        comment: action.payload,
      };
    case SET_PARENT_ID:
      return {
        ...state,
        toWhom: action.payload,
      };
    case SET_SUBCOMMENT_ID:
      return {
        ...state,
        subCommentID: action.payload,
      };
    case SET_LAST_COMMENT:
      return {
        ...state,
        lastCommentFlag: action.payload,
      };
    case SET_LAST_PARENT_ID:
      return {
        ...state,
        lastParentID: action.payload,
      };
    case SET_INPUT_FOCUS:
      return {
        ...state,
        inputFocus: action.payload,
      };
    default:
      return state;
  }
};
