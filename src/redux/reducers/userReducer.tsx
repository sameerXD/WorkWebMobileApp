const initialState = {
  userData: {},
  isLogined: false,
  isLoading: false,
  leaveHistory: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'USER_DATA':
      return {
        ...state,
        userData: action.payload.userData,
      };
    case 'USER_LOGINED':
      return {
        ...state,
        isLogined: action.payload.isLogined
      };
      case 'USER_LOGINED_LOADING':
        return {
          ...state,
          isLoading: action.payload.isLoading
        }
        case 'LEAVE_HISTORY':
        return {
          ...state,
          leaveHistory: action.payload.leaveHistory
        }
    default:
      return state;
  }
};

export default userReducer;
