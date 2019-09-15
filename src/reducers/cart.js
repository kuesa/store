import { combineReducers } from 'redux';
import * as reducers from './reducers';

const cart = combineReducers(reducers);

export default cart;