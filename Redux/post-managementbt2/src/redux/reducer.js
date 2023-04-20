const initialState = {
    Newpost: [],
    NewPostadd: {}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_SUCCESS:
        return { ...state, NewPostadd: action.payload };
      case FETCH_USER_SUCCESS:
        return { ...state, Newpost: action.payload };
    }
  
    return state;
  };
  
  export default rootReducer;