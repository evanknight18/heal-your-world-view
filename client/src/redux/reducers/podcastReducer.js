const initialState = {
    podcasts: [],
    loading: true
};

const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PODCASTS':
            return {
                ...state,
                podcasts: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default podcastReducer;
