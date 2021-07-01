import { combineReducers } from 'redux';

import paymentsReducer from './payments/reducer';

const appReducer = combineReducers({
  payments: paymentsReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
