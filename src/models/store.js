import {createStore, applyMiddleware} from 'redux';
import {reducer2} from './reducer2';
import thunk from 'redux-thunk';
export const centralStore = createStore(reducer2,applyMiddleware(thunk));
