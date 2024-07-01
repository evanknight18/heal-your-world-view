import axios from 'axios';

// Action to fetch all testimonials
export const fetchTestimonials = () => async dispatch => {
    try {
        const res = await axios.get('/api/testimonials');
        dispatch({
            type: 'FETCH_TESTIMONIALS',
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};

// Action to create a new testimonial
export const createTestimonial = (testimonialData) => async dispatch => {
    try {
        const res = await axios.post('/api/testimonials', testimonialData);
        dispatch({
            type: 'CREATE_TESTIMONIAL',
            payload: res.data
        });
    } catch (err) {
        console.error(err.message);
    }
};
