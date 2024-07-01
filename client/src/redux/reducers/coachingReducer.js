const initialState = {
    sessions: [],
    loading: true
};

const coachingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COACHING_SESSIONS':
            return {
                ...state,
                sessions: action.payload,
                loading: false
            };
        case 'CREATE_COACHING_SESSION':
            return {
                ...state,
                sessions: [ ...state.sessions, action.payload ],
                loading: false
            };
        default:
            return state;
    }
};

export default coachingReducer;
