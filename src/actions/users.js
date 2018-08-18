import * as usersAction from '../enums/usersAction';

export const fetchUsers = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        response.json().then(payload => {
          dispatch({
            type: usersAction.FETCH_USERS_SUCCESS,
            payload,
          })
        });
      })
      .then(error => {
        dispatch({
          type: usersAction.FETCH_USERS_ERROR,
          payload: error
        })
      })
  }
}
