import axios from "axios";

export const POST = "POST";
export const POST_SUCCESS = "POST_SUCCESS";
export const FETCH_NEWPOST = "FETCH_NEWPOST";
export const FETCH_NEWPOST_SUCCESS = "FETCH_NEWPOST_SUCCESS";

export const fakePost = payload => {
  return async dispatch => {
    const { title, content } = payload;
    if (title === "admin" && content === "123") {
      dispatch({
        type: POST_SUCCESS,
        payload
      });
      dispatch(getNewPost());
    } else {
      alert("thanh cong!");
    }
  };
};

export const getNewPost = () => {
  return async dispatch => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data
    });
  };
};