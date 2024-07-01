import axios from 'axios';

// Action to fetch all coaching sessions
export const fetchCoachingSessions = () => async dispatch => {
    try {
        const res = await axios.get('/api/coaching');
        dispatch({
            type: 'FETCH_COACHING_SESSIONS',
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};

// Action to create a new coaching session
export const createCoachingSession = (sessionData) => async dispatch => {
    try {
        const res = await axios.post('/api/coaching', sessionData);
        dispatch({
            type: 'CREATE_COACHING_SESSION',
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};
