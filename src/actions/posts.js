import * as postsAction from '../enums/postsAction';

export const fetchPosts = () => {
  return (dispatch) => {
    //dispatch({ type: postsAction.FETCH_POSTS });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        response.json().then(payload => {
          dispatch({
            type: postsAction.FETCH_POSTS_SUCCESS,
            payload,
          })
        });
      })
      .then(error => {
        dispatch({
          type: postsAction.FETCH_POSTS_ERROR,
          payload: error
        })
      })
  }
}
