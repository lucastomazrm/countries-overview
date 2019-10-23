import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware, RouterState } from 'connected-react-router';

import history from '../routes/history';
import { CountryState } from './ducks/country/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  router: RouterState;
  countries: CountryState;
}

const sagaMiddleware = createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history);

const middlewares = [sagaMiddleware, routerMiddleware];

const store: Store<ApplicationState> = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares),
);

sagaMiddleware.run(rootSaga);

export default store;
