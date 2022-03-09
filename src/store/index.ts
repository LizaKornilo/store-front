import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './productReduser';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
