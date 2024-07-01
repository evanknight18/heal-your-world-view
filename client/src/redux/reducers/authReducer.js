const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOADED':
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case 'LOGIN_SUCCESS':
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user,
                error: null
            };
        case 'AUTH_ERROR':
        case 'LOGIN_FAIL':
        case 'REGISTER_FAIL':
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
