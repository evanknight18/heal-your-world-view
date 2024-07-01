import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk'; // Named import for thunk
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

// Check if Redux DevTools extension is available, otherwise use default compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;

