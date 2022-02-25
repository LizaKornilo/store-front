import { createStore, combineReducers } from 'redux';
import userReduser from './userReduser';

export const rootReducer = combineReducers({
  user: userReduser,
});

export const store = createStore(rootReducer);
