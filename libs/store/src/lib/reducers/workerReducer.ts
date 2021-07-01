import { expose } from 'comlink';
import { combineReducers } from 'redux';
import paymentsReducer from './payments/reducer';

const asyncReducer = combineReducers({
  payments: paymentsReducer,
});

expose(asyncReducer);
