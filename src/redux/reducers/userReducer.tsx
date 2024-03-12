const initialState = {
  userData: {},
  isLoggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_DATA':
      return {
        ...state,
        userData: action.payload.userData,
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
