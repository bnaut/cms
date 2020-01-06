const initialState = {
  loggedIn: false,
}

function auth(state = initialState, action) {
  
  switch (action.type) {
    case 'TOGGLE_LOGIN':
      return {
        ...state,
        loggedIn: !state.loggedIn,
      }

    default:
      return state
  }
};

export default auth;
