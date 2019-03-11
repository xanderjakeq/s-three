import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const ERROR = 'ERROR';

// const baseUrl = 'http://localhost:3333'

export const actionCreatorThunk = (login, password) => dispatch => {
    dispatch({
        type: LOGIN_START
    });
    axios
        .post()
        .then(res => {
            console.log(res);
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
