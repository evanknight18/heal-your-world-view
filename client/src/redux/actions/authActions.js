import axios from 'axios';

export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/auth/me');
        dispatch({
            type: 'USER_LOADED',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'AUTH_ERROR',
            payload: err.response.data.msg
        });
    }
};

// Login User
export const loginUser = (formData) => async dispatch => {
    try {
        const res = await axios.post('/api/auth/login', formData);
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'LOGIN_FAIL',
            payload: err.response.data
        });
    }
};

// Register User
export const registerUser = (formData) => async dispatch => {
    try {
        const res = await axios.post('/api/auth/register', formData);
        dispatch({
            type: 'REGISTER_SUCCESS',
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: 'REGISTER_FAIL',
            payload: err.response.data
        });
    }
};