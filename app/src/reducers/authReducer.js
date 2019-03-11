import * as actions from '../actions';

const initialState = {
  logginIn: false,
  isAuthenticated: false,
  hasError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_START:
      return {
        ...state,
        logginIn: true
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        logginIn: false,
        isAuthenticated: true
      };
    case actions.ERROR:
      return {
        ...state,
        logginIn: false,
        hasError: true
      };
    default:
      return state;
  }
};

