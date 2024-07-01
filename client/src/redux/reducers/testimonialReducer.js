const initialState = {
    testimonials: [],
    loading: true
};

const testimonialReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TESTIMONIALS':
            return {
                ...state,
                testimonials: action.payload,
                loading: false
            };
        case 'CREATE_TESTIMONIAL':
            return {
                ...state,
                testimonials: [ ...state.testimonials, action.payload ],
                loading: false
            };
        default:
            return state;
    }
};

export default testimonialReducer;
