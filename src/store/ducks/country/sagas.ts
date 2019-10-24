import { call, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { push } from 'connected-react-router';
import {
  requestFailure, loadAllCountriesSuccess,
} from './actions';
import { Country } from './types';
import FetchService, { ComonError } from '../../../services/FetchService';

const fetchApi = new FetchService('https://restcountries.eu/rest/v2/');

export function* getCountries({ payload }: AnyAction) {
  try {
    let uri = 'all';
    if (payload) {
      uri = `region/${payload}`;
    }
    const { data, error }: { data: Country[]; error: ComonError } = yield call(fetchApi.get.bind(fetchApi), uri);
    if (error) {
      yield put(requestFailure(error.Message));
    } else {
      yield put(loadAllCountriesSuccess(data));
    }
  } catch (error) {
    yield put(requestFailure(error));
  }
}
