import {
  SEND_COMMENT,
  SET_LIKED,
  SET_SUBCOMMENT_LIKED,
} from '../actions/types';

const INITIAL_STATE = {
  indexVal: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_COMMENT:
      const { poster, parentID, content } = action.payload;
      if (!parentID) {
        const newCommentID = state.indexVal + 1;
        const newComment = {
          poster,
          comment: {
            commentID: newCommentID,
            content,
            liked: false,
            subComments: [],
          },
        };
        return {
          ...state,
          indexVal: newCommentID,
          [newCommentID]: newComment,
        };
      }
      const newSubCommentID = state.indexVal + 1;
      const newSubComment = {
        subCommentID: newSubCommentID,
        poster,
        content,
        liked: false,
      };
      return {
        ...state,
        indexVal: newSubCommentID,
        [parentID]: {
          ...state[parentID],
          comment: {
            ...state[parentID].comment,
            subComments: {
              ...state[parentID].comment.subComments,
              [newSubCommentID]: newSubComment,
            },
          },
        },
      };
    case SET_LIKED:
      const { commentID, value } = action.payload;
      return {
        ...state,
        [commentID]: {
          ...state[commentID],
          comment: {
            ...state[commentID].comment,
            liked: value,
          },
        },
      };
    case SET_SUBCOMMENT_LIKED:
      const { parentCommentID, subCommentID, subliked } = action.payload;
      console.log('subcommentLikeReducer--->', action.payload);
      return {
        ...state,
        [parentCommentID]: {
          ...state[parentCommentID],
          comment: {
            ...state[parentCommentID].comment,
            subComments: {
              ...state[parentCommentID].comment.subComments,
              [subCommentID]: {
                ...state[parentCommentID].comment.subComments[subCommentID],
                liked: subliked,
              },
            },
          },
        },
      };
    default:
      return state;
  }
};
