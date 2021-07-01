import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { withAsyncReducer } from './middleware/workerMiddleware';
import getAsyncReducer from './worker/rootAsyncReducer';
import rootReducer from './reducers/rootReducer';
import paymentsFacade from './reducers/payments/facade';
import {
  paymentsTableFormat,
  paymentsTableFilter,
} from './reducers/payments/actions';

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

function getStore(initialState): Store {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(withAsyncReducer(getAsyncReducer), thunk))
  );
}

const actions: any = {
  paymentsTableFormat,
  paymentsTableFilter,
};

const facade: any = {
  paymentsFacade,
};

export { getStore, actions, facade };
