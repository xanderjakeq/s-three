import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const ERROR = 'ERROR';

// const baseUrl = 'http://localhost:3333'

export const loggingIn = (login, password) => dispatch => {
    dispatch({
        type: LOGIN_START
    });
    return axios
        .post(`https://spotify-ss-backend.herokuapp.com/api/users/login`, {
            username: login, 
            password: password
        })
        .then(res => {
            console.log(res);
            console.log('Token:');
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            });
        });
};

// export const actionCreator = () => {
//   return {
//     type: ACTION,
//     payload: data
//   }
