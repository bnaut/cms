const initialState = {
  loggedIn: false,
  user: null,
}

function auth(state = initialState, action) {
  
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: action.loggedInStatus
      }

    default:
      return state
  }
};

export default auth;
