import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coachingReducer from './coachingReducer';
import podcastReducer from './podcastReducer';
import testimonialReducer from './testimonialReducer';

export default combineReducers({
    auth: authReducer,
    coaching: coachingReducer,
    podcasts: podcastReducer,
    testimonials: testimonialReducer
});
