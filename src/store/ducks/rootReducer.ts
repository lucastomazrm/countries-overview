import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import countries from './country';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  countries,
});
