import axios from 'axios';

export const LOGOUT = 'LOGOUT';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';

export const ERROR = 'ERROR';

// const baseUrl = 'http://localhost:3333'

export const loggingIn = (login, password) => dispatch => {
  dispatch({
    type: LOGIN_START
  });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/users/login', {
      username: login,
      password: password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};

export const loggingOut = () => {
  localStorage.clear();
  return {
    type: LOGOUT
  };
};

export const signingUp = (login, password) => dispatch => {
  dispatch({
    type: SIGNUP_START
  });
  return axios
    .post('https://spotify-ss-backend.herokuapp.com/api/users/register', {
      username: login,
      password: password
    })
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: SIGNUP_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
