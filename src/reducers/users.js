import * as usersAction from '../enums/usersAction';

export default (state = {}, action) => {
  switch(action.type) {
    case usersAction.FETCH_USERS_SUCCESS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
