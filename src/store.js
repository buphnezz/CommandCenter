import { configureStore, combineReducers } from 'redux';
import novelReducer from './reducers/novelReducer';

const rootReducer = combineReducers({
  novels: novelReducer,
  // add other reducers here
});

const characterReducer = combineReducers({
  novels: novelReducer,
  // add other reducers here
});


const store = configureStore(rootReducer);

export default store;
