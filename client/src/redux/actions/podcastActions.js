import axios from 'axios';

// Action to fetch all podcasts
export const fetchPodcasts = () => async dispatch => {
    try {
        const res = await axios.get('/api/podcasts');
        dispatch({
            type: 'FETCH_PODCASTS',
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};
