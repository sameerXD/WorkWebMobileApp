const initialState = {
  counter: 0,
  isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_COUNTER':
      return {
        ...state,
        counter: action.payload.counter,
      };
    case 'USER_LOGGEDIN':
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      }
    default:
      return state;
  }
};

export default userReducer;
