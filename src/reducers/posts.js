import * as postsAction from '../enums/postsAction';

export default (state = [], action) => {
  switch(action.type) {
    case postsAction.FETCH_POSTS_SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
